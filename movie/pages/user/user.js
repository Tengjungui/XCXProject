// pages/user/index.js
Page({
  data: {
    avatar: '',
    nickName: '未知',
    movies: [],
    country: '',  
    province: '',
    city: '',
    key: ''
  },

  onLoad () {

    wx.getUserInfo({
      success: (res)=> {
        //console.log(res);
        this.setData({ 
          avatar: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
          country: res.userInfo.country,
          province: res.userInfo.province,
          city: res.userInfo.city
        });

      }
    });

  },


  onShow () {
    let history = wx.getStorageSync('history');
    
    if (history) { //history里有数据
      this.setData({
        movies: history.slice(0, 2)  //从history数组里取出前两个
      })

    }

  },

  //分享页面
  goShare (){
    wx.navigateTo({
      url: `../share/share`,
    })
  },

  //更多历史记录
  historyMore(e) {
    wx.navigateTo ({
      url: `../history-list/history-list`,
    })
  },

  goDetail (e) {
    let { movieData } = e.currentTarget.dataset;
    let { _id } = movieData;
    
    wx.navigateTo({
      url: `../detail/detail?id=${_id}`,
    })
  }

  
})