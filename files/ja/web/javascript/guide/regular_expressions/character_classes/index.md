---
title: 文字クラス
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
l10n:
  sourceCommit: effd5de5e42bfe045c3bf44b2d7b14f4d6146785
---

{{JSSidebar("JavaScript Guide")}}

文字クラスは、文字や数字の区別など、文字の種類を区別します。

{{EmbedInteractiveExample("pages/js/regexp-character-classes.html")}}

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
          文字クラス。囲んだ文字のいずれかに一致します。ハイフンを使用して文字の範囲を指定することもできますが、ハイフンが角括弧で囲まれた最初または最後の文字として現れた場合、それは通常の文字として文字クラスに含めるためのリテラルハイフンと見なされます。
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
          否定または補完する文字クラス。つまり、括弧で囲まれていないもの全てに一致します。ハイフンを使用して文字の範囲を指定することができますが、ハイフンが <code>^</code> の後の最初の文字、または角括弧で囲まれた最後の文字として現れた場合、 それは通常の文字として文字クラスに含めるためにリテラルハイフンと解釈されます。例えば、<code>[^abc]</code> は <code>[^a-c]</code> と同じです。これらは、最初は "bacon" の "o" や "chop" の "h" に一致します。
        </p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> ^ の文字は<a
              href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
              >入力の先頭</a>も意味することがあります。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>次のいずれかの意味を持ちます。</p>
        <ul>
          <li>
            改行文字 (<code>\n</code>、<code>\r</code>、<code>\u2028</code>、<code>\u2029</code>) を除くあらゆる 1 文字と一致します。例えば、<code>/.y/</code> は "my" と "ay" に一致し、"yes make my day" の "yes" には一致しません。
          </li>
          <li>
            文字クラス内では <code>.</code> はその特別な意味を失い、文字通りの "." と一致します。
          </li>
        </ul>
        <p>
          複数行フラグ (<code>m</code>) は "." の意味を変えないことに注意してください。そのため、複数行にわたるパターンに一致させるには、（IE の古いバージョン以外なら）文字集合 <code>[^]</code> を使うことで、改行を含む任意の文字に一致します。
        </p>
        <p>
          <code>s</code> "dotAll" フラグは、ドットが改行文字に一致できるようにします。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          あらゆる（アラビア）数字に一致します。<code>[0-9]</code> に相当します。例えば <code>/\d/</code> や <code>/[0-9]/</code> は "B2 is the suite number" の "2" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          あらゆる（アラビア）数字以外の文字に一致します。<code>[^0-9]</code> に相当します。例えば <code>/\D/</code> や <code>/[^0-9]/</code> は "B2 is the suite number" の "B" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          アンダースコアを含むあらゆる半角英数字（基本ラテンアルファベット）に一致します。 <code>[A-Za-z0-9_]</code> に相当します。例えば <code>/\w/</code> は、"apple" の "a"、"$5.28" の "5"、"3D" の "3" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          基本ラテンアルファベットの文字以外に一致します。 <code>[^A-Za-z0-9_]</code> と同等です。例えば <code>/\W/</code> や <code>/[^A-Za-z0-9_]/</code> は、"50%" の "%" や "Émanuel" の "É" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          ホワイトスペース 1 文字に一致します。例えば空白、タブ、改ページ、改行、その他の Unicode 空白文字などです。 <code>[\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code> に相当します。例えば <code>/\s\w*/</code> は "foo bar" の " bar" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          ホワイトスペース以外の 1 文字に一致します。<code
            >[^
            \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          > に相当します。例えば <code>/\S\w*/</code> は "foo bar" の "foo" に一致します。
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
        後退文字に一致します。単語境界文字 (<code>\b</code>) を探す場合は<a
          href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
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
        <a
          href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes"
          >Unicode 文字プロパティ</a
        > に基づいて照合します（例えば、絵文字、日本語のカタカナ文字、日本語や中国語の漢字のみに一致するようにするなど）。
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
            通常文字の前に付けられた場合、次の文字が特別なもので、文字通りには評価されないことを示します。例えば、 <code>/b/</code> は文字 <code>"b"</code> に一致します。しかし "b" の前にバックスラッシュを置いて <code>\b</code> とすると、単語区切りを意味するようになります。
          </li>
          <li>
            特殊文字の前に付けられた場合、次の文字が特別なものでなく、文字通りに評価されることを表します。例えば、 "*" は、直前の文字が 0 個以上の出現した場合に一致することを意味する特殊文字です。例えば、 <code>/a*/</code> は 0 個以上の "a" と一致します。 <code>*</code> と文字通りに照合するには、その直前にバックスラッシュを入れます。例えば、<code>/a\*/</code> は "a*" と一致します。
          </li>
        </ul>
        <div class="notecard note">
          <p>
            この文字を文字通りに一致させるには、それ自身をエスケープします。つまり、 <code>\</code> を検索するには <code>/\\/</code> を使ってください。
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
          <strong>論理和: </strong>"x" または "y" に一致します。パイプ (<code>|<code>) で区切られた各成分は、代替 (<em>alternative</em>)と呼ばれます。例えば、<code>/green|red/</code> は "green apple" の "green" と "red apple" の "red" に一致します。
        </p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> 論理和は「選択肢の集合」を指定するもう一つの方法ですが、文字クラスではありません。論理和は独立したものではありません。大きなパターンの一部にするためには<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences">グループ</a>を使用する必要があります。<code>[abc]</code> は機能的には <code>(?:a|b|c)</code> と等価です。
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 例

### 一連の数字を探す

```js
const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;
// \b は境界を示します（つまり、単語の途中から照合開始しません）
// \d{4} は 4 つの数字を示します
// \b は別の境界を示します（つまり、単語の真ん中でマッチが終わりません）

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

### A から始まる（ラテンアルファベットの）単語を探す

```js
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g;
// \b は境界を示します（つまり、単語の途中から照合を開始しません）
// [aA] は a または A の文字を示します
// \w+ は複数回の *ラテンアルファベットからなる* 任意の文字を示します

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

### （Unicode 文字の）単語を探す

単語を表すために、ラテンアルファベットではなく、 Unicode 文字の範囲を使用することができます。（つまり、ロシア語やアラビア語のような他の言語のテキストを扱うことができます。） Unicode の 「基本多言語面」には、世界中で使われているほとんどの文字が含まれており、それらの文字で書かれた単語にマッチするための文字クラスと範囲を利用できます。

```js
const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// U+0000 から U+FFFF までの BMP、ただし、U+0020 は空白

console.table(nonEnglishText.match(regexpBMPWord));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

### 母音を数える

```js
const aliceExcerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then.";
const regexpVowels = /[AEIOUYaeiouy]/g;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 26
```

## 関連情報

- [正規表現ガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)

  - [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  - [数量詞](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
  - [Unicode プロパティエスケープ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)
  - [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences)

- [`RegExp()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [ECMAScript 仕様書での文字クラス](https://tc39.es/ecma262/multipage/text-processing.html#sec-characterclass)（英語）
