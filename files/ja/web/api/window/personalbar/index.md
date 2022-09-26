---
title: window.personalbar
slug: Web/API/Window/personalbar
---

{{ApiRef}}

## 概要

`personalbar` オブジェクトを返します。このバーの表示は、ウィンドウ内でトグル（表示/非表示の状態を切り替える）ことができます。

## 構文

```
objRef =window.personalbar
```

## 例

以下の完全な HTML の例は、様々な "bar" オブジェクトの visible プロパティで利用可能な方法を示しています。存在するウィンドウのあらゆるバーの visible プロパティ を書き換えるには、特権が必要です。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<title>様々な DOM テスト</title>

<script>
// 存在するウィンドウのバーの状態を変更します
netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserWrite");
window.personalbar.visible = !window.personalbar.visible;
</script>

</head>
<body>
  <p>様々な DOM テスト</p>
</body>
</html>
```

## 注記

上記の例のページを読み込んだとき、ブラウザは、以下のダイアログを表示するでしょう。
![](https://mdn.mozillademos.org/files/1574/Modify_any_open_window_dialog.png)

バーの表示を切り替えるには、上記の例のように、スクリプトの実行と特権要求を許可しなければなりません。また、様々なツールバーの表示の動的な変更は、ウィンドウのサイズをかなり劇的に変化させることがあり、ページのレイアウトに影響する可能性があることに注意してください。

## 仕様

| 仕様                                                                                                                     | 状態                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'browsers.html#dom-window-personalbar', 'Window.personalbar')}} | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5 W3C', 'browsers.html#dom-window-personalbar', 'Window.personalbar')}}     | {{Spec2('HTML5 W3C')}}     |          |

## 関連情報

- {{domxref("window.locationbar")}} 、{{domxref("window.menubar")}} 、{{domxref("window.scrollbars")}} 、{{domxref("window.statusbar")}} 、{{domxref("window.toolbar")}}
