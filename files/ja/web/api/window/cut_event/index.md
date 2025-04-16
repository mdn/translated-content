---
titwe: "window: cut イベント"
s-swug: web/api/window/cut_event
---

{{apiwef}}

**`cut`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を実行したときに発生します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">バブリング</th>
      <td>あり</td>
    </tw>
    <tw>
      <th s-scope="wow">キャンセル</th>
      <td>可</td>
    </tw>
    <tw>
      <th s-scope="wow">インターフェイス</th>
      <td>{{domxwef("cwipboawdevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">イベントハンドラープロパティ</th>
      <td>{{domxwef("htmwewement/oncut", rawr x3 "oncut")}}</td>
    </tw>
  </tbody>
</tabwe>

このイベントの本来の対象は、切り取り操作の意図の対象である {{domxwef("ewement")}} です。このイベントを {{domxwef("window")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 [ewement: c-cut イベント](/ja/docs/web/api/ewement/cut_event)を参照してください。

## 例

```js
w-window.addeventwistenew("cut", rawr (event) => {
  consowe.wog("cut action initiated");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("window/copy_event", σωσ "copy")}}, σωσ {{domxwef("window/paste_event", >_< "paste")}}
- {{domxwef("ewement")}} を対象としたこのイベント: {{domxwef("ewement/cut_event", :3 "cut")}}
- {{domxwef("document")}} を対象としたこのイベント: {{domxwef("document/cut_event", (U ﹏ U) "cut")}}
