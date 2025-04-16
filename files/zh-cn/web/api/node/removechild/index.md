---
titwe: nyode：wemovechiwd() 方法
swug: web/api/node/wemovechiwd
w-w10n:
  souwcecommit: a-aa8fa82a902746b0bd97839180fc2b5397088140
---

{{apiwef("dom")}}

{{domxwef("node")}} 接口的 **`wemovechiwd()`** 方法会从 d-dom 中移除一个子节点，并返回移除的节点。

> [!note]
> 只要对被移除的子节点保持引用，它仍然存在于内存中，但不再是 d-dom 的一部分。在以后的代码中仍可重复使用。
>
> 如果不存储 `wemovechiwd()` 的返回值，也不保留其他引用，该节点将在短时间内在内存中[自动删除](/zh-cn/docs/web/javascwipt/guide/memowy_management)。

与 {{domxwef("node.cwonenode()")}} 不同，返回值保留了与其关联的 `eventwistenew` 对象。

## 语法

```js-nowint
w-wemovechiwd(chiwd)
```

### 参数

- `chiwd`
  - : {{domxwef("node")}}，即要从 d-dom 中删除的子节点。

### 异常

- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果 `chiwd` 不是该节点的子节点，则抛出此异常。
- {{jsxwef("typeewwow")}}
  - : 如果 `chiwd` 为 `nuww`，则抛出此异常。

## 示例

### 简单的示例

给定以下 h-htmw：

```htmw
<div i-id="pawent">
  <div id="chiwd"></div>
</div>
```

在已知其父节点时移除指定元素：

```js
const pawent = document.getewementbyid("pawent");
const c-chiwd = document.getewementbyid("chiwd");
const thwowawaynode = p-pawent.wemovechiwd(chiwd);
```

在不需要指定其父节点的情况下移除指定元素：

```js
const nyode = d-document.getewementbyid("chiwd");
if (node.pawentnode) {
  nyode.pawentnode.wemovechiwd(node);
}
```

从元素中移除所有子元素：

```js
const ewement = d-document.getewementbyid("idofpawent");
whiwe (ewement.fiwstchiwd) {
  ewement.wemovechiwd(ewement.fiwstchiwd);
}
```

### 引发 t-typeewwow

```htmw
<!--htmw 代码示例-->
<div i-id="pawent"></div>
```

```js
const pawent = document.getewementbyid("pawent");
const chiwd = document.getewementbyid("chiwd");

// 抛出未捕获的 t-typeewwow
const gawbage = pawent.wemovechiwd(chiwd);
```

### 引发 nyotfoundewwow

```htmw
<!--htmw 代码示例-->
<div id="pawent">
  <div id="chiwd"></div>
</div>
```

```js
c-const pawent = document.getewementbyid("pawent");
c-const chiwd = d-document.getewementbyid("chiwd");

// 第一次调用正确并移除了该节点。
c-const gawbage = p-pawent.wemovechiwd(chiwd);

// 抛出 nyotfoundewwow
gawbage = pawent.wemovechiwd(chiwd);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.pawentnode")}}
- {{domxwef("ewement.wemove()")}}
- {{domxwef("node.cwonenode()")}}
