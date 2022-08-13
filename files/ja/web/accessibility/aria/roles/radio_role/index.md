---
title: radio ロールの使用
slug: Web/Accessibility/ARIA/Roles/radio_role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role
---
<h3 id="Description" name="Description">説明</h3>

<p>このテクニックは、<code><a href="https://www.w3.org/TR/wai-aria/#radio">radio</a></code> ロールをどのように使用するかを示し、ブラウザーと支援技術に及ぼす影響について説明します。</p>

<h3 id="Possible_effects_on_user_agents_and_assistive_technology" name="Possible_effects_on_user_agents_and_assistive_technology">ユーザーエージェントと支援技術への影響</h3>

<div class="note"><strong>注</strong>: 支援技術がどのようにこの技術を扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の1つで、したがって規範的ではありません。</div>

<h3 id="Examples" name="Examples">例</h3>

<h4 id="Example_1" name="Example_1">例 1:</h4>

<p>MDN ページの<a href="/ja/docs/Web/Accessibility/ARIA/forms/Basic_form_hints">基本的なフォームのヒント</a>からの例</p>

<pre class="brush: html">&lt;h3 id="rg1_label"&gt;ランチオプション&lt;/h3&gt;

&lt;ul class="radiogroup" id="rg1" role="radiogroup" aria-labelledby="rg1_label"&gt;
  &lt;li id="r1" tabindex="-1" role="radio" aria-checked="false"&gt;
    &lt;img role="presentation" src="radio-unchecked.gif" /&gt; タイ
  &lt;/li&gt;
  &lt;li id="r2" tabindex="-1" role="radio" aria-checked="false"&gt;
    &lt;img role="presentation" src="radio-unchecked.gif" /&gt; サブウェイ
  &lt;/li&gt;
  &lt;li id="r3" tabindex="0" role="radio" aria-checked="true"&gt;
    &lt;img role="presentation" src="radio-checked.gif" /&gt; ラジオマリア
  &lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="Working_Examples" name="Working_Examples">動作する例</h4>

<ul>
</ul>

<h3 id="Notes" name="Notes">注</h3>

<h3 id="ARIA_attributes_used" name="ARIA_attributes_used">使用された ARIA 属性</h3>

<h3 id="Related_ARIA_techniques" name="Related_ARIA_techniques">関連する ARIA 技術</h3>

<h3 id="Compatibility" name="Compatibility">互換性</h3>

<p class="comment">TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する</p>

<h3 id="Additional_resources" name="Additional_resources">その他のリソース</h3>
