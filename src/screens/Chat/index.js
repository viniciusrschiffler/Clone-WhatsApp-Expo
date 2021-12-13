import React from 'react'
import { ScrollView } from 'react-native'

import { Content } from '../../components/Content'

export const Chat = () => {

    const conversations = [
        {
            id: 1,
            name: 'Vinicius',
            image: 'https://avatars.githubusercontent.com/u/61471521?v=4',
            description: 'Fala ae mano',
            date: '17:00'
        },
        {
            id: 2,
            name: 'Ana',
            image: 'https://avatars.githubusercontent.com/u/89466535?v=4',
            description: 'iae?',
            date: '16:54'
        },
        {
            id: 3,
            name: 'Dani',
            image: 'https://avatars.githubusercontent.com/u/89459609?v=4',
            description: 'oiii',
            date: '14:02'
        },
        {
            id: 4,
            name: 'Natan',
            image: 'https://instagram.fgig14-1.fna.fbcdn.net/v/t51.2885-19/s150x150/26185665_195464127699297_17276664861949952_n.jpg?_nc_ht=instagram.fgig14-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=NdZHm1oYTgUAX-2Sbo4&edm=ABfd0MgBAAAA&ccb=7-4&oh=5a8f663dc928ab047a55f0dd05bb2da0&oe=61B9CE86&_nc_sid=7bff83',
            description: 'E o churrasco?',
            date: '12:01'
        },
        {
            id: 5,
            name: 'Paulo',
            image: 'https://avatars.githubusercontent.com/u/89466530?v=4',
            description: 'Fala cara',
            date: 'ontem'
        },
        {
            id: 6,
            name: 'Willian',
            image: 'https://avatars.githubusercontent.com/u/73251848?v=4',
            description: 'Eae mano',
            date: '07/12/2021'
        },
    ]

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} >

            {
                conversations.map(conversation => {
                    return (
                        <Content
                            key={conversation.id}
                            title={conversation.name}
                            description={conversation.description}
                            date={conversation.date}
                            imageUri={conversation.image}
                        />
                    )
                })
            }
        </ScrollView>

    )
}