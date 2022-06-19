---
title: itemprop
slug: Web/HTML/Global_attributes/itemprop
tags:
  - HTML
  - HTML マイクロデータ
  - Reference
  - グローバル属性
  - マイクロデータ
  - 属性
translation_of: Web/HTML/Global_attributes/itemprop
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p><code><strong>itemprop</strong></code> <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>は、アイテムにプロパティを追加するために使用します。すべての HTML 要素に <code>itemprop</code> 属性を設定することができ、 <code>itemprop</code> は名前と値の組み合わせで構成されます。名前と値の組み合わせは<strong>プロパティ</strong>と呼ばれ、1つまたは複数のプロパティで<strong>アイテム</strong>を構成します。プロパティ値は文字列又は URL のどちらかで、 {{HTMLElement("audio")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("source")}} , {{HTMLElement("track")}}, {{HTMLElement("video")}} など、広範にわたる要素と関連付けすることができます。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例は <code>itemprop</code> 属性でマークアップされた要素のセットのソースと、その後で結果の構造化データを表す表を示します。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div itemscope itemtype="http://schema.org/Movie"&gt;
  &lt;h1 <strong>itemprop="name"</strong>&gt;Avatar&lt;/h1&gt;
  &lt;span&gt;Director:
    &lt;span <strong>itemprop="director"</strong>&gt;James Cameron&lt;/span&gt;
    (born August 16, 1954)&lt;/span&gt;
  &lt;span <strong>itemprop="genre"</strong>&gt;Science fiction&lt;/span&gt;
  &lt;a href="../movies/avatar-theatrical-trailer.html"
    <strong>itemprop="trailer"</strong>&gt;Trailer&lt;/a&gt;
&lt;/div&gt;</pre>

<h3 id="Structured_data" name="Structured_data">構造化データ</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <td colspan="1" rowspan="2"></td>
   <th colspan="2" rowspan="1"><strong>Item</strong></th>
  </tr>
  <tr>
   <th><strong>itemprop name</strong></th>
   <th><strong>itemprop value</strong></th>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>name</td>
   <td>Avatar</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>director</td>
   <td>James Cameron</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>genre</td>
   <td>Science fiction</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>trailer</td>
   <td>../movies/avatar-theatrical-trailer.html</td>
  </tr>
 </tbody>
</table>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p>プロパティは、文字列か URL のどちらかの形で値を持ちます。文字列の値が URL である場合、 {{HTMLElement("a")}} 要素とその {{htmlattrxref("href", "a")}} 属性、 {{HTMLElement("img")}} 要素とその {{htmlattrxref("src", "img")}} 属性、または外部リソースにリンクしたり埋め込んだりするその他の要素を用いて表現されます。</p>

<h3 id="Three_properties_with_values_that_are_strings" name="Three_properties_with_values_that_are_strings">文字列の値を持つ3つのプロパティ</h3>

<pre class="brush: html">&lt;div itemscope&gt;
 &lt;p&gt;My name is
   &lt;span itemprop="name"&gt;Neil&lt;/span&gt;.&lt;/p&gt;
 &lt;p&gt;My band is called
   &lt;span itemprop="band"&gt;Four Parts Water&lt;/span&gt;.&lt;/p&gt;
 &lt;p&gt;I am
   &lt;span itemprop="nationality"&gt;British&lt;/span&gt;.&lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="One_property_image_whose_value_is_a_URL" name="One_property_image_whose_value_is_a_URL">値が URL である "image" による1つのプロパティ</h3>

<pre class="brush: html">&lt;div itemscope&gt;
 &lt;img itemprop="image"
   src="google-logo.png" alt="Google"&gt;
&lt;/div&gt;</pre>

<p>文字列の値が人間にとって読んだり理解したりするのが簡単ではない場合（例えば、数字や文字による長い文字列）、 data 要素の中身にもっと人間理解しやすいもの（これは構造化データの一部ではありません。―以下の例を参照）を入れた上で、 value 属性を使用して表現することができます。</p>

<h3 id="An_item_with_a_property_whose_value_is_a_product_ID" name="An_item_with_a_property_whose_value_is_a_product_ID">値がプロダクト ID であるプロパティがあるアイテム</h3>

<p>ID が人間にとって読みやすくない場合、 ID の代わりに製品名が人間から見える文字列になります。</p>

<pre class="brush: html">&lt;h1 itemscope&gt;
 &lt;data itemprop="product-id"
   value="9678AOU879"&gt;The Instigator 2000&lt;/data&gt;
&lt;/h1&gt;</pre>

<p>数値データの場合、 meter 要素とその value 属性を使用することができます。</p>

<h3 id="A_meter_element" name="A_meter_element">meter 要素</h3>

<pre class="brush: html">&lt;div itemscope itemtype="http://schema.org/Product"&gt;
 &lt;span itemprop="name"&gt;Panasonic White
   60L Refrigerator&lt;/span&gt;
 &lt;img src="panasonic-fridge-60l-white.jpg" alt=""&gt;
  &lt;div itemprop="aggregateRating"
       itemscope
       itemtype="http://schema.org/AggregateRating"&gt;
   &lt;meter itemprop="ratingValue"
     min=0 value=3.5 max=5&gt;Rated 3.5/5&lt;/meter&gt;
   (based on &lt;span
     itemprop="reviewCount"&gt;11&lt;/span&gt;
     customer reviews)
  &lt;/div&gt;
&lt;/div&gt;</pre>

<p>同様に、日付や時間に関連するデータについては、 time 要素と datetime 属性を使用することができます。</p>

<h3 id="An_item_with_one_property_birthday_whose_value_is_a_date" name="An_item_with_one_property_birthday_whose_value_is_a_date">値が日付であるプロパティ、 "birthday" を1つだけ持つアイテム</h3>

<pre class="brush: html">&lt;div itemscope&gt;
 I was born on &lt;time
   itemprop="birthday"
   datetime="2009-05-10"&gt;May 10th 2009&lt;/time&gt;.
&lt;/div&gt;</pre>

<p>プロパティはまた、プロパティを宣言する要素で itemscope 属性を置くことによって、名前と値の組のグループを持つことができます。それぞれの値は、文字列か名前と値の組（すなわちアイテム）のグループのいずれかです。</p>

<h3 id="An_outer_item_representing_a_person_and_an_inner_one_representing_a_band" name="An_outer_item_representing_a_person_and_an_inner_one_representing_a_band">外側のアイテムは人物を表し、内側のアイテムはバンドを表す</h3>

<pre class="brush: html">&lt;div itemscope&gt;
 &lt;p&gt;Name:
   &lt;span itemprop="name"&gt;Amanda&lt;/span&gt;&lt;/p&gt;
 &lt;p&gt;Band:
   &lt;span itemprop="band" itemscope&gt;
     &lt;span itemprop="name"&gt;Jazz Band&lt;/span&gt;
     (&lt;span itemprop="size"&gt;12&lt;/span&gt;
     players)&lt;/span&gt;&lt;/p&gt;
&lt;/div&gt;</pre>

<p>上の外側のアイテムは、 "name" と "band" の2つのプロパティを持ちます。 "name" は "Amanda" であり、 "band" はそれ自身がアイテムであり、2つのプロパティ "name" と "size" を持ちます。バンドの "name" は "Jazz Band" であり、 "size" は "12" です。この例における外側のアイテムは、トップレベルのマイクロデータアイテムです。他の一部でないアイテムは、トップレベルマイクロデータアイテムと呼ばれます。</p>

<h3 id="All_the_properties_separated_from_their_items" name="All_the_properties_separated_from_their_items">プロパティがすべてアイテムから分離された例</h3>

<p>この例は前のものと同じですが、すべてのプロパティがアイテムから分離されています。</p>

<pre class="brush: html">&lt;div itemscope id="amanda" itemref="a b"&gt;&lt;/div&gt;
&lt;p id="a"&gt;Name:
  &lt;span itemprop="name"&gt;Amanda&lt;/span&gt;&lt;/p&gt;
&lt;div id="b"
  itemprop="band"
  itemscope itemref="c"&gt;&lt;/div&gt;
&lt;div id="c"&gt;
 &lt;p&gt;Band:
   &lt;span itemprop="name"&gt;Jazz Band&lt;/span&gt;&lt;/p&gt;
 &lt;p&gt;Size:
   &lt;span itemprop="size"&gt;12&lt;/span&gt; players&lt;/p&gt;
&lt;/div&gt;</pre>

<p>これは1つ前の例と同じ結果になります。最初のアイテムは2つのプロパティを持ちます、 "name" は "Amanda" に設定され、 "band" はもう1つのアイテムに設定されます。2つ目のアイテムはさらに2つのプロパティを持ち、 "name" は "Jazz Band" に設定され、 "size" は "12" に設定されます。</p>

<p>アイテムは同じ名前で異なる値をもつ複数のプロパティを持つことができます。</p>

<h3 id="Ice_cream_with_two_flavors" name="Ice_cream_with_two_flavors">2つの味のアイスクリーム</h3>

<pre class="brush: html">&lt;div itemscope&gt;
 &lt;p&gt;Flavors in my favorite ice cream:&lt;/p&gt;
 &lt;ul&gt;
  &lt;li itemprop="flavor"&gt;Lemon sorbet&lt;/li&gt;
  &lt;li itemprop="flavor"&gt;Apricot sorbet&lt;/li&gt;
 &lt;/ul&gt;
&lt;/div&gt;</pre>

<p>この結果は2つのプロパティを持つアイテムになり、どちらも名前は "flavor" で、値は "Lemon sorbet" および "Apricot sorbet" になります。</p>

<p>プロパティを導入する要素は、複数のプロパティが同じ値を持つ場合に重複を避けるために、一度に複数のプロパティを導入することもできます。</p>

<h3 id="An_item_with_two_properties_favorite-color_and_favorite-fruit_both_set_to_the_value_orange" name='="An_item_with_two_properties_favorite-color_and_favorite-fruit_both_set_to_the_value_orange"'>2つのプロパティ "favorite-color" 及び "favorite-fruit" を持ち、どちらも "orange" の値に設定されるアイテム</h3>

<pre class="brush: html">&lt;div itemscope&gt;
 &lt;span
  itemprop="favorite-color
    favorite-fruit"&gt;orange&lt;/span&gt;
&lt;/div&gt;</pre>

<div class="note">
<p>メモ: マイクロデータとマイクロデータがマークアップされる文書のコンテンツに関係はありません。</p>
</div>

<h3 id="Same_structured_data_marked_up_in_two_different_ways" name="Same_structured_data_marked_up_in_two_different_ways">2つの異なる方法でマークアップされた同じ構造化データ</h3>

<p id="There_is_no_semantic_difference_between_the_following_two_examples">以下の2つの例には意味的な違いはありません。</p>

<pre class="brush: html">&lt;figure&gt;
 &lt;img src="castle.jpeg"&gt;
 &lt;figcaption&gt;&lt;span
   itemscope&gt;&lt;span
   itemprop="name"&gt;The Castle&lt;/span&gt;&lt;/span&gt;
     (1986)&lt;/figcaption&gt;
&lt;/figure&gt;</pre>

<pre class="brush: html">&lt;span itemscope&gt;&lt;meta
  itemprop="name"
  content="The Castle"&gt;&lt;/span&gt;
&lt;figure&gt;
 &lt;img src="castle.jpeg"&gt;
 &lt;figcaption&gt;The Castle
  (1986)&lt;/figcaption&gt;
&lt;/figure&gt;</pre>

<p>どちらも caption を伴う figure を持ち、両者とも、 figure に完全に関連しない、名前 "name" と値 "The Castle" をもつ名前と値の組を持つアイテムを持ちます。唯一の違いは、ユーザーが文書の外に figcaption をドラッグする場合、アイテムがドラッグ＆ドロップデータに含まれることです。アイテムに関連付けられる画像は含まれません。</p>

<h2 id="Names_and_values" name="Names_and_values">名前と値</h2>

<p>プロパティは、大文字・小文字を区別して名前と値の組を表す一意なトークンの順序なしセットです。下記の例で、それぞれのデータセルはトークンです。</p>

<h3 id="Names_examples" name="Names_examples">名前の例</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th colspan="1" rowspan="2" scope="col"></th>
   <th colspan="2" rowspan="1" scope="col">Item</th>
  </tr>
  <tr>
   <th scope="col">itemprop <strong>name</strong></th>
   <th scope="col">itemprop <strong>value</strong></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th>itemprop</th>
   <td>country</td>
   <td>Ireland</td>
  </tr>
  <tr>
   <th>itemprop</th>
   <td>Option</td>
   <td>2</td>
  </tr>
  <tr>
   <th>itemprop</th>
   <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
   <td>Ring of Kerry</td>
  </tr>
  <tr>
   <th>itemprop</th>
   <td>img</td>
   <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
  </tr>
  <tr>
   <th>itemprop</th>
   <td>website</td>
   <td>flickr</td>
  </tr>
  <tr>
   <th>itemprop</th>
   <td>(token)</td>
   <td>(token)</td>
  </tr>
 </tbody>
</table>

<p><strong>トークン</strong>は、文字列か URL のいずれかです。アイテムは、 URL の場合に<strong>型付きアイテム</strong>と呼ばれます。そうでなければ文字列です。文字列は、ピリオドまたはコロンを含むことができません (下記参照)。</p>

<ol>
 <li>アイテムが型付きアイテムの場合、次のいずれかでなければなりません。
  <ol>
   <li>定義されたプロパティ名。</li>
   <li>または、妥当な URL。これは、語彙定義を参照します。</li>
   <li>独自のアイテムプロパティ名を表す妥当な URL (つまり、公式な私用で定義されていないもの)。</li>
  </ol>
 </li>
 <li>アイテムが型付きアイテムでない場合は、次のようになります。
  <ol>
   <li>"<code>.</code>" (U+002E FULL STOP)文字と "<code>:</code>" (U+003A COLON) 文字を含まず、所有者のアイテムプロパティ名 (公式な仕様で定義されないもの) として使用される文字列。</li>
  </ol>
 </li>
</ol>

<p class="note"><strong>メモ: </strong> 上記の規則では、 URL ではない値では ":" が許可されていません。なぜならそうでなければ URL と区別できないからです。 "." 文字をもつ値は、将来の拡張のために予約されています。空白文字は複数のトークンとして解析されるために許可されません。</p>

<h2 id="Values" name="Values">値</h2>

<p>名前と値の組のプロパティ値は、次のリストで最初に一致するものに与えられます。</p>

<ul>
 <li>要素が <code>itemscope</code> 属性を持つ場合

  <ul>
   <li>値は要素によって作成された<strong>アイテム</strong>を持つ</li>
  </ul>
 </li>
 <li>要素が <code>meta</code> 要素である場合
  <ul>
   <li>値は、要素の <code>content</code> 属性の値である</li>
  </ul>
 </li>
 <li>要素が <code>audio</code>, <code>embed</code>, <code>iframe</code>, <code>img</code>, <code>source</code>, <code>track</code>, <code>video</code> 要素である場合
  <ul>
   <li>値は、属性が設定される時に要素のノード文書 (<a href="/ja/docs/Web/API/Microdata_DOM_API">Microdata DOM API</a>の一部) に関連する要素の src 属性の解析する値に由来する結果の URL 文字列である</li>
  </ul>
 </li>
 <li>要素が <code>a</code>, <code>area</code>, <code>link</code> 要素である場合
  <ul>
   <li>値は、属性が設定される時に要素のノード文書に関連する要素の href 属性の解析する値に由来する結果の URL 文字列である</li>
  </ul>
 </li>
 <li>要素が <code>object</code> 要素である場合
  <ul>
   <li>値は、属性が設定される時に要素のノード文書に関連する要素の data 属性の解析する値に由来する結果の URL 文字列である</li>
  </ul>
 </li>
 <li>要素が <code>data</code> 要素である場合
  <ul>
   <li>値は、要素の value 属性の値である</li>
  </ul>
 </li>
 <li>要素が <code>meter</code> 要素である場合
  <ul>
   <li>値は、要素の <code>value</code> 属性の値である</li>
  </ul>
 </li>
 <li>要素が <code>time</code> 要素である場合
  <ul>
   <li>値は、要素の <code>datetime</code> 値である</li>
  </ul>
 </li>
</ul>

<p>それ以外</p>

<ul>
 <li>値は、要素の <var>textContent</var> である。</li>
</ul>

<p>プロパティの値が <code>URL</code> である場合、プロパティは URL プロパティ要素を使用して指定されなければなりません。 URL プロパティ要素は、 <code>a</code>, <code>area</code>, <code>audio</code>, <code>embed</code>, <code>iframe</code>, <code>img</code>, <code>link</code>, <code>object</code>, <code>source</code>, <code>track</code>, <code>video</code> 要素です。</p>

<h3 id="Name_order" name="Name_order">名前の順序</h3>

<p>名前は互いに順不同ですが、特定の名前が複数の値を持つ場合、その値は相対的な順序を持ちます。</p>

<p>以下の例では、 "a" プロパティは "1" 及び "2" の値を<em>その順番で</em>持ちますが、 "a" プロパティが "b" プロパティの前にくることは重要ではありません</p>

<pre class="brush: html">&lt;div itemscope&gt;
 &lt;p itemprop="a"&gt;1&lt;/p&gt;
 &lt;p itemprop="a"&gt;2&lt;/p&gt;
 &lt;p itemprop="b"&gt;test&lt;/p&gt;
&lt;/div&gt;</pre>

<p>以下のものは同等です</p>

<pre class="brush: html">&lt;div itemscope&gt;
 &lt;p itemprop="b"&gt;test&lt;/p&gt;
 &lt;p itemprop="a"&gt;1&lt;/p&gt;
 &lt;p itemprop="a"&gt;2&lt;/p&gt;
&lt;/div&gt;</pre>

<p>以下も同等です</p>

<pre class="brush: html">&lt;div itemscope&gt;
 &lt;p itemprop="a"&gt;1&lt;/p&gt;
 &lt;p itemprop="b"&gt;test&lt;/p&gt;
 &lt;p itemprop="a"&gt;2&lt;/p&gt;
&lt;/div&gt;</pre>

<p>以下も同等です</p>

<pre class="brush: html">&lt;div id="x"&gt;
 &lt;p itemprop="a"&gt;1&lt;/p&gt;
&lt;/div&gt;
&lt;div itemscope itemref="x"&gt;
 &lt;p itemprop="b"&gt;test&lt;/p&gt;
 &lt;p itemprop="a"&gt;2&lt;/p&gt;
&lt;/div&gt;
</pre>

<h2 id="Other_examples" name="Other_examples">その他の例</h2>

<h3 id="HTML_2">HTML</h3>

<pre class="brush: html">&lt;dl itemscope
  itemtype="http://vocab.example.net/book"
  itemid="urn:isbn:0-330-34032-8"&gt;
 &lt;dt&gt;Title
   &lt;dd
    itemprop="title"&gt;The Reality Dysfunction
 &lt;dt&gt;Author
   &lt;dd
     itemprop="author"&gt;Peter F. Hamilton
 &lt;dt&gt;Publication date
 &lt;dd&gt;&lt;time
   itemprop="pubdate"
   datetime="1996-01-26"&gt;26 January 1996&lt;/time&gt;
&lt;/dl&gt;
</pre>

<h3 id="Structured_data_2" name="Structured_data_2">構造化データ</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <td colspan="1" rowspan="14">itemscope</td>
   <td>itemtype: itemid</td>
   <td colspan="2" rowspan="1">http://vocab.example.net/book: urn:isbn:0-330-34032-8</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>title</td>
   <td>The Reality Dysfunction</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>author</td>
   <td>Peter F. Hamilton</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>pubdate</td>
   <td>1996-01-26</td>
  </tr>
 </tbody>
</table>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('HTML_2', '', '', '', 'Web/HTML/Global_attributes/itemprop')}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{SpecName('HTML Microdata', "#dfn-attr-itemprop", "itemprop")}}</td>
   <td>{{Spec2('HTML Microdata')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "microdata.html#names:-the-itemprop-attribute", "itemprop")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.global_attributes.itemprop")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTML/Global_attributes">他のグローバル属性</a></li>
 <li>マイクロデータに関連する他のグローバル属性
  <ul>
   <li>{{htmlattrxref("itemid")}}</li>
   <li>{{htmlattrxref("itemprop")}}</li>
   <li>{{htmlattrxref("itemref")}}</li>
   <li>{{htmlattrxref("itemscope")}}</li>
   <li>{{htmlattrxref("itemtype")}}</li>
  </ul>
 </li>
</ul>
