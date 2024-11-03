---
title: 数量子
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("JavaScript Guide")}}

数量子は、一致させる文字や式の数を示します。

{{EmbedInteractiveExample("pages/js/regexp-quantifiers.html", "taller")}}

## 種類

> [!NOTE]
> 以下の表の中で、*アイテム*は単一の文字だけでなく、[文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)と[グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)を示すこともあります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">文字</th>
      <th scope="col">意味</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          直前のアイテム "x" の 0 回以上の繰り返しに一致します。例えば
          <code>/bo*/</code> は "A ghost booooed" の "boooo" や "A bird warbled"
          の "b" に一致しますが、 "A goat grunted" には一致しません。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          直前のアイテム "x" の 1 回以上の繰り返しに一致します。<code>{1,}</code>
          と同等です。例えば <code>/a+/</code> は "candy" の "a" や
          "caaaaaaandy" のすべての "a" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          直前のアイテム "x" の 0 回か 1 回の出現に一致します。例えば
          <code>/e?le?/</code> は "angel" の "el" や "angle" の "le"
          に一致します。
        </p>
        <p>
          <code>*</code>、<code>+</code>、<code>?</code>、<code>{}</code> といった数量子の直後に使用した場合、既定とは逆に、その数量子を非貪欲（出現回数が最小のものに一致）とします。既定は貪欲（出現回数が最大のものに一致）です。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          "n" には非負の整数が入ります。直前のアイテム "x" がちょうど "n" 回出現するものに一致します。例えば <code>/a{2}/</code> は "candy" の "a" には一致しませんが、"caandy" のすべての "a"、"caaandy" の最初の 2 つの "a" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          "n" には非負の整数が入ります。直前のアイテム "x" の少なくとも "n" 回の出現に一致します。例えば、<code>/a{2,}/</code> は "candy" の "a" には一致しませんが、"caandy" や "caaaaaaandy" の "a" のすべてに一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <!-- cSpell:ignore cndy -->
        <p>
          ここで、"n" と "m" は非負の整数で、<code>m >= n</code> であリ、直前の項目 "x" に最小で "n" 回、最大で "m" 回一致します。
          例えば <code>/a{1,3}/</code> は "cndy" では一致せず、"candy" の 'a'、"caandy" の 最初の 2 個の "a"、"caaaaaaandy" の最初の 3 個の "a" に一致します。
          "caaaaaaandy" では元の文字列に "a" が 4 個以上ありますが、一致するのは "aaa" であることに注意してください。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code><em>x</em>*?</code><br /><code><em>x</em>+?</code><br /><code
            ><em>x</em>??</code
          ><br /><code><em>x</em>{n}?</code><br /><code><em>x</em>{n,}?</code
          ><br /><code><em>x</em>{n,m}?</code>
        </p>
      </td>
      <td>
        <p>
          既定では <code>*</code> や <code>+</code> といった数量子は貪欲です。つまり、できる限り多くの文字列と一致しようとします。数量子の後に <code>?</code> の文字を指定すると、数量子が「非貪欲」になります。つまり、一致が見つかるとすぐに停止します。例えば、"some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing" といった文字列が与えられた場合は、
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> は "&#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo>" に一致します。
          </li>
          <li><code>/&#x3C;.*?>/</code> は "&#x3C;foo>" に一致します。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 例

### 繰り返しパターン

この例では、1 つ以上の英数文字を `\w+` で、次に 1 つ以上の文字 "a" を `a+` で、最後に単語の境界を `\b` で照合します。

```js
const wordEndingWithAs = /\w+a+\b/;
const delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]
```

### 文字数のカウント

この例では、 1 文字だけの単語、 2 文字以上 6 文字以下の単語、 13 文字以上の単語を検索します。

```js
const singleLetterWord = /\b\w\b/g;
const notSoLongWord = /\b\w{2,6}\b/g;
const longWord = /\b\w{13,}\b/g;

const sentence = "Why do I have to learn multiplication table?";

console.table(sentence.match(singleLetterWord)); // ["I"]
console.table(sentence.match(notSoLongWord)); // [ "Why", "do", "have", "to", "learn", "table" ]
console.table(sentence.match(longWord)); // ["multiplication"]
```

### 省略可能な文字

この例では、 "our" または "or" で終わる単語を検索します。

```js
const britishText = "He asked his neighbour a favour.";
const americanText = "He asked his neighbor a favor.";

const regexpEnding = /\w+ou?r/g;
// \w+ 1 つ以上の文字
// o   "o" が続く
// u?  省略可能で "u" が続く
// r   "r" が続く

console.table(britishText.match(regexpEnding));
// ["neighbour", "favour"]

console.table(americanText.match(regexpEnding));
// ["neighbor", "favor"]
```

### 貪欲と非貪欲

この例では、 1 つ以上の単語文字または空白文字を `[\w ]+` と `[\w ]+? で検索します。 1 つ目は貪欲で、 2 つ目は貪欲ではありません。 2 つ目は最小要件を満たすとすぐに停止することに注意してください。

```js
const text = "I must be getting somewhere near the center of the earth.";
const greedyRegexp = /[\w ]+/;

console.log(text.match(greedyRegexp)[0]);
// "I must be getting somewhere near the center of the earth"
// テキストのすべてに一致（ピリオドを除く）

const nonGreedyRegexp = /[\w ]+?/; // 疑問符に注目
console.log(text.match(nonGreedyRegexp));
// "I"
// 一致する箇所は取りうる最も短い 1 文字
```

## 関連情報

- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)ガイド
- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)ガイド
- [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)ガイド
- [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [`RegExp`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)リファレンス
- [数量子: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
