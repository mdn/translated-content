---
title: "ARIA: aria-details 属性"
short-title: aria-details
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-details
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

グローバルな `aria-details` 属性は、オブジェクトに関連する追加情報を提供する要素を識別します。

## 解説

`aria-details` 属性は、オブジェクトに追加情報や複雑な説明を提供するために使用できます。コンテンツが現在のドキュメント内にあるか、追加のアセットへのリンクであるかに関わらず、より詳細な情報を提供することで、支援技術ユーザーにコンテンツについて知らせるために使用されます。

同様の目的を持つ HTML および WAI-ARIA 属性が他にもあります。HTML の {{HTMLElement('label')}} 要素と [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) および [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性は、オブジェクトの短いラベルを提供するために使用されます。HTML の `title` 属性と [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) および [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性は、オブジェクトのより長いプレーンテキストの説明を提供します。ただし、オブジェクトに関連する追加情報、複雑な説明、またはナビゲート可能なコンテンツが必要で、それらが利用可能な場合は、`aria-details` 属性を使用する必要があります。

この属性は、対応不足と誤用により非推奨となった、HTML で完全に対応されたことのない `longdesc` 属性（置き換えられた要素のコンテンツへの長い説明の URL）と同様の目的を果たします。

`aria-details` 属性は、より詳細な情報を取得するための要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id)、またはスペースで区切られた `id` のリストを値として受け取ります。`aria-details` が要素に含まれている場合、支援技術は追加の情報が利用可能であることをユーザーに通知し、ユーザーが参照先のコンテンツに移動できるようにします。

`aria-details` によって参照される要素には、通常 [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) を介して提供される情報よりも多くの情報が含まれることが意図されています。

`aria-details` によって参照される要素は、すべてのユーザーに表示される必要があります。`aria-details` は、画面を見て説明コンテンツが利用可能であることをすぐに判断できない可能性があるユーザーにも、そのコンテンツが利用可能であることを知らせます。

> [!NOTE]
> `aria-details` はアクセシブル説明には影響しません。

`aria-describedby` とは異なり、`aria-details` によって参照される要素は、アクセシブル説明では使用されず、支援技術ユーザーに表示されるときにプレーンな文字列に変換されません。関連付けられているコンテンツが長すぎず、参照される要素のコンテンツを単純なテキスト文字列に平坦化しても情報が失われない場合は、代わりに `aria-describedby` を使用することを検討してください。ただし、要素に `aria-details` に加えて、`aria-describedby` もしくは `aria-description` のいずれかで説明が指定されていることは有効です。

## 値

- ID 参照リスト
  - : 追加の関連情報を提供する要素、または追加の関連情報にリンクする要素の `id`、もしくはそのような `id` を空白区切りで並べたリストです。

## 関連インターフェイス

- {{domxref("Element.ariaDetailsElements")}}
  - : `ariaDetailsElements` プロパティは各要素のインターフェイスの一部です。その値は、`aria-details` 属性の ID 参照を反映する {{domxref("Element")}} のサブクラスのインスタンスの配列です ([いくつかの注意点があります](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references))。
- {{domxref("ElementInternals.ariaDetailsElements")}}
  - : `ariaDetailsElements` プロパティは各カスタム要素のインターフェイスの一部です。その値は、`aria-details` 属性の ID 参照を反映する {{domxref("Element")}} のサブクラスのインスタンスの配列です ([いくつかの注意点があります](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references))。

## 関連付けられたロール

**すべての**ロールで使用されます。

## 例

definition ロールと term ロールの例では、`aria-details` は [`definition`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) ロールを持つ要素の `id` を参照する [`term`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) ロールの要素に設定します。

```html-nolint
<p>
  <strong>cubic-bezier()</strong> 関数記法は、三次<span role="term" aria-details="bezier bezImg">ベジェ曲線</span>を定義します。
  曲線は連続しているため、始点と終点を滑らかにつなぐ用途によく使われ、イージング関数と呼ばれることもあります。
</p>

<p role="definition" id="bezier">
  <strong>ベジェ曲線</strong>（発音 \ ˈbe-zē-ˌā \
  <i aria-description="英語での発音">BEH-zee-ay</i>）は、コンピューターグラフィックスやアニメーションで使われる数式で表される曲線です。曲線は少なくとも 2 つの制御点で定義されます。ウェブ関連のグラフィックスやアニメーションでは、4 つの制御点 P<sub>0</sub>、P<sub>1</sub>、P<sub>2</sub>、P<sub>3</sub> を持つ三次ベジェ曲線が使われます。
</p>

<a
  href="bezierExplanation.html"
  id="bezImg"
  aria-label="CSS のイージング関数におけるベジェ曲線の解説">
  <img alt="4 つの制御点を示すベジェ曲線のアニメーション。" src="bezier.gif" />
</a>
```

## 仕様書

{{Specifications}}

## 関連情報

- HTML [id](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [画像の `alt` 属性](/ja/docs/Web/API/HTMLImageElement/alt)
- HTML [title](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性
