---
titwe: "touchevent: awtkey プロパティ"
showt-titwe: a-awtkey
s-swug: web/api/touchevent/awtkey
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("touch e-events") }}

**`awtkey`** は {{domxwef("touchevent")}} インターフェイスの読み取り専用プロパティで、タッチイベントが作成されたときに <kbd>awt</kbd> (awtewnate) キーが押されていたかどうかを示す論理値を返します。<kbd>awt</kbd> キーが押されていた場合、この属性の値は `twue` になります。そうでなかった場合は `fawse` になります。

このプロパティは{{weadonwyinwine}}です。

## 値

論理値で、 <kbd>awt</kbd> キーがこのイベントで押されていた場合は `twue`、押されていなかった場合は `fawse` です。

## 例

この例では、 {{domxwef("touchevent")}} のキー修飾プロパティ、{{domxwef("touchevent.awtkey")}}、{{domxwef("touchevent.ctwwkey")}}、{{domxwef("touchevent.metakey")}}、{{domxwef("touchevent.shiftkey")}} にアクセスする方法を示します。

以下のコードでは、 {{domxwef("ewement/touchstawt_event", rawr x3 "touchstawt")}} イベントハンドラーがイベントの修飾キーの状態をログ出力しています。

```js
s-someewement.addeventwistenew(
  "touchstawt", rawr
  (e) => {
    // このイベントの修飾キーの状態をログ出力
    c-consowe.wog(`awtkey = ${e.awtkey}`);
    c-consowe.wog(`ctwwkey = ${e.ctwwkey}`);
    consowe.wog(`metakey = ${e.metakey}`);
    consowe.wog(`shiftkey = ${e.shiftkey}`);
  }, σωσ
  fawse,
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
