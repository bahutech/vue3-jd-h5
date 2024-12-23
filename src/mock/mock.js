const Mock = require('mockjs')

const hotData = {
  status: 0,
  data: [{
    title: 'Xiaomi mobile phone',
    hot: 1
  }, {
    title: 'notebook',
    hot: 1
  }, {
    title: 'computer',
    hot: 0
  }, {
    title: 'flat',
    hot: 0
  }, {
    title: 'LCD TV',
    hot: 1
  }, {
    title: 'Home appliances',
    hot: 0
  }, {
    title: 'Toy',
    hot: 0
  }]
}

const homeData = {
  status: 0,
  images: [{
    imgUrl: require('@/assets/image/home/banner5.jpg'),
    categoryId: 100018
  },
  {
    imgUrl: require('@/assets/image/home/banner6.jpg'),
    categoryId: 100008
  },
  {
    imgUrl: require('@/assets/image/home/banner7.jpg'),
    categoryId: 100016
  },
  {
    imgUrl: require('@/assets/image/home/banner8.jpg'),
    categoryId: 100035
  }
  ],
  images2: [{
    imgUrl: '//m.360buyimg.com/mobilecms/jfs/t1/3926/29/4138/254748/5b9b646dE45cbeb7f/f80c8f7c24273bc1.jpg!cr_1125x549_0_72',
    categoryId: 100035
  },

  {
    imgUrl: require('@/assets/image/home/test11.png'),
    categoryId: 100020
  },
  {
    imgUrl: require('@/assets/image/home/test10.png'),
    categoryId: 100019
  }
  ],
  tabList: [{
    title: 'Featured',
    name: 'Guess you like',
    list: [{
      name: 'Beauty and skin care products',
      img: require('@/assets/image/classifyNursing/美妆-1.png'),
      title: 'limited set New product launch',
      forceValue: 0.5,
      price: '$525'
    },
    {
      name: 'Beauty and skin care products',
      img: require('@/assets/image/classifyNursing/美妆-2.png'),
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$525'
    },
    {
      name: 'Beauty and skin care products',
      img: require('@/assets/image/classifyNursing/美妆-3.png'),
      title: 'limited set New product launch',
      forceValue: 1.9,
      price: '$525'
    },
    {
      name: 'Beauty and skin care products',
      img: require('@/assets/image/classifyNursing/美妆-4.png'),
      title: 'limited set New product launch',
      forceValue: 1.6,
      price: '$525'
    },
    {
      name: 'Beauty and skin care products',
      img: require('@/assets/image/classifyNursing/美妆-5.png'),
      title: 'limited set New product launch',
      forceValue: 2.3,
      price: '$525'
    },
    {
      name: 'Beauty and skin care products',
      img: require('@/assets/image/classifyNursing/美妆-6.png'),
      title: 'limited set New product launch',
      forceValue: 2.7,
      price: '$525'
    },

    {
      name: 'Multifunctional food processor',
      img: require('@/assets/image/home/test1.png'),
      title: 'limited set New product launch',
      forceValue: 0.5,
      price: '$125'
    },
    {
      name: 'Remote control air conditioning fan',
      img: require('@/assets/image/home/test2.png'),
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$245'
    },
    {
      name: 'fashionable backpack',
      img: require('@/assets/image/home/test3.png'),
      title: 'limited set New product launch',
      forceValue: 0.5,
      price: '$21'
    },
    {
      name: 'business suitcase',
      img: require('@/assets/image/home/test4.png'),
      title: 'limited set New product launch',
      forceValue: 2.7,
      price: '$218'
    },
    {
      name: 'wireless noise canceling headphones',
      img: require('@/assets/image/home/test5.png'),
      title: 'limited set New product launch',
      forceValue: 0.5,
      price: '$218'
    },
    {
      name: 'wireless bluetooth headphones',
      img: require('@/assets/image/home/test6.png'),
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$218'
    }
    ]
  },
  {
    title: 'Fashion',
    name: 'Trendy and versatile',
    list: [{
      name: 'active sportswear',
      img: require('@/assets/image/classifyNursing/运动装备-1.png'),
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$125'
    },
    {
      name: 'swiss watch',
      img: require('@/assets/image/classifyNursing/钟表-1.png'),
      title: 'limited set New product launch',
      forceValue: 0.5,
      price: '$245'
    },
    {
      name: 'mens shoes',
      img: require('@/assets/image/classifyNursing/男鞋1.png'),
      title: 'limited set New product launch',
      forceValue: 2.7,
      price: '$21'
    },
    {
      name: 'business suitcase',
      img: require('@/assets/image/home/test4.png'),
      title: 'limited set New product launch',
      forceValue: 0.5,
      price: '$218'
    },
    {
      name: 'wireless noise canceling headphones',
      img: require('@/assets/image/home/test5.png'),
      title: 'limited set New product launch',
      forceValue: 2.3,
      price: '$218'
    },
    {
      name: 'Luggage',
      img: require('@/assets/image/classifyNursing/箱包1.png'),
      title: 'limited set New product launch',
      forceValue: 2.3,
      price: '$218'
    },
    {
      name: 'water cup',
      img: require('@/assets/image/classifyNursing/水杯0.png'),
      title: 'limited set New product launch',
      forceValue: 2.7,
      price: '$218'
    },
    {
      name: 'wireless bluetooth headphones',
      img: require('@/assets/image/home/test6.png'),
      title: 'limited set New product launch',
      forceValue: 1.6,
      price: '$218'
    }
    ]

  },
  {

    title: 'digital',
    name: '3C digital',
    list: [{
      name: 'Thin and light notebook',
      img: '//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png',
      title: 'limited set New product launch',
      forceValue: 2.3,
      price: '$125'
    },
    {
      name: 'game notebook',
      img: '//img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png',
      title: 'limited set New product launch',
      forceValue: 0.5,
      price: '$125'
    },
    {
      name: 'multifunctional mobile phone',
      img: '//img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg',
      title: 'limited set New product launch',
      forceValue: 2.7,
      price: '$125'
    },
    {
      name: 'Full screen mobile phone',
      img: '//img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg',
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$245'
    },
    {
      name: 'gaming phone',
      img: '//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg',
      title: 'limited set New product launch',
      forceValue: 1.6,
      price: '$21'
    },
    {
      name: 'camera phone',
      img: '//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg',
      title: 'limited set New product launch',
      forceValue: 1.9,
      price: '$218'
    },
    {
      name: 'Elderly machine',
      img: '//img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$218'
    },
    {
      name: 'women mobile phone',
      img: '//img12.360buyimg.com/focus/s140x140_jfs/t15790/6/2311892256/2742/5ed77924/5a9fa728Nbff29ad2.jpg',
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$218'
    }
    ]
  },
  {
    title: 'supermarket',
    name: 'Department store fresh food',
    list: [{
      name: 'casual snacks',
      img: '//img10.360buyimg.com/focus/s140x140_jfs/t19789/191/2614150696/17735/d2db9aca/5b02411eNb44a03f7.jpg',
      title: 'limited set New product launch',
      forceValue: 1.9,
      price: '$125'
    },
    {
      name: 'milk',
      img: '//img13.360buyimg.com/focus/s140x140_jfs/t17479/1/2588472716/22795/d676e57a/5b024117N06151eba.jpg',
      title: 'limited set New product launch',
      forceValue: 1.6,
      price: '$245'
    },
    {
      name: 'Fashion Backpack',
img: require('@/assets/image/home/test3.png'),
      title: 'limited set New product launch',
      forceValue: 2.7,
      price: '$21'
    },
    {
      name: '酒水饮料',
      img: '//img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg',
      title: 'limited set New product launch',
      forceValue: 1.6,
      price: '$21'
    },
    {
      name: 'Business suitcase',
      img: require('@/assets/image/home/test4.png'),
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$218'
    },
    {
      name: 'Wireless Noise Canceling Headphones',
      img: require('@/assets/image/home/test5.png'),
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$218'
    },
    {
      name: 'Wireless Bluetooth headset',
      img: require('@/assets/image/home/test6.png'),
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$218'
    }
    ]

  },
  {

    title: 'Life',
    name: 'Daily use at home',
    list: [{
      name: 'solid wood dining table',
      img: '//img13.360buyimg.com/focus/s140x140_jfs/t12772/3/1793374412/9705/e633967a/5a28e6c9N8aaaea3f.jpg',
      title: 'limited set New product launch',
      forceValue: 2.7,
      price: '$125'
    },
    {
      name: 'chair',
      img: '//img10.360buyimg.com/focus/s140x140_jfs/t13888/280/1737354934/3036/f94ecdf8/5a28e0d6N80f30096.jpg',
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$245'
    },
    {
      name: 'cup',
      img: require('@/assets/image/classifyNursing/水杯3.png'),
      title: 'limited set New product launch',
      forceValue: 2.3,
      price: '$21'
    },
    {
      name: 'business suitcase',
      img: require('@/assets/image/home/test4.png'),
      title: 'limited set New product launch',
      forceValue: 1.9,
      price: '$218'
    },
    {
      name: 'wireless noise canceling headphones',
      img: require('@/assets/image/home/test5.png'),
      title: 'limited set New product launch',
      forceValue: 1.3,
      price: '$218'
    },
    {
      name: 'cup',
      img: require('@/assets/image/classifyNursing/水杯0.png'),
      title: 'limited set New product launch',
      forceValue: 1.6,
      price: '$218'
    }
    ]
  }
  ]

}

const categoryData = {
  status: 0,
  tabslabel: [{
    label: 'Popular recommendations',
    active: true
  },
  {
    label: 'mobile',
    active: false
  },
  {
    label: 'computer',
    active: false
  },
  {
    label: 'family',
    active: false
  },
  {
    label: 'Beauty',
    active: false
  },

  {
    label: 'cleanliness',
    active: false
  },
  {
    label: 'car',
    active: false
  },
  {
    label: 'Mens',
    active: false
  },
  {
    label: 'womens clothing',
    active: false
  },
  {
    label: 'supermarket',
    active: false
  },
  {
    label: 'outdoor sports',
    active: false
  },
  {
    label: 'Mens',
    active: false
  },
  {
    label: 'womens clothing',
    active: false
  },
  {
    label: 'supermarket',
    active: false
  },
  {
    label: 'outdoor sports',
    active: false
  },
  {
    label: 'other',
    active: false
  }],
  categoryData: [{
    name: 'mobile',
    mainImgUrl: '//img20.360buyimg.com/mcoss/jfs/t16273/143/46476745/45673/cba0840c/5a28ef10N82ab81d3.jpg',
    list: [{
      title: 'Cell phone communication',
      productList: [{
        title: 'cell phone',
        imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg'
      },
      {
        title: 'Full screen mobile phone',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg'
      },
      {
        title: 'gaming phone',
        imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg'
      },
      {
        title: 'camera phone',
        imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg'
      },
      {
        title: 'Elderly machine',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg'
      },
      {
        title: 'women mobile phone',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t15790/6/2311892256/2742/5ed77924/5a9fa728Nbff29ad2.jpg'
      }
      ]
    },
    {
      title: 'mobile phone accessories',
      productList: [{
        title: 'data line',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t18055/312/1342501458/9462/4699ed8a/5ac48672N11cf61fe.jpg'
      },
      {
        title: 'Mobile phone case',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t18502/160/1284774717/9251/feb8a496/5ac4878cN658cbb07.jpg'
      },
      {
        title: 'Power bank',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t19537/23/1276961949/9676/f4b5be0d/5ac48791Nb224f939.jpg'
      },
      {
        title: 'Mobile phone film',
        imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t17548/288/1331085893/6458/52545456/5ac486c6N0c8a93dc.jpg'
      },
      {
        title: 'headphones',
        imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t17284/353/1280266808/3696/32c00915/5ac486ccN2d8031c1.jpg'
      },
      {
        title: 'Charger',
        imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t16774/124/1318736793/3884/cb658723/5ac4874fN6bc007b0.jpg'
      }
      ]
    },
    {
      title: 'Photography',
productList: [{
        title: 'SLR camera',
        imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t13765/295/926307178/7966/3228af24/5a1679f2Nc2f659b6.jpg'
      },
      {
        title: 'digital camera',
        imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12814/251/897168610/8107/60a873f/5a1679caNada7f827.jpg'
      },
      {
        title: 'Lens',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t12154/164/880046972/2880/86b45b51/5a1679b9N42a5f8e5.jpg'
      },
      {
title: 'Outdoor Equipment',
        imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t12586/176/939117172/2550/d16b4b6c/5a1679c3N67e2b3f1.jpg'
      }
      ]
    }

    ]
  },
  {
    name: 'computer office',
    mainImgUrl: '//img30.360buyimg.com/mcoss/jfs/t14743/292/279117506/48503/9b7d9f2c/5a28ea97N36cb4d16.jpg',
    list: [{
      title: 'Popular categories',
      productList: [{
        title: 'Thin and light notebook',
        imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png'
      },
      {
        title: 'game notebook',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png'
      },
      {
        title: 'mechanical keyboard',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg'
      },
      {
        title: '组装电脑',
        imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg'
      },
      {
        title: '移动硬盘',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg'
      },
      {
        title: '曲屏显示器',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t13798/322/988648789/3644/1adc5615/5a17ba6dNafc95373.jpg'
      }
      ]
    },
    {
      title: 'Peripheral products',
      productList: [{
        title: '鼠标',
        imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t11881/31/2355374158/3676/22da94de/5a16a5f0Nc6b32dda.jpg'
      },
      {
        title: 'U盘',
        imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12112/355/904591745/4308/6201dffe/5a16a5aaNdac2fe89.jpg'
      },
      {
        title: '插座',
        imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t12031/206/932335399/3567/d6d59ad9/5a16a578N283a0f75.jpg'
      },
      {
        title: '电脑工具',
        imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t12292/173/915309013/5554/78f4ab5e/5a16a560Nc7626d33.jpg'
      },
      {
        title: '摄像头',
        imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12499/54/910206832/5998/f91002f8/5a16a588Nff477d9d.jpg'
      },
      {
        title: '手写板',
        imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11734/189/2377033150/4145/b78bfcf/5a16a594Ncb41c95a.jpg'
      }
      ]
    }
    ]
  },
  {
    name: 'household appliances',
    mainImgUrl: require('@/assets/image/home/test10.png'),
    list: [{
      title: '家用电器',
      productList: [{
        title: '电饭煲',
        imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg'
      },
      {
        title: '豆浆机',
        imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t14065/132/988058896/1688/99cd0a3d/5a17f229Nc4c681fb.jpg'
      },
      {
        title: '冰箱',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t13153/44/964603695/1011/21d660d2/5a17f6aeN280056ea.jpg'
      },
      {
        title: '双开门冰箱',
        imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t13588/266/943842715/1088/c4ae40e4/5a17f6c5Ne56d7e26.jpg'
      },
      {
        title: '冷柜',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t12928/273/1007467483/3549/52dad666/5a17f69eN1d10e257.jpg'
      },
      {
        title: '洗衣机',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t12481/129/1018625238/1840/43d49869/5a17f6eaN9ec936de.jpg'
      },
      {
        title: '电热水器',
        imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11053/246/2459202669/4318/fd6bd8d1/5a17f356Nd692ab74.jpg'
      },
      {
        title: '电视',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t11842/356/2416901099/2164/ab77fbaa/5a17f71eN25360979.jpg'
      },
      {
        title: '4K超清电视',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11386/179/2470866031/2353/dfc7d933/5a17f72cN97075084.jpg'
      },
      {
        title: '音箱',
        imgUrl: require('@/assets/image/classifyNursing/商品详情1-1.png')
      },
      {
        title: '音箱',
        imgUrl: require('@/assets/image/classifyNursing/商品详情1-2.png')
      },
      {
        title: '音箱',
        imgUrl: require('@/assets/image/classifyNursing/商品详情1-3.png')
      },
      {
        title: '音箱',
        imgUrl: require('@/assets/image/classifyNursing/商品详情1-4.png')
      }
      ]
    }]
  },
  {
    name: 'Beauty and skin care',
    mainImgUrl: require('@/assets/image/home/test11.png'),
    list: [{
      title: 'Beauty and skin care',
      productList: [{
        title: 'Whitening',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t19531/110/2538137867/14848/c3ec84ac/5afd3cc5N8aa4b7c8.jpg'
      },
      {
        title: 'sun protection',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t17560/320/2504739891/10347/f04150c4/5afd3cbeN77d00886.jpg'
      },
      {
        title: 'Beauty',
        imgUrl: require('@/assets/image/classifyNursing/美妆-1.png')
      },
      {
        title: 'Beauty',
        imgUrl: require('@/assets/image/classifyNursing/美妆-2.png')
      },
      {
        title: 'Beauty',
        imgUrl: require('@/assets/image/classifyNursing/美妆-3.png')
      },
      {
        title: 'Beauty',
        imgUrl: require('@/assets/image/classifyNursing/美妆-4.png')
      },
      {
        title: 'Beauty',
        imgUrl: require('@/assets/image/classifyNursing/美妆-5.png')
      },
      {
        title: 'Beauty',
        imgUrl: require('@/assets/image/classifyNursing/美妆-6.png')
      },
      {
        title: 'Beauty',
        imgUrl: require('@/assets/image/classifyNursing/美妆-7.png')
      },
      {
        title: 'Beauty',
        imgUrl: require('@/assets/image/classifyNursing/美妆-8.png')
      },
      {
        title: 'Beauty',
        imgUrl: require('@/assets/image/classifyNursing/美妆-9.png')
      },
      {
        title: 'Beauty',
        imgUrl: require('@/assets/image/classifyNursing/美妆-10.png')
      },
      {
        title: 'Beauty',
        imgUrl: require('@/assets/image/classifyNursing/美妆-11.png')
      },
      {
        title: 'Oil control',
        imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
      },
      {
        title: 'Remove blackheads',
        imgUrl: require('@/assets/image/classifyNursing/护理-1.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/护理-2.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/护理-3.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/护理-4.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/护理-5.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/护理-6.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/护理-7.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/护理-9.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/护理-10.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/护理-11.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/护理-12.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/商品详情-1.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/商品详情-2.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/商品详情-3.png')
      },
      {
        title: 'Skin care',
        imgUrl: require('@/assets/image/classifyNursing/商品详情-4.png')
      }
      ]
    }]
  },
  {
    name: 'Watches and Jewelry',
    mainImgUrl: '',
    list: [{
      title: 'Watches and Jewelry',
      productList: [{
        title: 'swiss watch',
        imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t14155/271/890296038/3841/f1adee7f/5a166fe1Nc6bd2f12.jpg'
      },
      {
        title: 'swiss watch',
        imgUrl: require('@/assets/image/classifyNursing/钟表-1.png')
      },
      {
        title: 'swiss watch',
        imgUrl: require('@/assets/image/classifyNursing/钟表-2.png')
      },
      {
        title: 'swiss watch',
        imgUrl: require('@/assets/image/classifyNursing/钟表-3.png')
      },
      {
        title: 'swiss watch',
        imgUrl: require('@/assets/image/classifyNursing/钟表-4.png')
      },
      {
        title: 'swiss watch',
        imgUrl: require('@/assets/image/classifyNursing/钟表-5.png')
      },
      {
        title: '手表',
        imgUrl: require('@/assets/image/classifyNursing/手表-1.png')
      },
      {
        title: '手表',
        imgUrl: require('@/assets/image/classifyNursing/手表-2.png')
      },
      {
        title: '手表',
        imgUrl: require('@/assets/image/classifyNursing/手表-3.png')
      },
      {
        title: '手表',
        imgUrl: require('@/assets/image/classifyNursing/手表-4.png')
      },
      {
        title: '手表',
        imgUrl: require('@/assets/image/classifyNursing/手表-5.png')
      },
      {
        title: 'watch',
        imgUrl: require('@/assets/image/classifyNursing/手表-6.png')
      },
      {
        title: 'swiss watch',
        imgUrl: require('@/assets/image/classifyNursing/钟表-6.png')
      },
      {
        title: 'swiss watch',
        imgUrl: require('@/assets/image/classifyNursing/钟表-7.png')
      },
      {
        title: 'swiss watch',
        imgUrl: require('@/assets/image/classifyNursing/钟表-8.png')
      },
      {
        title: 'swiss watch',
        imgUrl: require('@/assets/image/classifyNursing/钟表-9.png')
      },
      {
        title: 'swiss watch',
        imgUrl: require('@/assets/image/classifyNursing/钟表-10.png')
      },
      {
        title: 'swiss watch',
        imgUrl: require('@/assets/image/classifyNursing/钟表-11.png')
      }
      ]
    }]
  },
  {
    name: 'outdoor sports',
    mainImgUrl: '',
    list: [{
      title: '户外运动',
      productList: [{
        title: '跑步鞋',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t13993/246/156269250/8757/12386c/5a1fb5e7N12a676b6.jpg'
      },
      {
        title: '体育用品',
        imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12313/239/1414060687/10293/ca8ad748/5a1fb5e1Nd80abbc2.jpg'
      },
      {
        title: '运动鞋',
        imgUrl: require('@/assets/image/classifyNursing/运动装备-1.png')
      },
      {
        title: '运动鞋',
        imgUrl: require('@/assets/image/classifyNursing/运动装备-2.png')
      },
      {
        title: '运动鞋',
        imgUrl: require('@/assets/image/classifyNursing/运动装备-3.png')
      },
      {
        title: '运动鞋',
        imgUrl: require('@/assets/image/classifyNursing/运动装备-4.png')
      },
      {
        title: '运动鞋',
        imgUrl: require('@/assets/image/classifyNursing/运动装备-5.png')
      },
      {
        title: '运动鞋',
        imgUrl: require('@/assets/image/classifyNursing/运动装备-6.png')
      },
      {
        title: '运动鞋',
        imgUrl: require('@/assets/image/classifyNursing/运动装备-7.png')
      },

      {
        title: '运动鞋',
        imgUrl: require('@/assets/image/classifyNursing/运动装备-9.png')
      },
      {
        title: '运动鞋',
        imgUrl: require('@/assets/image/classifyNursing/运动装备-10.png')
      },
      {
        title: '运动鞋',
        imgUrl: require('@/assets/image/classifyNursing/运动装备-11.png')
      },
      {
        title: '运动鞋',
        imgUrl: require('@/assets/image/classifyNursing/运动装备-12.png')
      }
      ]
    }]
  },

  {
    name: 'mens shoes',
    mainImgUrl: '',
    list: [{
      title: 'mens shoes',
      productList: [{
        title: '夹克',
        imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12514/85/571462957/6214/29cdf637/5a0e9496Necd5bd0e.jpg'
      },
      {
        title: '风衣',
        imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t11590/82/2013872051/5874/83b5772d/5a0e947eN67f0e537.jpg'
      },
      {
        title: '西服',
        imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t13489/68/552491077/2495/7b517e4b/5a0e9483Na6231535.jpg'
      },
      {
        title: '男鞋',
        imgUrl: require('@/assets/image/classifyNursing/男鞋0.png')
      },
      {
        title: '男鞋',
        imgUrl: require('@/assets/image/classifyNursing/男鞋1.png')
      },
      {
        title: '男鞋',
        imgUrl: require('@/assets/image/classifyNursing/男鞋2.png')
      },
      {
        title: '男鞋',
        imgUrl: require('@/assets/image/classifyNursing/男鞋3.png')
      },
      {
        title: '男鞋',
        imgUrl: require('@/assets/image/classifyNursing/男鞋4.png')
      }
      ]
    }]
  },

  {
    name: 'womens clothing and shoes',
    mainImgUrl: '',
    list: [{
      title: '家用电器',
      productList: [{
        title: '风衣',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg'
      },
      {
        title: '长袖T恤',
        imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t16750/238/698160610/5156/5b1f25b/5a9fbfccN574cba12.jpg'
      },
      {
        title: '卫衣',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11953/286/2195921828/5728/75b86d5b/5a127fbaN2780918c.jpg'
      }
      ]
    }]
  },
  {
    name: 'Mother and baby clothing',
    mainImgUrl: '',
    list: [{
      title: 'Mother and baby clothing',
      productList: [{
        title: '套装',
        imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t18790/111/673564180/2396/3d27d79a/5a9f94c1N5b0c8724.jpg'
      }]
    }]
  },
  {
    name: 'Books and audiovisuals',
    mainImgUrl: '',
    list: [{
      title: '图书音像',
      productList: [{
        title: '文学',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg'
      },
      {
        title: '童书',
        imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg'
      }
      ]
    }]
  },

  {
    name: 'Fresh food',
    mainImgUrl: '',
    list: [{
      title: '家用电器',
      productList: [{
        title: '休闲零食',
        imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t19789/191/2614150696/17735/d2db9aca/5b02411eNb44a03f7.jpg'
      },
      {
        title: '牛奶',
        imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t17479/1/2588472716/22795/d676e57a/5b024117N06151eba.jpg'
      }
      ]
    }]
  },
  {
    name: 'alcoholic beverages',
    mainImgUrl: '',
    list: [{
      title: '酒水饮料',
      productList: [{
        title: '酒品馆',
        imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg'
      }]
    }]
  },
  {
    name: 'Home decoration',
    mainImgUrl: '',
    list: [{
      title: '家居家装',
      productList: [{
        title: '实木餐桌',
        imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12772/3/1793374412/9705/e633967a/5a28e6c9N8aaaea3f.jpg'
      },
      {
        title: 'chair',
        imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t13888/280/1737354934/3036/f94ecdf8/5a28e0d6N80f30096.jpg'
      },
      {
        title: 'cup',
        imgUrl: require('@/assets/image/classifyNursing/水杯0.png')
      },
      {
        title: 'cup',
        imgUrl: require('@/assets/image/classifyNursing/水杯1.png')
      },
      {
        title: 'cup',
        imgUrl: require('@/assets/image/classifyNursing/水杯2.png')
      },
      {
        title: 'cup',
        imgUrl: require('@/assets/image/classifyNursing/水杯3.png')
      },
      {
        title: 'cup',
        imgUrl: require('@/assets/image/classifyNursing/水杯4.png')
      }
      ]
    }]
  },
  {
    name: 'luggage handbags',
    mainImgUrl: '',
    list: [{
      title: 'luggage handbags',
      productList: [{
        title: 'box',
        imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg'
      },
      {
        title: 'Luggage',
        imgUrl: require('@/assets/image/classifyNursing/箱包0.png')
      },
      {
        title: '箱包',
        imgUrl: require('@/assets/image/classifyNursing/箱包1.png')
      },
      {
        title: '箱包',
        imgUrl: require('@/assets/image/classifyNursing/箱包2.png')
      },
      {
        title: '箱包',
        imgUrl: require('@/assets/image/classifyNursing/箱包3.png')
      },
      {
        title: '箱包',
        imgUrl: require('@/assets/image/classifyNursing/箱包4.png')
      }
      ]
    }]
  },

  {
    name: 'toy musical instruments',
    mainImgUrl: '',
    list: [{
      title: 'household appliances',
      productList: [{
        title: 'remote control car',
        imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t17575/123/2617650159/16720/74c14629/5b02a0c6N3f2770d9.jpg'
      }]
    }]
  }
  ]
}
// 推荐
const recommend = {
  status: '1',
  data: [{
    id: 0,
    imgUrl: require('@/assets/image/classifyNursing/运动装备-1.png'),
    storeName: 'Nike flagship store',
    itemTitle: 'sports equipment',
    itemPrice: '$248',
    itemCount: '月销:888'
  },
  {
    id: 0,
    imgUrl: require('@/assets/image/classifyNursing/美妆-1.png'),
    storeName: 'Beauty flagship store',
    itemTitle: 'Beauty',
    itemPrice: '$248',
    itemCount: '月销:888'
  },
  {
    id: 0,
    imgUrl: require('@/assets/image/classifyNursing/护理-1.png'),
    storeName: 'Nursing flagship store',
    itemTitle: '护理',
    itemPrice: '$248',
    itemCount: '月销:888'
  },
  {
    id: 0,
    imgUrl: require('@/assets/image/classifyNursing/商品详情1-1.png'),
    storeName: '旗舰店',
    itemTitle: '运动装备',
    itemPrice: '$248',
    itemCount: '月销:888'
  },
  {
    id: 0,
    imgUrl: require('@/assets/image/classifyNursing/钟表-2.png'),
    storeName: '钟表旗舰店',
    itemTitle: '钟表',
    itemPrice: '$248',
    itemCount: '月销:888'
  },
  {
    id: 0,
    imgUrl: require('@/assets/image/classifyNursing/手表-3.png'),
    storeName: '手表旗舰店',
    itemTitle: '手表',
    itemPrice: '$248',
    itemCount: '月销:888'
  },
  {
    id: 0,
    imgUrl: require('@/assets/image/classifyNursing/运动装备-10.png'),
    storeName: '运动装备旗舰店',
    itemTitle: '运动装备',
    itemPrice: '$248',
    itemCount: '月销:888'
  },
  {
    id: 0,
    imgUrl: require('@/assets/image/classifyNursing/男鞋2.png'),
    storeName: '男鞋旗舰店',
    itemTitle: '男鞋',
    itemPrice: '$248',
    itemCount: '月销:888'
  },
  {
    id: 0,
    imgUrl: require('@/assets/image/classifyNursing/运动装备-1.png'),
    storeName: '运动装备旗舰店',
    itemTitle: '运动装备',
    itemPrice: '$248',
    itemCount: '月销:888'
  },
  {
    id: 0,
    imgUrl: require('@/assets/image/classifyNursing/男鞋4.png'),
    storeName: '男鞋旗舰店',
    itemTitle: '男鞋',
    itemPrice: '$248',
    itemCount: '月销:888'
  },
  {
    id: 0,
    imgUrl: require('@/assets/image/classifyNursing/水杯1.png'),
    storeName: '水杯旗舰店',
    itemTitle: '水杯',
    itemPrice: '$248',
    itemCount: '月销:888'
  }

  ]
}

const remderImg = {
  status: '1',
  productImages: [
    [{
      imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png',
      categoryId: 100008
    },
    {
      imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png',
      categoryId: 100008
    },
    {
      imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg',
      categoryId: 100014
    },
    {
      imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg',
      categoryId: 100017
    },
    {
      imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg',
      categoryId: 100047
    }
    ],
    [{
      imgUrl: require('@/assets/image/classifyNursing/水杯0.png'),
      categoryId: 100008
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/水杯1.png'),
      categoryId: 100008
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/水杯2.png'),
      categoryId: 100014
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/水杯3.png'),
      categoryId: 100017
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/水杯4.png'),
      categoryId: 100047
    }
    ],
    [{
      imgUrl: require('@/assets/image/classifyNursing/男鞋1.png'),
      categoryId: 100008
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/男鞋2.png'),
      categoryId: 100014
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/男鞋3.png'),
      categoryId: 100017
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/男鞋4.png'),
      categoryId: 100047
    }
    ],
    [{
      imgUrl: require('@/assets/image/classifyNursing/美妆-1.png'),
      categoryId: 100008
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/美妆-2.png'),
      categoryId: 100016
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/美妆-3.png'),
      categoryId: 100035
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/美妆-4.png'),
      categoryId: 100016
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/美妆-5.png'),
      categoryId: 100016
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/美妆-6.png'),
      categoryId: 100016
    }
    ],
    [{
      imgUrl: require('@/assets/image/classifyNursing/美妆-7.png'),
      categoryId: 100016
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/美妆-8.png'),
      categoryId: 100035
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/美妆-9.png'),
      categoryId: 100016
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/美妆-10.png'),
      categoryId: 100016
    },
    {
      imgUrl: require('@/assets/image/classifyNursing/美妆-11.png'),
      categoryId: 100016
    }
    ],
    [{
      imgUrl: require('@/assets/image/home/test1.png'),
      categoryId: 100008
    },
    {
      imgUrl: require('@/assets/image/home/test2.png'),
      categoryId: 100016
    },
    {
      imgUrl: require('@/assets/image/home/test3.png'),
      categoryId: 100035
    },
    {
      imgUrl: require('@/assets/image/home/test4.png'),
      categoryId: 100016
    }
    ]
  ]

}

Mock.mock('http://test.happymmall.com/home/remderImg', remderImg) // 推荐页面mock数据
Mock.mock('http://test.happymmall.com/home/recommend', recommend) // 推荐页面mock数据
Mock.mock('http://test.happymmall.com/home/homeData', homeData)
Mock.mock('http://test.happymmall.com/search/hot', hotData)
Mock.mock('http://test.happymmall.com/category/categoryData', categoryData)
