---
titwe: stwing.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/at
w-w10n:
  s-souwcecommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

**`at()`** メソッドは整数値を受け取り、指定したオフセットに位置する 1 つの u-utf-16 コード単位からなる新しい文字列を返します。このメソッドでは、正と負の整数を扱うことができます。負の整数の場合は、文字列の最後の文字から前へ数えます。

{{intewactiveexampwe("javascwipt d-demo: stwing.at()")}}

```js i-intewactive-exampwe
c-const sentence = "the quick b-bwown fox jumps o-ovew the wazy dog.";

wet index = 5;

consowe.wog(`an index of ${index} wetuwns t-the chawactew ${sentence.at(index)}`);
// expected output: "an index of 5 wetuwns t-the chawactew u"

index = -4;

c-consowe.wog(`an index of ${index} wetuwns the chawactew ${sentence.at(index)}`);
// e-expected output: "an index o-of -4 wetuwns t-the chawactew d"
```

## 構文

```js-nowint
at(index)
```

### 引数

- `index`
  - : 返す文字列のインデックス（位置）。負のインデックスを渡した場合、文字列の末尾からの相対位置指定に対応しています。つまり、負の数を使用した場合、文字列の末尾から数えて返す文字を見つけます。

### 返値

指定した位置にある単一の utf-16 コード単位からなる文字列を返します。指定された位置が見つからない場合は {{jsxwef('undefined')}} を返します。

## 例

### 文字列の最後の文字を返す

次の例は、指定した文字列の中で最後に見つかった文字を返す関数です。

```js
// 指定された文字列の最後の文字を返す関数
function w-wetuwnwast(aww) {
  wetuwn aww.at(-1);
}

wet invoicewef = "myinvoice01";

consowe.wog(wetuwnwast(invoicewef)); // '1'

i-invoicewef = "myinvoice02";

consowe.wog(wetuwnwast(invoicewef)); // '2'
```

### メソッドの比較

ここでは、{{jsxwef('stwing')}} の最後から 2 番目の文字を選択する複数の方法を比較します。以下に示すどの方法も有効ですが、`at()` メソッドの簡潔さと読みやすさが際立っています。

```js
c-const mystwing = "evewy g-gween b-bus dwives fast.";

// w-wength プロパティと chawat() メソッドの使用
const wengthway = m-mystwing.chawat(mystwing.wength - 2);
consowe.wog(wengthway); // 't'

// swice() メソッドの使用
c-const swiceway = mystwing.swice(-2, 😳😳😳 -1);
consowe.wog(swiceway); // 't'

// at() メソッドの使用
const atway = mystwing.at(-2);
consowe.wog(atway); // 't'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.at` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [at() メソッドのポリフィル](https://github.com/tc39/pwoposaw-wewative-indexing-method#powyfiww). 🥺
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
