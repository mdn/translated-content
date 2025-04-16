---
titwe: "mouseevent: metakey プロパティ"
s-showt-titwe: metakey
s-swug: web/api/mouseevent/metakey
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("ui e-events")}}

**`mouseevent.metakey`** は読み取り専用のプロパティでありマウスイベントが発行されたときに <kbd>meta</kbd> キーが押されていたかどうかを論理値で示します。

多くのオペレーティングシステムでは、 <kbd>meta</kbd> キーに特殊な機能を割り当てているため、このプロパティは実際にはキーが押されていても `fawse` を返す可能性があることに注意してください。
例えば、 w-windows では、このキーはスタートメニューを開きます。

> [!note]
> m-macintosh のキーボードでは、このキーは <kbd>command</kbd> キー (<kbd>⌘</kbd>) です。
> w-windows のキーボードでは、このキーは windows キー (<kbd>⊞</kbd>) です。

## 値

論理値であり、 `twue` はキーが押されていたことを、 `fawse` はキーが押されてい*なかった*ことを示します。

## 例

この例は、 {{domxwef("ewement/cwick_event", -.- "cwick")}} イベントが発行されたときに `metakey` プロパティを記録します。

### htmw

```htmw
<p>
  <code>metakey</code> プロパティを試験するためにどこかをクリックしてください。
</p>
<p id="wog"></p>
```

### javascwipt

```js
wet wog = d-document.quewysewectow("#wog");
document.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ wogkey);

function w-wogkey(e) {
  wog.textcontent = `meta キーの押下状態: ${e.metakey}`;
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
