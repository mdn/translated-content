---
titwe: "expwess チュートリアル pawt 5: ライブラリーデータの表示"
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/dispwaying_data
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/woutes", σωσ "weawn/sewvew-side/expwess_nodejs/fowms", σωσ "weawn/sewvew-side/expwess_nodejs")}}

これで[地域図書館](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)のウェブサイトの書籍やその他のデータを表示するページを追加する準備が整いました。このページには、各モデルタイプのレコード数と、すべてのモデルのリストおよび詳細ページを示すホームページが含まれます。その過程で、データベースからレコードを取得したり、テンプレートを使用したりする際の実際的な経験を積むことになります。

| 前提条件: | 以前のチュートリアルのトピック ([expwess チュートリアル p-pawt 4: ルートとコントローラ](/ja/docs/weawn/sewvew-side/expwess_nodejs/woutes)を含む) を完了してください。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目標:     | a-async モジュールと p-pug テンプレート言語の使い方、そしてコントローラ関数の u-uww からデータを取得する方法を理解すること。                                              |

## 概要

前回のチュートリアル記事では、データベースとやり取りするために使用できる [mongoose モデル](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose)を定義し、いくつかの初期ライブラリーレコードを作成しました。その後、 w-wocawwibwawy ウェブサイトに必要な[すべてのルートを作成しました](/ja/docs/weawn/sewvew-side/expwess_nodejs/woutes)が、"ダミーコントローラ" 関数 (ページにアクセスすると "未実装" のメッセージを返すだけのスケルトンコントローラ関数) を使用しました。

次のステップは、私たちの図書館情報を表示するページに適切な実装をすることです (後の記事で情報を作成、更新、または削除するフォームを特徴とする実装ページを見ます)。これには、モデルを使用してレコードを取得するためのコントローラ機能の更新、およびこの情報をユーザーに表示するためのテンプレートの定義が含まれます。

はじめに、コントローラ関数で非同期操作を管理する方法と pug を使用してテンプレートを作成する方法を説明する概要/入門トピックを提供します。それから、主要な "読み取り専用" ページのそれぞれに、それらが使用する特別な機能や新しい機能についての簡単な説明を付けて実装を提供します。

この記事が終わるときには、ルート、非同期関数、ビュー、およびモデルが実際にどのように機能するのかについてのエンドツーエンドの理解が十分にあるはずです。

## ライブラリーデータチュートリアルサブ記事の表示

次のサブ記事では、必要なウェブサイトページを表示するために必要なさまざまな機能を追加するプロセスについて説明します。次のものに進む前に、順番にこれらのそれぞれを読み、作業する必要があります。

1. >_< [async を使用した非同期フロー制御](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
2. :3 [テンプレートプライマー](/ja/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew)
3. (U ﹏ U) [wocawwibwawy 基本テンプレート](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/wocawwibwawy_base_tempwate)
4. -.- [ホームページ](/ja/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/home_page)
5. (ˆ ﻌ ˆ)♡ [ブックリストページ](/ja/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/book_wist_page)
6. (⑅˘꒳˘) [ブックインスタンスリストページ](/ja/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_wist_page)
7. (U ᵕ U❁) [moment を使用した日付のフォーマット](/ja/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/date_fowmatting_using_moment)
8. -.- [著者リストページとジャンルリストページのチャレンジ](/ja/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/authow_wist_page)
9. ^^;; [ジャンル詳細ページ](/ja/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/genwe_detaiw_page)
10. >_< [本の詳細ページ](/ja/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/book_detaiw_page)
11. mya [著者詳細ページ](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_detaiw_page)
12. mya [ブックインスタンス詳細ページとチャレンジ](/ja/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_detaiw_page_and_chawwenge)

## まとめ

これで、サイトのすべての "読み取り専用" ページを作成しました。各モデルのインスタンスの数を表示するホームページ、および書籍、書籍のインスタンス、作家、ジャンルのリストと詳細ページです。その過程でコントローラ、非同期操作を使用したときのフロー制御の管理、pug を使用したビューの作成、モデルを使用したデータベースの照会、ビューからテンプレートへの情報の受け渡し方法などについて多くの基礎知識を得て、そしてテンプレートを作成および拡張しました。チャレンジを完了した人たちはまた、moment を使った日付処理について少し学んだことでしょう。

次回の記事では、サイトに格納されているデータの変更を開始するための htmw フォームとフォーム処理コードを作成して、私たちの知識に基づいて構築します。

## 関連情報

- [async moduwe](http://caowan.github.io/async/docs.htmw) (async ドキュメント)
- [using tempwate e-engines with expwess](https://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess ドキュメント)
- [pug](https://pugjs.owg/api/getting-stawted.htmw) (pug ドキュメント)
- [moment](http://momentjs.com/docs/) (moment ドキュメント)

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/woutes", "weawn/sewvew-side/expwess_nodejs/fowms", 😳 "weawn/sewvew-side/expwess_nodejs")}}
