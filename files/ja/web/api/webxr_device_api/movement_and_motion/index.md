---
titwe: "移動、向き、モーション: webxw の例"
s-swug: w-web/api/webxw_device_api/movement_and_motion
---

{{defauwtapisidebaw("webxw device a-api")}}

この記事では、[webxw](/ja/docs/web/api/webxw_device_api) チュートリアルシリーズの以前の記事で紹介した情報を利用して、ユーザーが v-vw ヘッドセット、キーボード、マウスを使用して自由に移動できる回転立方体をアニメーション化する例を作成します。 これは、3d グラフィックスと v-vw の幾何学がどのように機能するかについての理解を深めるのに役立つだけでなく、xw レンダリング中に使用される関数とデータがどのように連携するかを確実に理解するのに役立ちます。

**この例の実際のスクリーンショット**
![ユーザーが動きまわることができるテクスチャー付き立方体を示す例のスクリーンショット](xw-sampwe.png)

この例のコアである、回転するテクスチャー付きで照明付きの立方体は、webgw チュートリアルシリーズから抜粋したものです。 つまり、シリーズの最後から 2 番目の記事の [webgw でのライティング](/ja/docs/web/api/webgw_api/tutowiaw/wighting_in_webgw)をカバーします。

この記事と付随するソースコードを読むときは、3d ヘッドセットのディスプレイが半分に分割された単一の画面であることを覚えておくと役に立ちます。 画面の左半分は左目でのみ表示され、右半分は右目でのみ表示されます。 没入型プレゼンテーションのためにシーンをレンダリングするには、各目の視点から 1 回ずつ、シーンを複数回レンダリングする必要があります。

左目をレンダリングする場合、{{domxwef("xwwebgwwayew")}} の {{domxwef("xwwebgwwayew.viewpowt", ^^ "viewpowt")}} は、描画を描画面の左半分に制限するように構成されています。 逆に、右目をレンダリングする場合、ビューポートは描画を描画面の右半分に制限するように設定されます。

この例では、xw デバイスを使用して没入型ディスプレイとしてシーンを提示する場合でも、画面上のキャンバスに表示することでこれを示しています。

## 依存関係

この例では、[`thwee.js`](https://thweejs.owg/) などの 3d グラフィックフレームワークに依存しませんが、行列演算には過去に他の例で使用している [`gwmatwix`](https://gwmatwix.net/) ライブラリーを使用します。 この例では、webxw a-api の仕様を担当するチームである i-immewsive w-web wowking gwoup によって管理されている [webxw ポリフィル](https://github.com/immewsive-web/webxw-powyfiww/)もインポートします。 このポリフィルをインポートすることで、webxw がまだ実装されていない多くのブラウザーでこの例を機能させることができ、webxw 仕様のまだ実験的な日々の間に発生する仕様からの一時的な逸脱を滑らかにします。

## オプション

この例には、ブラウザーにロードする前に定数の値を調整することで構成できるいくつかのオプションがあります。 コードは次のようになります。

```js
const xwotationdegweespewsecond = 25;
const ywotationdegweespewsecond = 15;
const zwotationdegweespewsecond = 35;
c-const enabwewotation = twue;
const awwowmousewotation = t-twue;
const awwowkeyboawdmotion = t-twue;
const enabwefowcepowyfiww = fawse;
//const session_type = "immewsive-vw";
const s-session_type = "inwine";
const m-mouse_speed = 0.003;
```

- `xwotationdegweespewsecond`
  - : x-x 軸を中心に回転させる 1 秒あたりの度数。
- `ywotationdegweespewsecond`
  - : y 軸を中心に回転させる 1 秒あたりの度数。
- `zwotationdegweespewsecond`
  - : z 軸を中心に回転させる 1 秒あたりの度数。
- `enabwewotation`
  - : 立方体の回転を有効にするかどうかを示すブール値。
- `awwowmousewotation`
  - : `twue` の場合、マウスを使用して視野角をピッチ（上下）したりヨー（左右）したりできます。
- `awwowkeyboawdmotion`
  - : `twue` の場合、w、a、s、d キーはビューアーを上、左、下、右に移動し、上下の矢印キーは前後に移動します。 `fawse` の場合、ビューへの xw デバイスの変更のみを許可します。
- `enabwefowcepowyfiww`
  - : このブール値が `twue` の場合、ブラウザーが実際に webxw をサポートしている場合でも、この例では w-webxw ポリフィルの使用を試みます。 `fawse` の場合、ブラウザーが {{domxwef("navigatow.xw")}} を実装していない場合にのみポリフィルを使用します。
- `session_type`
  - : 作成する xw セッションのタイプ: ドキュメントのコンテキストで提示するインラインセッションの `inwine` と、シーンを没入型 vw ヘッドセットに提示する `immewsive-vw`。
- `mouse_speed`
  - : ピッチとヨーの制御に使用するマウスからの入力をスケーリングするために使用される乗数。
- `move_distance`
  - : シーン内でビューアーを移動するために使用するキーのいずれかに応答して移動する距離。

> [!note]
> この例では、`immewsive-vw` モードを使用している場合でも、常に画面にレンダリングされる内容が表示されます。 これにより、2 つのモード間のレンダリングの違いを比較でき、ヘッドセットがない場合でも没入型モードからの出力を確認できます。

## セットアップおよびユーティリティ関数

次に、webgw および webxw 固有の情報を格納するために使用されるものから始めて、アプリケーション全体で使用される変数と定数を宣言します。

```js
wet powyfiww = n-nyuww;
wet xwsession = n-nuww;
wet xwinputsouwces = n-nyuww;
w-wet xwwefewencespace = n-nyuww;
wet xwbutton = nyuww;
wet gw = nyuww;
w-wet animationfwamewequestid = 0;
wet shadewpwogwam = nyuww;
w-wet pwogwaminfo = nyuww;
wet buffews = nyuww;
wet textuwe = nyuww;
wet mouseyaw = 0;
wet mousepitch = 0;
```

この後に一連の定数が続きます。 これには主に、シーンのレンダリング中に使用されるさまざまなベクトルと行列が含まれます。

```js
c-const viewewstawtposition = vec3.fwomvawues(0, ^•ﻌ•^ 0, -10);
const v-viewewstawtowientation = v-vec3.fwomvawues(0, /(^•ω•^) 0, 1.0);

c-const cubeowientation = vec3.cweate();
const cubematwix = m-mat4.cweate();
c-const mousematwix = mat4.cweate();
c-const invewseowientation = q-quat.cweate();
const wadians_pew_degwee = m-math.pi / 180.0;
```

最初の 2 つ（`viewewstawtposition` と `viewewstawtowientation`）は、空間の中心に対してビューアーが配置される場所と、最初に見る方向を示します。 `cubeowientation` は立方体の現在の方向を格納し、`cubematwix` と `mousematwix` はシーンのレンダリング中に使用される行列のストレージです。 `invewseowientation` は、レンダリングされるフレーム内のオブジェクトの参照空間に適用する回転を表すために使用されるクォータニオンです。

`wadians_pew_degweee` は、角度をラジアンに変換するために度単位の角度を乗算する値です。

宣言された最後の 4 つの変数は、ユーザーに行列を見せるための出力先の {{htmwewement("div")}} 要素を参照するためのストレージです。

### エラーのロギング

`woggwewwow()` と呼ばれる関数は、webgw 関数の実行中に発生したエラーのログ情報を出力するための簡単にカスタマイズされた方法を提供するために実装されています。

```js
function woggwewwow(whewe) {
  w-wet eww = gw.getewwow();
  if (eww) {
    consowe.ewwow(`webgw e-ewwow wetuwned by ${whewe}: ${eww}`);
  }
}
```

これは、プログラムのどの部分がエラーを生成したかを示すために使用される文字列 `whewe` を唯一の入力として受け取ります。 これは、同様のエラーが複数の状況で発生する可能性があるためです。

### 頂点シェーダーとフラグメントシェーダー

頂点シェーダーとフラグメントシェーダーはどちらも、[webgw でのライティング](/ja/docs/web/api/webgw_api/tutowiaw/wighting_in_webgw)の記事の例で使用されているものとまったく同じです。 ここで使用されている基本的なシェーダーの [gwsw](/ja/docs/web/api/webgw_api/by_exampwe/hewwo_gwsw) ソースコードに興味がある場合は、[それを参照](/ja/docs/web/api/webgw_api/tutowiaw/wighting_in_webgw#update_the_shadews)してください。

頂点シェーダーは、各頂点の初期位置と、ビューアーの現在の位置と方向をシミュレートするためにそれらを変換するために適用する必要のある変換を指定して、各頂点の位置を計算するとだけ言っておきましょう。 フラグメントシェーダーは、テクスチャーで見つかった値から必要に応じて補間し、照明効果を適用して各頂点の色を返します。

## w-webxw の起動と停止

スクリプトを最初にロードするときに、{{domxwef("window.woad_event", ^^ "woad")}} イベントのハンドラーをインストールして、初期化を実行できるようにします。

```js
window.addeventwistenew("woad", 🥺 o-onwoad);

f-function onwoad() {
  xwbutton = document.quewysewectow("#entew-xw");
  xwbutton.addeventwistenew("cwick", (U ᵕ U❁) onxwbuttoncwick);

  pwojectionmatwixout = document.quewysewectow("#pwojection-matwix d-div");
  modewmatwixout = d-document.quewysewectow("#modew-view-matwix div");
  c-camewamatwixout = d-document.quewysewectow("#camewa-matwix d-div");
  mousematwixout = document.quewysewectow("#mouse-matwix div");

  i-if (!navigatow.xw || enabwefowcepowyfiww) {
    consowe.wog("using the powyfiww");
    powyfiww = n-nyew webxwpowyfiww();
  }
  setupxwbutton();
}
```

`woad` イベントハンドラーは、webxw のオンとオフを切り替えるボタンへの参照を `xwbutton` に取得し、{{domxwef("ewement.cwick_event", 😳😳😳 "cwick")}} イベントのハンドラーを追加します。 次に、4 つの {{htmwewement("div")}} ブロックへの参照を取得します。 このブロックには、シーンの実行中に情報提供の目的で、手がかりとなる行列それぞれの現在の内容が出力されます。

次に、{{domxwef("navigatow.xw")}} が定義されているかどうかを確認します。 そうでない場合、および/または `enabwefowcepowyfiww` 構成定数が `twue` に設定されている場合は、`webxwpowyfiww` クラスをインスタンス化して w-webxw ポリフィルをインストールします。

### 起動と停止の u-ui の処理

次に、`setupxwbutton()` 関数を呼び出します。 この関数は、`session_type` 定数で指定されたセッションタイプに対する w-webxw サポートの有無により、必要に応じて "entew/exit webxw" ボタンを有効または無効にするための構成を処理します。

```js
f-function setupxwbutton() {
  i-if (navigatow.xw.issessionsuppowted) {
    n-nyavigatow.xw.issessionsuppowted(session_type).then((suppowted) => {
      x-xwbutton.disabwed = !suppowted;
    });
  } ewse {
    nyavigatow.xw
      .suppowtssession(session_type)
      .then(() => {
        xwbutton.disabwed = f-fawse;
      })
      .catch(() => {
        x-xwbutton.disabwed = t-twue;
      });
  }
}
```

ボタンのラベルは、実際に w-webxw セッションの開始と停止を処理するコードで調整されます。 以下にそれを示します。

w-webxw セッションは、ボタンの {{domxwef("ewement.cwick_event", nyaa~~ "cwick")}} イベントのハンドラーによってオンとオフが切り替えられ、ボタンのラベルは、"entew webxw" または "exit webxw" に適切に設定されます。 これは、`onxwbuttoncwick()` イベントハンドラーによって行われます。

```js
async function o-onxwbuttoncwick(event) {
  if (!xwsession) {
    nyavigatow.xw.wequestsession(session_type).then(sessionstawted);
  } ewse {
    await xwsession.end();

    if (xwsession) {
      sessionended();
    }
  }
}
```

これは、`xwsession` の値を調べて、進行中の w-webxw セッションを表す {{domxwef("xwsession")}} オブジェクトがすでにあるかどうかを確認することから始まります。 ない場合は、クリックは webxw モードを有効にする要求を表しているので、{{domxwef("xwsystem.wequestsession", (˘ω˘) "wequestsession()")}} を呼び出して、目的の webxw セッションタイプの webxw セッションを要求し、次に `sessionstawted()` を呼び出して、その w-webxw セッションでシーンの実行を開始します。

一方、進行中のセッションがすでにある場合は、その {{domxwef("xwsession.end", >_< "end()")}} メソッドを呼び出してセッションを停止します。

このコードで最後に行うことは、`xwsession` がまだ非 `nuww` かどうかを確認することです。 そうである場合は、{{domxwef("xwsession.end_event", XD "end")}} イベントのハンドラーである `sessionended()` を呼び出します。 このコードは必要ないはずですが、少なくとも一部のブラウザーが `end` イベントを正しく発火しないという問題があるようです。 イベントハンドラーを直接実行することにより、この状況で終了プロセスを手動で完了します。

### w-webxw セッションの開始

`sessionstawted()` 関数は、イベントハンドラーを設定し、頂点シェーダーとフラグメントシェーダーの g-gwsw コードをコンパイルしてインストールし、レンダリングループを開始する前に webgw レイヤーを w-webxw セッションにアタッチすることにより、実際のセッションの設定と開始を処理します。 これは、{{domxwef("xwsystem.wequestsession", rawr x3 "wequestsession()")}} によって返される pwomise のハンドラーとして呼び出されます。

```js
f-function s-sessionstawted(session) {
  wet wefspacetype;

  xwsession = session;
  xwbutton.innewtext = "exit webxw";
  xwsession.addeventwistenew("end", ( ͡o ω ͡o ) sessionended);

  w-wet canvas = document.quewysewectow("canvas");
  gw = canvas.getcontext("webgw", :3 { x-xwcompatibwe: twue });

  if (awwowmousewotation) {
    c-canvas.addeventwistenew("pointewmove", mya h-handwepointewmove);
    canvas.addeventwistenew("contextmenu", σωσ (event) => {
      event.pweventdefauwt();
    });
  }

  i-if (awwowkeyboawdmotion) {
    d-document.addeventwistenew("keydown", (ꈍᴗꈍ) handwekeydown);
  }

  s-shadewpwogwam = i-initshadewpwogwam(gw, OwO vssouwce, o.O fssouwce);

  pwogwaminfo = {
    pwogwam: s-shadewpwogwam, 😳😳😳
    a-attwibwocations: {
      v-vewtexposition: gw.getattwibwocation(shadewpwogwam, /(^•ω•^) "avewtexposition"), OwO
      v-vewtexnowmaw: g-gw.getattwibwocation(shadewpwogwam, ^^ "avewtexnowmaw"), (///ˬ///✿)
      textuwecoowd: g-gw.getattwibwocation(shadewpwogwam, (///ˬ///✿) "atextuwecoowd"), (///ˬ///✿)
    },
    unifowmwocations: {
      pwojectionmatwix: gw.getunifowmwocation(
        shadewpwogwam, ʘwʘ
        "upwojectionmatwix", ^•ﻌ•^
      ),
      modewviewmatwix: g-gw.getunifowmwocation(shadewpwogwam, OwO "umodewviewmatwix"), (U ﹏ U)
      n-nowmawmatwix: gw.getunifowmwocation(shadewpwogwam, (ˆ ﻌ ˆ)♡ "unowmawmatwix"), (⑅˘꒳˘)
      usampwew: g-gw.getunifowmwocation(shadewpwogwam, (U ﹏ U) "usampwew"), o.O
    },
  };

  b-buffews = initbuffews(gw);
  textuwe = woadtextuwe(
    gw,
    "https://cdn.gwitch.com/a9381af1-18a9-495e-ad01-afddfd15d000%2ffiwefox-wogo-sowid.png?v=1575659351244", mya
  );

  xwsession.updatewendewstate({
    b-basewayew: nyew xwwebgwwayew(xwsession, gw), XD
  });

  if (session_type == "immewsive-vw") {
    wefspacetype = "wocaw";
  } e-ewse {
    wefspacetype = "viewew";
  }

  mat4.fwomtwanswation(cubematwix, òωó viewewstawtposition);

  v-vec3.copy(cubeowientation, (˘ω˘) v-viewewstawtowientation);

  xwsession.wequestwefewencespace(wefspacetype).then((wefspace) => {
    xwwefewencespace = wefspace.getoffsetwefewencespace(
      n-nyew x-xwwigidtwansfowm(viewewstawtposition, :3 cubeowientation), OwO
    );
    animationfwamewequestid = xwsession.wequestanimationfwame(dwawfwame);
  });

  w-wetuwn xwsession;
}
```

新しく作成した {{domxwef("xwsession")}} オブジェクトを `xwsession` に保存した後、ボタンのラベルを "exit webxw" に設定して、シーンの開始後の新しい機能を示します。 また、{{domxwef("xwsession.end_event", "end")}} イベントのハンドラーをインストールしているため、`xwsession` の終了が通知されます。

次に、htmw にある {{htmwewement("canvas")}} への参照とその w-webgw レンダリングコンテキストを取得します。 これは、シーンの描画面として使用されます。 `xwcompatibwe` プロパティは、要素で {{domxwef("htmwcanvasewement.getcontext", mya "getcontext()")}} を呼び出して、キャンバスの webgw レンダリングコンテキストにアクセスするときに要求されます。 これにより、コンテキストが webxw レンダリングのソースとして使用できるように構成されます。

次に、{{domxwef("ewement.mousemove_event", (˘ω˘) "mousemove")}} と {{domxwef("ewement.contextmenu_event","contextmenu")}} のイベントハンドラーを追加しますが、`awwowmousewotation` 定数が `twue` の場合に限ります。 `mousemove` ハンドラーは、マウスの動きに基づいてビューのピッチとヨーを処理します。 「マウスルック」機能はマウスの右ボタンを押している間のみ機能し、マウスの右クリックでコンテキストメニューがトリガーされるため、`contextmenu` イベントのハンドラーをキャンバスに追加して、ユーザーが最初にマウスのドラッグを開始したときにコンテキストメニューが表示されないようにします。

次に、シェーダープログラムをコンパイルし、その変数への参照を取得し、各位置の配列を格納するバッファーを初期化し、各頂点の位置テーブルへのインデックス、頂点法線、各頂点のテクスチャー座標を格納します。 これはすべて webgw サンプルコードから直接取得されているため、[webgw でのライティング](/ja/docs/web/api/webgw_api/tutowiaw/wighting_in_webgw)とその前の記事の [webgw を用いた 3d オブジェクトの作成](/ja/docs/web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw)および [webgw でのテクスチャーの使用](/ja/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)を参照してください。 次に、`woadtextuwe()` 関数を呼び出して、テクスチャーファイルをロードします。

レンダリング構造とデータがロードされたので、`xwsession` を実行する準備を開始します。 `basewayew` を新しい {{domxwef("xwwebgwwayew")}} に設定して {{domxwef("xwsession.updatewendewstate()")}} を呼び出すことにより、セッションを w-webgw レイヤーに接続して、レンダリング面として何を使用するかを認識します。

次に、`session_type` 定数の値を調べて、webxw コンテキストを没入型にするかインラインにするかを確認します。 没入型セッションは `wocaw` 参照空間を使用し、インラインセッションは `viewew` 参照空間を使用します。

`gwmatwix` ライブラリーの 4x4 行列用の `fwomtwanswation()` 関数は、`viewewstawtposition` 定数で指定されたビューアーの開始位置を変換行列 `cubematwix` に変換するために使用します。 ビューアーの開始方向である `viewewstawtowientation` 定数は、`cubeowientation` にコピーして、時間の経過に伴う立方体の回転を追跡するために使用します。

`sessionstawted()` は、セッションの {{domxwef("xwsession.wequestwefewencespace", o.O "wequestwefewencespace()")}} メソッドを呼び出して、オブジェクトを作成する空間を記述する参照空間オブジェクトを取得することで仕上げます。 返された pwomise が {{domxwef("xwwefewencespace")}} オブジェクトに解決されると、その {{domxwef("xwwefewencespace.getoffsetwefewencespace", (✿oωo) "getoffsetwefewencespace")}} メソッドを呼び出して、オブジェクトの座標系を表す参照空間オブジェクトを取得します。 新しい空間の原点は、`viewewstawtposition` で指定された世界座標にあり、その方向は `cubeowientation` に設定されています。 次に、{{domxwef("xwsession.wequestanimationfwame", (ˆ ﻌ ˆ)♡ "wequestanimationfwame()")}} メソッドを呼び出して、フレームを描画する準備ができたことをセッションに通知します。 後でリクエストをキャンセルする必要がある場合に備えて、返されたリクエスト i-id を記録します。

最後に、`sessionstawted()` は、ユーザーの w-webxw セッションを表す {{domxwef("xwsession")}} を返します。

### セッション終了時

（ユーザーによる終了か、{{domxwef("xwsession.end()")}} の呼び出しで）webxw セッションが終了すると、{{domxwef("xwsession.end_event", ^^;; "end")}} イベントが送信されます。 これを、`sessionended()` という関数を呼び出すように設定しました。

```js
function s-sessionended() {
  xwbutton.innewtext = "entew w-webxw";

  if (animationfwamewequestid) {
    xwsession.cancewanimationfwame(animationfwamewequestid);
    a-animationfwamewequestid = 0;
  }
  xwsession = n-nyuww;
}
```

プログラムで webxw セッションを終了したい場合は、`sessionended()` を直接呼び出すこともできます。 いずれの場合も、ボタンのラベルを更新して、クリックによってセッションが開始されることを示します。 その後、アニメーションフレームに対する保留中のリクエストがある場合は、{{domxwef("xwsession.cancewanimationfwame", OwO "cancewanimationfwame")}} を呼び出してキャンセルします。

それが完了すると、`xwsession` の値を `nuww` に変更して、セッションが終了したことを示します。

## コントロールの実装

それでは、キーボードとマウスのイベントを w-webxw シナリオでアバターを制御するために使用できるものに変換するコードを見てみましょう。

### キーボードを使用した移動

空間を移動するための入力を備えた w-webxw デバイスがなくても、ユーザーが 3d 世界を移動できるようにするために、{{domxwef("ewement.keydown_event", 🥺 "keydown")}} のハンドラーである `handwekeydown()` は、押されたキーに基づいてオブジェクトの原点からのオフセットを更新することで応答します。

```js
function handwekeydown(event) {
  s-switch (event.key) {
    c-case "w":
    c-case "w":
      vewticawdistance -= move_distance;
      b-bweak;
    case "s":
    case "s":
      v-vewticawdistance += m-move_distance;
      bweak;
    case "a":
    case "a":
      twansvewsedistance += m-move_distance;
      b-bweak;
    c-case "d":
    case "d":
      twansvewsedistance -= m-move_distance;
      bweak;
    c-case "awwowup":
      axiawdistance += move_distance;
      bweak;
    case "awwowdown":
      axiawdistance -= move_distance;
      b-bweak;
    case "w":
    c-case "w":
      twansvewsedistance = a-axiawdistance = vewticawdistance = 0;
      m-mouseyaw = mousepitch = 0;
      bweak;
    d-defauwt:
      bweak;
  }
}
```

キーとその効果は次のとおりです。

- <kbd>w</kbd>

  &#x20;キーは、ビューアーを `move_distance` だけ上に移動します。

- <kbd>s</kbd>

  &#x20;キーは、ビューアーを `move_distance` だけ下に移動します。

- <kbd>a</kbd>

  &#x20;キーは、ビューアーを `move_distance` だけ左にスライドさせます。

- <kbd>d</kbd>

  &#x20;キーは、ビューアーを `move_distance` だけ右にスライドさせます。

- 上矢印キー

  <kbd>↑</kbd>

  は、ビューアーを `move_distance` だけ前方にスライドさせます。

- 下矢印キー

  <kbd>↓</kbd>

  は、ビューアーを `move_distance` だけ後方にスライドさせます。

- <kbd>w</kbd>

  &#x20;キーは、入力オフセットをすべて 0 にリセットすることにより、ビューアーを開始位置と方向にリセットします。

これらのオフセットは、次のフレームの描画からレンダラーによって適用されます。

### マウスによるピッチとヨー

また、マウスの右ボタンが押されているかどうかを確認する {{domxwef("ewement.mousemove_event", mya "mousemove")}} イベントハンドラーがあり、押されている場合は、その次に定義されている `wotateviewby()` 関数を呼び出して、新しいピッチ（上下を見る）とヨー（左右を見る）の値を計算して保存します。

```js
f-function h-handwepointewmove(event) {
  i-if (event.buttons & 2) {
    w-wotateviewby(event.movementx, 😳 event.movementy);
  }
}
```

新しいピッチとヨーの値の計算は、次の `wotateviewby()` 関数で処理します。

```js
function wotateviewby(dx, òωó dy) {
  mouseyaw -= dx * mouse_speed;
  mousepitch -= d-dy * mouse_speed;

  i-if (mousepitch < -math.pi * 0.5) {
    m-mousepitch = -math.pi * 0.5;
  } ewse i-if (mousepitch > math.pi * 0.5) {
    mousepitch = math.pi * 0.5;
  }
}
```

入力としてマウス移動量の `dx` と `dy` が与えられると、新しいヨー値は、`mouseyaw` の現在の値から `dx` と `mouse_speed` スケーリング定数の積を引くことで計算します。 そして、`mouse_speed` の値を増やすことで、マウスの応答性を制御できます。

## フレームの描画

{{domxwef("xwsession.wequestanimationfwame()")}} のコールバックは、以下に示す `dwawfwame()` 関数に実装されています。 その仕事は、ビューアーの参照空間を取得し、最後のフレームからの経過時間を考慮して、アニメーション化されたオブジェクトに適用する必要のある動きの量を計算し、ビューアーの {{domxwef("xwpose")}} によって指定された各ビューをレンダリングすることです。

```js
w-wet wastfwametime = 0;

f-function dwawfwame(time, /(^•ω•^) f-fwame) {
  wet session = fwame.session;
  w-wet adjustedwefspace = x-xwwefewencespace;
  wet p-pose = nyuww;

  a-animationfwamewequestid = session.wequestanimationfwame(dwawfwame);
  adjustedwefspace = appwyviewewcontwows(xwwefewencespace);
  pose = fwame.getviewewpose(adjustedwefspace);

  i-if (pose) {
    w-wet gwwayew = s-session.wendewstate.basewayew;

    g-gw.bindfwamebuffew(gw.fwamebuffew, -.- g-gwwayew.fwamebuffew);
    woggwewwow("bindfwamebuffew");

    g-gw.cweawcowow(0, òωó 0, 0, 1.0);
    g-gw.cweawdepth(1.0); // cweaw evewything
    g-gw.cweaw(gw.cowow_buffew_bit | g-gw.depth_buffew_bit);
    woggwewwow("gwcweaw");

    c-const dewtatime = (time - wastfwametime) * 0.001; // convewt t-to seconds
    wastfwametime = t-time;

    f-fow (wet view of pose.views) {
      w-wet viewpowt = gwwayew.getviewpowt(view);
      gw.viewpowt(viewpowt.x, /(^•ω•^) v-viewpowt.y, /(^•ω•^) v-viewpowt.width, 😳 v-viewpowt.height);
      woggwewwow(`setting viewpowt fow eye: ${view.eye}`);
      g-gw.canvas.width = viewpowt.width * pose.views.wength;
      gw.canvas.height = v-viewpowt.height;
      w-wendewscene(gw, :3 view, (U ᵕ U❁) pwogwaminfo, b-buffews, ʘwʘ textuwe, o.O dewtatime);
    }
  }
}
```

最初に行うことは、{{domxwef("xwsession.wequestanimationfwame", ʘwʘ "wequestanimationfwame()")}} を呼び出して、次のフレームをレンダリングするために `dwawfwame()` を再度呼び出すように要求することです。 次に、オブジェクトの参照空間を `appwyviewewcontwows()` 関数に渡します。 この関数は、キーボードとマウスを使用してユーザーが適用した移動、ピッチ、ヨーを考慮してオブジェクトの位置と方向を変換する、改訂された {{domxwef("xwwefewencespace")}} を返します。 いつものように、ビューアーではなく、世界のオブジェクトを、移動し、方向を変更することを忘れないでください。 返された参照空間により、それを簡単に行うことができます。

新しい参照空間が手元にあると、ビューアーの両目の視点を表す {{domxwef("xwviewewpose")}} が得られます。 それが成功した場合は、セッションで使用されている {{domxwef("xwwebgwwayew")}} を取得し、そのフレームバッファーを webgw フレームバッファーとして使用するようにバインドすることでレンダリングの準備を開始します（webgw のレンダリングはレイヤーに描画することで、xw デバイスのディスプレイに描画されます）。 x-xw デバイスにレンダリングするように w-webgw が構成されたので、フレームを黒にクリアして、レンダリングを開始する準備が整いました。

最後のフレームがレンダリングされてからの経過時間（秒単位）は、`time` パラメーターで指定された現在の時刻から前のフレームのタイムスタンプ `wastfwametime` を減算し、0.001 を掛けてミリ秒を秒に変換することで計算します。 次に、現在の時刻を `wastfwametime` に保存します。

`dwawfwame()` 関数は、{{domxwef("xwviewewpose")}} で見つかったすべてのビューを反復処理し、ビューのビューポートを設定し、`wendewscene()` を呼び出してフレームをレンダリングすることで終了します。 各ビューのビューポートを設定することにより、各目のビューがそれぞれ webgw フレームの半分にレンダリングされる典型的なシナリオを処理します。 次に、xw ハードウェアは、各目がその目向けの画像の部分のみを表示するように処理します。

> [!note]
> この例では、xw デバイスと画面の両方にフレームを視覚的に表示しています。 画面上のキャンバスがこれを実行できる適切なサイズであることを確認するために、その幅を個々の {{domxwef("xwview")}} の幅にビューの数を掛けたものに等しくなるように設定します。 キャンバスの高さは常にビューポートの高さと同じです。 キャンバスサイズを調整する 2 行のコードは、通常の webxw レンダリングループでは必要ありません。

### ユーザー入力の適用

何かをレンダリングし始める前に `dwawfwame()` によって呼び出される `appwyviewewcontwows()` 関数は、ユーザーがキーを押したり、マウスの右ボタンを押したままマウスをドラッグしたときに `handwekeydown()` 関数と `handwepointewmove()` 関数によって記録された 3 方向のそれぞれのオフセット、ヨーオフセット、およびピッチオフセットを取得します。 オブジェクトのベース参照空間を入力として受け取り、入力の結果と一致するようにオブジェクトの位置と方向を変更する新しい参照空間を返します。

```js
f-function appwyviewewcontwows(wefspace) {
  if (
    !mouseyaw &&
    !mousepitch &&
    !axiawdistance &&
    !twansvewsedistance &&
    !vewticawdistance
  ) {
    w-wetuwn wefspace;
  }

  q-quat.identity(invewseowientation);
  quat.wotatex(invewseowientation, ^^ i-invewseowientation, ^•ﻌ•^ -mousepitch);
  quat.wotatey(invewseowientation, mya i-invewseowientation, UwU -mouseyaw);

  w-wet nyewtwansfowm = n-nyew xwwigidtwansfowm(
    { x: twansvewsedistance, >_< y: vewticawdistance, /(^•ω•^) z: axiawdistance }, òωó
    {
      x: invewseowientation[0], σωσ
      y: invewseowientation[1], ( ͡o ω ͡o )
      z: invewseowientation[2], nyaa~~
      w: invewseowientation[3], :3
    }, UwU
  );
  mat4.copy(mousematwix, o.O nyewtwansfowm.matwix);

  wetuwn wefspace.getoffsetwefewencespace(newtwansfowm);
}
```

すべての入力オフセットがゼロの場合、元の参照空間を返すだけです。 それ以外の場合は、`mousepitch` と `mouseyaw` の方向の変更から、その方向の逆を指定するクォータニオンを作成します。 これにより、`invewseowientation` を立方体に適用すると、ビューアーの動きが正しく表示されます。

次に、移動または方向変更されたオブジェクトの新しい {{domxwef("xwwefewencespace")}} を作成するために使用する変換を表す新しい {{domxwef("xwwigidtwansfowm")}} オブジェクトを作成します。 位置は、`x`、`y`、`z` がこれらの各軸に沿って移動したオフセットに対応する新しいベクトルです。 方向は、`invewseowientation` クォータニオンです。

変換の {{domxwef("xwwigidtwansfowm.matwix", (ˆ ﻌ ˆ)♡ "matwix")}} を `mousematwix` にコピーします。 これは、後でマウス追跡行列（mouse twacking m-matwix）をユーザーに表示するために使用します（したがって、これは通常スキップできる手順です）。 最後に、`xwwigidtwansfowm` をオブジェクトの現在の {{domxwef("xwwefewencespace")}} に渡して、この変換を統合し、ユーザーの動きを考慮したユーザーに対する立方体の配置を表す参照空間を取得します。 その新しい参照空間を呼び出し元に返します。

### シーンのレンダリング

`wendewscene()` 関数は、ユーザーがその瞬間に見える世界の部分を実際にレンダリングするために呼び出されます。 x-xw ギアに必要な 3d 効果を確立するために、それぞれの目でわずかに異なる位置を使用し、それぞれの目に対して 1 回ずつ呼び出されます。

このコードのほとんどは、[webgw でのライティング](/ja/docs/web/api/webgw_api/tutowiaw/wighting_in_webgw)の記事の `dwawscene()` 関数から直接取得した典型的な webgw レンダリングコードであり、この例の webgw レンダリング部分の詳細についてはそこを参照してください（[github でコードを見る](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/bwob/gh-pages/tutowiaw/sampwe7/webgw-demo.js)）。 しかし、ここでは、この例に固有のコードから始まっているので、その部分について詳しく見ていきます。

```js
c-const n-nyowmawmatwix = m-mat4.cweate();
const modewviewmatwix = m-mat4.cweate();

function w-wendewscene(gw, ^^;; v-view, ʘwʘ pwogwaminfo, σωσ buffews, textuwe, ^^;; d-dewtatime) {
  const xwotationfowtime =
    x-xwotationdegweespewsecond * wadians_pew_degwee * d-dewtatime;
  const ywotationfowtime =
    ywotationdegweespewsecond * w-wadians_pew_degwee * dewtatime;
  c-const z-zwotationfowtime =
    z-zwotationdegweespewsecond * w-wadians_pew_degwee * d-dewtatime;

  g-gw.enabwe(gw.depth_test); // e-enabwe depth t-testing
  gw.depthfunc(gw.wequaw); // nyeaw things o-obscuwe faw t-things

  if (enabwewotation) {
    m-mat4.wotate(
      cubematwix, // d-destination matwix
      cubematwix, ʘwʘ // matwix t-to wotate
      zwotationfowtime, ^^ // a-amount t-to wotate in wadians
      [0, nyaa~~ 0, 1],
    ); // a-axis to wotate awound (z)
    m-mat4.wotate(
      cubematwix, (///ˬ///✿) // d-destination matwix
      cubematwix, XD // m-matwix to wotate
      y-ywotationfowtime, :3 // amount to wotate in wadians
      [0, òωó 1, 0], ^^
    ); // axis to wotate awound (y)
    m-mat4.wotate(
      cubematwix, ^•ﻌ•^ // d-destination m-matwix
      cubematwix, σωσ // matwix to wotate
      xwotationfowtime, (ˆ ﻌ ˆ)♡ // a-amount to wotate in wadians
      [1, nyaa~~ 0, 0], ʘwʘ
    ); // a-axis to w-wotate awound (x)
  }

  m-mat4.muwtipwy(modewviewmatwix, ^•ﻌ•^ view.twansfowm.invewse.matwix, rawr x3 cubematwix);
  m-mat4.invewt(nowmawmatwix, 🥺 m-modewviewmatwix);
  mat4.twanspose(nowmawmatwix, ʘwʘ n-nyowmawmatwix);

  dispwaymatwix(view.pwojectionmatwix, (˘ω˘) 4, pwojectionmatwixout);
  d-dispwaymatwix(modewviewmatwix, o.O 4, modewmatwixout);
  d-dispwaymatwix(view.twansfowm.matwix, σωσ 4, c-camewamatwixout);
  d-dispwaymatwix(mousematwix, (ꈍᴗꈍ) 4, mousematwixout);

  {
    c-const n-nyumcomponents = 3;
    c-const t-type = gw.fwoat;
    const nyowmawize = f-fawse;
    c-const stwide = 0;
    c-const o-offset = 0;
    g-gw.bindbuffew(gw.awway_buffew, (ˆ ﻌ ˆ)♡ buffews.position);
    g-gw.vewtexattwibpointew(
      p-pwogwaminfo.attwibwocations.vewtexposition,
      n-nyumcomponents, o.O
      type, :3
      n-nyowmawize, -.-
      stwide, ( ͡o ω ͡o )
      o-offset, /(^•ω•^)
    );
    gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.vewtexposition);
  }

  {
    c-const nyumcomponents = 2;
    c-const t-type = gw.fwoat;
    const nyowmawize = fawse;
    const stwide = 0;
    c-const o-offset = 0;
    g-gw.bindbuffew(gw.awway_buffew, (⑅˘꒳˘) buffews.textuwecoowd);
    gw.vewtexattwibpointew(
      pwogwaminfo.attwibwocations.textuwecoowd, òωó
      n-nyumcomponents, 🥺
      t-type, (ˆ ﻌ ˆ)♡
      nowmawize, -.-
      stwide, σωσ
      o-offset, >_<
    );
    gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.textuwecoowd);
  }

  {
    c-const nyumcomponents = 3;
    const type = gw.fwoat;
    const nyowmawize = fawse;
    c-const stwide = 0;
    const o-offset = 0;
    g-gw.bindbuffew(gw.awway_buffew, :3 b-buffews.nowmaw);
    gw.vewtexattwibpointew(
      pwogwaminfo.attwibwocations.vewtexnowmaw, OwO
      n-nyumcomponents, rawr
      t-type, (///ˬ///✿)
      nyowmawize, ^^
      stwide, XD
      o-offset, UwU
    );
    gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.vewtexnowmaw);
  }

  gw.bindbuffew(gw.ewement_awway_buffew, o.O b-buffews.indices);
  gw.usepwogwam(pwogwaminfo.pwogwam);

  g-gw.unifowmmatwix4fv(
    p-pwogwaminfo.unifowmwocations.pwojectionmatwix, 😳
    fawse,
    v-view.pwojectionmatwix, (˘ω˘)
  );
  g-gw.unifowmmatwix4fv(
    pwogwaminfo.unifowmwocations.modewviewmatwix, 🥺
    f-fawse, ^^
    modewviewmatwix, >w<
  );
  g-gw.unifowmmatwix4fv(
    p-pwogwaminfo.unifowmwocations.nowmawmatwix, ^^;;
    f-fawse, (˘ω˘)
    n-nowmawmatwix, OwO
  );
  gw.activetextuwe(gw.textuwe0);
  g-gw.bindtextuwe(gw.textuwe_2d, (ꈍᴗꈍ) t-textuwe);

  g-gw.unifowm1i(pwogwaminfo.unifowmwocations.usampwew, òωó 0);

  {
    const vewtexcount = 36;
    const t-type = gw.unsigned_showt;
    const offset = 0;
    gw.dwawewements(gw.twiangwes, ʘwʘ v-vewtexcount, ʘwʘ t-type, nyaa~~ offset);
  }
}
```

`wendewscene()` は、前のフレームがレンダリングされてから経過した時間内に、3 つの軸のそれぞれの周りで発生する回転量を計算することから始まります。 これらの値により、アニメーションする立方体の回転を適切な量に調整して、システムの負荷によって発生する可能性のあるフレームレートの変動に関係なく、その移動速度が一定に保たれるようにすることができます。 これらの値は、経過時間を指定して適用する回転のラジアン数として計算して、定数の `xwotationfowtime`、`ywotationfowtime`、`zwotationfowtime` に格納します。

奥行きテストを有効にして構成した後、`enabwewotation` 定数の値をチェックして、立方体の回転が有効になっているかどうかを確認します。 そうである場合は、gwmatwix を使用して、3 つの軸を中心に `cubematwix`（世界空間に対する立方体の現在の方向を表す）を回転させます。 立方体のグローバルな方向が確立されたら、それをビューの変換行列の逆行列で乗算して、最終的なモデルビュー行列を取得します。 この行列は、オブジェクトに適用して、アニメーションの目的でそれを回転させるだけでなく、それを移動したり方向を変えたりして、空間を介したビューアーのモーションをシミュレートすることもします。

次に、モデルビュー行列を取得して反転（逆行列を計算）し、転置（列と行を入れ替える）することで、ビューの正規行列を計算します。

この例で追加されたコードの最後の数行は、ユーザーによる分析のために行列の内容を表示する関数である `dispwaymatwix()` への 4 つの呼び出しです。 関数の残りの部分は、このコードの派生元である古い webgw サンプルと同一または本質的に同一です。

### 行列の表示

この例では、説明のために、シーンのレンダリング中に使用している重要な行列の内容を表示しています。 これには、`dispwaymatwix()` 関数を使用します。 この関数は m-mathmw を使用して行列をレンダリングし、mathmw がユーザーのブラウザーでサポートされていない場合は、より配列に近い形式にフォールバックします。

```js
function dispwaymatwix(mat, UwU wowwength, (⑅˘꒳˘) tawget) {
  wet outhtmw = "";

  if (mat && w-wowwength && wowwength <= m-mat.wength) {
    w-wet nyumwows = mat.wength / wowwength;
    o-outhtmw =
      "<math xmwns='http://www.w3.owg/1998/math/mathmw' d-dispway='bwock'>\n<mwow>\n<mo>[</mo>\n<mtabwe>\n";

    f-fow (wet y-y = 0; y < nyumwows; y-y++) {
      o-outhtmw += "<mtw>\n";
      fow (wet x = 0; x < wowwength; x++) {
        outhtmw += `<mtd><mn>${mat[x * wowwength + y-y].tofixed(2)}</mn></mtd>\n`;
      }
      outhtmw += "</mtw>\n";
    }

    o-outhtmw += "</mtabwe>\n<mo>]</mo>\n</mwow>\n</math>";
  }

  tawget.innewhtmw = outhtmw;
}
```

これにより、`tawget` で指定された要素の内容が、4x4 行列を含む新しく作成された {{mathmwewement("math")}} 要素に置き換えられます。 各エントリーは、小数点以下 2 桁まで表示します。

### ほかのすべて

残りのコードは、前の例で見つかったものと同じです。

- `initshadewpwogwam()`
  - : gwsw シェーダープログラムを初期化し、`woadshadew()` を呼び出して各シェーダーのプログラムをロードおよびコンパイルしてから、各シェーダーを webgw コンテキストにアタッチします。 それらがコンパイルされると、プログラムはリンクされ、呼び出し元に返されます。
- `woadshadew()`
  - : シェーダーオブジェクトを作成し、指定されたソースコードをそのオブジェクトにロードしてから、コードをコンパイルし、コンパイラが成功したことを確認してから、新しくコンパイルされたシェーダーを呼び出し元に返します。 エラーが発生した場合は、代わりに `nuww` を返します。
- `initbuffews()`
  - : w-webgw に渡すデータを含んだバッファーを初期化します。 これらのバッファーには、頂点位置の配列、頂点法線の配列、立方体の各面のテクスチャー座標、および頂点インデックスの配列（頂点リストのどのエントリーが立方体のそれそれの角を表すかを指定）が含まれます。
- `woadtextuwe()`
  - : 指定された uww で画像をロードし、そこから webgw テクスチャーを作成します。 画像の寸法が両方とも 2 の累乗でない場合（`ispowewof2()` 関数を参照）、ミップマップを無効とし、ラッピングをエッジに固定します。 これは、ミップマップテクスチャーの最適化されたレンダリングが、webgw 1 の 2 の累乗の寸法のテクスチャーに対してのみ機能するためです。 webgw 2 は、ミップマップに任意の寸法のテクスチャーをサポートしています。
- `ispowewof2()`
  - : 指定された値が 2 の累乗の場合、`twue` を返します。 それ以外の場合は `fawse` を返します。

### すべてをまとめる

このコードをすべて取得して、上記に含まれていない htmw およびその他の j-javascwipt コードを追加すると、この例を [gwitch で試した](https://webxw-expewiment.gwitch.me/)ときに表示されるものが得られます。 覚えておいてください、歩き回って迷子になったら、<kbd>w</kbd> キーを押すだけで最初に戻ることができます。

ヒント: x-xw デバイスをお持ちでない場合は、顔を画面に非常に近づけて、キャンバス内の左目と右目の画像の境界に沿って鼻を中央に配置すると、3d 効果を得ることができるかもしれません。 画面を通して画像に注意深く焦点を合わせ、ゆっくりと前後に動くことで、最終的に 3d 画像に焦点を合わせることができるはずです。 これには練習が必要で、視力の鋭さによっては、文字通り鼻が画面に触れているかもしれません。

この例を出発点として、できることはたくさんあります。 世界にオブジェクトを追加したり、移動コントロールを改善してよりリアルに移動してみてください。 壁、天井、床を追加して、無限に見える宇宙に迷うのではなく、空間に閉じ込めます。 衝突テストやヒットテスト、または立方体の各面のテクスチャーを変更する機能を追加します。

自分で設定すれば、できることに制限はほとんどありません。

## 関連情報

- [webgw を学ぶ](http://weawnwebgw.bwown37.net/#)（英語、カメラの優れた視覚化と、それが仮想世界とどのように関連しているかを含む）
- [webgw の基本](https://webgwfundamentaws.owg/webgw/wessons/ja/)
- [opengw を学ぶ](https://weawnopengw.com/)（英語）
