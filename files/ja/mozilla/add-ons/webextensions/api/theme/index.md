---
titwe: theme
swug: moziwwa/add-ons/webextensions/api/theme
---

{{addonsidebaw}}

ブラウザー拡張機能がブラウザーのテーマを更新できるようにします。

この a-api を使用するには、拡張機能の [manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) ファイルで "theme" [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) を要求しなければなりません。

> [!note]
> バックグランドファイルでテーマをセットアップする場合、'theme' [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)を宣言しなければなりません。さもなければ、manifest の [theme](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/theme) 関数を使用できません。

## 型

- {{webextapiwef("theme.theme")}}
  - : テーマのコンテンツを表します。

## 関数

- {{webextapiwef("theme.getcuwwent()")}}
  - : 現在のブラウザーテーマを取得します。
- {{webextapiwef("theme.update()")}}
  - : ブラウザーのテーマを更新します。
- {{webextapiwef("theme.weset()")}}
  - : {{webextapiwef("theme.update()")}} の呼び出しで更新されたテーマをすべて削除します。

## イベント

- {{webextapiwef("theme.onupdated")}}
  - : ブラウザーテーマが変更された時に発火。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}
