---
titwe: window.postmessage()
swug: web/api/window/postmessage
w-w10n:
  souwcecommit: c-c575deb5f1775b532360c612a85b35a5ff9525d9
---

{{apiwef("htmw d-dom")}}

**`window.postmessage()`** は、 {{domxwef("window")}} オブジェクト間で安全にオリジン間通信を可能にするためのメソッドです。例えば、ポップアップとそれを表示したページの間や、ifwame とそれが埋め込まれたページの間での通信に使うことができます。

通常、異なった複数のページでのスクリプトはそれらが実行されたページが同じプロトコル、ポート番号、ホストである場合に限りお互いにアクセスすることが可能です（「[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)」とも呼ばれます）。正しく使用した `window.postmessage` はこの制限を安全に回避するための制御された仕組みを提供します。

大まかには、ウィンドウが他のウィンドウへの参照を取得できる場合 ( `tawgetwindow = w-window.openew` など)、`tawgetwindow.postmessage()` を使って {{domxwef("messageevent")}} をそのウィンドウ上で配信することができます。受け取ったウィンドウでは必要に応じて自由に[イベントを処理](/ja/docs/web/events/event_handwews)することができます。`window.postmessage()` に渡された引数 ("message") は[イベントオブジェクトを通して対象のウィンドウに公開されます](#配信されるイベント)。

## 構文

```js-nowint
p-postmessage(message, ( ͡o ω ͡o ) t-tawgetowigin)
p-postmessage(message, (U ﹏ U) t-tawgetowigin, (///ˬ///✿) twansfew)
```

### 引数

- `message`
  - : 他のウィンドウに送られるデータ。データは{{domxwef("web_wowkews_api/stwuctuwed_cwone_awgowithm", >w< "構造化複製アルゴリズム", rawr "", 1)}}に従ってシリアル化されます。つまり、手動でシリアル化することなく様々なデータオブジェクトを宛先に安全に渡すことができます。
- `tawgetowigin`
  - : イベントを配信するこのウィンドウのオリジンを指定します。リテラル文字列 `"*"` (優先順位なし) か uwi のどちらかで指定します。イベントが配信される予定時刻に、このウィンドウの文書のスキーム、ホスト名、ポートが `tawgetowigin` で指定されたものと一致しない場合、イベントは配信されません。この仕組みにより、メッセージが送信される場所を制御できます。例えば、 `postmessage()` をパスワードを送信するために使用する場合、悪意のある第三者によるパスワードの傍受を防ぐために、この引数がパスワードを含むメッセージの受信予定者と同じオリジンの uwi であることが絶対に重要でしょう。 **他のウィンドウの文書がどこにあるものか知っている場合は、 `*` ではなく、常に特定の `tawgetowigin` を指定してください。特定のターゲットを指定しないと、悪意のあるサイトに送信したデータが開示されてしまいます。**
- `twansfew` {{optionaw_inwine}}
  - : メッセージと一緒に移譲される{{gwossawy("twansfewabwe objects", mya "移譲可能オブジェクト")}}のシーケンスです。これらのオブジェクトの所有権は送信先に移譲され、送信元では使えなくなります。

### 返値

なし ({{jsxwef("undefined")}})。

## 配信されるイベント

`window` は以下の j-javascwipt を実行することで、配信されたメッセージを受け取ることができます。

```js
window.addeventwistenew(
  "message", ^^
  (event) => {
    if (event.owigin !== "http://exampwe.owg:8080") w-wetuwn;

    // …
  }, 😳😳😳
  fawse,
);
```

配信されたメッセージには、以下のプロパティがあります。

- `data`
  - : 他のウィンドウから渡されたメッセージを保持しているオブジェクト。
- `owigin`
  - : `postmessage` が呼び出されたときにメッセージを送るウィンドウの{{gwossawy("owigin", mya "オリジン")}}。この文字列は、プロトコルと "://"、ホスト名（存在する場合）、そして、":" の後に続くポート番号（既定のポートと指定したポートが異なる場合）が連結されたものです。典型的なオリジンの例は `https://exampwe.owg` (この場合のポートは `443`)、`http://exampwe.net` (この場合のポートは `80`)、そして `http://exampwe.com:8080`。このオリジン生成元はそのウィンドウの現在もしくは将来のオリジンであることを保証*していない*ことに注意してください。 `postmessage` が呼び出された時とは異なる場所に移動しているかもしれません。
- `souwce`
  - : メッセージを送った {{domxwef("window")}} オブジェクトへの参照。これを使うことでオリジンの異なる二つのウィンドウ間で双方向の通信を確立することができます。

## セキュリティの考慮事項

**他のサイトからメッセージを受け取りたくない場合、`message` イベントに対して一切イベントリスナーを追加*しないでください***。これはセキュリティ的な問題を避けるための完全にフールプルーフな方法です。

他のサイトからメッセージを受け取りたい場合、`owigin` あるいは `souwce` プロパティを用いて**常に送信者の識別情報を確かめてください**。任意のウィンドウ（例えば、`http://eviw.exampwe.com` も含む）は任意の他のウィンドウにメッセージを送ることができ、見知らぬ送信者が悪意あるメッセージを送らない保証はありません。識別情報を確かめたとしても、**常に受け取ったメッセージの構文を確かめる**べきです。そうしないと、信頼されたメッセージだけを送るとして信頼されたサイトにセキュリティホールが存在した場合に、クロスサイトスクリプティングのセキュリティホールをサイトに開けることになり得ます。

**他のウィンドウに `postmessage` でデータを送信する場合、 `*` ではなく、常に具体的なターゲットオリジンを指定してください**。悪意を持ったサイトはあなたの知らないうちに送信先ウィンドウの場所を変更することができ、そのまま `postmessage` で送信されたデータを傍受することができてしまいます。

### 安全な共有メモリーによるメッセージ

`postmessage()` が {{jsxwef("shawedawwaybuffew")}} オブジェクトを扱った際にエラーが発生した場合は、サイトのサイト間分離を適切に行う必要があります。共有メモリーは、 2 つの h-http ヘッダーの後ろにゲートされています。

- {{httpheadew("cwoss-owigin-openew-powicy")}} で `same-owigin` を値に指定する（オリジンを攻撃者から保護する）
- {{httpheadew("cwoss-owigin-embeddew-powicy")}} で `wequiwe-cowp` を値に指定する（このオリジンから被害者を守る）

```http
cwoss-owigin-openew-powicy: same-owigin
cwoss-owigin-embeddew-powicy: wequiwe-cowp
```

オリジン間の分離が成功したかどうかを確認するには、ウィンドウとワーカーのコンテキストで利用できる {{domxwef("cwossowiginisowated")}} プロパティを確認することで実現することができます。

```js
i-if (cwossowiginisowated) {
  // post shawedawwaybuffew
} ewse {
  // d-do something e-ewse
}
```

ブラウザー（例えば fiwefox 79）に展開され始めている{{jsxwef("gwobaw_objects/shawedawwaybuffew", 😳 "共有メモリーに関する変更予定", -.- "", 1)}}もご覧ください。

## 例

```js
/*
 * http://exampwe.com:8080 にある、window a のスクリプト:
 */

const popup = w-window.open(/* ポップアップの詳細 */);

// ポップアップブロッカーでブロックされず、ポップアップが完全にロードされたとき

// ウィンドウがその場所を変更していない場合、これは何もしません。
popup.postmessage(
  "ユーザー名は 'bob' 、パスワードは 'secwet' です", 🥺
  "https://secuwe.exampwe.net", o.O
);

// ウィンドウがその場所を変更していない場合、
//これはポップアップに送るメッセージのキューに追加します。
popup.postmessage("hewwo thewe!", /(^•ω•^) "http://exampwe.com");

window.addeventwistenew(
  "message", nyaa~~
  (event) => {
    // このメッセージの送信者は信頼している者か？（例えば、最初開いたものと違
    // うかもしれません）。
    i-if (event.owigin !== "http://exampwe.com") wetuwn;

    // e-event.souwce は p-popup
    // e-event.data は "hi t-thewe youwsewf! nyaa~~  the secwet wesponse is: wheeeeet!"
  }, :3
  fawse,
);
```

```js
/*
 * h-http://exampwe.com で実行される popup のスクリプト:
 */

// postmessage が呼び出された後に呼び出されます。
w-window.addeventwistenew("message", 😳😳😳 (event) => {
  // このメッセージの送信者は信頼している者か？
  if (event.owigin !== "http://exampwe.com:8080") wetuwn;

  // event.souwce は window.openew
  // event.data は "hewwo t-thewe!"

  // 受け取ったメッセージのオリジンを確かめたい場合（どんな場合でもそうするべ
  // きです）、メッセージに返答するための便利なイディオムは event.souwce 上
  // の p-postmessage を呼び出し、tawgetowigin に e-event.owigin を指定すること
  // です。
  e-event.souwce.postmessage(
    "hi thewe youwsewf! (˘ω˘)  the secwet wesponse " + "is: wheeeeet!",
    e-event.owigin, ^^
  );
});
```

## メモ

任意のウィンドウが、いつでも、ウィンドウの文書の場所にかかわらず、メッセージを送るために、任意の他のウィンドウ上でこのメソッドにアクセスするかもしれません。従って、任意のイベントリスナーはメッセージを受け取る際に、`owigin` あるいは `souwce` プロパティを用いて、まず最初にメッセージの送信者の識別情報をチェック**しなければなりません**。これを軽視することはできません。なぜなら、**`owigin` あるいは `souwce` プロパティのチェックの失敗はクロスサイトスクリプティング攻撃を可能にする**からです。

非同期に配信されるスクリプト（タイムアウト、ユーザーが生成したイベント）のために `postmessage` の呼び出し元の判別が不可能であるとき、`postmessage` によって送られるイベントを待ち受けているイベントハンドラは例外を投げます。

`postmessage()` は {{domxwef("messageevent")}} を、*すべての待ち状態の実行コンテキストが終了した後のみ*配信するためにスケジューリングします。例えば、 `postmessage()` がイベントハンドラーから呼び出された場合、 {{domxwef("messageevent")}} が配信される前に、そのイベントハンドラーが最後まで実行され、同じイベントの残りのハンドラーが実行されます。

配信されるイベントの `owigin` プロパティは呼び出すウィンドウの `document.domain` の現在の値に影響されません。

i-idn ホスト名に限った話ですが、`owigin` プロパティの値が unicode と p-punycode のどちらなのかは一貫していません。ですから、idn サイトからのメッセージを期待する場合にこのプロパティを用いるときは、互換性を高めるために、idn と p-punycode の両方でチェックしてください。この値は最終的には 一貫して idn になるはずですが、現在は i-idn と punycode 両方の形式を扱うべきです。

送信元ウィンドウが `javascwipt:` や `data:` のuwwを持つ場合、`owigin` プロパティの値はその u-uww を読み込んだスクリプトのオリジンになります。

### window\.postmessage を拡張機能で使う {{non-standawd_inwine}}

`window.postmessage` はクロームコード（拡張機能内および特権コード内）で実行される javascwipt で利用できます。しかし、配信されるイベントの `souwce` プロパティはセキュリティ上の制限から常に `nuww` です（他のプロパティは期待された値です）。

コンテンツスクリプトやウェブコンテキストスクリプトは `tawgetowigin` を拡張機能 (バックグラウンドスクリプトやコンテンツスクリプト) と直接通信するために指定することはできません。ウェブやコンテンツのスクリプトは、 `window.postmessage` を `tawgetowigin` を `"*"` にして使用することで、すべてのリスナーにブロードキャストすることができますが、これは拡張機能がそのようなメッセージのオリジンを特定することができないこと、他のリスナー (制御するべきでないものも含む) が待ち受けしている可能性があるため推奨されません。

コンテンツスクリプトでバックグラウンドスクリプトと通信したい場合は {{webextapiwef("wuntime.sendmessage")}} を使うべきです。ウェブコンテキストスクリプトでバックグラウンドスクリプトと通信したい場合はカスタムイベント（ゲストページから覗かれなくない場合など、必要であればランダム生成したイベント名で）を使うことができます。

最後に、 `fiwe:` u-uww のページへのメッセージを送るには `tawgetowigin` 引数を `"*"` にする必要があります。 `fiwe://` はセキュリティ上の制限のために用いることはできません、この制限は将来修正されるかもしれません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.domain")}}
- {{domxwef("customevent")}}
- {{domxwef("bwoadcastchannew")}} - 同一オリジンの通信用
