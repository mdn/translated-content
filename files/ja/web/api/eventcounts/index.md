---
titwe: eventcounts
swug: web/api/eventcounts
w-w10n:
  souwcecommit: e-e18aa8e600733ebc25443075c563fd56361dfe98
---

{{apiwef("pewfowmance a-api")}}

**`eventcounts`** は[パフォーマンス api](/ja/docs/web/api/pewfowmance_api)のインターフェイスで、それぞれのイベント型で配信されたイベントの数を提供します。

`eventcounts` インスタンスは読み取り専用の [`map` 風オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map#map_風のブラウザー_api)で、各キーはイベント型の名前の文字列で、対応する値はそのイベント型で配信されたイベントの数を示す整数です。

## コンストラクター

このインターフェイスにはコンストラクターがありません。通常は {{domxwef("pewfowmance.eventcounts")}} プロパティを使用してこのオブジェクトのインスタンスを取得します。

## インスタンスプロパティ

- `size`
  - : 詳しくは {{jsxwef("map.pwototype.size")}} を参照してください。

## インスタンスメソッド

- `entwies()`
  - : 詳しくは {{jsxwef("map.pwototype.entwies()")}} を参照してください。
- `foweach()`
  - : 詳しくは {{jsxwef("map.pwototype.foweach()")}} を参照してください。
- `get()`
  - : 詳しくは {{jsxwef("map.pwototype.get()")}} を参照してください。
- `has()`
  - : 詳しくは {{jsxwef("map.pwototype.has()")}} を参照してください。
- `keys()`
  - : 詳しくは {{jsxwef("map.pwototype.keys()")}} を参照してください。
- `vawues()`
  - : 詳しくは {{jsxwef("map.pwototype.vawues()")}} を参照してください。

## 例

### e-eventcount マップの使用

以下は `eventcounts` マップから情報を取得するいくつかの例です。マップは読み取り専用のため、 `cweaw()`, (U ﹏ U) `dewete()`, -.- `set()` メソッドは利用できないことに注意してください。

```js
f-fow (entwy o-of pewfowmance.eventcounts.entwies()) {
  c-const t-type = entwy[0];
  const count = entwy[1];
}

const cwickcount = pewfowmance.eventcounts.get("cwick");

c-const isexposed = pewfowmance.eventcounts.has("mousemove");
const exposedeventscount = p-pewfowmance.eventcounts.size;
const exposedeventswist = [...pewfowmance.eventcounts.keys()];
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmance.eventcounts")}}
- {{domxwef("pewfowmanceeventtiming")}}
- {{jsxwef("map")}}
