import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Content } from '../../components/Content'

export const Status = () => {
    const status = [
        {
            id: 1,
            author: 'Mãe',
            PostedIn: 'Agora mesmo',
            postUri: 'https://i.pinimg.com/550x/23/9c/05/239c05c5dcbf173b8642432fe8e460f1.jpg',
            wasSeen: false,
        },
        {
            id: 2,
            author: 'Neymar',
            PostedIn: 'há 50 minutos',
            postUri: 'https://uploads.spiritfanfiction.com/fanfics/historias/202007/coisas-totalmente-aleatorias-20053924-290720201839.jpg',
            wasSeen: false,
        },
        {
            id: 3,
            author: 'Obama Brother',
            PostedIn: 'há 1 hora',
            postUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87_yvBdurTgP0fCIwXqlz_gelwZX0wKlQTyOLC0EbMhMDVJG0TXVKUTX1Dw7GTxUxFCs&usqp=CAU',
            wasSeen: true,
        },
        {
            id: 4,
            author: 'Mc Poze',
            PostedIn: 'ontem 20:07',
            postUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbcYkqnzlXBUOa8mHTpRva2iKLc5SKHCb3Q&usqp=CAU',
            wasSeen: false,
        },
        {
            id: 5,
            author: 'Elon Musk',
            PostedIn: 'ontem 23:13',
            postUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDy-dE8zfUxpl4g85rD6OO8CNqJ1hKH4yGA&usqp=CAU',
            wasSeen: false,
        },

    ]


    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} >
            {
                status.map(stat => {

                    if (!stat.wasSeen) {
                        return (
                            <Content
                                key={stat.id}
                                imageUri={stat.postUri}
                                title={stat.author}
                                description={stat.PostedIn}
                                status={true}
                                wasSeen={stat.wasSeen}
                            />
                        )
                    }
                    
                })
            }

            <Text style={{marginLeft: 10, marginVertical: 10, color: '#757575', fontWeight: 'bold'}}>Atualizações vistas</Text>

            {
                status.map(stat => {

                    if (stat.wasSeen) {
                        return (
                            <Content
                                key={stat.id}
                                imageUri={stat.postUri}
                                title={stat.author}
                                description={stat.PostedIn}
                                status={true}
                                wasSeen={stat.wasSeen}
                            />
                        )
                    }
                    
                })
            }


        </ScrollView>
    )
}