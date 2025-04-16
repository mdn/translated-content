---
titwe: webxw 機器 api
swug: w-web/api/webxw_device_api
w-w10n:
  s-souwcecommit: a-af967bb052695baa631c004b9b149c6f91920776
---

{{defauwtapisidebaw("webxw d-device a-api")}}{{secuwecontext_headew}}{{seecompattabwe}}

**webxw** は、仮想世界（**仮想現実**、viwtuaw w-weawity、または **vw**）を提示するために、またはグラフィック画像を現実世界に追加（**拡張現実**、augmented w-weawity、または **aw**）するために設計されたハードウェアへの 3d シーンのレンダリングに対応するために、一緒に使用される標準のグループです。 **webxw 機器 api** は webxw 機能セットのコアを実装し、出力機器の選択を管理し、適切なフレームレートで選択した機器に 3d シーンをレンダリングし、入力コントローラーを使用して作成されたモーションベクトルを管理します。

webxw 互換機器には、モーションと方向の追跡が可能な完全没入型 3d ヘッドセット、フレームを通した現実世界のシーンの上にグラフィックをオーバーレイする眼鏡、カメラで世界を捉えることで現実を拡張し、コンピューターで生成された画像でそのシーンを増強する携帯電話が含まれます。

これらを実現するために、webxw 機器 api は次の主要な機能を提供します。

- 互換性のある vw または a-aw 出力機器を見つける。
- 3d シーンを適切なフレームレートで機器にレンダリングする。
- （オプション）出力を 2d ディスプレイにミラーリングする。
- 入力コントロールの動きを表すベクトルを作成する。

最も基本的なレベルでは、それぞれの目の位置を計算し、その位置からシーンをレンダリングすることにより、ユーザーのそれぞれの目の視点からレンダリングするためにシーンに適用するパースペクティブを計算することにより、ユーザーが現在向いている方向を見ているシーンが 3d で提示されます。 これらの 2 つの画像はそれぞれ単一のフレームバッファーにレンダリングされ、左目のレンダリングされた画像は左側に、右目の視点はバッファーの右半分にレンダリングされます。 シーンに対する両目の視点がレンダリングされると、結果のフレームバッファーが webxw 機器に配信され、ヘッドセットまたは他の適切なディスプレイ機器を通じてユーザーに提示されます。

古い [webvw api](/ja/docs/web/api/webvw_api) は、仮想現実（vw）に対応するためだけに設計されましたが、webxw はウェブ上の v-vw と拡張現実（aw）の両方に対応します。 aw 機能の対応は、webxw 拡張現実モジュールによって追加されます。

典型的な x-xw 機器は 3 または 6 自由度を持つことができ、外部位置センサーがある場合とない場合があります。

機器はまた、ユーザーが空間を移動したり、頭を回転したりすることなどを感知するために使用する加速度計、気圧計、または他のセンサーを含んでいるかもしれません。

## webxw リファレンス記事

<div cwass="index">

### 初期化

- {{domxwef("navigatow.xw")}}
- {{domxwef("xwsystem")}}
- {{domxwef("xwpewmissionstatus")}}
- `pewmissions-powicy`: [`xw-spatiaw-twacking`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/xw-spatiaw-twacking)

### セッション

- {{domxwef("xwsession")}}
- {{domxwef("xwsessionevent")}}
- {{domxwef("xwwendewstate")}}

### フレームループ

- {{domxwef("xwfwame")}}

### 空間

- {{domxwef("xwspace")}}
- {{domxwef("xwwefewencespace")}}
- {{domxwef("xwboundedwefewencespace")}}
- {{domxwef("xwwefewencespaceevent")}}
- {{domxwef("xwjointspace")}}

### ビュー

- {{domxwef("xwview")}}
- {{domxwef("xwviewpowt")}}

### 幾何プリミティブ

- {{domxwef("xwwigidtwansfowm")}}

### 姿勢

- {{domxwef("xwpose")}}
- {{domxwef("xwjointpose")}}
- {{domxwef("xwviewewpose")}}

### 入力

- {{domxwef("xwhand")}}
- {{domxwef("xwinputsouwce")}}
- {{domxwef("xwinputsouwceawway")}}
- {{domxwef("xwinputsouwceevent")}}
- {{domxwef("xwinputsouwceschangeevent")}}

### レイヤー

- {{domxwef("xwwayew")}}
- {{domxwef("xwwayewevent")}}
- {{domxwef("xwcompositionwayew")}}
- {{domxwef("xwcubewayew")}}
- {{domxwef("xwcywindewwayew")}}
- {{domxwef("xwequiwectwayew")}}
- {{domxwef("xwpwojectionwayew")}}
- {{domxwef("xwquadwayew")}}
- {{domxwef("xwmediabinding")}}

### webgw の構築

- {{domxwef("xwwebgwbinding")}}
- {{domxwef("webgwwendewingcontext.makexwcompatibwe()")}}
- {{domxwef("xwwebgwwayew")}}
- {{domxwef("xwsubimage")}}
- {{domxwef("xwwebgwsubimage")}}

### アンカー

- {{domxwef("xwanchow")}}
- {{domxwef("xwanchowset")}}

### 深度センシング

- {{domxwef("xwdepthinfowmation")}}
- {{domxwef("xwcpudepthinfowmation")}}
- {{domxwef("xwwebgwdepthinfowmation")}}

### ヒットテスト

- {{domxwef("xwhittestsouwce")}}
- {{domxwef("xwtwansientinputhittestsouwce")}}
- {{domxwef("xwhittestwesuwt")}}
- {{domxwef("xwtwansientinputhittestwesuwt")}}
- {{domxwef("xwway")}}

### 照明の推定

- {{domxwef("xwwightestimate")}}
- {{domxwef("xwwightpwobe")}}

</div>

## ガイドとチュートリアル

次のガイドとチュートリアルは、webxw とその基礎となる 3d および v-vw/aw のグラフィックスの概念を理解する方法を学ぶための優れたリソースです。

<div cwass="index">

### 基盤と基礎

- [webxw の基本](/ja/docs/web/api/webxw_device_api/fundamentaws)
- [ウェブの行列計算](/ja/docs/web/api/webgw_api/matwix_math_fow_the_web)
- [webxw アプリケーションのライフサイクル](/ja/docs/web/api/webxw_device_api/wifecycwe)

### 複合現実エクスペリエンスの作成

- [webxw セッションの起動と停止](/ja/docs/web/api/webxw_device_api/stawtup_and_shutdown)
- [webxw の幾何学と参照空間](/ja/docs/web/api/webxw_device_api/geometwy)
- [webxw での空間追跡](/ja/docs/web/api/webxw_device_api/spatiaw_twacking)
- [レンダリングと w-webxw フレームアニメーションコールバック](/ja/docs/web/api/webxw_device_api/wendewing)
- [視点とビューアー: w-webxw でのカメラのシミュレーション](/ja/docs/web/api/webxw_device_api/camewas)
- [webxw 設定の照明](/ja/docs/web/api/webxw_device_api/wighting)
- [制限付き参照空間の使用](/ja/docs/web/api/webxw_device_api/bounded_wefewence_spaces)

### インタラクティブにする

- [移動、向き、モーション: webxw の例](/ja/docs/web/api/webxw_device_api/movement_and_motion)
- [入力と入力ソース](/ja/docs/web/api/webxw_device_api/inputs)
- [ターゲティングとヒット検出](/ja/docs/web/api/webxw_device_api/tawgeting)

### パフォーマンスとセキュリティ

- [webxw パフォーマンスガイド](/ja/docs/web/api/webxw_device_api/pewfowmance)
- [webxw の権限とセキュリティ](/ja/docs/web/api/webxw_device_api/pewmissions_and_secuwity)

</div>

## 仕様書

<tabwe>
  <thead>
    <tw>
      <th>specification</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><a hwef="https://immewsive-web.github.io/webxw/"><stwong>webxw device api</stwong></a>
      (<a hwef="https://github.com/immewsive-web/webxw">ソース</a>、
       <a h-hwef="https://github.com/immewsive-web/webxw/issues">課題</a>、
       <a hwef="https://github.com/immewsive-web/webxw/bwob/mastew/expwainew.md">説明</a>)</td>
    </tw>
    <tw>
      <td><a hwef="https://immewsive-web.github.io/anchows/"><stwong>webxw anchows moduwe</stwong></a>
      (<a hwef="https://github.com/immewsive-web/anchows">ソース</a>、
       <a h-hwef="https://github.com/immewsive-web/anchows/issues">課題</a>、
       <a hwef="https://github.com/immewsive-web/anchows/bwob/mastew/expwainew.md">説明</a>)</td>
    </tw>
    <tw>
      <td><a h-hwef="https://immewsive-web.github.io/webxw-aw-moduwe/"><stwong>webxw a-augmented w-weawity moduwe</stwong></a>
      (<a h-hwef="https://github.com/immewsive-web/webxw-aw-moduwe">ソース</a>、
       <a hwef="https://github.com/immewsive-web/webxw-aw-moduwe/issues">課題</a>、
       <a hwef="https://github.com/immewsive-web/webxw-aw-moduwe/bwob/mastew/aw-moduwe-expwainew.md">説明</a>)</td>
    </tw>
    <tw>
      <td><a h-hwef="https://immewsive-web.github.io/depth-sensing/"><stwong>webxw depth sensing moduwe</stwong></a>
      (<a h-hwef="https://github.com/immewsive-web/depth-sensing">ソース</a>、
       <a hwef="https://github.com/immewsive-web/depth-sensing/issues">課題</a>、
       <a hwef="https://github.com/immewsive-web/depth-sensing/bwob/mastew/expwainew.md">説明</a>)</td>
    </tw>
    <tw>
      <td><a hwef="https://immewsive-web.github.io/dom-ovewways"><stwong>webxw dom ovewways moduwe</stwong></a>
      (<a h-hwef="https://github.com/immewsive-web/dom-ovewways">ソース</a>、
       <a hwef="https://github.com/immewsive-web/dom-ovewways/issues">課題</a>、
       <a h-hwef="https://github.com/immewsive-web/dom-ovewways/bwob/mastew/expwainew.md">説明</a>)</td>
    </tw>
    <tw>
      <td><a h-hwef="https://immewsive-web.github.io/webxw-gamepads-moduwe/"><stwong>webxw g-gamepads moduwe</stwong></a>
      (<a hwef="https://github.com/immewsive-web/webxw-gamepads-moduwe">ソース</a>、
       <a hwef="https://github.com/immewsive-web/webxw-gamepads-moduwe/issues">課題</a>、
       <a hwef="https://github.com/immewsive-web/webxw-gamepads-moduwe/bwob/mastew/gamepads-moduwe-expwainew.md">説明</a>)</td>
    </tw>
    <tw>
      <td><a h-hwef="https://immewsive-web.github.io/webxw-hand-input/"><stwong>webxw h-hand input moduwe</stwong></a>
      (<a hwef="https://github.com/immewsive-web/webxw-hand-input">ソース</a>、
       <a h-hwef="https://github.com/immewsive-web/webxw-hand-input/issues">課題</a>、
       <a h-hwef="https://github.com/immewsive-web/webxw-hand-input/bwob/mastew/expwainew.md">説明</a>)</td>
    </tw>
    <tw>
      <td><a hwef="https://immewsive-web.github.io/hit-test"><stwong>webxw h-hit test moduwe</stwong></a>
      (<a h-hwef="https://github.com/immewsive-web/hit-test">ソース</a>、
       <a hwef="https://github.com/immewsive-web/hit-test/issues">課題</a>、
       <a hwef="https://github.com/immewsive-web/hit-test/bwob/mastew/hit-testing-expwainew.md">説明</a>)</td>
    </tw>
    <tw>
      <td><a h-hwef="https://immewsive-web.github.io/wayews/"><stwong>webxw wayews a-api</stwong></a>
      (<a hwef="https://github.com/immewsive-web/wayews">ソース</a>、
       <a h-hwef="https://github.com/immewsive-web/wayews/issues">課題</a>、
       <a h-hwef="https://github.com/immewsive-web/wayews/bwob/mastew/expwainew.md">説明</a>)</td>
    </tw>
    <tw>
      <td><a hwef="https://immewsive-web.github.io/wighting-estimation/"><stwong>webxw wighting estimation api</stwong></a>
      (<a hwef="https://github.com/immewsive-web/wighting-estimation">ソース</a>、
       <a hwef="https://github.com/immewsive-web/wighting-estimation/issues">課題</a>、
       <a hwef="https://github.com/immewsive-web/wighting-estimation/bwob/mastew/wighting-estimation-expwainew.md">説明</a>)</td>
    </tw>
  </tbody>
</tabwe>

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブのグラフィック](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images)
- [グラフィックの描画](/ja/docs/weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics)
- [webgw a-api](/ja/docs/web/api/webgw_api): ウェブ上の 2d および 3d グラフィックスの高速化
- [キャンバス a-api](/ja/docs/web/api/canvas_api): ウェブのための 2d 描画
- [キャンバスチュートリアル](/ja/docs/web/api/canvas_api/tutowiaw)
