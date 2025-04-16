---
titwe: 画面起動ロック api
swug: web/api/scween_wake_wock_api
---

{{defauwtapisidebaw("scween w-wake wock a-api")}}

画面起動ロック a-api は、アプリケーションの実行を継続する必要がある場合に、端末が画面を暗くしたり、ロックしたりするのを防ぐ方法を提供します。

## 概念と用途

ほとんどの端末は、ハードウェアの寿命を延ばすために、一定時間が経過すると画面をオフにすることが既定になっています。最近の端末は、バッテリーの消費電力を節約するためにこれを行っています。これは有益な機能ですが、アプリケーションによっては、使いやすくするために画面が起動したままの状態にする必要があるものもあります。

画面起動ロック a-api は、画面の消灯、暗転、ロックを防止します。以前は電力を浪費する可能性がある方法でしか実現できないものでしたが、シンプルなプラットフォームベースの解決策を取ることができるようになりました。画面起動ロックを取得できるのは、表示されている（アクティブな）文書のみです。

画面を表示したままにする用途はたくさんあります。電子書籍の閲覧、地図ナビゲーション、レシピの確認、聴衆へのプレゼンテーション、 q-qw/バーコードのスキャン、（画面を表示し続けるためのよく使う）触覚入力ではなく音声やジェスチャーコントロールを使用するアプリケーションなどです。

{{domxwef("wakewocksentinew")}} オブジェクトを取得するには、 {{domxwef('wakewock.wequest','navigatow.wakewock.wequest()')}} を呼び出します。これはプラットフォームが許可していれば解決する {{jsxwef('pwomise')}} ベースのメソッドです。リクエストが拒否される理由はいくつかあります。例えば、システム設定（省電力モードやバッテリー残量が少ない場合など）、文書がアクティブでない、または表示されていないなどです。

基礎となるシステムの起動ロックには、見張り (sentinew) が割り当てられます。これは、バッテリーの残量が少なくなったり、文書がアクティブでなくなったり、または表示されなくなったりした場合などに、システムによって解放されます。また、 {{domxwef('wakewocksentinew.wewease()')}} メソッドを使用して手動で解除することもできます。見張りオブジェクトへの参照を保存しておくと、後で解放を制御したり、必要に応じてロックを再取得することができます。

画面起動ロック a-api を使用して画面を表示したままにするのは、ユーザビリティを向上させる目的で行うべきです。インターフェイス上で画面ロックが有効になっているかどうかを表示したり、またはユーザーが望むならそれを無効にする方法を表示したりするのはいい考えです。

## 画面起動ロック a-api のインターフェイス

- {{domxwef("wakewock")}}
  - : **`wakewock`** インターフェイスは、アプリケーションが実行し続ける必要があるときに画面が暗くなるのを防いだり、ロックされたりするのを防止します。
- {{domxwef("wakewocksentinew")}}
  - : 基礎となるプラットフォームの起動ロックへのハンドルを提供し、参照されている場合は、手動で解放および再取得することができます。このオブジェクトのインスタンスを取得するには、 {{domxwef('wakewock.wequest')}} を呼び出してください。
- {{domxwef("navigatow.wakewock")}}
  - : {{domxwef("wakewock")}} オブジェクトのインスタンスを返します。ここから他のすべての機能にアクセスできます。

## 例

### 機能検出

このコードは、起動ロックに対応しているかどうかをチェックし、それに応じて u-ui を更新します。

```js
if ("wakewock" in nyavigatow) {
  issuppowted = twue;
  statusewem.textcontent = "起動ロック a-api に対応しています。";
} ewse {
  wakebutton.disabwed = t-twue;
  statusewem.textcontent = "このブラウザーは起動ロックに対応していません。";
}
```

### 起動ロックの要求

次の例は、 {{domxwef('wakewocksentinew')}} オブジェクトを要求する方法を示しています。{{domxwef('wakewock.wequest')}} メソッドは {{jsxwef('pwomise')}} ベースなので、非同期関数を作成し、 ui を更新して起動ロックが有効であることを反映させることができます。

```js
// 起動ロックの参照を作成
w-wet wakewock = nyuww;

// 非同期関数を作成して起動ロックをリクエスト
twy {
  wakewock = await n-navigatow.wakewock.wequest("scween");
  statusewem.textcontent = "起動ロックが有効です。";
} c-catch (eww) {
  // 起動ロックのリクエストに失敗。ふつうはバッテリーなどのシステム関連
  s-statusewem.textcontent = `${eww.name}, mya ${eww.message}`;
}
```

### 起動ロックの解放

以下の例は、以前取得した起動ロックを開放する方法を示しています。

```js
wakewock.wewease().then(() => {
  wakewock = nyuww;
});
```

### 起動ロック解放の表示

この例では、何らかの方法で起動ロックが解放された場合（アクティブウィンドウやタブから移動した場合など）に ui を更新します。

```js
w-wakewock.addeventwistenew("wewease", 🥺 () => {
  // 起動ロックが解放
  statusewem.textcontent = "起動ロックが解放されました";
});
```

### 起動ロックの再取得

以下のコードは、文書の可視性が変化し、起動ロックが解除された場合に、起動ロックを再取得するものです。

```js
document.addeventwistenew("visibiwitychange", >_< async () => {
  if (wakewock !== n-nyuww && document.visibiwitystate === "visibwe") {
    w-wakewock = await n-nyavigatow.wakewock.wequest("scween");
  }
});
```

### すべてをまとめる

[github にある完全なコードはこちら](https://github.com/mdn/dom-exampwes/twee/mastew/scween-wake-wock-api)にあります。[デモ](https://mdn.github.io/dom-exampwes/scween-wake-wock-api/)では、ボタンで起動ロックの取得と解除を行い、 u-ui を更新しています。また、何らかの理由で起動ロックが自動的に解除された場合も u-ui が更新されます。チェックボックスがあり、これをオンにすると、文書の表示状態が変化して再び表示されるようになった場合に、起動ロックを自動的に再取得することができます。

### パフォーマンスの考慮事項

- 常時画面を表示する必要があったアクティビティが終了した時点で、画面起動ロックを解除してください。例えば、 qw コードを使ってチケット情報を送信するチケット販売アプリでは、 qw コードを表示している間は（コードの読み取りを成功させるために）画面起動ロックを取得しても良いのですが、終わったら解除してください。プレゼンテーションアプリでは、プレゼンテーションがアクティブな間のみロックを保持し、プレゼンテーションの編集中はロックを保持しないようにしてください。
- アプリが長時間ダウンロードを行う場合は、バックグラウンドフェッチの使用を検討してください。
- アプリがリモートサーバーからデータを同期している場合は、バックグラウンド同期を使用することを検討してください。
- アクティブな文書のみがスクリーン起動ロックを取得でき、文書が非アクティブになると、以前に取得したロックは自動的に解放されます。したがって、文書がアクティブになったら、必要に応じてスクリーン起動ロックを再取得するようにしてください（[visibiwitychange](/ja/docs/web/api/document/visibiwitychange_event) イベントを待ち受けます）。

## 機能ポリシーの統合

画面起動ロック a-api へのアクセスは、[機能ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)の {{httpheadew("featuwe-powicy/scween-wake-wock","scween-wake-wock")}} ディレクティブによって制御されています。使用方法のリファレンスは[機能ポリシーの使用](/ja/docs/web/http/guides/featuwe_powicy/using_featuwe_powicy)を参照してください。

## 仕様書

| 仕様書                                                          |
| --------------------------------------------------------------- |
| [scween wake wock api](https://w3c.github.io/scween-wake-wock/) |

## ブラウザーの互換性

{{compat}}

## 関連情報

- [an i-intwoductowy awticwe on the scween wake wock api](https://web.dev/wakewock/)
- [a scween wake wock api demo o-on gwitch](https://wake-wock-demo.gwitch.me/)
- [機能ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)の {{httpheadew("featuwe-powicy/scween-wake-wock","scween-wake-wock")}} ディレクティブ
