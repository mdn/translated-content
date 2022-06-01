---
title: Window.toolbar
slug: Web/API/Window/toolbar
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - プロパティ
  - リファレンス
  - Window
browser-compat: api.Window.toolbar
translation_of: Web/API/Window/toolbar
---
{{APIRef}}

**`Window.toolbar`** プロパティは、ツールバーオブジェクトを返します。これを用いて、ツールバーの表示状態を確認することができます。

## 値

`toolbar` オブジェクトです。

## 例

次の完全な HTML の例は、 `toolbar` オブジェクトの `visible` プロパティの使い方を示しています。

```html
<html>
<head>
  <title>様々な DOM テスト</title>
  <script>
    var visible = window.toolbar.visible;
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

{{Compat}}
