import React from 'react'
import { ScrollView } from 'react-native'
import { Content } from '../../components/Content'

export const Calls = () => {
    const calls = [
        {
            id: 1,
            author: 'João Gomes',
            date: 'Otem 15:27',
            type: 'call',
            image: 'https://uploads.metropoles.com/wp-content/uploads/2021/07/08161116/Joao-Gomes-1-600x400.jpg',
            proprieties: {
                type: 'call',
                answered: true,
                received: true
            },
        },
        {
            id: 2,
            author: 'Bin',
            date: '6 de dezembro 10:29',
            type: 'call',
            image: 'https://m.extra.globo.com/tv-e-lazer/24715567-37a-2ec/w640h360-PROP/mc-bin.jpg',
            proprieties: {
                type: 'video',
                answered: true,
                received: false
            },
        },
        {
            id: 3,
            author: 'Luciano Hulk',
            date: '5 de dezembro 14:06',
            type: 'video',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgo4yYGvWzJawqsFGCI3I1wcydxhkTEfvlQ9vh8lrvUBAd1rFSM4jVFDymuhIMj4XDi58&usqp=CAU',
            proprieties: {
                type: 'call',
                answered: false,
                received: true
            },
        },
        {
            id: 4,
            author: 'Caduuuuuu',
            date: '5 de dezembro 10:45',
            type: 'call',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbBJGoBUdNgXdlpi0MljeUug_Z7pUVsJ6dW6z442X_XJ0hivBPvFmtvpmmag1DddeEsA&usqp=CAU',
            proprieties: {
                type: 'call',
                answered: true,
                received: true
            },
        },
        
    ]

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}} >
            {
              calls.map(call => <Content key={call.id} imageUri={call.image} title={call.author} description={call.date} proprieties={call.proprieties} />)  
            }
        </ScrollView>
    )
}