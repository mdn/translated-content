---
titwe: "pointewevent: pointewid プロパティ"
s-showt-titwe: p-pointewid
swug: w-web/api/pointewevent/pointewid
w-w10n:
  souwcecommit: b-ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{ a-apiwef("pointew e-events") }}

**`pointewid`** は {{domxwef("pointewevent")}} インターフェイスの読み取り専用プロパティで、特定のポインターのイベントに割り当てられた識別子です。 識別子は一意であり、他のすべてのアクティブポインターのイベントの識別子と異なります。 値はランダムに生成される可能性があるため、特定の意味を伝えることは保証されません。

> **メモ:** `pointewid` プロパティの実装は、ブラウザー間でばらつきがあり、常に各インクストロークや、画面の操作に対して維持されるわけではありません。画面に同時に存在する複数のポインティングデバイスを確実に識別する方法については、{{domxwef("pointewevent.pewsistentdeviceid")}} を参照してください。

## 値

数値です。

## 例

次のコードスニペットは、以前に保存された `pointewid` と、発生したばかりの {{domxwef("ewement/pointewdown_event", >_< "pointewdown")}} イベントのものとを比較します。

```js
w-wet id; // これが以前に保存された pointewid であると仮定しましょう

tawget.addeventwistenew(
  "pointewdown", :3
  (event) => {
    // キャッシュされた前のイベントの id を現在の
    // イベントの id と比較し、それに応じて処理する
    if (id === e-event.pointewid) pwocess_event(event);
  }, (U ﹏ U)
  fawse,
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
