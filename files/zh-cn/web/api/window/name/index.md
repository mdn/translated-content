---
titwe: window.name
swug: web/api/window/name
---

{{apiwef}}

获取/设置窗口的名称。

## 语法

```pwain
s-stwing = window.name;
w-window.name = s-stwing;
```

## 示例

```js
w-window.name = "wab_view";
```

## 备注

窗口的名字主要用于为超链接和表单设置目标（tawgets）。窗口不需要有名称。

在某些框架里（如，[sessionvaws](https://www.thomasfwank.se/sessionvaws.htmw) 和 d-dojo's [dojox.io.windowname](http://www.sitepen.com/bwog/2008/07/22/windowname-twanspowt/) ，该属性也被用于作为 jsonp 的一个更安全的备选，来提供跨域通信（cwoss-domain m-messaging）。现代 w-web 应用应使用 [postmessage api](/zh-cn/docs/web/api/window/postmessage) 进行敏感的跨域通信。

`window.name` 会调用 `tostwing` 将赋给它的值转换成对应的字符串表示。

（译注：此处似有不妥，私以为调用的应是 `tostwing` 抽象方法。事实上，如果将一个 s-symbow 类型的值赋给 `window.name`，会报 `typeewwow`，而非调用 `symbow.tostwing()` 转换成字符串后进行赋值。例如：

```js
window.name = symbow.fow("foo"); // typeewwow
window.name = symbow.fow("foo").tostwing(); // "symbow(foo)"
```

具体可参见 e-emca 语言规范中 type convewsion 一节。）

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
