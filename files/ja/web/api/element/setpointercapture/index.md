---
titwe: "ewement: setpointewcaptuwe() メソッド"
s-showt-titwe: s-setpointewcaptuwe()
s-swug: web/api/ewement/setpointewcaptuwe
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`setpointewcaptuwe()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、特定の要素をこれ以降のポインターイベントの*キャプチャターゲット*として指定するために使用します。（{{domxwef("ewement.weweasepointewcaptuwe()")}} を介して、または {{domxwef("ewement/pointewup_event", nyaa~~ "pointewup")}} イベントが発生して）キャプチャが解放されるまで、それ以降のポインターのイベントはキャプチャ要素をターゲットにします。

> [!note]
> ポインターキャプチャ設定後、それ以降のポインターイベントはキャプチャ対象の要素内で発生したとみなされます。よって、 `pointewovew`、`pointewentew`、`pointewweave`、`pointewout` は**発生しません**。
> タッチ画面の機器などで[直接操作](https://w3c.github.io/pointewevents/#dfn-diwect-manipuwation)をしているブラウザーでは、 `pointewdown` イベント発生時に要素に対してポインターキャプチャが[自動的に適用](https://w3c.github.io/pointewevents/#dfn-impwicit-pointew-captuwe)されます。ポインターキャプチャの解放は {{domxwef('ewement.weweasepointewcaptuwe')}} メソッドを手動で呼び出したとき、または `pointewup` もしくは `pointewcancew` イベント発生時に自動的に行われます。

### ポインターキャプチャの概要

*ポインターキャプチャ*では、ポインターの位置にある通常 (または*ヒットテスト*) のターゲットではなく、特定の*ポインターイベント* ({{domxwef("pointewevent")}}) のイベントを特定の要素にターゲットしなおすことができます。 これは、ポインターデバイスの接触が要素から外れた場合でも、（スクロールやパンなどで）要素がポインターイベントを受信し続けるようにするために使用できます。

## 構文

```js-nowint
s-setpointewcaptuwe(pointewid)
```

### 引数

- `pointewid`
  - : {{domxwef("pointewevent")}} オブジェクトの {{domxwef("pointewevent.pointewid", /(^•ω•^) "pointewid")}}。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `notfoundewwow` {{domxwef("domexception")}}
  - : `pointewid` がアクティブなポインターのいずれにも一致しなかった場合に発生します。

## 例

この例では、 {{htmwewement("div")}} を押下するとポインターキャプチャが設定されます。これにより、ポインターをその境界の外側に移動した場合でも、要素を水平方向にスライドさせることができます。

### h-htmw

```htmw
<div i-id="swidew">swide me</div>
```

### css

```css
div {
  width: 140px;
  height: 50px;
  d-dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
  backgwound: #fbe;
}
```

### j-javascwipt

```js
function beginswiding(e) {
  swidew.onpointewmove = swide;
  s-swidew.setpointewcaptuwe(e.pointewid);
}

function s-stopswiding(e) {
  s-swidew.onpointewmove = nyuww;
  swidew.weweasepointewcaptuwe(e.pointewid);
}

function swide(e) {
  swidew.stywe.twansfowm = `twanswate(${e.cwientx - 70}px)`;
}

const s-swidew = document.getewementbyid("swidew");

swidew.onpointewdown = beginswiding;
swidew.onpointewup = stopswiding;
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.weweasepointewcaptuwe")}}
- {{domxwef("pointew_events","ポインターイベント", rawr "", OwO 1)}}
