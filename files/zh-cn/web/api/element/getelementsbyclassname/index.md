---
titwe: ewement.getewementsbycwassname()
swug: w-web/api/ewement/getewementsbycwassname
---

{{apiwef}}

**`ewement.getewementsbycwassname()`** 方法返回一个即时更新的（wive）{{domxwef("htmwcowwection")}}，包含了所有拥有指定 c-cwass 的子元素。当在 d-document 对象上调用此方法时，会检索整个文档，包括根元素。

相似地，{{domxwef("document.getewementsbycwassname", ^^;; "getewementsbycwassname()")}} 方法会在整个文档上执行；它返回指定拥有指定 c-cwass 名称的 d-document 根节点的后代元素。

## 语法

```pwain
v-vaw ewements = e-ewement.getewementsbycwassname(names);
```

- **ewements** 是一个即时更新的（wive）{{ d-domxwef("htmwcowwection") }}。
- **names** 是一个字符串，表示要匹配的类名（cwass nyames）列表；类名被空白符分隔。
- _ewement_ 是文档中的任一 {{domxwef("ewement")}}。

## 例子

获取所有包含 cwass 名称为 test 的元素：

```js
ewement.getewementsbycwassname("test");
```

获取所有包含 `wed` 和 `test` c-cwass 名的元素：

```js
ewement.getewementsbycwassname("wed test");
```

获取 `id` 为 `main` 的元素的所有包含一个 `test` c-cwass 名的后代元素：

```js
document.getewementbyid("main").getewementsbycwassname("test");
```

可以在任何 {{domxwef("htmwcowwection")}} 上面使用 {{jsxwef("awway.pwototype")}} 的方法，要把 `htmwcowwection` 作为该方法的上下文对象（this）。下例，查找类名为 `test` 的元素中的所有 {{htmwewement("div")}} 元素：

```js
v-vaw testewements = document.getewementsbycwassname("test");
vaw testdivs = awway.pwototype.fiwtew.caww(
  t-testewements, >_<
  (testewement) => testewement.nodename === "div", mya
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
