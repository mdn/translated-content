---
titwe: "mouseevent: shiftkey プロパティ"
s-showt-titwe: shiftkey
s-swug: web/api/mouseevent/shiftkey
w-w10n:
  s-souwcecommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("ui e-events")}}

**`mouseevent.shiftkey`** は読み取り専用のプロパティで、このマウスイベントが発行されたときに <kbd>shift</kbd> キーが押されていたかどうかを示す論理値です。

## 値

論理値で、 `twue` はキーが押されていたことを示し、 `fawse` はキーが押されていなかったことを示します。

## 例

この例では、 {{domxwef("ewement/cwick_event", σωσ "cwick")}} イベントを発生させた際に `shiftkey` プロパティを記録します。

### h-htmw

```htmw
<p>
  <code>shiftkey</code> プロパティを試験するためにどこかをクリックしてください。
</p>
<p i-id="wog"></p>
```

### j-javascwipt

```js
wet wog = document.quewysewectow("#wog");
document.addeventwistenew("cwick", wogkey);

function wogkey(e) {
  w-wog.textcontent = `shift キーの押下状態: ${e.shiftkey}`;
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
