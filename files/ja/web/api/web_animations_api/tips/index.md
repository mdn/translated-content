---
title: ウェブアニメーション API のヒントとコツ
slug: Web/API/Web_Animations_API/Tips
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("Web Animations")}}

CSSアニメーションを使えば、文書やアプリを構成する要素を使って驚くような表現が可能になります。一見すると分かりにくい操作や、すぐには思いつかないような賢い手法も数多く存在します。この記事では、完了したアニメーションを再実行する方法を含め、皆さんの作業を少しでも楽にするためのヒントやテクニックを記載しています。

## 再度アニメーションを実行する

[CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)の仕様書では、再度アニメーションを実行する方法を提示していません。アニメーションが終了した後、その要素の {{cssxref("animation-play-state")}} を`"running"` に再設定するだけでは不十分です。代わりに、JavaScript で、完了したアニメーションを取得し、再実行する必要があります。

次の方法は、安定していて信頼性の高い方法の一つです。

### HTML

はじめに、HTML にアニメーションしてほしい {{HTMLElement("div")}} と、アニメーションを再生（または再実行）するためのボタンを定義しましょう。

```html
<div class="box"></div>
<button class="runButton">アニメーションを実行</button>
```

### CSS

CSS でボックスをスタイル設定しましょう。

```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 1rem;
}
```

### JavaScript

次に、この処理を行う JavaScript について見ていきましょう。`playAnimation()` 関数は、ユーザーが実行ボタンをクリックした際に呼び出されます。{{cssxref("@keyframes")}} アットルールを使用する代わりに、[JavaScript でキーフレームを定義します](/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats)。

```js
const box = document.querySelector(".box");
const button = document.querySelector(".runButton");

/*
  次の CSS @keyframes と同等

  @keyframes colorChange {
    0% {
      background-color: grey;
    }
    100% {
      background-color: lime;
    }
  }
*/
const colorChangeFrames = { backgroundColor: ["grey", "lime"] };

function playAnimation() {
  box.animate(colorChangeFrames, 4000);
}
```

`playAnimation` メソッドは、ボックスに対して {{domxref("Element.animate()")}} メソッドを呼び出し、アニメーションを再生します。`animate()` メソッドは、キーフレームオブジェクトまたはキーフレームオブジェクトの配列、およびアニメーションとアニメーションオプションを引数として取ります。この場合、`colorChangeFrames` キーフレームオブジェクトとアニメーションの再生時間をこのメソッドに渡しています。

同時に、実行ボタンにイベントハンドラーを追加して、実際に何か動作が行われるようにする必要があります。

```js
button.addEventListener("click", playAnimation);
```

### 結果

{{ EmbedLiveSample("Run_an_animation_again", "100%", "160") }}

## 停止する前にアニメーションが完了するのを待つ

前回の例では、アニメーションが完了する前に「実行」ボタンをクリックすると、現在のアニメーションが突然停止し、`0%` または `from` の開始キーフレームからアニメーションが再開されます。現在のアニメーションの反復が完了してから新しいアニメーションを開始したい場合は、アニメーションの実行中は `run` ボタンを無効にし、[`finish`](/ja/docs/Web/API/Animation/finish) イベントに基づいて再度有効にすることができます。あるいは、アニメーションを複数回反復処理したい場合は、要素でアニメーションが動作しているかどうかを調べ、アニメーションの実行中にボタンがクリックされるたびに `animation-iteration` のカウントを増加するようにすることもできます。

この例では、`playAnimation()` 関数を更新して、ボタンがクリックされた際にそのボタンを無効化し、`finish` イベントが発生した際にボタンを再び有効にするようにしています。

```html hidden
<div class="box"></div>
<button class="runButton">アニメーションを実行</button>
```

```css hidden
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 1rem;
}
```

```js hidden
const box = document.querySelector(".box");
const button = document.querySelector(".runButton");
const colorChangeFrames = { backgroundColor: ["grey", "lime"] };

button.addEventListener("click", playAnimation);
```

```js
function playAnimation() {
  button.setAttribute("disabled", true);
  const anim = box.animate(colorChangeFrames, 4000);

  anim.addEventListener("finish", (event) => {
    button.removeAttribute("disabled");
  });
}
```

{{ EmbedLiveSample("Waiting for an animation to complete before stopping", "100%", "160") }}

このコードはボタンを無効にし、アニメーションを開始します。アニメーションが完了すると、ボタンは再び有効になります。

## アニメーションでの重ね合わせコンテキスト

CSS アニメーション中にアニメーション処理されるプロパティは、あたかも {{cssxref("will-change")}} プロパティ宣言に含まれているかのように動作します。重ね合わせコンテキストを生成するプロパティは、`will-change` とマークされると、その要素に新しい重ね合わせコンテキストが割り当てられます。

[`animation-fill-mode: forwards`](/ja/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards)（および `both`）の場合、アニメーション完了後も、アニメーションの対象となるプロパティは最終キーフレームの状態のまま維持されます。プロパティは `will-change` の状態を維持するため、アニメーション中に新しい重ね合わせコンテキストが作成され、アニメーション終了時にもそれが存在している場合、対象要素はアニメーション完了後もその重ね合わせコンテキストを維持します。

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [Animation インターフェイス](/ja/docs/Web/API/Animation/Animation)
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
