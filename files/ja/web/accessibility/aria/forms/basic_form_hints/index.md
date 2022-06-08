---
title: 基本的なフォームのヒント
slug: Web/Accessibility/ARIA/forms/Basic_form_hints
tags:
  - ARIA
  - アクセシビリティ
  - Forms
translation_of: Web/Accessibility/ARIA/forms/Basic_form_hints
---
伝統的な HTML のフォーム関連要素を使用してフォームを実装する際は、コントロール向けのラベルを提供することと、ラベルとコントロールとを明示的に結びつけることが重要です。画面リーダーのユーザーがページを操作するとき、画面リーダーはフォームコントロールについて読み上げますが、コントロールトラベルとの間に直接的な結びつきがないと、どのラベルが適切かを画面リーダーが知る方法がなくなります。

以下の例では、ラベルを持つシンプルなフォームを示しています。それぞれの {{ HTMLElement("input") }} 要素は `id` を持ち、またそれぞれの {{ HTMLElement("label") }} 要素は `for` 属性で関連する {{ HTMLElement("input") }} の `id` を示すことに注意してください。

<pre class="brush: html">&lt;form&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;input id="wine-1" type="checkbox" value="riesling"/&gt;
      &lt;label for="wine-1"&gt;Berg Rottland Riesling&lt;/label&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;input id="wine-2" type="checkbox" value="pinot-blanc"/&gt;
      &lt;label for="wine-2"&gt;Pinot Blanc&lt;/label&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;input id="wine-3" type="checkbox" value="pinot-grigio"/&gt;
      &lt;label for="wine-3"&gt;Pinot Grigio&lt;/label&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;input id="wine-4" type="checkbox" value="gewurztraminer"/&gt;
      &lt;label for="wine-4"&gt;Gewürztraminer&lt;/label&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/form&gt;
</pre>

## ARIA でラベルをつける

HTML の {{ HTMLElement("label") }} 要素はフォーム関連の要素にふさわしいのですが、多くのフォームコントロールは {{ HTMLElement("div") }} や {{ HTMLElement("span") }} を使用した、動的な JavaScript ウィジェットとして実装されています。 [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) こと **Accessible Rich Internet Applications** 仕様書は W3C の [Web Accessibility Initiative](https://www.w3.org/WAI/) によるもので、このような場合のために [`aria-labelledby`](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-labelledby) 属性を用意しています。

以下の例では、順不同リストを使用して実装したラジオボタングループを示しています。3 行目で {{ HTMLElement("ul") }} 要素の `aria-labelledby` 属性に、1 行目の {{ HTMLElement("h3") }} 要素の `id` である `rg1_label` を設定しており、h3 要素がラジオボタングループのラベルです。

<pre class="brush: html">&lt;h3 id="rg1_label"&gt;Lunch Options&lt;/h3&gt;

&lt;ul class="radiogroup" id="rg1"  role="radiogroup" aria-labelledby="rg1_label"&gt;
  &lt;li id="r1"  tabindex="-1" role="radio" aria-checked="false"&gt;
    &lt;img role="presentation" src="radio-unchecked.gif" /&gt; Thai
  &lt;/li&gt;
  &lt;li id="r2"  tabindex="-1" role="radio"  aria-checked="false"&gt;
    &lt;img role="presentation" src="radio-unchecked.gif" /&gt; Subway
  &lt;/li&gt;
  &lt;li id="r3"   tabindex="0" role="radio" aria-checked="true"&gt;
    &lt;img role="presentation" src="radio-checked.gif" /&gt; Radio Maria
  &lt;/li&gt;
&lt;/ul&gt;
</pre>

## ARIA で説明する

フォームコントロールはラベルに加えて、説明文が結びつけられることがあります。ARIA には、説明文とコントロールを直接結びつけるための [`aria-describedby`](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-describedby) 属性があります。

以下の例では別の {{ HTMLElement("div") }} 要素内の文で説明されている、{{ HTMLElement("button") }} 要素を示しています。{{ HTMLElement("button") }} 要素の `aria-describedby` 属性は {{HTMLElement("div")}} 要素の `id` を参照しています。

<pre class="brush: html">&lt;button aria-describedby="descriptionRevert"&gt;Revert&lt;/button&gt;
&lt;div id="descriptionRevert"&gt;Reverting will undo any changes that have been made
                            since the last save.&lt;/div&gt;</pre>

> **Note:** `aria-describedby` 属性はフォームコントロールに加えて、他の用途にも使用されることに注意してください。

## 必須のフィールドと正しくないフィールド

> **Note:** `required` が全世界の 97% 以上のユーザーで利用できるようになったので、もはや `required` と `aria-required` の両方を使用することは推奨されません。

一般的にウェブ開発者は、必須のフィールドや正しくないフィールドを示すために視覚的な方法を使用します。しかし、支援技術 (AT) は必ずしもその表示から情報を推測できるわけではありません。 ARIA は、コントロールが必須あるいは正しくないことを示すための属性を用意しています。

- フォーム要素は入力が必須であることを AT に示すために、[**aria-required**](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-required) プロパティを適用できます。
- データフィールドに正しくないデータがあることを AT に知らせるために、プログラムで [**aria-invalid**](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-invalid) 状態を適用することで、ユーザは正しくないデータを入力したことを知ります。

以下の例では、 3 つのフィールドを持つ単純なフォームを示しています。 4 行目と 12 行目では、 `aria-required` 属性が（ラベルの横にあるアスタリスクに加えて）設定されており、名前とメールアドレスのフィールドが必須であることを表しています。この例の 2 番目の部分、 JavaScript のスニペットは、メールアドレスの書式を検証し、その結果に応じてメールアドレスフィールド（HTML の 12 行目）の `aria-invalid` 属性を設定します（要素の表示を変更するだけでなく）。

<pre class="brush: html">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="name"&gt;* Name:&lt;/label&gt;
    &lt;input type="text" value="name" id="name" aria-required="true"/&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="phone"&gt;Phone:&lt;/label&gt;
    &lt;input type="text" value="phone" id="phone" aria-required="false"/&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="email"&gt;* E-mail:&lt;/label&gt;
    &lt;input type="text" value="email" id="email" aria-required="true"/&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

フォームの入力を検証するスクリプトは次のようなものです。

<pre class="brush: js">var validate = function () {
  var emailElement = document.getElementById(emailFieldId);
  var valid = emailValid(formData.email); // 正しい場合に true、そうでない場合に false を返す

  emailElement.setAttribute("aria-invalid", !valid);
  setElementBorderColour(emailElement, valid); // 第 2 引数が false である場合は境界線を赤色に設定
};
</pre>

## 役に立つエラーメッセージの提供

[フォームを強化するための ARIA アラート](/ja/docs/Web/Accessibility/ARIA/forms/alerts) の使い方をご覧ください。

フォームのアクセシビリティのために ARIA を使用する際のさらなるガイドラインについては、[WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/) のドキュメントをご覧ください。
