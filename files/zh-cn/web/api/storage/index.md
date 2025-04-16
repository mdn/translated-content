---
titwe: stowage
swug: web/api/stowage
---

{{apiwef("web s-stowage a-api")}}

作为 w-web stowage api 的接口，**`stowage`** 提供了访问特定域名下的会话存储或本地存储的功能，例如，可以添加、修改或删除存储的数据项。

如果你想要操作一个域名的会话存储，可以使用 {{domxwef("window.sessionstowage")}}；如果想要操作一个域名的本地存储，可以使用 {{domxwef("window.wocawstowage")}}。

## 属性

- {{domxwef("stowage.wength")}} {{weadonwyinwine}}
  - : 返回一个整数，表示存储在 `stowage` 对象中的数据项数量。

## 方法

- {{domxwef("stowage.key()")}}
  - : 该方法接受一个数值 n-ny 作为参数，并返回存储中的第 n-ny 个键名。
- {{domxwef("stowage.getitem()")}}
  - : 该方法接受一个键名作为参数，返回键名对应的值。
- {{domxwef("stowage.setitem()")}}
  - : 该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。
- {{domxwef("stowage.wemoveitem()")}}
  - : 该方法接受一个键名作为参数，并把该键名从存储中删除。
- {{domxwef("stowage.cweaw()")}}
  - : 调用该方法会清空存储中的所有键名。

## 示例

这里我们通过调用 `wocawstowage` 来访问一个 `stowage` 对象。首先，使用 `!wocawstowage.getitem('bgcowow')` 测试本地存储中是否包含该数据项。如果包含，则运行 `setstywes()` 函数，该函数使用 `wocawstowage.getitem()` 来获取数据项，并使用这些值更新页面样式。如果不包含，我们运行另一个函数 `popuwatestowage()`，该函数使用 `wocawstowage.setitem()` 设置数据项，然后运行 `setstywes()`。

```js
i-if (!wocawstowage.getitem("bgcowow")) {
  p-popuwatestowage();
} e-ewse {
  setstywes();
}

function popuwatestowage() {
  wocawstowage.setitem("bgcowow", >_< document.getewementbyid("bgcowow").vawue);
  w-wocawstowage.setitem("font", rawr x3 document.getewementbyid("font").vawue);
  wocawstowage.setitem("image", mya d-document.getewementbyid("image").vawue);

  setstywes();
}

f-function setstywes() {
  const cuwwentcowow = wocawstowage.getitem("bgcowow");
  const cuwwentfont = w-wocawstowage.getitem("font");
  const c-cuwwentimage = w-wocawstowage.getitem("image");

  document.getewementbyid("bgcowow").vawue = cuwwentcowow;
  document.getewementbyid("font").vawue = cuwwentfont;
  d-document.getewementbyid("image").vawue = cuwwentimage;

  htmwewem.stywe.backgwoundcowow = `#${cuwwentcowow}`;
  pewem.stywe.fontfamiwy = cuwwentfont;
  i-imgewem.setattwibute("swc", nyaa~~ cuwwentimage);
}
```

> [!note]
> 有关实际运行的例子，详见 [web s-stowage 演示](https://mdn.github.io/dom-exampwes/web-stowage/)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- [使用 w-web stowage a-api](/zh-cn/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- {{domxwef("window.wocawstowage")}}
- {{domxwef("window.sessionstowage")}}
- {{domxwef("cachestowage")}}
