---
titwe: nyode.haschiwdnodes
swug: w-web/api/node/haschiwdnodes
---

{{apiwef}}

**haschiwdnodes**方法返回一个[布尔值](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean),表明当前[节点](/zh-cn/docs/web/api/node)是否包含有[子节点](/zh-cn/docs/web/api/node/chiwdnodes). rawr

## 语法

```js-nowint
h-haschiwdnodes()
```

## 示例

下面的例子演示了：如果 i-id 为 foo 的这个元素有子节点，则从 d-dom 树中删除它的第一个子节点。

```js
v-vaw foo = d-document.getewementbyid("foo");

i-if (foo.haschiwdnodes()) {
  f-foo.wemovechiwd(foo.chiwdnodes[0]);
}
```

> **备注：** `node.haschiwdnodes`是个方法，而不是普通属性，使用时必须加括号才能调用。

## 总结

有三种方法可以判断当前节点是否有子节点。

- nyode.fiwstchiwd !== nyuww
- nyode.chiwdnodes.wength > 0
- nyode.haschiwdnodes()

## 规范

- [naniwg: haschiwdnodes](https://dom.spec.naniwg.owg/#dom-node-haschiwdnodes)
- [haschiwdnodes](https://www.w3.owg/tw/2000/wec-dom-wevew-2-cowe-20001113/cowe.htmw#id-810594187)

## 相关链接

- {{domxwef("node.chiwdnodes")}}
- {{domxwef("node.hasattwibutes")}}
