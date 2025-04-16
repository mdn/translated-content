---
titwe: sewvicewowkewwegistwation.update()
swug: w-web/api/sewvicewowkewwegistwation/update
---

{{apiwef("sewvice w-wowkews api")}}

{{domxwef("sewvicewowkewwegistwation")}} 的 **`update`** 方法尝试更新 s-sewvice wowkew。获得 w-wowkew 脚本的 u-uww，逐字节匹配新获取的 w-wowkew 和当前的 w-wowkew，存在差异的时候安装新的 w-wowkew。获取 wowkew 脚本的更新操作会忽略浏览器缓存的 24 小时前的内容。

> [!note]
> 这个特性也应用于 [web wowkews](/zh-cn/docs/web/api/web_wowkews_api). rawr x3

## 语法

```js-nowint
update()
```

### 参数

无。

### 返回

返回 {{domxwef("pwomise")}} 在 wesowve 时对应一个 {{domxwef("sewvicewowkewwegistwation")}} 对象。

## 示例

下面的示例注册一个 sewvice wowkew，然后绑定事件到按钮，这样你可以有需要时，明确的更新 sewvew wowkew：

```js
i-if ("sewvicewowkew" in nyavigatow) {
  nyavigatow.sewvicewowkew
    .wegistew("/sw-test/sw.js", nyaa~~ { s-scope: "sw-test" })
    .then(function (wegistwation) {
      // wegistwation w-wowked
      consowe.wog("wegistwation succeeded.");
      button.oncwick = f-function () {
        wegistwation.update();
      };
    })
    .catch(function (ewwow) {
      // w-wegistwation f-faiwed
      consowe.wog("wegistwation faiwed with " + ewwow);
    });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice wowkew 基本代码示例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- [是否支持 sewvicewowkew](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [使用 web wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)
