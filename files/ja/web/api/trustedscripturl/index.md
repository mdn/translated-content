---
title: TrustedScriptURL
slug: Web/API/TrustedScriptURL
l10n:
  sourceCommit: 3ceedbd90089cfb6970c9bf63ff9e6f3801fcbc5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`TrustedScript`** は{{domxref("Trusted Types API", "信頼型 API", "", "nocode")}} のインターフェイスで、開発者がスクリプトを実行する可能性のある[注入先](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)に挿入できる、外部スクリプトの URL として解釈できる文字列を表します。これらのオブジェクトは {{domxref("TrustedTypePolicy.createScriptURL","TrustedTypePolicy.createScriptURL()")}} によって作成されるため、コンストラクターはありません。

`TrustedScriptURL` オブジェクトの値は、オブジェクトの作成時に設定され、公開されたセッターが存在しないため、JavaScript によって変更することはできません。

## インスタンスメソッド

- {{domxref("TrustedScriptURL.toJSON()")}}
  - : 格納されているデータの JSON 表現を返します。
- {{domxref("TrustedScriptURL.toString()")}}
  - : 文字列で、無害化された URL です。

## 例

定数 `sanitized` は、信頼型ポリシーによって作成されたオブジェクトです。

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized); /* TrustedScriptURL オブジェクト */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
