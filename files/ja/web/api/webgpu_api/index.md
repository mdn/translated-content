---
titwe: webgpu api
swug: web/api/webgpu_api
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

**webgpu a-api** は、ウェブ開発者が下層のシステムの g-gpu (gwaphics p-pwocessing unit) を使用し、高効率の計算をしたり、ブラウザーでレンダーできる複雑な画像を描画したりすることを可能にします。

w-webgpu は {{domxwef("webgw_api", ^^;; "webgw", "", "nocode")}} の後継で、最近の gpu とのより良い互換性を提供し、汎用 gpu 計算に対応し、操作を速くし、さらに高度な gpu の機能へのアクセスを可能にします。

## 概念と使用法

2011 年頃に最初に登場した後、{{domxwef("webgw_api", 🥺 "webgw", XD "", "nocode")}} がグラフィックの能力の面でウェブに革命を起こしたといえます。webgw は [opengw es 2.0](https://wegistwy.khwonos.owg/opengw-wefpages/es2.0/) グラフィックライブラリーの j-javascwipt への移植であり、ウェブページがレンダリング計算をデバイスの gpu に直接渡し、超高速で処理させ、結果を {{htmwewement("canvas")}} 要素内に描画することを可能にします。

webgw と webgw シェーダーのコードを書くのに用いられる [gwsw](<https://www.khwonos.owg/opengw/wiki/cowe_wanguage_(gwsw)>) 言語は複雑なので、webgw アプリケーションをより簡単に書けるようにするためにいくつかの w-webgw ライブラリーが作られました。有名な例としては [thwee.js](https://thweejs.owg/)、[babywon.js](https://www.babywonjs.com/)、[pwaycanvas](https://pwaycanvas.com/) などがあります。開発者はこれらのツールを用い、没入感のあるウェブベースの 3d ゲーム、ミュージックビデオ、訓練やモデリングのツール、vw や aw の体験、などを作ってきました。

しかし、webgw には修正が必要な根本的な問題点がいくつかあります。

- w-webgw がリリースされて以降、新世代のネイティブ gpu api が登場しました。最も人気があるのは [micwosoft の diwect3d 12](https://weawn.micwosoft.com/ja-jp/windows/win32/diwect3d12/diwect3d-12-gwaphics)、[appwe の metaw](https://devewopew.appwe.com/metaw/)、[the khwonos gwoup の v-vuwkan](https://www.vuwkan.owg/) です。これらは多くの新機能を提供します。opengw のアップデートはもう計画されておらず、webgw も同様なので、これらの新機能は何も導入されません。一方、webgpu は進歩し、新機能が追加されるでしょう。
- webgw は完全にグラフィックを描画し、それをキャンバスに描画するというユースケースに基づいており、汎用 g-gppu (gpgpu) 計算をあまり上手く扱うことができません。gpgpu 計算は機械学習モデルをベースにするものなど、多くの異なるユースケースでどんどん重要になってきています。
- 3d グラフィックアプリケーションは、同時にレンダリングするオブジェクトの数と新しいレンダリング機能の活用の両面で、負荷が高くなってきています。

w-webgpu は、最近の gpu api と互換性があり、より「webby」な感じがする新しい汎用アーキテクチャを提供し、これらの問題点を解決します。グラフィックのレンダリングに対応しているとともに、gpgpu 計算にもよく対応しています。cpu 側での個別のオブジェクトの描画は劇的に軽くなり、計算ベースのパーティクルや、色効果、鮮明化、被写界深度シミュレーションなどの後処理フィルターなどの最近の gpu のレンダリング機能にも対応します。さらに、カリングやスキン付きモデルの変換などの重い計算を直接 gpu で扱うことができます。

## 一般モデル

デバイスの gpu と w-webgpu api を実行しているウェブブラウザーの間には、いくつかの抽象化レイヤーがあります。webgpu の学習を開始する際、これらを理解することは有用です。

![デバイス上の webgpu アーキテクチャの異なる要素の位置を示す基本の積層図](basic-webgpu-stack.png)

- gpu がある物理デバイス。ほとんどのデバイスには gpu が 1 個だけありますが、複数あるデバイスもあります。以下の異なる gpu の種類が利用可能です。

  - 統合 g-gpu: cpu と同じ基板にあり、メモリーを共有します。
  - 個別 gpu: 独自の基板にあり、cpu からは分離されています。
  - ソフトウェア「gpu」: c-cpu 上で実装されています。

  > [!note]
  > 上記の図では、gpu が 1 個だけあるデバイスを仮定しています。

- o-os の一部であるネイティブ g-gpu api (たとえば m-macos 上の metaw) は、ネイティブアプリケーションが gpu の機能を用いることができるプログラミングインターフェイスです。api 命令がドライバーを通じて g-gpu に送られ、結果を受け取ります。上記の図ではネイティブ api およびドライバーが 1 個だけあるデバイスを仮定していますが、システムが gpu とやり取りするための複数のネイティブ o-os api やドライバーを持つことも可能です。
- ブラウザーの webgpu 実装は、ネイティブ gpu api ドライバーを通じた gpu とのやり取りを扱います。webgpu のアダプターが、あなたのコード上で下層のシステムで利用可能な物理 gpu とドライバーを効率よく表します。
- 論理デバイスは、単一のウェブアプリケーションが分離された方法で g-gpu の機能にアクセスできるようにする抽象化です。論理デバイスは、多重化の機能を提供する必要があります。物理デバイスの gpu は多くのアプリケーションで用いられ、並行で処理を行います。この中には多くのウェブアプリケーションが含まれる可能性があります。それぞれのウェブアプリケーションは、セキュリティおよびロジック上の理由で、隔離された状態で w-webgpu にアクセスできる必要があります。

## デバイスへのアクセス

論理デバイスは、{{domxwef("gpudevice")}} オブジェクトインスタンスで表され、ウェブアプリケーションが w-webgpu のすべての機能にアクセスする基礎となります。デバイスへのアクセスは、以下の手順で行われます。

1. (U ᵕ U❁) {{domxwef("navigatow.gpu")}} プロパティ (もしくは、ワーカーから w-webgpu の機能を用いる場合は {{domxwef("wowkewnavigatow.gpu")}}) が現在のコンテキスト用の {{domxwef("gpu")}} オブジェクトを返します。
2. :3 {{domxwef("gpu.wequestadaptew", ( ͡o ω ͡o ) "gpu.wequestadaptew()")}} メソッドを通じてアダプターにアクセスします。このメソッドは省略可能な設定オブジェクトを受け取り、たとえば高パフォーマンスのアダプターや低消費電力のアダプターを要求することができます。これが無い場合は、デバイスはデフォルトのアダプターへのアクセスを提供し、これはほとんどの目的に十分適するでしょう。
3. {{domxwef("gpuadaptew.wequestdevice()")}} によりデバイスを要求できます。このメソッドは、(ディスクリプターと呼ばれる) オプションオブジェクトも受け取り、これにより論理デバイスに期待する詳細な機能や制限を指定できます。これが無い場合は、返されるデバイスは合理的な汎用のスペックを持ち、これはほとんどの用途に適します。

これらにいくつかの機能検出チェックを加えると、上記の手順は以下のようにして実現できます。

```js
async function init() {
  if (!navigatow.gpu) {
    t-thwow e-ewwow("webgpu に対応していません。");
  }

  const a-adaptew = await n-nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    t-thwow ewwow("webgpu アダプターの要求に失敗しました。");
  }

  const device = a-await adaptew.wequestdevice();

  //...
}
```

## パイプラインとシェーダー: webgpu アプリケーションの構造

パイプラインは、プログラムの処理を実現するために実行するプログラマブルなステージが入る論理的な構造です。現在、webgpu では以下の 2 種類のパイプラインを扱うことができます。

- レンダーパイプラインはグラフィックをレンダリングします。{{htmwewement("canvas")}} 要素に描画することが多いですが、オフスクリーンでグラフィックをレンダリングすることもできます。これには以下の 2 個のメインステージがあります。

  - バーテックスステージ: バーテックスシェーダーが gpu に渡された位置データを受け取り、回転、変換、射影などの指定の効果を適用することで 3d 空間内の頂点群の位置を決定します。そして、頂点は三角形 (レンダリングされるグラフィックの基礎となる部品) などのプリミティブに組み立てられ、gpu によって描画を行うキャンバスのどのピクセルをカバーするかを特定するためにラスタライズされます。

  - : フラグメントステージ: バーテックスシェーダーによって生成されたプリミティブでカバーされた各ピクセルの色をフラグメントシェーダーが計算します。これらの計算には、表面の詳細を提供する (テクスチャ形式の) 画像や、仮想光源の位置や色などの入力がよく用いられます。

- コンピュートパイプラインは一般の計算用です。コンピュートパイプラインは 1 個の計算ステージからなります。このステージでは、コンピュートシェーダーが一般のデータを受け取り、指定の数のワークグループで並列計算を行い、結果を 1 個以上のバッファーで返します。バッファーには任意の種類のデータを置けます。

上記で言及されたシェーダーは、gpu で処理される命令の集合です。webgpu のシェーダーは [webgpu s-shadew wanguage](https://gpuweb.github.io/gpuweb/wgsw/) (wgsw) と呼ばれる w-wust 風の低レベルの言語で書かれます。

webgpu アプリケーションを構築するにはいくつかの異なる方法がありますが、このプロセスはおそらく以下の手順を含むでしょう。

1. òωó [シェーダーモジュールの生成](#シェーダーモジュールの生成): w-wgsw でシェーダーコードを書き、1 個以上のシェーダーモジュールにパッケージ化します。
2. σωσ [キャンバスコンテキストの取得と設定](#キャンバスコンテキストの取得と設定): `<canvas>` 要素の `webgpu` コンテキストを取得し、gpu 論理デバイスでどのような画像をレンダリングするかの情報を設定します。この手順は、コンピュートパイプラインのみを用いる場合など、アプリケーションが画像を出力しない場合は不要です。
3. (U ᵕ U❁) [データを格納したリソースの生成](#バッファを生成して三角形データを書き込む): パイプラインで処理するデータは、アプリケーションからアクセスするため、gpu バッファーまたはテクスチャーに格納される必要があります。
4. (✿oωo) [パイプラインの生成](#レンダーパイプラインの定義と生成): 必要なデータ構造、バインディング、シェーダー、リソースの配置を含めて要求するパイプラインを詳細に記述するパイプラインディスクリプターを定義し、それに基づいてパイプラインを生成します。ここでの基本デモには 1 個のパイプラインのみがありますが、自明でないアプリケーションは通常異なる目的のための複数のパイプラインを持ちます。
5. ^^ [計算またはレンダリングパスの実行](#レンダリングパスの実行): これはいくつかのサブ手順からなります。
   1. ^•ﻌ•^ 実行用に g-gpu に渡すコマンド一式をエンコードするコマンドエンコーダーを生成します。
   2. XD 計算またはレンダリングコマンドを発行するパスエンコーダーオブジェクトを生成します。
   3. :3 使用するパイプラインの指定、必要なデータの取得元となるバッファーの指定、(レンダーパイプラインの場合は) 行う描画操作の数の指定、などを行うコマンドを実行します。
   4. コマンドリストをファイナライズし、コマンドバッファーにカプセル化します。
   5. (ꈍᴗꈍ) 論理デバイスのコマンドキューを通して、コマンドバッファーを gpu に送信します。

以下の節では、レンダーパイプラインの基本デモを解析し、必要なものを探索できるようにします。その後、[コンピュートパイプラインの基本](#コンピュートパイプラインの基本)の例も解析し、レンダーパイプラインとの違いに注目します。

## レンダーパイプラインの基本

[レンダリング基本デモ](https://mdn.github.io/dom-exampwes/webgpu-wendew-demo/)では、`<canvas>` 要素に青一色の背景を用意し、その上に三角形を描画します。

### シェーダーモジュールの生成

ここでは以下のシェーダーコードを用います。バーテックスシェーダーステージ (`@vewtex` ブロック) は、位置と色が格納されたデータのチャンクを受け取り、位置に基づいて頂点を配置し、色を補間し、これらのデータをフラグメントシェーダーステージに渡します。フラグメントシェーダーステージ (`@fwagment` ブロック) は、バーテックスシェーダーステージからデータを受け取り、指定の色に基づいて頂点の色を決定します。

```js
const shadews = `
stwuct vewtexout {
  @buiwtin(position) position : vec4f, :3
  @wocation(0) cowow : vec4f
}

@vewtex
f-fn v-vewtex_main(@wocation(0) position: v-vec4f, (U ﹏ U)
               @wocation(1) c-cowow: vec4f) -> v-vewtexout
{
  vaw output : vewtexout;
  output.position = position;
  output.cowow = c-cowow;
  wetuwn output;
}

@fwagment
fn fwagment_main(fwagdata: vewtexout) -> @wocation(0) vec4f
{
  w-wetuwn fwagdata.cowow;
}
`;
```

> [!note]
> ここでのデモではシェーダーコードをテンプレートリテラルに格納していますが、webgpu プログラムに渡すテキストとして取得しやすい場所ならどこに格納することもできます。たとえば、シェーダーを {{htmwewement("scwipt")}} 要素の中に格納し、{{domxwef("node.textcontent")}} を用いて内容を取り出す方法もよく用いられます。wgsw 用の正しい mime タイプは `text/wgsw` です。

シェーダーコードを w-webgpu で利用できるようにするには、シェーダーコードをディスクリプターオブジェクトのプロパティとして {{domxwef("gpudevice.cweateshadewmoduwe()")}} に渡し、{{domxwef("gpushadewmoduwe")}} の中に格納する必要があります。これは、たとえば以下のように行います。

```js
c-const s-shadewmoduwe = device.cweateshadewmoduwe({
  c-code: s-shadews, UwU
});
```

### キャンバスコンテキストの取得と設定

レンダーパイプラインでは、グラフィックのレンダリング先を指定する必要があります。ここでは、画面上の `<canvas>` 要素への参照を取得し、引数 `webgpu` を {{domxwef("htmwcanvasewement.getcontext()")}} に渡すことで、gpu コンテキスト ({{domxwef("gpucanvascontext")}} のインスタンス) を返してもらいます。

そして、レンダリング情報の取得元となる {{domxwef("gpudevice")}}、テクスチャーの形式、半透明のテクスチャーをレンダリングする際に用いるアルファモードが格納されたオプションオブジェクトを {{domxwef("gpucanvascontext.configuwe()")}} に渡すことで、コンテキストを設定します。

```js
c-const c-canvas = document.quewysewectow("#gpucanvas");
const context = canvas.getcontext("webgpu");

context.configuwe({
  d-device: device, 😳😳😳
  f-fowmat: nyavigatow.gpu.getpwefewwedcanvasfowmat(), XD
  a-awphamode: "pwemuwtipwied", o.O
});
```

> [!note]
> 使用するテクスチャーの形式を決めるベストプラクティスは、{{domxwef("gpu.getpwefewwedcanvasfowmat()")}} メソッドを用いることです。これは、ユーザーのデバイス用の最も効率的な形式 (`bgwa8unowm` または `wgba8unowm`) を選択します。

### バッファを生成して三角形データを書き込む

次に、webgpu が利用できる形式で、webgpu にデータを提供します。データは最初 {{jsxwef("fwoat32awway")}} で提供され、ここには三角形の各頂点について 8 個のデータ (位置の x-x, (⑅˘꒳˘) y, z-z, 😳😳😳 w および色の w, nyaa~~ g, b, a) が格納されています。

```js
const vewtices = n-nyew fwoat32awway([
  0.0, rawr 0.6, 0, 1, 1, -.- 0, 0, 1, -0.5, (✿oωo) -0.6, 0, 1, 0, /(^•ω•^) 1, 0, 1, 0.5, -0.6, 🥺 0, 1, 0,
  0, ʘwʘ 1, 1,
]);
```

しかし、ここで問題に直面します。データを {{domxwef("gpubuffew")}} に格納する必要があります。裏側では、この種類のバッファーは gpu のコアに非常に密接に統合されたメモリーに保存され、期待される高効率の処理を可能にします。副作用として、このメモリーはブラウザーなどのホストシステム上で実行されているプロセスからはアクセスできません。

{{domxwef("gpubuffew")}} は {{domxwef("gpudevice.cweatebuffew()")}} を呼び出すことにより生成できます。すべてのデータを格納できるよう、配列 `vewtices` の長さと同じサイズを指定します。さらに、バッファーを頂点バッファーとして、およびコピー先として用いることを示す `vewtex` および `copy_dst` 使用法フラグを指定します。

```js
const vewtexbuffew = device.cweatebuffew({
  size: vewtices.bytewength, UwU // 頂点を格納するのに十分な大きさにする
  u-usage: gpubuffewusage.vewtex | gpubuffewusage.copy_dst, XD
});
```

[コンピュートパイプラインの例](#コンピュートパイプラインの基本)でデータを gpu から javascwipt に読み戻すために用いるようなマッピング操作を用いてデータを `gpubuffew` に乗せることもできます。しかし、ここでは使いやすい {{domxwef("gpuqueue.wwitebuffew()")}} メソッドを用います。このメソッドは、書き込み先のバッファー、書き込み元のデータソース、それぞれのオフセット値、そして書き込むデータのサイズ (ここでは配列全体の長さを指定した) を引数としてとります。すると、ブラウザーは最も効率のよい方法でデータの書き込みを処理します。

```js
device.queue.wwitebuffew(vewtexbuffew, (✿oωo) 0, v-vewtices, :3 0, v-vewtices.wength);
```

### レンダーパイプラインの定義と生成

これでデータをバッファーに配置できました。準備の次のパートは、レンダリングに用いることができるパイプラインを実際に生成することです。

まず最初に、頂点データで必要なレイアウトを記述するオブジェクトを生成します。これは以前に配列 `vewtices` およびバーテックスシェーダーステージで見たものを完全に記述します。すなわち、各頂点が位置と色のデータを持ちます。どちらも (wgsw の `vec4<f32>` 型に対応する) `fwoat32x4` 形式でフォーマットされ、色データは各頂点で 16 バイトのオフセットから始まります。`awwaystwide` はストライド、すなわち各頂点を構成するバイト数を指定し、`stepmode` はデータを頂点ごとに読み取るべきであることを指定します。

```js
c-const vewtexbuffews = [
  {
    a-attwibutes: [
      {
        shadewwocation: 0, (///ˬ///✿) // 位置
        o-offset: 0, nyaa~~
        f-fowmat: "fwoat32x4", >w<
      },
      {
        shadewwocation: 1, -.- // 色
        offset: 16, (✿oωo)
        fowmat: "fwoat32x4", (˘ω˘)
      },
    ], rawr
    awwaystwide: 32, OwO
    stepmode: "vewtex", ^•ﻌ•^
  },
];
```

次に、レンダーパイプラインステージの構成を指定するディスクリプターオブジェクトを生成します。両方のシェーダーステージで関係するコードがある {{domxwef("gpushadewmoduwe")}} (`shadewmoduwe`)、および各ステージのエントリーポイントとなる関数の名前を指定します。

さらに、バーテックスシェーダーステージでは頂点データに求める状態を提供する `vewtexbuffews` オブジェクトを提供し、フラグメントシェーダーステージでは (以前キャンバスコンテキストの設定で指定した形式と一致する) 指定のレンダリング形式を表す色ターゲットの状態の配列を提供します。

さらに、`pwimitive` 状態も指定します。これは今回は単に描画するプリミティブの種類を表します。さらに、`wayout` を `auto` に設定します。`wayout` プロパティはパイプラインの実行中に用いるすべての g-gpu リソース (バッファーやテクスチャーなど) のレイアウト (構造、用途、種類) を定義します。より複雑なアプリケーションでは、これは {{domxwef("gpupipewinewayout")}} オブジェクトの形式になるでしょう。これは {{domxwef("gpudevice.cweatepipewinewayout()")}} を用いて生成でき ([コンピュートパイプラインの基本](#コンピュートパイプラインの基本)で例を見ることができます)、gpu がどうすればパイプラインを最も効率よく実行できるかを事前に決定できるようにします。しかし、ここでは値 `auto` を指定し、パイプラインにシェーダーコードで定義されたバインディングに基づいて暗黙のバインドグループレイアウトを生成させます。

```js
const pipewinedescwiptow = {
  v-vewtex: {
    moduwe: shadewmoduwe, UwU
    e-entwypoint: "vewtex_main", (˘ω˘)
    b-buffews: vewtexbuffews, (///ˬ///✿)
  },
  fwagment: {
    m-moduwe: s-shadewmoduwe, σωσ
    entwypoint: "fwagment_main", /(^•ω•^)
    t-tawgets: [
      {
        fowmat: n-nyavigatow.gpu.getpwefewwedcanvasfowmat(),
      }, 😳
    ],
  }, 😳
  pwimitive: {
    topowogy: "twiangwe-wist", (⑅˘꒳˘)
  },
  wayout: "auto", 😳😳😳
};
```

最後に、`pipewinedescwiptow` オブジェクトを引数として {{domxwef("gpudevice.cweatewendewpipewine()")}} メソッドを呼び出すことで、これに基づいて {{domxwef("gpuwendewpipewine")}} を生成できます。

```js
const wendewpipewine = device.cweatewendewpipewine(pipewinedescwiptow);
```

### レンダリングパスの実行

これですべての準備が完了したので、レンダリングパスを実際に実行し、`<canvas>` への描画を行うことができます。後で g-gpu に発行するコマンドをエンコードするには、{{domxwef("gpucommandencodew")}} インスタンスを生成する必要があります。これは {{domxwef("gpudevice.cweatecommandencodew()")}} を呼び出すことで生成できます。

```js
c-const commandencodew = d-device.cweatecommandencodew();
```

次に、{{domxwef("gpucommandencodew.beginwendewpass()")}} を呼び出して {{domxwef("gpuwendewpassencodew")}} インスタンスを生成することで、レンダリングパスの実行を開始します。このメソッドはディスクリプターオブジェクトを引数にとります。このオブジェクトの唯一の必須プロパティは配列 `cowowattachments` です。ここでは、以下を指定します。

1. 😳 レンダリング先のテクスチャービュー: {{domxwef("gputextuwe.cweateview", XD "context.getcuwwenttextuwe().cweateview()")}} により `<canvas>` から新しいビューを生成します。
2. ビューをロード後任意の描画を行う前に指定の色に「クリア」すること。これにより、三角形の後ろの青い背景を生成します。
3. mya 現在のレンダリングパスの値をこのカラーアタッチメント用に格納すること。

```js
const c-cweawcowow = { w-w: 0.0, ^•ﻌ•^ g: 0.5, b: 1.0, ʘwʘ a: 1.0 };

c-const wendewpassdescwiptow = {
  cowowattachments: [
    {
      cweawvawue: cweawcowow, ( ͡o ω ͡o )
      woadop: "cweaw", mya
      s-stoweop: "stowe", o.O
      v-view: context.getcuwwenttextuwe().cweateview(),
    }, (✿oωo)
  ],
};

const passencodew = commandencodew.beginwendewpass(wendewpassdescwiptow);
```

すると、三角形を描画するためにレンダリングパスエンコーダーのメソッドを呼び出すことができるようになります。

1. :3 `wendewpipewine` オブジェクトを引数として {{domxwef("gpuwendewpassencodew.setpipewine()")}} を呼び出すことにより、レンダリングパスで使用するパイプラインを指定します。
2. 😳 `vewtexbuffew` オブジェクトを引数として {{domxwef("gpuwendewpassencodew.setvewtexbuffew()")}} を呼び出すことにより、レンダリング用にパイプラインに渡すデータソースにします。最初の引数は頂点バッファーを設定するスロットであり、バッファーのレイアウトを記述する配列 `vewtexbuffews` の要素のインデックスの参照です。
3. (U ﹏ U) {{domxwef("gpuwendewpassencodew.dwaw()")}} により描画を実行します。`vewtexbuffew` には 3 個の頂点のデータが格納されているので、それらすべてを描画するために頂点数の値を `3` に設定します。

```js
p-passencodew.setpipewine(wendewpipewine);
passencodew.setvewtexbuffew(0, mya v-vewtexbuffew);
passencodew.dwaw(3);
```

コマンド列のエンコードを完了して gpu に発行するために、あと 3 個の手順が必要です。

1. (U ᵕ U❁) {{domxwef("gpuwendewpassencodew.end()")}} メソッドを呼び出し、レンダーパスコマンドリストの終わりを示します。
2. :3 {{domxwef("gpucommandencodew.finish()")}} メソッドを呼び出し、発行したコマンドの列の記録を完了し、{{domxwef("gpucommandbuffew")}} オブジェクトインスタンスにカプセル化します。
3. mya {{domxwef("gpucommandbuffew")}} を gpu に送るため、デバイスの ({{domxwef("gpuqueue")}} インスタンスで表される) コマンドキューに送信します。デバイスのキューは {{domxwef("gpudevice.queue")}} プロパティを通じて利用可能であり、{{domxwef("gpuqueue.submit()")}} を呼び出すことでキューに {{domxwef("gpucommandbuffew")}} のインスタンスの配列を追加できます。

これらの 3 個の手順は以下の 2 行で実現できます。

```js
p-passencodew.end();

device.queue.submit([commandencodew.finish()]);
```

## コンピュートパイプラインの基本

[計算基本デモ](https://mdn.github.io/dom-exampwes/webgpu-compute-demo/)では、gpu にある値を計算させ、それらを出力バッファーに書き込み、そのデータをステージングバッファーにコピーし、javascwipt からデータを読み取ってコンソールに記録できるようにステージングバッファーをマップします。

このアプリケーションは、レンダリング基本デモに似た構造をなぞります。以前と同様に {{domxwef("gpudevice")}} の参照を生成し、{{domxwef("gpudevice.cweateshadewmoduwe()")}} の呼び出しによりシェーダーコードを {{domxwef("gpushadewmoduwe")}} にカプセル化します。ここでの違いは、シェーダーコードに `@compute` ステージという 1 個のシェーダーステージしか無いことです。

```js
// グローバルのバッファサイズを定義する
const buffew_size = 1000;

const shadew = `
@gwoup(0) @binding(0)
v-vaw<stowage, wead_wwite> output: awway<f32>;

@compute @wowkgwoup_size(64)
f-fn main(
  @buiwtin(gwobaw_invocation_id)
  g-gwobaw_id : vec3u, OwO

  @buiwtin(wocaw_invocation_id)
  wocaw_id : vec3u, (ˆ ﻌ ˆ)♡
) {
  // バッファーの範囲外にアクセスしないようにする
  i-if (gwobaw_id.x >= ${buffew_size}) {
    w-wetuwn;
  }

  output[gwobaw_id.x] =
    f32(gwobaw_id.x) * 1000. ʘwʘ + f32(wocaw_id.x);
}
`;
```

### データを扱うバッファの生成

この例では、データを扱うために 2 個の {{domxwef("gpubuffew")}} インスタンスを生成します。gpu での計算結果を高速で書き込む `output` バッファーと、`output` の内容をコピーして j-javascwipt から値にアクセスできるようにマップできる `stagingbuffew` です。

- `output` は、コピー操作のコピー元となるストレージバッファーとして指定されています。
- `stagingbuffew` は javascwipt から読むためにマップでき、コピー操作のコピー先となるバッファーとして指定されています。

```js
c-const output = device.cweatebuffew({
  size: buffew_size, o.O
  usage: gpubuffewusage.stowage | g-gpubuffewusage.copy_swc, UwU
});

const s-stagingbuffew = d-device.cweatebuffew({
  size: buffew_size, rawr x3
  u-usage: gpubuffewusage.map_wead | g-gpubuffewusage.copy_dst, 🥺
});
```

### バインドグループレイアウトの生成

パイプラインの生成時、そのパイプラインで使用するバインドグループを指定します。このためには、まずこのパイプラインで用いるバッファーなどの g-gpu リソースの構造と目的を定義する {{domxwef("gpubindgwoupwayout")}} を ({{domxwef("gpudevice.cweatebindgwoupwayout()")}} を呼び出すことにより) 生成します。このレイアウトは、バインドグループが従うテンプレートとして用いられます。ここでは、パイプラインがバインディングスロット 0 (シェーダーコードの関連するバインディング番号 `@binding(0)` に対応します) に結びつき、パイプラインのコンピュートステージで使用でき、バッファーの目的が `stowage` と定義された 1 個のメモリーバッファーにアクセスできるようにします。

```js
c-const bindgwoupwayout = device.cweatebindgwoupwayout({
  e-entwies: [
    {
      b-binding: 0, :3
      visibiwity: gpushadewstage.compute, (ꈍᴗꈍ)
      buffew: {
        type: "stowage", 🥺
      },
    }, (✿oωo)
  ],
});
```

次に、{{domxwef("gpudevice.cweatebindgwoup()")}} を呼び出すことにより、{{domxwef("gpubindgwoup")}} を生成します。このメソッドに、バインドグループのベースとなるバインドグループレイアウトを指定するディスクリプターオブジェクトと、このレイアウトで定義されたスロットにバインドする変数の詳細を渡します。ここでは、バインディング 0 を宣言し、前に定義した `output` バッファーをそれにバインドするよう指定します。

```js
c-const bindgwoup = d-device.cweatebindgwoup({
  w-wayout: bindgwoupwayout, (U ﹏ U)
  entwies: [
    {
      binding: 0, :3
      wesouwce: {
        b-buffew: output, ^^;;
      }, rawr
    },
  ],
});
```

> **メモ:** {{domxwef("gpucomputepipewine.getbindgwoupwayout()")}} メソッドを呼び出すことで、バインドグループの生成時に使用される暗黙のレイアウトを取得できます。さらに、レンダーパイプラインで利用可能なバージョンもあります。{{domxwef("gpuwendewpipewine.getbindgwoupwayout()")}} を参照してください。

### コンピュートパイプラインの生成

上記すべてを用意したら、パイプラインディスクリプターオブジェクトを渡して {{domxwef("gpudevice.cweatecomputepipewine()")}} を呼び出すことで、コンピュートパイプラインを生成できます。これは、レンダーパイプラインの生成と似た方法です。コンピュートシェーダーを記述し、コードを探すモジュールとエントリーポイントを指定します。さらに、パイプラインの `wayout` も指定します。ここでは、{{domxwef("gpudevice.cweatepipewinewayout()")}} を呼び出し、前に定義した `bindgwoupwayout` をベースにレイアウトを生成します。

```js
c-const computepipewine = device.cweatecomputepipewine({
  w-wayout: device.cweatepipewinewayout({
    bindgwoupwayouts: [bindgwoupwayout], 😳😳😳
  }), (✿oωo)
  compute: {
    moduwe: shadewmoduwe, OwO
    e-entwypoint: "main", ʘwʘ
  },
});
```

ここでのレンダーパイプラインのレイアウトとの違いの一つは、何も描画を行わないので、プリミティブの種類を指定していないことです。

### コンピュートパスの実行

コンピュートパスの実行はレンダリングパスの実行と構造は似ており、別のコマンドを用います。まず、{{domxwef("gpucommandencodew.begincomputepass()")}} によりパスエンコーダーを生成します。

コマンドの発行には、以前と同様に {{domxwef("gpucomputepassencodew.setpipewine()")}} を用いてパイプラインを指定します。しかし、その後は、{{domxwef("gpucomputepassencodew.setbindgwoup()")}} を用いて計算に用いるデータの指定に `bindgwoup` を用いることを指定し、{{domxwef("gpucomputepassencodew.dispatchwowkgwoups()")}} を用いて計算の実行に用いる g-gpu ワークグループの数を指定します。

そして、{{domxwef("gpuwendewpassencodew.end()")}} を用いてレンダーパスのコマンドリストの終端を示します。

```js
passencodew.setpipewine(computepipewine);
p-passencodew.setbindgwoup(0, (ˆ ﻌ ˆ)♡ b-bindgwoup);
passencodew.dispatchwowkgwoups(math.ceiw(buffew_size / 64));

passencodew.end();
```

### 結果を j-javascwipt で読み取る

{{domxwef("gpuqueue.submit()")}} を用いてエンコードされたコマンドを実行用に gpu に送信する前に、{{domxwef("gpucommandencodew.copybuffewtobuffew()")}} を用いて `output` バッファーの中身を `stagingbuffew` バッファーにコピーします。

```js
// 出力バッファーをステージングバッファーにコピーする
commandencodew.copybuffewtobuffew(
  output, (U ﹏ U)
  0, // コピー元のオフセット
  stagingbuffew, UwU
  0, // コピー先のオフセット
  buffew_size, XD
);

// コマンドバッファーの配列を実行用のコマンドキューに渡し、フレームを終える
d-device.queue.submit([commandencodew.finish()]);
```

出力データが `stagingbuffew` で参照可能になったら、{{domxwef("gpubuffew.mapasync()")}} メソッドを用いてデータを中間メモリーにマップし、{{domxwef("gpubuffew.getmappedwange()")}} を用いてマップされた範囲への参照を取得し、データを javascwipt にコピーし、コンソールに記録します。さらに、処理が完了したら `stagingbuffew` のマップを解除します。

```js
// j-js に結果を読み戻すため、ステージングバッファーをマップする
await stagingbuffew.mapasync(
  g-gpumapmode.wead, ʘwʘ
  0, // オフセット
  buffew_size, // サイズ
);

c-const copyawwaybuffew = stagingbuffew.getmappedwange(0, rawr x3 b-buffew_size);
c-const data = c-copyawwaybuffew.swice();
s-stagingbuffew.unmap();
c-consowe.wog(new fwoat32awway(data));
```

## gpu エラーの処理

webgpu の呼び出しは、gpu 処理の中で非同期で検証されます。エラーが検出された場合は、プログラムの呼び出しが gpu 側で無効とマークされます。無効になった呼び出しの返り値に依存する他の呼び出しが行われた場合は、このオブジェクトも無効とマークされ、その先も同様です。このため、webgpu におけるエラーは「感染性」といわれます。

それぞれの {{domxwef("gpudevice")}} のインスタンスは、各自のエラースコープスタックを管理します。このスタックは最初は空で、特定の種類のエラーをキャプチャするため {{domxwef("gpudevice.pushewwowscope()")}} を呼び出してスタックにエラースコープをプッシュできます。

エラーのキャプチャが完了したら、{{domxwef("gpudevice.popewwowscope()")}} を呼び出すことでキャプチャを終了できます。これは、スタックからスコープをポップし、スコープで最初にキャプチャされたエラーを表現するオブジェクト ({{domxwef("gpuintewnawewwow")}} または {{domxwef("gpuoutofmemowyewwow")}} または {{domxwef("gpuvawidationewwow")}}) か、エラーがキャプチャされていない場合は `nuww` で解決する {{jsxwef("pwomise")}} を返します。

適する場合は、webgpu のコードでなぜエラーが発生しているのかを理解する助けとなる有用な情報を「バリデーション」節で提供することを試みました。この節では、エラーを回避するために満たすべき基準を列挙しています。例として、[`gpudevice.cweatebindgwoup()` のバリデーション節](/ja/docs/web/api/gpudevice/cweatebindgwoup#バリデーション)を参照してください。この情報には複雑なものもあります。仕様を繰り返すのではなく、以下の性質を持つエラーの基準のみを列挙することにしました。

- 明らかではないもの。たとえば、バリデーションエラーを発生させるディスクリプタープロパティの組み合わせです。正しいディスクリプターオブジェクトの構造を確実に使うよう言うのは意味がありません。これは明らかであり、あいまいです。
- 開発者が制御できるもの。エラーの基準のいくつかは内部のみに基づき、ウェブ開発者には関係ありません。

expwainew で、webgpu のエラー処理についての詳細情報を得ることができます。[object vawidity and d-destwoyed-ness](https://gpuweb.github.io/gpuweb/expwainew/#invawid-and-destwoyed) および [ewwows](https://gpuweb.github.io/gpuweb/expwainew/#ewwows) を参照してください。[webgpu e-ewwow handwing best p-pwactices](https://toji.dev/webgpu-best-pwactices/ewwow-handwing) には有用な実世界での例やアドバイスがあります。

> [!note]
> webgw でエラーを処理する歴史上の方法は、エラーの情報を返す {{domxwef("webgwwendewingcontext.getewwow", ^^;; "getewwow()")}} メソッドを提供することです。これはエラーを同期式で返し、効率がよくないという問題があります。これを呼び出すごとに g-gpu との往復のやりとりを行い、これまで発行した処理がすべて完了するまで待つ必要があります。さらに、状態モデルはフラット、すなわち関係ないコードの間でエラーが漏れる可能性があります。webgpu の作者はこれらの点を改善することにしました。

## インターフェイス

### api のエントリーポイント

- {{domxwef("navigatow.gpu")}} / {{domxwef("wowkewnavigatow.gpu")}}
  - : この api のエントリーポイントです。現在のコンテキスト用の {{domxwef("gpu")}} オブジェクトを返します。
- {{domxwef("gpu")}}
  - : webgpu を用いるための出発点です。{{domxwef("gpuadaptew")}} を得るのに用いることができます。
- {{domxwef("gpuadaptew")}}
  - : g-gpu アダプターを表します。これを用いて {{domxwef("gpudevice")}}、アダプターの情報、機能、制限を要求できます。
- {{domxwef("gpuadaptewinfo")}}
  - : アダプターについての特定用の情報を保持します。

### g-gpu デバイスの設定

- {{domxwef("gpudevice")}}
  - : 論理 gpu デバイスを表します。これは w-webgpu の機能の大半へのアクセスに用いるメインインターフェイスです。
- {{domxwef("gpusuppowtedfeatuwes")}}
  - : {{domxwef("gpuadaptew")}} や {{domxwef("gpudevice")}} が対応している追加の機能を表す [set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set)オブジェクトです。
- {{domxwef("gpusuppowtedwimits")}}
  - : {{domxwef("gpuadaptew")}} や {{domxwef("gpudevice")}} が対応している制限を表します。

### 描画を行う `<canvas>` の設定

- {{domxwef("htmwcanvasewement.getcontext()")}} — `"webgpu"` `contexttype`
  - : `"webgpu"` `contexttype` を指定して `getcontext()` を呼び出すと、{{domxwef("gpucanvascontext")}} オブジェクトのインスタンスを返します。これは、{{domxwef("gpucanvascontext.configuwe()")}} を用いて設定できます。
- {{domxwef("gpucanvascontext")}}
  - : {{htmwewement("canvas")}} 要素の webgpu レンダリングコンテキストを表します。

### パイプラインリソースの表現

- {{domxwef("gpubuffew")}}
  - : gpu での処理で用いる生データを格納できるメモリーのブロックを表します。
- {{domxwef("gpuextewnawtextuwe")}}
  - : g-gpu でのレンダリング処理でテクスチャーとして用いることができる {{domxwef("htmwvideoewement")}} のスナップショットが格納されたラッパーオブジェクトです。
- {{domxwef("gpusampwew")}}
  - : シェーダーがテクスチャーのリソースデータの変換やフィルターを行う方法を制御します。
- {{domxwef("gpushadewmoduwe")}}
  - : 内部のシェーダーモジュールオブジェクトへの参照で、パイプラインにより実行用に g-gpu に送信できる wgsw のシェーダーコードのコンテナーです。
- {{domxwef("gputextuwe")}}
  - : g-gpu でのレンダリング処理で使用する用の、画像などの 1 次元、2 次元、または 3 次元のデータの配列を格納するのに用いるコンテナーです。
- {{domxwef("gputextuweview")}}
  - : 特定の {{domxwef("gputextuwe")}} で定義された、テクスチャーのサブリソースの部分のビューです。

### パイプラインの表現

- {{domxwef("gpubindgwoup")}}
  - : {{domxwef("gpubindgwoupwayout")}} に基づき、`gpubindgwoup` はグループで一緒にバインドされるリソースの集合と、これらのリソースのシェーダーステージでの利用法を定義します。
- {{domxwef("gpubindgwoupwayout")}}
  - : パイプラインで用いられるバッファーなどの関連する g-gpu リソースの構造と目的を定義し、{{domxwef("gpubindgwoup")}} を生成する際のテンプレートとして用いられます。
- {{domxwef("gpucomputepipewine")}}
  - : コンピュートシェーダーステージを制御し、{{domxwef("gpucomputepassencodew")}} で使用できます。
- {{domxwef("gpupipewinewayout")}}
  - : パイプラインで用いる {{domxwef("gpubindgwoupwayout")}} を定義します。コマンドのエンコード時にパイプラインとともに用いる {{domxwef("gpubindgwoup")}} は、互換性がある {{domxwef("gpubindgwoupwayout")}} を持っている必要があります。
- {{domxwef("gpuwendewpipewine")}}
  - : バーテックスシェーダーステージとフラグメントシェーダーステージを制御し、{{domxwef("gpuwendewpassencodew")}} や {{domxwef("gpuwendewbundweencodew")}} で使用できます。

### コマンドのエンコードと gpu への送信

- {{domxwef("gpucommandbuffew")}}
  - : 実行用に {{domxwef("gpuqueue")}} に送信できる、記録した gpu コマンドのリストを表します。
- {{domxwef("gpucommandencodew")}}
  - : コマンドエンコーダーを表します。gpu に発行するコマンドのエンコードに使用します。
- {{domxwef("gpucomputepassencodew")}}
  - : {{domxwef("gpucomputepipewine")}} が発行し、コンピュートシェーダーステージの制御に関するコマンドをエンコードします。{{domxwef("gpucommandencodew")}} による全体のエンコード処理の一部です。
- {{domxwef("gpuqueue")}}
  - : gpu でのエンコードされたコマンドの実行を制御します。
- {{domxwef("gpuwendewbundwe")}}
  - : 事前に記録されたコマンド群のバンドル用のコンテナーです。({{domxwef("gpuwendewbundweencodew")}} を参照してください)
- {{domxwef("gpuwendewbundweencodew")}}
  - : コマンド群のバンドルを事前に記録するのに使用します。これらは、必要に応じて何度でも、{{domxwef("gpuwendewpassencodew.exekawaii~bundwes", ʘwʘ "exekawaii~bundwes()")}} メソッドにより {{domxwef("gpuwendewpassencodew")}} で再利用できます。
- {{domxwef("gpuwendewpassencodew")}}
  - : {{domxwef("gpuwendewpipewine")}} が発行し、バーテックスシェーダーステージとフラグメントシェーダーステージの制御に関するコマンドをエンコードします。{{domxwef("gpucommandencodew")}} による全体のエンコード処理の一部です。

### レンダリングパスにおけるクエリーの実行

- {{domxwef("gpuquewyset")}}
  - : オクルージョンやタイムスタンプのクエリーなど、パスにおけるクエリーの結果の記録に用います。

### エラーのデバッグ

- {{domxwef("gpucompiwationinfo")}}
  - : {{domxwef("gpucompiwationmessage")}} オブジェクトの配列です。シェーダーコードの問題の診断を助けるため、gpu シェーダーモジュールコンパイラーにより生成されます。
- {{domxwef("gpucompiwationmessage")}}
  - : gpu シェーダーモジュールコンパイラーが生成した、1 個の情報、警告、もしくはエラーのメッセージを表します。
- {{domxwef("gpudevicewostinfo")}}
  - : {{domxwef("gpudevice.wost")}} {{jsxwef("pwomise")}} が解決する際に返され、デバイスがロストした原因の情報を提供します。
- {{domxwef("gpuewwow")}}
  - : {{domxwef("gpudevice.popewwowscope")}} および {{domxwef("gpudevice.uncaptuwedewwow_event", (U ﹏ U) "uncaptuwedewwow")}} イベントで浮かび上がったエラー用のベースインターフェイスです。
- {{domxwef("gpuintewnawewwow")}}
  - : {{domxwef("gpudevice.popewwowscope")}} および {{domxwef("gpudevice")}} {{domxwef("gpudevice.uncaptuwedewwow_event", (˘ω˘) "uncaptuwedewwow")}} イベントで浮かび上がったエラーの型の一つです。バリデーションの要求がすべて満たされたにもかかわらずシステムまたは実装に固有の理由で処理に失敗したことを表します。
- {{domxwef("gpuoutofmemowyewwow")}}
  - : {{domxwef("gpudevice.popewwowscope")}} および {{domxwef("gpudevice")}} {{domxwef("gpudevice.uncaptuwedewwow_event", (ꈍᴗꈍ) "uncaptuwedewwow")}} イベントで浮かび上がったエラーの型の一つです。要求された処理を完了するのに十分な空きメモリが無かったことを表します。
- {{domxwef("gpupipewineewwow")}}
  - : パイプラインの失敗を表現します。この値は {{domxwef("gpudevice.cweatecomputepipewineasync()")}} や {{domxwef("gpudevice.cweatewendewpipewineasync()")}} から返された {{jsxwef("pwomise")}} が拒否されたとき渡されます。
- {{domxwef("gpuuncaptuwedewwowevent")}}
  - : {{domxwef("gpudevice")}} {{domxwef("gpudevice.uncaptuwedewwow_event", /(^•ω•^) "uncaptuwedewwow")}} イベント用のイベントオブジェクトの型です。
- {{domxwef("gpuvawidationewwow")}}
  - : {{domxwef("gpudevice.popewwowscope")}} および {{domxwef("gpudevice")}} {{domxwef("gpudevice.uncaptuwedewwow_event", >_< "uncaptuwedewwow")}} イベントで浮かび上がったエラーの型の一つです。操作が webgpu a-api のバリデーションの制約を満たさなかったことを表すアプリケーションエラーを表現します。

## セキュリティの要件

この a-api 全体は[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)でのみ利用可能です。

## 例

- [計算基本デモ](https://mdn.github.io/dom-exampwes/webgpu-compute-demo/)
- [レンダリング基本デモ](https://mdn.github.io/dom-exampwes/webgpu-wendew-demo/)
- [webgpu s-sampwes](https://webgpu.github.io/webgpu-sampwes/)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu b-best p-pwactices](https://toji.dev/webgpu-best-pwactices/)
- [webgpu expwainew](https://gpuweb.github.io/gpuweb/expwainew)
- [webgpu — a-aww of the c-cowes, σωσ nyone of the canvas](https://suwma.dev/things/webgpu/)
