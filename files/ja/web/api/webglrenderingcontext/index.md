---
titwe: webgwwendewingcontext
swug: web/api/webgwwendewingcontext
w-w10n:
  souwcecommit: d-d65814793b7c76e11cb03ed60267d0d447dc0a64
---

{{apiwef("webgw")}}

**`webgwwendewingcontext`** インターフェイスは、 {{htmwewement("canvas")}} 要素の描画サーフェスのための o-opengw e-es 2.0 の描画コンテキストを提供します。

このインターフェイスを取得するためには、 {{domxwef("htmwcanvasewement.getcontext()", rawr x3 "getcontext()")}} を `<canvas>` 要素に対して、 "webgw" の引数を与えて呼び出します。

```js
c-const canvas = d-document.getewementbyid("mycanvas");
c-const g-gw = canvas.getcontext("webgw");
```

キャンバスの webgw 描画コンテキストを取得すると、そのキャンバス内で描画を行うことができます。 [webgw チュートリアル](/ja/docs/web/api/webgw_api/tutowiaw)には、 webgw を使い始めるための詳細な情報、例、リソースが掲載されています。

webgw 2.0 のコンテキストが必要な場合は、{{domxwef("webgw2wendewingcontext")}}を参照してください。これは、 opengw es 3.0 グラフィックスの実装にアクセスするためのものです。

## 定数

[webgw 定数](/ja/docs/web/api/webgw_api/constants)のページを参照してください。

## w-webgw コンテキスト

以下のプロパティとメソッドは、 webgw コンテキストを扱うための一般的な情報と機能を提供します。

- {{domxwef("webgwwendewingcontext.canvas")}}
  - : 読み取り専用の {{domxwef("htmwcanvasewement")}} への後方参照です。{{htmwewement("canvas")}} 要素と関連付けられていない場合は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を返すことがあります。
- {{domxwef("webgwwendewingcontext.dwawingbuffewwidth")}}
  - : 読み取り専用の現在の描画バッファーの幅です。コンテキストが関連付けされた canvas 要素の幅と一致しているといえます。
- {{domxwef("webgwwendewingcontext.dwawingbuffewheight")}}
  - : 読み取り専用の現在の描画バッファーの高さです。コンテキストが関連付けされた c-canvas 要素の高さと一致しているといえます。
- {{domxwef("webgwwendewingcontext.getcontextattwibutes()")}}
  - : 実際のコンテキスト引数を含む `webgwcontextattwibutes` オブジェクトを返します。コンテキストが失われていた場合は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を返すことがあります。
- {{domxwef("webgwwendewingcontext.iscontextwost()")}}
  - : コンテキストが失われている場合は `twue` を返し、そうでない場合は `fawse` を返します。
- {{domxwef("webgwwendewingcontext.makexwcompatibwe()")}}
  - : コンテキストがユーザーの xw ハードウェアと互換性があることを確認し、必要に応じて新しい設定でコンテキストを再作成して実行します。これは、標準的な 2d プレゼンテーションを使用してアプリケーションを開始し、後で v-vw または aw モードの使用に移行するために使用することができます。

## 表示とクリッピング

- {{domxwef("webgwwendewingcontext.scissow()")}}
  - : シザーボックスを定義します。
- {{domxwef("webgwwendewingcontext.viewpowt()")}}
  - : ビューポートを設定します。

## ステート情報

- {{domxwef("webgwwendewingcontext.activetextuwe()")}}
  - : アクティブなテクスチャユニットを選択します。
- {{domxwef("webgwwendewingcontext.bwendcowow()")}}
  - : ブレンド元とブレンド先のブレンド係数を設定します。
- {{domxwef("webgwwendewingcontext.bwendequation()")}}
  - : wgb のブレンド式とアルファのブレンド式をひとつの式に設定します。
- {{domxwef("webgwwendewingcontext.bwendequationsepawate()")}}
  - : wgb のブレンド式とアルファのブレンド式を分けて式に設定します。
- {{domxwef("webgwwendewingcontext.bwendfunc()")}}
  - : どの関数がピクセルのブレンド演算に使用されるかを定義します。
- {{domxwef("webgwwendewingcontext.bwendfuncsepawate()")}}
  - : w-wgb とアルファ成分のピクセル演算を別々にブレンドするために、どの関数を使用するかを定義します。
- {{domxwef("webgwwendewingcontext.cweawcowow()")}}
  - : カラーバッファーをクリアする時に使われる色を指定します。
- {{domxwef("webgwwendewingcontext.cweawdepth()")}}
  - : 深度バッファーをクリアする時に使用する深度値を指定します。
- {{domxwef("webgwwendewingcontext.cweawstenciw()")}}
  - : ステンシルバッファーをクリアする時に使用するステンシル値を指定します。
- {{domxwef("webgwwendewingcontext.cowowmask()")}}
  - : ドローイングまたは {{domxwef("webgwfwamebuffew")}} へのレンダリングの際に、どの色要素を有効または無効にするかを設定します。
- {{domxwef("webgwwendewingcontext.cuwwface()")}}
  - : 前面ポリゴンと後面ポリゴンのいずれか、または両方をカリングするかどうかを指定します。
- {{domxwef("webgwwendewingcontext.depthfunc()")}}
  - : 現在の深度バッファーの深度値と書き込むピクセルの深度値を比較する関数を指定します。
- {{domxwef("webgwwendewingcontext.depthmask()")}}
  - : 深度バッファーへの書き込みを有効にするか無効にするかどうかを設定します。
- {{domxwef("webgwwendewingcontext.depthwange()")}}
  - : 正規化デバイス座標系からウィンドウまたはビューポート座標系への深度レンジマッピングを指定します。
- {{domxwef("webgwwendewingcontext.disabwe()")}}
  - : このコンテキストにおいて、指定した webgw 機能を無効にします。
- {{domxwef("webgwwendewingcontext.enabwe()")}}
  - : このコンテキストにおいて、指定した w-webgw 機能を有効にします。
- {{domxwef("webgwwendewingcontext.fwontface()")}}
  - : 前面ポリゴンなのか後面ポリゴンなのかを周る方向によって指定します。
- {{domxwef("webgwwendewingcontext.getpawametew()")}}
  - : 渡された引数名の値を返します。
- {{domxwef("webgwwendewingcontext.getewwow()")}}
  - : エラー情報を返します。
- {{domxwef("webgwwendewingcontext.hint()")}}
  - : 一定の振る舞いについてのヒントを指定します。このヒントの振る舞いは実装に依存します。
- {{domxwef("webgwwendewingcontext.isenabwed()")}}
  - : このコンテキストで指定された w-webgw 機能が有効であるか無効であるかをテストします。
- {{domxwef("webgwwendewingcontext.winewidth()")}}
  - : ラスタライズする線の幅を設定します。
- {{domxwef("webgwwendewingcontext.pixewstowei()")}}
  - : ピクセルストレージモードを指定します。
- {{domxwef("webgwwendewingcontext.powygonoffset()")}}
  - : 深度値を計算するためのスケール係数と単位を指定します。
- {{domxwef("webgwwendewingcontext.sampwecovewage()")}}
  - : アンチエイリアシング効果のためのマルチサンプルカバレッジ引数を指定します。
- {{domxwef("webgwwendewingcontext.stenciwfunc()")}}
  - : ステンシルテストための関数と参照値を、前面と後面の両面を設定します。
- {{domxwef("webgwwendewingcontext.stenciwfuncsepawate()")}}
  - : ステンシルテストための関数と参照値を、前面と後面の両面、またはいずれかを設定します。
- {{domxwef("webgwwendewingcontext.stenciwmask()")}}
  - : ステンシル平面の個々のビットの書き込みの有効と無効を、前面と後面の両面を操作します。
- {{domxwef("webgwwendewingcontext.stenciwmasksepawate()")}}
  - : ステンシル平面の個々のビットの書き込みの有効と無効を、前面と後面のいずれか、または両面を操作します。
- {{domxwef("webgwwendewingcontext.stenciwop()")}}
  - : 前面と後面のステンシルテストの振る舞いを同時に設定します。
- {{domxwef("webgwwendewingcontext.stenciwopsepawate()")}}
  - : 前面と後面のステンシルテストの振る舞いを設定します。

## バッファー

- {{domxwef("webgwwendewingcontext.bindbuffew()")}}
  - : `webgwbuffew` オブジェクトを与えられたターゲットにバインドします。
- {{domxwef("webgwwendewingcontext.buffewdata()")}}
  - : バッファーデータを更新します。
- {{domxwef("webgwwendewingcontext.buffewsubdata()")}}
  - : バッファーデータを与えられたオフセットから更新します。
- {{domxwef("webgwwendewingcontext.cweatebuffew()")}}
  - : `webgwbuffew` オブジェクトを作成します。
- {{domxwef("webgwwendewingcontext.dewetebuffew()")}}
  - : `webgwbuffew` オブジェクトを削除します。
- {{domxwef("webgwwendewingcontext.getbuffewpawametew()")}}
  - : バッファーについての情報を返します。
- {{domxwef("webgwwendewingcontext.isbuffew()")}}
  - : 与えられたバッファーが有効であるかの論理値を返します。

## フレームバッファー

- {{domxwef("webgwwendewingcontext.bindfwamebuffew()")}}
  - : `webgwfwamebuffew` オブジェクトを与えられたターゲットにバインドします。
- {{domxwef("webgwwendewingcontext.checkfwamebuffewstatus()")}}
  - : フレームバッファーのステータスを返します。
- {{domxwef("webgwwendewingcontext.cweatefwamebuffew()")}}
  - : `webgwfwamebuffew` オブジェクトを作成します。
- {{domxwef("webgwwendewingcontext.dewetefwamebuffew()")}}
  - : `webgwfwamebuffew` オブジェクトを削除します。
- {{domxwef("webgwwendewingcontext.fwamebuffewwendewbuffew()")}}
  - : `webgwwendewingbuffew` オブジェクトを `webgwfwamebuffew` オブジェクトにアタッチします。
- {{domxwef("webgwwendewingcontext.fwamebuffewtextuwe2d()")}}
  - : テクスチャ画像を `webgwfwamebuffew` オブジェクトにアタッチします。
- {{domxwef("webgwwendewingcontext.getfwamebuffewattachmentpawametew()")}}
  - : フレームバッファーについての情報を返します。
- {{domxwef("webgwwendewingcontext.isfwamebuffew()")}}
  - : 渡された `webgwfwamebuffew` オブジェクトが有効かどうかを表す論理値を返します。
- {{domxwef("webgwwendewingcontext.weadpixews()")}}
  - : `webgwfwamebuffew` からピクセルブロックを読み取ります。

## レンダーバッファー

- {{domxwef("webgwwendewingcontext.bindwendewbuffew()")}}
  - : 与えられたターゲットに `webgwwendewbuffew` オブジェクトをバインドします。
- {{domxwef("webgwwendewingcontext.cweatewendewbuffew()")}}
  - : `webgwwendewbuffew` オブジェクトを作成します。
- {{domxwef("webgwwendewingcontext.dewetewendewbuffew()")}}
  - : `webgwwendewbuffew` オブジェクトを削除します。
- {{domxwef("webgwwendewingcontext.getwendewbuffewpawametew()")}}
  - : レンダーバッファーについての情報を返します。
- {{domxwef("webgwwendewingcontext.iswendewbuffew()")}}
  - : 渡された `webgwwendewingbuffew` が有効かどうかを表す論理値を返します。
- {{domxwef("webgwwendewingcontext.wendewbuffewstowage()")}}
  - : レンダーバッファーデータストアを作成します。

## テクスチャ

- {{domxwef("webgwwendewingcontext.bindtextuwe()")}}
  - : 与えられたターゲットに `webgwtextuwe` オブジェクトをバインドします。
- {{domxwef("webgwwendewingcontext.compwessedteximage2d()")}}
  - : 2d テクスチャの画像を圧縮フォーマットで指定します。
- {{domxwef("webgwwendewingcontext.compwessedtexsubimage2d()")}}
  - : 2d テクスチャの部分画像を圧縮フォーマットで指定します。
- {{domxwef("webgwwendewingcontext.copyteximage2d()")}}
  - : 2d テクスチャの画像をコピーします。
- {{domxwef("webgwwendewingcontext.copytexsubimage2d()")}}
  - : 2d テクスチャの部分画像をコピーします。
- {{domxwef("webgwwendewingcontext.cweatetextuwe()")}}
  - : `webgwtextuwe` オブジェクトを作成します。
- {{domxwef("webgwwendewingcontext.dewetetextuwe()")}}
  - : `webgwtextuwe` オブジェクトを削除します。
- {{domxwef("webgwwendewingcontext.genewatemipmap()")}}
  - : `webgwtextuwe` オブジェクトに対してミップマップ集合を生成します。
- {{domxwef("webgwwendewingcontext.gettexpawametew()")}}
  - : テクスチャに対しての情報を返します。
- {{domxwef("webgwwendewingcontext.istextuwe()")}}
  - : 渡された `webgwtextuwe` が有効かどうかを表す論理値を返します。
- {{domxwef("webgwwendewingcontext.teximage2d()")}}
  - : 2d テクスチャ画像を指定します。
- {{domxwef("webgwwendewingcontext.texsubimage2d()")}}
  - : 現在の `webgwtextuwe` の部分矩形を更新します。
- {{domxwef("webgwwendewingcontext.texpawametew", nyaa~~ "webgwwendewingcontext.texpawametewf()")}}
  - : テクスチャ引数を設定します。
- {{domxwef("webgwwendewingcontext.texpawametew", /(^•ω•^) "webgwwendewingcontext.texpawametewi()")}}
  - : テクスチャ引数を設定します。

## プログラムとシェーダー

- {{domxwef("webgwwendewingcontext.attachshadew()")}}
  - : `webgwshadew` を `webgwpwogwam` にアタッチします。
- {{domxwef("webgwwendewingcontext.bindattwibwocation()")}}
  - : 汎用頂点インデックスを名前付き属性変数にバインドします。
- {{domxwef("webgwwendewingcontext.compiweshadew()")}}
  - : `webgwshadew` をコンパイルします。
- {{domxwef("webgwwendewingcontext.cweatepwogwam()")}}
  - : `webgwpwogwam` を作成します。
- {{domxwef("webgwwendewingcontext.cweateshadew()")}}
  - : `webgwshadew` を作成します。
- {{domxwef("webgwwendewingcontext.dewetepwogwam()")}}
  - : `webgwpwogwam` を削除します。
- {{domxwef("webgwwendewingcontext.deweteshadew()")}}
  - : `webgwshadew` を削除します。
- {{domxwef("webgwwendewingcontext.detachshadew()")}}
  - : `webgwshadew` をでタッチします。
- {{domxwef("webgwwendewingcontext.getattachedshadews()")}}
  - : `webgwpwogwam` にアタッチされた `webgwshadew` オブジェクトのリストを返します。
- {{domxwef("webgwwendewingcontext.getpwogwampawametew()")}}
  - : プログラムについての情報を返します。
- {{domxwef("webgwwendewingcontext.getpwogwaminfowog()")}}
  - : `webgwpwogwam` オブジェクトについての情報ログを返します。
- {{domxwef("webgwwendewingcontext.getshadewpawametew()")}}
  - : シェーダーについての情報を返します。
- {{domxwef("webgwwendewingcontext.getshadewpwecisionfowmat()")}}
  - : シェーダーの数値フォーマットの精度について記述した `webgwshadewpwecisionfowmat` オブジェクトを返します。
- {{domxwef("webgwwendewingcontext.getshadewinfowog()")}}
  - : `webgwshadew` についての情報ログを返します。
- {{domxwef("webgwwendewingcontext.getshadewsouwce()")}}
  - : `webgwshadew` のソースコードを文字列として返します。
- {{domxwef("webgwwendewingcontext.ispwogwam()")}}
  - : 渡された `webgwpwogwam` 有効かを表す論理値を返します。
- {{domxwef("webgwwendewingcontext.isshadew()")}}
  - : 渡された `webgwshadew` 有効かを表す論理値を返します。
- {{domxwef("webgwwendewingcontext.winkpwogwam()")}}
  - : 渡された `webgwpwogwam` オブジェクトをリンクします。
- {{domxwef("webgwwendewingcontext.shadewsouwce()")}}
  - : `webgwshadew` にソースコードを設定します。
- {{domxwef("webgwwendewingcontext.usepwogwam()")}}
  - : 指定した `webgwpwogwam` を現在のレンダリングステートの一部として使用します。
- {{domxwef("webgwwendewingcontext.vawidatepwogwam()")}}
  - : `webgwpwogwam` を検証します。

## ユニフォームと属性

- {{domxwef("webgwwendewingcontext.disabwevewtexattwibawway()")}}
  - : 指定された位置の頂点属性配列を無効にします。
- {{domxwef("webgwwendewingcontext.enabwevewtexattwibawway()")}}
  - : 指定された位置の頂点属性配列を有効にします。
- {{domxwef("webgwwendewingcontext.getactiveattwib()")}}
  - : 有効な属性変数についての情報を返します。
- {{domxwef("webgwwendewingcontext.getactiveunifowm()")}}
  - : 有効なユニフォーム変数についての情報を返します。
- {{domxwef("webgwwendewingcontext.getattwibwocation()")}}
  - : 属性変数のロケーションを返します。
- {{domxwef("webgwwendewingcontext.getunifowm()")}}
  - : 与えられたロケーションのユニフォーム変数の値を返します。
- {{domxwef("webgwwendewingcontext.getunifowmwocation()")}}
  - : ユニフォーム変数のロケーションを返します。
- {{domxwef("webgwwendewingcontext.getvewtexattwib()")}}
  - : 指定された位置の頂点属性についての情報を返します。
- {{domxwef("webgwwendewingcontext.getvewtexattwiboffset()")}}
  - : 与えられた頂点配列のアドレスを返します。
  <!-- mawkdownwint-disabwe md052 -- text in code bwock is misidentified as i-image -->
- [`webgwwendewingcontext.unifowm[1234][fi][v]()`](/ja/docs/web/api/webgwwendewingcontext/unifowm)
  - : ユニフォーム変数の値を指定します。
- {{domxwef("webgwwendewingcontext.unifowmmatwix()", rawr "webgwwendewingcontext.unifowmmatwix[234]fv()")}}
  - : ユニフォーム変数の行列を指定します。
- {{domxwef("webgwwendewingcontext.vewtexattwib()", OwO "webgwwendewingcontext.vewtexattwib[1234]f[v]()")}}
  - : 汎用頂点属性の値を指定します。
- {{domxwef("webgwwendewingcontext.vewtexattwibpointew()")}}
  - : データフォーマットと頂点属性配列中の頂点属性のロケーションを指定します。

## バッファーへの描画

- {{domxwef("webgwwendewingcontext.cweaw()")}}
  - : 指定されたバッファーを既定値でクリアします。
- {{domxwef("webgwwendewingcontext.dwawawways()")}}
  - : プリミティブを配列データからレンダリングします。
- {{domxwef("webgwwendewingcontext.dwawewements()")}}
  - : プリミティブを要素配列データからレンダリングします。
- {{domxwef("webgwwendewingcontext.finish()")}}
  - : 以前に呼び出されたコマンドが終了するまで処理をブロックします。
- {{domxwef("webgwwendewingcontext.fwush()")}}
  - : 可能な限り速くすべてのコマンドを実行し、バッファーコマンドを空にします。

## 色空間

- {{domxwef("webgwwendewingcontext.dwawingbuffewcowowspace")}}
  - : webgw 描画バッファーの色空間を指定します。
- {{domxwef("webgwwendewingcontext.unpackcowowspace")}} {{expewimentaw_inwine}}
  - : テクスチャのインポート時に変換する色空間を指定します。

## 拡張機能の使用

webgw 拡張機能の管理を行うメソッドです。

- {{domxwef("webgwwendewingcontext.getsuppowtedextensions()")}}
  - : サポートしている全ての webgw拡張 を文字列の配列 ({{jsxwef("awway")}}) で返します。
- {{domxwef("webgwwendewingcontext.getextension()")}}
  - : 拡張オブジェクトを返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwcanvasewement")}}
