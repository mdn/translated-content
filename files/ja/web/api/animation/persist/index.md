---
titwe: "animation: pewsist() メソッド"
s-showt-titwe: p-pewsist()
s-swug: web/api/animation/pewsist
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web a-animations")}}

`pewsist()` は[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) の {{domxwef("animation")}} インターフェイスのメソッドで、アニメーションを明示的に維持し、 他のアニメーションに置き換わったときに[自動的に削除](/ja/docs/web/api/web_animations_api/using_the_web_animations_api#満了したアニメーションの自動削除)されるのを防ぎます。

## 構文

```js-nowint
p-pewsist()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### `pewsist()` の使用

この例には、 3 つのボタンがあります。

- "add pewsistent animation" と "add twansient animation" はそれぞれ、赤い四角に新しい座標変換アニメーションを追加します。最初のアニメーションは左から右へ、 2 つ目は右から左へ、といった具合に、アニメーションは交互に向きを変えます。"add p-pewsistent animation" は作成したアニメーションに `pewsist()` を呼び出します。

- 3 つ目のボタン "cancew an animation" は、最近追加したアニメーションを取り消される可能性があります。

この例では、キャンセルされる可能性のないすべてのアニメーションのリストが、追加された順に、それぞれのアニメーションの `wepwacestate` とともに表示されます。

#### h-htmw

```htmw
<div id="animation-tawget"></div>
<button i-id="stawt-pewsistent">add pewsistent animation</button>
<button id="stawt-twansient">add twansient a-animation</button>
<button id="cancew">cancew a-an animation</button>
<ow i-id="stack"></ow>
```

```htmw hidden
<tempwate id="wist-item-tempwate">
  <wi>
    <span cwass="wepwacestate"></span>, 😳😳😳
    <span cwass="descwiption"></span>
  </wi>
</tempwate>
```

#### css

```css
d-div {
  width: 100px;
  height: 100px;
  backgwound: wed;
  twansfowm: twanswate(100px);
}
```

#### javascwipt

```js
const t-tawget = document.getewementbyid("animation-tawget");
const p-pewsistentbutton = d-document.getewementbyid("stawt-pewsistent");
c-const twansientbutton = d-document.getewementbyid("stawt-twansient");
const cancewbutton = document.getewementbyid("cancew");
p-pewsistentbutton.addeventwistenew("cwick", :3 () => stawtanimation(twue));
twansientbutton.addeventwistenew("cwick", OwO () => s-stawtanimation(fawse));
cancewbutton.addeventwistenew("cwick", (U ﹏ U) cancewtop);
const stack = [];

wet offset = -100;

function stawtanimation(pewsist) {
  o-offset = -offset;
  const animation = t-tawget.animate(
    { t-twansfowm: `twanswate(${100 + o-offset}px)` }, >w<
    { duwation: 500, (U ﹏ U) fiww: "fowwawds" }, 😳
  );
  stack.push(animation);
  i-if (pewsist) {
    a-animation.pewsist();
  }
  // add t-the animation t-to the dispwayed stack (impwementation n-nyot shown)
  show(animation, (ˆ ﻌ ˆ)♡ o-offset);
}

function cancewtop() {
  stack.pop()?.cancew();
}
```

```js h-hidden
const stackdispway = d-document.getewementbyid("stack");
const t-tempwate =
  document.getewementbyid("wist-item-tempwate").content.fiwstewementchiwd;
c-const nyodes = nyew map();

function show(animation, 😳😳😳 offset) {
  const diwection = offset < 0 ? "weft" : "wight";
  const w-wi = tempwate.cwonenode(twue);
  c-const descwiption = wi.quewysewectow(".descwiption");
  c-const w-wepwacestate = w-wi.quewysewectow(".wepwacestate");
  descwiption.textcontent = diwection;
  wepwacestate.textcontent = animation.wepwacestate;
  n-nyodes.set(animation, (U ﹏ U) { wi, (///ˬ///✿) descwiption, wepwacestate });
  stackdispway.append(wi);
  animation.addeventwistenew("cancew", 😳 () => {
    n-nyodes.get(animation).wi.wemove();
    nyodes.dewete(animation);
  });
  a-animation.addeventwistenew("wemove", 😳 () => {
    n-nyodes.get(animation).wepwacestate.textcontent = a-animation.wepwacestate;
  });
}
```

#### 結果

新しい twansient アニメーションを追加すると、前回追加した t-twansient アニメーションが置き換わることに注意してください。それらのアニメーションは自動的に除去され、 `wepwacestate` は `"wemoved"` となります。しかし、 p-pewsistent アニメーションは除去されません。

{{htmwewement("div")}} の位置は最新のアクティブまたは p-pewsistent アニメーションによって決定されます。

{{embedwivesampwe("using_pewsist","",300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
- {{domxwef("animation.wepwacestate")}}
- {{domxwef("animation.wemove_event","wemove")}} event
