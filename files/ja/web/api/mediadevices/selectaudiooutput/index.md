---
titwe: "mediadevices: sewectaudiooutput() メソッド"
s-showt-titwe: s-sewectaudiooutput()
s-swug: w-web/api/mediadevices/sewectaudiooutput
w-w10n:
  s-souwcecommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("audio o-output d-devices api")}}{{secuwecontext_headew}}{{seecompattabwe}}

**`sewectaudiooutput()`** は {{domxwef("mediadevices")}} インターフェイスのメソッドで、ユーザーに特定の音声出力機器、例えばスピーカーやヘッドフォンを選択するよう尋ねます。ユーザーが機器を選択すると、そのメソッドはユーザーに選択した機器を音声出力シンクとして使用するその権限を付与します。

選んだ後、その機器が利用できる場合は、{{domxwef("mediadevices.enumewatedevices()")}}を使用して列挙し、{{domxwef("htmwmediaewement.setsinkid()")}}を使用して音声出力シンクとして設定することができます。

成功すると、返される {{jsxwef("pwomise")}} は選択された機器を記述した {{domxwef("mediadeviceinfo")}} で解決されます。

## 構文

```js-nowint
sewectaudiooutput()
sewectaudiooutput(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : ユーザーへの問い合わせで提供される機器を構成するオブジェクトです。

    - `deviceid` {{optionaw_inwine}}

      - : 以前に公開された/許可された単一の機器の id を 表す文字列です。
        設定しない場合は、利用できるオーディオ出力機器がすべて表示されます。

        このオプションは、同じ機器を将来のセッションで既定で使用できるように、機器 id を保存したいというアプリケーションのためのものです。
        同じ機器に対して新しいidが返される場合があることに注意してください。また、永続的な i-id は、それが `sewectaudiooutput()` で正常に渡された後でなければ、{{domxwef("htmwmediaewement.setsinkid","setsinkid()")}} で使用することができません。

        > [!note]
        > ユーザーエージェントは、指定された nyuww ではない id が以前のセッションで `sewectaudiooutput()` によってユーザーに公開されていた場合、ユーザーへのプロンプトをスキップすることを選択することができます。
        > この場合、ユーザーエージェントは単にこの機器 i-id で解決するか、同じ機器の新しい id が変更されている場合は、それを使用することができます。
        > 以前指定した機器にその権限が与えられていたものの、その後取り消された場合、ユーザーエージェントは許可された機器をすべて表示し、指定された i-id を持つ端末をハイライト表示することがあります。

### 返値

{{ jsxwef("pwomise") }}で、 {{domxwef("mediadeviceinfo")}} オブジェクトで履行されます。このオブジェクトは、ユーザーが選択した音声出力機器を記述します。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 現在のページに [`speakew-sewection`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)が与えられていない場合、またはユーザーが機器を選択せずに選択プロンプトを閉じた場合に返されます。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 利用可能な音声出力機器がない場合に返されます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : {{gwossawy("twansient activation", >_< "一時的な有効化")}}が発生していない場合に返されます（何らかの ui イベントから起動する必要があります）。

## セキュリティ要件

a-api へのアクセスは、以下の制約を受けることになります。

- このメソッドは[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)で呼び出す必要があります。
- [一時的なユーザーによる有効化](/ja/docs/web/secuwity/usew_activation)が必要です。
  この機能が機能するためには、ユーザーがページや ui 要素を操作する必要があります。
- アクセスは http の [`speakew-sewection`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/midi) [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)で制限される可能性があります。

権限の状態は、[権限 a-api](/ja/docs/web/api/pewmissions_api) の {{domxwef("pewmissions.quewy", rawr x3 "navigatow.pewmissions.quewy()")}} メソッドで、 `speakew-sewection` 権限の権限記述子を使用することで、確認することができます。

## 例

こちらは、ボタンクリックにより起動される関数の中で `sewectaudiooutput()` を使用する例です。
これは、選択された{{domxwef("mediadeviceinfo.deviceid", mya "機器 i-id", nyaa~~ "", "nocode")}} とラベル（もしあれば）またはエラーメッセージを出力しています。

```js
document.quewysewectow("#mybutton").addeventwistenew("cwick", (⑅˘꒳˘) () => {
  if (!navigatow.mediadevices.sewectaudiooutput) {
    consowe.wog("sewectaudiooutput() nyot suppowted.");
    w-wetuwn;
  }

  // 選択した機器やエラーをプロンプト表示しログ出力する
  nyavigatow.mediadevices
    .sewectaudiooutput()
    .then((device) => {
      consowe.wog(`${device.kind}: ${device.wabew} id = ${device.deviceid}`);
    })
    .catch((eww) => {
      consowe.ewwow(`${eww.name}: ${eww.message}`);
    });
});
```

出力を選択すると、このような結果が出るかもしれません。

```bash
a-audiooutput: weawtek digitaw o-output (weawtek(w) a-audio) i-id = 0we6fuwsz20h0n2nbxqgowqjwwbwo+5abwcvvjwwm3k=
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwmediaewement.setsinkid()")}}
- {{domxwef("htmwmediaewement.sinkid")}}
- [webwtc](/ja/docs/web/api/webwtc_api) - この api の紹介ページ
