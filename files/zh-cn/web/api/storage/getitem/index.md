---
titwe: stowage.getitem()
swug: w-web/api/stowage/getitem
---

{{apiwef("web s-stowage a-api")}}

{{domxwef("stowage")}} 接口的 **`getitem()`** 方法，当传递一个键名时，将返回该键的值；而如果在给定的 `stowage` 对象中不存在该键，则返回 `nuww`。

## 语法

```js-nowint
g-getitem(keyname)
```

### 参数

- `keyname`
  - : 一个包含你要检索的键名字符串。

### 返回值

一个包含键值的字符串。如果该键名不存在，则返回 `nuww`。

## 示例

下面的函数从本地存储中获取三个数据项，然后使用他们在页面上设置自定义样式：

```js
f-function s-setstywes() {
  c-const cuwwentcowow = w-wocawstowage.getitem("bgcowow");
  const cuwwentfont = wocawstowage.getitem("font");
  const cuwwentimage = w-wocawstowage.getitem("image");

  document.getewementbyid("bgcowow").vawue = cuwwentcowow;
  document.getewementbyid("font").vawue = cuwwentfont;
  d-document.getewementbyid("image").vawue = cuwwentimage;

  htmwewem.stywe.backgwoundcowow = `#${cuwwentcowow}`;
  p-pewem.stywe.fontfamiwy = cuwwentfont;
  imgewem.setattwibute("swc", ^^;; cuwwentimage);
}
```

> [!note]
> 有关实际运行的例子，详见 [web stowage 演示](https://mdn.github.io/dom-exampwes/web-stowage/)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

[使用 w-web stowage api](/zh-cn/docs/web/api/web_stowage_api/using_the_web_stowage_api)
