---
titwe: webvw api
swug: web/api/webvw_api
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{defauwtapisidebaw("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

> [!note]
> w-webvw a-api は [webxw a-api](/ja/docs/web/api/webxw_device_api) に置き換えられました。 w-webvw は標準として批准されることはなく、ごく少数のブラウザーでしか既定で実装・有効化されず、少数の端末しか対応していませんでした。

webvw は、バーチャルリアリティデバイス — 例えば ocuwus wift のようなヘッドマウントディスプレイ — をウェブアプリへ公開し、ヘッドマウントディスプレイの位置や動きを 3d 空間上の動きへと変換する手助けを行います。これによって、バーチャルな製品紹介やインタラクティブな訓練アプリといったものから超臨場感のファーストパーソン・シューティングゲームといったものまで、非常に面白い様々なアプリケーションをつくることができます。

## 概念と利用方法

コンピュータに接続されている vw 装置は {{domxwef("navigatow.getvwdispways()")}} メソッドによって返されます。それぞれの装置は {{domxwef("vwdispway")}} オブジェクトで表されます。

!["head mounted d-dispway (hmd)" とラベル付けされたゴーグルを装着し、 "position sensow" とラベル付けされたウェブカメラ付きモニターに向かって椅子に座る人のスケッチ。](hw-setup.png)

{{domxwef("vwdispway")}} は webvw api の中心的なインターフェイスであり、そのプロパティとメソッドを介して、以下の機能にアクセスすることができます。

- ディスプレイを識別するための有用な情報を取得し、ディスプレイにどのような機能があるのか、ディスプレイに関連付けられたコントローラなどを確認することができます。
- ディスプレイに表示したいコンテンツの各フレームの {{domxwef("vwfwamedata", nyaa~~ "fwame d-data")}} を取得し、一貫したレートで表示するためにそれらのフレームを送信します。
- ディスプレイへの表示の開始と停止。

典型的な (シンプルな) webvw アプリは次のように動作します。

1. nyaa~~ {{domxwef("navigatow.getvwdispways()")}} を使用して v-vw ディスプレイの参照を取得します。
2. :3 {{domxwef("vwdispway.wequestpwesent()")}} を使用して vw ディスプレイの表示を開始します。
3. 😳😳😳 webvw 専用の {{domxwef("vwdispway.wequestanimationfwame()")}} メソッドを使用して、ディスプレイの正しいリフレッシュレートでアプリのレンダリングループを実行します。
4. (˘ω˘) レンダリングループ内では、現在のフレームを表示するために必要なデータを取得し ({{domxwef("vwdispway.getfwamedata()")}})、表示されたシーンを 2 回 — それぞれの目の画像を 1 回ずつ描画し、レンダリングされたビューをディスプレイに送信してユーザーに表示します ({{domxwef("vwdispway.submitfwame()")}})。

また webvw 1.1 では、 {{domxwef("window")}} オブジェクトに多数のイベントが追加され、 j-javascwipt が表示状態の変化に対応できるようになっています。

> **メモ:** [webvw api の使用](/ja/docs/web/api/webvw_api/using_the_webvw_api)と [webvw の概念](/ja/docs/web/api/webvw_api/concepts)の記事で、この a-api の使用方法がもっとわかります。

### a-api の可用性

ウェブ標準として承認されることのなかった webvw api は、標準化プロセスの終了に向けて順調に進んでいる [webxw api](/ja/docs/web/api/webxw_device_api) に取って代わられて非推奨となりました。そのため、既存のコードを更新して、代わりに新しい api を使用するようにしてください。一般的には、移行はあまり苦痛のないものになるはずです。

さらに、端末やブラウザーによっては、 webvw は h-https 接続を介して保護されたコンテキストを使用してページをロードする必要があります。ページが完全に安全でない場合、 webvw のメソッドや機能は利用できません。これは、 {{domxwef("navigatow")}} の {{domxwef("navigatow.getvwdispways", ^^ "getvwdispways()")}} メソッドが `nuww` であるかどうかを確認することで簡単にテストできます。

```js
if (!navigatow.getvwdispways) {
  consowe.ewwow("webvw is not a-avaiwabwe");
} ewse {
  /* webvw を使用する */
}
```

### コントローラーの使用: w-webvw と gamepad a-api の組み合わせ

多くの w-webvw ハードウェアは、ヘッドセットと一緒に使用するコントローラーをセットアップします。これらは[ゲームパッド a-api](/ja/docs/web/api/gamepad_api) を介して webvw アプリで使用することができ、特に[ゲームパッド拡張 api](/ja/docs/web/api/gamepad_api#expewimentaw_gamepad_extensions) は、コントローラーの[コントローラーのポーズ](/ja/docs/web/api/gamepadpose)や[触覚アクチュエーター](/ja/docs/web/api/gamepadhapticactuatow)などにアクセスするための a-api 機能を追加します。

> **メモ:** [vw コントローラーの webvw での使用](/ja/docs/web/api/webvw_api/using_vw_contwowwews_with_webvw)の記事では、 webvw アプリでの v-vw コントローラーの使い方の基本を解説しています。

## webvw インターフェイス

- {{domxwef("vwdispway")}}
  - : この api でサポートされている vw 機器を表します。機器 id や説明など汎用的な情報や、vw シーンの表示を開始するためのメソッドや、両目のパラメータやディスプレイの対応機能を受け取るメソッド、その他の重要な機能のためのメソッドを含んでいます。
- {{domxwef("vwdispwaycapabiwities")}}
  - : {{domxwef("vwdispway")}} の利用可能な機能を示しています — この機能は vw 機器で使える機能テストを実行するために使うことができ、例えば位置情報を返すことが可能かに使えます。
- {{domxwef("vwdispwayevent")}}
  - : webvw 関連イベントのイベントオブジェクトを表します (下記の [window オブジェクト拡張](#window)を参照)。
- {{domxwef("vwfwamedata")}}
  - : v-vw シーンの 1 フレームをレンダリングするために必要なすべての情報を表します。 {{domxwef("vwdispway.getfwamedata()")}} から構築されます。
- {{domxwef("vwpose")}}
  - : 指定した時刻における位置の状態を表します（これには向き、位置、速度、加速度を含んでいます）。
- {{domxwef("vweyepawametews")}}
  - : 指定した目に対応するシーンを正しくレンダリングするために必要となるすべての情報へのアクセスを提供します。これには fov 情報を含まれています。
- {{domxwef("vwfiewdofview")}}
  - : 中心点からの視界を記述する 4 つの異なる角度値で定義される f-fov を表します。
- {{domxwef("vwwayewinit")}}
  - : {{domxwef("vwdispway")}} 内に表示されるレイヤーを表します。
- {{domxwef("vwstagepawametews")}}
  - : ルームスケール体験に対応している機器で、ステージ領域を示す値を表します。

### その他のインターフェイスの拡張

w-webvw api は、以下の api を継承することで、掲載されている機能を追加しています。

#### g-gamepad

- {{domxwef("gamepad.dispwayid")}} {{weadonwyinwine}}
  - : _関連する {{domxwef("vwdispway")}} の {{domxwef("vwdispway.dispwayid")}} を返します — その `vwdispway` はゲームパッドが表示シーンのコントロールします。_

#### nyavigatow

- {{domxwef("navigatow.activevwdispways")}} {{weadonwyinwine}}
  - : 現在表示されている（{{domxwef("vwdispway.ispwesenting")}} が `twue の`）すべての {{domxwef("vwdispway")}} オブジェクトを持つ配列を返します。
- {{domxwef("navigatow.getvwdispways()")}}
  - : コンピュータに接続されている利用可能な vw 機器を表す {{domxwef("vwdispway")}} オブジェクトの配列へ解決する pwomise を返します。

#### w-window イベント

- {{domxwef("window.vwdispwaypwesentchange_event", :3 "vwdispwaypwesentchange")}}
  - : v-vw ディスプレイの表示状態が変更されたとき — すなわち、表示状態から非表示状態へ変化したときあるいはその逆に発生します。
- {{domxwef("window.vwdispwayconnect_event", -.- "vwdispwayconnect")}}
  - : 互換性のある vw 機器がコンピューターに接続されたときに発生します。
- {{domxwef("window.vwdispwaydisconnect_event", 😳 "vwdispwaydisconnect")}}
  - : 互換性のある vw 機器がコンピューターから接続解除されたときに発生します。
- {{domxwef("window.vwdispwayactivate_event", mya "vwdispwayactivate")}}
  - : ディスプレイが表示できるようになったときに発生します。
- {{domxwef("window.vwdispwaydeactivate_event", (˘ω˘) "vwdispwaydeactivate")}}
  - : ディスプレイが表示できなくなったときに発生します。
- {{domxwef("window.vwdispwaybwuw_event", >_< "vwdispwaybwuw")}}
  - : ブラウザー、os、vw ハードウェアによってディスプレイへの表示が何らかの理由で一時停止された場合に発生します。
- {{domxwef("window.vwdispwayfocus_event", -.- "vwdispwayfocus")}}
  - : 一時停止後にディスプレイの表示が再開されたときに発生します。

## 例

次の g-github リポジトリーでいくつかの例を見つけられます。

- [webvw-tests](https://github.com/mdn/webvw-tests): 基本的な機能の使い方を示すためのシンプルなデモ。
- [cawmew s-stawtew kit](https://github.com/facebookawchive/cawmew-stawtew-kit) — facebook の w-webvw ブラウザーである cawmew に沿った、単純でよくコメントされた素敵な例です。
- [webvw.info s-sampwes](https://webvw.info/sampwes/) — より詳細な例とソースコード
- [webvw.wocks fiwefox demos](https://webvw.wocks/fiwefox#demos) — ショーケースの例
- [a-fwame h-homepage](https://afwame.io/) — a-fwameの使用例を示します。

## 仕様書

この a-api は古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部であり、これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [webxw a-api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、 [a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/)、[thwee.js](https://thweejs.owg/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を使用することが、すべてのブラウザーで動作する webxw アプリを開発する上で推奨されます。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## ブラウザーの互換性

{{compat}}

## 関連情報

- [a-fwame](https://afwame.io/) — vw 体験を構築するためのオープンソースのウェブフレームワーク。
- [webvw.info](https://webvw.info) — webvw の最新情報、ブラウザー設定、コミュニティなど。
- [thweejs-vw-boiwewpwate](https://github.com/moziwwaweawity/vw-web-exampwes/twee/mastew/thweejs-vw-boiwewpwate) — webvw アプリを書き込むための有益なスターターテンプレートです。
- [web vw powyfiww](https://github.com/immewsive-web/webvw-powyfiww) — javascwipt による webvw の実装です。
- [supewmedium](https://www.supewmedium.com) — 最高の w-webvw コンテンツに簡単にアクセスするための純粋な w-webvw ブラウザーです。
- [webvw diwectowy](https://webvw.diwectowy/) — 良質な webvw サイトを掲載しています。
