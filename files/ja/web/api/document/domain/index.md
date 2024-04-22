---
title: Document.domain
slug: Web/API/Document/domain
---

{{ApiRef}}

{{domxref("Document")}} インターフェイスの **`domain`** プロパティは、[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)で使用される現在の文書の{{glossary("origin", "オリジン")}}のうち、ドメインの部分を取得または設定します。

このプロパティが正常に設定されると、オリジンのポート番号の部分も {{jsxref("null")}} に設定されます。

## 構文

```
const domainString = document.domain
document.domain = domainString
```

### 値

現在の文書のオリジンのうち、ドメインの部分です。

### 例外

- `SecurityError`

  - : 以下の状況のうちの一つで、 `domain` を設定することが試みられた。

    - 文書がサンドボックス化された {{htmlelement("iframe")}} の中にある場合
    - 文書に{{glossary("browsing context", "閲覧コンテキスト")}}がない場合
    - 文書の[影響ドメイン](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain)が `null` の場合
    - 指定された値が文書の影響ドメインと一致しない (または登録可能なドメインの接頭辞ではない) 場合
    - {{HTTPHeader("Feature-Policy")}} の {{httpheader('Feature-Policy/document-domain','document-domain')}} が有効の場合

## 例

### ドメイン名の取得

`http://developer.mozilla.org/ja/docs/Web` の URI において、この例は `currentDomain` に "`developer.mozilla.org`" の文字列を設定します。

```js
const currentDomain = document.domain;
```

### ウィンドウを閉じる

文書が `www.example.xxx/good.html` のような "`www.example.xxx`" のドメインを持つ場合、この例はウィンドウを閉じようとします。

```js
const badDomain = "www.example.xxx";

if (document.domain === badDomain) {
  // 単なる例: window.close() は効果がないことがある
  window.close();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)
