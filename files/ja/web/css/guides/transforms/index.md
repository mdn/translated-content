---
title: CSS 座標変換
short-title: 座標変換
slug: Web/CSS/Guides/Transforms
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS 座標変換** (CSS transforms) は、CSS でスタイル設定された要素を 2 次元または 3 次元空間に座標変換する方法を定義します。

## CSS 座標変換の動作

下の枠内のスライダーを使うと、 3D 空間での立方体の平行移動、回転、変倍、歪めの CSS 座標変換のプロパティを変更できます。立方体を 3D 空間内で移動させながら、 3D 位置 `(0, 0, 0)` にある `z:0px` とラベル付けされた要素との相互作用に注目してください。

```html hidden live-sample___transforms
<article>
  <fieldset id="allTransformFieldset">
    <legend>
      座標変換の設定
      <button id="resetAllButton" aria-label="Reset">↻</button>
    </legend>
    <section id="fieldsetSection">
      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>平行移動</span>
          </label>
          <button
            id="translateSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span id="translateXLabel">X</span>
              <input
                type="range"
                min="-100"
                max="100"
                value="0"
                data-default="0"
                id="translateXRange"
                aria-labelledby="translateXLabel" />
            </label>
            <output id="translateXOutput" for="translateXRange"></output>
          </div>
          <div>
            <label>
              <span id="translateYLabel">Y</span>
              <input
                type="range"
                min="-100"
                max="100"
                value="0"
                data-default="0"
                id="translateYRange"
                aria-labelledby="translateYLabel" />
            </label>
            <output id="translateYOutput" for="translateYRange"></output>
          </div>
          <div>
            <label>
              <span id="translateZLabel">Z</span>
              <input
                type="range"
                min="-100"
                max="100"
                value="0"
                data-default="0"
                id="translateZRange"
                aria-labelledby="translateZLabel" />
            </label>
            <output id="translateZOutput" for="translateZRange"></output>
          </div>
        </div>
      </fieldset>

      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>回転</span>
          </label>
          <button
            id="rotateSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span id="rotateXLabel">X</span>
              <input
                type="range"
                min="-360"
                max="360"
                value="0"
                data-default="0"
                id="rotateXRange"
                aria-labelledby="rotateXLabel" />
            </label>
            <output id="rotateXOutput" for="rotateXRange"></output>
          </div>
          <div>
            <label>
              <span id="rotateYLabel">Y</span>
              <input
                type="range"
                min="-360"
                max="360"
                value="0"
                data-default="0"
                id="rotateYRange"
                aria-labelledby="rotateYLabel" />
            </label>
            <output id="rotateYOutput" for="rotateYRange"></output>
          </div>
          <div>
            <label>
              <span id="rotateZLabel">Z</span>
              <input
                type="range"
                min="-360"
                max="360"
                value="0"
                data-default="0"
                id="rotateZRange"
                aria-labelledby="rotateZLabel" />
            </label>
            <output id="rotateZOutput" for="rotateZRange"></output>
          </div>
        </div>
      </fieldset>

      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>変倍</span>
          </label>
          <button
            id="scaleSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span id="scaleXLabel">X</span>
              <input
                type="range"
                min="0.1"
                max="2.5"
                value="1"
                data-default="1"
                step="0.1"
                id="scaleXRange"
                aria-labelledby="scaleXLabel" />
            </label>
            <output id="scaleXOutput" for="scaleXRange"></output>
          </div>
          <div>
            <label id="scaleYLabel">
              <span>Y</span>
              <input
                type="range"
                min="0.1"
                max="2.5"
                value="1"
                data-default="1"
                step="0.1"
                id="scaleYRange"
                aria-labelledby="scaleYLabel" />
            </label>
            <output id="scaleYOutput" for="scaleYRange"></output>
          </div>
          <div>
            <label id="scaleZLabel">
              <span>Z</span>
              <input
                type="range"
                min="0.1"
                max="2.5"
                value="1"
                data-default="1"
                step="0.1"
                id="scaleZRange"
                aria-labelledby="scaleZLabel" />
            </label>
            <output id="scaleZOutput" for="scaleZRange"></output>
          </div>
        </div>
      </fieldset>

      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>歪め</span>
          </label>
          <button
            id="skewSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span id="skewXLabel">X</span>
              <input
                type="range"
                min="-90"
                max="90"
                value="0"
                data-default="0"
                id="skewXRange"
                aria-labelledby="skewXLabel" />
            </label>
            <output id="skewXOutput" for="skewXRange"></output>
          </div>
          <div>
            <label>
              <span id="skewYLabel">Y</span>
              <input
                type="range"
                min="-90"
                max="90"
                value="0"
                data-default="0"
                id="skewYRange"
                aria-labelledby="skewYLabel" />
            </label>
            <output id="skewYOutput" for="skewYRange"></output>
          </div>
        </div>
      </fieldset>

      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>コンテナーの視点</span>
          </label>
          <button
            id="containerPerspectiveSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span id="perspectiveLabel"><code>perspective</code></span>
              <input
                type="range"
                min="75"
                max="500"
                value="200"
                data-default="200"
                id="perspectiveRange"
                aria-labelledby="perspectiveLabel" />
            </label>
            <output id="perspectiveOutput" for="perspectiveRange"></output>
          </div>
          <div>
            <label>
              <span id="perspectiveOriginXLabel"
                ><code>perspective-origin</code> X (%)</span
              >
              <input
                type="range"
                min="0"
                max="100"
                value="50"
                data-default="50"
                id="perspectiveOriginXRange"
                aria-labelledby="perspectiveOriginXLabel" />
            </label>
            <output
              id="perspectiveOriginXOutput"
              for="perspectiveOriginXRange"></output>
          </div>
          <div>
            <label>
              <span><code>perspective-origin</code> Y (%)</span>
              <input
                type="range"
                min="0"
                max="100"
                value="50"
                data-default="50"
                id="perspectiveOriginYRange"
                aria-labelledby="perspectiveOriginYLabel" />
            </label>
            <output
              id="perspectiveOriginYOutput"
              for="perspectiveOriginYRange"></output>
          </div>
        </div>
      </fieldset>

      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>その他のプロパティ</span>
          </label>
          <button
            id="otherSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span><code>backface-visibility</code></span>
              <input
                type="checkbox"
                checked
                data-default="checked"
                id="backfaceVisibilityCheckbox" />
            </label>
          </div>
        </div>
      </fieldset>
    </section>
  </fieldset>
  <section id="outputSection">
    <div id="outputContainer">
      <div id="cube">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
      <div id="z0"><code>z:0px</code></div>
    </div>
    <div id="perspectiveDot"></div>
  </section>
</article>
```

```css hidden live-sample___transforms
#allTransformFieldset {
  border: none;
  padding: 0;
  margin-bottom: 4px;
  accent-color: blue; /* or any color */
  font-family:
    "Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
}

#allTransformFieldset > legend {
  margin-bottom: 4px;
}

fieldset {
  margin: 0;
}

legend {
  font-weight: bold;
  padding: 0;
}

#fieldsetSection {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 8px;
}

#outputSection {
  width: 100%;
  min-height: 400px;
  background: linear-gradient(skyblue, khaki);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: clip;
}

#outputContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  perspective: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  pointer-events: none;
}

#z0 {
  width: 50px;
  height: 50px;
  background: linear-gradient(
    to right bottom,
    rgb(223 223 223),
    rgb(190 190 190)
  );
  transform: translateZ(0px);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: black;
  border-radius: 50%;
  outline: 1px solid rgb(0 0 0 / 0.35);
  pointer-events: all;
}

#perspectiveDot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgb(240 0 0 / 0.5);
  transform: translate3d(-2px, -2px, 0px);
  position: absolute;
}

#cube {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: all 0.075s ease-out;
  position: absolute;
  pointer-events: all;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

.transformFieldset {
  margin: 0;
}

.controlsContainer {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
}

.controlsContainer {
  width: 100%;
}

.controlsContainer > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.controlsContainer > div > label {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

button {
  font-size: 18px;
  border-radius: 50%;
  border: #cccccc solid 1px;
  padding: 0;
  width: 26px;
  height: 26px;
  margin-left: 4px;
}

input[type="range"] {
  width: 172px;
}

output {
  width: 3em;
}
```

```js hidden live-sample___transforms
allTransformFieldset
  .querySelectorAll("input[type='range']")
  .forEach((rangeInput) => {
    // 範囲入力が変更された際のイベントリスナー
    rangeInput.addEventListener("input", (el) => {
      updateTransform();
    });

    // 範囲入力がダブルクリックされた際に、関連する座標変換設定をリセット
    rangeInput.addEventListener("dblclick", (el) => {
      resetInput(el.target);
      updateTransform();
    });
  });

// チェックボックス入力が変更された際のイベントリスナー
allTransformFieldset
  .querySelectorAll("input[type='checkbox']")
  .forEach((checkboxInput) => {
    checkboxInput.addEventListener("input", (el) => {
      updateTransform();
    });
  });

// 「すべてリセット」ボタンのイベントリスナー
resetAllButton.addEventListener("click", () => {
  allTransformFieldset.querySelectorAll("input").forEach((input) => {
    resetInput(input);
  });
  updateTransform();
});

// セクションのリセットボタンのイベントリスナー
allTransformFieldset
  .querySelectorAll(".resetSectionButton")
  .forEach((resetSectionButton) => {
    resetSectionButton.addEventListener("click", (el) => {
      let allRanges = el.target.parentElement.parentElement.querySelectorAll(
        "input[type='range']",
      );
      allRanges.forEach((range) => {
        resetInput(range);
      });

      let allCheckboxes =
        el.target.parentElement.parentElement.querySelectorAll(
          "input[type='checkbox']",
        );
      allCheckboxes.forEach((check) => {
        resetInput(check);
      });

      updateTransform();
    });
  });

function resetInput(inputEl) {
  if (!inputEl) {
    console.warn(`inputEl \`${inputEl}\` is falsy!`);
    console.trace();
    return;
  }

  const defaultValue = inputEl.getAttribute("data-default");
  if (inputEl.getAttribute("type") === "checkbox") {
    inputEl.checked = defaultValue === "checked";
  } else {
    inputEl.value = defaultValue || "0";
  }
}

function updateOutputs() {
  translateXOutput.value = `${translateXRange.value}px`;
  translateYOutput.value = `${translateYRange.value}px`;
  translateZOutput.value = `${translateZRange.value}px`;

  rotateXOutput.value = `${rotateXRange.value}°`;
  rotateYOutput.value = `${rotateYRange.value}°`;
  rotateZOutput.value = `${rotateZRange.value}°`;

  scaleXOutput.value = `${scaleXRange.value}x`;
  scaleYOutput.value = `${scaleYRange.value}x`;
  scaleZOutput.value = `${scaleZRange.value}x`;

  skewXOutput.value = `${skewXRange.value}°`;
  skewYOutput.value = `${skewYRange.value}°`;

  perspectiveOutput.value = `${perspectiveRange.value}px`;

  perspectiveOriginXOutput.value = `${perspectiveOriginXRange.value}%`;
  perspectiveOriginYOutput.value = `${perspectiveOriginYRange.value}%`;
}

function updateTransform() {
  updateOutputs();

  cube.style.transform = `translate3d(${translateXRange.value}px,
                ${translateYRange.value}px,
                ${translateZRange.value}px)
                rotateX(${rotateXRange.value}deg)
                rotateY(${rotateYRange.value}deg)
                rotateZ(${rotateZRange.value}deg)
                scale3d(${scaleXRange.value},
                ${scaleYRange.value},
                ${scaleZRange.value})
                skewX(${skewXRange.value}deg)
                skewY(${skewYRange.value}deg)`;
  cube.style.backfaceVisibility = `${backfaceVisibilityCheckbox.checked ? "visible" : "hidden"}`;

  outputContainer.style.perspective = `${perspectiveRange.value}px`;
  outputContainer.style.perspectiveOrigin = `${perspectiveOriginXRange.value}% ${perspectiveOriginYRange.value}%`;

  perspectiveDot.style.top = `${perspectiveOriginYRange.value}%`;
  perspectiveDot.style.left = `${perspectiveOriginXRange.value}%`;
}
updateTransform();
```

{{EmbedLiveSample("transforms", "", "850px")}}

また、 `perspective` スライダーを使って、立方体のコンテナーの [`perspective`](/ja/docs/Web/CSS/Reference/Properties/perspective) プロパティを変更できます。これはあなたと `z=0` 平面の間の距離を決定します。

[`perspective-origin`](/ja/docs/Web/CSS/Reference/Properties/perspective-origin) スライダーは、ビューの消点を決定するために、閲覧者が3D空間のどこを見ているかを決定します。この消点は小さな赤い点で示されます。これらのスライダーを変更することで、立方体自体を動かすことなく、頭を上下左右に動かして立方体のさまざまな部分を見ることができると想像してください。

`backface-visibility` チェックボックスは、立方体の裏面を `visible` （表示）に設定するか、`hidden` （非表示）に設定するかを決定します。

上の例の立方体は 6 つの `<div>` 要素で構成されており、すべて CSS でスタイル設定されて立方体の面を構成しています。立方体は 2D や 3D のキャンバスコンテキストを使用して描画されていないので、**他の DOM 要素を検査するのと同じように**、ブラウザーの開発者ツールで立方体の面を検査することができます。ブラウザー開発者ツールの要素ピッカーを使用して、立方体の位置と回転を変換しながら、立方体のさまざまな面を調べてみてください。

> [!NOTE]
> 3D 回転を含む座標変換を適用する場合、順序はが座標変換結果に影響します。上の例では、座標変換は平行移動、変倍、回転、歪めを行います。回転は X → Y → Z の順に適用されます。

## リファレンス

### プロパティ

- {{cssxref("backface-visibility")}}
- {{cssxref("perspective")}}
- {{cssxref("perspective-origin")}}
- {{cssxref("rotate")}}
- {{cssxref("scale")}}
- {{cssxref("transform")}}
- {{cssxref("transform-box")}}
- {{cssxref("transform-origin")}}
- {{cssxref("transform-style")}}
- {{cssxref("translate")}}

### 関数

- {{cssxref("transform-function/matrix", "matrix()")}}
- {{cssxref("transform-function/matrix3d", "matrix3d()")}}
- {{cssxref("transform-function/perspective", "perspective()")}}
- {{cssxref("transform-function/rotate", "rotate()")}}
- {{cssxref("transform-function/rotate3d", "rotate3d()")}}
- {{cssxref("transform-function/rotateX", "rotateX()")}}
- {{cssxref("transform-function/rotateY", "rotateY()")}}
- {{cssxref("transform-function/rotateZ", "rotateZ()")}}
- {{cssxref("transform-function/scale", "scale()")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- {{cssxref("transform-function/scaleX", "scaleX()")}}
- {{cssxref("transform-function/scaleY", "scaleY()")}}
- {{cssxref("transform-function/scaleZ", "scaleZ()")}}
- {{cssxref("transform-function/skew", "skew()")}}
- {{cssxref("transform-function/skewX", "skewX()")}}
- {{cssxref("transform-function/skewY", "skewY()")}}
- {{cssxref("transform-function/translate", "translate()")}}
- {{cssxref("transform-function/translate3d", "translate3d()")}}
- {{cssxref("transform-function/translateX", "translateX()")}}
- {{cssxref("transform-function/translateY", "translateY()")}}
- {{cssxref("transform-function/translateZ", "translateZ()")}}

### データ型

- {{cssxref("&lt;transform-function&gt;")}}

## ガイド

- [CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)
  - : CSS でスタイル付けされた要素をどのように座標変換するかについての手順を追ったチュートリアルです。
- [座標系](/ja/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : CSS オブジェクトモデルでピクセル位置を定義する方法を説明します。
- [パフォーマンスの基礎: CSS 座標変換の使用](/ja/docs/Web/Performance/Guides/Fundamentals#css_変換を使用する)
  - : ウェブパフォーマンスの基礎について、 CSS 座標変換がどのようにパフォーマンスを向上させることができるかを含め、概説します。
- [ウェブの行列演算](/ja/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : オブジェクトの座標変換を行列で表す方法を説明しています。

## 関連する概念

- CSS プロパティ:
  - [`animation`](/ja/docs/Web/CSS/Reference/Properties/animation)
  - [`background-position`](/ja/docs/Web/CSS/Reference/Properties/background-position)
  - [`clip`](/ja/docs/Web/CSS/Reference/Properties/clip)
  - [`clip-path`](/ja/docs/Web/CSS/Reference/Properties/clip-path)
  - [`contain`](/ja/docs/Web/CSS/Reference/Properties/contain)
  - [`content-visibility`](/ja/docs/Web/CSS/Reference/Properties/content-visibility)
  - [`isolation`](/ja/docs/Web/CSS/Reference/Properties/isolation)
  - [`mask`](/ja/docs/Web/CSS/Reference/Properties/mask)
  - [`mask-border-source`](/ja/docs/Web/CSS/Reference/Properties/mask-border-source)
  - [`mask-image`](/ja/docs/Web/CSS/Reference/Properties/mask-image)
  - [`mix-blend-mode`](/ja/docs/Web/CSS/Reference/Properties/mix-blend-mode)
  - [`opacity`](/ja/docs/Web/CSS/Reference/Properties/opacity)
  - [`overflow`](/ja/docs/Web/CSS/Reference/Properties/overflow)
  - [`transition`](/ja/docs/Web/CSS/Reference/Properties/transition)
  - [`visibility`](/ja/docs/Web/CSS/Reference/Properties/visibility)
- データ型:
  - [`<angle>`](/ja/docs/Web/CSS/Reference/Values/angle)
  - {{cssxref("length-percentage")}}
  - {{cssxref("length")}}
  - [`<number>`](/ja/docs/Web/CSS/Reference/Values/number)
  - {{cssxref("percentage")}}
  - [`<position>`](/ja/docs/Web/CSS/Reference/Values/position_value)
- 用語集の用語:
  - [補間](/ja/docs/Glossary/Interpolation)
  - [重ね合わせコンテキスト](/ja/docs/Glossary/Stacking_context)
- [SVG](/ja/docs/Web/SVG) の概念:
  - [`<animate>`](/ja/docs/Web/SVG/Reference/Element/animate) 要素
  - [`<animateTransform>`](/ja/docs/Web/SVG/Reference/Element/animateTransform) 要素
  - [`<set>`](/ja/docs/Web/SVG/Reference/Element/set) 要素
  - [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 要素

## 仕様書

{{Specifications}}

## 関連情報

- [基本的な SVG 座標変換](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations)のチュートリアル
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
- [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)モジュール
