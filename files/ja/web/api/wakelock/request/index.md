---
title: WakeLock.request()
slug: Web/API/WakeLock/request
tags:
  - API
  - Method
  - リファレンス
  - 画面起動ロック API
  - WakeLock
browser-compat: api.WakeLock.request
translation_of: Web/API/WakeLock/request
---
{{securecontext_header}}{{DefaultAPISidebar("Screen Wake Lock API")}}

**`request()`** は {{domxref("WakeLock")}} インターフェイスのメソッドで、画面を暗くしたりロックしたりすることを制御することができる {{domxref("WakeLockSentinel")}} で解決するプロミス ({{jsxref("Promise")}}) を返します。

## 構文

```js
var wakeLock = navigator.wakeLock.request(type);
```

### 引数

- _type_

  - : オプションは次の通りです。

    - `'screen'`: 画面の起動ロックを要求します。端末の画面が暗くなったりロックされたりすることを防ぎます。

### 返値

{{domxref("WakeLockSentinel")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

### 例外

- `NotAllowedError`

  - : 起動ロックが利用できないときに発生します。原因は以下のようなものです。

    - 文書が screen-wake-lock ポリシーにより、画面起動ロックを使用することができない。
    - 文書が完全にアクティブではない。
    - 文書が非表示になっている。
    - {{Glossary("User Agent", "ユーザーエージェント")}}がプラットフォームの起動ロックを取得できない。

## 例

以下の非同期関数は、 {{domxref("WakeLockSentinel")}} オブジェクトを要求します。
`request()` メソッドはブラウザーが何らかの理由でリクエストを拒否した場合を想定して、 `try...catch` 文で囲まれています。

```js
const requestWakeLock = async () => {
  try {

    const wakeLock = await navigator.wakeLock.request('screen');

  } catch (err) {
    // 起動ロックの要求に失敗 - 通常は、バッテリー低下などシステムに起因する。

    console.log(`${err.name}, ${err.message}`);
  }
}

requestWakeLock();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("WakeLock")}}
- {{DOMxRef("Navigator.wakeLock")}}
