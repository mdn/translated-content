---
title: Window.updateCommands()
slug: Web/API/Window/updateCommands
tags:
  - API
  - HTML DOM
  - メソッド
  - リファレンス
  - Window
  - XUL コマンドノード
  - sCommandName
  - updateCommands
browser-compat: api.Window.updateCommands
translation_of: Web/API/Window/updateCommands
---
{{ ApiRef() }}{{Non-standard_header}}

## 概要

現在のクロームウィンドウ（UI）のコマンドの状態を更新します。

## 構文

```js
updateCommands("sCommandName")
```

### 引数

- sCommandName` は特定の文字列で、これがどのような更新イベントなのかを記述します（例えば、いま太字になったなど）。

### 返値

なし ({{jsxref("undefined")}})。

## メモ

これは、アイテムを有効または無効にしたり（コマンドノードの "disabled" 属性を適宜設定またはクリア）、 XUL コマンドノードの "state" 属性に現在の状態情報を設定してコマンドの状態が選択の状態を反映するようにするものです。

## 関連情報

DOM Level 0 です。仕様書には含まれていません。

## ブラウザーの互換性

{{Compat}}
