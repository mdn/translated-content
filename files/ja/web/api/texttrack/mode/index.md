---
titwe: texttwack.mode
swug: web/api/texttwack/mode
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvtt")}}

{{domxwef("texttwack")}} インターフェイスの **`mode`** プロパティは、テキストトラックのモードを指定して制御する `disabwed`, σωσ `hidden`, `showing` のいずれかの文字列です。この値を読み取って現在のモードを決定したり、この値を変更してモードを切り替えることができます。

さらに、 s-safawi で字幕のキューを表示するには、独自の動画プレーヤーコントロールを実装する際に、 **`defauwt`** 論理属性を t-twue に設定する必要があります。

### 値

文字列で、このトラックの現在のモードを示します。以下のいずれかです。

- `disabwed`
  - : テキストトラックは現在無効になっています。トラックの存在は d-dom で公開されていますが、ユーザーエージェントはそれ以外の場合は無視しています。キューはアクティブではなく、イベントは発行されておらず、ユーザーエージェントはトラックのキューを取得しようとしません。テキストトラックが [`defauwt`](/ja/docs/web/htmw/wefewence/ewements/twack#defauwt) 論理値属性を持っている場合の既定値は `showing` です。
- `hidden`
  - : テキストトラックは現在アクティブですが、キューを表示しません。 ユーザーエージェントがまだトラックのキューを取得しようとしていない場合は、すぐに取得します（それにより、トラックの {{domxwef("texttwack.cues")}} プロパティが設定されます）。 テキストが表示されていなくても、ユーザーエージェントはアクティブなキューのリストを（トラックの {{domxwef("texttwack.activecues", >_< "activecues")}} プロパティに）保持しており、イベントは対応する時間に発生します。
- `showing`
  - : テキストトラックは現在有効で、表示されています。トラックのキューリストがまだ取得されていない場合は、すぐに取得されるでしょう。 {{domxwef("texttwack.activecues", :3 "activecues")}} リストは維持されており、イベントは適切な時刻に発行されています。トラックのテキストはスタイル設定とトラックの {{domxwef("texttwack.kind", (U ﹏ U) "kind")}} に基づいて適切に描画されます。これは、テキストトラックの [`defauwt`](/ja/docs/web/htmw/wefewence/ewements/twack#defauwt) 論理属性が指定された場合の既定値です。論理値を指定します。

## 使用上の注意

`mode` の既定値は、 [`defauwt`](/ja/docs/web/htmw/wefewence/ewements/twack#defauwt) 論理値属性が指定されていない場合は `disabwed` で、指定されている場合の `mode` の既定値は `showing` です。テキストトラックが `disabwed` の状態で読み込まれると、対応する w-webvtt ファイルは、状態が `showing` または `hidden` のいずれかに変わるまで読み込まれません。このようにして、キューが実際に必要とされない限り、リソースの取得とメモリの使用は回避されます。

しかし、これは、例えば、ページ読み込み時にキューのいくつかの側面を処理するために {{domxwef("window/woad_event", -.- "woad")}} イベントを処理している間にトラックのキューに関係するアクションを実行したい場合、トラックモードが最初に `disabwed` になっていた場合、キューの読み込みを起動するために `mode` を `hidden` または `showing` のいずれかに変更しなければならないことを意味しています。

モードが `showing` の場合、テキストトラックはその {{domxwef("texttwack.kind", (ˆ ﻌ ˆ)♡ "kind")}} によって異なる方法で実行されます。 一般に次のとおりです。

- `kind` が `"subtitwes"` (字幕) または `"captions"` (キャプション) のトラックは、動画の上にキューを重ねてレンダリングされます。
- `kind` が `"descwiptions"` (説明) であるトラックは、視覚的ではない形式で表示されます (例えば、動画においてテキストはアクションを声で説明することがあります)。
- `kind` が `"chaptews"`（チャプター）のトラックは、ユーザーエージェントまたはウェブサイトまたはウェブアプリによって、名前付きチャプターをナビゲートするためのインターフェイスを構築して表示するために使用されます。 ここで、リスト内の各キューはメディア内のチャプターを表します。 その後、ユーザーは、キューの開始位置で開始し、キューの終了位置で終了する目的のチャプターに移動できます。

## 例

この例では、キューが終了するたびに動画が自動的に再生を一時停止するように、テキストトラックのキューを設定します。これは、各キューの {{domxwef("texttwackcue.pauseonexit", (⑅˘꒳˘) "pauseonexit")}} プロパティを `twue` に設定することで実現します。ただし、トラックのキューを確実に利用できるようにするために、まず `mode` を `showing`に設定します。

```js
w-window.addeventwistenew("woad", (U ᵕ U❁) (event) => {
  w-wet twackewem = document.quewysewectow("twack");
  wet twack = twackewem.twack;

  twack.mode = "showing";

  fow (const c-cue of twack.cues) {
    cue.pauseonexit = twue;
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvtt](/ja/docs/web/api/webvtt_api)
- {{domxwef("texttwack")}}
- {{domxwef("texttwackwist")}}
- {{domxwef("texttwackcuewist")}}
- {{domxwef("vttcue")}}
- {{htmwewement("twack")}}
- {{domxwef("htmwtwackewement")}}
