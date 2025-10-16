---
title: aria-details
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-details
l10n:
  sourceCommit: 96157fa574bc2cd9f55ff1205198f24addc00104
---

グローバルな `aria-details` 属性は、オブジェクトに関連する追加情報を提供する要素を識別します。

## 解説

`aria-details` 属性は、オブジェクトに追加情報や複雑な説明を提供するために使用できます。コンテンツが現在のドキュメント内にあるか、追加のアセットへのリンクであるかに関わらず、より詳細な情報を提供することで、支援技術ユーザーにコンテンツについて知らせるために使用されます。

同様の目的を持つ HTML および WAI-ARIA 属性が他にもあります。HTML の {{HTMLElement('label')}} 要素と [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) および [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性は、オブジェクトの短いラベルを提供するために使用されます。HTML の `title` 属性と [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) および [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性は、オブジェクトのより長いプレーンテキストの説明を提供します。ただし、オブジェクトに関連する追加情報、複雑な説明、またはナビゲート可能なコンテンツが必要で、それらが利用可能な場合は、`aria-details` 属性を使用する必要があります。

この属性は、サポート不足と誤用により非推奨となった、HTML で完全にサポートされたことのない `longdesc` 属性（置き換えられた要素のコンテンツへの長い説明の URL）と同様の目的を果たします。

`aria-details` 属性は、より詳細な情報を取得するための要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id)、またはスペースで区切られた `id` のリストを値として受け取ります。`aria-details` が要素に含まれている場合、支援技術は追加の情報が利用可能であることをユーザーに通知し、ユーザーが参照先のコンテンツに移動できるようにします。

`aria-details` によって参照される要素には、通常 [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) を介して提供される情報よりも多くの情報が含まれることが意図されています。

`aria-detials` によって参照される要素は、全てのユーザーに表示される必要があります。`aria-details`は、画面を見て説明コンテンツが利用可能であることをすぐに判断できない可能性があるユーザーに、説明的なコンテンツが利用可能であることを通知します。

> [!NOTE]
> `aria-details` はアクセシブル説明には影響しません。

`aria-describedby` とは異なり、`aria-details` によって参照される要素は、アクセシブル説明では使用されず、支援技術ユーザーに表示されるときにプレーンな文字列に変換されません。関連付けられているコンテンツが長すぎず、参照される要素のコンテンツを単純なテキスト文字列に平坦化しても情報が失われない場合は、代わりに `aria-describedby` を使用することを検討してください。ただし、要素に `aria-details` に加えて、`aria-describedby` もしくは `aria-description` のいずれかで説明が指定されていることは有効です。

## 例

definition ロールと term ロールについて、`aria-details` は [`definition`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) ロールの要素の `id` を持つ [`term`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) ロールの要素に含まれます。

```html
<p>The <strong>cubic-bezier()<strong> functional notation defines a cubic
  <span role="term" aria-details="bezier bezImg">Bézier curve</span>. As
  these curves are continuous, they are often used to smooth down the start and
  end of the curve and are therefore sometimes called easing functions.
</p>

<p role="definition" id="bezier">A <strong>Bézier curve</strong>,
 (Pronounced \ ˈbe-zē-ˌā \)
 <i aria-description="English pronunciation">BEH-zee-ay</i>) is a mathematically
 described curve used in computer graphics and animation. The curve is defined
 by a set of control points with a minimum of two. Web related graphics
 and animations use Cubic Béziers, which are curves with four control
 points P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>.
</p>

<a href="bezierExplanation.html" id="bezImg"
  aria-label="Explanation of Bézier curve in CSS easing functions">
  <img alt="Animated Bézier curve showing 4 control points." src="bezier.gif">
</a>
```

## 値

- ID reference list
  - : 追加の関連情報を提供またはリンクする要素の `id`、または id がスペースで区切られたリスト。

## 関連付けられたロール

**すべての**ロールで使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- HTML [id](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [画像の `alt` 属性](/ja/docs/Web/API/HTMLImageElement/alt)
- HTML [title](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性
