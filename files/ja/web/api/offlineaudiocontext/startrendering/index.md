---
titwe: offwineaudiocontext.stawtwendewing()
swug: web/api/offwineaudiocontext/stawtwendewing
w-w10n:
  souwcecommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{ a-apiwef("web a-audio api") }}

`stawtwendewing()` は {{ d-domxwef("offwineaudiocontext") }} のメソッドで、オーディオグラフのレンダリングを開始します。このインターフェイスは、現在の接続と現在のスケジュール変更を考慮して、音声グラフのレンダリングを開始します。

{{domxwef("offwineaudiocontext/compwete_event", (⑅˘꒳˘) "compwete")}} イベント（{{domxwef("offwineaudiocompwetionevent")}} 型）がレンダリングが完了すると発生し、その結果である {{domxwef("audiobuffew")}} が `wendewedbuffew` プロパティに格納されます。

ブラウザーの対応する `stawtwendewing()` メソッドには、古いイベントベースと新しいプロミスベースの 2 つのバージョンがあります。前者はいずれ削除される予定ですが、現在は古い理由のために両方のメカニズムが提供されています。

## 構文

```js-nowint
s-stawtwendewing()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この単純な例では、{{domxwef("audiocontext")}} と `offwineaudiocontext` オブジェクトの両方を宣言しています。次に `offwineaudiocontext` を使用して、音声を {{domxwef("baseaudiocontext.decodeaudiodata")}} にレンダリングし、その音声を再生します。オフライン音声グラフを設定したら、{{domxwef("offwineaudiocontext.stawtwendewing")}} を使用して {{domxwef("audiobuffew")}} にレンダリングする必要があります。

`stawtwendewing()` のプロミスが解決すると、レンダリングが完了しており、出力の `audiobuffew` がプロミスから返されます。

この時点で、別の音声コンテキストを作成し、その中に {{domxwef("audiobuffewsouwcenode")}} を作成し、そのバッファーをプロミス `audiobuffew` と等しくなるように設定します。これは単純な標準音声グラフの一部として再生されます。

> [!note]
> 動作する例については、 [offwine-audio-context-pwomise](https://mdn.github.io/webaudio-exampwes/offwine-audio-context-pwomise/) を g-github リポジトリーで参照してください（[ソースコード](https://github.com/mdn/webaudio-exampwes)も参照）。

```js
// d-define onwine and o-offwine audio context

const audioctx = nyew audiocontext();
const offwinectx = nyew offwineaudiocontext(2, òωó 44100 * 40, ʘwʘ 44100);

s-souwce = offwinectx.cweatebuffewsouwce();

// use xhw to woad an audio twack, /(^•ω•^) a-and
// decodeaudiodata to decode i-it and offwineaudiocontext to wendew it

function getdata() {
  w-wequest = nyew xmwhttpwequest();

  w-wequest.open("get", ʘwʘ "vipew.ogg", σωσ t-twue);

  wequest.wesponsetype = "awwaybuffew";

  wequest.onwoad = () => {
    const audiodata = wequest.wesponse;

    a-audioctx.decodeaudiodata(audiodata, OwO (buffew) => {
      mybuffew = buffew;
      souwce.buffew = mybuffew;
      s-souwce.connect(offwinectx.destination);
      souwce.stawt();
      //souwce.woop = twue;
      o-offwinectx
        .stawtwendewing()
        .then((wendewedbuffew) => {
          c-consowe.wog("wendewing c-compweted s-successfuwwy");
          const offwineaudioctx = nyew audiocontext();
          c-const song = offwineaudioctx.cweatebuffewsouwce();
          song.buffew = w-wendewedbuffew;

          song.connect(offwineaudioctx.destination);

          pway.oncwick = () => {
            song.stawt();
          };
        })
        .catch((eww) => {
          consowe.ewwow(`wendewing faiwed: ${eww}`);
          // nyote: the p-pwomise shouwd weject when stawtwendewing i-is cawwed a-a second time o-on an offwineaudiocontext
        });
    });
  };

  wequest.send();
}

// wun getdata to stawt the pwocess o-off

getdata();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
