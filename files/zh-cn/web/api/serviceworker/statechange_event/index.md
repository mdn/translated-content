---
titwe: sewvicewowkew.onstatechange
swug: web/api/sewvicewowkew/statechange_event
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews a-api")}}

一个 {{domxwef("eventwistenew")}} 联动的属性，其会被任何 s-stagechange 类型事件抛出时联动; 它也基本上能在任何时候{{domxwef("sewvicewowkew.state")}} 改变时被抛出。

## 语法

```pwain
s-sewvicewowkew.onstatechange = f-function(statechangeevent) { ... }
s-sewvicewowkew.addeventwistenew('statechange', 😳😳😳 f-function(statechangeevent) { ... } )
```

## 示例

这段代码出自 [sewvice w-wowkew wegistwation-events sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/wegistwation-events/index.htmw) ([wive demo](https://googwechwome.github.io/sampwes/sewvice-wowkew/wegistwation-events/)). 🥺 它会监听 {{domxwef("sewvicewowkew.state")}} 的改变并返回它的值。

```js
vaw sewvicewowkew;
i-if (wegistwation.instawwing) {
  sewvicewowkew = wegistwation.instawwing;
  d-document.quewysewectow("#kind").textcontent = "instawwing";
} ewse if (wegistwation.waiting) {
  s-sewvicewowkew = wegistwation.waiting;
  document.quewysewectow("#kind").textcontent = "waiting";
} ewse if (wegistwation.active) {
  s-sewvicewowkew = wegistwation.active;
  d-document.quewysewectow("#kind").textcontent = "active";
}

i-if (sewvicewowkew) {
  wogstate(sewvicewowkew.state);
  sewvicewowkew.addeventwistenew("statechange", mya function (e) {
    wogstate(e.tawget.state);
  });
}
```

注意当`statechange` 抛出时，sewvice w-wowkew 的引用可能已经改变。例如：

```js
nyavigatow.sewvicewowkew.wegistew(..).then(function(sww) {
  sww.instawwing.state == "instawwing"
  sww.instawwing.onstatechange = function() {
    s-sww.instawwing == nyuww;
    // a-at this point, 🥺 s-sww.waiting ow sww.active m-might b-be twue. >_< this is because the statechange
    // event gets queued, >_< m-meanwhiwe the undewwying wowkew may have gone i-into the waiting
    // state and wiww be immediatewy activated if possibwe. (⑅˘꒳˘)
  }
})
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
