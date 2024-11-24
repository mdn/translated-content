---
title: 色のコントラスト
slug: Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

背景と前景のコンテンツ（通常はテキスト）の[色のコントラスト](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio)は、可読性を確実に保持するのに十分なほど大きくすべきです。

さまざまな視覚能力に対応した読み取り可能なインターフェイスを設計する際、 WCAG ガイドラインでは次のコントラスト比に従うことを推奨しています。

| コンテンツの型                                                                             | 最小比 (AA レート) | 拡張比 (AAA レート) |
| ------------------------------------------------------------------------------------------ | ------------------ | ------------------- |
| 本文テキスト                                                                               | 4.5 : 1            | 7 : 1               |
| 拡大テキスト（本文テキストより 120-150% 大きいもの）                                       | 3 : 1              | 4.5 : 1             |
| アクティブなユーザーインターフェイス部分と、アイコンやグラフなどのグラフィックオブジェクト | 3 : 1              | 未定義              |

これらの比率は、非アクティブなコントロール、ロゴ、または純粋に装飾的なテキストなどの「付随的な」テキストには適用されません。

詳細については、下記の[解決策](#解決策)の節をご覧ください。

サイトに良い色のコントラストを保つことは、すべてのユーザーにとって好ましいことですが、特定の種類の色覚異常や、その他の類似した症状を持つユーザーにとっては特に有益です。これらのユーザーはコントラストが低く、似たような色を区別するのが難しいという使い勝手の悪さを経験しています。これは、明るい部分や暗い部分を、そうした症状を持たない人ほど容易に識別できないため、エッジや境界線、その他の詳細を見分けるのが難しいからです。

ウェブサイトをクールなデザインにするのは良いことですが、ユーザーがコンテンツを読めなければ、そのデザインには何の価値もありません。

## 例

単純な HTML と CSS のコードを見ていきましょう。

```html
<div class="good">良いコントラスト</div>
<div class="bad">悪いコントラスト</div>
```

```css
div {
  /* 全般的な div のスタイルをここに置く */
}

.good {
  background-color: #5a80a9;
}

.bad {
  background-color: #400064;
}
```

どちらのテキストも既定では黒色です。

### 良いコントラスト

「良い」 `<div>` の背景色はネオンブルーであり、テキストが読みやすくなっています。

```html
<div class="good">良いコントラスト</div>
```

```css
div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px black;
}

.good {
  background-color: #5a80a9;
}
```

{{EmbedLiveSample('良いコントラスト', '100%', '100')}}

### 悪いコントラスト

一方、「悪い」 `<div>` は背景が濃い紫色で、テキストがかなり読みにくくしています。

```html
<div class="bad">悪いコントラスト</div>
```

```css
div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px black;
}

.bad {
  background-color: #400064;
}
```

{{EmbedLiveSample('悪いコントラスト', '100%', '100')}}

## 解決策

ウェブサイトに配色を選ぶ際には、前景色と背景色にコントラストの強い色を選びましょう。 デザイン上の制約の範囲内で、色のコントラストをできるだけ良くしてください。理想的には AAA 評価（下記 1.4.6 参照）を目指しますが、少なくとも AA 評価（下記 1.4.3 参照）を満たすようにしてください。

動画やアニメーションなどのテキスト以外のコンテンツが含まれる場合は、 1.4.11 に従うことで対応できます（下記参照）。

色を選択する際にコントラストを調べるには、 WebAIM の [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) などのツールを使用してください。

また、 Firefox の開発者ツールを使用して、色のコントラストをその場で調べることができます。[アクセシビリティインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)ガイド、特に [Check for accessibility issues](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues) の節をご覧ください。説明おの節のライブサンプルで試してみてください。

## 関連する WCAG 達成基準

- [1.4.3 最低限のコントラスト (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum)

  - : 背景と前景のコンテンツの間の色のコントラストは、読みやすさを確実なものとするための最低限のレベルであるべきです。

    - テキストとその背景のコントラスト比は少なくとも 4.5:1 であるべきです。
    - 見出し（またはそれよりも大きい）テキストの比は、少なくとも 3:1 であるべきです。 大きいテキストは、少なくとも 18 ポイント、または 14 ポイントの太字として定義されます。

- [1.4.6 強調されたテキスト (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced)

  - : これは、基準 1.4.3 に従い、その上に構築されます。

    - テキストとその背景のコントラスト比は少なくとも 7:1 であるべきです。
    - 見出し（またはそれよりも大きい）テキストの比は少なくとも 4.5:1 であるべきです。

- [1.4.11 テキスト以外のコントラスト (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast)（2.1 で追加）
  - : ユーザーインターフェイスコンポーネントとグラフィックオブジェクトの最低限のカラーコントラスト比は 3:1 です。

## 関連情報

- [色とそのコントラスト](/ja/docs/Learn/Accessibility/CSS_and_JavaScript#色とそのコントラスト)
- [複数のラベル](/ja/docs/Learn/Forms/How_to_structure_a_web_form#複数のラベル)
- [Understanding Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)（英語）
