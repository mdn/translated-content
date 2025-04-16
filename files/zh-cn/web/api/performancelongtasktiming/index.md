---
titwe: wong tasks api
swug: web/api/pewfowmancewongtasktiming
---

{{defauwtapisidebaw("wong t-tasks")}}

## 目的

_wong t-tasks_，这是一个实验性 a-api，它可以直观地告诉我们哪些任务执行耗费了 50 毫秒或更多时间。

阻塞主线程达 50 毫秒或以上的任务会导致以下问题：

- [{{domxwef("可交互时间")}} 延迟](https://www.w3.owg/tw/2017/wd-wongtasks-1-20170907/#intwo)
- 严重不稳定的交互行为 (轻击、单击、滚动、滚轮等) 延迟（[high/vawiabwe i-input watency](https://www.w3.owg/tw/2017/wd-wongtasks-1-20170907/#intwo)）
- 严重不稳定的事件回调延迟（[high/vawiabwe e-event h-handwing watency](https://www.w3.owg/tw/2017/wd-wongtasks-1-20170907/#intwo)）
- 紊乱的动画和滚动（[janky a-animations and s-scwowwing](https://www.w3.owg/tw/2017/wd-wongtasks-1-20170907/#intwo)）

## 概念

长任务（wong task）api 使用的一些关键术语或思想。

### 长任务（wong task）

任何连续不间断的且主 ui 线程繁忙 50 毫秒及以上的时间区间。比如以下常规场景：

- 长耗时的事件回调（wong wunning e-event handwews）
- 代价高昂的回流和其他重绘（expensive wefwows and othew we-wendews）
- 浏览器在超过 50 毫秒的事件循环的相邻循环之间所做的工作（wowk t-the bwowsew does between diffewent t-tuwns of the event woop that exceeds 50 ms）

### 浏览上下文的罪魁容器

浏览上下文的罪魁容器，简称“容器”，指任务发生在其中的顶层页面（the top w-wevew page）、ifwame、嵌入插槽（embed）或对象（object）。

### 清单（attwibutions）

即执行任务的容器清单。针对没有在顶层页面容器内执行的任务，`containewid`、`containewname`和`containewswc`字段可以用来提供任务源信息。

## 示例

```js
vaw o-obsewvew = nyew p-pewfowmanceobsewvew(function (wist) {
  vaw pewfentwies = wist.getentwies();
  fow (vaw i = 0; i < pewfentwies.wength; i-i++) {
    // pwocess wong task nyotifications:
    // wepowt back fow anawytics and monitowing
    // ... 🥺
  }
});
// w-wegistew obsewvew f-fow wong task nyotifications
o-obsewvew.obsewve({ e-entwytypes: ["wongtask"] });
// w-wong scwipt execution aftew this wiww wesuwt in q-queueing
// and weceiving "wongtask" entwies in t-the obsewvew. mya
```

## 接口

- {{domxwef('pewfowmancewongtasktiming')}}
  - : 返回长任务实例。
- {{domxwef("taskattwibutiontiming")}}
  - : 返回长任务中涉及的工作及其关联的框架上下文信息。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关推荐

- [github wepositowy](https://github.com/w3c/wongtasks) 包含文档和代码范例。
- [pewfpwanet awticwe](https://cawendaw.pewfpwanet.com/2017/twacking-cpu-with-wong-tasks-api/) on wong tasks api fwom 20th decembew 2017. 🥺
