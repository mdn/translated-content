---
title: "ARIA: presentation ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/presentation_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

`presentation` ロールとその同義語である `none` は、要素の暗黙の ARIA の意味づけがアクセシビリティツリーに公開されないようにします。

要素のコンテンツは支援技術から引き続き利用できます。コンテナーの意味づけ、および場合によっては必須の関連する子孫要素の意味づけのみが、アクセシビリティ API へのマッピングを公開しなくなります。

## 説明

ARIA は主に意味づけを表現するために使用されますが、要素の意味づけを支援技術から隠すことが役立つ場面もあります。これは `presentation` ロールまたはその同義語である `none` ロールで行い、要素が表示目的のみに使用されており、アクセシビリティの意味づけを持たないことを宣言します。

`<h2 role="presentation">Democracy Dies in Darkness</h2>` と記述すると、{{HTMLElement("Heading_Elements", "h2")}} 要素の見出しの意味づけが除去され、`<div>Democracy Dies in Darkness</div>` と同等になります。見出しロールの意味づけは除去されますが、コンテンツ自体は引き続き利用できます。

要素に必須の子孫要素がある場合、例えば {{HTMLElement('table')}} の各種要素や {{HTMLElement('ul')}} または {{HTMLElement('ol')}} の子である {{HTMLElement('li')}} などの場合、テーブルやリストに `presentation` または `none` ロールを指定すると、適用された要素とその必須の子孫要素の既定の意味づけが除去されます。

`presentation` または `none` が {{HTMLElement('table')}} 要素に適用された場合、子孫の {{HTMLElement('caption')}}、{{HTMLElement('thead')}}、{{HTMLElement('tbody')}}、{{HTMLElement('tfoot')}}、{{HTMLElement('tr')}}、{{HTMLElement('th')}}、{{HTMLElement('td')}} の各要素はロールを継承し、支援技術に公開されなくなります。ただし、{{HTMLElement('th')}} や {{HTMLElement('td')}} 要素の内部にある要素（入れ子のテーブルを含む）は支援技術に公開されます。

```html
<ul role="presentation">
  <li>
    <a href="#">Link 1</a>
  </li>
  <li>
    <a href="#">Link 2</a>
  </li>
  <li>
    <a href="#">Link 3</a>
  </li>
</ul>
```

`presentation` ロールが {{HTMLElement('ul')}} 要素に適用されているため、すべての子の {{HTMLElement('li')}} 要素が `presentation` ロールを継承します。これは、ARIA が `listitem` 要素に親の `list` 要素を持つことを要求しているためです。この場合、{{HTMLElement('li')}} 要素は支援技術に公開されませんが、これらの必須要素の子孫要素は公開されます。もしこれらの {{HTMLElement('li')}} の中にリストを入れ子にした場合、それらは支援技術から見えるようになります。必須の子要素を持たない要素については、`role="presentation"` または `role="none"` を持つ要素の内部に入れ子にされた要素は、その意味づけを保持します。この場合、{{HTMLElement('li')}} 要素の中に含まれる {{HTMLElement('a')}} 要素は公開されます。

{{HTMLElement('a')}} は特殊なケースです。`presentation` または `none` ロールが直接適用されたとしても、そのロールは公開されます。ブラウザーは、リンクや入力欄をなどのフォーカス可能な要素や、[tabindex](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性が設定されている要素に対して `role="presentation"` および `role="none"` を無視します。また、要素に [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) などのグローバル ARIA ステートやプロパティが含まれている場合も、ブラウザーはロールの指定を無視します。

> [!NOTE]
> `role="presentation"` を持つ要素はアクセシビリティツリーの一部ではないため、アクセシブル名を持つべきではありません。[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) や [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用**しないでください**。

### 関連する WAI-ARIA のロール、ステート、プロパティ

なし。グローバル ARIA ステートやプロパティが設定されている場合、`presentation` や `none` は無視され、要素の暗黙のロールが使用されます。

## 例

```html
<hr role="none" />
```

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) と [`role="presentation/none"`](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) の比較 - Scott O'Hara 著
