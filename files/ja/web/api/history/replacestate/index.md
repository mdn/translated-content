---
title: History.replaceState()
slug: Web/API/History/replaceState
tags:
  - API
  - HTML DOM
  - History
  - 履歴 API
  - メソッド
  - リファレンス
browser-compat: api.History.replaceState
translation_of: Web/API/History/replaceState
---
{{APIRef("History API")}}

**`History.replaceState()`** メソッドは、現在の履歴を編集し、メソッドに引数で渡された状態オブジェクトや URL で置き換えます。このメソッドは、ユーザーのアクションに応じて現在の履歴項目の状態オブジェクトや URL を更新したい場合に特に便利です。

## 構文

```js
history.replaceState(stateObj, unused)
history.replaceState(stateObj, unused, url)
```

### 引数

- `stateObj`
  - : 状態オブジェクトは JavaScript オブジェクトで、 `replaceState` メソッドに渡された履歴項目に関連付けられるものです。状態オブジェクトは `null` を指定することができます。
- `unused`
  - : この引数は歴史的な理由のために存在しており、省略することはできません。空文字を渡すことが、将来このメソッドに変更が加えられたときに安全です。
- `url` {{optional_inline}}
  - : 履歴項目の URL です。新しい URL は現在の URL と同じオリジンでなければなりません。もしそうでないと、 replaceState で例外が発生します。

## 例

https\://www\.mozilla.org/foo.html が以下の JavaScript を実行したとします。

```js
const stateObj = { foo: 'bar' };
history.pushState(stateObj, '', 'bar.html');
```

上記の 2 行の説明は、[履歴 API での作業](/ja/docs/Web/API/History_API/Working_with_the_History_API)の記事の [`pushState()` の例](/ja/docs/Web/API/History_API/Working_with_the_History_API#pushState_%E3%81%AE%E4%BE%8B)にあります。次に、 `https://www.mozilla.org/bar.html` が以下の JavaScript を実行したとします。

```js
history.replaceState(stateObj, '', 'bar2.html');
```

これにより、URL バーに `https://www.mozilla.org/bar2.html` が表示されるようになりますが、ブラウザーが `bar2.html` を読み込んだり、`bar2.html` が存在するかどうかを確認したりすることはありません。

ユーザーが `https://www.microsoft.com` に移動し、戻るボタンをクリックしたとします。この時点で、URL バーには `https://www.mozilla.org/bar2.html` が表示されます。ユーザーがもう一度「戻る」ボタンをクリックすると、URL バーには https\://www\.mozilla.org/foo.html が表示され、 bar.html は完全にバイパスされます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
