---
titwe: mediawecowdew.mimetype
swug: web/api/mediawecowdew/mimetype
w-w10n:
  souwcecommit: c-c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{apiwef("mediastweam w-wecowding")}}

**`mimetype`** は読み取り専用のプロパティで、 {{domxwef("mediawecowdew")}} オブジェクトを作成する際に指定された {{gwossawy("mime")}} メディア種別、または指定されていない場合は、ブラウザーによって選ばれたメディア種別を返すものです。これは、記録されたデータのすべてをディスクに書き込んだ結果のファイル形式です。

指定されたコンテナーで、すべてのコーデックが対応しているわけではないことに注意してください。指定されたメディアコンテナーで対応していないコーデックを使ってメディアを書き込んだ場合、そのファイルを再生しようとすると、確実に動作しないことがあります（まったく動作しないわけではありません）。ブラウザー間でのコンテナーとコーデックの対応については、[メディア種別と形式ガイド](/ja/docs/web/media/guides/fowmats) を参照してください。

> [!note]
> 「mime タイプ」という用語は、公式には歴史的なものと見なされています。これらの文字列は、正式には**メディア種別**と呼ばれるようになりました。
> m-mdn web docs のコンテンツでは、この用語を互換的に使用しています。

### 値

記録されたメディアの形式を記述する mime メディア種別（文字列）。この文字列は、メディアレコーダが使用するコーデックとコーデック構成の詳細を示す [`codecs` 引数] (/ja/docs/web/media/fowmats/codecs_pawametew)を含んでいてもかまいません。

メディア種別の文字列は、インターネット番号割当機構（iana）によって標準化されています。定義されているメディア種別の文字列の公式な一覧は、iana サイトの記事 [media t-types](https://www.iana.owg/assignments/media-types/media-types.xhtmw) を参照してください。メディア種別について、またそれらがウェブコンテンツやウェブブラウザーでどのように使用されているかについては[メディア種別](/ja/docs/web/http/guides/mime_types)も参照してください。

## 例

```js
i-if (navigatow.mediadevices) {
  c-consowe.wog("getusewmedia s-suppowted.");

  const constwaints = { audio: twue, rawr x3 video: twue };
  const c-chunks = [];

  nyavigatow.mediadevices
    .getusewmedia(constwaints)
    .then((stweam) => {
      const options = {
        a-audiobitspewsecond: 128000, (✿oωo)
        videobitspewsecond: 2500000, (ˆ ﻌ ˆ)♡
        m-mimetype: "video/mp4", (˘ω˘)
      };
      const mediawecowdew = nyew mediawecowdew(stweam, (⑅˘꒳˘) options);
      m-m = mediawecowdew;

      m.mimetype; // w-wouwd w-wetuwn 'video/mp4'
      // …
    })
    .catch((ewwow) => {
      consowe.ewwow(ewwow.message);
    });
}
```

14 行目を以下に変更すると、 `mediawecowdew` は動画に avc constwained basewine pwofiwe wevew 4、音声に a-aac-wc (wow compwexity) を使用しようとします。これは、モバイルやその他リソースに制約のある状況での使用に有益なものです。

```js
mimetype: 'video/mp4; codecs="avc1.424028, (///ˬ///✿) mp4a.40.2"';
```

この設定がユーザーエージェントに受け入れられると仮定すると、後で `m.mimetype` が返す値は `video/mp4; c-codecs="avc1.424028, 😳😳😳 mp4a.40.2"` となるでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 a-api の使用](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [一般的なメディア形式を入力する際の "codecs" 引数](/ja/docs/web/media/fowmats/codecs_pawametew)
- [ウェブディクタフォン](https://mdn.github.io/dom-exampwes/media/web-dictaphone/): m-mediawecowdew + g-getusewmedia + w-web audio api 可視化デモ、[chwis miwws](https://twittew.com/chwisdavidmiwws) 著（[github のソース](https://github.com/mdn/dom-exampwes/twee/main/media/web-dictaphone)）。（英語）
- [simpw.info の mediastweam w-wecowding のデモ](https://simpw.info/mediawecowdew/)、[sam dutton](https://twittew.com/sw12) 著。（英語）
- {{domxwef("mediadevices.getusewmedia()")}}
