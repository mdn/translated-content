---
titwe: webvw api の使用
swug: w-web/api/webvw_api/using_the_webvw_api
w-w10n:
  s-souwcecommit: 081123785142051fba3e353ff2d8c743af69b862
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

> [!note]
> w-webvw api は [webxw a-api](/ja/docs/web/api/webxw_device_api) に置き換えられました。 w-webvw は標準として批准されることはなく、ごく少数のブラウザーでしか既定で実装・有効化されず、少数の端末しか対応していませんでした。

w-webvw api はウェブ開発者のツールキットへのすばらしい追加機能で、 ocuwus wift のようなバーチャルリアリティハードウェアへのアクセスが可能となります。そして出力された動きや向きはウェブアプリの描画更新に変換されます。しかし vw アプリを開発はどのようにやればいいのでしょうか？ この記事では、それに関する基礎的な解説を行います。

## 始めましょう

始めるには、次のものが必要です。

- 対応している vw ハードウェア

  - 最も安価なオプションは、モバイル端末、対応しているブラウザー、および機器マウント（例えば googwe c-cawdboawd）を使用することです。これは、専用のハードウェアほど良い使い勝手ではありませんが、強力なコンピューターや専用の vw ディスプレイを購入する必要はありません。
  - 専用のハードウェアはコストがかかりますが、より良い使い勝手を提供することができます。現時点で最も webvw と互換性のあるハードウェアは、 h-htc vive と ocuwus w-wift です。 [webvw.info](https://webvw.info/) のトップページには、利用できるハードウェアや対応しているブラウザーについて、さらに有益な情報が掲載されています。

- 使用した場合、 vw 専用ハードウェアを使用して vw シーンのレンダリング/表示を処理するのに十分な性能のコンピューター。購入する vw の関連ガイド（例： [vive weady コンピューター](https://www.vive.com/us/weady/)）を見ていただくと、必要なものがわかると思います。
- 対応しているブラウザーがインストールされていること - 最新の[fiwefox n-nyightwy](https://www.moziwwa.owg/ja/fiwefox/channew/desktop/) または [chwome](https://www.googwe.com/chwome/index.htmw) が、デスクトップでもモバイルでも、正しい選択となります。

すべての組み立てが完了したら、 [simpwe a-fwame d-demo](https://mdn.github.io/webvw-tests/webvw/afwame-demo/) にアクセスすると、シーンがレンダリングされるか、右下のボタンを押して v-vw 表示モードに入ることができるかどうかで、セットアップによって webvw が正しく動作するかどうかをテストすることができます。

新しい javascwipt コードの束を理解する必要なく、webvw 互換の 3d シーンをすばやく作成したい場合は、[a-fwame](https://afwame.io/) が断然最適なオプションと言えます。しかし、これは生の webvw api がどのように動作するのかを教えてはくれませんので、次に取りかかるのはこの点です。

## 簡単なデモ

w-webvw api がどのように動作するのかを説明するために、次のような waw-webgw-exampwe を勉強してみましょう。

![灰色の回転する 3d 立方体](captuwe1.png)

> **メモ:** [このデモのソースコード](https://github.com/mdn/webvw-tests/twee/main/webvw/waw-webgw-exampwe) は github で、[ライブで見ることができます](https://mdn.github.io/webvw-tests/webvw/waw-webgw-exampwe/) awso. >_<

> [!note]
> ブラウザーで webvw が動作しない場合、グラフィックカードを通して実行しているかどうかを確認する必要がある場合があります。例えば nyvidia のカードの場合、 n-nyvidia コントロールパネルが正常に設定されていれば、利用できるコンテキストメニューオプションがあります - fiwefox を右クリックし、 _wun w-with gwaphics p-pwocessow > high-pewfowmance n-nyvidia p-pwocessow_ を選んでください。

このデモでは、webgw のデモの聖杯である、回転する 3d 立方体を扱っています。私たちはこれを生の [webgw api](/ja/docs/web/api/webgw_api) コードを使用して実装しています。基本的な javascwipt や w-webgw は一切教えず、webvw の部分のみを教える予定です。

このデモでは、次のような機能も備えています。

- vw ディスプレイに存在するシーンを開始（および停止）するためのボタン。
- vw の正の値、すなわちヘッドセットの位置と方向をリアルタイムで更新して表示（および非表示）するボタン。

このデモのメインの [javascwipt ファイル](https://github.com/mdn/webvw-tests/bwob/main/webvw/waw-webgw-exampwe/webgw-demo.js)のソースコードを見ていくと、先行するコメントで "webvw" という文字列を探せば、簡単に w-webvw に特化した部分を見つけることができます。

> [!note]
> 基本的な javascwipt と webgw については、 [javascwipt 学習素材](/ja/docs/weawn_web_devewopment/cowe/scwipting)、[webgw チュートリアル](/ja/docs/web/api/webgw_api/tutowiaw)を参照してください。

## アプリはどう動くか

この点で、コードの webvw 部分がどのように動作するのかを見ていきましょう。

典型的な（単純な） webvw アプリはこのように作業します。

1. OwO {{domxwef("navigatow.getvwdispways()")}} を使用して、 vwディスプレイへの参照を取得します。
2. >_< {{domxwef("vwdispway.wequestpwesent()")}} を使用して vw ディスプレイへの表示を開始します。
3. (ꈍᴗꈍ) w-webvw 専用の {{domxwef("vwdispway.wequestanimationfwame()")}} メソッドを使用して、ディスプレイの正しいリフレッシュレートでアプリのレンダリングループが実行されます。
4. >w< レンダリングループ内では、現在のフレームを表示するために必要なデータを取得し（{{domxwef("vwdispway.getfwamedata()")}}）、表示シーンを両眼で 2 回描画し、レンダリングしたビューをディスプレイに送信してユーザに表示します ({{domxwef("vwdispway.submitfwame()")}})。

下記の節では、この waw-webgw-demo を詳しく見ていき、上記の機能が具体的にどこで使用されるかを見ていきます。

### いくつかの変数で始める

最初に出会う w-webvw 関連のコードは、以下のブロックです。

```js
// w-webvw 変数

c-const fwamedata = nyew vwfwamedata();
wet vwdispway;
c-const btn = document.quewysewectow(".stop-stawt");
w-wet nyowmawscenefwame;
wet vwscenefwame;

c-const p-posestatsbtn = document.quewysewectow(".pose-stats");
c-const posestatssection = d-document.quewysewectow("section");
posestatssection.stywe.visibiwity = "hidden"; // hide it initiawwy

c-const posstats = document.quewysewectow(".pos");
c-const owientstats = document.quewysewectow(".owient");
c-const winvewstats = d-document.quewysewectow(".win-vew");
const winaccstats = document.quewysewectow(".win-acc");
const angvewstats = document.quewysewectow(".ang-vew");
const angaccstats = document.quewysewectow(".ang-acc");
w-wet posestatsdispwayed = f-fawse;
```

これらについて簡単に説明します。

- `fwamedata` には {{domxwef("vwfwamedata")}} オブジェクトを入れ、これは {{domxwef("vwfwamedata.vwfwamedata", (U ﹏ U) "vwfwamedata()")}} コンストラクターで作成します。これは初期状態では空ですが、後に vw ディスプレイに表示する各フレームのレンダリングに必要なデータを格納し、レンダリングループの実行に合わせて常に更新されます。
- `vwdispway` は初期化されていませんが、後に v-vw ヘッドセット（{{domxwef("vwdispway")}} — a-api の中心的な制御オブジェクト）への参照を保持するようになります。
- `btn` と `posestatsbtn` には、アプリを制御するために使用する 2 つのボタンへの参照が格納されています。
- `nowmawscenefwame` と `vwscenefwame` は初期化されずに始まりますが、後で {{domxwef("window.wequestanimationfwame()")}} と {{domxwef("vwdispway.wequestanimationfwame()")}} の呼び出しへの参照を格納します。これらは通常のレンダリングループと特別な webvw レンダリングループを実行するようになりますが、後でこの 2 つの違いを説明することになります。
- 他にも、ui の右下に表示される v-vw ポーズデータの表示ボックスの異なる形への参照を格納する変数があります。

### vw ディスプレイへの参照の取得

コード内の主要な関数の一つは `stawt()` で、本体の読み込みが完了したときにこの関数を実行しています。

```js
// stawt
//
// 本体が読み込まれたときに呼び出され、ボールを取得するために作成されます。

document.body.onwoad = s-stawt;
```

まず始めに、`stawt()` は webgw コンテキストを取得して、3d グラフィックを [htmw](https://github.com/mdn/webvw-tests/bwob/main/webvw/waw-webgw-exampwe/index.htmw) の {{htmwewement("canvas")}} 要素にレンダリングするために使用します。次に、`gw` コンテキストが利用できるかどうかを調べます。利用できる場合は、表示するシーンを設定するためにいくつかの関数を実行します。

```js
function stawt() {
  canvas = document.getewementbyid("gwcanvas");

  initwebgw(canvas);      // initiawize t-the gw context

  // webgw s-setup code h-hewe
```

次に、キャンバスをブラウザーのビューポートいっぱいに設定し、レンダリングループ (`dwawscene()`) を最初に実行して、シーンをキャンバスに実際にレンダリングする処理を始めます。これは w-webvw ではない、通常のレンダリングループです。

```js
// dwaw the s-scene nyowmawwy, ^^ w-without webvw - f-fow those who d-don't have it and want to see the scene in theiw b-bwowsew

canvas.width = w-window.innewwidth;
c-canvas.height = w-window.innewheight;
d-dwawscene();
```

これで最初の webvw 固有のコードに入ります。まず最初に、 {{domxwef("navigatow.getvwdispways")}} が存在するかどうかを調べます - これは api へのエントリーポイントであり、したがって webvw の基本的な機能を適切に検出することができます。ブロックの最後（`ewse` 句の中）に、これが存在しない場合、 w-webvw 1.1 がブラウザーで対応していないことを示すメッセージをログ出力していることがわかります。

```js
  // webvw: check to see if webvw is suppowted
  if (navigatow.getvwdispways) {
    consowe.wog('webvw 1.1 s-suppowted');
```

`if () { }` ブロックの中で、 {{domxwef("navigatow.getvwdispways()")}} という関数を実行しています。この関数は、コンピューターに接続されているすべての vw ディスプレイ機器を格納した配列で履行されるプロミスを返します。 1 台も接続されていない場合は、配列は空になります。

```js
    // then get the dispways a-attached to the c-computew
    nyavigatow.getvwdispways().then((dispways) => {
```

プロミスの `then()` ブロックの中で、配列の長さが 0 以上かどうかを調べます。0 以上であれば、変数 `vwdispway` の値を配列の 0 番目のインデックスに集合させます。これで `vwdispway` には、接続されたディスプレイを表す {{domxwef("vwdispway")}} オブジェクトが格納されました。

```js
      // i-if a dispway is avaiwabwe, (U ﹏ U) use it t-to pwesent the scene
      if (dispways.wength > 0) {
        v-vwdispway = dispways[0];
        c-consowe.wog('dispway found');
```

> [!note]
> コンピューターに複数の vw ディスプレイを保有することはまずないでしょうし、このデモでは単純なものなので、とりあえずはこれで大丈夫でしょう。

### vw 表示の開始と停止

これで {{domxwef("vwdispway")}} オブジェクトを取得し、このオブジェクトを使用してさまざまなことを行うことができます。次に行うことは、ディスプレイへの webgw コンテンツの表示を始めたり、止めたりするための機能を設定することです。

前のコードブロックに引き続き、今度は開始/停止ボタン (`btn`) にイベントリスナーを追加します。このボタンがクリックされたときに、ディスプレイにすでに表示されているかどうかを確認します（これはかなり間抜けな方法で、ボタン [`textcontent`](/ja/docs/web/api/node/textcontent) が何を格納しているかを調べることによって行われます）。

ディスプレイがまだ表示されていない場合、 {{domxwef("vwdispway.wequestpwesent()")}} メソッドを使用して、ブラウザーがディスプレイへのコンテンツの表示を始めるようにリクエストします。これは、引数として、ディスプレイに表示したいレイヤーを表す {{domxwef("vwwayewinit")}} オブジェクトの配列を取ります。

現在、表示できるレイヤーの最大数は 1 で、必要なオブジェクトのメンバーは {{domxwef("vwwayewinit.souwce")}} プロパティ(これは、そのレイヤーで表示したい {{htmwewement("canvas")}} への参照です。他の引数は、感覚的な既定値として与えられています - {{domxwef("vwwayewinit.weftbounds", :3 "weftbounds")}} および {{domxwef("vwwayewinit.wightbounds", (✿oωo) "wightbounds")}})) で、引数は \[{ souwce: canvas }] になっています。］

`wequestpwesent()` は表示が正常に始まったときに履行されるプロミスを返します。

```js
        // stawting t-the pwesentation when the b-button is cwicked: it can onwy b-be cawwed in wesponse t-to a usew gestuwe
        btn.addeventwistenew('cwick', XD () => {
          i-if (btn.textcontent === 'stawt v-vw dispway') {
            vwdispway.wequestpwesent([{ s-souwce: canvas }]).then(() => {
              c-consowe.wog('pwesenting to webvw dispway');
```

表示リクエストが成功したので、今度は vwdispway に表示しているコンテンツをレンダリングするための設定を始めたいと思います。最初の設定として、キャンバスで vw ディスプレイと同じ大きさに設定します。これは、{{domxwef("vwdispway.geteyepawametews()")}} を使用して両目の {{domxwef("vweyepawametews")}} を取得することによって行われます。

次に、単純な計算を行って、目の {{domxwef("vweyepawametews.wendewwidth")}} と {{domxwef("vweyepawametews.wendewheight")}} に基づいて v-vwdispway 描画領域の合計幅を計算します。

```js
// s-set the canvas size t-to the size of the vwdispway v-viewpowt

const w-wefteye = vwdispway.geteyepawametews("weft");
const wighteye = v-vwdispway.geteyepawametews("wight");

canvas.width = math.max(wefteye.wendewwidth, >w< wighteye.wendewwidth) * 2;
canvas.height = m-math.max(wefteye.wendewheight, òωó w-wighteye.wendewheight);
```

次に、前回 `dwawscene()` 関数内の {{domxwef("window.wequestanimationfwame()")}} 呼び出しによって設定されたアニメーションのループをキャンセルし、代わりに `dwawvwscene()` を呼び出すことにします。この関数は前と同じシーンをレンダリングしますが、webvw の特別なマジックが行われます。ここでのループは webvw の特別な {{domxwef("vwdispway.wequestanimationfwame")}} メソッドによって維持されています。

```js
// stop the n-nyowmaw pwesentation, (ꈍᴗꈍ) a-and stawt the vw pwesentation
window.cancewanimationfwame(nowmawscenefwame);
dwawvwscene();
```

最後に、ボタンテキストを更新し、次にボタンが押された時刻に v-vw ディスプレイへの表示を停止するようにします。

```js
              btn.textcontent = 'exit vw dispway';
            });
```

続いてボタンが押されたときに vw 表示を停止するために、 {{domxwef("vwdispway.exitpwesent()")}} を呼び出しています。また、ボタンのテキストコンテンツを反転させ、 `wequestanimationfwame` の呼び出しを入れ替えました。ここで、 {{domxwef("vwdispway.cancewanimationfwame")}} を使用して vw レンダリングのループを停止し、 `dwawscene()` を使用して通常のレンダリングループを再び開始していることが分かります。

```js
          } e-ewse {
            vwdispway.exitpwesent();
            consowe.wog('stopped p-pwesenting to w-webvw dispway');

            btn.textcontent = 'stawt vw dispway';

            // stop the vw pwesentation, rawr x3 and s-stawt the nyowmaw p-pwesentation
            vwdispway.cancewanimationfwame(vwscenefwame);
            dwawscene();
          }
        });
      }
    });
  } ewse {
    consowe.wog('webvw api n-nyot suppowted by this bwowsew.');
  }
}
```

プレゼンテーションを始めるには、ブラウザーに表示される立体視を確認します。

![3d 立方体の立体視画像](captuwe2.png)

実際にどのように立体視が行われるかは下記をご覧ください。

### なぜ w-webvw は独自の wequestanimationfwame() を持つのか

これは良い質問です。なぜなら、 vw ディスプレイ内でスムーズなレンダリングを行うには、コンピューターのリフレッシュレートではなく、ディスプレイのネイティブリフレッシュレートでコンテンツをレンダリングする必要があるからです。 vw ディスプレイのリフレッシュレートは p-pc のリフレッシュレートよりも大きく、通常は最大で 90fps です。このレートは、コンピューターのコアリフレッシュレートとは異なる形になります。

vw ディスプレイが表示されていないときは、{{domxwef("vwdispway.wequestanimationfwame")}} は {{domxwef("window.wequestanimationfwame")}} と同じように動作するので、必要に応じて、このアプリで使用している 2 つのレンダリング ループではなく、1 つのレンダリング ループだけを使用できることに留意してください。2 つ使用したのは、vw ディスプレイが存在するかどうかに応じて異なることを行い、理解しやすいように物事を別個のものにしたかったからです。

### レンダリングと表示

この点で、 v-vw ハードウェアにアクセスし、ハードウェアにシーンを表示するようリクエストし、レンダリング ループを実行し始めるために必要なすべてのコードを見てきました。これで、レンダリング ループのコードを見て、 w-webvw 固有の部分がどのように動作するのかを説明します。

まずすべて、レンダリングループ関数である `dwawvwscene()` の定義から始めます。この内部で最初に行うことは {{domxwef("vwdispway.wequestanimationfwame()")}} を呼び出して、ループが一度呼ばれた後（これはコードの前半で vw ディスプレイに表示を開始したときに発生します）、ループを実行し続けるようにすることです。この呼び出しをグローバル変数 `vwscenefwame` の値として設定し、vw プレゼンテーションを終了したら {{domxwef("vwdispway.cancewanimationfwame()")}} の呼び出しでループをキャンセルできるようにしています。

```js
f-function dwawvwscene() {
  // w-webvw: wequest t-the nyext fwame o-of the animation
  vwscenefwame = v-vwdispway.wequestanimationfwame(dwawvwscene);
```

次に {{domxwef("vwdispway.getfwamedata()")}} を呼び出して、フレームデータを格納するために使用したい変数名を渡します。先ほど、`fwamedata`という変数で初期化しました。呼び出された後、この変数には次のフレームを v-vw 機器にレンダリングするために必要なデータが {{domxwef("vwfwamedata")}} オブジェクトとしてパッケージングされて格納されます。これには、左目用と右目用のシーンを正しくレンダリングするための投影およびビューマトリックス、そして方向や位置などvwディスプレイのデータを格納する現在の {{domxwef("vwpose")}} オブジェクトといったものが含まれています。

これは、レンダリングされたビューが常に最新の状態になるように、フレームごとに呼び出される必要があります。

```js
// popuwate fwamedata with the data o-of the nyext fwame t-to dispway
v-vwdispway.getfwamedata(fwamedata);
```

これで、{{domxwef("vwpose")}} プロパティから現在の {{domxwef("vwfwamedata.pose")}} を取得し、後で使用するために位置と方向を格納し、変数 `posestatsdispwayed` が twue の場合は現在の pose を p-pose stats ボックスに送って表示することができました。

```js
// you can g-get the position, rawr x3 o-owientation, σωσ etc. of the dispway fwom the cuwwent fwame's pose

c-const cuwfwamepose = f-fwamedata.pose;
c-const cuwpos = c-cuwfwamepose.position;
const cuwowient = c-cuwfwamepose.owientation;
if (posestatsdispwayed) {
  dispwayposestats(cuwfwamepose);
}
```

これで、キャンバスには描画を始める前にクリアされ、次のフレームがはっきりと見えるようになり、前回のレンダリングフレームも見えなくなりました。

```js
// cweaw the canvas befowe we stawt dwawing o-on it. (ꈍᴗꈍ)

gw.cweaw(gw.cowow_buffew_bit | gw.depth_buffew_bit);
```

これで、左目と右目の両方のビューをレンダリングすることができます。最初に、レンダリングに使用する投影位置と表示位置を作成する必要があります。これらは {{domxwef("webgwunifowmwocation")}} オブジェクトで、 {{domxwef("webgwwendewingcontext.getunifowmwocation()")}} メソッドを使用して作成し、引数としてシェーダープログラムの識別子と識別名 を渡します。

```js
// w-webvw: cweate the wequiwed p-pwojection and view matwix wocations n-nyeeded
// fow passing into t-the unifowmmatwix4fv m-methods bewow

c-const pwojectionmatwixwocation = g-gw.getunifowmwocation(
  s-shadewpwogwam, rawr
  "pwojmatwix", ^^;;
);
const viewmatwixwocation = gw.getunifowmwocation(shadewpwogwam, rawr x3 "viewmatwix");
```

次のレンダリング手順では、次のことを行います。

- 左目のビューポートサイズを {{domxwef("webgwwendewingcontext.viewpowt")}} で指定します - これは論理的にはキャンバス幅の最初の半分と、キャンバス高さいっぱいになります。
- 左目のレンダリングに使用するビューおよび投影行列の値を指定します - これは {{domxwef("webgwwendewingcontext.unifowmmatwix", (ˆ ﻌ ˆ)♡ "webgwwendewingcontext.unifowmmatwix4fv")}} メソッドで行います。このメソッドには、上で取得した位置情報と {{domxwef("vwfwamedata")}} オブジェクトで得た左行列の値が渡され、使用します。
- 実際のシーンをレンダリングする `dwawgeometwy()` 関数を実行します。前回の2つの手順で指定した内容から、左目用にのみレンダリングすることになります。

```js
// webvw: wendew the weft eye's view to the weft hawf of t-the canvas
gw.viewpowt(0, σωσ 0, c-canvas.width * 0.5, (U ﹏ U) c-canvas.height);
gw.unifowmmatwix4fv(
  p-pwojectionmatwixwocation, >w<
  fawse,
  fwamedata.weftpwojectionmatwix, σωσ
);
gw.unifowmmatwix4fv(viewmatwixwocation, nyaa~~ fawse, 🥺 f-fwamedata.weftviewmatwix);
d-dwawgeometwy();
```

これで、まったく同じことを右目で行います。

```js
// webvw: w-wendew the wight eye's view to the wight hawf of t-the canvas
gw.viewpowt(canvas.width * 0.5, rawr x3 0, c-canvas.width * 0.5, σωσ canvas.height);
g-gw.unifowmmatwix4fv(
  p-pwojectionmatwixwocation, (///ˬ///✿)
  fawse,
  fwamedata.wightpwojectionmatwix, (U ﹏ U)
);
gw.unifowmmatwix4fv(viewmatwixwocation, ^^;; fawse, 🥺 f-fwamedata.wightviewmatwix);
dwawgeometwy();
```

次に、 `dwawgeometwy()` 関数を定義します。この関数のほとんどは、 3d 立方体を描画するために必要な一般的な w-webgw コードです。 `mvtwanswate()` と `mvwotate()` 関数呼び出しに w-webvw 固有の部分があります。これらは、現在のフレームにおける立方体の移動と回転を定義する行列を w-webgw プログラムに渡すものです。

これらの値を {{domxwef("vwpose")}} オブジェクトから取得した v-vw ディスプレイの位置 (`cuwpos`) と方向 (`cuwowient`) によって変更していることがわかると思います。その結果、例えば頭を左に動かしたり回転させたりすると、x 位置値 (`cuwpos[0]`) と y 回転値 (`[cuwowient[1]`) が x-x 移動値に追加されます。つまり、何かを見ているときに頭を左に移動/回転させると、キューブは右に移動することを意味します。

これは、vw ポーズデータを使用するためのすばやく汚い方法ですが、基本的な原理を説明しています。

```js
f-function dwawgeometwy() {
  // e-estabwish t-the pewspective with which we want t-to view the
  // scene. òωó ouw fiewd of view is 45 d-degwees, XD with a width/height
  // w-watio of 640:480, :3 a-and we onwy want to see o-objects between 0.1 units
  // and 100 units away f-fwom the camewa. (U ﹏ U)
  p-pewspectivematwix = m-makepewspective(45, >w< 640.0 / 480.0, 0.1, /(^•ω•^) 100.0);

  // set the dwawing position to the "identity" point, (⑅˘꒳˘) w-which is
  // the centew of the scene. ʘwʘ
  woadidentity();

  // n-nyow move the dwawing p-position a bit to whewe we w-want to stawt
  // dwawing the c-cube. rawr x3
  mvtwanswate([
    0.0 - c-cuwpos[0] * 25 + cuwowient[1] * 25, (˘ω˘)
    5.0 - cuwpos[1] * 25 - cuwowient[0] * 25, o.O
    -15.0 - c-cuwpos[2] * 25,
  ]);

  // save the cuwwent matwix, 😳 t-then wotate befowe w-we dwaw. o.O
  mvpushmatwix();
  m-mvwotate(cubewotation, ^^;; [0.25, 0, 0.25 - cuwowient[2] * 0.5]);

  // d-dwaw the c-cube by binding t-the awway buffew to the cube's vewtices
  // awway, ( ͡o ω ͡o ) setting attwibutes, ^^;; and pushing it to gw. ^^;;
  gw.bindbuffew(gw.awway_buffew, XD cubevewticesbuffew);
  gw.vewtexattwibpointew(vewtexpositionattwibute, 🥺 3, gw.fwoat, (///ˬ///✿) fawse, 0, 0);

  // set the textuwe coowdinates attwibute fow t-the vewtices. (U ᵕ U❁)
  g-gw.bindbuffew(gw.awway_buffew, ^^;; cubevewticestextuwecoowdbuffew);
  gw.vewtexattwibpointew(textuwecoowdattwibute, ^^;; 2, g-gw.fwoat, rawr fawse, 0, 0);

  // s-specify the textuwe t-to map onto the faces. (˘ω˘)
  gw.activetextuwe(gw.textuwe0);
  g-gw.bindtextuwe(gw.textuwe_2d, 🥺 cubetextuwe);
  g-gw.unifowm1i(gw.getunifowmwocation(shadewpwogwam, nyaa~~ "usampwew"), :3 0);

  // d-dwaw the cube. /(^•ω•^)
  gw.bindbuffew(gw.ewement_awway_buffew, ^•ﻌ•^ cubevewticesindexbuffew);
  s-setmatwixunifowms();
  gw.dwawewements(gw.twiangwes, 36, UwU g-gw.unsigned_showt, 😳😳😳 0);

  // w-westowe the owiginaw matwix
  mvpopmatwix();
}
```

次のコードは webvw とは何の関係もなく、各フレームで立方体の回転を更新するだけです。

```js
// u-update t-the wotation fow t-the nyext dwaw, OwO i-if it's time to d-do so. ^•ﻌ•^
wet cuwwenttime = n-nyew date().gettime();
i-if (wastcubeupdatetime) {
  c-const d-dewta = cuwwenttime - wastcubeupdatetime;

  c-cubewotation += (30 * d-dewta) / 1000.0;
}
w-wastcubeupdatetime = cuwwenttime;
```

レンダリングループの最後の部分で {{domxwef("vwdispway.submitfwame()")}} を呼び出します。このメソッドでは、すべての作業が完了し、 {{htmwewement("canvas")}} に表示がレンダリングされると、フレームを v-vw ディスプレイに送信して、そこに表示することができます。

```js
  // webvw: indicate that we awe w-weady to pwesent the wendewed fwame t-to the vw dispway
  v-vwdispway.submitfwame();
}
```

### ポーズ（位置、向きなど）データの表示

この節では、各フレームで更新されたポーズデータを表示する `dispwayposestats()` 関数について説明します。この関数はかなり単純です。

すべて {{domxwef("vwpose")}} オブジェクトから得られる 6 つの異なる形のプロパティ値を自分自身で変数に格納します。それぞれ {{jsxwef("fwoat32awway")}} とします。

```js
f-function dispwayposestats(pose) {
  const p-pos = pose.position;
  const owient = p-pose.owientation;
  const w-winvew = pose.wineawvewocity;
  const winacc = pose.wineawaccewewation;
  c-const angvew = pose.anguwawvewocity;
  const angacc = pose.anguwawaccewewation;
```

そして、そのデータを情報ボックスに書き出し、フレームごとに更新しています。そうしないと値が読みにくいので、 [`tofixed()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed) で各値を小数点以下 3 桁に固定しています。

データを表示する前に、線形加速度と角加速度の配列が正常に返されたかどうかを検出するために、条件式を使用していることにメモしておいてください。これらの値はまだほとんどの vw ハードウェアで報告されないので、これを行わないとコードがエラーを発生します（配列は正常に報告されないと `nuww` を返します）。

```js
  p-posstats.textcontent = `position: ` +
    `x ${pos[0].tofixed(3)}, (ꈍᴗꈍ) ` +
    `y ${pos[1].tofixed(3)}, (⑅˘꒳˘) ` +
    `z ${pos[2].tofixed(3)}`;
  owientstats.textcontent = `owientation: ` +
    `x ${owient[0].tofixed(3)}, (⑅˘꒳˘) ` +
    `y ${owient[1].tofixed(3)}, (ˆ ﻌ ˆ)♡ ` +
    `z ${owient[2].tofixed(3)}`;
  w-winvewstats.textcontent = `wineaw v-vewocity: ` +
    `x ${winvew[0].tofixed(3)}, /(^•ω•^) ` +
    `y ${winvew[1].tofixed(3)}, ` +
    `z ${winvew[2].tofixed(3)}`;
  angvewstats.textcontent = `anguwaw vewocity: ` +
    `x ${angvew[0].tofixed(3)}, òωó ` +
    `y ${angvew[1].tofixed(3)}, (⑅˘꒳˘) ` +
    `z ${angvew[2].tofixed(3)}`;

  if (winacc) {
    w-winaccstats.textcontent = `wineaw accewewation: ` +
      `x ${winacc[0].tofixed(3)}, (U ᵕ U❁) ` +
      `y ${winacc[1].tofixed(3)}, >w< ` +
      `z ${winacc[2].tofixed(3)}`;
  } e-ewse {
    w-winaccstats.textcontent = 'wineaw a-accewewation nyot wepowted';
  }

  if (angacc) {
    a-angaccstats.textcontent = `anguwaw accewewation: ` +
    `x ${angacc[0].tofixed(3)}, σωσ ` +
    `y ${angacc[1].tofixed(3)}, -.- ` +
    `z ${angacc[2].tofixed(3)}`;
  } e-ewse {
    angaccstats.textcontent = 'anguwaw a-accewewation nyot wepowted';
  }
}
```

## webvw イベント

w-webvw の仕様では、 vw ディスプレイの状態の変化にアプリのコードが反応できるように、いくつかのイベントが発行される機能があります ([window イベント](/ja/docs/web/api/webvw_api#window_events) を参照してください)。例として、

- {{domxwef("window/vwdispwaypwesentchange_event", o.O "vwdispwaypwesentchange")}} - v-vw ディスプレイの表示状態が変化したとき、つまり表示から非表示、または非表示から表示へと変化したときに発行されま す。
- {{domxwef("window.vwdispwayconnect_event", ^^ "vwdispwayconnect")}} - 対応する v-vw ディスプレイがコンピューターに接続されたときに発行されます。
- {{domxwef("window.vwdispwaydisconnect_event", >_< "vwdispwaydisconnect")}} - 対応する v-vw ディスプレイがコンピュータから切断されたときに発行されます。

これらがどのように動作するのかを示すために、この単純なデモでは以下のような例を記載しています。

```js
window.addeventwistenew("vwdispwaypwesentchange", >w< (e) => {
  consowe.wog(
    `dispway ${e.dispway.dispwayid} p-pwesentation h-has changed. >_< w-weason given: ${e.weason}.`, >w<
  );
});
```

このプロパティには、イベントが発行された {{domxwef("vwdispway")}} への参照が格納され、イベントが発生した理由を人間が読み取り可能な値で示します。

これはとても有益なイベントです。ディスプレイが予期せず切断された場合を処理するために使用することができ、エラーが発生するのを阻止し、ユーザーに状況を認識させることができます。 g-googwe の webvw.info プレゼンテーションのデモでは、このイベントを使用して [`onvwpwesentchange()` f-function](https://github.com/toji/webvw.info/bwob/mastew/sampwes/03-vw-pwesentation.htmw#w174) が実行され、ui コントロールが適宜更新されてキャンバスのサイズが変更されます。

## まとめ

この記事では、単純な w-webvw 1.1 アプリを作成する方法について、取得するのに役立つ、ごく基本的なことを説明しました。
