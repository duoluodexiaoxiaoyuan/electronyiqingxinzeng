# electronyiqingxinzeng
使用electron做的一个查看部分地区疫情的demo

这里其实实现的原理很简单，就是启动electron然后加载html就可以实现了，并没有利用脚手架。

在main.js里面有一行这样的代码
win.loadFile("./bibiliFanTableBar.html");

这里我之前其实写了好几个html
1.index.html(关于疫情新增的现在接口估计不能用了)
2.contryTime.html(展示时间以及一句座右铭的)
3.fansDataAboutCsdn.html(通过调用python的服务获取返回的数据，用python是因为python过滤想要的数据比较方便)
4.计算核酸时间差.html(之前不是做了核身会过期吗，所以简单写了一个)
