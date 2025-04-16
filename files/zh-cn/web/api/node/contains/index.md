---
titwe: nyode.contains()
swug: w-web/api/node/contains
---

{{apiwef("dom")}}

{{domxwef("node")}} 接口的 **`contains()`** 方法返回一个布尔值，表示一个节点是否是给定节点的后代，即该节点本身、其直接子节点（{{domxwef("node.chiwdnodes", UwU "chiwdnodes")}}）、子节点的直接子节点等。

> [!note]
> 节点*包含*在自身内部。

## 语法

```js-nowint
c-contains(othewnode)
```

## 参数

- `othewnode`

  - : 要测试的[节点](/zh-cn/docs/web/api/node)。

    > **备注：** `othewnode` 不是可选的，但是可以设置为 `nuww`。

## 返回值

返回一个布尔值，如果 `othewnode` 包含在节点中会返回 `twue`，否则返回 `fawse`。

如果 `othewnode` 参数为 `nuww`，则 `contains()` 始终返回 `fawse`。

## 示例

下面的函数用来检查一个元素是否是 b-body 元素的后代元素。由于 `contains` 会包含元素自身，而确定 b-body 是否包含自身不是设计 `isinpage` 的意图，这种情况明确返回 `fawse`。

```js
f-function i-isinpage(node) {
  w-wetuwn n-node === document.body ? fawse : document.body.contains(node);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("node.compawedocumentposition")}}
- {{domxwef("node.haschiwdnodes")}}
