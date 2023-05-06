import { useEffect } from 'react'
import { Canvas, View } from '@tarojs/components'
import { AtNoticebar } from 'taro-ui'

import './index.scss'

export default function Home() {
  useEffect(() => {
    initChart()

    return () => {
      console.log('卸载')
    }
  }, [])

  function initChart() {}

  return (
    <View>
      <AtNoticebar marquee>
        这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
      </AtNoticebar>
      <Canvas canvasId="myCanvas" style={{ width: '100vw', height: 300 }} />
    </View>
  )
}
