---
title: MediaRecorderErrorEvent()
slug: Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorderErrorEvent()`** コンストラクタは、[MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) によるメディアの記録中に発生したエラーを表す新しい {{domxref("MediaRecorderErrorEvent")}} オブジェクトを作成します。

> **メモ:** 一般に、あなたはこれらを自分で作成することはありません。 メディアの記録中にエラーが発生すると、それらは {{domxref("MediaRecorder.onerror")}} の実装に配信されます。

## 構文

```
var errorEvent = new MediaRecorderErrorEvent(errorInfo)
```

### パラメーター

- `errorInfo`

  - : 作成する error オブジェクトを記述するオブジェクト。 最低でも `error` プロパティを含める*必要*があります。

    - `error`
      - : 発生したエラーを説明する {{domxref("DOMException")}}。 このオブジェクトの {{domxref("DOMException.name", "name")}} プロパティは、発生したエラーの名前を示すべきです。 他のフィールドは存在する場合と存在しない場合があります。

> **メモ:** 一部の{{Glossary("user agent", "ユーザーエージェント")}}は、スタックダンプ、JavaScript ファイルの名前、エラーが発生した行番号、その他のデバッグツールなどの情報を提供するその他のプロパティを `error` オブジェクトに追加しますが、本番環境ではこの情報に頼るべきではありません。

## 仕様

| 仕様                                                                                                                                                             | 状態                                         | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('MediaStream Recording','#dom-mediarecordererrorevent-mediarecordererrorevent','MediaRecorderErrorEvent()')}} | {{Spec2('MediaStream Recording')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorderErrorEvent.MediaRecorderErrorEvent")}}
