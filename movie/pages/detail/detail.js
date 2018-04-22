Page({
  data: {
    movieDetail: {},
    time: '',
    copyright: '© TJG'
  },
  
  onLoad (options) {
    let id = options.id;
    
    wx.showLoading({
      title: '加载中',
    });

    wx.request({
      url: `https://db.miaov.com/doubanapi/v0/movie/detail/${id}`,
      success: (res)=>{
        //console.log(res);

        let movieDetail = res.data.data;
        this.setData({ movieDetail });

        wx.hideLoading(); //加载成功隐藏loading

      }
    })
  },

  //分享
  /**
   onShareAppMessage (res) {
    console.log(res);
  },
  */


});