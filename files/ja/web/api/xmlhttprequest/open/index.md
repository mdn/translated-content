---
title: "XMLHttpRequest: open() メソッド"
short-title: open()
slug: Web/API/XMLHttpRequest/open
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("XMLHttpRequest API")}}

{{domxref("XMLHttpRequest")}} の **`open()`** メソッドは、新しく作成されたリクエストを初期化したり、既存のリクエストを再初期化したりします。

> [!NOTE]
> すでに有効なリクエスト (すでに `open()` が呼び出されたもの) に対してこのメソッドを呼び出すと、 {{domxref("XMLHttpRequest.abort", "abort()")}} を呼び出すのと等価になります。

## 構文

```js-nolint
open(method, url)
open(method, url, async)
open(method, url, async, user)
open(method, url, async, user, password)
```

### 引数

- `method`
  - : 使用する [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods)です。 `"GET"`, `"POST"`, `"PUT"`, `"DELETE"` など。 HTTP(S) 以外の URL では無視されます。
- `url`
  - : 文字列または{{Glossary("stringifier", "文字列化")}}のあるその他のオブジェクト、例えば {{domxref("URL")}} オブジェクトで、リクエストの送信先となる URL を表します。
- `async` {{optional_inline}}

  - : 任意の論理値の引数で、既定値は `true`です。操作が非同期的に行われるかどうかを示します。値が `false` の場合、 `send()` メソッドはレスポンスを受信するまで戻りません。 `true` の場合は、トランザクション完了の通知はイベントリスナーを使用して配信されます。 `multipart` 属性が `true` である場合は true で*なければならず*、さもなくば例外が発生します。

    > [!NOTE]
    > メインスレッドで同期リクエストを行うと、ユーザーの使い勝手を簡単に阻害するので避けるべきです。実際、多くのブラウザーではメインスレッドにおける同期的な XHR の対応を全面的に非推奨としています。同期リクエストはワーカー ({{domxref("Worker")}}) では許可されています。

- `user` {{optional_inline}}
  - : 任意で、認証プロセスで使用するユーザー名です。既定では、これは `null` 値です。
- `password` {{optional_inline}}
  - : 任意で、認証プロセスで使用するパスワードです。既定では、これは `null` 値です。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- 関連する {{domxref("XMLHttpRequest")}} のメソッド: {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}, {{domxref("XMLHttpRequest.send", "send()")}}, {{domxref("XMLHttpRequest.abort", "abort()")}}
