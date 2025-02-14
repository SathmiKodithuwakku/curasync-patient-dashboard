'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  UserIcon, 
  BeakerIcon, 
  ClipboardDocumentListIcon,
  CalendarIcon,
  DocumentTextIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline'

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="w-64 bg-white border-r h-screen p-4">
      <div className="flex items-center mb-8">
        <img src="/logo.svg" alt="CuraSync" className="h-8" />
        <span className="ml-2 text-xl font-semibold text-primary">CuraSync</span>
      </div>
      
      <nav className="space-y-4">
        <Link 
          href="/doctors" 
          className={`flex items-center space-x-3 p-2 rounded-lg ${
            isActive('/doctors') 
              ? 'bg-primary text-white' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <UserIcon className="h-6 w-6" />
          <span>Doctors</span>
        </Link>

        <Link 
          href="/lab" 
          className={`flex items-center space-x-3 p-2 rounded-lg ${
            isActive('/lab') 
              ? 'bg-primary text-white' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <BeakerIcon className="h-6 w-6" />
          <span>Laboratory</span>
        </Link>

        <Link 
          href="/pharmacy" 
          className={`flex items-center space-x-3 p-2 rounded-lg ${
            isActive('/pharmacy') 
              ? 'bg-primary text-white' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ClipboardDocumentListIcon className="h-6 w-6" />
          <span>Pharmacy</span>
        </Link>

        <Link 
          href="/appointments" 
          className={`flex items-center space-x-3 p-2 rounded-lg ${
            isActive('/appointments') 
              ? 'bg-primary text-white' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <CalendarIcon className="h-6 w-6" />
          <span>Appointments</span>
        </Link>

        <Link 
          href="/records" 
          className={`flex items-center space-x-3 p-2 rounded-lg ${
            isActive('/records') 
              ? 'bg-primary text-white' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <DocumentTextIcon className="h-6 w-6" />
          <span>Medical Records</span>
        </Link>

        <Link 
          href="/messages" 
          className={`flex items-center space-x-3 p-2 rounded-lg ${
            isActive('/messages') 
              ? 'bg-primary text-white' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ChatBubbleLeftIcon className="h-6 w-6" />
          <span>Messages</span>
        </Link>
      </nav>

      <div className="absolute bottom-4 flex items-center space-x-3 p-4">
        <img
          src="https://ui-avatars.com/api/?name=Sarah+Johnson"
          className="h-10 w-10 rounded-full"
          alt="Patient profile"
        />
        <div>
          <p className="font-medium">Sarah Johnson</p>
          <p className="text-sm text-gray-500">Patient ID: P-12345</p>
        </div>
      </div>
    </div>
  )
}