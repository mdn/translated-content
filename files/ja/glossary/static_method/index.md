---
title: Static method (静的メソッド)
slug: Glossary/Static_method
l10n:
  sourceCommit: 424582339e3d3de819667b2e5e2ea52a180fe84c
---

{{GlossarySidebar}}

静的メソッド (または _静的関数_) とは、{{Glossary("method","メソッド")}}のうち{{Glossary("object","オブジェクト")}}のメンバーとして定義されているものの、コンストラクターで生成されたオブジェクトインスタンスからではなく、API のオブジェクトコンストラクターから直接アクセスできるものです。

[Web API](/ja/docs/Web/API) では、静的メソッドはインターフェイスで定義されているものの、先にその型のオブジェクトのインスタンス化をせずに呼び出すことができます。

オブジェクトインスタンスに対して呼び出されるメソッドは、*インスタンスメソッド*と呼ばれます。

## 例

[通知 API](/ja/docs/Web/API/Notifications_API) では、{{domxref("Notification.requestPermission_static")}} メソッドは実際は {{domxref("Notification")}} コンストラクター自身に対して呼び出されます。— これが静的メソッドです。

```js
let promise = Notification.requestPermission();
```

一方で、{{domxref("Notification.close()")}} メソッドはインスタンスメソッドです。— これは特定の通知オブジェクトインスタンスに対して呼び出され、これが表現するシステム通知を閉じます。

```js
let myNotification = new Notification("This is my notification");

myNotification.close();
```

## 関連情報

- [Static Method](https://www.techopedia.com/definition/24034/static-method) (Techopedia)
- [static](/ja/docs/Web/JavaScript/Reference/Classes/static)
- 関連用語:
  - {{Glossary("Object", "オブジェクト")}}
  - {{Glossary("Method", "メソッド")}}
