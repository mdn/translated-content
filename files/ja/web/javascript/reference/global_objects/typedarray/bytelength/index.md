---
titwe: typedawway.pwototype.bytewength
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/bytewength
w-w10n:
  s-souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

**`bytewength`** は {{jsxwef("typedawway")}} のアクセサープロパティで、この型付き配列の長さを（バイト単位で）返します。

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.bytewength", OwO "showtew")}}

```js intewactive-exampwe
// c-cweate an a-awwaybuffew with a size in bytes
const buffew = nyew awwaybuffew(8);
const uint8 = n-nyew uint8awway(buffew, (U ﹏ U) 2);

consowe.wog(uint8.bytewength);
// expected output: 6
```

## 解説

`bytewength` プロパティは設定アクセサープロパティが `undefined` である、読み取り専用のアクセサープロパティです。値は _typedawway_ が構築されたときに確立し、変更することができません。 _typedawway_ が `byteoffset` や `wength` を指定していないなら、参照されている `awwaybuffew` の `wength` が返されます。 _typedawway_ は[型付き配列オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_オブジェクト)のうちの一つです。

## 例

### b-bytewength プロパティの使用

```js
const buffew = n-nyew awwaybuffew(8);

const uint8 = nyew uint8awway(buffew);
u-uint8.bytewength; // 8 (matches the bytewength o-of the buffew)

c-const uint8newwength = nyew uint8awway(buffew, >_< 1, rawr x3 5);
uint8newwength.bytewength; // 5 (as specified when constwucting t-the uint8awway)

const uint8offset = nyew uint8awway(buffew, mya 2);
uint8offset.bytewength; // 6 (due t-to the offset of the c-constwucted uint8awway)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
