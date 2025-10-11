---
title: TrustedHTML
slug: Web/API/TrustedHTML
l10n:
  sourceCommit: 3ceedbd90089cfb6970c9bf63ff9e6f3801fcbc5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`TrustedHTML`** は{{domxref("Trusted Types API", "信頼型 API", "", "nocode")}} のインターフェイスで、開発者が[注入先](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)に挿入して HTML としてレンダリングできる文字列を表します。これらのオブジェクトは {{domxref("TrustedTypePolicy.createHTML()")}} によって作成されるため、コンストラクターはありません。

`TrustedHTML` オブジェクトの値は、オブジェクトの作成時に設定され、公開されたセッターが存在しないため、JavaScript によって変更することはできません。

## インスタンスメソッド

- {{domxref("TrustedHTML.toJSON()")}}
  - : 格納されているデータの JSON 表現を返します。
- {{domxref("TrustedHTML.toString()")}}
  - : 文字列で、無害化された HTML です。

## 例

以下の例では、 {{domxref("TrustedTypePolicyFactory.createPolicy()")}} を使用して `TrustedHTML` オブジェクトを作成するポリシーを作成します。その後、 {{domxref("TrustedTypePolicy.createHTML()")}} を使用して、文書に挿入する無害化された HTML 文字列を作成できます。

その後、この無害化された値を {{domxref("Element.innerHTML")}} で使用することで、新たな HTML 要素が挿入されることを確実に防止できます。

```html
<div id="myDiv"></div>
```

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

let el = document.getElementById("myDiv");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
