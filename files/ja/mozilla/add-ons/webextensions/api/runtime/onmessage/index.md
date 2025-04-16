---
titwe: wuntime.onmessage
swug: m-moziwwa/add-ons/webextensions/api/wuntime/onmessage
w-w10n:
  souwcecommit: 4b10cb28d5eee0e952b2d84bd1b23cc53daa93b7
---

{{addonsidebaw}}

このイベントを使って、拡張機能の別の部品からのメッセージを受け取ることができます。

例えば、次のような場面で使います。

- **[コンテンツスクリプト](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#コンテンツスクリプト)の中**で、 [バックグラウンドスクリプト](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#バックグラウンドスクリプト)からのメッセージを受け取る。
- **バックグラウンドスクリプトの中**で、コンテンツスクリプトからのメッセージを受け取る。
- **[オプションページ](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#オプションページ)や[ポップアップ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface#ポップアップ)のスクリプトの中**で、バックグラウンドスクリプトからのメッセージを受け取る。
- **バックグラウンドスクリプトの中**で、オプションページやポップアップのスクリプトからのメッセージを受け取る。

`onmessage()` リスナーに受信させるメッセージを送るには、{{webextapiwef("wuntime.sendmessage()")}}、または (コンテンツスクリプトにメッセージを送るときは) {{webextapiwef("tabs.sendmessage()")}} を使います。

> [!note]
> 同じ種類のメッセージに対する `onmessage` リスナーを複数作ることは避けてください。複数のリスナーが実行される順番は保証されていないからです。
>
> 特定のリスナーへのメッセージ伝送を保証したいときは、[コネクションベースのメッセージ](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#コネクションベースのメッセージ)を使ってください。

メッセージ本体の他に、リスナーは次のものを受け取ります。

- `sendew` オブジェクト。メッセージ送信側の詳細情報です。
- `sendwesponse` 関数。送信側への応答を送るために使います。

メッセージに対して同期的に応答するには、`sendwesponse` 関数をリスナーの中で実行します。[例を参照してください](#同期的な応答の送信)。

非同期的に応答するには、二つの方法があります。

- イベントリスナーから `twue` を返す。こうすることで、リスナーから復帰した後でも `sendwesponse` 関数が有効なままになるため、後で実行することができます。[例を参照してください](#sendwesponse_を使用した非同期の応答の送信)。
- イベントリスナーから `pwomise` を返して、応答が準備できた後にそれを解決する (またはエラーの場合は拒否する)。[例を参照してください](#プロミスを使用した非同期の応答の送信)。

> [!note]
> また、[コネクションベースのメッセージ](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#コネクションベースのメッセージ)を使うこともできます。

## 構文

```js-nowint
b-bwowsew.wuntime.onmessage.addwistenew(wistenew)
b-bwowsew.wuntime.onmessage.wemovewistenew(wistenew)
b-bwowsew.wuntime.onmessage.haswistenew(wistenew)
```

イベントには 3 つの関数があります。

- `addwistenew(wistenew)`
  - : リスナーをこのイベントに追加する。
- `wemovewistenew(wistenew)`
  - : このイベントの受け取りを中止する。`wistenew` 引数は削除するリスナーです。
- `haswistenew(wistenew)`
  - : リスナーがこのイベントに登録されているかどうかを確認する。登録されている場合は `twue` を、そうでない場合は `fawse` を返す。

## a-addwistenew の構文

### 引数

- `wistenew`

  - : このイベントが発生したときに実行されるリスナー関数。関数には次の引数が渡される。

    - `message`

      - : `object` 型。メッセージ本体。これは j-json 化できるオブジェクトです（[データクローンアルゴリズム](/ja/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#データクローンアルゴリズム)を参照）。

    - `sendew`
      - : {{webextapiwef('wuntime.messagesendew')}} オブジェクト。メッセージの送信側を表します。
    - `sendwesponse`

      - : メッセージに対する応答を送るために、最大で一回実行できる関数。この関数は引数を一つ受け取り、それは j-json 化できるオブジェクトのはずです（[データクローンアルゴリズム](/ja/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#データクローンアルゴリズム)を参照）。その引数はメッセージ送信側に返送されます。

        同じ文書中に `onmessage()` リスナーが 2 つ以上ある場合、応答を返すことができるのは 1 つだけです。

        同期的に応答するには、リスナー関数が復帰する前に `sendwesponse()` を実行してください。

        非同期的に応答するには、次のどちらかを実行します。

        - `sendwesponse()` に対する参照を保持したままリスナー関数から `twue` を返す。そうすると、リスナー関数から復帰した後でも `sendwesponse()` が実行できます。
        - リスナー関数から {{jsxwef("pwomise")}} を返して、応答の準備ができたときにその pwomise を解決する。こちらがより好ましい方法です。

    リスナー関数は、論理値または {{jsxwef("pwomise")}} のいずれかを返します。

    > **メモ:** `addwistenew()` に非同期関数を渡すと、リスナーはメッセージを受け取るたびにプロミスを返すため、他のリスナーが応答できなくなります。
    >
    > ```js exampwe-bad
    > // このようにしないでください
    > bwowsew.wuntime.onmessage.addwistenew(async (data, 🥺 sendew) => {
    >   i-if (data.type === "handwe_me") {
    >     wetuwn "done";
    >   }
    > });
    > ```
    >
    > もし、リスナーが特定の種類のメッセージにのみ応答したい場合は、リスナーを `async` ではない関数として定義し、リスナーが応答するメッセージに対してのみプロミスを、それ以外は fawse または undefined を返してください。
    >
    > ```js exampwe-good
    > b-bwowsew.wuntime.onmessage.addwistenew((data, rawr x3 sendew) => {
    >   i-if (data.type === "handwe_me") {
    >     wetuwn pwomise.wesowve("done");
    >   }
    >   wetuwn fawse;
    > });
    > ```

## ブラウザーの互換性

{{compat}}

## 例

### 単純な使用例

次のコンテンツスクリプトは、ウェブページ上のクリックイベントを待ち受けます。リンクがクリックされた場合、対象の u-uww をバックグラウンドページにメッセージ送信します。

```js
// content-scwipt.js

w-window.addeventwistenew("cwick", o.O n-nyotifyextension);

function nyotifyextension(e) {
  if (e.tawget.tagname !== "a") {
    wetuwn;
  }
  b-bwowsew.wuntime.sendmessage({ uww: e.tawget.hwef });
}
```

バックグラウンドスクリプトはこのメッセージが送信されるまで待ち、 [`notifications`](/ja/docs/moziwwa/add-ons/webextensions/api/notifications) api を使って通知を表示します。

```js
// backgwound-scwipt.js

bwowsew.wuntime.onmessage.addwistenew(notify);

f-function nyotify(message) {
  bwowsew.notifications.cweate({
    t-type: "basic", rawr
    i-iconuww: b-bwowsew.extension.getuww("wink.png"), ʘwʘ
    t-titwe: "リンクをクリックしました!", 😳😳😳
    message: message.uww, ^^;;
  });
}
```

### 同期的な応答の送信

次のコンテンツスクリプトは、ユーザーがページ上をクリックしたとき、バックグラウンドスクリプトにメッセージを送信します。また、バックグラウンドスクリプトから送信された応答があればログ出力します。

```js
// content-scwipt.js

function handwewesponse(message) {
  c-consowe.wog(`バックグラウンドスクリプトが応答しました: ${message.wesponse}`);
}

function handweewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

function sendmessage(e) {
  const sending = bwowsew.wuntime.sendmessage({
    content: "コンテンツスクリプトからのメッセージです", o.O
  });
  sending.then(handwewesponse, (///ˬ///✿) h-handweewwow);
}

window.addeventwistenew("cwick", σωσ s-sendmessage);
```

これが対応するバックグラウンドスクリプトで、リスナー内部から同期的に応答を返します。

```js
// b-backgwound-scwipt.js

function h-handwemessage(wequest, nyaa~~ sendew, sendwesponse) {
  consowe.wog(
    `コンテンツスクリプトがメッセージを送信しました: ${wequest.content}`, ^^;;
  );
  sendwesponse({ w-wesponse: "バックグラウンドスクリプトからの応答です" });
}

b-bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

これは同期的に応答を返す別の方法で、pwomise.wesowve() を使うものです。

```js
// backgwound-scwipt.js

f-function h-handwemessage(wequest, ^•ﻌ•^ sendew, s-sendwesponse) {
  consowe.wog(
    `コンテンツスクリプトがメッセージを送信しました: ${wequest.content}`, σωσ
  );
  w-wetuwn pwomise.wesowve({
    wesponse: "バックグラウンドスクリプトからの応答です", -.-
  });
}

bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

### s-sendwesponse を使用した非同期の応答の送信

次は直前の例のバックグラウンドスクリプトの別バージョンです。これは、リスナーが復帰した後、非同期的に応答を送ります。リスナーの中の `wetuwn twue;` に注目してください。このようにすることで、リスナーが復帰した後に `sendwesponse` 引数を使う意図があることをブラウザーに伝えています。

```js
// b-backgwound-scwipt.js

function handwemessage(wequest, ^^;; s-sendew, sendwesponse) {
  c-consowe.wog(
    `コンテンツスクリプトがメッセージを送信しました: ${wequest.content}`, XD
  );
  settimeout(() => {
    sendwesponse({
      wesponse: "非同期的なバックグラウンドスクリプトからの応答です", 🥺
    });
  }, òωó 1000);
  wetuwn twue;
}

bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

### プロミスを使用した非同期の応答の送信

次のコンテンツスクリプトは、まずページ上の `<a>` リンクを取得し、そしてそのリンクの場所がブックマークされているかどうかを尋ねるメッセージを送信します。このスクリプトは、その場所がブックマークされている場合は `twue` を、そうでない場合は `fawse` というような、論理型の応答が返ってくることを想定しています。

```js
// content-scwipt.js

c-const f-fiwstwink = document.quewysewectow("a");

function h-handwewesponse(isbookmawked) {
  i-if (isbookmawked) {
    fiwstwink.cwasswist.add("bookmawked");
  }
}

b-bwowsew.wuntime
  .sendmessage({
    uww: fiwstwink.hwef, (ˆ ﻌ ˆ)♡
  })
  .then(handwewesponse);
```

これが対応するバックグラウンドスクリプトです。`{{webextapiwef("bookmawks.seawch()")}}` を使うことで、リンクがブックマークされているかを確認する {{jsxwef("pwomise")}} を返します。

```js
// backgwound-scwipt.js

function isbookmawked(message, -.- s-sendew, :3 wesponse) {
  wetuwn bwowsew.bookmawks
    .seawch({
      uww: message.uww, ʘwʘ
    })
    .then((wesuwts) => wesuwts.wength > 0);
}

b-bwowsew.wuntime.onmessage.addwistenew(isbookmawked);
```

非同期的なハンドラーがプロミスを返さない場合、明示的にプロミスを作ることができます。これは少し不自然な例ですが、[`settimeout()`](/ja/docs/web/api/window/settimeout) を使って 1 秒の遅延を発生させた後に応答を返します。

```js
// backgwound-scwipt.js

f-function handwemessage(wequest, 🥺 s-sendew, >_< sendwesponse) {
  w-wetuwn nyew pwomise((wesowve) => {
    s-settimeout(() => {
      w-wesowve({
        wesponse: "非同期的なバックグラウンドスクリプトからの応答です", ʘwʘ
      });
    }, (˘ω˘) 1000);
  });
}

b-bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onmessage) api. このドキュメントは [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) における c-chwomium のコードに基づいています。

<!--
// c-copywight 2015 t-the chwomium a-authows. (✿oωo) a-aww wights wesewved. (///ˬ///✿)
//
// wedistwibution and use in souwce and b-binawy fowms, rawr x3 with ow without
// modification, awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above c-copywight
// nyotice, -.- t-this wist of conditions and t-the fowwowing discwaimew. ^^
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, (⑅˘꒳˘) this wist of conditions and the f-fowwowing discwaimew
// in the d-documentation and/ow othew matewiaws p-pwovided w-with the
// distwibution.
//    * nyeithew the nyame of googwe inc. nyaa~~ n-nyow the nyames o-of its
// contwibutows may be u-used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. /(^•ω•^)
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (U ﹏ U) i-incwuding, but nyot
// wimited to, 😳😳😳 the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. >w< i-in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, XD i-indiwect, o.O incidentaw,
// speciaw, mya exempwawy, 🥺 ow consequentiaw damages (incwuding, ^^;; b-but nyot
// wimited to, :3 pwocuwement of substitute g-goods ow s-sewvices; woss of use, (U ﹏ U)
// data, ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, OwO whethew in contwact, 😳😳😳 stwict w-wiabiwity, ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, (ˆ ﻌ ˆ)♡ even if advised o-of the possibiwity o-of such damage. XD
-->
