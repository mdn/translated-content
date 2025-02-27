---
title: "Animation: remove イベント"
short-title: remove
slug: Web/API/Animation/remove_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Web Animations") }}

**`remove`** は {{domxref("Animation")}} インターフェイスのイベントで、アニメーションが[自動的に除去された時](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#満了したアニメーションの自動削除)にブラウザーによって発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("finish", (event) => { })
onfinish = (event) => { }
```

## イベント型

{{domxref("AnimationPlaybackEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## イベントプロパティ

_以下に挙げたプロパティに加え、親インターフェイスである {{domxref("Event")}} から継承したプロパティが利用できます。_

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{ReadOnlyInline}}
  - : イベントを生成したアニメーションの現在時刻。
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{ReadOnlyInline}}
  - : イベントを生成したアニメーションのタイムラインの時刻値。

## 例

### 置換されたアニメーションの除去

この例では、 `<button id="start">` 要素と、マウスが移動するたびに実行するイベントリスナーがあります。 {{domxref("Element.mousemove_event","mousemove")}} イベントハンドラーは `<button>` をマウスポインターの位置にアニメーションさせるアニメーションを設定します。これは巨大なアニメーションリストになり、メモリーリークを作成する可能性があります。このため、現代のブラウザーでは、他のアニメーションによってオーバーライドされた前方充填アニメーションは自動的に除去されます。

作成したアニメーションの数が表示されます。 `remove` イベントリスナーを使用して、除去されたアニメーションの数をカウントして表示します。

アニメーションの 1 つを除いて、最終的にはすべて除去されるはずです。

#### HTML

```html
<button id="start">クリックでドラッグ</button>
<br />
<button id="reset">例をリセット</button>
<p>
  ボタンをクリックするとアニメーションが始まります（既定では、このようなアニメーションを体験すると偏頭痛に悩まされる人を保護するために無効になっています）。
</p>
<p>Animations created: <span id="count-created">0</span></p>
<p>Animations removed: <span id="count-removed">0</span></p>
```

#### CSS

```css
:root,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

button {
  margin: 0.5rem 0;
}
```

#### JavaScript

```js
const button = document.querySelector("#start");
let created = 0;
let removed = 0;

button.addEventListener(
  "click",
  () => {
    document.body.addEventListener("mousemove", (event) => {
      const animation = button.animate(
        { transform: `translate(${event.clientX}px, ${event.clientY}px)` },
        { duration: 500, fill: "forwards" },
      );
      created++;
      showCounts();

      // アニメーションが除去された後、 remove イベントが発生
      animation.addEventListener("remove", () => {
        removed++;
        showCounts();
      });
    });
  },
  { once: true },
);

function showCounts() {
  document.getElementById("count-created").textContent = created;
  document.getElementById("count-removed").textContent = removed;
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### 結果

{{embedlivesample("Removing_replaced_animations","",250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}, {{domxref("AnimationPlaybackEvent")}}
- {{domxref("Animation.replaceState")}}: アニメーションが削除されたかどうかを確認します
- {{domxref("Animation.persist()")}}: アニメーションが除去されないようにします
