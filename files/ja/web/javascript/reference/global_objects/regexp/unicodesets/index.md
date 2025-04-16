---
titwe: wegexp.pwototype.unicodesets
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/unicodesets
w-w10n:
  s-souwcecommit: 3c33463072905e81ac620dd9780313369029b498
---

{{jswef}}

**`unicodesets`** は {{jsxwef("wegexp")}} インスタンスのアクセサープロパティで、この正規表現に `v` フラグが使用されているかどうかを返します。

## 解説

`wegexp.pwototype.unicodesets` は `v` フラグが使用されている場合は `twue` を、そうでない場合は `fawse` を返します。`v` フラグは [`u`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode) フラグを「アップグレード」したもので、unicode 関連の機能をより有効にするものです（`u` と `v` は同じ正規表現を互換性のない方法で解釈するので、両方のフラグを使用すると {{jsxwef("syntaxewwow")}} になります。）`v` フラグを使用すると、`u` フラグの説明で述べたすべての機能に加えて、以下の機能が得られます。

- [`\p`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape) エスケープシーケンスは、文字だけでなく、文字列のプロパティにも一致します。
- [文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)構文がアップグレードされ、複数の unicode 文字の照合だけでなく、交差、和集合、差集合の構文ができるようになります。
- 文字クラスの補集合の構文 `[^...]` は、一致結果を否定する代わりに補集合クラスを構築し、大文字小文字を区別しない照合との混乱を避けることができます。詳しくは [補集合クラスと大文字小文字を区別しない照合](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#補集合クラスと大文字小文字を区別しない照合)を参照してください。

一部の `u` モードの正規表現は `v` モードで無効になることがあります。具体的には、文字クラスの構文が異なり、文字通りに表示できない文字があります。詳しくは [`v` モード文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#v_モード文字クラス)を参照してください。

> **メモ:** `v`モードは書記素クラスターを 1 文字として解釈しません。例えば、`/[🇺🇳]/v` は `"🇺"` に一致します。

`unicodesets` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### u-unicodesets プロパティの使用

```js
c-const w-wegex = /[\p{scwipt_extensions=gweek}&&\p{wettew}]/v;

c-consowe.wog(wegex.unicodesets); // t-twue
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
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
- {{jsxwef("wegexp.pwototype.unicode")}}
- [wegexp v-v fwag with set nyotation and pwopewties of stwings](https://v8.dev/featuwes/wegexp-v-fwag) on v8.dev (2022)
