---
title: ブラウザーの互換性データを追加したり更新したりするには
slug: orphaned/MDN/Contribute/Howto/Add_or_update_browser_compatibility_data
---

{{MDNSidebar}}

ウェブ機能のブラウザーの互換性に関する情報を知っている場合、もしくは調査や実験を行う意思と能力がある場合は、 MDN の[ブラウザー互換性データ](https://github.com/mdn/browser-compat-data/) (BCD) の更新を手伝っていただくことができます。

## どこで行う必要があるのか

MDN でのブラウザー互換性情報の改善を手伝う方法は以下のような方法があります。

- BCD リポジトリーにまだ含まれていないウェブ機能のデータを追加する
- ブラウザーの新しいバージョンへの変更や既存データの誤りの修正、または特定のテクノロジーの機能の更新に基づいた新しい情報で既存のデータを更新する。
- [GitHub に登録された BCD の問題](https://github.com/mdn/browser-compat-data/issues)に対処するためにプルリクエストを送信する。

## 対処をするために知っておくべきこと

- GitHub の使用に関する知識
- JSON の使用に関する知識
- 様々なブラウザーでのウェブ標準機能の互換性に関する情報、もしくはテストする機能。「古い」互換性一覧表データを JSON に変換することも可能。

## タスクを実行する手順

Github の BCD リポジトリーを構成する [JSON](/ja/docs/Glossary/JSON) ファイルを更新する方法の詳細については、[互換性テーブル](/ja/docs/MDN/Structures/Compatibility_tables)に関する記事を参照してください。特に手助けを探している問題のリストについては、 ["Help Wanted" タグの付いた GitHub issue](https://github.com/mdn/browser-compat-data/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) を探してください。
