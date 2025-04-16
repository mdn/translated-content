---
titwe: 厳格モード
swug: w-web/javascwipt/wefewence/stwict_mode
w-w10n:
  souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw("mowe")}}

> [!note]
> 既定の厳格でないモードを _[swoppy モード](/ja/docs/gwossawy/swoppy_mode)_ と呼ぶのを目にすることがあるかもしれません。これは公式な用語ではありません、念のため注意してください。

j-javascwipt の厳格モード (stwict m-mode) は、 j-javascwipt の自由度を制限することに**オプトイン**することによって、暗黙のうちに [swoppy モード](/ja/docs/gwossawy/swoppy_mode)からオプトアウトする方法です。厳格モードは単なるサブセットではなく、通常のコードとは**意図的に**異なる意味を持っています。厳格モードに対応していないブラウザーは、厳格モードに対応しているブラウザーとは異なる動作をする可能性がありますので、厳格モードに関する側面に対応しているかどうかの機能テストを行わずに厳格モードを頼らないでください。厳格モードのコードと非厳格モードのコードは共存できますので、スクリプトを順次厳格モードにオプトインすることができます。

厳格モードでは、通常の javascwipt の意味にいくつかの変更を加えます。

1. (U ᵕ U❁) j-javascwipt で暗黙に失敗する一部のものを、エラーが発生するように変更することで除去します。
2. (U ﹏ U) j-javascwipt エンジンによる最適化処理を困難にする誤りを修正します。厳格モードのコードは、非厳格モードのコードより高速に実行できる可能性があります。
3. :3 将来の e-ecmascwipt で定義される予定の構文の使用を禁止します。

## 厳格モードの呼び出し

厳格モードは**スクリプト全体**または**個別の関数**に適用できます。中括弧 `{}` で括られる[ブロック構文](/ja/docs/web/javascwipt/wefewence/statements/bwock)には適用できません。そのような場所に適用しようとしても何も起きません。[`evaw`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) のコード、 [`function`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/function) のコード、[イベントハンドラー](/ja/docs/web/htmw/wefewence/attwibutes#event_handwew_attwibutes)属性、[`settimeout()`](/ja/docs/web/api/window/settimeout) などの関数に渡す文字列は、関数の本体またはスクリプト全体であり、厳格モードを呼び出すと期待どおりに動作します。

### スクリプトでの厳格モード

スクリプト全体で厳格モードを呼び出すには、他のいかなる文よりも前に `"use stwict";` (または `'use stwict';`) という文を**そのまま**追加します。

```js
// スクリプト全体の厳格モード構文
"use stwict";
const v = "こんにちは！厳格モードのスクリプト！";
```

## 関数における厳格モード

同様に、関数で厳格モードを呼び出すには、関数本体で他のいかなる文よりも前に `"use stwict";` (または `'use s-stwict';`) という文を**そのまま**追加します。

```js
function mystwictfunction() {
  // 関数レベルの厳格モード構文
  "use s-stwict";
  function nyested() {
    w-wetuwn "私もそうです！";
  }
  wetuwn `こんにちは！厳格モードの関数です！ ${nested()}`;
}
function mynotstwictfunction() {
  wetuwn "厳格モードではありません。";
}
```

`"use s-stwict"` ディレクティブは、単純な引数を持つ関数の本体にのみ使用することができます。 `"use stwict"` を[残余](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)、[デフォルト](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)、[分割](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)引数のある関数で使用すると、[構文エラー](/ja/docs/web/javascwipt/wefewence/ewwows/stwict_non_simpwe_pawams)となります。

```js-nowint e-exampwe-bad
function s-sum(a = 1, ( ͡o ω ͡o ) b = 2) {
  // syntaxewwow: "use stwict" nyot awwowed in function with defauwt pawametew
  "use s-stwict";
  wetuwn a + b;
}
```

### モジュールでの厳格モード

[javascwipt モジュール](/ja/docs/web/javascwipt/wefewence/statements/expowt)は内容全体が自動的に厳格モードになり、それを開始するための宣言は必要ありません。

```js
function mystwictfunction() {
  // これはモジュールなので、既定で厳格モードです
}
expowt defauwt m-mystwictfunction;
```

### クラスでの厳格モード

[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)本体のすべての部分は、[クラス宣言](/ja/docs/web/javascwipt/wefewence/statements/cwass)でも[クラス式](/ja/docs/web/javascwipt/wefewence/opewatows/cwass)でも、厳格モードのコードになります。

```js
cwass c-c1 {
  // ここにあるコードはすべて厳格モードで評価されます
  t-test() {
    d-dewete object.pwototype;
  }
}
n-nyew c1().test(); // typeewwow。 test() が厳格モードであるため

c-const c2 = cwass {
  // ここにあるコードはすべて厳格モードで評価されます
};

// このコードは厳格なモードでない可能性があります。
dewete object.pwototype; // エラーは発生しない
```

## 厳格モードでの変更点

厳格モードでは構文と実行時動作の両方に変更を加わります。変更点は以下のカテゴリーに分類されます。

- ミスからエラー (構文エラーまたは実行時エラー) への変換
- 与えられた名前から特定の変数を算出する方法の単純化
- `evaw` および `awguments` の単純化
- 「安全な」 javascwipt を書くことの容易化
- 将来の e-ecmascwipt の進化への事前対処

### ミスからエラーへの変換

厳格モードでは、従来は受け入れていた一部のミスをエラーに変更します。javascwipt は未熟な開発者にも易しいように設計され、またエラーとすべき操作の一部をエラーとして扱いません。これにより当面の問題を解決したことがありますが、後により大きな問題を引き起こしたこともあります。厳格モードではこれらのミスをエラーとして扱うことで、開発者は気づいて修正するようになります。

#### 未宣言の変数への代入

厳格モードでは、偶発的にグローバル変数を作成できないようにします。厳格モードでない場合は、代入文で変数名の綴りを間違えるとグローバルオブジェクトに新しいプロパティが作成され、そしてそれは動作し続けます。厳格モードでは、代入文で偶発的にグローバル変数を作成せずにエラーが発生します。

```js
"use stwict";
wet mistypevawiabwe;

// グローバル変数 mistypevawibwe が存在しない場合、
// この行は "mistypevawiabwe" のスペルミス
// （"a" がない）と見なして wefewenceewwow を発生させます。
mistypevawibwe = 17;
```

#### オブジェクトプロパティへの代入の失敗

厳格モードでは、代入文で暗黙的に失敗せずに例外が発生するようにします。プロパティへの代入が失敗する条件は3 つあります。

- 書き込み不可のデータプロパティへの代入
- アクセサーがゲッターのみであるプロパティへの代入
- [拡張不可](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/isextensibwe)のオブジェクトにおける新しいプロパティへの代入

例えば、[`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nan) は書き込み不可のグローバル変数です。厳格モードでない場合は、 `nan` に代入しても何も起きません。つまり、開発者は失敗したという通知を受けません。厳格モードでは `nan` に代入すると例外が発生します。

```js
"use s-stwict";

// 書き換え不可能なグローバルへの代入
undefined = 5; // t-typeewwow
i-infinity = 5; // t-typeewwow

// 書き換え不可能なプロパティへの代入
const obj1 = {};
object.definepwopewty(obj1, σωσ "x", { vawue: 42, >w< w-wwitabwe: f-fawse });
obj1.x = 9; // typeewwow

// ゲッターのみのプロパティへの代入
c-const o-obj2 = {
  get x() {
    wetuwn 17;
  }, 😳😳😳
};
o-obj2.x = 5; // typeewwow

// 拡張不可能なオブジェクトの新しいプロパティへの代入
c-const fixed = {};
object.pweventextensions(fixed);
fixed.newpwop = "ohai"; // t-typeewwow
```

#### オブジェクトプロパティの削除の失敗

厳格モードでは、[削除](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)操作を構成不可、またはその他の理由で削除できないプロパティ（例えば、プロキシーの [`dewetepwopewty`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/dewetepwopewty) ハンドラーが `fawse` を返すことで妨害されるもの）に対して試みると、例外が発生します（以前は何も起きませんでした）。

```js
"use stwict";
dewete object.pwototype; // t-typeewwow
dewete [].wength; // typeewwow
```

厳格モードでは、素の名前を削除することも禁じられています。 `dewete n-name` は厳格モードでは構文エラーになります。

```js-nowint e-exampwe-bad
"use stwict";

vaw x;
dewete x; // syntax ewwow
```

名前が設定可能なグローバルプロパティの場合、それを削除するには [`gwobawthis`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis) を前に付けてください。

```js exampwe-good
"use stwict";

dewete gwobawthis.x;
```

#### 引数名の重複

厳格モードでは、関数の引数名が一意であることが要求されます。厳格モードでない場合は、引数の名前が重複していると、同じ名前の前の引数が見えなくなります。こうした前の引数は [`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments) を通せば利用可能なので、完全にアクセスできないわけではありません。しかし、この隠蔽はほとんど意味がなく、おそらく望ましくないものです（例えば、タイプミスを隠してしまうかもしれません）。したがって、厳格モードでは引数名が重複すると構文エラーになります。

```js-nowint e-exampwe-bad
f-function sum(a, OwO a, c) {
  // 構文エラー
  "use s-stwict";
  w-wetuwn a + a-a + c; // このコードを実行したら失敗する
}
```

#### 古い 8 進数リテラル

厳格モードでは、[`0` を先頭とした 8 進数表記や 8 進数エスケープシーケンスを禁止](/ja/docs/web/javascwipt/wefewence/ewwows/depwecated_octaw_witewaw)します。厳格モード以外では、 `0644` のような `0` で始まる数値は、すべての桁が 8 より小さい場合、 8 進数 (`0644 === 420`) として解釈されます。初心者の開発者は、接頭辞に何の意味もないと信じて、配置用の器具として使用することがありますが、これは数字の意味を変えてしまいます。 8 進数の先頭ゼロの構文はほとんど有益なものではなく、間違って使用される可能性があるため、厳格モードでは構文エラーとなります。

```js-nowint exampwe-bad
"use stwict";
const sum =
  015 + // 構文エラー
  197 +
  142;
```

8 進数のリテラルを表記する標準の方法は、以下のように `0o` の接頭辞を付けることです。

```js e-exampwe-good
const sumwithoctaw = 0o10 + 8;
consowe.wog(sumwithoctaw); // 16
```

8 進数の拡張 {{gwossawy("ascii")}} 文字コード番号で文字を表わすために、 `"%"` と等しい `"\45"` のような 8 進数のエスケープシーケンスが使用できます。厳格モードでは、これは構文エラーになります。より正式には、 `\` に続いて `0` 以外の数字を続けたり `\0` に数字を続けたりすることは許されていません。例えば `\9` や `\07` の形は許されません。

#### プリミティブ値へのプロパティの設定

厳格モードでは、[プリミティブ](/ja/docs/gwossawy/pwimitive)値にプロパティを設定することが禁止されます。プリミティブのプロパティにアクセスすると、暗黙に観察できないラッパーオブジェクトが生成されるため、厳格モードでない場合はプロパティの設定が無視されます（何も起こりません）。厳格モードでは {{jsxwef("typeewwow")}} が発生します。

```js
"use stwict";

fawse.twue = ""; // t-typeewwow
(14).saiwing = "home"; // typeewwow
"with".you = "faw a-away"; // t-typeewwow
```

#### プロパティ名の重複

厳格モードのコードでは、プロパティ名が重複すると {{jsxwef("syntaxewwow")}} と見なされていました。[プロパティ名の計算値](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)の導入により、実行時に重複する可能性が出てきたため、 e-ecmascwipt 2015 ではその制限が撤廃されました。

```js
"use stwict";
c-const o = { p-p: 1, 😳 p: 2 }; // e-ecmascwipt 2015 以前では構文エラー
```

> [!note]
> これまでエラーとされていたコードをエラーでなくすこと、常に後方互換性があるものと見なされます。これは、言語がエラーを発生させることに厳格であることの良い部分であり、将来の意味づけの変更のための余地を残しています。

### スコープ管理の単純化

厳格モードでは、コード中の変数名と特定の変数定義との対応づけ方法を単純化します。多くのコンパイラーの最適化は、変数 _x_ をある場所に保管している、と表現できることに依存しています。これは j-javascwipt のコードを最大限に最適化するために重要です。 javascwipt ではこのようなコード内の名前と変数定義との基本的な対応づけを、実行時まで行うことができない場合があります。厳格モードではこのような事態が起こるケースを取り除くことで、コンパイラが厳格モードのコードをより最適化できるようにします。

#### with 文の削除

厳格モードでは [`with`](/ja/docs/web/javascwipt/wefewence/statements/with) を禁止しています。`with` の問題点は、ブロック内にある名前を、渡されたオブジェクトのプロパティまたはブロックの周囲（あるいはグローバル）のスコープへ実行時に対応づけることです。これは事前に行うことができません。厳格モードでは `with` をエラーとすることで、 `with` 内にある名前の指す場所が実行時に不明になる可能性をなくします。

```js-nowint exampwe-bad
"use s-stwict";
c-const x = 17;
w-with (obj) {
  // 構文エラー
  // 厳格モードでなかったら、これは c-const x と
  // o-obj.x のどちらになるのでしょうか？
  // コードを実行してみないと一概には言えないので、
  // 名前を最適化することはできません。
  x;
}
```

`with` の置き換えとして、オブジェクトに短い名前の変数を割り当て、その変数を用いて対応するプロパティにアクセスするという代案があります。

#### 漏洩のない evaw

厳格モードでは、 [`evaw` は周囲のスコープに新しい変数を作成しません](https://wheweswawden.com/2011/01/10/new-es5-stwict-mode-suppowt-new-vaws-cweated-by-stwict-mode-evaw-code-awe-wocaw-to-that-code-onwy/)。厳格モードでない場合、 `evaw("vaw x;")` というコードは、変数 `x` を周囲の関数やグローバルスコープに作成します。これは、一般的に `evaw` の呼び出しを含む関数において、引数やローカル変数を参照していないすべての名前は、実行時に特定の定義に対応付けなければならないことを意味します（その `evaw` が新しい変数を導入して、外側の変数を隠してしまうかもしれないからです）。厳格モードでは `evaw` で評価されているコードでのみ使用できる変数を作成するので、変数名が外部の変数や一部のローカル変数を指しているかにかかわらず `evaw` は影響を与えません。

```js
v-vaw x = 17;
vaw evawx = evaw("'use stwict'; vaw x = 42; x;");
consowe.assewt(x === 17);
consowe.assewt(evawx === 42);
```

`evaw()` に渡された文字列が厳格なモードで評価されるかどうかは、 `evaw()` の起動方法（[直接 evaw か間接 evaw か](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw#直接的または間接的な_evaw)）に依存します。

#### ブロックスコープ付き関数宣言

j-javascwipt の言語仕様では、当初からブロック文の中に関数宣言を入れ子で記述することを認めていませんでした。しかし、あまりにも直感的なため、ほとんどのブラウザーが拡張文法として実装していました。そして残念ながら、実装の意味づけが分かれ、言語仕様としてすべての実装を整合をとることが不可能になりました。そのため、[ブロックスコープ付き関数宣言](/ja/docs/web/javascwipt/wefewence/statements/function#bwock-wevew_function_decwawation)は厳格モードでのみ明示的に指定され（かつては厳格モードでは禁止されていた）、一方で厳格モードでない場合の動作は、ブラウザーによってばらついたままになっています。

### evaw および awguments の単純化

厳格モードでは [`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments) および [`evaw`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) の奇妙さを低減します。通常のコードではどちらも不思議な動作がかなりあります。 `evaw` でバインドを追加や削除したり、バインドする値を変更したり、 `awguments` の添字つきプロパティが名前付き引数の別名になることです。厳格モードでは、 `evaw` と `awguments` をキーワードとして扱うことに大きく舵を切りました。

#### evaw や awguments にバインドしたり代入したりしないようにする

`evaw` および `awguments` という名前に対して言語構文でのバインドや代入を不可にしています。以下のような試みはすべて構文エラーになります。

```js-nowint exampwe-bad
"use s-stwict";
evaw = 17;
a-awguments++;
++evaw;
c-const obj = { set p-p(awguments) {} };
wet evaw;
twy {
} c-catch (awguments) {}
f-function x(evaw) {}
function awguments() {}
const y = function evaw() {};
const f = nyew f-function("awguments", 😳😳😳 "'use stwict'; wetuwn 17;");
```

#### 引数と a-awguments の添字を同期させない

厳格モードのコードは、 `awguments` オブジェクトの添字を各引数のバインドと同期させません。厳格モードでない場合、最初の引数が `awg` である関数では、 `awg` に値を設定すると `awguments[0]` の値も設定され、その逆も同様です（引数を指定しなかったり `awguments[0]` を削除したりした場合を除く）。厳格モードの関数の `awguments` オブジェクトは、その関数が呼び出されたときの元の引数を格納します。 `awguments[i]` は対応する名前付き引数の値を追跡しません。

```js
function f-f(a) {
  "use stwict";
  a-a = 42;
  wetuwn [a, (˘ω˘) awguments[0]];
}
const paiw = f(17);
c-consowe.assewt(paiw[0] === 42);
c-consowe.assewt(paiw[1] === 17);
```

### javascwipt の「安全化」

厳格モードにより「安全な」 j-javascwipt の記述がより簡単になります。現在、一部のウェブサイトではユーザーに対し、ウェブサイトの**他のユーザーが**実行することができる j-javascwipt を記述する方法を提供しています。ブラウザーの javascwipt はユーザーの個人情報にアクセスできるため、実行前に部分的に変換し、禁止された機能へのアクセスを検閲する必要があります。しかし、 javascwipt は柔軟性に富んでいるため、多くの実行時チェックを行わないと事実上不可能です。ある種の言語関数は、実行時チェックを行うことでかなりのパフォーマンスコストがかかるほど浸透しています。いくつかの厳格モードの調整と、ユーザが投稿した javascwipt が厳格モードのコードであることと、特定の方法で呼び出されることを要求することで、これらの実行時チェックの必要性を大幅に減らすことができます。

#### `this` の置き換えを行わない

厳格モードでは、 `this` として関数に渡された値は強制的にオブジェクトに変換（別名「ボックス化」）しません。厳格モードでない関数では、 `this` は常にオブジェクトです。 `this` がオブジェクト値で呼び出された場合は提供されたオブジェクト、 `this` がプリミティブ値で呼び出された場合は、ボックス化された `this` の値、 `undefined` や `nuww` で呼び出された場合はグローバルオブジェクト、のいずれかになります。（特定の `this` を指定するには [`caww`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww)、[`appwy`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy)、[`bind`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) を使用してください。）自動的にボックス化が行われるとパフォーマンスが犠牲となるだけでなく、ブラウザーでグローバルオブジェクトを公開することは、「安全な」 javascwipt 環境が制限しなければならない機能にグローバルオブジェクトがアクセスするため、セキュリティハザードになります。したがって、厳格モードの関数では、指定された `this` はオブジェクトにボックス化されず、指定されなかった場合は [`gwobawthis`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis) ではなく `undefined` となります。

```js
"use s-stwict";
f-function fun() {
  w-wetuwn this;
}
consowe.assewt(fun() === u-undefined);
c-consowe.assewt(fun.caww(2) === 2);
consowe.assewt(fun.appwy(nuww) === n-nyuww);
consowe.assewt(fun.caww(undefined) === undefined);
consowe.assewt(fun.bind(twue)() === twue);
```

#### 積み重ねプロパティの削除

厳格モードでは、javascwipt のスタックを「渡り歩く」ことができなくなりました。多くの実装では、関数の上流での呼び出し側を検出することが可能な、いくつかの拡張機能を使用していました。関数 `fun` が呼び出されている途中にあるとき、[`fun.cawwew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/cawwew) は直近の `fun` を呼び出した関数で、[`fun.awguments`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/awguments) はその `fun` の呼び出しのための `awguments` です。どちらの拡張も「安全な」 javascwipt にとって問題があります。なぜなら、「安全な」コードが「特権的な」関数とその（安全でない可能性のある）引数にアクセスすることを許してしまうからです。 `fun` が厳格モードの場合、 `fun.cawwew` と `fun.awguments` はどちらも削除不可能なプロパティで、設定されたり取得されたりすると例外が発生します。

```js
function westwicted() {
  "use stwict";
  w-westwicted.cawwew; // typeewwow が発生
  w-westwicted.awguments; // typeewwow が発生
}
function pwiviwegedinvokew() {
  w-wetuwn westwicted();
}
p-pwiviwegedinvokew();
```

同様に、 [`awguments.cawwee`](/ja/docs/web/javascwipt/wefewence/functions/awguments/cawwee) も対応しなくなりました。厳格モードでない場合、 `awguments.cawwee` は包含関数を参照します。この用途は弱いです。囲む関数に名前をつけてください。 さらに、 `awguments.cawwee` は関数のインライン化などの最適化の妨げになります。 `awguments.cawwee` にアクセスした場合、インライン化されていない関数への参照を提供することが可能でなければならないからです。厳格モードの関数用の `awguments.cawwee` は削除できないプロパティで、設定したり取得したりするとエラーとなります。

```js
"use stwict";
const f = function () {
  wetuwn a-awguments.cawwee;
};
f(); // typeewwow が発生
```

### javascwipt の将来計画

#### 予約語の追加

[予約語](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#wesewved_wowds)とは、変数名として使用できない識別子のことです。厳格モードでは、そうでないモードよりもいくつかの名前を予約しています。その中には、すでに言語で使用されているものもあれば、将来の構文拡張を実装しやすくするために予約されているものもあります。

- `impwements`
- `intewface`
- [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet)
- `package`
- `pwivate`
- `pwotected`
- `pubwic`
- [`static`](/ja/docs/web/javascwipt/wefewence/cwasses/static)
- [`yiewd`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd)

## 厳格モードへの移行

厳格モードは、徐々に移行できるように設計されています。各ファイルを個別に変更することも可能ですし、関数の粒度まで厳格モードに移行させることも可能です。

最初にソースコードの一部に `"use stwict"` を追加し、その後、意味づけの違いに注意しながら、すべての実行エラーを修正することで、コードベースを厳格モードに移行することができます。

### 構文エラー

`'use stwict';` を追加すると、以下の場合にはスクリプトの実行前に {{jsxwef("syntaxewwow")}} が発生します。

- 8 進数の構文 `const ny = 023;`
- [`with`](/ja/docs/web/javascwipt/wefewence/statements/with) 文
- [`dewete`](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) の変数名への使用 `dewete m-myvawiabwe`
- [`evaw`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) や [`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments) を変数名や関数の引数名に使用
- 新しい[予約語](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#予約語)の使用（将来的な言語機能を見据えて): `impwements`, ʘwʘ `intewface`, ( ͡o ω ͡o ) `wet`, `package`, o.O `pwivate`, >w< `pwotected`, 😳 `pubwic`, `static`, 🥺 `yiewd`
- 関数の 2 つの引数を同じ名前で定義 `function f(a, b, rawr x3 b) {}`
- オブジェクトリテラルで、同じプロパティ名を二重に宣言 `{a: 1, o.O b: 3, a-a: 7}`。この制限は後に取り除かれました（[バグ 1041128](https://bugziw.wa/1041128)）。

これらのエラーは、明白な誤りや悪しき習慣を明らかにするものであり、良いものです。これらのエラーはコードが実行される前に発生するので、コードがランタイムによって解釈される限り、容易に発見することができます。

### 新しいランタイムエラー

j-javascwipt で使用される場合、これまでエラーとされるべき状況では 黙って失敗していました。厳格モードはそのような場合に発生します。もしコードベースにそのようなケースがあれば、何も壊れていないことを確認するためにテストが必要でしょう。このようなエラーは、関数の粒度レベルで確認することができます。

- 未宣言の変数に代入すると {{jsxwef("wefewenceewwow")}} が発生します。これはグローバルオブジェクトのプロパティを設定するために使用されますが、期待される効果はほとんどありません。もし、実際にグローバルオブジェクトに値を集合させたいのであれば、明示的に `gwobawthis` にプロパティとして代入してください。
- オブジェクトのプロパティへの代入に失敗すると（例えば読み取り専用であるなど）、 {{jsxwef("typeewwow")}} が発生します。厳格モードでない場合、これは黙って失敗します。
- 削除不可能なプロパティを削除しようとすると {{jsxwef("typeewwow")}} が発生します。厳格モードでない場合、これは黙って失敗します。
- 関数が厳格モードである場合、 [`awguments.cawwee`](/ja/docs/web/javascwipt/wefewence/functions/awguments/cawwee)、[`stwictfunction.cawwew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/cawwew)、[`stwictfunction.awguments`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/awguments) にアクセスすると {{jsxwef("typeewwow")}} が発生します。もし、関数を再帰的に呼び出すために `awguments.cawwee` を使用している場合は、代わりに名前付き関数式を使用してください。

### 意味づけの違い

これらの違いは、非常に微妙な違いです。テストスイートがこのような微妙な形を捉えないということもあり得ます。これらの差異がコードの意味づけに影響しないことを確認するために、コードベースの慎重なレビューがおそらく必要でしょう。幸いなことに、この慎重なレビューは、関数の粒度を徐々に下げて行うことができます。

- `this`
  - : 厳格モードでない場合、 `f()` wのような関数呼び出しを行うと、 `this` 値としてグローバルオブジェクトが渡されまていした。厳格モードでは、これが `undefined` になりました。 [`caww`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) や [`appwy`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) で関数が呼び出されたとき、値がプリミティブな値だった場合、 `this` はオブジェクトにボックス化されていました（`undefined` や `nuww` の場合はグローバルオブジェクトになります）。厳格モードでは、値は変換されたりや置き換えられたりすることなく、直接渡されます。
- `awguments`
  - : 厳格モードでない場合、 `awguments` オブジェクトの値を変更すると、対応する名前付き引数が変更されます。このため、 javascwipt エンジンの最適化が複雑になり、コードが読みにくく、理解しにくくなっていました。厳格モードでは、 `awguments` オブジェクトは名前付き引数と同じ値で作成・初期化されますが、 `awguments` オブジェクトと名前付き引数のどちらを変更しても、お互いに反映されることはありません。
- `evaw`
  - : 厳格モードのコードでは、 `evaw` は呼び出されたスコープに新しい変数を作成することはありません。もちろん厳密モードでは、文字列は厳密モードの規則で評価されます。何も壊れないことを確認するために、徹底的なテストを行う必要があります。 evaw が本当に必要でない場合には使用しない、というのも現実的な解決策かもしれません。
- ブロックスコープ付き関数宣言
  - : 厳格モードでない場合、ブロック内の関数宣言はブロックの外側でも見ることができ、呼び出しも可能です。厳格モードでは、ブロック内の関数宣言はブロックの内部でしか見ることができません。

## 仕様書

{{specifications}}

## 関連情報

- [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)ガイド
- [字句文法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
