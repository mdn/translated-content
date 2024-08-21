---
title: MediaRecorderErrorEvent()
slug: Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`MediaRecorderErrorEvent()`** コンストラクターは、新しい {{domxref("MediaRecorderErrorEvent")}} オブジェクトを作成します。これは、[MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API) によるメディアの記録中に発生したエラーを表します。

> [!NOTE]
> 一般に、これらを自分で作成することはありません。 メディアの記録中にエラーが発生すると、 {{domxref("MediaRecorder.error_event", "onerror")}} の実装に配信されます。

## 構文

```js-nolint
new MediaRecorderErrorEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前です。
    大文字小文字を区別し、ブラウザーは常に `error` を設定します。
- `options`
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加えて_、以下のプロパティがあります。
    - `error`
      - : 発生したエラーを説明する {{domxref("DOMException")}}。 このオブジェクトの {{domxref("DOMException.name", "name")}} プロパティは、発生したエラーの名前を示すべきです。 他のフィールドは存在する場合と存在しない場合があります。

> [!NOTE]
> 一部の{{Glossary("user agent", "ユーザーエージェント")}}は、スタックダンプ、JavaScript ファイルの名前、エラーが発生した行番号、その他のデバッグツールなどの情報を提供するその他のプロパティを `error` オブジェクトに追加しますが、本番環境ではこの情報に頼るべきではありません。

### 返値

新しい {{domxref("MediaRecorderErrorEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
