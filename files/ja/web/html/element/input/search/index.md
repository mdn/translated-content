---
title: <input type="search">
slug: Web/HTML/Element/input/search
tags:
  - フォーム入力
  - フォーム
  - HTML
  - HTML フォーム
  - 入力型
  - リファレンス
  - Search
translation_of: Web/HTML/Element/input/search
---
{{HTMLRef("Input_types")}}

<span class="seoSummary">{{HTMLElement("input")}} 要素の `<strong>search</strong>` 型は、ユーザーが検索クエリを入力するために設計されたテキスト入力欄です。 `[text](/ja/docs/Web/HTML/Element/input/text)` 入力欄と機能的には同じですが、{{Glossary("user agent", "ユーザーエージェント")}}は別なスタイルを適用するかもしれません。</span>

{{EmbedInteractiveExample("pages/tabbed/input-search.html", "tabbed-standard")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) をクローンしてプルリクエストを送信してください。</div>

<table class="properties">
 <tbody>
  <tr>
   <td><strong>{{anch("値")}}</strong></td>
   <td>検索フィールドに含まれる値を表す {{domxref("DOMString")}}。</td>
  </tr>
  <tr>
   <td><strong>イベント</strong></td>
   <td>{{domxref("HTMLElement/change_event", "change")}} および {{domxref("HTMLElement/input_event", "input")}}</td>
  </tr>
  <tr>
   <td><strong>対応している共通属性</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("maxlength", "input")}}, {{htmlattrxref("minlength", "input")}}, {{htmlattrxref("pattern", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("required", "input")}}, {{htmlattrxref("size", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td>`value`</td>
  </tr>
  <tr>
   <td><strong>メソッド</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}, {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}</td>
  </tr>
 </tbody>
</table>

## 値

{{htmlattrxref("value", "input")}} 属性は、テキスト入力欄に入力された現在のテキストの値が入っている {{domxref("DOMString")}} です。 JavaScript では {{domxref("HTMLInputElement.value")}} プロパティを使ってこれを受け取ることができます。

<pre class="brush: js notranslate">searchTerms = mySearch.value;
</pre>

入力欄に検証の制約がない場合 (詳しくは{{anch("検証")}}を参照)、値は任意の文字列又は空文字列 (`""`) になることがあります。

<h2 id="Additional_attributes" name="Additional_attributes">追加の属性</h2>

型に関係なくすべての {{HTMLElement("input")}} 要素を操作する属性に加え、 `search` 型の入力欄は次の属性にも対応しています。

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">属性</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>`{{anch("list")}}`</td>
   <td>オプションで自動補完の定義済みの選択肢を含む &lt;datalist&gt; 要素の id</td>
  </tr>
  <tr>
   <td>`{{anch("maxlength")}}`</td>
   <td>入力欄が受け付ける最大文字数</td>
  </tr>
  <tr>
   <td>`{{anch("minlength")}}`</td>
   <td>入力欄が取りうる、妥当と判断される最小文字列長</td>
  </tr>
  <tr>
   <td>`{{anch("pattern")}}`</td>
   <td>妥当と判断されるために、入力欄の内容が一致する必要がある正規表現</td>
  </tr>
  <tr>
   <td>`{{anch("placeholder")}}`</td>
   <td>空欄の時に入力欄に表示される入力例の値</td>
  </tr>
  <tr>
   <td>`{{anch("readonly")}}`</td>
   <td>入力欄の内容を読み取り専用にするかどうかを示す論理属性</td>
  </tr>
  <tr>
   <td>`{{anch("size")}}`</td>
   <td>入力欄の長さを何文字分にするかを表す数値</td>
  </tr>
  <tr>
   <td>`{{anch("spellcheck")}}`</td>
   <td>入力欄でスペルチェックを有効にするかどうか、既定のスペルチェック構成を利用するかを制御する</td>
  </tr>
 </tbody>
</table>

<p id="htmlattrdeflist">{{page("/en-US/docs/Web/HTML/Element/input/text", "list", 0, 1, 2)}}</p>

<h3 id="htmlattrdefmaxlength">{{htmlattrdef("maxlength")}}</h3>

ユーザーが検索フィールドに入力することができる (UTF-16 コード単位での) 最大文字数です。 0 以上の整数値である必要があります。 `maxlength` が指定されていないか、無効な値が指定されていると、検索フィールドには最大文字数が設定されません。この値は `minlength` の値以上である必要もあります。

フィールドに入力されたテキストの長さが UTF-16 コード単位で `maxlength` の長さを超えていると、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

<h3 id="htmlattrdefminlength">{{htmlattrdef("minlength")}}</h3>

ユーザーが検索フィールドに入力することができる (UTF-16 コード単位での) 最小文字数です。これは非負の整数値で、 `maxlength` で指定された値以下である必要があります。 `minlength` が指定されていないか、無効な値が指定されていると、検索フィールドには最小文字数が設定されません。

入力欄のテキスト値の長さが UTF-16 コード単位で `minlength` の長さよりも短いと、その検索フィールドは[制約検証](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

<h3 id="htmlattrdefpattern">{{htmlattrdef("pattern")}}</h3>

{{page("/ja/docs/Web/HTML/Element/input/text", "pattern-include")}}

詳細や例については{{anch("Specifying a pattern", "パターンの指定")}}を参照してください。

{{page("/ja/docs/Web/HTML/Element/input/text", "placeholder", 0, 1, 2)}}

{{page("/ja/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

{{page("/ja/docs/Web/HTML/Element/input/text", "size", 0, 1, 2)}}

<h3 id="htmlattrdefspellcheck">{{htmlattrdef("spellcheck")}}</h3>

{{page("/ja/docs/Web/HTML/Element/input/text", "spellcheck-include")}}

<h2 id="Non-standard_attributes" name="Non-standard_attributes">標準外の属性</h2>

以下の標準外の属性が検索入力フィールドで利用できます。一般的な規則として、できれば使用することを避けてください。

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">属性</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>`{{anch("autocorrect")}}`</td>
   <td>入力フィールドの編集中にオートコレクトを行うかどうか。 <strong>Safari のみ。</strong></td>
  </tr>
  <tr>
   <td>`{{anch("incremental")}}`</td>
   <td>ユーザーがフィールドの値を編集している間、ライブで検索結果を更新できるように繰り返して {{event("search")}} イベントを送信するかどうか。 <strong>WebKit and Blink only (Safari, Chrome, Opera, etc.).</strong></td>
  </tr>
  <tr>
   <td>`{{anch("mozactionhint")}}`</td>
   <td>入力欄を編集している間、ユーザーが <kbd>Enter</kbd> または <kbd>Return</kbd> キーを押したときに実行されるアクションを示す文字列です。これは仮想キーボードのキーに適切なラベルを特定するために使用します。 <strong>Android 版 Firefox のみ。</strong></td>
  </tr>
  <tr>
   <td>`{{anch("results")}}`</td>
   <td>以前の検索クエリのドロップダウンリストに表示されるアイテムの最大数。 <strong>Safari のみ。</strong></td>
  </tr>
 </tbody>
</table>

<h3 id="htmlattrdefautocorrect_non-standard_inline">{{htmlattrdef("autocorrect")}} {{non-standard_inline}}</h3>

{{page("/ja/docs/Web/HTML/Element/input/text", "autocorrect-include")}}

<h3 id="htmlattrdefincremental_non-standard_inline">{{htmlattrdef("incremental")}} {{non-standard_inline}}</h3>

<div id="incremental-include">
論理属性 `incremental` は WebKit および Blink 拡張で (そのため Safari, Opera, Chrome, などで対応)、もし存在すれば、{{Glossary("user agent", "ユーザーエージェント")}}に入力をライブ検索として処理します。ユーザーがフィールドの値を編集すると、ユーザーエージェントは {{event("search")}} イベントを検索ボックスを表す {{domxref("HTMLInputElement")}} オブジェクトへ送信します。これにより、ユーザーが検索を編集するたびに、コードからリアルタイムに検索結果を更新することができます。

`incremental` が指定されていない場合、 {{event("search")}} イベントはユーザーが明示的に検索を実行した時のみ (フィールドを編集中に <kbd>Enter</kbd> または <kbd>Return</kbd> キーを押すなど) 送信されます。

`search` イベントは発生頻度が制限されているため、実装により定義された間隔よりも頻繁に送信されることはありません。
</div>

<h3 id="htmlattrdefmozactionhint_non-standard_inline">{{htmlattrdef("mozactionhint")}} {{non-standard_inline}}</h3>

{{page("/ja/docs/Web/HTML/Element/input/text", "mozactionhint-include")}}

<h3 id="htmlattrdefresults_non-standard_inline">{{htmlattrdef("results")}} {{non-standard_inline}}</h3>

<div id="results-include">
`results` 属性は、 Safari のみが対応していますが、数値で {{HTMLElement("input")}} 要素が本来持っている過去の検索クエリのドロップダウンメニューに表示される項目の最大数を上書きします。

値は非負の10進数でなければなりません。提供されなかった場合、または無効な値が指定された場合、ブラウザー既定の項目の最大数が使用されます。
</div>

<h2 id="Using_search_inputs" name="Using_search_inputs">検索入力欄の使用</h2>

`search` 型の `&lt;input&gt;` 要素は、 `text` 型ととても似ていますが、検索用語を扱うことに特化している点が異なります。どちらも基本的には同じ動作をしますが、ユーザーエージェントによっては既定で異なるスタイルを選択するかもしれません (そしてもちろん、サイトは独自のスタイルを適用することができます)。

<h3 id="Basic_example" name="Basic_example">基本的な例</h3>

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;input type="search" id="mySearch" name="q"&gt;
    &lt;button&gt;Search&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

これは次のように表示されます。

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` は検索入力に与えられる最も一般的な `name` ですが、そうすることが必須ではありません。送信すると、サーバーに送信されるデータの名前と値の組は `q=searchterm` となります。

<div class="note">
入力欄に {{htmlattrxref("name", "input")}} を設定することを忘れないでください。そうしないと送信されません。
</div>

<h3 id="Differences_between_search_and_text_types" name="Differences_between_search_and_text_types">search 型と text 型の違い</h3>

主な違いはブラウザーによる扱い方です。特筆するべき最初のことは、ブラウザーによっては×印を表示して、クリックすると簡単に検索語を削除できることです。次のスクリーンショットは Chrome のものです。

<img alt="" src="https://mdn.mozillademos.org/files/15235/chrome-cross-icon.png" style="display: block; height: 31px; margin: 0px auto; width: 144px;">

加えて、最近のブラウザーは以前ドメイン内で入力された検索用語を自動的に格納し、そのドメインの検索入力欄で従属的な検索が行われたときに、自動補完オプションに上がってくるようにする傾向があります。これは同じ又は似た検索を繰り返して行う傾向があるユーザーにとって便利です。次のスクリーンショットは Firefox のものです。

<img alt="" src="https://mdn.mozillademos.org/files/15237/firefox-auto-complete.png" style="display: block; height: 83px; margin: 0px auto; width: 171px;">この点について、検索フォームに適用することができる有用なテクニックを見てみましょう。

<h3 id="Setting_placeholders" name="Setting_placeholders">プレイスホルダーの設定</h3>

{{htmlattrxref("placeholder","input")}} 属性を使用して、テキスト入力欄の内部に有用なプレイスホルダーを提供することで、何を入力すればよいかのヒントを提供することができます。次の例を見てください。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;input type="search" id="mySearch" name="q"
     placeholder="Search the site..."&gt;
    &lt;button&gt;Search&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

プレイスホルダーの表示方法を以下で確認できます。

{{EmbedLiveSample("Setting_placeholders", 600, 40)}}

<h3 id="Search_form_labels_and_accessibility" name="Search_form_labels_and_accessibility">検索フォームのラベルとアクセシビリティ</h3>

検索フォームの一つの問題はアクセシビリティです。一般的なデザインの慣例では、検索フィールドにラベルがなく (虫眼鏡のアイコンや同類のものはあります)、検索フォームの目的はふつう、よく見えるユーザーにとっては配置から明らかです ([この例ではよくあるパターンを示しています](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/))。

しかし、これは、検索入力が何であるかを言葉で示していないため、読み上げソフトの利用者に混乱を引き起こす可能性があります。 ビジュアルデザインに影響を与えないこの方法の1つは、 [WAI-ARIA](/ja/docs/Learn/Accessibility/WAI-ARIA_basics) の機能を使用することです。

<ul>
 <li>`&lt;form&gt;` フォームの `role` 属性の値が `search` であることで、読み上げソフトがフォームが検索フォームであることをアナウンスします。</li>
 <li>これで十分ではない場合、 {{HTMLElement("input")}} 自身の `aria-label` 属性を使用することができます。これは読み上げソフトによって読み上げられ説明的なテキストラベルです。これは非視覚的な `&lt;label&gt;` と同等のものです。</li>
</ul>

例を見てみましょう。

<pre class="brush: html notranslate">&lt;form role="search"&gt;
  &lt;div&gt;
    &lt;input type="search" id="mySearch" name="q"
     placeholder="Search the site..."
     aria-label="Search through site content"&gt;
    &lt;button&gt;Search&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

プレイスホルダーがどう表示されるかを以下で確認できます。

{{EmbedLiveSample("Search_form_labels_and_accessibility", 600, 40)}}

前回の例から見かけ上の違いはありませんが、読み上げソフトのユーザーは追加情報を得る方法があります。

<div class="note">
<strong>注</strong>: このようなアクセシビリティ機能の詳細ついては、 [Signposts/Landmarks](/ja/docs/Learn/Accessibility/WAI-ARIA_basics#SignpostsLandmarks) をご覧ください。
</div>

<h3 id="Physical_input_element_size" name="Physical_input_element_size">物理的な入力要素の寸法</h3>

入力ボックスの物理的な寸法は、 {{htmlattrxref("size", "input")}} 属性を使って制御することができます。これによって、テキスト入力欄が一度に表示できる文字数を指定することができます。これは要素の幅に影響し、幅をピクセル数ではなく文字数で指定することができます。例えば、この例の中では、入力欄は30文字の幅です。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;input type="search" id="mySearch" name="q"
    placeholder="Search the site..." size="30"&gt;
    &lt;button&gt;Search&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

結果はこの広い入力ボックスになります。

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

<h2 id="Validation" name="Validation">検証</h2>

`search` 型の `&lt;input&gt;` 要素は、通常の `text` 入力欄と同じ検証機能が利用できます。一般に検索ボックスに検証機能を使うことはあまりないでしょう。多くの場合、ユーザーは何でも入力できますが、既存の形式のデータに対して検索を行う場合など、考慮するべきケースも多少あります。

<div class="note">
<strong>注</strong>: HTML のフォーム検証は、入力されたデータが正しい形式であることを保証するサーバースクリプトの代用には<em>なりません</em>。 HTML を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 HTML を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ (または大きすぎるデータ、間違った種類のデータなど) がデータベースに入力された場合に災害が発生するおそれがあります。
</div>

<h3 id="A_note_on_styling" name="A_note_on_styling">スタイルにおけるメモ</h3>

ユーザーにとって値が妥当かそうでないかが分かりやすくなるように、フォーム要素のスタイル付けに便利な擬似クラスが利用できます。 {{cssxref(":valid")}} 及び {{cssxref(":invalid")}} です。この節では、以下の CSS を使用して入力欄の値が妥当であれば隣にチェックマークを表示し、妥当な値でなければ隣にバツ (X) マークを表示します。

<pre class="brush: css notranslate">input:invalid ~ span:after {
    content: '✖';
    padding-left: 5px;
    position: absolute;
}

input:valid ~ span:after {
    content: '✓';
    padding-left: 5px;
    position: absolute;
}</pre>

このテクニックにはフォーム要素の後に配置される {{htmlelement("span")}} 要素も必要で、これがアイコンのホルダーとして動作します。ブラウザーによっては一部の入力型で、直後に配置されたアイコンをうまく表示できないことがあるのでこれが必要です。

<h3 id="Making_input_required" name="Making_input_required">入力を必須にする</h3>

入力を行わないとフォームの送信が許可されないようにするための簡単な方法として、 {{htmlattrxref("required", "input")}} 属性を使うことができます。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;input type="search" id="mySearch" name="q"
    placeholder="Search the site..." required&gt;
    &lt;button&gt;Search&lt;/button&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<div class="hidden">
<pre class="brush: css notranslate">input {
  margin-right: 10px;
}

input:invalid ~ span:after {
    content: '✖';
    padding-left: 5px;
    position: absolute;
}

input:valid ~ span:after {
    content: '✓';
    padding-left: 5px;
    position: absolute;
}</pre>
</div>

次のように表示されます。

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

加えて、何も検索用語を入力せずに送信しようとすると、ブラウザーがメッセージを表示します。以下のものは Firefox の例です。

<img alt="form field with attached message that says Please fill out this field" src="https://mdn.mozillademos.org/files/15241/firefox-required-message.png" style="display: block; margin: 0 auto;">

入力欄の中に無効な異なるデータ型を持つフォームを送信しようとすれば、下記の例のように、異なるメッセージが表示されるでしょう。

<h3 id="Input_value_length" name="Input_value_length">入力値の長さ</h3>

{{htmlattrxref("minlength", "input")}} 属性を使用して入力された値の最小の長さ (文字数) を指定することができます。同様に、 {{htmlattrxref("maxlength", "input")}} を使用して入力された値の最大長を文字数で設定します。

以下の例では、入力値が4～8文字の長さであることが求められます。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="mySearch"&gt;Search for user&lt;/label&gt;
    &lt;input type="search" id="mySearch" name="q"
    placeholder="User IDs are 4–8 characters in length" required
    size="30" minlength="4" maxlength="8"&gt;
    &lt;button&gt;Search&lt;/button&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<div class="hidden">
<pre class="brush: css notranslate">input {
  margin-right: 10px;
}

input:invalid ~ span:after {
    content: '✖';
    padding-left: 5px;
    position: absolute;
}

input:valid ~ span:after {
    content: '✓';
    padding-left: 5px;
    position: absolute;
}</pre>
</div>

This renders like so:

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

４文字未満でフォームを送信しようとすると、適切なエラーメッセージが表示されます (ブラウザーによって異なります)。８文字を超えて入力しようとしても、ブラウザーが許しません。

<h3 id="Specifying_a_pattern" name="Specifying_a_pattern">パターンの指定</h3>

{{htmlattrxref("pattern", "input")}} 属性を使用して、入力値が妥当と判断されるために一致しなければならない正規表現を指定することができます (入力値を検証するために正規表現を使うための短期コースは[正規表現による検証](/ja/docs/Learn/HTML/Forms/Form_validation#Validating_against_a_regular_expression)をご覧ください)。

例を見てみましょう。製品 ID の検索フォームを提供し、 ID はすべてが2文字の英字に続いて4桁の番号です。以下の例でそれに対応します。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="mySearch"&gt;Search for product by ID:&lt;/label&gt;
    &lt;input type="search" id="mySearch" name="q"
    placeholder="two letters followed by four numbers" required
    size="30" pattern="[A-z]{2}[0-9]{4}"&gt;
    &lt;button&gt;Search&lt;/button&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<div class="hidden">
<pre class="brush: css notranslate">input {
  margin-right: 10px;
}

input:invalid ~ span:after {
    content: '✖';
    padding-left: 5px;
    position: absolute;
}

input:valid ~ span:after {
    content: '✓';
    padding-left: 5px;
    position: absolute;
}</pre>
</div>

次のように表示されます。

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

<h2 id="Examples" name="Examples">例</h2>

<a class="external external-icon" href="https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-aria-roles">website-aria-roles</a> の例ので使用した検索フォーム (<a class="external external-icon" href="http://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/">ライブで見る</a>) が良い例です。

## 仕様書

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'input.html#text-(type=text)-state-and-search-state-(type=search)', '&lt;input type="search"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'sec-forms.html#text-typetext-state-and-search-state-typesearch', '&lt;input type="search"&gt;')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

## ブラウザーの互換性

{{Compat("html.elements.input.input-search")}}

## 関連情報

<ul>
 <li>[HTML Forms](/ja/docs/Learn/HTML/Forms)</li>
 <li>{{HTMLElement("input")}} および {{domxref("HTMLInputElement")}} インターフェイスに基づいています。</li>
 <li>`[&lt;input type="text"&gt;](/ja/docs/Web/HTML/Element/input/text)`</li>
 <li>[CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)</li>
</ul>
