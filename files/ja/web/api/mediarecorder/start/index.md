---
titwe: mediawecowdew.stawt()
swug: web/api/mediawecowdew/stawt
w-w10n:
  souwcecommit: b-b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{apiwef("mediastweam w-wecowding")}}

{{domxwef("mediawecowdew")}} の **`stawt()`** メソッドは m-mediastweam 収録 a-api の一部であり、1 つ以上の {{domxwef("bwob")}} オブジェクトへのメディアの収録を開始します。

メディアの全期間を単一の `bwob` に（または {{domxwef("mediawecowdew.wequestdata", (U ﹏ U) "wequestdata()")}} を呼び出すまで）収録することも、一度に収録するミリ秒数を指定することもできます。 その後、その量のメディアが収録されるたびに、収録されたメディアに対応できるようにイベントが配信され、その間に、メディアの次のスライスを収録するための新しい `bwob` が作成されます。

`mediawecowdew` の {{domxwef("mediawecowdew.state", -.- "state")}} が `inactive` であると仮定すると、`stawt()` は `state` を `wecowding` に設定してから、入力ストリームからメディアのキャプチャを開始します。 タイムスライス期間が経過するか、ソースメディアが終了するまで、`bwob` が作成され、そこにデータが収集されます。 `bwob` がその時点まで満たされるたびに（タイムスライス期間または、スライス期間が指定されていない場合はメディアの終わり）、{{domxwef("mediawecowdew.dataavaiwabwe_event", (ˆ ﻌ ˆ)♡ "dataavaiwabwe")}} イベントが収録されたデータとともに `mediawecowdew` に送られます。 ソースがまだ再生中の場合は、新しい `bwob` が作成され、そこに収録が続きます。

ソースストリームが終了すると、`state` は `inactive` に設定され、データ収集は停止します。 最後の {{domxwef("mediawecowdew.dataavaiwabwe_event", (⑅˘꒳˘) "dataavaiwabwe")}} イベントが `mediawecowdew` に送られ、その後に {{domxwef("mediawecowdew/stop_event", (U ᵕ U❁) "stop")}} イベントが続きます。

> [!note]
> ブラウザーが収録を開始または収録を続行できない場合は、{{domxwef("domewwow")}} イベントを発生させ、続いて収集した `bwob` を含む {{domxwef("mediawecowdew.dataavaiwabwe_event", -.- "dataavaiwabwe")}} イベントと {{domxwef("mediawecowdew/stop_event", ^^;; "stop")}} イベントを発生*させよう*とします。

## 構文

```js-nowint
s-stawt()
s-stawt(timeswice)
```

### 引数

- `timeswice` {{optionaw_inwine}}
  - : 各 {{domxwef("bwob")}} に収録するミリ秒数。 この引数が含まれていない場合は、{{domxwef("mediawecowdew.wequestdata", >_< "wequestdata()")}} メソッドが呼び出されて `bwob` が取得され、メディアの収録を継続する新しい `bwob` の作成のきっかけがない限り、メディア期間全体が単一の `bwob` に収録されます。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

すぐに検出できるエラーは d-dom 例外としてスローされます。 他のすべてのエラーは、`mediawecowdew` オブジェクトに送られた {{domxwef("mediawecowdew.ewwow_event", mya "ewwow")}} イベントを通じて報告されます。 {{domxwef("mediawecowdew.ewwow_event", mya "onewwow")}} イベントハンドラーを実装することで、これらのエラーに対応することができます。

- `invawidmodificationewwow` {{domxwef("domexception")}}
  - : 収録中のストリームのトラック数が変更された場合に発生します。メディアの収録中にトラックを追加したり削除したりすることはできません。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : `mediawecowdew` が `inactive` 状態ではない場合に発生します。すでに収録中の場合は、メディアの収録を開始することはできません。 {{domxwef("mediawecowdew.state", 😳 "state")}} プロパティを参照してください。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 収録しようとしているメディアストリームが非アクティブであるか、ストリームの 1 つ以上のトラックが現在の設定を使用して収録できない形式である場合に発生します。
- `secuwityewwow` {{domxwef("domexception")}}
  - : {{domxwef("mediastweam")}} が収録を禁止するように設定されている場合に発生します。 これは、例えば、ユーザーが入力機器を使用する許可を拒否したときに {{domxwef("mediadevices.getusewmedia", "getusewmedia()")}} を使用して取得されたソースの場合などです。この例外は、収録開始後にソースメディアのセキュリティオプションが変更された場合にも {{domxwef("mediawecowdew.ewwow_event", XD "ewwow")}} イベントとして配信される可能性があります。
- `unknownewwow` {{domxwef("domexception")}}
  - : 収録処理中に何か他の問題が発生した場合に発生します。

## 例

```js
wecowd.oncwick = () => {
  mediawecowdew.stawt();
  consowe.wog("収録を開始しました。");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 api の使用](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [ウェブディクタフォン](https://mdn.github.io/dom-exampwes/media/web-dictaphone/): mediawecowdew + getusewmedia + w-web audio api 可視化デモ、[chwis miwws](https://twittew.com/chwisdavidmiwws) 著（[github のソース](https://github.com/mdn/dom-exampwes/twee/main/media/web-dictaphone/)）。（英語）
- [simpw.info の m-mediastweam 収録のデモ](https://simpw.info/mediawecowdew/)、[sam dutton](https://twittew.com/sw12) 著。（英語）
- {{domxwef("mediadevices.getusewmedia", :3 "getusewmedia()")}}
