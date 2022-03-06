---
title: HTML での画像の使用
slug: Web/Media/images
tags:
  - HTML
  - Images
  - Landing
  - Media
translation_of: Web/Media/images
---
<p>HTML の用語集 {{Glossary("HTML")}} は、以下のようになっています。{{HTMLElement("img")}} 要素を使用すると HTML 文書に画像を埋め込むことができ、一方で {{HTMLElement("picture")}} 要素を使用するとレスポンシブ画像を使用することができます。このガイドでは、Web サイトへの画像の追加を扱うリソースへのリンクを紹介します。</p>

<div class="row topicpage-table">
<div class="section">
<h2 class="Documentation" id="リファレンス">リファレンス</h2>

<p>これらの記事では、Web 上での画像の表示方法を制御するために使用される HTML 要素と CSS プロパティのいくつかを取り上げています。</p>

<h3 id="HTML">HTML</h3>

<dl>
 <dt>{{HTMLElement("img")}}</dt>
 <dd><strong>HTML <code>&lt;img&gt;</code> 要素</strong>は、Web ページに画像を埋め込むために使用されます。画像の振る舞いを制御する幅広い属性をサポートしており、画像を見ない人のために {{htmlattrxref("alt", "img")}} テキストのような重要な情報を追加することができます。</dd>
 <dt>{{HTMLElement("picture")}}</dt>
 <dd><strong>HTML <code>&lt;picture&gt;</code> 要素</strong>は、0 個以上の {{HTMLElement("source")}} 要素と1個の {{HTMLElement("img")}} 要素を含みます。ブラウザは、それぞれの子 &lt;source&gt; 要素を考慮して、それらの中から最適なものを選択します。</dd>
</dl>

<h3 id="CSS">CSS</h3>

<dl>
 <dt>{{cssxref("object-fit")}}</dt>
 <dd><code><strong>object-fit</strong></code> <a href="/ja/docs/Web/CSS">CSS</a> プロパティは、<code><a href="/ja/docs/Web/HTML/Element/Img">&lt;img&gt;</a></code> や <code><a href="/ja/docs/Web/HTML/Element/video">&lt;video&gt;</a></code> のような<a href="/ja/docs/Web/CSS/Replaced_element">置換要素</a>の内容を、そのコンテナに合わせてどのようにリサイズするかを設定します。</dd>
 <dt>{{cssxref("object-position")}}</dt>
 <dd><strong><code>object-position</code></strong> <a href="/ja/docs/Web/CSS">CSS</a> プロパティは、要素のボックス内で選択された<a href="/ja/docs/Web/CSS/Replaced_element">置換要素</a>内のコンテンツの整列を指定します。置換された要素のオブジェクトに覆われていないボックス内の領域は、要素の背景が表示されます。</dd>
 <dt>{{cssxref("background-image")}}</dt>
 <dd><strong><code>background-image</code></strong> <a href="/ja/docs/Web/CSS">CSS</a> プロパティは、要素の背景画像を設定します。</dd>
 <dd></dd>
</dl>
</div>

<div class="section">
<h2 class="Documentation" id="ガイド">ガイド</h2>

<p>これらの記事では、画像の種類を選択して設定するためのガイダンスを提供しています。</p>

<dl>
 <dt><a href="/ja/docs/Web/Media/Formats/Image_types">画像ファイルの種類とフォーマットガイド</a></dt>
 <dd>Web ブラウザで一般的にサポートされている様々な画像ファイルの種類について、それぞれの使用例、機能、互換性の要因などの詳細を含めて解説しています。さらに、この記事では、与えられた状況に最適な画像ファイルタイプを選択するためのガイダンスを提供します。</dd>
 <dt><a href="/ja/docs/Web/Media/images/aspect_ratio_mapping">メディアコンテナ要素の幅と高さの属性をアスペクト比にマッピングする</a></dt>
 <dd>これにより、ブラウザが画像を読み込む方法が変更され、アスペクト比がブラウザによって初期段階で計算され、後で読み込まれる前に画像の表示サイズを修正することができます。</dd>
</dl>

<dl>
</dl>

<h2 id="その他のトピック">その他のトピック</h2>

<p>興味がありそうな関連トピック</p>

<dl>
 <dt><a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">HTML の学習: レスポンシブ画像</a></dt>
 <dd>この記事ではレスポンシブ画像の概念、つまり画面サイズや解像度などが大きく異なるデバイスでも動作する画像について学び、レスポンシブ画像を実装するために HTML が提供するツールについて見ていきます。</dd>
</dl>
</div>
</div>
