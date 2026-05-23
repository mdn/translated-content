---
title: "ViewTransition: types プロパティ"
short-title: types
slug: Web/API/ViewTransition/types
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

{{APIRef("View Transition API")}}

**`types`** は {{domxref("ViewTransition")}} インターフェイスの読み取り専用プロパティで、{{domxref("ViewTransitionTypeSet")}} であり、このビュー遷移に設定された[型](/ja/docs/Web/API/View_Transition_API/Using_types)にアクセスしたり、変更したりすることができます。

## 値

{{domxref("ViewTransitionTypeSet")}} です。これは [Set 風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風のブラウザー_api)であり、`clear()`、`add()`、`delete()` などのメソッドを利用して、ビュー遷移に適用されているタイプをその場で変更することができます。

## 例

### 基本的な使い方

この例では、2 つの異なるコンテンツ間で遷移を伴う基本的な文書を記載しています。3 つのボタンを指定しており、それぞれが遷移を開始しますが、`type` 属性をそれぞれ異なる値に設定することで、遷移に異なる種類のアニメーションを適用しています。

#### HTML

このマークアップには、コンテンツを含む単一の {{htmlelement("p")}} 要素と、ビュー遷移を開始するための 3 つの {{htmlelement("button")}} 要素があります。

```html live-sample___basic_usage
<p>これが私の初めてのコンテンツです。気に入っていただけるといいなぁ。</p>
<div>
  <button id="default">Default</button>
  <button id="slide">Slide</button>
  <button id="flip">Flip</button>
</div>
```

#### JavaScript

このスクリプトでは、ボタンと本文の参照を作成し、2 つの異なるコンテンツを2つの定数に格納するために使用します。

```js live-sample___basic_usage
const defaultBtn = document.getElementById("default");
const slideBtn = document.getElementById("slide");
const flipBtn = document.getElementById("flip");
const content = document.querySelector("p");

const first =
  "これが私の初めてのコンテンツです。気に入っていただけるといいなぁ。";
const second = "これが私の 2 つ目のコンテンツです。1 つ目より良いでしょう？";
```

次に、ボタンに `click` イベントのリスナーを追加します。ボタンがクリックされると、`changeContent()` 関数が実行されます。

```js live-sample___basic_usage
defaultBtn.addEventListener("click", changeContent);
slideBtn.addEventListener("click", changeContent);
flipBtn.addEventListener("click", changeContent);
```

最後に、`changeContent()` 関数を定義します。まず、{{domxref("Document.startViewTransition", "startViewTransition()")}} メソッドを呼び出してコンテンツを更新し、トランジションが始まるようにします。そして、返された `ViewTransition` オブジェクトを `vt` という定数に格納します。`startViewTransition()` 内では、`update` コールバックが、段落の `textContent` が `first` の文字列と等しいかどうかを調べます。等しい場合は、`second` の文字列に設定します。等しくない場合は、`first` の文字列に設定します。

`changeContent()` 関数の後半では、`click` イベントの対象となる要素の値を調べます。

- 「スライド」ボタンの場合は、`vt.types.add("slide")` を使用して、アクティブなビュー遷移の型に `slide` 型を追加します。
- 「Flip」ボタンの場合は、`vt.types.add("flip")` を使用して、アクティブなビュー遷移の型に `flip` 型を追加します。
- 「デフォルト」ボタンが押された場合は、何らかの処理を行いません。この場合、デフォルトのビュー遷移であるクロスフェードアニメーションを使用します。

```js live-sample___basic_usage
function changeContent(e) {
  const vt = document.startViewTransition({
    update() {
      content.textContent === first
        ? (content.textContent = second)
        : (content.textContent = first);
    },
  });

  if (e.target === slideBtn) {
    vt.types.add("slide");
  } else if (e.target === flipBtn) {
    vt.types.add("flip");
  }
}
```

#### CSS

このスタイルでは、まず `:active-view-transition` 擬似クラスを使用して、一連のルールを作成します。これらのスタイルは、ビュー遷移の種類にかかわらず、ビュー遷移がアクティブなときは常に適用されます。{{cssxref("view-transition-name")}} には `none` の値を {{cssxref(":root")}} に適用しています。これは、`<p>` 要素には `view-transition-name` として `content` を指定していますが、それ以外の要素は遷移時に捕捉されてアニメーションしないようにするためです。

```css hidden live-sample___basic_usage
html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

div {
  display: flex;
  width: 60%;
  justify-content: space-between;
}

p {
  font-size: 1.7em;
  width: 60%;
  color: blue;
  background-color: white;
  margin-top: 0;
}
```

```css live-sample___basic_usage
html:active-view-transition {
  :root {
    view-transition-name: none;
  }
  p {
    view-transition-name: content;
  }
}
```

次に、`:active-view-transition-type()` 擬似クラスを使用して、2 つのネストされたスタイルブロックを作成します。1 つ目は、アクティブなビュー遷移の型が `slide` の場合にのみ適用されるブロックで、2 つ目は、アクティブなビュー遷移の型が `flip` の場合にのみ適用されるブロックです。それぞれのブロックでは、{{cssxref("::view-transition-old()")}} および {{cssxref("::view-transition-new()")}} という擬似要素を使用して、`slide` キャプチャグループの遷出ビューと遷入ビューに、独自の {{cssxref("animation-name")}} 値を適用しています。

結果的に、次のようになります。

- 遷移型が `slide` の場合、古いコンテンツビューが左へスライドして消え、新しいコンテンツビューが右からスライドして表示されます。
- 遷移型が `flip` の場合、古いコンテンツビューは水平方向に 90 度回転して非表示となり、新しいコンテンツビューが回転して表示されます。
- それ以外の場合は、デフォルトのクロスフェードビュー遷移のアニメーションが使用されます。

```css live-sample___basic_usage
html:active-view-transition-type(slide) {
  &::view-transition-old(content) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(content) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(flip) {
  &::view-transition-old(content) {
    animation-name: flip-out;
  }
  &::view-transition-new(content) {
    animation-name: flip-in;
    animation-delay: 0.6s;
  }
}
```

最後に、{{cssxref("@keyframes")}} アニメーションブロックを使用して、前回参照したアニメーションを定義します。同時に、すべてのキャプチャグループに対して独自の {{cssxref("animation-duration")}} を設定し、遷移アニメーションの速度をわずかに遅くします。

```css live-sample___basic_usage
@keyframes slide-out-to-left {
  to {
    translate: -100vw 0;
  }
}
@keyframes slide-in-from-right {
  from {
    translate: 100vw 0;
  }
}

@keyframes flip-out {
  to {
    rotate: x 90deg;
  }
}
@keyframes flip-in {
  from {
    rotate: x -90deg;
  }
}

::view-transition-group(*) {
  animation-duration: 0.6s;
}
```

#### 結果

この例は次のように表示されます。

{{EmbedLiveSample("basic-usage", "100%", 200)}}

それぞれのボタンをクリックしてみて、DOM の変更内容はどの場合でも同じですが、アニメーションが異なることに注目してください。これは、どのボタンが押されたかによって異なる遷移型が設定されているためです（"Default" の場合は遷移型が設定されません）。

### 適用例

[MPA の複数の遷移型の例](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/)（[ソースコード](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)）をご覧ください。ここでは、異なる遷移型で表されるナビゲーションの種類に応じて、ドキュメント間の表示遷移にさまざまなアニメーションを適用する方法を示しています。遷移型は、ナビゲーション中に JavaScript によって動的に決定されます。

[pageswap および pagereveal イベントを使用して異なる文書間を移動](/ja/docs/Web/API/View_Transition_API/Using_types#pageswap_および_pagereveal_イベントを使用して異なる文書間を移動)では、この例を順を追って説明しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ViewTransitionTypeSet")}}
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移 API の使用](/ja/docs/Web/API/View_Transition_API/Using)
- [ビュー遷移型の使用](/ja/docs/Web/API/View_Transition_API/Using_types)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
