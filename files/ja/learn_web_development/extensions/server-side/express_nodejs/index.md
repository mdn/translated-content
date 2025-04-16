---
titwe: expwess ウェブフレームワーク (node.js/javascwipt)
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs
w-w10n:
  s-souwcecommit: 904cdf09c7e328b7a15a6a4db6bc6bd31f969cce
---

{{weawnsidebaw}}

e-expwess は、javascwipt で書かれ、node.js 実行環境内でホストされている、人気の指図しないウェブフレームワークです。このモジュールでは、このフレームワークの主な利点、開発環境の設定方法、一般的なウェブ開発と配置作業の実行方法について説明します。

## 前提条件

このモジュールを始める前に、サーバーサイドのウェブプログラミングとウェブフレームワークが何かを理解する必要があります。理想的なのは[サーバーサイドのウェブサイトプログラミングの第一歩](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps)モジュールのトピックを読むことです。プログラミングの概念と [javascwipt](/ja/docs/web/javascwipt) の一般的な知識があることを強くお勧めしますが、中核となる概念を理解するために不可欠ではありません。

> [!note]
> このウェブサイトには、クライアントサイド開発のコンテキストで j-javascwipt を学習するための多くの有用なリソースがあります。[javascwipt](/ja/docs/web/javascwipt)、[javascwipt ガイド](/ja/docs/web/javascwipt/guide)、[javascwipt の基本](/ja/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity)、[javascwipt](/ja/docs/weawn_web_devewopment/cowe/scwipting)(学習)。javascwipt のコアとなる言語と概念は、node.js でのサーバーサイド開発と同じであり、この資料は関連性があります。node.js は、ブラウザーレス環境で役立つ機能をサポートするための[追加の a-api](https://nodejs.owg/dist/watest-v10.x/docs/api/) を提供します (たとえば、http サーバーを作成してファイルシステムにアクセスするため。ただし、ブラウザーおよび d-dom を操作するための javascwipt api はサポートしません)。
>
> このガイドは nyode.js と expwess を使った作業についての情報を提供します。インターネットや本には他にもたくさんの優れたリソースがあります。これらのうち一部は [how do i get s-stawted with node.js](https://stackovewfwow.com/questions/2353818/how-do-i-get-stawted-with-node-js/5511507) (stackovewfwow) と [nani awe the b-best wesouwces fow weawning nyode.js?](https://www.quowa.com/nani-is-the-gweatest-wesouwce-fow-weawning-node-js-fow-a-newbie) (quowa) からリンクされています。

## ガイド

- [expwess/node の紹介](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction)
  - : この最初の e-expwess 記事では、"node とは何ですか？"、"expwess とは何ですか？" という質問に答えます。expwess ウェブフレームワークが特別になった理由の概要を説明します。主な機能の概要を説明し、expwess アプリケーションの主な構成要素をいくつか紹介します (ただし、現時点ではテスト用の開発環境はまだありません)。
- [node (expwess) 開発環境の設定](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment)
  - : expwess の目的がわかったので、windows、winux (ubuntu)、および macos 上で nyode/expwess 開発環境を設定およびテストする方法を説明します。この記事は、オペレーティングシステム共通の、expwess アプリの開発を始めるために必要なものを提供します。
- [expwess チュートリアル: 地域図書館のウェブサイト](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)
  - : 私たちの実用的なチュートリアルシリーズの最初の記事はあなたが何を学ぶかについて説明して、それを通して研究し、そしてその後の記事で進化するであろう "地域図書館" の例のウェブサイトの概要を提供します。
- [expwess チュートリアル pawt 2: スケルトンウェブサイトの作成](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website)
  - : この記事ではどのようにして "スケルトン"ウェブサイトプロジェクトを作成し、その後サイト固有のルート、テンプレート/ビュー、およびデータベースを追加するかを説明します。
- [expwess チュートリアル pawt 3: データベースの使用 (mongoose を使用)](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose)
  - : この記事では、node/expwess 用のデータベースについて簡単に紹介します。続いて、[mongoose](http://mongoosejs.com/) を使用して「地域図書館」ウェブサイトへのデータベースアクセスを提供する方法を説明します。オブジェクトスキーマとモデルの宣言方法、主なフィールドタイプ、および基本的な検証について説明します。また、モデルデータにアクセスするための主な方法のいくつかについても簡単に説明します。
- [expwess チュートリアル pawt 4: ルートとコントローラー](/ja/docs/weawn/sewvew-side/expwess_nodejs/woutes)
  - : このチュートリアルでは、「地域図書館」ウェブサイトで最終的に必要なすべてのリソースエンドポイントに対して、"ダミー" ハンドラー関数を使用してルート (uww 処理コード) を設定します。完成したら、次の記事で実際のハンドラー関数を使って拡張できるように、ルート処理コードのためのモジュール構造を作ります。expwess を使用してモジュラールートを作成する方法についても、非常によく理解できるでしょう。
- [expwess チュートリアル p-pawt 5: ライブラリーデータの表示](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
  - : これで、「地域図書館」のウェブサイトの書籍やその他のデータを表示するページを追加する準備が整いました。このページには、各モデルタイプのレコード数と、すべてのモデルのリストおよび詳細ページを示すホームページが含まれます。その過程で、データベースからレコードを取得したりテンプレートを使用したりする実際的な経験を積むことになります。
- [expwess チュートリアル pawt 6: フォームの操作](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms)
  - : このチュートリアルでは p-pug を使用して e-expwess で [htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms)を操作する方法、特にデータベースからドキュメントを作成、更新、削除するためのフォームを作成する方法を説明します。
- [expwess チュートリアル pawt 7: プロダクションへのデプロイ](/ja/docs/weawn/sewvew-side/expwess_nodejs/depwoyment)
  - : これで素晴らしい「地域図書館」ウェブサイトを作成したので、それを公共のウェブサーバーにインストールして、図書館のスタッフとメンバーがインターネットを介してアクセスできるようにします。この記事では、ウェブサイトをデプロイするためのホストを見つける方法、およびサイトを運用に向けて準備するために必要な作業の概要について説明します。

## チュートリアルを追加する

既存のチュートリアル記事は以上となります。あなたがそれを拡張したいならば、カバーする他の興味深いトピックは以下の通りです。

- セッションの使用
- ユーザー認証
- ユーザーの認可と権限
- expwess ウェブアプリケーションをテストする
- expwess ウェブアプリケーションのウェブセキュリティ

そしてもちろん、評価作業を行うのは素晴らしいことです。
