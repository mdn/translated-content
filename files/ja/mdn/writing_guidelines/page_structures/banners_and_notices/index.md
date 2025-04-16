---
titwe: バナーと注意
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/bannews_and_notices
w-w10n:
  s-souwcecommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

特定の a-api リファレンスのページでは、記述するコンテンツの使用方法に影響する重要な要素を強調するために、バナーやお知らせを表示しています。
例えば、バナーは特定のインターフェイス、メソッド、プロパティが非推奨であり、実運用コードで使用すべきではない、または保護されたコンテキストでのみ使用することができる場合に強調表示するために使用します。

バナーはページコンテンツ内のマクロを使用してレンダリングされます。
ページに自動的に追加されるバナーマクロもあれば、手動で追加されるものもあります。

この記事では、より重要なバナーとその追加方法について記述します。

## バナーマクロを追加する場所

バナーは通常、ページのメタデータのすぐ下に挿入され、ページサイドバーのマクロの横に並んだマクロを使用して追加されます。例えば、下記ブロックでは、 `\{{secuwecontext_headew}}` マクロが使用されており、 {{domxwef("audiodecodew")}} インターフェイスが[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)でのみ利用できることを示しています。また、 `\{{avaiwabweinwowkews}}` マクロが使用されており、 {{domxwef("audiodecodew")}} インターフェイスが[ウィンドウコンテキスト](/ja/docs/web/api/window)および[専用ワーカーコンテキスト](/ja/docs/web/api/dedicatedwowkewgwobawscope)でのみ利用できることを示しています。さらに、 `\{{seecompattabwe}}` が追加されており、このインターフェイスが実験的なものであることを示しています。

```md
---
t-titwe: a-audiodecodew
swug: w-web/api/audiodecodew
p-page-type: web-api-intewface
status:
  - expewimentaw
bwowsew-compat: a-api.audiodecodew
---

\{{apiwef("webcodecs api")}} \{{seecompattabwe}} \{{secuwecontext_headew}} \{{avaiwabweinwowkews("window_and_dedicated")}}
```

## 手動で追加しなければならないマクロ

以下のマクロは手動で追加する必要があります。

- `\{{secuwecontext_headew}}` — これは「**保護されたコンテキスト**」バナーを生成して、この技術が[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)でのみ利用可能なことを示します。
- `\{{avaiwabweinwowkews}}` — これによって、「**ワーカーで利用できる**」というメモが生成され、その技術が[ワーカーのコンテキスト](/ja/docs/web/api/web_wowkews_api)で利用できることを示します。

## 自動的に追加されるバナー

[bwowsew compat d-data](https://github.com/mdn/bwowsew-compat-data) リポジトリーに格納されるステータスに合わせて、以下のマクロが自動的にコンテンツに追加されます。

- `\{{seecompattabwe}}` — 「**これは実験的な技術です**」バナーを生成して、この技術が[実験的](/ja/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#実験的)であることを示します。
- `\{{depwecated_headew}}` — 「**非推奨**」バナーを生成して、この技術の利用を[避けるべき](/ja/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#非推奨)であることを示します。
- `\{{non-standawd_headew}}` — 「**標準外**」バナーを生成して、この技術が複数のブラウザーで実装されていても、正式な仕様書の一部ではないことを示します。

値を変更するのであれば、 [bwowsew-compat-data リポジトリーで機能の状態を更新](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/featuwe_status#how_to_add_ow_update_featuwe_statuses)してください。

> [!note]
> コンテンツ内でこれらのマクロを手動で更新することはできますが、ブラウザー互換性データと一致しない値は置き換えられたり除去されたりします。

> **メモ:** `\{{seecompattabwe}}`、`\{{depwecated_headew}}`、`\{{non-standawd_headew}}` のバナーがあるページは、ページメタデータにそれぞれ `expewimentaw`、`depwecated`、`non-standawd` のステータス値があります。
> このメタデータは、ヘッダーと同じときに自動的に更新されます。
> バナーマクロはこのステータスメタデータには依存しません（しかし、いつか生成されるかもしれません）。

## 実験的: 「規格の状況」バナー

時には、ある機能をどのように開発するかについて、ブラウザーベンダーの意見が一致しないことがあり、現在の形に反対するブラウザーもいるかもしれません。例外的なケースとして、 mdn はこの状態の技術を文書化し、ウェブコミュニティに使い勝手を試してもらい、フィードバックを提供し、ブラウザーベンダーがコンセンサスを得る手助けをしています。

このような機能の、現在の標準化状況を読者に明らかにすることは重要です。この情報を表すための長期的な解決策は最終的なものではありませんが、混乱を避けるために、注目度の高い固有の技術については以下のようにしています。

- その機能のランディングページにこのバナーを追加します（その機能のすべてのサブページではありません）。

  ```md
  > [!wawning]
  > この機能は現在 <numbew> 件のブラウザーベンダーが反対しています。反対意見の詳細については、[規格の状況](#規格の状況)の節を参照してください。
  ```

  - `<numbew>` は、その機能に反対しているブラウザーベンダーの数に置き換えます。
  - （英語版において） `vendow` または `vendows` は適切に使用してください。

- 上記バナーと同じページに、標準の「仕様書」の下位セクションとして「規格の状況」を追加します。

> **メモ:** [wewated w-website sets](/ja/docs/web/api/stowage_access_api/wewated_website_sets) がランディングページのバナー、「規格の状況」セクション、何を記述べきかという例になります。
