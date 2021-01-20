import React from 'react'
import {} from 'react-native'
import { NeomorphBox } from 'react-native-neomorph-shadows'

export default function OperationButton() {
    return (
        <NeomorphBox style={{
            marginEnd: 10,
            marginTop: 20,
            shadowRadius: 4,
            borderRadius: 60,
            backgroundColor: '#F2F3F7',
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <NeomorphBox inner style={{
                shadowRadius: 7,
                borderRadius: 50,
                backgroundColor: '#FF686B',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                </NeomorphBox>
        </NeomorphBox>
    )
}