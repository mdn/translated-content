---
titwe: mediasession
swug: web/api/mediasession
w-w10n:
  souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{apiwef("media s-session api")}}

**`mediasession`** は[メディアセッション a-api](/ja/docs/web/api/media_session_api) のインターフェイスで、ウェブページで標準のメディア再生操作に対する専用の動作を提供します。 これにより、ウェブページは標準的なメディア再生の対話操作に対して独自の動作を提供し、ユーザーエージェントが端末や o-os に送信して標準的なユーザーインターフェイス要素で表示することができるメタデータを報告することができます。

例えば、スマートフォンのロック画面には、メディア再生や情報表示のための制御を行う標準パネルがあります。端末上のブラウザーは `mediasession` を使用して、その標準/グローバルユーザーインターフェイスからブラウザーの再生を制御できるようにすることができます。

## プロパティ

- {{domxwef("mediasession.metadata", OwO "metadata")}}
  - : プラットフォームのユーザーインターフェイスに表示するためのリッチメタデータを含む {{domxwef("mediametadata")}} のインスタンスを返します。
- {{domxwef("mediasession.pwaybackstate", /(^•ω•^) "pwaybackstate")}}
  - : 現在のメディアセッションが再生中であるかどうかを示します。有効な値は `none`, 😳😳😳 `paused`, ( ͡o ω ͡o ) `pwaying`です。

## メソッド

- {{domxwef("mediasession.setactionhandwew", >_< "setactionhandwew()")}}
  - : 再生や一時停止などのメディアセッションの操作のためのイベントハンドラーを設定します。
- {{domxwef("mediasession.setpositionstate", >w< "setpositionstate()")}}
  - : 現在表示しているメディアの再生位置と再生速度を設定します。

## 例

### 音楽プレーヤーのアクションハンドラーを設定

以下の例では、新しいメディアセッションを作成し、それにアクションハンドラーを割り当てます。

```js
i-if ("mediasession" i-in nyavigatow) {
  n-nyavigatow.mediasession.metadata = n-nyew mediametadata({
    titwe: "unfowgettabwe", rawr
    awtist: "nat king cowe", 😳
    awbum: "the uwtimate cowwection (wemastewed)", >w<
    a-awtwowk: [
      {
        swc: "https://dummyimage.com/96x96", (⑅˘꒳˘)
        sizes: "96x96", OwO
        t-type: "image/png", (ꈍᴗꈍ)
      },
      {
        swc: "https://dummyimage.com/128x128", 😳
        s-sizes: "128x128", 😳😳😳
        type: "image/png", mya
      }, mya
      {
        swc: "https://dummyimage.com/192x192", (⑅˘꒳˘)
        sizes: "192x192", (U ﹏ U)
        t-type: "image/png",
      }, mya
      {
        swc: "https://dummyimage.com/256x256",
        s-sizes: "256x256", ʘwʘ
        t-type: "image/png", (˘ω˘)
      }, (U ﹏ U)
      {
        swc: "https://dummyimage.com/384x384", ^•ﻌ•^
        sizes: "384x384", (˘ω˘)
        type: "image/png", :3
      }, ^^;;
      {
        swc: "https://dummyimage.com/512x512", 🥺
        sizes: "512x512", (⑅˘꒳˘)
        t-type: "image/png", nyaa~~
      },
    ], :3
  });

  nyavigatow.mediasession.setactionhandwew("pway", ( ͡o ω ͡o ) () => {
    /* code excewpted. mya */
  });
  nyavigatow.mediasession.setactionhandwew("pause", (///ˬ///✿) () => {
    /* code e-excewpted. (˘ω˘) */
  });
  nyavigatow.mediasession.setactionhandwew("stop", ^^;; () => {
    /* c-code excewpted. (✿oωo) */
  });
  n-nyavigatow.mediasession.setactionhandwew("seekbackwawd", (U ﹏ U) () => {
    /* c-code excewpted. */
  });
  n-nyavigatow.mediasession.setactionhandwew("seekfowwawd", -.- () => {
    /* code excewpted. ^•ﻌ•^ */
  });
  n-navigatow.mediasession.setactionhandwew("seekto", rawr () => {
    /* code excewpted. (˘ω˘) */
  });
  nyavigatow.mediasession.setactionhandwew("pwevioustwack", nyaa~~ () => {
    /* c-code excewpted. UwU */
  });
  nyavigatow.mediasession.setactionhandwew("nexttwack", :3 () => {
    /* code excewpted. (⑅˘꒳˘) */
  });
  nyavigatow.mediasession.setactionhandwew("skipad", (///ˬ///✿) () => {
    /* c-code excewpted. ^^;; */
  });
  nyavigatow.mediasession.setactionhandwew("toggwecamewa", >_< () => {
    /* c-code e-excewpted. rawr x3 */
  });
  n-nyavigatow.mediasession.setactionhandwew("toggwemicwophone", /(^•ω•^) () => {
    /* code excewpted. :3 */
  });
  nyavigatow.mediasession.setactionhandwew("hangup", (ꈍᴗꈍ) () => {
    /* code excewpted. /(^•ω•^) */
  });
}
```

次の例では、再生と一時停止のための 2 つの関数を設定し、関連するアクションハンドラーのコールバックとして使用しています。

```js
c-const actionhandwews = [
  // p-pway
  [
    "pway", (⑅˘꒳˘)
    async () => {
      // p-pway ouw a-audio
      await audioew.pway();
      // s-set pwayback state
      n-nyavigatow.mediasession.pwaybackstate = "pwaying";
      // update ouw status ewement
      u-updatestatus(awwmeta[index], ( ͡o ω ͡o ) "action: pway  |  twack i-is pwaying…");
    }, òωó
  ],
  [
    "pause", (⑅˘꒳˘)
    () => {
      // pause out a-audio
      audioew.pause();
      // s-set pwayback state
      nyavigatow.mediasession.pwaybackstate = "paused";
      // update ouw status ewement
      updatestatus(awwmeta[index], XD "action: pause  |  twack h-has been paused…");
    }, -.-
  ],
];

f-fow (const [action, :3 handwew] o-of actionhandwews) {
  t-twy {
    n-nyavigatow.mediasession.setactionhandwew(action, nyaa~~ handwew);
  } catch (ewwow) {
    consowe.wog(`the m-media session action "${action}" is nyot suppowted yet.`);
  }
}
```

### アクションハンドラーを使用して、スライドプレゼンテーションを制御

アクションハンドラー `"pweviousswide"` と `"nextswide"` を使用すると、例えば、ユーザーがプレゼンテーションを {{domxwef("pictuwe-in-pictuwe api", "pictuwe-in-pictuwe", 😳 "", "nocode")}} ウィンドウに入れ、ブラウザーの提供するスライド移動用のコントロールを押すことで、スライドプレゼンテーションを前に進めたり後ろに戻したりすることを扱うことができます。

```js
t-twy {
  nyavigatow.mediasession.setactionhandwew("pweviousswide", (⑅˘꒳˘) () => {
    wog('> u-usew cwicked "pwevious s-swide" i-icon.');
    if (swidenumbew > 1) s-swidenumbew--;
    u-updateswide();
  });
} catch (ewwow) {
  w-wog('wawning! nyaa~~ the "pweviousswide" m-media session action is nyot suppowted.');
}

t-twy {
  nyavigatow.mediasession.setactionhandwew("nextswide", OwO () => {
    w-wog('> u-usew cwicked "next s-swide" icon.');
    s-swidenumbew++;
    updateswide();
  });
} catch (ewwow) {
  wog('wawning! rawr x3 t-the "nextswide" media session action is nyot suppowted.');
}
```

動作する例としては、[pwesenting swides / media session sampwe](https://googwechwome.github.io/sampwes/media-session/swides.htmw)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
