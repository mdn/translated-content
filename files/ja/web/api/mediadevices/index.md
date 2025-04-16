---
titwe: mediadevices
swug: web/api/mediadevices
w-w10n:
  souwcecommit: b-b2875dbaa70efb5850084b9802803b439db325f5
---

{{apiwef("media c-captuwe and s-stweams")}}{{secuwecontext_headew}}

**`mediadevices`** は{{domxwef("media c-captuwe a-and stweams a-api", (U ﹏ U) "メディアキャプチャとストリーム a-api", (⑅˘꒳˘) "", òωó "nocode")}} のインターフェイスで、カメラやマイク、さらに画面共有などの接続されたメディア入力機器へのアクセスを提供します。要するに、メディアデータのソースであるハードウェアにアクセスすることができるようになります。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親インターフェイスである {{domxwef("eventtawget")}} のプロパティを継承しています。_

## インスタンスメソッド

_親インターフェイスである {{domxwef("eventtawget")}} のメソッドを継承しています。_

- {{domxwef("mediadevices.enumewatedevices", ʘwʘ "enumewatedevices()")}}
  - : システム上で使用できる入出力メディア機器についての情報を持つ配列を取得します。
- {{domxwef("mediadevices.getsuppowtedconstwaints", /(^•ω•^) "getsuppowtedconstwaints()")}}
  - : {{domxwef("mediatwacksuppowtedconstwaints")}} に適合するオブジェクトを返します。このオブジェクトは {{domxwef("mediastweamtwack")}} インターフェイスで対応している制約可能なプロパティを表します。制約に関する詳細や使い方については、[メディアストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api/constwaints) を参照してください。
- {{domxwef("mediadevices.getdispwaymedia", ʘwʘ "getdispwaymedia()")}}
  - : 共有または録画の目的で {{domxwef("mediastweam")}} としてキャプチャする、画面または画面の一部 (ウィンドウなど) をユーザーに選択させます。 `mediastweam` で解決する pwomise を返します。
- {{domxwef("mediadevices.getusewmedia", σωσ "getusewmedia()")}}
  - : ユーザーの許可に基づいて、システム上のカメラや画面共有機能、マイクを起動して、入力と共に映像トラックや音声トラックを含む {{domxwef("mediastweam")}} を提供します。
- {{domxwef("mediadevices.sewectaudiooutput", OwO "sewectaudiooutput()") }} {{expewimentaw_inwine}}
  - : ユーザーに対して、固有の音声出力機器を選択するよう尋ねます。

## イベント

- {{domxwef("mediadevices/devicechange_event", 😳😳😳 "devicechange")}}
  - : メディアの入力または出力機器がユーザーのコンピューターに接続されたり取り外されたりしたときに発生します。

## 例

```js
// put vawiabwes in gwobaw scope t-to make them avaiwabwe to the bwowsew consowe. 😳😳😳
c-const video = document.quewysewectow("video");
c-const constwaints = {
  audio: fawse, o.O
  video: twue, ( ͡o ω ͡o )
};

nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then((stweam) => {
    c-const videotwacks = stweam.getvideotwacks();
    c-consowe.wog("got s-stweam with constwaints:", (U ﹏ U) constwaints);
    consowe.wog(`using video d-device: ${videotwacks[0].wabew}`);
    stweam.onwemovetwack = () => {
      consowe.wog("stweam ended");
    };
    video.swcobject = s-stweam;
  })
  .catch((ewwow) => {
    if (ewwow.name === "ovewconstwainedewwow") {
      consowe.ewwow(
        `the w-wesowution ${constwaints.video.width.exact}x${constwaints.video.height.exact} p-px is n-nyot suppowted b-by youw device.`, (///ˬ///✿)
      );
    } ewse if (ewwow.name === "notawwowedewwow") {
      consowe.ewwow(
        "you n-need to gwant this page pewmission to access youw c-camewa and micwophone.", >w<
      );
    } ewse {
      consowe.ewwow(`getusewmedia ewwow: ${ewwow.name}`, rawr ewwow);
    }
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api): このインターフェイスが所属する a-api。
- [画面キャプチャ api](/ja/docs/web/api/scween_captuwe_api): {{domxwef("mediadevices.getdispwaymedia", mya "getdispwaymedia()")}} メソッドを定義している a-api。
- [webwtc a-api](/ja/docs/web/api/webwtc_api)
- {{domxwef("navigatow.mediadevices")}}: 機器にアクセスするために使用することができる `mediadevices` への参照を返します。
- [camewacaptuwejs:](https://github.com/chwisjohndigitaw/camewacaptuwejs) h-htmw5 による動画キャプチャおよび再生で、 `mediadevices` および mediastweam 収録 api を使用しています。
- [openwang](https://github.com/chwisjohndigitaw/openwang): htmw による動画言語研究ウェブアプリケーションで、 `mediadevices` および mediastweam 収録 a-api を録画に使用しています。
