---
title: "Express チュートリアル Part 5: ライブラリーデータの表示"
short-title: "5: データの表示"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

これで[地域図書館](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)ウェブサイトの書籍やその他のデータを表示するページを追加する準備が整いました。ページには、各モデル型のレコード数を表示するホームページと、すべてのモデルの一覧ページおよび詳細ページが含まれます。その過程で、データベースからレコードを取得したり、テンプレートを使用したりする際の実践的な経験を積みます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        以前のチュートリアル（<a href="/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes">Express チュートリアル Part 4: ルートとコントローラー</a>を含む）を完了していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        <code>async</code>/<code>await</code> を使用した非同期データベース操作の方法、Pug テンプレート言語の使い方、コントローラー関数内で URL からデータを取得する方法を理解すること。
      </td>
    </tr>
  </tbody>
</table>

## 概要

これまでのチュートリアル記事では、データベースとやり取りするために使用できる [Mongoose モデル](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose)を定義し、図書館の初期レコードをいくつか作成しました。その後、地域図書館ウェブサイトに必要な[すべてのルートを作成しました](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)が、「ダミーコントローラー」関数を使用しました（これは、ページにアクセスすると「未実装」のメッセージを返すだけのスケルトンのコントローラー関数です）。

次のステップは、図書館の情報を表示するページを適切に実装することです（後の記事では、情報を作成、更新、削除するフォームを備えたページの実装を見ていきます）。これには、モデルを使用してレコードを取得するようコントローラー関数を更新することと、この情報をユーザーに表示するためのテンプレートを定義することが含まれます。

はじめに、コントローラー関数で非同期操作を管理する方法と、Pug を使用してテンプレートを作成する方法の概要と入門を説明します。その後、主要な「読み取り専用」ページをそれぞれ実装し、使用する特別な機能や新しい機能について簡単に説明します。

この記事を終えると、ルート、非同期関数、ビュー、モデルが実際にどのように機能するのかを、全体を通して十分に理解できるはずです。

## ライブラリーデータの表示に関するチュートリアルのサブ記事

次のサブ記事では、必要なウェブサイトのページを表示するために必要なさまざまな機能を追加する手順について説明します。
それぞれを読み、作業してから次に進むよう、順番に取り組んでください。

1. [テンプレート入門](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer)
2. [地域図書館の基本テンプレート](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
3. [ホームページ](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page)
4. [書籍一覧ページ](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
5. [書籍インスタンス一覧ページ](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
6. [著者一覧ページとジャンル一覧ページのチャレンジ](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
7. [ジャンル詳細ページ](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
8. [書籍詳細ページ](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
9. [著者詳細ページ](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
10. [書籍インスタンス詳細ページとチャレンジ](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## まとめ

これで、サイトのすべての「読み取り専用」ページを作成しました。各モデルのインスタンス数を表示するホームページ、および書籍、書籍インスタンス、著者、ジャンルの一覧ページと詳細ページです。その過程で、コントローラー、非同期操作を使用する際のフロー制御の管理、_Pug_ を使用したビューの作成、モデルを使用したサイトのデータベースへのクエリー、ビューへの情報の受け渡し、テンプレートの作成と拡張について多くの基礎知識を得ました。

次の記事では、ここまでに得た知識を基に、サイトに格納されているデータの変更を始めるための HTML フォームとフォーム処理コードを作成します。

## 関連情報

- [Express でのテンプレートエンジンの使用](https://expressjs.com/en/guide/using-template-engines/)<sup>(英語)</sup>（Express ドキュメント）
- [Pug](https://pugjs.org/api/getting-started.html)<sup>(英語)</sup>（Pug ドキュメント）

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
