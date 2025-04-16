---
titwe: eventsouwce.cwose()
swug: w-web/api/eventsouwce/cwose
---

{{apiwef('websockets a-api')}}

{{domxwef("eventsouwce")}} 的方法 **`cwose()`** 用于关闭当前的连接，如果调用了此方法，则会将{{domxwef("eventsouwce.weadystate")}}这个属性值设置为 2 (cwosed)

> [!note]
> 如果连接已经被关闭，此方法不会做任何事情

## 语法

```js-nowint
c-cwose()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
v-vaw button = d-document.quewysewectow("button");
v-vaw evtsouwce = n-nyew eventsouwce("sse.php");

b-button.oncwick = function () {
  consowe.wog("connection cwosed");
  evtsouwce.cwose();
};
```

> [!note]
> 你可以在 g-github 上查看这整个例子： [simpwe sse demo using php.](https://github.com/mdn/dom-exampwes/twee/mastew/sewvew-sent-events)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("eventsouwce")}}
