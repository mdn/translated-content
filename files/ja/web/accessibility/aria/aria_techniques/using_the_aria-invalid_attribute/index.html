---
title: aria-invalid 属性の使用
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute
tags:
  - ARIA
  - Accessibility
  - Attribute
  - CodingScripting
  - HTML
  - JavaScript
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute
---
<h3 id="Description" name="Description">説明</h3>

<div class="summary">
<p>このテクニックは、<a class="external" href="http://www.w3.org/TR/wai-aria/#aria-invalid" rel="external"><code>aria-invalid</code></a> 属性を使用する方法を示しています。</p>
</div>

<p><code>aria-invalid</code> 属性は、入力フィールドに入力された値がアプリケーションが予期している形式に準拠していないことを示すために使用されます。 これには、電子メールアドレスや電話番号などの形式が含まれます。 <code>aria-invalid</code> は、必須フィールドが入力されていないことを示すためにも使用できます。 属性は、検証処理の結果としてプログラムで設定する必要があります。</p>

<p>この属性は、一般的な HTML フォーム要素で使用できます。 ARIA の <code>role</code> が割り当てられている要素に限定されるものではありません。</p>

<h3 id="Values" name="Values">値</h3>

<p>語彙:</p>

<dl>
 <dt><code>false</code></dt>
 <dd>（デフォルト）エラーは検出されませんでした。</dd>
 <dt><code>grammar</code></dt>
 <dd>文法上の誤りが検出されました。</dd>
 <dt><code>spelling</code></dt>
 <dd>スペルミスが検出されました。</dd>
 <dt><code>true</code></dt>
 <dd>値は検証に失敗しました。</dd>
</dl>

<p>この語彙に含まれていない値はすべて <code>true</code> として扱われるべきです。</p>

<h3 id="Possible_effects_on_user_agents_and_assistive_technology" name="Possible_effects_on_user_agents_and_assistive_technology">ユーザーエージェントと支援技術への影響</h3>

<p>ユーザーエージェントは、フィールドが無効であるときにユーザーに通知するべきです。 アプリケーション作成者は、可能であれば、問題を修正するための提案を提供するするべきです。 作成者は、フォームが送信されるのを防ぐことができます。</p>

<div class="note">注: 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の1つで、したがって規範的ではありません。</div>

<h3 id="Examples" name="Examples">例</h3>

<h4 id="Example_1_Simple_form_validation" name="Example_1_Simple_form_validation">例 1: 簡単なフォーム検証</h4>

<p>次のスニペットでは、2つのフォームフィールドの簡略化されたバージョンを示し、検証関数は blur イベントに関連付けられています。 <code>aria-required</code> のデフォルト値は <code>false</code> なので、<code>input</code> に属性を追加することは厳密には必要ではないことに注意してください。</p>

<pre class="brush: html"> &lt;input name="name" id="name" aria-required="true" aria-invalid="false"
        onblur="checkValidity('name', ' ', '無効な名前が入力されました（名と姓が必要です）');"/&gt;
 &lt;br /&gt;
 &lt;input name="email" id="email" aria-required="true" aria-invalid="false"
         onblur="checkValidity('email', '@', '無効な電子メールアドレスです');"/&gt;
</pre>

<p>blur ですぐにフィールドを検証する必要はありません。 アプリケーションはフォームが送信されるまで待つことができます（これは必ずしも推奨されません）。</p>

<p>以下のスニペットは、特定の文字の存在をチェックする非常に簡単な検証関数を示しています（現実世界では、検証はより複雑になるでしょう）。</p>

<pre class="brush: js">function checkValidity(aID, aSearchTerm, aMsg){
    var elem = document.getElementById(aID);
    var invalid = (elem.value.indexOf(aSearchTerm) &lt; 0);
    if (invalid) {
        elem.setAttribute("aria-invalid", "true");
        updateAlert(aMsg);
    } else {
        elem.setAttribute("aria-invalid", "false");
        updateAlert();
    }
}
</pre>

<p>以下のスニペットは、エラーメッセージを追加（または削除）するアラート関数を示しています。</p>

<pre class="brush: js">function updateAlert(msg) {
    var oldAlert = document.getElementById("alert");
    if (oldAlert) {
        document.body.removeChild(oldAlert);
    }

    if (msg) {
       var newAlert = document.createElement("div");
        newAlert.setAttribute("role", "alert");
        newAlert.setAttribute("id", "alert");
        var content = document.createTextNode(msg);
        newAlert.appendChild(content);
        document.body.appendChild(newAlert);
    }
}
</pre>

<p>アラートには、ARIAの <a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role" title="Using the alert role"><code>role</code> 属性が <code>"alert"</code> に設定</a>されていることに注意してください。</p>

<h4 id="Working_Examples" name="Working_Examples">動作する例</h4>

<p><a href="https://www.w3.org/WAI/WCAG21/working-examples/aria-invalid-data-format/">正しくない形式の値を強調するために aria-invalid を使ったフォームの例</a></p>

<h3 id="Notes" name="Notes">注</h3>

<ul>
 <li><code>aria-invalid</code> 属性を <code>aria-required</code> 属性と組み合わせて使用する場合、フォームが送信される前に <code>aria-invalid</code> を <code>true</code> に設定する<strong>べきではありません</strong> — 検証に応答する場合だけです。</li>
 <li>将来の拡張では、この属性に使用される語彙に用語を追加することができます。 現行の語彙にない値はすべて <code>true</code> として扱われるべきです。</li>
</ul>

<h3 id="Used_in_ARIA_roles" name="Used_in_ARIA_roles">ARIA ロールで使用</h3>

<p>ベースマークアップのすべての要素</p>

<h3 id="Related_ARIA_techniques" name="Related_ARIA_techniques">関連する ARIA 技術</h3>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute" title="Using the aria-required property">aria-required 属性の使用</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role" title="Using the alert role">alert ロールの使用</a></li>
</ul>

<h3 id="Compatibility" name="Compatibility">互換性</h3>

<p class="comment">TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する</p>

<h3 id="Additional_resources" name="Additional_resources">その他のリソース</h3>

<ul>
 <li><a class="external" href="https://www.w3.org/TR/wai-aria-1.1/#aria-invalid">aria-invalid の WAI-ARIA 仕様</a>（英語）</li>
 <li><a class="external" href="https://www.w3.org/TR/wai-aria-practices/#aria_lh_form">フォームの WAI-ARIA オーサリングプラクティス</a>（英語）</li>
</ul>
