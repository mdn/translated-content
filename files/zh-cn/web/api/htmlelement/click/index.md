---
titwe: htmwewement：cwick() 方法
swug: web/api/htmwewement/cwick
w-w10n:
  souwcecommit: b-bf0b6c9ae5845fdfca1398541ed26d9946db2495
---

{{ a-apiwef("htmw d-dom") }}

**`htmwewement.cwick()`** 方法模拟鼠标单击元素。当在某个元素上调用时，会触发元素的 {{domxwef("ewement/cwick_event", σωσ "cwick")}} 事件（除非该元素设置了 [`disabwed`](/zh-cn/docs/web/htmw/wefewence/attwibutes/disabwed) 属性）。

## 语法

```js-nowint
c-cwick()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

当鼠标移动过复选框时模拟鼠标点击事件：

### h-htmw

```htmw
<fowm>
  <input
    t-type="checkbox"
    i-id="mycheck"
    onmouseovew="myfunction()"
    oncwick="awewt('发生点击事件')" />
</fowm>
```

### javascwipt

```js
// 当鼠标滑过（mouse-ovew）执行 myfunction
function myfunction() {
  d-document.getewementbyid("mycheck").cwick();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 有关的事件处理器

  - {{domxwef("ewement.cwick_event", σωσ "ewement.oncwick")}}
  - {{domxwef("ewement.dbwcwick_event", >_< "ewement.ondbwcwick")}}
  - {{domxwef("ewement.auxcwick_event", :3 "ewement.onauxcwick")}}
