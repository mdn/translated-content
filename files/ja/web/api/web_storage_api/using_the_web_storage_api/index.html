---
title: Web Storage API の使用
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
tags:
  - API
  - Guide
  - Storage
  - Web Storage API
  - localStorage
  - sessionStorage
translation_of: Web/API/Web_Storage_API/Using_the_Web_Storage_API
---
<div>{{DefaultAPISidebar("Web Storage API")}}</div>

<p><span class="seoSummary">Web Storage API は、ブラウザーがキーと値のペアを安全に保存できる仕組みを提供します。</span></p>

<p>この記事は、この技術を利用する方法のチュートリアルを提供します。</p>

<h2 id="Basic_concepts" name="Basic_concepts">基本概念</h2>

<p>Storage オブジェクトはシンプルなキーと値の組み合わせを保存しており、オブジェクトに似ていますが、これらは何度ページを読み込んでも存在し続けます。キーは常に文字列です (なお、オブジェクトと同様、整数のキーは自動的に文字列に変換されます)。これらの値にアクセスするにはオブジェクトと同様に、または {{domxref("Storage.getItem()")}} と {{domxref("Storage.setItem()")}} メソッドを使用して行います。以下の 3 行はすべて、(同じ) colorSetting という項目を設定します。</p>

<pre class="brush: js notranslate" style="white-space: pre;">localStorage.colorSetting = '#a4509b';
localStorage['colorSetting'] = '#a4509b';
localStorage.setItem('colorSetting', '#a4509b');</pre>

<div class="note">
<p><strong>注</strong>: Web Storage API (<code>setItem</code>, <code>getItem</code>, <code>removeItem</code>, <code>key</code>, <code>length</code>) の使用が推奨されており、これは単純なオブジェクトをキーバリューストアとして使うという<a href="http://www.2ality.com/2012/01/objects-as-maps.html">落とし穴</a>を防ぐためです。</p>
</div>

<p>Web Storage には、以下の 2 種類の仕組みがあります。</p>

<ul>
 <li>セッションストレージ (<strong><code>sessionStorage</code></strong>) は、各オリジン毎に分割された保存領域を管理し、これはページセッションの間 (ブラウザーを開いている間、ページの再読み込みや復元を含む) に使用可能です。</li>
 <li>ローカルストレージ (<strong><code>localStorage</code></strong>) も同様ですが、こちらはブラウザーを閉じたり再び開いたりしても持続します。</li>
</ul>

<p>これらの仕組みは {{domxref("Window.sessionStorage")}} および {{domxref("Window.localStorage")}} プロパティ (正確には、対応しているブラウザーは <code>Window</code> オブジェクトが <code>WindowLocalStorage</code> および <code>WindowSessionStorage</code> オブジェクトを実装しており、これらに <code>localStorage</code> および <code>sessionStorage</code> プロパティがあります) を通して使用でき、いずれかのプロパティを使用すると {{domxref("Storage")}} オブジェクトのインスタンスを生成して、データアイテムの保存、取り出し、削除ができます。同じ生成元に対して <code>sessionStorage</code> と <code>localStorage</code> は、別の Storage オブジェクトを使用します。これらは別々に制御されて機能します。</p>

<p>よって例えば、始めに文書上で <code>localStorage</code> を呼び出すと {{domxref("Storage")}} が返ります。その後に文書上で <code>sessionStorage</code> を呼び出すと、別の {{domxref("Storage")}} オブジェクトが返ります。どちらも同じ方法で操作することができますが、操作は個別に行われます。</p>

<h2 id="Feature-detecting_localStorage" name="Feature-detecting_localStorage">localStorage の機能検出</h2>

<p>ローカルストレージを利用できるようにするには、まず対応済みであり、現在のブラウザーセッションで利用可能であるかを確かめるべきです。</p>

<h3 id="Testing_for_availability" name="Testing_for_availability">利用可能かどうかのを検証</h3>

<p>ローカルストレージに対応しているブラウザーは、 window オブジェクトに localStorage という名称のプロパティを持っています。しかしさまざまな理由で、プロパティが存在すると主張するだけで例外が発生する可能性があります。ローカルストレージが存在していたとしても、さまざまなブラウザーがローカルストレージを無効化する設定を設けていますので、ローカルストレージが利用できる保証はありません。よってブラウザーがローカルストレージに<em>対応していても</em>、ページ上のスクリプトでは<em>利用できる状態ではない</em>場合があります。</p>

<p>例えば Safari はプライベートブラウジングモードでは、容量が 0 で空のローカルストレージを提供しますので、事実上使用できません。逆に、正規の QuotaExceededError が発生した場合、これはストレージ領域を使い切ったことを意味しますが、ストレージは実際に<em>利用可能</em>です。機能検出時には、これらのシナリオを考慮に入れるべきです。</p>

<p>ローカルストレージに対応済みかつ使用可能であるかどうかを検出する関数を、以下に示します。</p>

<pre class="brush: js notranslate">function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException &amp;&amp; (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &amp;&amp;
            // acknowledge QuotaExceededError only if there's something already stored
            (storage &amp;&amp; storage.length !== 0);
    }
}</pre>

<p>また、この関数の使い方は以下のとおりです。</p>

<pre class="brush: js notranslate">if (storageAvailable('localStorage')) {
  // やったあ! ローカルストレージをちゃんと利用できます
}
else {
  // 残念、ローカルストレージは利用できません
}</pre>

<p><code>storageAvailable('sessionStorage')</code> を呼び出すと、代わりにセッションストレージを確認できます。</p>

<p><a href="https://gist.github.com/paulirish/5558557">ローカルストレージの機能を検出する方法の略歴</a>をご覧ください。</p>

<h2 id="Example" name="Example">例</h2>

<p>ウェブストレージの典型的な使用法を示すため、想像力豊かに <strong>Web Storage Demo</strong> と名づけたシンプルな例を作成しました。<a href="https://mdn.github.io/dom-examples/web-storage/">ランディングページ</a> には、色、フォント、装飾画像をカスタマイズするためのコントロールがあります:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/9685/landing.png" style="display: block; height: 482px; margin: 0px auto; width: 700px;">別の選択肢を選ぶと、即座にページが更新されます。さらに、選択内容を <code>localStorage</code> に保存しますので、別のページに移動した後に再びこのページを読み込むと、選択内容が維持されています。</p>

<p>また、 <a href="https://mdn.github.io/dom-examples/web-storage/event.html">event output ページ</a>も提供します。このページを別のタブで開くと、ランディングページで選択肢を変更したときに {{domxref("StorageEvent")}} が発生するのに応じて、更新されたストレージの情報が出力されるのを確認できます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/9687/event-output.png" style="display: block; height: 482px; margin: 0px auto; width: 700px;"></p>

<div class="note">
<p><strong>メモ</strong>: 上記のリンクから実際のページを参照することができます。また、<a href="https://github.com/mdn/dom-examples/tree/master/web-storage">ソースコードも確認できます</a>。</p>
</div>

<h3 id="Testing_whether_your_storage_has_been_populated" name="Testing_whether_your_storage_has_been_populated">ストレージが存在しているかを確認する</h3>

<p>始めに <a href="https://github.com/mdn/dom-examples/blob/master/web-storage/main.js">main.js</a> で、ストレージオブジェクトがすでに存在しているか (すなわち、過去にページへアクセスしていたか) を確認します。</p>

<pre class="brush: js notranslate">if(!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}</pre>

<p>{{domxref("Storage.getItem()")}} メソッドは、ストレージからデータアイテムを取得するために使用します。この例では、 <code>bgcolor</code> アイテムが存在するかを確認しています。アイテムが存在しなければ、既存のカスタマイズ値をストレージへ追加するために <code>populateStorage()</code> を実行します。すでに値が存在する場合は、ページのスタイルを保存済みの値で更新するために <code>setStyles()</code> を実行します。</p>

<p><strong>メモ</strong>: {{domxref("Storage.length")}} を使用して、ストレージオブジェクトが空であるかを確認することもできます。</p>

<h3 id="Getting_values_from_storage" name="Getting_values_from_storage">ストレージから値を取得する</h3>

<p>前述のとおり {{domxref("Storage.getItem()")}} を使用して、ストレージから値を取り出すことができます。これはデータアイテムのキーが引数であり、またデータの値を返します。例えば以下のようにします。</p>

<pre class="brush: js notranslate">function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}</pre>

<p>この例で、最初の 3 行はローカルストレージから値を取得しています。次に、フォーム要素で表示する値をこれらの値に更新して、ページを再読み込みしたときに同期するようにします。最後に、ページのスタイルや装飾画像を更新して、再読み込み時にカスタマイズ設定を復元します。</p>

<h3 id="Setting_values_in_storage" name="Setting_values_in_storage">ストレージに値を設定する</h3>

<p>{{domxref("Storage.setItem()")}} は新たなデータアイテムを作成するため、および (データアイテムがすでに存在していれば) 既存の値を更新するために使用します。これは引数が 2 つあり、ひとつは作成または変更するデータアイテムのキー、もうひとつはデータアイテムに保存する値です。</p>

<pre class="brush: js notranslate">function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);
  localStorage.setItem('image', document.getElementById('image').value);

  setStyles();
}</pre>

<p><code>populateStorage()</code> 関数は、背景色、フォント、画像のパスの 3 つのアイテムをローカルストレージに保存します。そして、ページのスタイルなどを更新するために <code>setStyles()</code> 関数を実行します。</p>

<p>また、それぞれのフォーム要素に <code>onchange</code> ハンドラーを含めておき、フォームの値が変更されるたびにデータやスタイルを更新します。</p>

<pre class="brush: js notranslate">bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;</pre>

<h3 id="Responding_to_storage_changes_with_the_StorageEvent" name="Responding_to_storage_changes_with_the_StorageEvent">StorageEvent を使用してストレージの変更に反応する</h3>

<p>{{domxref("StorageEvent")}} は、{{domxref("Storage")}} オブジェクトが変更されるたびに発生します (sessionStorage の変更では発生しません) 。これは、変更を行ったページ上では効果がないでしょう。実際は、ストレージを使用するドメイン上の別のページで、ストレージの変更に同期するための手段です。別のドメイン上のページは、前述のストレージオブジェクトにアクセスできません。</p>

<p>イベントページ (<a href="https://github.com/mdn/dom-examples/blob/master/web-storage/event.js">events.js</a> をご覧ください) には、以下の JavaScript しかありません。</p>

<pre class="brush: js notranslate">window.addEventListener('storage', function(e) {
  document.querySelector('.my-key').textContent = e.key;
  document.querySelector('.my-old').textContent = e.oldValue;
  document.querySelector('.my-new').textContent = e.newValue;
  document.querySelector('.my-url').textContent = e.url;
  document.querySelector('.my-storage').textContent = JSON.stringify(e.storageArea);
});</pre>

<p>ここでは <code>window</code> オブジェクトに、現在のオリジンに関連付けられた {{domxref("Storage")}} オブジェクトが変更されたときに発生するイベントリスナを追加しています。上記の例でわかるとおり、このイベントに関連付けられたイベントオブジェクトは、変更されたデータのキー、変更前の古い値、変更後の新しい値、ストレージを変更した文書の URL、ストレージオブジェクト自体 (その中身を見えるように文字化しています) といった、役に立つ情報を含んでいるいくつものプロパティを持っています。</p>

<h3 id="Deleting_data_records" name="Deleting_data_records">データレコードの削除</h3>

<p>ウェブストレージには、データを削除するためのシンプルなメソッドが 2 つあります。このデモでは使用していませんが、プロジェクトへとても簡単に追加できます:</p>

<ul>
 <li>{{domxref("Storage.removeItem()")}} は引数が 1 つあり、削除したいデータアイテムのキーです。これは、当該ドメインのストレージオブジェクトからデータアイテムを削除します。</li>
 <li>{{domxref("Storage.clear()")}} は引数がなく、当該ドメインのストレージオブジェクト全体を空にします。</li>
</ul>

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
   <td>{{SpecName('HTML WHATWG', 'webstorage.html#webstorage')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="Window.localStorage" name="Window.localStorage"><code>Window.localStorage</code></h3>

<div>
<p>{{Compat("api.Window.localStorage")}}</p>

<h3 id="Window.sessionStorage" name="Window.sessionStorage"><code>Window.sessionStorage</code></h3>

<div>
<p>{{Compat("api.Window.sessionStorage")}}</p>
</div>
</div>

<p>すべてのブラウザーで、ローカルストレージおよびセッションストレージが受け入れる容量は異なります。<a href="http://dev-test.nemikor.com/web-storage/support-test/">さまざまなブラウザーのストレージ容量を報告しているページ</a>があります。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Storage_API">Web Storage API のランディングページ</a></li>
</ul>
