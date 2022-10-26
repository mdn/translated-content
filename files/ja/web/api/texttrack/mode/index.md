---
title: TextTrack.mode
slug: Web/API/TextTrack/mode
---

{{APIRef("WebVTT")}}

{{domxref("TextTrack")}} インターフェイスの **`mode`** プロパティは、テキストトラックのモードを指定して制御する `disabled`, `hidden`, `showing` のいずれかの文字列です。この値を読み取って現在のモードを決定したり、この値を変更してモードを切り替えることができます。

> **メモ:** さらに、 Safari でサブタイトルのキューを表示するには、独自のビデオプレーヤーコントロールを実装する際に、 **`default`** 論理値属性を true に設定する必要があります。

## 構文

```
var mode = textTrack.mode;

textTrack.mode = "disabled" | "hidden" | "showing";
```

### 値

トラックの現在のモードを示す {{domxref("DOMString")}}。 テキストトラックモードは、[テキストトラックモード定数](#text_track_mode_constants)にリストされている値の 1 つです。

#### テキストトラックモード定数

テキストトラックモードは IDL 列挙型 `TextTrackMode` を使用して識別されることもあり、次のいずれかの値にする必要があります。

- `disabled`
  - : テキストトラックは現在無効になっています。トラックの存在は DOM で公開されていますが、ユーザーエージェントはそれ以外の場合は無視しています。キューはアクティブではなく、イベントは発行されておらず、ユーザーエージェントはトラックのキューを取得しようとしません。テキストトラックが {{htmlattrxref("default", "track")}} 論理値属性を持っている場合の既定値は `showing` です。
- `hidden`
  - : テキストトラックは現在アクティブですが、キューを表示しません。 ユーザーエージェントがまだトラックのキューを取得しようとしていない場合は、すぐに取得します（それにより、トラックの {{domxref("TextTrack.cues")}} プロパティが設定されます）。 テキストが表示されていなくても、ユーザーエージェントはアクティブなキューのリストを（トラックの {{domxref("TextTrack.activeCues", "activeCues")}} プロパティに）保持しており、イベントは対応する時間に発生します。
- `showing`
  - : テキストトラックは現在有効になっており、表示しています。トラックのキューリストをまだ取得していない場合は、すぐに取得します。 {{domxref("TextTrack.activeCues", "activeCues")}} リストは維持されており、イベントは適切なタイミングで発生します。 トラックのテキストも、スタイリングとトラックの {{domxref("TextTrack.kind", "kind")}} に基づいて適切に描画します。

## 使用上の注意

`mode` の既定値は、 {{htmlattrxref("default", "track")}} 論理値属性が指定されていない場合は `disabled` で、指定されている場合の `mode` の既定値は `showing` です。テキストトラックが `disabled` の状態で読み込まれると、対応する WebVTT ファイルは、状態が `showing` または `hidden` のいずれかに変わるまで読み込まれません。このようにして、キューが実際に必要とされない限り、リソースの取得とメモリの使用は回避されます。

しかし、これは、例えば、ページ読み込み時にキューのいくつかの側面を処理するために {{event("load")}} イベントを処理している間にトラックのキューに関係するアクションを実行したい場合、トラックモードが最初に `disabled` になっていた場合、キューの読み込みを起動するために `mode` を `hidden` または `showing` のいずれかに変更しなければならないことを意味しています。

モードが `showing` の場合、テキストトラックはその {{domxref("TextTrack.kind", "kind")}} によって異なる方法で実行されます。 一般に次のとおりです。

- `kind` が `subtitles` (字幕) または `captions` (キャプション) のトラックは、動画の上にキューを重ねてレンダリングされます。
- `kind` が `descriptions` (説明) であるトラックは、視覚的ではない形式で表示されます (例えば、動画においてテキストはアクションを声で説明することがあります)。
- `kind` が `chapters`（チャプター、章）のトラックは、ユーザーエージェントまたはウェブサイトまたはウェブアプリによって、名前付きチャプターをナビゲートするためのインターフェイスを構築して表示するために使用されます。 ここで、リスト内の各キューはメディア内のチャプターを表します。 その後、ユーザーは、キューの開始位置で開始し、キューの終了位置で終了する目的のチャプターに移動できます。

## 例

この例では、キューが終了するたびに動画が自動的に再生を一時停止するように、テキストトラックのキューを設定します。これは、各キューの {{domxref("TextTrackCue.pauseonExit", "pauseOnExit")}} プロパティを `true` に設定することで実現します。ただし、トラックのキューを確実に利用できるようにするために、まず `mode` を `showing`に設定します。

```js
window.addEventListener("load", event => {
  let trackElem = document.querySelector("track");
  let track = trackElem.track;

  track.mode = "showing";

  for (let index=0; index < track.cues.length; index++) {
    let cue = track.cues[index];
    cue.pauseOnExit = true;
  };
});
```

## 仕様書

| 仕様書                                                                           | 状態                                 | 備考 |
| -------------------------------------------------------------------------------- | ------------------------------------ | ---- |
| {{ SpecName('HTML WHATWG', '#dom-texttrack-mode', 'mode') }} | {{ Spec2('HTML WHATWG') }} |      |

## ブラウザーの互換性

{{Compat("api.TextTrack.mode")}}

## 関連情報

- [WebVTT](/ja/docs/Web/API/WebVTT_API)
- {{domxref("TextTrack")}}
- {{domxref("TextTrackList")}}
- {{domxref("TextTrackCueList")}}
- {{domxref("VTTCue")}}
- {{HTMLElement("track")}}
- {{domxref("HTMLTrackElement")}}
