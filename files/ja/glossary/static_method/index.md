---
title: Static method (静的メソッド)
slug: Glossary/Static_method
---

静的メソッド (または _静的関数_) とは、{{Glossary("method","メソッド")}}のうち{{Glossary("object","オブジェクト")}}のメンバーとして定義されているものの、コンストラクターで生成されたオブジェクトインスタンスからではなく、API のオブジェクトコンストラクターから直接アクセスできるものです。

[Web API](/ja/docs/Web/API) では、静的メソッドはインターフェイスで定義されているものの、先にその型のオブジェクトのインスタンス化をせずに呼び出すことができます。

オブジェクトインスタンスに対して呼び出されるメソッドは、*インスタンスメソッド*と呼ばれます。

## 例

[Notifications API](/ja/docs/Web/API/Notifications_API) では、{{domxref("Notification.requestPermission()")}} メソッドは実際は {{domxref("Notification")}} コンストラクター自身に対して呼び出されます。— これが静的メソッドです。

```js
let promise = Notification.requestPermission();
```

一方で、{{domxref("Notification.close()")}} メソッドはインスタンスメソッドです。— これは特定の通知オブジェクトインスタンスに対して呼び出され、これが表現するシステム通知を閉じます。

```js
let myNotification = new Notification("This is my notification");

myNotification.close();
```

1. 一般知識

   1. Techopedia の [Static Method](https://www.techopedia.com/definition/24034/static-method)

2. JavaScript リファレンス

   1. [static](/ja/docs/Web/JavaScript/Reference/Classes/static)

3. [MDN Web Docs 用語集](/ja/docs/Glossary)

   1. {{Glossary("Object", "オブジェクト")}}
   2. {{Glossary("Method", "メソッド")}}
