---
title: SourceBuffer.changeType()
slug: Web/API/SourceBuffer/changeType
l10n:
  sourceCommit: 48882b75978cef6a4fbc68a35e547b33f8012f93
---

{{APIRef("Media Source Extensions")}}

**`changeType()`** は {{domxref("SourceBuffer")}} インターフェイスのメソッドで、今後 {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} を呼び出すときに新しいメディアデータが準拠することを期待する MIME タイプを設定します。 これにより、コーデックまたはコンテナー型を途中で変更できます。

これが役立つ 1 つのシナリオは、リソース制約の変化に応じて 1 つのコーデックから別のコーデックに移行することにより、帯域幅の可用性の変化にメディアソースを適応させることです。

## 構文

```js-nolint
changeType(type)
```

### 引数

- `type`
  - : 文字列で、将来のバッファが準拠する MIME タイプを指定します。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : 指定された文字列は、有効な MIME タイプではなく、空です。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("SourceBuffer")}} は、親メディアソースの {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} リストのメンバーではありません。 または、バッファーの {{domxref("SourceBuffer.updating", "updating")}} プロパティは、以前にキューに入れられた {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} または {{domxref("SourceBuffer.remove", "remove()")}} がまだ処理中であることを示しています。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 指定された MIME タイプに対応していないか、{{domxref("MediaSource.sourceBuffers")}} リストにある {{domxref("SourceBuffer")}} オブジェクトの種類には対応していません。

## 使用上の注意

親 {{domxref("MediaSource")}} が `"ended"` {{domxref("MediaSource.readyState", "readyState")}} にある場合に、`changeType()` を呼び出すと、 `readyState` プロパティが `"open"` に遷移し、親メディアソースで {{domxref("MediaSource.sourceopen_event", "sourceopen")}} という名前の単純なイベントが発生します。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
