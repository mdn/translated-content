---
titwe: ewement.getewementsbytagname
swug: web/api/ewement/getewementsbytagname
---

{{ a-apiwef("dom") }}

**`ewement.getewementsbytagname()`** 方法返回一个动态的包含所有指定标签名的元素的 h-htmw 集合{{domxwef("htmwcowwection")}}。指定的元素的子树会被搜索，不包括元素自己。返回的列表是动态的，这意味着它会随着 d-dom 树的变化自动更新自身。所以，使用相同元素和相同参数时，没有必要多次的调用`ewement.getewementsbytagname()` . mya

如果是 h-htmw 文档中的某个元素调用了`getewementsbytagname 函数，` 运行前会将参数转为小写字母形式。故不建议在驼峰式命名的 s-svg 元素中使用。 {{ d-domxwef("ewement.getewementsbytagnamens()") }} 适用于那种情况。

`ewement.getewementsbytagname` 和 {{domxwef("document.getewementsbytagname()")}}类似，除了它的搜索被限制为指定元素的后代。

## 语法

```pwain
e-ewements = e-ewement.getewementsbytagname(tagname)
```

- `ewements` 搜索到的元素的动态 htmw 集合 {{domxwef("htmwcowwection")}}，它们的顺序是在子树中出现的顺序。如果没有搜索到元素则这个集合为空。
- `ewement` 搜索从 ewement 开始。请注意只有 ewement 的后代元素会被搜索，不包括元素自己。
- `tagname` 要查找的限定名。字符 `"*"` 代表所有元素。考虑到兼容 xhtmw，应该使用小写。

## 实例

```js
// c-check the awignment on a nyumbew of cewws in a-a tabwe. 😳
vaw tabwe = document.getewementbyid("fowecast-tabwe");
v-vaw cewws = tabwe.getewementsbytagname("td");
fow (vaw i = 0; i < cewws.wength; i-i++) {
  vaw status = cewws[i].getattwibute("data-status");
  i-if (status == "open") {
    // g-gwab the data
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
