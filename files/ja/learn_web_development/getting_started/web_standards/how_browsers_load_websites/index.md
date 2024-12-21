---
title: ブラウザーがウェブサイトを読み込む仕組み
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

> [!NOTE]
> この記事のコンテンツは現在不完全です。申し訳ありません！私たちは MDN ウェブ開発の学習の章の改善に努めており、間もなく、 ("TODO") とマークされた場所も完了する予定です。

この記事では、ウェブサイトのレンダリングプロセスについて説明します。ブラウザーがウェブサイトを構成するファイルや資産を受け取った場合、それらをどのように用意して、ユーザーが目にする完了した状態を作成するのでしょうか。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステム、ウェブブラウザー、ウェブ技術に基本的な知識があること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>HTTP のレスポンスで返されるさまざまな種類の資産。</li>
          <li>静的なファイルと動的なファイルの違い。</li>
          <li>さまざまなファイルを組み合わせてウェブ文書を作成し、それをブラウザーで表示する方法。</li>
          <li>ブラウザーが時に敵対的なプログラミング環境と見なされる一方で、素晴らしいプログラミング環境でもある理由。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTTP レスポンスで返されるさまざまな種類のファイル

- HTML ファイル。
- CSS ファイル。
- JavaScript ファイル。
- 画像、動画、音声ファイル、[PDF](/ja/docs/Glossary/PDF)、[SVG](/ja/docs/Glossary/SVG) などのメディア資産。
- 他にも、ブラウザーがネイティブで処理することができず、端末上の関連アプリに処理を委ねるファイルの種類があります。例えば、 Word 文書や PowerPoint のスライドデッキなどです。

## 静的なファイルと動的なファイル

ダウンロードするコードファイルの中には、静的な（ダウンロードされたのと同じフォームでサーバー上に存在する）ものもあれば、動的な（サーバーによってさまざまなデータに基づいて生成される）ものもあります。

## ブラウザー内でウェブ文書をレンダリングするために、どうファイルが組み立てられるか

- ウェブページがリクエストされます（リンクをクリックするなど）。
- DNSルックアップが実行され、ウェブページでダウンロードするすべての資産の場所を探します。
- 資産の取得を始めます。これには、 [TCP ハンドシェイク](/ja/docs/Glossary/TCP_handshake)、 [TLS](/ja/docs/Glossary/TLS) 交渉、 HTTP リクエスト、レスポンスが含まれます。
- [DOM](/ja/docs/Glossary/DOM) ツリーがダウンロードされた HTML から組み立てられます。
- [CSSOM](/ja/docs/Glossary/CSSOM) が CSS ルールから構築されます。
- JavaScript が構文解析され、解釈され、コンパイルされ、実行されます。
- アクセシビリティツリーが、支援技術（スクリーンリーダーなど）が内側へアクセスできるように構築されます。
- レンダリングツリーが、各 DOM ノードに適用された視覚スタイルを特定するために、DOM と CSSOM から作成されます。
- ページレイアウトが計算されます。
- スタイル設定およびレイアウトされたノードが、正しい順序で画面へ描画され、描画と合成が行われます。

## ブラウザー：敵対的なプログラミング環境と素晴らしいプログラミング環境

ブラウザーは時に敵対的なプログラミング環境と見なされるのはどうしてでしょうか。

- 他にもプログラミング環境はありますが、コードが動作する環境について保証することは、はるかに困難です。
- ユーザーの OS、ブラウザー、言語、ロケーション、ネットワーク接続、CPU、GPU、メモリーなどを保証することはできません。
- 不確実性を理解し、安全策を講じたプログラミングを学ぶ必要があります。これは、[ウェブ標準モデル](/ja/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model)で説明されている最善の手法に従うことに依存しています。また、エラー処理、機能検出、レスポンシブデザインなどの相対概念を見ていくのに良い場所でもあります。

反対に、ウェブが素晴らしいプログラミング環境であるのはどうしてでしょうか。

- 基本的な状態は、アクセス可能でリンク可能な状態です。これらの基本的な状態のいくつかは、他にも環境によっては達成が難しい場合もあります。
- ウェブ上でのアプリ配信は単純かつ強力です。
- 更新は簡単です。多くの場合、ブラウザーのタブを再読み込みするだけで済みます。 大容量パッケージを常にダウンロードしてインストールする必要があるといった心配もありません。
- コミュニティは活気があり、役立つもので、学習に利用できる素晴らしいリソースがたくさんあります。

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
