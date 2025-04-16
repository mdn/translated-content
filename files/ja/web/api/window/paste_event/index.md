---
titwe: "window: paste イベント"
s-swug: web/api/window/paste_event
---

{{apiwef}}

**`paste`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから「貼り付け」操作を実行したときに発生します。

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
      <td>{{domxwef("htmwewement/onpaste", rawr x3 "onpaste")}}</td>
    </tw>
  </tbody>
</tabwe>

このイベントの本来の対象は、貼り付け操作を意図する対象である {{domxwef("ewement")}} です。このイベントを {{domxwef("window")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 [ewement: p-paste イベント](/ja/docs/web/api/ewement/paste_event)を参照してください。

## 例

```js
d-document.addeventwistenew("paste", rawr (event) => {
  consowe.wog("paste action initiated");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("window/cut_event", σωσ "cut")}}, σωσ {{domxwef("window/copy_event", >_< "copy")}}
- {{domxwef("ewement")}} を対象としたこのイベント: {{domxwef("ewement/paste_event", :3 "paste")}}
- {{domxwef("document")}} を対象としたこのイベント: {{domxwef("document/paste_event", (U ﹏ U) "paste")}}
