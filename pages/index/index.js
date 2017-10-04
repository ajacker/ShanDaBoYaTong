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
    wx.closeSocket({
    })
    wx.onSocketClose(function (res) {
      console.log('WebSocket连接已关闭！')
    })
  },
  onShow:data=>{
    console.log("页面显示")
    /*
    wx.request({
      url: 'http://ajacker.tpddns.cn:8080/TestServlet',
      success: function (res) {
        console.log("request成功    信息为:"),
        console.log(res.data),
        console.log("状态码:"+res.statusCode)
      },
      data:[],
      method:'POST',
      data: { ID: "111", Name:"jack" },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
       },
      dataType:"json",
      fail: function () {
        console.log("request失败")
      }
    })
    wx.connectSocket({
      url: 'ws://ajacker.tpddns.cn:8080/websocket',
      method:"GET",
    })
    wx.onSocketOpen(function (res) {
      console.log('WebSocket连接已打开！')
      wx.sendSocketMessage({
        data: '你好啊~~',
        success: function () {
          console.log("成功发送")
        },
        fail: function () {
          console.log("发送失败")
        }
      })
    })
    wx.onSocketMessage(function(res){
      console.log('服务端发送的消息:'+res.data)
    })
    */
  },
  changeData:function () {
      this.setData({
        test:"OK"
      })
  }

})
