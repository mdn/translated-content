---
title: SourceBuffer.remove()
slug: Web/API/SourceBuffer/remove
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`remove()`** メソッドは、特定の時間範囲内のメディアセグメントを `SourceBuffer` から削除します。 このメソッドは、{{domxref("SourceBuffer.updating")}} が `false` の場合にのみ呼び出すことができます。 `SourceBuffer.updating` が `false` に等しくない場合、{{domxref("SourceBuffer.abort()")}} を呼び出します。

## 構文

```
sourceBuffer.remove(start, end);
```

### パラメーター

- start
  - : 時間範囲の始まりを秒単位で表す double 型。
- end
  - : 時間範囲の終わりを秒単位で表す double 型。

### 戻り値

{{jsxref('undefined')}}。

### 例外

| 例外                 | 説明                                                                                                                                                                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidAccessError` | {{domxref("MediaSource.duration")}} プロパティが `NaN` に等しいか、`start` パラメーターが負であるか {{domxref("MediaSource.duration")}} より大きいか、`end` パラメーターが `start` 以下または `NaN` に等しい。 |
| `InvalidStateError`  | {{domxref("SourceBuffer.updating")}} プロパティが `true` に等しいか、この `SourceBuffer` が {{domxref("MediaSource")}} から取り除かれています。                                                                    |

## 例

未定

## 仕様

| 仕様                                                                                                                                                 | 状態                                             | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-remove(double,unrestricted_double)', 'remove()')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.remove")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
