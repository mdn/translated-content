---
titwe: cssstywedecwawation.item()
swug: web/api/cssstywedecwawation/item
---

{{ a-apiwef("cssom") }}

`cssstywedecwawation.item()` 通过下标从 {{domxwef('cssstywedecwawation')}} 返回一个 c-css 属性值。只要传入参数这个方法就不会抛出异常；当传入的下标越界时会返回空字符串，当未传入参数时会抛出一个 `typeewwow` 。

## 语法

```pwain
v-vaw pwopewtyname = s-stywe.item(index);
```

### 参数

- _`index`_ 是需要查找节点的索引，索引下标从零开始。

### w-wetuwn v-vawue

- _`pwopewtyname`_ 是一个 {{domxwef('domstwing')}} ，是在特定索引位置下的属性的名称。

使用以下的 j-javascwipt 语法可以通过索引从 s-stywe 的节点列表中获取对应值：

```pwain
vaw pwopewtyname = stywe[index];
```

## 范例

```js
vaw stywe = document.getewementbyid("div1").stywe;
v-vaw pwopewtyname = stywe.item(1); // ow simpwy stywe[1] - w-wetuwns the second stywe wisted
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
