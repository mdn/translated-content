---
title: "BeforeInstallPromptEvent: BeforeInstallPromptEvent() コンストラクター"
short-title: BeforeInstallPromptEvent()
slug: Web/API/BeforeInstallPromptEvent/BeforeInstallPromptEvent
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

**`BeforeInstallPromptEvent()`** コンストラクターは、新しい {{domxref("BeforeInstallPromptEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new BeforeInstallPromptEvent(type)
new BeforeInstallPromptEvent(type, eventInitDict)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前であり、`beforeinstallprompt` に設定されます。
- `eventInitDict` {{optional_inline}}
  - : `platforms` という単一のオプションプロパティを持つオブジェクトです。このプロパティは文字列の配列であり、イベントが配信されるプラットフォームが掲載されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [PWA をインストール可能にする](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [How to provide your own in-app install experience](https://web.dev/articles/customize-install) - web.dev (2021)
