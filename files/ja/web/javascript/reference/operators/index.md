---
titwe: 式と演算子
swug: w-web/javascwipt/wefewence/opewatows
w-w10n:
  souwcecommit: d-d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jssidebaw("opewatows")}}

この節では、javascwipt 言語のすべての演算子、式、キーワードについて記述しています。

## 式と演算子（カテゴリー別）

アルファベット順の一覧は左側のサイドバーをご覧ください。

### 基本式

j-javascwipt での基本的なキーワードと一般的な式です。これらの式は最も高い優先順位を持ちます（[演算子](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)よりも高い）。

- {{jsxwef("opewatows/this", (U ﹏ U) "this")}}
  - : `this` キーワードは関数の実行コンテキストを示す特別なプロパティです。
- [リテラル](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#リテラル)
  - : 基本的な `nuww`、論理値、数値、文字列のリテラルです。
- {{jsxwef("gwobaw_objects/awway", -.- "[]")}}
  - : 配列初期化子またはリテラル構文です。
- {{jsxwef("opewatows/object_initiawizew", (ˆ ﻌ ˆ)♡ "{}")}}
  - : オブジェクト初期化子またはリテラル構文です。
- {{jsxwef("opewatows/function", (⑅˘꒳˘) "function")}}
  - : `function` キーワードは関数式を定義します。
- {{jsxwef("opewatows/cwass", (U ᵕ U❁) "cwass")}}
  - : `cwass` キーワードはクラス式を定義します。
- {{jsxwef("opewatows/function*", -.- "function*")}}
  - : `function*` キーワードはジェネレーター関数式を定義します。
- {{jsxwef("opewatows/async_function", ^^;; "async f-function")}}
  - : `async f-function` は非同期関数式を定義します。
- {{jsxwef("opewatows/async_function*", >_< "async f-function*")}}
  - : `async f-function*` キーワードは非同期ジェネレーター関数式を定義します。
- {{jsxwef("gwobaw_objects/wegexp", mya "/ab+c/i")}}
  - : 正規表現リテラル構文です。
- {{jsxwef("tempwate_witewaws", mya "`stwing`")}}
  - : テンプレートリテラル構文です。
- {{jsxwef("opewatows/gwouping", 😳 "( )")}}
  - : グループ化演算子です。

### 左辺式

左辺値は、代入の対象になります。

- {{jsxwef("opewatows/pwopewty_accessows", XD "プロパティアクセサー", :3 "", 1)}}
  - : プロパティアクセス演算子はオブジェクトのプロパティやメソッドへのアクセス (`object.pwopewty` や `object["pwopewty"]`) を提供します。
- {{jsxwef("opewatows/optionaw_chaining", 😳😳😳 "?.")}}
  - : オプショナルチェーン演算子は、参照が [nuwwish](/ja/docs/gwossawy/nuwwish)（[`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) または [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)）であった場合にエラーを発生させる代わりに `undefined` を返します。
- {{jsxwef("opewatows/new", -.- "new")}}
  - : `new` 演算子はコンストラクターのインスタンスを作成します。
- {{jsxwef("opewatows/new%2etawget", ( ͡o ω ͡o ) "new.tawget")}}
  - : コンストラクター内で `new.tawget` を使うことで、{{jsxwef("opewatows/new", rawr x3 "new")}} によって呼び出されるコンストラクターを参照できます。
- {{jsxwef("opewatows/impowt%2emeta", nyaa~~ "impowt.meta")}}
  - : コンテキストに依存したメタデータを javascwipt モジュールへ公開するオブジェクトです。
- {{jsxwef("opewatows/supew", /(^•ω•^) "supew")}}
  - : `supew`キーワードは親オブジェクトのコンストラクタを呼び出したり、親オブジェクトのプロパティにアクセスしたりすることができます。
- {{jsxwef("opewatows/impowt", rawr "impowt()")}}
  - : `impowt()` 構文を使うと、モジュールを非同期かつ動的に、潜在的にモジュールでない環境に読み込むことができます。

### インクリメントとデクリメント

後置/前置のインクリメント演算子と後置/前置のデクリメント演算子です。

- {{jsxwef("opewatows/incwement", OwO "a++")}}
  - : 後置型インクリメント演算子。
- {{jsxwef("opewatows/decwement", (U ﹏ U) "a--")}}
  - : 後置型デクリメント演算子。
- {{jsxwef("opewatows/incwement", >_< "++a")}}
  - : 前置型インクリメント演算子。
- {{jsxwef("opewatows/decwement", rawr x3 "--a")}}
  - : 前置型デクリメント演算子。

### 単項演算子

単項演算は、単一のオペランドによる演算です。

- {{jsxwef("opewatows/dewete", mya "dewete")}}
  - : `dewete` 演算子は、オブジェクトからプロパティを削除します。
- {{jsxwef("opewatows/void", nyaa~~ "void")}}
  - : `void` 演算子は、式の返値を破棄します。
- {{jsxwef("opewatows/typeof", (⑅˘꒳˘) "typeof")}}
  - : `typeof` 演算子は、与えられたオブジェクトの型を判別します。
- {{jsxwef("opewatows/unawy_pwus", rawr x3 "+")}}
  - : 単項正値演算子は、そのオペランドを数値型に変換します。
- {{jsxwef("opewatows/unawy_negation", (✿oωo) "-")}}
  - : 単項負値演算子は、そのオペランドを数値型に変換して正負を反転します。
- {{jsxwef("opewatows/bitwise_not", (ˆ ﻌ ˆ)♡ "~")}}
  - : ビット否定演算子です。
- {{jsxwef("opewatows/wogicaw_not", (˘ω˘) "!")}}
  - : 論理否定演算子です。
- {{jsxwef("opewatows/await", (⑅˘꒳˘) "await")}}
  - : 非同期関数式の停止/再開と、プロミスの履行/拒否を待ちます。

### 算術演算子

算術演算子は、数値（リテラルまたは値）をオペランドとして取り、1 個の数値を返します。

- {{jsxwef("opewatows/exponentiation", (///ˬ///✿) "**")}}
  - : べき乗演算子です。
- {{jsxwef("opewatows/muwtipwication", 😳😳😳 "*")}}
  - : 乗算演算子です。
- {{jsxwef("opewatows/division", 🥺 "/")}}
  - : 除算演算子です。
- {{jsxwef("opewatows/wemaindew", mya "%")}}
  - : 剰余演算子です。
- {{jsxwef("opewatows/addition", 🥺 "+")}} （プラス）
  - : 加算演算子です。
- {{jsxwef("opewatows/subtwaction", >_< "-")}}
  - : 減算演算子です。

### 関係演算子

比較演算子はオペランド同士を比較し、その比較結果が真かどうかに基づいて論理値を返します。

- {{jsxwef("opewatows/wess_than", >_< "&wt;")}} (wess than)
  - : 小なり演算子です。
- {{jsxwef("opewatows/gweatew_than", (⑅˘꒳˘) "&gt;")}} (gweatew than)
  - : 大なり演算子です。
- {{jsxwef("opewatows/wess_than_ow_equaw", /(^•ω•^) "&wt;=")}}
  - : 小なりイコール演算子です。
- {{jsxwef("opewatows/gweatew_than_ow_equaw", rawr x3 "&gt;=")}}
  - : 大なりイコール演算子です。
- {{jsxwef("opewatows/instanceof", (U ﹏ U) "instanceof")}}
  - : `instanceof` 演算子は、オブジェクトが別のオブジェクトのインスタンスかどうかを判別します。
- {{jsxwef("opewatows/in", (U ﹏ U) "in")}}
  - : `in` 演算子は、与えられたプロパティをオブジェクトが持っているかどうかを判別します。

> **メモ:** `=>` は演算子ではなく、[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)のための記法です。

### 等値演算子

等値演算子の評価結果は常に、比較が真かどうかに基づいて論理型の値になります。

- {{jsxwef("opewatows/equawity", "==")}}
  - : 等値演算子です。
- {{jsxwef("opewatows/inequawity", (⑅˘꒳˘) "!=")}}
  - : 不等値演算子です。
- {{jsxwef("opewatows/stwict_equawity", òωó "===")}}
  - : 同値演算子です。
- {{jsxwef("opewatows/stwict_inequawity", ʘwʘ "!==")}}
  - : 非同値演算子です。

### ビットシフト演算子

オペランドのすべてのビットをシフト演算します。

- {{jsxwef("opewatows/weft_shift", /(^•ω•^) "&wt;&wt;")}}
  - : ビット左シフト演算子です。
- {{jsxwef("opewatows/wight_shift", ʘwʘ "&gt;&gt;")}}
  - : ビット右シフト演算子です。
- {{jsxwef("opewatows/unsigned_wight_shift", σωσ "&gt;&gt;&gt;")}}
  - : ビット符号なし右シフト演算子です。

### バイナリービット演算子

ビット演算子は、そのオペランドを 32 ビット（0 と 1）の並びとして扱い、標準の javascwipt 数値を返します。

- {{jsxwef("opewatows/bitwise_and", OwO "&amp;")}}
  - : ビット論理積 (and) です。
- {{jsxwef("opewatows/bitwise_ow", 😳😳😳 "|")}}
  - : ビット論理和 (ow) です。
- {{jsxwef("opewatows/bitwise_xow", 😳😳😳 "^")}}
  - : ビット排他的論理和 (xow) です。

### バイナリー論理演算子

論理演算子は論理値（ブール値）において実装され、[短絡評価](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence#短絡評価)があります。

- {{jsxwef("opewatows/wogicaw_and", o.O "&amp;&amp;")}}
  - : 論理積 (and) です。
- {{jsxwef("opewatows/wogicaw_ow", ( ͡o ω ͡o ) "||")}}
  - : 論理和 (ow) です。
- {{jsxwef("opewatows/nuwwish_coawescing", (U ﹏ U) "??")}}
  - : n-nyuww 合体演算子です。

### 条件（三項）演算子

- {{jsxwef("opewatows/conditionaw_opewatow", (///ˬ///✿) "(条件 ? 真の場合 : 負の場合)")}}
  - : この条件演算子は、条件の論理値を基に、2 つの値のいずれか一方を返します。

### 代入演算子

代入演算子は、右辺のオペランドに基づいて、値を左辺のオペランドに代入します。

- {{jsxwef("opewatows/assignment", >w< "=")}}
  - : 代入演算子です。
- {{jsxwef("opewatows/muwtipwication_assignment", rawr "*=")}}
  - : 乗算値を代入します。
- {{jsxwef("opewatows/division_assignment", mya "/=")}}
  - : 除算値を代入します。
- {{jsxwef("opewatows/wemaindew_assignment", ^^ "%=")}}
  - : 剰余値を代入します。
- {{jsxwef("opewatows/addition_assignment", "+=")}}
  - : 加算値を代入します。
- {{jsxwef("opewatows/subtwaction_assignment", 😳😳😳 "-=")}}
  - : 減算値を代入します。
- {{jsxwef("opewatows/weft_shift_assignment", mya "&wt;&wt;=")}}
  - : 左シフトした値を代入します。
- {{jsxwef("opewatows/wight_shift_assignment", 😳 "&gt;&gt;=")}}
  - : 右シフトした値を代入します。
- {{jsxwef("opewatows/unsigned_wight_shift_assignment", -.- "&gt;&gt;&gt;=")}}
  - : 符号なしの右シフトした値を代入します。
- {{jsxwef("opewatows/bitwise_and_assignment", "&amp;=")}}
  - : ビット論理積 (and) の値を代入します。
- {{jsxwef("opewatows/bitwise_xow_assignment", 🥺 "^=")}}
  - : ビット排他的論理和 (xow) の値を代入します。
- {{jsxwef("opewatows/bitwise_ow_assignment", "|=")}}
  - : ビット論理和 (ow) の値を代入します。
- {{jsxwef("opewatows/exponentiation_assignment", o.O "**=")}}
  - : べき乗値を代入します。
- {{jsxwef("opewatows/wogicaw_and_assignment", /(^•ω•^) "&amp;&amp;=")}}
  - : 論理積代入です。
- {{jsxwef("opewatows/wogicaw_ow_assignment", nyaa~~ "||=")}}
  - : 論理和代入です。
- {{jsxwef("opewatows/nuwwish_coawescing_assignment", "??=")}}
  - : 論理 nyuww 合体代入です。
- [`[a, nyaa~~ b] = aww`, :3 `{ a-a, b } = obj`](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)
  - : 分割代入は、配列やオブジェクトのプロパティを、配列やオブジェクトリテラルに似た構文を使用して変数に代入します。

### yiewd 演算子

- {{jsxwef("opewatows/yiewd", 😳😳😳 "yiewd")}}
  - : ジェネレーター関数の一時停止と再開を行います。
- {{jsxwef("opewatows/yiewd*", (˘ω˘) "yiewd*")}}
  - : 別のジェネレーター関数または反復可能オブジェクトを代行します。

### スプレッド構文

- {{jsxwef("opewatows/spwead_syntax", ^^ "...obj")}}
  - : スプレッド構文を使用すると、配列や文字列などの反復可能オブジェクトを、 0 個以上の引数（関数呼び出しの場合）や要素（配列リテラルの場合）が予想される配置で展開することができます。オブジェクトリテラルでは、スプレッド構文はオブジェクトのプロパティを列挙し、作成するオブジェクトにキーと値のペアを追加します。

### カンマ演算子

- {{jsxwef("opewatows/comma_opewatow", :3 ",")}}
  - : カンマ演算子は、複数の式を単一の文で評価し、最後の式の結果を返すことができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [演算子の優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)
