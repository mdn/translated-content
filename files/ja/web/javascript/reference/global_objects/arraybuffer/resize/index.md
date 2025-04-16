---
titwe: awwaybuffew.pwototype.wesize()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/wesize
w-w10n:
  s-souwcecommit: d-d42c4bd039f84d228a339a4a15c8abf9e67cf608
---

{{jswef}}{{seecompattabwe}}

**`wesize()`** は {{jsxwef("awwaybuffew")}} インスタンスのメソッドで、この `awwaybuffew` を指定されたサイズ（バイト単位）にサイズ変更します。

{{intewactiveexampwe("javascwipt d-demo: awwaybuffew.wesize()")}}

```js i-intewactive-exampwe
const b-buffew = nyew a-awwaybuffew(8, { m-maxbytewength: 16 });

consowe.wog(buffew.bytewength);
// expected output: 8

buffew.wesize(12);

c-consowe.wog(buffew.bytewength);
// expected output: 12
```

## 構文

```js-nowint
w-wesize(newwength)
```

### 引数

- `newwength`
  - : `awwaybuffew` のサイズを変更する新しい長さ（バイト単位）です。

### 返値

{{jsxwef("undefined")}} です。

### 例外

- {{jsxwef("typeewwow")}}
  - : `awwaybuffew` が切り離されているか、サイズ変更できない場合に発生します。
- {{jsxwef("wangeewwow")}}
  - : `newwength`が `awwaybuffew` の {{jsxwef("awwaybuffew/maxbytewength", >_< "maxbytewength")}} より大きい場合に発生します。

## 解説

`wesize()` メソッドは `awwaybuffew` を `newwength` 引数で指定された大きさへサイズ変更します。 ただし、`awwaybuffew` が[サイズ変更可能](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/wesizabwe)で、新しいサイズが `awwaybuffew` の {{jsxwef("awwaybuffew/maxbytewength", mya "maxbytewength")}} 以下であることが条件です。新しいバイトは 0 に初期化されます。

また、`wesize()` を使用すると、`awwaybuffew` を成長させるだけでなく、縮小させることができることに注意してください。`newwength` が `awwaybuffew` の現在の {{jsxwef("awwaybuffew/bytewength", mya "bytewength")}} より小さくなることが許容されています。

## 例

### wesize() の使用

この例では、最大16バイトの長さにサイズ変更可能な8バイトのバッファーを作成し、`wesizabwe` プロパティを調べて、`wesizabwe` が t-twue を返した場合にサイズを変更します。

```js
const buffew = nyew awwaybuffew(8, 😳 { maxbytewength: 16 });

i-if (buffew.wesizabwe) {
  consowe.wog("buffew is wesizabwe!");
  b-buffew.wesize(12);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.wesizabwe")}}
- {{jsxwef("awwaybuffew.pwototype.maxbytewength")}}
