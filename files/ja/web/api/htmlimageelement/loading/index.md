---
title: "HTMLImageElement: loading プロパティ"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} の **`loading`** プロパティは、文字列で、{{Glossary("user agent", "ユーザーエージェント")}}に現在のウィンドウの{{Glossary("visual viewport", "視覚ビューポート")}}の外にある画像の読み込みをどのように処理するかのヒントを提供するものです。

これは、最初のページ読み込み時にすぐに画像を読み込むのではなく、必要だと予想されるまで画像の読み込みを延期することで、文書のコンテンツの読み込みを最適化するのに役立ちます。

## 値

文字列で、ページのパフォーマンスを最適化するために，画像の読み込みをどのようにスケジュールするのが最適かについて，ユーザーエージェントにヒントを提供します。
指定可能な値は次のとおりです。

- `eager`
  - : 既定の動作で、 `eager` は `<img>` 要素が処理されたらすぐに画像を読み込むようにブラウザーに指示します。
- `lazy`
  - : ブラウザーがすぐに必要だと判断するまで、画像の読み込みを保留するようにユーザーエージェントに指示します。
    例えば、ユーザーがドキュメントをスクロールしている場合、 `lazy` の値は、ウィンドウの{{Glossary("visual viewport", "視覚ビューポート")}}に表示される直前にのみ画像を読み込むようにします。

## 使用上の注意

> [!NOTE]
> Firefox では、`loading` 属性は `src` 属性の前に定義しなければならず、そうでなければ効果がありません（[Firefox バグ 1647077](https://bugzil.la/1647077)）。

### JavaScript を有効にする必要がある

読み込みは、 JavaScript が有効な場合のみ遅延されます。
ユーザーエージェントがスクリプト無効時の遅延読み込みに対応している場合でも、サーバーがリクエストされた画像の数とタイミングを追跡できるように、ページのマークアップに戦略的に画像を配置することで、サイトがセッションを通してユーザーのおおよそのスクロール位置を追跡することが可能だからです。

### load イベントのタイミング

{{domxref("Window.load_event", "load")}} イベントは、文書の処理が完了した時に発行されます。
画像が積極的 (eager) に読み込まれる場合（これは既定です）、文書内のすべての画像を取得してから `load` イベントが発生します。

`loading` に `lazy` の値を指定することで、画像の要求、取得、処理にかかる時間の分だけ `load` 属性が遅延するのを防ぐことができます。

`loading` 属性が `lazy` に設定されている画像で、最初のページ読み込み時に視覚ビューポート内に配置されているものは、レイアウトが確認されるとすぐに読み込まれますが、その読み込みによって `load` イベントが遅延することはありません。
言い換えると、これらの画像は `<img>` 要素を処理する際にすぐに読み込まれるわけではなく、最初のページ読み込みの一部として読み込まれます。ただ、 `load` イベントのタイミングには影響を与えません。

つまり、 `load` が実行されたとき、視覚ビューポートにある遅延 (lazy) で読み込まれた画像はまだ表示されていない可能性があるということです。

### 画像の遅延読み込み時の要素ずれの防止

`loading` 属性が `lazy` に設定されているために読み込みが遅れていた画像がようやく読み込まれると、ブラウザーは画像のスタイルと固有の寸法に基づいて {{HTMLElement("img")}} 要素の最終サイズを決定し、必要に応じて文書を再フローして画像に合わせて要素に加えられたサイズ変更に基づき、要素の位置を更新します。

この再フローを防ぐには、画像要素の [`width`](/ja/docs/Web/HTML/Reference/Elements/img#width) および [`height`](/ja/docs/Web/HTML/Reference/Elements/img#height) 属性を使用して画像の表示サイズを明示的に指定してください。
この方法で固有の{{glossary("aspect ratio", "アスペクト比")}}を設定すれば、文書の読み込みに関して要素が動いてしまい、遅延読み込みと再フローのタイミングによっては、良くて不愉快にさせたり、最悪の場合は間違ったものをクリックさせてしまう原因となることを防ぐことができます。

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
- [ウェブパフォーマンス](/ja/docs/Learn_web_development/Extensions/Performance)（MDN 学習領域）
- [遅延読み込み](/ja/docs/Web/Performance/Guides/Lazy_loading)（MDN ウェブパフォーマンスガイド）
