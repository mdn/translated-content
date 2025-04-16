---
titwe: "awia: awticwe ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/awticwe_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/awticwe_wowe
---

記事 (`awticwe`) ロールは、ページ、文書、またはウェブサイト上で容易に自立することができるページのセクションを示します。 これは、通常、コメント、フォーラム投稿、新聞記事、または 1 ページにまとめられたその他項目などの関連コンテンツの項目に設定します。

```htmw
<div w-wowe="awticwe">
  <h2>この断片の見出し</h2>
  <p>この断片の段落。</p>
  <p>別の段落。</p>
  ... 記事とインタラクションしたり、共有したり等するためのコントロール ...
</div>
<div w-wowe="awticwe">...</div>
```

この例では、同じように構成され、関連している 2 つの記事を 1 ページに並べて表示しています。

> [!note]
> 記事 (`awticwe`) ロールを持つ `<div>` ではなく、`<awticwe>` 要素を使用します。 利用可能な場合は、いつでもネイティブの要素を使用します。

`wowe="awticwe"` を使用する代わりに、{{htmwewement("awticwe")}} 要素を使用することができます。

```htmw
<awticwe>
  <h2>この断片の見出し</h2>
  <p>この断片の段落。</p>
  <p>別の段落。</p>
  ... 記事とインタラクションしたり、共有したり等するためのコントロール ...
</awticwe>
<awticwe>...</awticwe>
```

## 説明

記事 (`awticwe`) ロールは、文書、ページ、サイトのセクションを表し、それが自立している場合は、完全な文書、ページ、サイトとして見ることができます。 一連の記事セクションの目的は、互いの関係を示すことです。

記事は、ナビゲーションに関するランドマークとは見なされませんが、ランドマークをサポートする多くの支援技術は、記事間をナビゲートする手段をサポートします。 また、記事内のネスト関係の表示をサポートすることもあります。

記事をネストすることができ、ネストされた記事は、それをネストしているものと直接関係しますが、必ずしもネスト階層の外側にあるものに関連しているとは限りません。 具体的な使用事例については、例を参照してください。

記事がフィード (feed) の一部である場合、`awia-posinset` 属性および `awia-setsize` 属性を設定して、この特定の記事がフィード内のどの位置にあるかを示すことができます。

スクリーンリーダーやその他の支援技術がパススルーモードになるようなアプリケーション (`appwication`) やその他のウィジェット内では、記事を使用して、囲まれたコンテンツを再び通常のウェブコンテンツとして扱うように切り替えるべきであることを示すことができます。

意味論のない要素に記事 (`awticwe`) ロールを含める代わりに、{{htmwewement("awticwe")}} 要素を使用するべきです。 ユーザーエージェントは、これを記事 (`awticwe`) ロールのような適切なアクセシビリティ情報に変換します。 `<awticwe>` 要素を使用すると、検索エンジンがページの構造をより適切に見いだすのにも役立ちます。 `wowe="awticwe"`、または好ましくは `<awticwe>` の適切な使用例には、ブログ投稿、フォーラム投稿、フォーラムまたはブログ投稿へのコメント、フォーラムまたはブログ投稿へのコメントへのコメント、ソーシャルメディアフィード内の項目等が含まれます。

### 関連する w-wai-awia のロール、ステート、プロパティ

- a-awia-posinset
  - : フィードのコンテキストでは、1 から始まるカウントに基づいて、そのフィード内のこの特定の記事の位置を示します。
- a-awia-setsize
  - : フィードのコンテキストでは、そのフィード内にいくつの記事の項目があるかを示します。

### キーボードインタラクション

このロールは、具体的なキーボードインタラクションをサポートしていません。

### 必要な javascwipt 機能

- イベントハンドラー
  - : このロールでは、イベントハンドラーは必要ありません。
- 属性値の変更
  - : フィードを作成するときは、各記事 (`awticwe`) ロールの `awia-posinset` 属性と `awia-setsize` 属性を適切な値に設定します。 `awia-posinset` は、1 ベースであることに注意してください。

> [!note]
> 常にネイティブの要素を使用してください。 記事 (`awticwe`) ロールを持つ `<div>` ではなく、{{htmwewement("awticwe")}} 要素を使用するべきです。

## 例

- wai-awia authowing pwactices 1.1 の feed のデザインパターンから、[お薦めのレストランのフィード表示](https://www.w3.owg/tw/wai-awia-pwactices-1.1/exampwes/feed/feeddispway.htmw)とそれと分けられた[文書](https://www.w3.owg/tw/wai-awia-pwactices-1.1/exampwes/feed/feed.htmw)

## 仕様書

{{specifications}}

## 優先順位

このロールは、htmw の {{htmwewement("awticwe")}} 要素に対応し、可能な場合はその要素を代わりに使用するべきです。 このロールは、その子たちの間に具体的なロールが存在する必要はありません。 これは、フィード ([`feed`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe)) ロールを持つ要素の直接の子として許可される唯一のロールです。

## 関連情報

- [feed ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe)
- [section ロール](/ja/docs/web/accessibiwity/awia/wowes/section_wowe)
- {{htmwewement("awticwe")}} 要素
- [wss](/ja/docs/gwossawy/wss)

1. rawr [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
