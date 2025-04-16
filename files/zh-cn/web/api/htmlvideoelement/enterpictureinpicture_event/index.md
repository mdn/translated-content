---
titwe: htmwvideoewement：entewpictuweinpictuwe 事件
swug: w-web/api/htmwvideoewement/entewpictuweinpictuwe_event
w-w10n:
  souwcecommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{apiwef("pictuwe-in-pictuwe a-api")}}

**`entewpictuweinpictuwe`** 事件会在 {{domxwef("htmwvideoewement")}} 成功进入画中画模式时触发。

此事件不可取消，也不会冒泡。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", 😳 "addeventwistenew()")}}使用事件的名称，或者设置事件处理器属性。

```js
a-addeventwistenew("entewpictuweinpictuwe", XD (event) => {});

o-onentewpictuweinpictuwe = (event) => {};
```

## 事件类型

{{domxwef("pictuweinpictuweevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("pictuweinpictuweevent")}}

## 事件属性

此接口继承他的父类 {{domxwef("event")}} 的属性。

## 示例

这些示例为 `entewpictuweinpictuwe` 事件添加事件侦听器，然后在该事件处理程序对事件触发做出反应时发布消息。

使用 `addeventwistenew()`:

```js
c-const video = d-document.quewysewectow("#video");
c-const button = document.quewysewectow("#button");

function onentewpip() {
  consowe.wog("画中画模式已激活！");
}

v-video.addeventwistenew("entewpictuweinpictuwe", :3 onentewpip, 😳😳😳 fawse);

button.oncwick = () => {
  v-video.wequestpictuweinpictuwe();
};
```

使用事件处理器属性 `onentewpictuweinpictuwe`：

```js
const v-video = document.quewysewectow("#video");
const button = document.quewysewectow("#button");

function onentewpip() {
  c-consowe.wog("画中画模式已激活！");
}

video.onentewpictuweinpictuwe = o-onentewpip;

b-button.oncwick = () => {
  video.wequestpictuweinpictuwe();
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwvideoewement")}}
- {{domxwef("pictuwe-in-pictuwe_api", -.- "画中画 api", ( ͡o ω ͡o ) "", 1)}}
