---
title: マイクロデータ
slug: Web/HTML/Microdata
tags:
  - Composing
  - Example
  - HTML
  - Microdata
  - Reference
  - SEO
  - Search
translation_of: Web/HTML/Microdata
---
<p>マイクロデータは {{glossary("WHATWG")}} HTML 標準の一部であり、ウェブページ上の既存のコンテンツ内でメタデータをネストするために使用されます。検索エンジンやウェブクローラーは、ウェブページからマイクロデータを抽出して処理し、ユーザーによ高度な閲覧操作を提供するために使用することができます。検索エンジンは、ウェブページ上の情報を理解し、ユーザーにより関連性の高い結果を提供することを可能にするため、この構造化されたデータを直接利用できることから大きな利益を得ます。マイクロデータは、値をプロパティに割り当てるためにアイテムと名前と値の組み合わせを記述するためのサポート語彙を使用します。マイクロデータは、機械可読なタグとともに HTML 要素に注釈する試みで、古い RDFa やマイクロフォーマットの同様のアプローチよりも簡単な方法を提供します。</p>

<p>高水準では、マイクロデータは名前と値の組み合わせのグループで構成されます。このグループはアイテムと呼ばれ、それぞれの名前と値の組み合わせがプロパティとなります。アイテムとプロパティは標準の要素によって表されます。</p>

<ul>
 <li>アイテムを作成するために、 <strong>itemscope</strong> 属性を使用します。</li>
 <li>アイテムにプロパティを追加するために、 <strong>itemprop </strong> 属性がアイテムの子孫の1つで使用されます。</li>
</ul>

<h2 id="Vocabularies" name="Vocabularies">語彙</h2>

<p>Google をはじめとする主要な検索エンジンは、構造化されたデータ <a href="https://schema.org">Schema.org</a> に対応しています。この語彙は、タイプ名やプロパティ名の標準セットを定義しています。たとえば、 <a href="http://schema.org/MusicEvent">Schema.org Music Event</a> はコンサートを表し、 <a href="http://schema.org/startDate">startDate</a> と <a href="http://schema.org/location">location</a> プロパティをコンサートの主要な詳細を指定するために併用します。この場合、 <a href="http://schema.org/MusicEvent">Schema.org Music Event</a> は itemtype によって使用される URL となり、 startDate と location は <a href="http://schema.org/MusicEvent">Schema.org Music Event</a> が定義する itemprop になります。</p>

<div class="note">
<p><strong>注:</strong> itemtype 属性の詳細は <a href="http://schema.org/Thing">http://schema.org/Thing</a> にあります。</p>
</div>

<p>マイクロデータの語彙は、アイテムのセマンティックスや意味を提供します。ウェブ開発者は専用の語彙を設計したり、 <a href="http://schema.org">schema.org</a> のような広く使用されている語彙を利用したりすることができます。よく使用されるマークアップ語彙のコレクションは、 Schema.org によって提供されます。</p>

<p>よく使用される語彙:</p>

<ul>
 <li>創作物: <a href="http://schema.org/CreativeWork">CreativeWork</a>, <a href="http://schema.org/Book">Book</a>, <a href="http://schema.org/Movie">Movie</a>, <a href="http://schema.org/MusicRecording">MusicRecording</a>, <a href="http://schema.org/Recipe">Recipe</a>, <a href="http://schema.org/TVSeries">TVSeries</a></li>
 <li>埋め込み非テキストオブジェクト: <a href="http://schema.org/AudioObject">AudioObject</a>, <a href="http://schema.org/ImageObject">ImageObject</a>, <a href="http://schema.org/VideoObject">VideoObject</a></li>
 <li><a href="http://schema.org/Event">Event</a></li>
 <li><a href="http://schema.org/docs/meddocs.html">健康と医療タイプ</a>: <a href="http://schema.org/MedicalEntity">MedicalEntity</a> の下の健康と医療タイプに注目してください</li>
 <li><a href="http://schema.org/Organization">Organization</a></li>
 <li><a href="http://schema.org/Person">Person</a></li>
 <li><a href="http://schema.org/Place">Place</a>, <a href="http://schema.org/LocalBusiness">LocalBusiness</a>, <a href="http://schema.org/Restaurant">Restaurant</a></li>
 <li><a href="http://schema.org/Product">Product</a>, <a href="http://schema.org/Offer">Offer</a>, <a href="http://schema.org/AggregateOffer">AggregateOffer</a></li>
 <li><a href="http://schema.org/Review">Review</a>, <a href="http://schema.org/AggregateRating">AggregateRating</a></li>
 <li><a href="http://schema.org/Action">Action</a></li>
 <li><a href="http://schema.org/Thing">Thing</a></li>
 <li><a href="http://schema.org/Intangible">Intangible</a></li>
</ul>

<p>Google、Microsoft、Yahoo! のような主要な検索エンジンの管理者は、検索結果を改良するために <a href="http://schema.org/">schema.org</a> を頼りにしています。目的によってはその場で作成した語彙が適切です。それ以外の目的には、語彙を設計する必要があります。可能であれば、著者は簡単にコンテンツを再利用できるように、既存の語彙を再利用することを勧めます。</p>

<h2 id="Localization" name="Localization">ローカライズ</h2>

<p>ある場合に、特定の領域をカバーする検索エンジンはマイクロデータの地域に固有な拡張を提供するかもしれません。例えば、ロシアのメジャーな検索エンジンである <a href="https://www.yandex.com/">Yandex </a>は、 hCard (会社の連絡先情報)、 hRecipe (料理のレシピ)、 hReview (マーケットのレビュー)、 hProduct (製品データ) のような microformat をサポートし、用語の定義や百科事典の記事について独自フォーマットを提供しています。この拡張は、キリル文字とラテン文字の間の文字変換の問題を解決するためになされました。スキーマ語彙の追加マーキングパラメータの実装により、ロシア語のウェブページにおける情報のインデックス化は、かなりの成功を収めました。</p>

<h2 id="Global_attributes" name="Global_attributes">グローバル属性</h2>

<p><a href="/ja/docs/Web/HTML/Global_attributes/itemid">itemid</a> – 一意の、アイテムのグローバル識別子。</p>

<p><a href="/ja/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> – アイテムにプロパティを追加するために用います。すべての HTML 要素は、 itemprop が名前と値のペアから構成する、 itemprop 属性を指定することができます。</p>

<p><a href="/ja/docs/Web/HTML/Global_attributes/itemref">itemref</a> – <code>itemscope</code> 属性をもつ要素の子孫でないプロパティは、itemref を用いてアイテムと関連付けることができます。itemref は、要素の id (<code>itemid</code>ではなく) のリストに文書の他の場所で追加のプロパティを提供します。</p>

<p><a href="/ja/docs/Web/HTML/Global_attributes/itemscope">itemscope</a> – itemscope は、ブロックに含まれる HTML が特定のアイテムであることを記述するために <a href="/ja/docs/Web/HTML/Global_attributes/itemtype">itemtype</a> と共に (通常) 動作します。 itemscope はアイテムを作成し、アイテムに関連付けられる itemtype の範囲を定義します。 itemtype は、アイテムとアイテムのプロパティのコンテキストを説明する (<a class="external external-icon" href="http://schema.org/">schema.org</a> のような) 語彙の妥当なURLとなります。</p>

<p><a href="/ja/docs/Web/HTML/Global_attributes/itemtype">itemtype </a>– データ構造で itemprop の語彙 (アイテムのプロパティ) を定義するために使用される語彙の URL を指定します。<a href="/ja/docs/Web/HTML/Global_attributes/itemscope">itemscope </a> は、 itemtype によって設定される語彙がアクティブとなるデータ構造の範囲を設定するために使用されます。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div itemscope itemtype="http://schema.org/SoftwareApplication"&gt;
  &lt;span itemprop="name"&gt;Angry Birds&lt;/span&gt; -

  REQUIRES &lt;span itemprop="operatingSystem"&gt;ANDROID&lt;/span&gt;&lt;br&gt;
  &lt;link itemprop="applicationCategory" href="http://schema.org/GameApplication"/&gt;

  &lt;div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating"&gt;
    RATING:
    &lt;span itemprop="ratingValue"&gt;4.6&lt;/span&gt; (
    &lt;span itemprop="ratingCount"&gt;8864&lt;/span&gt; ratings )
  &lt;/div&gt;

  &lt;div itemprop="offers" itemscope itemtype="http://schema.org/Offer"&gt;
    Price: $&lt;span itemprop="price"&gt;1.00&lt;/span&gt;
    &lt;meta itemprop="priceCurrency" content="USD" /&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="Structured_data" name="Structured_data">構造化データ</h3>

<div class="VIpgJd-VgwJlc-bN97Pc">
<div class="ibnC6b-sM5MNb">
<div class="NbYDle">
<div class="SmKAyb-jyrRxf IQ5j-oKdM2c" style="padding-left: 0px;">
<div class="jyrRxf-eEDwDf l5asRc">
<table class="standard-table">
 <tbody>
  <tr>
   <td colspan="1" rowspan="4">itemscope</td>
   <td>itemtype</td>
   <td colspan="2" rowspan="1"><span>SoftwareApplication (</span>http://schema.org/SoftwareApplication)</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td><span>name</span></td>
   <td><span>Angry Birds</span></td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td><span>operatingSystem</span></td>
   <td><span>ANDROID</span></td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td><span>applicationCategory</span></td>
   <td><span>GameApplication (http://schema.org/GameApplication)</span></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="3">itemscope</td>
   <td>itemprop[itemtype]</td>
   <td colspan="2" rowspan="1"><span>aggregateRating</span> [<span>AggregateRating</span>]</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td><span>ratingValue</span></td>
   <td><span>4.6</span></td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td><span>ratingCount</span></td>
   <td><span>8864</span></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="3">itemscope</td>
   <td>itemprop[itemtype]</td>
   <td colspan="2" rowspan="1"><span>offers</span> [<span>Offer</span>]</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td><span>price</span></td>
   <td><span>1.00</span></td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td><span>priceCurrency</span></td>
   <td><span>USD</span></td>
  </tr>
 </tbody>
</table>
</div>
</div>
</div>
</div>
</div>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('HTML', '', '100', '', 'Web/HTML/Microdata') }}</p>

<div class="note">
<p><strong>注</strong>: HTML からマイクロデータを抽出するための便利なツールとして、 Google の<a href="https://developers.google.com/structured-data/testing-tool/ Structured Data Testing Tool">構造化データテストツール</a>があります。上に示した HTML 上で試してみてください。</p>
</div>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>Firefox 16 で対応しました。 Firefox 49 で削除されました。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></li>
</ul>

<p>{{QuickLinksWithSubpages("/ja/docs/Web/HTML")}}</p>
