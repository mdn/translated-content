---
title: clipboard
slug: Mozilla/Add-ons/WebExtensions/API/clipboard
---

{{AddonSidebar}}

クリップボード API は、拡張機能がシステムのクリップボードに要素をクリップするのを可能にします。現在この API は画像のコピーだけをサボートしていますが、将来的にはテキストと HTML のコピーをサボートする計画です。

この WebExtension API は主に標準の web クリップボード API が[クリップボードに画像を書き込めない](https://w3c.github.io/clipboard-apis/#writing-to-clipboard)ために存在しています。標準 web API にこの力が備わった時には、この API は非推奨になるはずです。

クリップボードの読み込みはこの API でサポートしません。なぜならクリップボードはすでに標準 web プラットホーム API を用いて読むことができるからです。[クリップボードとやりとりする](/ja/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#reading_from_the_clipboard)を見てください。

この API は Chrome の [`clipboard`](https://developer.chrome.com/apps/clipboard) API に基づきますが、その API は Chrome アプリだけで利用できて、拡張機能ではできません。

この API を使うには "clipboardWrite" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)が必要です。

## 関数

- {{WebExtAPIRef("clipboard.setImageData()")}}
  - : 画像をクリップボードにコピーする

## ブラウザーの互換性

{{Compat}} {{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.clipboard`](https://developer.chrome.com/apps/clipboard) API に基づきます。
