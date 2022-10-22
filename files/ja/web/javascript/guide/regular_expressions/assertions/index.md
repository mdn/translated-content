---
title: 言明
slug: Web/JavaScript/Guide/Regular_Expressions/Assertions
---

{{jsSidebar("JavaScript Guide")}}

言明には、 行や単語の始まり・終わりを示す、境界や、（先読み、後読み、条件式を含む）何らかの方法でマッチが可能なことを示す、その他のパターンが含まれます。

## 種類

### 境界型の言明

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">文字</th>
      <th scope="col">意味</th>
    </tr>
    <tr>
      <td><code>^</code></td>
      <td>
        <p>
          入力の先頭にマッチします。複数行フラグが true
          にセットされている場合は、改行文字の直後にもマッチします。例えば
          <code>/^A/</code> は "an A" の 'A' にはマッチしませんが、"An E" の 'A'
          にはマッチします。
        </p>
        <div class="blockIndicator note">
          <p>
            この文字は、文字<a
              href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
              >集合</a
            >パターンの先頭にある場合は異なる意味を持ちます。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          入力の末尾にマッチします。複数行フラグが true
          にセットされている場合は、改行文字の直前にもマッチします。例えば
          <code>/t$/</code> は "eater" の "t" にはマッチしませんが、"eat" の "t"
          にはマッチします。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          単語の区切りにマッチします。これは、単語構成文字と後に続く非単語構成文字の間、または非単語構成文字と後に続く単語構成文字の間、または文字列の先頭・最後です。単語の区切りはマッチする「文字」ではありません。アンカーのように、単語の区切りはマッチした部分に含まれません。言い換えると、マッチした単語の区切りの長さは
          0 です。
        </p>
        <p>入力文字に "moon" を使用した例:</p>
        <ul>
          <li>
            <code>/\bm/</code> は "m" にマッチします。これは `\b`
            が文字列の先頭に存在するからです。
          </li>
          <li>
            <code>/oo\b/</code> は "oo" にマッチしません。これは '\b'
            の前後に単語構成文字があるためです。
          </li>
          <li>
            <code>/oon\b/</code> は "oon"
            にマッチします。これは、文字列の終端であるためです。
          </li>
          <li>
            <code>/\w\b\w/</code> はどこにもマッチしないでしょう。これは、'\b'
            の前後に単語構成文字があるためです。
          </li>
        </ul>
        <p>
          バックスペース文字 ([\b]) については<a
            href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            >文字クラス</a
          >を見てください。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>単語の区切り以外にマッチします。マッチするのは以下の場合です：</p>
        <ul>
          <li>文字列の先頭の文字の前</li>
          <li>文字列の終端の文字の後</li>
          <li>単語内の 2 文字の間</li>
          <li>2 つの単語ではない文字の間</li>
          <li>空文字列</li>
        </ul>
        <p>
          例えば <code>/\B../</code> は "noonday" の 'oo' に、<code
            >/y\B./</code
          >
          は "possibly yesterday" の 'ye' にマッチします。
        </p>
      </td>
    </tr>
  </thead>
</table>

### その他の言明

> **メモ:** `?` 文字は数量詞として使うことができます。

| 文字     | 意味                                                                                                                                                                                                                                                                                                                                   |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x(?=y)   | **先読み言明：** _`x`_ に _`y`_ が続く場合のみ _`x`_ にマッチします。例えば `/Jack(?=Sprat)/` は "Jack" の後に "Sprat" が続く場合のみ "Jack" にマッチします。 `/Jack(?=Sprat\|Frost)/` は "Jack" の後ろに "Sprat" または "Frost" が続く場合のみ "Jack" にマッチします。しかしながら、"Sprat" も "Frost" もマッチの結果には表れません。 |
| x(?!y)   | **否定先読み言明：** _`x`_ に `y` が続かない場合のみ _`x`_ にマッチします。例えば `/\d+(?!\.)/` は後ろに小数点が続かない数値にマッチします。正規表現 `/\d+(?!\.)/.exec("3.141")` は "141" にマッチしますが "3.141" にはマッチしません。                                                                                                |
| (?<=y)x  | **後読み言明：** `y` に _`x`_ が続く場合のみ `x` にマッチします。例えば、`/(?<=Jack)Sprat/` は "Jack" に続く "Sprat" のみにマッチします。 `/(?<=Jack\|Tom)Sprat/` は "Jack" または "Tom" に続く "Sprat" のみにマッチします。しかしながら、"Jack" も "Tom" もマッチの結果には表れません。                                               |
| (?\<!y)x | **否定後読み言明：** _`y`_ に `x` が続かない場合のみ _`x`_ にマッチします。例えば、`/(?<!-)\d+/` は、マイナス記号のつかない数字のみにマッチします。 `/(?<!-)\d+/.exec('3')` は "3" がマッチします。 `/(?<!-)\d+/.exec('-3')` はマイナス記号に数字が続いているため、マッチが見つかりません。                                            |

## 例

### 基本的な境界型の例

```js
// おかしい文字列を修正するために正規表現の境界を利用します。
buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// 1) 文字列の最初と改行の直後のマッチを修正するために ^ を利用します。
buggyMultiline = buggyMultiline.replace(/^t/gim,'h');
console.log(1, buggyMultiline); // 'tey', 'tangs' を 'hey', 'hangs' に修正します。 'traa' は対象外です。

// 2) テキストの末尾を修正するために $ を利用します。
buggyMultiline = buggyMultiline.replace(/aa$/gim,'ee.');
console.log(2, buggyMultiline); // 'traa' を 'tree' に修正します。

// 3) 単語と空白の間の境界の右の文字にマッチさせるために \b を利用します。
buggyMultiline = buggyMultiline.replace(/\bi/gim,'t');
console.log(3, buggyMultiline); // 'ihe' を修正しますが、'light'は対象外です。

// 4) エンティティの境界内の文字にマッチするために \B を利用します。
fixedMultiline = buggyMultiline.replace(/\Bo/gim,'e');
console.log(4, fixedMultiline); // 'greon' を修正しますが、'on' は対象外です。
```

### ^ 制御文字を利用した入力の開始へのマッチ

`^` は、通常、単語の開始にマッチさせるために利用します。この例では、`/^A/` という正規表現で 'A' で始まるフルーツを取得します。ここでの `^` は、入力の開始を示すという、たった 1 つの役割を果たしています。適切なフルーツを選択するために[アロー](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 関数で [filter](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) メソッドを用います。

```js
let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// /^A/ 正規表現で 'A' で始まるフルーツを選択します。
// ここでの'^' 制御記号は「入力の開始にマッチする」という 1 つの役割だけで利用されています。

let fruitsStartsWithA = fruits.filter(fruit => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

2 番目の例での `^` は、入力の開始へのマッチと、[グル―プ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)で用いられた場合の文字集合の否定または補集合という、両方で利用されています。

```js
let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// /^[^A]/ という正規表現で 'A' で始まらないフルーツを選択します。
// この例では、'^' 制御記号は 2 つの意味を表しています。
// 1) 入力の開始にマッチ
// 2) [^A]という文字集合の否定または補集合:
// つまり、角括弧で囲まれたものでないあらゆるものにマッチします

let fruitsStartsWithNotA = fruits.filter(fruit => /^[^A]/.test(fruit));

console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]
```

### 単語の境界にマッチ

```js
let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// 単語の終わりに 'en' または 'ed' を含む記述を選択します。
let enEdSelection = fruitsWithDescription.filter(descr => /(en|ed)\b/.test(descr));

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

### 先読み言明

```js
// JS Lookahead assertion x(?=y)

let regex = /First(?= test)/g;

console.log('First test'.match(regex)); // [ 'First' ]
console.log('First peach'.match(regex)); // null
console.log('This is a First test in a year.'.match(regex)); // [ 'First' ]
console.log('This is a First peach in a month.'.match(regex)); // null
```

### 基本的な否定先読み言明

例えば、`/\d+(?!\.)/` は小数点が後に続かない数値にだけマッチします。`/\d+(?!\.)/.exec('3.141')` は "141" にマッチしますが、 "3" にはマッチしません。

```js
console.log(/\d+(?!\.)/g.exec('3.141')); // [ '141', index: 2, input: '3.141' ]
```

### 言明と範囲における '?!' の組み合わせの異なる意味での利用

`?!` の組み合わせを利用するとき、[言明](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions) `/x(?!y)/` と[範囲](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) `[^?!]`では異なる意味を持ちます。

```js
let orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a lemon!";

// 言明 /x(?!y)/ と範囲 /[^?!]/ では '?!' の組み合わせの利用は異なる意味を持ちます。
let selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

let selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]
```

### 後読み言明

```js
let oranges = ['ripe orange A ', 'green orange B', 'ripe orange C',];

let ripe_oranges = oranges.filter( fruit => fruit.match(/(?<=ripe )orange/));
console.log(ripe_oranges); // [ 'ripe orange A ', 'ripe orange C' ]
```

## 仕様

| 仕様                                                                                 | 策定状況                     | コメント |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName('ESDraft', '#sec-assertion', 'RegExp: Assertions')}} | {{Spec2('ESDraft')}} |          |

## ブラウザサポート

{{Compat("javascript.builtins.RegExp.assertions")}}

## 関連情報

- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
- [`RegExp()` コンストラクタ](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
