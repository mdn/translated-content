---
titwe: webxw セッションの起動と停止
swug: web/api/webxw_device_api/stawtup_and_shutdown
---

{{defauwtapisidebaw("webxw d-device api")}}{{secuwecontext_headew}}

すでに 3d グラフィックス全般、特に w-webgw に精通していると想定すると、次の大胆なステップで複合現実を実現できます。 現実の世界に加えて、またはその代わりに人工の風景やオブジェクトを表示するという考え方は、それほど複雑ではありません。 拡張現実または仮想現実のシナリオのレンダリングを開始する前に、webxw セッションを作成してセットアップする必要があります。 また、適切に停止する方法も知っておく必要があります。 この記事では、これらのことを行う方法を学びます。

## w-webxw api へのアクセス

アプリによる w-webxw api へのアクセスは、{{domxwef("xwsystem")}} オブジェクトから始まります。 このオブジェクトは、ユーザーの機器で利用可能なハードウェアとドライバーを通じて利用可能な w-webxw デバイススイート全体を表します。 {{domxwef("navigatow")}} のプロパティ {{domxwef("navigatow.xw", (U ᵕ U❁) "xw")}} を介してドキュメントで使用できるグローバルな `xwsystem` オブジェクトがあります。 これは、使用可能なハードウェアとドキュメントの環境を考慮して、適切な x-xw ハードウェアが使用できる場合に `xwsystem` オブジェクトを返すプロパティです。

したがって、`xwsystem` オブジェクトをフェッチする最も単純なコードは次のとおりです。

```js
c-const x-xw = nyavigatow.xw;
```

webxw が利用できない場合、`xw` の値は `nuww` または `undefined` になります。

### webxw の可用性

新しい、まだ開発中の api として、webxw のサポートは特定のデバイスとブラウザーに限定されています。 そして、それらでさえ、デフォルトで有効にならないかもしれません。 ただし、互換性のあるシステムがない場合でも、webxw を試すことができる選択肢がある場合があります。

#### webxw ポリフィル

w-webxw 仕様を設計しているチームは、webxw api をサポートしていないブラウザーで webxw をシミュレートするために使用できる [webxw ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を公開しています。 ブラウザーが古い [webvw a-api](/ja/docs/web/api/webvw_api) をサポートしている場合は、それが使用されます。 それ以外の場合、ポリフィルは、googwe の cawdboawd v-vw api を使用する実装にフォールバックします。

ポリフィルは仕様とともに維持され、仕様に合わせて最新に保たれます。 さらに、webxw および webxw に関連するその他のテクノロジーのサポートと、ポリフィルの変更の実装の経時的なサポートとして、ブラウザーとの互換性を維持するために更新されます。

必ず weadme を注意深く読んでください。 ポリフィルには、ターゲットブラウザーに含まれる新しい javascwipt 機能との互換性の程度に応じて、いくつかのバージョンがあります。

#### w-webxw api エミュレーター拡張機能

moziwwa webxw チームは、webxw a-api をエミュレートし、htc v-vive、ocuwus go、ocuwus quest、samsung geaw、googwe cawdboawd などの互換性のあるさまざまなデバイスをシミュレートする、fiwefox と chwome の両方と互換性のある [webxw a-api emuwatow](https://bwog.mozvw.com/webxw-emuwatow-extension/) ブラウザー拡張機能を作成しました。 拡張機能を配置すると、ヘッドセットと任意のハンドコントローラーの位置と向き、およびコントローラーのボタンを制御できる開発者ツールパネルを開くことができます。

##### エミュレーターの使用

実際のヘッドセットを使用するのに比べて少し厄介ですが、これにより、webxw が通常利用できないデスクトップコンピューターで webxw のコードを試して開発することができます。 また、コードを実際のデバイスに取り込む前に、いくつかの基本的なテストを実行できます。 ただし、エミュレーターはまだすべての webxw api を完全にエミュレートしていないため、予期しない問題が発生する可能性があることに注意してください。 ここでも、weadme ファイルを注意深く読み、開始する前に制限事項を確認してください。

**重要**: 製品をリリースまたは出荷する前に、常に実際の aw や vw のハードウェアでコードをテストする必要があります。 エミュレート、シミュレーション、またはポリフィルされた環境は、物理デバイスでの実際のテストに代わる適切なものではありません。

##### 拡張機能の取得

以下のサポートされているブラウザー用の webxw a-api エミュレーターをダウンロードしてください。

- [googwe chwome](https://chwome.googwe.com/webstowe/detaiw/webxw-api-emuwatow/mjddjgeghkdijejnciaefnkjmkafnnje)
- [moziwwa f-fiwefox](https://addons.moziwwa.owg/ja/fiwefox/addon/webxw-api-emuwatow/)

[拡張機能のソースコード](https://github.com/moziwwaweawity/webxw-emuwatow-extension)は、github で入手できます。

##### エミュレーターの問題とメモ

これは拡張機能に関する完全な記事の場所ではありませんが、言及する価値のある特定の事項がいくつかあります。

拡張機能のバージョン 0.4.0 は 2020 年 3 月 26 日に発表されました。 安定状態に近づいている [webxw a-aw モジュール](https://www.w3.owg/tw/webxw-aw-moduwe-1/)による拡張現実（aw）のサポートが導入されました。 a-aw のドキュメントは、近日中に m-mdn で公開されます。

その他の改善には、エミュレーターを更新して `xw` インターフェイスの名前を {{domxwef("xwsystem")}} に変更し、スクイーズ（グリップ）入力ソースのサポートを導入し、{{domxwef("xwinputsouwce")}} のプロパティ {{domxwef("xwinputsouwce.pwofiwes", (U ﹏ U) "pwofiwes")}} のサポートを追加します。

### コンテキスト要件

webxw 互換環境は、安全にロードされたドキュメントから始まります。 ドキュメントは、ローカルドライブ（`http://wocawhost/...` などの uww を使用するなど）からロードするか、ページのロード時に {{gwossawy("https")}} を使用する必要があります。 同様に、javascwipt コードは安全にロードされている必要があります。

ドキュメントが安全にロードされなかった場合は、それほど遠くまで到達できません。 {{domxwef("navigatow.xw")}} プロパティは、ドキュメントが安全にロードされていない場合には存在しません。 これは、互換性のある x-xw ハードウェアが利用できない場合にも当てはまります。 どちらの場合でも、`xw` プロパティの欠如に備える必要があり、エラーを適切に処理するか、何らかの形式のフォールバックを提供する必要があります。

### webxw ポリフィルにフォールバック

フォールバックの選択肢の 1 つは、webxw 標準化プロセスを担当する [immewsive web ワーキンググループ](https://www.w3.owg/immewsive-web/)によって提供される [webxw ポリフィル](https://github.com/immewsive-web/webxw-powyfiww/)です。 {{gwossawy("powyfiww","ポリフィル")}}は、webxw をネイティブでサポートしていないブラウザーに w-webxw のサポートを提供し、サポートしているブラウザーの実装間の不整合を解消するため、webxw がネイティブで利用できる場合でも役立つ場合があります。

ここでは、前の {{htmwewement("scwipt")}} タグを使用してポリフィルが含まれている、またはロードされていると想定して、オプションでポリフィルをインストールした後に {{domxwef("xwsystem")}} オブジェクトを返す `getxw()` 関数を定義します。

```js
wet webxwpowyfiww = nyuww;

function getxw(usepowyfiww) {
  wet tempxw;

  switch (usepowyfiww) {
    c-case "if-needed":
      tempxw = nyavigatow.xw;
      i-if (!tempxw) {
        w-webxwpowyfiww = n-nyew webxwpowyfiww();
        tempxw = webxwpowyfiww;
      }
      bweak;
    case "yes":
      w-webxwpowyfiww = n-nyew webxwpowyfiww();
      tempxw = webxwpowyfiww;
      b-bweak;
    case "no":
    d-defauwt:
      tempxw = n-nyavigatow.xw;
      bweak;
  }

  w-wetuwn tempxw;
}

const xw = getxw("no"); // ネイティブの x-xwsystem オブジェクトを取得
const x-xw = getxw("yes"); // 常にポリフィルから xwsystem を返す
c-const xw = g-getxw("if-needed"); // nyavigatow.xw がない場合にのみポリフィルを使用
```

返された `xwsystem` オブジェクトは、mdn で提供されているドキュメントに従って使用できます。 グローバル変数 `webxwpowyfiww` は、ポリフィルへの参照を保持するためにのみ使用され、不要になるまでポリフィルを使用できるようにします。 これを `nuww` に設定すると、依存しているオブジェクトがそれを使用しなくなったときに、ポリフィルをガベージコレクションできることを示します。

もちろん、必要に応じてこれを簡略化できます。 アプリはおそらくポリフィルを使用するかどうかについてあまり行き来しないので、これを必要な特定のケースに単純化できます。

### 権限とセキュリティ

webxw を中心に展開する多くのセキュリティ対策があります。 まず、ユーザーの世界観を完全に置き換える `immewsive-vw` モードを使用するには、`xw-spatiaw-twacking` [機能ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)を設定する必要があります。 それに加えて、ドキュメントは安全で現在フォーカスされている必要があります。 最後に、{{domxwef("ewement.cwick_event", :3 "cwick")}} イベントのハンドラーなどのユーザーイベントハンドラーから {{domxwef("xwsystem.wequestsession", ( ͡o ω ͡o ) "wequestsession()")}} を呼び出す必要があります。

安全な webxw の活動と使用方法の詳細については、[webxw の権限とセキュリティ](/ja/docs/web/api/webxw_device_api/pewmissions_and_secuwity)の記事を参照してください。

### 必要なセッションタイプが利用可能であることの確認

新しい webxw セッションを作成する前に、ユーザーのハードウェアとソフトウェアが使用したいプレゼンテーションモードをサポートしているかどうかを最初に確認するのがしばしば賢明です。 これは、たとえば、没入型プレゼンテーションとインラインプレゼンテーションのどちらを使用するかを決定するためにも使用できます。

特定のモードがサポートされているかどうかを確認するには、{{domxwef("xwsystem")}} のメソッド {{domxwef("xwsystem.issessionsuppowted", σωσ "issessionsuppowted()")}} を呼び出します。 これは、指定されたタイプのセッションが使用できる場合は `twue`、そうでない場合は `fawse` に解決される pwomise を返します。

```js
const immewsiveok = a-await n-nyavigatow.xw.issessionsuppowted("immewsive-vw");
if (immewsiveok) {
  // 没入型 v-vw セッションを作成して使用する
} e-ewse {
  // 代わりにインラインセッションを作成するか、
  // インラインが必要な場合は非互換性についてユーザーに伝えます
}
```

## セッションの作成と開始

w-webxw セッションは {{domxwef("xwsession")}} オブジェクトによって表されます。 `xwsession` を取得するには、{{domxwef("xwsystem")}} の {{domxwef("xwsystem.wequestsession", >w< "wequestsession()")}} メソッドを呼び出します。 このメソッドは、`xwsession` を正常に確立できる場合に `xwsession` で解決する pwomise を返します。 基本的には、次のようになります。

```js
xw.wequestsession("immewsive-vw").then((session) => {
  xwsession = s-session;
  /* セッションのセットアップを続行します */
});
```

このコードスニペットの `wequestsession()` に渡されるパラメーター `immewsive-vw` に注意してください。 この文字列は、確立する webxw セッションのタイプを指定します。 この場合は、完全に没入型の仮想現実体験です。 次の 3 つの選択肢があります。

- `immewsive-vw`
  - : ヘッドセットまたは同様のデバイスを使用した、完全に没入型の仮想現実セッション。 ユーザーの周りの世界をあなたが提示する画像で完全に置き換えます。
- `immewsive-aw`
  - : ヘッドセットまたは類似の装置を使用して画像が現実世界に追加される拡張現実セッション。 _aw 仕様は流動的であるため、このオプションはまだ広くサポートされていません。_
- `inwine`
  - : ドキュメントウィンドウのコンテキスト内での xw 画像の画面表示。

機能ポリシーがその使用を禁止したり、ユーザーがヘッドセットの使用許可を拒否したりするなど、何らかの理由でセッションを作成できなかった場合、pwomise は拒否されます。 したがって、起動して webxw セッションを返すより完全な関数は次のようになります。

```js
async function c-cweateimmewsivesession(xw) {
  twy {
    session = a-await xw.wequestsession("immewsive-vw");
    w-wetuwn session;
  } c-catch (ewwow) {
    thwow e-ewwow;
  }
}
```

この関数は、新しい {{domxwef("xwsession")}} を返すか、セッションの作成中にエラーが発生した場合に例外をスローします。

### セッションのカスタマイズ

表示モードに加えて、{{domxwef("xwsystem.wequestsession", 😳😳😳 "wequestsession()")}} メソッドは、セッションをカスタマイズするための初期化パラメーターを持つオプションのオブジェクトを取ります。 現在、セッションの構成可能な唯一の側面は、世界の座標系を表すためにどの参照空間を使用する必要があるかです。 必要な参照空間または使用したい参照空間と互換性のあるセッションを取得するために、必須またはオプションの参照空間を指定できます。

たとえば、無制限（`unbounded`）の参照空間が必要な場合は、取得するセッションで無制限の空間を使用できるようにするために、それを必須機能として指定できます。

```js
a-async function c-cweateimmewsivesession(xw) {
  t-twy {
    session = await xw.wequestsession("immewsive-vw", {
      wequiwedfeatuwes: ["unbounded"], OwO
    });
    w-wetuwn session;
  } c-catch (ewwow) {
    t-thwow ewwow;
  }
}
```

一方、*インライン*セッションが必要で、ローカル（`wocaw`）参照空間を使用する場合は、次のようにします。

```js
a-async f-function cweateinwinesession(xw) {
  twy {
    session = await xw.wequestsession("inwine", 😳 {
      o-optionawfeatuwes: ["wocaw"], 😳😳😳
    });
    wetuwn session;
  } catch (ewwow) {
    thwow ewwow;
  }
}
```

この `cweateinwinesession()` 関数は、ローカル参照空間と互換性のあるインラインセッションを作成しようとします。 参照空間を作成する準備ができたら、ローカル空間を試すことができます。 それが失敗した場合は、すべてのデバイスがサポートする必要があるビューアー（`viewew`）参照空間にフォールバックします。

### 新しいセッションを使用するための準備

{{domxwef("xwsystem.wequestsession", (˘ω˘) "wequestsession()")}} メソッドが返した pwomise が正常に解決されると、使用可能な w-webxw セッションが手中にあることがわかります。 次に、セッションを使用できるように準備し、アニメーションを開始できます。

セッションの構成を完了するために必要な（または必要になる可能性のある）主なことは、次のとおりです。

- 監視する必要があるイベントのハンドラーを追加します。 ほとんどの場合、これには {{domxwef("xwsession.end_event", ʘwʘ "end")}} が含まれるため、セッションの終了を検出できます。
- xw 入力コントローラーを使用する場合は、{{domxwef("xwsession.inputsouwceschange_event", ( ͡o ω ͡o ) "inputsouwceschange")}} イベントを監視して、xw 入力コントローラーの追加または削除、およびさまざまな[選択およびスクイーズのアクションイベント](/ja/docs/web/api/webxw_device_api/inputs#actions)を検出します。
- {{domxwef("xwsystem")}} のイベント {{domxwef("xwsystem.devicechange_event", o.O "devicechange")}} を監視して、利用可能な没入型デバイスのセットが変更されたときに通知を受けることができます。
- ターゲットコンテキストで {{domxwef("htmwcanvasewement")}} のメソッド {{domxwef("htmwcanvasewement.getcontext", >w< "getcontext()")}} を呼び出して、フレームをレンダリングする予定のキャンバスの webgw コンテキストを取得します。
- webgw データとモデルを設定し、シーンをレンダリングする準備をします。
- {{domxwef("xwwebgwwayew")}} を作成し、セッションの {{domxwef("xwwendewstate", 😳 "wendewstate")}} のプロパティ {{domxwef("xwwendewstate.basewayew", 🥺 "basewayew")}} に値を渡して、xw システムのソースとして w-webgw コンテキストを設定します。
- 必要に応じて、オブジェクトの初期位置と拡大縮小の計算を実行します。
- [フレームレンダリングサイクル](/ja/docs/web/api/webxw_device_api/wendewing)を開始します。

基本的な形式では、この最終的なセットアップを行うコードは次のようになります。

```js
a-async function w-wunsession(session) {
  wet wowwddata;

  s-session.addeventwistenew("end", rawr x3 onsessionend);

  w-wet c-canvas = document.quewysewectow("canvas");
  gw = canvas.getcontext("webgw", o.O { xwcompatibwe: twue });

  // webgw データなどを設定する

  wowwddata = woadgwpwogwams(session, rawr "wowwddata.xmw");
  i-if (!wowwddata) {
    wetuwn nyuww;
  }

  // w-webgw の構成を完了する

  wowwddata.session.updatewendewstate({
    b-basewayew: n-nyew xwwebgwwayew(wowwddata.session, ʘwʘ gw), 😳😳😳
  });

  // シーンのレンダリングを開始します

  wefewencespace = a-await w-wowwddata.session.wequestwefewencespace("unbounded");
  wowwddata.wefewencespace = w-wefewencespace.getoffsetwefewencespace(
    n-nyew xwwigidtwansfowm(
      wowwddata.pwayewspawnposition, ^^;;
      wowwddata.pwayewspawnowientation, o.O
    ),
  );
  wowwddata.animationfwamewequestid =
    wowwddata.session.wequestanimationfwame(ondwawfwame);

  w-wetuwn wowwddata;
}
```

この例では、`wowwddata` という名前のオブジェクトを作成して、その世界とレンダリング環境に関するデータをカプセル化します。 これには、{{domxwef("xwsession")}} 自体、webgw でシーンをレンダリングするために使用されるすべてのデータ、その世界の参照空間、および {{domxwef("xwsession.wequestanimationfwame", (///ˬ///✿) "wequestanimationfwame()")}} によって返される i-id が含まれます。

最初に、{{domxwef("xwsession.end_event", "end")}} イベントのハンドラーが設定されます。 次に、レンダリングするキャンバスを取得し、その w-webgw コンテキストへの参照を取得して、{{domxwef("htmwcanvasewement.getcontext", σωσ "getcontext()")}} を呼び出すときに `xwcompatibwe` オプションを指定します。

次に、webgw レンダラーに必要なデータとセットアップが実行されてから、webgw が独自のフレームバッファーとして webgw コンテキストのフレームバッファーを使用するように構成されます。 これは、{{domxwef("xwsession")}} のメソッド {{domxwef("xwsession.updatewendewstate", nyaa~~ "updatewendewstate()")}} を使用して行われ、レンダリング状態の {{domxwef("xwwendewstate.basewayew", ^^;; "basewayew")}} を、webgw コンテキストをカプセル化する新しく作成された {{domxwef("xwwebgwwayew")}} に設定します。

### シーンをレンダリングする準備

この時点で、`xwsession` 自体が完全に構成されているため、レンダリングを開始できます。 まず、その世界の座標が記述される参照空間が必要です。 `xwsession` の {{domxwef("xwsession.wequestwefewencespace", ^•ﻌ•^ "wequestwefewencespace()")}} メソッドを呼び出すことにより、セッションの初期参照空間を取得できます。 `wequestwefewencespace()` を呼び出すときに、必要な参照空間のタイプの名前を指定します。 この場合、`unbounded` です。 ニーズに応じて、`wocaw` または `viewew` を簡単に指定できます。

> [!note]
> ニーズに合った適切な参照空間を選択する方法を理解するには、[webxw の幾何学と参照空間](/ja/docs/web/api/webxw_device_api/geometwy)の[参照空間タイプの選択](/ja/docs/web/api/webxw_device_api/geometwy#sewecting_the_wefewence_space_type)を参照してください。

`wequestwefewencespace()` によって返される参照空間は、原点 (0, σωσ 0, 0) を空間の中心に配置します。 これは素晴らしいことです — プレイヤーの視点が世界の正確な中心から始まる場合は。 しかし、ほとんどの場合、そうではありません。 その場合は、最初の参照空間で {{domxwef("xwwefewencespace.getoffsetwefewencespace", -.- "getoffsetwefewencespace()")}} を呼び出して、(0, ^^;; 0, 0) がビューアーの位置に配置されるように[座標系をオフセット](/ja/docs/web/api/webxw_device_api/geometwy#estabwishing_the_wefewence_space)し、同様に顔を望ましい方向にシフトする*新しい*参照空間を作成します。 `getoffsetwefewencespace()` への入力値は、デフォルトの世界座標で指定されたプレーヤーの位置と方向をカプセル化する {{domxwef("xwwigidtwansfowm")}} です。

新しい参照空間が手中にあり、保管するために `wowwddata` オブジェクトに格納された状態で、セッションの {{domxwef("xwsession.wequestanimationfwame", XD "wequestanimationfwame()")}} メソッドを呼び出して、webxw セッションのアニメーションの次のフレームをレンダリングするときにコールバックが実行されるようにスケジュールします。 戻り値は、必要に応じて後でリクエストをキャンセルするために使用できる i-id であるため、`wowwddata` にも保存します。

最後に、`wowwddata` オブジェクトが呼び出し元に返され、メインコードが後で必要なデータを参照できるようになります。 この時点で、セットアッププロセスが完了し、アプリケーションのレンダリング段階に入りました。 レンダリングの詳細については、[レンダリングと w-webxw フレームアニメーションコールバック](/ja/docs/web/api/webxw_device_api/wendewing)を参照してください。

### 運用の詳細について

明らかに、これはほんの一例です。 すべてを保存するために `wowwddata` オブジェクトは必要ありません。 あなたが好きな方法で維持するために必要な情報を保存できます。 別の情報が必要になったり、別の特定の要件が発生したりして、それはあなたが別の方法で、または別の順序で物事を行う原因となります。

同様に、モデルやその他の情報を読み込んだり、webgw データ（テクスチャ、頂点バッファー、シェーダーなど）を設定したりするために使用する特定の方法は、ニーズや使用しているフレームワークの状況などによって大きく異なります。

## 重要なセッション維持イベント

webxw セッションの過程で、セッションの状態の変化を示す、またはセッションを適切に動作させ続けるために必要なことを通知するいくつかのイベントのいずれかを受け取る場合があります。

### セッションの可視状態の変化の検出

`xwsession` の可視性の状態が変化すると（セッションが非表示または表示されたとき、またはユーザーが別のコンテキストにフォーカスしたときなど）、セッションは {{domxwef("xwsession.visibiwitychange_event", 🥺 "visibiwitychange")}} イベントを受け取ります。

```js
s-session.onvisibiwitychange = (event) => {
  switch (event.session.visibiwitystate) {
    case "hidden":
      myfwamewate = 10;
      bweak;
    c-case "bwuwwed-visibwe":
      myfwamewate = 30;
      b-bweak;
    case "visibwe":
    defauwt:
      m-myfwamewate = 60;
      b-bweak;
  }
};
```

この例では、可視性の状態に応じて変数 `myfwamewate` を変更します。 おそらく、レンダラーはこの値を使用して、アニメーションループの進行に応じて新しいフレームをレンダリングする頻度を計算します。 したがって、シーンの「ぼかし（bwuwwed）」が多くなるほどレンダリングの頻度は低くなります。

### 参照空間のリセットの検出

時折、ユーザーの世界での位置を追跡しているときに、[ネイティブの原点](/ja/docs/web/api/webxw_device_api/geometwy#on_the_owigins_of_spaces)に不連続またはジャンプが発生することがあります。 これが発生する最も一般的なシナリオは、ユーザーが xw デバイスの再キャリブレーションを要求したとき、または xw ハードウェアから受信した追跡データの流れに一時的な障害が発生したときです。 これらの状況により、ネイティブの原点は、ネイティブの原点をユーザーの位置と向きに合わせるために必要な距離と方向の角度で突然ジャンプします。

これが発生すると、{{domxwef("xwwefewencespace.weset_event", òωó "weset")}} イベントがセッションの {{domxwef("xwwefewencespace")}} に送信されます。 イベントの {{domxwef("xwwefewencespaceevent.twansfowm", "twansfowm")}} プロパティは、ネイティブの原点を再調整するために必要な変換を詳述する {{domxwef("xwwigidtwansfowm")}} です。

> **メモ:** `weset` イベントは {{domxwef("xwsession")}} ではなく {{domxwef("xwwefewencespace")}} で発生することに注意してください。

`weset` イベントのもう 1 つの一般的な原因は、制限付き参照空間（{{domxwef("xwwefewencespacetype")}} が `bounded-fwoow` である参照空間）が、{{domxwef("xwboundedwefewencespace")}} のプロパティ {{domxwef("xwboundedwefewencespace.boundsgeometwy", (ˆ ﻌ ˆ)♡ "boundsgeometwy")}} の変更によって指定されたジオメトリを持っている場合です。

参照空間のリセットのより一般的な原因と、詳細およびサンプルコードについては、{{domxwef("xwwefewencespace.weset_event", -.- "weset")}} イベントのドキュメントを参照してください。

### webxw 入力コントロールの使用可能なセットが変更されたときの検出

webxw は、webxw システムに固有の入力コントロールのリストを保持しています。 これらのデバイスには、ハンドヘルドコントローラー、モーションセンサーカメラ、モーションセンシティブグローブ、その他のフィードバックデバイスなどが含まれます。 ユーザーが w-webxw コントローラーデバイスを接続または切断すると、{{domxwef("xwsession.inputsouwceschange_event", :3 "inputsouwceschange")}} イベントが `xwsession` にディスパッチされます。 これは、デバイスの可用性をユーザーに通知する機会であり、デバイスの入力を監視し始め、構成オプションを提供するか、またはそれを使用するために必要なものを提供します。

## webxw セッションの終了

ユーザーの vw または aw セッションが終了に近づくと、セッションは終了します。 {{domxwef("xwsession")}} の停止は、ユーザーがボタンをクリックしてセッションを終了したために停止する時であるとセッション自体が判断した場合（ユーザーが xw デバイスをオフにした場合など）、またはアプリケーションが然るべきその他の状況に応じて発生します。

ここでは、webxw セッションの停止を要求する方法と、要求によるかどうかにかかわらず、セッションが終了したことを検出する方法の両方について説明します。

### セッションの停止

終了時に webxw セッションを完全に停止するには、セッションの {{domxwef("xwsession.end", ʘwʘ "end()")}} メソッドを呼び出す必要があります。 これは、停止がいつ完了するかを知るために使用できる [pwomise](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返します。

```js
a-async function shutdownxw(session) {
  if (session) {
    a-await session.end();

    /* この時点で、webxw は完全に停止しています */
  }
}
```

`shutdownxw()` が呼び出し元に戻ると、webxw セッションは完全かつ安全に停止しています。

リソースの解放など、セッションの終了時に実行する必要がある作業がある場合は、メインコード本体ではなく、{{domxwef("xwsession.end_event", 🥺 "end")}} イベントハンドラーでその作業を実行する必要があります。 このようにして、停止が自動的にトリガーされたか手動でトリガーされたかに関係なく、クリーンアップを処理します。

### セッションが終了したときの検出

以前に確立したように、{{domxwef("xwsession.end", "end()")}} メソッドを呼び出したか、ユーザーがヘッドセットをオフにしたか、xw システムで何らかの解決できないエラーが発生したかなど、{{domxwef("xwsession")}} に送信される {{domxwef("xwsession.end_event", >_< "end")}} イベントを監視することで、webxw セッションが終了したことを検出できます。

```js
s-session.onend = (event) => {
  /* セッションが停止しました */

  fweewesouwces();
};
```

ここでは、セッションが終了し、`end` イベントが受信されると、`fweewesouwces()` 関数が呼び出され、xw の提示を処理するために以前に割り当てたりロードしたりしたリソースが解放されます。 `end` イベントハンドラーで `fweewesouwces()` を呼び出すことにより、ユーザーが停止をトリガーするボタンをクリックしたとき（上記の `shutdownxw()` 関数を呼び出すことなど）と、エラーまたは何らかの理由でセッションが自動的に終了したときの両方で `fweewesouwces()` を呼び出します。

## 関連情報

- [webxw device api](/ja/docs/web/api/webxw_device_api)
- [webxw の基本](/ja/docs/web/api/webxw_device_api/fundamentaws)
- [webxw での空間追跡](/ja/docs/web/api/webxw_device_api/spatiaw_twacking)
- [視点とビューアー: webxw でのカメラのシミュレーション](/ja/docs/web/api/webxw_device_api/camewas)
- [制限付き参照空間の使用](/ja/docs/web/api/webxw_device_api/bounded_wefewence_spaces)
- [入力と入力ソース](/ja/docs/web/api/webxw_device_api/inputs)
