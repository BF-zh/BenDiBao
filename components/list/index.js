// components/article-list/index.js
/*
  {
    title:"生活指南",
    subMenu:[{
      text:"菜单",
      url:""
    }],
    list:[
      {
        title:"我是标题",
        time:"2023-06-06 18:32",
        imageSrc:"",
        url:""
      }
    ]
  }
*/
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"我是标题"
    },
    subMenu:{
      type:Array,
      value:[]
    },
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  options: {
    addGlobalClass: true,
  }
})
