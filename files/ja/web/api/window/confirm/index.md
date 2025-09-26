---
title: window.confirm
slug: Web/API/Window/confirm
l10n:
  sourceCommit: c575deb5f1775b532360c612a85b35a5ff9525d9
---

{{ApiRef("Window")}}

**`Window.confirm()`** はブラウザーへ任意のメッセージ付きのダイアログを表示し、ユーザーがダイアログを承認またはキャンセルするまで待機します。

ある条件下、例えばユーザーがタブを切り替えているときなどでは、ブラウザーがダイアログを実際に表示しないことや、ダイアログの承認やキャンセルを待機しないことがあります。

## 構文

```js-nolint
confirm(message)
```

### 引数

- `message`
  - : 確認ダイアログ内に表示したい文字列。

### 返値

論理型で、OK (`true`) とキャンセル (`false`) のどちらが選択されたかを示します。ブラウザーがページ内ダイアログを拒否している場合、常に `false` を返します。

## 例

```js
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
```

は以下のようになります。

![Firefox の confirm](firefox_confirm_dialog.png)

## 注記

ダイアログボックスはモーダルウィンドウです。つまり閲覧者は、これを閉じないと他のプログラムのインターフェイスにアクセスできません。したがって、ダイアログボックス（もしくは、モーダルウィンドウ）を生成する関数を乱用するべきではありません。何にせよ、それ相応の [確認を目的としたダイアログボックスの使用を避けるべき](https://alistapart.com/article/neveruseawarning) 理由があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("dialog")}} 要素
- {{domxref("window.alert()")}}
- {{domxref("window.prompt()")}}
