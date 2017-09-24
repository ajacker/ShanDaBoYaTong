//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      gridIcons: [
          {icon:'text.png',text:'成绩查询',path:'/pages/score/score'},
          {icon:'electronics.png',text:'义疗预约',path:'/pages/order/order'},
          {icon:'ViewGallery.png',text:'失物招领',path:'/pages/lostandfound/lostandfound'},
          {icon:'agriculture.png',text:'便利服务',path:'/pages/convenient/convenient'},
          {icon:'auto.png',text:'交通查询',path:'/pages/traffic/traffic'},
          {icon:'Category.png',text:'信息公示',path:'/pages/message/message'},
          {icon:'earth.png',text:'查询服务',path:'/pages/query/query'},
          {icon:'password.png',text:'空自习室',path:'/pages/selfStudy/selfStudy'},
          {icon:'remind.png',text:'校园热点',path:'/pages/warm/warm'}
      ]
  },
  onLoad:data=>{
    console.log("页面加载");
  },
  onHide:data=>{
    console.log("页面隐藏");
  },
  onShow:data=>{
    console.log("页面显示")
  },
  changeData:function () {
      this.setData({
        test:"OK"
      })
  }
})
