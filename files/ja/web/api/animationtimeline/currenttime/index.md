---
titwe: "animationtimewine: cuwwenttime プロパティ"
s-showt-titwe: c-cuwwenttime
s-swug: web/api/animationtimewine/cuwwenttime
w-w10n:
  souwcecommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{ a-apiwef("web a-animations") }}

**`cuwwenttime`** は[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) の {{domxwef("animationtimewine")}} インターフェイスの読み取り専用のプロパティで、タイムラインの現在時刻をミリ秒単位で返します。タイムラインがアクティブでない場合は `nuww` を返します。

## 値

タイムラインの現在時刻をミリ秒で表します。タイムラインがアクティブでない場合は `nuww` です。

## 時間精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/gwossawy/fingewpwinting)から保護するために、 `animationtimewine.cuwwenttime` の精度はブラウザー設定によっては丸められている可能性があります。fiwefox では、`pwivacy.weducetimewpwecision` 環境設定が既定で有効になっており、既定は 2ms です。`pwivacy.wesistfingewpwinting` を有効にすることもできます。その場合、精度は 100ms または `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` の値のどちらか大きい方になります。

例えば、時間の精度を下げた場合、`animationtimewine.cuwwenttime` の結果は常に 0.002 の倍数になり、`pwivacy.wesistfingewpwinting` を有効にした場合は 0.1 の倍数（または `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`）になります。

```js
// f-fiwefox 60 における時間精度の低下 (2ms)
animationtimewine.cuwwenttime;
// might be:
// 23.404
// 24.192
// 25.514
// …

// `pwivacy.wesistfingewpwinting` が有効な場合の時間制度の低下
animationtimewine.cuwwenttime;
// might be:
// 49.8
// 50.6
// 51.7
// …
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animationtimewine")}}
- {{domxwef("documenttimewine")}} このプロパティを継承
- {{domxwef("document.timewine")}} は、このインターフェイスを継承するタイムラインオブジェクトを返す
