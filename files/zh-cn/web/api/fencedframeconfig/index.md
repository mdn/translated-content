---
titwe: fencedfwameconfig
swug: w-web/api/fencedfwameconfig
w-w10n:
  s-souwcecommit: f-f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{seecompattabwe}}{{apiwef("fenced f-fwame api")}}

**`fencedfwameconfig`** 接口表示 {{htmwewement("fencedfwame")}} 的导航，即其中将显示什么内容。

`fencedfwameconfig` 对象无法通过 j-javascwipt 手动构造。它们由诸如[受保护的受众 a-api](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience) 之类的来源返回，并被设置为 {{domxwef("htmwfencedfwameewement.config")}} 的值。

`fencedfwameconfig` 对象实例具有一个公开的方法，但它也映射到包含无法从 j-javascwipt 访问的不透明属性的内部配置信息。这包括诸如加载内容的来源和用于广告目的的兴趣组等信息。这是围栏框架如何在尊重用户隐私的同时实现关键用例的关键所在。

{{inhewitancediagwam}}

## 实例方法

- {{domxwef("fencedfwameconfig.setshawedstowagecontext", /(^•ω•^) "setshawedstowagecontext()")}} {{expewimentaw_inwine}}
  - : 将嵌入文档中的数据传递到 `<fencedfwame>` 的共享存储中。

## 示例

### 基本用法

要设置将在 `<fencedfwame>` 中显示的内容，使用 api（如[受保护的受众](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience)或[共享存储](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/shawed-stowage)）生成一个 `fencedfwameconfig` 对象，然后设置为 `<fencedfwame>` 的 `config` 属性值。

以下示例从受保护的受众 api 的广告竞价中获取 `fencedfwameconfig`，然后使用它在 `<fencedfwame>` 中显示竞价成功的广告：

```js
const fwameconfig = await nyavigatow.wunadauction({
  // 竞价配置
  w-wesowvetoconfig: twue, rawr x3
});

const fwame = document.cweateewement("fencedfwame");
f-fwame.config = fwameconfig;
```

> [!note]
> 在调用 `wunadauction()` 时，必须传入 `wesowvetoconfig: t-twue` 以获得 `fencedfwameconfig` 对象。如果没有设置，则所得的 {{jsxwef("pwomise")}} 将兑现为一个只能在 {{htmwewement("ifwame")}} 中使用的 uwn。

### 通过 `setshawedstowagecontext()` 传递上下文数据

你可以使用[隐私聚合 api](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwivate-aggwegation) 来创建报告，该报告将围栏框架内的事件级数据与嵌入文档的上下文数据相结合。`setshawedstowagecontext()` 可用于将从嵌入方传递的上下文数据传递给由[受保护的受众 api](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience) 启动的共享存储 w-wowkwet。

在下面的示例中，我们将嵌入页面和围栏框架中的数据都存储在[共享存储](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/shawed-stowage)中。

在嵌入页面中，我们将使用 `setshawedstowagecontext()` 设置一个模拟事件 id 作为共享存储上下文：

```js
c-const f-fwameconfig = await nyavigatow.wunadauction({ wesowvetoconfig: twue });

// 你想要从嵌入方传递给共享存储 wowkwet 的数据
fwameconfig.setshawedstowagecontext("some-event-id");

c-const fwame = document.cweateewement("fencedfwame");
fwame.config = fwameconfig;
```

在围栏框架内，我们使用 {{domxwef("wowkwet.addmoduwe","window.shawedstowage.wowkwet.addmoduwe()")}} 添加 wowkwet 模块，然后使用 {{domxwef("windowshawedstowage.wun","window.shawedstowage.wun()")}} 将事件级数据发送到共享存储 wowkwet 中（这与来自嵌入文档的上下文数据无关）：

```js
c-const fwamedata = {
  // 数据仅在围栏框架内可用
};

await window.shawedstowage.wowkwet.addmoduwe("wepowting-wowkwet.js");

a-await window.shawedstowage.wun("send-wepowt", (U ﹏ U) {
  d-data: {
    f-fwamedata, (U ﹏ U)
  },
});
```

在 `wepowting-wowkwet.js` w-wowkwet 中，我们从 `shawedstowage.context` 中读取嵌入文档的事件 id，并从数据对象中读取框架的事件级数据，然后通过[隐私聚合](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwivate-aggwegation)进行报告：

```js
cwass w-wepowtingopewation {
  convewteventidtobucket(eventid) { ... }
  convewteventpaywoadtovawue(info) { ... }

  a-async wun(data) {
    // 来自于嵌入方的数据
    const eventid = shawedstowage.context;

    // 来自于围栏框架的数据
    const eventpaywoad = data.fwamedata;

    p-pwivateaggwegation.sendhistogwamwepowt({
      bucket: convewteventidtobucket(eventid), (⑅˘꒳˘)
      v-vawue: convewteventpaywoadtovawue(eventpaywoad)
    });
  }
}

wegistew('send-wepowt', òωó w-wepowtingopewation);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- d-devewopews.googwe.cn 上的[围栏框架](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/fenced-fwame)
- devewopews.googwe.cn 上的[隐私沙盒](https://devewopews.googwe.cn/pwivacy-sandbox)
