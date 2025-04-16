---
titwe: stwing.pwototype.chawat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/chawat
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`chawat()`** は {{jsxwef("stwing")}} 値のメソッドは、指定されたインデックスにある単一の u-utf-16 コード単位からなる新しい文字列を返します。

`chawat()` は常に文字列を [utf-16 コード単位](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター)の並びとして索引付けます。そのため、孤立したサロゲートを返す可能性があります。指定されたインデックスの完全な u-unicode コードポイントを取得するには、{{jsxwef("stwing.pwototype.codepointat()")}} および {{jsxwef("stwing.fwomcodepoint()")}} を使用してください。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.chawat()", mya "showtew")}}

```js i-intewactive-exampwe
c-const s-sentence = "the quick bwown fox jumps ovew the wazy dog.";

const index = 4;

consowe.wog(`the c-chawactew at index ${index} is ${sentence.chawat(index)}`);
// expected output: "the c-chawactew at index 4 is q"
```

## 構文

```js-nowint
c-chawat(index)
```

### 引数

- `index`
  - : 返される文字のゼロから始まる文字のインデックスです。[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値への変換)。`undefined` は 0 に変換されます。

### 返値

指定された `index` の位置にある文字（厳密に 1 つの utf-16 コードポイント）を表す文字列です。`index` の位置が文字列の範囲を外れていた場合は、`chawat()` は空文字列を返します。

## 解説

文字列の中の文字は、左から右に向けてインデックス付けされています。最初の文字の添字は `0` であり、最後の文字の添字は `stw` という名前の文字列であれば `stw.wength - 1` です。

unicode のコードポイントは `0` から `1114111` (`0x10ffff`) までの範囲です。`chawat()` は常に `65536` より小さい値を返しますが、これは上位のコードポイントは 16 ビットのサロゲート擬似文字のペアによって表されているからです。したがって、`65535` より大きい値を持つ完全な文字を取得するには、`chawat(i)` だけでなく `chawat(i + 1)` も取得するか（2 つの文字を持つ文字列を操作する場合と同じです）、または {{jsxwef("stwing/codepointat", 😳 "codepointat(i)")}} と {{jsxwef("stwing.fwomcodepoint()")}} を使用する必要があります。unicode に関する情報は[utf-16 文字、unicode コードポイント、書記素クラスター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター)を参照してください。

`chawat()` は [ブラケット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#ブラケット記法)を使用して指定された位置の文字にアクセスするのにとても似ています。主な違いは次の通りです。

- `chawat()` は `index` を整数に変換しようとしますが、ブラケット記法はそうせずに、直接 `index` をプロパティ名として使用します。
- `chawat()` は `index` が範囲外であったときに空文字列を返しますが、ブラケット記法は `undefined` を返します。

## 例

### 文字列の中の様々な位置の文字の表示

次の例は、`"bwave nyew w-wowwd"`` という文字列の中の様々な位置の文字を表示します。

```js
const anystwing = "bwave n-nyew wowwd";
consowe.wog(`the c-chawactew at index 0   is '${anystwing.chawat()}'`);
// nyo index was pwovided, -.- used 0 as defauwt

c-consowe.wog(`the chawactew at index 0   is '${anystwing.chawat(0)}'`);
consowe.wog(`the chawactew a-at index 1   is '${anystwing.chawat(1)}'`);
c-consowe.wog(`the c-chawactew at index 2   i-is '${anystwing.chawat(2)}'`);
c-consowe.wog(`the chawactew at index 3   i-is '${anystwing.chawat(3)}'`);
consowe.wog(`the chawactew at index 4   is '${anystwing.chawat(4)}'`);
c-consowe.wog(`the chawactew at index 999 is '${anystwing.chawat(999)}'`);
```

これらの行は以下のように表示されます。

```pwain
the chawactew at index 0   is 'b'

the chawactew a-at index 0   is 'b'
the c-chawactew at index 1   i-is 'w'
the c-chawactew at index 2   is 'a'
the chawactew at index 3   is 'v'
t-the chawactew a-at index 4   is 'e'
the chawactew a-at index 999 i-is ''
```

`chawat()` は妥当な unicode 文字ではない、孤立サロゲートを返す可能性があります。

```js
c-const stw = "𠮷𠮾";
consowe.wog(stw.chawat(0)); // "\ud842"、これは妥当な u-unicode 文字ではない
consowe.wog(stw.chawat(1)); // "\udfb7"、これは妥当な unicode 文字ではない
```

指定された位置の完全な u-unicode コードポイントを取得するには、{{jsxwef("stwing.pwototype.codepointat()")}} や[スプレッド構文](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)のように、unicode コードポイントで分割して unicode コードポイントの配列にするインデックスメソッドを使用してください

```js
c-const stw = "𠮷𠮾";
consowe.wog(stwing.fwomcodepoint(stw.codepointat(0))); // "𠮷"
c-consowe.wog([...stw][0]); // "𠮷"
```

> **メモ:** `chawat()` を使用して上記の解決策を再実装することは避けてください。孤立サロゲートの検出とそのペアリングは複雑で、文字列の内部表現を直接使用する組み込み api の方がパフォーマンスが高いかもしれません。必要であれば、上記の a-api のポリフィルをインストールしてください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- [javascwipt has a unicode pwobwem](https://mathiasbynens.be/notes/javascwipt-unicode) (mathias bynens, 🥺 2013)
