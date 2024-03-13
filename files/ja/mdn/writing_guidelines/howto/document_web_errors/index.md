---
title: ウェブのエラーの記事を作成するには
slug: MDN/Writing_guidelines/Howto/Document_web_errors
---

{{MDNSidebar}}

MDN の [JavaScript エラーリファレンス](/ja/docs/Web/JavaScript/Reference/Errors) は [開発者コンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)で発生するエラーについて、ウェブ開発者を手助けすることを目的とした新しいプロジェクトです。この機能は、Firefox をお使いの場合に有効です。 JavaScript エラーに含まれる "Learn more" が問題の修正に役立つ追加のアドバイスを含む JavaScript エラーリファレンスにリンクしています。

このプロジェクトを助けるには、メッセージが投げられるツールからより多くのリンクを追加できるように、もっと多くの MDN エラー記事を書くことが必要です。

## 前提条件

- [MDN アカウント](/ja/docs/MDN/Contribute/Getting_started#ステップ_1_github_アカウントを作成する)が必要です。
- ある程度の [JavaScript](/ja/docs/Web/JavaScript) の知識か、検索する力が必要です。

## 手順 1 – 文書化するエラーを探す

- Firefox/Gecko のエラーメッセージ: <https://dxr.mozilla.org/mozilla-central/source/js/src/js.msg>
- Edge/Chakra のエラーメッセージ: <https://github.com/Microsoft/ChakraCore/blob/master/lib/Parser/rterrors.h>
- Chrome/v8 のエラーメッセージ: <https://github.com/v8/v8/blob/master/src/messages.h#L75>

## 手順 2 – 既存のエラー記事を探す

- 既存の [JavaScript エラーメッセージリファレンス](/ja/docs/Web/JavaScript/Reference/Errors)を見て、エラーがどのように文書化されるかを確認してください。
- どのタイプのエラーについて書きたいかによって、これらのページにより近い外見にします。
- 新しいエラーページを立ち上げるのに、既存のエラーページのコンテンツをコピーした方が良いかもしれません。

## 手順 3 – 新しいページを作成する

- すべてのエラーページは、 [/docs/Web/JavaScript/Reference/Errors](/ja/docs/Web/JavaScript/Reference/Errors) 以下にあります。
- 新しいページを作成するには、 [GitHub の README](https://github.com/mdn/content#adding-a-new-document) の指示に従ってください。

## 手順 4 – ページの内容を書く

- 既存のエラー記事から構造をコピーして使うか、最初からスタートするか、選択してください。
- 少なくとも次のものを入れてください。

  - いろいろなブラウザーで投げられるメッセージを含んだ構文ボックス
  - エラーの種類
  - エラーが発生する理由と、その結果を説明したテキスト。メッセージの発生する背景まで
  - エラーを示す例（1 つ以上要ります) とコードを修正する方法の例
  - MDN 上のその他のリファレンスへのポインター

## 手順 5 — レビューを受ける

ページ作成後、プルリクエストとして提出すると、当社の審査担当者が自動的に割り当てられ、ページをレビューします。
