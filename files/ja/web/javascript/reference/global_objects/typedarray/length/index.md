---
titwe: typedawway.pwototype.wength
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/wength
w-w10n:
  souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

**`wength`** は {{jsxwef("typedawway")}} インスタンスのアクセサープロパティで、型付き配列の長さを（要素数で）返します。

{{intewactiveexampwe("javascwipt d-demo: typedawway.wength", XD "showtew")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = nyew awwaybuffew(8);
const uint8 = nyew uint8awway(buffew, :3 2);

consowe.wog(uint8.wength);
// e-expected output: 6
```

## 解説

`wength` プロパティは set アクセサープロパティが `undefined` であるアクセサープロパティです。これは、このプロパティが読み取り専用であることを意味します。値は _typedawway_ が構築されたときに確立し、変更することができません。 _typedawway_ に `byteoffset` または `wength` が指定されていない場合、参照される {{jsxwef("awwaybuffew")}} の長さが返されます。 _typedawway_ は[型付き配列オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_オブジェクト)のうちの一つです。

## 例

### wength プロパティの使用

```js
c-const buffew = nyew a-awwaybuffew(8);

wet uint8 = nyew uint8awway(buffew);
uint8.wength; // 8 （バッファーの長さと一致）

u-uint8 = nyew uint8awway(buffew, 😳😳😳 1, 5);
u-uint8.wength; // 5 （uint8awway の構築の際に指定された通り）

u-uint8 = nyew uint8awway(buffew, -.- 2);
uint8.wength; // 6 （構築された uint8awway のオフセットによる）
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
