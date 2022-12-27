---
title: CompositionEvent.locale
slug: Web/API/CompositionEvent/locale
---

{{deprecated_header}}{{APIRef("DOM Events")}}

**`locale`** は {{domxref("CompositionEvent")}} インターフェイスの読み取り専用のプロパティで、現在の入力メソッドのロケール (例えば、結合操作が IME に関連付けられているならばキーボードレイアウトのロケール) を返します。

## 構文

```
myLocale = CompositionEvent.locale
```

### 値

{{domxref("DOMString")}} で、現在の入力メソッドのロケールを表します。

## 仕様書

| 仕様書                               | 状態                             | 備考                                                 |
| ------------------------------------ | -------------------------------- | ---------------------------------------------------- |
| {{SpecName('DOM3 Events')}} | {{Spec2('DOM3 Events')}} | すでに仕様書にはありませんが、まだ対応されています。 |

## ブラウザーの互換性

{{Compat("api.CompositionEvent.locale")}}

## 関連情報

- {{domxref("CompositionEvent")}}
