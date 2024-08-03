---
title: "CSSStyleSheet: replace() メソッド"
slug: Web/API/CSSStyleSheet/replace
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("CSSOM")}}

**`replace()`** は {{domxref("CSSStyleSheet")}} インターフェイスのメソッドで、スタイルシートの内容を渡された内容で非同期に置き換えます。このメソッドは `CSSStyleSheet` オブジェクトで解決されるプロミスを返します。

`replace()` と {{domxref("CSSStyleSheet.replaceSync()")}} の両メソッドは、 {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} コンストラクターで作成されたスタイルシートでのみ使用できます。

## 構文

```js-nolint
replace(text)
```

### 引数

- `text`

  - : スタイルシートのコンテンツを置き換えるためのスタイルルールを格納した文字列。文字列に解釈可能なルールのリストが入っていない場合、値は空文字列に設定されます。

    > [!NOTE]
    > もし `text` に渡されたルールの中に {{cssxref("@import")}} ルールでインポートされた外部スタイルシートがあった場合は、それらのルールは除去され、コンソールに警告が出力されます。

### 返値

{{jsxref("Promise")}} で、 {{domxref("CSSStyleSheet")}} に解決します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : 次の 2 つの条件のうち一方が成立した場合に発生します。
    - このスタイルシートが {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} コンストラクターを使用して作成されていない。
    - このスタイルシートが変更不可に設定されている。

## 例

次の例では、新しいスタイルシートを作成し、`replace()` を使って 2 つの CSS ルールを追加しています。最初のルールはコンソールに `body { font-size: 1.4em; }` と表示されます。

```js
const stylesheet = new CSSStyleSheet();

stylesheet
  .replace("body { font-size: 1.4em; } p { color: red; }")
  .then(() => {
    console.log(stylesheet.cssRules[0].cssText);
  })
  .catch((err) => {
    console.error("Failed to replace styles:", err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Constructable Stylesheets](https://web.dev/constructable-stylesheets/) (web.dev)
- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)
