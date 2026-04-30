---
title: "`ruby-overhang` CSS プロパティ"
short-title: ruby-overhang
slug: Web/CSS/Reference/Properties/ruby-overhang
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`ruby-overhang`** は [CSS](/ja/docs/Web/CSS) のプロアpティで、{{htmlelement("ruby")}} の注釈が周囲のテキストからはみ出すかどうかを指定します。

{{InteractiveExample("CSS Demo: ruby-overhang")}}

```css interactive-example-choice
ruby-overhang: auto;
```

```css interactive-example-choice
ruby-overhang: none;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
    ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
  </p>
</section>
```

```css interactive-example
#default-example {
  font-size: 2em;
}
```

## 構文

```css
/* キーワード値 */
ruby-overhang: auto;
ruby-overhang: none;

/* グローバル値 */
ruby-overhang: inherit;
ruby-overhang: initial;
ruby-overhang: revert;
ruby-overhang: revert-layer;
ruby-overhang: unset;
```

### 値

- `auto`
  - : ルビの注釈コンテナーが、対応するベースコンテナーよりも長い場合、注釈が隣接するテキストと部分的に重なることがあります。
    はみ出しを行うかどうか、およびその程度は、ユーザーエージェントによって決定されます。
- `none`
  - : ルビが隣接するコンテナーを越えてはならないことを示すキーワードです。

## 解説

`ruby-overhang` プロパティは、ルビ注釈テキストボックス ({{htmlelement("rt")}}) が、`<ruby>` コンテナーボックスの外側にある隣接するテキストと重なるかどうかを制御します。

ルビの注釈テキストがはみ出さないように設定されている場合、つまり、`ruby-overhang: none` が `<ruby>` 要素に設定されている場合、その要素はインラインボックスのように振る舞います。これは、あたかもその {{cssxref("display")}} プロパティが `inline` に設定されているかのように、境界線内には自身のコンテンツのみが表示され、隣接する要素が境界ボックスを越えない状態となります。

デフォルトで、`<rt>` 要素のコンテンツははみ出すことができるため、そのコンテンツが `<ruby>` のコンテナーボックスと重なり、周囲のインラインレベルの内容の上または下に部分的に表示されることがあります。
デフォルトの `auto` では、コンテンツがはみ出すことがありますが、隣接する `<rt>` 要素や、`display` の値が `ruby-base` または `ruby-text` となる要素と重なる場合は、はみ出しません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ベーステキストをはみ出すルビ

この例では、`ruby-overhang` プロパティの 2 つの値を示しています。

#### HTML

クラス名以外は、コンテンツと構造が同一の `<ruby>` 要素を含む 2 つの段落があります。

```html
<p class="auto">
  あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
  ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
</p>

<p class="none">
  あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
  ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
</p>
```

#### CSS

赤い `outline` を `1px` で設定し、{{htmlelement("rt")}} 要素のテキスト注釈が目立つようにします。
最初の段落には `ruby-overhang: auto` が設定されており、2 つ目には `ruby-overhang: none` が設定されています。

```css
p {
  font-size: 40px;
  display: block;
  margin: 0.5rem;
}
rt {
  font-size: 28px;
  outline: 1px solid red;
}
.auto {
  ruby-overhang: auto;
}
.none {
  ruby-overhang: none;
}
```

#### 結果

{{EmbedLiveSample("ruby_overhanging_base_text", , "350")}}

`ruby-overhang` が `none` に設定されている場合、注釈テキストは、基本のルビテキストの隣接するボックスと重なることができません。よく見れば、最初の段落では、ルビテキストを囲む赤いボックスが、関連付けられていない `<ruby>` コンテンツの一部とわずかに重なっていることにお気づきかもしれません。一方、対応しているブラウザーでは `none` の例では、ルビコンテンツと関連付けられていないルビテキストとの間に重なりはありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("ruby-align")}}
- {{CSSxRef("text-transform")}}: full-size-kana
- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
