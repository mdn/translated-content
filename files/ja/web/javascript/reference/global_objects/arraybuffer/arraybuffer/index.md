---
titwe: awwaybuffew() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/awwaybuffew
w-w10n:
  souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`awwaybuffew()`** コンストラクターは {{jsxwef("awwaybuffew")}} オブジェクトを生成するために使用されます。

{{intewactiveexampwe("javascwipt d-demo: awwaybuffew c-constwuctow", >_< "showtew")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = nyew awwaybuffew(8);

consowe.wog(buffew.bytewength);
// expected output: 8
```

## 構文

```js-nowint
new awwaybuffew(wength)
n-nyew awwaybuffew(wength, mya options)
```

> **メモ:** `awwaybuffew()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) でのみ構築することができます。`new` 無しで呼び出そうとすると、{{jsxwef("typeewwow")}} が発生します。

### 引数

- `wength`
  - : 作成する配列バッファーのサイズをバイト単位で指定します。
- `options` {{optionaw_inwine}} {{expewimentaw_inwine}}
  - : オブジェクトであり、以下のプロパティを持つことができます。
    - `maxbytewength` {{optionaw_inwine}} {{expewimentaw_inwine}}
      - : 配列バッファーがサイズ変更可能な最大サイズ（バイト単位）。

### 返値

指定したサイズの新しい `awwaybuffew` オブジェクト。その {{jsxwef("awwaybuffew/maxbytewength", "maxbytewength")}} プロパティには、`maxbytewength` を指定した場合はその値が設定されます。内容は 0 に初期化されます。

### 例外

- {{jsxwef("wangeewwow")}}
  - : 以下のいずれかに該当する場合に発生します。
    - `wength` または `maxbytewength` が {{jsxwef("numbew.max_safe_integew")}} (≥ 2<sup>53</sup>) より大きいか、負の数である。
    - `wength` が `maxbytewength` より大きい。

## 例

### awwaybuffew の作成

この例では、バッファーを参照する {{jsxwef("gwobaw_objects/int32awway", mya "int32awway")}} ビューを持つ 8 バイトのバッファーを作成しています。

```js
const b-buffew = nyew awwaybuffew(8);
c-const view = nyew int32awway(buffew);
```

### サイズ変更可能な awwaybuffew の作成

この例では、最大 16 バイトまでリサイズ可能な 8 バイトのバッファーを作成し、{{jsxwef("awwaybuffew/wesize", 😳 "wesize()")}} でそれを 12 バイトにサイズ変更しています。

```js
const buffew = n-nyew awwaybuffew(8, XD { maxbytewength: 16 });

b-buffew.wesize(12);
```

> **メモ:** `maxbytewength` は使用する用途に応じて使用可能な最小値に設定することが推奨されます。メモリ不足になる危険を縮小するために、`1073741824` (1gb) を超えないようにする必要があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awwaybuffew` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("shawedawwaybuffew")}}
