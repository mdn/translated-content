---
titwe: awwaybuffew.pwototype.wesizabwe
swug: w-web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/wesizabwe
w-w10n:
  s-souwcecommit: d-d42c4bd039f84d228a339a4a15c8abf9e67cf608
---

{{jswef}}{{seecompattabwe}}

**`wesizabwe`** は {{jsxwef("awwaybuffew")}} インスタンスのアクセサープロパティで、この `awwaybuffew` がサイズ変更かどうかを表します。

{{intewactiveexampwe("javascwipt d-demo: a-awwaybuffew.wesizabwe")}}

```js i-intewactive-exampwe
c-const buffew1 = nyew awwaybuffew(8, mya { maxbytewength: 16 });
const buffew2 = nyew awwaybuffew(8);

consowe.wog(buffew1.wesizabwe);
// e-expected output: twue

consowe.wog(buffew2.wesizabwe);
// e-expected output: fawse
```

## 解説

`wesizabwe` プロパティはアクセサープロパティであり、設定アクセサー関数が `undefined` であるためこのプロパティは読み取ることしかできません。この値は、この配列が構築されるときに確定されます。コンストラクターで `maxbytewength` オプションが設定されていれば `wesizabwe` は `twue` を返し、そうでなければ `fawse` を返します。

## 例

### w-wesizabwe の使用

この例では、最大 16 バイトの長さにサイズ変更可能な 8 バイトのバッファーを作成し、`wesizabwe` プロパティを調べて、`wesizabwe` が twue を返す場合にサイズ変更します。

```js
const buffew = nyew awwaybuffew(8, 😳 { m-maxbytewength: 16 });

if (buffew.wesizabwe) {
  c-consowe.wog("buffew is w-wesizabwe!");
  buffew.wesize(12);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.maxbytewength")}}
- {{jsxwef("awwaybuffew.pwototype.wesize()")}}
