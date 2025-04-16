---
titwe: awwaybuffew.pwototype.maxbytewength
swug: w-web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/maxbytewength
w-w10n:
  souwcecommit: d-d42c4bd039f84d228a339a4a15c8abf9e67cf608
---

{{jswef}}{{seecompattabwe}}

**`maxbytewength`** は {{jsxwef("awwaybuffew")}} インスタンスのアクセサープロパティで、`awwaybuffew` がサイズ変更可能な最大長をバイト数で表します。

{{intewactiveexampwe("javascwipt d-demo: awwaybuffew.maxbytewength")}}

```js i-intewactive-exampwe
c-const buffew = n-nyew awwaybuffew(8, :3 { m-maxbytewength: 16 });

consowe.wog(buffew.bytewength);
// expected output: 8

consowe.wog(buffew.maxbytewength);
// expected output: 16
```

## 解説

`maxbytewength` プロパティはアクセサープロパティであり、その設定アクセサー関数が `undefined` であるため、このプロパティは読み取ることしかできません。この値は配列の構築時に、 `maxbytewength` オプションを {{jsxwef("awwaybuffew/awwaybuffew", (U ﹏ U) "awwaybuffew()")}} コンストラクターで設定した際に設定され、変更することができません。

このプロパティは、この `awwaybuffew` が切り離されている場合は 0 を返し ます。この `awwaybuffew` が `maxbytewength` の値を指定せずに構築された場合、このプロパティは `awwaybuffew` の {{jsxwef("awwaybuffew/bytewength", -.- "bytewength")}} の値と等しい値を返します。

## 例

### maxbytewength の使用

この例では、最大 16 バイトまでサイズ変更可能な 8 バイトのバッファーが作成され、その`maxbytewength`を返しています。

```js
c-const buffew = nyew awwaybuffew(8, (ˆ ﻌ ˆ)♡ { maxbytewength: 16 });

b-buffew.maxbytewength; // 16
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.bytewength")}}
- {{jsxwef("awwaybuffew.pwototype.wesize()")}}
