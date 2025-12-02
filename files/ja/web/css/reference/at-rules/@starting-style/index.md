---
title: "@starting-style"
slug: Web/CSS/Reference/At-rules/@starting-style
original_slug: Web/CSS/@starting-style
l10n:
  sourceCommit: 0326d9301650304ef67a56e88b542b160093042e
---

**`@starting-style`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、トランジションさせる要素に設定されるプロパティ群の開始値を定義するために使用します。これらのプロパティは、最初に要素のスタイルが更新されたとき、つまり要素が前回読み込まれたページに最初に表示されたときに設定されるものです。

## 構文

`@starting-style` アットルールは次の 2 通りの方法で使用することができます。

1. 独立したブロックとする方法。この場合、スタイル宣言を定義し、適用する要素を選択する 1 つ以上のルールセットを記述します。

   ```css
   @starting-style {
     ルールセット
   }
   ```

2. 既存のルールセット内に入れ子にする方法。この場合、そのルールセットによってすでに選択されている要素のプロパティ値を定義する 1 つ以上の宣言が入ります。

   ```css
   selector { /* 既存のルールセット */
     /* ... */

     @starting-style {
       宣言
     }
   }
   ```

## 解説

予期しない動作を避けるため、既定では [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions) は要素の初期スタイル更新時や、 {{CSSxRef("display")}} 型が `none` から別の値に変わった時には発生しません。開始スタイル設定のトランジションを有効にするには、 `@starting-style` ルールが必要です。これは前回状態を持たない要素に開始スタイルを提供し、トランジションするプロパティ値を定義します。

`@starting-style` は、{{glossary("top layer","最上位レイヤー")}}に表示される要素（[ポップオーバー](/ja/docs/Web/API/Popover_API)やモーダルダイアログ ({{htmlelement("dialog")}}) など）、 `display: none` に変更される要素、 DOM に追加されたり除去されたりする要素の出現・消滅トランジションを作成する場合に特に有益です。

> [!NOTE]
> `@starting-style` は CSS トランジションにのみ関係します。 [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)を使用してそのような効果を実装する場合、 `@starting-style` は必要ありません。例については [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)を参照してください。

`@starting-style` を使用するには、単独のルールとして使用する方法と、ルールセットの中に入れ子にして使用する方法とがあります。

[ポップオーバー](/ja/docs/Web/API/Popover_API)を表示させたとき（つまり最上位レイヤーに追加したとき）にアニメーションさせたい場合を考えてみましょう。開くためのポップオーバーのスタイルを指定する「元ルール」は次のようになります（下記の[ポップオーバーの例](#ポップオーバーのアニメーション)を参照してください）。

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

最初の方法でアニメーションするポップオーバーのプロパティの開始値を指定するには、 CSS の中に独立した `@starting-style` ブロックを記述します。

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> `@starting-style` アットルールと「元ルール」の{{cssxref("specificity", "詳細度")}}は同じになります。確実にスタイル設定が反映されるようにするには、 `@starting-style` アットルールを「元ルール」の後に記載してください。もし `@starting-style` アットルールを「元ルール」の前に指定すると、元のスタイル設定が開始時のスタイル設定を上書きします。

入れ子方式を使用してポップオーバーの開始スタイルを指定するには、 `@starting-style` ブロックを「元ルール」の中に入れます。

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);

  @starting-style {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

### 開始スタイルは正確にはいつ使われるのか

要素が `@starting-style` のスタイルからトランジションするのは、要素が最初に DOM で表示されるとき、または {{cssxref("display", "display: none")}} から可視値にトランジションするときであることを理解しておくことが重要です。初期状態が表示状態である場合にトランジションで戻る場合は、すでに DOM で表示されているので `@starting-style` スタイルは使用されません。代わりに、その要素の既定の状態に存在するスタイル設定に戻ります。

効果として、このような状況で管理すべきスタイル状態には、開始スタイルの状態、トランジション後の状態、既定の状態の 3 つがあります。このような場合、 "to" と "from" のトランジションは異なるものになる可能性があります。下記[開始スタイルを使用する場合のデモ](#開始スタイルを使用する場合のデモ)の例で、その証拠を見ることができます。

## 形式文法

{{csssyntax}}

## 例

### 基本的な @starting-style の使い方

要素の {{cssxref("background-color")}} を、初期レンダリング時に透明から緑色に遷移させます。

```css
#target {
  transition: background-color 1.5s;
  background-color: green;
}

@starting-style {
  #target {
    background-color: transparent;
  }
}
```

要素が {{cssxref("display")}} の値を `none` との間で変更したときに、要素の {{cssxref("opacity")}} をトランジションさせます。

```css
#target {
  transition-property: opacity, display;
  transition-duration: 0.5s;
  display: block;
  opacity: 1;
  @starting-style {
    opacity: 0;
  }
}

#target.hidden {
  display: none;
  opacity: 0;
}
```

### 開始スタイルを使用する場合のデモ

この例では、ボタンを押して {{htmlelement("div")}} 要素を作成し、`class` に `showing` を与えて DOM に追加しています。

`showing` には `@starting-style` として `background-color: red` を指定しており、トランジション先としては `background-color: blue` を指定しています。既定の `div` ルールセットには `background-color: yellow` をしており、 `transition` も設定しています。

まず `<div>` が DOM に追加されると、背景が赤から青に変化するのがわかります。タイムアウト後、 JavaScript で `<div>` から `showing` クラスを除去します。この点で、背景は赤ではなく青から黄色に戻ります。これは、要素が最初に DOM にレンダリングされるときにのみ、開始スタイルが使用されることを表しています。一度現れた要素は、設定した既定のスタイルに戻ります。

さらにタイムアウトしたら、 DOM から `<div>` を完全に除去し、例を初期状態にリセットして、再び実行できるようにしています。

#### HTML

```html
<button><code>&lt;div&gt;</code> を表示</button>
```

#### CSS

```css hidden
div {
  width: 200px;
  height: 100px;
  border: 1px solid black;
  margin-top: 10px;
}

div::after {
  content: "class: " attr(class);
  position: relative;
  top: 3px;
  left: 3px;
}
```

```css
div {
  background-color: yellow;
  transition: background-color 3s;
}

div.showing {
  background-color: skyblue;
}

@starting-style {
  div.showing {
    background-color: red;
  }
}
```

#### JavaScript

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  btn.disabled = true;
  const divElem = document.createElement("div");
  divElem.classList.add("showing");
  document.body.append(divElem);

  setTimeout(() => {
    divElem.classList.remove("showing");

    setTimeout(() => {
      divElem.remove();
      btn.disabled = false;
    }, 3000);
  }, 3000);
});
```

#### 結果

このコードは次のように表示されます。

{{ EmbedLiveSample("Demonstration of when starting styles are used", "100%", "150") }}

### ポップオーバーのアニメーション

この例では、[ポップオーバー](/ja/docs/Web/API/Popover_API)を [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)によってアニメーションしています。基本的な出現・消滅のアニメーションは、 {{CSSxRef("transition")}} プロパティを使用して提供しています。

#### HTML

この HTML では、 {{htmlelement("div")}} 要素に [popover](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を用いてポップオーバーとして宣言し、 {{htmlelement("button")}} 要素に [popovertarget](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性を用いてポップオーバーの表示コントロールとして指定しています。

```html-nolint
<button popovertarget="mypopover">ポップオーバーを表示</button>
<div popover="auto" id="mypopover">これがポップオーバーです。アニメーションします。</div>
```

#### CSS

この例では {{cssxref("opacity")}} と {{cssxref("transform")}} （具体的には、水平方向に変倍する座標変換）という 2 つのプロパティをアニメーションさせて、ポップオーバーをフェードイン/フェードアウトさせたり、水平方向に拡大/縮小させたりします。

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* 消滅アニメーションの最終状態 */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* transition: all 0.7s allow-discrete;
  と等価 */
}

/* [popover]:popover-open ルールの後に入れる */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* ポップオーバーの背後のトランジション */
[popover]::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* transition: all 0.7s allow-discrete;
  と等価 */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* 入れ子 (&) は擬似要素には対応していないので、
独立した開始スタイルのブロックを指定します。 */
@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

これを実現するために、これらのプロパティの開始状態にはポップオーバー要素の既定の非表示状態を（`[popover]` で選択して）設定し、終了状態にはポップオーバー要素が開いた状態を（{{cssxref(":popover-open")}} 擬似クラスで選択して）設定しています。

そして、 {{cssxref("transition")}} プロパティを設定し、 2 つの状態の間でアニメーションを行います。アニメーションの始める状態には `@starting-style` アットルールを記載して、アニメーションの初期状態を設定しています。

アニメーションする要素は、表示されると{{glossary("top layer","最上位レイヤー")}}へ移動し、（{{cssxref("display", "display: none")}} で）非表示になると最上位レイヤーから除去されるため、両方向で確実にアニメーションが動作するように、さらにいくつかの段階が必要になります。

- `display` をトランジション後の要素のリストに追加することで、アニメーションする要素が出現・消滅の両方のアニメーション中に確実に表示される（`display: block` などの `display` の可視値に設定する）ようにします。これがなければ、消滅アニメーションは表示されません。その結果、ポップオーバーはただ消えてしまいます。アニメーションを有効にするために、 {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} 値も一括指定で設定されていることに注意してください。
- {{cssxref("overlay")}} をトランジション後の要素のリストに追加して、要素を最上位レイヤーから除去するのをアニメーションが終わるまで確実に延期するようにします。これは、このような単純なアニメーションでは大差ありませんが、より複雑なケースでは、これを行わないと、要素がオーバーレイからすばやく除去され、アニメーションが滑らかでなくなったり、効果的でなくなったりすることがあります。この場合も、アニメーションを行うには `transition-behavior: allow-discrete` が必要です。

> [!NOTE]
> また、開いたときにポップオーバーの背後に現れる {{cssxref("::backdrop")}} のトランジションも記載し、暗転するアニメーションも提供しています。 `[popover]:popover-open::backdrop` はポップオーバーが開くための背景を選択するために使用します。

#### 結果

このコードは次のように表示されます。

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> ポップオーバーは表示されるたびに `display: none` から `display: block` に変化するので、表示トランジションが発生するたびに `@starting-style` スタイルから `[popover]:popover-open` スタイルに遷移します。ポップオーバーが閉じられたとき、その `[popover]:popover-open` 状態から既定の `[popover]` 状態に遷移します。

> [!NOTE]
> {{htmlelement("dialog")}} 要素とその背景の表示・非表示を遷移させる例は、 `<dialog>` リファレンスページの[ダイアログ要素の遷移](/ja/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements)で探すことができます。

### DOM に追加・除去される要素のトランジション

この例には、押されると新しい要素を {{htmlelement("section")}} コンテナーに追加するボタンがあります。各要素の中には、押されたときにその要素を除去するボタンがあります。この例は、要素を DOM に追加したり、除去したりするときに、トランジションを使用してアニメーションを行う使用する方法を示しています。

#### HTML

```html
<button>新しい列を作成</button>
<section></section>
```

#### JavaScript

JavaScript により、要素の追加や削除ができるようにします。

```js
const btn = document.querySelector("button");
const sectionElem = document.querySelector("section");

btn.addEventListener("click", createColumn);

function randomColor() {
  function randomNum() {
    return Math.floor(Math.random() * 255);
  }

  return `rgb(${randomNum()} ${randomNum()} ${randomNum()})`;
}

function createColumn() {
  const divElem = document.createElement("div");
  divElem.style.backgroundColor = randomColor();

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✖";
  closeBtn.setAttribute("aria-label", "close");
  divElem.append(closeBtn);
  sectionElem.append(divElem);

  closeBtn.addEventListener("click", () => {
    divElem.classList.add("fade-out");

    setTimeout(() => {
      divElem.remove();
    }, 1000);
  });
}
```

「新しい列を作成」ボタンをクリックすると、 `createColumn()` 関数が呼び出されます。これは、ランダムに生成された背景色を持つ {{htmlelement("div")}} 要素と、その `<div>` を閉じるための {{htmlelement("button")}} 要素を作成します。そして、`<button>` を `<div>` に、`<div>` を `<section>` コンテナーに追加します。

そして、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} によって閉じるボタンにイベントリスナーを追加します。閉じるボタンをクリックすると、 2 つのことが行われます。

- `<div>` に `fade-out` クラスを追加します。クラスを追加すると、そのクラスに設定した消滅アニメーションが起動します。
- 1000 ミリ秒遅れて `<div>` を取り除きます。アニメーションが終わるまで、 {{domxref("Window.setTimeout", "setTimeout()")}} は `<div>` の DOM からの除去を遅らせます（{{domxref("Element.remove()")}} 経由）。

#### CSS

{{cssxref("transition")}} を記述して、それぞれの列が追加されたり除去されたりする際に、 {{cssxref("opacity")}} と {{cssxref("scale")}} をアニメーションさせます。

```css hidden
html * {
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 10px;
}

body > button {
  margin: 10px 10px 0 10px;
}

section {
  display: flex;
  flex: 1;
  gap: 10px;
  margin: 10px;
}
```

```css
div {
  flex: 1;
  border: 1px solid gray;
  position: relative;
  background: linear-gradient(
    to right,
    rgb(255 255 255 / 0%),
    rgb(255 255 255 / 50%)
  );
  opacity: 1;
  scale: 1 1;

  transition:
    opacity 0.7s,
    scale 0.7s,
    display 0.7s allow-discrete,
    all 0.7s allow-discrete;
  /* transition: all 0.7s allow-discrete;
  と等価*/
}

/* `div` ルールの後に記述 */
@starting-style {
  div {
    opacity: 0;
    scale: 1 0;
  }
}

.fade-out {
  opacity: 0;
  display: none;
  scale: 1 0;
}

div > button {
  font-size: 1.6rem;
  background: none;
  border: 0;
  text-shadow: 2px 1px 1px white;
  border-radius: 15px;
  position: absolute;
  top: 1px;
  right: 1px;
  cursor: pointer;
}
```

{{cssxref("opacity")}} および {{cssxref("scale")}} をそれぞれの `<div>` が DOM に追加された際にアニメーションさせ、 DOM から削除された際に逆のアニメーションを行うために、次のことを行います。

- `div { ... }` ルールにトランジションさせたいプロパティの終了状態を指定します。
- `@starting-style` ブロック内のプロパティでトランジションの開始状態を指定します。
- `.fade-out` ルールの中で消滅アニメーションを指定します。これは、閉じるボタンが押されたときに JavaScript が `<div>` 要素に割り当てるクラスです。透明度と変倍の終了状態を設定するほかに、 `<div>` 要素に `display: none` を設定します。 UI から除去されたときにすぐに利用できなくなるようにします。
- {{cssxref("transition")}} のリストを `div { ... }` ルールの中で指定し、 `opacity`、`scale`、`display` をアニメーションさせます。 `display` については、アニメーションするように一括指定によって {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} の値も設定されることに注意してください。

#### 結果

最終的な結果はこのようになります。

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)モジュール
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- {{domxref("CSSStartingStyleRule")}}
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) (developer.chrome.com, 2023)
