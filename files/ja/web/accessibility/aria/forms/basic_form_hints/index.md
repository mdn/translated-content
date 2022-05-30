---
title: 基本的なフォームのヒント
slug: Web/Accessibility/ARIA/forms/Basic_form_hints
tags:
  - ARIA
  - Accessibility
  - Forms
translation_of: Web/Accessibility/ARIA/forms/Basic_form_hints
---
<h2 id="Form_labels" name="Form_labels">フォームラベル</h2>

<p>伝統的な HTML のフォーム関連要素を使用してフォームを実装する際は、コントロール向けのラベルを提供することと、ラベルとコントロールとを明示的に結びつけることが重要です。スクリーンリーダーのユーザがページをナビゲートするときにスクリーンリーダーはフォームコントロールについて述べますが、コントロールトラベルとの間に直接的な結びつきがないと、どのラベルが適切かをスクリーンリーダーが知る方法がなくなります。</p>

<p>以下の例では、ラベルを持つシンプルなフォームを示しています。各 {{HTMLElement("input")}} 要素は <strong>id</strong> を持ち、また各 {{HTMLElement("label")}} 要素は結びつけられる {{HTMLElement("input")}} の <strong>id</strong> を示す、<strong>for</strong> 属性を持つことに注目してください。</p>

<p><em>例 1. ラベルを持つシンプルなフォーム</em></p>

<pre class="brush: html">&lt;form&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;input id="wine-1" type="checkbox" value="riesling"/&gt;
      &lt;label for="wine-1"&gt;Berg Rottland Riesling&lt;/label&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;input id="wine-2" type="checkbox" value="weissbergunder"/&gt;
      &lt;label for="wine-2"&gt;Weissbergunder&lt;/label&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;input id="wine-3" type="checkbox" value="pinot-grigio"/&gt;
      &lt;label for="wine-3"&gt;Pinot Grigio&lt;/label&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;input id="wine-4" type="checkbox" value="gewurztraminer"/&gt;
      &lt;label for="wine-4"&gt;Berg Rottland Riesling&lt;/label&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/form&gt;
</pre>

<h2 id="Labeling_with_ARIA" name="Labeling_with_ARIA">ARIA でラベルをつける</h2>

<p>HTML の {{HTMLElement("label")}} 要素はフォーム関連の要素にふさわしいのですが、多くのフォームコントロールは {{HTMLElement("div")}} や {{HTMLElement("span")}} を使用した、動的な JavaScript ウィジェットとして実装されています。W3C の <a href="http://www.w3.org/WAI/">Web Accessibility Initiative</a> から生まれた <a href="http://www.w3.org/WAI/intro/aria.php" title="http://www.w3.org/WAI/intro/aria.php">WAI-ARIA</a> こと <strong>Accessible Rich Internet Applications</strong> 仕様は、このような場合のために <a href="http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-labelledby"><strong>aria-labelledby</strong></a> 属性を用意しています。</p>

<p>以下の例では、順不同リストを使用して実装したラジオボタングループを示しています。3 行目で {{HTMLElement("li")}} 要素の <strong>aria-labelledby</strong> 属性に、1 行目の {{HTMLElement("h3")}} 要素の <strong>id</strong> である "rg1_label" を設定しており、h3 要素がラジオボタングループのラベルです。</p>

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

<h2 id="Describing_with_ARIA" name="Describing_with_ARIA">ARIA で説明する</h2>

<p>フォームコントロールはラベルに加えて、説明文が結びつけられることがあります。ARIA には、説明文とコントロールを直接結びつけるための <a href="http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-describedby"><strong>aria-describedby</strong></a> 属性があります。</p>

<p>以下の例では別の {{HTMLElement("div")}} 要素内の文で説明されている、{{HTMLElement("button")}} 要素を示しています。{{HTMLElement("button")}} 要素の <strong>aria-describedby</strong> 属性は {{HTMLElement("div")}} 要素の <strong>id</strong> を参照しています。</p>

<p><em>例 3. 別の要素で説明されているボタン</em></p>

<pre class="brush: html">&lt;button aria-describedby="descriptionRevert"&gt;Revert&lt;/button&gt;
&lt;div id="descriptionRevert"&gt;Reverting will undo any changes that have been made
                            since the last save.&lt;/div&gt;</pre>

<p>(<strong>aria-describedby</strong> 属性はフォームコントロールに加えて、他の用途にも使用されることに注意してください。)</p>

<h2 id="Required_and_invalid_fields" name="Required_and_invalid_fields">必須のフィールドと正しくないフィールド</h2>

<p>一般的に Web 開発者は、必須のフィールドや正しくないフィールドを示すために視覚的な方法を使用します。しかし、支援技術 (AT) は必ずしもその表示から情報を推測できるわけではありません。ARIA は、コントロールが必須あるいは正しくないことを示すための属性を用意しています:</p>

<ul>
 <li>フォーム要素は入力が必須であることを AT に示すために、<a href="http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-required"><strong>aria-required</strong></a> プロパティを適用できます。</li>
 <li>データフィールドに正しくないデータがあることを AT に知らせるために、プログラムで <a href="http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-invalid"><strong>aria-invalid</strong></a> 状態を適用することで、ユーザは正しくないデータを入力したことを知ります。</li>
</ul>

<p>以下の例では、3 つのフィールドを持つシンプルなフォームを示しています。4 行目から 12 行目で、name および email フィールドは入力必須であることを示すために (ラベルの隣にアスタリスクを置くのに加えて) <strong>aria-required</strong> 属性を true に設定しています。2 番目の例は電子メールの形式を検証して、その結果に応じて email フィールド (HTML の 12 行目) の (要素を視覚的に変化させるのに加えて) <strong>aria-invalid</strong> 属性を設定する JavaScript コードスニペットです。</p>

<p><em>例 4a. 必須のフィールドを持つフォーム</em></p>

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

<p><em>例 4b. フォームの入力内容を検証するスクリプトの一部</em></p>

<pre class="brush: js">var validate = function () {
  var emailElement = document.getElementById(emailFieldId);
  var valid = emailValid(formData.email); // 正しい場合に true、そうでない場合に false を返す

  emailElement.setAttribute("aria-invalid", !valid);
  setElementBorderColour(emailElement, valid); // 第 2 引数が false である場合はボーダーを赤色に設定
};</pre>

<h2 id="Providing_Helpful_Error_Messages" name="Providing_Helpful_Error_Messages">役に立つエラーメッセージの提供</h2>

<p><a href="/ja/docs/Web/Accessibility/ARIA/forms/alerts" title="aria/forms/alerts">フォームを強化するための ARIA alerts</a> の使い方をご覧ください。</p>

<div class="note">TBD: ひとつの記事にまとめるか、テクニックを分けるか、あるいはその両方を行うとよいでしょう。また ARIA のマークアップは、サーバサイドの検証の後に読み込まれたページ内のエラーメッセージにふさわしいのでしょうか?</div>

<p>フォームのアクセシビリティのために ARIA を使用する際のさらなるガイドラインについては、<a href="http://www.w3.org/TR/wai-aria-practices/">WAI-ARIA Authoring Practices</a> のドキュメントをご覧ください。</p>
