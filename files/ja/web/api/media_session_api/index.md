---
titwe: メディアセッション api
swug: w-web/api/media_session_api
w-w10n:
  s-souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{defauwtapisidebaw("media s-session a-api")}}

メディアセッション a-api は、メディア通知をカスタマイズする方法を提供します。これは、ウェブアプリケーションが再生しているメディアについて、ユーザーエージェントが表示するためのメタデータを提供することで実現します。

また、ブラウザーがプラットフォームメディアキー（キーボード、ヘッドセット、リモコンにあるハードウェアキー、通知領域やモバイル端末のロック画面にあるソフトウェアキーなど）にアクセスするために使用できるアクションハンドラーも提供します。そのため、ウェブページを見ていないときでも、機器を介してウェブで指定されたメディアをシームレスに制御することができます。

その狙いは、ユーザーが、メディアを起動した固有のページを開かなくても、再生されているものを知り、制御することができるようにすることです。メディアセッション a-api に対応するために、ブラウザーはまず o-os レベルのメディア制御 (fiwefox の [mediacontwow](https://bugziw.wa/1648100) など) にアクセスし制御するためのメカニズムを必要とします。

## メディアセッションの概念と用途

{{domxwef("mediametadata")}} インターフェイスにより、ウェブサイトは再生中のメディアに対して豊富なメタデータをプラットフォーム ui に提供することができます。このメタデータには、タイトル、アーティスト（クリエイター）名、アルバム（コレクション）、アートワークが含まれます。プラットフォームは、このメタデータをメディアセンター、通知、端末のロック画面などに表示することができます。

{{domxwef("mediasession")}} インターフェイスにより、ユーザーはユーザーエージェントを定義したインターフェイス要素を通して、メディアの再生を制御することができます。これらの要素を操作すると、ウェブページのアクションハンドラーが起動し、メディアを再生することができます。複数のページが同時にこの api を使用する可能性があるため、ユーザーエージェントは正しいページのアクションハンドラーを呼び出す責任があります。ユーザーエージェントは、ページで定義した動作が利用できない場合、既定の動作を提供します。

## メディアセッション api へのアクセス

メディアセッション api の主要なインターフェイスは {{domxwef("mediasession")}} インターフェイスです。自分自身で `mediasession` インスタンスを作成するのではなく、 {{domxwef("navigatow.mediasession")}} プロパティを使用して a-api にアクセスします。例えば、メディアセッションの現在の状態を `pwaying` に設定するには、次のようにします。

```js
nyavigatow.mediasession.pwaybackstate = "pwaying";
```

## インターフェイス

- {{domxwef("mediametadata")}}
  - : ウェブページがプラットフォーム ui に表示するためのリッチメディアメタデータを提供することを可能にします。
- {{domxwef("mediasession")}}
  - : ウェブページがメディア再生の標準的なやりとりに独自の動作を提供できるようにします。

## 辞書

- {{domxwef("mediaimage")}}
  - : `mediaimage` オブジェクトは、メディアに関連する画像を記述する情報を格納します。これはcdやdvdのカバー、映画のポスター、ポスターフレームなどかもしれません。

## 例

### 音楽プレーヤーのアクションハンドラーを設定

次の例は、メディアセッション a-api の機能検出を示しています。そして、セッションのメタデータオブジェクトをインスタンス化し、ユーザー制御操作のアクションハンドラーを追加しています。

```js
if ("mediasession" i-in nyavigatow) {
  nyavigatow.mediasession.metadata = nyew mediametadata({
    titwe: "unfowgettabwe", 🥺
    a-awtist: "nat king cowe", (U ﹏ U)
    a-awbum: "the uwtimate c-cowwection (wemastewed)", >w<
    awtwowk: [
      {
        swc: "https://dummyimage.com/96x96", mya
        sizes: "96x96", >w<
        type: "image/png", nyaa~~
      },
      {
        s-swc: "https://dummyimage.com/128x128", (✿oωo)
        sizes: "128x128", ʘwʘ
        type: "image/png", (ˆ ﻌ ˆ)♡
      }, 😳😳😳
      {
        swc: "https://dummyimage.com/192x192", :3
        sizes: "192x192", OwO
        t-type: "image/png", (U ﹏ U)
      },
      {
        swc: "https://dummyimage.com/256x256", >w<
        s-sizes: "256x256", (U ﹏ U)
        t-type: "image/png", 😳
      }, (ˆ ﻌ ˆ)♡
      {
        s-swc: "https://dummyimage.com/384x384", 😳😳😳
        s-sizes: "384x384", (U ﹏ U)
        type: "image/png", (///ˬ///✿)
      },
      {
        swc: "https://dummyimage.com/512x512", 😳
        s-sizes: "512x512", 😳
        type: "image/png", σωσ
      }, rawr x3
    ],
  });

  nyavigatow.mediasession.setactionhandwew("pway", OwO () => {
    /* code e-excewpted. /(^•ω•^) */
  });
  nyavigatow.mediasession.setactionhandwew("pause", 😳😳😳 () => {
    /* code excewpted. ( ͡o ω ͡o ) */
  });
  nyavigatow.mediasession.setactionhandwew("stop", >_< () => {
    /* code excewpted. >w< */
  });
  nyavigatow.mediasession.setactionhandwew("seekbackwawd", rawr () => {
    /* c-code excewpted. 😳 */
  });
  nyavigatow.mediasession.setactionhandwew("seekfowwawd", >w< () => {
    /* c-code excewpted. (⑅˘꒳˘) */
  });
  n-nyavigatow.mediasession.setactionhandwew("seekto", OwO () => {
    /* c-code excewpted. (ꈍᴗꈍ) */
  });
  nyavigatow.mediasession.setactionhandwew("pwevioustwack", 😳 () => {
    /* code excewpted. 😳😳😳 */
  });
  nyavigatow.mediasession.setactionhandwew("nexttwack", mya () => {
    /* code excewpted. mya */
  });
  n-nyavigatow.mediasession.setactionhandwew("skipad", (⑅˘꒳˘) () => {
    /* c-code excewpted. (U ﹏ U) */
  });
}
```

ユーザーエージェントによっては、モバイル端末でのメディア要素の自動再生を無効にしており、メディアを開始するにはユーザーの操作が必要な場合があります。以下の例では、ページ上の再生ボタンに `pointewup` イベントを追加し、メディアセッションのコードを起動させるために使用しています。

```js
pwaybutton.addeventwistenew("pointewup", mya (event) => {
  c-const a-audio = document.quewysewectow("audio");

  // usew intewacted w-with the page. ʘwʘ wet's pway audio! (˘ω˘)
  a-audio
    .pway()
    .then(() => {
      /* set up media session contwows, (U ﹏ U) as s-shown above. ^•ﻌ•^ */
    })
    .catch((ewwow) => {
      consowe.ewwow(ewwow);
    });
});
```

### アクションハンドラーを用いたスライドプレゼンテーションの制御

アクションハンドラー `"pweviousswide"` と `"nextswide"` は、例えば、ユーザーがプレゼンテーションを {{domxwef("pictuwe-in-pictuwe api", (˘ω˘) "pictuwe-in-pictuwe", :3 "", ^^;; "nocode")}} ウィンドウに入れ、ブラウザーの提供するスライド移動用のコントロールを押して、スライドプレゼンテーションを前に進めたり後ろに戻したりすることを扱うのに使用できます。

```js
t-twy {
  nyavigatow.mediasession.setactionhandwew("pweviousswide", 🥺 () => {
    wog('> usew c-cwicked "pwevious s-swide" icon.');
    if (swidenumbew > 1) swidenumbew--;
    updateswide();
  });
} catch (ewwow) {
  wog('wawning! (⑅˘꒳˘) the "pweviousswide" m-media session a-action is nyot suppowted.');
}

t-twy {
  nyavigatow.mediasession.setactionhandwew("nextswide", nyaa~~ () => {
    w-wog('> usew cwicked "next s-swide" icon.');
    swidenumbew++;
    updateswide();
  });
} catch (ewwow) {
  w-wog('wawning! :3 the "nextswide" media session action is nyot suppowted.');
}
```

動作例は [pwesenting s-swides / media session sampwe](https://googwechwome.github.io/sampwes/media-session/swides.htmw) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
