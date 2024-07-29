---
title: サイドバー
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 948b1744c3da36c9fee2da82f5f340ec3e9f44c0
---

{{MDNSidebar}}

MDN コミュニティメンバーが編集できるすべてのページにはサイドバーがあります。これらのサイドバーはマクロを使用して生成されます。
この記事では、様々な MDN サイドバーマクロを記述し、MDN ページでサイドバーを記載する方法を示します。

このガイドでは、マクロだけを記載してリンクのサイドバーを作成する方法と、追加コンテンツを含むサイドバーを作成する方法を学びます。

## サイドバーの生成

すべてのページにサイドバーがあります。これらのサイドバーが現れるのは、サイドバーマクロがページに含まれていて、このサイト上の他のページへのリンクの潜在的な階層リストを作成しているからです。

サイドバーマクロが記載されている場合、サーバーは順序のないリンクのリストを含むコンテンツの節を作成します。作成されるリンク、表示される場所、表示方法は、使用するマクロと Markdown マクロ呼び出しに記載する引数に依存します。サイドバーの中には、ディレクトリー構造やページ種類に基づいたリンクを記載しているものもあります。他にも、 Yari にハードコードされた定義済みページのリストを記載しているものもあります。

### 単一マクロのサイドバーを含める

サイドバーマクロによって生成されたコンテンツだけを含めるには、マクロを各ページのフロントマターの直後とコンテンツの前に追加します。フロントマターは各ページのメタデータとオプションを指定します。 MDN のフロントマターには、ページタイトル、スラッグ、ページ種類に加え、仕様書 URL、ブラウザー互換性オブジェクトなど、ページ種類に応じた情報が含まれています。

例えば、この文書の最初の行はこう書かれています。

```md
---
title: サイドバー
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 948b1744c3da36c9fee2da82f5f340ec3e9f44c0
---

\{{MDNSidebar}}
```

フロントマターはダッシュの間のコンテンツです。サイドバーマクロはフロントマターの直後に記載します。 `\{{MDNSidebar}}` は MDN サイドバーをページに追加するサイドバーマクロです。サイドバーが単一のマクロ呼び出しの場合、マクロはフロントマターの直後に配置されます。

他にもいくつかサイドバーマクロがあります。

- `\{{CSSRef}}`

  - : すべての CSS ページに存在し、モジュール、プロパティ、セレクター、結合子、擬似クラス、擬似要素、アットルール、関数、型のリンクを含む CSS サイドバーを生成します、現在のページ種別のリンクリスト以外はすべて折りたたまれています。

- `\{{DefaultAPISidebar("<API_Title>")}}`

  - : 概要ページに表示される API サイドバーで、単一の引数は GroupData の API グループ名です。

- `\{{GlossarySidebar}}`

  - : すべての用語集ページに表示されている、セクションフィルターに先行する最上位の用語集用語リスト（曖昧性解消用語ではない）を含む用語集サイドバーを生成します。

- `\{{LearnSidebar}}`

  - : 学習セクション内のうち、よくある質問と how-to ページ（`QuickLinksWithSubpages` マクロを使用しています）以外のすべてのページに存在し、 Yari マクロファイルに存在する[ハードコードされたリンク](https://github.com/mdn/yari/blob/main/kumascript/macros/LearnSidebar.ejs)に基づいてサイドバーを生成します。このマクロはファイル構造に基づいていません。

- `\{{HTMLSidebar}}`

  - : HTML ドキュメント（チュートリアル、リファレンス、ガイドを含む）のサイドバーを生成します。このマクロは、要素と属性のリファレンスの章では `\{{ ListSubpagesForSidebar}}` マクロの呼び出しを含みますが、チュートリアルとガイドの [リンクはハードコーディングされています](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs)。

- `\{{HTTPSidebar}}`

  - : [HTTP ドキュメント](/ja/docs/Web/HTTP)（ガイドやリファレンス文書を含む） のサイドバーを生成します。

- `\{{PWASidebar}}`

  - : プログレッシブウェブアプリケーション (PWA) のドキュメント用のサイドバーを生成します。マクロはすべてのページを列挙します（ファイル構造には基づいていません）。

使用する適切なマクロは[ページの種類](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types)に依存します。各ページ種類の[テンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)には、そのページ種類に適したマクロが記載されています。

### 新しいサイドバーの作成

コンテンツを追加せずに、既存のサイドバーマクロを使用しましょう。全く新しいコンテンツの節を作成する場合は、 Yari で[サイドバーのマクロ](https://github.com/mdn/yari/blob/main/kumascript/macros/)を作成してください。

万が一、一時的なサイドバーを作成する必要がある場合、この節でその方法を説明します。仮のサイドバーを PR レビューに送信しないでください。

新しいサイドバーマクロを作成する必要がある場合は、以下の段階を従うことで、開発環境で作成することができます。

1. フロントマターの直後、コンテンツの前に現れるサイドバーマクロを除去してください。各文書はサイドバーを 1 つしか保有できません。
2. Markdown ファイルの終わりに、 HTML {{htmlelement("section")}} 要素を追加し、 `id` を `Quick_links` に設定してください。
3. 開きタグと閉じタグの間に、サイドバーに記載したい各セクションのコンテンツのディレクトリーのスラッグと追加のマークダウンを記述した `\{{ListSubpagesForSidebar()}}` マクロを追加します。

例えば、アクセシビリティのサイドバーを開発するとき、マークダウンファイルの終わりに次の例を一時的に記載することがありました（そして、フロントマター以下のすべてのサイドバーマクロを削除しました）。 ARIA ロール概要ページへのリンクが続く、すべての ARIA ロールページへのリンクを含むサイドバーを作成します。

```md
<section id="Quick_links">

1. [**Accessibility**](/ja/docs/Web/Accessibility)

   \{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility")}}

2. [**ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles)

   \{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles", "true")}}

3. [**ARIA 属性**](/ja/docs/Web/Accessibility/ARIA/Attributes)

   \{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Attributes", "true")}}

</section>
```

ページの最後のコンテンツとして掲載されている場合、 MDN をレンダリングするエンジンであるYariは開始タグにある `Quick_links` の ID を認識し、識別された `<section>` のコンテンツをサイドバーに変換します。

マクロ `\{{ListSubpagesForSidebar(<parameters>)}}` は最初の引数にスラッグを指定したページのサブページツリーを挿入します。上記は、すべてのアクセシビリティ文書へのリンクを格納し、 ARIA の役割と属性が続くサイドバーを作成します。

サイドバーに記載するリンクが決まったら、[サイドバーマクロ案を添えて Yari に](https://github.com/mdn/yari/blob/main/kumascript/macros/)プルリクエストを送信してください。

> [!NOTE]
> この `<section>` はフロントマターとページコンテンツの間ではなく、文書の最後に追加する必要があります。 1 ページに 1 つのサイドバーしか作成されないので、フロントマターの後に記載されているマクロは除去しなければなりません。

[マクロのソースコード](https://github.com/mdn/yari/tree/main/kumascript/macros)は GitHub で公開されています。各マクロには、引数がある場合はその引数も含め、マクロ自体の文書化が記載されています。

## 関連情報

- [マクロの使用](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [コンテンツリンクマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Links)
- [ページセクションマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [バナーと注意マクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
- [すべてのマクロ](https://github.com/mdn/yari/tree/main/kumascript/macros) on Github
