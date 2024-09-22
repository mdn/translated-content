---
title: Accessible description (アクセシブル説明)
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 6d37e664f5981436dfbba7a67f008a30c5238e00
---

{{GlossarySidebar}}

**アクセシブル説明**は、支援技術のユーザーが UI 要素とそのコンテキストを理解するのに役立つ追加情報を提供するユーザーインターフェイス要素の説明です。 HTML 要素に関連付けられたテキストによる説明で、支援技術のユーザーに要素の{{glossary("accessible name", "アクセシブル名")}}で指定された以上の説明を提供します。

要素のアクセシブル説明は、{{glossary("accessibility tree", "アクセシビリティツリー")}}の一部であり、ウェブコンテンツを{{glossary("Screen_reader", "スクリーンリーダー")}}や他の支援技術に利用できるようにし、その結果、支援技術のユーザーもコンテンツを利用できるようにします。

{{htmlelement("table")}} のアクセシブル説明は最初の {{htmlelement("caption")}} であり、{{htmlelement("figure")}} のアクセシブル説明は {{htmlelement("figcaption")}} であり、{{htmlelement("summary")}} は、それを囲む {{htmlelement("details")}} のコンテンツのアクセシブル説明であり、ボタン型の {{htmlelement("input")}} 要素の場合は `value` 属性の値であり、要素に `aria-describedby` 属性または `aria-description` 属性がある場合はそちらが優先されます。

他の要素では、説明を関連する要素にプログラム的に関連付ける必要があります。これらの場合、アクセシブル説明は [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 属性、 [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-description) 属性、[`title`](/ja/docs/Web/HTML/Global_attributes#title) 属性のいずれかによって指定されます。 `title` がその要素の{{glossary("accessible name", "アクセシブル名")}}でもない場合、優先順位の高い順に指定します。

説明はテキスト文字列に縮小されます。例えば、要素の `aria-describedby` 属性の値が HTML {{htmlelement("img")}} の `id` である場合、説明文は画像（通常は画像の `alt` 属性）の説明になります。

ページ上のどの要素についても、アクセシブル説明を調べることができます。ブラウザー開発者ツールのアクセシビリティタブを見ていくと、現在選択されている要素のアクセシビリティ情報が提供されています。

## 関連情報

- {{glossary("accessible name", "アクセシブル名")}}
- [ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Roles)
- [ARIA 属性](/ja/docs/Web/Accessibility/ARIA/Attributes)
- [アクセシビリティ](/ja/docs/Web/Accessibility)
- [アクセシビリティを学ぶ](/ja/docs/Learn/Accessibility)
