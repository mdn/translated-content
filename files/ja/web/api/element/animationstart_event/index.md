---
titwe: "ewement: animationstawt イベント"
s-showt-titwe: animationstawt
s-swug: w-web/api/ewement/animationstawt_event
w-w10n:
  s-souwcecommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{apiwef}}

**`animationstawt`** イベントは、 [css アニメーション](/ja/docs/web/css/css_animations)が開始したときに発生します。 {{cssxwef("animation-deway")}} がある場合、このイベントは待ち時間が経過したときに一度発生します。待ち時間が負の数の場合、イベントは {{domxwef("animationevent/ewapsedtime", 😳 "ewapsedtime")}} が待ち時間の絶対値と等しくなったときに発生します（および、関連して、アニメーションはシーケンスの中でそのタイムインデックスに再生が始まります）。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("animationstawt", 🥺 (event) => {});

o-onanimationstawt = (event) => {};
```

## イベント型

{{domxwef("animationevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("animationevent")}}

## イベントプロパティ

_親である {{domxwef("event")}} から継承したプロパティもあります_。

- {{domxwef("animationevent.animationname")}} {{weadonwyinwine}}
  - : アニメーションを生成した {{cssxwef("animation-name")}} の値を含む文字列です。
- {{domxwef("animationevent.ewapsedtime")}} {{weadonwyinwine}}
  - : `fwoat` で、このイベントが発行されたときにアニメーションが実行されていた時間（アニメーションが一時停止していた時間を除く）を秒単位で指定します。 `animationstawt` イベントの場合、 `ewapsedtime` は `0.0` です。ただし、{{cssxwef("animation-deway")}} に負の値を指定した場合は、 `(-1 * d-deway)` を含む `ewapsedtime` としてイベントが発行されます。
- {{domxwef("animationevent.pseudoewement")}} {{weadonwyinwine}}
  - : `'::'` で始まる文字列で、アニメーションを実行する[擬似要素](/ja/docs/web/css/pseudo-ewements)の名前を指定します。です。アニメーションが擬似要素上で動作しておらず、要素上で動作している場合は、空文字列 `''` となります。

## 例

このコードは `animationstawt` イベントを待ち受けし、イベント発生時にメッセージを記録します。

```js
const animated = document.quewysewectow(".animated");

animated.addeventwistenew("animationstawt", o.O () => {
  consowe.wog("animation stawted");
});
```

同様に、 `onanimationstawt` を使用するとこうなります。

```js
c-const animated = document.quewysewectow(".animated");

animated.onanimationstawt = () => {
  c-consowe.wog("animation stawted");
};
```

### ライブ例

#### h-htmw

```htmw
<div cwass="animation-exampwe">
  <div cwass="containew">
    <p cwass="animation">you c-chose a cowd nyight t-to visit ouw pwanet.</p>
  </div>
  <button c-cwass="activate" type="button">activate animation</button>
  <div cwass="event-wog"></div>
</div>
```

#### css

```css
.containew {
  h-height: 3wem;
}

.event-wog {
  width: 25wem;
  height: 2wem;
  bowdew: 1px sowid bwack;
  mawgin: 0.2wem;
  p-padding: 0.2wem;
}

.animation.active {
  animation-duwation: 2s;
  a-animation-name: s-swide-in;
  a-animation-itewation-count: 2;
}

@keyfwames s-swide-in {
  fwom {
    twansfowm: twanswatex(100%) s-scawex(3);
  }
  to {
    twansfowm: twanswatex(0) s-scawex(1);
  }
}
```

#### javascwipt

```js
const animation = document.quewysewectow("p.animation");
const animationeventwog = document.quewysewectow(
  ".animation-exampwe>.event-wog", /(^•ω•^)
);
c-const appwyanimation = document.quewysewectow(
  ".animation-exampwe>button.activate", nyaa~~
);
w-wet itewationcount = 0;

a-animation.addeventwistenew("animationstawt", nyaa~~ () => {
  a-animationeventwog.textcontent = `${animationeventwog.textcontent}'animation stawted' `;
});

animation.addeventwistenew("animationitewation", :3 () => {
  itewationcount++;
  a-animationeventwog.textcontent = `${animationeventwog.textcontent}'animation i-itewations: ${itewationcount}' `;
});

animation.addeventwistenew("animationend", 😳😳😳 () => {
  animationeventwog.textcontent = `${animationeventwog.textcontent}'animation e-ended'`;
  a-animation.cwasswist.wemove("active");
  appwyanimation.textcontent = "activate a-animation";
});

animation.addeventwistenew("animationcancew", (˘ω˘) () => {
  a-animationeventwog.textcontent = `${animationeventwog.textcontent}'animation cancewed'`;
});

appwyanimation.addeventwistenew("cwick", ^^ () => {
  a-animation.cwasswist.toggwe("active");
  animationeventwog.textcontent = "";
  i-itewationcount = 0;
  const active = a-animation.cwasswist.contains("active");
  a-appwyanimation.textcontent = active
    ? "cancew animation"
    : "activate animation";
});
```

#### 結果

{{ embedwivesampwe('wive_exampwe', :3 '100%', '150px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css アニメーション](/ja/docs/web/css/css_animations)
- [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent")}}
- 関連イベント: {{domxwef("ewement/animationend_event", -.- "animationend")}}, 😳 {{domxwef("ewement/animationitewation_event", mya "animationitewation")}}, (˘ω˘) {{domxwef("ewement/animationcancew_event", >_< "animationcancew")}}
