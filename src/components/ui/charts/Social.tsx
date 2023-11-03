"use client"
import { Download_Icon, Upload_Icon } from '@/components/icons'
import { socialLineChart } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Social = () => {
    return (
        <div className='social'>
            {
                socialLineChart.map((social, idx) => (
                    <div className='container_social' key={idx}>
                        <div>
                            <div>
                                <span className='subtitle'>{social.upload}</span>
                                <Upload_Icon />
                            </div>
                            <div>
                                <span className='subtitle'>{social.download}</span>
                                <Download_Icon />
                            </div>
                        </div>
                        <div>
                            <p className='title'>{social.name}</p>
                            <Image src={social.icon} alt='' />
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Social