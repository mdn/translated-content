---
title: "Express チュートリアル: 地域図書館のウェブサイト"
short-title: "1: 地域図書館のチュートリアル"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

この記事では、MDN Express のチュートリアルについて概要を説明し、次の数ページで繰り返し使用する「地域図書館」というサンプルウェブサイトを紹介します。
このチュートリアルで何が学べるか、始め方、サポートの受け方、そして初めてのサーバーサイド JavaScript アプリを構築・デプロイするために必要なすべての情報を確認できます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Express の紹介</a>を読んでください。
        以下の記事では、<a href="/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Node 開発環境を設定する</a>必要もあります。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        このチュートリアルで使用されているサンプルアプリケーションを紹介し、どのトピックがカバーされるのかを読者が理解できるようにします。
      </td>
    </tr>
  </tbody>
</table>

## 概要

MDN 「地域図書館」 Express (Node) チュートリアルへようこそ。このチュートリアルでは、地域図書館の目録を管理するために使用される可能性があるウェブサイトを開発します。

この一連のチュートリアル記事では、次のことを行います。

- Express Application Generator ツールを使用して、スケルトンウェブサイトとアプリケーションを作成します。
- Node ウェブサーバーを起動および停止します。
- データベースを使用してアプリケーションのデータを保存します。
- さまざまな情報を要求するためのルートを作成し、ブラウザーに表示するデータを HTML としてレンダリングするためのテンプレート（「ビュー」）を作成します
- フォームを操作します。
- アプリケーションを運用環境にデプロイします。

あなたはすでにこれらのトピックのいくつかについて学び、他のものについても簡単に触れました。チュートリアルシリーズの最後までに、簡単な Express アプリケーションを自分で開発するのに十分な知識があるはずです。

## 地域図書館ウェブサイト

地域図書館は、この一連のチュートリアルの過程で作成および進化するウェブサイトの名前です。ご想像のとおり、この ウェブサイトの目的は利用できる書籍を閲覧したり自分のアカウントを管理したりできる、地元の小さな図書館用のオンライン目録を提供することです。

この例は、必要に応じて詳細度を自由に調整できる点や、Express のほぼすべての機能を解説するのに使用できることから、慎重に選ばれました。さらに重要なのは、あらゆるウェブサイトで必要となる機能について、ガイド付きの道筋を示せる点です。

- 最初のいくつかの記事では、図書館利用者が利用できる書籍を確認するために使用することができる、単純な閲覧専用図書館を定義していきます。これにより、ほぼすべてのウェブサイトに共通する操作、すなわちデータベースからのコンテンツの読み取りと表示について学ぶことができます。
- 学習を進めるにつれ、この図書館の例は自然と発展し、より高度なウェブサイトの機能を紹介できるようになります。例えば、新しい本を生成することができるように図書館を拡張し、これを利用してフォームの使い方やユーザー認証の仕組みを解説することができます。

これは非常に拡張性の高い例ではありますが、あえて**地域**図書館と呼んでいるのには理由があります。Express をすばやく使い始められるよう、必要最小限の情報に絞って表示させたいと考えているからです。そのため、書籍、書籍の所蔵数、著者、その他の主要な情報について保存することになります。ただし、図書館が貸し出す可能性のあるその他のアイテムに関する情報は格納しませんし、複数の図書館サイトを対応するために必要なインフラや、その他の「大規模な図書館」機能も提供しません。

## 行き詰まっています、どこでソースを入手できますか？

このチュートリアルを進めていく中で、それぞれの段階でコピー＆ペーストしていただくための適切なコードスニペットを指定しております。また、（多少のヒントを交えつつ）ご自身で拡張していただきたいコードもいくつかあります。

すべてのコードスニペットをコピー＆ペーストするのではなく、実際に手入力してみてください。そうすることで、次回同様のコードを書く際に、よりコードに慣れることができ、長期的にはきっと役立つはずです。

行き詰まったら、[Github のここ](https://github.com/mdn/express-locallibrary-tutorial)で ウェブサイトの完全に開発されたバージョンを見つけることができます。

> [!NOTE]
> この文書でテストされた Node、Express、および他のモジュールの特定のバージョンは、プロジェクト [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json) にリストされています。

## まとめ

地域図書館ウェブサイトと、これから学ぶことについて少し知りました。今度は私たちの例を含む[スケルトンプロジェクト](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)の作成を開始します。

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
