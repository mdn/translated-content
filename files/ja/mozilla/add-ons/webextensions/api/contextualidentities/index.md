---
title: contextualIdentities
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
---

{{AddonSidebar}}

contextual identities の操作: contextual identities を一覧、作成、削除、更新します。

"Contextual identities"は「コンテナー」とも言われ、ブラウザーの機能で、ユーザーがウェブブラウズしている時に複数の ID を想定し、そこでも ID 同時の分離を維持したいアイデアを指します。例えば、ユーザーが「仕事の ID」と「個人の ID」を分けたいと考えて、これら 2 つのコンテキストで cookies を共有したくない場合など。

contextual identities 機能により、各コンテキスト ID は名前、色、及びアイコンを持ちます。新規タブが ID にアサインされ、名前、アイコン、色がアドレスバーに出現します。内部的には、各 ID が他のタブには共有されない自分の cookie ストアを持ちます。

![](containers.png)Contextual identities は Firefox の実験的機能であり、Firefox Nightly だけでデフォルト有効になっています。その他のバージョンの Firefox で有効にするには、 `privacy.userContext.enabled` の設定を `true` にします。contextual identities は Android 版 Firefox でも利用できますが、このバージョンでは動作する UI がないのにご注意ください。

Firefox 57 より前では、`contextualIdentities` API は contextual identities 機能自体が有効になっている場合にだけ利用できます。機能が無効なまま拡張機能が `contextualIdentities` API を使おうとした場合、メソッド呼び出しは promises を `false` に解決します。

Firefox 57 以降では、`contextualIdentities` API を使う拡張機能がインストールされたら、contextual identities 機能は自動的に有効化されます。"privacy.userContext.enabled" プリファレンスを使って、まだユーザーが機能を無効化できるのに注意します。これが起きたら、`contextualIdentities` メソッドの呼び出しで、エラーメッセージと共に promises を拒否します。

Firefox での contextual identities のより詳しい情報は[このガイド](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)を見てください。

Contextual identities は現在その他のブラウザーではサポートされていません。

この API を使うには、 [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ファイル内で "contextualIdentities" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を入れます。

## 型

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : contextual identity に関する情報を含みます。

## 関数

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : 新しい contextual identity を作成します
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : cookie ストア ID を引数に、単一の contextual identity を取得します
- {{WebExtAPIRef("contextualIdentities.query()")}}
  - : すべての contextual identities を取得、あるいは特定の名前の全 contextual identities を取得します
- {{WebExtAPIRef("contextualIdentities.update()")}}
  - : 既存の contextual identity のプロパティを更新します
- {{WebExtAPIRef("contextualIdentities.remove()")}}
  - : contextual identity を削除します

## イベント

- {{WebExtAPIRef("contextualIdentities.onCreated")}}
  - : contextual identity 作成時に発火します
- {{WebExtAPIRef("contextualIdentities.onRemoved")}}
  - : contextual identity 削除時に発火します
- {{WebExtAPIRef("contextualIdentities.onUpdated")}}
  - : 1 つ以上の contextual identity のプロパティが更新された時に発火します

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}
