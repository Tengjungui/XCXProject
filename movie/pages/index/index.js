Page({
  data: {
    movies: [],
    page: 1,
    size: 6,
    loading: true
  },

  onLoad () {
    this.loadMovies();
  },

  //数据缓存
  saveData (data) {
    let history = wx.getStorageSync('history') || [];

    history = history.filter( (item)=>{
      return item._id !== data._id;
    });

    history.unshift(data);
    wx.setStorageSync('history', history);
  
  },

  loadMovies () {
    const {size, page} = this.data;

    //在数据出来之前显示loading
    this.setData({ loading: true });

    wx.request({
      url: `https://db.miaov.com/doubanapi/v0/movie/list?base=true&page=${page}&size=${size}`,
      success: (res)=> {
        //console.log(res)
        let {data} = res.data;
        let movies = this.data.movies || [];

        for(let i=0; i<data.length; i+=2){ //电影展示为两个一组
          movies.push([data[i], data[i+1] ? data[i+1] : null]);
        }

        this.setData({movies, loading: false});
      }
    })
  },

  //滚动加载更多
  loadMore () {  
    //console.log(1)
    let {page} = this.data;
    this.setData({ page: page+1 });

    this.loadMovies();
  },

  goDetail (e) {
    //console.log(e);
    let { movieData } = e.currentTarget.dataset;
    let { _id } = movieData;

    this.saveData( movieData );

    wx.navigateTo({
      url: `../detail/detail?id=${_id}`, //把上面的id传递过去，加上？id,再拼接上获取的id
    })

  },


})