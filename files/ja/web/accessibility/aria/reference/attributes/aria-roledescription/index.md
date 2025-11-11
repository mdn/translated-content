---
title: aria-roledescription
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription
l10n:
  sourceCommit: a3ca206486709d88291ee616182257eac2375143
---

`aria-roledescription` 属性は、要素のロールについて、人間が読める形で作成者がローカライズした説明を定義します。

## 解説

スクリーンリーダーなどの一部の支援技術（<abbr>AT</abbr>）は、要素のロールをユーザー体験の一部として提示します。`aria-roledescription` 属性は、AT によって要素のロールとして提示される、人間が判読できる別の名前を定義する方法を提供します。

> [!NOTE]
> aria-roledescription は、非対話型コンテナーロールの目的を明確にし、ウィジェットにさらに具体的な説明を提供する場合にのみ使用してください。

ユーザーは、既知のロール名の表示に基づいて、要素の目的を理解し、ウィジェットの場合はその操作方法を理解します。したがって、`group` や `region` などの非対話型コンテナーロールの目的を明確にするため、およびウィジェットにさらに具体的な説明を提供する場合にのみ `aria-roledescription` を使用してください。

`aria-roledescription` プロパティは、AT がロール名をローカライズして表現する方法を上書きします。ユーザーが理解できるロール名を上書きすると、ユーザーが要素を理解して操作する能力に悪影響を与える可能性があります。

`aria-roledescription` 属性の使用は避けてください。ユースケースが特別なものであり、固有のロールの説明に値すると思われる場合は、多くの場合、インタラクションは関連するロールを持つ小さな部分に分割できます。

ウィジェットの対話モデルに対応するセマンティックウィジェットロールまたは ARIA ウィジェットロールがない場合は `role="application"` を使用し、人間が判読可能で作成者がローカライズしたカスタマイズされたロール名を持つ `aria-roledescription` を提供し、`aria-describedby` を使用してユーザーへの指示を提供します。

AT は ARIA ロールの名前をカスタマイズおよびローカライズできます。ロール名をユーザーに対して表示する方法を変更するために `aria-roledescription` を使用している場合は、ローカライズを処理することを忘れないでください。ページがローカライズされるときに、値を翻訳する必要があります。

ロールがユーザーに提示される方法を変更しても、要素の機能には影響しません。例えば、要素に [`region`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) または [`button`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) のロールがあり、AT が次のリージョンまたはボタンに移動するための機能を提供する場合、`aria-roledescription` をそれぞれ `continent` および `escape` に設定しても、AT は引き続きそれらの機能を使用してリージョンやボタンに移動することを許可します。

繰り返しますが、`aria-roledescription` の使用は避けてください。この例では、`escape` はユーザーにとって意味を持ちませんが、`button` のラベルとして「escape」を使用すると意味を持ちます。

`aria-roledescription` を使用する場合は、適用される要素に有効な ARIA [`role`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles) があること、または暗黙的なロールセマンティクスがあること、また値自体が空でなく、空白文字以外の文字が含まれていることも確認してください。

`aria-brailleroledescription` を使用する場合は `aria-roledescription` が必要です。一般に `aria-brailleroledescription` は、点字でレンダリングすると `aria-roledescription` が過度に冗長になるという稀な場合にのみ使用してください。

## 例

次の例は、非対話型コンテナーがウェブベースのプレゼンテーションアプリケーションの「slide」であることを示すために `aria-roledescription` を使用する方法を示しています。

```html
<div
  role="article"
  aria-roledescription="slide"
  id="slide"
  aria-labelledby="slideheading">
  <h1 id="slideheading">Quarterly Report</h1>
  <!-- remaining slide contents -->
</div>
```

上の例では、スクリーンリーダーのユーザーは、正確性が低い「Quarterly Report, article」ではなく、「Quarterly Report, slide」と聞き取ることができます。

## 値

- `<string>`
  - : 空でない文字列、制約のない値型、空白以外の内容を含みます。

## 関連インターフェイス

- {{domxref("Element.ariaRoleDescription")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaRoleDescription`](/ja/docs/Web/API/Element/ariaRoleDescription) プロパティは、`aria-roledescription` 属性の値を反映します。
- {{domxref("ElementInternals.ariaRoleDescription")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaRoleDescription`](/ja/docs/Web/API/ElementInternals/ariaRoleDescription) プロパティは、`aria-roledescription` 属性の値を反映します。

## 関連付けられたロール

全てのロールと、`role="generic"` を除くすべての基本マークアップ要素でサポートされます。

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)
