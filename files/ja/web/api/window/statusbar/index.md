---
title: Window.statusbar
slug: Web/API/Window/statusbar
---

{{APIRef}}

**`Window.statusbar`** プロパティはステータスバーオブジェクトを返します。これにより、ウィンドウ内で表示/非表示を切り替えることができます。

## 構文

```js
objRef = window.statusbar;
```

## 例

次の完全な HTML の例は、様々な "bar" オブジェクトの visible プロパティを利用する方法を示しています。既存のウィンドウのあらゆるバーの visible プロパティを書き換えるには、権限が必要です。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>様々な DOM テスト</title>

    <script>
      // 存在するウィンドウのバーの状態を変更します
      netscape.security.PrivilegeManager.enablePrivilege(
        "UniversalBrowserWrite",
      );
      window.statusbar.visible = !window.statusbar.visible;
    </script>
  </head>
  <body>
    <p>様々な DOM テスト</p>
  </body>
</html>
```

## 注

上記の例のページを読み込むと、ブラウザーは次のようなダイアログを表示します。![](modify_any_open_window_dialog.png)

これらのバーの表示状態を切り替えるには、上記の例のように、スクリプトに署名を入れるか適切な権限を有効にするかしなければなりません。また、様々なツールバーの表示状態を動的に変更すると、ウィンドウの大きさを劇的に変化させ、ページのレイアウトに影響を与える可能性があることに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.statusbar")}}

## 関連情報

- [window.locationbar](/ja/docs/Web/API/Window/locationbar), [window.menubar](/ja/docs/Web/API/Window/menubar), [window.personalbar](/ja/docs/Web/API/Window/personalbar), [window.scrollbars](/ja/docs/Web/API/Window/scrollbars), [window.toolbar](/ja/docs/Web/API/Window/toolbar)
