---
title: History.pushState()
slug: Web/API/History/pushState
tags:
  - API
  - HTML DOM
  - History
  - 履歴 API
  - Location
  - メソッド
  - リファレンス
  - セッション
  - URL
  - ウェブ
  - pushState
browser-compat: api.History.pushState
translation_of: Web/API/History/pushState
---
{{APIRef("History API")}}

[HTML](/ja/docs/Web/HTML) 文書では、 **`history.pushState()`** メソッドはブラウザーのセッション履歴スタックに項目を追加します。

## 構文

```js
history.pushState(state, unused)
history.pushState(state, unused, url)
```

### 引数

- `state`

  - : この `state` (状態)オブジェクトは、`pushState()` によって作られる新しい履歴項目に関連した JavaScript オブジェクトです。ユーザーが新規の `state` に移動したときはいつも、 {{domxref("Window/popstate_event", "popstate")}} イベントが発行され、イベントの `state` プロパティは、履歴項目の `state` オブジェクトのコピーを含みます。

    `state` オブジェクトは、シリアライズ可能なあらゆものとなりえます。 Firefox では状態オブジェクトをユーザーのディスクに保存してブラウザーを再起動した後にも復帰できるため、 `state` オブジェクトのシリアライズ表現に 2 MiB の上限を課しています。これを超える大きさの状態オブジェクトを `pushState()` に渡した場合、このメソッドで例外が発生します。これ以上のスペースが必要な場合、{{domxref("Window.sessionStorage", "sessionStorage")}} や {{domxref("Window.localStorage", "localStorage")}} を使用することをお勧めします。

- `unused`
  - : この引数は歴史的な理由のために存在しており、省略することはできません。空文字を渡すことが、将来このメソッドに変更が加えられたときに安全です。

- `url` {{optional_inline}}
  - : 新しい履歴項目の URL は、この引数で与えられます。ブラウザーは `pushState()` を呼び出した後もこの URL を読み込もうとせずに、例えばユーザーがブラウザーを再起動した後など、後で URL を読み込む場合もあるのにご注意ください。新しい URL は絶対パスとは限りません。つまり相対パスの場合、現在の URL から相対的に解決されます。新しい URL は現在の URL と同一{{glossary("origin", "オリジン")}}でなければならず、そうでない場合、`pushState()` で例外が発生します。この引数が指定されなかった場合、この文書の現在の URL が設定されます。

## 解説

ある意味で、 `pushState()` の呼び出しは `window.location = "#foo"` と似ていて、両方とも現在の文書に関連した別の履歴項目を作成し、有効化します。しかし `pushState()` にはいくつかの利点があります。

- 新しい URL は現在の URL と同一オリジンにあるあらゆる URL にすることができます。それに対して、{{domxref("window.location")}} に設定した場合、ハッシュのみを変更したのであれば同じ文書にとどまります。
- URL を変えたくないときは変更しなくても構いません。それに対して、  `window.location = "#foo";` を設定する場合は、現在のハッシュが `#foo` でない場合のみ新規の履歴項目を作成します。
- 履歴項目に任意のデータを関連づけることができます。ハッシュベースのアプローチでは、関連するデータすべてを短い文字列にエンコードする必要があります。

`pushState()` は {{domxref("Window/hashchange_event", "hashchange")}} イベントを発行しません。新 URL が旧 URL とハッシュだけ異なる場合でもそうなることに気をつけてください。

## 例

これはブラウザーの履歴項目に _state_ と _url_ を設定したものを作成します。

### JavaScript

```js
const state = { 'page_id': 1, 'user_id': 5 }
const url = 'hello-world.html'

history.pushState(state, '', url)
```

### クエリー引数の変更

```js
const url = new URL(window.location);
url.searchParams.set('foo', 'bar');
window.history.pushState({}, '', url);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [履歴 API での作業](/ja/docs/Web/API/History_API/Working_with_the_History_API)
- [Window: popstate イベント](/ja/docs/Web/API/Window/popstate_event)
