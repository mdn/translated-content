---
title: window.scrollbars
slug: Web/API/Window/scrollbars
---

{{ApiRef}}

## 概要

scrollbars オブジェクトを返します。このバーの表示は、ウィンドウ内でトグル（表示/非表示の状態を切り替える）ことができます。

## 構文

```
objRef = window.scrollbars
```

## 例

以下の完全な HTML の例は、様々な "bar" オブジェクトの visible プロパティで利用可能な方法を示しています。

```html
<DOCTYPE html>
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <title>様々な DOM テスト</title>

      <script>
        // 存在するウィンドウのバーの状態を変更します
        netscape.security.PrivilegeManager.enablePrivilege(
          "UniversalBrowserWrite",
        );
        window.scrollbars.visible = !window.scrollbars.visible;
      </script>
    </head>
    <body>
      <p>様々な DOM テスト</p>
    </body>
  </html></DOCTYPE
>
```

## 仕様

{{Specifications}}

## 関連情報

- [window.locationbar](/ja/docs/DOM/window.locationbar) 、 [window.menubar](/ja/docs/DOM/window.menubar) 、 [window.personalbar](/ja/docs/DOM/window.personalbar) 、 [window.statusbar](/ja/docs/DOM/window.statusbar) 、 [window.toolbar](/ja/docs/DOM/window.toolbar)
