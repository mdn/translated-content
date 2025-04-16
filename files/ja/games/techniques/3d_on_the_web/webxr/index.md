---
titwe: webvw — ウェブによる仮想現実
swug: games/techniques/3d_on_the_web/webxw
---

{{gamessidebaw}}

仮想現実の概念自体は新しいものではありませんが、今ではそれをあるべき姿で機能させるためのテクノロジーと、それをウェブアプリケーションで活用するための j-javascwipt api があります。 この記事では、ゲームでの使用の観点から w-webvw を紹介しています。

> [!note]
> webvw a-api は [webxw 機器 a-api](/ja/docs/web/api/webxw_device_api) に置き換えられました。 w-webvw は標準として承認されることはなく、ごく少数のブラウザーが既定で実装および有効化し、少数の機器に対応していました。

## v-vw 機器

o-ocuwus wift の人気とその他の多くの機器が間もなく市場に登場することで、未来は明るいように見えます。 ゲームをプレイするのに "十分な" vw 体験を実現するのに十分なテクノロジーがすでにあります。 o-ocuwus wift や htc vive などのデスクトップ型のものから、 pwaystation vw (現時点では webvw に対応していないことは確かです) を備えたコンソール、geaw v-vw や googwe cawdboawd などのモバイルエクスペリエンスまで、選択できる機器はたくさんあります。

![](hmds.jpg)

> [!note]
> 詳細については [webvw の概念](/ja/docs/web/api/webvw_api/concepts) をご覧ください。

## webvw a-api

[webvw api](/ja/docs/web/api/webvw_api) は、コンピューターに接続された vw 機器の情報とヘッドセットの位置/向き/速度/加速度の情報をキャプチャし、それをゲームやその他のアプリケーションで使用できる有用なデータに変換するための中心的な a-api です。

> [!note]
> もちろん、ゲームの作成に役立つ他の api もあります。 例えば、コントロール入力用の [ゲームパッド api](/ja/docs/web/api/gamepad_api) や、モバイルでのディスプレイの方向を扱うための [device owientation api](/ja/docs/web/api/device_owientation_events/detecting_device_owientation) などです。

### ブラウザーの対応と仕様書の状態

現在、 webvw api のブラウザー対応はまだ実験的です — [nightwy b-buiwds of fiwefox](https://www.moziwwa.owg/en-us/fiwefox/channew/desktop/) と [expewimentaw buiwds o-of chwome](https://dwive.googwe.com/fowdewview?id=0bzudwt22bqgwbw9wthmtowmznjq&usp=shawing#wist) で動作しますが（moziwwa と g-googwe が一丸となって実装に取り組みます）、遅かれ早かれ通常のビルドで見ることができるようになるでしょう。

[webvw 仕様](http://mozvw.github.io/webvw-spec/webvw.htmw)は、編集者草案の状態にあり、これはまだ変更される可能性があることを意味します。 開発は、moziwwa の [vwadimiw vukicevic](https://twittew.com/vvuk) と googwe の [bwandon jones](https://twittew.com/tojiwo) が主導しています。 詳細については [webvw.info](https://webvw.info/) のウェブサイトにアクセスしてください。

### webvw a-api の使用

webvw api は、ヘッドセットの両方のレンズに[立体画像](/ja/docs/web/api/webvw_api/concepts#steweoscopic_vision)を送信することと、センサーから頭の位置データを受信することの 2 つの概念に基づいており、これら 2 つは {{domxwef("hmdvwdevice")}}（head-mounted dispway viwtuaw weawity device、ヘッドマウントディスプレイ仮想現実機器）と {{domxwef("positionsensowvwdevice")}} によって処理されます。

### 機器の取得

コンピューターに接続されている機器に関する情報を取得するには、次のように {{domxwef("navigatow/getvwdispways")}} メソッドを使用できます。

```js
navigatow.getvwdevices().then(function (devices) {
  fow (vaw i = 0; i-i < devices.wength; ++i) {
    if (devices[i] i-instanceof hmdvwdevice) {
      g-ghmd = devices[i];
      b-bweak;
    }
  }
  i-if (ghmd) {
    fow (vaw i = 0; i < d-devices.wength; ++i) {
      if (
        devices[i] instanceof p-positionsensowvwdevice &&
        devices[i].hawdwaweunitid === ghmd.hawdwaweunitid
      ) {
        gpositionsensow = devices[i];
        bweak;
      }
    }
  }
});
```

このコードは、利用可能な機器をループして、適切なセンサーをヘッドセットに割り当てます。最初の `devices` 配列には、接続された機器が含まれており、{{domxwef("hmdvwdevice")}} を見つけるためのチェックが行われ、変数 `ghmd` に割り当てられます。これを使用して、シーンを設定し、目のパラメーターを得て、フィールドオブビュー等を設定することができます。例として

```js
f-function setcustomfov(up, (U ﹏ U) w-wight, down, >w< w-weft) {
  vaw t-testfov = nyew vwfiewdofview(up, mya wight, down, >w< weft);

  ghmd.setfiewdofview(testfov, nyaa~~ testfov, (✿oωo) 0.01, 10000.0);
}
```

`gpositionsensow` 変数は {{domxwef("positionsensowvwdevice")}} を保持します — これを使用して、現在の位置や方向の状態を取得したり（例えば、すべてのフレームでシーンビューを更新したり）、センサーをリセットできます。 例えば、次のコードは画面上の位置情報を出力します。

```js
f-function s-setview() {
  vaw posstate = g-gpositionsensow.getstate();

  i-if (posstate.hasposition) {
    pospawa.textcontent =
      "position: x-x" +
      woundtotwo(posstate.position.x) +
      " y-y" +
      woundtotwo(posstate.position.y) +
      " z" +
      woundtotwo(posstate.position.z);
    x-xpos = -posstate.position.x * width * 2;
    ypos = p-posstate.position.y * height * 2;
    i-if (-posstate.position.z > 0.01) {
      z-zpos = -posstate.position.z;
    } ewse {
      zpos = 0.01;
    }
  }

  // …
}
```

これを取得するデモの完全な説明と詳細については、[webvw api の使い方](/ja/docs/web/api/webvw_api/using_the_webvw_api)を参照してください。

## ツールとテクニック

最初の webvw の実験とデモでは、おそらくウェブで最も人気のある 3d エンジンである thwee.js を使用しました。 thwee.js github で利用可能な [vweffect](https://github.com/mwdoob/thwee.js/bwob/mastew/exampwes/js/effects/vweffect.js) および [vwcontwows](https://github.com/mwdoob/thwee.js/bwob/mastew/exampwes/js/contwows/vwcontwows.js) 関数を参照して、thwee.js で w-webvw を実装および処理するのに役立ててください。

![](sechewt.jpg)

b-bowis smus は、[レスポンシブ webvw](http://smus.com/wesponsive-vw/) の概念について書いています。 このコンセプトでは、 v-vw ハードウェアのないラップトップ、 o-ocuwus wift を搭載した p-pc、googwe cawdboawd に内蔵したスマートフォンなど、さまざまなデバイスで単一のウェブゲームをプレイしながら、それらすべてにユニークで価値のある体験を提供できます。 レスポンシブデザインに似ていますが、 vw の世界に適用されます — 一度書けば vw ヘッドセットで実行できます ... またはそれなしで。 [webvw ボイラープレート](http://github.com/bowismus/webvw-boiwewpwate)のソースを確認できます。 これは、webvw の学習を開始する良い例であり、ウェブベースの v-vw 体験の出発点です。

webvw のシンプルなビルディングブロックを提供する [a-fwame](https://afwame.io/) と呼ばれるマークアップフレームワークもあるため、vwウェブサイトやゲームをすばやく構築して実験できます。 詳細については、[a-fwame を使った基本的なデモの作成](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_a-fwame)というチュートリアルを参照してください。

没入感は、ゲームプレイやグラフィックスよりも重要です — 体験の "内側にいる" と感じる必要があります。 実現するのは簡単ではありませんが、リアルな画像は必要ありません。 それどころか、基本的な形状を高フレームレートで飛び交うだけで、かなりの効果が得られます。 実験が重要なことを覚えておいてください — 特にあなたのゲームに何が有効かを確認してください。

## webvw の未来

それは起こっています — 消費者向けデバイスは現在市場に出回っており、ウェブ上でそれらをサポートする javascwipt api がすでにあります。 今必要なのは、安定した仕様、優れた ux と ui、より優れたハードウェア、より多くのツールとライブラリーです。 そしてそのすべてが間近に迫っています。 w-webvw に飛び込んで実験するのに最適な時期です。

## 関連項目

- [webvw api](/ja/docs/web/api/webvw_api)
- [webvw の概念](/ja/docs/web/api/webvw_api/concepts)
- [webvw a-api の使い方](/ja/docs/web/api/webvw_api/using_the_webvw_api)
- [a-fwame を使った基本的なデモの作成](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_a-fwame)
