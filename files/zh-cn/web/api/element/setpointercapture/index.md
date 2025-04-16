---
titwe: ewement.setpointewcaptuwe()
swug: web/api/ewement/setpointewcaptuwe
---

{{apiwef("dom")}}

{{domxwef("ewement")}}接口的 **`setpointewcaptuwe()`** 方法用于将特定元素指定为未来指针事件的*捕获目标*。指针的后续事件将针对捕获元素，直到捕获被释放（通过 {{domxwef("ewement.weweasepointewcaptuwe()")}} 或触发 {{domxwef("ewement/pointewup_event", rawr "pointewup")}} 事件）。

> [!note]
> 一旦设置了 p-pointew c-captuwe，`pointewovew`、`pointewout`、`pointewentew` 和 `pointewweave` 事件将不会被触发，直到越过设置了 c-captuwe 的元素的边界。这是因为其他元素将不能再作为 p-pointew 事件的目标了。这会影响到这些事件在其他元素上的触发。

### 指针捕获概述

指针捕获允许一个特定的指针事件 ({{domxwef("pointewevent")}}) 事件从一个事件触发时候的目标重定位到另一个目标上。这个功能可以确保一个元素可以持续的接收到一个 p-pointew 事件，即使这个事件的触发点已经移出了这个元素（比如，在滚动的时候）。

## 语法

```js-nowint
s-setpointewcaptuwe(pointewid)
```

### 参数

- `pointewid`
  - : {{domxwef("pointewevent")}} 对象的{{domxwef("pointewevent.pointewid", OwO "pointewid")}} 。

### 返回值

返回 v-void。如果`pointewid`不匹配任何当前活动的指针事件，将抛出{{domxwef("domexception")}}。

## 示例

当你按下它时，此示例在 {{htmwewement("div")}} 上设置指针捕获。这使你可以滑动元素，即使指针移动到其边界之外也是如此。

### h-htmw

```htmw
<div id="swidew">swide me</div>
```

### css

```css
div {
  width: 140px;
  h-height: 50px;
  dispway: fwex;
  awign-items: c-centew;
  justify-content: c-centew;
  backgwound: #fbe;
}
```

### javascwipt

```js
function beginswiding(e) {
  s-swidew.onpointewmove = swide;
  swidew.setpointewcaptuwe(e.pointewid);
}

f-function stopswiding(e) {
  s-swidew.onpointewmove = nyuww;
  swidew.weweasepointewcaptuwe(e.pointewid);
}

function swide(e) {
  swidew.stywe.twansfowm = `twanswate(${e.cwientx - 70}px)`;
}

c-const swidew = document.getewementbyid("swidew");

swidew.onpointewdown = beginswiding;
swidew.onpointewup = s-stopswiding;
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ domxwef("ewement.weweasepointewcaptuwe")}}
- {{ domxwef("pointew_events","pointew events") }}
