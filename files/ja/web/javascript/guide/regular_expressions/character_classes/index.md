---
title: 文字クラス
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

文字クラスは、文字や数字の区別など、文字の種類を区別します。

{{InteractiveExample("JavaScript デモ: 正規表現の文字クラス")}}

```js interactive-example
const chessStory = "He played the King in a8 and she moved her Queen in c2.";
const regexpCoordinates = /\w\d/g;
console.log(chessStory.match(regexpCoordinates));
// 予想される結果: Array [ 'a8', 'c2']

const moods = "happy 🙂, confused 😕, sad 😢";
const regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu;
console.log(moods.match(regexpEmoticons));
// 予想される結果: Array ['🙂', '😕', '😢']
```

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
      <td>
        <code>[xyz]<br />[a-c]</code>
      </td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>文字クラス:</strong></a>
          囲んだ文字のいずれかに一致します。ハイフンを使用して文字の範囲を指定することもできますが、ハイフンが角括弧で囲まれた最初または最後の文字として現れた場合、それは通常の文字として文字クラスに含めるためのリテラルハイフンと見なされます。
        </p>
        <p>
          例えば、 <code>[abcd]</code> は <code>[a-d]</code> と同じです。
          "brisket" の "b" や "chop" の "c" に一致します。
        </p>
        <p>
          例えば、 <code>[abcd-]</code> と <code>[-abcd]</code> は "brisket" の "b"、 "chop" の "c"、そして "non-profit" の "-" （ハイフン）に一致します。
        </p>
        <p>
          例えば、 <code>[\w-]</code> は <code>[A-Za-z0-9_-]</code> と同じです。どちらも "brisket" の "b"、 "chop" の "c"、 "non-profit" の "n" に一致します。
        </p>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets"><code>unicodeSets</code></a> フラグ (<code>v</code>) が有効な場合、文字クラスにはいくつかの機能が追加されます。詳しくは<a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class">文字クラス</a>参照を参照してください。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>[^xyz]<br />[^a-c]</code>
        </p>
      </td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>否定文字クラス:</strong></a>
          角括弧で囲まれているものではないもの全てに一致します。ハイフンを使用して文字の範囲を指定することができますが、ハイフンが <code>^</code> の後の最初の文字、または角括弧で囲まれた最後の文字として現れた場合、それは通常の文字として文字クラスに含めるためにリテラルハイフンと解釈されます。
          例えば、<code>[^abc]</code> は <code>[^a-c]</code> と同じです。これらは、最初は "bacon" の "o" や "chop" の "h" に一致します。
        </p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> ^ の文字は<a
              href="/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
              >入力の先頭</a>も意味することがあります。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>ワイルドカード:</strong></a>
          改行文字 (<code>\n</code>、<code>\r</code>、<code>\u2028</code>、<code>\u2029</code>) を除くあらゆる 1 文字と一致します。
          例えば、<code>/.y/</code> は "my" と "ay" に一致ますが、"yes make my day" の "yes" には一致しません。
          <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> フラグ (s) が有効な場合は、改行文字にも一致します。
          文字クラス内では <code>.</code> はその特別な意味を失い、文字通りの "." と一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>数字文字クラスエスケープ:</strong></a>
          あらゆる（アラビア）数字に一致します。<code>[0-9]</code> に相当します。例えば <code>/\d/</code> や <code>/[0-9]/</code> は "B2 is the suite number" の "2" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>非数字文字クラスエスケープ:</strong></a>
          あらゆる（アラビア）数字以外の文字に一致します。<code>[^0-9]</code> に相当します。例えば <code>/\D/</code> や <code>/[^0-9]/</code> は "B2 is the suite number" の "B" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>英数文字クラスエスケープ:</strong></a>
          アンダースコアを含むあらゆる半角英数字（基本ラテンアルファベット）に一致します。 <code>[A-Za-z0-9_]</code> に相当します。例えば <code>/\w/</code> は、"apple" の "a"、"$5.28" の "5"、"3D" の "3"、"Émanuel" の "e" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>非英数文字クラスエスケープ:</strong></a>
          基本ラテンアルファベットの文字以外に一致します。 <code>[^A-Za-z0-9_]</code> と同等です。例えば <code>/\W/</code> や <code>/[^A-Za-z0-9_]/</code> は、"50%" の "%" や "Émanuel" の "É" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>ホワイトスペース文字クラスエスケープ:</strong></a>
          ホワイトスペース文字、例えば空白、タブ、改ページ、改行、その他の Unicode 空白文字などの 1 文字に一致します。 <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code> に相当します。例えば <code>/\s\w*/</code> は "foo bar" の "bar" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>非ホワイトスペース文字クラスエスケープ:</strong></a>
          ホワイトスペース以外の 1 文字に一致します。
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code> に相当します。
          例えば <code>/\S\w*/</code> は "foo bar" の "foo" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>水平タブに一致します。</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>復帰文字に一致します。</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>行送り文字に一致します。</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>垂直タブに一致します。</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>改ページに一致します。</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        後退文字に一致します。単語境界アサーション (<code>\b</code>) については<a
          href="/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >アサーション</a
        >を参照してください。
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>NUL 文字に一致します。この後ろに他の数字を続けてはいけません。</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          <a href="https://ja.wikipedia.org/wiki/
キャレット記法"
            >キャレット記法</a
          >を使用した制御文字に一致します。 "X" には A–Z の文字が入ります（コードポイント<code>U+0001</code><em>–</em><code>U+001A</code> に対応します）。例えば
          <code>/\cM\J/</code> は "\r\n" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        <code><em>hh</em></code> （2 桁の 16 進数）コードからなる文字に一致します。
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        <code><em>hhhh</em></code> （4 桁の 16 進数）の値からなる UTF-16 コードユニットに一致します。
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em></code> または <code><em>\u{hhhhh}</em></code>
      </td>
      <td>
        （<code>u</code> フラグがセットされた時のみ） <code>U+<em>hhhh</em></code> または <code>U+<em>hhhhh</em></code> (16 進数) Unicode 値からなる文字に一致します。
      </td>
    </tr>
    <tr>
      <td>
        <code>\p{<em>UnicodeProperty</em>}</code>,
        <code>\P{<em>UnicodeProperty</em>}</code>
      </td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode 文字クラスエスケープ:</strong></a>
          Unicode 文字プロパティに基づいた文字に一致します。例えば、絵文字、日本語のカタカナ、中国語や日本語の漢字などです。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          次の文字を特別に扱うこと、「エスケープ」することを示します。
          その振る舞いは、2 通りのうちのどちらか 1 つです。
        </p>
        <ul>
          <li>
            通常文字の前に付けられた場合、次の文字が特別なもので、文字通りには評価されないことを示します。
            例えば、 <code>/b/</code> は文字 "b" に一致します。しかし "b" の前にバックスラッシュを置いて <code>/\b/</code> とすると、単語区切りを意味するようになります。
          </li>
          <li>
            特殊文字の前に付けられた場合、次の文字が特別なものでなく、文字通りに評価されることを表します。例えば、 "*" は、直前の文字が 0 個以上の出現した場合に一致することを意味する特殊文字です。例えば、 <code>/a*/</code> は 0 個以上の "a" と一致します。 <code>*</code> と文字通りに照合するには、その直前にバックスラッシュを入れます。例えば、<code>/a\*/</code> は "a*" と一致します。
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> この文字を文字通りに一致させるには、それ自身をエスケープしてください。つまり、 <code>\</code> を検索するには <code>/\\/</code> を使ってください。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction"><strong>論理和:</strong></a>
          "x" または "y" に一致します。パイプ (<code>|</code>) で区切られた各成分は、代替 (<em>alternative</em>)と呼ばれます。
          例えば、<code>/green|red/</code> は "green apple" の "green" と "red apple" の "red" に一致します。
        </p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> 論理和は「選択肢の集合」を指定するもう一つの方法ですが、文字クラスではありません。論理和は独立したものではありません。大きなパターンの一部にするためには<a href="/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">グループ</a>を使用する必要があります。<code>[abc]</code> は機能的には <code>(?:a|b|c)</code> と等価です。
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 例

### 一連の数字を探す

この例では、4 桁の数字列を `\d{4}` で照合します。`\b` は [単語境界](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)を示します（つまり、数列の途中から照合を始めたり終了したりしない）。

```js
const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

それ以外の例は[文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)リファレンスを参照してください。

### A から始まる（ラテンアルファベットの）単語を探す

この例では、A で始まる単語を照合します。`\b` は[単語境界](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)（単語の途中から照合を始めない）を示します。`[aA]` は文字 "a" または "A" を示します。`\w+` はラテンアルファベットの任意の文字を複数回示します（`+` は[数量子](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)です）。なお、すでに単語の文字がなくなるまで照合するので、末尾の `\b` 境界は必要ありません。

```js
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

それ以外の例は[文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)リファレンスを参照してください。

### （Unicode 文字の）単語を探す

単語を表すために、ラテンアルファベットではなく、 Unicode 文字の範囲を使用することができます。（つまり、ロシア語やアラビア語のような他の言語のテキストを扱うことができます。） Unicode の 「基本多言語面」には、世界中で使われているほとんどの文字が含まれており、それらの文字で書かれた単語にマッチするための文字クラスと範囲を利用できます。

```js
const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// U+0000 から U+FFFF までの BMP、ただし、U+0020 は空白

console.table(nonEnglishText.match(regexpBMPWord));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

それ以外の例は [Unicode 文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)リファレンスを参照してください。

## 母音を数える

この例では、母音 (A, E, I, O, U, Y) で始まる単語を数えます。 `g` フラグは、テキスト中に出現するすべてのパターンに使用します。 `i` フラグはパターンを大文字と小文字を区別しないようにするために使用し、大文字の母音と小文字の母音の両方に一致します。

```js
const aliceExcerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then.";
const regexpVowels = /[aeiouy]/gi;

console.log("母音の数:", aliceExcerpt.match(regexpVowels).length);
// 母音の数: 26
```

## 関連情報

- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)ガイド
- [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)ガイド
- [数量子](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)ガイド
- [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [`RegExp`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)リファレンス
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [文字クラスエスケープ: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [文字エスケープ: `\n`, `\u{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [論理和: `|`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode 文字クラスエスケープ: `\p{...}`, `\P{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [ワイルドカード: `.`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
