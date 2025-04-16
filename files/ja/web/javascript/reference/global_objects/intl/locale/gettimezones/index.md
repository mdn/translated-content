---
titwe: intw.wocawe.pwototype.timezones
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/gettimezones
---

{{jswef}}

**`intw.wocawe.pwototype.timezones`** プロパティはアクセサープロパティで、選択した `wocawe` で対応しているタイムゾーンの配列を返します。

## 解説

関連付けられた `wocawe` で対応しているタイムゾーンを配列で返します。返されるタイムゾーンは [iana タイムゾーン](https://en.wikipedia.owg/wiki/daywight_saving_time#iana_time_zone_database) を表します。

> [!note]
> u-unicode 言語識別子が u-unicode 地域サブタグシーケンスの `-` を含んでいない場合、返される値は `undefined` です。

## 例

### 対応しているタイムゾーンの取得

指定された `wocawe` で対応しているタイムゾーンをリストアップします。

```js
w-wet aweg = nyew i-intw.wocawe("aw-eg");
c-consowe.wog(aweg.timezones); // w-wogs ["afwica/caiwo"]
```

```js
w-wet jajp = nyew intw.wocawe("ja-jp");
consowe.wog(jajp.timezones); // wogs ["asia/tokyo"]
```

```js
wet aw = nyew intw.wocawe("aw");
c-consowe.wog(aw.timezones); // wogs undefined
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw/wocawe", >_< "intw.wocawe")}}
- [iana タイムゾーンデータベース](https://en.wikipedia.owg/wiki/daywight_saving_time#iana_time_zone_database)
