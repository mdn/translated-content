---
title: SourceBuffer.changeType()
slug: Web/API/SourceBuffer/changeType
---

{{APIRef("Media Source Extensions")}}

{{domxref("SourceBuffer")}} インターフェイスの **`changeType()`** メソッドは、今後 {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} を呼び出すときに新しいメディアデータが準拠することを期待する MIME タイプを設定します。 これにより、コーデックまたはコンテナタイプを途中で変更できます。

これが役立つ 1 つのシナリオは、リソース制約の変化に応じて 1 つのコーデックから別のコーデックに移行することにより、帯域幅の可用性の変化にメディアソースを適応させることです。

## 構文

```
sourceBuffer.changeType(type);
```

### パラメーター

- `type`
  - : 将来のバッファが準拠する MIME タイプを指定する {{domxref("DOMString")}}。

### 戻り値

{{jsxref('undefined')}}。

### 例外

- `TypeError`
  - : 指定された文字列は、有効な MIME タイプではなく、空です。
- `InvalidStateError`
  - : {{domxref("SourceBuffer")}} は、親メディアソースの {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} リストのメンバーではありません。 または、バッファの {{domxref("SourceBuffer.updating", "updating")}} プロパティは、以前にキューに入れられた {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} または {{domxref("SourceBuffer.remove", "remove()")}} がまだ処理中であることを示しています。
- `NotSupportedError`
  - : 指定された MIME タイプはサポートされていないか、{{domxref("MediaSource.sourceBuffers")}} リストにある {{domxref("SourceBuffer")}} オブジェクトのタイプではサポートされていません。

## 使用上の注意

親 {{domxref("MediaSource")}} が `"ended"` {{domxref("MediaSource.readyState", "readyState")}} にある場合に、`changeType()` を呼び出すと、メディアソースが `"open"` `readyState` に遷移し、親メディアソースで {{event("sourceopen")}} という名前の単純なイベントが発生します。

## 仕様

| 仕様                                                                                                                                 | 状態                                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#dom-sourcebuffer-changetype', 'SourceBuffer.changeType')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.changeType")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
