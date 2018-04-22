Page({
  data: {
    movies: [],
    page: 1,
    size: 6,
    loading: true
  },

  onShow (options) {
    this.setData({
      page: 1,
      movies: []
    });

    this.loadMovies();
  },

  //加载更多
  loadMovies() {
    let { size, page } = this.data;
    let history = wx.getStorageSync('history');
    let data = [];

    if (history) {
      for(let i=(page-1)*size; i<page*size; i++){
        if(history[i]){
          data.push(history[i]);
        }
      }
      this.getHistoryMovies(data);
    }

  },

  getHistoryMovies (data){

    this.setData({ loading: true }); //显示加载动画
    let movies = this.data.movies;

    for (let i = 0; i < data.length; i += 2) { //电影展示为两个一组
      movies.push([data[i], data[i + 1] ? data[i + 1] : null]);
    }
    this.setData({ movies, loading: false });

  },

  //滚动加载更多
  loadMore() {
    let { page } = this.data;
    this.setData({
      page: page + 1
    });
    this.loadMovies();
  },

  goDetail(e) {
    //console.log(e);
    let { movieData } = e.currentTarget.dataset;
    let {_id} = movieData;

    wx.navigateTo({
      url: `../detail/detail?id=${_id}`, //把上面的id传递过去，加上？id,再拼接上获取的id
    })
  }


})