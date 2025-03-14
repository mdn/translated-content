---
title: OfflineAudioCompletionEvent()
slug: Web/API/OfflineAudioCompletionEvent/OfflineAudioCompletionEvent
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{APIRef("Web Audio API")}}

**`OfflineAudioCompletionEvent()`** は[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のコンストラクターで、新しい {{domxref("OfflineAudioCompletionEvent")}} オブジェクトを生成します。

> [!NOTE]
> 一般的にコンストラクターを手動で使用することはないでしょう。
> `OfflineAudioCompletionEvent` イベントは、古い理由のため {{domxref("OfflineAudioContext")}} インスタンスに配信されます。

## 構文

```js-nolint
new OfflineAudioCompletionEvent(type, options)
```

### 引数

- `type`
  - : このイベントの名前を示す文字列です。
    大文字小文字を区別します。ブラウザーは `complete` に設定します。
- `options`
  - : オブジェクトで、 _{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `renderedBuffer`
      - : レンダリングされた音声データを含む {{domxref("AudioBuffer")}} です。

### 返値

新しい {{domxref("OfflineAudioCompletionEvent")}} オブジェクト。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
