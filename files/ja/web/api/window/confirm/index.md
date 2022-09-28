---
title: window.confirm
slug: Web/API/Window/confirm
---

{{ApiRef("Window")}}

**`Window.confirm()`** メソッドは、メッセージと、OK, キャンセルの 2 つのボタンを持つモーダルダイアログを表示します。

## 構文

```
result = window.confirm(message);
```

- `message` は、ダイアログ内に表示される文字列です。
- `result` は、OK (`true`) とキャンセル (`false`) のどちらが選択されたかを示す真偽値です。ブラウザがページ内ダイアログを拒否している場合、 `result` は常に `false` です。

## 例

```
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
```

結果

![firefox confirm](https://mdn.mozillademos.org/files/7163/firefoxcomfirmdialog_zpsf00ec381.png)

## 注記

The following text is shared between this article, DOM:window\.prompt and DOM:window\.alert ダイアログボックスはモーダルウィンドウです。つまり閲覧者は、これを閉じないとプログラムの他のインタフェース部分にアクセスする事ができません。したがって、ダイアログボックス（もしくは、モーダルウィンドウ）を生成する関数を乱用するべきではありません。何にせよ、[確認を目的としたダイアログボックスの使用を避けるべき](http://alistapart.com/article/neveruseawarning)それ相応の理由があります。

## 仕様

| Specification                                                                                                    | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'timers-and-user-prompts.html#dom-confirm', 'confirm()')}} | {{Spec2('HTML WHATWG')}} |         |

## Browser compatibility

{{Compat("api.Window.confirm")}}

## 関連情報

- {{domxref("window.alert","alert")}}
- {{domxref("window.prompt","prompt")}}
