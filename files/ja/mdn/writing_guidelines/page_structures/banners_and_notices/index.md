---
title: バナーと注意
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

特定の API リファレンスのページでは、記述するコンテンツの使用方法に影響する重要な要素を強調するために、バナーやお知らせを表示しています。
例えば、バナーは特定のインターフェイス、メソッド、プロパティが非推奨であり、実運用コードで使用すべきではない、または保護されたコンテキストでのみ使用することができる場合に強調表示するために使用します。

バナーはページコンテンツ内のマクロを使用してレンダリングされます。
ページに自動的に追加されるバナーマクロもあれば、手動で追加されるものもあります。

この記事では、より重要なバナーとその追加方法について記述します。

## バナーマクロを追加する場所

バナーは通常、ページのメタデータのすぐ下に挿入され、ページサイドバーのマクロの横に並んだマクロを使用して追加されます。例えば、下記ブロックでは、 `\{{SecureContext_Header}}` マクロが使用されており、 {{domxref("AudioDecoder")}} インターフェイスが[保護されたコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ利用できることを示しています。また、 `\{{AvailableInWorkers}}` マクロが使用されており、 {{domxref("AudioDecoder")}} インターフェイスが[ウィンドウコンテキスト](/ja/docs/Web/API/Window)および[専用ワーカーコンテキスト](/ja/docs/Web/API/DedicatedWorkerGlobalScope)でのみ利用できることを示しています。さらに、 `\{{SeeCompatTable}}` が追加されており、このインターフェイスが実験的なものであることを示しています。

```md
---
title: AudioDecoder
slug: Web/API/AudioDecoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioDecoder
---

\{{APIRef("WebCodecs API")}} \{{SeeCompatTable}} \{{SecureContext_Header}} \{{AvailableInWorkers("window_and_dedicated")}}
```

## 手動で追加しなければならないマクロ

以下のマクロは手動で追加する必要があります。

- `\{{SecureContext_Header}}` — これは「**保護されたコンテキスト**」バナーを生成して、この技術が[保護されたコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ利用可能なことを示します。
- `\{{AvailableInWorkers}}` — これによって、「**ワーカーで利用できる**」というメモが生成され、その技術が[ワーカーのコンテキスト](/ja/docs/Web/API/Web_Workers_API)で利用できることを示します。

## 自動的に追加されるバナー

[browser compat data](https://github.com/mdn/browser-compat-data) リポジトリーに格納されるステータスに合わせて、以下のマクロが自動的にコンテンツに追加されます。

- `\{{SeeCompatTable}}` — 「**これは実験的な技術です**」バナーを生成して、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。
- `\{{Deprecated_Header}}` — 「**非推奨**」バナーを生成して、この技術の利用を[避けるべき](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#非推奨)であることを示します。
- `\{{Non-standard_Header}}` — 「**標準外**」バナーを生成して、この技術が複数のブラウザーで実装されていても、正式な仕様書の一部ではないことを示します。

値を変更するのであれば、 [browser-compat-data リポジトリーで機能の状態を更新](/ja/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses)してください。

> [!NOTE]
> コンテンツ内でこれらのマクロを手動で更新することはできますが、ブラウザー互換性データと一致しない値は置き換えられたり除去されたりします。

> [!NOTE]
> `\{{SeeCompatTable}}`、`\{{Deprecated_Header}}`、`\{{Non-standard_Header}}` のバナーがあるページは、ページメタデータにそれぞれ `experimental`、`deprecated`、`non-standard` のステータス値があります。
> このメタデータは、ヘッダーと同じときに自動的に更新されます。
> バナーマクロはこのステータスメタデータには依存しません（しかし、いつか生成されるかもしれません）。

## 実験的: 「規格の状況」バナー

時には、ある機能をどのように開発するかについて、ブラウザーベンダーの意見が一致しないことがあり、現在の形に反対するブラウザーもいるかもしれません。例外的なケースとして、 MDN はこの状態の技術を文書化し、ウェブコミュニティに使い勝手を試してもらい、フィードバックを提供し、ブラウザーベンダーがコンセンサスを得る手助けをしています。

このような機能の、現在の標準化状況を読者に明らかにすることは重要です。この情報を表すための長期的な解決策は最終的なものではありませんが、混乱を避けるために、注目度の高い固有の技術については以下のようにしています。

- その機能のランディングページにこのバナーを追加します（その機能のすべてのサブページではありません）。

  ```md
  > [!WARNING]
  > この機能は現在 <number> 件のブラウザーベンダーが反対しています。反対意見の詳細については、[規格の状況](#規格の状況)の節を参照してください。
  ```

  - `<number>` は、その機能に反対しているブラウザーベンダーの数に置き換えます。
  - （英語版において） `vendor` または `vendors` は適切に使用してください。

- 上記バナーと同じページに、標準の「仕様書」の下位セクションとして「規格の状況」を追加します。

> [!NOTE]
> [Related Website Sets](/ja/docs/Web/API/Storage_Access_API/Related_website_sets) がランディングページのバナー、「規格の状況」セクション、何を記述べきかという例になります。
