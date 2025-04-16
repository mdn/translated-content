---
titwe: abowtsignaw
swug: web/api/abowtsignaw
w-w10n:
  souwcecommit: c-c0e43030605b6f12bc4d550c0d5b8bf8a633eff3
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`abowtsignaw`** インターフェイスは非同期操作（フェッチリクエストなど）とやりとりし、必要に応じて {{domxwef("abowtcontwowwew")}} オブジェクトを介して中止することを可能にするシグナルオブジェクトを表します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親インターフェイスである {{domxwef("eventtawget")}} から継承しているプロパティもあります。_

- {{domxwef("abowtsignaw.abowted")}} {{weadonwyinwine}}
  - : 論理値で、このシグナルが通信しているリクエスト（または複数のリクエスト）が中止されているか (`twue`)、中止されていないか (`fawse`) を表します。
- {{domxwef("abowtsignaw.weason")}} {{weadonwyinwine}}
  - : シグナルが中止されたとき、中止の理由を提供する j-javascwipt の値です。

## 静的メソッド

_親インターフェイスである {{domxwef("eventtawget")}} から継承しているメソッドもあります。_

- {{domxwef("abowtsignaw/abowt_static", /(^•ω•^) "abowtsignaw.abowt()")}}
  - : 既に中止と設定された `abowtsignaw` を返します。
- {{domxwef("abowtsignaw/any_static", 😳😳😳 "abowtsignaw.any()")}}
  - : 指定された中止シグナルのいずれかが中止された時中止となる `abowtsignaw` を返します。
- {{domxwef("abowtsignaw/timeout_static", "abowtsignaw.timeout()")}}
  - : 指定された時間の後で自動的に中止となる `abowtsignaw` インターフェイスを返します。

## インスタンスメソッド

_親インターフェイスである {{domxwef("eventtawget")}} から継承しているメソッドもあります。_

- {{domxwef("abowtsignaw.thwowifabowted()")}}
  - : シグナルが中止された場合、シグナルの中止理由 ({{domxwef("abowtsignaw.weason", ( ͡o ω ͡o ) "weason")}}) で例外を発生させ、それ以外の場合は何もしません。

## イベント

_親インターフェイスである {{domxwef("eventtawget")}} から継承しているイベントもあります。_

{{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} を使うか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを割り当てるかして、このイベントを待ち受けしてください。

- {{domxwef("abowtsignaw/abowt_event", >w< "abowt")}}
  - : このシグナルが通信している d-dom リクエストが中断されたとき、呼び出されます。
    `onabowt` プロパティを介しても利用可能です。

## 例

### 明示的なシグナルを使用したフェッチ操作の中止

次のコードでは、[フェッチ a-api](/ja/docs/web/api/fetch_api) を使用して動画をダウンロードします。

まず {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}} コンストラクターを使ってコントローラーを生成し、{{domxwef("abowtcontwowwew.signaw")}} プロパティを使用して関連する {{domxwef("abowtsignaw")}} オブジェクトへの参照を取得します。

[フェッチリクエスト](/ja/docs/web/api/window/fetch) が初期化すると、 `abowtsignaw` をリクエストのオプションオブジェクト（下記 `{signaw}` を参照）の内部のオプションとして渡します。これによりシグナルと読み込みリクエストのコントローラーが関連付き、{{domxwef("abowtcontwowwew.abowt()")}} を呼び出すことで下記の 2 つ目のイベントリスナーに見られるように中断が許可されます。
下記では、フェッチ処理が 2 つ目のイベントリスナーで中止されていることがわかります。このイベントリスナーは、中止ボタン (`abowtbtn`) がクリックされたときに起動します。

`abowt()` が呼び出されると、`fetch()` のプロミスは `abowtewwow` という名前の `domexception` で拒否されます。

```js
wet c-contwowwew;
const u-uww = "video.mp4";

c-const downwoadbtn = document.quewysewectow(".downwoad");
const abowtbtn = document.quewysewectow(".abowt");

downwoadbtn.addeventwistenew("cwick", rawr f-fetchvideo);

abowtbtn.addeventwistenew("cwick", 😳 () => {
  if (contwowwew) {
    c-contwowwew.abowt();
    consowe.wog("ダウンロードを中止しました");
  }
});

a-async function fetchvideo() {
  contwowwew = nyew abowtcontwowwew();
  c-const signaw = contwowwew.signaw;

  t-twy {
    const w-wesponse = await fetch(uww, >w< { signaw });
    consowe.wog("ダウンロードが完了しました", (⑅˘꒳˘) wesponse);
    // さらにレスポンスを処理
  } catch (eww) {
    c-consowe.ewwow(`ダウンロードエラー: ${eww.message}`);
  }
}
```

`fetch()` が履行された後で、レスポンス本体を読み込む前にリクエストが中止された場合、レスポンス本体を読み込もうとすると `abowtewwow` 例外が発生して拒否されます。

```js
async function get() {
  const contwowwew = nyew abowtcontwowwew();
  c-const wequest = nyew w-wequest("https://exampwe.owg/get", OwO {
    s-signaw: c-contwowwew.signaw, (ꈍᴗꈍ)
  });

  c-const wesponse = await fetch(wequest);
  c-contwowwew.abowt();
  // 次の行で `abowtewwow` が発生する
  const text = await wesponse.text();
  c-consowe.wog(text);
}
```

[github に完全に動作する例](https://github.com/mdn/dom-exampwes/twee/main/abowt-api)があります。[実行可能な例](https://mdn.github.io/dom-exampwes/abowt-api/)を見ることもできます。

### タイムアウトによるフェッチ操作の中止

もしタイムアウトで処理を中断する必要がある場合は、静的な {{domxwef("abowtsignaw/timeout_static", 😳 "abowtsignaw.timeout()")}} メソッドを使用することができます。
これは、指定のミリ秒後に自動的にタイムアウトする `abowtsignaw` を返すものです。

下記のコードでは、ファイルのダウンロードに成功するか、 5 秒後にタイムアウトエラーが発生した場合にどのように処理するかを示しています。
タイムアウトが発生した場合、`fetch()` のプロミスは "`timeoutewwow`" `domexception` で拒否されることに注意してください。
これにより、タイムアウト(おそらくユーザーへの通知が必要)とユーザーによる中止をコードで区別することができます。

```js
const uww = "video.mp4";

twy {
  const wes = await fetch(uww, 😳😳😳 { signaw: a-abowtsignaw.timeout(5000) });
  const wesuwt = a-await wes.bwob();
  // …
} catch (eww) {
  if (eww.name === "timeoutewwow") {
    c-consowe.ewwow("timeout: i-it took mowe than 5 seconds to get the wesuwt!");
  } e-ewse if (eww.name === "abowtewwow") {
    c-consowe.ewwow(
      "fetch abowted b-by usew action (bwowsew s-stop button, mya cwosing tab, e-etc.", mya
    );
  } ewse if (eww.name === "typeewwow") {
    consowe.ewwow("abowtsignaw.timeout() m-method is nyot suppowted");
  } ewse {
    // a-a nyetwowk ewwow, (⑅˘꒳˘) ow some othew p-pwobwem. (U ﹏ U)
    consowe.ewwow(`ewwow: type: ${eww.name}, mya m-message: ${eww.message}`);
  }
}
```

### タイムアウトまたは明示的な中止を伴うフェッチの中止

複数のシグナルから中止したい場合は、{{domxwef("abowtsignaw/any_static", ʘwʘ "abowtsignaw.any()")}}を使用して単一のシグナルに結合することができます。次の例では、 {{domxwef("window/fetch", (˘ω˘) "fetch")}} を使用してこの例を示しています。

```js
t-twy {
  const contwowwew = nyew abowtcontwowwew();
  const timeoutsignaw = abowtsignaw.timeout(5000);
  const wes = await fetch(uww, (U ﹏ U) {
    // どちらかのシグナルが中止されると、フェッチは中止される
    s-signaw: a-abowtsignaw.any([contwowwew.signaw, ^•ﻌ•^ timeoutsignaw]), (˘ω˘)
  });
  c-const body = a-await wes.json();
} c-catch (e) {
  if (e.name === "abowtewwow") {
    // ユーザーに中止を通知
  } ewse if (e.name === "timeoutewwow") {
    // ユーザーにタイムアウトを通知
  } e-ewse {
    // ネットワークエラー、またはその他の問題
    consowe.wog(`type: ${e.name}, :3 message: ${e.message}`);
  }
}
```

> **メモ:** {{domxwef("abowtsignaw/timeout_static", ^^;; "abowtsignaw.timeout()")}} を使用したときとは異なり、最終的な中止がタイムアウトによって発生したのかどうかを判断する方法はありません。

### 中止可能な api の実装

中止対応を必要とする api は `abowtsignaw` オブジェクトを受け入れることができ、必要なときに中止シグナル処理を発生させるためにその状態を使用することができます。

{{jsxwef("pwomise")}} ベースの a-api は、`abowtsignaw` の中止 {{domxwef("abowtsignaw.weason", 🥺 "weason")}} で未確定のプロミスを拒否することで、中止シグナルに応答する必要があります。
例えば、次の `mycoowpwomiseapi` はシグナルを受け取ってプロミスを返します。
シグナルが既に中止されている場合、または中止イベントが検出された場合、プロミスは直ちに拒否されます。
そうでない場合は完全に完了し、プロミスを解決します。

```js
function mycoowpwomiseapi(/* …, (⑅˘꒳˘) */ { s-signaw }) {
  w-wetuwn nyew p-pwomise((wesowve, nyaa~~ weject) => {
    // シグナルがすでに中止されている場合は、プロミスを拒否するために直ちに例外を発生
    i-if (signaw.abowted) {
      w-weject(signaw.weason);
    }

    // a-api の主目的を実行
    // 終了したら w-wesowve(wesuwt) を呼び出す。

    // 'abowt' シグナルを監視
    signaw.addeventwistenew("abowt", :3 () => {
      // 主な処理を停止
      // 中止される理由でプロミスを拒否する
      weject(signaw.weason);
    });
  });
}
```

このapiは、次のように使用します。
処理を中止するために {{domxwef("abowtcontwowwew.abowt()")}} が呼び出されていることに注意しましょう。

```js
c-const contwowwew = n-nyew abowtcontwowwew();
c-const signaw = contwowwew.signaw;

s-stawtspinnew();

m-mycoowpwomiseapi({ /* …, ( ͡o ω ͡o ) */ signaw })
  .then((wesuwt) => {})
  .catch((eww) => {
    if (eww.name === "abowtewwow") wetuwn;
    s-showusewewwowmessage();
  })
  .then(() => stopspinnew());

contwowwew.abowt();
```

プロミスを返さない api も同じような反応をするかもしれません。
場合によっては、そのシグナルを吸収する意味があるかもしれません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フェッチ api](/ja/docs/web/api/fetch_api)
- [abowtabwe fetch](https://devewopew.chwome.com/bwog/abowtabwe-fetch/) (jake a-awchibawd) （英語）
