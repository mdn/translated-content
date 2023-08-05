---
title: "<track>: 埋め込みテキストトラック要素"
slug: Web/HTML/Element/track
---

{{HTMLSidebar}}

**`<track>`** は [HTML](/ja/docs/Web/HTML) の要素で、メディア要素 ({{HTMLElement("audio")}} および {{HTMLElement("video")}}) の子として使用します。この要素は自動的に処理される字幕など、時間指定されたテキストトラック (または時系列データ) を指定することができます。トラックは [WebVTT 形式](/ja/docs/Web/API/WebVTT_API) (`.vtt` ファイル) を用います。

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。この要素は{{Glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        空要素であるため開始タグは必須、また終了タグを置いてはなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <p>
          メディア要素、 {{HTMLElement("audio")}} または {{HTMLElement("video")}}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTrackElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `default`
  - : この属性は、別の track が適切であるとユーザーの設定が示さない限り有効にすべき track であることを表します。この属性はメディア要素ごとに 1 つの `track` 要素のみで使用できます。
- `kind`

  - : どのように使用するトラックであるかをを表します。省略した場合、既定の種類は `subtitles` です。属性に無効な値が含まれている場合は `metadata` を使用します (バージョン 52 より前の Chrome は、無効な値を `subtitles` として扱っていました)。以下のキーワードが利用できます。

    - `subtitles`

      - 字幕は、視聴者が理解できないコンテンツの翻訳を提供します。例えば、英語の映画における英語以外の言語による会話やテキストです。
      - 字幕には追加コンテンツ、一般的には付加的な背景情報を含む場合があります。例えばスターウォーズの冒頭のテキストや、シーンの日時および場所です。

    - `captions`

      - クローズドキャプションは書写、あるいは音声の翻訳を提供します。
      - これは音楽のキューやサウンドエフェクトといった重要な非言語情報を含む場合があります。これはキューのソース (例: 音楽、テキスト、キャラクター) を示すでしょう。
      - 耳が不自由なユーザーや音声をミュートしている場合に適しています。

    - `descriptions`

      - テキストによる動画コンテンツの説明です。
      - 目が不自由なユーザーや動画を視聴できない場合に適しています。

    - `chapters`

      - チャプタータイトルは、ユーザーがメディアリソースの操作を行う際に使用することを意図しています。

    - `metadata`

      - スクリプトが使用するトラック情報です。ユーザーには見えません。

- `label`
  - : 使用可能なテキストトラックを一覧表示する際にブラウザーが使用する、ユーザーに見せるテキストトラックのタイトルです。
- `src`
  - : トラック（`.vtt` ファイル）のアドレスです。有効な URL であることが必要です。この属性は定義する必要があり、 URL の値は文書として — `track` 要素の親要素である {{HTMLElement("audio")}} または {{HTMLElement("video")}} が [`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin) 属性を持たない限り — 同じオリジンを持たなければなりません。
- `srclang`
  - : テキストデータの言語です。有効な [BCP 47](https://r12a.github.io/app-subtags/) 言語タグであることが必要です。`kind` 属性に `subtitles` を設定した場合は、`srclang` 属性を定義しなければなりません。

## 使用上の注意

### トラックのデータの種類

`track` 要素でメディアに付加するデータの種類は `kind` 属性で設定します。使用できる値は `subtitles`, `captions`, `descriptions`, `chapters`, `metadata` です。この要素は、ユーザーが付加データを要求した際にブラウザーが提供する、時間指定テキストを含むソースファイルを指示します。

メディア要素は `kind`、`srclang` および `label` が同一の `track` を複数持つことはできません。

### キューの変更の検出

配下にある {{domxref("TextTrack")}} は {{domxref("HTMLTrackElement.track", "track")}} プロパティで示され、現在表示されているキューが変更される度に `cuechange` イベントを受信します。これは、このトラックがメディア要素に関連付けられていない場合でも発生します。

このトラックがメディア要素に関連付けられている場合、 {{HTMLElement("track")}} を {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素の子として使用すると、 `cuechange` イベントは {{domxref("HTMLTrackElement")}} にも送信されます。

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

## 例

```html
<video controls poster="/images/sample.gif">
   <source src="sample.mp4" type="video/mp4">
   <source src="sample.ogv" type="video/ogv">
   <track kind="captions" src="sampleCaptions.vtt" srclang="en">
   <track kind="descriptions"
     src="sampleDescriptions.vtt" srclang="en">
   <track kind="chapters" src="sampleChapters.vtt" srclang="en">
   <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de">
   <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en">
   <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja">
   <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz">
   <track kind="metadata" src="keyStage1.vtt" srclang="en"
     label="Key Stage 1">
   <track kind="metadata" src="keyStage2.vtt" srclang="en"
     label="Key Stage 2">
   <track kind="metadata" src="keyStage3.vtt" srclang="en"
     label="Key Stage 3">
   <!-- Fallback -->
   …
</video>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVTT テキストトラック形式](/ja/docs/Web/API/WebVTT_API)
- {{domxref("HTMLMediaElement.textTracks")}}
