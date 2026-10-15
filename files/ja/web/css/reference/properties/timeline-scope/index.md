---
title: "`timeline-scope` プロパティ (CSS)"
short-title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: 2a3061b6905ba8a8fe2654e1a6a978bc614bfd66
---

**`timeline-scope`** は [CSS](/ja/docs/Web/CSS) のプロパティで、名前付きアニメーションタイムラインのスコープを変更します。

## 構文

```css
/* キーワード値 */
timeline-scope: all;
timeline-scope: none;

/* カスタム名の値 */
timeline-scope: --custom_name_for_timeline;
timeline-scope: --timeline_name_one, --timeline_name_two;

/* グローバル値 */
timeline-scope: inherit;
timeline-scope: initial;
timeline-scope: revert;
timeline-scope: revert-layer;
timeline-scope: unset;
```

### 値

このプロパティは、キーワード、またはカンマ区切りの独自のタイムライン名のリストとして指定します。

- `none`
  - : タイムラインの範囲に変更を加えません。これがデフォルトの設定です。
- `all`
  - : その要素またはそのサブツリーに設定されたタイムライン名は、同じサブツリー内の要素とのみ一致するようにスコープを設定します。
- `<dashed-ident>`
  - : {{cssxref("scroll-timeline-name")}} または {{cssxref("view-timeline-name")}} を使用して宣言された、カンマ区切りで区切られた 1 つ以上のタイムライン名を指定します。スコープを設定し、要素またはそのサブツリーに対して指定された `scroll-timeline-name` または `view-timeline-name` の値が設定された場合、それらは同じサブツリー内の要素とのみ一致するようにします。

## 解説

`timeline-scope`プロパティは、名前付きアニメーションタイムラインのスコープを変更します。デフォルトでは、[名前付きタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#アニメーションタイムライン)（つまり {{cssxref("scroll-timeline-name")}} または {{cssxref("view-timeline-name")}} を使って宣言されたもの）は、直接の子孫要素の制御タイムラインとしてのみ設定することができます（つまり、タイムライン名を値として {{cssxref("animation-timeline")}} を設定することで）。これはタイムラインの既定の「スコープ」です。

`timeline-scope` の値は、子孫要素に定義されたタイムラインの名前です。これにより、タイムラインの範囲が対象要素とその子孫要素を含むように変更されます。言い換えれば、`timeline-scope` プロパティが定義された要素とそのすべての子孫要素は、そのタイムラインを使用して制御できます。

`timeline-scope` の値として指定された名前をつけてタイムラインが存在しない場合（または複数のタイムラインが存在する場合は）、指定された名前の非アクティブなタイムラインが作成されます。`timeline-scope` プロパティは名前付きタイムラインでのみ動作するため、 {{cssxref("animation-timeline/view", "view()")}} または {{cssxref("animation-timeline/scroll", "scroll()")}} アニメーションタイムライン関数で作成される無名タイムラインとの併用はできません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

この例では、`timeline-scope` プロパティでタイムラインのスコープを拡大して、別の要素のスクロールに対する応答として要素をアニメーションさせています。

### HTML

HTML はアニメーション用の要素とスクロール用の要素を含みます。

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

スクロール要素に対して、`--my-scroller` という名前付きのスクロールタイムラインが、{{cssxref("scroll-timeline-name")}} プロパティを使用して定義するものである。このスクロールタイムライン名は他の 2 箇所で使用されます。アニメーション対象要素には {{cssxref("animation-timeline")}} として適用され、スクロール要素とアニメーションする要素の両方の祖先要素には`timeline-scope`として適用され、スコープを拡大します。

まず、 `<body>` の高さを `100vh` に設定し、その 2 つの子要素をフレックスボックスを使って 2 等分の列としてレイアウトします。タイムラインのスコープを `<div class="scroller">` 要素から `<body>` 全体に拡大するため、`timeline-scope: --my-scroller` を設定します。これにより、`--my-scroller` タイムラインを `<body>` またはその内部の要素に設定されたアニメーションの制御用タイムラインとして指定することが可能になります。

```css
body {
  margin: 0;
  height: 100vh;
  display: flex;

  timeline-scope: --my-scroller;
}

.content,
.scroller {
  flex: 1;
}
```

`--my-scroller` を、アニメーションする要素のスクロール進行タイムラインを指定するスクロール要素の {{cssxref("scroll-timeline-name")}} として設定します。スクロールをすることができるようにするため {{cssxref("overflow")}} を追加し、境界がわかるように背景色を追加します。スクロール要素のコンテンツに大きな {{cssxref("height")}} を設定します。これにより要素が実際にスクロールします。

```css
.scroller {
  overflow: scroll;
  scroll-timeline-name: --my-scroller;
  background: deeppink;
}

.long-element {
  height: 2000px;
}
```

次に、アニメーションする要素に基本的なスタイルを設定し、{{cssxref("animation")}} 一括指定プロパティを使用してアニメーションを適用します。{{cssxref("animation-timeline")}} を名前付きスクロールタイムライン `--my-scroller` に設定します。繰り返しますが、要素をその親要素のスクロール進行に基づいてアニメーションできるのは、共通の祖先要素に `timeline-scope` を設定しているためです。アニメーションする要素は、スクロール対象要素の子孫では**ありません**。

```css
.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
}

.animation {
  animation: rotate-appear 1ms linear;
  animation-timeline: --my-scroller;
}

@keyframes rotate-appear {
  from {
    rotate: 0deg;
    translate: 0;
  }

  to {
    rotate: 720deg;
    translate: 100%;
  }
}
```

```css hidden
@layer supports {
  @supports not (timeline-scope: none) {
    body::before {
      content: "このブラウザーは 'timeline-scope' プロパティに対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem;
    }
  }
}
```

### 結果

ピンクの部分の縦棒をスクロールさせると、正方形がアニメーションします。

{{EmbedLiveSample("Examples", "100%", "320px")}}

ここで注意すべき重要な点は、アニメーションする要素がスクロール要素の子孫ではないことです。これを機能させるには、`--my-scroller` タイムラインのスコープを拡大するために、`timeline-scope: --my-scroller` を {{htmlelement("body")}} に設定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-name")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-name")}}
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
