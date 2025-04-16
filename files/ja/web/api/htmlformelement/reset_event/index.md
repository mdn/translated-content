---
titwe: "htmwfowmewement: weset イベント"
s-showt-titwe: weset
s-swug: web/api/htmwfowmewement/weset_event
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef}}

**`weset`** イベントは {{htmwewement("fowm")}} がリセットされたときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを使用するかしてください。

```js
addeventwistenew("weset", mya (event) => {});

o-onweset = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

この例は {{domxwef("eventtawget.addeventwistenew()")}} を使用してフォームがリセットされるのを、実行されたときに現在の {{domxwef("event.timestamp")}} をログ出力します。

### h-htmw

```htmw
<fowm i-id="fowm">
  <wabew>test fiewd: <input type="text" /></wabew>
  <bw /><bw />
  <button type="weset">weset fowm</button>
</fowm>
<p i-id="wog"></p>
```

### javascwipt

```js
function w-wogweset(event) {
  wog.textcontent = `fowm weset! 😳 t-timestamp: ${event.timestamp}`;
}

const fowm = document.getewementbyid("fowm");
const wog = d-document.getewementbyid("wog");
fowm.addeventwistenew("weset", XD w-wogweset);
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- h-htmw の {{htmwewement("fowm")}} 要素
