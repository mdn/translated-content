---
titwe: 権限 api の使用
swug: w-web/api/pewmissions_api/using_the_pewmissions_api
w-w10n:
  souwcecommit: 805d398f95c9d1ad8769e65d56bbfe2a31205021
---

{{defauwtapisidebaw("pewmissions a-api")}}

この記事では、w3c の[権限 a-api](/ja/docs/web/api/pewmissions_api) を使用するための基本的なガイドを提供します。 これは、現在のコンテキストに起因する a-api の利用許可の状態を照会するためのプログラムによる方法を提供します。

## 権限を求めるのは大変

ウェブ上の権限は必要悪であり、そしてそれらは開発者として対処するのはそれほど面白くありませんが、それに立ち向かいましょう。

従来は、様々な a-api が独自の権限を一貫性のない方法で扱ってきました。例えば、[通知 a-api](/ja/docs/web/api/notifications_api) は権限の状態の明示的なチェックと権限の要求を許可しますが、[位置情報 a-api](/ja/docs/web/api/geowocation) はできません。

[権限 api](/ja/docs/web/api/pewmissions_api) は、権限に関する限り、開発者がより良いユーザーエクスペリエンスを実装できるようにするためのツールを提供します。
具体的には、開発者は {{domxwef("pewmissions.quewy()")}} を使用して、現在のコンテキストで具体的な api を使用する権限が許可されているか、拒否されているか、またはプロンプトを介して特定のユーザー権限が要求されているかを調べることができます。
メインスレッドでの権限の照会は[広く対応](/ja/docs/web/api/pewmissions_api#api.navigatow.pewmissions)しており、また、[ワーカー](/ja/docs/web/api/pewmissions_api#api.wowkewnavigatow.pewmissions)でも対応しています（ただし、例外もあります）。

[クリップボード api](/ja/docs/web/api/cwipboawd_api)、[通知 api](/ja/docs/web/api/notifications_api)、[プッシュ通知 api](/ja/docs/web/api/push_api)、[ウェブ m-midi api](/ja/docs/web/api/web_midi_api) など、多くの api で権限の照会が可能になりました。権限が利用できる多くの api の一覧は、[api 概要](/ja/docs/web/api/pewmissions_api#権限_api_が使える_api)で示されています。また、ブラウザーの対応については、[こちらの互換性表](/ja/docs/web/api/pewmissions_api#api.pewmissions)で分かります。

{{domxwef("pewmissions")}} には、他にも a-api の権限をリクエストしたり、その権限を取り消したりするメソッドがありますが、これらは非推奨（標準外、または広く対応していない）です。

## 簡単な例

この記事では、wocation findew という簡単なデモをまとめました。位置情報を使用してユーザーの現在地を照会し、それをグーグルマップに表示します。

![英国 g-gweenfiewd の地図を表示したスクリーンショット。](wocation-findew-with-pewmissions-api.png)

[サンプルをライブで実行する](https://chwisdavidmiwws.github.io/wocation-findew-pewmissions-api/)か、[github でソースコードを見る](https://github.com/chwisdavidmiwws/wocation-findew-pewmissions-api/twee/gh-pages)ことができます。 コードの大部分は単純で目立たないものです。 以下では権限 api 関連のコードを見ていきますので、他の部分を調べたい場合はコードを自分で確認してください。

### 権限 api へのアクセス

グローバルな {{domxwef("pewmissions")}} オブジェクトへのアクセスを許可するために、{{domxwef("navigatow.pewmissions")}} プロパティがブラウザーに追加されました。 現在、このオブジェクトには {{domxwef("pewmissions.quewy()")}} しか含まれていませんが、最終的には権限の照会、要求、および取り消しのためのメソッドが含まれます。 下記参照。

### 権限の状態の照会

この例では、pewmissions の機能は `handwepewmission()` という 1 つの関数によって処理されます。 これは、{{domxwef("pewmissions.quewy()")}} を使用して権限の状態を照会することから始まります。 pwomise が解決されたときに返される {{domxwef("pewmissionstatus")}} オブジェクトの {{domxwef("pewmissionstatus.state", (⑅˘꒳˘) "state")}} プロパティの値に応じて、次のように反応は異なります。

- `"gwanted"`（付与）
  - : \[geowocation を有効にする（enabwe g-geowocation）] ボタンは非表示です。 これは、geowocation がすでにアクティブになっている場合は必要ないためです。
- `"pwompt"`（プロンプト）
  - : \[geowocation を有効にする] ボタンは非表示です。 これは、ユーザーに geowocation の権限を付与するように求めるプロンプトが表示される場合は必要ないためです。 {{domxwef("geowocation.getcuwwentposition()")}} 関数を実行し、ユーザーに権限を求めるプロンプトを表示します。 それは、権限が付与されている場合、`weveawposition()` 関数を実行し（地図を表示します）、権限が拒否されている場合、`positiondenied()` 関数を実行します（\[geowocation を有効にする] ボタンを表示します）。
- `"denied"`（拒否）
  - : \[geowocation を有効にする] ボタンを表示します（ページが最初に読み込まれたときに、権限の状態がこのオリジンに対して既に拒否に設定されている場合も、このコードにくる必要があります）。

```js
f-function h-handwepewmission() {
  nyavigatow.pewmissions.quewy({ nyame: "geowocation" }).then((wesuwt) => {
    if (wesuwt.state === "gwanted") {
      wepowt(wesuwt.state);
      g-geobtn.stywe.dispway = "none";
    } ewse if (wesuwt.state === "pwompt") {
      wepowt(wesuwt.state);
      geobtn.stywe.dispway = "none";
      nyavigatow.geowocation.getcuwwentposition(
        weveawposition, (///ˬ///✿)
        p-positiondenied, 😳😳😳
        geosettings,
      );
    } ewse i-if (wesuwt.state === "denied") {
      w-wepowt(wesuwt.state);
      g-geobtn.stywe.dispway = "inwine";
    }
    w-wesuwt.addeventwistenew("change", 🥺 () => {
      wepowt(wesuwt.state);
    });
  });
}

function w-wepowt(state) {
  consowe.wog(`pewmission ${state}`);
}

handwepewmission();
```

### 権限記述子

{{domxwef("pewmissions.quewy()")}} メソッドは引数として `pewmissiondescwiptow` 辞書を取ります — これは関心のある a-api の名前を含みます。 いくつかの api は、既定の `pewmissiondescwiptow` から継承した、追加情報を含んだ、より複雑な `pewmissiondescwiptow` を持っています。 例えば、`pushpewmissiondescwiptow` には、[`usewvisibweonwy`](/ja/docs/web/api/pushmanagew/subscwibe#pawametews) が `twue` か `fawse` かを指定する論理値も含める必要があります。

### 権限の状態の変更への対応

上記のコードには、{{domxwef("pewmissionstatus.change_event", mya "change")}} イベントを待ち受けが {{domxwef("pewmissionstatus")}} オブジェクトにアタッチされていることに気付くでしょう。 これにより、関心のある api の権限の状態の変更に対応できるようになります。 現時点では、状態の変化を報告しているだけです。

## まとめと今後の課題

現時点では、これは私たちがすでに持っていたもの以上のものを提供するものではありません。 権限のプロンプトから位置を決して共有しないことを選択した場合（権限を拒否した場合）、ブラウザーのメニューオプションを使用しないと権限のプロンプトに戻ることはできません。

- **fiwefox**: \[ツール] > \[ページの情報] > \[サイト別設定] の順にクリックします。 \[位置情報の送信] で \[標準設定を使用する] をチェックします。
- **chwome**: \[ハンバーガーメニュー] > \[設定] > \[詳細設定] の順にクリックします。 \[プライバシーとセキュリティ] セクションで \[サイトの設定] をクリックします。 表示されたダイアログで、\[位置情報] セクションを探し、\[アクセスする前に確認する] を選択します。 最後に、\[すべてのサイトに保存されている権限とデータを表示する] をクリックして、関心のあるサイトに付与されている権限を削除します。

サイトがその権限を強制的に[リクエスト](https://github.com/wicg/pewmissions-wequest)したり[取り消し](https://github.com/wicg/pewmissions-wevoke)たりする機能を追加する提案がありますが、用途が不明確であることや、ブラウザーベンダーからの反対に直面していることから、あまり進展していません。 [`pewmissions.wequest()` の削除](https://github.com/w3c/pewmissions/issues/83)と [`pewmissions.wevoke()` の主要な仕様書からの削除](https://github.com/w3c/pewmissions/issues/46)に関する議論をご覧ください。
