'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  CalendarIcon, 
  DocumentTextIcon, 
  BeakerIcon, 
  ClipboardDocumentListIcon,
  UserIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline'

interface QuickAction {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  path: string
  color: string
}

const quickActions: QuickAction[] = [
  {
    id: 'appointments',
    title: 'Appointments',
    description: 'Schedule or manage your appointments',
    icon: <CalendarIcon className="h-6 w-6" />,
    path: '/appointments',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'records',
    title: 'Medical Records',
    description: 'View your medical history and reports',
    icon: <DocumentTextIcon className="h-6 w-6" />,
    path: '/records',
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'lab',
    title: 'Laboratory',
    description: 'Check lab results and schedule tests',
    icon: <BeakerIcon className="h-6 w-6" />,
    path: '/lab',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    description: 'View prescriptions and order medications',
    icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
    path: '/pharmacy',
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 'doctors',
    title: 'Doctors',
    description: 'Find and consult with doctors',
    icon: <UserIcon className="h-6 w-6" />,
    path: '/doctors',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: 'messages',
    title: 'Messages',
    description: 'Chat with your healthcare providers',
    icon: <ChatBubbleLeftIcon className="h-6 w-6" />,
    path: '/messages',
    color: 'bg-indigo-100 text-indigo-600'
  }
]

interface UpcomingEvent {
  id: string
  title: string
  date: string
  time: string
  type: 'appointment' | 'lab-test' | 'medication'
}

const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'evt-1',
    title: 'Appointment with Dr. James Bond',
    date: '2024-02-25',
    time: '10:00 AM',
    type: 'appointment'
  },
  {
    id: 'evt-2',
    title: 'Blood Test',
    date: '2024-02-20',
    time: '09:30 AM',
    type: 'lab-test'
  },
  {
    id: 'evt-3',
    title: 'Medication Refill Due',
    date: '2024-02-18',
    time: '',
    type: 'medication'
  }
]

export default function HomePage() {
  const router = useRouter()
  const [greeting, setGreeting] = useState(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  })

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">{greeting}, Sarah</h1>
        <p className="text-gray-600">Here's an overview of your health dashboard</p>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={() => router.push(action.path)}
              className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`p-3 rounded-lg ${action.color}`}>
                {action.icon}
              </div>
              <div className="ml-4 text-left">
                <h3 className="font-medium">{action.title}</h3>
                <p className="text-sm text-gray-500">{action.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <span className="font-medium">Next 7 Days</span>
              <button className="text-primary hover:text-primary/80 text-sm">
                View Calendar
              </button>
            </div>
          </div>
          <div className="divide-y">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-500">
                      {event.date} {event.time && `• ${event.time}`}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs ${
                    event.type === 'appointment' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'lab-test' ? 'bg-purple-100 text-purple-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {event.type.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}