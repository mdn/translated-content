---
title: "XMLHttpRequest: XMLHttpRequest() コンストラクター"
short-title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`XMLHttpRequest()`** コンストラクターは新しい {{domxref("XMLHttpRequest")}} を生成します。

## 構文

```js-nolint
new XMLHttpRequest()
```

### 引数

なし。

### 返値

新しい {{domxref("XMLHttpRequest")}} オブジェクト。このオブジェクトは {{domxref("XMLHttpRequest.send", "send()")}} を呼び出してサーバーにリクエストを送る前に、少なくとも {{domxref("XMLHttpRequest.open", "open()")}} を呼び出して初期化をしなければなりません。

## 標準外の Firefox の構文

Firefox 16 ではコンストラクターに標準外の引数を追加して、匿名モードを有効にできるようにしました（[Firefox バグ 692677](https://bugzil.la/692677) を参照）。 `mozAnon` フラグを `true` に設定することで、効率的に旧バージョンの XMLHttpRequest 仕様書で記述されていた [`AnonXMLHttpRequest()`](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest) コンストラクターに似せることができます。

```js
const request = new XMLHttpRequest(paramsDictionary);
```

### 引数（標準外）

- `objParameters`

  - : 設定できるフラグが2つあります。

    - `mozAnon`
      - : 論理型: このフラグを `true` に設定すると、ブラウザーがリソースを読み込むときに{{Glossary("origin", "オリジン")}}と[ユーザー資格情報](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials)を示しません。重要なことは、つまり明示的に setRequestHeader を使用して追加しない限り、{{Glossary("Cookie", "クッキー")}}が送信されないということです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest における HTML の扱い](/ja/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
