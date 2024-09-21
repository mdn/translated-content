---
title: "PageTransitionEvent: PageTransitionEvent() コンストラクター"
short-title: PageTransitionEvent()
slug: Web/API/PageTransitionEvent/PageTransitionEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("HTML DOM")}}

**`PageTransitionEvent()`** コンストラクターは、新しい {{domxref("PageTransitionEvent")}} オブジェクトを生成します。これは、ページが読み込まれたり、読み込まれなかったりする際に {{domxref("window")}} オブジェクトで発行される {{domxref("Window/pageshow_event", "pageshow")}} または {{domxref("Window/pagehide_event", "pagehide")}} イベントで使用します。

> [!NOTE]
> ウェブ開発者は通常、このコンストラクターを呼ぶ必要はありません。なぜなら、ブラウザーが {{domxref("Window/pageshow_event", "pageshow")}} または {{domxref("Window/pagehide_event", "pagehide")}} イベントを発行すると、これらのオブジェクトを自動的に作成するからです。

## 構文

```js-nolint
new PageTransitionEvent(type, options)
```

### 引数

- `type`
  - : イベント名の文字列です。
    大文字小文字の区別があり、ブラウザーは `pageshow` または `pagehide` に設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加えて_、以下のプロパティがあります。
    - `persisted` {{optional_inline}}
      - : 論理値で、文書内のキャッシュから読み込んでいるかどうかを示します。

### 返値

新しい {{domxref("PageTransitionEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`pageshow`](/ja/docs/Web/API/Window/pageshow_event) イベント
- [`pagehide`](/ja/docs/Web/API/Window/pagehide_event) イベント
