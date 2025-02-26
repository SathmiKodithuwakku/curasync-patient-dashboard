import Chat from '@/components/Chat'

export default function ChatPage({ params }: { params: { patientId: string } }) {
  return <Chat patientId={params.patientId} />
}