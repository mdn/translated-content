---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("WebGPU API")}}{{SeeCompatTable}}{{securecontext_header}}

**WebGPU API** は、ウェブ開発者が下層のシステムの GPU (Graphics Processing Unit) を使用し、高効率の計算をしたり、ブラウザーでレンダーできる複雑な画像を描画したりすることを可能にします。

WebGPU は {{domxref("WebGL_API", "WebGL", "", "nocode")}} の後継で、最近の GPU とのより良い互換性を提供し、汎用 GPU 計算に対応し、操作を速くし、さらに高度な GPU の機能へのアクセスを可能にします。

## 概念と使用法

2011 年頃に最初に登場した後、{{domxref("WebGL_API", "WebGL", "", "nocode")}} がグラフィックの能力の面でウェブに革命を起こしたといえます。WebGL は [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) グラフィックライブラリーの JavaScript への移植であり、ウェブページがレンダリング計算をデバイスの GPU に直接渡し、超高速で処理させ、結果を {{htmlelement("canvas")}} 要素内に描画することを可能にします。

WebGL と WebGL シェーダーのコードを書くのに用いられる [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) 言語は複雑なので、WebGL アプリケーションをより簡単に書けるようにするためにいくつかの WebGL ライブラリーが作られました。有名な例としては [Three.js](https://threejs.org/)、[Babylon.js](https://www.babylonjs.com/)、[PlayCanvas](https://playcanvas.com/) などがあります。開発者はこれらのツールを用い、没入感のあるウェブベースの 3D ゲーム、ミュージックビデオ、訓練やモデリングのツール、VR や AR の体験、などを作ってきました。

しかし、WebGL には修正が必要な根本的な問題点がいくつかあります。

- WebGL がリリースされて以降、新世代のネイティブ GPU API が登場しました。最も人気があるのは [Microsoft の Direct3D 12](https://learn.microsoft.com/ja-jp/windows/win32/direct3d12/direct3d-12-graphics)、[Apple の Metal](https://developer.apple.com/metal/)、[The Khronos Group の Vulkan](https://www.vulkan.org/) です。これらは多くの新機能を提供します。OpenGL のアップデートはもう計画されておらず、WebGL も同様なので、これらの新機能は何も導入されません。一方、WebGPU は進歩し、新機能が追加されるでしょう。
- WebGL は完全にグラフィックを描画し、それをキャンバスに描画するというユースケースに基づいており、汎用 GPPU (GPGPU) 計算をあまり上手く扱うことができません。GPGPU 計算は機械学習モデルをベースにするものなど、多くの異なるユースケースでどんどん重要になってきています。
- 3D グラフィックアプリケーションは、同時にレンダリングするオブジェクトの数と新しいレンダリング機能の活用の両面で、負荷が高くなってきています。

WebGPU は、最近の GPU API と互換性があり、より「webby」な感じがする新しい汎用アーキテクチャを提供し、これらの問題点を解決します。グラフィックのレンダリングに対応しているとともに、GPGPU 計算にもよく対応しています。CPU 側での個別のオブジェクトの描画は劇的に軽くなり、計算ベースのパーティクルや、色効果、鮮明化、被写界深度シミュレーションなどの後処理フィルターなどの最近の GPU のレンダリング機能にも対応します。さらに、カリングやスキン付きモデルの変換などの重い計算を直接 GPU で扱うことができます。

## 一般モデル

デバイスの GPU と WebGPU API を実行しているウェブブラウザーの間には、いくつかの抽象化レイヤーがあります。WebGPU の学習を開始する際、これらを理解することは有用です。

![デバイス上の WebGPU アーキテクチャの異なる要素の位置を示す基本の積層図](basic-webgpu-stack.png)

- GPU がある物理デバイス。ほとんどのデバイスには GPU が 1 個だけありますが、複数あるデバイスもあります。以下の異なる GPU の種類が利用可能です。
  - 統合 GPU: CPU と同じ基板にあり、メモリーを共有します。
  - 個別 GPU: 独自の基板にあり、CPU からは分離されています。
  - ソフトウェア「GPU」: CPU 上で実装されています。

  > [!NOTE]
  > 上記の図では、GPU が 1 個だけあるデバイスを仮定しています。

- OS の一部であるネイティブ GPU API (たとえば macOS 上の Metal) は、ネイティブアプリケーションが GPU の機能を用いることができるプログラミングインターフェイスです。API 命令がドライバーを通じて GPU に送られ、結果を受け取ります。上記の図ではネイティブ API およびドライバーが 1 個だけあるデバイスを仮定していますが、システムが GPU とやり取りするための複数のネイティブ OS API やドライバーを持つことも可能です。
- ブラウザーの WebGPU 実装は、ネイティブ GPU API ドライバーを通じた GPU とのやり取りを扱います。WebGPU のアダプターが、あなたのコード上で下層のシステムで利用可能な物理 GPU とドライバーを効率よく表します。
- 論理デバイスは、単一のウェブアプリケーションが分離された方法で GPU の機能にアクセスできるようにする抽象化です。論理デバイスは、多重化の機能を提供する必要があります。物理デバイスの GPU は多くのアプリケーションで用いられ、並行で処理を行います。この中には多くのウェブアプリケーションが含まれる可能性があります。それぞれのウェブアプリケーションは、セキュリティおよびロジック上の理由で、隔離された状態で WebGPU にアクセスできる必要があります。

## デバイスへのアクセス

論理デバイスは、{{domxref("GPUDevice")}} オブジェクトインスタンスで表され、ウェブアプリケーションが WebGPU のすべての機能にアクセスする基礎となります。デバイスへのアクセスは、以下の手順で行われます。

1. {{domxref("Navigator.gpu")}} プロパティ (もしくは、ワーカーから WebGPU の機能を用いる場合は {{domxref("WorkerNavigator.gpu")}}) が現在のコンテキスト用の {{domxref("GPU")}} オブジェクトを返します。
2. {{domxref("GPU.requestAdapter", "GPU.requestAdapter()")}} メソッドを通じてアダプターにアクセスします。このメソッドは省略可能な設定オブジェクトを受け取り、たとえば高パフォーマンスのアダプターや低消費電力のアダプターを要求することができます。これが無い場合は、デバイスはデフォルトのアダプターへのアクセスを提供し、これはほとんどの目的に十分適するでしょう。
3. {{domxref("GPUAdapter.requestDevice()")}} によりデバイスを要求できます。このメソッドは、(ディスクリプターと呼ばれる) オプションオブジェクトも受け取り、これにより論理デバイスに期待する詳細な機能や制限を指定できます。これが無い場合は、返されるデバイスは合理的な汎用のスペックを持ち、これはほとんどの用途に適します。

これらにいくつかの機能検出チェックを加えると、上記の手順は以下のようにして実現できます。

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU に対応していません。");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("WebGPU アダプターの要求に失敗しました。");
  }

  const device = await adapter.requestDevice();

  //...
}
```

## パイプラインとシェーダー: WebGPU アプリケーションの構造

パイプラインは、プログラムの処理を実現するために実行するプログラマブルなステージが入る論理的な構造です。現在、WebGPU では以下の 2 種類のパイプラインを扱うことができます。

- レンダーパイプラインはグラフィックをレンダリングします。{{htmlelement("canvas")}} 要素に描画することが多いですが、オフスクリーンでグラフィックをレンダリングすることもできます。これには以下の 2 個のメインステージがあります。
  - バーテックスステージ: バーテックスシェーダーが GPU に渡された位置データを受け取り、回転、変換、射影などの指定の効果を適用することで 3D 空間内の頂点群の位置を決定します。そして、頂点は三角形 (レンダリングされるグラフィックの基礎となる部品) などのプリミティブに組み立てられ、GPU によって描画を行うキャンバスのどのピクセルをカバーするかを特定するためにラスタライズされます。

  - : フラグメントステージ: バーテックスシェーダーによって生成されたプリミティブでカバーされた各ピクセルの色をフラグメントシェーダーが計算します。これらの計算には、表面の詳細を提供する (テクスチャ形式の) 画像や、仮想光源の位置や色などの入力がよく用いられます。

- コンピュートパイプラインは一般の計算用です。コンピュートパイプラインは 1 個の計算ステージからなります。このステージでは、コンピュートシェーダーが一般のデータを受け取り、指定の数のワークグループで並列計算を行い、結果を 1 個以上のバッファーで返します。バッファーには任意の種類のデータを置けます。

上記で言及されたシェーダーは、GPU で処理される命令の集合です。WebGPU のシェーダーは [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) と呼ばれる Rust 風の低レベルの言語で書かれます。

WebGPU アプリケーションを構築するにはいくつかの異なる方法がありますが、このプロセスはおそらく以下の手順を含むでしょう。

1. [シェーダーモジュールの生成](#シェーダーモジュールの生成): WGSL でシェーダーコードを書き、1 個以上のシェーダーモジュールにパッケージ化します。
2. [キャンバスコンテキストの取得と設定](#キャンバスコンテキストの取得と設定): `<canvas>` 要素の `webgpu` コンテキストを取得し、GPU 論理デバイスでどのような画像をレンダリングするかの情報を設定します。この手順は、コンピュートパイプラインのみを用いる場合など、アプリケーションが画像を出力しない場合は不要です。
3. [データを格納したリソースの生成](#バッファを生成して三角形データを書き込む): パイプラインで処理するデータは、アプリケーションからアクセスするため、GPU バッファーまたはテクスチャーに格納される必要があります。
4. [パイプラインの生成](#レンダーパイプラインの定義と生成): 必要なデータ構造、バインディング、シェーダー、リソースの配置を含めて要求するパイプラインを詳細に記述するパイプラインディスクリプターを定義し、それに基づいてパイプラインを生成します。ここでの基本デモには 1 個のパイプラインのみがありますが、自明でないアプリケーションは通常異なる目的のための複数のパイプラインを持ちます。
5. [計算またはレンダリングパスの実行](#レンダリングパスの実行): これはいくつかのサブ手順からなります。
   1. 実行用に GPU に渡すコマンド一式をエンコードするコマンドエンコーダーを生成します。
   2. 計算またはレンダリングコマンドを発行するパスエンコーダーオブジェクトを生成します。
   3. 使用するパイプラインの指定、必要なデータの取得元となるバッファーの指定、(レンダーパイプラインの場合は) 行う描画操作の数の指定、などを行うコマンドを実行します。
   4. コマンドリストをファイナライズし、コマンドバッファーにカプセル化します。
   5. 論理デバイスのコマンドキューを通して、コマンドバッファーを GPU に送信します。

以下の節では、レンダーパイプラインの基本デモを解析し、必要なものを探索できるようにします。その後、[コンピュートパイプラインの基本](#コンピュートパイプラインの基本)の例も解析し、レンダーパイプラインとの違いに注目します。

## レンダーパイプラインの基本

[レンダリング基本デモ](https://mdn.github.io/dom-examples/webgpu-render-demo/)では、`<canvas>` 要素に青一色の背景を用意し、その上に三角形を描画します。

### シェーダーモジュールの生成

ここでは以下のシェーダーコードを用います。バーテックスシェーダーステージ (`@vertex` ブロック) は、位置と色が格納されたデータのチャンクを受け取り、位置に基づいて頂点を配置し、色を補間し、これらのデータをフラグメントシェーダーステージに渡します。フラグメントシェーダーステージ (`@fragment` ブロック) は、バーテックスシェーダーステージからデータを受け取り、指定の色に基づいて頂点の色を決定します。

```js
const shaders = `
struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}

@vertex
fn vertex_main(@location(0) position: vec4f,
               @location(1) color: vec4f) -> VertexOut
{
  var output : VertexOut;
  output.position = position;
  output.color = color;
  return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f
{
  return fragData.color;
}
`;
```

> [!NOTE]
> ここでのデモではシェーダーコードをテンプレートリテラルに格納していますが、WebGPU プログラムに渡すテキストとして取得しやすい場所ならどこに格納することもできます。たとえば、シェーダーを {{htmlelement("script")}} 要素の中に格納し、{{domxref("Node.textContent")}} を用いて内容を取り出す方法もよく用いられます。WGSL 用の正しい MIME タイプは `text/wgsl` です。

シェーダーコードを WebGPU で利用できるようにするには、シェーダーコードをディスクリプターオブジェクトのプロパティとして {{domxref("GPUDevice.createShaderModule()")}} に渡し、{{domxref("GPUShaderModule")}} の中に格納する必要があります。これは、たとえば以下のように行います。

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### キャンバスコンテキストの取得と設定

レンダーパイプラインでは、グラフィックのレンダリング先を指定する必要があります。ここでは、画面上の `<canvas>` 要素への参照を取得し、引数 `webgpu` を {{domxref("HTMLCanvasElement.getContext()")}} に渡すことで、GPU コンテキスト ({{domxref("GPUCanvasContext")}} のインスタンス) を返してもらいます。

そして、レンダリング情報の取得元となる {{domxref("GPUDevice")}}、テクスチャーの形式、半透明のテクスチャーをレンダリングする際に用いるアルファモードが格納されたオプションオブジェクトを {{domxref("GPUCanvasContext.configure()")}} に渡すことで、コンテキストを設定します。

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

> [!NOTE]
> 使用するテクスチャーの形式を決めるベストプラクティスは、{{domxref("GPU.getPreferredCanvasFormat()")}} メソッドを用いることです。これは、ユーザーのデバイス用の最も効率的な形式 (`bgra8unorm` または `rgba8unorm`) を選択します。

### バッファを生成して三角形データを書き込む

次に、WebGPU が利用できる形式で、WebGPU にデータを提供します。データは最初 {{jsxref("Float32Array")}} で提供され、ここには三角形の各頂点について 8 個のデータ (位置の X, Y, Z, W および色の R, G, B, A) が格納されています。

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

しかし、ここで問題に直面します。データを {{domxref("GPUBuffer")}} に格納する必要があります。裏側では、この種類のバッファーは GPU のコアに非常に密接に統合されたメモリーに保存され、期待される高効率の処理を可能にします。副作用として、このメモリーはブラウザーなどのホストシステム上で実行されているプロセスからはアクセスできません。

{{domxref("GPUBuffer")}} は {{domxref("GPUDevice.createBuffer()")}} を呼び出すことにより生成できます。すべてのデータを格納できるよう、配列 `vertices` の長さと同じサイズを指定します。さらに、バッファーを頂点バッファーとして、およびコピー先として用いることを示す `VERTEX` および `COPY_DST` 使用法フラグを指定します。

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // 頂点を格納するのに十分な大きさにする
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

[コンピュートパイプラインの例](#コンピュートパイプラインの基本)でデータを GPU から JavaScript に読み戻すために用いるようなマッピング操作を用いてデータを `GPUBuffer` に乗せることもできます。しかし、ここでは使いやすい {{domxref("GPUQueue.writeBuffer()")}} メソッドを用います。このメソッドは、書き込み先のバッファー、書き込み元のデータソース、それぞれのオフセット値、そして書き込むデータのサイズ (ここでは配列全体の長さを指定した) を引数としてとります。すると、ブラウザーは最も効率のよい方法でデータの書き込みを処理します。

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### レンダーパイプラインの定義と生成

これでデータをバッファーに配置できました。準備の次のパートは、レンダリングに用いることができるパイプラインを実際に生成することです。

まず最初に、頂点データで必要なレイアウトを記述するオブジェクトを生成します。これは以前に配列 `vertices` およびバーテックスシェーダーステージで見たものを完全に記述します。すなわち、各頂点が位置と色のデータを持ちます。どちらも (WGSL の `vec4<f32>` 型に対応する) `float32x4` 形式でフォーマットされ、色データは各頂点で 16 バイトのオフセットから始まります。`arrayStride` はストライド、すなわち各頂点を構成するバイト数を指定し、`stepMode` はデータを頂点ごとに読み取るべきであることを指定します。

```js
const vertexBuffers = [
  {
    attributes: [
      {
        shaderLocation: 0, // 位置
        offset: 0,
        format: "float32x4",
      },
      {
        shaderLocation: 1, // 色
        offset: 16,
        format: "float32x4",
      },
    ],
    arrayStride: 32,
    stepMode: "vertex",
  },
];
```

次に、レンダーパイプラインステージの構成を指定するディスクリプターオブジェクトを生成します。両方のシェーダーステージで関係するコードがある {{domxref("GPUShaderModule")}} (`shaderModule`)、および各ステージのエントリーポイントとなる関数の名前を指定します。

さらに、バーテックスシェーダーステージでは頂点データに求める状態を提供する `vertexBuffers` オブジェクトを提供し、フラグメントシェーダーステージでは (以前キャンバスコンテキストの設定で指定した形式と一致する) 指定のレンダリング形式を表す色ターゲットの状態の配列を提供します。

さらに、`primitive` 状態も指定します。これは今回は単に描画するプリミティブの種類を表します。さらに、`layout` を `auto` に設定します。`layout` プロパティはパイプラインの実行中に用いるすべての GPU リソース (バッファーやテクスチャーなど) のレイアウト (構造、用途、種類) を定義します。より複雑なアプリケーションでは、これは {{domxref("GPUPipelineLayout")}} オブジェクトの形式になるでしょう。これは {{domxref("GPUDevice.createPipelineLayout()")}} を用いて生成でき ([コンピュートパイプラインの基本](#コンピュートパイプラインの基本)で例を見ることができます)、GPU がどうすればパイプラインを最も効率よく実行できるかを事前に決定できるようにします。しかし、ここでは値 `auto` を指定し、パイプラインにシェーダーコードで定義されたバインディングに基づいて暗黙のバインドグループレイアウトを生成させます。

```js
const pipelineDescriptor = {
  vertex: {
    module: shaderModule,
    entryPoint: "vertex_main",
    buffers: vertexBuffers,
  },
  fragment: {
    module: shaderModule,
    entryPoint: "fragment_main",
    targets: [
      {
        format: navigator.gpu.getPreferredCanvasFormat(),
      },
    ],
  },
  primitive: {
    topology: "triangle-list",
  },
  layout: "auto",
};
```

最後に、`pipelineDescriptor` オブジェクトを引数として {{domxref("GPUDevice.createRenderPipeline()")}} メソッドを呼び出すことで、これに基づいて {{domxref("GPURenderPipeline")}} を生成できます。

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### レンダリングパスの実行

これですべての準備が完了したので、レンダリングパスを実際に実行し、`<canvas>` への描画を行うことができます。後で GPU に発行するコマンドをエンコードするには、{{domxref("GPUCommandEncoder")}} インスタンスを生成する必要があります。これは {{domxref("GPUDevice.createCommandEncoder()")}} を呼び出すことで生成できます。

```js
const commandEncoder = device.createCommandEncoder();
```

次に、{{domxref("GPUCommandEncoder.beginRenderPass()")}} を呼び出して {{domxref("GPURenderPassEncoder")}} インスタンスを生成することで、レンダリングパスの実行を開始します。このメソッドはディスクリプターオブジェクトを引数にとります。このオブジェクトの唯一の必須プロパティは配列 `colorAttachments` です。ここでは、以下を指定します。

1. レンダリング先のテクスチャービュー: {{domxref("GPUTexture.createView", "context.getCurrentTexture().createView()")}} により `<canvas>` から新しいビューを生成します。
2. ビューをロード後任意の描画を行う前に指定の色に「クリア」すること。これにより、三角形の後ろの青い背景を生成します。
3. 現在のレンダリングパスの値をこのカラーアタッチメント用に格納すること。

```js
const clearColor = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
```

すると、三角形を描画するためにレンダリングパスエンコーダーのメソッドを呼び出すことができるようになります。

1. `renderPipeline` オブジェクトを引数として {{domxref("GPURenderPassEncoder.setPipeline()")}} を呼び出すことにより、レンダリングパスで使用するパイプラインを指定します。
2. `vertexBuffer` オブジェクトを引数として {{domxref("GPURenderPassEncoder.setVertexBuffer()")}} を呼び出すことにより、レンダリング用にパイプラインに渡すデータソースにします。最初の引数は頂点バッファーを設定するスロットであり、バッファーのレイアウトを記述する配列 `vertexBuffers` の要素のインデックスの参照です。
3. {{domxref("GPURenderPassEncoder.draw()")}} により描画を実行します。`vertexBuffer` には 3 個の頂点のデータが格納されているので、それらすべてを描画するために頂点数の値を `3` に設定します。

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

コマンド列のエンコードを完了して GPU に発行するために、あと 3 個の手順が必要です。

1. {{domxref("GPURenderPassEncoder.end()")}} メソッドを呼び出し、レンダーパスコマンドリストの終わりを示します。
2. {{domxref("GPUCommandEncoder.finish()")}} メソッドを呼び出し、発行したコマンドの列の記録を完了し、{{domxref("GPUCommandBuffer")}} オブジェクトインスタンスにカプセル化します。
3. {{domxref("GPUCommandBuffer")}} を GPU に送るため、デバイスの ({{domxref("GPUQueue")}} インスタンスで表される) コマンドキューに送信します。デバイスのキューは {{domxref("GPUDevice.queue")}} プロパティを通じて利用可能であり、{{domxref("GPUQueue.submit()")}} を呼び出すことでキューに {{domxref("GPUCommandBuffer")}} のインスタンスの配列を追加できます。

これらの 3 個の手順は以下の 2 行で実現できます。

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## コンピュートパイプラインの基本

[計算基本デモ](https://mdn.github.io/dom-examples/webgpu-compute-demo/)では、GPU にある値を計算させ、それらを出力バッファーに書き込み、そのデータをステージングバッファーにコピーし、JavaScript からデータを読み取ってコンソールに記録できるようにステージングバッファーをマップします。

このアプリケーションは、レンダリング基本デモに似た構造をなぞります。以前と同様に {{domxref("GPUDevice")}} の参照を生成し、{{domxref("GPUDevice.createShaderModule()")}} の呼び出しによりシェーダーコードを {{domxref("GPUShaderModule")}} にカプセル化します。ここでの違いは、シェーダーコードに `@compute` ステージという 1 個のシェーダーステージしか無いことです。

```js
// グローバルのバッファサイズを定義する
const BUFFER_SIZE = 1000;

const shader = `
@group(0) @binding(0)
var<storage, read_write> output: array<f32>;

@compute @workgroup_size(64)
fn main(
  @builtin(global_invocation_id)
  global_id : vec3u,

  @builtin(local_invocation_id)
  local_id : vec3u,
) {
  // バッファーの範囲外にアクセスしないようにする
  if (global_id.x >= ${BUFFER_SIZE}) {
    return;
  }

  output[global_id.x] =
    f32(global_id.x) * 1000. + f32(local_id.x);
}
`;
```

### データを扱うバッファの生成

この例では、データを扱うために 2 個の {{domxref("GPUBuffer")}} インスタンスを生成します。GPU での計算結果を高速で書き込む `output` バッファーと、`output` の内容をコピーして JavaScript から値にアクセスできるようにマップできる `stagingBuffer` です。

- `output` は、コピー操作のコピー元となるストレージバッファーとして指定されています。
- `stagingBuffer` は JavaScript から読むためにマップでき、コピー操作のコピー先となるバッファーとして指定されています。

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});
```

### バインドグループレイアウトの生成

パイプラインの生成時、そのパイプラインで使用するバインドグループを指定します。このためには、まずこのパイプラインで用いるバッファーなどの GPU リソースの構造と目的を定義する {{domxref("GPUBindGroupLayout")}} を ({{domxref("GPUDevice.createBindGroupLayout()")}} を呼び出すことにより) 生成します。このレイアウトは、バインドグループが従うテンプレートとして用いられます。ここでは、パイプラインがバインディングスロット 0 (シェーダーコードの関連するバインディング番号 `@binding(0)` に対応します) に結びつき、パイプラインのコンピュートステージで使用でき、バッファーの目的が `storage` と定義された 1 個のメモリーバッファーにアクセスできるようにします。

```js
const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
});
```

次に、{{domxref("GPUDevice.createBindGroup()")}} を呼び出すことにより、{{domxref("GPUBindGroup")}} を生成します。このメソッドに、バインドグループのベースとなるバインドグループレイアウトを指定するディスクリプターオブジェクトと、このレイアウトで定義されたスロットにバインドする変数の詳細を渡します。ここでは、バインディング 0 を宣言し、前に定義した `output` バッファーをそれにバインドするよう指定します。

```js
const bindGroup = device.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: {
        buffer: output,
      },
    },
  ],
});
```

> [!NOTE]
> {{domxref("GPUComputePipeline.getBindGroupLayout()")}} メソッドを呼び出すことで、バインドグループの生成時に使用される暗黙のレイアウトを取得できます。さらに、レンダーパイプラインで利用可能なバージョンもあります。{{domxref("GPURenderPipeline.getBindGroupLayout()")}} を参照してください。

### コンピュートパイプラインの生成

上記すべてを用意したら、パイプラインディスクリプターオブジェクトを渡して {{domxref("GPUDevice.createComputePipeline()")}} を呼び出すことで、コンピュートパイプラインを生成できます。これは、レンダーパイプラインの生成と似た方法です。コンピュートシェーダーを記述し、コードを探すモジュールとエントリーポイントを指定します。さらに、パイプラインの `layout` も指定します。ここでは、{{domxref("GPUDevice.createPipelineLayout()")}} を呼び出し、前に定義した `bindGroupLayout` をベースにレイアウトを生成します。

```js
const computePipeline = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  }),
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});
```

ここでのレンダーパイプラインのレイアウトとの違いの一つは、何も描画を行わないので、プリミティブの種類を指定していないことです。

### コンピュートパスの実行

コンピュートパスの実行はレンダリングパスの実行と構造は似ており、別のコマンドを用います。まず、{{domxref("GPUCommandEncoder.beginComputePass()")}} によりパスエンコーダーを生成します。

コマンドの発行には、以前と同様に {{domxref("GPUComputePassEncoder.setPipeline()")}} を用いてパイプラインを指定します。しかし、その後は、{{domxref("GPUComputePassEncoder.setBindGroup()")}} を用いて計算に用いるデータの指定に `bindGroup` を用いることを指定し、{{domxref("GPUComputePassEncoder.dispatchWorkgroups()")}} を用いて計算の実行に用いる GPU ワークグループの数を指定します。

そして、{{domxref("GPURenderPassEncoder.end()")}} を用いてレンダーパスのコマンドリストの終端を示します。

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

passEncoder.end();
```

### 結果を JavaScript で読み取る

{{domxref("GPUQueue.submit()")}} を用いてエンコードされたコマンドを実行用に GPU に送信する前に、{{domxref("GPUCommandEncoder.copyBufferToBuffer()")}} を用いて `output` バッファーの中身を `stagingBuffer` バッファーにコピーします。

```js
// 出力バッファーをステージングバッファーにコピーする
commandEncoder.copyBufferToBuffer(
  output,
  0, // コピー元のオフセット
  stagingBuffer,
  0, // コピー先のオフセット
  BUFFER_SIZE,
);

// コマンドバッファーの配列を実行用のコマンドキューに渡し、フレームを終える
device.queue.submit([commandEncoder.finish()]);
```

出力データが `stagingBuffer` で参照可能になったら、{{domxref("GPUBuffer.mapAsync()")}} メソッドを用いてデータを中間メモリーにマップし、{{domxref("GPUBuffer.getMappedRange()")}} を用いてマップされた範囲への参照を取得し、データを JavaScript にコピーし、コンソールに記録します。さらに、処理が完了したら `stagingBuffer` のマップを解除します。

```js
// JS に結果を読み戻すため、ステージングバッファーをマップする
await stagingBuffer.mapAsync(
  GPUMapMode.READ,
  0, // オフセット
  BUFFER_SIZE, // サイズ
);

const copyArrayBuffer = stagingBuffer.getMappedRange(0, BUFFER_SIZE);
const data = copyArrayBuffer.slice();
stagingBuffer.unmap();
console.log(new Float32Array(data));
```

## GPU エラーの処理

WebGPU の呼び出しは、GPU 処理の中で非同期で検証されます。エラーが検出された場合は、プログラムの呼び出しが GPU 側で無効とマークされます。無効になった呼び出しの返り値に依存する他の呼び出しが行われた場合は、このオブジェクトも無効とマークされ、その先も同様です。このため、WebGPU におけるエラーは「感染性」といわれます。

それぞれの {{domxref("GPUDevice")}} のインスタンスは、各自のエラースコープスタックを管理します。このスタックは最初は空で、特定の種類のエラーをキャプチャするため {{domxref("GPUDevice.pushErrorScope()")}} を呼び出してスタックにエラースコープをプッシュできます。

エラーのキャプチャが完了したら、{{domxref("GPUDevice.popErrorScope()")}} を呼び出すことでキャプチャを終了できます。これは、スタックからスコープをポップし、スコープで最初にキャプチャされたエラーを表現するオブジェクト ({{domxref("GPUInternalError")}} または {{domxref("GPUOutOfMemoryError")}} または {{domxref("GPUValidationError")}}) か、エラーがキャプチャされていない場合は `null` で解決する {{jsxref("Promise")}} を返します。

適する場合は、WebGPU のコードでなぜエラーが発生しているのかを理解する助けとなる有用な情報を「バリデーション」節で提供することを試みました。この節では、エラーを回避するために満たすべき基準を列挙しています。例として、[`GPUDevice.createBindGroup()` のバリデーション節](/ja/docs/Web/API/GPUDevice/createBindGroup#バリデーション)を参照してください。この情報には複雑なものもあります。仕様を繰り返すのではなく、以下の性質を持つエラーの基準のみを列挙することにしました。

- 明らかではないもの。たとえば、バリデーションエラーを発生させるディスクリプタープロパティの組み合わせです。正しいディスクリプターオブジェクトの構造を確実に使うよう言うのは意味がありません。これは明らかであり、あいまいです。
- 開発者が制御できるもの。エラーの基準のいくつかは内部のみに基づき、ウェブ開発者には関係ありません。

explainer で、WebGPU のエラー処理についての詳細情報を得ることができます。[Object validity and destroyed-ness](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) および [Errors](https://gpuweb.github.io/gpuweb/explainer/#errors) を参照してください。[WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling) には有用な実世界での例やアドバイスがあります。

> [!NOTE]
> WebGL でエラーを処理する歴史上の方法は、エラーの情報を返す {{domxref("WebGLRenderingContext.getError", "getError()")}} メソッドを提供することです。これはエラーを同期式で返し、効率がよくないという問題があります。これを呼び出すごとに GPU との往復のやりとりを行い、これまで発行した処理がすべて完了するまで待つ必要があります。さらに、状態モデルはフラット、すなわち関係ないコードの間でエラーが漏れる可能性があります。WebGPU の作者はこれらの点を改善することにしました。

## インターフェイス

### API のエントリーポイント

- {{domxref("Navigator.gpu")}} / {{domxref("WorkerNavigator.gpu")}}
  - : この API のエントリーポイントです。現在のコンテキスト用の {{domxref("GPU")}} オブジェクトを返します。
- {{domxref("GPU")}}
  - : WebGPU を用いるための出発点です。{{domxref("GPUAdapter")}} を得るのに用いることができます。
- {{domxref("GPUAdapter")}}
  - : GPU アダプターを表します。これを用いて {{domxref("GPUDevice")}}、アダプターの情報、機能、制限を要求できます。
- {{domxref("GPUAdapterInfo")}}
  - : アダプターについての特定用の情報を保持します。

### GPU デバイスの設定

- {{domxref("GPUDevice")}}
  - : 論理 GPU デバイスを表します。これは WebGPU の機能の大半へのアクセスに用いるメインインターフェイスです。
- {{domxref("GPUSupportedFeatures")}}
  - : {{domxref("GPUAdapter")}} や {{domxref("GPUDevice")}} が対応している追加の機能を表す [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)オブジェクトです。
- {{domxref("GPUSupportedLimits")}}
  - : {{domxref("GPUAdapter")}} や {{domxref("GPUDevice")}} が対応している制限を表します。

### 描画を行う `<canvas>` の設定

- {{domxref("HTMLCanvasElement.getContext()")}} — `"webgpu"` `contextType`
  - : `"webgpu"` `contextType` を指定して `getContext()` を呼び出すと、{{domxref("GPUCanvasContext")}} オブジェクトのインスタンスを返します。これは、{{domxref("GPUCanvasContext.configure()")}} を用いて設定できます。
- {{domxref("GPUCanvasContext")}}
  - : {{htmlelement("canvas")}} 要素の WebGPU レンダリングコンテキストを表します。

### パイプラインリソースの表現

- {{domxref("GPUBuffer")}}
  - : GPU での処理で用いる生データを格納できるメモリーのブロックを表します。
- {{domxref("GPUExternalTexture")}}
  - : GPU でのレンダリング処理でテクスチャーとして用いることができる {{domxref("HTMLVideoElement")}} のスナップショットが格納されたラッパーオブジェクトです。
- {{domxref("GPUSampler")}}
  - : シェーダーがテクスチャーのリソースデータの変換やフィルターを行う方法を制御します。
- {{domxref("GPUShaderModule")}}
  - : 内部のシェーダーモジュールオブジェクトへの参照で、パイプラインにより実行用に GPU に送信できる WGSL のシェーダーコードのコンテナーです。
- {{domxref("GPUTexture")}}
  - : GPU でのレンダリング処理で使用する用の、画像などの 1 次元、2 次元、または 3 次元のデータの配列を格納するのに用いるコンテナーです。
- {{domxref("GPUTextureView")}}
  - : 特定の {{domxref("GPUTexture")}} で定義された、テクスチャーのサブリソースの部分のビューです。

### パイプラインの表現

- {{domxref("GPUBindGroup")}}
  - : {{domxref("GPUBindGroupLayout")}} に基づき、`GPUBindGroup` はグループで一緒にバインドされるリソースの集合と、これらのリソースのシェーダーステージでの利用法を定義します。
- {{domxref("GPUBindGroupLayout")}}
  - : パイプラインで用いられるバッファーなどの関連する GPU リソースの構造と目的を定義し、{{domxref("GPUBindGroup")}} を生成する際のテンプレートとして用いられます。
- {{domxref("GPUComputePipeline")}}
  - : コンピュートシェーダーステージを制御し、{{domxref("GPUComputePassEncoder")}} で使用できます。
- {{domxref("GPUPipelineLayout")}}
  - : パイプラインで用いる {{domxref("GPUBindGroupLayout")}} を定義します。コマンドのエンコード時にパイプラインとともに用いる {{domxref("GPUBindGroup")}} は、互換性がある {{domxref("GPUBindGroupLayout")}} を持っている必要があります。
- {{domxref("GPURenderPipeline")}}
  - : バーテックスシェーダーステージとフラグメントシェーダーステージを制御し、{{domxref("GPURenderPassEncoder")}} や {{domxref("GPURenderBundleEncoder")}} で使用できます。

### コマンドのエンコードと GPU への送信

- {{domxref("GPUCommandBuffer")}}
  - : 実行用に {{domxref("GPUQueue")}} に送信できる、記録した GPU コマンドのリストを表します。
- {{domxref("GPUCommandEncoder")}}
  - : コマンドエンコーダーを表します。GPU に発行するコマンドのエンコードに使用します。
- {{domxref("GPUComputePassEncoder")}}
  - : {{domxref("GPUComputePipeline")}} が発行し、コンピュートシェーダーステージの制御に関するコマンドをエンコードします。{{domxref("GPUCommandEncoder")}} による全体のエンコード処理の一部です。
- {{domxref("GPUQueue")}}
  - : GPU でのエンコードされたコマンドの実行を制御します。
- {{domxref("GPURenderBundle")}}
  - : 事前に記録されたコマンド群のバンドル用のコンテナーです。({{domxref("GPURenderBundleEncoder")}} を参照してください)
- {{domxref("GPURenderBundleEncoder")}}
  - : コマンド群のバンドルを事前に記録するのに使用します。これらは、必要に応じて何度でも、{{domxref("GPURenderPassEncoder.executeBundles", "executeBundles()")}} メソッドにより {{domxref("GPURenderPassEncoder")}} で再利用できます。
- {{domxref("GPURenderPassEncoder")}}
  - : {{domxref("GPURenderPipeline")}} が発行し、バーテックスシェーダーステージとフラグメントシェーダーステージの制御に関するコマンドをエンコードします。{{domxref("GPUCommandEncoder")}} による全体のエンコード処理の一部です。

### レンダリングパスにおけるクエリーの実行

- {{domxref("GPUQuerySet")}}
  - : オクルージョンやタイムスタンプのクエリーなど、パスにおけるクエリーの結果の記録に用います。

### エラーのデバッグ

- {{domxref("GPUCompilationInfo")}}
  - : {{domxref("GPUCompilationMessage")}} オブジェクトの配列です。シェーダーコードの問題の診断を助けるため、GPU シェーダーモジュールコンパイラーにより生成されます。
- {{domxref("GPUCompilationMessage")}}
  - : GPU シェーダーモジュールコンパイラーが生成した、1 個の情報、警告、もしくはエラーのメッセージを表します。
- {{domxref("GPUDeviceLostInfo")}}
  - : {{domxref("GPUDevice.lost")}} {{jsxref("Promise")}} が解決する際に返され、デバイスがロストした原因の情報を提供します。
- {{domxref("GPUError")}}
  - : {{domxref("GPUDevice.popErrorScope")}} および {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベントで浮かび上がったエラー用のベースインターフェイスです。
- {{domxref("GPUInternalError")}}
  - : {{domxref("GPUDevice.popErrorScope")}} および {{domxref("GPUDevice")}} {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベントで浮かび上がったエラーの型の一つです。バリデーションの要求がすべて満たされたにもかかわらずシステムまたは実装に固有の理由で処理に失敗したことを表します。
- {{domxref("GPUOutOfMemoryError")}}
  - : {{domxref("GPUDevice.popErrorScope")}} および {{domxref("GPUDevice")}} {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベントで浮かび上がったエラーの型の一つです。要求された処理を完了するのに十分な空きメモリが無かったことを表します。
- {{domxref("GPUPipelineError")}}
  - : パイプラインの失敗を表現します。この値は {{domxref("GPUDevice.createComputePipelineAsync()")}} や {{domxref("GPUDevice.createRenderPipelineAsync()")}} から返された {{jsxref("Promise")}} が拒否されたとき渡されます。
- {{domxref("GPUUncapturedErrorEvent")}}
  - : {{domxref("GPUDevice")}} {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベント用のイベントオブジェクトの型です。
- {{domxref("GPUValidationError")}}
  - : {{domxref("GPUDevice.popErrorScope")}} および {{domxref("GPUDevice")}} {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベントで浮かび上がったエラーの型の一つです。操作が WebGPU API のバリデーションの制約を満たさなかったことを表すアプリケーションエラーを表現します。

## セキュリティの要件

この API 全体は[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)でのみ利用可能です。

## 例

- [計算基本デモ](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [レンダリング基本デモ](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU samples](https://webgpu.github.io/webgpu-samples/)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU best practices](https://toji.dev/webgpu-best-practices/)
- [WebGPU explainer](https://gpuweb.github.io/gpuweb/explainer)
- [WebGPU — All of the cores, none of the canvas](https://surma.dev/things/webgpu/)
