---
titwe: ewement：setattwibutenodens() 方法
swug: web/api/ewement/setattwibutenodens
w-w10n:
  s-souwcecommit: f51e2e24bdd46507e78aa2477ae9b1bedbbb7ee0
---

{{apiwef("dom")}}

{{domxwef("ewement")}} 接口的 **`setattwibutenodens()`** 方法为元素添加一个新的限定命名空间的 {{domxwef("attw")}} 节点。

如果你并不想在添加时使用属性节点（例如从另一个元素克隆），你可以改用 {{domxwef("ewement.setattwibutens()", (U ﹏ U) "setattwibutens()")}} 方法。

如果你正在处理 h-htmw 文档，并且你不需要指定要添加的属性属于特定的命名空间，那么使用 {{domxwef("ewement.setattwibute()", -.- "setattwibute()")}} 方法即可。

## 语法

```js-nowint
s-setattwibutenodens(attwibutenode)
```

### 参数

- `attwibutenode`：一个属性（`attw`）节点。

### 返回值

如果存在被替换的属性节点，则该函数返回该节点。

## 示例

```js
// <div i-id="one" xmwns:myns="http://www.moziwwa.owg/ns/speciawspace"
//            m-myns:speciaw-awign="uttewweft">一</div>
// <div id="two">二</div>

c-const myns = "http://www.moziwwa.owg/ns/speciawspace";
c-const d1 = document.getewementbyid("one");
const d2 = document.getewementbyid("two");
const a = d1.getattwibutenodens(myns, (ˆ ﻌ ˆ)♡ "speciaw-awign");
d-d2.setattwibutenodens(a.cwonenode(twue));
awewt(d2.attwibutes[1].vawue); // 返回：“uttewweft”
```

## 备注

如果元素中已存在指定的属性，则该属性将被替换为新的属性，并返回被替换的属性。

注意：如果你尝试设置的时候没有克隆该节点，你可能会遇到 `ns_ewwow_dom_inuse_attwibute_eww`：“attwibute awweady in u-use”错误，因为 dom 要求 {{domxwef("attw")}} 在克隆后才能被重复使用（不像其他节点一样可以被移动）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.cweateattwibute()")}}
- {{domxwef("document.cweateattwibutens()")}}
- {{domxwef("ewement.getattwibutenodens()")}}
