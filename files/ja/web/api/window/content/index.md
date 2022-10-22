---
title: Window.content
slug: Web/API/Window/content
---

{{APIRef}}{{non-standard_header}}

> **メモ:** Firefox 57 以降 (当初はナイトリーのみ)、 `content` および `_content` の変化形はクロームの (特権) コードでのみ利用可能となり、ウェブではどこでも利用できなくなりました。

主となるコンテンツウィンドウを表す [Window object](/ja/docs/Web/API/Window) オブジェクトを返します。これは、`type="content-primary"` 属性を持つ `<browser>` (もしくは `tabbrowser` や `<iframe>`) 要素のある XUL ウィンドウにおいて役立ちます。最も有名な例は、Firefox のメインウィンドウである `browser.xul` です。このような場合、`content` はブラウザーに現在表示されている文書のための `Window` オブジェクトへの参照を返します。これは、`browserRef.contentWindow` のショートカットです。

特権のないコンテンツ (ウェブページ) では、`content` は通常 [top](/ja/docs/Web/API/Window/top) と同じです (ウェブページがサイドバーに読み込まれた場合は例外で、 `content` は現在選択しているタブの `Window` を参照します)。

> **メモ:** いくつかの例では、`content` の代わりに `_content` を使用しています。しかし、後者は長い間非推奨とされています。ですから、新しいコードでは `content` を使うべきです。

### 構文

```
var windowObject = window.content;
```

### 例

以下のコードを `<browser type="content-primary"/>` 要素を持つ chrome XUL ウィンドウで実行すると、ブラウザーで現在表示されているページの最初の div 要素の周囲に赤い枠が描画されます。

```
content.document.getElementsByTagName("div")[0].style.border = "solid red 1px";
```

### 仕様書

なし。

### 関連情報

- [chrome コードでウィンドウを取り扱う](/ja/docs/Working_with_windows_in_chrome_code)
- 特権コードからコンテンツの文書にアクセスする場合は、 [XPCNativeWrapper](/ja/XPCNativeWrapper) 注意してください。
