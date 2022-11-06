---
title: Document.featurePolicy
slug: Web/API/Document/featurePolicy
---

{{APIRef("Feature Policy")}}

**`featurePolicy`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、特定の文書に適用される機能ポリシーを見ることができる簡単な API を提供する {{domxref("Policy")}} インターフェイスを返します。

## 構文

```
var policy = iframeElement.featurePolicy
```

### 値

{{domxref("FeaturePolicy")}} オブジェクトで、文書に適用された機能ポリシーの設定を調べるために使用するうことができます。

## 仕様書

| 仕様書                                   | 状態                                 | 備考     |
| ---------------------------------------- | ------------------------------------ | -------- |
| {{SpecName("Feature Policy")}} | {{Spec2("Feature Policy")}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}
