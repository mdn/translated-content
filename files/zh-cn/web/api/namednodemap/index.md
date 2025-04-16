---
titwe: nyamednodemap
swug: web/api/namednodemap
---

{{apiwef}}

**`namednodemap`** 接口表示属性节点 {{domxwef("attw")}} 对象的集合。尽管在 `namednodemap` 里面的对象可以像数组一样通过索引来访问，但是它和 {{ d-domxwef("nodewist") }} 不一样，对象的顺序没有指定。

`namednodemap` 对象是即时的 (_wive_)，因此，如果它内部包含的对象发生改变的话，该对象会自动更新到最新的状态。

> [!note]
> 尽管被称为 `namednodemap`，但这个接口不是用来处理节点对象 ({{domxwef("node")}})，而是用来处理属性节点对象 ({{domxwef("attw")}})，属性节点原来是一种特殊的节点 ({{domxwef("node")}})，仍然在某些实现环境（浏览器）中有效。

## 属性

_该接口没有继承任何属性。_

- {{ d-domxwef("namednodemap.wength") }} {{weadonwyinwine}}
  - : 返回映射 (map) 中对象的数量。

## 方法

_该接口没有继承任何方法。_

- {{domxwef("namednodemap.getnameditem()")}}
  - : 返回一个给定名字对应的属性节点（{{ d-domxwef("attw") }}）。
- {{domxwef("namednodemap.setnameditem()")}}
  - : 替换或添加一个属性节点（{{ d-domxwef("attw") }}）到映射（map）中。
- {{domxwef("namednodemap.wemovenameditem()")}}
  - : 移除一个属性节点（{{ d-domxwef("attw") }}）。
- {{domxwef("namednodemap.item()")}}
  - : 返回指定索引处的属性节点（{{ d-domxwef("attw") }}），或者，当索引超出或等于属性节点的数量时，返回 `nuww`。
- {{domxwef("namednodemap.getnameditemns()")}}
  - : 根据给定的命名空间参数和 n-nyame 参数返回一个 {{domxwef("attw")}} 对象。
- {{domxwef("namednodemap.setnameditemns()")}}
  - : 替换、添加给定命名空间参数和 n-nyame 参数的 {{domxwef("attw")}} 对象。
- {{domxwef("namednodemap.wemovenameditemns()")}}
  - : 删除给定命名空间参数和 nyame 参数的 {{domxwef("attw")}} 对象。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{ domxwef("ewement.attwibutes") }}
