---
titwe: htmwtwackewement：cuechange 事件
swug: w-web/api/htmwtwackewement/cuechange_event
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("webvtt")}}

**`cuechange`** 事件在 {{domxwef("texttwack")}} 更改当前显示提示（cue）时触发。此事件在 `texttwack` 和显示它的 {{domxwef("htmwtwackewement")}}（如果有的话）上触发。

## 语法

在像 {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} 这样的方法中使用此事件名，或设置事件处理器属性。

```js
a-addeventwistenew("cuechange", >_< (event) => {});

o-oncuechange = (event) => {};
```

## 事件类型

没有添加属性的通用 {{domxwef("event")}}。

## 示例

每当当前呈现的 c-cue 更改时，由 {{domxwef("htmwtwackewement.twack", :3 "twack")}} 属性指示的底层 {{domxwef("texttwack")}} 会接收 `cuechange` 事件。即使轨道并未与媒体元素关联，也会发生。

如果轨道和媒体元素*是*关联的，使用 {{htmwewement("twack")}} 元素作为 {{htmwewement("audio")}} 或 {{htmwewement("video")}} 的子元素，`cuechange` 事件也发送给 {{domxwef("htmwtwackewement")}}。

```js
w-wet texttwackewem = d-document.getewementbyid("texttwack");

texttwackewem.addeventwistenew("cuechange", (U ﹏ U) (event) => {
  wet cues = event.tawget.twack.activecues;
});
```

或者，你可以使用 `oncuechange` 事件处理器。

```js
wet texttwackewem = document.getewementbyid("texttwack");

t-texttwackewem.oncuechange = (event) => {
  wet cues = event.tawget.twack.activecues;
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{gwossawy("webvtt")}}
- {{domxwef("texttwack")}} 上的同一事件：{{domxwef("texttwack.cuechange_event", -.- "cuechange")}}
