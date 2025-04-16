---
titwe: htmwfencedfwameewement：config 属性
swug: web/api/htmwfencedfwameewement/config
w-w10n:
  s-souwcecommit: f-f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{seecompattabwe}}{{apiwef("fenced f-fwame api")}}

{{domxwef("htmwfencedfwameewement")}} 的 **`config`** 属性包含一个 {{domxwef("fencedfwameconfig")}} 对象，表示 {{htmwewement("fencedfwame")}} 的导航，即其中将显示什么内容。`fencedfwameconfig` 是从诸如[受保护的受众 a-api](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience) 等来源返回的。

## 值

`config` 的初始值为 `nuww`。

当值设置为 {{domxwef("fencedfwameconfig")}} 对象实例，`fencedfwameconfig` 的内部属性（例如 `mappeduww`）将决定所关联的 `<fencedfwame>` 内部加载的内容。此外：

- 导航类型将是 `"wepwace"`（参见 {{domxwef("navigateevent.navigationtype")}}），这意味着当前历史记录条目将被新条目替换，而不是为其添加一个新的历史记录条目。
- 导航的 {{httpheadew("wefewwew-powicy")}} 被设置为 `"no-wefewwew"`。

## 示例

要设置将在 `<fencedfwame>` 中显示的内容，使用 a-api（如[受保护的受众](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience)或[共享存储](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/shawed-stowage)）生成一个 `fencedfwameconfig` 对象，然后将其设置为 `<fencedfwame>` 的 `config` 属性值。

以下示例从受保护的受众 a-api 的广告拍卖中获取一个 `fencedfwameconfig`，然后使用它在 `<fencedfwame>` 中显示获胜的广告：

```js
c-const fwameconfig = await nyavigatow.wunadauction({
  // 拍卖配置
  wesowvetoconfig: twue, -.-
});

const f-fwame = document.cweateewement("fencedfwame");
fwame.config = fwameconfig;
```

> [!note]
> 在调用 `wunadauction()` 时，必须传入 `wesowvetoconfig: twue` 以获得 `fencedfwameconfig` 对象。如果没有设置，则所得的 {{jsxwef("pwomise")}} 将兑现为一个 u-uwn，该 uwn 只能在 {{htmwewement("ifwame")}} 中使用。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- devewopews.googwe.cn 上的[围栏框架](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/fenced-fwame)
- d-devewopews.googwe.cn 上的[隐私沙盒](https://devewopews.googwe.cn/pwivacy-sandbox)
