---
title: <meta name="robots">
short-title: robots
slug: Web/HTML/Reference/Elements/meta/name/robots
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`robots`** は {{htmlelement("meta")}} 要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性の値で（多くの場合「ロボットタグ」と呼ばれます）、ウェブ{{glossary("Crawler", "クローラー")}}がページに対して行うクロールおよびインデックス作成の動作を定義します。
指定した場合、 `<meta>` 要素の [`content`](/ja/docs/Web/HTML/Reference/Elements/meta#content) 属性に、1 つ以上のルールをカンマで区切ったリストとして、クローラーに対する指示を定義します。

例えば、ページを検索結果のインデックスから除外することをクローラーに指示するには、`noindex` 値を使用することができます。

```html
<meta name="robots" content="noindex" />
```

> [!NOTE]
> 協力的なロボットだけがこのルールに従います。
> クローラーは、ヘッダーやメタ要素を読み込むために、リソースにアクセスする必要があります（[X-Robots-Tag: robots.txt との相互作用](/ja/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#interaction_with_robots.txt)を参照してください）。
> クローラーによる帯域幅の消費を防止したい場合は、リソースのクロールを完全にブロックする制限的な {{Glossary("robots.txt")}} ファイルの方が、インデックス作成ルールよりも効果的です。

## 使用上のメモ

`<meta name="robots">` 要素には、次の追加属性を指定することができます。

- [`content`](/ja/docs/Web/HTML/Reference/Elements/meta#content)
  - : `content` 属性は定義する必要があります。この属性の値は、協力的な検索エンジンロボットのインデックス作成およびクロール動作を設定します。
    カンマで区切られたリストとして、次のキーワードを 1 つ以上受け入れます。
    - `index`
      - : ロボットがページをインデックスに登録することを許可します。これは既定の動作です。
        主要なクローラーすべてで使用されます。
    - `noindex`
      - : ロボットにページをインデックスに登録しないようにリクエストします。
        主要なクローラーすべてで使用されます。
    - `follow`
      - : ロボットがページ上のリンクをたどることを許可します。これは既定の動作です。
        主要なクローラーすべてで使用されます。
    - `nofollow`
      - : ロボットに対して、ページ上のリンクをたどらないようリクエストします。
        主要なクローラーすべてで使用されます。
    - `all`
      - : `index, follow` と同等です。
        使用されるもの: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1).
    - `none`
      - : `noindex, nofollow` と同等です。
        使用されるもの: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1).
    - `noarchive`
      - : 検索エンジンにこのページの内容をキャッシュしないよう要求します。
        使用されるもの: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `nosnippet`
      - : 検索エンジンの結果でこのページの説明の表示を抑制します。
        使用されるもの: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `noimageindex`
      - : このページをインデックスされた画像の参照ページとして表示しないよう要求します。
        使用されるもの: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).
    - `nocache`
      - : `noarchive` と同等です。
        使用されるもの: [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).

## 解説

`robots` メタ値を設定するにあたって、いくつかの重要な注意事項があります。

- これらのルールに従うのは、協力的なロボットのみです。電子メールアドレスの収集者などの悪意のある行為者がディレクティブを無視することを防ぐことはできません。
- `<meta>` タグで定義されている場合でも、ロボットはこれらのルールを読み込むためにページにアクセスする必要があります。帯域幅を節約するには、代わりに [robots.txt ファイル](/ja/docs/Web/Security/Practical_implementation_guides/Robots_txt) を使用することを検討してください。
- `<meta name="robots">` タグと `robots.txt` は異なる役割を果たします。`robots.txt` はクロールを制御し、`robots` メタタグはインデックス作成やそれ以外の動作に影響を与えます。
- `robots.txt` によってブロックされたページは、それ以外のソースからリンクされている場合、インデックスに登録される場合があります。
- `noindex` ディレクティブは、ロボットがページを再訪問した後にのみ効果があります。そのため、 `robots.txt` がこれを妨げないようにしてください。
- 値によっては互いに排他的なものがあります。例えば `index` と `noindex`、 `follow` と `nofollow` などです。競合する値が使用された場合、動作は未定義になります。
- Google、Yahoo、Bing など一部のクローラーロボットでは、 HTTP ヘッダーの {{HTTPHeader("X-Robots-Tag")}} で提供された同じ値に対応しているものがあります。これにより、 PDF や画像などの HTML 以外の文書でもこれらの規則を使用することができます。

## 例

### robots キーワードの使用

次の例では、`nofollow` を使用して、クローラーがページ上のリンクをフォローしないように要求し、`noindex` を使用して、そのページをインデックスから除外するように要求しています。

```html
<meta name="robots" content="nofollow, noindex" />
```

## 仕様書

これはどの標準仕様にも属しませんが、検索ボット、ウェブクローラー、および類似のユーザーエージェントと通信するための事実上の標準手段です。

## ブラウザーの互換性

この機能はクローラーが監視することを意図しているため、「ブラウザー」の互換性は適用されません。

## 関連情報

- HTTP の {{httpheader("X-Robots-Tag")}} ヘッダー
- [robots.txt の構成](/ja/docs/Web/Security/Practical_implementation_guides/Robots_txt)ガイド
- 用語集の {{Glossary("robots.txt")}}
- 用語集の {{Glossary("Search engine", "検索エンジン")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions)
- [Using the robots meta tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#robotsmeta) (developers.google.com)
