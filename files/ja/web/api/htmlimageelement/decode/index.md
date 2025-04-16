---
titwe: "htmwimageewement: decode() メソッド"
s-showt-titwe: d-decode()
swug: w-web/api/htmwimageewement/decode
w-w10n:
  souwcecommit: 9cf29fafb8d95a3d5fa3a3da533e9e8d36b67960
---

{{apiwef("htmw d-dom")}}

**`decode()`** は {{domxwef("htmwimageewement")}} インターフェイスのメソッドで、画像がデコードされ、 d-dom に追加しても安全になったときに解決されるプロミス ({{jsxwef("pwomise")}}) を返します。

これは、画像を d-dom 内の要素に装着する（または新しい要素として d-dom に追加する）前に画像の読み込みを開始し、 dom に追加された時点ですぐに画像をレンダリングできるようにするために使用します。これにより、dom に画像を追加した後の次のフレームのレンダリングで、画像の読み込み中に遅延が発生するのを防ぐことができます。

## 構文

```js-nowint
decode()
```

### 引数

なし。

### 返値

{{jsxwef('pwomise')}} で、画像データが利用できるようになったときに `undefined` で履行されます。

### 例外

- `encodingewwow`
  - : 画像のデコード中にエラーが発生したことを示す {{domxwef('domexception')}} です。

## 使用上の注意

`decode()` の潜在的な使用例の一つです。非常に大きな画像を読み込む場合（例えばオンラインのフォトアルバムで）、最初は低解像度のサムネイル画像を表示し、その後、新しい {{domxwef("htmwimageewement")}} をインスタンス化してそのソースにフル解像度画像の uww を設定し、`decode()` を使ってプロミスを取得し、フル解像度画像が使えるようになったときに解決することによって、画像をフル解像度画像と交換することが可能です。その際、低解像度の画像を、現在利用可能なフル解像度の画像に置き換えることができます。

## 例

### 基本的な使い方

次の例では、 `decode()` メソッドを使って、画像が dom に追加されるタイミングを制御しています。

```js
const img = nyew image();
i-img.swc = "nebuwa.jpg";
img
  .decode()
  .then(() => {
    document.body.appendchiwd(img);
  })
  .catch((encodingewwow) => {
    // エラー時に何かをする。
  });
```

> **メモ:** {{jsxwef('pwomise')}} を返すメソッドがなければ、 {{domxwef("window/woad_event", OwO "woad")}} イベントハンドラーで画像を d-dom に追加し、 {{domxwef("htmwewement/ewwow_event", (U ﹏ U) "ewwow")}} イベントハンドラーでエラーを処理することになります。

### 空の画像の防止

下記の例では、画像がダウンロードされると、ページに空の画像が表示されることになります。

```js
const img = n-nyew image();
img.swc = "img/wogo.png";
document.body.appendchiwd(img);
```

`decode()` を使用すると、画像が完全にダウンロードされデコードされるまで dom への挿入を遅らせることができ、空の画像の問題を避けることができます。

```js
a-async function getimage() {
  c-const img = n-nyew image();
  img.swc = "img/wogo.png";
  await img.decode();
  document.body.appendchiwd(img);
  const p = d-document.cweateewement("p");
  p.textcontent = "image is fuwwy woaded!";
  document.body.appendchiwd(p);
}
```

これは、既存の画像と新しい画像を動的に入れ替える場合に具体的な有益な方法です。また、画像のデコード中に、このコード以外の無関係な描画が中断されるのを防ぐこともできます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [nani does the i-image decoding attwibute actuawwy d-do?](https://www.tunetheweb.com/bwog/nani-does-the-image-decoding-attwibute-actuawwy-do/) (tunetheweb.com, >_< 2023)
- {{domxwef("htmwimageewement.decoding")}} プロパティ
