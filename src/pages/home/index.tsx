import { useEffect } from 'react'
import { Canvas, View } from '@tarojs/components'
import { AtNoticebar } from 'taro-ui'
import uCharts from '@qiun/ucharts'

import './index.scss'
import Taro from '@tarojs/taro'

export default function Home() {
  let uChartsInstance = null

  useEffect(() => {
    const sysInfo = Taro.getSystemInfoSync()
    let cWidth = (750 / 750) * sysInfo.windowWidth
    //这里的 500 对应 css .charts 的 height
    let cHeight = (500 / 750) * sysInfo.windowWidth
    getServerData(cWidth, cHeight)
  }, [])

  function getServerData(w, h) {
    //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
    let res = {
      categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
      series: [
        {
          name: '成交量A',
          lineType: 'dash',
          data: [35, 8, 25, 37, 4, 20],
        },
        {
          name: '成交量B',
          data: [70, 40, 65, 100, 44, 68],
        },
        {
          name: '成交量C',
          data: [100, 80, 95, 150, 112, 132],
        },
      ],
    }
    initChart('tavxpqXapwnHBiWfkViclDzTAOMYnEUU', res, w, h)
  }

  function initChart(id, data, width, heigth) {
    let ctx = Taro.createCanvasContext(id)
    uChartsInstance = new uCharts({
      type: 'line',
      context: ctx,
      width: width,
      height: heigth,
      categories: data.categories,
      series: data.series,
      animation: true,
      background: '#FFFFFF',
      color: [
        '#1890FF',
        '#91CB74',
        '#FAC858',
        '#EE6666',
        '#73C0DE',
        '#3CA272',
        '#FC8452',
        '#9A60B4',
        '#ea7ccc',
      ],
      padding: [15, 10, 0, 15],
      enableScroll: false,
      legend: {},
      xAxis: {
        disableGrid: true,
      },
      yAxis: {
        gridType: 'dash',
        dashLength: 2,
      },
      extra: {
        line: {
          type: 'curve',
          width: 2,
          activeType: 'hollow',
        },
      },
    })
  }

  function tap(e) {
    ;(uChartsInstance as any).showToolTip(e, {
      formatter: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      },
    })
    // uChartsInstance[e.target.id].touchLegend(e)
    // uChartsInstance[e.target.id].showToolTip(e)
  }

  return (
    <View>
      <AtNoticebar marquee>
        这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
      </AtNoticebar>
      <Canvas
        canvas-id="tavxpqXapwnHBiWfkViclDzTAOMYnEUU"
        id="tavxpqXapwnHBiWfkViclDzTAOMYnEUU"
        onTouchEnd={tap}
        className="charts"
      />
    </View>
  )
}
