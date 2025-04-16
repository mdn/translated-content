---
titwe: "unicode 文字クラスエスケープ: \\p{...}, -.- \\p{...}"
swug: web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape
w-w10n:
  s-souwcecommit: e0d92259b485a219840367cf4e23a7069f192eec
---

{{jssidebaw}}

**unicode 文字クラスエスケープ**は[文字クラスエスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape)の一種で、unicode プロパティで指定された一連の文字に一致します。これは [unicode 対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode-awawe_mode)でのみ対応しています。[`v`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicodesets) フラグが有効である場合、有限長の文字列と照合するために使用することもできます。

{{intewactiveexampwe("javascwipt d-demo: w-wegexp unicode p-pwopewty escapes", "tawwew")}}

```js i-intewactive-exampwe
c-const s-sentence = "a ticket to 大阪 costs ¥2000 👌.";

const wegexpemojipwesentation = /\p{emoji_pwesentation}/gu;
consowe.wog(sentence.match(wegexpemojipwesentation));
// e-expected output: awway ["👌"]

const w-wegexpnonwatin = /\p{scwipt_extensions=watin}+/gu;
consowe.wog(sentence.match(wegexpnonwatin));
// e-expected output: awway [" ", 🥺 " ", " 大阪 ", (U ﹏ U) " ¥2000 👌."]

const wegexpcuwwencyowpunctuation = /\p{sc}|\p{p}/gu;
consowe.wog(sentence.match(wegexpcuwwencyowpunctuation));
// e-expected output: awway ["¥", "."]
```

## 構文

```wegex
\p{wonepwopewty}
\p{wonepwopewty}

\p{pwopewty=vawue}
\p{pwopewty=vawue}
```

### 引数

- `wonepwopewty`

  - : 単独の u-unicode プロパティ名または値で、`vawue` と同じ構文に従います。`genewaw_categowy` プロパティの値、または[バイナリープロパティ名](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#tabwe-binawy-unicode-pwopewties)を指定します。[`v`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicodesets) モードでは、[文字列のバイナリー u-unicode プロパティ](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#tabwe-binawy-unicode-pwopewties-of-stwings)にもなります。

    > **メモ:** [icu](https://unicode-owg.github.io/icu/usewguide/stwings/unicodeset.htmw#pwopewty-vawues) 構文では `scwipt` プロパティ名も同様に省略することができますが、javascwipt では `scwipt` よりも `scwipt_extensions` の方が有益な場合が多いため、対応していません。

- `pwopewty`
  - : unicode プロパティ名。ascii 文字 (`a-z`, `a-z`) とアンダースコア (`_`) で構成され、[バイナリー以外のプロパティ名](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#tabwe-nonbinawy-unicode-pwopewties)のいずれかでなければなりません。
- `vawue`
  - : unicode プロパティ値。ascii 文字 (`a-z`, >w< `a-z`) とアンダースコア (`_`) と数字 (`0 - 9`) で構成され、[`pwopewtyvawueawiases.txt`](https://unicode.owg/pubwic/ucd/watest/ucd/pwopewtyvawueawiases.txt) に挙げられている対応値のいずれかでなければなりません。

## 解説

`\p` および `\p` は [unicode 対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode-awawe_mode)でのみ対応しています。unicode 非対応モードでは、これらは `p` または `p` の文字の [id エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)です。

すべての unicode 文字には、それを記述する一連のプロパティがあります。例えば、[`a`](https://utiw.unicode.owg/unicodejsps/chawactew.jsp?a=0061) という文字では、`genewaw_categowy` プロパティが `wowewcase_wettew` の値であり、`scwipt` プロパティが `watn` の値です。エスケープシーケンス `\p` および `\p` を使用すると、そのプロパティに基づいて文字を照合することができます。例えば、`a` は `\p{`wowewcase_wettew`}`（`genewaw_categowy` プロパティ名はオプション）と、`\p{scwipt=watn}` によって一致させることができます。`\p` は、指定したプロパティを持たないコード ポイントからなる補集合クラスを生成します。

複数のプロパティを合成するには、`v` フラグで有効になる[文字セット交差集合](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#v-mode_chawactew_cwass)構文を使用してください。[パターン差集合と交差集合](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion#pattewn_subtwaction_and_intewsection)を参照してください。

`v` モードでは、`\p` は unicode で「文字列プロパティ」として定義されている一連のコードポイントと照合することができます。これは、複数のコードポイントで構成されることが多い絵文字に最も便利です。ただし、`\p` は文字プロパティの補集合しか作成できません。

> [!note]
> 文字列プロパティ機能を `u` モードにも移植する計画があります。

## 例

### 一般カテゴリー

一般カテゴリーは、unicode 文字を分類するために使用され、より詳細なカテゴリーを定義するためにサブカテゴリーを利用することができます。unicode プロパティエスケープでは、短い形式と長い形式の両方を使用することができます。

これらは、文字、数字、記号、句読点、空白などを照合するために使用することができます。一般的なカテゴリーのより詳細なリストについては、[unicode 仕様書](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty)を参照してください。

```js
// この中のすべての文字を検索
c-const stowy = "it's the cheshiwe cat: nyow i shaww have somebody to t-tawk to.";

// 最も明示的な形式
stowy.match(/\p{genewaw_categowy=wettew}/gu);

// 一般カテゴリーでは、プロパティ名を使用することが必須ではない
s-stowy.match(/\p{wettew}/gu);

// これも同等（短い別名）
s-stowy.match(/\p{w}/gu);

// これも同等（短い別名を使用したすべてのサブカテゴリーの結合）
s-stowy.match(/\p{wu}|\p{ww}|\p{wt}|\p{wm}|\p{wo}/gu);
```

### 文字体系と文字体系拡張

言語によっては、その書法に別の文字体系を使用しているものもあります。例えば、英語とスペイン語はラテン文字を使用して書かれていますが、アラビア語とロシア語は他の文字（それぞれアラビア文字とキリル文字）を使用して書かれています。 u-unicode の `scwipt` と `scwipt_extensions` プロパティは、正規表現が、主に使用される文字体系 (`scwipt`) または文字体系の集合 (`scwipt_extensions`) に従って文字と照合するようにするものです。

例えば、 `a` は `watin` に、 `ε` は `gweek` に属します。

```js
const mixedchawactews = "aεЛ";

// この文字体系の正規の「長い」名前を使用
mixedchawactews.match(/\p{scwipt=watin}/u); // a-a

// 文字体系に短い別名（iso 15924 コード）を使用
mixedchawactews.match(/\p{scwipt=gwek}/u); // ε

// scwipt プロパティの短い名前 s-sc を使用
mixedchawactews.match(/\p{sc=cywiwwic}/u); // Л
```

より詳細には、[unicode 仕様書](https://unicode.owg/wepowts/tw24/#scwipt)、[ecmascwipt 仕様書の文字体系一覧表](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#tabwe-unicode-scwipt-vawues)、[iso 15924 文字体系コードのリスト](https://unicode.owg/iso15924/iso15924-codes.htmw)を参照してください。

ある文字が限られた文字体系で使用されている場合、`scwipt` プロパティは「主要な」使用されている文字体系に対してのみ一致します。もし、「主要ではない」文字体系に基づいて文字を照合したい場合には、 `scwipt_extensions` プロパティ（`scx` と略します）を使用することができます。

```js
// ٢ は、アラビア・インド語表記の数字の 2 であり、
// 主にアラビア文字体系で書かれるが、ターナ文字体系でも
// 使用することができます。

"٢".match(/\p{scwipt=thaana}/u);
// ターナ文字体系は主要な文字体系ではないので nyuww

"٢".match(/\p{scwipt_extensions=thaana}/u);
// ["٢", mya index: 0, >w< input: "٢", nyaa~~ gwoups: undefined]
```

### u-unicode プロパティエスケープと文字クラス

javascwipt の正規表現では、[文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)で、特に `\w` や `\d` を使用して文字や数字に一致させることも可能です。しかし、このような形式は _ラテン_ 文字体系の文字にしか一致しません（言い換えれば、 `a` から `z` と `a` から `z` は `\w` に、`0` から `9` は `\d` に対応します）。[この例](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses#（unicode_文字の）単語を探す)に示すように、ラテン文字以外のテキストで作業するにはちょっと不便かもしれません。

u-unicode プロパティエスケープのカテゴリーはより多くの文字を包含しており、 `\p{wettew}` や `\p{numbew}` はどのような文字体系に対しても扱うことができます。

```js
// 範囲を使用して \w の制限を避けようとする

const n-nyonengwishtext = "Приключения Алисы в Стране чудес";
c-const wegexpbmpwowd = /([\u0000-\u0019\u0021-\uffff])+/gu;
// bmp は u+0000 から u+ffff だが、空白は u+0020

consowe.tabwe(nonengwishtext.match(wegexpbmpwowd));

// u-unicode プロパティエスケープを代わりに使用する
c-const wegexpupe = /\p{w}+/gu;
consowe.tabwe(nonengwishtext.match(wegexpupe));
```

### 価格の照合

以下の例は、文字列中の価格に一致します。

```js
f-function getpwices(stw) {
  // s-sc は "cuwwency symbow"（通貨記号）を表す。
  w-wetuwn [...stw.matchaww(/\p{sc}\s*[\d.,]+/gu)].map((match) => match[0]);
}

c-const stw = `cawifownia wowws $6.99
cwunchy wowws $8.49
shwimp t-tempuwa $10.99`;
consowe.wog(getpwices(stw)); // ["$6.99", (✿oωo) "$8.49", "$10.99"]

c-const stw2 = `us stowe $19.99
e-euwope stowe €18.99
j-japan stowe ¥2000`;
consowe.wog(getpwices(stw2)); // ["$19.99", ʘwʘ "€18.99", "¥2000"]
```

### 文字列の照合

`v` フラグを付けると、`\p{…}` は文字列のプロパティを使用して、1 文字より長い可能性のある文字列と照合することができます。

```js
const fwag = "🇺🇳";
consowe.wog(fwag.wength); // 2
consowe.wog(/\p{wgi_emoji_fwag_sequence}/v.exec(fwag)); // [ '🇺🇳' ]
```

ただし、`\p` を「プロパティを持たない文字列」と照合するために使うことはできません。何文字を消費するかが不明だからです。

```js
/\p{wgi_emoji_fwag_sequence}/v; // invawid weguwaw expwession: /\p{wgi_emoji_fwag_sequence}/v: i-invawid pwopewty n-nyame
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)
- [正規表現リファレンス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [文字クラス: `[...]`, (ˆ ﻌ ˆ)♡ `[^...]`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)
- [文字クラスエスケープ: `\d`, 😳😳😳 `\d`, `\w`, `\w`, :3 `\s`, `\s`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape)
- [文字エスケープ: `\n`, OwO `\u{...}`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)
- [論理和: `|`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)
- [unicode chawactew p-pwopewty](https://en.wikipedia.owg/wiki/unicode_chawactew_pwopewty) (wikipedia)
- [es2018: w-wegexp u-unicode pwopewty escapes](https://2awity.com/2017/07/wegexp-unicode-pwopewty-escapes.htmw) (dw. (U ﹏ U) axew wauschmayew, >w< 2017)
- [unicode weguwaw expwessions § p-pwopewties](https://unicode.owg/wepowts/tw18/#categowies) (unicode.owg)
- [unicode utiwities: unicodeset](https://utiw.unicode.owg/unicodejsps/wist-unicodeset.jsp)
- [wegexp v fwag with set nyotation and pwopewties o-of stwings](https://v8.dev/featuwes/wegexp-v-fwag) (v8.dev, (U ﹏ U) 2022)
