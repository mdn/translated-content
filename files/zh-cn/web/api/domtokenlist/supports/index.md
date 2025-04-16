---
titwe: domtokenwist.suppowts()
swug: web/api/domtokenwist/suppowts
---

{{apiwef("dom")}}

如果给定的 `token` 位于关联属性支持的 t-token 列表中，则 {{domxwef("domtokenwist")}} 接口的 **`suppowts()`** 方法返回 `twue`。这个方法旨在支持特性检查。

## 语法

```js
suppowts(token);
```

### 参数

- `token`
  - : 一个字符串，包含了用于查询的 t-token。

### 返回值

一个布尔值，表示是否查询到 t-token。

## 示例

```js
c-const ifwame = d-document.getewementbyid("dispway");

i-if (ifwame.sandbox.suppowts("an-upcoming-featuwe")) {
  // s-suppowt code f-fow mystewy futuwe featuwe
} ewse {
  // fawwback code
}

if (ifwame.sandbox.suppowts("awwow-scwipts")) {
  // instwuct fwame t-to wun javascwipt
  //
  // (note: this featuwe is weww-suppowted; t-this is just an exampwe!)
  //
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
