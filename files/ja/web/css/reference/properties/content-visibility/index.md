---
title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
original_slug: Web/CSS/content-visibility
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**`content-visibility`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素がそのコンテンツをレンダリングするかどうかを制御するとともに、強力な抑制のセットを強制することで、必要になるまでユーザーエージェントが大量のレイアウトとレンダリングの作業を省略できるようにします。基本的に、ユーザーエージェントは、レイアウトやペイントなどの要素のレンダリング作業を必要になるまでスキップできるため、最初のページの読み込みがはるかに高速になります。

> [!NOTE]
> {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} イベントは、 `content-visibility: auto` が設定されている要素で、そのレンダリング作業が始まるか、またはスキップされなくなったときに発行されます。これは、アプリのコードがレンダリング処理（例えば {{htmlelement("canvas")}} に描画する）を不要なときに開始または停止する便利な方法を提供し、処理能力を節約します。

{{InteractiveExample("CSS デモ: content-visibility")}}

```css interactive-example-choice
content-visibility: visible;
```

```css interactive-example-choice
content-visibility: hidden;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="container" id="example-element">
    <div class="child">
      <span>これは内側の div です</span>
    </div>
  </div>
</section>
```

```css interactive-example
.container {
  width: 140px;
  height: 140px;
  border: 3px solid rgb(64, 28, 163);
  background-color: rgb(135, 136, 184);
  display: flex;
  align-items: center;
  justify-content: center;
}

.child {
  border: 3px solid rgb(64, 28, 163);
  background-color: wheat;
  color: black;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## 構文

```css
/* キーワード値 */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* グローバル値 */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: revert-layer;
content-visibility: unset;
```

### 値

- `visible`
  - : 効果なし。要素のコンテンツは通常通りにレイアウトおよび描画されます。
- `hidden`
  - : 要素は[そのコンテンツを読み飛ばします](/ja/docs/Web/CSS/Guides/Containment/Using#コンテンツのスキップ)。読み飛ばされたコンテンツは、ページ内検索やタブ順序ナビゲーションなどのユーザーエージェント機能でアクセス可能になることはなく、また選択可能やフォーカス可能にもなりません。これは、コンテンツに `display: none` を設定することに似ています。
- `auto`
  - : この要素の、レイアウト抑制、スタイル抑制、描画抑制をオンにします。要素が[ユーザーに関連](/ja/docs/Web/CSS/Guides/Containment/Using#ユーザーとの関連)していない場合、その内容の読み飛ばしも行われます。 hidden の場合とは異なり、読み飛ばされたコンテンツは、ページ内検索やタブ順序ナビゲーションなどのユーザーエージェント機能で通常通り利用可能となり、通常通りフォーカスや選択が可能になります。

## 解説

### content-visibility のアニメーションとトランジション

[対応しているブラウザー](#browser_compatibility)は `content-visibility` を[離散アニメーション型](/ja/docs/Web/CSS/Guides/Animations/Animatable_properties#離散)のバリエーションでアニメーション/トランジションさせます。

離散アニメーションは一般的に、アニメーションの 50% でプロパティが 2 つの値の間を反転することを意味しています。しかし、 `content-visibility` の場合、ブラウザーはアニメーションの間中、 2 つの値を反転させてアニメーションコンテンツを表示させます。例えば、このようになります。

- `content-visibility` を `hidden` から `visible` にアニメーションさせる場合、アニメーション時間の `0%` で `visible` に値が切り替わるので、その間ずっと表示されます。
- `content-visibility` を `visible` から `hidden` にアニメーションさせる場合、アニメーション時間の `100%` で `hidden` に値が反転するので、その間ずっと表示されます。

この動作は、望みどおりに出現・消滅アニメーションを生成する場合、例えば、 `content-visibility: hidden` で DOM から何かコンテンツを除去したいが、すぐに消えてしまうのではなく、（フェードアウトのように）スムーズに遷移させたい場合に有益です。

`content-visibility` を [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)でアニメーションさせる場合、 `content-visibility` に [`transition-behavior: allow-discrete`](/ja/docs/Web/CSS/Reference/Properties/transition-behavior) を設定する必要があります。これにより、 `content-visibility` のトランジションが有効になります。

> [!NOTE]
> 要素の `content-visibility` 値をトランジションさせるとき、 [`display`](/ja/docs/Web/CSS/Reference/Properties/display#display_のアニメーション) をトランジションさせるときのように、 [`@starting-style`](/ja/docs/Web/CSS/Reference/At-rules/@starting-style) ブロックを使用して、トランジションするプロパティの開始値の集合を提供する必要はありません。これは `content-visibility` が `display` のように要素を DOM から隠すのではなく、要素のコンテンツのレンダリングをスキップするだけだからです。

## 公式定義

{{cssinfo}}

## 形式文法

{{CSSSyntax}}

## アクセシビリティ

`content-visibility: auto` プロパティ内にあるオフスクリーンコンテンツは、ドキュメントオブジェクトモデルとアクセシビリティツリー内に残ります。これにより、アクセシビリティに悪影響を与えることなく、 `content-visibility: auto` でページのパフォーマンスを改善することができます。

オフスクリーンコンテンツのスタイルはレンダリングされないので、 `display: none` や `visibility: hidden` で意図的に非表示にした要素はアクセシビリティツリーに現れます。
要素をアクセシビリティツリーに現れたくない場合は、 `aria-hidden="true"` を使用してください。

## 例

### auto を使用して長いページのレンダリングコストを削減

次の例では、`content-visibility: auto` を使用して、オフスクリーンセクションの描画をスキップしています。
セクション`がビューポートの外にある場合、セクションがビューポートに近づくまでコンテンツの描画はスキップされます。この章はページの読み込みと対話することの両方に役立ちます。

#### HTML

```html
<section>
  <!-- 各節の内容… -->
</section>
<section>
  <!-- 各節の内容… -->
</section>
<section>
  <!-- 各節の内容… -->
</section>
<!-- … -->
```

#### CSS

`contain-intrinsic-size` プロパティは、それぞれの `section` 要素の高さと幅に 500px の既定値を追加します。節がレンダリングされた後、ビューポートの外にスクロールされても、レンダリングされた内在サイズを保持します。

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### hidden を使用して手動で可視性を管理

次の例では、JavaScript でコンテンツの可視性を管理する方法を示します。
`display: none;` の代わりに `content-visibility: hidden;` を使用することで、非表示時のコンテンツの描画状態が保持され、描画が高速になります。

#### HTML

```html
<div class="hidden">
  <button class="toggle">表示</button>
  <p>
    このコンテンツは初期状態では非表示になっており、ボタンをクリックすることで表示させることができます。
  </p>
</div>
<div class="visible">
  <button class="toggle">非表示</button>
  <p>
    このコンテンツは初期状態では表示されており、ボタンをクリックすることで非表示にすることができます。
  </p>
</div>
```

#### CSS

`content-visibility` プロパティは、 `visible` クラスと `hidden` クラスを持つ要素の直接の子である段落に設定します。この例では、親 div 要素の CSS クラスに応じて、段落内のコンテンツを表示させたり非表示にしたりすることができます。

コンテンツのサイズを表すために `contain-intrinsic-size` プロパティを記載しています。これは、コンテンツを非表示にしたときのレイアウトのずれを縮小するのに役立ちます。

```css
p {
  contain-intrinsic-size: 0 1.1em;
  border: dotted 2px;
}

.hidden > p {
  content-visibility: hidden;
}

.visible > p {
  content-visibility: visible;
}
```

#### JavaScript

```js
const handleClick = (event) => {
  const button = event.target;
  const div = button.parentElement;
  button.textContent = div.classList.contains("visible") ? "表示" : "非表示";
  div.classList.toggle("hidden");
  div.classList.toggle("visible");
};

document.querySelectorAll("button.toggle").forEach((button) => {
  button.addEventListener("click", handleClick);
});
```

#### 結果

{{ EmbedLiveSample('Using hidden to manually manage visibility') }}

### content-visibility のアニメーション

この例では、 {{htmlelement("div")}} 要素があり、そのコンテンツはクリックや任意のキーを押すことで表示・非表示を切り替えることができます。

#### HTML

```html
<p>
  Click anywhere on the screen or press any key to toggle the
  <code>&lt;div&gt;</code> content between hidden and showing.
</p>

<div>
  This is a <code>&lt;div&gt;</code> element that animates between
  <code>content-visibility: hidden;</code>and
  <code>content-visibility: visible;</code>. We've also animated the text color
  to create a smooth animation effect.
</div>
```

#### CSS

CSS では、最初に `<div>` に `content-visibility: hidden;` を設定し、そのコンテンツを隠します。次に `@keyframes` アニメーションを設定し、 `<div>` を表示させたり非表示にしたりするためのクラスに取り付けて、 `content-visibility` と [`color`](/ja/docs/Web/CSS/Reference/Properties/color) をアニメーション化することで、コンテンツが表示/非表示になる滑らかなアニメーション効果が得られます。

```css
div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;

  content-visibility: hidden;
}

/* アニメーションクラス */

.show {
  animation: show 0.7s ease-in forwards;
}

.hide {
  animation: hide 0.7s ease-out forwards;
}

/* アニメーションのキーフレーム */

@keyframes show {
  0% {
    content-visibility: hidden;
    color: rgb(0 0 0 / 0%);
  }

  100% {
    content-visibility: visible;
    color: rgb(0 0 0 / 100%);
  }
}

@keyframes hide {
  0% {
    content-visibility: visible;
    color: rgb(0 0 0 / 100%);
  }

  100% {
    content-visibility: hidden;
    color: rgb(0 0 0 / 0%);
  }
}
```

#### JavaScript

最後に、JavaScript を使用して `.show` クラスと `.hide` クラスを `<div>` に適用し、表示状態と非表示状態の切り替えに応じてアニメーションを適用します。

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElem.classList.contains("show")) {
    divElem.classList.remove("show");
    divElem.classList.add("hide");
  } else {
    divElem.classList.remove("hide");
    divElem.classList.add("show");
  }
}
```

#### 結果

表示結果は次のようになります。

{{ EmbedLiveSample("Animating content-visibility", "100%", "300") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS コンテナー](/ja/docs/Web/CSS/Guides/Containment)
- [`contain-intrinsic-size`](/ja/docs/Web/CSS/Reference/Properties/contain-intrinsic-size)
- {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
