import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface TaskCardDetail {
  label: string
  value: string
}

interface TaskCardProps {
  icon: LucideIcon
  title: string
  tagText: string
  tagColor: 'green' | 'yellow' | 'red'
  details: TaskCardDetail[]
  bottomLeftContent: ReactNode
  buttonText: string
  buttonVariant: 'dark' | 'light' | 'black'
  buttonIcon?: ReactNode
  className?: string
}

const tagStyles: Record<TaskCardProps['tagColor'], string> = {
  green: 'bg-green-500 text-white',
  yellow: 'bg-yellow-400 text-gray-900',
  red: 'bg-red-500 text-white',
}

const buttonStyles: Record<TaskCardProps['buttonVariant'], string> = {
  dark: 'bg-[#ECECEC] text-gray-900',
  light: 'bg-gray-100 text-gray-900',
  black: 'bg-black text-white',
}

export default function TaskCard({
  icon: Icon,
  title,
  tagText,
  tagColor,
  details,
  bottomLeftContent,
  buttonText,
  buttonVariant,
  buttonIcon,
  className = '',
}: TaskCardProps) {
  return (
    <div
      className={`bg-white rounded-[20px] sm:rounded-[28px] px-4 sm:px-6 py-4 sm:py-5 shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-black/10">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
            <Icon className="w-4 h-4 text-gray-900" />
          </div>
          <h3 className="font-medium text-gray-900 truncate">{title}</h3>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${tagStyles[tagColor]}`}
        >
          {tagText}
        </span>
      </div>

      <div className="flex gap-3 py-3 sm:py-4 border-b border-black/10">
        {details.map((detail, i) => (
          <div
            key={detail.label}
            className={
              i === 2 ? 'flex-[0.5] max-w-[120px] min-w-0' : 'flex-1 min-w-0'
            }
          >
            <p className="text-xs text-gray-500">{detail.label}</p>
            <p className="text-sm font-medium text-gray-900 mt-0.5">
              {detail.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 pt-3 sm:pt-4">
        <div className="min-w-0">{bottomLeftContent}</div>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shrink-0 ${buttonStyles[buttonVariant]}`}
        >
          {buttonIcon}
          {buttonText}
        </button>
      </div>
    </div>
  )
}
