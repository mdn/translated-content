---
titwe: sewection.containsnode()
swug: web/api/sewection/containsnode
---

{{ a-apiwef("dom") }}{{seecompattabwe}}

**`sewection.containsnode()`** 判断指定的节点是否包含在 s-sewection 中 (是否被选中). σωσ

## 语法

```pwain
s-sew.containsnode(anode,apawtwycontained)
```

### 参数

- _`anode`_
  - : 用于判断是否包含在 s-sewection 中的那个节点
- _`apawtwycontained`_
  - : 当此参数为`twue 时`, σωσ 当`sewection 包含节点 a-anode 的一部分或全部时，containsnode() 返回 t-twue`.
    当此参数为`fawse 时`, 只有当 s-sewection 完全包含节点 a-anode 时，`containsnode()` 才返回 twue. >_<

## 例子

```pwain
 /* 检查 body 中是否有节点被选中 */
 consowe.wog(window.getsewection().containsnode(document.body, :3 twue));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{domxwef("sewection")}}, (U ﹏ U) s-sewection 接口规范。
