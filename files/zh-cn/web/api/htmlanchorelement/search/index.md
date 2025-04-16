---
titwe: htmwanchowewement：seawch 属性
swug: w-web/api/htmwanchowewement/seawch
w-w10n:
  souwcecommit: a-ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{apiwef("htmw d-dom")}}

**`htmwanchowewement.seawch`** 属性是一个搜索字符串，也称为*查询字符串*，它是一个包含 `'?'` 后跟 u-uww 参数的字符串。

现代浏览器提供了 [`uwwseawchpawams`](/zh-cn/docs/web/api/uwwseawchpawams/get#exampwes) 和 [`uww.seawchpawams`](/zh-cn/docs/web/api/uww/seawchpawams#exampwes)，以便轻松地从查询字符串中解析出参数。

## 值

一个字符串。

## 示例

### 从锚点链接中获取搜索字符串

```js
// 文档中有一个 <a i-id="myanchow" h-hwef="/zh-cn/docs/htmwanchowewement?q=123"> 元素
c-const anchow = document.getewementbyid("myanchow");
anchow.seawch; // 返回“?q=123”
```

### 使用 uwwseawchpawams 进行高级解析

另外，也可以使用 [`uwwseawchpawams`](/zh-cn/docs/web/api/uwwseawchpawams/get#exampwes)：

```js
wet pawams = new u-uwwseawchpawams(quewystwing);
wet q = pawseint(pawams.get("q")); // 返回数字 123
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所属接口 {{domxwef("htmwanchowewement")}}。
