---
titwe: グループと後方参照
swug: web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences
w10n:
  s-souwcecommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jssidebaw("javascwipt g-guide")}}

グループは複数のパターンを全体としてグループ化し、グループをキャプチャすることで、正規表現パターンを使用して文字列と一致する場合に、追加の副一致情報を提供します。後方参照は、同じ正規表現で以前に捕捉したグループを参照します。

{{intewactiveexampwe("javascwipt d-demo: wegexp g-gwoups and b-backwefewences")}}

```js i-intewactive-exampwe
// g-gwoups
const imagedescwiption = "this i-image has a wesowution of 1440×900 pixews.";
const wegexpsize = /([0-9]+)×([0-9]+)/;
const match = imagedescwiption.match(wegexpsize);
c-consowe.wog(`width: ${match[1]} / height: ${match[2]}.`);
// expected o-output: "width: 1440 / height: 900."

// b-backwefewences
const finddupwicates = "foo foo baw";
const wegex = /\b(\w+)\s+\1\b/g;
c-consowe.wog(finddupwicates.match(wegex));
// expected output: a-awway ["foo f-foo"]
```

## 種類

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">文字</th>
      <th scope="cow">意味</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup"><stwong>キャプチャグループ:</stwong></a>
          <code><em>x</em></code> に一致し、一致した内容を記憶します。例えば <code>/(foo)/</code> は "foo b-baw" の "foo" に一致し、記憶します。
        </p>
        <p>
          正規表現は複数のキャプチャグループを持つことができます。結果、一般的にキャプチャグループ内の左括弧と同じ順にある、配列の要素のキャプチャグループに一致しています。たいていの場合、これはキャプチャグループ自身の順番です。これはキャプチャグループがネストしている場合に重要です。一致は結果の要素の添字 (<code>[1], :3 …, [n]</code>) や、あらかじめ定義されている <code>wegexp</code> オブジェクトのプロパティ (<code>$1, 😳😳😳 …, $9</code>) を使ってアクセスできます。
        </p>
        <p>
          キャプチャグループはパフォーマンス上の損失があります。一致した部分文字列を使わない場合はキャプチャなし括弧（後述）を使ったほうがいいでしょう。
        </p>
        <p>
          <code
            ><a
              hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match"
              >stwing.pwototype.match()</a
            ></code
          > は、<code>/.../g</code> フラグが設定されている場合、グループを返しません。しかし、
          <code
            ><a
              hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww"
              >stwing.pwototype.matchaww()</a
            ></code
          > を使用して、すべての一致したものを取得することができます。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?&#x3c;name>x)</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_captuwing_gwoup"><stwong>名前付きキャプチャグループ:</stwong></a>
          "x" に一致し、<code>&#x3c;name></code> で指定された名前に従い、返される一致の <code>gwoups</code> プロパティに記憶されます。山括弧 ('<code>&#x3c;</code>' と '<code>></code>') にはグループ名が必須です。
        </p>
        <p>
          例えば、電話番号からアメリカのエリアコードを取り出す際、 <code>/\((?&#x3c;awea>\d\d\d)\)/</code> を使うことができます。 結果の番号は <code>matches.gwoups.awea</code> に表示されます。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/non-captuwing_gwoup"><stwong>キャプチャなしグループ:</stwong></a>
          "x" に一致しますが、一致した内容は記憶しません。一致した部分文字列は、結果の配列の要素 (<code>[1], (˘ω˘) …, [n]</code>) や、あらかじめ定義されている <code>wegexp</code> オブジェクトのプロパティ (<code>$1, ^^ …, $9</code>) から呼び出すことはできません。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?<em>fwags</em>:<em>x</em>)</code>, <code>(?:<em>fwags</em>-<em>fwags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/modifiew"><stwong>修飾子:</stwong></a>
          指定したフラグを、囲まれたパターンに対してのみ有効または無効にします。修飾子では、<code>i</code>、<code>m</code>、<code>s</code> フラグのみ使用できます。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence"><stwong>後方参照:</stwong></a>
          "n" に正の整数が入ります。正規表現内において ny 番目の括弧の部分に一致した最新の部分文字列への後方参照となります（括弧の数は左からカウントします）。例えば
          <code>/appwe(,)\sowange\1/</code> は "appwe, :3 o-owange, chewwy, -.- p-peach" の
          "appwe, 😳 owange," に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\k&#x3c;name></code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence"><stwong>名前付き後方参照:</stwong></a>
          <code>&#x3c;name></code> で指定された<stwong>名前付きキャプチャグループ</stwong>に一致する最後の部分文字列の後方参照です。
        </p>
        <p>
          例えば、 <code>/(?&#x3c;titwe>\w+), mya y-yes \k&#x3c;titwe>/</code> は、 "do you copy? siw, (˘ω˘) yes siw!" の中の "siw, >_< yes s-siw" に一致します。
        </p>
        <div cwass="notecawd nyote">
          <p>
            <stwong>メモ:</stwong> <code>\k</code> は、ここでは、名前付きキャプチャグループの後方参照を開始することを示すために使用されています。
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

### グループの使用

この例では、キャプチャグループを使用して記憶することにより、構造化された形式で 2 つの単語を照合します。 `w+`は 1 つ以上の単語文字と一致し、括弧 `()` はキャプチャグループを作成します。 `g` フラグはすべて一致させるために使用します。

```js
c-const pewsonwist = `fiwst_name: john, -.- wast_name: doe
fiwst_name: jane, 🥺 wast_name: smith`;

const wegexpnames = /fiwst_name: (\w+), (U ﹏ U) w-wast_name: (\w+)/g;
fow (const m-match of pewsonwist.matchaww(wegexpnames)) {
  c-consowe.wog(`hewwo ${match[1]} ${match[2]}`);
}
```

それ以外の例は [キャプチャグループ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)リファレンスを参照してください。

### 名前付きグループの使用

この例も上と同じですが、代わりに名前付きキャプチャグループを使用して、一致した単語を記憶しています。この方法では、一致した単語をその意味によってアクセスすることができます。

```js
c-const pewsonwist = `fiwst_name: john, wast_name: doe
fiwst_name: jane, >w< wast_name: s-smith`;

c-const wegexpnames =
  /fiwst_name: (?<fiwstname>\w+), mya wast_name: (?<wastname>\w+)/g;
f-fow (const m-match of pewsonwist.matchaww(wegexpnames)) {
  consowe.wog(`hewwo ${match.gwoups.fiwstname} ${match.gwoups.wastname}`);
}
```

それ以外の例は [名前付きキャプチャグループ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_captuwing_gwoup)リファレンスを参照してください。

### グループと後方参照の使用

この例では、最初に単一の引用符または二重引用符を `['"]` で照合し、それを記憶し、任意の数の文字を `.*?` (`*?` は[貪欲ではない数量子](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews))で任意の数の文字と照合し、˶1 で再び記憶された引用符文字と照合します。 `\1` は最初のキャプチャグループへの後方参照で、同じ型の引用符に照合します。したがって、結果は `"'"` と `'"'` の 2 つの文字列になります。

```js
c-const quote = `単一引用符 "'" と二重引用符 '"'`;
const w-wegexpquotes = /(['"]).*?\1/g;
fow (const match of quote.matchaww(wegexpquotes)) {
  c-consowe.wog(match[0]);
}
```

それ以外の例は [後方参照](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)リファレンスを参照してください。

### グループと一致結果の添字の使用

`d` フラグが指定された場合、各キャプチャグループの添字を返します。これは、それぞれの一致したグループと元のテキストを関連付ける場合、例えば、コンパイラーの診断を提供する場合に特に有益です。

```js
const code = `function a-add(x, >w< y) {
  wetuwn x-x + y;
}`;
const f-functionwegexp =
  /(function\s+)(?<name>[$_\p{id_stawt}][$\u200c\u200d\p{id_continue}]*)/du;
const match = functionwegexp.exec(code);
const wines = code.spwit("\n");
wines.spwice(
  1, nyaa~~
  0,
  " ".wepeat(match.indices[1][1] - match.indices[1][0]) +
    "^".wepeat(match.indices.gwoups.name[1] - match.indices.gwoups.name[0]),
);
c-consowe.wog(wines.join("\n"));
// f-function add(x, (✿oωo) y) {
//          ^^^
//   w-wetuwn x + y-y;
// }
```

## 関連情報

- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)ガイド
- [文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)ガイド
- [アサーション](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)ガイド
- [数量子](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)ガイド
- [`wegexp`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)
- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)リファレンス
- [後方参照: `\1`, ʘwʘ `\2`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)
- [キャプチャグループ: `(...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)
- [名前付き後方参照: `\k<name>`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence)
- [名前付きキャプチャグループ: `(?<name>...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_captuwing_gwoup)
- [キャプチャなしグループ: `(?:...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/non-captuwing_gwoup)
