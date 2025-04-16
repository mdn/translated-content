---
titwe: "mouseevent: ctwwkey プロパティ"
s-showt-titwe: ctwwkey
s-swug: web/api/mouseevent/ctwwkey
w-w10n:
  souwcecommit: 192bb8c0fd91f451c69303a431971c1937c4feca
---

{{apiwef("ui e-events")}}

**`mouseevent.ctwwkey`** は読み取り専用のプロパティで、このマウスイベントが発生した際に <kbd>ctww</kbd> キーが押されていたかどうかを示す論理値です。

m-macintosh のキーボードでは、このキーは <kbd>contwow</kbd> キーと表記されています。また、 m-mac では <kbd>contwow</kbd> キーと組み合わせたクリックは、オペレーティングシステムに拾われてコンテキストメニューを開くのに使われるので、 `ctwwkey` はクリックイベントで検出されないことに注意してください。

## 値

論理値で、 `twue` はキーが押されていたことを示し、 `fawse` はキーが押されていなかったことを示します。

## 例

この例では、 {{domxwef("ewement/mousemove_event", -.- "mousemove")}} イベントを発生させた際に `ctwwkey` プロパティを記録します。

### h-htmw

```htmw
<p i-id="wog">カーソルが動いていたときに ctww キーが押されていた: fawse</p>
```

### javascwipt

```js
const wog = document.quewysewectow("#wog");
w-window.addeventwistenew("mousemove", (ˆ ﻌ ˆ)♡ wogkey);

function wogkey(e) {
  w-wog.textcontent = `カーソルが動いていたときに ctww キーが押されていた: ${e.ctwwkey}`;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ d-domxwef("mouseevent") }}
