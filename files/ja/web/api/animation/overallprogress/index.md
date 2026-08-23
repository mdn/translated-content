---
title: "Animation: overallProgress プロパティ"
short-title: overallProgress
slug: Web/API/Animation/overallProgress
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{APIRef("Web Animations")}}

**`overallProgress`** は {{domxref("Animation")}} インターフェイスの読み取り専用プロパティで、アニメーションが完了状態に至るまでの全体的な進捗率を示す `0` から `1` までの数値を返します。これは、それぞれの反復処理の中での進捗率ではなく、アニメーションのすべての反復処理に対する全体的な進捗率です。

`overallProgress` は、{{domxref("AnimationTimeline", "timeline")}} の種類にかかわらず、すべてのアニメーションで一貫して動作します。

## 値

`0` から `1` までの数値。ただし、アニメーションにタイムラインがない場合、非アクティブである場合、まだ再生されていない場合、{{domxref("Animation/currentTime", "currentTime")}} が時間以外の値に設定されている場合は `null` となります。

アニメーションの [`iterations`](/ja/docs/Web/API/KeyframeEffect/KeyframeEffect#iterations) プロパティが `Infinity` に設定されている場合、またはその {{domxref("Animation/currentTime", "currentTime")}} が負の値に設定されている場合、`overallProgress` は `0` を返します。

アニメーションの [`duration`](/ja/docs/Web/API/KeyframeEffect/KeyframeEffect#duration) が `0` に設定されている場合、`overallProgress` は `1` を返します。

## 例

### 進捗率を表示

このデモでは、`overallProgress` を使用して「進捗率」の表示を作成し、アニメーションを実行中に画面に表示させています。

### HTML

HTML には、アニメーションを起動するために押す {{htmlelement("button")}}、進捗率を表示するための {{htmlelement("p")}} 要素、およびアニメーションの対象となる {{htmlelement("div")}} があります。

```html
<button>アニメーションを起動</button>
<p class="progress">進捗率: 0%</p>
<div class="box"></div>
```

このデモの CSS には基本的なスタイル設定が指定されていますが、JavaScript の仕組みを理解する上で重要ではないため、簡潔にするために非表示にしています。

```css hidden
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.progress {
  font-weight: bold;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 40px 20px;
  border: 10px solid black;
  background: lightseagreen;
  margin: 0 auto;
}
```

### JavaScript

JavaScript では、まず {{htmlelement("button")}}、{{htmlelement("p")}}、{{htmlelement("div")}} の各要素への参照を取得することから始めます。

それから次のものを作成します。

- アニメーションを作成した後、そのアニメーションを参照する `animation` 変数
- [キーフレーム](/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats)の配列
- タイミングプロパティが含まれている options オブジェクト。

```js
const btn = document.querySelector("button");
const progress = document.querySelector(".progress");
const box = document.querySelector(".box");

let animation;

const keyframes = [{ rotate: "0deg" }, { rotate: "360deg" }];

const timingProps = {
  duration: 3000,
  iterations: 1,
};
```

次に、[`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用して、`<button>` に `"click"` イベントリスナーを追加します。これにより、クリックされた際に以下の処理を行うようにします。

1. {{domxref("Element.animate()")}} を使用してアニメーションの実行を開始し、先に定義したキーフレームとオプションを引数として渡し、返された {{domxref("Animation")}} インスタンスを `animation` 変数に代入します。
2. {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} メソッドを介して `updateProgress()` という関数を実行し、進捗率表示の更新処理を行います。

```js
btn.addEventListener("click", () => {
  // ボックスをアニメーションさせる
  animation = box.animate(keyframes, timingProps);
  // rAF() を使って進捗率の更新を開始する
  requestAnimationFrame(updateProgress);
});
```

それでは、`updateProgress()` 関数を定義しましょう。この関数は、{{domxref("Animation.playState")}} を問い合わせて、アニメーションが完了していないかどうかを確認します。まだ完了していない場合、`overallProgress` の現在の値を取得し、これに 100 を掛けて小数点以下を丸めて整数のパーセント値に変換し、その値を `<p>` 要素の {{domxref("Node.textContent", "textContent")}} の値につけます。その後、`requestAnimationFrame(updateProgress)` を再度呼び出し、進捗率の更新を再実行します。

アニメーションが完了したら、進捗率を「完了！」というメッセージに置き換えて、`requestAnimationFrame(updateProgress)` を呼び出さないようにすることで、進捗率の更新を停止します。

```js
function updateProgress() {
  // アニメーションが完了したかどうかをチェック
  if (animation.playState !== "finished") {
    // overallProgress を数値のパーセント値に変換
    const progressPercentage = Math.floor(animation.overallProgress * 100);
    // 進捗率の段落を、パーセント値で更新
    progress.textContent = `進捗率: ${progressPercentage}%`;
    // アニメーションが完了していない場合にのみ、次のフレームをリクエスト
    requestAnimationFrame(updateProgress);
  } else {
    progress.textContent = "完了!";
  }
}
```

### 結果

出力は同様に次のようになります。ボタンを押して、アニメーションと関連付けられた進捗率インジケーターが実行される様子を確認してみてください。

{{ EmbedLiveSample("Displaying a percentage progress", "100%", 250) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Animation")}} には、ウェブページのアニメーションを制御するために使用できるその他のメソッドやプロパティが含まれています。
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
