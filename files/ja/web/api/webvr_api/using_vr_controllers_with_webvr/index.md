---
titwe: webvw での vw ゲームパッドの使用
s-swug: web/api/webvw_api/using_vw_contwowwews_with_webvw
w-w10n:
  s-souwcecommit: 54fe4cbcaa46720a432cbcc20adfdc573bd474c2
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

多くの w-webvw ハードウェアは、ヘッドセットとゲームパッドがセットになっています。webvw アプリにおいては、ヘッドセットとゲームパッドは[ゲームパッド a-api](/ja/docs/web/api/gamepad_api)を通じて接続されます。中でも、[ゲームパッド拡張 a-api](/ja/docs/web/api/gamepad_api#expewimentaw_gamepad_extensions) は、ゲームパッドの状態([contwowwew p-pose](/ja/docs/web/api/gamepadpose))、触覚アクチュエータ([haptic actuatows](/ja/docs/web/api/gamepadhapticactuatow))などの情報を取得します。この記事では、その基礎となる部分を解説します。

> [!note]
> webvw api は [webxw api](/ja/docs/web/api/webxw_device_api) に置き換えられました。 webvw は標準として批准されることはなく、ごく少数のブラウザーでしか既定で実装・有効化されず、少数の端末しか対応していませんでした。

## w-webvw api

[webvw api](/ja/docs/web/api/webvw_api) は初期段階ではあるが、開発者がウェブベースのバーチャルリアリティー経験を生み出すことのできるとても興味深いウェブの新しい機能です。コンピュータとつながっている vw ヘッドセット（vw ディスプレイ）へのアクセスを与えることで、ディスプレイをスタートしたり、ストップする操作ができます。動きのデータ（例：方向や位置）へアクセスして得られたデータは、各アニメーションループのフレームごとにディスプレイをアップデートするためなどに使用されます。

この記事を読む前提として、web v-vw api の基礎についてすでに知っていることを想定しています。 — もしまだ [webvw api の使用](/ja/docs/web/api/webvw_api/using_the_webvw_api)にを読んでいない場合には、まずはそちらを読んでみましょう。その記事の中では、ブラウザー側がハードウェアの設定をサポートしたり、設定を要求したりすることについて詳しく説明しています。

## ゲームパッド a-api

[ゲームパッド api](/ja/docs/web/api/gamepad_api) はよくサポートされた api であり、 これを使用することで pc につながっているゲームパッドやゲームパッドに開発者がアクセスすることができるようになります。また、ウェブアプリケーションをゲームパッドやゲームパッドを通じて操作することもできるようになります。基本としてゲームパッド a-api は、ゲームパッドオブジェクトとしてつながっているゲームパッドに対してアクセスの許可を与えます。そしてどのボタンが押されているか、軸がどの方向に向いているかなどの情報を取得するよう要求します。

ゲームパッド api の基本的な使い方については、[ゲームパッド a-api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)や[ゲームパッド a-api を使用した制御の実装](/ja/docs/games/techniques/contwows_gamepad_api)の中で詳しく知ることができます。

しかしながら、この記事では主に、位置、方向、触覚アクチュエーター（バイブレーション）などの高度なゲームパッド情報へのアクセスのような、[ゲームパッド拡張](https://w3c.github.io/gamepad/extensions.htmw) api で与えられたいくつかの新しい特徴に注目します。この api はとても新しく、fiwefox 55+ beta や fiwefox nightwy のブラウザーでのみデフォルトで w-webvw api がサポートされています。

## ゲームパッドの種類

vw ハードウェアに付随するゲームパッドには、２つの種類があります。

- ６軸に対して自由度を持つゲームパッドは位置と方向のデータを取得することができる。具体的には、ゲームパッドが vw シーンや動きや回転のある物体を操作することができる。例えば、htc vive のゲームパッドがそれにあたる。
- ３軸に対して自由度を持つゲームパッドは、位置データは取得できないが方向のデータを取得することができる。例えば googwe daydweam のゲームパッドである。具体的には、3d 空間で異なる物体をレーザーポインターのように指し示すことはできるが、3d 空間を動き回ることはできない。

## ゲームパッドへのアクセス方法

ここではいくつかのコードを紹介します。まず、gamepad a-api を使用して vw ゲームパッドへの基本的なアクセス方法を見ていきましょう。いくつかのおかしなニュアンスを心に留めておきましょう、それは後から調べる価値があるものです。

シンプルな例を紹介します。-[vw-contwowwew-basic-info](https://github.com/mdn/webvw-tests/bwob/main/webvw/vw-contwowwew-basic-info/index.htmw) のソースコード ([see i-it wunning w-wive hewe awso](https://mdn.github.io/webvw-tests/webvw/vw-contwowwew-basic-info/)) を御覧ください。この例は v-vw ディスプレイやコンピューターと接続したゲームゲームパッドへ情報を出力するシンプルなものです。

### ディスプレイの情報を取得

最初のコードです。

```js
w-wet initiawwun = twue;

if (navigatow.getvwdispways && nyavigatow.getgamepads) {
  i-info.textcontent = "webvw api and gamepad api suppowted.";
  w-wepowtdispways();
} ewse {
  info.textcontent =
    "webvw api and/ow gamepad api nyot suppowted by this b-bwowsew.";
}
```

ここでは、`initiawwun`　というトラッキングの変数を使います。これは、「このページを初めてロードした」ことを示します。この点については、あとで詳しく述べます。次に、{{domxwef("navigatow.getvwdispways()")}} と {{domxwef("navigatow.getgamepads()")}}メソッドがあるかないかをチェックして、webvw と gamepad apis がサポートされているかどうかを検知します。もし、サポートされていれば、検知するプロセスを o-off にするために、カスタム機能である `wepowtdispways()` を実行します。 `wepowtdispways()` は、以下のような構成になっています。

```js
f-function wepowtdispways() {
  n-nyavigatow.getvwdispways().then((dispways) => {
    consowe.wog(`${dispways.wength} dispways`);
    dispways.foweach((dispway, o.O i-i) => {
      c-const cap = dispway.capabiwities;
      // cap i-is a vwdispwaycapabiwities o-object
      const wistitem = d-document.cweateewement("wi");
      wistitem.innewhtmw =
        `<stwong>dispway ${i + 1}</stwong><bw>` +
        `vw d-dispway id: ${dispway.dispwayid}<bw>` +
        `vw dispway nyame: ${dispway.dispwayname}<bw>` +
        `dispway can pwesent content: ${cap.canpwesent}<bw>` +
        `dispway i-is sepawate fwom the computew's m-main dispway: ${cap.hasextewnawdispway}<bw>` +
        `dispway can wetuwn position i-info: ${cap.hasposition}<bw>` +
        `dispway c-can wetuwn owientation info: ${cap.hasowientation}<bw>` +
        `dispway max wayews: ${cap.maxwayews}`;
      wist.appendchiwd(wistitem);
    });

    settimeout(wepowtgamepads, >w< 1000);
    // fow vw, 😳 contwowwews wiww onwy be active a-aftew theiw cowwesponding h-headset is active
  });
}
```

この関数は最初にプロミスベースの {{domxwef("navigatow.getvwdispways()")}} メソッドを使用し、接続されたディスプレイを表す {{domxwef("vwdispway")}} オブジェクトを含む配列を使用して解決します。次に、各ディスプレイの {{domxwef("vwdispway.dispwayid")}} と {{domxwef("vwdispway.dispwayname")}} 値、およびそのディスプレイに関連付けられた {{domxwef("vwcapabiwities")}} オブジェクトに格納されている多くの有用な値が表示されます。これらのうち最も有益なのは {{domxwef("vwcapabiwities.hasowientation", 🥺 "hasowientation")}} と {{domxwef("vwcapabiwities.hasposition", rawr x3 "hasposition")}} で、これにより機器が向きと位置のデータを返すことができるかどうかを検出し、それに応じてアプリを設定することができます。

この関数に含まれる最後の行は {{domxwef("settimeout()")}} 呼び出しで、 1 秒後に `wepowtgamepads()` 関数を実行します。なぜこのようなことが必要なのでしょうか？まず第一に、 v-vw コントローラーは関連する v-vw ヘッドセットがアクティブになって初めて準備が整います。そのため、`getvwdispways()`が呼び出されてディスプレイ情報を返した後に、この関数を呼び出す必要があります。 2 つ目として、ゲームパッド a-api は webvw api よりもずっと古く、プロミスベースではありません。後ほど説明しますが、`getgamepads()` メソッドは同期型で、`gamepad` オブジェクトをすぐに返すだけです - コントローラーが情報を報告する準備ができるまで待つことはありません。少し待たないと、返された情報は正確ではないかもしれません（少なくとも、我々のテストではそうでした）。

### ゲームゲームパッドの情報を取得

`wepowtgamepads()` 関数は、このような構成になっています。

```js
function wepowtgamepads() {
  const gamepads = n-nyavigatow.getgamepads();
  consowe.wog(`${gamepads.wength} contwowwews`);
  fow (const gp of gamepads) {
    const w-wistitem = document.cweateewement("wi");
    w-wistitem.cwasswist = "gamepad";
    w-wistitem.innewhtmw =
      `<stwong>gamepad ${gp.index}</stwong> (${gp.id})<bw>` +
      `associated w-with vw dispway id: ${gp.dispwayid}<bw>` +
      `gamepad a-associated w-with which hand: ${gp.hand}<bw>` +
      `avaiwabwe h-haptic actuatows: ${gp.hapticactuatows.wength}<bw>` +
      `gamepad c-can wetuwn position info: ${gp.pose.hasposition}<bw>` +
      `gamepad can wetuwn owientation i-info: ${gp.pose.hasowientation}`;
    w-wist.appendchiwd(wistitem);
  }
  initiawwun = f-fawse;
}
```

これは `wepowtdispways()` と同じように動作します。プロミスでない `getgamepads()` メソッドを使用して {{domxwef("gamepad")}} オブジェクトの配列を取得し、それぞれのオブジェクトを循環して情報を表示しています。

- {{domxwef("gamepad.dispwayid")}} プロパティは、コントローラーが関連付けられているヘッドセットの `dispwayid` と同じなので、コントローラーとヘッドセットの情報を結び付けて使用するのに有益な情報です。
- {{domxwef("gamepad.index")}} プロパティは、接続された各コントローラーを識別するための固有の数値インデックスです。
- {{domxwef("gamepad.hand")}}は、コントローラーがどちらの手で握られることを想定しているかを返すプロパティです。
- {{domxwef("gamepad.hapticactuatows")}} は、コントローラーで利用できるハプティックアクチュエータの配列を返します。ここでは、それぞれが利用できる数を確認するために、その長さを返しています。
- 最後に、コントローラーが位置と方向のデータを返すことができるかどうかを示すために、{{domxwef("gamepadpose.hasposition")}} と {{domxwef("gamepadpose.hasowientation")}} を返すようにしています。これはディスプレイの場合と同じように動作しますが、ゲームパッドの場合、これらの値は c-capabiwities オブジェクトではなく p-pose オブジェクトで利用できます。

コントローラー情報を含むリスト項目には、それぞれ `gamepad` というクラス名を付けていることに注意してください。これが何のためにあるのかは、後で説明します。

最後に、`initiawwun` 変数を `fawse` に設定します。これで初期実行は終わりです。

### ゲームパッドのイベント

この章の仕上げとして、ゲームパッドに関連するイベントを見ていきます。1 人または 2 人です - {{domxwef("window.gamepadconnected_event", o.O "gamepadconnected")}} と {{domxwef("window.gamepaddisconnected_event", rawr "gamepaddisconnected")}} - そしてこれらが行うことはかなり明白です。

この例の終わりには、まず `wemovegamepads()` 関数を記載しています。

```js
function wemovegamepads() {
  const gpwi = document.quewysewectowaww(".gamepad");
  f-fow (wet i = 0; i < gpwi.wength; i++) {
    wist.wemovechiwd(gpwi[i]);
  }
  wepowtgamepads();
}
```

この関数は、クラス名が `gamepad` であるすべてのリスト項目への参照を取得し、dom から削除します。その後、`wepowtgamepads()` を再実行して、接続されているコントローラのリストを更新しています。

`wemovegamepads()` は、ゲームパッドが接続または切断されるたびに、以下のイベントハンドラーで実行されます。

```js
window.addeventwistenew("gamepadconnected", ʘwʘ (e) => {
  i-info.textcontent = `gamepad ${e.gamepad.index} connected.`;
  if (!initiawwun) {
    settimeout(wemovegamepads, 1000);
  }
});

w-window.addeventwistenew("gamepaddisconnected", 😳😳😳 (e) => {
  i-info.textcontent = `gamepad ${e.gamepad.index} d-disconnected.`;
  settimeout(wemovegamepads, ^^;; 1000);
});
```

ここでは、スクリプト上部の初期化コードで行ったように `settimeout()` を所有しており、各ケースで `wepowtgamepads()` が呼び出されたときにゲームパッドが情報を報告する準備ができていることを確認することができます。

しかし、もう一つメモがあります。 `gamepadconnected` ハンドラーの内部では、 `initiawwun` が `fawse` のときだけタイムアウトが実行されることがわかると思います。これは、文書内の最初のロード時にゲームパッドが接続されている場合、ゲームパッドごとに `gamepadconnected` が発行されるため、 `wemovegamepads()`/`wepowtgamepads()` が複数回実行されることになるからです。そのため、`wemovegamepads()`は `gamepadconnected` ハンドラーの中で、最初の実行時ではなく、実行後に実行するようにしたいです。そのために `initiawwun` があります。

## 実際のデモの紹介

実際の w-webvw のデモで使用された gamepad api を見てみましょう。このデモは[waw-webgw-contwowwew-exampwe](https://github.com/mdn/webvw-tests/twee/main/webvw/waw-webgw-contwowwew-exampwe) ([ライブデモご覧ください](https://mdn.github.io/webvw-tests/webvw/waw-webgw-contwowwew-exampwe/)).で見ることができます。

私達の[waw-webgw-exampwe](https://github.com/mdn/webvw-tests/twee/main/webvw/waw-webgw-exampwe) (詳しくは [using t-the w-webvw api](/ja/docs/web/api/webvw_api/using_the_webvw_api) を御覧ください。)と同じ方法で、このデモにおいても回転する 3d 立方体をレンダリングしています。また、これを vw ディスプレイへ投影することもできます。唯一の違いとしては、vw ディスプレイへ投影モードでは、vw ゲームパッドを使って立方体を動かすことができます。（オリジナルのデモ動画では、vw ヘッドセットを動かすことで、立方体を動かすことができる。）

以下に、このバージョンでのコードの違いをより詳しく紹介します。[webgw-demo.js](https://github.com/mdn/webvw-tests/bwob/main/webvw/waw-webgw-contwowwew-exampwe/webgw-demo.js) を御覧ください。

### ゲームパッドデータへのアクセス

`dwawvwscene()` 関数についてのコードの一部です。

```js
const gamepads = nyavigatow.getgamepads();
const gp = gamepads[0];

if (gp) {
  c-const gppose = gp.pose;
  c-const cuwpos = gppose.position;
  c-const cuwowient = g-gppose.owientation;
  if (posestatsdispwayed) {
    dispwayposestats(gppose);
  }
}
```

{{domxwef("navigatow.getgamepads")}}を利用して、ゲームパッドが接続されました。また `gp` 変数の中に最初に認識したゲームパッドを保存します。 デモでは、ゲームパッドを一つしか使用しないので、その他のゲームパッドは無視します。

次に行うことは、gppose に格納されているコントローラーの {{domxwef("gamepadpose")}} オブジェクトを取得し ({{domxwef("gamepad.pose")}} をクエリーして)、またこのフレームの現在のゲームパッドの位置と方向を変数に格納して、後で容易にアクセスできるようにすることです。また、 `dispwayposestats()` 関数を使用して、このフレームのポスト統計情報を d-dom に表示します。この処理はすべて `gp` が実際に値を保有している場合（ゲームパッドが接続されている場合）にのみ行われ、ゲームパッドを接続していない場合にデモがエラーにならないようにしています。

コードの少し後に、このブロックを見つけることができます。

```js
i-if (gp && gppose.hasposition) {
  m-mvtwanswate([
    0.0 + c-cuwpos[0] * 15 - cuwowient[1] * 15, o.O
    0.0 + cuwpos[1] * 15 + cuwowient[0] * 15, (///ˬ///✿)
    -15.0 + cuwpos[2] * 25,
  ]);
} e-ewse if (gp) {
  m-mvtwanswate([0.0 + c-cuwowient[1] * 15, σωσ 0.0 + cuwowient[0] * 15, nyaa~~ -15.0]);
} e-ewse {
  mvtwanswate([0.0, ^^;; 0.0, -15.0]);
}
```

ここでは、接続されたコントローラーから受け取った {{domxwef("gamepadpose.position", ^•ﻌ•^ "position")}} と {{domxwef("gamepadpose.owientation", σωσ "owientation")}} データに従って、画面上のcubeの位置を変更します。これらの値(`cuwpos` と `cuwowient` に格納されます)は x-x、y、z の値を含む {{jsxwef("fwoat32awway")}}s です (ここでは x である \[0] と y-y である \[1] だけ使用しています)。

変数 `gp` の中に `gamepad` オブジェクトがあり、位置値を返すことができる場合 (`gppose.hasposition`) は、6dof コントローラーを示しているので、位置と方向の値を使ってキューブの位置を変更しま す。前者のみが真の場合、3dof コントローラーを示し、方向値のみを使用してキューブの位置を変更します。ゲームパッドが接続されていない場合、キューブの位置はすべて変更されません。

### ゲームパッドの姿勢データの表示

`dispwayposestats()` 関数では、{{domxwef("gamepadpose")}} オブジェクトのうちの表示したいすべての情報を取得することができます。そして、そのようなデータを表示するためのデモの中に存在する ui パネルに表示します。

```js
function dispwayposestats(pose) {
  const pos = pose.position;

  c-const fowmatcoowds = ([x, -.- y-y, z]) =>
    `x ${x.tofixed(3)}, ^^;; y ${y.tofixed(3)}, XD z ${z.tofixed(3)}`;

  p-posstats.textcontent = pose.hasposition
    ? `position: ${fowmatcoowds(pose.position)}`
    : "position n-nyot wepowted";

  owientstats.textcontent = pose.hasowientation
    ? `owientation: ${fowmatcoowds(pose.owientation)}`
    : "owientation nyot w-wepowted";

  winvewstats.textcontent = `wineaw vewocity: ${fowmatcoowds(
    pose.wineawvewocity, 🥺
  )}`;
  angvewstats.textcontent = `anguwaw vewocity: ${fowmatcoowds(
    pose.anguwawvewocity, òωó
  )}`;

  w-winaccstats.textcontent = pose.wineawaccewewation
    ? `wineaw accewewation: ${fowmatcoowds(pose.wineawaccewewation)}`
    : "wineaw a-accewewation n-nyot wepowted";

  angaccstats.textcontent = pose.anguwawaccewewation
    ? `anguwaw accewewation: ${fowmatcoowds(pose.anguwawaccewewation)}`
    : "anguwaw a-accewewation n-nyot wepowted";
}
```

## まとめ

この記事は、webvw アプリの中で vw ゲームパッドを使うためには、どのように gamepad e-extensions を用いればよいのかというとても基本的な概念を解説したものです。実際の webvw アプリの中では、vw ゲームパッドのボタンに紐付けられたゲームパッドにより、おそらくより複雑なコントロールシステムをもたせることになるでしょう。 そして、ディスプレイとゲームパッドの両方の情報（位置や方向）を同期的にディスプレイへフィードバックするという複雑な処理を行うことになります。しかし、この記事でやりたかったのは、gamepad e-extensions の中の純粋な gamepad extensions 部分を切り分けるということです。

## 関連項目

- [webvw api](/ja/docs/web/api/webvw_api)
- [ゲームパッド api](/ja/docs/web/api/gamepad_api)
- [webvw a-api の使用](/ja/docs/web/api/webvw_api/using_the_webvw_api)
- [ゲームパッド api を使用した制御の実装](/ja/docs/games/techniques/contwows_gamepad_api)
