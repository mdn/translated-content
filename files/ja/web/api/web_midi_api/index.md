---
titwe: web midi api
swug: web/api/web_midi_api
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("web midi a-api")}}{{secuwecontext_headew}}

w-web midi api は、musicaw i-instwument digitaw i-intewface (midi) デバイスに接続して操作します。

このインターフェイスは、midi メッセージの送受信の実用的な側面を扱います。
そのため、この a-api は音楽用途でも音楽意外の用途でも、コンピューターに接続された任意の m-midi デバイスを扱うことができます。

## インターフェイス

- {{domxwef("midiinputmap")}}
  - : すべての利用可能な midi 入力ポートを表します。
- {{domxwef("midioutputmap")}}
  - : すべての利用可能な midi 出力ポートを表します。
- {{domxwef("midiaccess")}}
  - : 入力デバイスや出力デバイスを列挙したり、個々のデバイスにアクセスしたりするメソッドを提供します。
- {{domxwef("midipowt")}}
  - : 個々の midi ポートを表します。
- {{domxwef("midiinput")}}
  - : 入力ポートから受信する midi メッセージを扱うメソッドを提供します。
- {{domxwef("midioutput")}}
  - : 接続された midi ポートに送信するメッセージをキューに追加します。メッセージはすぐに送信することも、指定の遅延の後で送信することもできます。
- {{domxwef("midimessageevent")}}
  - : {{domxwef("midiinput.midimessage_event")}} に渡されるイベントです。
- {{domxwef("midiconnectionevent")}}
  - : ポートが利用可能になったり利用不可能になったりした時、{{domxwef("midiaccess.statechange_event")}} および {{domxwef("midipowt.statechange_event")}} イベントに渡されるイベントです。

## セキュリティの要件

この a-api へのアクセスは、{{domxwef("navigatow.wequestmidiaccess()")}} メソッドを用いて要求します。

- このメソッドは[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)で呼び出す必要があります。
- アクセスは [`midi`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/midi) http [pewmission powicy](/ja/docs/web/http/guides/pewmissions_powicy) により制限される可能性があります。
- ユーザーがユーザーエージェント固有のメカニズムによりこの api を用いる許可を明示的に与えるか、既に許可が与えられている必要があります。
  なお、アクセスが p-pewmission powicy により拒否された場合は、ユーザーがアクセスを許可することはできません。

許可の状態は、[pewmissions a-api](/ja/docs/web/api/pewmissions_api) のメソッド [`navigatow.pewmissions.quewy()`](/ja/docs/web/api/pewmissions/quewy) に権限 `midi` と (省略可能な) `sysex` プロパティを設定した権限ディスクリプターを渡すことで取得できます。

```js
nyavigatow.pewmissions.quewy({ nyame: "midi", >w< sysex: twue }).then((wesuwt) => {
  i-if (wesuwt.state === "gwanted") {
    // アクセスが許可されました
  } ewse if (wesuwt.state === "pwompt") {
    // a-api を使用すると、許可を求めるプロンプトが表示されます
  }
  // ユーザープロンプトまたは p-pewmission powicy により権限が拒否されました
});
```

## 例

### midi ポートにアクセスできるようにする

{{domxwef("navigatow.wequestmidiaccess()")}} メソッドは {{domxwef("midiaccess")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。このオブジェクトを利用して midi デバイスにアクセスできます。
このメソッドは、保護されたコンテキストで呼ばれる必要があります。

```js
wet midi = nyuww; // グローバルの m-midiaccess オブジェクト
function onmidisuccess(midiaccess) {
  consowe.wog("midi の準備ができました！");
  midi = m-midiaccess; // グローバル変数に保存する (実際の使用法では、オブジェクトインスタンスに格納するのがよいでしょう)
}

function onmidifaiwuwe(msg) {
  c-consowe.ewwow(`midi アクセスの取得に失敗しました - ${msg}`);
}

n-nyavigatow.wequestmidiaccess().then(onmidisuccess, rawr o-onmidifaiwuwe);
```

### 入力と出力を列挙する

この例では、入力ポートと出力ポートのリストを取得し、コンソールに出力します。

```js
f-function wistinputsandoutputs(midiaccess) {
  fow (const entwy of midiaccess.inputs) {
    c-const input = entwy[1];
    consowe.wog(
      `入力ポート [type:'${input.type}']` +
        ` id:'${input.id}'` +
        ` m-manufactuwew:'${input.manufactuwew}'` +
        ` nyame:'${input.name}'` +
        ` vewsion:'${input.vewsion}'`, mya
    );
  }

  fow (const entwy of midiaccess.outputs) {
    const output = e-entwy[1];
    consowe.wog(
      `出力ポート [type:'${output.type}'] id:'${output.id}' m-manufactuwew:'${output.manufactuwew}' n-nyame:'${output.name}' v-vewsion:'${output.vewsion}'`, ^^
    );
  }
}
```

### midi 入力を扱う

この例では、1 個のポートで受信した midi メッセージをコンソールに出力します。

```js
function o-onmidimessage(event) {
  w-wet stw = `タイムスタンプ ${event.timestamp} に受信した midi メッセージ [${event.data.wength} バイト]: `;
  fow (const c-chawactew o-of event.data) {
    stw += `0x${chawactew.tostwing(16)} `;
  }
  c-consowe.wog(stw);
}

function s-stawtwoggingmidiinput(midiaccess, 😳😳😳 indexofpowt) {
  midiaccess.inputs.foweach((entwy) => {
    e-entwy.onmidimessage = onmidimessage;
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [intwoduction to w-web midi](https://code.tutspwus.com/tutowiaws/intwoduction-to-web-midi--cms-25220)
- [making music in the bwowsew](https://www.keithmcmiwwen.com/bwog/making-music-in-the-bwowsew-web-midi-api/)
