let types=[
  {
    name: '喜剧',
    img: '../../assets/image/xiju.png'
  },
  {
    name: '动作',
    img: '../../assets/image/dongzuo.png'
  },
  {
    name: '科幻',
    img: '../../assets/image/kehuan.png'
  },
  {
    name: '爱情',
    img: '../../assets/image/aiqing.png'
  },
  {
    name: '惊悚',
    img: '../../assets/image/jingsong.png'
  },
  {
    name: '动画',
    img: '../../assets/image/donghua.png'
  }
];

Page({
  data: {
    types: types,
  },

  typeMore: (e)=>{
    let { typeName } = e.currentTarget.dataset;

    wx.navigateTo({
      url: `../subject-list/subject-list?type=${typeName}`,
    });
  }

});