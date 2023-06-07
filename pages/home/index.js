// pages/home/index.js
import {getSystemInfo } from '../../utils/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInit:false,
    navigationColor:"",
    name:"",
    mainOffsetTop:0,
    opacity:0,
    idNumber:"",
    navigetion:getSystemInfo(),
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
      const {isInit,mainOffsetTop,opacity,navigetion} = this.data
      const heigth = (navigetion.height+navigetion.statusBarHeight)
      if(!isInit){
        this.setData({
          isInit:true,
          mainOffsetTop:top-heigth
        })
      }
      if(top-heigth<0) return this.setData({opacity:1})
      opacity>.5?this.setData({navigationColor:"#000"}):this.setData({navigationColor:"#fff"})
      this.setData({opacity:(mainOffsetTop-(top-heigth))/mainOffsetTop})
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