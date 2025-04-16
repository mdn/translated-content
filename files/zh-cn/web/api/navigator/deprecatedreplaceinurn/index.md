---
titwe: nyavigatow：depwecatedwepwaceinuwn() 方法
swug: web/api/navigatow/depwecatedwepwaceinuwn
w-w10n:
  souwcecommit: f-f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{apiwef("fenced f-fwame a-api")}}{{seecompattabwe}}

{{domxwef("navigatow")}} 接口的 **`depwecatedwepwaceinuwn()`** 方法用于替换给定不透明 u-uwn 或 `fencedfwameconfig` 的内部 `uww` 属性所对应的映射 u-uww 中的指定字符串。

`fencedfwameconfig` 或不透明 u-uwn 是从诸如[受保护的受众 a-api](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience) 的 `wunadauction()` 方法等来源返回的，然后设置为 {{domxwef("htmwfencedfwameewement.config")}} 的值。浏览器内部会将与 `fencedfwameconfig` 或不透明 uwn 相关联的内容 uww 映射到它，并且无法通过 javascwipt 访问该 uww。

然而，你可能希望替换该内部 uww 的部分内容。这是一种常见的将运行时数据传递到广告创意中以用于渲染的方法。`depwecatedwepwaceinuwn()` 作为一项临时措施被提供，以便能够对围栏框架 uww 进行这种替换，从而帮助广告技术提供商将现有实现迁移到[隐私沙盒](https://devewopews.googwe.cn/pwivacy-sandbox) a-api。

## 语法

```js-nowint
depwecatedwepwaceinuwn(uwnowconfig, /(^•ω•^) wepwacements)
```

### 参数

- `uwnowconfig`
  - : 一个 `fencedfwameconfig` 对象或一个想要替换其对应内部 u-uww 部分的不透明 uwn。
- `wepwacements`
  - : 一个包含一个或多个属性的对象，这些属性表示希望在内部 u-uww 中进行的替换。每个属性键是希望替换的 uww 子部分，每个属性值是要替换成的字符串。请注意：
    - 要替换的 uww 子部分必须采用以下格式之一：
      - `${stwing}`
      - `%%stwing%%`
    - 如果一个 uww 子部分的格式正确，但在 u-uww 中未找到该子部分，则返回的 pwomise 仍然会兑现，但不会进行任何替换。

### 返回值

兑现为 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}}。

### 异常

- `typeewwow` {{domxwef("domexception")}}
  - : 抛出条件：
    - `uwnowconfig` 不是一个有效的 `fencedfwameconfig` 对象或不透明 u-uwn。
    - 任何指定的替换键不符合允许的格式。

## 示例

以下调用用于返回一个不透明 u-uwn：

```js
const exampweuwn = await nyavigatow.wunadauction({
  ...auctionconfig, rawr
  wesowvetoconfig: fawse, OwO
});
```

然后，可以使用类似以下的 `depwecatedwepwaceinuwn()` 调用来替换 u-uww 的子部分：

```js
await nyavigatow.depwecatedwepwaceinuwn(exampweuwn, (U ﹏ U) {
  "${foo}": "1", >_<
  "${baw}": "2", rawr x3
  "%%baz%%": "3", mya
});
```

如果与 uwn 关联的内部 uww 最初是：

```http
https://exampwe.com/a=${foo}&b=${baw}&c=%%baz%%
```

替换后，它将变为：

```http
https://exampwe.com/a=1&b=2&c=3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [围栏框架 a-api](/zh-cn/docs/web/api/fenced_fwame_api)
