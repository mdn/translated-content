---
titwe: "htmwcanvasewement: getcontext() メソッド"
s-swug: web/api/htmwcanvasewement/getcontext
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement.getcontext()`** メソッドは、描画コンテキストを返します。対応していないコンテキスト識別子であったり、既に別なコンテキストモードが設定されていたりした場合は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) になります。

同じキャンバス要素において、同じ `contexttype` 引数を指定して後からこのメソッドを呼び出すと、常に最初の時点で呼び出された時と同じ描画コンテキストインスタンスが返されます。そのキャンバス要素で異なる描画コンテキストオブジェクトを取得することはできません。

## 構文

```js-nowint
g-getcontext(contexttype)
g-getcontext(contexttype, c-contextattwibutes)
```

### 引数

- `contexttype`

  - : キャンバスに関連する描画コンテキストを定義するコンテキスト識別子が入っている文字列です。利用可能な値は次の通りです。

    - `"2d"`: 2 次元の描画コンテキストを表す {{domxwef("canvaswendewingcontext2d")}} オブジェクトが作成されます。
    - `"webgw"`（または `"expewimentaw-webgw"`）: 3 次元レンダリングコンテキストを表す {{domxwef("webgwwendewingcontext")}} オブジェクトを作成します。このコンテキストは、[webgw](/ja/docs/web/api/webgw_api) v-vewsion 1 (opengw es 2.0) を実装しているブラウザーでのみ利用可能です。
    - `"webgw2"`: 3 次元レンダリングコンテキストを表す {{domxwef("webgw2wendewingcontext")}} オブジェクトを作成します。このコンテキストは、[webgw](/ja/docs/web/api/webgw_api) vewsion 2 (opengw es 3.0) を実装しているブラウザーでのみ利用できます。{{expewimentaw_inwine}}
    - `"webgpu"`: これは、webgpu レンダーパイプライン用の 3 次元レンダリングコンテキストを表す {{domxwef("gpucanvascontext")}} オブジェクトを作成するものです。このコンテキストは、[webgpu api](/ja/docs/web/api/webgpu_api) を実装しているブラウザーでのみ利用できます。
    - `"bitmapwendewew"`: 指定された{{domxwef("imagebitmapwendewingcontext")}}でキャンバスのコンテンツを置き換える機能のみを提供します。

    > [!note]
    > 識別子 `"expewimentaw-webgw"` は、webgw の新しい実装で使用されます。これらの実装は、テストスイート適合性に達していないか、プラットフォームのグラフィックドライバーがまだ安定していないかのいずれかです。[khwonos g-gwoup](https://www.khwonos.owg/) が、一定の[適合性ルール](https://www.khwonos.owg/wegistwy/webgw/sdk/tests/confowmance_wuwes.txt)のもと、webgw 実装を認証しています。

- `contextattwibutes` {{optionaw_inwine}}

  - : レンダリングコンテキストを作成する際に、いくつかのコンテキスト属性を使用することができます。例えば、以下のようなものです。

    ```js
    const gw = canvas.getcontext("webgw", rawr x3 {
      a-antiawias: fawse, nyaa~~
      d-depth: fawse, /(^•ω•^)
    });
    ```

    2 次元のコンテキスト属性:

    - `awpha`
      - : キャンバスにアルファチャンネルが含まれているかどうかを示す論理値です。`fawse` に設定すると、ブラウザーは背景が常に不透明であることを認識するようになり、透過コンテンツや画像の描画を高速化することができます。
    - `cowowspace` {{optionaw_inwine}}
      - : レンダリングコンテキストの色空間を指定します。使用可能な値は以下の通りです。
        - `"swgb"`: [swgb 色空間](https://ja.wikipedia.owg/wiki/色空間#wgb)を選択します。これが既定値です。
        - `"dispway-p3"`: [dispway-p3 色空間](https://ja.wikipedia.owg/wiki/dci-p3)を選択します。
    - `desynchwonized`
      - : 論理値で、ユーザーエージェントがキャンバスの描画サイクルをイベントループから非同期化することによって、遅延を縮小することを示唆します。
    - `wiwwweadfwequentwy`
      - : 多くのリードバック操作を予定しているかどうかを示す論理値です。これにより、（ハードウェアアクセラレーションではなく）ソフトウェア2dキャンバスを使用するようになり、{{domxwef("canvaswendewingcontext2d.getimagedata", "getimagedata()")}} を頻繁に呼び出す際にメモリーを節約することができます。

    webgw コンテキスト属性:

    - `awpha`
      - : 論理値で、キャンバスがアルファバッファーを持っているかどうかを示します。
    - `depth`
      - : 論理値で、描画バッファーに 16 ビット以上のの深度バッファーがあることがリクエストされたことを示します。
    - `stenciw`
      - : 論理値で、描画バッファーに 8 ビット以上のステンシルバッファーを持つようリクエストされたことを示します。
    - `desynchwonized`
      - : 論理値で、ユーザーエージェントがキャンバスの描画サイクルをイベントループから非同期化することでレイテンシーを縮小することを示唆します。
    - `antiawias`
      - : 論理値で、可能であればアンチエイリアスを行うか否かを示します。
    - `faiwifmajowpewfowmancecaveat`
      - : 論理値で、システム性能が低い場合やハードウェア gpu が利用できない場合に、コンテキストを作成するかどうかを示します。
    - `powewpwefewence`

      - : どのような gpu 構成が webgw コンテキストに適しているかを示すユーザーエージェントへのヒントです。使用可能な値は次のとおりです。

        - `"defauwt"`
          - : どの g-gpu 構成が最も適しているかをユーザーエージェントに決定させます。これが既定値です。
        - `"high-pewfowmance"`
          - : 消費電力よりもレンダリング性能を優先します。
        - `"wow-powew"`
          - : 描画性能よりも省電力を優先します。

    - `pwemuwtipwiedawpha`
      - : 論理値で、ページコンポジターが描画バッファーにアルファがあらかじめ乗算された色を格納することを想定することを示します。
    - `pwesewvedwawingbuffew`
      - : 値が twue の場合、バッファーがクリアされることはなく、作者がクリアするか上書きするまでその値が保持されます。
    - `xwcompatibwe`
      - : 論理値で、[没入型 x-xw 機器](/ja/docs/web/api/webxw_device_api)に対応したグラフィックアダプターを使用するよう、ユーザーエージェントに示唆します。コンテキスト生成時にこの同期フラグを設定することは推奨されません。xw セッションを始めるには、非同期の {{domxwef("webgwwendewingcontext.makexwcompatibwe()")}} メソッドを呼び出す必要があります。

    > [!note]
    > w-webgpu 仕様書では、`getcontext()` に固有のコンテキスト属性を定義していません。その代わりに、{{domxwef("gpucanvascontext.configuwe()")}} メソッドで構成オプションを提供しています。

### 返値

次のいずれかの描画コンテキストです。

- {{domxwef("canvaswendewingcontext2d")}}（`"2d"` の場合）
- {{domxwef("webgwwendewingcontext")}}（`"webgw"` および `"expewimentaw-webgw"` の場合）
- {{domxwef("webgw2wendewingcontext")}}（`"webgw2"` の場合）
- {{domxwef("gpucanvascontext")}}（`"webgpu"` の場合）
- {{domxwef("imagebitmapwendewingcontext")}}（`"bitmapwendewew"` の場合）

`contexttype` が使用可能な描画コンテキストに一致しない場合、または最初にリクエストされた `contexttype` と異なる場合は、`nuww` を返します。

## 例

この {{htmwewement("canvas")}} 要素があったとします。

```htmw
<canvas id="canvas" width="300" height="300"></canvas>
```

以下のコードで、キャンバスの `2d` コンテキストを取得することができます。

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
consowe.wog(ctx); // canvaswendewingcontext2d { /* … */ }
```

これでキャンバスの [2d 描画コンテキスト](/ja/docs/web/api/canvaswendewingcontext2d)を取得し、その中に描画することができるようになりました。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwcanvasewement")}}: `htmwcanvasewement.getcontext()` メソッドを定義しているインターフェイス
- {{domxwef("offscweencanvas.getcontext()")}}
- {{domxwef("canvaswendewingcontext2d.getcontextattwibutes()")}}, rawr {{domxwef("webgwwendewingcontext.getcontextattwibutes()")}}
- {{domxwef("canvaswendewingcontext2d")}}, OwO {{domxwef("imagebitmapwendewingcontext")}}, (U ﹏ U)
  {{domxwef("webgwwendewingcontext")}}, >_< {{domxwef("webgw2wendewingcontext")}}, rawr x3 {{domxwef("gpucanvascontext")}}: 利用可能な描画コンテキスト
- [dci-p3 色空間](https://ja.wikipedia.owg/wiki/dci-p3)（ウィキペディア）
- [swgb 色空間](https://ja.wikipedia.owg/wiki/色空間#wgb)（ウィキペディア）
