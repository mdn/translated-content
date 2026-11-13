---
title: "BeforeInstallPromptEvent: prompt() メソッド"
short-title: prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

**`prompt()`** は {{domxref("BeforeInstallPromptEvent")}} インターフェイスのメソッドで、開発者が任意の時点でインストールプロンプトを表示させることができるようにします。通常、これはアプリの独自のインストール UI のイベントハンドラー内で呼び出されます。

このメソッドは、ユーザー操作（ボタンのクリックなど）に対するイベントハンドラー内で呼び出す必要があり、指定された `BeforeInstallPromptEvent` インスタンスに対しては一度だけ呼び出すことができます。

## 構文

```js-nolint
prompt()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} で、以下のプロパティを持つオブジェクトに解決します。

- `outcome` {{experimental_inline}} {{non-standard_inline}}
  - : ユーザーがアプリのインストールを選択したかどうかを示す文字列です。以下のいずれかの値のどちらかになります。
    - `"accepted"`: ユーザーがアプリをインストールした。
    - `"dismissed"`: ユーザーがアプリをインストールしなかった。

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : ユーザーがアプリのインストールを選択した場合、これは選択されたプラットフォームの名前を表す文字列であり、{{domxref("BeforeInstallPromptEvent.platforms")}} プロパティの値のいずれかになります。ユーザーがアプリのインストールをしないことを選択した場合、これは空文字列になります。

## 例

[`BeforeInstallPromptEvent` インターフェイスの例](/ja/docs/Web/API/BeforeInstallPromptEvent#例)を参照してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [PWA をインストール可能にする](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [How to provide your own in-app install experience](https://web.dev/articles/customize-install) - web.dev (2021)
