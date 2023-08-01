---
title: forced-colors
slug: Web/CSS/@media/forced-colors
---

{{CSSRef}}

**`forced-colors`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Media_Queries/Using_media_queries#media_features)で、{{Glossary("user agent", "ユーザーエージェント")}}が強制カラーモードを有効にしているかどうかを検出するために使用されます。強制カラーモードの例としては、 Windows のハイコントラストモードがあります。

## 構文

`forced-colors` メディア特性は、ブラウザーが現在強制カラーモードになっているかどうかを示します。

### Values

- `none`
  - : 強制カラーモードは有効ではありません。ページの色が限られたパレットに強制されていません。
- `active`
  - : 強制カラーモードが有効であることを示します。ブラウザーは、[CSS システム色](/ja/docs/Web/CSS/color_value#system_colors)キーワードを通じてカラーパレットを提供し、必要に応じて [`prefers-color-scheme`](/ja/docs/Web/CSS/@media/prefers-color-scheme) の適切な値をトリガーして、ページを適応できるようにします。ブラウザーは `prefers-color-scheme` の値を `Canvas` のシステム色の明度に基づいて選択します (詳細は [color adjust spec](https://www.w3.org/TR/css-color-adjust-1/#forced) を参照してください)。

## 使用上の注意

### 強制カラーモードの影響を受けるプロパティ

強制カラーモードでは、以下のプロパティの値は、作者レベルの値が指定されていないかのように扱われます。つまり、ブラウザーで指定された値が代わりに使用されます。ブラウザー指定の値は、スタイルのカスケードには影響せず、描画時にブラウザーによって強制的に設定されます。

ブラウザーで指定された値は、システム色のセットから選択されます。これにより、強制カラーを有効にしているユーザーに対して、共通の UI 要素の一貫したコントラストが保証されます。

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("border-color")}}
- {{cssxref("outline-color")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("-webkit-tap-highlight-color")}}
- [SVG fill 属性](/ja/docs/Web/SVG/Attribute/fill)
- [SVG stroke 属性](/ja/docs/Web/SVG/Attribute/stroke)

また、以下のプロパティは、強制カラーモードでは特別な動作をします。

- {{cssxref("box-shadow")}} は 'none' に強制されます
- {{cssxref("text-shadow")}} は 'none' に強制されます
- {{cssxref("background-image")}} は URL ベースでない値では 'none' に強制されます
- {{cssxref("color-scheme")}} は 'light dark' に強制されます
- {{cssxref("scrollbar-color")}} は 'auto' に強制されます

The system colors that are forced for the above properties depend on the context of the element. For example the {{cssxref("color")}} property on button element will be forced to `ButtonText`. On normal text it will be forced to `CanvasText`. See the [list of system colors](/ja/docs/Web/CSS/color_value#system_colors) for additional details of when each might be appropriate in various UI contexts.

> **メモ:** ユーザーエージェントは、追加された ARIA ロールではなく、本来の要素の意味に基づいてシステム色を選択します。
> 例えば、`div` に `role="button"` を追加しても、要素の色が `ButtonText` に強制されることは**ありません**。

これらの調整に加えて、ブラウザーはテキストの後ろに「バックプレート」を描くことで、テキストの読みやすさを確保します。これは、テキストが画像の上に配置されている場合にコントラストを保つために特に重要です。

ユーザーエージェントが上記のプロパティの値を強制的に変更しないケースが 2 つあります。{{cssxref("forced-color-adjust")}} 値が `none` の要素に適用されている場合と、作者がシステム色を指定している場合です。

要素で forced-color-adjust が `none` に設定されている場合は、強制カラーの値は適用されず、作者の指定したスタイルが通常どおり適用されます。また、テキストのバックプレートは無効になります。

システム色が指定された場合は、強制的に設定された値の代わりにシステム色が使用されます。

また、強制カラーモードで利用できる制限されたカラーパレットとページの他の部分が統合されるように、上記以外のプロパティでシステム色を使用することもできます。

### アクセシビリティの考慮

一般的に、ウェブ制作者は `forced-colors` メディア特性を使用して、この機能が有効になっているユーザー向けに個別のデザインを作成することは**すべきではありません**。この機能は、既定の強制カラーの適用ではページの一部がうまく機能しない場合に、使いやすさや読みやすさを向上させるための細かい調整を行うことを目的としています。

強制カラーモードの縮小されたパレットとテキストバックプレートによる高いコントラストは、一部のユーザーがウェブサイトを読んだり利用したりするのに不可欠な場合が多いため、コンテンツに影響を与える調整は慎重に行い、他の方法では読み取れないコンテンツを対象とする必要があります。

### ユーザー設定

このメディア特性は、ユーザーがオペレーティングシステムで配色設定を有効にしている場合にのみ有効です。このような機能の例として、 Windows のハイコントラストモードがあります。

## 例

> **メモ:** 以下の例は、このメディア特性に対応したブラウザーを使用し、 OS のハイコントラストモードなどの環境設定を有効にしている場合にのみ動作します。

この例は、通常 {{cssxref("box-shadow")}} によってコントラストを得るボタンです。強制カラーモードでは、 box-shadow は強制的に none になります。そのため、この例では強制カラーメディア機能を使用して、適切な色（この場合は ButtonText）の境界線を確保しています。

### HTML

```html
<button class="button">Press me!</button>
```

### CSS

```css
.button {
  border: 0;
  padding: 10px;
  box-shadow:
    -2px -2px 5px gray,
    2px 2px 5px gray;
}

@media (forced-colors: active) {
  .button {
    /* 強制カラーモードでは box-shadow が 'none' に強制されるため、代わりに border を使用します。 */
    border: 2px ButtonText solid;
  }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [@media](/ja/docs/Web/CSS/@media)
- [Styling for Windows high contrast with standards for forced colors.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("forced-color-adjust")}}
