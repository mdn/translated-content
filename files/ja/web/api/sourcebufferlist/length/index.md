---
title: SourceBufferList.length
slug: Web/API/SourceBufferList/length
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBufferList")}} インターフェイスの **`length`** 読み取り専用プロパティは、リスト内の {{domxref("SourceBuffer")}} オブジェクトの数を返します。

## 構文

```
var myListLength = sourceBufferList.length;
```

### 値

unsigned long 型の数。

## 例

未定

## 仕様

| 仕様                                                                                                             | 状態                                             | コメント |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-sourcebufferlist-length', 'length')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBufferList.length")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
