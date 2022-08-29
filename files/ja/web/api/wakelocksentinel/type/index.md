---
title: WakeLockSentinel.type
slug: Web/API/WakeLockSentinel/type
tags:
  - プロパティ
  - 読み取り専用
  - 画面起動ロック API
  - 起動ロック
  - WakeLockSentinel
  - 画面
browser-compat: api.WakeLockSentinel.type
translation_of: Web/API/WakeLockSentinel/type
---
{{securecontext_header}}{{DefaultAPISidebar("Screen Wake Lock API")}}

**`type`** は {{domxref("WakeLockSentinel")}} インターフェイスの読み取り専用プロパティで、現在取得している {{domxref("WakeLockSentinel")}} の種別の文字列表現を返します。

## 構文

```js
var type = sentinel.type;
```

### 値

現在取得している起動ロックの種別の文字列表現です。

- _type_ {{ReadOnlyInline}}

  - : 返される値は以下の通りです。

    - `'screen'`: 画面の起動ロックです。端末の画面が暗くなったりロックされたりすることを防ぎます。

## 例

この例は、 {{domxref("WakeLockSentinel")}} を取得し、コンソールにその種別を出力する非同期関数の例を示しています。

```js
const requestWakeLock = async () => {
  wakeLock = await navigator.wakeLock.request('screen');
  console.log(wakeLock.type); // 'screen' と出力
};

requestWakeLock();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
