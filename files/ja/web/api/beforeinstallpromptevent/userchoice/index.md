---
title: "BeforeInstallPromptEvent: userChoice プロパティ"
short-title: userChoice
slug: Web/API/BeforeInstallPromptEvent/userChoice
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

**`userChoice`** は {{domxref("BeforeInstallPromptEvent")}} インターフェイスのプロパティで、アプリのインストールを促された際にユーザーが選択したインストールオプションを表します。

## 値

{{jsxref("Promise")}} で、2 つのプロパティを持つオブジェクトに解決します。

- `outcome` {{experimental_inline}} {{non-standard_inline}}
  - : ユーザーがアプリのインストールを選択したかどうかを示す文字列です。以下のいずれかの値のどちらかになります。
    - `"accepted"`: ユーザーがアプリをインストールした。
    - `"dismissed"`: ユーザーがアプリをインストールしなかった。

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : ユーザーがアプリのインストールを選択した場合、これは選択されたプラットフォームの名前を表す文字列であり、{{domxref("BeforeInstallPromptEvent.platforms")}} プロパティの値のいずれかになります。ユーザーがアプリのインストールをしないことを選択した場合、これは空文字列になります。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [PWA をインストール可能にする](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [How to provide your own in-app install experience](https://web.dev/articles/customize-install) - web.dev (2021)
