---
title: Web-based protocol handlers
slug: Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers
---

## 背景

利用非 HTTP 协议，从网页链接到一些别的资源，这种做法是相当普遍的。比如 `mailto:` 协议：

```html
<a href="mailto:webmaster@example.com">Web Master</a>
```

当 Web 页面作者想直接从网页上，为用户提供一个方便的方式发送一个电子邮件，时可以使用 `mailto:` 链接。激活链接时，浏览器应该启动默认的桌面应用程序来处理电子邮件。你可以认为这是一个*基于桌面的*协议处理器。

基于网络的协议处理程序也允许基于 Web 的应用程序参与这一过程。随着越来越多的类型的应用程序迁移到 Web，这变得越来越重要。事实上，有许多基于 Web 的电子邮件处理的应用程序可以处理一个 mailto 链接。

## 注册

设置一个 Web 应用程序作为一个协议处理器不是一个很麻烦的过程。Web 应用程序可以使用 [registerProtocolHandler()](/zh-CN/docs/Web/API/navigator.registerProtocolHandler) 注册到浏览器上，从而对于一个给定的协议来讲，作为一个潜在的处理程序。例如：

```js
navigator.registerProtocolHandler(
  "mailto",
  "https://www.example.com/?uri=%s",
  "Example Mail",
);
```

参数为：

- 协议名称。
- URL 模板。%s 用来替换链接的 `href` 属性，之后通过这个 URL 来发起一个 GET 请求。
- 一个对用户友好的协议处理器的名字。

当一个浏览器执行这段代码时，它应该向用户显示一个请求，让用户许可为处理这个协议而注册一个 Web 应用程序的请求。Firefox 在通知栏区域显示一个提示：

![Screenshot of a prompt that reads: Add Burger handler (google.co.uk) as an application for burger links. An Add Application button is next to the text.](protocolregister.png)

> **备注：** 试图执行登记或注册时，当前网页必须与提供的 URL 模板在相同的域，否则将会失败。例如，`http://example.com/homepage.html` 可以为 `http://example.com/handle_mailto/%s` 注册一个协议处理程序，但 `http://example.org/handle_mailto/%s` 不可以。

多次注册相同的协议处理程序会弹出不同的通知，表明协议处理器已经注册。因此，发起一个注册协议处理程序的请求，之后检查是否注册是一个很好的方法。比如下面的例子：

### 例子

```js
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<head>
  <title>Web Protocol Handler Sample - Register</title>
  <script type="text/javascript">
    var url = "http://starkravingfinkle.org/projects/wph/handler.php?value=%s";
    if (!navigator.isProtocolHandlerRegistered("fake", url)) {
      navigator.registerProtocolHandler("fake", url, "Fake Protocol");
    }
  </script>
</head>
<body>
  <h1>Web Protocol Handler Sample</h1>
  <p>This web page will install a web protocol handler for the <code>fake:</code> protocol.</p>
</body>
</html>
```

## 激活

现在，只要用户点击链接，使用注册协议，浏览器将跳转到 Web 应用程序注册时提供的 URL。Firefox 在默认情况下，跳转前会提示用户操作。

### Example

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
  <head>
    <title>Web Protocol Handler Sample - Test</title>
  </head>
  <body>
    <p>Hey have you seen <a href="fake:this%20is%20fake">this</a> before?</p>
  </body>
</html>
```

## 处理

下一步是处理这个动作。浏览器在激活的链接中提取出 href 属性，之后与注册时提供的 URL 模板进行拼装，之后经由拼装好的 URL 发起一个 HTTP GET 请求。因此下面的例子中，浏览器会基于此 URL 发起一个 GET 请求：

```
http://starkravingfinkle.org/projects/wph/handler.php?value=fake:this%20is%20fake
```

服务端代码可以提取查询字符串的参数，执行所需的操作。

> **备注：** 服务端代码会接收到 href 的**全部**内容。这意味着服务端代码必须解析出数据中的协议。

### Example

```php
<?php
$value = "";
if ( isset ( $_GET["value"] ) ) {
  $value = $_GET["value"];
}
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<head>
    <title>Web Protocol Handler Sample</title>
</head>
<body>
  <h1>Web Protocol Handler Sample - Handler</h1>
  <p>This web page is called when handling a <code>fake:</code> protocol action. The data sent:</p>
  <textarea>
<?php echo(htmlspecialchars($value, ENT_QUOTES, 'UTF-8')); ?>
  </textarea>
</body>
</html>
```

## 参考

- <http://www.w3.org/TR/2011/WD-html5-20110525/timers.html#custom-handlers>

## See also

- [window.navigator.registerContentHandler](/zh-CN/docs/DOM/window.navigator.registerContentHandler)
- [nsIProtocolHandler](/zh-CN/docs/XPCOM_Interface_Reference/nsIProtocolHandler) (XUL only)
- [RegisterProtocolHandler Enhancing the Federated Web](http://blog.mozilla.com/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/) at Mozilla Webdev
- [Register a custom protocolHandler](https://developers.google.com/web/updates/2011/06/Registering-a-custom-protocol-handler) at Google Developers.
