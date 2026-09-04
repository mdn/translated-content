---
title: rel="alternate stylesheet"
slug: Web/HTML/Reference/Attributes/rel/alternate_stylesheet
l10n:
  sourceCommit: 0389dd29e0827791ad9d2f6b8cda217c121f9c19
---

{{HTMLSidebar}}

**`alternate stylesheet`** キーワードペアは、 {{HTMLElement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Reference/Elements/link#rel) 属性の値として使用されると、ターゲットリソースが代替スタイルシートであることを示します。ウェブページに**代替スタイルシート**を指定すると、ユーザーのニーズや設定に応じて複数のバージョンのページを見る方法を提供します。

> [!NOTE]
> この機能は、ブラウザーの拡張機能なしではあまり対応していません。ユーザーの既存の環境設定に合わせて別の表示を提供するには、 CSS の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#media_features)である {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} および {{cssxref("@media/prefers-contrast","prefers-contrast")}} を参照してください。

Firefox では、 [`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性の値を表示している［表示］ > ［ページスタイル］のサブメニューを使用して、ユーザーに代替{{glossary("stylesheet", "スタイルシート")}}を選択させることができます。それ以外のブラウザーでは、この機能を有効にするために拡張機能が必要です。また、ウェブページでユーザーがスタイルを切り替えることができるように、独自のユーザーインターフェイスを提供することもできます。

## 例

### 代替スタイルシートの指定

代替スタイルシートは、次のように {{HTMLElement("link")}} 要素に `rel="alternate stylesheet"` およびび `title="…"` 属性を使用することで指定されます。

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="既定のスタイル" />
<link href="fancy.css" rel="alternate stylesheet" title="ファンシー" />
<link href="basic.css" rel="alternate stylesheet" title="基本" />
```

この例では、 Firefox の［ページスタイル］サブメニューに既定のスタイル」「ファンシー」「基本」という項目が追加され、「既定のスタイル」が選択されています。ユーザーがスタイルを選択すると、ページはそのスタイルシートを使って即座に再描画されます。

どのスタイルが選択されても、 `reset.css` のルールが常に適用されます。

### やってみましょう

[こちらから動作する例を試してみてください](https://mdn.github.io/css-examples/alt-style-sheets/)。

## 詳細

文書内のスタイルシートはどれも、以下のカテゴリーのうち一つに当てはまります。

- **常設**（`rel="stylesheet" があり、 `title=""` がないもの）: 常に文書に適用されます。
- **推奨**（`rel="stylesheet" があり、 `title="…"` が指定されているもの）: 既定で適用されますが、代替スタイルシートが選択されると{{domxref("StyleSheet.disabled", "無効化", "", 1)}}されます。**推奨スタイルシートは一つしか存在できません**ので、異なる title 属性を持つスタイルシートを複数指定すると、いくつかが無視されます。
- **代替**（`rel="alternate stylesheet"` があり、 `title="…"` が指定されているもの）: 既定では無効で、選択することができます。

スタイルシートメニューが存在し、 {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} または {{HTMLElement("style")}} 要素の `title` 属性とともに参照された場合、そのタイトルがユーザーに与えられる選択肢のひとつとなります。同じ [`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) でリンクされた別のスタイルシートも、同じ選択肢の一部として扱われます。 `title` 属性を付けずにリンクされたスタイルシートは常に適用されます。

標準スタイルシートへリンクするには `rel="stylesheet"` を、代替スタイルシートへリンクするには `rel="alternate stylesheet"` を使用します。これにより、どのスタイルシートのタイトルを標準で選択すべきかがブラウザーに伝わり、代替スタイルシートに対応していないブラウザーでは標準の選択肢が適用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS](/ja/docs/Web/CSS)
- [動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
