---
title: Clipboard.read()
slug: Web/API/Clipboard/read
---

{{APIRef("Clipboard API")}}

**`read()`** は {{domxref("Clipboard")}} インターフェイスのメソッドで、クリップボードの内容のコピーを要求し、返されたプロミス ({{jsxref("Promise")}}) が解決されるとそのデータを取得できます。 {{domxref("Clipboard.readText", "readText()")}} とは異なり、 `read()` メソッドは画像など任意のデータを取得することができます。

クリップボードから読み込みを行うためには、まず `"clipboard-read"` 権限を取得する必要があります。

> [!NOTE]
> 非同期のクリップボード API と[権限 API](/ja/docs/Web/API/Permissions_API) は、ほとんどのブラウザーでは組み込み途中の状態です。そのため、権限などが公式仕様とは異なっていることがよくあります。これらのメソッドを使う前に[互換性一覧表](#ブラウザーの互換性)を確認してください。

## 構文

```js
read();
```

### 引数

なし。

### 返値

クリップボードの内容を保持する {{domxref("ClipboardItem")}} の配列に解決されるプロミス ({{jsxref("Promise")}})。クリップボードへのアクセスが許可されない場合、このプロミスは拒否されます。

## 例

### 画像データの読み取り

この例では `read()` を使用して、画像データをクリップボードから読み取ります。

左側の蝶の画像をコンテキストメニューの「画像のコピー」でコピーし、右側の空の枠内をクリックしてみてください。

この例では、クリップボードの読み取りを確認または許可して、画像データを取得し、空のフレームに画像データを表示します。

> [!NOTE]
> 現時点では、Firefoxは `read()` を実装していますが、 `"clipboard-read"` 権限を認識しないため、[権限 API](/ja/docs/Web/API/Permissions_API) を使ってアクセス管理をしようとしてもうまくいきません。

#### HTML

```html
<img id="source" src="butterfly.jpg" alt="A butterfly" />
<img id="destination" />
```

#### CSS

```css
img {
  height: 100px;
  width: 100px;
  margin: 0 1rem;
  border: 1px solid black;
}
```

#### JavaScript

```js
const destinationImage = document.querySelector("#destination");
destinationImage.addEventListener("click", pasteImage);

async function pasteImage() {
  try {
    const permission = await navigator.permissions.query({
      name: "clipboard-read",
    });
    if (permission.state === "denied") {
      throw new Error("Not allowed to read clipboard.");
    }
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      if (!item.types.includes("image/png")) {
        throw new Error("Clipboard contains non-image data.");
      }
      const blob = await item.getType("image/png");
      destinationImage.src = URL.createObjectURL(blob);
    }
  } catch (error) {
    console.error(error.message);
  }
}
```

#### 結果

{{EmbedLiveSample("Reading image data")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
