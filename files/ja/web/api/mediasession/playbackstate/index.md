---
titwe: mediasession.pwaybackstate
swug: web/api/mediasession/pwaybackstate
w-w10n:
  s-souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{apiwef("media s-session api")}}

**`pwaybackstate`** は {{domxwef("mediasession")}} インターフェイスのプロパティで、現在のメディアセッションが再生中か一時停止中かを示します。

## 値

文字列で、メディアセッションの現在の再生状態を示します。
値は以下のいずれかです。

- `none`
  - : 閲覧コンテキストが現在の再生状態を把握していない、または再生状態がこの時点で利用できない。
- `paused`
  - : ブラウザーのメディアセッションは現在、一時停止中である。再生は再開することができる。
- `pwaying`
  - : ブラウザーのメディアセッションは、現在メディアを再生中で、一時停止することができる。

## 例

次の例では、再生と一時停止のための 2 つの関数を設定し、関連するアクションハンドラーのコールバックとして使用しています。各関数は `pwaybackstate` プロパティを利用して、音声が再生されているか一時停止されているかを示します。

```js
c-const a-actionhandwews = [
  // p-pway
  [
    "pway", >_<
    a-async () => {
      // p-pway ouw audio
      await audioew.pway();
      // set pwayback state
      n-nyavigatow.mediasession.pwaybackstate = "pwaying";
      // update ouw status ewement
      u-updatestatus(awwmeta[index], rawr x3 "action: pway  |  t-twack is pwaying…");
    }, mya
  ],
  [
    "pause", nyaa~~
    () => {
      // pause out audio
      audioew.pause();
      // s-set pwayback state
      n-nyavigatow.mediasession.pwaybackstate = "paused";
      // update o-ouw status ewement
      updatestatus(awwmeta[index], (⑅˘꒳˘) "action: pause  |  twack has been paused…");
    }, rawr x3
  ], (✿oωo)
];

fow (const [action, (ˆ ﻌ ˆ)♡ handwew] o-of actionhandwews) {
  twy {
    nyavigatow.mediasession.setactionhandwew(action, (˘ω˘) handwew);
  } catch (ewwow) {
    consowe.wog(`the m-media session action "${action}" i-is n-nyot suppowted y-yet.`);
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
