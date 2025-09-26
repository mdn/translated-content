---
title: "HTMLImageElement: decode() メソッド"
short-title: decode()
slug: Web/API/HTMLImageElement/decode
l10n:
  sourceCommit: 9cf29fafb8d95a3d5fa3a3da533e9e8d36b67960
---

{{APIRef("HTML DOM")}}

**`decode()`** は {{domxref("HTMLImageElement")}} インターフェイスのメソッドで、画像がデコードされ、 DOM に追加しても安全になったときに解決されるプロミス ({{jsxref("Promise")}}) を返します。

これは、画像を DOM 内の要素に装着する（または新しい要素として DOM に追加する）前に画像の読み込みを開始し、 DOM に追加された時点ですぐに画像をレンダリングできるようにするために使用します。これにより、DOM に画像を追加した後の次のフレームのレンダリングで、画像の読み込み中に遅延が発生するのを防ぐことができます。

## 構文

```js-nolint
decode()
```

### 引数

なし。

### 返値

{{jsxref('Promise')}} で、画像データが利用できるようになったときに `undefined` で履行されます。

### 例外

- `EncodingError`
  - : 画像のデコード中にエラーが発生したことを示す {{domxref('DOMException')}} です。

## 使用上の注意

`decode()` の潜在的な使用例の一つです。非常に大きな画像を読み込む場合（例えばオンラインのフォトアルバムで）、最初は低解像度のサムネイル画像を表示し、その後、新しい {{domxref("HTMLImageElement")}} をインスタンス化してそのソースにフル解像度画像の URL を設定し、`decode()` を使ってプロミスを取得し、フル解像度画像が使えるようになったときに解決することによって、画像をフル解像度画像と交換することが可能です。その際、低解像度の画像を、現在利用可能なフル解像度の画像に置き換えることができます。

## 例

### 基本的な使い方

次の例では、 `decode()` メソッドを使って、画像が DOM に追加されるタイミングを制御しています。

```js
const img = new Image();
img.src = "nebula.jpg";
img
  .decode()
  .then(() => {
    document.body.appendChild(img);
  })
  .catch((encodingError) => {
    // エラー時に何かをする。
  });
```

> [!NOTE]
> {{jsxref('Promise')}} を返すメソッドがなければ、 {{domxref("Window/load_event", "load")}} イベントハンドラーで画像を DOM に追加し、 {{domxref("HTMLElement/error_event", "error")}} イベントハンドラーでエラーを処理することになります。

### 空の画像の防止

下記の例では、画像がダウンロードされると、ページに空の画像が表示されることになります。

```js
const img = new Image();
img.src = "img/logo.png";
document.body.appendChild(img);
```

`decode()` を使用すると、画像が完全にダウンロードされデコードされるまで DOM への挿入を遅らせることができ、空の画像の問題を避けることができます。

```js
async function getImage() {
  const img = new Image();
  img.src = "img/logo.png";
  await img.decode();
  document.body.appendChild(img);
  const p = document.createElement("p");
  p.textContent = "Image is fully loaded!";
  document.body.appendChild(p);
}
```

これは、既存の画像と新しい画像を動的に入れ替える場合に具体的な有益な方法です。また、画像のデコード中に、このコード以外の無関係な描画が中断されるのを防ぐこともできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) (tunetheweb.com, 2023)
- {{domxref("HTMLImageElement.decoding")}} プロパティ
