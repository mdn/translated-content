---
title: RegExp() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
---

{{JSRef}}

**`RegExp`** コンストラクターは、パターンに従ったテキストを検索する正規表現オブジェクトを生成します。

正規表現について詳しく知りたい方は [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide) の [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions) を参考にしてください。

{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}

## 構文

リテラル記法、コンストラクター記法、ファクトリ記法を使用することができます。

```
/pattern/flags
new RegExp(pattern[, flags])
RegExp(pattern[, flags])
```

### 引数

- `pattern`
  - : 正規表現のテキストです。

    ES5 以降では、別な `RegExp` オブジェクトまたはリテラルにすることができます (後者は 2 つの RegExp コンストラクター記法のみ)。パターンには [特殊文字](/ja/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters) を含めることができるため、文字列リテラルよりも広い範囲の値に一致させることができます。
- `flags`
  - : 指定された場合、 `flags` は追加するフラグを含む文字列です。

    または、パターン用のオブジェクトが提供された場合は `flags` の文字列は他のオブジェクトのフラグを置き換えます (そして `lastIndex` は 0 にリセットされます) (ES2015以降)。

    `flags` が指定されず正規表現オブジェクトが提供されない場合、オブジェクトのフラグ (と `lastIndex` の値) がコピーされます。

    `flags` は以下の値を任意の組み合わせを含んだ文字列を指定することができます。

    - `g` (グローバルマッチ)
      - : 最初のマッチの後に止まることなくすべての一致するものを探す。
    - `i` (大文字・小文字の無視)
      - : `u` フラグが有効な場合は、 Unicode による大文字・小文字の扱いを行います。
    - `m` (複数行)
      - : 先頭および終端を示す文字 (`^` と `$`) が、複数の行にまたがって機能します (すなわち、入力文字列全体の先頭および終端だけでなく、_各々の_ 行 (`\n` や `\r` で区切られる) の先頭および末尾に一致します)。
    - `s` ("dotAll")
      - : `.` を改行文字に一致させることができます。
    - `u` (unicode)
      - : パターンを Unicode コードポイントの並びとして扱います ([バイナリ文字列](/ja/docs/Web/API/DOMString/Binary) も参照)。
    - `y` (先頭固定 (sticky))
      - : 対象文字列中の正規表現の `lastIndex` プロパティによって示された位置からのみ比較するようになります (それより後の位置からの比較は試みません)。

## 例

### リテラル記法とコンストラクター

`RegExp` オブジェクトを生成するのに*リテラル記法*と*コンストラクター*の 2 つの方法があります。

- **リテラル記法**の引数はスラッシュの間に入れ、引用符を使用しません。
- **コンストラクター関数**の引数はスラッシュの間に入れるのではなく、引用符を使用します。

以下の 3 つの式は、同じ正規表現を生成するものです。

```js
/ab+c/i
new RegExp(/ab+c/, 'i') // リテラル表記
new RegExp('ab+c', 'i') // コンストラクター
```

リテラル記法は、式が評価されるときに正規表現をコンパイルした結果となります。正規表現が変化しない場合はリテラル記法を使用してください。例えば、ループで使用される正規表現を構築するためにリテラル記法を使用した場合、正規表現は反復ごとに再コンパイルされません。

正規表現オブジェクトのコンストラクター、例えば `new RegExp('ab+c')` は、正規表現の実行時にコンパイルを行います。コンストラクター関数は、正規表現のパターンが変化することがわかっている場合や、パターンがわからず、ユーザー入力などの別のソースから取得している場合に使用してください。

## 仕様書

| 仕様書                                                                                           |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-regexp-constructor', 'RegExp constructor')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp")}}

## 関連情報

- [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)内の[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)の章
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
