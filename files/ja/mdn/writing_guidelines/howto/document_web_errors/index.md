---
title: ウェブのエラー記事の作成方法
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: aa66311219951396e7305df61eb31831360d2c79
---

{{MDNSidebar}}

MDN の [JavaScript エラーリファレンス](/ja/docs/Web/JavaScript/Reference/Errors) は [開発者コンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)で発生するエラーについて、ウェブ開発者を手助けすることを目的としたプロジェクトです。このプロジェクトでは、メッセージが発生するツールへのリンクを追加できるように、 MDN Web Docs でより多くのエラー文書を書く必要があります。この記事ではウェブエラーの文書化について説明します。

JavaScript のエラーには "Learn more" リンクがあり、問題を修正するための追加アドバイスを含む JavaScript のエラーリファレンスに導いてくれます。ウェブのエラーを文書化するためには、 [JavaScript](/ja/docs/Web/JavaScript) を知っているか、掘り下げることができる必要があります。

## 手順 1 – 文書化するエラーを探す

- Firefox/Gecko のエラーメッセージ: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Edge/Chakra のエラーメッセージ: <https://github.com/Microsoft/ChakraCore/blob/master/lib/Parser/rterrors.h>
- Chrome/v8 のエラーメッセージ: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## 手順 2 – 既存のエラー記事を探す

- 既存の [JavaScript エラーメッセージリファレンス](/ja/docs/Web/JavaScript/Reference/Errors)を見て、エラーがどのように文書化されているかを確認してください。
- 書きたいエラーの種類によって、これらのページにより近い外見にします。
- 新しいエラーページを立ち上げるのには、既存のエラーページのコンテンツをコピーした方が良いかもしれません。

## 手順 3 – 新しいページを作成する

- すべてのエラーページは、 [/docs/Web/JavaScript/Reference/Errors](/ja/docs/Web/JavaScript/Reference/Errors) 以下にあります。
- 新しいページを作成するには、[ページの作成方法](/ja/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)のガイドの指示を参照してください。

## 手順 4 – ページの内容を書く

- 既存のエラー記事から構造をコピーして使うか、最初からスタートするか、選択してください。
- 少なくとも次のものを入れてください。
  - いろいろなブラウザーで発生するメッセージを含んだ構文ボックス
  - エラーの種類
  - エラーが発生する理由と、その結果を説明したテキスト。メッセージの発生する背景まで
  - エラーを示す例（複数が必要です）とコードを修正する方法の例
  - MDN Web Docs 上のその他のリファレンスへのポインター

## 手順 5 — レビューを受ける

ページ作成後、プルリクエストとして提出すると、レビューチームのメンバーが自動的に割り当てられ、ページをレビューします。
