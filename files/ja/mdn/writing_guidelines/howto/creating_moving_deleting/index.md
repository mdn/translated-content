---
title: ページを作成および編集する方法
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
---

{{MDNSidebar}}

この記事では、新しい協力者に既存ページの編集と、新規ページを作成する手順を紹介します。

## 既存ページの編集

ページを編集するには、 [content](https://github.com/mdn/content) リポジトリーでページのソースを見つける必要があります。最も簡単な方法は、編集したいページに移動して、ページの一番下にある "Source on GitHub" のリンクをクリックすることです。

編集するソースを見つけたら、 README に移動して[協力を行う](https://github.com/mdn/content#making-contributions)ガイドを読んでください。

## 変更のプレビュー

ローカルでページを編集している場合、変更した内容がどのように見えるかを確認するには、コンテンツリポジトリーのフォルダーに移動し、 CLI のコマンド `yarn start` を実行し、ブラウザーで `localhost:5042` に移動し、ページに移動して表示させることができます。検索ボックスにタイトルを入力すると、簡単に見つけることができます。ソースを編集すると、プレビューされたページがブラウザー上でライブで更新されます。

### タグ

ページの内容や目的を表すタグは、ページソースの上部にある「タグ」リストで追加・削除することができます。適用するタグについては、[ページの正しいタグの付け方](/ja/docs/MDN/Contribute/Howto/Tag)を参照してください。

### ファイルの添付

記事にファイルを添付するには、記事の `index.html` ファイルと同じディレクトリーにファイルを置き、通常 `<a>` 要素を介してページ内にファイルを含めてください。

## 新しいページの作成

新しいページを作成するには、 [Adding a new document](https://github.com/mdn/content#adding-a-new-document) の指示を参照してください。

## 関連情報

- [MDN のスタイルガイド](/ja/docs/MDN/Guidelines/Writing_style_guide)
