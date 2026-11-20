---
title: "リテラル文字: a, b"
slug: Web/JavaScript/Reference/Regular_expressions/Literal_character
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

**リテラル文字**は、入力テキスト内で一致するもの自体を示します。

## 構文

```regex
c
```

### 引数

- `c`
  - : 下記で説明する構文文字以外の単一の文字です。

## 解説

正規表現では、ほとんどの文字が文字通り現れます。これらは通常、パターンの最も基本的な構成要素です。例えば、[HTML タグの削除](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier#html_タグの削除)の例からのパターンです。

```js
const pattern = /<.+?>/g;
```

この例では、`.`、`+`、`?` は構文文字と呼ばれます。これらは正規表現において特別な意味を持っています。パターンの残りの文字（`<` と `>`）はリテラル文字です。これらは入力されたテキスト、つまり左と右の山括弧に一致します。

以下は正規表現における構文文字であり、リテラル文字として現れることはありません。

- [`^`, `$`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [`\`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [`.`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
- [`*`, `+`, `?`, `{`, `}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [`(`, `)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [`[`, `]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [`|`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)

文字クラスの中では、より多くの文字を文字通り記述することができます。詳しい情報は[文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)のページを参照してください。例えば `\.` と `[.]` はどちらもリテラル `.` に一致します。しかし、[`v` モード文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_モード文字クラス)では、構文文字として予約されている文字の集合が異なります。下記は、ASCII 文字と、それらを様々なコンテキストでエスケープまたはエスケープせずに記述できるかどうかをまとめた表です。"✅" はその文字自身を表し、"❌" は構文エラーを発生させ、"⚠️" はその文字が有効でも、それ自身以外の意味を持つことを表します。

<table class="fullwidth-table">
  <thead>
    <tr>
      <th scope="col" rowspan="2">文字</th>
      <th scope="col" colspan="2"><code>u</code> または <code>v</code> モードにおける文字クラス外の文字</th>
      <th scope="col" colspan="2"><code>u</code> モードの文字クラス</th>
      <th scope="col" colspan="2"><code>v</code> モードの文字クラス</th>
    </tr>
    <tr>
      <th scope="col">エスケープなし</th>
      <th scope="col">エスケープあり</th>
      <th scope="col">エスケープなし</th>
      <th scope="col">エスケープあり</th>
      <th scope="col">エスケープなし</th>
      <th scope="col">エスケープあり</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>123456789&nbsp;"'<br>CEFGHIJKLMN<br>OPQRTUVXY_<br>aceghijklmop<br>quxy</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>!#%&,:;&lt;=&gt;@`~</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>]</code></td>
      <td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>()[{}</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>*+?</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>0DSWbdfnrstvw</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td>
    </tr>
    <tr>
      <td><code>ABZz</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>$.</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>✅</td><td>❌</td><td>✅⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tr>
    <tr>
      <td><code>^</code></td>
      <td>⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tr>
  </tbody>
</table>

<!--
// The table above is created with the help of this:
const tbl = {};

for (let i = 32; i < 127; i++) {
  const c = String.fromCharCode(i);
  const res = {};
  const allChars = Array.from({ length: 127 }, (_, i) =>
    String.fromCharCode(i),
  );
  function testProp(prop, cr) {
    try {
      const re = cr();
      const chars = allChars.filter((c) => re.test(c));
      if (chars.length !== 1 || chars[0] !== c) res[prop] = "special";
    } catch {
      res[prop] = "error";
    }
  }
  testProp("outLit", () => new RegExp(`^${c}$`, "u"));
  testProp("uInLit", () => new RegExp(`^[${c}]$`, "u"));
  testProp("vInLit", () => new RegExp(`^[${c}]$`, "v"));
  testProp("outEsc", () => new RegExp(`^\\${c}$`, "u"));
  testProp("uInEsc", () => new RegExp(`^[\\${c}]$`, "u"));
  testProp("vInEsc", () => new RegExp(`^[\\${c}]$`, "v"));
  tbl[c] = res;
}

function groupBy(arr, cb, cb2) {
  const groups = { __proto__: null };
  for (const a of arr) {
    const name = cb(a);
    groups[name] ??= "";
    groups[name] += cb2(a);
  }
  return groups;
}

console.log(
  groupBy(
    Object.entries(tbl),
    (p) =>
      ["outLit", "outEsc", "uInLit", "uInEsc", "vInLit", "vInEsc"]
        .map((k) => {
          switch (p[1][k]) {
            case undefined:
              return "✅";
            case "error":
              return "❌";
            case "special":
              return "⚠️";
          }
        })
        .join(""),
    (p) => p[0],
  ),
);
-->

> [!NOTE]
> `v` モード文字クラスでエスケープとアンエスケープの両方が可能な文字は、まさに「二重記号」として禁止されている文字です。詳しくは[`v`モード文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_mode文字クラス)を参照してください。

構文文字を文字通りに照合したい場合は、バックスラッシュ (`\`) で[エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)する必要があります。例えば、パターン中のリテラル文字 `*` と照合するには、パターンに `\*` と書く必要があります。構文文字をリテラル文字として使用すると、予期しない結果になるか、構文エラーが発生します。例えば、 `/*/` は正規表現として有効ではありません。[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、`]`、`{`、`}` は文字クラスの終わりや数量詞の区切りとして解釈できない場合、文字通りに現れることがあります。これは[ウェブ互換性のために非推奨です](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)ので、頼ってはいけません。

正規表現リテラルでは、構文文字ではない一部の文字も、そのままでは使用できません。`/` は正規表現リテラルの区切り文字として使用されるため、文字クラスの外ではリテラル文字として記述できません。リテラル `/` と一致させるには、その位置で `\/` とエスケープする必要があります。文字クラス内では、`v` フラグが設定されている場合を除き、`/[/]/` のように `/` をエスケープせずに記述できます。正規表現リテラルは複数行にまたがれないため、改行文字もリテラル文字として使用できません。代わりに `\n` のような[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)を使用してください。{{jsxref("RegExp/RegExp", "RegExp()")}} コンストラクターを使用する場合、この区切り文字と改行文字の制限はありません。ただし、文字列リテラルには独自のエスケープ規則があります（例えば、`"\\"` は単一のバックスラッシュ文字を表すため、`new RegExp("\\*")` と `/\*/` は等価です）。

[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、パターンは [UTF-16 コード単位](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)の並びとして解釈されます。これはサロゲートペアが実際には 2 つのリテラル文字を表していることを意味しています。このため、他の機能と組み合わせると予期しない動作が発生します。

```js
/^[😄]$/.test("😄"); // false。このパターンは /^[\ud83d\ude04]$/ と解釈されるため
/^😄+$/.test("😄😄"); // false。このパターンは /^\ud83d\ude04+$/ と解釈されるため
```

Unicode 対応モードでは、パターンは Unicode コードポイントの並びとして解釈され、サロゲートペアは分割されません。できれば常に `u` フラグを使用しましょう。

## 例

### リテラル文字の使用

次の例は[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape#文字エスケープの使用)からコピーしたものです。`a` と `b` はパターン内のリテラル文字で、`\n` は正規表現リテラルでは文字通りに現れないのでエスケープされた文字です。

```js
const pattern = /a\nb/;
const string = `a
b`;
console.log(pattern.test(string)); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)ガイド
- [正規表現](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [文字エスケープ: `\n`, `\u{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
