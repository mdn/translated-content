---
title: サイドバー
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: b16d05494dd1252531451ebc3e995ea0f2a9007b
---

すべての MDN のページにはサイドバーを付けます。
そのほとんどは、 YAML ファイルでデータ構造を定義し、フロントマターまたはマクロによってページにサイドバーを記載するシステムを使用して作成されています。

このガイドでは、サイドバーがどのように動作するのかを学び、必要に応じて既存のサイドバーを編集したり、新しいサイドバーを作成したりする方法を学びます。

> [!NOTE]
> サイドバーを編集している場合は、書式化とリダイレクトの同期に `yarn tool` コマンドを使用することができます。
> 詳しくは [Yari の CLI ツール](https://github.com/mdn/yari/blob/main/docs/cli-tool.md)のドキュメントを参照してください。

## サイドバーの働き

それぞれのサイドバーには、対応する YAML ファイルが MDN の `content` リポジトリーの [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) ディレクトリーの中にあります。このファイルでは、サイドバーリンクの階層構造、それぞれのリンクが指し示すべき URL、およびオプションのカスタム見出し/リンクテキストを定義しています。必要に応じて、これらのテキストをさまざまな言語にローカライズすることができます。

あなたが見ているこのページは、 [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) ファイルで定義されたサイドバーがあります。

このページ（および同じ文書ツリーのすべてのページ）のサイドバーは、フロントマター項目の `sidebar` を[文書のソース](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/ja/mdn/writing_guidelines/page_structures/sidebars/index.md)内に記載することで表示されています。

```md
---
title: サイドバー
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: b16d05494dd1252531451ebc3e995ea0f2a9007b
---

すべての MDN のページにはサイドバーを付けます。
```

フロントマターとは、ダッシュの連続で区切られた間のコンテンツを指します。フロントマターに `sidebar: mdnsidebar` を記載すると、システムは同じ名前の YAML ファイルを `files/sidebars` ディレクトリー内で探します。ファイルが見つかると、サイドバーのレンダリングと、 1 つまたは複数の順序付きリスト（{{htmlelement("ol")}}要素）としてページ上に配置する処理が自動的に行われます。

このページに戻る前に、サイドバーの周りをナビゲート操作してみてください。 通常、ページをナビゲートすると、現在いる節のリンクリストが展開され、他にも展開される一方で、他にもが折りたたまれ、現在いるページが強調表示されることに気づくでしょう。

## サイドバーの YAML の構文の解説

この節では、 MDN のサイドバーに含めることができるさまざまな機能と、それぞれの生成に使用できる YAML 構文について説明します。この文書化を進める中で、[既存のサイドバーの YAML](https://github.com/mdn/content/tree/main/files/sidebars) に対して機能を相互参照してください。

### 新しいサイドバーの作成

それぞれの YAML サイドバーのデータ定義の始めに `sidebar` キーを使用します。このキーの値は、サイドバーデータを定義するリストです。

```yaml
sidebar:
  # サイドバー定義の始まり
```

### 単一のリンク

サイドバーに単一のリンクを作成するには、 YAML リストアイテムに相対 URL が含めて記述してください。

```yaml
sidebar:
  - /MDN/Writing_guidelines/Page_structures/Sidebars
```

URL は MDN の URL 構造内の `docs` ディレクトリーからの相対 URL です。例えば、`/MDN/Writing_guidelines/Page_structures/Sidebars` はこのページへのリンクを生成します。システムは、リンク先のページの文書タイトルをリンクテキストとして自動的に使用します。
ページがフロントマターに `short-title` キーがある場合、そのキーがサイドバーのリンク表示テキストとして代わりに使用されます。

文書の `title` でも `short-title` でもない独自のリンクテキストを使用したい場合は、リストアイテム内に 2 つのキーを記述する必要があります。 1 つは、独自のリンクテキストを持つ `title`、もう 1 つは、前述のような相対 URL を持つ `link` です。次の例では、このページへのリンクを前回と同様に作成しますが、リンクテキストは独自の「サイドバーを書く」になります。

```yaml
sidebar:
  - title: サイドバーを書く
    link: /MDN/Writing_guidelines/Page_structures/Sidebars
```

### セクションタイトル

セクションタイトルは、通常のサイドバーアイテムよりも大きなフォントサイズで表示されるサイドバーアイテムです。これは一般的に、ドキュメントのセクションのランディングページにリンクするサイドバー上部のタイトルとして、または具体的な大型サイドバーのセクション区切りとして使用されています（ [ウェブ開発の学習の章](/ja/docs/Learn_web_development)を参照）。

セクションタイトルは、リストアイテムに `type` キーと `section` の値を設定することで定義します。例を示します。

```yaml
sidebar:
  - type: section
    link: /MDN
```

セクションタイトルには、独自のリンクテキストを指定することができます。

```yaml
sidebar:
  - type: section
    title: Yay MDN!
    link: /MDN
```

または、リンクを含まないテキストリストアイテムのみを表示するには、 `link` キーを省略できます。

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### 展開/折りたたみができるリンクのリストを作成

展開/折りたたみができるリンクのリストを作成するには、まず通常通りリストアイテムを作成し、 `children` キーを記述します。このキーの値は、親アイテムの下に子アイテムとして表示したいリンクを含むリストです。それぞれの子リストアイテムは、親アイテムと同じ構文を使用します。子リストアイテムには、独自の `children` を含めることができるため、複数の階層レベルを作成することができます。例えば、次のような例があります。

```yaml
sidebar:
  - title: community_guidelines
    details: closed
    children:
      - /MDN/Community
      - title: contributing_to_mdn_web_docs
        details: closed
        children:
          - /MDN/Community
          - /MDN/Community/Getting_started
          - /MDN/Community/Security_vulnerability_response
      - /MDN/Community/Open_source_etiquette
      - /MDN/Community/Communication_channels
      - /MDN/Community/Discussions
# etc.
```

なお、`details` キーにも注意してください。これは、ページが最初に読み込まれた際に、リストアイテムの子リストが閉じられた状態で表示されるか、開かれた状態で表示されるかを制御します。利用可能な値は次の通りです。

- `closed`: 現在のページがいずれかの子ページにリンクされていない限り、子ページは閉じられて表示されます。リンクされている場合は、開いた状態になります。
- `open`: 子は常に開いて表示されます。

リストアイテムに `children` および `details` が指定されている場合、そのアイテムは、{{htmlelement("details")}}/{{htmlelement("summary")}} 要素構造でレンダリングされ、その中に子リストが含まれます。この子リストは、展開/折りたたみボタンをクリックするか、サマリーにフォーカスして <kbd>Enter</kbd>/<kbd>Return</kbd> キーを押すことで展開/折りたたみすることができます。

### サブページのリストの自動的なレンダリング

特定のページのサブページへのリンクを含むリストを作成したい場合は、リストアイテムを指定して、タイプキーの値を `listSubPages`、パスキーの値をリンクを作成したいサブページへのパスとして指定することで、これを作成できます。例えば、 [Glossary](/ja/docs/Glossary) サイドバーの定義全体（[`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml) を参照）は次のようになります。

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

これによって、用語集のランディングページに戻るリンクが含まれたセクションタイトルを伴うサイドバーと、用語集の子ページすべてへのリンクが掲載されている最上位のリストが表示されます。

これを行としてレンダリングし、サブページが展開されたり折りたたまれたりする子リストとして現れるようにしたい場合は、親アイテムに表示するテキストを指定する `title` キーと、`<details>`/`<summary>` 構造の開閉状態を指定する `details` キーを追加で記載する必要があります。

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### リストのサブページのグループ化

`listSubPagesGrouped` の `type` 値もあります。 これによって、同じ部分文字列に続いてハイフン（例えば `item-`）で終わるタイトルを持つすべてのサブページが、その部分文字列にハイフンとアスタリスク（例えば `item-*`）を追加したリストアイテムの下のサブリストに記載されます。

例えば、この記事を書いている時点では、 MDN 用語集には CORS 関連のページが 3 つ含まれています。

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

用語集サイドバーの定義をこれに更新するとしたら、このようにします。

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

これらのページへのリンクは、次のような子リスト構造にグループ化されます。

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

もっと現実的な例は、 [CSS](/ja/docs/Web/CSS) のサイドバー定義（[`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml) を参照）にあり、 `listSubPagesGrouped` を使用して、一括指定および個別指定プロパティの関連リンクをグループ化することができます。プロパティのサイドバーメニューを生成するリストアイテムは次のようになります。

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

このリストアイテムの定義には `tags` も含まれており、これは次の節で取り上げるテーマです。

#### リストのサブページの絞り込み

同じディレクトリー内に複数の異なる種類のページ（ページのフロンマター内に指定された `page-type` キーで指定）がある場合、 `listSubPages` および `listSubPagesGrouped` によって生成されたリストアイテムをページ種類別にフィルターすることができます。これを行うには、リストアイテム内に `tags` キーを含めることができます。このキーの値が、生成されたリストアイテムに含める単一のページ種類またはページ種類のリストを示します。 CSS サイドバーには、例えば次のようなものが含まれています。

```yaml
- type: listSubPages
  path: /Web/CSS
  title: Modules
  tags: css-module
  details: closed
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Selectors
  tags: css-selector
  details: closed
# etc.
```

### テキスト文字列のローカライズ

上で説明したように、リンクテキストやセクションタイトルを埋め込むためのカスタムテキストを `title` キーに指定することができます。そのテキストを複数の言語にローカライズしたい場合は、`title` キーにプレースホルダーを含め、 YAML ファイルの末尾にある `l10n` 辞書内に、そのプレースホルダーをそれぞれの言語でどのように定義するかを記載することができます。

どのようなものか、例を見てみましょう。 [HTML](/ja/docs/Web/HTML) サイドバー（[`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml) を参照）では、すべての {{htmlelement("input")}} 型のリファレンスページへのリンクのリストを生成するリストアイテムを定義します。親リストアイテムのテキストは、 `title` キーに `Input_types` のプレースホルダーとして定義されます。

```yaml
- type: listSubPages
  path: /Web/HTML/Reference/Elements/input
  title: Input_types
  details: closed
  code: true
```

ファイルの一番下では、`l10n` 辞書を定義しています。 `l10n` 内の各キーは、さまざまなロケールを表します。 `en-US`、`fr`、`ja` などです。 これらの各キーの値は、サブ辞書であり、そのキーはリストアイテム定義で定義されているプレースホルダーです。 各キーの値は、それぞれのロケールにおけるそのプレースホルダーの値です。

例を示します。

```yaml
l10n:
  en-US:
    Input_types: <code>&lt;input&gt;</code> types
  fr:
    Input_types: Types <code>&lt;input&gt;</code>
  ja:
    Input_types: <code>&lt;input&gt;</code> 型
  ko:
    Input_types: <code>&lt;input&gt;</code> types
  pt-BR:
    Input_types: Tipos de <code>&lt;input&gt;</code>
  ru:
    Input_types: Типы <code>&lt;input&gt;</code>
  zh-CN:
    Input_types: <code>&lt;input&gt;</code> 类型
```

簡潔にするため、各ロケールには `Input_types` の値のみ含まれます。

サイドバーがレンダリングされる際、システムは、アクセスしているサイトのどのバージョンのロケールであっても、 `Input_types` テキストを定義した値に置き換えます。例えば、次の例と比較してください。

- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

MDN のロケールにアクセスし、特定のプレースホルダに対して値が定義されていない場合、既定では `en-US` バージョンが使用されます。 `en-US` バージョンが定義されていない場合、リテラルプレースホルダテキストが表示されます（上記の場合、 `Input_types` となります）。

## 標準外のサイドバー

MDN で使用されているサイドバーの中には、上記で説明されている標準システムを使用していないものもあります。これらは複雑な完全に自動化されたマクロであり、変更する必要が頻繁にあるわけではありません。

- `\{{APIRef("<API>")}}`
  - : [API リファレンスページ](/ja/docs/Web/API#インターフェイス)に表示される API サイドバー。それぞれのインターフェイスに対して、マクロはインターフェイスで定義されたメンバー（プロパティ、メソッド、イベントなど）へのリンクを自動生成します。単一の引数は、 [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) ファイルで定義された関連する API グループの名前です。サイドバーの下部に表示される関連ページを編集するには、その API の GroupData 項目を編集します。
- `\{{DefaultAPISidebar("<API>")}}`
  - : [API ランディングページ](/ja/docs/Web/API#仕様書)に表示される API サイドバー。単一の引数は、 [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) ファイルで定義された関連する API グループの名前です。具体的な API のサイドバーにリンクされたガイド、インターフェイスなどを編集するには、その API の GroupData 項目を編集します。
- `\{{JSRef("<JS_topic>")}}`
  - : [JavaScript リファレンスページ](/ja/docs/Web/JavaScript/Reference)のサイドバー。単一の引数は、リンクを作成したいディレクトリーです。

これらのうちの 1 つが更新されるべきであるとお考えの場合は、[通常の方法](/ja/docs/MDN/Community/Communication_channels)で私たちにご連絡ください。

## 関連情報

- [マクロの使用](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [コンテンツリンクマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Links)
- [ページセクションマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [バナーと注意のマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
