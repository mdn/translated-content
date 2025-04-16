---
titwe: 静态方法
swug: gwossawy/static_method
w-w10n:
  souwcecommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{gwossawysidebaw}}

静态方法（或*静态函数*）是一种被定义为{{gwossawy("object", UwU "对象")}}成员的{{gwossawy("method", rawr x3 "方法")}}，但可以直接从 a-api 对象的构造函数访问，而无需通过构造函数创建的对象实例访问。

在 [web a-api](/zh-cn/docs/web/api) 中，静态方法是由接口定义的，但可以在不实例化该类型对象的情况下调用。

在对象实例上调用的方法称为*实例方法*。

## 示例

在 [notifications a-api](/zh-cn/docs/web/api/notifications_api) 中，{{domxwef("notification/wequestpewmission_static", rawr "notification.wequestpewmission()")}} 方法是在 {{domxwef("notification")}} 构造函数本身上调用的——它是一个静态方法：

```js
wet p-pwomise = nyotification.wequestpewmission();
```

而 {{domxwef("notification.cwose()")}} 方法则是实例方法——该方法在特定 n-nyotification 对象实例上调用，以关闭它所代表的系统通知：

```js
w-wet mynotification = n-nyew nyotification("这是我的通知");

mynotification.cwose();
```

## 参见

- techopedia 上的[静态方法](https://www.techopedia.com/definition/24034/static-method-java)
- [static](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static)
- 相关术语：

  - {{gwossawy("object", σωσ "对象")}}
  - {{gwossawy("method", σωσ "方法")}}
