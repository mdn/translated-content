---
title: グループと後方参照
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
l10n:
  sourceCommit: effd5de5e42bfe045c3bf44b2d7b14f4d6146785
---

{{jsSidebar("JavaScript Guide")}}

グループは複数のパターンを全体としてグループ化し、グループをキャプチャすることで、正規表現パターンを使用して文字列と一致する場合に、追加の副一致情報を提供します。後方参照は、同じ正規表現で以前に捕捉したグループを参照します。

{{EmbedInteractiveExample("pages/js/regexp-groups-ranges.html")}}

## 種類

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">文字</th>
      <th scope="col">意味</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <strong>キャプチャグループ: </strong> <code><em>x</em></code> に一致し、一致した内容を記憶します。例えば <code>/(foo)/</code> は "foo bar" の "foo" に一致し、記憶します。
        </p>
        <p>
          正規表現は複数のキャプチャグループを持つことができます。結果、一般的にキャプチャグループ内の左括弧と同じ順にある、配列の要素のキャプチャグループに一致しています。たいていの場合、これはキャプチャグループ自身の順番です。これはキャプチャグループがネストしている場合に重要です。一致は結果の要素の添字 (<code>[1], …, [n]</code>) や、あらかじめ定義されている <code>RegExp</code> オブジェクトのプロパティ (<code>$1, …, $9</code>) を使ってアクセスできます。
        </p>
        <p>
          キャプチャグループはパフォーマンス上の損失があります。一致した部分文字列を使わない場合はキャプチャしない括弧（後述）を使ったほうがいいでしょう。
        </p>
        <p>
          <code
            ><a
              href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          > は、<code>/.../g</code> フラグが設定されている場合、グループを返しません。しかし、
          <code
            ><a
              href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.prototype.matchAll()</a
            ></code
          > を使用して、すべての一致したものを取得することができます。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <strong>名前付きキャプチャグループ: </strong> "x" に一致し、<code>&#x3C;Name></code> で指定された名前に従い、返される一致の <code>groups</code> プロパティに記憶されます。山括弧 ('<code>&#x3C;</code>' と '<code>></code>') にはグループ名が必須です。
        </p>
        <p>
          例えば、電話番号からアメリカのエリアコードを取り出す際、 <code>/\((?&#x3C;area>\d\d\d)\)/</code> を使うことができます。 結果の番号は <code>matches.groups.area</code> に表示されます。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <strong>非キャプチャグループ:</strong> "x" に一致しますが、一致した内容は記憶しません。一致した部分文字列は、結果の配列の要素 (<code>[1], …, [n]</code>) や、あらかじめ定義されている <code>RegExp</code> オブジェクトのプロパティ (<code>$1, …, $9</code
          >) から呼び出すことはできません。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          "n" に正の整数が入ります。正規表現内において n 番目の括弧の部分に一致した最新の部分文字列への後方参照となります（括弧の数は左からカウントします）。例えば
          <code>/apple(,)\sorange\1/</code> は "apple, orange, cherry, peach" の
          "apple, orange," に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <code>&#x3C;Name></code> で指定された<strong>名前付きキャプチャグループ</strong>に一致する最後の部分文字列の後方参照です。
        </p>
        <p>
          例えば、 <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> は、 "Do you copy? Sir, yes Sir!" の中の "Sir, yes Sir" に一致します。
        </p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> <code>\k</code> は、ここでは、名前付きキャプチャグループの後方参照を開始することを示すために使用されています。
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 例

### グループの使用

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/gm;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

### 名前付きグループの使用

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/gm;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
}
```

### グループと後方参照の使用

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

### グループと一致結果の添字の使用

`d` フラグが指定された場合、各キャプチャグループの添字を返します。これは、それぞれの一致したグループと元のテキストを関連付ける場合、例えば、コンパイラーの診断を提供する場合に特に有益です。

```js
const code = `function add(x, y) {
  return x + y;
}`;
const functionRegexp =
  /(function\s+)(?<name>[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*)/du;
const match = functionRegexp.exec(code);
const lines = code.split("\n");
lines.splice(
  1,
  0,
  " ".repeat(match.indices[1][1] - match.indices[1][0]) +
    "^".repeat(match.indices.groups.name[1] - match.indices.groups.name[0]),
);
console.log(lines.join("\n"));
// function add(x, y) {
//          ^^^
//   return x + y;
// }
```

## 関連情報

- [`RegExp` 名前付きキャプチャグループ](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)が [`core-js`](https://github.com/zloirock/core-js) で利用できます。
- [正規表現ガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)

  - [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
  - [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  - [数量詞](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
  - [Unicode プロパティエスケープ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

- [`RegExp()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [ECMAScript 仕様書の ClassRanges](https://tc39.es/ecma262/multipage/text-processing.html#sec-classranges)（英語）
