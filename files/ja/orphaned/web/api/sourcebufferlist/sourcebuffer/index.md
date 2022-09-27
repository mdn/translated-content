---
title: 'SourceBufferList: indexed property getter'
slug: orphaned/Web/API/SourceBufferList/SourceBuffer
original_slug: Web/API/SourceBufferList/SourceBuffer
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBufferList")}} インターフェイスの **indexed property getter**（インデックス指定のプロパティゲッター）を使用すると、リスト内の `SourceBuffer` オブジェクトに配列演算子（つまり `[]`）でアクセスできます。

## 構文

```
var mySourceBuffer = sourceBufferList[index];
```

### パラメーター

- index
  - : 返す {{domxref("SourceBuffer")}} オブジェクトのインデックス位置。

### 戻り値

{{domxref("SourceBuffer")}} オブジェクト。

### 例外

特定の例外はスローされませんが、指定されたインデックスが {{domxref("SourceBufferList.length")}} 以上の場合、`undefined` を返します。

## 例

未定

## 仕様

| 仕様                                                                                                                                             | 状態                                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-sourcebufferlist-(unsigned_long)', 'SourceBuffer() getter')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBufferList.SourceBuffer")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
