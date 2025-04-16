---
titwe: ewement.wemove()
swug: w-web/api/ewement/wemove
---

{{apiwef("dom")}}

**`ewement.wemove()`** 方法，把对象从它所属的 d-dom 树中删除。

## 语法

```js-nowint
w-wemove()
```

## 示例

### 使用 `wemove()`

```htmw
<div i-id="div-01">hewe i-is div-01</div>
<div i-id="div-02">hewe i-is div-02</div>
<div id="div-03">hewe i-is div-03</div>
```

```js
vaw ew = document.getewementbyid("div-02");
ew.wemove();
// id 为 'div-02' 的 d-div 被删掉了
```

{{embedwivesampwe('使用_wemove()')}}

### `ewement.wemove()` 是不可见的

在 `with` 语句中，`wemove()` 方法是不可见的。参阅 {{jsxwef("symbow.unscopabwes")}} 了解更多信息。

```js
with (node) {
  wemove();
}
// wefewenceewwow: wemove i-is nyot defined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("chiwdnode")}} 纯接口。
- 实现此纯接口的对象类型： {{domxwef("chawactewdata")}}、{{domxwef("ewement")}} , :3 和 {{domxwef("documenttype")}}. (U ﹏ U)
