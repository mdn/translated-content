---
title: break-before
slug: Web/CSS/Reference/Properties/break-before
l10n:
  sourceCommit: fb718e7db3758da4e74f74c72ac425c848ad7023
---

**`break-before`** は [CSS](/ja/docs/Web/CSS) のプロパティで、生成されたボックスの前で、ページ、段、領域を分割する方法を設定します。ボックスが生成されない場合は、このプロパティは無視されます。

{{InteractiveExample("CSS デモ: break-before")}}

```css interactive-example-choice
break-before: auto;
```

```css interactive-example-choice
break-before: page;
```

```html-nolint interactive-example
<div>
  <p>
    このプロパティの効果は、文書が印刷される時、または印刷のプレビューが表示された時に確認できます。
  </p>
  <button id="print-btn">印刷プレビューを表示</button>
  <div class="box-container">
    <div class="box">プロパティの前のコンテンツ</div>
    <div class="box" id="example-element">'break-before' の付いたコンテンツ</div>
    <div class="box">プロパティの後のコンテンツ</div>
  </div>
</div>
```

```css interactive-example
.box {
  border: solid #5b6dcd 5px;
  background-color: #5b6dcd;
  margin: 10px 0;
  padding: 5px;
}

#example-element {
  border: solid 5px #ffc129;
  background-color: #ffc129;
  color: black;
}
```

```js interactive-example
const btn = document.getElementById("print-btn");

btn.addEventListener("click", () => {
  window.print();
});
```

## 構文

```css
/* 一般の分割値 */
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

/* 改段値 */
break-before: avoid-column;
break-before: column;

/* 領域分割値 */
break-before: avoid-region;
break-before: region;

/* グローバル値 */
break-before: inherit;
break-before: initial;
break-before: revert;
break-before: revert-layer;
break-before: unset;
```

分割位置になる可能性のある場所 (言い換えれば、要素の境界) は、3 つのプロパティに影響されます。前の要素の {{cssxref("break-after")}} の値、次の要素の `break-before` の値、包含要素の {{cssxref("break-inside")}} の値です。

分割が行われるかどうかを判断するためには、以下の規則が適用されます。

1. 影響される 3 つの値のいずれかに分割を強制する値 (`always`, `left`, `right`, `page`, `column`, `region` のいずれか) がある場合、それが優先されます。そのような分割指定が複数ある場合は、フローの中で最も後に現れる要素のものが使用されます (つまり、 `break-before` の値は `break-after` の値より優先し、それは更に `break-inside` よりも優先します)。
2. 影響される 3 つの値の分割を抑止する値 (`avoid`, `avoid-page`, `avoid-region`, `avoid-column` のいずれか) が含まれていた場合は、その場所で分割は適用されません。

強制的な分割が適用されると、必要に応じてソフトな分割が追加される場合がありますが、 `avoid` に関する値に解決される要素の境界には追加されません。

### 値

#### 一般の分割値

- `auto`
  - : 対象ボックスの直前に何らかの分割（改ページ、改段、領域分割）を挿入することを許可しますが、強制はしません。
- `avoid`
  - : 対象ボックスの直前に何らかの分割（改ページ、改段、領域分割）を挿入することを禁止します。
- `always`
  - : 対象ボックスの直前で強制的に分割を行います。この分割は、この対象ボックスを直接含む断片化コンテキストで行われます。段組みコンテナーの中であれば強制的な改段となり、ページメディアの場合は（段組みコンテナーの中でなければ）改ページになります。
- `all`
  - : 対象ボックスの直前で強制的に分割を行います。すべての分断しうるコンテキストを通して分割されます。よって、段組みコンテナーの中での分割は、ページコンテナーの中であれば強制的に段組みとページを分割されます。

#### 改ページ値

- `avoid-page`
  - : 対象ボックスの直前の改ページを禁止します。
- `page`
  - : 対象ボックスの直前で改ページを行います。
- `left`
  - : 対象ボックスの直前で 1 回または 2 回の改ページを行い、次のページが左ページになるようにします。横書きの本では、本の背の左側に置かれているページ、両面印刷では裏側のページです。
- `right`
  - : 対象ボックスの直前で 1 回または 2 回の改ページを行い、次のページが右ページになるようにします。横書きの本では、本の背の右側に置かれているページ、両面印刷では表側のページです。
- `recto`
  - : 対象ボックスの直前で 1 回または 2 回の改ページを行い、次のページが奇数ページになるようにします。（奇数ページは左から右に開く場合は右ページになり、右から左に開く場合は左ページになります。）
- `verso`
  - : 対象ボックスの直前で 1 回または 2 回の改ページを行い、次のページが偶数ページになるようにします。（奇数ページは左から右に開く場合は左ページになり、右から左に開く場合は右ページになります。）

#### 改段値

- `avoid-column`
  - : 対象ボックスの直前の改段を禁止します。
- `column`
  - : 対象ボックスの直前で改段を行います。

#### 領域分割値

- `avoid-region`
  - : 対象ボックスの直前の領域分割を禁止します。
- `region`
  - : 対象ボックスの直前で領域分割を行います。

## 改ページの別名

互換性のため、ブラウザーは古い {{cssxref("page-break-before")}} を `break-before` の別名として扱います。これにより、 `page-break-before` を使用しているサイトが引き続き設計通りに動作することを保証します。一部の値には、次のような別名があります。

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> [!NOTE]
> `always` の値は `page-break-*` において、ブラウザーにおける改段ではなく改ページとして実装されています。したがって、レベル 4 の仕様書では `always` の値ではなく `page` の別名となっています。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### きれいに段を分割

次の例では、すべての段にまたがる `<h1>` (`column-span: all` を使用して実現) と、一連の `<h2>` と段落を `column-width: 200px` を使用して段組みレイアウトしたコンテナーを用意しています。

デフォルトでは、小見出しと段落は、見出しの位置が統一されていないため、かなり乱雑にレイアウトされていました。しかし、 `break-before: column` を `<h2>` 要素に使うことで、それぞれのこの要素の前に強制的に改行するようにしたので、各段の先頭に `<h2>` がきちんと配置されます。

#### HTML

```html
<article>
  <h1>大見出し</h1>

  <h2>小見出し</h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
    fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec
    lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus.
    Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque
    dapibus, eu lacinia lectus dictum.
  </p>

  <h2>小見出し</h2>

  <p>
    Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras
    suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur
    a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non
    vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie
    nec nisi.
  </p>

  <h2>小見出し</h2>

  <p>
    Vivamus eleifend metus vitae neque placerat, eget interdum elit mattis.
    Donec eu vulputate nibh. Ut turpis leo, malesuada quis nisl nec, volutpat
    egestas tellus.
  </p>

  <h2>小見出し</h2>

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
  font-family: "Helvetica", "Arial", sans-serif;
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

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
