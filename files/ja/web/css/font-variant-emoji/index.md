---
title: font-variant-emoji
slug: Web/CSS/font-variant-emoji
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

**`font-variant-emoji`** は [CSS](/ja/docs/Web/CSS) のプロパティで、絵文字の表示についての既定の表現を指定します。

従来は、変化形セレクター（テキストの場合は `U+FE0E`、絵文字の場合は `U+FE0F`）をこの点に付加することで行われていました。このプロパティの影響を受けるのは、[Unicode emoji presentation sequence](https://www.unicode.org/emoji/charts/emoji-variants.html) に掲載されている絵文字だけです。

## 構文

```css
/* キーワード値 */
font-variant-emoji: normal;
font-variant-emoji: text;
font-variant-emoji: emoji;
font-variant-emoji: unicode;

/* グローバル値 */
font-variant-emoji: inherit;
font-variant-emoji: initial;
font-variant-emoji: revert;
font-variant-emoji: revert-layer;
font-variant-emoji: unset;
```

`font-variant-emoji` プロパティは、下記の一覧から 1 つのキーワード値を使用して指定します。

### 値

- `normal`
  - : ブラウザーが絵文字を表示する方法を選べます。これは多くの場合、オペレーティングシステムの設定に従います。
- `text`
  - : 絵文字を Unicode テキスト変化形セレクター (`U+FE0E`) を使用しているかのように描画します。
- `emoji`
  - : 絵文字を Unicode 絵文字変化形セレクター (`U+FE0F`) を使用しているかのように描画します。
- `unicode`
  - : [絵文字の表示プロパティ](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation)に従って絵文字を表示します。`U+FE0E` または `U+FE0F` の変化形セレクターが存在する場合、この値の設定を上書きします。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## アクセシビリティ

絵文字を使用することは楽しいように思えるかもしれませんが、アクセシビリティ、特に視覚や認知に障害のあるユーザーへの影響を考慮する必要があります。絵文字を使用する際には、以下の要素を考慮してください。

- スクリーンリーダーへの表示: スクリーンリーダーは絵文字の代替テキストを読み上げます。このことを念頭に置いて、コンテンツ内での絵文字の位置を検討してください。絵文字を繰り返し多用すると、スクリーンリーダーのユーザーに悪影響があります。顔文字よりも絵文字を使用する方が良いでしょう。顔文字は句読点として読み上げられます。

- 背景とのコントラスト: 絵文字を使用する場合、その色と背景色との作用を考えてください。特に、ライト/ダークモードなど、背景色が変化する可能性がある場合は注意が必要です。

- 使用する意図： 絵文字の意味の理解がユーザーと異なる可能性があるため、絵文字を言葉に置き換えて使用しないでください。また、絵文字は文化や地域によって異なる意味を持つ場合があることも考慮してください。できれば、一般的に知られている絵文字に使用を制限することを推奨します。

## 例

### 絵文字の表示方法の変更

この例は絵文字を `text` または `emoji` で表示する方法を示しています。

#### HTML

```html-nolint hidden
<p class="no-support">
  お使いのブラウザーは <code>font-variant-emoji</code> に対応していません。この画像は対応した場合の表示方法を示しています。
</p>
<img
  class="no-support"
  src="./font-variant-emoji-example.jpg"
  alt="文字として表示させる電話の絵文字は白黒で、絵文字として表示させる電話の絵文字はフルカラーでグラフィカルに表示されます。" />
```

```html
<section class="emojis">
  <div class="emoji">
    <h2>text presentation</h2>
    <div class="text-presentation">☎</div>
  </div>
  <div class="emoji">
    <h2>emoji presentation</h2>
    <div class="emoji-presentation">☎</div>
  </div>
</section>
```

#### CSS

```css hidden
@supports (font-variant-emoji: emoji) {
  .no-support {
    display: none;
  }
  .emojis {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .emoji > div {
    font-size: 2rem;
  }
}

@supports not (font-variant-emoji: emoji) {
  .emojis {
    display: none;
  }
}
```

```css
.text-presentation {
  font-variant-emoji: text;
}

.emoji-presentation {
  font-variant-emoji: emoji;
}
```

#### 結果

{{ EmbedLiveSample('Changing the way an emoji is displayed') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [font-variant](/ja/docs/Web/CSS/font-variant)
- [font-variant-alternates](/ja/docs/Web/CSS/font-variant-alternates)
- [font-variant-caps](/ja/docs/Web/CSS/font-variant-caps)
- [font-variant-east-asian](/ja/docs/Web/CSS/font-variant-east-asian)
- [font-variant-ligatures](/ja/docs/Web/CSS/font-variant-ligatures)
- [font-variant-numeric](/ja/docs/Web/CSS/font-variant-numeric)
- [Emojis and accessibility: How to use them properly](https://uxdesign.cc/emojis-in-accessibility-how-to-use-them-properly-66b73986b803)
