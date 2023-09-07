---
title: "HTMLImageElement: decode() メソッド"
short-title: decode()
slug: Web/API/HTMLImageElement/decode
---

{{APIRef("HTML DOM")}}

**`decode()`** は {{domxref("HTMLImageElement")}} インターフェイスのメソッドで、画像がデコードされ、 DOM に画像を追加しても安全になったときに解決されるプロミス ({{jsxref("Promise")}}) を返します。

これは、画像を DOM 内の要素に装着する（または新しい要素として DOM に追加する）前に画像の読み込みを開始し、 DOM に追加された時点ですぐに画像をレンダリングできるようにするために使用します。これにより、DOM に画像を追加した後の次のフレームのレンダリングで、画像の読み込み中に遅延が発生するのを防ぐことができます。

## 構文

```js
decode();
```

### 引数

なし。

### 返値

画像データが利用できるようになったときに解決される {{jsxref('Promise')}} です。

### 例外

- `EncodingError`
  - : 画像のデコード中にエラーが発生したことを示す {{domxref('DOMException')}} です。

## 使用上の注意

`decode()` の潜在的な使用例の一つです。非常に大きな画像を読み込む場合（例えばオンラインのフォトアルバムで）、最初は低解像度のサムネイル画像を表示し、その後、新しい {{domxref("HTMLImageElement")}} をインスタンス化してそのソースにフル解像度画像の URL を設定し、`decode()` を使ってプロミスを取得し、フル解像度画像が使えるようになったときに解決することによって、画像をフル解像度画像と交換することが可能です。その際、低解像度の画像を、現在利用可能なフル解像度の画像に置き換えることができます。

## 例

次の例では、`decode()` メソッドを使って、画像が DOM に追加されるタイミングを制御する方法を示しています。{{jsxref('Promise')}} を返すメソッドがなければ、 {{domxref("Window/load_event", "load")}} イベントのハンドラーで、 {{domxref("HTMLImageElement.load_event", "img.onload")}} イベントハンドラーを使うなどして画像を DOM に追加します。エラーは {{domxref("HTMLElement/error_event", "error")}} イベントのハンドラーで処理します。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
