---
title: アサーション
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

アサーションには、 行や単語の先頭・末尾を示す境界や、（先読み、後読み、条件式を含む）何らかの方法で照合が可能なことを示す、その他のパターンが含まれます。

{{InteractiveExample("JavaScript デモ: 正規表現のアサーション", "taller")}}

```js interactive-example
const text = "A quick fox";

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));
// 予想される結果: Array ["fox"]

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
// 予想される結果: Array ["A", "quick", "fox"]

const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));
// 予想される結果: Array ["quick"]
```

## 種類

### 境界型のアサーション

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">文字</th>
      <th scope="col">意味</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>^</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>入力開始境界アサーション:</strong></a>
          入力の先頭に一致します。複数行フラグ (<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a>, m) が有効である場合、改行文字の直後にも一致します。例えば <code>/^A/</code> は "an A" の "A" には一致しませんが、"An A" の先頭の "A" には一致します。
        </p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> この文字は、<a
              href="/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
              >文字クラス</a
            >パターンの先頭にある場合は異なる意味を持ちます。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>入力末尾境界アサーション:</strong></a>
          入力の末尾に一致します。複数行フラグ (<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a>, m) が有効である場合、は、改行文字の直前にも一致します。例えば <code>/t$/</code> は "eater" の "t" には一致しませんが、"eat" の "t" には一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>単語境界アサーション:</strong></a>
          単語の境界に一致します。これは、単語構成文字と後に続く非単語構成文字の間、または非単語構成文字と後に続く単語構成文字の間、または文字列の先頭・末尾です。単語の区切りは一致する「文字」ではありません。アンカーのように、単語の区切りは一致した部分に含まれません。言い換えると、一致した単語の区切りの長さは 0 です。
        </p>
        <p>例:</p>
        <ul>
          <li><code>/\bm/</code> は "moon" の "m" に一致します。</li>
          <li>
            <code>/oo\b/</code> は "moon" の "oo" に一致しません。これは "oo" の 後に単語構成文字である "n" が続いているためです。
          </li>
          <li>
            <code>/oon\b/</code> は "moon" の "oon"
            に一致します。これは、文字列の終端であって、後に単語構成文字が続いていないためです。
          </li>
          <li>
            <code>/\w\b\w/</code> はどこにも一致しないでしょう。単語構成文字の後に非単語構成文字と単語構成文字の両方が続くことはありえないからです。
          </li>
        </ul>
        <p>
          バックスペース文字 (<code>[\b]</code>) については<a
            href="/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >文字クラス</a
          >を見てください。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>非単語境界アサーション:</strong></a>
          単語の区切り以外に一致します。これは、前の文字と次の文字が同じ種類である位置のことです。2 つの文字の間や 2 つの空白の間など、どちらも単語構成文字か、あるいはどちらも非単語構成文字でなければなりません。文字列の先頭と末尾は、非単語構成文字とみなされます。一致した単語の区切りと同じように、一致した非単語の区切りも一致に含まれません。例えば、 <code>/\Bon/</code> は "at noon" の "on" に、 <code>/ye\B/</code> は "possibly yesterday" の "ye" に一致します。
        </p>
      </td>
    </tr>
  </tbody>
</table>

### その他のアサーション

> [!NOTE]
> `?` の文字は数量子としても使用されます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">文字</th>
      <th scope="col">意味</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>先読みアサーション:</strong></a>
          "x" の後に "y" が続く場合のみ "x" に一致します。例えば、 <code>/Jack(?=Sprat)/</code> は "Jack" の後に "Sprat" が続く場合のみ一致します。<br /><code>/Jack(?=Sprat|Frost)/</code> は "Jack" の後に "Sprat" または "Frost" が続く場合のみ一致します。しかし、 "Sprat" も "Frost" も一致した結果には含まれません。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>否定先読みアサーション:</strong></a>
          "x" の後に "y" が続いていない場合のみ "x" に一致します。例えば、 <code>/\d+(?!\.)/</code> は数字の後に小数点が続かない場合のみ一致します。<code>/\d+(?!\.)/.exec('3.141')</code>は "141" には一致しますが、 "3" には一致しません。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>後読みアサーション:</strong></a>
          "x" の前に "y" がある場合のみ "x" に一致します。例えば、<code>/(?&#x3C;=Jack)Sprat/</code> は、 "Jack" が先行する場合のみ、 "Sprat" に一致します。 <code>/(?&#x3C;=Jack|Tom)Sprat/</code> は、 "Jack" か "Tom" が先行する場合のみ、 "Sprat" に一致します。しかし、 "Jack" も "Tom" も一致した結果には含まれません。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>否定後読みアサーション:</strong></a>
          "x" の前に "y" がない場合のみ "x" に一致します。例えば、 <code>/(?&#x3C;!-)\d+/</code> は、数字の前にマイナス記号がない場合のみ、数字に一致します。 <code>/(?&#x3C;!-)\d+/.exec('3')</code> は "3" に一致します。 <code>/(?&#x3C;!-)\d+/.exec('-3')</code> では数字の前にマイナス記号があるため、一致するものは見つかりません。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 例

### 基本的な境界型の例

<!-- cSpell:ignore greon -->

```js
// おかしい文字列を修正するために正規表現の境界を利用します。
buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// 1) 文字列の最初と改行の直後の一致を修正するために ^ を利用します。
buggyMultiline = buggyMultiline.replace(/^t/gim, "h");
console.log(1, buggyMultiline); // 'tey' => 'hey' に、 'tangs' => 'hangs' に修正します。 'traa' は対象外です。

// 2) テキストの末尾を修正するために $ を利用します。
buggyMultiline = buggyMultiline.replace(/aa$/gim, "ee.");
console.log(2, buggyMultiline); // 'traa' => 'tree.' に修正します。

// 3) 単語と空白の間の境界の右の文字に一致させるために \b を利用します。
buggyMultiline = buggyMultiline.replace(/\bi/gim, "t");
console.log(3, buggyMultiline); // 'ihe' => 'the' に修正しますが、'light'は対象外です。

// 4) エンティティの境界内の文字に一致するために \B を利用します。
fixedMultiline = buggyMultiline.replace(/\Bo/gim, "e");
console.log(4, fixedMultiline); // 'greon' => 'green' に修正しますが、'on' は対象外です。
```

### ^ 制御文字を利用した入力の先頭との照合

`^` は、通常、入力の先頭に一致させるために利用します。この例では、`/^A/` という正規表現で 'A' で始まるフルーツを取得します。ここでの `^` は、入力の先頭を示すという、たった 1 つの役割を果たしています。適切なフルーツを選択するために [`filter`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) メソッドと[アロー](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)関数を用います。

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// /^A/ 正規表現で 'A' で始まるフルーツを選択します。
// ここでの'^' 制御記号は「入力の先頭に一致する」という 1 つの役割だけで利用されています。

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

2 番目の例での `^` は、入力の先頭への一致と、[文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)で用いられた場合の文字集合の否定または補集合という、両方で利用されています。

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// /^[^A]/ という正規表現で 'A' で始まらないフルーツを選択します。
// この例では、'^' 制御記号は 2 つの意味を表しています。
// 1) 入力の先頭に一致
// 2) [^A] という文字集合の否定または補集合
// つまり、角括弧で囲まれた中にないあらゆるものに一致します。

const fruitsStartsWithNotA = fruits.filter((fruit) => /^[^A]/.test(fruit));

console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]
```

それ以外の例は [入力境界アサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)のリファレンスを参照してください。

### 単語の境界に一致

この例では、 "en" または "ed" で終わる単語を含む果物の名前にを照合します。

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// 単語の終わりに 'en' または 'ed' を含む記述を選択します。
const enEdSelection = fruitsWithDescription.filter((description) =>
  /(?:en|ed)\b/.test(description),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

それ以外の例は [単語境界アサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)のリファレンスを参照してください。

### 先読みアサーション

この例は、 "First" という単語の後に "test" という単語が続く場合のみ一致しますが、"test" は照合結果に含まれません。

```js
const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

それ以外の例は [先読みアサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)のリファレンスを参照してください。

### 基本的な否定先読みアサーション

例えば、`/\d+(?!\.)/` は小数点が後に続かない数値にだけ一致します。`/\d+(?!\.)/.exec('3.141')` は "141" に一致しますが、 "3" には一致しません。

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

それ以外の例は [先読みアサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)のリファレンスを参照してください。

### アサーションと範囲における '?!' の組み合わせの異なる意味での利用

`?!` の組み合わせを利用するとき、アサーション（`/x(?!y)/` など）と[文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) （`[^?!]` など）では異なる意味を持ちます。

```js
const orangeNotLemon =
  "Do you want to have an orange? Yes, I do not want to have a lemon!";

// アサーション /x(?!y)/ と範囲 /[^?!]/ では '?!' の組み合わせの利用は異なる意味を持ちます。
const selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

const selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]
```

### 後読みアサーション

この例では、 "orange" という単語の前に "ripe" という単語がある場合のみ、 "apple" に置き換えます。

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=ripe )orange/, "apple"),
);
console.log(newFruits); // ['ripe apple A', 'green orange B', 'ripe apple C']
```

それ以外の例は [後読みアサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)のリファレンスを参照してください。

## 関連情報

- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)ガイド
- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)ガイド
- [数量子](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)ガイド
- [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [`RegExp`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)リファレンス
- [入力境界アサーション: `^`, `$`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [先読みアサーション: `(?=...)`, `(?!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [後読みアサーション: `(?<=...)`, `(?<!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [単語境界アサーション: `\b`, `\B`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
