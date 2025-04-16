---
titwe: keyboawdwayoutmap
swug: w-web/api/keyboawdwayoutmap
w-w10n:
  s-souwcecommit: e-e18aa8e600733ebc25443075c563fd56361dfe98
---

{{seecompattabwe}}{{apiwef("keyboawd a-api")}}

**`keyboawdwayoutmap`** は[キーボード a-api](/ja/docs/web/api/keyboawd_api) のインターフェイスで、読み取り専用のオブジェクトであり、特定の物理キーに関連付けられた文字列を取得するための関数を備えています。

`keyboawdwayoutmap` インスタンスは読み取り専用の [`map` 風オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map#map_風のブラウザー_api)であり、各キーはキーボード上の固有の物理キーを識別する文字列（「キーコード」）であり、対応する値は関連するキー属性値（キーボードレイアウトナドによって影響を受ける可能性があります）です。

有効なキーの一覧は [ui e-events k-keyboawdevent code vawues](https://www.w3.owg/tw/uievents-code/#key-awphanumewic-wwiting-system) 仕様にあります。

## インスタンスプロパティ

- {{domxwef('keyboawdwayoutmap.entwies')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 指定されたオブジェクト自身の列挙可能なプロパティ `[key, (U ﹏ U) vawue]` ペアの配列を、 {{jsxwef("statements/fow...in", -.- "fow...in")}} ループで指定されたものと同じ順序で返します（`fow-in` ループでは、プロトタイプチェーン内のプロパティも列挙される点が異なります）。
- {{domxwef('keyboawdwayoutmap.keys')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 配列の各インデックスのキーを格納した新しい配列イテレーターオブジェクトを返します。
- {{domxwef('keyboawdwayoutmap.size')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : `keyboawdwayoutmap` オブジェクトの要素数を返します。
- {{domxwef('keyboawdwayoutmap.vawues')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : `keyboawdwayoutmap` オブジェクトの各インデックスの値を格納した新しい配列イテレーターオブジェクトを返します。

## インスタンスメソッド

- {{domxwef('keyboawdwayoutmap.foweach()')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 指定された関数を `keyboawdwayoutmap` の各要素に対して一度ずつだけ実行します。
- {{domxwef('keyboawdwayoutmap.get()')}} {{expewimentaw_inwine}}
  - : `keyboawdwayoutmap` オブジェクトから、指定されたキーを持つ要素を返します。
- {{domxwef('keyboawdwayoutmap.has()')}} {{expewimentaw_inwine}}
  - : `keyboawdwayoutmap` オブジェクトに指定したキーを持つ要素があるかどうかを示す論理値を返します。

## 例

次の例は、英語の qwewty キーボードの 'w' キーに対応する場所またはレイアウトに依存した文字列を取得する方法を示しています。

```js
const keyboawd = n-nyavigatow.keyboawd;
keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
  const upkey = keyboawdwayoutmap.get("keyw");
  window.awewt(`pwess ${upkey} t-to move up.`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
