---
title: HTMLImageElement.loading
slug: Web/API/HTMLImageElement/loading
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} の **`loading`** プロパティは、文字列で、{{Glossary("user agent", "ユーザーエージェント")}}に現在のウィンドウの{{Glossary("visual viewport", "視覚ビューポート")}}の外にある画像の読み込みをどのように処理するかのヒントを提供するものです。

これは、最初のページ読み込み時にすぐに画像を読み込むのではなく、必要だと予想されるまで画像の読み込みを延期することで、文書のコンテンツの読み込みを最適化するのに役立ちます。

## 値

文字列で、ページのパフォーマンスを最適化するために，画像の読み込みをどのようにスケジュールするのが最適かについて，ユーザーエージェントにヒントを提供します。指定可能な値は次のとおりです。

- `eager`
  - : 既定の動作で、 `eager` は `<img>` 要素が処理されたらすぐに画像を読み込むようにブラウザーに指示します。
- `lazy`
  - : ブラウザーがすぐに必要だと判断するまで、画像の読み込みを保留するようにユーザーエージェントに指示します。例えば、ユーザーがドキュメントをスクロールしている場合、 `lazy` の値は、ウィンドウの{{Glossary("visual viewport", "視覚ビューポート")}}に表示される直前にのみ画像を読み込むようにします。

## 使用上の注意

### load イベントのタイミング

{{domxref("Window.load_event", "load")}} イベントは、文書の処理が完了した時に発行されます。画像が積極的 (eager) に読み込まれる場合（これは既定です）、文書内のすべての画像を取得してから `load` イベントが発生します。

`loading` に `lazy` の値を指定することで、画像の要求、取得、処理にかかる時間の分だけ `load` 属性が遅延するのを防ぐことができます。

`loading` 属性が `lazy` に設定されている画像で、最初のページ読み込み時に視覚ビューポート内に配置されているものは、レイアウトが確認されるとすぐに読み込まれますが、その読み込みによって `load` イベントが遅延することはありません。
言い換えると、これらの画像は `<img>` 要素を処理する際にすぐに読み込まれるわけではなく、最初のページ読み込みの一部として読み込まれます。ただ、 `load` イベントのタイミングには影響を与えません。

つまり、 `load` が実行されたとき、視覚ビューポートにある遅延 (lazy) で読み込まれた画像はまだ表示されていない可能性があるということです。

### 画像の遅延読み込み時の要素ずれの防止

`loading` 属性が `lazy` に設定されているために読み込みが遅れていた画像がようやく読み込まれると、ブラウザーは画像のスタイルと固有の寸法に基づいて {{HTMLElement("img")}} 要素の最終サイズを決定し、必要に応じて文書を再フローして画像に合わせて要素に加えられたサイズ変更に基づき、要素の位置を更新します。

この再フローを防ぐには、画像要素の {{htmlattrxref("width", "img")}} および {{htmlattrxref("height", "img")}} 属性を使用して画像の表示サイズを明示的に指定してください。この方法で固有のアスペクト比を設定すれば、文書の読み込みに関して要素が動いてしまい、遅延読み込みと再フローのタイミングによっては、良くて不愉快にさせたり、最悪の場合は間違ったものをクリックさせてしまう原因となることを防ぐことができます。

## 例

以下に示す `addImageToList()` 関数は、実際に必要になるまでネットワークから画像を読み込まないように遅延読み込みを使用して、写真のサムネイルをアイテムのリストに追加するものです。

```js
function addImageToList(url) {
  const list = document.querySelector("div.photo-list");

  let newItem = document.createElement("div");
  newItem.className = "photo-item";

  let newImg = document.createElement("img");
  newImg.loading = "lazy";
  newImg.width = 320;
  newImg.height = 240;
  newImg.src = url;

  newItem.appendChild(newImg);
  list.appendChild(newItem);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("img")}} 要素
- [ウェブパフォーマンス](/ja/docs/Learn/Performance)（MDN 学習領域）
- [遅延読み込み](/ja/docs/Web/Performance/Lazy_loading)（MDN ウェブパフォーマンスガイド）
- [画像の遅延読み込みを使用する](/ja/docs/Learn/HTML/Howto/Author_fast-loading_HTML_pages#use_lazy_loading_for_images)
