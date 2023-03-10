---
title: リソースと URI
slug: Web/HTTP/Resources_and_URIs
---

{{HTTPSidebar}}

HTTP により、ブラウザーやその他の{{Glossary("user agent", "ユーザーエージェント")}}は、インターネット上の様々な*リソース*と通信することができます。このために、ブラウザーはリソースの*識別*および*場所*の両方が必要です。これら二つの情報が {{glossary("URI")}} によって記述されます。

- [ウェブ上のリソースの識別](/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
  - : URI およびウェブ上のリソースへのアクセス方法です。
- [データ URI](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
  - : 特定の種類の URI である、識別子の中にリソース自体を埋め込んだデータ URI です。
- [www および www 以外の URL の選択](/ja/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs)
  - : www の接頭辞が付いたドメインを使用するかどうかのアドバイスで、この記事では選択の結果がどうなるかと、どうするかを説明します。
- [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
  - : MIME メディアタイプは、特定のリソースがどの種類の文書であるかを定義します。この記事は構文と、ウェブでよく使われる MIME タイプを紹介します。
- [よくある MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
  - : ウェブ開発者に便利なよくある MIME タイプの一覧です。
- [リソースの識別子と位置の分離: Alt-Svc ヘッダー](/ja/docs/Web/HTTP/Basics_of_HTTP/Separating_identity_and_location_of_a_resource)
  - : 識別子と位置の両方が {{Glossary("URL")}} で記述されていますが、この 2 つは異なる概念であり、時には区別したほうが便利です。この記事では {{HTTPHeader("Alt-Svc")}} ヘッダーを紹介します。
