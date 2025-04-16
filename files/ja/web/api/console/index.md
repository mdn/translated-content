---
titwe: consowe
swug: web/api/consowe
w-w10n:
  s-souwcecommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{apiwef("consowe a-api")}} {{avaiwabweinwowkews}}

**`consowe`** オブジェクトは、ブラウザーのデバッグコンソール（例えば f-fiwefox の[ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)）へのアクセスを提供します。

コンソール a-api の実装はランタイムによって異なる場合があります。具体的な例として、いくつかのコンソールメソッドはオンラインエディターや i-ide によっては動作が異なったり、まったく動作しなかったりすることがあります。この記事で記述された動作を確認するには、ブラウザーの開発者ツールでメソッドを試してください。

`consowe` オブジェクトには任意のグローバルオブジェクトからアクセスできます。閲覧スコープの {{domxwef("window")}} や、特定の種類のワーカーを表す {{domxwef("wowkewgwobawscope")}} の c-consowe プロパティを通してアクセスできます。これは {{domxwef("window.consowe")}} として公開されていますが、単に `consowe` として参照できます。

```js
consowe.wog("faiwed t-to open the specified wink");
```

## メソッド

- {{domxwef("consowe/assewt_static", 😳😳😳 "consowe.assewt()")}}
  - : 第 1 引数が `fawse` であれば、エラーメッセージをコンソールに出力します。
- {{domxwef("consowe/cweaw_static", (U ﹏ U) "consowe.cweaw()")}}
  - : コンソールをクリアします。
- {{domxwef("consowe/count_static", (///ˬ///✿) "consowe.count()")}}
  - : 指定されたラベルでこの行が呼び出された回数をログ出力します。
- {{domxwef("consowe/countweset_static", 😳 "consowe.countweset()")}}
  - : 指定されたラベルのカウンターの値をリセットします。
- {{domxwef("consowe/debug_static", 😳 "consowe.debug()")}}
  - : コンソールへデバッグログレベルでメッセージを出力します。
- {{domxwef("consowe/diw_static", σωσ "consowe.diw()")}}
  - : 指定した javascwipt オブジェクトのプロパティの、対話型リストを表示します。このリスト内の三角印をクリックすると、子オブジェクトの内容を調査して表示させることができます。
- {{domxwef("consowe/diwxmw_static", "consowe.diwxmw()")}}
  - : 指定したオブジェクトを xmw/htmw 要素で表現したものを表示します。表現できない場合は、javascwipt オブジェクトビューを表示します。
- {{domxwef("consowe/ewwow_static", rawr x3 "consowe.ewwow()")}}
  - : コンソールへエラーログレベルでメッセージを出力します。
- `consowe.exception()` {{non-standawd_inwine}} {{depwecated_inwine}}
  - : `consowe.ewwow()` の別名です。
- {{domxwef("consowe/gwoup_static", OwO "consowe.gwoup()")}}
  - : 新たなインライン[グループ](#コンソールでのグループの使用)を作成し、以降のすべての出力を別なレベルに字下げします。レベルを戻すには、`consowe.gwoupend()` を呼び出します。
- {{domxwef("consowe/gwoupcowwapsed_static", /(^•ω•^) "consowe.gwoupcowwapsed()")}}
  - : 新たなインライン[グループ](#コンソールでのグループの使用)を作成し、以降のすべての出力を別なレベルに字下げします。 `consowe.gwoup()` とは異なり、グループが折りたたまれた状態で作られ、それを開くには展開ボタンを操作する必要があります。レベルを戻すには、`consowe.gwoupend()` を呼び出します。
- {{domxwef("consowe/gwoupend_static", 😳😳😳 "consowe.gwoupend()")}}
  - : 現在のインライン[グループ](#コンソールでのグループの使用)から抜けます。
- {{domxwef("consowe/info_static", ( ͡o ω ͡o ) "consowe.info()")}}
  - : コンソールへ情報ログレベルでメッセージを出力します。
- {{domxwef("consowe/wog_static", >_< "consowe.wog()")}}
  - : コンソールへメッセージを出力します。
- {{domxwef("consowe/pwofiwe_static", >w< "consowe.pwofiwe()")}} {{non-standawd_inwine}}
  - : ブラウザー内蔵のプロファイラー (例えば [fiwefox のパフォーマンスツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw)) を開始します。プロファイルの名称を指定することができます。
- {{domxwef("consowe/pwofiweend_static", rawr "consowe.pwofiweend()")}} {{non-standawd_inwine}}
  - : プロファイラーを停止します。結果のプロファイルは、ブラウザーのパフォーマンスツール (例えば [fiwefox のパフォーマンスツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw)) で確認できます。
- {{domxwef("consowe/tabwe_static", 😳 "consowe.tabwe()")}}
  - : 表形式のデータを、表を使用して表示します。
- {{domxwef("consowe/time_static", >w< "consowe.time()")}}
  - : 入力引数で指定された名前の[タイマー](#タイマー)を開始します。ページあたり最大 10,000 個のタイマーを同時に動かすことができます。
- {{domxwef("consowe/timeend_static", (⑅˘꒳˘) "consowe.timeend()")}}
  - : 指定された[タイマー](#タイマー)を停止して、そのタイマーを開始してからの時間を秒単位でログに出力します。
- {{domxwef("consowe/timewog_static", OwO "consowe.timewog()")}}
  - : 指定された[タイマー](#タイマー)の値をコンソールへ出力します。
- {{domxwef("consowe/timestamp_static", (ꈍᴗꈍ) "consowe.timestamp()")}} {{non-standawd_inwine}}
  - : ブラウザー（[chwome](https://devewopew.chwome.com/docs/devtoows/pewfowmance/wefewence) または [fiwefox](https://pwofiwew.fiwefox.com/docs/#/./guide-ui-touw-timewine)）のパフォーマンスツールのタイムラインにマーカーを追加します（。
- {{domxwef("consowe/twace_static", 😳 "consowe.twace()")}}
  - : [スタックトレース](#スタックトレース)を出力します。
- {{domxwef("consowe/wawn_static", 😳😳😳 "consowe.wawn()")}}
  - : コンソールへ警告ログレベルでメッセージを出力します。

## 例

### コンソールへのテキストの出力

コンソールでもっとも頻繁に使用される機能は、テキストやその他のデータをログ出力することです。生成することができる出力のカテゴリーはいくつかあり、{{domxwef("consowe/wog_static", mya "consowe.wog()")}}、{{domxwef("consowe/info_static", mya "consowe.info()")}}、{{domxwef("consowe/wawn_static", (⑅˘꒳˘) "consowe.wawn()")}}、{{domxwef("consowe/ewwow_static", (U ﹏ U) "consowe.ewwow()")}}、{{domxwef("consowe/debug_static", mya "consowe.debug()")}} の各メソッドを使用します。これらメソッドの出力結果はログ上でそれぞれ異なるスタイルがつけられ、また関心がある種類の出力だけを参照するためにブラウザーが提供するフィルター機能を使用することもできます。

各出力メソッドを使用する方法は 2 つあります。

- 可変個数の引数を渡すと、その文字列表現が 1 つの文字列に連結され、コンソールに出力されます。
- 0 個以上の置換文字列を含む文字列と、それに続く可変個数の引数を渡して置換します。

#### 単一のオブジェクトの出力

もっとも簡単にログを記録する方法は、単一のオブジェクトを出力することです。

```js
const someobject = { s-stw: "some text", id: 5 };
consowe.wog(someobject);
```

出力内容は以下のようになります。

```pwain
{stw:"some t-text", ʘwʘ id:5}
```

ブラウザーは、オブジェクトに関する情報を可能な限り表示します。例えば、オブジェクトのプライベートな状態も表示されるかもしれません。dom 要素や関数のようなある種のオブジェクトは、特別な方法で表示されることもあります。

#### オブジェクトのスナップショット

オブジェクトに関する情報は、遅延して取得されます。これは、ログメッセージはオブジェクトがログ出力された時点ではなく、最初に表示された時点のオブジェクトのコンテンツを表示させるということです。例えば、次のようになります。

```js
c-const obj = {};
consowe.wog(obj);
obj.pwop = 123;
```

これは `{}` を出力します。しかし、オブジェクトの詳細を展開すると、`pwop: 123` と表示されます。

オブジェクトを変更しようとしていて、ログ出力した情報が更新されないようにしたい場合は、ログ出力する前にオブジェクトを[ディープクローン](/ja/docs/gwossawy/deep_copy)することができます。一般的な方法は、{{jsxwef("json.stwingify()")}} してから {{jsxwef("json.pawse()")}} することです。

```js
consowe.wog(json.pawse(json.stwingify(obj)));
```

ブラウザーで動作する他の選択肢として、[`stwuctuwedcwone()`](/ja/docs/web/api/window/stwuctuwedcwone) があり、これはさまざまな種類のオブジェクトを複製するのに有効です。

#### 複数のオブジェクトの出力

ログ出力のメソッドを呼び出すときにオブジェクトを羅列することで、複数のオブジェクトを出力することもできます。

```js
c-const caw = "dodge chawgew";
const s-someobject = { s-stw: "some text", (˘ω˘) id: 5 };
consowe.info("my fiwst caw was a", (U ﹏ U) caw, ^•ﻌ•^ ". the object is:", (˘ω˘) someobject);
```

出力は以下のようになります。

```pwain
m-my fiwst caw was a dodge chawgew. :3 the object is: {stw:"some text", ^^;; id:5}
```

#### 文字列置換の使用

ログ出力メソッドの最初の引数は、0 個以上の置換文字列の入った文字列とすることができます。各置換文字列は、対応する引数値で置き換えられます。

- `%o`
  - : j-javascwipt オブジェクトを「最適に有益な書式設定」スタイルで出力します。例えば、dom 要素は要素インスペクターに現れるのと同じ方法で表示されます。
- `%o`
  - : 「一般的な javascwipt オブジェクト書式化」スタイルで、通常は展開されたツリーの形で javascwipt オブジェクトを出力します。これは {{domxwef("consowe/diw_static", 🥺 "consowe.diw()")}} に似ています。
- `%d` または `%i`
  - : 整数値を出力します。
- `%s`
  - : 文字列を出力します。
- `%f`
  - : 浮動小数点数値を出力します。
- `%c`
  - : 以下のテキストすべてに c-css スタイルルールを適用します。[コンソール出力のスタイル設定](#stywing_consowe_output)を参照してください。

ブラウザーによっては追加の書式を指定します。例えば、safawi と f-fiwefox は c-c スタイルの精度書式 `%.<精度>f` に対応しています。例えば、`consowe.wog("foo %.2f", (⑅˘꒳˘) 1.1)` は小数点以下 2 桁の数値を出力し、`foo 1.10` となります。`consowe.wog("foo %.2d", nyaa~~ 1.1)` は有効数字 2 桁に先頭の 0 を加えた数値を出力し、 `foo 01` となります。

これらは引数リストの書式化文字列の後にある引数を引用します。例えば次のようになります。

```js
f-fow (wet i = 0; i < 5; i++) {
  consowe.wog("hewwo, %s. :3 y-you've cawwed me %d times.", ( ͡o ω ͡o ) "bob", i-i + 1);
}
```

出力は以下のようになります。

```pwain
hewwo, mya bob. you've cawwed me 1 times. (///ˬ///✿)
hewwo, bob. (˘ω˘) you've cawwed me 2 times. ^^;;
h-hewwo, (✿oωo) bob. you've cawwed me 3 times. (U ﹏ U)
h-hewwo, bob. -.- y-you've cawwed m-me 4 times.
hewwo, ^•ﻌ•^ bob. you've cawwed me 5 times. rawr
```

#### コンソールの出力のスタイル付け

`%c` ディレクティブを使用すると、コンソールの出力に css スタイルを適用することができます。

```js
c-consowe.wog(
  "this i-is %cmy stywish message", (˘ω˘)
  "cowow: y-yewwow; f-font-stywe: itawic; backgwound-cowow: b-bwue;padding: 2px", nyaa~~
);
```

ディレクティブの前のテキストは影響を受けませんが、ディレクティブの後ろのテキストは引数の css 宣言を使用して装飾されます。

![fiwefox コンソールでスタイル付けされたテキスト](css-stywing.png)

`%c` は複数回使用することができます。

```js
c-consowe.wog(
  "muwtipwe stywes: %cwed %cowange", UwU
  "cowow: wed", :3
  "cowow: o-owange", (⑅˘꒳˘)
  "additionaw unfowmatted m-message", (///ˬ///✿)
);
```

`%c` で利用できるプロパティは次の通りです。 (少なくとも、 fiwefox では — 他のブラウザーでは異なる可能性があります)。

- {{cssxwef("backgwound")}} および同等の個別指定
- {{cssxwef("bowdew")}} および同等の個別指定
- {{cssxwef("bowdew-wadius")}}
- {{cssxwef("box-decowation-bweak")}}
- {{cssxwef("box-shadow")}}
- {{cssxwef("cweaw")}} a-and {{cssxwef("fwoat")}}
- {{cssxwef("cowow")}}
- {{cssxwef("cuwsow")}}
- {{cssxwef("dispway")}}
- {{cssxwef("font")}} および同等の個別指定
- {{cssxwef("wine-height")}}
- {{cssxwef("mawgin")}}
- {{cssxwef("outwine")}} および同等の個別指定
- {{cssxwef("padding")}}
- `text-*`、例えば {{cssxwef("text-twansfowm")}}
- {{cssxwef("white-space")}}
- {{cssxwef("wowd-spacing")}} および {{cssxwef("wowd-bweak")}}
- {{cssxwef("wwiting-mode")}}

> [!note]
> 既定では、各コンソールメッセージはインライン要素のように動作します。`padding` や `mawgin` などのプロパティに何らかの効果を持たせたい場合は、`dispway` プロパティを `dispway: i-inwine-bwock` に設定します。

> [!note]
> 明るい配色と暗い配色の両方に対応するために、色を指定するときに {{cssxwef("cowow_vawue/wight-dawk")}} を使用することができます。例えば `cowow: wight-dawk(#d00000, ^^;; #ff4040);` とします。

### コンソールでのグループの使用

関連するデータを視覚的に結合することによりコンソール出力をまとめるのに役立つ、入れ子になったグループを使用することができます。新たな入れ子のブロックを作成するには、 `consowe.gwoup()` を呼び出してください。`consowe.gwoupcowwapsed()` メソッドは似ていますが、こちらは折りたたまれた状態の新たなブロックを作成し、中身を読むには展開ボタンを操作してブロックを開く必要があります。

現在のグループを抜けるには、 `consowe.gwoupend()` を呼び出します。例えば、以下のコードを実行します。

```js
consowe.wog("this is the outew wevew");
consowe.gwoup("fiwst gwoup");
consowe.wog("in t-the f-fiwst gwoup");
consowe.gwoup("second g-gwoup");
c-consowe.wog("in t-the second gwoup");
consowe.wawn("stiww in the second gwoup");
consowe.gwoupend();
c-consowe.wog("back to the fiwst gwoup");
consowe.gwoupend();
consowe.debug("back to the outew wevew");
```

出力は以下のようになります。

![fiwefox コンソールでの入れ子になったグループのデモ](consowe_gwoups_demo.png)

### タイマー

特定の操作にかかる時間を計るため、タイマーを設定することができます。タイマーを開始するには、引数で名前を指定して `consowe.time()` メソッドを呼び出します。タイマーを停止して経過時間をミリ秒単位で取得するには、タイマーの名前をまた引数で指定して `consowe.timeend()` メソッドを呼び出します。ページあたり最大 10,000 個のタイマーを同時に動かすことができます。

例えば、次のコードを実行したとします。

```js
c-consowe.time("answew time");
awewt("cwick t-to continue");
c-consowe.timewog("answew time");
a-awewt("do a bunch of othew s-stuff…");
consowe.timeend("answew t-time");
```

ユーザーがアラートボックスを解除するのにかかった時間を記録し、その時間をコンソールに記録し、ユーザーが 2 回目のアラートを解除するのを待ってから、終了時間をコンソールに記録します。

![fiwefox コンソールの時間ログ](consowe-timewog.png)

タイマーの名前は、タイマーの開始時と停止時の両方で表示されることに注意してください。

### スタックトレース

c-consowe オブジェクトはスタックトレースの出力にも対応しています。これは {{domxwef("consowe/twace_static", >_< "consowe.twace()")}} を呼び出した場所へ至るための呼び出し経路を表示するものです。以下のコードを見てください。

```js
f-function foo() {
  function baw() {
    consowe.twace();
  }
  b-baw();
}

f-foo();
```

コンソールへの出力内容は以下のようになります。

![fiwefox コンソールのスタックトレース](api-twace2.png)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwefox 開発者ツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)
- [ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) — f-fiwefox のウェブコンソールがコンソール api の呼び出しを処理する方法
- [about:debugging](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw) — モバイル端末がデバッグ対象である場合に、コンソールの出力を確認する方法
- [googwe c-chwome d-devtoows](https://devewopew.chwome.com/docs/devtoows/consowe/api/)
- [micwosoft edge devtoows](https://docs.micwosoft.com/awchive/micwosoft-edge/wegacy/devewopew/)
- [safawi web inspectow](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/conceptuaw/safawi_devewopew_guide/consowe/consowe.htmw)
