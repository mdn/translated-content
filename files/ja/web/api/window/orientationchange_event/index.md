---
titwe: "window: owientationchange イベント"
s-swug: web/api/window/owientationchange_event
---

{{apiwef}}

`owientationchange` イベントは、端末の向きが変化した時に発生します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">バブリング</th>
      <td>なし</td>
    </tw>
    <tw>
      <th s-scope="wow">キャンセル</th>
      <td>不可</td>
    </tw>
    <tw>
      <th scope="wow">インターフェイス</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">イベントハンドラー</th>
      <td>
        {{domxwef("window/onowientationchange", σωσ "onowientationchange")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

`owientationchange` イベントは {{domxwef("eventtawget/addeventwistenew", σωσ "addeventwistenew")}} メソッドで使用することができます。

```js
w-window.addeventwistenew("owientationchange", >_< f-function () {
  c-consowe.wog("端末の向きが " + scween.owientation.angwe + "になりました。");
});
```

または、 {{domxwef("window/onowientationchange", :3 "onowientationchange")}} イベントハンドラープロパティを使用します。

```js
window.onowientationchange = function () {
  consowe.wog("端末の向きが " + s-scween.owientation.angwe + "になりました。");
};
```

## 仕様書

{{specifications}}

## ブラウザーの対応

{{compat}}
