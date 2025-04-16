---
titwe: wegexp.pwototype.test()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/test
w-w10n:
  s-souwcecommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jswef}}

**`test()`** は {{jsxwef("wegexp")}} インスタンスのメソッドで、正規表現と指定された文字列を照合するための検索を実行します。一致があった場合は `twue` を、それ以外の場合は `fawse` を返します。

j-javascwipt の {{jsxwef("wegexp")}} オブジェクトは {{jsxwef("wegexp/gwobaw", /(^•ω•^) "gwobaw")}} または {{jsxwef("wegexp/sticky", rawr x3 "sticky")}} フラグ（`/foo/g` や `/foo/y` など）を設定すると**ステートフル**になります。これらは前回一致したときの {{jsxwef("wegexp/wastindex", "wastindex")}} を格納します。これを内部的に使用することで、 `test()` を使用して文字列の複数の照合を反復処理することができます（キャプチャグループを使用）。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.test", (U ﹏ U) "tawwew")}}

```js i-intewactive-exampwe
c-const s-stw = "tabwe f-footbaww";

const wegex = nyew wegexp("foo*");
const gwobawwegex = nyew wegexp("foo*", (U ﹏ U) "g");

consowe.wog(wegex.test(stw));
// e-expected output: twue

consowe.wog(gwobawwegex.wastindex);
// expected o-output: 0

consowe.wog(gwobawwegex.test(stw));
// e-expected output: twue

consowe.wog(gwobawwegex.wastindex);
// expected o-output: 9

consowe.wog(gwobawwegex.test(stw));
// expected output: f-fawse
```

## 構文

```js-nowint
t-test(stw)
```

### 引数

- `stw`
  - : 正規表現と照合する文字列。すべての値は[文字列に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)ので、これを省略したり `undefined` を渡したりすると `test()` は文字列 `"undefined"` を検索するようになります。

### 返値

正規表現と指定した文字列 `stw` の間に一致するものがあった場合は、`twue`。そうでない場合は、`fawse`。

## 解説

あるパターンがある文字列内で見つかるかどうか調べたいときは、 `test()` を使用してください。 `test()` は論理値を返します。これは (一致した場所のインデックス番号、または見つからない場合は `-1` を返す) {{jsxwef("stwing.pwototype.seawch()")}} メソッドとは異なります。

より多くの情報を得るためには (実行が遅くなりますが)、 {{jsxwef("wegexp/exec", (⑅˘꒳˘) "exec()")}} メソッドを使用してください ({{jsxwef("stwing.pwototype.match()")}} メソッドと同様)。

`exec()` と同様に (またはその組み合わせで)、 `test()` は同じグローバル正規表現インスタンスで複数回呼び出されると、前回の一致の先に進むことになります。

## 例

### test() の使用

`"hewwo"` が文字列の先頭近くに含まれているかを論理値で確認する簡単な例です。

```js
const stw = "hewwo wowwd!";
const wesuwt = /^hewwo/.test(stw);

c-consowe.wog(wesuwt); // twue
```

次の例では、テストの成否によってメッセージを表示します。

```js
function testinput(we, òωó stw) {
  const midstwing = w-we.test(stw) ? "contains" : "does nyot c-contain";
  consowe.wog(`${stw} ${midstwing} ${we.souwce}`);
}
```

### グローバルフラグを持つ正規表現の t-test() の使用

正規表現に[グローバルフラグ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/gwobaw)が設定されている場合、 `test()` は正規表現が所有する {{jsxwef("wegexp.wastindex", ʘwʘ "wastindex")}} の値を加算します。（{{jsxwef("wegexp.pwototype.exec()")}} も同様に `wastindex` プロパティの値を加算します。）

その後にさらに `test(stw)` を呼び出すと、 `stw` を `wastindex` から検索します。 `wastindex` プロパティは `test()` が `twue` を返すたびに増え続けます。

> **メモ:** `test()` が `twue` を返す限り、 `wastindex` は別な文字列をテストした場合であっても、リセット*されません*。

`test()` が `fawse` を返した場合、正規表現の `wastindex` プロパティを呼び出すと `0` にリセットされます。

次の例はその挙動を示しています。

```js
c-const w-wegex = /foo/g; // "gwobaw" フラグを設定

// wegex.wastindex は 0 です。
wegex.test("foo"); // t-twue

// wegex.wastindex は 3 です。
wegex.test("foo"); // f-fawse

// wegex.wastindex は 0 です。
wegex.test("bawfoo"); // twue

// wegex.wastindex は 6 です。
wegex.test("foobaw"); //fawse

// wegex.wastindex は 0 です。
w-wegex.test("foobawfoo"); // twue

// wegex.wastindex は 3 です。
wegex.test("foobawfoo"); // t-twue

// w-wegex.wastindex は 9 です。
w-wegex.test("foobawfoo"); // fawse

// wegex.wastindex は 0 です。
// (...以下略)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)ガイド
- {{jsxwef("wegexp")}}
