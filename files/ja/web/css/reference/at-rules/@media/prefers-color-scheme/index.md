---
title: prefers-color-scheme
slug: Web/CSS/Reference/At-rules/@media/prefers-color-scheme
original_slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`prefers-color-scheme`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、ユーザーがシステムに要求したカラーテーマが明色か暗色かを検出するために使用します。
ユーザーはオペレーティングシステムの設定（ライトモードやダークモードなど）やユーザーエージェントの設定で、この設定を示す場合があります。

## 埋め込み要素

SVG および iframe の場合、 `prefers-color-scheme` を使用すると、 SVG または iframe の CSS スタイルを、ウェブページ内の親要素の [`color-scheme`](/ja/docs/Web/CSS/Reference/Properties/color-scheme) に基づいて設定することができます。
SVG は、HTML にインラインでではなく、埋め込み（すなわち `<img src="circle.svg" alt="circle" />`）で使用する必要があります。
SVG で `prefers-color-scheme` を使用している例については、「[埋め込み要素で継承される配色](#埋め込み要素で継承される配色)」の節を参照してください。

`prefers-color-scheme` は、[オリジンをまたいだ](/ja/docs/Web/Security/Same-origin_policy#異なるオリジンへのネットワークアクセス) `<svg>` および `<iframe>` 要素で使用することができます。オリジンをまたぐとは、参照しているページとは異なるホストから取得される要素のことです。 SVG の詳細については、 [SVG のドキュメント](/ja/docs/Web/SVG)、 iframe の詳細については、 [iframe のドキュメント](/ja/docs/Web/HTML/Reference/Elements/iframe)を参照してください。

## 構文

- `light`
  - : ユーザーがシステムに、明色のテーマを持つインターフェイスにしたいと通知したか、アクティブな設定を示さなかったことを示します。
- `dark`
  - : ユーザーがシステムに、暗色のテーマを持つインターフェイスにしたいと通知したことを示します。

## 例

### ダークテーマかライトテーマかの検出

一般的な使用法は、既定で明るい配色を使用し、`prefers-color-scheme: dark` を使用して、色を暗い色調に上書きすることです。その逆も実現可能です。

この例では、両方のオプションを示しています。テーマ A は明るい色を使用しますが、暗い色に変更することができます。テーマ B は暗い色を使用しますが、明るい色に変更することができます。結局、ブラウザーが `prefers-color-scheme` に対応している場合、それぞれのテーマが明るい色、暗い色になります。

### HTML

```html
<div class="box theme-a">テーマ A （初期状態）</div>
<div class="box theme-a adaptive">テーマ A （暗色モードでは変更される）</div>
<br />

<div class="box theme-b">テーマ B （初期状態）</div>
<div class="box theme-b adaptive">テーマ B （明色モードでは変更される）</div>
```

#### CSS

```css hidden
div.box {
  display: inline-block;
  padding: 1em;
  margin: 6px;
  outline: 2px solid #000;
  width: 12em;
  height: 2em;
  vertical-align: middle;
}
```

テーマ A （茶色）は、既定では明るい配色を使用していますが、メディアクエリーに基づいて暗い配色に切り替わります。

```css
.theme-a {
  background: #dca;
  color: #731;
}
@media (prefers-color-scheme: dark) {
  .theme-a.adaptive {
    background: #753;
    color: #dcb;
    outline: 5px dashed #000;
  }
}
```

テーマ B （青） は、既定では暗い配色を使用していますが、メディアクエリーに基づいて明るい配色に切り替わります。

```css
.theme-b {
  background: #447;
  color: #bbd;
}
@media (prefers-color-scheme: light) {
  .theme-b.adaptive {
    background: #bcd;
    color: #334;
    outline: 5px dotted #000;
  }
}
```

#### 結果

左のボックスには、`prefers-color-scheme` メディアクエリーを使用しない場合のテーマ A とテーマ B が表示されています。右のボックスには、同じテーマが表示されていますが、そのうちの 1 つは、ユーザーのアクティブな配色に基づいて、より暗い、またはより明るいバリエーションに変更されています。ブラウザーまたはオペレーティングシステムの設定に基づいて変更された場合、1 つのボックスの概要は破線または点線になります。

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### 埋め込み要素で継承される配色

次の例は、埋め込み要素で `prefers-color-scheme` メディア機能を使用して、親要素から配色を継承する方法を示しています。
スクリプトを使用して、 `<img>` 要素とその `alt` 属性のソースを設定しています。これは通常、 HTML では `<img src="circle.svg" alt="circle" />` と記述します。

3 つの円が表示され、そのうちの 1 つは別の色で描画されているはずです。
最初の円は OS から `color-scheme` を継承しており、システムの OS のテーマスイッチャーを使用して切り替えることができます。

2 つ目と 3 つ目の円は、埋め込み要素から `color-scheme` を継承しています。`@media` クエリーを使用すると、親要素の `color-scheme` に基づいて SVG コンテンツのスタイルを設定できます。
この場合、CSS プロパティ `color-scheme` を持つ親要素は `<div>` です。

```html
<div>
  <img />
</div>

<div style="color-scheme: light">
  <img />
</div>
<div style="color-scheme: dark">
  <img />
</div>

<!-- Embed an SVG for all <img> elements -->
<script>
  for (let img of document.querySelectorAll("img")) {
    img.alt = "circle";
    img.src =
      "data:image/svg+xml;base64," +
      window.btoa(`
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <style>
          :root { color: blue }
          @media (prefers-color-scheme: dark) {
            :root { color: purple }
          }
        </style>
        <circle fill="currentColor" cx="16" cy="16" r="16"/>
      </svg>
    `);
  }
</script>
```

{{EmbedLiveSample("Color_scheme_inheritance")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("color-scheme")}} プロパティ
- [`<meta name="color-scheme">`](/ja/docs/Web/HTML/Reference/Elements/meta/name#color-scheme)
- HTTP の {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} ヘッダーによる[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)
- [Firefox での prefers-color-scheme のシミュレーション](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [動画: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesigning your product and website for dark mode](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- 色スキームの変更: [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/)、[macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode)、[Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019)、[その他のプラットフォーム](https://support.mozilla.org/ja/questions/1271928)
