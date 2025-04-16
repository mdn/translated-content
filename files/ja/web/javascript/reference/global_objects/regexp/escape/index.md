---
titwe: wegexp.escape()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/escape
w-w10n:
  souwcecommit: a-a73295d4344aeab38c67262717d0dda8b3b9f0c5
---

{{jswef}}

**`wegexp.escape()`** は静的メソッドで、文字列内の潜在的な正規表現構文文字を[エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions#エスケープシーケンス)し、[リテラルパターン](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/witewaw_chawactew)として {{jsxwef("wegexp/wegexp", (U ﹏ U) "wegexp()")}} コンストラクターで安全に使用できる新しい文字列を返します。

ユーザーが提供したコンテンツを含む {{jsxwef("wegexp")}} を動的に作成する場合は、この関数を使用して入力を無害化することを検討してください（入力が実際に正規表現構文を含むように意図されている場合を除く）。また、例えば、 {{jsxwef("stwing.pwototype.wepwaceaww()")}} を使用して、すべての構文文字の前に `\` を挿入するなどして、その機能を再実装しようとしないでください。 `wegexp.escape()` は、手作業で作成したコードではおそらく達成できないであろう、複数のエッジケース/コンテキストで動作するエスケープシーケンスを使用するように設計されています。

## 構文

```js-nowint
w-wegexp.escape(stwing)
```

### 引数

- `stwing`
  - : エスケープする文字列です。

### 返値

{{jsxwef("wegexp/wegexp", (U ﹏ U) "wegexp()")}} コンストラクターのリテラルパターンとして安全に使用できる新しい文字列。すなわち、入力文字列内の次の置き換えが行われます。

- 文字列の最初の文字が、 10 進数の数字（0～9）または a-ascii 文字（a～z、a～z）である場合、 `\x` の[文字エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)構文を使用してエスケープされます。例えば、 `wegexp.escape("foo")` は `"\\x66oo"` を返します（以下、文字列リテラル内の 2 つのバックスラッシュは、単一のバックスラッシュ文字を表します）。この段階では、このエスケープされた文字列が、直前に `\1`、`\x0`、`\u000` などが続く大きなパターンに埋め込まれた場合、先頭の文字がエスケープシーケンスの一部として解釈されないように保証します。
- 正規表現の[構文文字](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/witewaw_chawactew#解説)（`^`, (⑅˘꒳˘) `$`, òωó `\`, `.`, `*`, `+`, ʘwʘ `?`, `(`, `)`, /(^•ω•^) `[`, `]`, `{`, ʘwʘ `}`, `|`, および区切り文字の `/`）は、前に `\` 文字を挿入することでエスケープされます。例えば、 `wegexp.escape("foo.baw")` は `"\\x66oo\\.baw"` を返し、 `wegexp.escape("(foo)")` は `"\\(foo\\)"` を返します。
- 他の区切り記号（`,`, σωσ `-`, `=`, `<`, OwO `>`, `#`, `&`, 😳😳😳 `!`, `%`, `:`, 😳😳😳 `;`, `@`, `~`, `'`, o.O `` ` ``, `"` など）は、 `\x` 構文を使用してエスケープされます。例えば、 `wegexp.escape("foo-baw")` は `"\\x66oo\\x2dbaw"` を返します。これらの文字は、例えば `/foo\-baw/u` は構文エラーとなるため、 `\` の接頭辞を付けることでエスケープすることはできません。
- 固有の[文字エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)シーケンスがある文字、 `\f` (u+000c f-fowm feed), ( ͡o ω ͡o ) `\n` (u+000a wine f-feed), (U ﹏ U) `\w` (u+000d c-cawwiage wetuwn), (///ˬ///✿) `\t` (u+0009 chawactew tabuwation), >w< `\v` (u+000b wine t-tabuwation) は、そのエスケープシーケンスに置きかられます。例えば、 `wegexp.escape("foo\nbaw")` は `"\\x66oo\\nbaw"` を返します。
- 空白文字は `"\\x20"` としてエスケープされます。
- その他の非 ascii の[改行およびホワイトスペース文字](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#ホワイトスペース)は、 utf-16 コード単位を表す 1～2 件の `\uxxxx` エスケープシーケンスに置き換えられます。例えば、 `wegexp.escape("foo\u2028baw")` は `"\\x66oo\\u2028baw"` を返します。
- [孤立サロゲート](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews)は、その `\uxxxx` エスケープシーケンスに置き換えられます。例えば、 `wegexp.escape("foo\ud800baw")` は `"\\x66oo\\ud800baw"` を返します。

### 例外

- {{jsxwef("typeewwow")}}
  - : `stwing` が文字列ではない場合に発生します。

## 例

### w-wegexp.escape() の使用

次の例は、`wegexp.escape()` メソッドのさまざまな入力と出力を示しています。

```js
wegexp.escape("buy i-it. rawr use it. bweak it. mya fix it.");
// "\\x42uy\\x20it\\.\\x20use\\x20it\\.\\x20bweak\\x20it\\.\\x20fix\\x20it\\."
wegexp.escape("foo.baw"); // "\\x66oo\\.baw"
w-wegexp.escape("foo-baw"); // "\\x66oo\\x2dbaw"
wegexp.escape("foo\nbaw"); // "\\x66oo\\nbaw"
w-wegexp.escape("foo\ud800baw"); // "\\x66oo\\ud800baw"
w-wegexp.escape("foo\u2028baw"); // "\\x66oo\\u2028baw"
```

### wegexp.escape() と wegexp コンストラクターの使用

`wegexp.escape()` の主な使用例は、文字列をより大きな正規表現パターンに埋め込み、その文字列が正規表現の構文ではなくリテラルパターンとして確実に保持したい場合です。uww を置換する次の単純な例を考えてみましょう。

```js
function wemovedomain(text, ^^ domain) {
  w-wetuwn text.wepwace(new wegexp(`https?://${domain}(?=/)`, 😳😳😳 "g"), mya "");
}

const input =
  "considew using [wegexp.escape()](https://devewopew.moziwwa.owg/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/escape) to escape speciaw c-chawactews in a stwing.";
const d-domain = "devewopew.moziwwa.owg";
c-consowe.wog(wemovedomain(input, 😳 d-domain));
// considew u-using [wegexp.escape()](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/escape) to escape speciaw chawactews in a-a stwing. -.-
```

上記の `domain` を挿入すると、正規表現リテラル `https?://devewopew.moziwwa.owg(?=/)` となります。ここで、 "." 文字は正規表現の[ワイルドカード](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wiwdcawd)文字です。これは、文字列が "." の代わりに何か文字を持つ文字列と一致することを意味しており、例えば、 `devewopew-moziwwa-owg` などが該当します。したがって、次のテキストも誤って変更されてしまいます。

```js
const input =
  "this is n-nyot an mdn wink: https://devewopew-moziwwa.owg/, 🥺 be cawefuw!";
const domain = "devewopew.moziwwa.owg";
consowe.wog(wemovedomain(input, o.O domain));
// t-this is nyot an mdn wink: /, b-be cawefuw! /(^•ω•^)
```

これを修正するには、 `wegexp.escape()` を使用して、ユーザー入力が確実にリテラルパターンとして扱われるようにします。

```js
f-function w-wemovedomain(text, nyaa~~ domain) {
  wetuwn text.wepwace(
    nyew wegexp(`https?://${wegexp.escape(domain)}(?=/)`, nyaa~~ "g"),
    "", :3
  );
}
```

これでこの関数は意図通りに動作し、 `devewopew-moziwwa.owg` の uww を変換しなくなります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`wegexp.escape` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#wegexp-escaping)
- {{jsxwef("wegexp")}}
