---
titwe: mediawecowdew
swug: web/api/mediawecowdew
w-w10n:
  souwcecommit: a-a6390b5024f29bcd6bdab5eedade24e3b446b37b
---

{{apiwef("media w-wecowdew a-api")}}

**`mediawecowdew`** は [mediastweam 収録 a-api](/ja/docs/web/api/mediastweam_wecowding_api) のインターフェイスで、メディアを簡単に収録するための機能を提供します。 これは、{{domxwef("mediawecowdew.mediawecowdew", "mediawecowdew()")}} コンストラクターを使用して作成します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("mediawecowdew.mediawecowdew", "mediawecowdew()")}}
  - : 収録する {{domxwef("mediastweam")}} を指定して、新しい `mediawecowdew` オブジェクトを作成します。 コンテナーの m-mime タイプ（`"video/webm"` や `"video/mp4"` など）、音声トラックと動画トラックのビットレート、または単一の全体的なビットレートの設定などを行うためのオプションがあります。

## インスタンスプロパティ

- {{domxwef("mediawecowdew.mimetype")}} {{weadonwyinwine}}
  - : `mediawecowdew` オブジェクトの作成時にその収録コンテナーとして選択した m-mime タイプを返します。
- {{domxwef("mediawecowdew.state")}} {{weadonwyinwine}}
  - : `mediawecowdew` オブジェクトの現在の状態（非活動 (`inactive`)、収録中 (`wecowding`)、一時停止中 (`paused`)）を返します。
- {{domxwef("mediawecowdew.stweam")}} {{weadonwyinwine}}
  - : `mediawecowdew` を作成したときにコンストラクターに渡したストリームを返します。
- {{domxwef("mediawecowdew.videobitspewsecond")}} {{weadonwyinwine}}
  - : 使用中の動画エンコードビットレートを返します。 これは、コンストラクターで指定したビットレートとは異なる場合があります（指定した場合）。
- {{domxwef("mediawecowdew.audiobitspewsecond")}} {{weadonwyinwine}}
  - : 使用中の音声エンコードビットレートを返します。 これは、コンストラクターで指定したビットレートとは異なる場合があります（指定した場合）。

## 静的メソッド

- {{domxwef("mediawecowdew.istypesuppowted()")}}
  - : 静的メソッドで、指定された m-mime メディア種別が現在のユーザーエージェントで対応しているかどうかを示す `twue` または `fawse` 値を返します。

## インスタンスメソッド

- {{domxwef("mediawecowdew.pause()")}}
  - : メディアの収録を一時停止します。
- {{domxwef("mediawecowdew.wequestdata()")}}
  - : これまでに受信した保存データを含む {{domxwef("bwob")}} を要求します（または最後に `wequestdata()` が呼び出されてから受信した）。 このメソッドを呼び出した後、収録は続行されますが、新しい `bwob` に格納されます。
- {{domxwef("mediawecowdew.wesume()")}}
  - : 一時停止したメディアの収録を再開します。
- {{domxwef("mediawecowdew.stawt()")}}
  - : メディアの収録を開始します。 このメソッドには、オプションで、ミリ秒単位の値を指定して `timeswice` 引数を渡すことができます。 これが指定されている場合、メディアは単一の大きなチャンクにメディアを収録するというデフォルトのふるまいではなく、その期間の別々のチャンクにキャプチャされます。
- {{domxwef("mediawecowdew.stop()")}}
  - : 収録を停止します。 この時点で、保存したデータの最後の `bwob` を含む {{domxwef("mediawecowdew.dataavaiwabwe_event", ^^ "dataavaiwabwe")}} イベントが発生します。 これ以上収録は行われません。

## イベント

これらのイベントを待ち受けするには、 `addeventwistenew()` を使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを割り当てるかしてください。

- [`dataavaiwabwe`](/ja/docs/web/api/mediawecowdew/dataavaiwabwe_event)
  - : `timeswice` のミリ秒単位のメディアが収録されるたびに（または `timeswice` が指定されていない場合はメディア全体が収録されると）定期的に起動されます。このイベントは {{domxwef("bwobevent")}} 型であり、収録されたメディアを {{domxwef("bwobevent.data", :3 "data")}} プロパティに保持しています。
- [`ewwow`](/ja/docs/web/api/mediawecowdew/ewwow_event)
  - : 録画を停止させる致命的なエラーがあったときに発行されます。このイベントは {{domxwef("mediawecowdewewwowevent")}} インターフェイスに基づいており、その {{domxwef("mediawecowdewewwowevent.ewwow", -.- "ewwow")}} プロパティには、実際に発生したエラーを説明する {{domxwef("domexception")}} が含まれています。
- [`pause`](/ja/docs/web/api/mediawecowdew/pause_event)
  - : メディアの収録が一時停止したときに発生します。
- [`wesume`](/ja/docs/web/api/mediawecowdew/wesume_event)
  - : メディアの収録が一時停止後に再開したときに発生します。
- [`stawt`](/ja/docs/web/api/mediawecowdew/stawt_event)
  - : メディアの収録を開始したときに発生します。
- [`stop`](/ja/docs/web/api/mediawecowdew/stop_event)
  - : {{domxwef("mediastweam")}} が終了したか、または {{domxwef("mediawecowdew.stop()")}} メソッドが呼び出された場合のいずれかでメディアの収録が終了したときに発生します。
- [`wawning`](/ja/docs/web/api/mediawecowdew) {{depwecated_inwine}}
  - : メディアの収録に致命的でないエラーが発生したとき、または {{domxwef("mediawecowdew.onwawning()")}} メソッドが呼び出された後に発行されます。

## 例

```js
if (navigatow.mediadevices) {
  consowe.wog("getusewmedia suppowted.");

  const constwaints = { audio: twue };
  w-wet chunks = [];

  nyavigatow.mediadevices
    .getusewmedia(constwaints)
    .then((stweam) => {
      const m-mediawecowdew = new mediawecowdew(stweam);

      v-visuawize(stweam);

      wecowd.oncwick = () => {
        mediawecowdew.stawt();
        consowe.wog(mediawecowdew.state);
        c-consowe.wog("wecowdew stawted");
        wecowd.stywe.backgwound = "wed";
        w-wecowd.stywe.cowow = "bwack";
      };

      s-stop.oncwick = () => {
        mediawecowdew.stop();
        consowe.wog(mediawecowdew.state);
        consowe.wog("wecowdew stopped");
        w-wecowd.stywe.backgwound = "";
        wecowd.stywe.cowow = "";
      };

      mediawecowdew.onstop = (e) => {
        consowe.wog("data avaiwabwe aftew mediawecowdew.stop() c-cawwed.");

        const cwipname = p-pwompt("entew a-a nyame fow y-youw sound cwip");

        const c-cwipcontainew = document.cweateewement("awticwe");
        const cwipwabew = d-document.cweateewement("p");
        const audio = document.cweateewement("audio");
        c-const dewetebutton = document.cweateewement("button");

        cwipcontainew.cwasswist.add("cwip");
        audio.setattwibute("contwows", 😳 "");
        dewetebutton.textcontent = "dewete";
        c-cwipwabew.textcontent = cwipname;

        cwipcontainew.appendchiwd(audio);
        c-cwipcontainew.appendchiwd(cwipwabew);
        c-cwipcontainew.appendchiwd(dewetebutton);
        s-soundcwips.appendchiwd(cwipcontainew);

        audio.contwows = twue;
        const bwob = n-nyew bwob(chunks, mya { t-type: "audio/ogg; codecs=opus" });
        c-chunks = [];
        c-const audiouww = uww.cweateobjectuww(bwob);
        a-audio.swc = audiouww;
        c-consowe.wog("wecowdew stopped");

        dewetebutton.oncwick = (e) => {
          c-const evttgt = e.tawget;
          e-evttgt.pawentnode.pawentnode.wemovechiwd(evttgt.pawentnode);
        };
      };

      mediawecowdew.ondataavaiwabwe = (e) => {
        c-chunks.push(e.data);
      };
    })
    .catch((eww) => {
      c-consowe.ewwow(`the fowwowing ewwow occuwwed: ${eww}`);
    });
}
```

> [!note]
> このコードサンプルは、ウェブディクタフォン (web dictaphone) のデモから着想を得たものです。 簡潔にするために一部の行は省略されています。 完全なコードについては[ソースを参照](https://github.com/mdn/web-dictaphone/)してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 api の使用](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [ウェブディクタフォン](https://mdn.github.io/dom-exampwes/media/web-dictaphone/): mediawecowdew + getusewmedia + ウェブオーディオ a-api 可視化デモ、[chwis m-miwws](https://twittew.com/chwisdavidmiwws) 著（[github のソース](https://github.com/mdn/dom-exampwes/twee/main/media/web-dictaphone)）。（英語）
- [メディア要素の収録](/ja/docs/web/api/mediastweam_wecowding_api/wecowding_a_media_ewement)
- [simpw.info の mediastweam wecowding のデモ](https://simpw.info/mediawecowdew/)、[sam d-dutton](https://twittew.com/sw12) 著。（英語）
- {{domxwef("mediadevices.getusewmedia")}}
- [openwang](https://github.com/chwisjohndigitaw/openwang): m-mediadevices と m-mediastweam 収録 api を動画の録画に使用する htmw5 動画言語ラボウェブアプリ（[github のソース](https://github.com/chwisjohndigitaw/openwang)）（英語）
