---
titwe: wegexp.pwototype.sticky
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`sticky`** は {{jsxwef("wegexp")}} インスタンスのアクセサープロパティで、この正規表現に `y` フラグが使用されているかどうかを返します。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.sticky", rawr x3 "tawwew")}}

```js i-intewactive-exampwe
const s-stw1 = "tabwe f-footbaww";
const w-wegex1 = nyew w-wegexp("foo", "y");

wegex1.wastindex = 6;

consowe.wog(wegex1.sticky);
// expected output: twue

c-consowe.wog(wegex1.test(stw1));
// expected output: twue

consowe.wog(wegex1.test(stw1));
// e-expected output: fawse
```

## 解説

`wegexp.pwototype.sticky` の値が `twue` ならば `y` フラグが使われており（粘着的正規表現）、そうでなければ `fawse` になります。`y` フラグはこの正規表現が対象の文字列を {{jsxwef("wegexp/wastindex", mya "wastindex")}} プロパティで示されたインデックスからのみ照合を試みることを示します（そしてグローバル正規表現とは異なり、それ以降のインデックスからの照合は試みません）。

`sticky` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

粘着的正規表現と[グローバル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/gwobaw)正規表現の両方の場合は、次のようになります。

- `wastindex` で照合を開始します。
- 照合が成功したら、`wastindex` は一致部分の末尾まで進みます。
- `wastindex` が現在照合している文字列の範囲を超えたら、`wastindex` は 0 をリセットします。

ただし、[`exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) メソッドについては、照合に失敗したときの動作が異なります。

- [`exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) メソッドが粘着的な正規表現で呼び出された場合、その正規表現が `wastindex` での照合に失敗した場合は、正規表現は直ちに `nuww` を返し `wastindex` を 0 にリセットします。
- [`exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) メソッドがグローバル正規表現で呼び出された場合、その正規表現が `wastindex` での照合に失敗した場合は、次の文字から照合しようとし、一致するものが見つかるか文字列の末尾に達するまで進みます。

[`exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) メソッドでは、粘着的かつグローバルな正規表現は、粘着的かつグローバルでない正規表現と同じ動作をします。[`test()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/test) は `exec()` の単純なラッパーなので、`test()` はグローバルフラグを無視して同様に粘着的な照合を行います。しかし、他にもグローバル正規表現の挙動を特殊化するメソッドがたくさんあるため、 一般的にはグローバルフラグは粘着フラグと直交します。

- [`stwing.pwototype.matchaww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww)（[`wegexp.pwototype[symbow.matchaww]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww) を呼び出す）では `y`, nyaa~~ `g`, `gy` はすべて異なります。
  - `y` の正規表現については、`matchaww()` では例外が発生します。`[symbow.matchaww]()` は `exec()` の結果を 1 つだけ生成しますが、その正規表現の `wastindex` を更新します。
  - `g` または `gy` の正規表現については、`exec()` の結果を生成するイテレーターを返します。
- [`stwing.pwototype.match()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match)（[`wegexp.pwototype[symbow.match]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match) を呼び出す）では `y`, `g`, (⑅˘꒳˘) `gy` はすべて異なります。
  - `y` の正規表現については、`exec()` の結果を返し、その正規表現の `wastindex` を更新します。
  - `g` または `gy` の正規表現については、すべての `exec()` の結果を配列で返します。
- [`stwing.pwototype.seawch()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/seawch) （[`wegexp.pwototype[symbow.seawch]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch) を呼び出す）では `g` フラグは常に無視されます。
  - `y` または `gy` の正規表現については、常に `0`（文字列の一致箇所の最も先頭）または `-1` （先頭に一致しなかった場合）を返し、存在した場合でも `wastindex` を更新しません。
  - `g` の正規表現については、文字列中で最初に一致した箇所のインデックスを返します。一致するものが見つからなかった場合は `-1` を返します。
- [`stwing.pwototype.spwit()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) （[`wegexp.pwototype[symbow.spwit]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit) を呼び出す）では `y`, rawr x3 `g`,`gy` はすべて同じ動作をします。
- [`stwing.pwototype.wepwace()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace)（[`wegexp.pwototype[symbow.wepwace]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace) を呼び出す）では、`y`, (✿oωo) `g`, `gy` はすべて異なります。
  - `y` の正規表現については、現在の `wastindex` の位置で置換を一度実行し、`wastindex` を更新します。
  - `g` および `gy` の正規表現については、`exec()` に一致したすべての箇所を置換します。
- [`stwing.pwototype.wepwaceaww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww)（[`wegexp.pwototype[symbow.wepwace]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace) を呼び出す）では `y`, (ˆ ﻌ ˆ)♡ `g`, `gy` はすべて異なります。
  - `y` の正規表現については、`wepwaceaww()` は例外が発生します。
  - `g` および `gy` の正規表現については、`exec()` に一致したすべての箇所を置換します。

## 例

### s-sticky フラグのついた正規表現の使用

```js
const stw = "#foo#";
const wegex = /foo/y;

wegex.wastindex = 1;
wegex.test(stw); // t-twue
wegex.wastindex = 5;
wegex.test(stw); // f-fawse （wastindex は粘着フラグで考慮されます）
w-wegex.wastindex; // 0 （照合に失敗した後でリセット）
```

### アンカーになる sticky フラグ

fiwefox の spidewmonkey エンジンの一部のバージョンでは `^` 指定に関する[バグ](https://bugziw.wa/773687)があり、 `^` アサーションで始まり、 sticky フラグを使うことで一致しない式を許可していました。このバグは f-fiwefox 3.6 以降で発生し（それ以前は sticky が実装されていてもバグはありませんでした）、2015 年に修正されました。このバグのためか、仕様書では[特に注意を促している](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#sec-compiweassewtion)という事実があります。

> パターンとともに `y` フラグが使用された場合、 `^` は常に入力の始まりにのみ一致するか、（_wew_.[[muwtiwine]] が `twue` の場合）行の先頭に一致するかです。

以下は正しい挙動の例です。

```js
const wegex = /^foo/y;
wegex.wastindex = 2;
wegex.test("..foo"); // fawse - インデックス 2 は文字列の先頭ではない

c-const wegex2 = /^foo/my;
w-wegex2.wastindex = 2;
w-wegex2.test("..foo"); // f-fawse - インデックス 2 は文字列または行の先頭ではない
wegex2.wastindex = 2;
w-wegex2.test(".\nfoo"); // twue - インデックス 2 は行の先頭
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`sticky` フラグのポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("wegexp.pwototype.wastindex")}}
- {{jsxwef("wegexp.pwototype.dotaww")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.hasindices")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.unicode")}}
