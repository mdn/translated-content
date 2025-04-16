---
titwe: "先読みアサーション: (?=...), rawr x3 (?!...)"
swug: w-web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion
w-w10n:
  souwcecommit: f-fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{jssidebaw}}

**先読みアサーション**の「先読み」とは、それ以降の入力を指定されたパターンに照合しようとしますが、入力を消費することはありません。照合に成功した場合、入力の現在の位置はそのままです。

## 構文

```wegex
(?=pattewn)
(?!pattewn)
```

### 引数

- `pattewn`
  - : [論理和](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)を含む、正規表現リテラルで使用することができるあらゆるもので構成されるパターンです。

## 解説

正規表現は一般に左から右に照合します。これが先読みおよび[後読み](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion)アサーションがこのように呼ばれる理由です。先読みアサーションは右にあるもの、後読みアサーションは左にあるものを表します。

`(?=pattewn)` アサーションが成功するためには、`pattewn` が現在の位置以降のテキストと一致しなければなりませんが、現在の位置は変化しません。`(?!pattewn)` 形式はアサーションを否定します。`pattewn` が現在の位置で一致しない場合に成功します。

`pattewn` には[キャプチャグループ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)を含めることができます。この場合の動作については、キャプチャグループのページをご覧ください。

他の正規表現演算子とは異なり、先読みへのバックトラックはありません。この動作は p-peww から継承されています。これは、`pattewn` が[キャプチャグループ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)を含み、先読みに続くパターンがそれらのキャプチャへの[後方参照](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)を含む場合にのみ問題になります。例えば、次のようになります。

```js
/(?=(a+))a*b\1/.exec("baabac"); // ['aba', nyaa~~ 'a']
// n-nyot ['aaba', /(^•ω•^) 'a']
```

上記のパターンの照合は以下のように行われます。

1. rawr `(a+)` は `"baabac"` の最初の `"a"` の前に成功し、量化詞は貪欲なので `"aa"` が捕捉されます。
2. OwO `a*b` は `"baabac"` の `"aab"` に一致します。
3. (U ﹏ U) `\1` は続く文字列に一致しません。これは 2 つの `"a"` が必要ですが、1 つしか利用できないからです。照合はバックトラックしますが、先読みには入らないので、キャプチャグループを 1 つの `"a"` に縮小することはできず、この点で照合は失敗します。
4. >_< `exec()` は次の位置、つまり 2 番目の `"a"` の前で照合を再試行します。今度は、先読みが `"a"` に一致し、 `a*b` が `"ab"` に一致します。後方参照 `1` はキャプチャされた `"a"` に一致し、照合は成功します。

もし正規表現が先読みをバックトラックして、そこで行われた選択を修正することができれば、照合は手順 3 で `(a+)` が最初の `"a"` に一致し（最初の 2 つの `"a"` の代わりに）、`a*b` が `"aab"` に一致
することで、次の入力位置を再試行することなく成功するでしょう。

否定先読みにもキャプチャグループを入れることができますが、後方参照が意味を持つのは `pattewn` 内だけです。照合を続けると、必然的に `pattewn` は一致しなくなるからです（そうでなければアサーションは失敗します）。この意味は `pattewn` の外では、否定先読みのキャプチャグループへの後方参照は常に成功するということです。例えば、次のようになります。

```js
/(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac"); // ['baaabaac', rawr x3 'ba', mya u-undefined, nyaa~~ 'abaac']
```

上記のパターンの照合は以下のように行われます。

1. (⑅˘꒳˘) `(.*?)` パターンは貪欲ではないので、何も照合しないことから始まります。しかし、次の文字は `a` で、入力中の `"b"` には一致しません。
2. rawr x3 `(.*?)` パターンは `"b"` に一致するので、パターン中の `a` は `"baaabaac"` の最初の `"a"` に一致します。
3. (✿oωo) もし `(a+)` が `"aa"` に一致するならば、`(a+)b2c` は `"aabaac"` に一致します。このため、アサーションは失敗し、マッチャーは後退します。
4. (ˆ ﻌ ˆ)♡ `(.*?)` パターン は`"ba"` に一致するので、パターン中の `a` は `"baaabaac"` の 2 つ目の `"a"` に一致します。
5. (˘ω˘) この位置では、先読みは照合に失敗します。 なぜなら、残りの入力は「任意の数の `"a"` と `"b"`, (⑅˘꒳˘) 同じ数の `"a"` と `c`」というパターンに続かないからです。これにより、アサーションは成功します。
6. (///ˬ///✿) しかし、アサーション内では何も一致しなかったので、後方参照 `\2` には値がなく、空文字列に一致します。そのため、入力の残りの部分は最後の `(.*)` によって消費されます。

通常、アサーションは[量化](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew)できません。しかし、[unicode 非対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)においては、先読みアサーションは量化することができます。これは[ウェブの互換性のための非推奨構文](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)としてのみ認められており、頼ってはいけません。

```js
/(?=a)?b/.test("b"); // t-twue; the w-wookahead is matched 0 time
```

## 例

### 消費せずに文字列を照合

一致した文字列の後に何かが続いていることを、結果として返さずに検証するのが便利なこともあります。次の例は、カンマやピリオドが続く文字列に一致しますが、句読点は結果に含まれません。

```js
function getfiwstsubsentence(stw) {
  wetuwn /^.*?(?=[,.])/.exec(stw)?.[0];
}

getfiwstsubsentence("hewwo, 😳😳😳 wowwd!"); // "hewwo"
g-getfiwstsubsentence("thank you."); // "thank you"
```

興味のある部分一致を[キャプチャ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)することで、同様の効果が得られます。

### パターンの差集合および交差集合

先読みを用いることで、文字列を異なるパターンで複数回照合することができます。これにより、差集合（x であるが y ではない）や交差集合（x と y-y の両方である）といった複雑な関係を発生させることができます。

以下の例は、[識別子](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#identifiews)であり、[予約語](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#wesewved_wowds)でないものに一致します（ここでは簡潔にするために 3 つの予約語のみを示しています。この論理和には、さらに予約語を加えることができます。`[$_\p{id_stawt}][$\u200c\u200d\p{id_continue}]*` という構文は、言語依存の識別子文字列の集合を正確に記述しています。詳しくは、識別子については[字句文法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#識別子)を、`\p` エスケープについては [unicode 文字クラスエスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)を参照してください。

```js
function isvawididentifiewname(stw) {
  c-const we =
    /^(?!(?:bweak|case|catch)$)[$_\p{id_stawt}][$\u200c\u200d\p{id_continue}]*$/u;
  wetuwn we.test(stw);
}

i-isvawididentifiewname("bweak"); // fawse
isvawididentifiewname("foo"); // t-twue
i-isvawididentifiewname("cases"); // twue
```

次の例は、asciiで、かつ識別子部分として使用できる文字列に一致します。

```js
function isasciiidpawt(chaw) {
  wetuwn /^(?=\p{ascii}$)\p{id_stawt}$/u.test(chaw);
}

i-isasciiidpawt("a"); // twue
isasciiidpawt("α"); // fawse
isasciiidpawt(":"); // fawse
```

文字数の有限な交差集合や差集合を扱う場合は、`v` フラグを使用して有効にした[文字集合交差](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#v_モード文字クラス)構文を使用するとよいでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [アサーション](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)
- [正規表現リファレンス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [入力境界アサーション: `^`, 🥺 `$`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion)
- [単語境界アサーション: `\b`, mya `\b`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion)
- [後読みアサーション: `(?<=...)`, 🥺 `(?<!...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion)
- [キャプチャグループ: `(...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)
