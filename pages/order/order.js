Page({
  data: {
    showTopTips: false,

    Info:{
    Sex:'女',
    School:'文学院',
    Name:'',
    QQ:'',
    Tel:'',
    Date:'2016-09-01',
    Time:'12:01',
    Type:'',
    Problem:''
    },

    radioItems: [
      { name: '男', value: '男' },
      { name: '女', value: '女', checked: true }
    ],
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' }
    ],
    Schools:[
      { name: '计算机与信息技术学院', value: '计算机与信息技术学院' },
      { name: '文学院', value: '文学院', checked: true },
      { name: '历史文化学院', value: '历史文化学院' },
      { name: '哲学社会学学院', value: '哲学社会学学院' },
      { name: '外国语学院', value: '外国语学院' },
      { name: '音乐学院', value: '音乐学院' },
      { name: '美术学院', value: '美术学院' },
      { name: '政治与公共管理学院', value: '政治与公共管理学院' },
      { name: '教育科学学院', value: '教育科学学院' },
      { name: '经济与管理学院', value: '经济与管理学院' },
      { name: '法学院', value: '法学院' },
      { name: '体育学院', value: '体育学院' },
      { name: '数学科学学院', value: '数学科学学院' },
      { name: '物理电子工程学院', value: '物理电子工程学院' },
      { name: '化学化工学院', value: '化学化工学院' },
      { name: '生命科学学院', value: '生命科学学院' },
      { name: '环境与资源学院', value: '环境与资源学院' },
      { name: '新闻学院', value: '新闻学院' },
      { name: '初民学院', value:' 初民学院' },
      { name: '国际教育交流学院', value: '国际教育交流学院' }
    ],

    date: "2016-09-01",
    time: "12:01",

    isAgree: false
  },
  showTopTips: function () {
    if (this.data.isAgree && this.data.Info.Name && this.data.Info.QQ && this.data.Info.Tel && this.data.Info.Type && this.data.Info.Problem){//检查是否完成表单
      console.log(this.data.Info)
      wx.request({
        url: 'http://ajacker.tpddns.cn:8080/TestServlet',
        success: function (res) {
          wx.showToast({
            title: '预约成功',
            icon: 'success',
            duration: 2000
          })
        },
        fail: function () {
          wx.showModal({
            title: '预约失败',
            content: '无法连接到服务器',
            showCancel: false,
          })
        },
        method: 'POST',
        data: { //POST表单数据
          Date: this.data.Info.Date, 
          Name: this.data.Info.Name,
          Problem: this.data.Info.Problem, 
          QQ: this.data.Info.QQ, 
          School: this.data.Info.School, 
          Sex: this.data.Info.Sex, 
          Tel: this.data.Info.Tel, 
          Time: this.data.Info.Time, 
          Type: this.data.Info.Type,
          Info:this.data.Info,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        dataType: "json",
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请同意条款并检查未填项',
        showCancel:false,
      })
    }

    var that = this;
    this.setData({
      showTopTips: true
    });

    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    this.data.Info.Sex = e.detail.value;//将选择值保存在Sex变量中
    //console.log(this.data.Info.Sex);
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  SchoolChange: function (e) {
    console.log('school发生change事件，携带value值为：', e.detail.value);
    this.data.Info.School = e.detail.value;//将选择值保存在School变量中
    var schools = this.data.Schools;
    for (var i = 0, len = schools.length; i < len; ++i) {
      schools[i].checked = schools[i].value == e.detail.value;
    }

    this.setData({
      Schools: schools
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    this.data.Info.Date = e.detail.value;//将选择值保存在Date变量中
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
    this.data.Info.Time = e.detail.value;//将选择值保存在Time变量中
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length//检测是否同意了条款,并作为boolean保存在isAgree变量
    });
  },
  bindNameInput:function(e){
    this.data.Info.Name = e.detail.value;//将键入值保存在Name变量中
  },
  bindQQInput: function (e) {
    this.data.Info.QQ = e.detail.value;//将键入值保存在QQ变量中
  },
  bindTelInput: function (e) {
    this.data.Info.Tel = e.detail.value;//将键入值保存在Tel变量中
  },
  bindTypeInput: function (e) {
    this.data.Info.Type = e.detail.value;//将键入值保存在Type变量中
  },
  bindProblemInput: function (e) {
    this.data.Info.Problem = e.detail.value;//将键入值保存在Problem变量中
  }
});