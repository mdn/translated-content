---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
---

**`font-size-adjust`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 (大文字の大きさを定義する) 現在のフォントサイズに相対的な小文字の大きさを設定します。

```css
/* 指定されたフォントサイズを使用 */
font-size-adjust: none;

/* 小文字のフォントサイズを、指定された
フォントサイズの半分にする */
font-size-adjust: 0.5;

/* 2 つの値 - Level 5 仕様書で追加 */
font-size-adjust: ex-height 0.5;

/* グローバル値 */
font-size-adjust: inherit;
font-size-adjust: initial;
font-size-adjust: revert;
font-size-adjust: unset;
```

このプロパティが便利なのは、特に小さなサイズのフォントの読みやすさは、大文字の高さではなく小文字の高さで決まるからです。最初に選択した {{Cssxref("font-family")}} が利用できず、その代替フォントのアスペクト比 (小文字の大きさとフォントの大きさの比率) が著しく異なる場合、読みやすさが問題になることがあります。

このプロパティの使い方は、 `font-size-adjust` に対応していないブラウザーと互換性を持たせるため、 {{ Cssxref("font-size") }} プロパティに掛け合わせる数値として指定します。つまり、このプロパティ指定された値は、ふつう最初に選択されたフォントのアスペクト比になります。例えば、次のように指定されたスタイルシートでは、

```css
font-size: 14px;
font-size-adjust: 0.5;
```

実際のところ、フォントの小文字が `7px` の高さ (0.5 x 14px) を持つべきであると指定しています。これは、 `font-size-adjust` に対応していないブラウザーでは `14px` のフォントが使用されている場合でも、妥当な結果が得られます。

## 構文

### 値

- `none`
  - : {{ Cssxref("font-size") }} プロパティだけを基準にフォントサイズを選びます。
- ex-height | cap-height | ch-width | ic-width | ic-height

  - : 正規化の対象となるフォントメトリックを指定します。既定値は `ex-height` です。次のいずれかです。

    - `ex-height`
      - : x-height をフォントサイズで割った値を使って、フォントのアスペクト値を正規化します。
    - `cap-height`
      - : フォントの cap-height を正規化し、cap-height をフォントサイズで使用します。
    - `ch-width`
      - : "0" (ZERO, U+0030) の送り幅をフォントサイズで割った値を使って、フォントの横方向の狭ピッチを正規化します。
    - `ic-width`
      - : "水" (CJK water ideograph, U+6C34) の送り幅をフォントサイズで割って、フォントの水平方向のワイドピッチを正規化します。
    - `ic-height`
      - : フォントの垂直方向のワイドピッチを、"水" (CJK water ideograph, U+6C34) のアドバンスハイトをフォントサイズで割った値で正規化します。

- {{cssxref("&lt;number&gt;")}}

  - : {{ Cssxref("font-size") }} に掛け合わせて小文字の高さ (そのフォントの文字 x の高さ) になるような値を指定し、フォントサイズを選びます。

    指定した数値は、通常は最初に選んだ {{ Cssxref("font-family") }} のアスペクト比 (文字 x の高さとフォントサイズの比率) にしてください。こうすれば、最初に選んだフォントが利用可能なら、ブラウザーが `font-size-adjust` に対応しているかどうかに関わらず、どのブラウザーでも同じサイズで表示されます。

    `0` は高さが 0 のテキスト (非表示テキスト) になります。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

<h3 id="Adjusting_lower-case_letter_sizes">小文字の大きさの調整</h3>

#### HTML

```html
<p class="times">
  This text uses the Times font (10px), which is hard to read in small sizes.
</p>
<p class="verdana">
  This text uses the Verdana font (10px), which has relatively large lowercase
  letters.
</p>
<p class="adjtimes">
  This is the 10px Times, but now adjusted to the same aspect ratio as the
  Verdana.
</p>
```

#### CSS

```css
.times {
  font-family: Times, serif;
  font-size: 10px;
}

.verdana {
  font-family: Verdana, sans-serif;
  font-size: 10px;
}

.adjtimes {
  font-family: Times, serif;
  font-size-adjust: ex-height 0.58;
  font-size: 10px;
}
```

#### 結果

{{ EmbedLiveSample('Adjusting_lower-case_letter_sizes', 500, 200) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{CSSRef}}

## 関連情報

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- [基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
