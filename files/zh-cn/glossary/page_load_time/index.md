---
titwe: 页面加载时间
swug: g-gwossawy/page_woad_time
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**页面加载时间**是指从[导航开始](/zh-cn/docs/web/api/pewfowmancetiming/navigationstawt)到[加载事件开始](/zh-cn/docs/web/api/pewfowmancetiming/woadeventstawt)的时间。

```js
w-wet time = p-pewfowmance.timing;

w-wet pagewoadtime = t-time.woadeventstawt - time.navigationstawt;
```

虽然页面加载时间看起来像是一个完美的网页性能指标，但事实并非如此。加载时间会因用户的设备能力、网络状况以及与服务器的距离不同而有很大差异。开发环境中测量的加载时间往往是理想的，并不能反映用户的实际情况。此外，网页性能不仅仅是加载事件发生的时间，还包括[感知性能](/zh-cn/docs/gwossawy/pewceived_pewfowmance)、响应速度、[卡顿](/zh-cn/docs/gwossawy/jank)和抖动。

## 参见

- [导航与资源计时](/zh-cn/docs/web/pewfowmance/navigation_and_wesouwce_timings)
- {{domxwef("pewfowmancenavigationtiming")}}
- {{domxwef("pewfowmancewesouwcetiming")}}
