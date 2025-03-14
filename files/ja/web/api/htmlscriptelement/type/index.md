---
title: "HTMLScriptElement: type プロパティ"
short-title: type
slug: Web/API/HTMLScriptElement/type
l10n:
  sourceCommit: dadc5c5b6386e011bc296caedadec4287d55277f
---

{{APIRef("HTML DOM")}}

**`type`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、スクリプトの種類を反映する文字列です。

これは {{HTMLElement("script")}} 要素の `type` 属性を反映したものです。

## 値

文字列です。このプロパティの値は以下のいずれかです。

- **属性が設定されていない (既定値)、空文字列、JavaScript の MIME タイプのいずれか**
  - : スクリプトが JavaScript コードを格納した「クラシックスクリプト」であることを示します。
- `module`
  - : この値によってコードは JavaScript モジュールとして扱われます。
- `importmap`
  - : この値は、要素本体にインポートマップが含まれていることを示します。
- `speculationrules` {{experimental_inline}}
  - : この値は、要素の本体に投機ルールが含まれていることを示します。
- **その他の値**
  - : 埋め込まれたコンテンツはデータブロックとして扱われ、ブラウザーによって処理されることはありません。

詳しくは {{HTMLElement("script")}} 要素の [`type`](/ja/docs/Web/HTML/Element/script/type) 属性を参照してください。

## 例

```html
<script id="el" type="text/javascript"></script>
```

```js
const el = document.getElementById("el");
console.log(el.type); // 出力: "text/javascript"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
