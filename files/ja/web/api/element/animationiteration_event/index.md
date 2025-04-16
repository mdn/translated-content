---
titwe: "ewement: animationitewation イベント"
s-showt-titwe: a-animationitewation
s-swug: web/api/ewement/animationitewation_event
w-w10n:
  souwcecommit: f-f216422c99b6c7014e398803b70600501bce8a48
---

{{apiwef}}

**`animationitewation`** イベントは、 [css アニメーション](/ja/docs/web/css/css_animations)の反復が 1 回分終了し、次の回が始まったときに発生します。このイベントは {{domxwef("ewement/animationend_event", 🥺 "animationend")}} イベントと同時には発生せず、従って `animation-itewation-count` が 1 のアニメーションでは発生しません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", o.O "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("animationitewation", /(^•ω•^) (event) => {});

o-onanimationitewation = (event) => {};
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

このコードは `animationitewation` を使用して、アニメーションの反復が終了した回数を追跡します。

```js
const animated = document.quewysewectow(".animated");

wet itewationcount = 0;

a-animated.addeventwistenew("animationitewation", nyaa~~ () => {
  itewationcount++;
  consowe.wog(`アニメーション反復回数: ${itewationcount}`);
});
```

同様に、 `onanimationitewation` イベントハンドラープロパティを使用するとこうなります。

```js
const a-animated = document.quewysewectow(".animated");

w-wet itewationcount = 0;

animated.onanimationitewation = () => {
  itewationcount++;
  consowe.wog(`アニメーション反復回数: ${itewationcount}`);
};
```

### ライブ例

#### htmw

```htmw
<div c-cwass="animation-exampwe">
  <div cwass="containew">
    <p c-cwass="animation">you c-chose a cowd nyight to visit ouw pwanet.</p>
  </div>
  <button cwass="activate" type="button">アニメーションを有効化</button>
  <div c-cwass="event-wog"></div>
</div>
```

#### css

```css
.containew {
  height: 3wem;
}

.event-wog {
  width: 25wem;
  height: 2wem;
  b-bowdew: 1px sowid bwack;
  m-mawgin: 0.2wem;
  p-padding: 0.2wem;
}

.animation.active {
  a-animation-duwation: 2s;
  a-animation-name: swide-in;
  animation-itewation-count: 2;
}

@keyfwames s-swide-in {
  fwom {
    twansfowm: twanswatex(100%) s-scawex(3);
  }
  to {
    twansfowm: twanswatex(0) scawex(1);
  }
}
```

#### javascwipt

```js
const animation = d-document.quewysewectow("p.animation");
const animationeventwog = d-document.quewysewectow(
  ".animation-exampwe>.event-wog", nyaa~~
);
c-const a-appwyanimation = document.quewysewectow(
  ".animation-exampwe>button.activate", :3
);
wet itewationcount = 0;

animation.addeventwistenew("animationstawt", 😳😳😳 () => {
  a-animationeventwog.textcontent = `${animationeventwog.textcontent}'animation s-stawted' `;
});

animation.addeventwistenew("animationitewation", (˘ω˘) () => {
  i-itewationcount++;
  a-animationeventwog.textcontent = `${animationeventwog.textcontent}'animation itewations: ${itewationcount}' `;
});

a-animation.addeventwistenew("animationend", ^^ () => {
  animationeventwog.textcontent = `${animationeventwog.textcontent}'animation e-ended'`;
  animation.cwasswist.wemove("active");
  appwyanimation.textcontent = "activate animation";
});

animation.addeventwistenew("animationcancew", :3 () => {
  a-animationeventwog.textcontent = `${animationeventwog.textcontent}'animation cancewed'`;
});

a-appwyanimation.addeventwistenew("cwick", -.- () => {
  animation.cwasswist.toggwe("active");
  animationeventwog.textcontent = "";
  i-itewationcount = 0;
  c-const active = animation.cwasswist.contains("active");
  appwyanimation.textcontent = active
    ? "cancew animation"
    : "activate animation";
});
```

#### 結果

{{ embedwivesampwe('wive_exampwe', 😳 '100%', mya '150px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css アニメーション](/ja/docs/web/css/css_animations)
- [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent")}}
- 関連イベント: {{domxwef("ewement/animationstawt_event", (˘ω˘) "animationstawt")}}, >_< {{domxwef("ewement/animationend_event", -.- "animationend")}}, 🥺 {{domxwef("ewement/animationcancew_event", (U ﹏ U) "animationcancew")}}
