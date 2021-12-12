---
title: break-before
slug: Web/CSS/break-before
tags:
  - CSS
  - CSS プロパティ
  - CSS 断片化
  - CSS 段組みレイアウト
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.break-before
translation_of: Web/CSS/break-before
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`break-before`** プロパティは、生成されたボックスの前で、ページ、段、領域をどのように区切るかを設定します。ボックスが生成されない場合は、このプロパティは無視されます。

```css
/* 一般の区切り値 */
break-before: auto;
break-before: avoid;
break-before: always;
break-before: all;

/* 改ページ値 */
break-before: avoid-page;
break-before: page;
break-before: left;
break-before: right;
break-before: recto;
break-before: verso;

/* 段区切り値 */
break-before: avoid-column;
break-before: column;

/* 領域区切り値 */
break-before: avoid-region;
break-before: region;

/* グローバル値 */
break-before: inherit;
break-before: initial;
break-before: revert;
break-before: unset;
```

区切り位置になる可能性のある場所 (言い換えれば、要素の境界) は、3 つのプロパティに影響されます。前の要素の {{cssxref("break-after")}} の値、次の要素の `break-before` の値、包含要素の {{cssxref("break-inside")}} の値です。

区切られるかどうかを判断するために、以下の規則が適用されます。

- 考慮される 3 つの値の中の何れかに*区切りを強制する値* (`always`, `left`, `right`, `page`, `column`, `region` の何れか) がある場合、それが優先されます。そのような区切りが複数ある場合は、フローの中で最も後に現れる要素のものが使用されます (つまり、 `break-before` の値は `break-after` の値より優先し、それは更に `break-inside` よりも優先します)。
- 考慮される 3 つの値の中に*区切りを防止する値* (`avoid`, `avoid-page`, `avoid-region`, `avoid-column` の何れか) が含まれていた場合は、その場所で区切りは適用されません。

強制的な区切りが適用されると、必要に応じてソフトな区切りが追加される場合がありますが、 `avoid` に関する値に解決される要素の境界には追加されません。

## 構文

`break-before` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

#### 一般の区切り値

- `auto`
  - : 該当するボックスの直前に何らかの (ページ、段、領域の) 区切りを挿入することを許可しますが、強制はしません。
- `avoid`
  - : 該当するボックスの直前に何らかの (ページ、段、領域の) 区切りを挿入することを禁止します。
- `always` {{experimental_inline}}
  - : 該当するボックスの直前で強制的に改ページを行います。この区切りの種類は断片化のコンテキストを直接含むものです。段組みコンテナーの中であれば強制的な段区切りとなり、ページ付きメディアの (ただし段組みコンテナーの中ではない) 場合はページ区切りになります。
- `all` {{experimental_inline}}
  - : 該当するボックスの直前で強制的に改ページを行います。すべての分断しうるコンテキストを通して区切ります。よって、段組みコンテナーの中での区切りは、ページコンテナーの中であれば強制的に段組みとページを区切ります。

#### 改ページ値

- `avoid-page`
  - : 該当するボックスの直前の改ページを禁止します。
- `page`
  - : 該当するボックスの直前で改ページを行います。
- `left`
  - : 該当するボックスの直前で一つまたは二つの改ページを行い、次のページが左ページになるようにします。
- `right`
  - : 該当するボックスの直前で一つまたは二つの改ページを行い、次のページが右ページになるようにします。
- `recto` {{experimental_inline}}
  - : 該当するボックスの直前で一つまたは二つの改ページを行い、次のページが奇数ページになるようにします。 (奇数ページは左から右に開く場合は右ページになり、右から左に開く場合は左ページになります。)
- `verso` {{experimental_inline}}
  - : 該当するボックスの直前で一つまたは二つの改ページを行い、次のページが偶数ページになるようにします。 (奇数ページは左から右に開く場合は左ページになり、右から左に開く場合は右ページになります。)

#### 段区切り値

- `avoid-column`
  - : 該当するボックスの直前の段区切りを禁止します。
- `column`
  - : 該当するボックスの直前で段区切りを行います。

#### 領域区切り値

- `avoid-region` {{experimental_inline}}
  - : 該当するボックスの直前の領域区切りを禁止します。
- `region` {{experimental_inline}}
  - : 該当するボックスの直前で領域区切りを行います。

## 改ページの別名

互換性のため、古い {{cssxref("page-break-before")}} はブラウザーから `break-before` の別名として扱われます。これにより、 `page-break-before` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> **Note:** ブラウザーにおいては `always` の値は `page-break-*` において、段区切りではなくページ区切りとして実装されています。したがって、 Level 4 の仕様書では `always` の値ではなく `page` の別名となっています。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### きれいに段を分割

次の例では、すべての段にまたがる `<h1>` (`column-span: all` を使用して実現) と、一連の `<h2>` と段落を `column-width: 200px` を使用して段組みレイアウトしたコンテナーを用意しています。

既定では、小見出しと段落は、見出しの位置が統一されていないため、かなり乱雑にレイアウトされていました。しかし、 `break-before: column` を `<h2>` 要素に使うことで、それぞれの要素の後に強制的に改行するようにしたので、各段の先頭に `<h2>` がきちんと配置されます。

#### HTML

```html
<article>
  <h1>大見出し</h1>

  <h2>小見出し</h2>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus. Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque dapibus, eu lacinia lectus dictum.</p>

  <h2>小見出し</h2>

  <p>Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie nec nisi.</p>

  <h2>小見出し</h2>

  <p>Vivamus eleifend metus vitae neque placerat, eget interdum elit mattis. Donec eu vulputate nibh. Ut turpis leo, malesuada quis nisl nec, volutpat egestas tellus.

  <h2>小見出し</h2>

  <p>In finibus viverra enim vel suscipit. Quisque consequat velit eu orci malesuada, ut interdum tortor molestie. Proin sed pellentesque augue. Nam risus justo, faucibus non porta a, congue vel massa. Cras luctus lacus nisl, sed tincidunt velit pharetra ac. Duis suscipit faucibus dui sed ultricies.</p>
</article>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
}

h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  column-span: all;
}

h2 {
  font-size: 1.2rem;
  color: red;
  letter-spacing: 1px;
  break-before: column;
}

p {
  line-height: 1.5;
}

article {
  column-width: 200px;
  gap: 20px;
}
```

### 結果

{{EmbedLiveSample('Breaking_into_neat_columns', '100%', 600)}}

## 仕様書

{{Specifications("css.properties.break-before.multicol_context")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [段組みレイアウト](/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
