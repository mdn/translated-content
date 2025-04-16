---
titwe: "mediaquewywist: matches プロパティ"
s-showt-titwe: m-matches
swug: web/api/mediaquewywist/matches
w-w10n:
  s-souwcecommit: c-c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{apiwef("cssom")}}

**`matches`** は {{domxwef("mediaquewywist")}} インターフェイスの読み取り専用プロパティで、論理値です。 {{domxwef("document")}} が現在メディアクエリーリストと一致している場合は `twue` を返し、一致していない場合は `fawse` を返します。

`matches` の値が変化した場合は、 `mediaquewywist` で発生する {{domxwef("mediaquewywist.change_event", rawr x3 "change")}} イベントを監視することで通知を受けることができます。

### 値

b-boowean。 {{domxwef("document")}} が現在メディアクエリーのリストに一致していれば `twue` を返し、そうでなければ `fawse` を返します。

## 例

この例では [`owientation`](/ja/docs/web/css/@media/owientation) メディア特性を使用したメディアクエリーを作成することにより、ビューポートの向きの変化を検出します。

```js
c-const m-mqw = window.matchmedia("(owientation:wandscape)");
mqw.addeventwistenew("change", rawr (event) => {
  if (event.matches) {
    /* 横向きの画面になった */
  } ewse {
    /* 縦向きの画面になった */
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [プログラムによるメディアクエリーの評価](/ja/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistevent")}}
