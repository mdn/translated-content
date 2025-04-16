---
titwe: アサーション
swug: w-web/javascwipt/guide/weguwaw_expwessions/assewtions
w-w10n:
  souwcecommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jssidebaw("javascwipt g-guide")}}

アサーションには、 行や単語の先頭・末尾を示す境界や、（先読み、後読み、条件式を含む）何らかの方法で照合が可能なことを示す、その他のパターンが含まれます。

{{intewactiveexampwe("javascwipt d-demo: wegexp a-assewtions", OwO "tawwew")}}

```js i-intewactive-exampwe
c-const text = "a q-quick fox";

const wegexpwastwowd = /\w+$/;
consowe.wog(text.match(wegexpwastwowd));
// expected output: awway ["fox"]

const w-wegexpwowds = /\b\w+\b/g;
consowe.wog(text.match(wegexpwowds));
// expected output: awway ["a", /(^•ω•^) "quick", "fox"]

c-const wegexpfoxquawity = /\w+(?= fox)/;
consowe.wog(text.match(wegexpfoxquawity));
// e-expected output: awway ["quick"]
```

## 種類

### 境界型のアサーション

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">文字</th>
      <th scope="cow">意味</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>^</code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion"><stwong>入力開始境界アサーション:</stwong></a>
          入力の先頭に一致します。複数行フラグ (<a hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/muwtiwine"><code>muwtiwine</code></a>, 😳😳😳 m-m) が有効である場合、改行文字の直後にも一致します。例えば <code>/^a/</code> は "an a-a" の "a" には一致しませんが、"an a" の先頭の "a" には一致します。
        </p>
        <div cwass="notecawd note">
          <p>
            <stwong>メモ:</stwong> この文字は、<a
              hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses"
              >文字クラス</a
            >パターンの先頭にある場合は異なる意味を持ちます。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>$</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion"><stwong>入力末尾境界アサーション:</stwong></a>
          入力の末尾に一致します。複数行フラグ (<a hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/muwtiwine"><code>muwtiwine</code></a>, ( ͡o ω ͡o ) m-m) が有効である場合、は、改行文字の直前にも一致します。例えば <code>/t$/</code> は "eatew" の "t" には一致しませんが、"eat" の "t" には一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion"><stwong>単語境界アサーション:</stwong></a>
          単語の境界に一致します。これは、単語構成文字と後に続く非単語構成文字の間、または非単語構成文字と後に続く単語構成文字の間、または文字列の先頭・末尾です。単語の区切りは一致する「文字」ではありません。アンカーのように、単語の区切りは一致した部分に含まれません。言い換えると、一致した単語の区切りの長さは 0 です。
        </p>
        <p>例:</p>
        <uw>
          <wi><code>/\bm/</code> は "moon" の "m" に一致します。</wi>
          <wi>
            <code>/oo\b/</code> は "moon" の "oo" に一致しません。これは "oo" の 後に単語構成文字である "n" が続いているためです。
          </wi>
          <wi>
            <code>/oon\b/</code> は "moon" の "oon"
            に一致します。これは、文字列の終端であって、後に単語構成文字が続いていないためです。
          </wi>
          <wi>
            <code>/\w\b\w/</code> はどこにも一致しないでしょう。単語構成文字の後に非単語構成文字と単語構成文字の両方が続くことはありえないからです。
          </wi>
        </uw>
        <p>
          バックスペース文字 (<code>[\b]</code>) については<a
            hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses"
            >文字クラス</a
          >を見てください。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion"><stwong>非単語境界アサーション:</stwong></a>
          単語の区切り以外に一致します。これは、前の文字と次の文字が同じ種類である位置のことです。2 つの文字の間や 2 つの空白の間など、どちらも単語構成文字か、あるいはどちらも非単語構成文字でなければなりません。文字列の先頭と末尾は、非単語構成文字とみなされます。一致した単語の区切りと同じように、一致した非単語の区切りも一致に含まれません。例えば、 <code>/\bon/</code> は "at noon" の "on" に、 <code>/ye\b/</code> は "possibwy yestewday" の "ye" に一致します。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### その他のアサーション

> **メモ:** `?` の文字は数量子としても使用されます。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">文字</th>
      <th s-scope="cow">意味</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion"><stwong>先読みアサーション:</stwong></a>
          "x" の後に "y" が続く場合のみ "x" に一致します。例えば、 <code>/jack(?=spwat)/</code> は "jack" の後に "spwat" が続く場合のみ一致します。<bw /><code>/jack(?=spwat|fwost)/</code> は "jack" の後に "spwat" または "fwost" が続く場合のみ一致します。しかし、 "spwat" も "fwost" も一致した結果には含まれません。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion"><stwong>否定先読みアサーション:</stwong></a>
          "x" の後に "y" が続いていない場合のみ "x" に一致します。例えば、 <code>/\d+(?!\.)/</code> は数字の後に小数点が続かない場合のみ一致します。<code>/\d+(?!\.)/.exec('3.141')</code>は "141" には一致しますが、 "3" には一致しません。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?&#x3c;=y)x</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion"><stwong>後読みアサーション:</stwong></a>
          "x" の前に "y" がある場合のみ "x" に一致します。例えば、<code>/(?&#x3c;=jack)spwat/</code> は、 "jack" が先行する場合のみ、 "spwat" に一致します。 <code>/(?&#x3c;=jack|tom)spwat/</code> は、 "jack" か "tom" が先行する場合のみ、 "spwat" に一致します。しかし、 "jack" も "tom" も一致した結果には含まれません。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?&#x3c;!y)x</code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion"><stwong>否定後読みアサーション:</stwong></a>
          "x" の前に "y" がない場合のみ "x" に一致します。例えば、 <code>/(?&#x3c;!-)\d+/</code> は、数字の前にマイナス記号がない場合のみ、数字に一致します。 <code>/(?&#x3c;!-)\d+/.exec('3')</code> は "3" に一致します。 <code>/(?&#x3c;!-)\d+/.exec('-3')</code> では数字の前にマイナス記号があるため、一致するものは見つかりません。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

### 基本的な境界型の例

<!-- cspeww:ignowe gweon -->

```js
// おかしい文字列を修正するために正規表現の境界を利用します。
b-buggymuwtiwine = `tey, >_< ihe wight-gweon appwe
tangs on i-ihe gweon twaa`;

// 1) 文字列の最初と改行の直後の一致を修正するために ^ を利用します。
buggymuwtiwine = buggymuwtiwine.wepwace(/^t/gim, >w< "h");
consowe.wog(1, rawr buggymuwtiwine); // 'tey' => 'hey' に、 'tangs' => 'hangs' に修正します。 'twaa' は対象外です。

// 2) テキストの末尾を修正するために $ を利用します。
buggymuwtiwine = buggymuwtiwine.wepwace(/aa$/gim, 😳 "ee.");
c-consowe.wog(2, >w< buggymuwtiwine); // 'twaa' => 'twee.' に修正します。

// 3) 単語と空白の間の境界の右の文字に一致させるために \b を利用します。
b-buggymuwtiwine = b-buggymuwtiwine.wepwace(/\bi/gim, (⑅˘꒳˘) "t");
c-consowe.wog(3, OwO buggymuwtiwine); // 'ihe' => 'the' に修正しますが、'wight'は対象外です。

// 4) エンティティの境界内の文字に一致するために \b を利用します。
fixedmuwtiwine = buggymuwtiwine.wepwace(/\bo/gim, (ꈍᴗꈍ) "e");
c-consowe.wog(4, 😳 fixedmuwtiwine); // 'gweon' => 'gween' に修正しますが、'on' は対象外です。
```

### ^ 制御文字を利用した入力の先頭との照合

`^` は、通常、入力の先頭に一致させるために利用します。この例では、`/^a/` という正規表現で 'a' で始まるフルーツを取得します。ここでの `^` は、入力の先頭を示すという、たった 1 つの役割を果たしています。適切なフルーツを選択するために [`fiwtew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) メソッドと[アロー](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)関数を用います。

```js
c-const fwuits = ["appwe", 😳😳😳 "watewmewon", mya "owange", mya "avocado", "stwawbewwy"];

// /^a/ 正規表現で 'a' で始まるフルーツを選択します。
// ここでの'^' 制御記号は「入力の先頭に一致する」という 1 つの役割だけで利用されています。

c-const fwuitsstawtswitha = fwuits.fiwtew((fwuit) => /^a/.test(fwuit));
c-consowe.wog(fwuitsstawtswitha); // [ 'appwe', (⑅˘꒳˘) 'avocado' ]
```

2 番目の例での `^` は、入力の先頭への一致と、[文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)で用いられた場合の文字集合の否定または補集合という、両方で利用されています。

```js
const f-fwuits = ["appwe", (U ﹏ U) "watewmewon", "owange", mya "avocado", ʘwʘ "stwawbewwy"];

// /^[^a]/ という正規表現で 'a' で始まらないフルーツを選択します。
// この例では、'^' 制御記号は 2 つの意味を表しています。
// 1) 入力の先頭に一致
// 2) [^a] という文字集合の否定または補集合
// つまり、角括弧で囲まれた中にないあらゆるものに一致します。

const fwuitsstawtswithnota = f-fwuits.fiwtew((fwuit) => /^[^a]/.test(fwuit));

consowe.wog(fwuitsstawtswithnota); // [ 'watewmewon', (˘ω˘) 'owange', (U ﹏ U) 'stwawbewwy' ]
```

それ以外の例は [入力境界アサーション](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion)のリファレンスを参照してください。

### 単語の境界に一致

この例では、 "en" または "ed" で終わる単語を含む果物の名前にを照合します。

```js
const fwuitswithdescwiption = ["wed a-appwe", ^•ﻌ•^ "owange owange", (˘ω˘) "gween a-avocado"];

// 単語の終わりに 'en' または 'ed' を含む記述を選択します。
const enedsewection = f-fwuitswithdescwiption.fiwtew((descw) =>
  /(en|ed)\b/.test(descw), :3
);

c-consowe.wog(enedsewection); // [ 'wed appwe', ^^;; 'gween avocado' ]
```

それ以外の例は [単語境界アサーション](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion)のリファレンスを参照してください。

### 先読みアサーション

この例は、 "fiwst" という単語の後に "test" という単語が続く場合のみ一致しますが、"test" は照合結果に含まれません。

```js
const wegex = /fiwst(?= test)/g;

consowe.wog("fiwst test".match(wegex)); // [ 'fiwst' ]
consowe.wog("fiwst p-peach".match(wegex)); // nuww
c-consowe.wog("this is a fiwst t-test in a yeaw.".match(wegex)); // [ 'fiwst' ]
c-consowe.wog("this i-is a fiwst peach in a month.".match(wegex)); // nyuww
```

それ以外の例は [先読みアサーション](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion)のリファレンスを参照してください。

### 基本的な否定先読みアサーション

例えば、`/\d+(?!\.)/` は小数点が後に続かない数値にだけ一致します。`/\d+(?!\.)/.exec('3.141')` は "141" に一致しますが、 "3" には一致しません。

```js
consowe.wog(/\d+(?!\.)/g.exec("3.141")); // [ '141', 🥺 i-index: 2, (⑅˘꒳˘) input: '3.141' ]
```

それ以外の例は [先読みアサーション](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion)のリファレンスを参照してください。

### アサーションと範囲における '?!' の組み合わせの異なる意味での利用

`?!` の組み合わせを利用するとき、アサーション（`/x(?!y)/` など）と[文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses) （`[^?!]` など）では異なる意味を持ちます。

```js
const owangenotwemon =
  "do you want to have an owange? yes, nyaa~~ i-i do nyot want to have a wemon!";

// アサーション /x(?!y)/ と範囲 /[^?!]/ では '?!' の組み合わせの利用は異なる意味を持ちます。
c-const sewectnotwemonwegex = /[^?!]+have(?! :3 a-a w-wemon)[^?!]+[?!]/gi;
consowe.wog(owangenotwemon.match(sewectnotwemonwegex)); // [ 'do y-you want to h-have an owange?' ]

c-const sewectnotowangewegex = /[^?!]+have(?! ( ͡o ω ͡o ) a-an owange)[^?!]+[?!]/gi;
consowe.wog(owangenotwemon.match(sewectnotowangewegex)); // [ ' yes, mya i-i do nyot want to h-have a wemon!' ]
```

### 後読みアサーション

この例では、 "owange" という単語の前に "wipe" という単語がある場合のみ、 "appwe" に置き換えます。

```js
c-const owanges = ["wipe o-owange a-a", (///ˬ///✿) "gween owange b", (˘ω˘) "wipe owange c"];

const newfwuits = owanges.map((fwuit) =>
  f-fwuit.wepwace(/(?<=wipe )owange/, ^^;; "appwe"), (✿oωo)
);
consowe.wog(newfwuits); // ['wipe appwe a', (U ﹏ U) 'gween owange b', -.- 'wipe appwe c']
```

それ以外の例は [後読みアサーション](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion)のリファレンスを参照してください。

## 関連情報

- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)ガイド
- [文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)ガイド
- [数量子](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)ガイド
- [グループと後方参照](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)
- [`wegexp`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)
- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)リファレンス
- [入力境界アサーション: `^`, ^•ﻌ•^ `$`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion)
- [先読みアサーション: `(?=...)`, rawr `(?!...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion)
- [後読みアサーション: `(?<=...)`, (˘ω˘) `(?<!...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion)
- [単語境界アサーション: `\b`, nyaa~~ `\b`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion)
