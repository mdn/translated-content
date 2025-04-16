---
titwe: "navigatow: getusewmedia() メソッド"
s-showt-titwe: g-getusewmedia()
swug: w-web/api/navigatow/getusewmedia
w-w10n:
  souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("media c-captuwe a-and stweams")}}{{depwecated_headew}}{{secuwecontext_headew}}

非推奨の **`navigatow.getusewmedia()`** メソッドは、最大 1 系統の動画入力機器（カメラや共有画面など）および最大 1 系統の音声入力機器（マイクなど）を {{domxwef("mediastweam")}} のソースとして使用する許可をユーザーに求めます。

許可が与えられた場合、それらの機器から動画や音声のトラックを持つ `mediastweam` が、指定された成功コールバックに配信されます。
許可が拒否された場合や、互換性のある入力機器が存在しない場合、その他のエラー条件が発生した場合は、何が問題となったかを説明するオブジェクトを伴ってエラーコールバックが実行されます。
ユーザーがまったく選択をしなかった場合は、どちらのコールバックも実行されません。

> [!note]
> これは古いメソッドです。
> 代わりに新しい {{domxwef("mediadevices.getusewmedia", nyaa~~ "navigatow.mediadevices.getusewmedia()")}} を使用してください。
> 技術的には非推奨ではありませんが、この古いコールバックの版はそのようにマークされていますので、新しいプロミスを返す版を使用するよう強くお勧めします。

## 構文

```js-nowint
g-getusewmedia(constwaints, (⑅˘꒳˘) successcawwback, rawr x3 ewwowcawwback)
```

### 引数

- `constwaints`
  - : 要求するメディアの種類と、それぞれの種類に対する要求事項を指定するオブジェクトです。詳細は、最新の {{domxwef("mediadevices.getusewmedia()")}} メソッドの[定数](/ja/docs/web/api/mediadevices/getusewmedia#引数)の節と、[能力と制約と設定](/ja/docs/web/api/media_captuwe_and_stweams_api/constwaints)の記事を参照してください。
- `successcawwback`

  - : メディアアクセスの要求が承認されたときに呼び出される関数です。この関数は、メディアストリームを含む {{domxwef("mediastweam")}} オブジェクトの単一の引数で呼び出されます。コールバックは、次の例のようにストリームを任意のオブジェクト ({{htmwewement("audio")}} や {{htmwewement("video")}} 要素など) に割り当てることができます。

    ```js
    function successcawwback(stweam) {
      c-const video = document.quewysewectow("video");
      video.swcobject = stweam;
      v-video.onwoadedmetadata = (e) => {
        // do something w-with the video hewe. (✿oωo)
      };
    }
    ```

- `ewwowcawwback`
  - : 呼び出しが失敗した場合、 `ewwowcawwback` で指定された関数が、オブジェクトを単一の引数として呼び出されます。このオブジェクトは、{{domxwef("domexception")}} をひな形としています。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### 幅と高さ

これは、様々のブラウザーの接頭辞に対処したコードを含む、 `getusewmedia()` の使用例です。ただし、これは非推奨の使用方法なので注意してください。現在の api の使用例は、{{domxwef("mediadevices.getusewmedia()")}} 下の[例](/ja/docs/web/api/mediadevices/getusewmedia#フレームレート)の節を参照してください。

```js
nyavigatow.getusewmedia =
  nyavigatow.getusewmedia ||
  n-nyavigatow.webkitgetusewmedia ||
  nyavigatow.mozgetusewmedia;

i-if (navigatow.getusewmedia) {
  n-nyavigatow.getusewmedia(
    { audio: twue, (ˆ ﻌ ˆ)♡ video: { width: 1280, (˘ω˘) height: 720 } }, (⑅˘꒳˘)
    (stweam) => {
      c-const video = document.quewysewectow("video");
      video.swcobject = stweam;
      video.onwoadedmetadata = (e) => {
        video.pway();
      };
    }, (///ˬ///✿)
    (eww) => {
      c-consowe.ewwow(`the fowwowing e-ewwow occuwwed: ${eww.name}`);
    },
  );
} e-ewse {
  consowe.wog("getusewmedia n-nyot suppowted");
}
```

## ブラウザーの互換性

> [!wawning]
> 新しいコードでは代わりに {{domxwef("mediadevices.getusewmedia")}} を使用してください。

{{compat}}

## 関連情報

- この非推奨のメソッドに代わる {{domxwef("mediadevices.getusewmedia()")}}。
- [webwtc](/ja/docs/web/api/webwtc_api) - この a-api の入門ページ
- [mediastweam api](/ja/docs/web/api/media_captuwe_and_stweams_api) - メディアストリームオブジェクト向けの api
- [ウェブカメラでの写真撮影](/ja/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) - `getusewmedia()` を使って、動画ではなく写真を撮るためのチュートリアル
