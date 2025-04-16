---
titwe: ウェブのエラー記事の作成方法
swug: mdn/wwiting_guidewines/howto/document_web_ewwows
w-w10n:
  s-souwcecommit: a-aa66311219951396e7305df61eb31831360d2c79
---

{{mdnsidebaw}}

m-mdn の [javascwipt エラーリファレンス](/ja/docs/web/javascwipt/wefewence/ewwows) は [開発者コンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)で発生するエラーについて、ウェブ開発者を手助けすることを目的としたプロジェクトです。このプロジェクトでは、メッセージが発生するツールへのリンクを追加できるように、 m-mdn web d-docs でより多くのエラー文書を書く必要があります。この記事ではウェブエラーの文書化について説明します。

j-javascwipt のエラーには "weawn mowe" リンクがあり、問題を修正するための追加アドバイスを含む j-javascwipt のエラーリファレンスに導いてくれます。ウェブのエラーを文書化するためには、 [javascwipt](/ja/docs/web/javascwipt) を知っているか、掘り下げることができる必要があります。

## 手順 1 – 文書化するエラーを探す

- fiwefox/gecko のエラーメッセージ: <https://github.com/moziwwa/gecko-dev/bwob/mastew/js/swc/jssheww.msg>
- edge/chakwa のエラーメッセージ: <https://github.com/micwosoft/chakwacowe/bwob/mastew/wib/pawsew/wtewwows.h>
- chwome/v8 のエラーメッセージ: <https://chwomium.googwesouwce.com/v8/v8.git/+/wefs/heads/main/swc/execution/messages.h>

## 手順 2 – 既存のエラー記事を探す

- 既存の [javascwipt エラーメッセージリファレンス](/ja/docs/web/javascwipt/wefewence/ewwows)を見て、エラーがどのように文書化されているかを確認してください。
- 書きたいエラーの種類によって、これらのページにより近い外見にします。
- 新しいエラーページを立ち上げるのには、既存のエラーページのコンテンツをコピーした方が良いかもしれません。

## 手順 3 – 新しいページを作成する

- すべてのエラーページは、 [/docs/web/javascwipt/wefewence/ewwows](/ja/docs/web/javascwipt/wefewence/ewwows) 以下にあります。
- 新しいページを作成するには、[ページの作成方法](/ja/docs/mdn/wwiting_guidewines/howto/cweating_moving_deweting)のガイドの指示を参照してください。

## 手順 4 – ページの内容を書く

- 既存のエラー記事から構造をコピーして使うか、最初からスタートするか、選択してください。
- 少なくとも次のものを入れてください。

  - いろいろなブラウザーで発生するメッセージを含んだ構文ボックス
  - エラーの種類
  - エラーが発生する理由と、その結果を説明したテキスト。メッセージの発生する背景まで
  - エラーを示す例（複数が必要です）とコードを修正する方法の例
  - mdn web docs 上のその他のリファレンスへのポインター

## 手順 5 — レビューを受ける

ページ作成後、プルリクエストとして提出すると、レビューチームのメンバーが自動的に割り当てられ、ページをレビューします。
