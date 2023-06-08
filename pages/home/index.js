// pages/home/index.js
import {
  getSystemInfo
} from '../../utils/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInit: false,
    mainOffsetTop: 0,
    opacity: 0,
    gridList: [{
        title: "办事攻略",
        src: "/static/bsgl.png",
        url: ""
      },
      {
        title: "出行攻略",
        src: "/static/cxgl.png",
        url: ""
      },
      {
        title: "找工作",
        src: "/static/zgz.png",
        url: ""
      },
      {
        title: "景点预约",
        src: "/static/jdyy.png",
        url: ""
      },
      {
        title: "学区划分",
        src: "/static/xqhf.png",
        url: ""
      },
      {
        title: "网点查询",
        src: "/static/wdcx.png",
        url: ""
      },
      {
        title: "常用查询",
        src: "/static/cycx.png",
        url: ""
      },
    ],
    hotList: [{
        title: "2023年全国各地高考作文解析汇总",
        indexColor: "#fe3842",
        hot: false
      },
      {
        title: "2023成都高新区石羊街道66消费节交子饭票领取",
        indexColor: "#ff9861",
        hot: false
      },
      {
        title: "成华区蓉善成家青年公寓保租房选房规则",
        indexColor: "#ffa12c",
        hot: false
      },
      {
        title: "四川教育管理服务平台官网（幼升小＋小升初)",
        indexColor: "#8888",
        hot: true
      },
    ],
    articleList: [{
        title: "生活指南",
        subMenu: [{
            text: "生活提醒",
            url: ""
          },
          {
            text: "动态",
            url: ""
          },
          {
            text: "关注民生",
            url: ""
          },
        ],
        list: [{
            title: "成都高新区交子饭票可以用来买手机吗？",
            time: "2023-06-07 17:01",
            imageSrc: "",
            url: ""
          },
          {
            title: "成都高新区交子饭票可以在红旗充话费吗？",
            time: "2023-06-07 16:55",
            imageSrc: "",
            url: ""
          },
          {
            title: "6月8日起成都交警启动臭氧重污染天气黄色预警临时交通管理措施",
            time: "2023-06-07 16:41",
            imageSrc: "/static/jtzn.jpeg",
            url: ""
          },
          {
            title: "成都高新交子饭票只能在高新区用吗？",
            time: "2023-06-07 16:31",
            imageSrc: "",
            url: ""
          },
        ]
      },
      {
        title: "交通",
        subMenu: [{
            text: "交通动态",
            url: ""
          },
          {
            text: "地铁",
            url: ""
          },
          {
            text: "交通概况",
            url: ""
          },
        ],
        list: [{
            title: "2023四川端午高速免费吗？",
            time: "2023-06-07 11:43",
            imageSrc: "/static/jtzn.jpeg",
            url: ""
          },
          {
            title: "2023成都端午节的高铁/火车票什么时候可以买？",
            time: "2023-06-07 17:30",
            imageSrc: "",
            url: ""
          },
          {
            title: "成都简阳市高考考点＋附近停车点推荐",
            time: "2023-06-07 10:51",
            imageSrc: "/static/xh.jpeg",
            url: ""
          },
          {
            title: "成都金堂高考考点附近限行具体地点",
            time: "2023-06-07 10:44",
            imageSrc: "/static/xh.jpeg",
            url: ""
          },
        ]
      },
      {
        title: "交通",
        subMenu: [{
            text: "交通动态",
            url: ""
          },
          {
            text: "地铁",
            url: ""
          },
          {
            text: "交通概况",
            url: ""
          },
        ],
        list: [{
            title: "成都高新区交子饭票可以用来买手机吗？",
            time: "2023-06-07 17:01",
            imageSrc: "",
            url: ""
          },
          {
            title: "成都高新区交子饭票可以在红旗充话费吗？",
            time: "2023-06-07 16:55",
            imageSrc: "",
            url: ""
          },
          {
            title: "6月8日起成都交警启动臭氧重污染天气黄色预警临时交通管理措施",
            time: "2023-06-07 16:41",
            imageSrc: "/static/jtzn.jpeg",
            url: ""
          },
          {
            title: "成都高新交子饭票只能在高新区用吗？",
            time: "2023-06-07 16:31",
            imageSrc: "",
            url: ""
          },
        ]
      },
      {
        title: "教育",
        subMenu: [{
            text: "升学",
            url: ""
          },
          {
            text: "学校",
            url: ""
          },
          {
            text: "教育信息",
            url: ""
          },
        ],
        list: [{
            title: "2023四川端午高速免费吗？",
            time: "2023-06-07 11:43",
            imageSrc: "/static/jtzn.jpeg",
            url: ""
          },
          {
            title: "2023成都端午节的高铁/火车票什么时候可以买？",
            time: "2023-06-07 17:30",
            imageSrc: "",
            url: ""
          },
          {
            title: "成都简阳市高考考点＋附近停车点推荐",
            time: "2023-06-07 10:51",
            imageSrc: "/static/xh.jpeg",
            url: ""
          },
          {
            title: "成都金堂高考考点附近限行具体地点",
            time: "2023-06-07 10:44",
            imageSrc: "/static/xh.jpeg",
            url: ""
          },
        ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  onPageScroll() {
    wx.createSelectorQuery().select('#main').boundingClientRect(({
      top
    }) => {
      const {
        isInit,
        mainOffsetTop
      } = this.data
      if (!isInit) {
        this.setData({
          isInit: true,
          mainOffsetTop: top
        })
      }
      if (top < 0) return this.setData({
        opacity: 1
      })
      this.setData({
        opacity: (mainOffsetTop - top) / (mainOffsetTop)
      })
    }).exec()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})