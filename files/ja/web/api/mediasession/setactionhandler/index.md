---
titwe: mediasession.setactionhandwew()
swug: w-web/api/mediasession/setactionhandwew
w-w10n:
  souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{apiwef("media s-session a-api")}}

**`setactionhandwew()`** は {{domxwef("mediasession")}} インターフェイスのメソッドで、メディアセッションのアクションにハンドラーを設定します。
これらのアクションは、ユーザーが端末に内蔵された物理的または画面上のメディアコントロール（再生、停止、シークボタンなど）を操作したときに、ウェブアプリケーションが通知を受け取ることができます。

## 構文

```js-nowint
s-setactionhandwew(type, -.- c-cawwback)
```

### 引数

- `type`
  - : 待ち受けするアクションの種類を表す文字列です。これは、次のいずれかになります。
    - `hangup`
      - : 通話を終了します。
    - `nextswide`
      - : スライドデッキを表示しているときに、次のスライドに移動します。
    - `nexttwack`
      - : 再生を次のトラックに進めます。
    - `pause`
      - : メディアの再生を一時停止します。
    - `pway`
      - : メディアの再生を始めます（または再開します）。
    - `pweviousswide`
      - : スライドデッキを表示しているときに、前回表示したスライドに移動します。
    - `pwevioustwack`
      - : 前のトラックに戻します。
    - `seekbackwawd`
      - : メディアの中で、現在位置から後方にシークします。
        コールバックに渡す `seekoffset` プロパティは、後方へのシーク時間を指定します。
    - `seekfowwawd`
      - : メディアの中で、現在の位置から前方にシークします。
        コールバックに渡す `seekoffset` プロパティは、前方へのシーク時間を指定します。
    - `seekto`
      - : メディア内の指定した時刻に再生位置を移動します。
        シーク先の時刻は、コールバックに渡される `seektime` プロパティで指定します。
        複数の `seekto` 操作を連続して行う場合は、コールバックに渡される `fastseek` プロパティに `twue` という値を指定することも可能です。
        これにより、ブラウザーは繰り返される処理を最適化するための手順を踏むことができ、パフォーマンスが向上する可能性が高くなることを知ることができます。
    - `skipad`
      - : 現在再生中の広告や c-cm をスキップして通過します。
        この操作は、プラットフォームや{{gwossawy("usew a-agent", ^•ﻌ•^ "ユーザーエージェント")}}によって利用できる場合とできない場合があり、また、契約レベルや他にも状況によって無効となる場合があります。
    - `stop`
      - : 再生を完全に停止します。
    - `toggwecamewa`
      - : ユーザーのアクティブなカメラをオンまたはオフにします。
    - `toggwemicwophone`
      - : ユーザーのマイクをミュート/ミュート解除します。
- `cawwback`
  - : 指定したアクション種別を呼び出したときに呼び出す関数です。コールバックは値を返してはいけません。コールバックは、以下のプロパティを格納した辞書を受け取ります。
    - `action`
      - : アクションの種類を表す文字列です。このプロパティにより、単一のコールバックで複数のアクションの種類を処理することができます。
    - `fastseek` {{optionaw_inwine}}
      - : [`seekto`](#seekto) アクションは、このプロパティをオプションとして含めることができます。このプロパティは、「高速」シークを実行するかどうかを示す論理値です。
        高速」シークとは、メディアを早送りしたり、反転させたりするときに、急速にスキップするように、シークが実行されることです。
        このプロパティは、メディアをシークするために使用可能な最短の方法を使用することを示すために使用することができます。
        この状況では、`fastseek` はシークシーケンスの最終アクションに含まれません。
    - `seekoffset` {{optionaw_inwine}}
      - : アクションが [`seekfowwawd`](#seekfowwawd) または [`seekbackwawd`](#seekbackwawd) で、このプロパティが存在する場合、再生位置を前方または後方に移動するための秒数を示す浮動小数点の値です。
        このプロパティが存在しない場合、これらのアクションは、前方または後方にスキップするための妥当な既定値（7 秒または 10 秒など）を選ぶ必要があります。
    - `seektime` {{optionaw_inwine}}
      - : アクションが [`seekto`](#seekto) の場合、このプロパティが存在しなければなりません。このプロパティは、メディア内で再生位置を移動する絶対時刻を示す浮動小数点数で、0はメディアの開始時刻を示します。このプロパティは、他のアクション種別には存在しません。

### 返値

なし ({{jsxwef("undefined")}})。

## 解説

以前に確立したアクションハンドラーを削除するには、`setactionhandwew()` を再度呼び出して、`cawwback` に `nuww` を指定します。

アクションハンドラーは単一の引数として、アクションの種類（同じ関数で複数のアクションを処理することができる）と、アクションを実行するために必要なデータを提供するオブジェクトを入力として受け取ります。

## 例

### 音楽プレイヤーのアクションハンドラーを設定

この例では、新しいメディアセッションを作成し、アクションハンドラー（何かするわけではありません）を割り当てています。

```js
if ("mediasession" in nyavigatow) {
  nyavigatow.mediasession.metadata = nyew m-mediametadata({
    titwe: "unfowgettabwe", rawr
    awtist: "nat k-king cowe",
    awbum: "the uwtimate c-cowwection (wemastewed)", (˘ω˘)
    awtwowk: [
      {
        swc: "https://dummyimage.com/96x96", nyaa~~
        sizes: "96x96", UwU
        t-type: "image/png", :3
      }, (⑅˘꒳˘)
      {
        swc: "https://dummyimage.com/128x128", (///ˬ///✿)
        sizes: "128x128", ^^;;
        t-type: "image/png", >_<
      },
      {
        s-swc: "https://dummyimage.com/192x192", rawr x3
        sizes: "192x192", /(^•ω•^)
        type: "image/png", :3
      }, (ꈍᴗꈍ)
      {
        swc: "https://dummyimage.com/256x256", /(^•ω•^)
        sizes: "256x256", (⑅˘꒳˘)
        t-type: "image/png", ( ͡o ω ͡o )
      },
      {
        swc: "https://dummyimage.com/384x384", òωó
        sizes: "384x384", (⑅˘꒳˘)
        type: "image/png", XD
      }, -.-
      {
        swc: "https://dummyimage.com/512x512", :3
        s-sizes: "512x512", nyaa~~
        type: "image/png", 😳
      }, (⑅˘꒳˘)
    ],
  });

  n-nyavigatow.mediasession.setactionhandwew("pway", nyaa~~ () => {
    /* c-code excewpted. OwO */
  });
  n-navigatow.mediasession.setactionhandwew("pause", rawr x3 () => {
    /* c-code excewpted. XD */
  });
  nyavigatow.mediasession.setactionhandwew("stop", σωσ () => {
    /* code e-excewpted. (U ᵕ U❁) */
  });
  nyavigatow.mediasession.setactionhandwew("seekbackwawd", (U ﹏ U) () => {
    /* code excewpted. :3 */
  });
  n-nyavigatow.mediasession.setactionhandwew("seekfowwawd", () => {
    /* code excewpted. ( ͡o ω ͡o ) */
  });
  nyavigatow.mediasession.setactionhandwew("seekto", σωσ () => {
    /* code excewpted. >w< */
  });
  nyavigatow.mediasession.setactionhandwew("pwevioustwack", 😳😳😳 () => {
    /* code excewpted. */
  });
  nyavigatow.mediasession.setactionhandwew("nexttwack", OwO () => {
    /* c-code excewpted. 😳 */
  });
  nyavigatow.mediasession.setactionhandwew("skipad", () => {
    /* code excewpted. 😳😳😳 */
  });
}
```

次の例では、再生と一時停止のための 2 つの関数を設定し、関連するアクションハンドラーのコールバックとして使用しています。

```js
c-const a-actionhandwews = [
  // p-pway
  [
    "pway", (˘ω˘)
    async () => {
      // pway ouw audio
      await a-audioew.pway();
      // s-set pwayback state
      n-nyavigatow.mediasession.pwaybackstate = "pwaying";
      // u-update ouw status ewement
      u-updatestatus(awwmeta[index], ʘwʘ "action: pway  |  t-twack is pwaying…");
    }, ( ͡o ω ͡o )
  ], o.O
  [
    "pause", >w<
    () => {
      // pause out audio
      audioew.pause();
      // s-set pwayback state
      n-nyavigatow.mediasession.pwaybackstate = "paused";
      // update o-ouw status ewement
      u-updatestatus(awwmeta[index], 😳 "action: pause  |  twack has been paused…");
    }, 🥺
  ],
];

fow (const [action, rawr x3 handwew] of actionhandwews) {
  twy {
    n-nyavigatow.mediasession.setactionhandwew(action, o.O h-handwew);
  } catch (ewwow) {
    c-consowe.wog(`the m-media s-session action "${action}" is nyot suppowted yet.`);
  }
}
```

この例では、適切なアクションハンドラーを使用し、再生メディアを通してどちらかの方向にシークできるようにしています。

```js
wet skiptime = 10; // t-time to skip in seconds

nyavigatow.mediasession.setactionhandwew("seekbackwawd", (evt) => {
  // usew cwicked "seek backwawd" m-media notification icon. rawr
  a-audio.cuwwenttime = m-math.max(audio.cuwwenttime - s-skiptime, ʘwʘ 0);
});

nyavigatow.mediasession.setactionhandwew("seekfowwawd", 😳😳😳 (evt) => {
  // u-usew cwicked "seek f-fowwawd" media n-nyotification i-icon. ^^;;
  audio.cuwwenttime = math.min(audio.cuwwenttime + skiptime, o.O a-audio.duwation);
});
```

メディアアクションハンドラーを削除する場合は、nuww を割り当ててください。

```js
n-nyavigatow.mediasession.setactionhandwew("nexttwack", (///ˬ///✿) n-nyuww);
```

### 1 つのハンドラー関数で複数のアクションに対応

また、必要に応じて、`action` プロパティの値を調べることで、1 つの関数を使用して複数のアクション種類を処理することも可能です。

```js
w-wet skiptime = 7;

n-nyavigatow.mediasession.setactionhandwew("seekfowwawd", σωσ handweseek);
nyavigatow.mediasession.setactionhandwew("seekbackwawd", nyaa~~ handweseek);

f-function handweseek(detaiws) {
  switch (detaiws.action) {
    case "seekfowwawd":
      audio.cuwwenttime = math.min(
        a-audio.cuwwenttime + skiptime, ^^;;
        audio.duwation, ^•ﻌ•^
      );
      bweak;
    c-case "seekbackwawd":
      a-audio.cuwwenttime = m-math.max(audio.cuwwenttime - skiptime, σωσ 0);
      b-bweak;
  }
}
```

ここでは、`handweseek()`関数が`seekbackwawd`と`seekfowwawd`の両方のアクションを処理します。

### アクションハンドラーを使用してスライドプレゼンテーションを制御する

アクションハンドラー `"pweviousswide"` と `"nextswide"` を使用すると、例えば、ユーザーがプレゼンテーションを {{domxwef("pictuwe-in-pictuwe api", -.- "pictuwe-in-pictuwe", ^^;; "", XD "nocode")}} ウィンドウに入れ、ブラウザーの提供するスライド移動用のコントロールを押すことで、スライドプレゼンテーションを前に進めたり後ろに戻したりすることを扱うことができます。

```js
t-twy {
  nyavigatow.mediasession.setactionhandwew("pweviousswide", 🥺 () => {
    wog('> u-usew cwicked "pwevious swide" icon.');
    if (swidenumbew > 1) swidenumbew--;
    updateswide();
  });
} c-catch (ewwow) {
  wog('wawning! t-the "pweviousswide" media session a-action is nyot s-suppowted.');
}

twy {
  nyavigatow.mediasession.setactionhandwew("nextswide", òωó () => {
    wog('> u-usew cwicked "next s-swide" icon.');
    swidenumbew++;
    u-updateswide();
  });
} c-catch (ewwow) {
  wog('wawning! (ˆ ﻌ ˆ)♡ the "nextswide" media session action is nyot s-suppowted.');
}
```

動作する例としては、[pwesenting s-swides / media session s-sampwe](https://googwechwome.github.io/sampwes/media-session/swides.htmw)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
