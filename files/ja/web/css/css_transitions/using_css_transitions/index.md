---
title: CSS トランジションの使用
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
---

{{CSSref}}

**CSS トランジション**は、 CSS プロパティが変化する際のアニメーションの速度を操作する手段を提供します。プロパティの変更を直ちに有効にするのではなく、プロパティの変更を一定期間にわたって発生させることを可能にします。例えば、ある要素の前景色を白色から黒色に変更した場合、通常は即座に前景色が替わります。 CSS トランジションを有効にすると、加速カーブに従った時間間隔で変更が行われ、その変化のすべてをカスタマイズすることができます。

2 つの状態間のトランジションを含むアニメーションは、開始状態と最終状態の間の状態がブラウザーによって暗黙的に定義されるため、*暗黙的なトランジション*と呼ばれることがあります。

![CSS トランジションは、初期状態と最終状態の間にある中間状態を描画することで、ユーザーにスムーズな遷移を見せるものです。](transitionsprinciple.png)

CSS トランジションは、アニメーションを開始する場合 (*遅延*を設定することで)、トランジションをどの程度持続するか (*持続時間*を設定することによって)、およびトランジションをどのように実行するか (*タイミング関数*を定義することによって、例えば、直線的または最初は速く、最後に遅くなど) を、 (明示的にリストすることによって) アニメーションするためのプロパティを決定させます。

## トランジション可能な CSS プロパティとは

ウェブサイトの作成者はどのプロパティを、どのようにアニメーションさせるのかを定義できます。これにより複雑な遷移を起こすことが可能です。プロパティによってはアニメーションさせることに意味がない場合があるので、[アニメーション可能なプロパティ](/ja/docs/Web/CSS/CSS_animated_properties)は限られています。

> **メモ:** アニメーションさせることのできるプロパティは仕様改訂により変化しています。

> **メモ:** `auto` の値はしばしばとても複雑になります。仕様書では開始値および終了値が `auto` の場合はアニメーションしないよう推奨しています。 Gecko を利用したものなど、一部のユーザーエージェントはこの要件を実装しており、 WebKit を利用したものなどではより制約が少なくなります。 `auto` でアニメーションを利用すると、ブラウザーやそのバージョンによって予測できない結果になる可能性があるため、避けるべきです。

## トランジションの定義

CSS トランジションは一括指定の {{cssxref("transition")}} プロパティを使用して制御されます。トランジションを設定する上で最も良い方法で、パラメータを列挙する数がずれてしまって、とってもイライラしながら CSS のデバッグを多大な時間を使って行うことを防いでくれます。

それぞれのトランジションコンポーネントに対しては以下のサブプロパティを用いてコントロールできます。

- {{cssxref("transition-property")}}
  - : トランジションを適用する CSS プロパティの名前を指定します。ここに指定したプロパティだけが、トランジションによりアニメーションします。通常、それ以外のプロパティの変更は即座に反映されます。
- {{cssxref("transition-duration")}}
  - : トランジションの実行にかかる所要時間を指定します。単一の値を指定すると、すべてのプロパティのトランジションの所要時間として適用されます。または複数の値を指定すると、プロパティごとにトランジションの所要時間として異なる値を指定することができます。
- {{cssxref("transition-timing-function")}}
  - : プロパティの中間の値を計算する方法を定義する関数を指定します。*タイミング関数*はトランジションの中間の値がどのように計算されるかを定義します。多くの[タイミング関数](/ja/docs/Web/CSS/easing-function)は対応する関数のグラフを提供することで指定され、これは三次ベジェ関数を定義する 4 つの点で定義されます。 [Easing Functions Cheat Sheet](https://easings.net/) からイージングを選択することもできます。
- {{cssxref("transition-delay")}}
  - : プロパティが変化した時点から、トランジションが実際に始まるまでの待ち時間を定義します。

一括指定の CSS の構文は以下のように書きます。

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## 例

### 単純な例

この例では 4 秒間のフォントの大きさのトランジションを行い、ユーザーがマウスを要素上に移動してからアニメーション効果が始まるまで 2 秒間の遅延を行います。

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

<h3 id="Multiple_animated_properties_example">複数のアニメーションするプロパティの例</h3>

```html hidden
<body>
  <p>
    The box below combines transitions for: width, height, background-color,
    transform. Hover over the box to see these properties animated.
  </p>
  <div class="box">Sample</div>
</body>
```

#### CSS コンテンツ

```css
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  transition:
    width 2s,
    height 2s,
    background-color 2s,
    transform 2s;
}

.box:hover {
  background-color: #ffcccc;
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
}
```

{{EmbedLiveSample('Multiple_animated_properties_example', 600, 300)}}

### プロパティ値のリストの長さが異なる場合

何れかのプロパティで、値のリストが他よりも短い場合、以下のように、他と一致するまで繰り返されます。

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

This is treated as if it were:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

同様に、何れかのプロパティで値のリストが {{cssxref("transition-property")}} のリストよりも長い場合は切り詰められますので、以下の CSS のようになります。

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

This gets interpreted as:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### メニューのハイライトにトランジションを用いる

CSS の一般的な使い方として、メニューのアイテムにマウスポインターを乗せたときに、そのアイテムをハイライトさせることがあります。より魅力的な効果を出すためにトランジションを使うことは、簡単にできます。

まずは、 HTML でメニューを作成します。

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

そして、メニューのルック＆フィールを実装するために CSS を作成します。関連のある部分を以下に示します。

```css
nav {
  display: flex;
  gap: 0.5rem;
}

a {
  flex: 1;
  background-color: #333;
  color: #fff;
  border: 1px solid;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}

a:hover,
a:focus {
  background-color: #fff;
  color: #333;
}
```

この CSS は、メニューの外見を決めています。また、要素が {{cssxref(":hover")}} および {{cssxref(":focus")}} の状態であるときに、背景色と前景色を変化させています。

{{EmbedLiveSample("Using transitions when highlighting menus")}}

## JavaScript の例

> **メモ:** 次のような場合の直後にトランジションを使用する場合は注意してください。
>
> - `.appendChild()` を使用して DOM に要素を追加したとき
> - 要素の `display: none;` プロパティを外したとき
>
> この場合、初期の状態が発生せず、要素が常に最後の状態であるかのように扱われます。この制限を解決する簡単な方法は、トランジションを行いたい CSS プロパティを変更する前に、数ミリ秒の `window.setTimeout()` を適用することです。

### JavaScript の機能をスムーズにするためのトランジション

トランジションは、 JavaScript による機能に対して何も行うことなしに、よりスムーズにさせることができる素晴らしいツールです。以下の例をご覧ください。

```html
<p>Click anywhere to move the ball</p>
<div id="foo" class="ball"></div>
```

JavaScript を使用して、ある場所にボールを移動させる効果を作ることができます。

```js
var f = document.getElementById("foo");
document.addEventListener(
  "click",
  function (ev) {
    f.style.transform = "translateY(" + (ev.clientY - 25) + "px)";
    f.style.transform += "translateX(" + (ev.clientX - 25) + "px)";
  },
  false,
);
```

CSS により余分な努力をせずに、上記の効果をスムーズにさせることができます。単に要素へトランジションを追加すると、変化がスムーズに発生するようになります。

```css
.ball {
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
```

{{EmbedGHLiveSample("css-examples/transitions/js-transitions.html", '100%', 500)}}

### トランジションの開始と完了の検出

{{domxref("HTMLElement/transitionend_event", "transitionend")}} イベントを使用することでで、アニメーションの実行が終了したことを検出することができます。これは {{domxref("TransitionEvent")}} オブジェクトで、通常の {{domxref("Event")}} オブジェクトに 2 つのプロパティを追加したものです。

- `propertyName`
  - : 文字列で、トランジションが完了した CSS プロパティの名前を示します。
- `elapsedTime`
  - : 浮動小数点値で、イベントが発行されてからトランジションが実行された時間を示します。この値は {{cssxref("transition-delay")}} の値に影響されません。

通常は、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} メソッドを使用してこのイベントを監視することができます。

```js
el.addEventListener("transitionend", updateTransition, true);
```

トランジションの開始は {{domxref("HTMLElement/transitionrun_event", "transitionrun")}} (遅延の前に発行) および {{domxref("HTMLElement/transitionstart_event", "transitionstart")}} (遅延の後に発行) を使用して、同じ形で検出することができます。

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> **メモ:** `transitionend` イベントは、要素に {{cssxref("display")}}`: none` が適用されたりアニメーション中のプロパティの値が変更されたりして、トランジションが完了する前に中止された場合は発行されません。

## 仕様書

{{Specifications}}

## 関連情報

- {{domxref("TransitionEvent")}} インターフェイスと {{domxref("HTMLElement/transitionend_event", "transitionend")}} イベント
- [CSS アニメーションの使い方](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
