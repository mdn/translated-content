---
title: "Clipboard: clipboardchange イベント"
slug: Web/API/Clipboard/clipboardchange_event
l10n:
  sourceCommit: 6f8aa84681bf6f94fd93f5d3f999a4d4c0764344
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`clipboardchange`** は {{domxref("Clipboard")}} インターフェイスのイベントで、システムのクリップボードのコンテンツが何らかの方法で変更された際に発生します。例えば、システムのコピーコマンドや、{{domxref("Clipboard.writeText()")}} などの API メソッドによって変更された場合などが該当します。

`clipboardchange` イベントは、[持続的な有効化](/ja/docs/Glossary/Sticky_activation)が行われた場合、または `clipboard-read` 権限が付与された後のみ発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("clipboardchange", (event) => { })

onclipboardchange = (event) => { }
```

## イベント型

{{domxref("ClipboardChangeEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ClipboardChangeEvent")}}

## 例

### システムのコピーコマンドの待ち受け

この例では、システムのコピーコマンドを待ち受けし、クリップボードにコピーされたコンテンツを表示させる方法を示します。

#### HTML

HTML は 3 つの {{htmlelement("p")}} 要素で構成されています。1 つはクリップボードの内容を表示させるためのもの、残りの 2 つはコピー用のサンプルテキストを含むものです。

```html live-sample___basic-usage
<p id="output">コピーされたテキスト:</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mattis purus.
  Donec at ipsum libero. Maecenas at dictum turpis. Vivamus eget aliquet augue.
  Aenean tempor dictum posuere. Vestibulum vehicula, nulla ac convallis feugiat,
  tortor velit lobortis est, vitae convallis velit libero vel urna. Suspendisse
  potenti. In bibendum ex et pellentesque gravida. Phasellus magna risus,
  euismod vitae sem in, viverra venenatis lacus. Sed dignissim risus eu congue
  consequat. Vestibulum nec feugiat libero. Maecenas quis sodales lorem, eu
  luctus nisl. Cras vel diam sed lacus finibus elementum sed sed nunc.
</p>

<p>
  Nam ac metus eget est bibendum pulvinar. Nunc a venenatis lorem. Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. In dignissim, arcu ornare luctus
  pharetra, dui velit faucibus leo, ac posuere ipsum risus vel ligula. Morbi
  varius, felis et ornare efficitur, tortor erat imperdiet lacus, non rhoncus
  lectus sapien sit amet augue. Suspendisse potenti. Sed fringilla mi augue, at
  laoreet felis varius in. Donec venenatis gravida lacus ut rutrum. Donec
  suscipit egestas justo. Proin semper nibh tortor, sit amet elementum metus
  placerat quis. Sed consectetur leo sed lorem varius, sit amet ultrices sem
  tincidunt. Vivamus facilisis at velit eget commodo.
</p>
```

```css hidden live-sample___basic-usage
body {
  margin: 0 5px;
}
#output {
  font-family: "Helvetica", "Arial";
  padding: 10px;
  border: 2px solid #cccccc;
  border-radius: 5px;
}
```

#### JavaScript

このスクリプトでは、まず出力用の `<p>` 要素への参照を取得します。次に、`clipboardchange` イベントハンドラーをブラウザーの {{domxref("Clipboard")}} オブジェクトに対して定義します。イベントが発生すると、{{domxref("Clipboard.readText()")}} メソッドを呼び出し、クリップボードにコピーされたばかりのテキストを読み取ります。結果が返されると、それを出力用段落の `textContent` の値として設定します。

```js live-sample___basic-usage
const outputPara = document.querySelector("#output");

navigator.clipboard.addEventListener("clipboardchange", (event) => {
  navigator.clipboard
    .readText()
    .then((text) => (outputPara.textContent = `コピーされたテキスト: ${text}`));
});
```

#### 結果

レンダリングされた例は以下の通りです。

{{EmbedLiveSample("basic-usage", '100%', "350px", "", "", "", "clipboard-read")}}

例文からテキストを選択し、<kbd>Ctrl</kbd> + <kbd>C</kbd>（Mac をお使いの場合は <kbd>Cmd</kbd> + <kbd>C</kbd>）を使用してクリップボードにコピーしてみてください。まず試す際は、クリップボードの内容を読み取るためにその権限を要求するプロンプトが表示されます。その後（またはそれ以降の試行ではすぐに）、コピーしたテキストが UI 上部の出力段落に表示されるはずです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ClipboardChangeEvent")}}
- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
