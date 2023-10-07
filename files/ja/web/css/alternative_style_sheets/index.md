---
title: 代替スタイルシート
slug: Web/CSS/Alternative_style_sheets
---

{{cssref}}

ウェブページに**代替スタイルシート**を指定すると、ユーザーのニーズや設定に応じて複数のバージョンのページを見る方法を提供します。

Firefox では、_表示_ >*スタイルシート*のサブメニューを使用して、ユーザーがスタイルシートを選択することができます。 Internet Explorer でも (IE 8 から) この機能に対応しており、_表示_ >*スタイル*から利用できます。 Chrome では (バージョン 48 時点で) この機能を使用するのに拡張機能が必要です。ウェブページがユーザーからスタイルの切り替えができるユーザーインターフェイスを提供することもできます。

## 例: 代替スタイルシートの指定

代替スタイルシートはふつう、次のように {{HTMLElement("link")}} 要素に `rel="alternate stylesheet"` およびび `title="..."` 属性を使用することで指定されます。

```html
<link href="reset.css" rel="stylesheet" type="text/css" />

<link
  href="default.css"
  rel="stylesheet"
  type="text/css"
  title="既定のスタイル" />
<link
  href="fancy.css"
  rel="alternate stylesheet"
  type="text/css"
  title="ファンシー" />
<link
  href="basic.css"
  rel="alternate stylesheet"
  type="text/css"
  title="基本" />
```

この例では、*スタイルシート*のサブメニューに「既定のスタイル」「ファンシー」「基本」という項目が追加され、「既定のスタイル」が選択されています。ユーザーがスタイルを選択すると、ページはそのスタイルシートを使って即座に再描画されます。

どのスタイルが選択されても、 reset.css の規則が常に適用されます。

### やってみましょう

[ここをクリック](/samples/cssref/altstyles/index.html)すると、やってみることができる例を見ることができます。

## 詳細

文書内のスタイルシートはどれも、以下のカテゴリのうち一つに当てはまります。

- **常設** (`rel="alternate"` も `title=""` もないもの): 常に文書に適用されます。
- **推奨** (`rel="alternate"` がなく、 `title="..."` があるもの): 既定で適用されますが、代替スタイルシートが選択されると{{domxref("StyleSheet.disabled", "無効化", "", 1)}}されます。**推奨スタイルシートは一つしか存在できません**ので、異なる title 属性を持つスタイルシートを複数指定すると、いくつかが無視されます。より詳細な説明は[外部スタイルシートにおける正しいタイトルの使用](/ja/docs/Correctly_Using_Titles_With_External_Stylesheets)をご覧ください。
- **代替** (`rel="alternate stylesheet"` および `title="..."` の指定が必要): 既定では無効で、選択することができます。

{{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} 又は {{HTMLElement("style")}} 要素で、スタイルシートが `title` 属性とともに参照された場合、そのタイトルがユーザに与えられる選択肢のひとつとなります。同じタイトルでリンクされた別のスタイルシートも、同じ選択肢の一部として扱われます。 `title` 属性を付けずにリンクされたスタイルシートは常に適用されます。

標準スタイルシートへリンクするには `rel="stylesheet"` を、代替スタイルシートへリンクするには `rel="alternate stylesheet"` を使用します。これにより、どのスタイルシートのタイトルを標準で選択すべきかがブラウザーに伝わり、代替スタイルシートに対応していないブラウザーでは標準の選択肢が適用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.link.rel.alternate_stylesheet")}}
