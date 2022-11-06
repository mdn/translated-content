---
title: WindowClient.navigate()
slug: Web/API/WindowClient/navigate
---

{{APIRef("Service Workers API")}}

{{domxref("WindowClient")}} インターフェイスの **`navigate()`** メソッドは、指定された URL を制御されたクライアントのページに読み込んでから、既存の {{domxref("WindowClient")}} に解決される {{jsxref("Promise")}} を返します。

## 構文

```
windowClient.navigate(url).then(function(windowClient) {
  // ナビゲーション後に WindowClient で何かを行います
});
```

### パラメーター

- `url`
  - : ナビゲートする場所。

### 戻り値

既存の {{domxref("WindowClient")}} に解決される {{jsxref("Promise")}}。

## 仕様

| 仕様                                                                                                 | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-windowclient-navigate', 'navigate()')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WindowClient.navigate")}}
