"use client";

import {
  IconBell,
  IconChevronDown,
  IconMessageCircle,
  IconSearch,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import Image from "next/image";
import UserKaynnandeson from "@/images/kaynnandeson.jpg";
import { useTheme } from "@/components/theme/ThemeContext";
import { useState } from "react";

export default function Header() {
  const { toggleTheme, isDarkMode } = useTheme();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleToggleNotifications = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between w-full px-10 py-2">
      <div className="flex items-center gap-3">
        <IconSearch width={14} />
        <input
          type="text"
          placeholder="Type to search..."
          className="px-1 outline-none text-xs placeholder:text-xs"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="botaoHeader justify-start p-[4px] rounded-[16px]  w-16">
          <button
            className={`flex items-center justify-center p-[1px] rounded-full h-6 w-6 transform transition-transform duration-300 ${
              isDarkMode
                ? "translate-x-8 bg-background text-slate-200"
                : "bg-white"
            }`}
            onClick={toggleTheme} 
          >
            {isDarkMode ? <IconMoon width={16} /> : <IconSun width={16} />}
          </button>
        </div>
        <div className="flex items-center gap-2 relative">
          <button className="botaoHeader" onClick={handleToggleNotifications}>
            <IconBell stroke={1.5} width={20} />
          </button>

          {isNotificationOpen && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-48">
              <h3 className="font-bold mb-2">Notificações</h3>
              <ul>
                <li className="text-sm">Nenhuma notificação</li>
              </ul>
            </div>
          )}

          <button className="botaoHeader relative">
            <IconMessageCircle stroke={1.5} width={20} />
            <span className="h-2 w-2 absolute rounded-full top-[1px] right-[2px] bg-red-500"></span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col justify-end text-xs">
            <span className="font-bold">Kaynnandeson</span>
            <span>Web Developer</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={UserKaynnandeson}
              width={45}
              height={45}
              alt="userImage"
              className="rounded-full"
            />
            <button>
              <IconChevronDown className="text-zinc-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
