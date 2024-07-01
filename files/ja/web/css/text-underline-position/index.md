---
title: text-underline-position
slug: Web/CSS/text-underline-position
---

{{CSSRef}}

**`text-underline-position`** は [CSS](/ja/docs/Web/CSS) のプロパティであり、{{cssxref("text-decoration")}} プロパティの `underline` の値で設定される下線 (傍線) の位置を指定します。

{{EmbedInteractiveExample("pages/css/text-underline-position.html")}}

## 構文

```css
/* 単一のキーワード */
text-underline-position: auto;
text-underline-position: under;
text-underline-position: left;
text-underline-position: right;

/* 複数のキーワード */
text-underline-position: under left;
text-underline-position: right under;

/* グローバル値 */
text-underline-position: inherit;
text-underline-position: initial;
text-underline-position: revert;
text-underline-position: unset;
```

### 値

- `auto`
  - : {{glossary("user agent", "ユーザーエージェント")}}は、傍線を文字のベースラインの位置に配置するか、その下に配置するかを独自のアルゴリズムで決定します。
- `from-font`
  - : フォントファイルに推奨される位置についての情報があった場合、その値を使用します。フォントファイルにこの情報がない場合は、`auto` が設定された場合の動作と同様、ブラウザーが適切な位置を選択します。
- `under`
  - : 文字のベースラインの下、ディセンダーを越えない位置に強制的に傍線を設定します。これは、下付き文字が多用される化学式や数式の読みやすさを確保するのに便利です。
- `left`
  - : 縦書きモードでは、このキーワードは強制的に傍線をテキストの*左*端に配置します。横書きモードでは、`under` と同じです。
- `right`
  - : 縦書きモードでは、このキーワードは強制的に傍線をテキストの*右*側に配置します。横書きモードでは、`under` と同じです。
- `auto-pos` {{non-standard_inline}}
  - : `auto` と同じですので、代わりにそちらを使用してください。
- `above` {{non-standard_inline}}
  - : 強制的に傍線をテキストの上部に配置します。東アジアのテキストで使用すると、`auto` キーワードが同様の効果になります。
- `below` {{non-standard_inline}}
  - : 強制的に傍線をテキストの下部に配置します。アルファベットのテキストで使用すると、`auto` キーワードが同様の効果になります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="A_simple_example">単純な例</h3>

2 つの段落の例を見てみましょう。

```html
<p class="horizontal">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ac
  turpis vel laoreet. Nullam volutpat pharetra lorem, sit amet feugiat tortor
  volutpat quis. Nam eget sodales quam. Aliquam accumsan tellus ac erat posuere.
</p>

<p class="vertical">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ac
  turpis vel laoreet. Nullam volutpat pharetra lorem, sit amet feugiat tortor
  volutpat quis. Nam eget sodales quam. Aliquam accumsan tellus ac erat posuere.
</p>
```

CSS はこのようになります。

```css
p {
  font-size: 1.5rem;
  text-transform: capitalize;
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

.horizontal {
  text-underline-position: under;
}

.vertical {
  writing-mode: vertical-rl;
  text-underline-position: left;
}
```

この例では、どちらの段落にも太い下線を引いています。横書きのテキストでは `text-underline-position: under;` を使用して、下線をすべてのディセンダーの下に引いています。

[`writing-mode`](/ja/docs/Web/CSS/writing-mode) を縦書きに設定した場合、必要に応じて `left` または `right` を使用して、傍線をテキストの左と右のどちらに引くか決めることができます。

ライブサンプルはこのようになります。

{{EmbedLiveSample('A_simple_example', '100%', 600)}}

### グローバルに text-underline-position を設定する

`text-underline-position` プロパティは継承され、{{cssxref("text-decoration")}} 一括指定プロパティでリセットされないため、グローバルレベルでこの値を設定する方が適切かもしれません。例えば、数多くの化学式や数式があり、下付き文字をたくさん使用している文書では、 `under` の値が適切かもしれません。

```css
:root {
  text-underline-position: under;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-decoration")}} プロパティは、{{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-decoration-style")}} など、ほとんどのテキスト装飾プロパティを設定します。しかし、 `text-underline-position` は設定しません。
- Microsoft [non-standard values documentation](https://msdn.microsoft.com/en-us/library/ie/ms531176%28v=vs.85%29.aspx)
