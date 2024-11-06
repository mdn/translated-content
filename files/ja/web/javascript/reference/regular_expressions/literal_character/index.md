---
title: "リテラル文字: a, b"
slug: Web/JavaScript/Reference/Regular_expressions/Literal_character
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JsSidebar}}

**リテラル文字**は、入力テキスト内で一致するもの自体を示します。

## 構文

```regex
c
```

### 引数

- `c`
  - : 下記で記述する構文文字以外の単一の文字です。

## 解説

正規表現では、ほとんどの文字が文字通り現れます。これらは通常、パターンの最も基本的な構成要素です。例えば、[HTML タグの削除](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier#html_タグの削除)の例からのパターンです。

```js
const pattern = /<.+?>/g;
```

この例では、`.`、`+`、`?` は構文文字と呼ばれます。これらは正規表現において特別な意味を持っています。パターンの残りの文字（`<` と `>`）はリテラル文字です。これらは入力されたテキスト、つまり左と右の山括弧に一致します。

以下は正規表現における構文文字であり、リテラル文字として現れることはありません。

- [`^`, `$`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [`\`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [`*`, `+`, `?`, `{`, `}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [`(`, `)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [`[`, `]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [`|`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)

文字クラスの中では、より多くの文字を文字通り記述することができます。詳しい情報は[文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)のページを参照してください。例えば `\.` と `[.]` はどちらもリテラル `.` に一致します。しかし、[`v` モード文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_モード文字クラス) では、構文文字として予約されている文字の異なる集合があります。包括的に言うと、下記は別の ASCII 文字と、それらが様々なコンテキストでエスケープまたはアンエスケープされて現れるかどうかの表です。"✅" はその文字自身を表し、"❌" は構文エラーを発生し、"⚠️" はその文字が有効であるが、それ自身以外の何かを意味していることを意味します。

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
      <td><code>123456789&nbsp;"'<br>ACEFGHIJKLMN<br>OPQRTUVXYZ_<br>aceghijklmop<br>quxyz</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>!#%&,:;<=>@`~</code></td>
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
      <td><code>B</code></td>
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

> **メモ:** `v` モード文字クラスでエスケープとアンエスケープの両方が可能な文字は、まさに「二重記号」として禁止されている文字です。詳しくは[`v`モード文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_mode文字クラス)を参照してください。

構文文字を文字通りに照合したい場合は、バックスラッシュ (`\`) で[エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)する必要があります。例えば、パターン中のリテラル文字 `*` と照合するには、パターンに `\*` と書く必要があります。構文文字をリテラル文字として使用すると、予期しない結果になるか、構文エラーが発生します。例えば、 `/*/` は正規表現として有効ではありません。[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、`]`、`{`、`}` は文字クラスの終わりや数量詞の区切りとして解釈できない場合、文字通りに現れることがあります。これは[ウェブ互換性のために非推奨です](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)ので、頼ってはいけません。

正規表現リテラルは、特定の非構文リテラル文字を指定することはできません。`/` はリテラル自体の区切り文字として使用されるため、リテラル `/` と照合したい場合は `\/` としてエスケープする必要があります。リテラルは複数の行にまたがることができないので、改行文字も正規表現リテラルでリテラル文字として使用することはできません。代わりに `\n` のような[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)を使用する必要があります。{{jsxref("RegExp/RegExp", "RegExp()")}} コンストラクターを使用する場合は、このような制限はありませんが、文字列リテラルには自分自身でエスケープするルールがあります（例えば、`"\\"` は実際には単一のバックスラッシュ文字を表すので、`new RegExp("\\*")` と `/\*/` は等価です）。

[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、パターンは [UTF-16 コード単位](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)の並びとして解釈されます。これはサロゲートペアが実際には 2 つのリテラル文字を表していることを意味しています。これは、他の機能とペアになったときに予期せぬ動作が発生します。

```js
/^[😄]$/.test("😄"); // false。このパターンは /^[\ud83d\udc04]$/ と解釈されるため
/^😄+$/.test("😄😄"); // false。このパターンは /^\ud83d\udc04+$/ と解釈されるため
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

- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [文字エスケープ: `\n`, `\u{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
