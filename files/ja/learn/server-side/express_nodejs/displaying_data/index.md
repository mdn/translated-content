---
title: "Express チュートリアル Part 5: ライブラリデータの表示"
slug: Learn/Server-side/Express_Nodejs/Displaying_data
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

これで[地域図書館](/ja/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)の Web サイトの書籍やその他のデータを表示するページを追加する準備が整いました。このページには、各モデルタイプのレコード数と、すべてのモデルのリストおよび詳細ページを示すホームページが含まれます。その過程で、データベースからレコードを取得したり、テンプレートを使用したりする際の実際的な経験を積むことになります。

| 前提条件: | 以前のチュートリアルのトピック ([Express チュートリアル Part 4: ルートとコントローラ](/ja/docs/Learn/Server-side/Express_Nodejs/routes)を含む) を完了してください。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目標:     | async モジュールと Pug テンプレート言語の使い方、そしてコントローラ関数の URL からデータを取得する方法を理解すること。                                              |

## 概要

前回のチュートリアル記事では、データベースとやり取りするために使用できる [Mongoose モデル](/ja/docs/Learn/Server-side/Express_Nodejs/mongoose)を定義し、いくつかの初期ライブラリレコードを作成しました。その後、LocalLibrary Web サイトに必要な[すべてのルートを作成しました](/ja/docs/Learn/Server-side/Express_Nodejs/routes)が、"ダミーコントローラ" 関数 (ページにアクセスすると "未実装" のメッセージを返すだけのスケルトンコントローラ関数) を使用しました。

次のステップは、私たちの図書館情報を表示するページに適切な実装をすることです (後の記事で情報を作成、更新、または削除するフォームを特徴とする実装ページを見ます)。これには、モデルを使用してレコードを取得するためのコントローラ機能の更新、およびこの情報をユーザに表示するためのテンプレートの定義が含まれます。

はじめに、コントローラ関数で非同期操作を管理する方法と Pug を使用してテンプレートを作成する方法を説明する概要/入門トピックを提供します。それから、主要な "読み取り専用" ページのそれぞれに、それらが使用する特別な機能や新しい機能についての簡単な説明を付けて実装を提供します。

この記事が終わるときには、ルート、非同期関数、ビュー、およびモデルが実際にどのように機能するのかについてのエンドツーエンドの理解が十分にあるはずです。

## ライブラリデータチュートリアルサブ記事の表示

次のサブ記事では、必要な Web サイトページを表示するために必要なさまざまな機能を追加するプロセスについて説明します。次のものに進む前に、順番にこれらのそれぞれを読み、作業する必要があります。

1. [async を使用した非同期フロー制御](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/flow_control_using_async)
2. [テンプレートプライマー](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer)
3. [LocalLibrary 基本テンプレート](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
4. [ホームページ](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page)
5. [ブックリストページ](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
6. [ブックインスタンスリストページ](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
7. [moment を使用した日付のフォーマット](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
8. [著者リストページとジャンルリストページのチャレンジ](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
9. [ジャンル詳細ページ](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
10. [本の詳細ページ](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
11. [著者詳細ページ](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
12. [ブックインスタンス詳細ページとチャレンジ](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## まとめ

これで、サイトのすべての "読み取り専用" ページを作成しました。各モデルのインスタンスの数を表示するホームページ、および書籍、書籍のインスタンス、作家、ジャンルのリストと詳細ページです。その過程でコントローラ、非同期操作を使用したときのフロー制御の管理、Pug を使用したビューの作成、モデルを使用したデータベースの照会、ビューからテンプレートへの情報の受け渡し方法などについて多くの基礎知識を得て、そしてテンプレートを作成および拡張しました。チャレンジを完了した人たちはまた、moment を使った日付処理について少し学んだことでしょう。

次回の記事では、サイトに格納されているデータの変更を開始するための HTML フォームとフォーム処理コードを作成して、私たちの知識に基づいて構築します。

## あわせて参照

- [Async module](http://caolan.github.io/async/docs.html) (Async ドキュメント)
- [Using Template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express ドキュメント)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug ドキュメント)
- [Moment](http://momentjs.com/docs/) (Moment ドキュメント)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}
