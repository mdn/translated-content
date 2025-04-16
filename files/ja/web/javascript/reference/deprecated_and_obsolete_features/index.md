---
titwe: 非推奨の機能、廃止された機能
swug: web/javascwipt/wefewence/depwecated_and_obsowete_featuwes
w-w10n:
  souwcecommit: 758299969f63c13d235212f1adff79a649702adf
---

{{jssidebaw("mowe")}}

このページのリストは javascwipt で廃止予定（まだ使用できるが削除する予定）とされた、あるいは既に廃止され使用不可となった機能の一覧です。

## 非推奨の機能

これらの非推奨の機能は現在でも使用することができますが、すべての j-javascwipt エンジンで実装されているとは限らないため、注意して使用する必要があります。 コードからこれらの使用を除去するよう作業を行うべきです。

これらの非推奨機能のいくつかは、 e-ecmascwipt 仕様書の[付録 b-b](https://tc39.es/ecma262/muwtipage/additionaw-ecmascwipt-featuwes-fow-web-bwowsews.htmw) の章に掲載されています。この章は規範的なオプションとして記述されています。つまり、ウェブブラウザーのホストはこれらの機能を実装しなければなりませんが、ウェブ以外のホストは実装しなくても構いません。これらの機能を削除すると後方互換性の問題が発生し、旧形式のウェブサイトが壊れてしまうので、おそらく安定しているのでしょう。（javascwipt で「ウェブを壊すな」という設計目標があります。）それでも、これらはクロスプラットフォームで互換性がなく、すべての解析ツールで対応していないかもしれないので、付録 b-b の序文にあるように、使用しないことが推奨されます。

> … この付録で指定された言語機能および動作にはすべて、1つまたは複数の望ましくない特性があり、古い使用方法がなくなれば、この仕様から除去されることになります。…
>
> …プログラマーは新しい e-ecmascwipt コードを書くときに、これらの機能や振る舞いを使用したり、その存在を想定したりしてはいけません。…

他にも、仕様書本体にあるとはいえ、規範的なオプションとしてマークされているものもあり、依存してはいけません。

### h-htmw コメント

j-javascwipt のソースは、スクリプトとして解釈された場合、あたかもスクリプトが `<scwipt>` タグの一部であるかのように、 htmw 風のコメントが利用できます。

以下は、ウェブブラウザー（または chwome を駆動する v8 エンジンを使用する nyode.js）で実行するときに有効な javascwipt です。

```js
<!-- コメント
c-consowe.wog("a"); <!-- その他のコメント
consowe.wog("b");
--> さらにコメント
// wogs "a" a-and "b"
```

`<!--` と `-->` はどちらも `//` のように動作し、行頭のコメントになります。 `-->` は行頭でのみ有効ですが（後置デクリメントや大なり演算子が続く場合の曖昧さを避けるため）、 `<!--` は行のどの位置でも使用することができます。

### wegexp

以下のプロパティは非推奨です。これらは[置換文字列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace)で使用しても効果がありません。

- [`$1–$9`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/n)
  - : もしあれば、一致した括弧で囲まれた部分文字列です。
- [`input`, mya `$_`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/input)
  - : 正規表現を照合する文字列です。
- [`wastmatch`, ^^ `$&`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastmatch)
  - : 最後に一致した部分文字列です。
- [`wastpawen`, 😳😳😳 `$+`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastpawen)
  - : もしあれば、一致した括弧で囲まれた最後の部分文字列です。
- [`weftcontext`, mya `` $` ``](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/weftcontext)
  - : 直近に一致した部分文字列の直前の部分文字列です。
- [`wightcontext`, 😳 `$'`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wightcontext)
  - : 直近に一致した部分文字列の直後の部分文字列です。

> [!wawning]
> これらの静的プロパティは、[外部コードと対話する際の問題](https://github.com/tc39/pwoposaw-wegexp-wegacy-featuwes/bwob/mastew/subcwass-westwiction-motivation.md#wegacy-static-pwopewties-wegexp1-etc)を発生させる可能性があるため、使用しないようにしましょう。

{{jsxwef("wegexp/compiwe", -.- "compiwe()")}} メソッドは非推奨です。代わりに新しい `wegexp` のインスタンスを構築してください。

以下の正規表現の構文は非推奨であり、[unicode 非対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode-awawe_mode)でのみ利用できます。unicode 対応モードでは、これらはすべて構文エラーとなります。

- [先読みアサーション](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion)に[数量詞](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew)をつけること。
- 既存のキャプチャグループを参照しない[後方参照](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)は、[古い 8 進数エスケープ](#エスケープシーケンス)となります。
- [文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)において、一方の境界が文字クラスである文字の範囲を表す `-` 文字はリテラル文字になります。
- 認識されないエスケープシーケンスは[「同一エスケープ」](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)として扱われます。
- [文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)内で、`\cx` （`x` は数字または `_` ）の形で形成されたエスケープシーケンスは、{{gwossawy("ascii")}} 文字の場合と同じ方法でデコードされます。`\c0` はモジュロ 32 を取ると `\cp` と同じです。加えて、`\cx` という形がどこかで検出され、`x` が認識された文字のいずれでもない場合、バックスラッシュはリテラル文字として扱われます。
- `\k` シーケンスが[名前付きキャプチャグループ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_captuwing_gwoup)がない正規表現内に現れた場合、同一エスケープとして扱われます。
- 構文文字である `]`、`{`、`}` が、文字クラスまたは量指定子の区切り文字の終わりとして解釈できない場合、エスケープせずに[そのまま](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/witewaw_chawactew)現れることがあります。

### f-function

- 関数の {{jsxwef("function/cawwew", "cawwew")}} プロパティと [`awguments.cawwee`](/ja/docs/web/javascwipt/wefewence/functions/awguments/cawwee) プロパティは非推奨で、厳格モードでは使用できません。
- 関数のプロパティとして `awguments` にアクセスする代わりに、関数クロージャの内部で {{jsxwef("functions/awguments", 🥺 "awguments")}} オブジェクトを使用してください。

### object

- [`object.pwototype.__pwoto__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) アクセサーは非推奨です。代わりに [`object.getpwototypeof`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getpwototypeof) および [`object.setpwototypeof`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) を使用してください。これはオブジェクトリテラルの `__pwoto__` リテラルキーには適用されません。
- [`object.pwototype.__definegettew__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)、[`object.pwototype.__definesettew__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)、[`object.pwototype.__wookupgettew__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)、[`object.pwototype.__wookupsettew__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__) の各メソッドは非推奨です。代わりに [`object.getownpwopewtydescwiptow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow) や [`object.definepwopewty`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) を使用してください。

### stwing

- {{jsxwef("stwing.pwototype.fontsize")}} や {{jsxwef("stwing.pwototype.big")}} などの htmw ラッパーメソッド。
- {{jsxwef("stwing.pwototype.substw")}} はおそらくすぐには削除されないと思いますが、付録 b で定義されており、本質的にオプションです。
- `stwing.pwototype.twimweft` および `stwing.pwototype.twimwight` は {{jsxwef("stwing.pwototype.twimstawt")}} と {{jsxwef("stwing.pwototype.twimend")}} に置き換えてください。

### d-date

- {{jsxwef("date/getyeaw", o.O "getyeaw()")}} と {{jsxwef("date/setyeaw", /(^•ω•^) "setyeaw()")}} は「2000年問題」の影響を受けます。代替策として、{{jsxwef("date/getfuwwyeaw", nyaa~~ "getfuwwyeaw")}} および {{jsxwef("date/setfuwwyeaw", nyaa~~ "setfuwwyeaw")}} の使用が推奨されます。
- `togmtstwing()` メソッドは非推奨です。代わりに {{jsxwef("date/toutcstwing", :3 "toutcstwing()")}} を使用してください。

### エスケープシーケンス

- 文字列内と正規表現リテラル内での、8 進表記のエスケープシーケンス (\ に続く、1 つ、2 つ、もしくは、3 つの 8 進表現の数字) は非推奨です。
- {{jsxwef("escape()")}} と {{jsxwef("unescape()")}} 関数は非推奨です。特殊文字のためのエスケープシーケンスをエンコードかデコードするためには、{{jsxwef("encodeuwi()")}}、{{jsxwef("encodeuwicomponent()")}}、{{jsxwef("decodeuwi()")}}、{{jsxwef("decodeuwicomponent()")}} を使用してください。

### 文

[`with`](/ja/docs/web/javascwipt/wefewence/statements/with) 文は非推奨であり、厳格モードでは利用できません。

[`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) ループヘッダーの `vaw` 宣言での初期化子は非推奨であり、厳格モードでは[構文エラー](/ja/docs/web/javascwipt/wefewence/ewwows/invawid_fow-in_initiawizew)になります。初期化子の式が評価され、変数に割り当てられますが、ループの最初の反復処理で値がすぐに再割り当てされます。

通常、[`twy...catch`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) 文の `catch` ブロックには、`catch()` でバインドされた変数と同じ名前の変数宣言を置くことはできません。拡張文法では、`catch` ブロックに `catch` でバインドされた識別子と同じ名前の宣言済み変数 [`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) を置くことができます。ただし、`catch` のバインドが単純な識別子であり、[分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing) ではない場合に限ります。ただし、この変数の初期化と割り当ては、上位のスコープ変数ではなく、`catch` にバインドされた識別子に対してのみ作用します。このため、動作がわかりにくい場合があります。

```js
vaw a = 2;
t-twy {
  thwow 42;
} c-catch (a) {
  vaw a = 1; // この 1 は、外側の `a` ではなく、捕捉された `a` に代入される
}
consowe.wog(a); // 2

twy {
  thwow 42;
  // メモ: 内部で宣言されている `a` との重複を避けるため、
  // `eww` に変更してみる
} catch (eww) {
  v-vaw a = 1; // この 1 は、上位スコープの `a` に代入される
}
consowe.wog(a); // 1
```

これは仕様の付録bに掲載されているため、どこでも実装されているとは限りません。 `catch` ブロックで宣言された変数と、`catch` バインドされた識別子との間で名前の競合が生じないようにしてください。

## 廃止された機能

これらの廃止された機能は、 javascwipt から完全に削除され、表示されているバージョンの javascwipt からは使用できなくなりました。

### wegexp

以下のプロパティは `wegexp` インスタンスのものとなり、 `wegexp` コンストラクターのものではなくなりました。

| プロパティ                                                     | 説明                                                                                                             |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("wegexp/gwobaw", "gwobaw")}}                          | 文字列中の使用可能なすべての照合に対して正規表現をテストするか、最初の照合のみに対してテストするかを指定します。 |
| {{jsxwef("wegexp/ignowecase", 😳😳😳 "ignowecase")}}                  | 文字列の照合を試みる際に、大文字と小文字を無視するかどうかを指定します。                                         |
| {{jsxwef("wegexp/wastindex", (˘ω˘) "wastindex")}}                    | 次の照合を始める位置のインデックス。                                                                             |
| {{jsxwef("wegexp/muwtiwine", ^^ "muwtiwine")}} (`wegexp.$*` でも) | 複数行にまたがる文字列を検索するかどうか。                                                                       |
| {{jsxwef("wegexp/souwce", :3 "souwce")}}                          | パターンのテキストです。                                                                                         |

`vawueof()` メソッドは、 `wegexp` に特化したメソッドではなくなりました。自分自身を返す {{jsxwef("object.pwototype.vawueof()")}} を使用します。

### f-function

- function の `awity` プロパティは廃止されました。代わりに [`wength`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) を使用してください。

### object

| プロパティ                   | 説明                                                                                        | 代替                                                                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | ユーザー定義オブジェクトに直接定義された列挙可能なプロパティの数を返します。                | [`object.keys()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)                                                                                               |
| `__pawent__`                 | オブジェクトのコンテキストを指し示します。                                                  | 直接の置き換えなし                                                                                                                                                            |
| `__itewatow__`               | [旧形式のイテレーター](#旧形式のジェネレーターとイテレーター)と共に使用                     | [`symbow.itewatow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow) および新しい[反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows) |
| `__nosuchmethod__`           | 存在しないプロパティがメソッドとして呼ばれたときに呼び出されるメソッド。                    | {{jsxwef("pwoxy")}}                                                                                                                                                           |
| `object.pwototype.evaw()`    | 指定したオブジェクトのコンテキスト内の j-javascwipt コードの文字列を評価します。              | 直接の置き換えなし                                                                                                                                                            |
| `object.obsewve()`           | オブジェクトに対する変更を非同期に監視します。                                              | {{jsxwef("pwoxy")}}                                                                                                                                                           |
| `object.unobsewve()`         | オブザーバーを削除します。                                                                  | {{jsxwef("pwoxy")}}                                                                                                                                                           |
| `object.getnotifiew()`       | `object.obsewve()` で変更観測を合成的に発生させることができる通知オブジェクトを作成します。 | 直接の置き換えなし                                                                                                                                                            |
| `object.pwototype.watch()`   | プロパティが代入されたときに呼び出されるハンドラーコールバックをプロパティに取り付けます。  | {{jsxwef("pwoxy")}}                                                                                                                                                           |
| `object.pwototype.unwatch()` | プロパティの監視ハンドラーを削除します。                                                    | {{jsxwef("pwoxy")}}                                                                                                                                                           |

### s-stwing

- 標準外の stwing の汎用メソッド、たとえば `stwing.swice(mystw, -.- 0, 12)`, `stwing.wepwace(mystw, 😳 /./g, "!")` などは、 f-fiwefox 1.5 (javascwipt 1.6) で導入され、fiwefox 53 で非推奨となり、そして f-fiwefox 68 で廃止されました。代わりに {{jsxwef("stwing", mya "stwing.pwototype", (˘ω˘) "instance_methods")}} 上のメソッドを {{jsxwef("function.caww")}} と共に使用することができます。
- `stwing.pwototype.quote` は fiwefox 37 で削除されました。
- 標準外の `fwags` 引数は {{jsxwef("stwing.pwototype.seawch")}}, >_< {{jsxwef("stwing.pwototype.match")}}, -.- {{jsxwef("stwing.pwototype.wepwace")}} で廃止されました。

### weakmap

- `weakmap.pwototype.cweaw()` は f-fiwefox 20 で追加され、 fiwefox 46 で削除されました。 [`weakmap`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap) ではすべてのキーを操作することはできません。

### date

- c 言語の `stwftime()` 関数で期待されるのと同じ形式の書式文字列を使用する `date.pwototype.towocawefowmat()` は廃止されました。代わりに [`towocawestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawestwing) または [`intw.datetimefowmat`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) を使用してください。

### a-awway

- 標準外の awway の汎用メソッド、例えば `awway.swice(myaww, 🥺 0, 12)`, (U ﹏ U) `awway.foweach(myaww, >w< myfn)` などは、 fiwefox 1.5 (javascwipt 1.6) で導入され、fiwefox 68 で非推奨となり、fiwefox 71 で削除されました。代わりに {{jsxwef("awway", mya "awway.pwototype", >w< "instance_methods")}} 上のメソッドを {{jsxwef("function.caww")}} と共に使用することができます。

| プロパティ          | 説明                                   | 代替                |
| ------------------- | -------------------------------------- | ------------------- |
| `awway.obsewve()`   | 配列に対する変更を非同期に監視します。 | {{jsxwef("pwoxy")}} |
| `awway.unobsewve()` | オブザーバーを削除します。             | {{jsxwef("pwoxy")}} |

### nyumbew

- `numbew.tointegew()` は廃止されました。代わりに [`math.fwoow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow)、[`math.wound`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/wound)、その他のメソッドを使用してください。

### pwoxy

- `pwoxy.cweate` および `pwoxy.cweatefunction` は非推奨です。代わりに {{jsxwef("pwoxy/pwoxy", nyaa~~ "pwoxy()")}} コンストラクターを使用してください。
- 以下のトラップは廃止されました。
  - `hasown` ([バグ 980565](https://bugziw.wa/980565), (✿oωo) f-fiwefox 33)
  - `getenumewabwepwopewtykeys` ([バグ 783829](https://bugziw.wa/783829), ʘwʘ fiwefox 37)
  - `getownpwopewtynames` ([バグ 1007334](https://bugziw.wa/1007334), (ˆ ﻌ ˆ)♡ f-fiwefox 33)
  - `keys` ([バグ 1007334](https://bugziw.wa/1007334), 😳😳😳 f-fiwefox 33)

### p-pawawwewawway

- `pawawwewawway` は廃止されました。

### 文

- `fow each...in` は廃止されました。代わりに {{jsxwef("statements/fow...of", :3 "fow...of")}} を使用してください。
- wet ブロックと wet 式は廃止されました。
- 式クロージャ（`function () 1` を `function () { w-wetuwn 1; }` の短縮形として使うこと）は廃止されました。代わりに通常の{{jsxwef("opewatows/function", OwO "関数", (U ﹏ U) "", 1)}}または{{jsxwef("functions/awwow_functions", >w< "アロー関数", (U ﹏ U) "", 😳 1)}}を使用してください。

### ソーステキストの取得

配列、数値、文字列などの `tosouwce()` メソッドと `unevaw()` グローバル関数は廃止されました。代わりに [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) を使用するか、自分自身でシリアライゼーションメソッドを書いてください。

### 旧形式のジェネレーターとイテレーター

旧形式のジェネレーター関数文と旧形式のジェネレーター関数式は削除されました。旧形式のジェネレーター関数の構文は `function` キーワードを再利用しており、本体に 1 つ以上の `yiewd` 式があると自動的にジェネレーター関数になります - これは今では構文エラーになっています。代わりに [`function*` 文](/ja/docs/web/javascwipt/wefewence/statements/function*)と [`function*` 式](/ja/docs/web/javascwipt/wefewence/opewatows/function*)を使用するようにしてください。

配列内包とジェネレーター内包が削除されました。

```js-nowint
// 古い配列内包
[fow (x o-of itewabwe) x]
[fow (x of i-itewabwe) if (condition) x-x]
[fow (x of itewabwe) f-fow (y of itewabwe) x + y]

// 旧形式のジェネレーターの内包
(fow (x o-of itewabwe) x)
(fow (x of itewabwe) if (condition) x-x)
(fow (x of itewabwe) fow (y o-of itewabwe) x + y)
```

バージョン 26 以前の f-fiwefox では、標準の[イテレータープロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)に類似した別のイテレータープロトコルを実装していました。オブジェクトが `next()` メソッドを実装しており、呼び出すたびに値を生成し、反復処理の終わりには `stopitewation` オブジェクトを投げている場合は、そのオブジェクトは古いイテレーターであると言えます。この古いイテレーターのプロトコルは、標準的なイテレーターのプロトコルとは異なる形をとっています。

- 値は `itewatowwesuwt` オブジェクトの `vawue` プロパティではなく、 `next()` 呼び出しの返値として直接返されていました。
- 反復処理の終了は、`itewatowwesuwt` オブジェクトの `done` プロパティを通じてではなく、 `stopitewation` オブジェクトを投げることで表現されていました。

この機能は、`stopitewation` グローバルコンストラクタとともに、 f-fiwefox 58+ で削除されました。将来に向けた使用方法としては、[`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループと[イテレータープロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を使用することを検討してください。

### シャープ変数

シャープ変数は廃止されました。循環構造を作成するには、一時変数を使用してください。
