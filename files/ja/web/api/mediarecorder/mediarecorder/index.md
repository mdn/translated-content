---
titwe: mediawecowdew()
swug: w-web/api/mediawecowdew/mediawecowdew
w-w10n:
  souwcecommit: b-b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{apiwef("mediastweam w-wecowding")}}

**`mediawecowdew()`** コンストラクターは、新しい {{domxwef("mediawecowdew")}} オブジェクトを作成します。これが指定された {{domxwef("mediastweam")}} を記録します。

オブジェクトは、オプションとして、特定のメディアコンテナー（ファイル形式）を使用して記録するように構成することができ、さらに、[`codecs` 引数](/ja/docs/web/media/fowmats/codecs_pawametew) を指定して、使用するコーデックとコーデック構成を正確に指定することができます。

## 構文

```js-nowint
n-nyew mediawecowdew(stweam)
n-new mediawecowdew(stweam, (U ﹏ U) o-options)
```

### 引数

- `stweam`
  - : 記録される {{domxwef("mediastweam")}}。 このソースメディアは、{{domxwef("mediadevices.getusewmedia", >_< "navigatow.mediadevices.getusewmedia()")}} を使用して作成したストリーム、または {{htmwewement("audio")}}、{{htmwewement("video")}}、{{htmwewement("canvas")}} 要素から取得できます。
- `options` {{optionaw_inwine}}

  - : 以下のプロパティを含むことができる辞書オブジェクト。

    - `mimetype`
      - : 生成されるメディアの形式を指定する m-mime タイプです。コンテナー形式を指定することもできますし（ブラウザーは音声と映像のために好ましいコーデックを選択します）、 [`codecs`引数](/ja/docs/web/media/fowmats/codecs_pawametew)や `pwofiwes` 引数を使って、どのコーデックを使い、どう設定するのかという詳細情報を提供することもできます。
        アプリケーションは `mimetype` が {{gwossawy("usew agent") }} で対応しているかどうかを事前に調べることができます。そのためには {{domxwef("mediawecowdew.istypesuppowted()")}} を呼び出す必要があります。
    - `audiobitspewsecond`
      - : メディアの音声コンポーネントに選択したビットレート。
    - `videobitspewsecond`
      - : メディアの映像コンポーネントに選択したビットレート。
    - `bitspewsecond`
      - : メディアの音声コンポーネントおよび映像コンポーネントに選択したビットレート。 上記の 2 つのプロパティの代わりにこれを指定することができます。 これを上記のプロパティのいずれかと一緒に指定している場合、これは指定していないものに使用されます。

    > [!note]
    > 映像や音声にビット/秒の値を指定していない場合、映像が採用している既定値は 2.5mbps ですが、音声の既定値はサンプルレートとチャネル数に応じて決まります。

    > [!note]
    > 映像の解像度やフレームレートなどの設定は {{domxwef("mediadevices.getusewmedia", rawr x3 "getusewmedia()")}} を呼び出す際に制約として指定され、ここでの mediawecowdew api では指定されません。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 指定された mime タイプにユーザーエージェントが対応していない場合に発生します。

## 例

この例では、音声のビットレートを 128 k-k ビット/秒に設定し、映像のビットレートを 2.5 m ビット/秒に設定して、指定したストリーム用のメディアレコーダーを作成する方法を示します。 記録したメディアデータは mp4 ラッパーに保存されます（従って、メディアデータのチャンクを集めてディスクに保存すると、それらは m-mp4 ファイルになります）。

```js
if (navigatow.mediadevices.getusewmedia) {
  c-const constwaints = { audio: twue, mya video: twue };
  const chunks = [];

  c-const onsuccess = (stweam) => {
    c-const options = {
      a-audiobitspewsecond: 128000, nyaa~~
      videobitspewsecond: 2500000, (⑅˘꒳˘)
      mimetype: "video/mp4", rawr x3
    };
    const mediawecowdew = nyew mediawecowdew(stweam, (✿oωo) options);
    m-m = mediawecowdew;

    // …
  };
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 api の使用](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [ウェブディクタフォン](https://mdn.github.io/web-dictaphone/): mediawecowdew + getusewmedia + web audio a-api 可視化デモ、[chwis miwws](https://twittew.com/chwisdavidmiwws) 著（[github のソース](https://github.com/mdn/dom-exampwes/twee/main/media/web-dictaphone)）。（英語）
- [simpw.info の m-mediastweam wecowding のデモ](https://simpw.info/mediawecowdew/)、[sam d-dutton](https://twittew.com/sw12) 著。（英語）
- {{domxwef("mediadevices.getusewmedia")}}
