---
title: "ARIA: application ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/application_role
original_slug: Web/Accessibility/ARIA/Roles/application_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

`application` ロールは、支援技術に対し、要素とそのすべての子要素をデスクトップアプリケーションと同様に扱い、従来の HTML 解釈手法は使わないことを指示します。このロールは、とても動的でデスクトップのようなウェブアプリケーションを定義する場合にのみ使ってください。ほとんどのモバイルおよびデスクトップウェブアプリは、この目的においてはアプリケーションとはみなされません。

```html
<div role="application">...</div>
```

これは、デスクトップアプリケーションの一部であるかのように、この `<div>` 要素とその全ての子孫を扱うことを定義します。

## 説明

`application` [WAI-ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles) は、支援技術に対し、このウェブコンテンツの部分に、他の既知の HTML 要素や WAI-ARIA ウィジェットに準拠しない要素が含まれていることを示します。HTML 構造やウィジェットの特別な解釈は一切行わず、マウス、キーボード、タッチ操作の処理はブラウザーとウェブアプリケーションに全て委ねるべきです。

このモードでは、ウェブ作成者は、キーボード入力、フォーカス管理、その他のインタラクションを全て処理する責任があり、支援技術が最終的に何らかの処理を行うとは想定できません。

アプリケーション (`application`) ロールに包まれるウェブアプリケーションに、通常のウェブコンテンツと同様に扱われるべき部分が含まれている場合は、文書 ([`document`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)) ロールや記事 ([`article`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)) ロールを使うべきです。

### 背景

特に Windows 環境では、歴史的経緯から、スクリーンリーダーやその他の支援技術（AT）は、ブラウザーの読み込みが終わった後、ウェブコンテンツ全体を一度に取得するのが一般的でした。支援技術は、視覚障害のあるユーザーがコンテンツを見やすいように、独自の表示形式を作成します。これは、しばしば「仮想ドキュメント」、「ブラウズモード」などと呼ばれます。ドキュメントは、単一列表示に最適化されます。キーボード操作モデルは、ワープロソフトにとてもよく似ており、ユーザーは行ごと、文ごと、段落ごとに読み上げることができます。支援技術（AT）は、リンク、見出し、フォームコントロール、表、リスト、画像など、あらゆる意味情報を読み上げます。

さらに、視覚障害のあるユーザーが特定の要素タイプを介してページをざっと閲覧できるように、いわゆる「クイックナビゲーションキー」が長年にわたって確立されています。こうした要素には通常、見出し、フォームフィールド、リスト、表、リンク、画像、ランドマーク領域などが含まれます。

この全てがうまくいくためには、支援技術はほぼすべてのキーボード入力を受け取って処理し、ブラウザーや他のユーザーエージェントには何も渡しません。ウェブページと対話できるように、標準的なウィジェットセットが認識され、特定のキー（通常は Enter キー）を押すとこのモードがオフになります。スクリーンリーダーモード（「フォームモード」または「フォーカスモード」とも呼ばれます）では、すべてのキーボード入力が再びブラウザーに渡されます。 <kbd>Escape</kbd> は、_browse_ モードに戻る最も一般的な方法ですが、特定の `application` セクション内では、スクリーンリーダーによっては、このモードを意図的に終わるために別のキーが必要になる場合があります。例えば、JAWS では <kbd>NUMPAD PLUS</kbd> キーが必要です。

`application` ロールは、標準セットに含まれていないウィジェットが、ウェブコンテンツとのインタラクションに _browse_ モードと _focus_ モードのどちらも使う支援技術において、直接コントロールできるようにするための手段を提供するように作られています。ほとんどの一般的なウィジェットは、想定されるキーボード操作動作を備えています。そのため、ウェブ制作者がカスタムのキーボード操作を作ると、混乱を招く可能性があります。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`document`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)、[`article`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
  - : アプリケーションの特定の部分を通常のウェブコンテンツとして扱うために用います。
- [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : アプリケーション内のフォーカスを管理するために用います。
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : アプリケーション名、または公開されているウィジェットの目的を示すために用います。
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : この要素のナビゲーションまたは操作に関する追加の指示を含む要素の ID を参照するために使われます。
- [`aria-roledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : スクリーンリーダーが読み上げる、より細かい役割テキストをアプリケーションに提供するために使われます。これはローカライズするべきです。
- [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : 要素は表示されているが無効になっていることを示します。
- [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : 設定されている要素のエラーメッセージを提供する要素への参照です。
- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : `true` に設定すると、この要素が所有または制御するグループ化要素を展開されます。`false` に設定すると、折りたたまれます。
- [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : メニューやダイアログなど、要素によってトリガーされるポップアップが存在することを示します。

### キーボードインタラクション

キーボード操作はウェブ開発者が全てコントロールでき、実装するウィジェットの種類に応じて自由に決められます。例えば、スライドアプリケーションでは、矢印キーを使ってスライド上の要素を置き、ARIA ライブリージョンを介した音声フィードバックで位置や他のオブジェクトとの重なり状態を伝えるウィジェットを作れます。フォーカスは _aria-activedescendant_ によって管理されます。

<kbd>Tab</kbd>、<kbd>Space</kbd>、<kbd>Enter</kbd> キー、および <kbd>Escape</kbd> キーは、アプリケーション側で処理するべきです。ただし、ブラウザーからのキーボードナビゲーションをサポートするアプリケーション内の標準ウィジェット（例えば [input](/ja/docs/Web/HTML/Reference/Elements/input) 要素）にフォーカスが設定されている場合は例外です。

### 必要な JavaScript 機能

- キー操作
  - : キーボード入力の処理とフォーカスの制御に用います。
- クリック、タッチ
  - : ウィジェットに応じて適切に処理してください。
- 属性値の変更
  - : [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) は、アプリケーションコンテナ内のフォーカスを管理するために使われます。キーボード操作やその他のアプリケーションイベントによってフォーカスや操作ポイントが変更された場合に設定されます。

> [!NOTE]
> アプリケーション (`application`) ロールには、関連する HTML ウィジェットがないため、全て自由形式です。アプリケーションの作成者は、ユーザーが抜け出せないフォーカストラップに陥らないよう、全ての責任を負わなければなりません。ページの他の部分にある通常のウェブコンテンツに戻ることを含む、インタラクションの全ての側面を処理するべきです。賢く、そして慎重に使ってください！

## 例

アプリケーション (`application`) ロールを適切に使ういくつかの有名なウェブアプリケーションは次のとおりです。

- グーグルの Docs、Sheets、Slides
- Mozilla Developer Network で使われているような CKEditor や TinyMCE などの WYSIWYG ウェブエディタ
- Gmail の一部

## アクセシビリティに関する懸念

`application`ロールを不適切に使うと、意図せずウェブページの情報へのアクセス権限を奪ってしまう可能性があるため、用いる時は十分気を付けてください。本当に必要なのか、同じタスクを他の既知のウィジェットで実現できないのかをよく考えてください。

`application` ロールを使う場合は、例えば `<body>` 要素ではなく、可能な限り最下位の共通コンテナに加えてください。また、作成したコードが意図どおりに動くことを確かめるために、支援技術を使ってテストを行うようにしてください。

## 仕様書

{{Specifications}}

## 優先順位

アプリケーション (`application`) ロールを適用すると、この要素の全ての子孫要素がウェブコンテンツではなくアプリケーションコンテンツのように扱われます。ウェブコンテンツに対する支援技術の読み上げ機能は、一切適用されません。

## 関連情報

- [If you use the WAI-ARIA role `application`, please do so wisely](https://www.marcozehe.de/2012/02/06/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) — Marco Zehe のブログ記事 (英語)
- [Using the ARIA `application` role](https://tink.uk/using-the-aria-application-role/) - by Léonie Watson
