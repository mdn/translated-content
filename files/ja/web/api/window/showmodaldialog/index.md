---
title: Window.showModalDialog()
slug: Web/API/Window/showModalDialog
tags:
  - API
  - 非推奨
  - HTML DOM
  - メソッド
  - Window
browser-compat: api.Window.showModalDialog
translation_of: Web/API/Window/showModalDialog
---
{{deprecated_header}}{{APIRef}}

> **Warning:** この機能は削除されました。ウェブサイトやアプリケーションを修正してください。
>
> このメソッドは Chrome 43 および Firefox 56 で削除されました。

**`Window.showModalDialog()`** は、指定された HTML 文書を含むモーダルダイアログボックスを生成して表示します。

## 構文

```js
showModalDialog(uri)
showModalDialog(uri, arguments)
showModalDialog(uri, arguments, options)
```

### 引数

- `uri`
  - : ダイアログで表示する文書の URL です。
- `arguments` {{optional_inline}}
  - : ダイアログに渡される値です。
- `options` {{optional_inline}}
  - : ダイアログのウィンドウ装飾を指定する文字列です。
    以下のうち 1 つ以上の値をセミコロンで区切って使用します。

<table class="no-markdown">
  <tbody>
    <tr>
      <th>構文</th>
      <th>説明</th>
    </tr>
    <tr>
      <td><code>center: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        この引数の値が <code>on</code>, <code>yes</code>, <code>1</code> のいずれかである場合、ダイアログウィンドウはデスクトップの中央に配置されます。それ以外の場合は、ダイアログボックスが隠れます。既定値は <code>yes</code> です。
      </td>
    </tr>
    <tr>
      <td>
        <code>dialogheight: <em>height</em></code>
      </td>
      <td>ダイアログボックスの高さを指定します。</td>
    </tr>
    <tr>
      <td>
        <code>dialogleft: <em>left</em></code>
      </td>
      <td>ダイアログボックスの水平位置をデスクトップの左上を基準とした値で指定します。</td>
    </tr>
    <tr>
      <td>
        <code>dialogwidth: <em>width</em></code>
      </td>
      <td>ダイアログボックスの幅を指定します。</td>
    </tr>
    <tr>
      <td>
        <code>dialogtop: <em>top</em></code>
      </td>
      <td>ダイアログボックスの垂直位置をデスクトップの左上角を基準とした値で指定します。</td>
    </tr>
    <tr>
      <td><code>resizable: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        この引数の値が <code>on</code>, <code>yes</code>, 1 のいずれかである場合、ダイアログウィンドウは、ユーザーによるリサイズが可能になります。それ以外の場合は、ウィンドウのサイズが自動で調整されます。既定値は、 <code>no</code> です。
      </td>
    </tr>
    <tr>
      <td><code>scroll: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        この引数の値が <code>on</code>, <code>yes</code>, 1 のいずれかである場合、ダイアログボックスにスクロールバーが表示されます。それ以外の場合は、ボックスのサイズが自動で調整されます。既定値は、 <code>no</code> です。
    </tr>
  </tbody>
</table>

> **Note:** Firefox は、`dialogHide`、`edge`、`status`、および、`unadorned` 引数を実装していません。

### 返値

 `uri` で指定した文書で設定された `returnValue` プロパティを保持します。

## メモ

`showModalDialog()` は HTML5 の一部として一時的に標準化されました。追加オプションのための第 3 引数は、 HTML5 版には存在しませんでした。

## 仕様書

- [MSDN の `showModalDialog` ページ](<https://msdn.microsoft.com/library/ms536759(VS.85).aspx>)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `window.showModalDialog()` を置き換える {{HTMLElement("dialog")}}
- [showModalDialog のポリフィル](https://github.com/niutech/showModalDialog)、{{HTMLElement("dialog")}} および[ジェネレーター](/ja/docs/Web/JavaScript/Reference/Statements/function*)を使用したもの
