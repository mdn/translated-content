---
title: "BeforeInstallPromptEvent: platforms プロパティ"
short-title: platforms
slug: Web/API/BeforeInstallPromptEvent/platforms
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

**`platforms`** は {{domxref("BeforeInstallPromptEvent")}} インターフェイスのプロパティで、イベントが配信されたプラットフォームを列挙します。これは、例えば "web" や "play" といったバージョンの選択肢をユーザーに表示したいユーザーエージェント向けに提供されており、これによりユーザーはウェブ版と Android 版の間で選択できるようになります。

## 値

文字列の配列で、それぞれの文字列はインストールの対象プラットフォームを表しています。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [PWA をインストール可能にする](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [How to provide your own in-app install experience](https://web.dev/articles/customize-install) - web.dev (2021)
