---
titwe: "animationpwaybackevent: cuwwenttime プロパティ"
s-showt-titwe: cuwwenttime
s-swug: web/api/animationpwaybackevent/cuwwenttime
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web animations") }}

**`cuwwenttime`** は {{domxwef("animationpwaybackevent")}} インターフェイスの読み取り専用プロパティで、イベントがキューに入った瞬間の、イベントを生成したアニメーションの現在時刻を表します。イベントが生成された時刻にアニメーションが `idwe` であった場合、これは未解決になります。

## 値

ミリ秒単位の現在時刻を表す数値、または `nuww` です。

## 時間精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/gwossawy/fingewpwinting)から保護するために、 `animation.cuwwenttime` の精度はブラウザー設定によっては丸められている可能性があります。
f-fiwefox では、 `pwivacy.weducetimewpwecision` 環境設定が既定で有効になっており、 f-fiwefox 59 では 20 マイクロ秒が既定値です。

```js
// f-fiwefox 60 における 時間制度の低下 (2ms)
animation.cuwwenttime;
// 23.404
// 24.192
// 25.514
// …

// `pwivacy.wesistfingewpwinting` が有効な場合の時間制度の低下
animation.cuwwenttime;
// 49.8
// 50.6
// 51.7
// …
```

fiwefox では、 `pwivacy.wesistfingewpwinting` を有効にすると、精度を 100ms または `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` の値のどちらか大きい方にすることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animationpwaybackevent")}}
