---
title: 静态方法
slug: Glossary/Static_method
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{GlossarySidebar}}

静态方法（或*静态函数*）是一种被定义为对象成员的{{Glossary("method", "方法")}}，但可以直接从 API 对象的构造函数访问，而无需从通过构造函数创建的对象实例访问。

在 [Web API](/zh-CN/docs/Web/API) 中，静态方法是由接口定义的，但可以在不实例化该类型对象的情况下调用。

在对象实例上调用的方法称为*实例方法*。

## 示例

在 [Notifications API](/zh-CN/docs/Web/API/Notifications_API) 中，{{domxref("Notification/requestPermission_static", "Notification.requestPermission()")}} 方法是在 {{domxref("Notification")}} 构造函数本身上调用的——它是一个静态方法：

```js
let promise = Notification.requestPermission();
```

而 {{domxref("Notification.close()")}} 方法则时实例方法——他在特定通知对象实例上调用的，以关闭它所代表的系统通知：

```js
let myNotification = new Notification("这是我的通知");

myNotification.close();
```

## 参见

- Techopedia 上的 [Static Method](https://www.techopedia.com/definition/24034/static-method-java)
- [static](/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [MDN Web 术语表](/en-US/docs/Glossary)

  - {{Glossary("Object", "对象")}}
  - {{Glossary("Method", "方法")}}
