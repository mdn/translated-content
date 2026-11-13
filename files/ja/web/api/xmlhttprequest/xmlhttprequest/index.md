---
title: "XMLHttpRequest: XMLHttpRequest() コンストラクター"
short-title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
l10n:
  sourceCommit: 5e270e3cdab4f3c8ad3f5752976c72c6e8312eb9
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

**`XMLHttpRequest()`** コンストラクターは新しい {{domxref("XMLHttpRequest")}} を生成します。

## 構文

```js-nolint
new XMLHttpRequest()
// 標準外
new XMLHttpRequest(options)
```

### 引数

標準の引数はありません が、 Firefox では標準外の引数が使用できます。

- `options` {{non-standard_inline}}
  - : 次のフラグが含まれているオブジェクトです。
    - `mozAnon`
      - : 論理値です。このフラグを `true` に設定すると、ブラウザーはリソース取得時に{{Glossary("origin", "オリジン")}}とユーザー資格情報を公開しなくなります。最も重要な点として、これは{{Glossary("Cookie", "クッキー")}}が、 `setRequestHeader` で明示的に追加されない限り、送信されないということがあります。
    - `mozSystem`
      - : 論理値です。このフラグを `true` に設定しますと、リクエストに対して同一オリジンポリシーが適用されなくなります。

### 返値

新しい {{domxref("XMLHttpRequest")}} オブジェクト。このオブジェクトは {{domxref("XMLHttpRequest.send", "send()")}} を呼び出してサーバーにリクエストを送る前に、少なくとも {{domxref("XMLHttpRequest.open", "open()")}} を呼び出して初期化をしなければなりません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使い方](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest における HTML の扱い](/ja/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
