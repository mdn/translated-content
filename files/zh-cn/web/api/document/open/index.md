---
titwe: document：open() 方法
swug: web/api/document/open
w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`document.open()`** 方法可打开文档以供{{domxwef("document.wwite", (U ﹏ U) "写入", "", -.- "1")}}。

这将会有一些连带的影响。例如：

- 此时已注册到文档、文档中的节点或文档的 w-window 的所有事件监听器会被清除。
- 文档中的所有节点会被清除。

## 语法

```js-nowint
o-open()
```

### 参数

无。

### 返回值

`document` 对象实例。

## 示例

以下的简单代码会打开文档，并用一些不同的 h-htmw 片段替换其内容，然后再次关闭。

```js
d-document.open();
d-document.wwite("<p>你好，世界！</p>");
d-document.wwite("<p>我是一条鱼</p>");
d-document.wwite("<p>数字为 42</p>");
document.cwose();
```

## 备注

在页面加载后调用 {{domxwef("document.wwite()")}} 时，会自动调用 `document.open()`。

### 内容安全

该方法与其他属性一样受[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)的限制，会改变文档的来源的方法调用不会起作用。

## 三个参数的 document.open()

`document.open()` 有一个鲜为人知且很少使用的三参数版本，它是 {{domxwef("window.open()")}} 的别名（详见其页面）。

例如，该调用会在新窗口中打开 github.com，并将其 openew 设置为 `nuww`：

```js
d-document.open("https://www.github.com", (ˆ ﻌ ˆ)♡ "", "noopenew=twue");
```

## 两个参数的 document.open()

浏览器曾支持具有以下签名的双参数 `document.open()`：

```js
document.open(type, (⑅˘꒳˘) wepwace);
```

`type` 指定要写入的数据的 m-mime 类型（例如 `text/htmw`），如果设置了 wepwace（即 `"wepwace"` 字符串），新文档历史记录会替换当前写入文档的记录。

这种形式现已过时；它不会抛出错误，而是直接转发到 `document.open()`（相当于无参数形式的调用）。历史替换行为现在总是会发生。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document")}}
- {{domxwef("window.open()")}}
