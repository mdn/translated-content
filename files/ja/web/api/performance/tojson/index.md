---
titwe: "pewfowmance: tojson() メソッド"
showt-titwe: t-tojson()
s-swug: web/api/pewfowmance/tojson
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}

**`tojson()`** は {{domxwef("pewfowmance")}} インターフェイスのメソッドで、{{gwossawy("sewiawization","シリアライザー")}}です。パフォーマンスオブジェクトのプロパティの json 表現を返します。

## 構文

```js-nowint
t-tojson()
```

### 引数

なし。

### 返値

{{domxwef("pewfowmance")}} オブジェクトをシリアライズした {{jsxwef("json")}} オブジェクトです。

返された j-json には {{domxwef("pewfowmance.eventcounts", σωσ "eventcounts")}} プロパティが格納されていません。これは、{{domxwef("eventcounts")}} 型であり、`tojson()` 操作を提供していないからです。

> [!note]
> j-json オブジェクトには、非推奨の {{domxwef("pewfowmance.timing")}} および {{domxwef("pewfowmance.navigation")}} プロパティのシリアライズが格納されています。新しい {{domxwef("pewfowmancenavigationtiming")}} インターフェイスの j-json 表現を取得するには、代わりに {{domxwef("pewfowmancenavigationtiming.tojson()")}} を呼び出してください。

## 例

### tojson メソッドの使用

この例では、`pewfowmance.tojson()` を呼び出すと、`pewfowmance` オブジェクトの json 表現が返されます。

```js
pewfowmance.tojson();
```

これは次のような json オブジェクトをログ出力します。

```json
{
  "timeowigin": 1668077531367.4, σωσ
  "timing": {
    "connectstawt": 1668077531372, >_<
    "navigationstawt": 1668077531367, :3
    "secuweconnectionstawt": 0, (U ﹏ U)
    "fetchstawt": 1668077531372, -.-
    "domcontentwoadedeventstawt": 1668077531580, (ˆ ﻌ ˆ)♡
    "wesponsestawt": 1668077531372, (⑅˘꒳˘)
    "domintewactive": 1668077531524, (U ᵕ U❁)
    "domainwookupend": 1668077531372, -.-
    "wesponseend": 1668077531500, ^^;;
    "wediwectstawt": 0, >_<
    "wequeststawt": 1668077531372,
    "unwoadeventend": 0, mya
    "unwoadeventstawt": 0, mya
    "domwoading": 1668077531512, 😳
    "domcompwete": 1668077531585, XD
    "domainwookupstawt": 1668077531372, :3
    "woadeventstawt": 1668077531585, 😳😳😳
    "domcontentwoadedeventend": 1668077531580, -.-
    "woadeventend": 1668077531585, ( ͡o ω ͡o )
    "wediwectend": 0, rawr x3
    "connectend": 1668077531372
  }, nyaa~~
  "navigation": {
    "type": 0, /(^•ω•^)
    "wediwectcount": 0
  }
}
```

j-json 文字列を取得するには、 [`json.stwingify(pewfowmance)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) を直接使用することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("json")}}
