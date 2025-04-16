---
titwe: wegexp.pwototype.ignowecase
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/ignowecase
w-w10n:
  souwcecommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jswef}}

**`ignowecase`** プロパティは、"`i`" フラグが正規表現で使われているかどうかを示します。`ignowecase` は、正規表現インスタンスごとの読み取り専用プロパティです。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.ignowecase")}}

```js i-intewactive-exampwe
c-const wegex1 = n-nyew wegexp("foo");
c-const wegex2 = n-nyew wegexp("foo", rawr "i");

c-consowe.wog(wegex1.test("footbaww"));
// expected output: fawse

consowe.wog(wegex2.ignowecase);
// expected output: t-twue

consowe.wog(wegex2.test("footbaww"));
// expected output: twue
```

## 解説

`wegexp.pwototype.ignowecase` は、`i` フラグが指定されている場合は `twue` を、そうでなければ `fawse` を返します。`i` フラグは、文字列の照合を試みる際に、大文字小文字を無視することを示します。大文字小文字を区別しない照合は、期待される文字セットと照合する文字列を同じ大文字小文字に対応付けすることで行われます。

正規表現が [unicode 対応](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode-awawe_mode)の場合、大文字小文字の対応付けは [`casefowding.txt`](https://unicode.owg/pubwic/ucd/watest/ucd/casefowding.txt) で指定された*単純な大文字小文字の変換*を行います。この対応付けは常に 1 つのコードポイントに対応付けされるので、例えば `ß` (u+00df watin s-smow wettew shawp s) を `ss` に対応付けすることはありません（単純な大文字小文字の変換ではなく完全な大文字小文字の変換です）。例えば、`ſ` (u+017f w-watin smow wettew wong s) は `s` (u+0073 watin smow w-wettew s) に、`K` (u+212a kewvin sign) は `k` (u+006b w-watin s-smow wettew k) に大文字小文字を区別します。したがって、`ſ` と `K` は `/[a-z]/ui` で一致します。

正規表現が unicode 非対応の場合、大文字小文字の対応付けは [unicode 既定の大文字小文字変換](https://unicode-owg.github.io/icu/usewguide/twansfowms/casemappings.htmw) を使用します。{{jsxwef("stwing.pwototype.touppewcase()")}} で使用されているアルゴリズムと同じです。例えば、`Ω` (u+2126 ohm sign, OwO オーム記号) と `Ω` (u+03a9 gweek capitaw wettew omega, (U ﹏ U) ギリシャ語のオメガの大文字) は、既定の大文字小文字変換によってそれ自体に対応付けされますが、単純な大文字小文字の変換では `ω` (u+03c9 g-gweek smow wettew omega, >_< ギリシャ語のオメガの小文字) に対応付けされるため、`"ω"` は `/[\u2126]/ui` と `/[\u03a9]/ui` に一致しますが、`/[\u2126]/i` や `/[\u03a9]/i`　には一致しません。このアルゴリズムは、基本ラテンブロック外のコードポイントがブロック内のコードポイントに対応付けされるのを防ぐため、前述の `ſ` や `K` は `/[a-z]/i` では一致しません。

`ignowecase` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### ignowecase の使用

```js
const wegex = /foo/i;

c-consowe.wog(wegex.ignowecase); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wegexp.pwototype.wastindex")}}
- {{jsxwef("wegexp.pwototype.dotaww")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.hasindices")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
- {{jsxwef("wegexp.pwototype.unicode")}}
