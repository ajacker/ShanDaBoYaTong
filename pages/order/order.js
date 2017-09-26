Page({
  data: {
    showTopTips: false,

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

    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,

    countries: ["中国", "美国", "英国"],
    countryIndex: 0,

    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,

    isAgree: false
  },
  showTopTips: function () {
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

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
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
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  bindCountryChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryIndex: e.detail.value
    })
  },
  bindAccountChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);

    this.setData({
      accountIndex: e.detail.value
    })
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  }
});