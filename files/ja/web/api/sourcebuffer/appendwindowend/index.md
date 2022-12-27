---
title: SourceBuffer.appendWindowEnd
slug: Web/API/SourceBuffer/appendWindowEnd
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`appendWindowEnd`** プロパティは、追加ウィンドウ（[append window](https://w3c.github.io/media-source/#append-window)）の終わりのタイムスタンプを制御します。 タイムスタンプの範囲は、`SourceBuffer` に追加されるメディアデータをフィルターするために使用できます。 この範囲内のタイムスタンプを持つコード化されたメディアフレームは追加されますが、範囲外のものは除外されます。

`appendWindowEnd` のデフォルト値は正の無限大です。

## 構文

```
var myAppendWindowEnd = sourceBuffer.appendWindowEnd;

sourceBuffer.appendWindowEnd = 120.0;
```

### 値

追加ウィンドウの終了時間を秒単位で示す double 型。

### 例外

このプロパティに新しい値を設定すると、次の例外がスローされる場合があります。

| 例外                 | 説明                                                                                                                                                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidAccessError` | 値を {{domxref("SourceBuffer.appendWindowStart")}} 以下、または NaN に設定しようとしました。                                                                                                                                           |
| `InvalidStateError`  | この {{domxref("SourceBuffer")}} オブジェクトが更新中（つまり、その {{domxref("SourceBuffer.updating")}} プロパティが現在 `true`）であるか、この `SourceBuffer` が {{domxref("MediaSource")}} から取り除かれています。 |

## 例

未定

## 仕様

| 仕様                                                                                                                                 | 状態                                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-appendwindowend', 'appendWindowEnd')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.appendWindowEnd")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
