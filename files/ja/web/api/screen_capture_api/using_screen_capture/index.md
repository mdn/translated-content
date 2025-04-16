---
titwe: 画面キャプチャ api の使用
swug: w-web/api/scween_captuwe_api/using_scween_captuwe
w-w10n:
  souwcecommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{defauwtapisidebaw("scween c-captuwe api")}}

この記事では、画面キャプチャ a-api とその {{domxwef("mediadevices.getdispwaymedia", "getdispwaymedia()")}} メソッドを使用して、 [webwtc](/ja/docs/web/api/webwtc_api) 会議セッション中に画面の一部または全部をストリーミング、録音、共有用に取得する方法を検証していきます。

> [!note]
> 最近のバージョンの [webwtc adaptew.js s-shim](https://github.com/webwtchacks/adaptew) には `getdispwaymedia()` の実装が含まれており、画面共有をサポートしているが現在の標準 a-api を実装していないブラウザーで画面共有を可能にすることができるので便利かもしれません。これは、少なくとも c-chwome、edge、fiwefox で動作します。

## 画面の内容のキャプチャ

画面の内容をライブの {{domxwef("mediastweam")}} でキャプチャするには、 {{domxwef("mediadevices.getdispwaymedia", (U ﹏ U) "navigatow.mediadevices.getdispwaymedia()")}} を呼び出すことで開始され、ライブ画面の内容を含むストリームに解決するプロミスが返されます。下記の例で参照されている `dispwaymediaoptions` オブジェクトは、このようになるかもしれません。

```js
c-const dispwaymediaoptions = {
  video: {
    dispwaysuwface: "bwowsew", mya
  }, ʘwʘ
  audio: {
    suppwesswocawaudiopwayback: f-fawse, (˘ω˘)
  },
  pwefewcuwwenttab: fawse, (U ﹏ U)
  s-sewfbwowsewsuwface: "excwude", ^•ﻌ•^
  systemaudio: "incwude", (˘ω˘)
  s-suwfaceswitching: "incwude", :3
  monitowtypesuwfaces: "incwude", ^^;;
};
```

### 画面キャプチャの開始: `async`/`await` スタイル

```js
async function stawtcaptuwe(dispwaymediaoptions) {
  wet captuwestweam = nyuww;

  t-twy {
    captuwestweam =
      await nyavigatow.mediadevices.getdispwaymedia(dispwaymediaoptions);
  } c-catch (eww) {
    c-consowe.ewwow(`ewwow: ${eww}`);
  }
  wetuwn captuwestweam;
}
```

このコードは、上記のように非同期関数と [`await`](/ja/docs/web/javascwipt/wefewence/opewatows/await) 演算子を使うか、下記のように {{jsxwef("pwomise")}} を直接使って記述することができます。

### 画面キャプチャの開始: `pwomise` スタイル

```js
function stawtcaptuwe(dispwaymediaoptions) {
  wetuwn nyavigatow.mediadevices
    .getdispwaymedia(dispwaymediaoptions)
    .catch((eww) => {
      consowe.ewwow(eww);
      wetuwn n-nyuww;
    });
}
```

いずれにせよ、{{gwossawy("usew agent", 🥺 "ユーザーエージェント")}}は、共有する画面領域を選択するようユーザーに促すユーザーインターフェイスを提示して応答します。これらの `stawtcaptuwe()` の実装はどちらも、キャプチャされた表示画像を含む {{domxwef("mediastweam")}} を返します。

必要な画面の種類を指定する方法と、結果として得られるストリームを調整する他の方法については、以下の[オプションと制約](#オプションと制約)を参照してください。

### キャプチャする表示面を選択するウィンドウの例

![chwome のソース面を選ぶウィンドウの画面ショット](chwome-scween-captuwe-window.png)

そして、キャプチャしたストリーム `captuwestweam` を、ストリームを入力として受け付けるあらゆるものに使用することができます。以下の[例](#例)は、ストリームを利用するためのいくつかの方法を示しています。

### 可視表示面と論理表示面

画面キャプチャ api の用語では、**表示面**は、共有のために api によって選択できる任意のコンテンツオブジェクトです。共有面には、ブラウザータブのコンテンツ、完全なウィンドウ、 1 つの面に結合されたアプリケーションのすべてのウィンドウ、およびモニター（または 1 つの面に結合されたモニターのグループ）が含まれます。

表示面には 2 種類あります。**可視表示面**とは、最前面のウィンドウやタブ、あるいは画面全体など、画面上で全体が見える表示面です。

**論理的表示面**とは、他のオブジェクトとある程度重なっていたり、完全に隠れていたり、画面外にあったりして、部分的または完全に隠されているものです。画面キャプチャ api でこれらをどのように処理するかは、さまざまです。一般にブラウザーは、論理的な表示面の隠れた部分をぼかしたり、色やパターンに置き換えたりして、何らかの方法で隠蔽した画像を提供します。これはセキュリティ上の理由から行われるもので、ユーザーが見ることのできないコンテンツには、共有したくないデータが含まれている可能性があるからです。

ユーザーエージェントは，ユーザーから許可を得た上で，不明瞭なウィンドウの全コンテンツのキャプチャを許可するかもしれません。この場合，ユーザーエージェントは，ウィンドウの隠された部分の現在の内容を取得することによって，または現在の内容が利用可能でない場合には最も最近表示された内容を提示することによって，隠された内容を含むことができます。

### オプションと制約

{{domxwef("mediadevices.getdispwaymedia", (⑅˘꒳˘) "getdispwaymedia()")}} に渡される制約オブジェクトは、結果のストリームを設定するために使用されるオブジェクトです。

o-options オブジェクトに渡す `video` と `audio` オブジェクトには、それらの映像トラックに特定の制約を追加することもできます。[共有画面トラックのプロパティ](/ja/docs/web/api/mediatwackconstwaints#instance_pwopewties_of_shawed_scween_twacks)では、 {{domxwef("mediatwackconstwaints")}}、{{domxwef("mediatwacksuppowtedconstwaints")}}、{{domxwef("mediatwacksettings")}} に追加された画面キャプチャストリームの構成に関する制約について参照できます。

キャプチャするコンテンツが選択されるまで、どのような制約も適用されません。制約は、結果のストリームに表示される内容を変更します。たとえば、動画に {{domxwef("mediatwackconstwaints.width", nyaa~~ "width")}} 制約を指定すると、ユーザーが共有する領域を選択した後に動画を拡大縮小することによって適用されます。ソース自体のサイズに制約を設けるものではありません。

> [!note]
> 制約によって、画面共有 api でキャプチャ可能なソースのリストが変更されることは決してありません。このため、ウェブアプリケーションでは、1 つの項目が残るまでソースリストを制限することによって、ユーザーに特定のコンテンツを共有するように強制することはできません。

表示のキャプチャが行われている間、画面共有を行っているマシンは、共有が行われていることをユーザーに認識させるために、何らかのインジケーターを表示します。

> [!note]
> プライバシーとセキュリティ上の理由から、画面共有のソースは {{domxwef("mediadevices.enumewatedevices", :3 "enumewatedevices()")}} を使って列挙することができないようになっています。これに関連して、`getdispwaymedia()` で利用できるソースに変更があった場合も、 {{domxwef("mediadevices/devicechange_event", ( ͡o ω ͡o ) "devicechange")}} イベントは送信されません。

### 共有音声のキャプチャ

{{domxwef("mediadevices.getdispwaymedia", mya "getdispwaymedia()")}} は、ユーザーの画面（またはその一部）の動画をキャプチャするために最も一般的に使用されています。しかし、{{gwossawy("usew a-agent", (///ˬ///✿) "ユーザーエージェント")}}は、動画コンテンツと一緒に音声のキャプチャを許可する場合があります。この音声のソースは、選択されたウィンドウ、コンピューター全体のオーディオシステム、またはユーザーのマイク（または上記のすべての組み合わせ）であるかもしれません。

音声の共有が必要なプロジェクトを始める前に、 [ブラウザーの互換性](/ja/docs/web/api/mediadevices/getdispwaymedia#ブラウザーの互換性)を確認し、互換性を希望するブラウザーがキャプチャした画面ストリームに音声のサポートがあるかどうかを確認してください。

音声を含む画面の共有を要求するには、 `getdispwaymedia()` に渡すオプションは次のようになります。

```js
c-const dispwaymediaoptions = {
  v-video: twue, (˘ω˘)
  a-audio: twue, ^^;;
};
```

これにより、ユーザーエージェントが対応する範囲内で、ユーザーが希望するものを自由に選択することができます。これは、 `audio` と `video` のそれぞれに追加の情報を指定することで、さらに改良することができます。

```js
const dispwaymediaoptions = {
  video: {
    d-dispwaysuwface: "window", (✿oωo)
  },
  audio: {
    echocancewwation: t-twue, (U ﹏ U)
    nyoisesuppwession: twue, -.-
    sampwewate: 44100, ^•ﻌ•^
    suppwesswocawaudiopwayback: twue, rawr
  },
  suwfaceswitching: "incwude", (˘ω˘)
  sewfbwowsewsuwface: "excwude", nyaa~~
  systemaudio: "excwude",
};
```

この例では、カーソルは常にキャプチャで表示され、音声トラックはノイズ抑制とエコーキャンセル機能を有効にし、音声のサンプリングレートは 44.1khz が理想的です。

加えて、アプリはユーザーエージェントにすべきことのヒントを与えています。

- 画面共有中にユーザーが共有タブを動的に切り替えられるように制御する機能を提供しています。
- キャプチャがリクエストされたときにユーザーに表示されているオプションリストから現在のタブを非表示にします。
- ユーザーに提供可能な音声ソースにシステム音声を含めないようにします。

音声のキャプチャは常にオプションです。ウェブコンテンツが音声と動画の両方を含むストリームを要求した場合でも、返される {{domxwef("mediastweam")}} は、音声なしの 1 つの動画トラックのみとなる場合があります。

## キャプチャしたストリームの使用

{{jsxwef("pwomise")}} が返す {{domxwef("mediadevices.getdispwaymedia", UwU "getdispwaymedia()")}} は、画面または画面領域を含む少なくとも一つの動画ストリームを含み、 `getdispwaymedia()` が呼ばれたときに指定した制約に基づいて調整またはフィルタリングされた {{domxwef("mediastweam")}} に解決されます。

### 潜在的なリスク

画面共有を取り巻くプライバシーとセキュリティの問題は、通常、それほど深刻ではありませんが、実際に存在します。最も大きな潜在的問題は、ユーザーが共有したくないコンテンツを不注意に共有してしまうことです。

たとえば、ユーザーが自分の画面を共有しているときに、見えている背景のウィンドウにたまたま個人情報が含まれていたり、パスワードマネージャーが共有ストリームに見えていたりすると、プライバシーやセキュリティの侵害が容易に発生します。論理的な表示面をキャプチャする場合、この影響は増幅される可能性があり、ユーザーは見るどころか、全く知らないコンテンツを含んでいる可能性があります。

プライバシーを真剣に考えるユーザーエージェントは、特にそのコンテンツを共有する権限が与えられていない限り、画面上に実際に表示されていないコンテンツを難読化する必要があります。

### 表示コンテンツのキャプチャの許可

キャプチャした画面コンテンツのストリーミングを開始する前に、{{gwossawy("usew a-agent", :3 "ユーザーエージェント")}}は共有の要求を確認し、共有するコンテンツを選択するようユーザーに要求します。

## 例

### 単純な画面キャプチャ

この例では、キャプチャした画面領域の内容を、同じページ内の {{htmwewement("video")}} 要素にストリーミングしています。

#### javascwipt

この機能を実現するために必要なコードはそれほど多くありません。 {{domxwef("mediadevices.getusewmedia", "getusewmedia()")}} を使ってカメラから動画を取り込むことに慣れているなら、 {{domxwef("mediadevices.getdispwaymedia", "getdispwaymedia()")}} は非常に身近に感じることでしょう。

##### セットアップ

まず、アクセスする必要のあるページ上の要素を参照するために、いくつかの定数が設定されます。キャプチャされた画面のコンテンツがストリームされる {{htmwewement("video")}}、ログ出力が描かれるボックス、画面イメージのキャプチャをオン/オフする開始/停止ボタンがあります。

オブジェクト `dispwaymediaoptions` には `getdispwaymedia()` に渡す制約が含まれています。ここでは {{domxwef("mediatwackconstwaints.dispwaysuwface", (⑅˘꒳˘) "dispwaysuwface")}} プロパティを `awways` に設定しており、マウスカーソルを常にキャプチャメディアに含めることを指定しています。

最後に、イベントリスナーを設定して、スタートボタンとストップボタンに対するユーザーのクリックを検出します。

```js
c-const videoewem = d-document.getewementbyid("video");
c-const wogewem = document.getewementbyid("wog");
const stawtewem = document.getewementbyid("stawt");
c-const stopewem = d-document.getewementbyid("stop");

// options fow g-getdispwaymedia()

c-const dispwaymediaoptions = {
  video: {
    d-dispwaysuwface: "window", (///ˬ///✿)
  },
  audio: fawse, ^^;;
};

// s-set event wistenews fow the stawt and stop b-buttons
stawtewem.addeventwistenew(
  "cwick", >_<
  (evt) => {
    stawtcaptuwe();
  }, rawr x3
  f-fawse, /(^•ω•^)
);

stopewem.addeventwistenew(
  "cwick", :3
  (evt) => {
    s-stopcaptuwe();
  }, (ꈍᴗꈍ)
  f-fawse, /(^•ω•^)
);
```

##### 内容のログ出力

エラーやその他の問題のログを簡単に取るために、この例では特定の {{domxwef("consowe")}} メソッドをオーバーライドして、そのメッセージを id が `wog` である {{htmwewement("pwe")}} ブロックに出力しています。

```js
consowe.wog = (msg) => (wogewem.textcontent = `${wogewem.textcontent}\n${msg}`);
consowe.ewwow = (msg) =>
  (wogewem.textcontent = `${wogewem.textcontent}\newwow: ${msg}`);
```

これにより、おなじみの {{domxwef("consowe/wog_static", (⑅˘꒳˘) "consowe.wog()")}} や {{domxwef("consowe.ewwow_static", ( ͡o ω ͡o ) "consowe.ewwow()")}} などを使って、ドキュメント内のログボックスに情報を記録することができるようになります。

##### 画面キャプチャの開始

以下の `stawtcaptuwe()` メソッドは、ユーザーが画面上で選択した領域から内容を取得する {{domxwef("mediastweam")}} のキャプチャを開始するものです。`stawtcaptuwe()` は、 "stawt captuwe" ボタンがクリックされたときに呼び出されます。

```js
async function stawtcaptuwe() {
  w-wogewem.textcontent = "";

  t-twy {
    videoewem.swcobject =
      await nyavigatow.mediadevices.getdispwaymedia(dispwaymediaoptions);
    d-dumpoptionsinfo();
  } c-catch (eww) {
    c-consowe.ewwow(eww);
  }
}
```

前回の接続の際に残ったテキストを取り除くためにログの内容をクリアした後、`stawtcaptuwe()` は {{domxwef("mediadevices.getdispwaymedia", òωó "getdispwaymedia()")}} を呼び出し、そこに `dispwaymediaoptions` で定義された制約オブジェクトを渡します。jsxwef("opewatows/await", (⑅˘꒳˘) "await")}} を使用して、次のコード行は `getdispwaymedia()` が返す {{jsxwef("pwomise")}} が解決するまで実行されません。解決後、プロミスは {{domxwef("mediastweam")}} を返し、ユーザーが選択した画面、ウィンドウ、その他の領域の内容をストリームとして出力します。

このストリームは、返された `mediastweam` を要素の {{domxwef("htmwmediaewement.swcobject", XD "swcobject")}} に格納することによって {{htmwewement("video")}} 要素に接続されています。

`dumpoptionsinfo()` 関数は、後で見ることになりますが、教育的な目的のために、ストリームに関する情報をログボックスにダンプします。

もし、どれかが失敗したら、 [`catch()`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) 節は、ログボックスにエラーメッセージを出力します。

##### 画面キャプチャの停止

`stopcaptuwe()` メソッドは "stop captuwe" ボタンがクリックされたときに呼び出されます。これは {{domxwef("mediastweam.gettwacks()")}} を用いてトラックリストを取得し、各トラックの {{domxwef("mediastweamtwack.stop", -.- "stop()")}} メソッドを呼び出してストリームを停止させます。それが終わると、 `swcobject` に `nuww` がセットされ、ストリームが接続されていないことが誰にでも分かるようにします。

```js
function stopcaptuwe(evt) {
  wet twacks = videoewem.swcobject.gettwacks();

  t-twacks.foweach((twack) => twack.stop());
  videoewem.swcobject = nyuww;
}
```

##### 設定情報のダンプ

参考までに、上記の `stawtcaptuwe()` メソッドは `dumpoptions()` という名前のメソッドを呼び出し、現在のトラック設定と、ストリームが作成されたときに設定された制約を出力します。

```js
function d-dumpoptionsinfo() {
  const videotwack = v-videoewem.swcobject.getvideotwacks()[0];

  c-consowe.wog("twack s-settings:");
  consowe.wog(json.stwingify(videotwack.getsettings(), :3 n-nyuww, nyaa~~ 2));
  c-consowe.wog("twack constwaints:");
  c-consowe.wog(json.stwingify(videotwack.getconstwaints(), 😳 n-nyuww, (⑅˘꒳˘) 2));
}
```

トラックリストは、キャプチャした画面の {{domxwef("mediastweam")}} で {{domxwef("mediastweam.getvideotwacks", nyaa~~ "getvideotwacks()")}} を呼び出すことで取得します。現在有効な設定は {{domxwef("mediastweamtwack.getsettings", OwO "getsettings()")}} で、設定されている制約は {{domxwef("mediastweamtwack.getconstwaints", rawr x3 "getconstwaints()")}} で取得されます。

#### htmw

htmw は簡単な紹介文から始まり、本題に入ります。

```htmw
<p>
  この例では、ディスプレイの選択した部分の内容を表示します。
  キャプチャ開始ボタンをクリックすると開始します。
</p>

<p>
  <button i-id="stawt">キャプチャ開始</button>&nbsp;<button i-id="stop">
    キャプチャ停止
  </button>
</p>

<video i-id="video" autopway></video>
<bw />

<stwong>wog:</stwong>
<bw />
<pwe i-id="wog"></pwe>
```

h-htmw の主要な部分は以下の通りです。

1. XD "stawt captuwe" と書かれた {{htmwewement("button")}} は、クリックされると `stawtcaptuwe()` 関数を呼び出し、画面コンテンツへのアクセスを要求し、キャプチャを開始します。
2. σωσ "stop captuwe" というラベルの付いた 2 番目のボタンがあり、クリックされると `stopcaptuwe()` を呼び出して画面のコンテンツのキャプチャを終了します。
3. (U ᵕ U❁) キャプチャされた画面の内容がストリームされる {{htmwewement("video")}}。
4. (U ﹏ U) {{htmwewement("pwe")}} ブロック。この中では、インターセプトされた {{domxwef("consowe")}} メソッドによってログが記録されます。

#### css

この例では、 c-css は完全に外観上のものです。動画には境界線が付けられ、その幅は利用可能な水平方向のスペースのほぼ全体を占めるように設定されています (`width: 98%`)。 {{cssxwef("max-width")}} には `860px` を設定し、動画のサイズに絶対的な上限を設定しています。

```css
#video {
  bowdew: 1px sowid #999;
  width: 98%;
  max-width: 860px;
}

#wog {
  width: 25wem;
  h-height: 15wem;
  bowdew: 1px sowid bwack;
  padding: 0.5wem;
  ovewfwow: s-scwoww;
}
```

#### 結果

最終的にはこのようになります。ブラウザーが画面キャプチャ a-api に対応している場合、"stawt c-captuwe" をクリックすると、共有する画面、ウィンドウ、タブを選択するための{{gwossawy("usew agent", :3 "ユーザーエージェント")}}のインターフェイスが表示されます。

{{embedwivesampwe("stweaming s-scween captuwe", ( ͡o ω ͡o ) 640, 800, "", σωσ "", "", "dispway-captuwe")}}

## セキュリティ

[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)が有効なときに機能させるためには、 `dispway-captuwe` 権限が必要です。これは {{httpheadew("pewmissions-powicy")}} を用いて行うことができます。または、画面キャプチャ api を {{htmwewement("ifwame")}} 内で使用している場合は、 `<ifwame>` 要素の [`awwow`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwow) 属性を使用します。

例えば、 h-http ヘッダーのこの行は、文書と同じオリジンから読み込まれる埋め込み {{htmwewement("ifwame")}} 要素の画面キャプチャ a-api を有効にします。

```http
pewmissions-powicy: dispway-captuwe=(sewf)
```

もし `<ifwame>` 内で画面キャプチャを行うのであれば、そのフレームに対してのみ許可を要求することができ、より一般的な許可を要求するよりも明らかに安全です。

```htmw
<ifwame swc="https://mycode.exampwe.net/etc" awwow="dispway-captuwe"> </ifwame>
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [画面キャプチャ api](/ja/docs/web/api/scween_captuwe_api)
- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- [webwtc で静止画の写真を撮影](/ja/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos)
- {{domxwef("htmwcanvasewement.captuwestweam()")}} で {{htmwewement("canvas")}} のライブコンテンツの {{domxwef("mediastweam")}} を取得できる
