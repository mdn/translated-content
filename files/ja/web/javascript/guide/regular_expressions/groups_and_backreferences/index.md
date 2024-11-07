---
title: グループと後方参照
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("JavaScript Guide")}}

グループは複数のパターンを全体としてグループ化し、グループをキャプチャすることで、正規表現パターンを使用して文字列と一致する場合に、追加の副一致情報を提供します。後方参照は、同じ正規表現で以前に捕捉したグループを参照します。

{{EmbedInteractiveExample("pages/js/regexp-groups-backreferences.html")}}

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
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>キャプチャグループ:</strong></a>
          <code><em>x</em></code> に一致し、一致した内容を記憶します。例えば <code>/(foo)/</code> は "foo bar" の "foo" に一致し、記憶します。
        </p>
        <p>
          正規表現は複数のキャプチャグループを持つことができます。結果、一般的にキャプチャグループ内の左括弧と同じ順にある、配列の要素のキャプチャグループに一致しています。たいていの場合、これはキャプチャグループ自身の順番です。これはキャプチャグループがネストしている場合に重要です。一致は結果の要素の添字 (<code>[1], …, [n]</code>) や、あらかじめ定義されている <code>RegExp</code> オブジェクトのプロパティ (<code>$1, …, $9</code>) を使ってアクセスできます。
        </p>
        <p>
          キャプチャグループはパフォーマンス上の損失があります。一致した部分文字列を使わない場合はキャプチャなし括弧（後述）を使ったほうがいいでしょう。
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
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>名前付きキャプチャグループ:</strong></a>
          "x" に一致し、<code>&#x3C;Name></code> で指定された名前に従い、返される一致の <code>groups</code> プロパティに記憶されます。山括弧 ('<code>&#x3C;</code>' と '<code>></code>') にはグループ名が必須です。
        </p>
        <p>
          例えば、電話番号からアメリカのエリアコードを取り出す際、 <code>/\((?&#x3C;area>\d\d\d)\)/</code> を使うことができます。 結果の番号は <code>matches.groups.area</code> に表示されます。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>キャプチャなしグループ:</strong></a>
          "x" に一致しますが、一致した内容は記憶しません。一致した部分文字列は、結果の配列の要素 (<code>[1], …, [n]</code>) や、あらかじめ定義されている <code>RegExp</code> オブジェクトのプロパティ (<code>$1, …, $9</code>) から呼び出すことはできません。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>修飾子:</strong></a>
          指定したフラグを、囲まれたパターンに対してのみ有効または無効にします。修飾子では、<code>i</code>、<code>m</code>、<code>s</code> フラグのみ使用できます。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference"><strong>後方参照:</strong></a>
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
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>名前付き後方参照:</strong></a>
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

この例では、キャプチャグループを使用して記憶することにより、構造化された形式で 2 つの単語を照合します。 `w+`は 1 つ以上の単語文字と一致し、括弧 `()` はキャプチャグループを作成します。 `g` フラグはすべて一致させるために使用します。

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

それ以外の例は [キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)リファレンスを参照してください。

### 名前付きグループの使用

この例も上と同じですが、代わりに名前付きキャプチャグループを使用して、一致した単語を記憶しています。この方法では、一致した単語をその意味によってアクセスすることができます。

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstName>\w+), Last_Name: (?<lastName>\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstName} ${match.groups.lastName}`);
}
```

それ以外の例は [名前付きキャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)リファレンスを参照してください。

### グループと後方参照の使用

この例では、最初に単一の引用符または二重引用符を `['"]` で照合し、それを記憶し、任意の数の文字を `.*?` (`*?` は[貪欲ではない数量子](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers))で任意の数の文字と照合し、˶1 で再び記憶された引用符文字と照合します。 `\1` は最初のキャプチャグループへの後方参照で、同じ型の引用符に照合します。したがって、結果は `"'"` と `'"'` の 2 つの文字列になります。

```js
const quote = `単一引用符 "'" と二重引用符 '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

それ以外の例は [後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)リファレンスを参照してください。

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

- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)ガイド
- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)ガイド
- [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)ガイド
- [数量子](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)ガイド
- [`RegExp`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)リファレンス
- [後方参照: `\1`, `\2`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [キャプチャグループ: `(...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [名前付き後方参照: `\k<name>`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [名前付きキャプチャグループ: `(?<name>...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [キャプチャなしグループ: `(?:...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
