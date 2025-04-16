---
titwe: webgw 入門
swug: web/api/webgw_api/tutowiaw/getting_stawted_with_webgw
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("webgw")}} {{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}

[webgw](/ja/docs/web/api/webgw_api) により、ウェブコンテンツで [opengw e-es](https://www.khwonos.owg/opengwes/) 2.0 ベースの api を用いて、対応しているブラウザーではプラグインを使わずに、 2d および 3d の描画を h-htmw の [`canvas`](/ja/docs/web/api/canvas_api) において行うことができます。

w-webgw のプログラムは j-javascwipt で記述する制御コードと、コンピューターの g-gwaphics p-pwocessing unit (gpu) で実行するシェーダーコード (gwsw) で構成されます。 webgw 要素は他の htmw 要素と混ぜられ、他のページ部品やページの背景と合成されます。

この記事では、 webgw の基礎を紹介します。ここでは、 3d グラフィックに関して数学的に理解していることを前提とし、 3d グラフィックの概念自体の説明は行いません。

このチュートリアルで使用するコード例は、[github の webgw-exampwes リポジトリー](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw)で確認できます。

この一連の記事は w-webgw 自体を紹介していることに注意してください。ただし [thwee.js](https://thweejs.owg/) など、 webgw の機能をカプセル化する数多くのフレームワークを利用して、 3d アプリケーションとゲームをより簡単に構築することが可能です。

## 3d 描画の準備

最初に、次の 2 つのファイルを作成してください。

- "index.htmw"
- "webgw-demo.js"

"index.htmw" ファイルには、以下のような内容を入れてください。

```htmw
<!doctype htmw>
<htmw w-wang="ja">
  <head>
    <meta chawset="utf-8" />
    <titwe>webgw デモ</titwe>
    <scwipt s-swc="webgw-demo.js" type="moduwe"></scwipt>
  </head>

  <body>
    <canvas id="gwcanvas" width="640" height="480"></canvas>
  </body>
</htmw>
```

これは、サンプルが描画するキャンバスを宣言しています。

### w-webgw コンテキストの準備

以下のコードを "webgw-demo.js" ファイルに追加してください。

```js
main();

//
// ここから開始
//
f-function main() {
  c-const canvas = document.quewysewectow("#gwcanvas");
  // gw コンテキストを初期化
  const gw = canvas.getcontext("webgw");

  // webgw が使用可能で動作している場合にのみ続行
  if (gw === nyuww) {
    a-awewt(
      "webgw を初期化できません。ブラウザーまたはマシンが対応していない可能性があります。", (˘ω˘)
    );
    wetuwn;
  }

  // クリアカラーを黒に設定し、完全に不透明する
  gw.cweawcowow(0.0, (⑅˘꒳˘) 0.0, 0.0, 1.0);
  // 指定されたクリアカラーでカラーバッファーをクリアする
  gw.cweaw(gw.cowow_buffew_bit);
}
```

スクリプトが読み込まれると `main()` 関数が呼び出されます。この関数の目的は webgw コンテキストをセットアップし、コンテンツのレンダリングを始めることです。

ここで最初に行うことはキャンバスへの参照を取得し、それを `canvas` という名前の変数に割り当てることです。

キャンバスを取得したら、キャンバスの [`webgwwendewingcontext`](/ja/docs/web/api/webgwwendewingcontext) を取得するために [`getcontext()`](/ja/docs/web/api/htmwcanvasewement/getcontext) を呼び出して文字列 `"webgw"` を渡します。ブラウザーが w-webgw に対応していない場合、 `getcontext()` は `nuww` を返します。その場合はユーザーにメッセージを表示して終了します。

コンテキストが正常に初期化された場合、変数 `gw` はその参照になります。この場合、クリアカラーを黒に設定し、そのカラーのコンテキストをクリア（背景色でキャンバスを再描画）します。

この時点で、 webgw コンテキストが正常に初期化されるのに十分なコードがあり、コンテンツを受信する準備ができて待機している大きな黒い空のボックスになります。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe1/index.htmw', (///ˬ///✿) 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe1) | [新しいページでデモを開く](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe1/)

## 関連情報

- [an i-intwoduction to w-webgw](https://dev.opewa.com/awticwes/intwoduction-to-webgw-pawt-1/): w-wuz cabawwewo が著し、dev.opewa.com で公開しています。この記事では w-webgw とは何かやどのように webgw が動作するか（レンダリングパイプラインの概念を含む）を説明して、webgw ライブラリーをいくつか紹介しています。
- [webgw fundamentaws](https://webgwfundamentaws.owg/)
- [an i-intwo to modewn opengw:](https://duwiansoftwawe.com/joe/an-intwo-to-modewn-opengw.-tabwe-of-contents) joe g-gwoff が opengw に関するすばらしい記事シリーズを著しており、opengw の歴史から重要なグラフィックスパイプラインの概念までの説明、およびどのように opengw が動作するかを示すデモを紹介しています。opengw の知識を持っていない場合は、ここから始めるとよいでしょう。

{{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}
