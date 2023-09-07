---
title: "CSSStyleSheet: CSSStyleSheet() コンストラクター"
slug: Web/API/CSSStyleSheet/CSSStyleSheet
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("CSSOM")}}

**`CSSStyleSheet()`** コンストラクターは、新しい {{domxref("CSSStyleSheet")}} オブジェクトを生成します。これは、単一の[スタイルシート](/ja/docs/Glossary/Stylesheet)を表します。

スタイルシートを構築した後は、{{domxref("CSSStyleSheet.replace()")}}、{{domxref("CSSStyleSheet.replaceSync()")}}、{{domxref("CSSStyleSheet.insertRule()")}}、{{domxref("CSSStyleSheet.deleteRule()")}} の各メソッドを使用して、新しいスタイルシートのルールを変更することができます。

このメソッドを使用して生成されたスタイルシートは「構築スタイルシート」(constructed stylesheet) と呼ばれます。
構築スタイルシートは、 {{domxref("ShadowRoot.adoptedStyleSheets")}} および {{domxref("Document.adoptedStyleSheets")}} を使用して文書やそのシャドウ DOM サブツリー間で共有することができます。

## 構文

```js-nolint
new CSSStyleSheet()
new CSSStyleSheet(options)
```

### 引数

- `options` {{optional_inline}}

  - : 以下のものを持つオブジェクトです。

    - `baseURL` {{optional_inline}}
      - : スタイルシートの相対 URL の解決に用いる `baseURL` を格納した文字列。
    - `media` {{optional_inline}}
      - : メディアルールのリストを含む {{domxref("MediaList")}}、または単一のルールを含む文字列。
    - `disabled` {{optional_inline}}
      - : 論理値で、スタイルシートが無効かどうかを示します。既定で false になります。

## 例

次の例では、新しい {{domxref("CSSStyleSheet")}} が `"print"` というメディアルールで構築されています。
コンソールで {{domxref("StyleSheet.media")}} を表示すると、このプリントルールの単一の項目を持つ {{domxref("MediaList")}} が返されます。

```js
let stylesheet = new CSSStyleSheet({ media: "print" });
console.log(stylesheet.media);
```

### スタイルシートのシャドウ DOM との共有

次のコードは、シートを構築し、{{domxref("CSSStyleSheet.replaceSync()")}} を呼び出して、シートにルールを追加する様子を表します。

```js
// 空の「構築」スタイルシートを生成
const sheet = new CSSStyleSheet();
// シートにルールを適用
sheet.replaceSync("a { color: red; }");
```

そして、{{domxref("ShadowRoot")}} を作成し、このシートオブジェクトを配列内の {{domxref("ShadowRoot.adoptedStyleSheets")}} プロパティに渡しています。

```js
// 文書内に要素を作成し、シャドウルートを作成する
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

//シートをシャドウ DOM に導入
shadow.adoptedStyleSheets = [sheet];
```

配列に追加した後のスタイルシートは変更することができます。
次の例では、{{domxref("CSSStyleSheet.insertRule()")}} を使用して、同じシートに新しいルールを追加しています。

```js
sheet.insertRule("* { background-color: blue; }");
// これで、文書の背景が青色になる
```

同じ文書内の複数のシャドウサブツリーで同じシートを共有することができます。
それ以外の例は、{{domxref("ShadowRoot.adoptedStyleSheets")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Constructable Stylesheets](https://web.dev/constructable-stylesheets/) (web.dev)
- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)
- [construct-style-sheets-polyfill](https://www.npmjs.com/package/construct-style-sheets-polyfill)
