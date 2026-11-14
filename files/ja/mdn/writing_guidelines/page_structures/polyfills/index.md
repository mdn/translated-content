---
title: ポリフィル
slug: MDN/Writing_guidelines/Page_structures/Polyfills
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

このページでは、[JavaScript](/ja/docs/Web/JavaScript) と [Web API](/ja/docs/Web/API) のリファレンスドキュメントにポリフィルを含める際の MDN の方針を説明します。

{{glossary("Polyfill", "ポリフィル")}}とは、ウェブプラットフォーム機能をネイティブに対応していないブラウザーでも、ウェブサイトから利用できるようにする実装です。ポリフィルを使うと、対象となるブラウザーの一部が使用する機能に対応していない場合でも、ウェブ開発者は複数のブラウザーやブラウザーのバージョンを対象とする単一のコードベースを作成できます。

ポリフィルはウェブ開発者にとって重要ですが、リスクもあります。不具合のあるポリフィルはウェブサイトを壊したり、セキュリティ上の脆弱性を生み出したりする可能性があります。このため、MDN は特定のポリフィル提供元を推奨し、提供元を追加する際には非常に慎重な方針をとっています。

## JavaScript リファレンスにおけるポリフィル

### 選定されたポリフィル

[JavaScript リファレンスドキュメント](/ja/docs/Web/JavaScript)では、次の 2 つの提供元のポリフィルにリンクできます。

- [core-js](https://core-js.io/) ライブラリー
- [es-shims](https://github.com/es-shims) 組織

提供元は、次の基準に基づいて MDN メンテナーが選定します。

- 実装を提供する機能の仕様への準拠
- [npm](https://www.npmjs.com/) のダウンロード数などの指標で確認できる、ウェブ開発コミュニティでの採用状況

### ポリフィル提供元の追加提案

[MDN ディスカッションフォーラムで議論を始める](https://github.com/orgs/mdn/discussions)ことで、誰でも MDN にポリフィルの提供元を追加するよう提案できます。ただし、ウェブ開発者に問題を引き起こすポリフィルを推奨するリスクを減らすため、MDN メンテナーは、MDN が認めてリンクするポリフィルの数を非常に少なく保つことを想定しています。

### ページへのポリフィルの組み込み

JavaScript リファレンスドキュメントのページでポリフィルにリンクする場合、ページ末尾の「関連情報」セクションにリンクを追加します。

リンクは「関連情報」のリストの先頭に、次の形式で配置します。

```md
- [`featureName` のポリフィル (`project-name`)](link)
```

## Web API リファレンスにおけるポリフィル

### 選定されたポリフィル

[Web API リファレンスドキュメント](/ja/docs/Web/API)では、機能自体の仕様とともに保守されているポリフィルにリンクできます。

例えば、[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) には、[仕様と同じリポジトリーで保守されているポリフィル](https://github.com/w3c/trusted-types?tab=readme-ov-file#polyfill)があります。そのため、MDN の信頼型 API リファレンスドキュメントからこのポリフィルにリンクできます。

### ページへのポリフィルの組み込み

通常、ポリフィルは[その API の概要ページ](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#web_api_page_types)に組み込みます。
