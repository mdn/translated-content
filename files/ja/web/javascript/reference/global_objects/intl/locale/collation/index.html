---
title: Intl.Locale.prototype.collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Prototype
  - Reference
  - プロパティ
  - 国際化
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>Intl.Locale.prototype.collation</code></strong> プロパティは、 <code>Locale</code> の<a href="https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation">照合種別</a>を返すアクセサープロパティです。</span></p>

<h2 id="Description" name="Description">解説</h2>

<p>照合とは、文字列を並べ替える処理のことです。検索クエリの結果からデータベース内のレコードの順序付けまで、文字列を特定の順序に並べ替えて配置しなければならない場合に使用されます。文字列を順番に配置するという考えは些細なことのように思えるかもしれませんが、順序の考え方は地域や言語によって異なることがあります。 <code>collation</code> プロパティは、 JavaScript プログラマーが特定のロケールで使用される照合種別に簡単にアクセスできるようにすることを助けます。</p>

<p>利用可能な照合種別は下記の表にあります。 <a href="https://github.com/unicode-org/cldr/blob/2dd06669d833823e26872f249aa304bc9d9d2a90/common/bcp47/collation.xml">Unicode 照合仕様書</a> から引用したものです。</p>

<h3 id="Valid_collation_types" name="Valid_collation_types">有効な照合種別</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">照合種別</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>big5han</td>
   <td>ラテン文字はピンイン順、漢字は big5 文字セット順 (中国語で使用)</td>
  </tr>
  <tr>
   <td>compat</td>
   <td>前の版の順序で、互換性のため</td>
  </tr>
  <tr>
   <td>dict</td>
   <td>辞書形式の順序 (シンハラ語など)</td>
  </tr>
  <tr>
   <td>
    <div class="blockIndicator warning">
    <p><code>direct</code> 照合順は非推奨です。使用しないでください。</p>
    </div>

    <p>direct</p>
   </td>
   <td>バイナリコードポイント順 (ヒンズー語で使用)</td>
  </tr>
  <tr>
   <td>ducet</td>
   <td>既定の Unicode 照合順で、要素表順</td>
  </tr>
  <tr>
   <td>emoji</td>
   <td>絵文字に推奨の順序</td>
  </tr>
  <tr>
   <td>eor</td>
   <td>ヨーロッパ語の順序の規則</td>
  </tr>
  <tr>
   <td>gb2312</td>
   <td>ラテン文字はピンイン順、漢字は gb2312han 順 (中国語で使用)</td>
  </tr>
  <tr>
   <td>phonebk</td>
   <td>電話帳形式の順序 (ドイツ語など)</td>
  </tr>
  <tr>
   <td>phonetic</td>
   <td>発音順 (発音に基づく順序)</td>
  </tr>
  <tr>
   <td>pinyin</td>
   <td>ラテン文字と漢字はピンイン順 (中国語で使用)</td>
  </tr>
  <tr>
   <td>reformed</td>
   <td>リフォーム順 (スウェーデン語など)</td>
  </tr>
  <tr>
   <td>search</td>
   <td>文字列検索のための特殊な照合種別</td>
  </tr>
  <tr>
   <td>searchjl</td>
   <td>韓国語の頭文字子音検索用の特殊な照合種別</td>
  </tr>
  <tr>
   <td>standard</td>
   <td>各言語の既定の照合順</td>
  </tr>
  <tr>
   <td>stroke</td>
   <td>ラテン文字はピンイン順、漢字は画数順 (中国語で使用)</td>
  </tr>
  <tr>
   <td>trad</td>
   <td>歴史的な形の順序 (スペイン語など)</td>
  </tr>
  <tr>
   <td>unihan</td>
   <td>ラテン文字はピンイン順、漢字は Unihan 部首画数順 (中国語で使用)</td>
  </tr>
  <tr>
   <td>zhuyin</td>
   <td>
    <p>ラテン文字はピンイン順、漢字とパパラモフォは注音順 (中国語で使用)</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>他のロケールのサブタグと同様、照合種別はロケール文字列やコンストラクターの構成オブジェクトの引数で {{jsxref("Locale", "Intl.Locale")}} オブジェクトに追加することができます。</p>

<h3 id="Adding_a_collation_type_via_the_locale_string" name="Adding_a_collation_type_via_the_locale_string">ロケール文字列による照合種別の追加</h3>

<p><a href="https://www.unicode.org/reports/tr35/">Unicode ロケール文字列仕様書</a>では、照合種別はロケールキーの「拡張子サブタグ」となります。これらのサブタグは、ロケールに関するデータを追加するもので、 <code>-u</code> 拡張を使用してロケール識別子に追加されます。つまり、照合種別は、ロケールのコンストラクターに渡される初期のロケール識別子文字列に追加することができます。照合種別を追加するには、まず文字列に <code>-u</code> 拡張を追加します。次に、照合順序の型を追加することを示すために <code>-co</code> 拡張を追加します。最後に、照合順序を文字列に追加します。</p>

<pre class="brush: js">let stringColl = new Intl.Locale("en-Latn-US-u-co-emoji");
console.log(stringColl.collation); // "emoji" と表示
</pre>

<h3 id="Adding_a_collation_type_via_the_configuration_object_argument" name="Adding_a_collation_type_via_the_configuration_object_argument">構成オブジェクト引数による照合種別の追加</h3>

<p>{{jsxref("Locale/Locale", "Intl.Locale")}} コンストラクターには、オプションで構成オブジェクトの引数があり、これには照合種別を含む任意の拡張の種類をいくつか含めることができます。構成オブジェクトの <code>collation</code> プロパティを任意の照合種別に設定し、コンストラクターに渡します。</p>

<pre class="brush: js">let configColl = new Intl.Locale("en-Latn-US", {collation: "emoji"});
console.log(configColl.collation); // "emoji" と表示</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Intl.Locale.prototype.collation')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Intl.Locale.collation")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Locale", "Intl.Locale")}}</li>
</ul>
