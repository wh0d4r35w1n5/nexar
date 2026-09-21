import {
  BarChart2,
  Bell,
  ChevronDown,
  ChevronRight,
  Mic,
  Phone,
  Play,
  Sparkles,
  User,
} from 'lucide-react'
import TaskCard from './components/TaskCard'

const VIDEO_URL = 'https://media.promptsites.co/assets/9b597877f8a265f0.mp4'

const AVATARS = [
  'https://media.promptsites.co/assets/afae74f92b213164.webp',
  'https://media.promptsites.co/assets/bce342d758f8c609.webp',
  'https://media.promptsites.co/assets/714db1e26c1f4ee3.webp',
]

const COMMANDS = [
  'Review session notes and extract key discussion insights',
  'Generate PDF report with finished items from this week',
  'Update timeline view based on revised action items in sprint',
]

const WAVEFORM = [
  8, 16, 12, 28, 20, 36, 42, 24, 40, 16, 44, 32, 48, 28, 20, 36, 14, 32, 22, 40,
  18, 30, 12, 26, 16, 34, 20, 38, 24, 28, 16, 22, 12, 20, 8,
]

function AvatarStack({
  images,
  size = 'w-8 h-8',
}: {
  images: string[]
  size?: string
}) {
  return (
    <div className="flex -space-x-2">
      {images.map((src) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`${size} rounded-full border-2 border-white object-cover`}
        />
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen relative p-4 sm:p-6 lg:p-8 overflow-x-hidden text-gray-900">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <header
          className="animate-fade-up bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm flex items-center justify-between gap-3"
          style={{ animationDelay: '0s' }}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-black rounded-md grid grid-cols-2 place-items-center gap-[3px] p-1.5 shrink-0">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="w-1 h-1 bg-white rounded-full" />
              ))}
            </div>
            <span className="text-2xl sm:text-3xl font-serif-display leading-none">
              nexar
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-900">
              Workspace
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Actions
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Performance
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              AI Insights
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-gray-100 rounded-full p-1 flex items-center">
              <button className="px-3 sm:px-4 py-1.5 text-sm text-gray-500 rounded-full">
                Solo
              </button>
              <button className="px-3 sm:px-4 py-1.5 text-sm bg-black text-white rounded-full">
                Crew
              </button>
            </div>
            <button className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center shrink-0">
              <Bell className="w-4 h-4 text-white fill-white" />
            </button>
          </div>
        </header>

        {/* Section header row */}
        <section
          className="animate-fade-up flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-7 items-start lg:items-center border-b border-black/10 pb-4 sm:pb-6 mb-4 sm:mb-6 mt-4 sm:mt-6 lg:mt-8"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="lg:col-span-3 flex items-center gap-3">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center shrink-0">
              <User className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] font-serif-display leading-none">
              Hey, Alex!
            </h1>
          </div>
          <div className="lg:col-span-6 flex items-center">
            <h2 className="text-[20px] sm:text-[24px] lg:text-[26px] tracking-[-0.04em]">
              Active Items
            </h2>
          </div>
          <div className="lg:col-span-3 flex items-center gap-3 lg:justify-end">
            <span className="text-sm text-gray-600">Crew:</span>
            <AvatarStack images={AVATARS} />
            <span className="text-sm font-medium">+9</span>
          </div>
        </section>

        {/* Main grid */}
        <main className="flex flex-col lg:grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-7">
          {/* Left column */}
          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-6">
            <div
              className="animate-fade-up bg-[#DBECFC] rounded-full p-2 pr-4 flex items-center gap-3"
              style={{ animationDelay: '0.15s' }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                >
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                    stroke="#EAB308"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                    stroke="#EAB308"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-gray-900 leading-tight truncate">
                  Zenith Launch
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                  Product &amp; Strategy
                </p>
              </div>
              <ChevronDown className="w-5 h-5 ml-auto text-gray-700 shrink-0" />
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-[80px] sm:text-[100px] lg:text-[120px] xl:text-[140px] tracking-[-0.04em] leading-none">
                85%
              </p>
              <p className="text-sm sm:text-base text-gray-700 mt-1 sm:mt-2">
                Current efficiency
              </p>
            </div>

            <div
              className="animate-fade-up relative mb-2"
              style={{ animationDelay: '0.25s' }}
            >
              <div
                className="rounded-[20px] sm:rounded-[28px] p-4 sm:p-6 pb-12 min-h-[220px] sm:min-h-[260px] shadow-sm"
                style={{
                  backgroundImage:
                    "url('https://media.promptsites.co/assets/0e454c0141c5b927.webp')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center',
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">Sprint Metrics</h3>
                  <span className="bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-900">
                    Analytics
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-10 sm:mt-14">
                  <div>
                    <p className="text-xl sm:text-2xl font-medium text-gray-900">
                      26h
                    </p>
                    <p className="text-xs text-gray-700 mt-0.5">Sessions</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-medium text-gray-900">
                      11h
                    </p>
                    <p className="text-xs text-gray-700 mt-0.5">Standups</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-medium text-gray-900">
                      6h
                    </p>
                    <p className="text-xs text-gray-700 mt-0.5">Audits</p>
                  </div>
                </div>
              </div>
              <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full shadow-md flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Center column */}
          <div className="lg:col-span-6">
            <div className="flex flex-col gap-4 sm:gap-6 lg:w-[85%] xl:w-[85%] 2xl:w-[60%] mx-auto">
              <div
                className="animate-fade-up"
                style={{ animationDelay: '0.3s' }}
              >
                <TaskCard
                  icon={Phone}
                  title="Sprint Planning Call"
                  tagText="Session"
                  tagColor="green"
                  details={[
                    { label: 'Time', value: 'Today: 10:00 AM' },
                    { label: 'With', value: 'Product & Growth' },
                    { label: 'Alert', value: '15 min' },
                  ]}
                  bottomLeftContent={
                    <div className="flex items-center gap-2">
                      <AvatarStack images={AVATARS} size="w-7 h-7" />
                      <span className="text-sm font-medium">+7</span>
                      <span className="text-sm text-gray-500">
                        Set to begin?
                      </span>
                    </div>
                  }
                  buttonText="Enter session"
                  buttonVariant="dark"
                />
              </div>

              <div
                className="animate-fade-up"
                style={{ animationDelay: '0.35s' }}
              >
                <TaskCard
                  className="rotate-[2deg]"
                  icon={BarChart2}
                  title="Layout Critique"
                  tagText="Action"
                  tagColor="yellow"
                  details={[
                    { label: 'Focus', value: 'Zenith Platform' },
                    {
                      label: 'Details',
                      value: 'Verify the layout of landing screen',
                    },
                    { label: 'Due By', value: 'Mar 22' },
                  ]}
                  bottomLeftContent={
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Assignees:</span>
                      <AvatarStack images={AVATARS.slice(0, 2)} size="w-7 h-7" />
                    </div>
                  }
                  buttonText="Let AI begin"
                  buttonVariant="black"
                  buttonIcon={<Sparkles className="w-4 h-4" />}
                />
              </div>

              <div
                className="animate-fade-up"
                style={{ animationDelay: '0.4s' }}
              >
                <TaskCard
                  icon={Phone}
                  title="Zenith Crew Check"
                  tagText="Session"
                  tagColor="green"
                  details={[
                    { label: 'Time', value: 'Fri: 5:30 PM' },
                    { label: 'With', value: 'Sales Lead & Team' },
                    { label: 'Alert', value: '10 min' },
                  ]}
                  bottomLeftContent={
                    <div className="flex items-center gap-2">
                      <AvatarStack images={AVATARS} size="w-7 h-7" />
                      <span className="text-sm font-medium">+5</span>
                      <span className="text-sm text-gray-500">Scheduled</span>
                    </div>
                  }
                  buttonText="Show details"
                  buttonVariant="light"
                  buttonIcon={<ChevronRight className="w-4 h-4" />}
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-6">
            <div className="animate-fade-up" style={{ animationDelay: '0.45s' }}>
              <div className="flex items-center gap-2 sm:gap-3 mb-1">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center text-sm sm:text-base shadow-sm shrink-0">
                  ⭐️
                </div>
                <h3 className="text-[20px] sm:text-[24px] lg:text-[26px] xl:text-[30px] tracking-[-0.04em] whitespace-nowrap">
                  Fast commands
                </h3>
                <button className="ml-auto text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                  + Add Item
                </button>
              </div>
              <div>
                {COMMANDS.map((command, i) => (
                  <div
                    key={command}
                    className="animate-fade-up flex items-center justify-between gap-3 py-3 sm:py-4 border-t border-black/10"
                    style={{ animationDelay: `${0.5 + i * 0.05}s` }}
                  >
                    <p className="text-sm text-gray-700">{command}</p>
                    <Play className="w-4 h-4 fill-gray-700 text-gray-700 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="animate-fade-up relative mb-2"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="bg-[#DBECFC] rounded-[20px] sm:rounded-[28px] p-4 sm:p-6 pb-12">
                <span className="inline-block bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Audio Input
                </span>
                <h3 className="font-serif-display text-[26px] sm:text-[30px] mt-3 sm:mt-4 leading-tight">
                  Speak now to Nexar!
                </h3>
                <div className="flex items-center gap-[3px] mt-4 sm:mt-6 h-12">
                  {WAVEFORM.map((height, i) => (
                    <div
                      key={i}
                      className="w-0.5 bg-blue-400 rounded-full"
                      style={{ height: `${height * 0.8}px` }}
                    />
                  ))}
                </div>
              </div>
              <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full shadow-md flex items-center justify-center">
                <Mic className="w-4 h-4 text-gray-900" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
