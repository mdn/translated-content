---
title: 編集コンテキスト API
slug: Web/API/EditContext_API
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("EditContext API")}}{{SeeCompatTable}}

**編集コンテキスト API** (EditContext API) を使用すると、{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) による文字変換や絵文字ピッカーなど、プラットフォーム固有の編集関連 UI を含む高度なテキスト入力に対応したリッチテキストエディターをウェブ上に構築できます。

編集コンテキスト API を使うと、任意の技術で独自の編集可能なテキスト領域を描画できます。

## 概念

アプリケーションの編集可能な領域にテキストを入力する際には、複数の要素が関わります。

- **ユーザー**
  - : ユーザーは、キーボード、マウス、音声、その他の入力方式を使ってテキストを入力します。
- **インプットメソッドソフトウェア**
  - : インプットメソッドソフトウェアは、ユーザーの入力をテキストに変換します。たとえば、標準キーボードからのキー入力を日本語、中国語、韓国語の文字に変換する {{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) などです。
- **OS のテキスト入力サービス**
  - : オペレーティングシステムのテキスト入力サービスは、入力方式ソフトウェアとアプリケーションをつなぎます。
- **アプリケーションのテキスト編集コンテキスト**
  - : アプリケーションのテキスト編集コンテキストは、編集中のテキストの状態を提供します。この状態には、テキスト本体、現在の選択範囲、アプリの UI におけるテキストの位置などの情報が含まれます。
- **アプリケーションの編集可能な領域**
  - : アプリケーションの編集可能な領域は、テキストを表示する UI 要素です。

最初の 3 つの要素はオペレーティングシステムによって提供されますが、編集可能な領域とテキスト編集コンテキストを提供するのはアプリケーションの責任です。

ウェブ上の編集可能な領域には、[`<textarea>`](/ja/docs/Web/HTML/Reference/Elements/textarea) 要素、[`<input>`](/ja/docs/Web/HTML/Reference/Elements/input) 要素、または [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性が `true` に設定された要素がよく使われます。これらの要素では、ブラウザーがテキスト編集コンテキストを自動的に提供するため、ウェブ開発者がテキスト入力をサポートするコードを書く必要はありません。

### 独自の編集可能な領域の作成

ウェブ開発者は、編集コンテキスト API を使って独自の編集可能な領域を作成することもできます。たとえば、[`<canvas>`](/ja/docs/Web/HTML/Reference/Elements/canvas) 要素を使ってテキストを描画するリッチテキストエディターを作成できます。この場合、テキスト入力をサポートするコードを自分で書く必要があります。

### ウェブ開発者の責任

`<canvas>` にテキストを描画する場合も、一連の DOM 要素にテキストを表示する場合も、独自の編集可能な領域を実装するなら、代わりに `<textarea>` を使用したときにブラウザーが通常提供する機能を自分で提供する責任があります。具体的には、次のとおりです。

- テキストを描画する。
- 選択範囲を描画する（`<canvas>` ではなく DOM 要素で編集可能な領域を構築した場合、選択範囲はブラウザーが描画します）。
- 選択範囲が変わったときに、OS のテキスト入力サービスに知らせる。
- UI 内でテキストがどこにあるかを OS のテキスト入力サービスに知らせ、入力方式ソフトウェアが正しい位置に IME の変換ウィンドウを表示できるようにする。
- ユーザーが IME の変換ウィンドウ内でテキストを入力している間に、特定のテキスト書式を適用する。

その代わりに、編集コンテキスト API は選択した DOM 要素を編集可能にし、文書のフォーカス順に含めます。また、編集中のテキストの状態に関する情報も提供するため、独自の方法でテキストを描画できます。提供される情報には、次のものがあります。

- 現在のテキスト内容。
- 現在の選択範囲。
- IME による文字変換中かどうか、およびテキスト書式を適用する必要があるかどうか。

### アクセシビリティ

編集コンテキスト API を `<canvas>` 要素と一緒に使用する場合は、支援技術からもテキストにアクセスできるようにしてください。スクリーンリーダーは `<canvas>` 要素内のテキストを読み上げられません。たとえば、スクリーンリーダー向けに、画面外の DOM 要素にテキストの別の表示を用意できます。

### モデルとビューのアーキテクチャ

編集コンテキスト API を使うときは、編集機能をモデルとビューのアーキテクチャとして構築すると便利です。

`EditContext` インスタンスは、編集可能な領域のモデルを表します。テキスト入力を受け取ったときや選択範囲が変わったときに、その内部状態が更新されます。

`EditContext` インスタンスが提供する情報を使って、ビューにテキストと選択範囲を描画できます。ただし、ビューをモデルと完全に一致させる必要はありません。テキストは自由な方法で描画できます。

## インターフェイス

- {{DOMxRef("EditContext")}} {{experimental_inline}}
  - : `EditContext` インターフェイスは、`textarea` などの標準的な編集可能な領域を使うときに通常はブラウザーが透過的に提供するテキスト編集コンテキストを、JavaScript で表現したものです。`EditContext` は、テキスト本体、現在の選択範囲、アプリの UI におけるテキストの位置など、編集中のテキストの状態を提供します。
- {{DOMxRef("TextFormat")}} {{experimental_inline}}
  - : `TextFormat` インターフェイスは、ユーザーが IME の変換ウィンドウ内でテキストを入力しているときに、テキスト範囲へ適用する特定の書式を表します。
- {{domxref("TextUpdateEvent")}} {{experimental_inline}}
  - : `TextUpdateEvent` インターフェイスは、{{domxref("EditContext")}} インスタンスに関連付けられた編集可能なテキスト領域での、テキストまたは選択範囲の更新を表す [DOM イベント](/ja/docs/Web/API/Event)です。
- {{domxref("TextFormatUpdateEvent")}} {{experimental_inline}}
  - : `TextFormatUpdateEvent` インターフェイスは、{{domxref("EditContext")}} インスタンスに関連付けられた編集可能な領域で入力中のテキストに、{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) ウィンドウが適用しようとするテキスト書式のリストを表す [DOM イベント](/ja/docs/Web/API/Event)です。
- {{domxref("CharacterBoundsUpdateEvent")}} {{experimental_inline}}
  - : `CharacterBoundsUpdateEvent` インターフェイスは、{{domxref("EditContext")}} インスタンスに関連付けられた編集可能な領域内の特定の文字の境界情報を求める、オペレーティングシステムからの要求を表す [DOM イベント](/ja/docs/Web/API/Event)です。

## 他のインターフェイスへの拡張

- {{domxref("HTMLElement.editContext")}} {{experimental_inline}}
  - : {{domxref("HTMLElement")}} インターフェイスの `editContext` プロパティは、要素に関連付けられた {{domxref("EditContext")}} オブジェクトを取得および設定します。

## 例

### 基本的な使い方

編集コンテキスト API を使うには、まず {{domxref("EditContext")}} インターフェイスのインスタンスを作成し、{{domxref("HTMLElement/editContext", "editContext")}} プロパティを使って編集可能にしたい DOM 要素に関連付けます。DOM 要素には `<div>` や `<canvas>` 要素を含む任意の要素を指定できます。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

`EditContext` インスタンスは、一度に 1 つの DOM 要素にしか関連付けられません。

`EditContext` インスタンスを DOM 要素に関連付けると、その要素はフォーカス可能になり、文書のフォーカス順に含まれます。ユーザーは好みの入力方式でその要素にテキストを入力でき、`EditContext` インスタンスが発生させるイベントを使ってテキストと選択範囲を描画できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [編集コンテキスト API の使用](/ja/docs/Web/API/EditContext_API/Guide)
