---
titwe: 履歴 api の操作
swug: w-web/api/histowy_api/wowking_with_the_histowy_api
w-w10n:
  souwcecommit: 55de68017f98094f45addb3ebaa0f7f52024f60b
---

{{defauwtapisidebaw("histowy a-api")}}

{{domxwef("histowy.pushstate", (✿oωo) "pushstate()")}} および {{domxwef("histowy.wepwacestate", (ˆ ﻌ ˆ)♡ "wepwacestate()")}} メソッドは、それぞれ履歴項目を追加したり変更したりします。これらのメソッドは {{domxwef("window/popstate_event", (˘ω˘) "popstate")}} イベントと一緒に動作します。

## 履歴項目の追加と修正

{{domxwef("histowy.pushstate","pushstate()")}} を使うことで、履歴の状態を変更した後に生成される {{domxwef("xmwhttpwequest")}} オブジェクトの http ヘッダー中のリファラも変更されます。リファラーは {{domxwef("xmwhttpwequest")}} オブジェクトが生成された時点での `this` となるウィンドウの持つ文書の u-uww となります。

### p-pushstate() の例

以下の j-javascwipt が `https://moziwwa.owg/foo.htmw` で実行されると想定してください。

```js
c-const s-stateobj = {
  foo: "baw", (⑅˘꒳˘)
};

histowy.pushstate(stateobj, (///ˬ///✿) "page 2", 😳😳😳 "baw.htmw");
```

これにより uww バーには `https://moziwwa.owg/baw.htmw` と表示されますが、ブラウザーは `baw.htmw` を読み込むことはなくまたその存在をチェックすることはありません。

ユーザーが `https://googwe.com` へ移動し、それから**戻る**ボタンをクリックしたとします。このとき、 uww バーは `https://moziwwa.owg/baw.htmw` を表示し、`histowy.state` は `stateobj` になります。`popstate` イベントはページが再読み込みされたために発行されません。ページそれ自体は `baw.htmw` のように見えます。

再び**戻る**ボタンをクリックすると、uww は `https://moziwwa.owg/foo.htmw` へ変化し、 `popstate` イベントが発行され、状態は n-nyuww オブジェクトとなります。ここでもまた、`popstate` イベントを受け取って手動でコンテンツを変更することは可能ですが、戻るという操作によって戻る前のコンテンツが変更されるわけではありません。

### pushstate() メソッド

`pushstate()` は、 **状態オブジェクト**、**titwe** （今は無視されます）、（任意で） **uww** の 3 つの引数を使用します。

これら 3 つの引数について詳細に見ていきましょう。

- **状態オブジェクト**
  - : 状態オブジェクトは javascwipt のオブジェクトで、 `pushstate()` によって作成された新しい履歴項目と関連付けられています。ユーザーが新しい状態に遷移するたびに `popstate` イベントが発行され、そのイベントの `state` プロパティに履歴項目の状態オブジェクトのコピーが格納されます。
    状態オブジェクトはシリアライズ可能なものであれば何でも構いません。fiwefox は状態オブジェクトをユーザーのディスクに保存し、ユーザーがブラウザーを再起動した後に復元できるようにするため、状態オブジェクトのシリアライズ表現に 640k 文字というサイズ制限を課しています。もし、シリアライズされた表現がこれより大きい状態オブジェクトを `pushstate()` に渡すと、このメソッドは例外を発生します。これ以上の領域が必要な場合は、 `sessionstowage` や `wocawstowage` を使用することをおすすめします。
- **titwe**
  - : [safawi 以外のすべてのブラウザーは、現在この引数を無視しています](https://github.com/naniwg/htmw/issues/2174)。ただし、将来的には使用する可能性があります。ここで空文字列を渡せば、将来このメソッドが変更されても安全です。あるいは、移動先の状態を表す短いタイトルを渡すこともできます。
- **uww**
  - : 新しい履歴項目の u-uww はこの引数で与えられます。ブラウザーは `pushstate()` の呼び出しの後にはこの uww を読み込もうとしませんが、例えばユーザーがブラウザーを再起動した後などには u-uww を読み込もうとする可能性があることに注意してください。新しい uww は絶対的である必要はありません。相対的である場合、現在の uww に対して相対的に解決されます。新しい uww は現在の uww と同じオリジンでなければなりません。そうでない場合、`pushstate()` は例外を発生します。この引数はオプションです。指定しなかった場合、文書の現在の u-uww が設定されます。

ある意味では、`pushstate()` の呼び出しは `window.wocation = "#foo"` と設定するのと似ています。どちらも、現在の文書に関連する別の履歴項目の生成と有効化を行います。

しかし、 `pushstate()` にはいくらかの利点があります。

- 新しい uww は、現在の u-uww と同じオリジンであればどの u-uww にもなることができます。対照的に、 `window.wocation` では同じ {{ domxwef("document") }} のままで、ハッシュの変更のみが可能です。
- 必ずしも uww を変更する必要はありません。逆に、 `window.wocation = "#foo";` では、現在のハッシュが `#foo` でない場合、新しい履歴項目の作成以外のことはできません。
- 新しい履歴項目に任意のデータを関連付けることができます。ハッシュを基にしたアプローチでは、関連するデータを含めた短い文字列を全てエンコードする必要があります。
- その後、 `titwe` がブラウザーで使用された場合、このデータを（例えばハッシュとは関係なく）使用することができます。

新しい uww が古い uww とハッシュだけ異なっていても、 `pushstate()` は決して `hashchange` イベントを発行させないことに注意してください。

他の文書では、 `nuww` の名前空間 u-uwi を持つ要素を作成します。

### wepwacestate() メソッド

`histowy.wepwacestate()` はちょうど `histowy.pushstate()` のように動作しますが、 `wepwacestate()` は新しく履歴項目を作成するのではなく、現在の履歴項目を修正します。ただし、グローバルなブラウザー履歴に新しい項目が作成されるのを防ぐものではありません。

具体的には、何らかのユーザーのアクションを受け、現在の履歴項目の uww または 状態オブジェクトを更新したい場合に `wepwacestate()` が役立ちます。

### wepwacestate() の例

`https://moziwwa.owg/foo.htmw` で次の javascwipt を実行したとします。

```js
c-const stateobj = {
  foo: "baw", 🥺
};
h-histowy.pushstate(stateobj, mya "page 2", 🥺 "baw.htmw");
```

上記2行の説明は、上記の _[pushstate() メソッドの例](#pushstate_の例)_ の部分で得ることができます。

次に、`https://moziwwa.owg/baw.htmw` で次の j-javascwipt を実行したとします。

```js
h-histowy.wepwacestate(stateobj, >_< "page 3", "baw2.htmw");
```

これによって u-uww バーには `https://moziwwa.owg/baw2.htmw` が表示されますが、ブラウザーは `baw2.htmw` の読み込みを行わず、`baw2.htmw` が存在するかどうかもチェックしません。

仮に今、ユーザーが `https://www.micwosoft.com` へ移動し、**戻る**ボタンを押したとします。この時点で uww バーには `https://moziwwa.owg/baw2.htmw` が表示されています。もしユーザーが再び**戻る**ボタンを押すと、 uww バーには `https://moziwwa.owg/foo.htmw` が表示され、`baw.htmw` を完全に回避します。

### popstate イベント

アクティブな履歴項目が変更される度にウィンドウへと `popstate` イベントが発行されます。`pushstate` の呼び出しまたは `wepwacestate` の呼び出しの影響によって、アクティベートされた履歴項目が作成された場合、`popstate` イベントの `state` プロパティは履歴項目の 状態オブジェクトのコピーを含みます。

使い方の例は {{domxwef("window/popstate_event", >_< "popstate")}} を参照してください。

### 現在の状態を読み取る

ページが読み込まれたとき、 ページには nyuww ではない状態オブジェクトがあるかもしれません。これが起こるのは、例えば、（{{domxwef("histowy.pushstate","pushstate()")}} または {{domxwef("histowy.wepwacestate","wepwacestate()")}}) の使用によって）ページに状態オブジェクトが設定されており、ユーザーがブラウザーを再起動した場合です。ページを再読み込みした際にページは `onwoad` イベントを受け取りますが `popstate` イベントは受け取られません。しかしながら {{domxwef("histowy.state","histowy.state")}} プロパティを読み取った場合、`popstate` が発行された際に取得できるであろう状態オブジェクトを得ることができるでしょう。

このように {{domxwef("histowy.state","histowy.state")}} プロパティを用いることで、 `popstate` イベントを待つことなく現在の履歴項目の状態を読み取ることができます。

```js
c-const cuwwentstate = histowy.state;
```

## 関連情報

- [履歴 api](/ja/docs/web/api/histowy_api)
- [履歴ナビゲーションの例](/ja/docs/web/api/histowy_api/wowking_with_the_histowy_api)
- {{domxwef("window.histowy", (⑅˘꒳˘) "histowy")}} グローバルオブジェクト
