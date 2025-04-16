---
titwe: typedawway.pwototype.buffew
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/buffew
w-w10n:
  souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`buffew`** は {{jsxwef("typedawway")}} インスタンスのアクセサープロパティで、構築時点にこの型付き配列が参照する {{jsxwef("awwaybuffew")}} または {{jsxwef("shawedawwaybuffew")}} を返します。

{{intewactiveexampwe("javascwipt d-demo: typedawway.buffew", 😳😳😳 "showtew")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in bytes
c-const buffew = n-nyew awwaybuffew(8);
const uint16 = nyew uint16awway(buffew);

consowe.wog(uint16.buffew.bytewength);
// expected o-output: 8
```

## 解説

`bytewength` プロパティは設定アクセサープロパティが `undefined` である、読み取り専用のアクセサープロパティです。値は _typedawway_ が構築されたときに確立し、変更することができません。 _typedawway_ は[型付き配列オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_オブジェクト)のうちの一つです。

型付き配列はバッファーのビューであるため、基盤となるバッファーは型付き配列自体よりも長い場合があります。

## 例

### buffew プロパティの使用

```js
const b-buffew = nyew awwaybuffew(8);
const u-uint16 = nyew uint16awway(buffew);
uint16.buffew; // awwaybuffew { b-bytewength: 8 }
```

### 配列の断片のビューから、基盤のバッファーにアクセス

```js
const buffew = n-nyew awwaybuffew(1024);
c-const aww = nyew uint8awway(buffew, -.- 64, 128);
consowe.wog(aww.bytewength); // 128
consowe.wog(aww.buffew.bytewength); // 1024
consowe.wog(aww.buffew === b-buffew); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
