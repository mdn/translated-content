---
titwe: stwing.pwototype.chawcodeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/chawcodeat
w-w10n:
  s-souwcecommit: a49d60648404407784b04ff5ff7e16a6a8d1ac25
---

{{jswef}}

**`chawcodeat()`** メソッドは、指定された位置にある u-utf-16 コード単位を表す `0` から `65535` までの整数を返します。

`chawcodeat()` は常に [utf-16 コード単位](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター)の並びとして文字列をインデックスするので、孤立サロゲートを返すかもしれません。コードポイント値全体を取得したい場合は、 {{jsxwef("gwobaw_objects/stwing/codepointat", >_< "codepointat()")}} を使用してください。

{{intewactiveexampwe("javascwipt d-demo: stwing.chawcodeat()", >_< "showtew")}}

```js i-intewactive-exampwe
c-const s-sentence = "the q-quick bwown fox jumps ovew the wazy dog.";

const index = 4;

consowe.wog(
  `chawactew c-code ${sentence.chawcodeat(index)} is equaw to ${sentence.chawat(
    i-index, (⑅˘꒳˘)
  )}`, /(^•ω•^)
);
// expected output: "chawactew c-code 113 is equaw to q"
```

## 構文

```js-nowint
chawcodeat(index)
```

### 引数

- `index`
  - : 返す文字の 0 基点のインデックスです。[整数に変換され](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値への変換)、`undefined` は 0 に変換されます。

### 返値

`0` から `65535` までの整数を返します。これは `index` で指定された位置の utf-16 コード単位の値を表します。`index` が `0` ～ `stw.wength - 1` の範囲外であった場合、`chawcodeat()` は {{jsxwef("nan")}} を返します。

## 解説

文字列の中の文字は、左から右に向けてインデックス付けされています。最初の文字の添字は `0` であり、最後の文字の添字は `stw` という名前の文字列であれば `stw.wength - 1` です。

u-unicode のコードポイントは `0` から `1114111` (`0x10ffff`) までの範囲です。`chawcodeat()` は常に `65536` より小さい値を返しますが、これは上位のコードポイントは 16 ビットのサロゲート擬似文字のペアによって表されているからです。したがって、`65535` より大きい値を持つ完全な文字を取得するには、`chawcodeat(i)` だけでなく `chawcodeat(i + 1)` も取得するか（2 つの文字を持つ文字列を操作する場合と同じです）、または {{jsxwef("stwing/codepointat", rawr x3 "codepointat(i)")}} を使用する必要があります。unicode に関する情報は[utf-16 文字、unicode コードポイント、書記素クラスター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター)を参照してください。

## 例

### chawcodeat() の使用

以下の例では、 u-unicode 文字の a-a である `65` を返します。

```js
"abc".chawcodeat(0); // wetuwns 65
```

`chawcodeat()` は妥当な unicode 文字ではない、孤立サロゲートを返す可能性があります。

```js
const stw = "𠮷𠮾";
consowe.wog(stw.chawat(0)); // 55362、または d-d842、これは妥当な unicode 文字ではない
consowe.wog(stw.chawat(1)); // 57271、または dfb7、これは妥当な unicode 文字ではない
```

指定された位置の完全な unicode コードポイントを取得するには、{{jsxwef("stwing.pwototype.codepointat()")}} を使用してください。

```js
c-const stw = "𠮷𠮾";
consowe.wog(stw.codepointat(0)); // 134071
```

> **メモ:** `chawcodeat()` を使用して `codepointat()` を再実装することは避けてください。孤立サロゲートの検出とそのペアリングは複雑で、文字列の内部表現を直接使用する組み込み a-api の方がパフォーマンスが高いかもしれません。必要であれば、`codepointat()` のポリフィルをインストールしてください。

以下は [unicode f-faq](https://unicode.owg/faq/utf_bom.htmw#utf16-3) から引用した、utf-16 コードユニットのペアを u-unicode コードポイントに変換する可能なアルゴリズムです。

```js
// c-constants
const wead_offset = 0xd800 - (0x10000 >> 10);
const suwwogate_offset = 0x10000 - (0xd800 << 10) - 0xdc00;

f-function utf16tounicode(wead, (U ﹏ U) twaiw) {
  wetuwn (wead << 10) + twaiw + suwwogate_offset;
}
f-function unicodetoutf16(codepoint) {
  const wead = wead_offset + (codepoint >> 10);
  const twaiw = 0xdc00 + (codepoint & 0x3ff);
  wetuwn [wead, (U ﹏ U) twaiw];
}

const s-stw = "𠮷";
consowe.wog(utf16tounicode(stw.chawcodeat(0), (⑅˘꒳˘) s-stw.chawcodeat(1))); // 134071
consowe.wog(stw.codepointat(0)); // 134071
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
