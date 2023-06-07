// pages/home/index.js
import {getSystemInfo } from '../../utils/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInit:false,
    mainOffsetTop:0,
    opacity:0,
    gridList:[
      {
        titel:"办事攻略",
        src:"/static/bsgl.png",
        url:""
      },
      {
        titel:"初出行攻略",
        src:"/static/cxgl.png",
        url:""
      },
      {
        titel:"找工作",
        src:"/static/zgz.png",
        url:""
      },
      {
        titel:"景点预约",
        src:"/static/jdyy.png",
        url:""
      },
      {
        titel:"学区划分",
        src:"/static/jdyy.png",
        url:""
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
  onPageScroll () {
    wx.createSelectorQuery().select('#main').boundingClientRect(({top})=>{
      const {isInit,mainOffsetTop} = this.data
      if(!isInit){
        this.setData({
          isInit:true,
          mainOffsetTop:top
        })
      }
      console.log((mainOffsetTop-top)/(mainOffsetTop));
      if(top<0) return this.setData({opacity:1})
      this.setData({opacity:(mainOffsetTop-top)/(mainOffsetTop)})
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