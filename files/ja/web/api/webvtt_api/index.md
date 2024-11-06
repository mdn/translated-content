---
title: WebVTT API
slug: Web/API/WebVTT_API
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{DefaultAPISidebar("WebVTT")}}

**ウェブ動画テキストトラック** (**WebVTT**) 動画や音声トラックなどの他のメディアと時間軸を合わせて配置された特定のテキスト「キュー」を提供するテキストトラックです。**WebVTT API** は、これらのテキストトラックを定義し、操作するための機能を提供します。
WebVTT API は主に、動画コンテンツに重ねて表示される字幕やキャプションの表示に使用されますが、他にも、ナビゲーションを容易にするためのチャプター情報の提供や、音声や動画コンテンツと時間軸を合わせて配置する必要がある一般的なメタデータの提供など、他にも用途があります。

## 概念と使用方法

テキストトラックとは、時間軸に沿って配置されたテキストデータを格納するコンテナーで、映像や音声トラックと並行して再生することで、コンテンツの翻訳、文字起こし、概要を提供することができます。
動画や音声のメディア要素は、異なる種類や言語のトラックを定義することができ、ユーザーは好みやニーズに応じて適切なトラックを表示することができます。

指定できるテキストデータの種類は以下の一覧に掲載されています。
ブラウザーがテキストトラックのすべてに対応しているとは限らないことに注意してください。

- `subtitles` は、音声のダイアログにテキスト翻訳を提供します。
  これは既定のテキストトラックの型であり、使用する場合はソース言語を指定する必要があります。
- `captions` は、話されたテキストの文字起こしを提供し、音楽や背景の音など、の音声に関する情報を記載することができます。
  これらは聴覚障害のあるユーザーのためのものです。
- `chapters` は、高レベルなナビゲーション情報を提供し、ユーザーが関連するコンテンツに簡単に切り替えられるようにします。
- `metadata` は、他にもあらゆる時系列情報に用いられます。

トラック内の時間軸に沿って配置された個々のテキストデータの単位は「キュー」と呼ばれます。
各キューには開始時刻、終了時刻、テキスト本文が含まれます。
また、表示領域、位置指定、配置、サイズに影響を与える「キュー設定」を持つこともできます。
最後に、キューにはラベルを付けることができ、CSS スタイル指定のためにキューを選択する際に使用することができます。

テキストトラックとキューは、[WebVTT ファイル形式](/ja/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format)を使用してファイル内で定義し、その後、特定の {{HTMLElement("video")}} 要素に {{HTMLElement("track")}} 要素を使用して関連付けられます。

あるいは、{{domxref("TextTrack")}} を JavaScript で [`HTMLMediaElement.addTextTrack()`](/ja/docs/Web/API/HTMLMediaElement/addTextTrack) を使用してメディア要素にテキストトラックを追加し、個々の {{domxref("VTTCue")}} オブジェクトを {{domxref("TextTrack.addCue()")}} によってトラックに追加することができます。

{{cssxref("::cue")}} は [CSS](/ja/docs/Web/CSS) [擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、HTML と WebVTT ファイルのどちらでも使用することができ、特定の要素、キュー内の特定のタグ、VTT クラス、または特定のラベルを持つキューのスタイルを設定することができます。
`::cue-region` 擬似要素は、特定の領域のキューをスタイル設定するためのものですが、どのブラウザーも対応していません。

WebVTTの最も重要な機能は、ファイル形式またはウェブ API を使用してアクセスすることができます。

## インターフェイス

- {{domxref("VTTCue")}}
  - : メディア要素に関連付けられたテキストトラックの特定の時間枠に表示されるテキスト、つまりキューを表します。
- {{domxref("VTTRegion")}}
  - : 動画要素の一部を表し、{{domxref("VTTCue")}} がレンダリングされることがあります。
- {{domxref("TextTrack")}}
  - : テキストトラックを表し、再生中にさまざまなポイントで関連するメディア要素とともに表示するキューのリストを保持します。
- {{domxref("TextTrackCue")}}
  - : {{domxref("VTTCue")}} などのさまざまなキュー型用の抽象ベースクラスです。
- {{domxref("TextTrackCueList")}}
  - : 配列風オブジェクトで、{{domxref("TextTrackCue")}} オブジェクトの動的に更新されるリストを表します。
    この型のインスタンスは {{domxref('TextTrack.cues')}} から、{{domxref("TextTrack")}} オブジェクト内のすべてのキューを取得するために取得します。
- {{domxref("TextTrackList")}}
  - : メディア要素に対して定義されたテキストトラックの一覧を表し、各トラックは、一覧に別個の {{domxref("TextTrack")}} インスタンスとして表されます。

### 関連するインターフェイス

- {{domxref("TrackEvent")}}
  - : HTML DOM API の一部で、{{domxref("TextTrackList")}} にトラックが追加されたり削除されたりしたとき（より一般的には、HTML のメディア要素にトラックが追加されたり削除されたりしたとき）に発生する `addtrack` イベントと `removetrack` イベントのインターフェイスです。

### 関連する CSS の拡張

これらの [CSS](/ja/docs/Web/CSS) [擬似要素](/ja/docs/Web/CSS/Pseudo-elements)は、VTT トラックを持つメディアのキューをスタイルするために使用されます。

- {{CSSxRef("::cue")}}
  - : メディアの中で選択された要素内のキューを VTT トラックと照合します。

> [!NOTE]
> この仕様では、もう一つの擬似要素である `::cue-region` を定義していますが、これはどのブラウザーも対応していません。

## 例

### WebVTT API を使用してキャプションを追加

#### HTML

次の例では、新しい {{domxref("TextTrack")}} を動画に追加し、{{domxref("TextTrack.addCue()")}} メソッドを使用して、作成した `VTTCue` オブジェクトを引数としてキューを追加しています。

```html
<video
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"></video>
```

#### CSS

```css
video {
  width: 420px;
  height: 300px;
}
```

#### JavaScript

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, "Hildy!"));
track.addCue(new VTTCue(1, 1.4, "How are you?"));
track.addCue(new VTTCue(1.5, 2.9, "Tell me, is the lord of the universe in?"));
track.addCue(new VTTCue(3, 4.2, "Yes, he's in - in a bad humor"));
track.addCue(new VTTCue(4.3, 6, "Somebody must've stolen the crown jewels"));
console.log(track.cues);
```

#### 結果

{{EmbedLiveSample('Using the WebVTT API to add captions','400','330')}}

### ファイルで定義された VTT コンテンツの表示

この例では、上記の [WebVTT API を使用してキャプションを追加](#webvtt_api_を使用してキャプションを追加)の例で見たのと同じテロップを、動画に設定する方法を示します。ただし今回は、{{htmlelement("track")}} 要素を使用して宣言的に行います。

まず、"captions.vtt" ファイルでキャプションを定義します。

```plain
WEBVTT

00:00.000 --> 00:00.900
Hildy!

00:01.000 --> 00:01.400
How are you?

00:01.500 --> 00:02.900
Tell me, is the lord of the universe in?

00:03.000 --> 00:04.200
Yes, he's in - in a bad humor

00:04.300 --> 00:06.000
Somebody must've stolen the crown jewels
```

これを {{HTMLElement("video")}} 要素に {{HTMLElement("track")}} 要素を用いて追加することができます。
次の HTML は前回と同じテキストトラックになります。

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

複数の {{HTMLElement("track")}} 要素を追加して、`kind` 属性と `srclang` 属性を用いると、複数の言語で異なる種類のトラックを指定することができます。`kind` を指定する場合は、`srclang` も設定しなければならないことに注意してください。
`default` 属性は 1 つの `<track>` だけに追加することができます。これはユーザーの環境設定で具体的な言語や種類を指定しない場合に再生されるものです。

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
  <track kind="subtitles" src="subtitles.vtt" srclang="en" />
  <track kind="descriptions" src="descriptions.vtt" srclang="en" />
  <track kind="chapters" src="chapters_de.vtt" srclang="de" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

### HTML またはスタイルシートは WebVTT のスタイル設定

WebVTT キューは、{{cssxref("::cue")}} 擬似要素を使用して要素と照合することで、スタイル設定することができます。
これにより、すべてのキューテキストの外観を変更することも、特定の要素だけを変更することもできます。この例では、[上記の最初の例](#webvtt_api_を使用してキャプションを追加)にスタイル設定を追加します。

> [!NOTE]
> また、[WebVTT ファイル形式](/ja/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format)でスタイルを定義することも可能です。

#### HTML

動画自体の HTML は前回と同じです。

```css hidden
video {
  width: 420px;
  height: 300px;
}
```

```html
<video
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"></video>
```

#### CSS

まず、{{cssxref("::cue")}} 擬似要素を使用して動画のすべてのテキストキューを選択し、赤を大きくして背景をグラデーションにします。

```css
video::cue {
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, yellow, lightyellow);
  color: red;
}
```

次に、{{cssxref("::cue")}} を使用して、`u` 要素と `b` 要素を使用してマークアップされたテキストを選択し、それぞれ緑と黄色のスタイル設定を行います。

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}
```

#### JavaScript

JavaScriptは最初の例と同じですが、`<b>` タグ（太字）と `<u>` タグ（下線）を用いてキューテキストの一部をマークアップしています。
既定では、マークされたテキストは太字または下線（タグによって異なる）として表示されますが、前のセクションで {{cssxref("::cue")}} を使用して、テキストをそれぞれ緑色と紫色にスタイル設定しています。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, "Hildy!"));
track.addCue(new VTTCue(1, 1.4, "How are you?"));
track.addCue(
  new VTTCue(1.5, 2.9, "Tell me, is the <u>lord of the universe</u> in?"),
);
track.addCue(new VTTCue(3, 4.2, "Yes, he's in - in a bad humor"));
track.addCue(
  new VTTCue(4.3, 6, "Somebody must've <b>stolen</b> the crown jewels"),
);
console.log(track.cues);
```

#### 結果

{{EmbedLiveSample('Styling WebVTT in HTML or a stylesheet','400','330')}}

### もっとスタイル設定をしたキューの例

この例では、キューテキストをタグでマークアップし、スタイル設定する方法を詳しく示します。
同じマークアップとスタイル設定を [WebVTT ファイル形式](/ja/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format)で使用することができます。

動画自体を表示するための HTML と CSS は上記の[最初の例](#webvtt_api_を使用してキャプションを追加)と同じなので、ここではテキストのマークアップとスタイル設定のための特定のコードのみを示します。

```css hidden
video {
  width: 420px;
  height: 300px;
}
```

```html hidden
<video
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"></video>
```

#### タグ種別によるスタイル設定

最初に作成するキューは、動画の 6 秒間すべて表示され、`b`、`u`、`i`、`c` タグでマークアップされたテキストが表示されます。

```js
let video = document.querySelector("video");

let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

track.addCue(
  new VTTCue(
    0,
    6,
    "スタイル: 標準 <b>太字</b> <u>下線</u> <i>斜体</i> <c>クラス</c>",
  ),
);
```

まず、すべてのキューを通常の 1.2 倍の大きさにするルールを追加します。

```css
video::cue {
  font-size: 1.2rem;
}
```

次に、上記のタグをそれぞれ違う色でスタイル設定します。

```css
video::cue(u) {
  color: green;
}

video::cue(b) {
  color: purple;
}

video::cue(i) {
  color: red;
}

video::cue(c) {
  color: lightpurple;
}
```

#### クラスによるスタイル設定

2 つ目のキューは、最初のキューの直後に表示され、同じタグがあります。しかし、すべて `myclass` クラスが適用されています。

```js
track.addCue(
  new VTTCue(
    1,
    6,
    "スタイル: クラスマークアップ: <b.myclass>太字</b> <u.myclass>下線</u> <i.myclass>斜体</i> <c.myclass>クラス</c>",
  ),
);
```

`c.myclass`の特定の仕様を除いて、`.myclass` クラスを持つすべてのアイテムを水色の文字色でスタイル設定します。

```css
video::cue(.myclass) {
  color: lightblue;
}

video::cue(c.myclass) {
  color: blue;
}
```

#### 属性を使用したスタイル設定

次の 2 つのキューは 2 秒後と 3 秒後に表示されます。
最初のキューは `lang` タグでマークアップされた英語の 3 つのロケールのテキストを表示し、2 つ目は "Bob" 属性を持つ `<v>`（音声）タグを表示します。

```js
track.addCue(
  new VTTCue(
    2,
    6,
    "<lang en>言語マークアップ: 'en'</lang>  <lang en-GB>テキスト: 'en-GB'</lang> <lang en-US>テキスト: 'en-US'</lang>",
  ),
);

track.addCue(new VTTCue(3, 6, "<v Bob>ボブの声</v>"));
```

`lang` 属性セレクターを使用して、各言語に異なる文字色を与えています。

```css
video::cue([lang="en"]) {
  color: lightgreen;
}

video::cue([lang="en-GB"]) {
  color: darkgreen;
}

video::cue(:lang(en-US)) {
  color: #6082b6;
}
```

次に、`v` タグと `voice` の属性セレクターを使用して、"ボブの声" のテキストをオレンジ色にします。

```css
video::cue(v[voice="Bob"]) {
  color: orange;
}
```

#### 結果

例では、上記のスタイル設定に一致する色でキューを表示する必要があります（テキストに色が付いていない場合は、ブラウザーが `::cue` に対応していません）。

{{EmbedLiveSample('More cue styling examples','400','330')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の [`::cue` および `::cue()`](/ja/docs/Web/CSS/::cue) 擬似要素
