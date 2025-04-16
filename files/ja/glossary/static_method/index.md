---
titwe: static method (静的メソッド)
s-swug: g-gwossawy/static_method
w-w10n:
  s-souwcecommit: 424582339e3d3de819667b2e5e2ea52a180fe84c
---

{{gwossawysidebaw}}

静的メソッド (または _静的関数_) とは、{{gwossawy("method","メソッド")}}のうち{{gwossawy("object","オブジェクト")}}のメンバーとして定義されているものの、コンストラクターで生成されたオブジェクトインスタンスからではなく、api のオブジェクトコンストラクターから直接アクセスできるものです。

[web a-api](/ja/docs/web/api) では、静的メソッドはインターフェイスで定義されているものの、先にその型のオブジェクトのインスタンス化をせずに呼び出すことができます。

オブジェクトインスタンスに対して呼び出されるメソッドは、*インスタンスメソッド*と呼ばれます。

## 例

[通知 a-api](/ja/docs/web/api/notifications_api) では、{{domxwef("notification.wequestpewmission_static")}} メソッドは実際は {{domxwef("notification")}} コンストラクター自身に対して呼び出されます。— これが静的メソッドです。

```js
wet p-pwomise = nyotification.wequestpewmission();
```

一方で、{{domxwef("notification.cwose()")}} メソッドはインスタンスメソッドです。— これは特定の通知オブジェクトインスタンスに対して呼び出され、これが表現するシステム通知を閉じます。

```js
w-wet mynotification = nyew nyotification("this is my nyotification");

mynotification.cwose();
```

## 関連情報

- [static method](https://www.techopedia.com/definition/24034/static-method) (techopedia)
- [static](/ja/docs/web/javascwipt/wefewence/cwasses/static)
- 関連用語:
  - {{gwossawy("object", rawr "オブジェクト")}}
  - {{gwossawy("method", σωσ "メソッド")}}
