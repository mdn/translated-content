---
title: font-stretch
slug: Web/CSS/font-stretch
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.font-stretch
translation_of: Web/CSS/font-stretch
---
{{CSSRef}}

**`font-stretch`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォントの normal, condensed, expanded のフェイスを選択します。

{{EmbedInteractiveExample("pages/css/font-stretch.html")}}

## 構文

```css
/* キーワード値 */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* パーセント値 */
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* グローバル値 */
font-stretch: inherit;
font-stretch: initial;
font-stretch: revert;
font-stretch: unset;
```

このプロパティは、単一のキーワード値または単一の {{cssxref("&lt;percentage&gt;")}} 値として指定することができます。

### 値

- `normal`
  - : 通常のフォントフェイスを指定します。
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : 通常より幅の狭い (condensed) フォントフェイスを指定します。最も幅の狭いフェイスは ultra-condensed です。
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : 通常より幅の広い (expanded) フォントフェイスを指定します。最も幅の広いフェイスは ultra-expanded です。
- `<percentage>`

  - : {{cssxref("&lt;percentage&gt;")}} 値です。このプロパティでは負の数は許可されていません。

    > **Note:** `font-stretch` の古いバージョンの仕様書では、このプロパティは 9 つのキーワード値のみを受け付けていました。
    >
    > **{{ SpecName('CSS4 Fonts', '#propdef-font-stretch') }} 仕様書**で、構文が `<percentage>` を受け付けるように拡張されました。これによって、文字幅がもっと連続的になるように提供することができます。 TrueType や OpenType のフォントでは、 "`wdth`" バリエーションが様々な幅を実装するために使用されます。
    >
    > 但し、`<percentage>` の構文はまた、すべてのブラウザーが対応しているわけではありません。詳しくは[ブラウザーの互換性](#ブラウザーの互換性)をご覧ください。

### キーワードと数値の対応

以下の表は、キーワード値とパーセントの数値の間の対応を示しています。

| キーワード        | パーセント値 |
| ----------------- | ------------ |
| `ultra-condensed` | 50%          |
| `extra-condensed` | 62.5%        |
| `condensed`       | 75%          |
| `semi-condensed`  | 87.5%        |
| `normal`          | 100%         |
| `semi-expanded`   | 112.5%       |
| `expanded`        | 125%         |
| `extra-expanded`  | 150%         |
| `ultra-expanded`  | 200%         |

## 解説

フォントファミリーによっては追加のフェイスを提供しており、通常より狭い文字、 (_condensed_ フェイス)、通常より広い文字 (_expanded_ フェイス) などがあります。

`font-stretch` を使うと、そのようなフォントで condensed や expanded フェイスを選択することができます。使用しているフォントが condensed や expanded フェイスを提供していない場合は、このプロパティは効果がありません。

### フォントフェイスの選択

`font-stretch` で与えられた値で選択されるフェイスは、フォントがそのフェイスに対応しているかによります。与えられた値に正確に一致するフェイスがフォントに存在しない場合、値が 100% よりも小さい場合はより狭いフェイスが割り当てられ、100% と等しいか大きい場合はより広いフェイスが割り当てられます。

以下の表は 2 つの異なるフォントにおいて、 `font-stretch` に様々なパーセント値を提供した場合の効果を示しています。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">50%</th>
      <th scope="col">62.5%</th>
      <th scope="col">75%</th>
      <th scope="col">87.5%</th>
      <th scope="col">100%</th>
      <th scope="col">112.5%</th>
      <th scope="col">125%</th>
      <th scope="col">150%</th>
      <th scope="col">200%</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Helvetica Neue</th>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
    </tr>
    <tr>
      <th scope="row">League Mono Variable</th>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page2.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page3.png" /></td>
      <td><img alt="" src="l-100.png" /></td>
      <td><img alt="" src="l-112.5.png" /></td>
      <td><img alt="" src="l-125.png" /></td>
      <td><img alt="" src="l-150.png" /></td>
      <td><img alt="" src="l-200.png" /></td>
    </tr>
  </tbody>
</table>

- **Helvetica Neue** は、既定で macOS にインストールされているもので、普通のフェイスに加えて一つの condensed のフェイスを持ちます。 `font-stretch` の100%より小さいすべての値は condensed のフェイスを選択し、それ以外の値は normal のフェイスを選択します。
- **[League Mono Variable](https://tylerfinck.com/leaguemonovariable/)** は、 `font-stretch` のさまざまなパーセント値に対して、幅の連続的な範囲のようなものを提供する可変フォントです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フォントの引き伸ばしパーセント値の設定

> **Note:** この例は、`<percentage>` 値に対応しているブラウザーでのみ動作します。

{{EmbedGHLiveSample("css-examples/variable-fonts/font-stretch.html", '100%', 950)}}

## 仕様書

{{Specifications}}

> **Note:** CSS プロパティ `font-stretch` は初め CSS 2 で定義されましたが、CSS 2.1 で実装経験不足のため外されました。CSS 3 では新しく定義されました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
