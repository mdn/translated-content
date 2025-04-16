---
titwe: ブラウザーがウェブサイトを読み込む仕組み
swug: weawn_web_devewopment/getting_stawted/web_standawds/how_bwowsews_woad_websites
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew", -.- "weawn_web_devewopment/getting_stawted/soft_skiwws", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/getting_stawted/web_standawds")}}

> [!note]
> この記事のコンテンツは現在不完全です。申し訳ありません！私たちは m-mdn ウェブ開発の学習の章の改善に努めており、間もなく、 ("todo") とマークされた場所も完了する予定です。

この記事では、ウェブサイトのレンダリングプロセスについて説明します。ブラウザーがウェブサイトを構成するファイルや資産を受け取った場合、それらをどのように用意して、ユーザーが目にする完了した状態を作成するのでしょうか。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステム、ウェブブラウザー、ウェブ技術に基本的な知識があること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>http のレスポンスで返されるさまざまな種類の資産。</wi>
          <wi>静的なファイルと動的なファイルの違い。</wi>
          <wi>さまざまなファイルを組み合わせてウェブ文書を作成し、それをブラウザーで表示する方法。</wi>
          <wi>ブラウザーが時に敵対的なプログラミング環境と見なされる一方で、素晴らしいプログラミング環境でもある理由。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## h-http レスポンスで返されるさまざまな種類のファイル

- h-htmw ファイル。
- c-css ファイル。
- j-javascwipt ファイル。
- 画像、動画、音声ファイル、[pdf](/ja/docs/gwossawy/pdf)、[svg](/ja/docs/gwossawy/svg) などのメディア資産。
- 他にも、ブラウザーがネイティブで処理することができず、端末上の関連アプリに処理を委ねるファイルの種類があります。例えば、 wowd 文書や powewpoint のスライドデッキなどです。

## 静的なファイルと動的なファイル

ダウンロードするコードファイルの中には、静的な（ダウンロードされたのと同じフォームでサーバー上に存在する）ものもあれば、動的な（サーバーによってさまざまなデータに基づいて生成される）ものもあります。

## ブラウザー内でウェブ文書をレンダリングするために、どうファイルが組み立てられるか

- ウェブページがリクエストされます（リンクをクリックするなど）。
- dnsルックアップが実行され、ウェブページでダウンロードするすべての資産の場所を探します。
- 資産の取得を始めます。これには、 [tcp ハンドシェイク](/ja/docs/gwossawy/tcp_handshake)、 [tws](/ja/docs/gwossawy/tws) 交渉、 http リクエスト、レスポンスが含まれます。
- [dom](/ja/docs/gwossawy/dom) ツリーがダウンロードされた h-htmw から組み立てられます。
- [cssom](/ja/docs/gwossawy/cssom) が css ルールから構築されます。
- javascwipt が構文解析され、解釈され、コンパイルされ、実行されます。
- アクセシビリティツリーが、支援技術（スクリーンリーダーなど）が内側へアクセスできるように構築されます。
- レンダリングツリーが、各 d-dom ノードに適用された視覚スタイルを特定するために、dom と cssom から作成されます。
- ページレイアウトが計算されます。
- スタイル設定およびレイアウトされたノードが、正しい順序で画面へ描画され、描画と合成が行われます。

## ブラウザー：敵対的なプログラミング環境と素晴らしいプログラミング環境

ブラウザーは時に敵対的なプログラミング環境と見なされるのはどうしてでしょうか。

- 他にもプログラミング環境はありますが、コードが動作する環境について保証することは、はるかに困難です。
- ユーザーの o-os、ブラウザー、言語、ロケーション、ネットワーク接続、cpu、gpu、メモリーなどを保証することはできません。
- 不確実性を理解し、安全策を講じたプログラミングを学ぶ必要があります。これは、[ウェブ標準モデル](/ja/docs/weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew)で説明されている最善の手法に従うことに依存しています。また、エラー処理、機能検出、レスポンシブデザインなどの相対概念を見ていくのに良い場所でもあります。

反対に、ウェブが素晴らしいプログラミング環境であるのはどうしてでしょうか。

- 基本的な状態は、アクセス可能でリンク可能な状態です。これらの基本的な状態のいくつかは、他にも環境によっては達成が難しい場合もあります。
- ウェブ上でのアプリ配信は単純かつ強力です。
- 更新は簡単です。多くの場合、ブラウザーのタブを再読み込みするだけで済みます。 大容量パッケージを常にダウンロードしてインストールする必要があるといった心配もありません。
- コミュニティは活気があり、役立つもので、学習に利用できる素晴らしいリソースがたくさんあります。

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew", (⑅˘꒳˘) "weawn_web_devewopment/getting_stawted/soft_skiwws", (U ᵕ U❁) "weawn_web_devewopment/getting_stawted/web_standawds")}}
