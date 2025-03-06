---
title: theme
slug: Mozilla/Add-ons/WebExtensions/API/theme
---

{{AddonSidebar}}

ブラウザー拡張機能がブラウザーのテーマを更新できるようにします。

この API を使用するには、拡張機能の [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ファイルで "theme" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) を要求しなければなりません。

> [!NOTE]
> バックグランドファイルでテーマをセットアップする場合、'theme' [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を宣言しなければなりません。さもなければ、manifest の [theme](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) 関数を使用できません。

## 型

- {{WebExtAPIRef("theme.Theme")}}
  - : テーマのコンテンツを表します。

## 関数

- {{WebExtAPIRef("theme.getCurrent()")}}
  - : 現在のブラウザーテーマを取得します。
- {{WebExtAPIRef("theme.update()")}}
  - : ブラウザーのテーマを更新します。
- {{WebExtAPIRef("theme.reset()")}}
  - : {{WebExtAPIRef("theme.update()")}} の呼び出しで更新されたテーマをすべて削除します。

## イベント

- {{WebExtAPIRef("theme.onUpdated")}}
  - : ブラウザーテーマが変更された時に発火。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}
