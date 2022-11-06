---
title: HTTP の基本
slug: Web/HTTP/Basics_of_HTTP
---

{{HTTPSidebar}}

HTTP はとても拡張性のあるプロトコルです。リソースの記述や URI などわずかな基本概念に基づいており、メッセージ構造が単純で、コミュニケーションの流れはクライアント・サーバー構造です。これらの基本概念の上に、いくつもの拡張が何年にもわたって行われ、新しい機能や新しい意味が新しい HTTP メソッドやヘッダーによって追加されています。

## 記事

- [HTTP の概要](/ja/docs/Web/HTTP/Overview)
  - : HTTP とは何であるか、そしてウェブアーキテクチャにおけるこのプロトコルの役割について説明します。
- [HTTP の進化](/ja/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : HTTP は 1990 年代初めに作成され、何度も拡張されました。この記事では、 HTTP/0.9、 HTTP/1.0、 HTTP/1.1、現代の HTTP/2、および長年にわたり導入されている小さなノベルティについての歴史を説明します。
- [HTTP バージョンのネゴシエーション](/ja/docs/Web/HTTP/Basics_of_HTTP/Negotiating_an_HTTP_version)
  - : クライアントとサーバーが特定の HTTP バージョンをネゴシエートし、最終的に使用されたプロトコルバージョンをアップグレードする方法を説明します。
- [リソースと URI](/ja/docs/Web/HTTP/Resources_and_URIs)
  - : ウェブ上のリソース、識別子、および場所の概念を簡単に紹介します。
- [ウェブ上のリソースの識別](/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
  - : ウェブリソースの参照方法とどのように配置されるのかについて説明します。
- [データ URI](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
  - : それが表すリソースを直接埋め込む特定の種類の URI。データ URI はとても便利ですが、いくつかの注意点があります。
- [リソース URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Resource_URLs) {{Non-standard_Inline}}
  - : `resource:` というスキームの接頭辞が付いた URL は、 Firefox と Firefox のブラウザー拡張機能によってリソースを内部的に読み込むために使用されますが、情報の一部はブラウザーが接続するサイトでも利用できます。
- リソースの識別と場所の分離: Alt-Svc HTTP ヘッダー
  - : ほとんどの場合、ウェブリソースの識別子と場所は共有されますが、これは {{HTTPHeader("Alt-Svc")}} ヘッダーで変更できます。
- [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
  - : HTTP/1.0 以降では、様々なタイプのコンテンツを送信することができます。 この記事では {{HTTPHeader("Content-Type")}} ヘッダーと MIME 標準を使用してこれがどのように行われるかについて説明します。
- [www URL とそうでない URL の選択](/ja/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs)
  - : www という接頭辞のドメインを使うかどうかに関するアドバイスで、この記事では選択の結果とその作成方法について説明します。
- [HTTP セッションの流れ](/ja/docs/Web/HTTP/Flow_of_an_HTTP_session)
  - : この基本的な記事では典型的な HTTP セッションについて説明します。ブラウザーのリンクをクリックすると、何が起こるのでしょうか
- [HTTP メッセージ](/ja/docs/Web/HTTP/Messages)
  - : HTTP リクエストまたはレスポンス中に送信されるメッセージは、非常に明確な構造を持っています。この入門記事ではその構造、目的、可能性について説明します。
- [HTTP/2 でのフレームとメッセージ構造](</ja/docs/Web/HTTP/Frame and message structure in HTTP_2>)
  - : HTTP/2 は HTTP/1.x メッセージをカプセル化し、バイナリフレームで表現します。この記事ではフレームの構造、目的、エンコード方法について説明します。
- [HTTP/1.x でのコネクション管理](/ja/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 は持続的な接続とパイプライン処理をサポートする HTTP の最初のバージョンでした。この記事ではこれらの 2 つの概念について説明します。
- [HTTP/2 でのコネクション管理](/ja/docs/Web/HTTP/Connection_management_in_HTTP_2)
  - : HTTP/2 では接続の作成方法とメンテナンス方法が完全に再考されました。この記事では HTTP フレームが多重化を許可し、以前の HTTP バージョンの 'head-of-line' ブロック問題を解決する方法について説明します。
- [コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)
  - : HTTP はブラウザーが好みの形式、言語、またはエンコーディングをアナウンスするための方法として `Accept-` から始まる一連のヘッダを導入しています。この記事ではこの宣言がどのように起こるか、サーバがどのように反応すると予想され、どのように最も適切な応答を選択するかについて説明します。
