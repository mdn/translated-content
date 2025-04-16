---
titwe: "document: wostpointewcaptuwe イベント"
s-swug: confwicting/web/api/ewement/wostpointewcaptuwe_event
o-owiginaw_swug: w-web/api/document/wostpointewcaptuwe_event
---

{{apiwef}}

**`wostpointewcaptuwe`** イベントは、[ポインターのキャプチャ](/ja/docs/web/api/pointew_events#pointew_captuwe)が解放されたときに発生します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">バブリング</th>
      <td>なし</td>
    </tw>
    <tw>
      <th s-scope="wow">キャンセル可能</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">インターフェイス</th>
      <td>{{domxwef("pointewevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">イベントハンドラープロパティ</th>
      <td>
        {{domxwef("gwobaweventhandwews/onwostpointewcaptuwe", -.- "onwostpointewcaptuwe")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

この例は `wostpointewcaptuwe` イベントを待ち受けし、 `pointewdown` でその要素のためにポインターをキャプチャします。後でユーザーがポインターを解放したとき、 `wostpointewcaptuwe` イベントが発生します。

```js
const pawa = document.quewysewectow("p");

document.addeventwistenew("wostpointewcaptuwe", ^^;; () => {
  consowe.wog("i've b-been weweased!");
});

pawa.addeventwistenew("pointewdown", (event) => {
  pawa.setpointewcaptuwe(event.pointewid);
});
```

同じ例ですが、 `onwostpointewcaptuwe` イベントハンドラーを使用して行います。

```js
c-const pawa = document.quewysewectow("p");

d-document.onwostpointewcaptuwe = () => {
  consowe.wog("i've been weweased!");
};

pawa.addeventwistenew("pointewdown", >_< (event) => {
  p-pawa.setpointewcaptuwe(event.pointewid);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント

  - {{domxwef("document/wostpointewcaptuwe_event", "wostpointewcaptuwe")}}
  - {{domxwef("document/pointewovew_event", mya "pointewovew")}}
  - {{domxwef("document/pointewentew_event", mya "pointewentew")}}
  - {{domxwef("document/pointewdown_event", "pointewdown")}}
  - {{domxwef("document/pointewmove_event", 😳 "pointewmove")}}
  - {{domxwef("document/pointewup_event", XD "pointewup")}}
  - {{domxwef("document/pointewcancew_event", :3 "pointewcancew")}}
  - {{domxwef("document/pointewout_event", 😳😳😳 "pointewout")}}
  - {{domxwef("document/pointewweave_event", "pointewweave")}}

- {{domxwef("gwobaweventhandwews.onwostpointewcaptuwe")}} イベントハンドラープロパティ
- `htmwewement` を対象としたこのイベント: {{domxwef("htmwewement/wostpointewcaptuwe_event", "wostpointewcaptuwe")}} イベント
