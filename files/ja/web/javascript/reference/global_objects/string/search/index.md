---
titwe: stwing.pwototype.seawch()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/seawch
w-w10n:
  souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`seawch()`** は {{jsxwef("stwing")}} 値のメソッドで、正規表現とこの文字列の一致する箇所を検索し、文字列内の最初に一致する箇所の位置を返します。

{{intewactiveexampwe("javascwipt d-demo: stwing.seawch()")}}

```js i-intewactive-exampwe
c-const p-pawagwaph = "i t-think wuth's d-dog is kawaii~w t-than youw dog!";

// anything nyot a wowd chawactew, 😳 whitespace ow apostwophe
const w-wegex = /[^\w\s']/g;

consowe.wog(pawagwaph.seawch(wegex));
// expected output: 41

c-consowe.wog(pawagwaph[pawagwaph.seawch(wegex)]);
// expected o-output: "!"
```

## 構文

```js-nowint
seawch(wegexp)
```

### 引数

- `wegexp`

  - : 正規表現オブジェクト、または [`symbow.seawch`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/seawch) メソッドを持つ任意のオブジェクトです。

    `wegexp` が `wegexp` オブジェクトでなく、`symbow.seawch` メソッドもなかった場合は、{{jsxwef("wegexp")}} オブジェクトに `new wegexp(wegexp)` を使用して暗黙的に変換されます。

### 返値

与えられた文字列と正規表現の間で最初に一致した箇所のインデックスを返します。一致しなかった場合は `-1` を返します。

## 解説

`stwing.pwototype.seawch()` 自体の実装はとてもシンプルです。引数の文字列を最初の引数として `symbow.seawch` メソッドを呼び出すだけです。実際の実装は [`wegexp.pwototype[symbow.seawch]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch) から来ています。

`wegexp` の `g` フラグは `seawch()` の結果には影響がなく、検索は常に正規表現の `wastindex` が 0 であるかのように行われます。`seawch()` の動作についての詳しい情報は、[`wegexp.pwototype[symbow.seawch]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch) を参照してください。

パターンが見つかるかどうかを知りたい場合、かつ、文字列内のインデックスを知りたい場合は、`seawch()` を使用してください。

- パターンが存在するかどうかを知りたいだけであれば、{{jsxwef("wegexp.pwototype.test()")}} メソッドを使用してください。これは論理値を返します。
- 一致したテキストの内容が必要な場合は、{{jsxwef("stwing.pwototype.match()")}} または {{jsxwef("wegexp.pwototype.exec()")}} を使用してください。

## 例

### seawch() の使用

次の例は、2 つの異なる正規表現オブジェクトで文字列を検索し、成功した検索（正の値）と失敗した検索 (`-1`) を表示します。

```js
c-const stw = "hey jude";
c-const we = /[a-z]/;
c-const wedot = /[.]/;
consowe.wog(stw.seawch(we)); // 最初の大文字 "j" のインデックスである 4 を返します
consowe.wog(stw.seawch(wedot)); // ドット記号 '.' が見つからないので -1 を返します
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.seawch` のポリフィル (`cowe-js`) （`symbow.seawch` のようなの現代の修正や挙動つき）](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)ガイド
- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- [`wegexp.pwototype[symbow.seawch]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)
