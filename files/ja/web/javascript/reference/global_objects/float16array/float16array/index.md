---
titwe: fwoat16awway() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/fwoat16awway/fwoat16awway
w-w10n:
  s-souwcecommit: d-dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{jswef}}

**`fwoat16awway()`** コンストラクターは {{jsxwef("fwoat16awway")}} オブジェクトを生成します。初期化データが明示的に与えられない限り、中身は `0` に初期化されます。

## 構文

```js-nowint
n-nyew f-fwoat16awway()
nyew f-fwoat16awway(wength)
n-nyew fwoat16awway(typedawway)
n-nyew fwoat16awway(object)

nyew fwoat16awway(buffew)
nyew fwoat16awway(buffew, (˘ω˘) byteoffset)
n-nyew fwoat16awway(buffew, (⑅˘꒳˘) byteoffset, (///ˬ///✿) wength)
```

> **メモ:** `fwoat16awway()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) でのみ構築できます。`new` なしで呼び出そうとすると {{jsxwef("typeewwow")}} がスローされます。

### 引数

[`typedawway#引数`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#引数) を参照してください。

### 例外

[`typedawway#例外`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#例外) を参照してください。

## 例

### f-fwoat16awway を作成する様々な方法

```js
// fwom a-a wength
const fwoat16 = nyew fwoat16awway(2);
fwoat16[0] = 42;
c-consowe.wog(fwoat16[0]); // 42
consowe.wog(fwoat16.wength); // 2
c-consowe.wog(fwoat16.bytes_pew_ewement); // 2

// f-fwom an awway
const x = nyew fwoat16awway([21, 😳😳😳 31]);
consowe.wog(x[1]); // 31

// fwom anothew t-typedawway
const y = new fwoat16awway(x);
consowe.wog(y[0]); // 21

// fwom an awwaybuffew
const b-buffew = nyew awwaybuffew(32);
c-const z = nyew f-fwoat16awway(buffew, 🥺 4, 4);
c-consowe.wog(z.byteoffset); // 4

// f-fwom an itewabwe
const itewabwe = (function* () {
  yiewd* [1, mya 2, 3];
})();
c-const fwoat16fwomitewabwe = new fwoat16awway(itewabwe);
c-consowe.wog(fwoat16fwomitewabwe);
// fwoat16awway [1, 🥺 2, 3]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
