---
title: font-weight
slug: Web/CSS/font-weight
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.font-weight
translation_of: Web/CSS/font-weight
---
{{CSSRef}}

**`font-weight`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォントの太さ (あるいは重み) を指定します。実際に表示されるフォントの太さは、現在設定されている {{cssxref("font-family")}} に依存する場合があります。

{{EmbedInteractiveExample("pages/css/font-weight.html")}}

## 構文

```css
/* キーワード値 */
font-weight: normal;
font-weight: bold;

/* 親要素に対して相対的なキーワード値 */
font-weight: lighter;
font-weight: bolder;

/* 数値のキーワード値 */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;// normal
font-weight: 500;
font-weight: 600;
font-weight: 700;// bold
font-weight: 800;
font-weight: 900;

/* グローバル値 */
font-weight: inherit;
font-weight: initial;
font-weight: revert;
font-weight: unset;
```

`font-weight` プロパティは、以下の一覧から選択した単一のキーワードで指定します。

### 値

- `normal`
  - : 通常のフォントの太さです。 `400` と同じです。
- `bold`
  - : 太字のフォントの太さです。 `700` と同じです。
- `lighter`
  - : フォントの太さが親要素よりも相対的に 1 つ細くなります。相対的な太さの計算に考慮されるフォントの太さは 4 つのみであることに注意してください。下記の{{anch("Meaning of relative weights", "相対的な太さの意味")}}を参照してください。
- `bolder`
  - : フォントの太さが親要素よりも相対的に1つ太くなります。相対的な太さの計算に考慮されるフォントの太さは 4 つのみであることに注意してください。下記の{{anch("Meaning of relative weights", "相対的な太さの意味")}}を参照してください。
- `<number>`
  - : 1 以上 1000 以下の {{cssxref("&lt;number&gt;")}} 値です。数値が大きいと、数値が小さいものより太さが太い (または等しい) ことを表します。よく使用される値は、以下の[一般的な太さ名との対応](#一般的な太さ名との対応)にあるように、共通の太さ名に対応しています。

`font-weight` 仕様書の古いバージョンでは、このプロパティはキーワード値と数値 100, 200, 300, 400, 500, 600, 700, 800, 900 のみを受け付けていました。可変フォント以外では実際にはこれらのセット値しか利用できません。ただし、可変フォント以外では細かい値 (例えば 451) は{{anch("太さの代替")}}の仕組みを用いて、これらの値のいずれかに変換されます。

CSS Fonts レベル 4 では、構文を拡張して 1 から 1000 までの任意の数値を受け付けるようになり、{{anch("Variable fonts", "可変フォント")}}が導入され、フォントの太さにもっと細かい範囲を使用することができるようになりました。

### 太さの代替

正確に一致する太さが利用できない場合、実際に表示される太さを定めるために以下の規則が使用されます。

- 対象となる太さがが `400`～`500` で指定された場合

  - 利用できる太さを、対象値から `500` までの間で昇順で探します。
  - 一致するものがなければ、対象値未満の利用できる太さを降順で探します。
  - 一致するものがなければ、 `500` より大きい太さを昇順で探します。

- 太さが `400` 未満で指定された場合、対象値以下の太さを降順で探します。一致するものがなければ、対象値より大きい太さを昇順で探します。
- 太さが `500` より大きく指定された場合、対象値以上の太さを昇順で探します。一致するものがなければ、対象値より小さい太さを降順で探します。

### 相対的な太さの意味

以下の表は、 `lighter` または `bolder` を指定する場合に要素の絶対的な太さを算出する方法を示しています。

なお、相対的な太さを使用した場合、 thin (100), normal (400), bold (700), heavy (900) の4つの太さのみが考慮されます。 font-family でもっと多くの太さが利用できる場合であっても、相対的な太さの計算の用途では無視されます。

<table class="standard-table">
  <thead>
    <tr>
      <th>継承値</th>
      <th><code>bolder</code></th>
      <th><code>lighter</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>100</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>200</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>300</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>400</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>500</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>600</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>700</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>800</th>
      <td>900</td>
      <td>700</td>
    </tr>
    <tr>
      <th>900</th>
      <td>900</td>
      <td>700</td>
    </tr>
  </tbody>
</table>

### 一般的な太さ名との対応

`100` から `900` の数値は、おおよそ以下の太さ名に対応します ([OpenType 仕様書](https://docs.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass)を参照してください)。

| 値  | 太さ名                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------- |
| 100 | Thin (Hairline)                                                                                                                   |
| 200 | Extra Light (Ultra Light)                                                                                                         |
| 300 | Light                                                                                                                             |
| 400 | Normal (Regular)                                                                                                                  |
| 500 | Medium                                                                                                                            |
| 600 | Semi Bold (Demi Bold)                                                                                                             |
| 700 | Bold                                                                                                                              |
| 800 | Extra Bold (Ultra Bold)                                                                                                           |
| 900 | Black (Heavy)                                                                                                                     |
| 950 | [Extra Black (Ultra Black)](https://docs.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks) |

### 可変フォント

多くのフォントは、[一般的な太さ名との対応](#一般的な太さ名との対応)の中の数値の一つに対応する特定の太さを持っています。しかし、可変フォントと呼ばれる一部のフォントは、もっと高いまたは低い粒度の太さの範囲に対応しており、これにより、デザイナーは選択した太さをより詳細に制御することができます。

TrueType や OpenType の可変フォントでは、 "wght" バリエーションが様々な幅を実装するために使用されます。

以下の例を動作させるには、 CSS Fonts Level 4 の font-weight が 1～1000 の任意の数を取れる構文に対応したブラウザーが必要です。

{{EmbedGHLiveSample("css-examples/variable-fonts/font-weight.html", '100%', 860)}}

## アクセシビリティの考慮

弱視の人は、 `font-weight` の値が `100` (Thin/Hairline) または `200` (Extra Light) の場合、特にフォントの[コントラスト比が低い場合](/ja/docs/Web/CSS/color#accessibility_concerns)は、テキストを読むのが難しくなることがあります。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

<h3 id="Setting_font_weights">フォントの太さの設定</h3>

#### HTML

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the
  bank, and of having nothing to do: once or twice she had peeped into the
  book her sister was reading, but it had no pictures or conversations in
  it, "and what is the use of a book," thought Alice "without pictures or
  conversations?"
</p>

<div>I'm heavy<br/>
  <span>I'm lighter</span>
</div>
```

#### CSS

```css
/* 段落のテキストを太字にします */
p {
  font-weight: bold;
}

/* div 要素のテキストの太さを normal より 2 段階太くしますが、
   標準的な bold より細くします */
div {
 font-weight: 600;
}

/* span 要素のテキストの太さを親要素より
   1 段階細くします */
span {
  font-weight: lighter;
}
```

#### 結果

{{EmbedLiveSample("Setting_font_weights","400","300")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-style")}}
- {{cssxref("font-family")}}
- [基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
