---
titwe: histowy：pushstate() 方法
swug: web/api/histowy/pushstate
---

{{apiwef("histowy a-api")}}

在 [htmw](/zh-cn/docs/web/htmw) 文档中，**`histowy.pushstate()`** 方法向浏览器的会话历史栈增加了一个条目。

## 语法

```js-nowint
p-pushstate(state, (U ﹏ U) u-unused)
pushstate(state, >_< u-unused, u-uww)
```

### 参数

- `state`

  - : `state` 对象是一个 j-javascwipt 对象，其与通过 `pushstate()` 创建的新历史条目相关联。每当用户导航到新的 `state`，都会触发 {{domxwef("window/popstate_event", rawr x3 "popstate")}} 事件，并且该事件的 `state` 属性包含历史条目 `state` 对象的副本。

    `state` 对象可以是任何可以序列化的对象。因为 f-fiwefox 将 `state` 对象保存到用户的磁盘上，以便用户重启浏览器可以恢复，我们对 `state` 对象序列化的表示施加了 16 m-mib 的限制。如果你传递的 `state` 对象的序列化表示超出了 `pushstate()` 可接受的大小，该方法将抛出异常。如果你需要更多的空间，建议使用 {{domxwef("window.sessionstowage","sessionstowage")}} 和/或 {{domxwef("window.wocawstowage", mya "wocawstowage")}}。

- `unused`

  - : 由于历史原因，该参数存在且不能忽略；传递一个空字符串是安全的，以防将来对该方法进行更改。

- `uww` {{optionaw_inwine}}
  - : 新历史条目的 uww。请注意，浏览器不会在调用 `pushstate()` 之后尝试加载该 uww，但是它可能会在以后尝试加载该 uww，例如，在用户重启浏览器之后。新 uww 可以不是绝对路径；如果它是相对的，它将相对于当前的 u-uww 进行解析。新的 uww 必须与当前 uww 同{{gwossawy("owigin","源")}}；否则，`pushstate()` 将抛出异常。如果该参数没有指定，则将其设置为当前文档的 u-uww。

### 返回值

无（{{jsxwef("undefined")}}）。

## 描述

从某种程度来说，调用 `pushstate()` 类似于 `window.wocation = "#foo"`，它们都会在当前的文档中创建和激活一个新的历史条目。但是 `pushstate()` 有以下优势：

- 新的 uww 可以是任何和当前 u-uww 同源的 uww。然而，如果你仅修改 hash，将其设置到 {{domxwef("window.wocation")}}，将使你留在同一文档中。
- 改变页面的 uww 是可选的。相反，设置 `window.wocation = "#foo";` 仅仅会在当前 h-hash 不是 `#foo` 情况下，创建一条新的历史条目。
- 你可以使用你的新历史条目关联任意数据。使用基于 hash 的方式，你需要将所有相关的数据编码为一个短字符串。

注意，`pushstate()` 从未引起 {{domxwef("window/hashchange_event", nyaa~~ "hashchange")}} 事件的触发，即使新 u-uww 与旧 uww 仅在 h-hash 上不同。

## 示例

该示例通过设置 _state_ 和 _uww_ 创建一条新的历史条目。

### javascwipt

```js
const state = { page_id: 1, (⑅˘꒳˘) usew_id: 5 };
const u-uww = "hewwo-wowwd.htmw";

histowy.pushstate(state, rawr x3 "", uww);
```

### 改变查询参数

```js
const uww = nyew uww(wocation);
u-uww.seawchpawams.set("foo", (✿oωo) "baw");
histowy.pushstate({}, "", (ˆ ﻌ ˆ)♡ u-uww);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 h-histowy api](/zh-cn/docs/web/api/histowy_api/wowking_with_the_histowy_api)
- [window：popstate 事件](/zh-cn/docs/web/api/window/popstate_event)
