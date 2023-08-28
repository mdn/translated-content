---
title: font-language-override
slug: Web/CSS/font-language-override
---

{{CSSRef}}

**`font-language-override`** は CSS のプロパティで、書体で言語に固有の字形の使用を制御します。

```css
/* キーワード値 */
font-language-override: normal;

/* <string> 値 */
font-language-override: "ENG"; /* 英語の字形 */
font-language-override: "TRK"; /* トルコ語の字形 */

/* グローバル値 */
font-language-override: inherit;
font-language-override: initial;
font-language-override: revert;
font-language-override: revert-layer;
font-language-override: unset;
```

既定では、 HTML の `lang` 属性がブラウザーにその言語に特化してデザインされた字形を表示することを指示します。例えば、多くのフォントが合字 `fi` に特別な文字を持っており、 "i" の点を "f" に統合しています。しかし、言語がトルコ語に設定された場合、その書体では統合した字形を使用しません。トルコ語では "i" に、点が付いたもの (`i`) と点が付かないもの (`ı`) の二つの種類があり、この合字を使用すると点が付いた "i" を点がない "ı" に誤った変換をしてしまいます。

`font-language-override` プロパティで、その書体における特定の言語の動作を上書きすることができます。これは例えば、使用している書体でその言語に対して正しい対応が行われていないときに便利です。例えば、ある書体がアゼルバイジャン語の正しい規則を持っていない場合、同様の規則に従うトルコ語の字形を強制的に使用することができます。

## 構文

`font-language-override` プロパティは、キーワード `normal` または一つの `<string>` として指定します。

### 値

- `normal`
  - : `lang` 属性で指定された言語で適切なフォントの字形を使用するよう、ブラウザーに指示します。
- {{cssxref("string")}}
  - : 文字列で指定された言語で適切なフォントの字形を使用するよう、ブラウザーに指示します。値は [OpenType language system](https://docs.microsoft.com/en-us/typography/opentype/spec/languagetags) にある言語タグと一致している必要があります。例えば、 "ENG" は英語で、 "KOR" は韓国語です。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### デンマーク語の文字の使用

#### HTML

```html
<p class="para1">Default language setting.</p>
<p class="para2">
  This is a string with the <code>font-language-override</code> set to Danish.
</p>
```

#### CSS

```css
p.para1 {
  font-language-override: normal;
}

p.para2 {
  font-language-override: "DAN";
}
```

#### 結果

{{ EmbedLiveSample('Using Danish glyphs') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-kerning")}}
