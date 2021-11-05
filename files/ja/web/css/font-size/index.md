---
title: font-size
slug: Web/CSS/font-size
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
translation_of: Web/CSS/font-size
---
{{CSSRef}}

**`font-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォントの大きさを定義します。フォントの大きさを変更すると、フォントの大きさに相対的な {{cssxref("&lt;length&gt;")}} の単位例えば `em`, `ex`, なども更新されます。

{{EmbedInteractiveExample("pages/css/font-size.html")}}

## 構文

```css
/* <absolute-size> 値 */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: xxx-large;

/* <relative-size> 値 */
font-size: smaller;
font-size: larger;

/* <length> 値 */
font-size: 12px;
font-size: 0.8em;

/* <percentage>  値 */
font-size: 80%;

/* グローバル値 */
font-size: inherit;
font-size: initial;
font-size: revert;
font-size: unset;
```

`font-size` プロパティは、以下の何れかの方法で指定します。

- 絶対的サイズまたは相対的サイズのキーワードのうちの一つ
- `<length>` または親要素のフォントサイズからの相対的な `<percentage>`

### 値

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`
  - : 絶対的なサイズのキーワードで、ユーザーの既定のフォントサイズ (つまり `medium`) を基準とします。
- `larger`, `smaller`
  - : 相対的なサイズのキーワードです。フォントは親要素のフォントサイズから相対的に、上記の絶対的サイズのキーワードで使われている倍率におよそ沿う形で拡大または縮小されます。
- {{cssxref("&lt;length&gt;")}}

  - : 正の {{cssxref("&lt;length&gt;")}} の値。 (`em` や `ex` などの) フォント相対単位のほとんどは、親要素のフォントサイズに対する相対値です。

    (`rem` などの) ルートを基準としたフォント相対単位では、フォントサイズは {{HTMLElement("html")}} (ルート) 要素で使われているフォントのサイズからの相対値です。

- {{cssxref("&lt;percentage&gt;")}}
  - : 正の {{cssxref("&lt;percentage&gt;")}} 値で、親要素のフォントサイズからの相対値です。

> **Note:** アクセシビリティを最大化するために、一般的に最適なのは、ユーザーの既定のフォントサイズからの相対値を使用することです。

## 解説

フォントサイズの定義にはいくつかの方法があり、キーワードと数値 (ピクセルや em の場合) が使われます。個々のウェブページで必要とされるものにあわせて、最適な方法を選んでください。

### キーワード

キーワードはウェブのフォントサイズを決める良い方法です。 {{HTMLElement("body")}} 要素のフォントサイズをキーワードで定義すると、ページのどこであってもフォントサイズを相対的に調整することができ、したがってページ全体のフォントサイズの拡大縮小が容易にできます。

### ピクセル

ピクセル値 (`px`) でフォントサイズを設定することは、ピクセル精度が必要な場合に適しています。ピクセル値は静的です。これは OS にもブラウザーにも依存しない方法であり、ブラウザーに文字を指定した高さのピクセルの数値で描画することを厳密に指示します。ブラウザーによって、同じ効果を得るのに異なるアルゴリズムが使われている可能性があるため、結果は多少異なるかもしれません。

フォントサイズの指定を組み合わせることもできます。例えば親要素のフォントサイズを `16px` 、子要素を `larger` とした場合、子要素のフォントサイズは親要素の `16px` より大きくレンダリングされます。

> **Note:** フォントサイズを `px` で定義すると、ブラウザーによってはユーザーがフォントサイズを変更することができないため、[_アクセシブル_](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3)ではありません。例えば、弱視の人は、ウェブデザイナーが選んだサイズより大きなフォントにしたがるかもしれません。こうした配慮のあるデザインをしたい場合は、フォントサイズにピクセルを使わないようにしてください。

<h3 id="Ems">em</h3>

`em` の値を使用すると、動的または計算されたフォントサイズが作成されます (歴史的には、`em` の単位は、ある書体の大文字の "M" の幅に由来していました)。この数値は、それが使われている要素の `font-size` プロパティの乗数として機能します。この例を見てください。

```css
p {
  font-size: 2em;
}
```

この場合、`<p>` 要素のフォントサイズは、`<p>` 要素で継承されている `font-size` の計算値の 2 倍になります。 すなわち、`1em` の `font-size` は、それが使われている要素の `font-size` の計算値に等しくなります。

`font-size` が `<p>` の何れかの祖先に設定されていない場合、`1em` はブラウザーの既定の `font-size` と等しくなり、大抵は `16px' です。したがって、既定では `1em` が `16px` と同等であり、`2em` は `32px` と同等です。もし `font-size` が 20px と `<body>` 要素に設定されていれば、`1em` は `<p>` 要素において `20px` となり、`2em` は で `40px` と同等になります。

必要なピクセル値に相当する em は、次の式で計算することができます。

```plain
em = 要素に設定したい pixel 値 / 親要素のピクセル単位でのフォントサイズ
```

例えば、`<body>` のフォントサイズが `16px` に設定されていたとします。使いたいフォントサイズが 12px であれば、 `0.75em` を指定してください (12/16 = 0.75 だからです)。同様に、使いたいフォントサイズが `10px` なら、`0.625em` を指定してください (10/16 = 0.625)。`22px` ならば、`1.375em` です (22/16)。

`em` は、読者が使用するフォントに合わせて長さを自動的に調整するので、CSS では非常に便利な単位です。

em 値が複合的であるということは、覚えておくべき重要な事実です。以下の HTML と CSS をご覧ください。

```css
html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
span {
  font-size: 1.6em;
}
```

```html
<div>
<span>Outer <span>inner</span> outer</span>
</div>
```

結果は以下のようになります。

{{EmbedLiveSample("Ems", 400, 40)}}

ブラウザーの既定の `font-size` が 16px と仮定すると、単語 “outer” は 16px で描画され、単語 “inner” は 25.6px で描画されます。これは、内側の {{HTMLElement("span")}} 要素の `font-size` は 1.6em ですが、これは親要素の `font-size` からの相対値で、さらにその親要素の `font-size` からの相対値になるからです。これはよく**複合** (compounding) と呼ばれます。

<h3 id="Rems" name="Rems">rem</h3>

`rem` 値は、複合の問題を避けるために考案されました。 `rem` 値は親要素ではなく、ルート `html` 要素に対して相対的です。言い換えると、親要素のサイズの影響を受けることなく相対的な方法でフォントサイズを指定できますので、複合が発生しません。

以下の CSS は、先ほどの例とほぼ同じです。唯一の違いは、単位を `rem` に変更したことです。

```css
html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
span {
  font-size: 1.6rem;
}
```

この CSS を同じ HTML に適用すると、以下のようになります。

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 40)}}

この例では、単語 “outer inner outer” はすべて 16px で表示されます (ブラウザーの `font-size` は既定値が 16px のままであるとします)。

### ex

`em` の単位と同様に、`ex` の単位を使用して設定された要素の `font-size` は、計算または動的に行われます。全く同じように動作しますが、`ex` の単位を使用して `font-size` プロパティを設定する場合、`font-size` はページで使用されている[最初に利用可能なフォント](https://www.w3.org/TR/css3-fonts/#first-available-font)の x-height に等しいことを除いては、同じように動作します。数値は、要素の継承された `font-size` と `font-size` の複合体を相対的に乗算します。

`ex` などの[フォントに関する長さの単位](https://drafts.csswg.org/css-values-4/#font-relative-length)の詳細な説明はW3C Editor's Draftを参照してください。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

<h3 id="Setting_font_sizes">フォントサイズの設定</h3>

#### CSS

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

#### HTML

```html
<h1 class="small">Small H1</h1>
<h1 class="larger">Larger H1</h1>
<h1 class="point">24 point H1</h1>
<h1 class="percent">200% H1</h1>
```

#### 結果

{{EmbedLiveSample('Setting_font_sizes','600','200')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-size-adjust")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
