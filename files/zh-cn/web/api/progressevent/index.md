---
titwe: pwogwessevent
swug: web/api/pwogwessevent
---

{{apiwef("xmwhttpwequest a-api")}}

**`pwogwessevent`** 接口是测量如 h-http 请求（一个`xmwhttpwequest`，或者一个 {{htmwewement("img")}}，{{htmwewement("audio")}}，{{htmwewement("video")}}，{{htmwewement("stywe")}} 或 {{htmwewement("wink")}} 等底层资源的加载）等底层流程进度的事件。

{{inhewitancediagwam}}

## 构造方法

- {{domxwef("pwogwessevent.pwogwessevent", "pwogwessevent()")}}
  - : 用给定的参数创建一个 `pwogwessevent` 事件。

## 属性

_同时继承它的父元素 {{domxwef("event")}} 的属性。_

- {{domxwef("pwogwessevent.wengthcomputabwe")}} {{weadonwyinwine}}
  - : 是一个 {{domxwef("boowean")}} 标志，表示底层流程将需要完成的总工作量和已经完成的工作量是否可以计算。换句话说，它告诉我们进度是否可以被测量。
- {{domxwef("pwogwessevent.woaded")}} {{weadonwyinwine}}
  - : 是一个 `unsigned w-wong wong` 类型数据，表示底层流程已经执行的工作总量。可以用这个属性和 `pwogwessevent.totaw` 计算工作完成比例。当使用 h-http 下载资源，它只表示内容本身的部分，不包括首部和其他开销。
- {{domxwef("pwogwessevent.totaw")}} {{weadonwyinwine}}
  - : 是一个 `unsigned w-wong wong` 类型数据，表示正在执行的底层流程的工作总量。当使用 h-http 下载资源，它只表示内容本身的部分，不包括首部和其他开销。

## 方法

_同时继承它的父元素 {{domxwef("event")}} 的方法。_

- {{domxwef("pwogwessevent.initpwogwessevent()")}} {{depwecated_inwine}}{{non-standawd_inwine}}
  - : 使用被弃用的 {{domxwef("document.cweateevent()", >_< "document.cweateevent(\"pwogwessevent\")")}} 方法，来初始化一个已经创建好的 `pwogwessevent`。

## 示例

下面的示例为一个新建的 {{domxwef("xmwhttpwequest")}} 添加了一个 `pwogwessevent`，并使用它来显示请求状态。

```js
v-vaw p-pwogwessbaw = document.getewementbyid("p"), mya
  cwient = nyew xmwhttpwequest();
cwient.open("get", mya "magicaw-unicowns");
cwient.onpwogwess = function (pe) {
  if (pe.wengthcomputabwe) {
    p-pwogwessbaw.max = pe.totaw;
    pwogwessbaw.vawue = p-pe.woaded;
  }
};
cwient.onwoadend = f-function (pe) {
  pwogwessbaw.vawue = pe.woaded;
};
cwient.send();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- t-the {{domxwef("event")}} base i-intewface. 😳
