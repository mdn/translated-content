---
title: "Animation: startTime プロパティ"
short-title: startTime
slug: Web/API/Animation/startTime
l10n:
  sourceCommit: 291a8c75ed553e807895225d51dff7ac24ad1f05
---

{{ APIRef("Web Animations") }}

**`Animation.startTime`** は {{domxref("Animation")}} インターフェイスのプロパティで、アニメーションの再生開始予定時刻を示す倍精度浮動小数点値です。

アニメーションの**開始時刻**は、対象とする {{domxref("DocumentTimeline","timeline")}} が再生を始める時刻です。アニメーションの **開始時刻** は、最初は未解決です（値がないので `null` という意味です）。

## 値

現在の時刻をミリ秒で表す浮動小数点数、または時刻が設定されていない場合は `null` です。この値を読むことで、現在設定されている開始時刻を知ることができ、この値を変更することで異なる時刻にアニメーションを始めることができます。

## 例

### 複数のアニメーション同期

次の例では、新しく追加されたアニメーションする猫すべてに、元々の走っている猫と同じ `startTime` を設定することで、それらを同期させることができます。なお、これはウェブアニメーション API でのみ可能な機能です。CSS アニメーションでは、2 つの別個のアニメーションを同期させることはできません。

```html hidden
<div id="css-cats">
  <h2>CSS アニメーション<br />による走る猫</h2>
  <div class="cat with-css"></div>
  <button id="insert-css-cat">猫を追加</button>
</div>

<div id="waapi-cats">
  <h2>ウェブアニメーション API<br />による走る猫</h2>
  <div class="cat" id="with-waapi"></div>
  <button id="insert-waapi-cat">猫を追加</button>
</div>
```

```css
/* すべての猫のサイズが同じで、背景画像も同一のスプライトが使用されています。 */
.cat {
  background: url("/shared-assets/images/examples/web-animations/cat_sprite.png") -600px
    0 no-repeat;
  height: 150px;
  width: 100%;
}

/* CSS によるアニメーションする猫は、CSS を使って走るアニメーションを設定 */
.cat.with-css {
  animation: 0.75s steps(13, end) infinite run-cycle;
}

/*
  CSS で走るアニメーションのキーフレーム。
  これは背景画像スプライトを周回移動させている。
*/
@keyframes run-cycle {
  from {
    background-position: -600px 0;
  }
  to {
    background-position: -600px -1950px;
  }
}
```

```css hidden
#css-cats,
#waapi-cats {
  text-align: center;
  vertical-align: top;
  min-width: 300px;
}

body {
  background: #e5e6e9;
  color: #071933;
  font-family: sans-serif;
  display: flex;
  flex-wrap: wrap;
}
```

```js
const cssCats = document.getElementById("css-cats");
const waapiCats = document.getElementById("waapi-cats");
const insertCSSCat = document.getElementById("insert-css-cat");
const insertWAAPICat = document.getElementById("insert-waapi-cat");

// @keyframes の走行サイクルと同じ情報
const keyframes = [
  { backgroundPosition: "-600px 0" },
  { backgroundPosition: "-600px -1950px" },
];
// .cat.with-css と同じ情報
const timing = {
  duration: 750,
  iterations: Infinity,
  easing: "steps(13, end)",
};

const catRunning = document
  .getElementById("with-waapi")
  .animate(keyframes, timing);

function createCat() {
  const newCat = document.createElement("div");
  newCat.classList.add("cat");
  return newCat;
}

insertCSSCat.addEventListener("click", () => {
  const newCat = createCat();
  newCat.classList.add("with-css");
  cssCats.insertBefore(newCat, insertCSSCat);
});

insertWAAPICat.addEventListener("click", () => {
  const newCat = createCat();
  const newAnimationPlayer = newCat.animate(keyframes, timing);
  // 開始時刻を元の .cat#with-waapi と同じに設定
  newAnimationPlayer.startTime = catRunning.startTime;
  waapiCats.insertBefore(newCat, insertWAAPICat);
});
```

{{EmbedLiveSample("Syncing different animations", "", 600)}}

## 時間精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)から保護するために、 `animation.startTime` の精度はブラウザー設定によっては丸められている可能性があります。
Firefox では、環境設定の `privacy.reduceTimerPrecision` がデフォルトで有効になっており、2 ミリ秒がデフォルト値です。
同時に、`privacy.resistFingerprinting` を有効にすることもできます。この場合、精度は 100 ミリ秒または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のうち、大きい方の値になります。

例えば、時間精度が縮小されている場合、`animation.startTime` の結果は常に 0.002 の倍数、あるいは `privacy.resistFingerprinting` が有効な場合は 0.1 の倍数（または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）になります。

```js
// Firefox 60 における 時間制度の低下 (2ms)
animation.startTime;
// 恐らくこうなります。
// 23.404
// 24.192
// 25.514
// …

// `privacy.resistFingerprinting` が有効な場合の時間制度の低下
animation.startTime;
// 恐らくこうなります。
// 49.8
// 50.6
// 51.7
// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.currentTime")}}: アニメーションの現在の時刻
