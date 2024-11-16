---
title: "ShadowRoot: adoptedStyleSheets プロパティ"
short-title: adoptedStyleSheets
slug: Web/API/ShadowRoot/adoptedStyleSheets
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("CSSOM")}}

**`adoptedStyleSheets`** は {{domxref("ShadowRoot")}} インターフェイスのプロパティで、構築されたスタイルシートの配列を設定し、シャドウ DOM サブツリーで使用します。

> [!NOTE]
> 構築されたスタイルシートは、[`CSSStyleSheet()` コンストラクター](/ja/docs/Web/API/CSSStyleSheet/CSSStyleSheet)を使用してプログラムで作成されたスタイルシートです（ユーザーエージェントがスクリプトからスタイルシートをインポートする際に作成するスタイルシート、{{HTMLElement('style')}} と {{CSSXref('@import')}} を使用してインポートするスタイルシート、または {{HTMLElement('link')}} を使用してリンクするスタイルシートと比較すると）。

このスタイルシートは、複数の {{domxref("ShadowRoot")}} インスタンスや、親文書にも（ {{domxref("Document.adoptedStyleSheets")}} プロパティを使用して）適用することができます。
適用されたスタイルシートを変更すると、適用されたすべてのオブジェクトに影響します。

`adoptedStyleSheets` プロパティ内のスタイルシートは、シャドウ DOM の他のスタイルシートとともに考慮されます。
そのため、最終的な計算結果の CSS を決定する目的では、シャドウ DOM 内の他のスタイルシート ([`ShadowRoot.styleSheets`](/ja/docs/Web/API/ShadowRoot/styleSheets)) の後に追加されたものとみなされます。

[`CSSStyleSheet()` コンストラクター](/ja/docs/Web/API/CSSStyleSheet/CSSStyleSheet)を使用して作成し、シャドウルートと同じ親文書 ({{domxref("Document")}}) 内のもののみ、このスタイルシートを適用することができます。

## 値

値は {{domxref("CSSStyleSheet")}} インスタンスの配列であり、シャドウルートの親文書 ({{domxref("Document")}}) のコンテキスト内で {{domxref("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}} コンストラクターを使用して作成されたものでなければなりません。

配列を変更する必要がある場合は、その場で変更する `push()` のような方法を使用します。{{domxref("CSSStyleSheet")}} インスタンス自体も変更することができ、この変更は、このスタイルシートが採用されている場所すべてに適用されます。

仕様書の以前のバージョンでは、配列は変更することができなかったため、新しいスタイルシートを追加する唯一の方法は、`adoptedStyleSheets` に新しい配列を割り当てることでした。

## 例

### スタイルシートの適用

下記のコードでは、最初のスタイルシートが構築され、その後、{{domxref("CSSStyleSheet.replaceSync()")}} が呼び出されて、シートにルールが追加されます。

```js
// 空の「構築された」スタイルシートを作成
const sheet = new CSSStyleSheet();
// シートにルールを適用
sheet.replaceSync("a { color: red; }");
```

次に {{domxref("ShadowRoot")}} を作成し、シートオブジェクトを配列内の `adoptedStyleSheets` に渡します。

```js
// 文書内の要素を作成し、次にシャドウルートを作成
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

// シートをシャドウ DOM に適用
shadow.adoptedStyleSheets = [sheet];
```

このスタイルシートは、配列に追加した後でも変更することができます。
次の例では、{{domxref("CSSStyleSheet.insertRule()")}} を使用して、同じスタイルシートに新しいルールを追加しています。

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

### 新しいスタイルシートの追加

`adoptedStyleSheets.push()` を使用することで、新しいスタイルシートを文書またはシャドウルートに追加することができます。

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// 新しいシートに結合する
shadow.adoptedStyleSheets.push(extraSheet);
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
