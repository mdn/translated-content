---
title: "CSSStyleSheet: replaceSync() メソッド"
slug: Web/API/CSSStyleSheet/replaceSync
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("CSSOM")}}

**`replaceSync()`** は {{domxref("CSSStyleSheet")}} インターフェイスのメソッドで、スタイルシートの内容を渡された内容で同期的に置き換えます。

`replaceSync()` と {{domxref("CSSStyleSheet.replace()")}} の両メソッドは、 {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} コンストラクターで作成されたスタイルシートでのみ使用できます。

## 構文

```js-nolint
replaceSync(text)
```

### 引数

- `text`
  - : スタイルシートのコンテンツを置き換えるためのスタイルルールを格納した文字列。文字列に解釈可能なルールのリストが入っていない場合、値は空文字列に設定されます。

    > [!NOTE]
    > もし `text` に渡されたルールの中に {{cssxref("@import")}} ルールでインポートされた外部スタイルシートがあった場合は、それらのルールは除去され、コンソールに警告が出力されます。

### 返値

なし (`undefined`)。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : このスタイルシートが {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} コンストラクターを使用して作成されていない場合、または変更不可に設定されている場合に発生します。

## 例

次の例では、新しいスタイルシートを作成し、`replaceSync()` を使って 2 つの CSS ルールを追加しています。

```js
const stylesheet = new CSSStyleSheet();

stylesheet.replaceSync("body { font-size: 1.4em; } p { color: red; }");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Constructable Stylesheets](https://web.dev/constructable-stylesheets/) (web.dev)
- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)
