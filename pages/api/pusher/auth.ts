import {NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { pusherServer } from '@/app/libs/pusher'

export default async function handler(request:NextApiRequest, resposne: NextApiResponse) {
  const session = await getServerSession(request, resposne, authOptions)

  if(!session?.user?.email){
    return resposne.status(401)
  }

  const socketId = request.body.socket_id
  const channel = request.body.channel_name

  const  data = {
    user_id: session.user.email
  }

  const authResponse = pusherServer.authorizeChannel(socketId, channel, data)

  return resposne.send(authResponse)
}