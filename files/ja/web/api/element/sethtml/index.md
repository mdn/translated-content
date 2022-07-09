---
title: Element.setHTML()
slug: Web/API/Element/setHTML
tags:
  - HTML 無害化 API
  - メソッド
  - Element.setHTML
  - setHTML
  - 実験的
browser-compat: api.Element.setHTML
translation_of: Web/API/Element/setHTML
---
{{SeeCompatTable}}{{DefaultAPISidebar("HTML Sanitizer API")}}

**`setHTML()`** は {{domxref("Element")}} インターフェイスのメソッドで、 HTML の文字列を解釈して無害化し、この要素のサブツリーとして DOM に挿入します。
信頼できない HTML の文字列を挿入するために、 {{domxref("Element.innerHTML")}} の代わりに使用してください。

解釈処理では、現在の要素のコンテキストで無効な HTML 文字列の要素を削除し、無害化処理では、安全でない、あるいは不要な要素、属性、コメントを削除します。
既定の `Sanitizer()` 設定では、{{HTMLElement("script")}} タグ、カスタム要素、コメントを含む XSS 関連の入力が取り除かれます。
無害化の設定は {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} コンストラクターのオプションを使用してカスタマイズすることができます。

> **Note:** 対象となる要素がまだない場合など、後の時点で DOM に文字列を挿入する必要がある場合は、このメソッドの代わりに {{domxref("Sanitizer.sanitizeFor()")}} を使用してください。

## 構文

```js
setHTML(input, sanitizer)
```

### 引数

- `input`
  - : 無害化する HTML を定義する文字列です。
- `sanitizer`
  - : {{domxref("Sanitizer")}} で、入力されたどの要素を無害化するかを定義します。

### 返値

`undefined`

### 例外

なし。

## 例

以下のコードは、 HTML の文字列を無害化して、 id が `target` である `Element` に挿入する方法を示しています。

```js
const unsanitized_string = "abc <script>alert(1)</script> def";  // 無害化前の HTML の文字列
const sanitizer = new Sanitizer();  // 既定の無害化

// id が "target" の Element を取得し、無害化された文字列を設定します。
document.getElementById("target").setHTML(unsanitized_string, sanitizer);

// 結果 (文字列): "abc  def"
```

> **Note:** この例では既定の無害化を使用しています。
> {{domxref("Sanitizer/Sanitizer","Sanitizer")}} コンストラクターで無害化のオプションを構成することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Sanitizer.sanitizeFor()")}}
- {{domxref('HTML Sanitizer API')}}
