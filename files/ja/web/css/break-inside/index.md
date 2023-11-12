---
title: break-inside
slug: Web/CSS/break-inside
---

{{CSSRef}}

**`break-inside`** は [CSS](/ja/docs/Web/CSS) のプロパティで、生成されたボックスの途中で、ページ、段、領域をどのように区切るかを設定します。ボックスが生成されない場合は、このプロパティは無視されます。

```css
/* キーワード値 */
break-inside: auto;
break-inside: avoid;
break-inside: avoid-page;
break-inside: avoid-column;
break-inside: avoid-region;

/* グローバル値 */
break-inside: inherit;
break-inside: initial;
break-inside: revert;
break-inside: unset;
```

区切り位置になる可能性のある場所 (言い換えれば、要素の境界) は、3 つのプロパティに影響されます。前の要素の {{cssxref("break-after")}} の値、次の要素の {{cssxref("break-before")}} の値、包含要素の `break-inside` の値です。

区切られるかどうかを判断するために、以下の規則が適用されます。

1. 考慮される三つの値の中の何れかに*区切りを強制する値* (`always`, `left`, `right`, `page`, `column`, `region` の何れか) がある場合、それが優先されます。そのような区切りが複数ある場合は、フローの中で最も後に現れる要素のものが使用されます (つまり、 `break-before` の値は `break-after` の値より優先し、それは更に `break-inside` よりも優先します)。
2. 考慮される三つの値の中に*区切りを防止する値* (`avoid`, `avoid-page`, `avoid-region`, `avoid-column` の何れか) が含まれていた場合は、その場所で区切りは適用されません。

強制的な区切りが適用されると、必要に応じてソフトな区切りが追加される場合がありますが、 `avoid` に関する値に解決される要素の境界には追加されません。

## 構文

`break-inside` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `auto`
  - : 主ボックスの途中に何らかの (ページ、段、領域の) 区切りを挿入することを許可しますが、強制はしません。
- `avoid`
  - : 主ボックスの途中に何らかの (ページ、段、領域の) 区切りを挿入することを禁止します。
- `avoid-page`
  - : 主ボックスの途中の改ページを禁止します。
- `avoid-column`
  - : 主ボックスの途中の段区切りを禁止します。
- `avoid-region` {{experimental_inline}}
  - : 主ボックスの途中の領域区切りを禁止します。

## 改ページの別名

互換性のため、ブラウザーは古い {{cssxref("page-break-inside")}} を `break-inside` の別名として扱います。これにより、 `page-break-inside` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 図の中の改行を防ぐ

次の例では、すべての段にまたがる `<h1>` (`column-span: all` を使用して実現) と、 `column-width: 200px` を使用して複数の段に配置された一連の段落を含むコンテナーを用意しています。また、画像とキャプションを含む `<figure>` もあります。

既定では、画像とキャプションの間に改行が入る可能性がありますが、これは私たちが望んでいるものではありません。これを避けるために、 `break-inside: avoid` を `<figure>` に設定しています。

#### HTML

```html
<article>
  <h1>大見出し</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
    fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec
    lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus.
    Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque
    dapibus, eu lacinia lectus dictum.
  </p>

  <figure>
    <img
      src="https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png" />
    <figcaption>The Firefox logo — fox wrapped around the world</figcaption>
  </figure>

  <p>
    Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras
    suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur
    a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non
    vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie
    nec nisi.
  </p>

  <p>
    In finibus viverra enim vel suscipit. Quisque consequat velit eu orci
    malesuada, ut interdum tortor molestie. Proin sed pellentesque augue. Nam
    risus justo, faucibus non porta a, congue vel massa. Cras luctus lacus nisl,
    sed tincidunt velit pharetra ac. Duis suscipit faucibus dui sed ultricies.
  </p>
</article>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
}

body {
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  column-span: all;
}

h1 + p {
  margin-top: 0;
}

p {
  line-height: 1.5;
  break-after: column;
}

figure {
  break-inside: avoid;
}

img {
  max-width: 70%;
  display: block;
  margin: 0 auto;
}

figcaption {
  font-style: italic;
  font-size: 0.8rem;
  width: 70%;
}

article {
  column-width: 200px;
  gap: 20px;
}
```

### 結果

{{EmbedLiveSample('Avoiding_breaking_inside_a_figure', '100%', 600)}}

## 仕様書

{{Specifications("css.properties.break-inside.multicol_context")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [段組みレイアウト](/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
