---
title: HTML `<track>` 埋め込みテキストトラック要素
short-title: <track>
slug: Web/HTML/Reference/Elements/track
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<track>`** は [HTML](/ja/docs/Web/HTML) の要素で、メディア要素 ({{HTMLElement("audio")}} および {{HTMLElement("video")}}) の子として使用します。
それぞれの track 要素では、メディア要素と並行して表示できる時間指定テキストトラック（または時間ベースのデータ）を指定できます。例えば、動画の上に字幕やクローズドキャプションを重ねたり、音声トラックと共に表示したりすることができます。

1 つのメディア要素に対して複数のトラックを指定することができ、それぞれに異なる種類の時間指定テキストデータ、あるいは異なるロケール向けに翻訳された時間指定テキストデータを含めることができます。
使用されるデータは、デフォルトで設定されているトラック、またはユーザーの設定に基づいた種類や翻訳のいずれかとなります。

トラックは [WebVTT 形式](/ja/docs/Web/API/WebVTT_API) (`.vtt` ファイル、Web Video Text Tracks) を用います。

{{InteractiveExample("HTML デモ: &lt;track&gt;", "tabbed-standard")}}

```html interactive-example
<video controls src="/shared-assets/videos/friday.mp4">
  <track
    default
    kind="captions"
    srclang="en"
    label="English"
    src="/shared-assets/misc/friday.vtt" />
  Download the
  <a href="/shared-assets/videos/friday.mp4">MP4</a>
  video, and
  <a href="/shared-assets/misc/friday.vtt">subtitles</a>.
</video>
```

```css interactive-example
video {
  width: 250px;
}

video::cue {
  font-size: 1rem;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `default`
  - : この属性は、ユーザー設定によって別のトラックが適切であると示されない限り、有効にすべきトラックであることを表します。この属性はメディア要素ごとに 1 つの `track` 要素のみで使用できます。
- `kind`
  - : テキストトラックの使用方法を示します。省略された場合、デフォルトの種別は `subtitles` となります。この属性に不正な値が指定された場合、`metadata` が使用されます。
    以下のキーワードが利用できます。
    - `subtitles`
      - : 字幕です。台詞の文字起こしや翻訳を提供します。英語圏の映画で英語以外の言語が話されたり、テキストが表示されたりする場合など、音は利用できるものの内容が理解できない場合に適しています。字幕には、通常は追加の背景情報といった、追加の内容が含まれることもあります。例えば、スター・ウォーズ映画の冒頭にあるテキストや、シーンの日時や場所などが挙げられます。字幕の情報は、音声と映像を補完するものです。多くの場合、動画自体に埋め込まれていますが、特に映画全体の翻訳の場合など、同時に提供されることもあります。
    - `captions`
      - : クローズドキャプションです。台詞、効果音、関連する音楽、ソース（登場人物や環境など）といった関連する音声情報の文字起こしや翻訳を提供します。これは、音声が利用できない場合や、はっきりと聞き取れない場合（例えば、ミュートされている、周囲の騒音にかき消されている、あるいはユーザーが聴覚障碍者である場合など）に適しています。
    - `descriptions`
      - : 説明文です。メディアリソースの video 要素を要約したものです。これらは、視覚的な要素が隠れていたり、利用できない、あるいは使用できない場合（例えば、ユーザーが運転中に画面を見ずにアプリケーションを操作している場合や、視覚障害がある場合など）に、音声として合成されることを意図しています。
    - `chapters`
      - : チャプタータイトルです。ユーザーがメディアリソースの操作を行う際に使用するためのものです。
    - `metadata`
      - : スクリプトが使用するトラック情報です。ユーザーには見えません。

- `label`
  - : 使用可能なテキストトラックを一覧表示する際にブラウザーが使用する、ユーザーに見せるテキストトラックのタイトルです。
- `src`
  - : トラック（`.vtt` ファイル）のアドレスです。有効な URL であることが必要です。この属性は定義する必要があり、 URL の値は文書として — `track` 要素の親要素である {{HTMLElement("audio")}} または {{HTMLElement("video")}} が [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性を持たない限り — 同じオリジンを持たなければなりません。
- `srclang`
  - : テキストデータの言語です。有効な {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}であることが必要です。`kind` 属性に `subtitles` を設定した場合は、`srclang` 属性を定義しなければなりません。

## 使用上の注意

### トラックのデータの種類

`track` 要素でメディアに付加するデータの種類は `kind` 属性で設定します。使用できる値は `subtitles`, `captions`, `chapters`, `metadata` です。この要素は、ユーザーが付加データを要求した際にブラウザーが提供する、時間指定テキストを含むソースファイルを指示します。

メディア要素は `kind`、`srclang` および `label` が同一の `track` を複数持つことはできません。

### キューの変更の検出

配下にある {{domxref("TextTrack")}} は {{domxref("HTMLTrackElement.track", "track")}} プロパティで示され、現在表示されているキューが変更される度に `cuechange` イベントを受信します。これは、このトラックがメディア要素に関連付けられていない場合でも発生します。

このトラックがメディア要素に関連付けられている場合、`<track>` を {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素の子として使用すると、 `cuechange` イベントは {{domxref("HTMLTrackElement")}} にも送信されます。

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### プログラムでテキストトラックを追加

JavaScript で `<track>` 要素を表すインターフェイスは、{{domxref("HTMLTrackElement")}} です。
要素に関連付けられたテキストトラックは、{{domxref("HTMLTrackElement.track")}} プロパティから取得でき、その型は {{domxref("TextTrack")}} です。

`TextTrack` オブジェクトは、{{domxref("HTMLVideoElement")}} または {{domxref("HTMLAudioElement")}} 要素に、{{domxref("HTMLMediaElement.addTextTrack()")}} メソッドを使用して追加することもできます。
メディア要素に関連付けられた `TextTrack` オブジェクトは、{{domxref("TextTrackList")}} に格納され、{{domxref("HTMLMediaElement.textTracks")}} プロパティを使用して取得できます。

## 例

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogv" type="video/ogv" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="en" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1" />
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2" />
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3" />
  <!-- Fallback -->
  …
</video>
```

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。この要素は{{Glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>空要素であるため開始タグは必須、また終了タグを置いてはいけません。</td>
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
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVTT テキストトラック形式](/ja/docs/Web/API/WebVTT_API)
- {{domxref("HTMLMediaElement.textTracks")}}
