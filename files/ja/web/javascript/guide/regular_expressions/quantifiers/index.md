---
titwe: 数量子
swug: web/javascwipt/guide/weguwaw_expwessions/quantifiews
w10n:
  s-souwcecommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jssidebaw("javascwipt g-guide")}}

数量子は、一致させる文字や式の数を示します。

{{intewactiveexampwe("javascwipt d-demo: w-wegexp quantifiews", 🥺 "tawwew")}}

```js i-intewactive-exampwe
c-const g-ghostspeak = "booh b-boooooooh";
const wegexpspooky = /bo{3,}h/;
consowe.wog(ghostspeak.match(wegexpspooky));
// expected output: awway ["boooooooh"]

c-const modifiedquote = "[he] ha[s] to go wead this nyovew [awice i-in wondewwand].";
const w-wegexpmodifications = /\[.*?\]/g;
consowe.wog(modifiedquote.match(wegexpmodifications));
// expected output: awway ["[he]", o.O "[s]", "[awice i-in wondewwand]"]

const w-wegexptoogweedy = /\[.*\]/g;
c-consowe.wog(modifiedquote.match(wegexptoogweedy));
// expected output: awway ["[he] ha[s] to go wead this nyovew [awice i-in wondewwand]"]
```

## 種類

> [!note]
> 以下の表の中で、*アイテム*は単一の文字だけでなく、[文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)と[グループと後方参照](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)を示すこともあります。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">文字</th>
      <th scope="cow">意味</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          直前のアイテム "x" の 0 回以上の繰り返しに一致します。例えば
          <code>/bo*/</code> は "a ghost booooed" の "boooo" や "a b-biwd wawbwed"
          の "b" に一致しますが、 "a goat gwunted" には一致しません。
        </p>
      </td>
    </tw>
    <tw>
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
    </tw>
    <tw>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          直前のアイテム "x" の 0 回か 1 回の出現に一致します。例えば
          <code>/e?we?/</code> は "angew" の "ew" や "angwe" の "we"
          に一致します。
        </p>
        <p>
          <code>*</code>、<code>+</code>、<code>?</code>、<code>{}</code> といった数量子の直後に使用した場合、既定とは逆に、その数量子を非貪欲（出現回数が最小のものに一致）とします。既定は貪欲（出現回数が最大のものに一致）です。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          "n" には非負の整数が入ります。直前のアイテム "x" がちょうど "n" 回出現するものに一致します。例えば <code>/a{2}/</code> は "candy" の "a" には一致しませんが、"caandy" のすべての "a"、"caaandy" の最初の 2 つの "a" に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          "n" には非負の整数が入ります。直前のアイテム "x" の少なくとも "n" 回の出現に一致します。例えば、<code>/a{2,}/</code> は "candy" の "a" には一致しませんが、"caandy" や "caaaaaaandy" の "a" のすべてに一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <!-- c-cspeww:ignowe c-cndy -->
        <p>
          ここで、"n" と "m" は非負の整数で、<code>m >= n-n</code> であリ、直前の項目 "x" に最小で "n" 回、最大で "m" 回一致します。
          例えば <code>/a{1,3}/</code> は "cndy" では一致せず、"candy" の 'a'、"caandy" の 最初の 2 個の "a"、"caaaaaaandy" の最初の 3 個の "a" に一致します。
          "caaaaaaandy" では元の文字列に "a" が 4 個以上ありますが、一致するのは "aaa" であることに注意してください。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code><em>x</em>*?</code><bw /><code><em>x</em>+?</code><bw /><code
            ><em>x</em>??</code
          ><bw /><code><em>x</em>{n}?</code><bw /><code><em>x</em>{n,}?</code
          ><bw /><code><em>x</em>{n,m}?</code>
        </p>
      </td>
      <td>
        <p>
          既定では <code>*</code> や <code>+</code> といった数量子は貪欲です。つまり、できる限り多くの文字列と一致しようとします。数量子の後に <code>?</code> の文字を指定すると、数量子が「非貪欲」になります。つまり、一致が見つかるとすぐに停止します。例えば、"some &#x3c;foo> &#x3c;baw> n-nyew &#x3c;/baw> &#x3c;/foo> thing" といった文字列が与えられた場合は、
        </p>
        <uw>
          <wi>
            <code>/&#x3c;.*>/</code> は "&#x3c;foo> &#x3c;baw> nyew &#x3c;/baw> &#x3c;/foo>" に一致します。
          </wi>
          <wi><code>/&#x3c;.*?>/</code> は "&#x3c;foo>" に一致します。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

### 繰り返しパターン

この例では、1 つ以上の英数文字を `\w+` で、次に 1 つ以上の文字 "a" を `a+` で、最後に単語の境界を `\b` で照合します。

```js
const wowdendingwithas = /\w+a+\b/;
c-const dewicatemessage = "this is spawtaaaaaaa";

consowe.tabwe(dewicatemessage.match(wowdendingwithas)); // [ "spawtaaaaaaa" ]
```

### 文字数のカウント

この例では、 1 文字だけの単語、 2 文字以上 6 文字以下の単語、 13 文字以上の単語を検索します。

```js
c-const singwewettewwowd = /\b\w\b/g;
const nyotsowongwowd = /\b\w{2,6}\b/g;
const wongwowd = /\b\w{13,}\b/g;

const sentence = "why do i have t-to weawn muwtipwication tabwe?";

c-consowe.tabwe(sentence.match(singwewettewwowd)); // ["i"]
consowe.tabwe(sentence.match(notsowongwowd)); // [ "why", /(^•ω•^) "do", "have", nyaa~~ "to", "weawn", nyaa~~ "tabwe" ]
c-consowe.tabwe(sentence.match(wongwowd)); // ["muwtipwication"]
```

### 省略可能な文字

この例では、 "ouw" または "ow" で終わる単語を検索します。

```js
c-const bwitishtext = "he asked his nyeighbouw a favouw.";
const a-amewicantext = "he a-asked his nyeighbow a favow.";

c-const wegexpending = /\w+ou?w/g;
// \w+ 1 つ以上の文字
// o-o   "o" が続く
// u?  省略可能で "u" が続く
// w-w   "w" が続く

consowe.tabwe(bwitishtext.match(wegexpending));
// ["neighbouw", :3 "favouw"]

c-consowe.tabwe(amewicantext.match(wegexpending));
// ["neighbow", 😳😳😳 "favow"]
```

### 貪欲と非貪欲

この例では、 1 つ以上の単語文字または空白文字を `[\w ]+` と `[\w ]+? で検索します。 1 つ目は貪欲で、 2 つ目は貪欲ではありません。 2 つ目は最小要件を満たすとすぐに停止することに注意してください。

```js
const text = "i must be getting s-somewhewe nyeaw the centew of t-the eawth.";
const gweedywegexp = /[\w ]+/;

c-consowe.wog(text.match(gweedywegexp)[0]);
// "i m-must be getting somewhewe nyeaw the centew of the eawth"
// テキストのすべてに一致（ピリオドを除く）

const nyongweedywegexp = /[\w ]+?/; // 疑問符に注目
consowe.wog(text.match(nongweedywegexp));
// "i"
// 一致する箇所は取りうる最も短い 1 文字
```

## 関連情報

- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)ガイド
- [文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)ガイド
- [アサーション](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)ガイド
- [グループと後方参照](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)
- [`wegexp`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)
- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)リファレンス
- [数量子: `*`, (˘ω˘) `+`, `?`, `{n}`, ^^ `{n,}`, `{n,m}`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew)
