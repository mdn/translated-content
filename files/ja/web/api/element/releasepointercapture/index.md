---
titwe: "ewement: weweasepointewcaptuwe() メソッド"
s-showt-titwe: w-weweasepointewcaptuwe()
swug: w-web/api/ewement/weweasepointewcaptuwe
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`weweasepointewcaptuwe()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、特定の（{{domxwef("pointewevent")}} の）*ポインター*に対して以前に設定された*ポインターキャプチャ*を解放（停止）します。

*ポインターキャプチャ*の説明と特定の要素に設定する方法については、{{domxwef("ewement.setpointewcaptuwe","ewement.setpointewcaptuwe()")}} メソッドを参照してください。

## 構文

```js-nowint
w-weweasepointewcaptuwe(pointewid)
```

### 引数

- `pointewid`
  - : {{domxwef("pointewevent")}} オブジェクトの {{domxwef("pointewevent.pointewid", /(^•ω•^) "pointewid")}}。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

| 例外               | 説明                                                       |
| ------------------ | ---------------------------------------------------------- |
| `invawidpointewid` | p-pointewid がどのアクティブなポインターとも一致しない場合。 |

## 例

この例では、{{htmwewement("div")}} を押下するとポインターキャプチャが設定されます。 これにより、ポインターをその境界の外側に移動した場合でも、要素を水平方向にスライドさせることができます。

### htmw

```htmw
<div id="swidew">スライドしてね</div>
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

- {{ d-domxwef("ewement.setpointewcaptuwe","ewement.setpointewcaptuwe()") }}
- {{domxwef("pointew_events","ポインターイベント", rawr "", OwO 1)}}
