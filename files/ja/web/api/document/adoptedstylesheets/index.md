---
title: "Document: adoptedStyleSheets プロパティ"
short-title: adoptedStyleSheets
slug: Web/API/Document/adoptedStyleSheets
l10n:
  sourceCommit: 4b218cdd81b9751f5088ba5211f16f31818e7746
---

{{APIRef("CSSOM")}}

**`adoptedStyleSheets`** は {{domxref("Document")}} インターフェイスのプロパティで、この文書で使用する構築されたスタイルシートの配列を設定するために使用します。

> [!NOTE]
> 構築されたスタイルシートとは、[`CSSStyleSheet()` コンストラクター](/ja/docs/Web/API/CSSStyleSheet/CSSStyleSheet)を用いてプログラムで作成されたスタイルシートのことです（ユーザーエージェントがスクリプトからスタイルシートをインポートしたり、{{HTMLElement('style')}} や {{CSSXref('@import')}} を使用してインポートしたり、{{HTMLElement('link')}} でリンクしたりする場合に作成されるスタイルシートとは異なります）。

このスタイルシートは、[`ShadowRoot.adoptedStyleSheets`](/ja/docs/Web/API/ShadowRoot/adoptedStyleSheets) プロパティを使用して、1 つ以上の {{domxref("ShadowRoot")}} インスタンスと共有することもできます。
このスタイルシートを変更すると、それを採用しているすべてのオブジェクトに影響します。

プロパティ内のスタイルシートは、[CSS カスケードアルゴリズム](/ja/docs/Web/CSS/Guides/Cascade/Introduction)を使用して、文書の他のスタイルシートと共に評価されます。
ルールの解決がスタイルシートの順序を考慮する場合、`adoptedStyleSheets` は [`Document.styleSheets`](/ja/docs/Web/API/Document/styleSheets) 内のスタイルシートの後に並べられると想定されます。

現在の {{domxref("Document")}} のコンテキスト内で [`CSSStyleSheet()` コンストラクター](/ja/docs/Web/API/CSSStyleSheet/CSSStyleSheet)を使用して作成されたスタイルシートのみが採用されます。

## 値

値は {{domxref("CSSStyleSheet")}} インスタンスの配列です。これらは同じ {{domxref("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}} のコンテキスト内で {{domxref("Document")}} コンストラクターを使用して作成されている必要があります。

配列を変更する必要がある場合は、`push()` のようなその場での変更を使用 してください。また、{{domxref("CSSStyleSheet")}} インスタンス自体も変更することができ、この変更はこのスタイルシートが採用されている場所であればどこでも適用されます。

以前のバージョンの仕様では、配列は変更することができなかったため、新しいスタイルシートを追加する唯一の方法は `adoptedStyleSheets` に新しい配列を割り当てることでした。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : 配列内の {{domxref("CSSStyleSheet")}} インスタンスのいずれかが [`CSSStyleSheet()` コンストラクター](/ja/docs/Web/API/CSSStyleSheet/CSSStyleSheet)を使用して作成されていないか、フレーム内など現在の文書とは異なる文書で作成されています。

## 例

### スタイルシートの採用

下記コードはスタイルシートが作成され、{{domxref("CSSStyleSheet.replaceSync()")}} が呼び出されてルールが追加される様子を示しています。
このスタイルシートは配列に追加され、`adoptedStyleSheets` プロパティに割り当てられています。

```js
// 空の「構築された」スタイルシートの作成
const sheet = new CSSStyleSheet();
// シートにルールを適用
sheet.replaceSync("a { color: red; }");

// 文書へスタイルシートを適用
document.adoptedStyleSheets = [sheet];
```

{{domxref("CSSStyleSheet.insertRule()")}} を用いて新しいルールをスタイルシートに追加することができます。

```js
sheet.insertRule("* { background-color: blue; }");
// 文書は青い背景になる。
```

### 新しいスタイルシートの追加

`adoptedStyleSheets` プロパティに全く新しいスタイルシートを追加するには、新しい結合配列を作成して割り当てる必要があります。
下記はスプレッド構文を使用しています。

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// 既存のシートと新しいシートの結合
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];
```

## シャドウ DOM とのスタイルシートの共有

このスタイルシートは、同様の方法でシャドウルートと共有することができます。

```js
// 文書内の要素を作成し、シャドウルートを作成
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

// 同じシートをシャドウ DOM に採用
shadow.adoptedStyleSheets = [sheet];
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Constructable Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()` コンストラクター](/ja/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- {{domxref("CSSStyleSheet.replaceSync()")}}
- {{domxref("CSSStyleSheet.replace()")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSStyleSheet.deleteRule()")}}
