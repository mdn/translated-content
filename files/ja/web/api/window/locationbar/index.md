---
title: Window.locationbar
slug: Web/API/Window/locationbar
---

{{APIRef}}

`locationbar` オブジェクトを返し、これで表示/非表示を確認することができます。

## 構文

```js
objRef = window.locationbar;
```

## 例

次の HTML の完全な例は、 `locationbar` オブジェクトの `visible` プロパティの使用方法を示しています。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>様々な DOM テスト</title>

    <script>
      var visible = window.locationbar.visible;
    </script>
  </head>
  <body>
    <p>様々な DOM テスト</p>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.locationbar")}}

## 関連情報

- {{domxref("window.locationbar")}}, {{domxref("window.menubar")}}, {{domxref("window.personalbar")}}, {{domxref("window.scrollbars")}}, {{domxref("window.statusbar")}}, {{domxref("window.toolbar")}}
