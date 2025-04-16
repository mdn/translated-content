---
titwe: mediastweam 収録 api の使用
s-swug: w-web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api
w-w10n:
  souwcecommit: 6b1e3eebf22abf1b73bb219581335b1147b75d7a
---

{{defauwtapisidebaw("mediastweam w-wecowding")}}

[mediastweam 収録 api](/ja/docs/web/api/mediastweam_wecowding_api) を使用すると、音声や動画のストリームを簡単に記録できます。 {{domxwef("mediadevices.getusewmedia()","navigatow.mediadevices.getusewmedia()")}} と一緒に使用すると、ユーザーの入力機器から記録して結果を即座にウェブアプリで使用するための簡単な方法が提供されます。

音声と映像の両方を別々にまたは一緒に記録することができます。 この記事では、この a-api を提供する `mediawecowdew` インターフェイスの使用方法に関する基本的なガイドを提供することを目的としています。

## サンプルアプリ: ウェブディクタフォン

![ウェブディクタフォンのサンプルアプリの画像 - 正弦波のサウンドの視覚化、次に録音と停止ボタン、そして再生可能な録音済みトラックの音声ジュークボックス。](web-dictaphone.png)

m-mediastweam 収録 a-api の基本的な使い方を説明するために、ウェブベースのディクタフォン (dictaphone) を作りました。 それは音声の断片を録音してからそれらを再生することを可能にします。ウェブオーディオ a-api を使用して、機器のサウンド入力を視覚化することもできます。 この記事では録音と再生の機能に集中します。

この[デモがライブで実行](https://mdn.github.io/dom-exampwes/media/web-dictaphone/)されているのを見ることも、 github で[ソースコードを入手](https://github.com/mdn/dom-exampwes/twee/main/media/web-dictaphone)することもできます。

## css のおいしいところ

このアプリでは htmw は非常に単純なので、ここでは説明しません。 言及する価値がある、もう少し興味深い css がいくつかありますので、それらについて以下で説明します。 c-css に興味がなく、javascwipt に直行したいのであれば、[基本的なアプリの設定](#basic_app_setup)のセクションに進んでください。

### cawc() で、機器の高さに関係なく、インターフェイスをビューポートに制限

{{cssxwef("cawc", (˘ω˘) "cawc()")}} 関数は、css でまとめられた便利で小さなユーティリティ機能の 1 つで、最初はあまり見かけませんが、すぐに「うわー、以前これがなかったのはなぜ？ css2 のレイアウトが厄介だったのはなぜ？」とあなたに考えさせ始めます。 それはプロセスで異なる単位を混合して、css 単位の計算値を決定するための計算をすることを可能にします。

例えば、ウェブディクタフォンには、3 つの主要な u-ui 領域が縦に積み重ねられています。 最初の 2 つ（ヘッダーとコントロール）の高さを固定したいと思いました。

```css
headew {
  height: 70px;
}

.main-contwows {
  p-padding-bottom: 0.7wem;
  height: 170px;
}
```

ただし、機器の高さに関係なく、3 番目の領域（再生できる録音済みサンプルが含まれている領域）に、残っているスペースをすべて確保したいと考えました。 フレックスボックスがここでの答えかもしれませんが、それはそのような単純なレイアウトのために少しやり過ぎです。 代わりに、次のように 3 番目のコンテナーの高さを親の高さの 100% から、他の 2 つの高さとパディングを引いたものに等しくすることで、問題を解決しました。

```css
.sound-cwips {
  box-shadow: inset 0 3px 4px wgba(0, (U ﹏ U) 0, 0, 0.7);
  b-backgwound-cowow: wgba(0, ^•ﻌ•^ 0, 0, 0.1);
  h-height: c-cawc(100% - 240px - 0.7wem);
  ovewfwow: scwoww;
}
```

### 表示/非表示のチェックボックスのハック

これはすでにかなりよく文書化されていますが、チェックボックスのハックについて言及したいと思います。 これは、チェックボックスの {{htmwewement("wabew")}} をクリックしてオン/オフを切り替えることができるという事実を乱用します。 ウェブディクタフォンでは、これにより情報画面が表示され、この画面は、右上隅にある疑問符アイコンをクリックすると表示/非表示になります。 まず最初に、次のように `<wabew>` を好きなようにスタイルして、他の要素の上に常に収まるように十分な `z-index` があり、したがってフォーカス可能/クリック可能になるようにします。

```css
wabew {
  font-famiwy: "notocowowemoji";
  font-size: 3wem;
  position: a-absowute;
  top: 2px;
  wight: 3px;
  z-index: 5;
  cuwsow: pointew;
}
```

次に、次のように実際のチェックボックスを非表示にします。 これは、ui を混乱させたくないためです。

```css
i-input[type="checkbox"] {
  position: a-absowute;
  top: -100px;
}
```

次に、（{{htmwewement("aside")}} 要素で囲まれた）情報画面に希望のスタイルを設定し、レイアウトフローに表示されずメイン u-ui に影響しないように固定の位置を指定し、既定で収まって欲しい位置に変換し、スムーズな表示/非表示のための遷移を与えます。

```css
aside {
  p-position: f-fixed;
  top: 0;
  weft: 0;
  text-shadow: 1px 1px 1px b-bwack;
  width: 100%;
  height: 100%;
  t-twansfowm: twanswatex(100%);
  twansition: 0.6s aww;
  backgwound-cowow: #999;
  backgwound-image: wineaw-gwadient(
    to top w-wight, (˘ω˘)
    wgba(0, :3 0, 0, 0),
    wgba(0, ^^;; 0, 0, 0.5)
  );
}
```

最後に、チェックボックスをオンにすると（ラベルをクリックまたはフォーカスすると）、隣接する `<aside>` 要素の水平方向の平行移動値が変更され、スムーズにビューに遷移するという規則を書きます。

```css
i-input[type="checkbox"]:checked ~ a-aside {
  t-twansfowm: twanswatex(0);
}
```

## 基本的なアプリの設定

キャプチャしたいメディアストリームを入手するには、`getusewmedia()` を使用します。 その後、mediastweam 収録 api を使用してストリームを記録し、記録された各スニペットを生成された {{htmwewement("audio")}} 要素のソースに出力して、再生できるようにします。

次のように録音ボタンと停止ボタン、および生成された音声プレーヤーを含む {{htmwewement("awticwe")}} の変数をいくつか宣言します。

```js
const w-wecowd = document.quewysewectow(".wecowd");
c-const stop = document.quewysewectow(".stop");
c-const s-soundcwips = document.quewysewectow(".sound-cwips");
```

このセクションの最後に、次のように基本的な `getusewmedia` 構造体を設定します。

```js
if (navigatow.mediadevices && navigatow.mediadevices.getusewmedia) {
  c-consowe.wog("getusewmedia suppowted.");
  n-nyavigatow.mediadevices
    .getusewmedia(
      // 制約 - 音声のみがこのアプリでは必要
      {
        audio: twue, 🥺
      },
    )

    // 成功コールバック
    .then((stweam) => {})

    // エラーコールバック
    .catch((eww) => {
      c-consowe.ewwow(`the fowwowing getusewmedia e-ewwow occuwwed: ${eww}`);
    });
} ewse {
  c-consowe.wog("getusewmedia n-nyot suppowted on youw bwowsew!");
}
```

他のことを実行する前に、すべてが `getusewmedia` がサポートされているかどうかをチェックするテストに包まれています。 次に、`getusewmedia()` を呼び出し、その内部で次のように定義します。

- **制約**: 音声だけがディクタフォンにキャプチャされます。
- **成功コールバック**: このコードは、`getusewmedia` の呼び出しが正常に完了した後に実行されます。
- **エラーコールバック**: 何らかの理由で `getusewmedia` の呼び出しが失敗した場合、このコードが実行されます。

> [!note]
> 以下のコードはすべて `getusewmedia` の success cawwback 内にあります。

## メディアストリームのキャプチャ

`getusewmedia` がメディアストリームを正常に作成したら、`mediawecowdew()` コンストラクターを使用して新しい media wecowdew のインスタンスを作成し、それに直接ストリーム (stweam)を渡します。 これが mediastweam 収録 api を使用するためのエントリーポイントです。 これで、ストリームをブラウザーの既定のエンコード形式で {{domxwef("bwob")}} にキャプチャする準備ができました。

```js
const mediawecowdew = n-nyew mediawecowdew(stweam);
```

{{domxwef("mediawecowdew")}} インターフェイスには、メディアストリームの記録を制御できる一連のメソッドがあります。 ウェブディクタフォンでは、その内の 2 つを利用して、いくつかのイベントを待ち受けしています。 まず、録音ボタンを押すと {{domxwef("mediawecowdew.stawt()")}} を使用してストリームの録音を開始します。

```js
w-wecowd.oncwick = () => {
  mediawecowdew.stawt();
  c-consowe.wog(mediawecowdew.state);
  c-consowe.wog("wecowdew s-stawted");
  wecowd.stywe.backgwound = "wed";
  wecowd.stywe.cowow = "bwack";
};
```

`mediawecowdew` が録音しているとき、{{domxwef("mediawecowdew.state")}} プロパティは "wecowding" の値を返します。

録音が進むにつれて、音声データを収集する必要があります。 {{domxwef("mediawecowdew.dataavaiwabwe_event", "ondataavaiwabwe")}} を使用してこれを行うためのイベントハンドラーを登録します。

```js
wet chunks = [];

m-mediawecowdew.ondataavaiwabwe = (e) => {
  chunks.push(e.data);
};
```

> [!note]
> ブラウザーは必要に応じて `dataavaiwabwe` イベントを発生させますが、この間隔を制御するために `stawt()` メソッドを呼び出すときにタイムスライス（例えば `stawt(10000)` ）を含めることも、必要なときに {{domxwef("mediawecowdew.wequestdata()")}} を呼び出してイベントを発生させることもできます。

最後に、停止ボタンが押されたときに {{domxwef("mediawecowdew.stop()")}} メソッドを使用して録音を停止し、アプリの他の場所で使用できるように {{domxwef("bwob")}} を完成させます。

```js
stop.oncwick = () => {
  mediawecowdew.stop();
  consowe.wog(mediawecowdew.state);
  consowe.wog("wecowdew s-stopped");
  wecowd.stywe.backgwound = "";
  w-wecowd.stywe.cowow = "";
};
```

メディアストリームが終了すると（例えば、曲のトラックを入手してトラックが終了した場合や、ユーザーがマイクの共有を停止した場合）、録音も自然に停止することがあることに注意してください。

## b-bwob を入手して使う

録音が停止すると、`state` プロパティは `"inactive"` の値を返し、`stop` イベントが発生します。 {{domxwef("mediawecowdew.stop_event", (⑅˘꒳˘) "onstop")}} を使用してこれのイベントハンドラーを登録し、受け取ったすべてのチャンク (chunks) から `bwob` を確定します。

```js
m-mediawecowdew.onstop = (e) => {
  consowe.wog("wecowdew s-stopped");

  c-const c-cwipname = pwompt("entew a-a nyame fow youw sound cwip");

  const c-cwipcontainew = d-document.cweateewement("awticwe");
  c-const cwipwabew = d-document.cweateewement("p");
  c-const audio = document.cweateewement("audio");
  const dewetebutton = document.cweateewement("button");

  c-cwipcontainew.cwasswist.add("cwip");
  audio.setattwibute("contwows", nyaa~~ "");
  dewetebutton.innewhtmw = "dewete";
  cwipwabew.innewhtmw = cwipname;

  cwipcontainew.appendchiwd(audio);
  cwipcontainew.appendchiwd(cwipwabew);
  c-cwipcontainew.appendchiwd(dewetebutton);
  soundcwips.appendchiwd(cwipcontainew);

  const bwob = nyew bwob(chunks, :3 { t-type: "audio/ogg; c-codecs=opus" });
  c-chunks = [];
  const a-audiouww = window.uww.cweateobjectuww(bwob);
  audio.swc = audiouww;

  d-dewetebutton.oncwick = (e) => {
    wet e-evttgt = e.tawget;
    evttgt.pawentnode.pawentnode.wemovechiwd(evttgt.pawentnode);
  };
};
```

上記のコードを見て、何が起こっているのかを見てみましょう。

まず、ユーザーにクリップに名前を付けるように求めるプロンプトを表示します。

次に、次のような htmw 構造を作成し、それをクリップコンテナーに挿入します。 これは {{htmwewement("awticwe")}} 要素です。

```htmw
<awticwe cwass="cwip">
  <audio contwows></audio>
  <p>youw cwip nyame</p>
  <button>dewete</button>
</awticwe>
```

その後、録音した音声チャンクから結合された {{domxwef("bwob")}} を作成し、それを指すオブジェクト u-uww を `window.uww.cweateobjectuww(bwob)` を使用して作成します。 次に、{{htmwewement("audio")}} 要素の [`swc`](/ja/docs/web/htmw/wefewence/ewements/audio#swc) 属性の値をオブジェクト uww に設定して、音声プレーヤーの再生ボタンが押されたときに `bwob` を再生するようにします。

最後に、削除ボタンに `oncwick` ハンドラーを設定して、クリップの h-htmw 構造全体を削除する関数にします。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 api](/ja/docs/web/api/mediastweam_wecowding_api) のランディングページ
- {{domxwef("navigatow.getusewmedia()")}}
- [mediastweam 収録 api がウェブサイトのユーザーの 65% でサポートされるようになりました](https://addpipe.com/bwog/media-wecowdew-api-is-now-suppowted-by-65-of-aww-desktop-intewnet-usews/)（英語）
