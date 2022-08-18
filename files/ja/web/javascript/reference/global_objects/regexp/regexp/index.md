---
title: RegExp() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
tags:
  - Constructor
  - JavaScript
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
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

<dl><dt><code><var>pattern</var></code></dt><dd>正規表現のテキストです。</dd><dd>ES5 以降では、別な <code>RegExp</code> オブジェクトまたはリテラルにすることができます (後者は 2 つの RegExp コンストラクター記法のみ)。パターンには<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters">特殊文字</a>を含めることができるため、文字列リテラルよりも広い範囲の値に一致させることができます。</dd><dt><code><var>flags</var></code></dt><dd><p>指定された場合、 <code><var>flags</var></code> は追加するフラグを含む文字列です。</p><p>または、パターン用のオブジェクトが提供された場合は <code><var>flags</var></code> の文字列は他のオブジェクトのフラグを置き換えます (そして <code>lastIndex</code> は 0 にリセットされます) (ES2015以降)。</p><p><code><var>flags</var></code> が指定されず正規表現オブジェクトが提供されない場合、オブジェクトのフラグ (と <code>lastIndex</code> の値) がコピーされます。</p><p><code><var>flags</var></code> は以下の値を任意の組み合わせを含んだ文字列を指定することができます。</p><dl><dt><code>g</code> (グローバルマッチ)</dt><dd>最初のマッチの後に止まることなくすべての一致するものを探す。</dd><dt><code>i</code> (大文字・小文字の無視)</dt><dd><code>u</code> フラグが有効な場合は、 Unicode による大文字・小文字の扱いを行います。</dd><dt><code>m</code> (複数行)</dt><dd>先頭および終端を示す文字 (<code>^</code> と <code>$</code>) が、複数の行にまたがって機能します (すなわち、入力文字列全体の先頭および終端だけでなく、<em>各々の</em>行 (<code>\n</code> や <code>\r</code> で区切られる) の先頭および末尾に一致します)。</dd><dt><code>s</code> ("dotAll")</dt><dd><code>.</code> を改行文字に一致させることができます。</dd><dt><code>u</code> (unicode)</dt><dd>パターンを Unicode コードポイントの並びとして扱います (<a href="/ja/docs/Web/API/DOMString/Binary">バイナリ文字列</a>も参照)。</dd><dt><code>y</code> (先頭固定 (sticky))</dt><dd>対象文字列中の正規表現の <code>lastIndex</code> プロパティによって示された位置からのみ比較するようになります (それより後の位置からの比較は試みません)。</dd></dl></dd></dl>

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
