---
title: "HTMLImageElement: complete プロパティ"
short-title: complete
slug: Web/API/HTMLImageElement/complete
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} インターフェイスの **`complete`** プロパティは読み取り専用で、画像の読み込みが完了したかどうかを示す論理値です。

## 値

論理値で、画像の読み込みが完了した場合は `true` となります。
それ以外の場合は `false` となります．

以下のいずれかを満たす場合、画像の読み込みが完了したと見なされます。

- [`src`](/ja/docs/Web/HTML/Reference/Elements/img#src) 属性も [`srcset`](/ja/docs/Web/HTML/Reference/Elements/img#srcset) 属性も指定されていない場合
- `srcset` 属性が存在せず、`src` 属性は指定されていても空文字列 (`""`) である場合
- 画像リソースが完全に取得され、レンダリング/合成のためにキューに入れられた場合
- 画像要素が事前に、画像が完全に利用可能であり、使用可能であると判断している場合
- 画像が「壊れている」。つまり、エラーが発生したか、画像の読み込みが無効になっているために画像の読み込みができない場合

画像を非同期で受け取る可能性があるため、スクリプトの実行中に `complete` の値が変更される可能性があることに留意してください。

## 例

画像をライトボックスモードで開いて、見やすくしたり、画像を編集したりできるフォトライブラリーアプリを考えてみましょう。これらの写真は非常に大きいので、読み込みを待つ必要がなくなるよう、コードでは `async`/`await` を使用してバックグラウンドで画像を読み込んでいます。

しかし、画像の読み込みが完了したときにのみ実行する必要がある他のコードがあるとします。
例えば、ライトボックス内の画像に対して赤目除去を実行するコマンドなどです。理想的には、画像が完全に読み込まれていなければこのコマンドは実行されませんが、信頼性を向上させるために、これが事実であることを確認する必要があります。

そこで、赤目除去のトリガーとなるボタンから呼び出される `fixRedEyeCommand()` 関数は、処理を実行する前にライトボックス画像の `complete` プロパティの値をチェックします。これは以下のコードで実証されています。

```js
let lightboxElem = document.querySelector("#lightbox");
let lightboxImgElem = lightboxElem.querySelector("img");
let lightboxControlsElem = lightboxElem.querySelector(".toolbar");

async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

async function lightBox(url) {
  lightboxElem.style.display = "block";
  await loadImage("https://somesite.net/huge-image.jpg", lightboxImgElem);
  lightboxControlsElem.disabled = false;
}

// …

function fixRedEyeCommand() {
  if (lightboxElem.style.display === "block" && lightboxImgElem.complete) {
    fixRedEye(lightboxImgElem);
  } else {
    /* 画像が完全に読み込まれるまで開始することはできない */
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
