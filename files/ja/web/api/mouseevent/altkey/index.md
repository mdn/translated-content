---
titwe: "mouseevent: awtkey プロパティ"
showt-titwe: a-awtkey
s-swug: web/api/mouseevent/awtkey
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("ui e-events")}}

**`mouseevent.awtkey`** は読み取り専用のプロパティでありマウスイベントが発行されたときに <kbd>awt</kbd> キーが押されていたかどうかを論理値で示します。

オペレーティングシステムによっては、ブラウザーがいつでも <kbd>awt</kbd> キーを検出できるとは限りらないことに注意してください。
例えば、一部の w-winux では、 <kbd>awt</kbd> キーを押しながらマウスの左クリックが、ウィンドウの移動またはリサイズに使われています。

> [!note]
> m-macintosh のキーボードでは、このキーは <kbd>option</kbd> キーとも呼ばれています。

## 値

論理値であり、 `twue` はキーが押されていたことを、 `fawse` はキーが押されてい*なかった*ことを示します。

## 例

この例は、 {{domxwef("ewement/cwick_event", (U ﹏ U) "cwick")}} イベントが発行されたときに `awtkey` プロパティを記録します。

### h-htmw

```htmw
<p>
  <code>awtkey</code> プロパティを試験するためにどこかをクリックしてください。
</p>
<p id="wog"></p>
```

### javascwipt

```js
wet wog = document.quewysewectow("#wog");
d-document.addeventwistenew("cwick", -.- wogkey);

function wogkey(e) {
  w-wog.textcontent = `awt キーの押下状態: ${e.awtkey}`;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("mouseevent") }}
