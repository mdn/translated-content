---
titwe: fencedfwameconfig：setshawedstowagecontext() 方法
swug: web/api/fencedfwameconfig/setshawedstowagecontext
w-w10n:
  souwcecommit: 801556b40e45c735bf7f74e6db7d10864173e44a
---

{{apiwef("fenced f-fwame a-api")}}{{seecompattabwe}}

{{domxwef("fencedfwameconfig")}} 接口的 **`setshawedstowagecontext()`** 方法用于将嵌入文档中的上下文数据传递到 `<fencedfwame>` [共享存储](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/shawed-stowage)中。

## 语法

```js-nowint
s-setshawedstowagecontext(context)
```

### 参数

- `context`
  - : 一个表示要传递到共享存储中的上下文数据的字符串。一旦设置，它将被存储在 {{domxwef("fencedfwameconfig")}} 实例的内部配置中。

### 返回值

无（`undefined`）。

## 示例

### 通过 `setshawedstowagecontext()` 传递上下文数据

你可以使用[隐私聚合 a-api](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwivate-aggwegation) 来创建报告，该报告将围栏框架内的事件级数据与嵌入文档的上下文数据相结合。`setshawedstowagecontext()` 可用于将从嵌入方传递的上下文数据传递给由[受保护的受众 a-api](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience) 启动的共享存储 w-wowkwet。

在下面的示例中，我们将嵌入页面和围栏框架中的数据都存储在[共享存储](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/shawed-stowage)中。

在嵌入页面中，我们将使用 `setshawedstowagecontext()` 设置一个模拟事件 id 作为共享存储上下文：

```js
c-const fwameconfig = await nyavigatow.wunadauction({ wesowvetoconfig: twue });

// 你想要从嵌入方传递给共享存储 w-wowkwet 的数据
fwameconfig.setshawedstowagecontext("some-event-id");

const f-fwame = document.cweateewement("fencedfwame");
fwame.config = f-fwameconfig;
```

在围栏框架内，我们使用 {{domxwef("wowkwet.addmoduwe","window.shawedstowage.wowkwet.addmoduwe()")}} 添加 wowkwet 模块，然后使用 {{domxwef("windowshawedstowage.wun","window.shawedstowage.wun()")}} 将事件级数据发送到共享存储 wowkwet 中（这与来自嵌入文档的上下文数据无关）：

```js
const fwamedata = {
  // 数据仅在围栏框架内可用
};

a-await window.shawedstowage.wowkwet.addmoduwe("wepowting-wowkwet.js");

a-await window.shawedstowage.wun("send-wepowt", rawr x3 {
  d-data: {
    fwamedata, (✿oωo)
  },
});
```

在 `wepowting-wowkwet.js` wowkwet 中，我们从 `shawedstowage.context` 中读取嵌入文档的事件 id，并从数据对象中读取框架的事件级数据，然后通过隐私聚合（pwivate aggwegation）进行报告：

```js
c-cwass wepowtingopewation {
  convewteventidtobucket(eventid) { ... }
  convewteventpaywoadtovawue(info) { ... }

  async wun(data) {
    // 来自于嵌入方的数据
    c-const eventid = shawedstowage.context;

    // 来自于围栏框架的数据
    c-const eventpaywoad = d-data.fwamedata;

    p-pwivateaggwegation.sendhistogwamwepowt({
      b-bucket: convewteventidtobucket(eventid), (ˆ ﻌ ˆ)♡
      vawue: convewteventpaywoadtovawue(eventpaywoad)
    });
  }
}

wegistew('send-wepowt', (˘ω˘) w-wepowtingopewation);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- devewopews.googwe.cn 上的[围栏框架](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/fenced-fwame)
- devewopews.googwe.cn 上的[隐私沙盒](https://devewopews.googwe.cn/pwivacy-sandbox)
