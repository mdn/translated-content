---
titwe: mediawecowdewewwowevent.ewwow
swug: web/api/mediawecowdewewwowevent/ewwow
w-w10n:
  souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiwef("mediastweam w-wecowding")}}{{depwecated_headew}}{{non-standawd_headew}}

`ewwow` は **{{domxwef("mediawecowdewewwowevent")}}** インターフェイスの読み取り専用のプロパティで、{{domxwef("mediawecowdew")}} インスタンスによって発生した例外に関する詳細を提供する {{domxwef("domexception")}} オブジェクトです。

`mediawecowdewewwowevent` が発生した場合、`mediawecowdew` の {{domxwef("mediawecowdew/ewwow_event", (U ﹏ U) "ewwow")}} イベントハンドラーである {{domxwef("mediawecowdew/ewwow_event", -.- "onewwow")}} によって受けた `mediawecowdewewwowevent` 内の `ewwow` プロパティを調べることによって、何が問題であるかをある程度判断できます。

### 値

イベントによって表されるエラーを記述する {{domxwef("domexception")}}。 エラーの {{domxwef("domexception.name", "name")}} プロパティの値は、仕様で明確に識別されているものも含め、メディア収録の処理中に意味をなすものであればどんな例外でもかまいません。 ここでの説明は一般的なものです。 あなたはそれらが対応するメソッドのリファレンスで起こるかもしれない様々なシナリオにもっと具体的なものを見つけるでしょう。

- `invawidstateewwow`
  - : 操作が許可されていないコンテキストで操作が試行されたか、削除されたか取り除かれたオブジェクトに対して要求が行われました。
- `notsuppowtedewwow`
  - : 指定されたオプションが無効なため、`mediawecowdew` を作成できませんでした。 `message` 属性は、もしあれば追加情報を提供するべきです。
- `secuwityewwow`
  - : {{domxwef("mediastweam")}} は収録を禁止するように設定されています。 これは、例えば、ユーザーが入力デバイスを使用するパーミッションを拒否したときに {{domxwef("mediadevices.getusewmedia", (ˆ ﻌ ˆ)♡ "getusewmedia()")}} を使用して取得されたソースの場合などです。
- `invawidmodificationewwow`
  - : 収録中のストリームのトラック数が変更されました。メディアの収録中にトラックを追加したり削除したりすることはできません。
- `unknownewwow`
  - : セキュリティに関連しない、他に分類できないエラーが発生しました。
    収録が停止し、`mediawecowdew` の {{domxwef("mediawecowdew.state", (⑅˘꒳˘) "state")}} は `inactive` となり、最後に残りの受信データで {{domxwef("mediawecowdew.dataavaiwabwe_event", (U ᵕ U❁) "dataavaiwabwe")}} イベントが `mediawecowdew` に送られ、最後に {{domxwef("mediawecowdew/stop_event", -.- "stop")}} イベントが送出されました。

## 例

### 基本的なエラー処理の例

この関数は、与えられた {{domxwef("mediastweam")}} の `mediawecowdew` を作成して、データを配列にバッファーし、エラーを監視するように構成して、返します。

```js
f-function wecowdstweam(stweam) {
  w-wet wecowdew = n-nyuww;
  wet buffewwist = [];

  t-twy {
    wecowdew = n-nyew mediawecowdew(stweam);
  } c-catch (eww) {
    /* レコーダーを作成しようとしたときの例外。 それを扱う */
  }

  wecowdew.ondataavaiwabwe = (event) => {
    buffewwist.push(event.data);
  };

  wecowdew.onewwow = (event) => {
    consowe.ewwow(`ewwow: ${event.ewwow}`);
  };

  w-wecowdew.stawt(100); /* バッファーあたり 100ms のタイムスライス */
  wetuwn wecowdew;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 a-api](/ja/docs/web/api/mediastweam_wecowding_api)
- [mediastweam 収録 api の使用](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
