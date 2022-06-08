---
title: '<img>: 画像埋め込み要素'
slug: Web/HTML/Element/img
tags:
  - Content
  - Element
  - Graphics
  - HTML
  - HTML Graphics
  - HTML Images
  - HTML Photos
  - HTML Pictures
  - HTML embedded content
  - Image
  - Image Element
  - Media
  - Multimedia
  - Photos
  - Pictures
  - Reference
  - Web
browser-compat: html.elements.img
translation_of: Web/HTML/Element/img
---
<div>{{HTMLRef}}</div>

<p><strong><code>&lt;img&gt;</code></strong> は <a href="/ja/docs/Web/HTML">HTML</a> の要素で、文書に画像を埋め込みます。</p>

<div>{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}</div>

<p>上記の例では、 <code>&lt;img&gt;</code> 要素のとてもシンプルな使い方を示しています。</p>

<ul>
 <li><code>src</code> 属性は<strong>必須</strong>で、埋め込みたい画像へのパスを入れます。</li>
 <li><code>alt</code> 属性は画像のテキストによる説明で、必須ではありませんがアクセシビリティのために<strong>非常に有用</strong>です。 — 画面リーダーがこの説明を読み上げることで、画像が何を表すかをユーザーが知ることができます。また、ネットワークエラーやコンテンツのブロック、リンク切れ等の理由で画像が読み込めなかった場合にも代替テキストが表示されます。</li>
</ul>

<p>他にも、様々な目的で指定できる属性がたくさんあります。</p>

<ul>
 <li>セキュリティとプライバシーのための <a href="/ja/docs/Web/HTTP/Headers/Referrer-Policy">Referrer</a>/{{glossary("CORS")}} 制御。 {{htmlattrxref("crossorigin", "img")}} および {{htmlattrxref("referrerpolicy", "img")}} を参照してください。</li>
 <li>{{htmlattrxref("width", "img")}} と {{htmlattrxref("height", "img")}} の両方を使用して画像の固有の寸法を設定すると、画像を読み込む前に場所を確保し、コンテンツのレイアウトが移動することを防ぐことができます。</li>
 <li>{{htmlattrxref("sizes", "img")}} および {{htmlattrxref("srcset", "img")}} を使用したレスポンシブ画像のヒント ({{htmlelement("picture")}} 要素、および<a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">レスポンシブ画像</a>のチュートリアルもご覧ください)。</li>
</ul>

<h2 id="Supported_image_formats">対応している画像形式</h2>

<p>HTML 標準では、対応する画像形式を指定していないので、{{glossary("user agent", "ユーザーエージェント")}}によって対応する画像形式は異なります。</p>

<p>{{page("/ja/docs/Web/Media/Formats/Image_types", "Common_image_file_types")}}</p>

<div class="notecard note">
	<h4>Tip</h4>
	<p>ウェブブラウザーが対応している画像形式に関する、より包括的な情報については、<a href="/ja/docs/Web/Media/Formats/Image_types">画像ファイルの種類と形式ガイド</a>を参照してください。こちらには、対応されているがウェブコンテンツでは推奨されていない画像形式 (例: ICO、BMP など) も含まれています。</p>
</div>

<h2 id="Image_loading_errors">画像読み込みエラー</h2>

<p>画像の読み込みまたは表示の間にエラーが発生した場合、かつ {{htmlattrxref("onerror")}} イベントハンドラーが {{event("error")}} イベントを扱うよう設定されていた場合は、イベントハンドラーが呼び出されます。これはいくつもの状況がありえます。</p>

<ul>
 <li><code>src</code> 属性が空 (<code>""</code>) または <code>null</code> である。</li>
 <li>指定された <code>src</code> の {{glossary("URL")}} が現在ユーザーがいるページの URL と同じである。</li>
 <li>指定された画像が何らかの理由で読み込みが妨害され、中止された。</li>
 <li>指定された画像のメタデータが、寸法を受け取ることができないなどの理由で読み込みが中止され、かつ <code>&lt;img&gt;</code> 要素の属性に寸法が指定されていなかった場合。</li>
 <li>指定された画像が、{{Glossary("user agent", "ユーザーエージェント")}}が対応している形式ではない場合。</li>
</ul>

<h2 id="Attributes">属性</h2>

<p>この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>があります。</p>

<dl>
	<dt>{{htmlattrdef("alt")}}</dt>
	<dd>この属性は、画像を説明する代替文字列を定義します。
		<div class="notecard note">
			<h4>注</h4>
			<p>ブラウザーは常に画像を表示するわけではありません。ブラウザーが画像を表示しない状況はいくつかがあります。</p>

			<ul>
				<li>視覚ブラウザー以外のブラウザー (視覚障碍者向けのものを含む) で閲覧された場合</li>
				<li>ユーザーが画像を非表示に設定している場合 (帯域の節約、プライバシー上の理由)</li>
				<li>画像が無効であったり<a href="#supported_image_formats">未対応の画像形式</a>であったりした場合</li>
			</ul>

			<p>このような場合、ブラウザーは、画像をこの要素の <code>alt</code> 属性で定義された文字列に置き換えます。このような理由から、 <code>alt</code> には可能な限り役に立つ値を指定するべきです。</p>
	</div>

	<p><code>alt</code> 属性を省略すると、画像がコンテンツの鍵となる部分であり、同等のテキスト表現を行うことができないことを表します。この属性に空文字列を設定すると (<code>alt=""</code>)、この画像がコンテンツにおいて重要な箇所<em>ではない</em>ことを示し、視覚ブラウザーではない場合は{{glossary("Rendering engine", "レンダリング")}}を省略することがあります。視覚ブラウザーでは、 <code>alt</code> が空欄で画像の表示に失敗した場合は、壊れた画像のアイコンの表示が省略される場合もあります。</p>

	<p>この属性は画像をテキストにコピー＆ペーストした場合や、リンクされた画像をブックマークに保存したときにも使用されます。</p>
	</dd>
	<dt>{{htmlattrdef("crossorigin")}}</dt>
	<dd>
	<p>関連する画像の取得の際に {{glossary("CORS")}} を使用しなければならないかどうかを示します。 CORS リクエストから返された<a href="/ja/docs/Web/HTML/CORS_enabled_image">CORS が有効な画像</a>は、 {{HTMLElement("canvas")}} 要素で「<a href="/ja/docs/Web/HTML/CORS_enabled_image#what_is_a_tainted_canvas">汚染</a>」されることなく再利用することができます。</p>

	<p><code>crossorigin</code> 属性が指定されて<em>いない</em>場合は、 ({{httpheader("Origin")}} リクエストヘッダーがない) CORS 以外のリクエストが送信され、ブラウザーは画像が汚染されたものとしてマークし、その画像データへのアクセスを制限して、 {{HTMLElement("canvas")}} 要素での使用を防ぎます。</p>

	<p><code>crossorigin</code> 属性が指定されて<em>いる</em>場合は、({{httpheader("Origin")}} リクエストヘッダーを伴う) CORS リクエストが送信されます。しかし、サーバーがオリジンのサイトによる画像データへのオリジン間アクセスを許可することをオプトインしない場合 ({{httpheader("Access-Control-Allow-Origin")}} レスポンスヘッダーが一切送信されていないか、送信された {{httpheader("Access-Control-Allow-Origin")}} レスポンスヘッダーにサイトのオリジンが含まれていない場合)、ブラウザーは画像を読み込むことをブロックし、開発ツールのコンソールに CORS エラーを記録します。</p>

	<p>許可されている値:</p>

	<dl>
		<dt><code>anonymous</code></dt>
		<dd>CORS リクエストは、資格情報を省略して (つまり、{{glossary("cookie", "クッキー")}}、 <a href="https://datatracker.ietf.org/doc/html/rfc5280">X.509 証明書</a>、 {{httpheader("Authorization")}} リクエストヘッダーなしで) 送信されます。</dd>
		<dt><code>use-credentials</code></dt>
		<dd>CORS リクエストは、資格情報 (つまり、Cookie、X.509 証明書、 <code>Authorization</code> リクエストヘッダー) が含まれた状態で送信されます。サーバーが元のサイトとの資格情報の共有を選択する (<code>Access-Control-Allow-Credentials: true</code> レスポンスヘッダーを送り返す) ことをしなかった場合、ブラウザーは画像を汚染されたものとしてマークし、その画像データへのアクセスを制限します。</dd>
	</dl>

	<p>この属性の値が無効である場合は、列挙型のキーワードに <code>anonymous</code> が指定されたものとして扱われます。詳しくは <a href="/ja/docs/Web/HTML/Attributes/crossorigin">CORS 設定属性</a>を参照してください。</p>
	</dd>
	<dt>{{htmlattrdef("decoding")}}</dt>
	<dd>
	<p>ブラウザーに画像のデコードのヒントを提供します。次のような値が使用できます。</p>
	</dd>
	<dd>
	<dl>
		<dt><code>sync</code></dt>
		<dd>他のコンテンツと不可分の表示として、画像を同期的にデコードします。</dd>
		<dt><code>async</code></dt>
		<dd>他のコンテンツの表示が遅れないように、画像を非同期的にデコードします。</dd>
		<dt><code>auto</code></dt>
		<dd>既定のモードで、デコード方式を指定しません。ブラウザーはユーザーのために最良の方法を選択します。</dd>
	</dl>
	</dd>
	<dt>{{htmlattrdef("height")}}</dt>
	<dd>画像固有の高さをピクセル値で指定します。</dd>
	<dt>{{htmlattrdef("intrinsicsize")}} {{deprecated_inline}}</dt>
	<dd>この属性はブラウザーに、画像の{{glossary("intrinsic size", "固有の寸法")}}を無視し、この属性で指定された寸法であると見せかけるよう指示します。特に、画像がこれらの次元のラスターであって、画像の <code>naturalWidth</code>/<code>naturalHeight</code> はこの属性で指定された値が返されます。<a href="https://github.com/ojanvafai/intrinsicsize-attribute">説明</a>と<a href="https://googlechrome.github.io/samples/intrinsic-size/index.html">例</a></dd>
	<dt>{{htmlattrdef("ismap")}}</dt>
	<dd>この真偽値を持つ属性は、画像が<a href="https://en.wikipedia.org/wiki/Image_map#Server-side">サーバーサイドマップ</a>の一部であるかを示します。そうである場合は、クリック位置の正確な座標をサーバーに送信します。
	<div class="notecard note">
		<h4>注</h4>
		<p>この属性は <code>&lt;img&gt;</code> 要素が、有効な {{htmlattrxref("href","a")}} 属性を持つ {{htmlelement("a")}} 要素の子孫である場合に限り許可されます。これにより、ポインティングデバイスを持たないユーザーのフォールバック先を提供します。</p>
	</div>
	</dd>
	<dt>{{htmlattrdef("loading")}} {{experimental_inline}}</dt>
	<dd>ブラウザーがどのように画像を読み込むかを示します。
	<ul>
		<li><code>eager</code>: 画像が現在可視ビューポートに入っているかどうかにかかわらず、直ちに画像を読み込みます (これが既定値です)。</li>
		<li><code>lazy</code>: 画像がブラウザーで定義されたビューポートからの距離に達するまで、画像の読み込みを遅延させます。これは、画像が必要とされるのが合理的に確実になるまで、処理に必要なネットワークやストレージの帯域幅を使用しないようにするためです。これは一般的に、ほとんどの典型的な使用法において、コンテンツの性能を向上させることができます。
		<div class="notecard note">
			<h4>注</h4>
			<p>読み込みが延期されるのは JavaScript が有効になっているときだけです。これはトラッキング対策であり、スクリプトが無効になっているときにユーザーエージェントが遅延読み込みに対応している場合でも、サーバーがいつ何枚の画像が要求されたかを追跡できるようにページのマークアップに画像を戦略的に配置することで、サイトがセッション全体を通してユーザーのおおよそのスクロール位置を追跡することが可能になるからです。</p>
		</div>
		</li>
	</ul>
	</dd>
	<dt>{{htmlattrdef("referrerpolicy")}} {{experimental_inline}}</dt>
	<dd>リソースを読み込む際に、どのリファラーを使用するかを示す文字列です。
	<ul>
		<li><code>no-referrer</code>: {{httpheader("Referer")}} ヘッダーを送信しないことを表します。</li>
		<li><code>no-referrer-when-downgrade</code>: {{glossary("TLS")}} ({{glossary("HTTPS")}}) を使用せずにあるオリジンへ移動する場合は、 <code>Referer</code> ヘッダーを送信しないことを表します。これは他にポリシーが定められていない場合の、{{glossary("user agent", "ユーザーエージェント")}}の既定の動作です。</li>
		<li><code>origin</code>: <code>Referer</code> ヘッダーにそのページのオリジンのスキーム、{{glossary("host", "ホスト名")}}、{{glossary("port", "ポート番号")}}を含めます。</li>
		<li><code>origin-when-cross-origin</code>: 異なるオリジンへのナビゲーションでは、リファラーをスキーム、ホスト、ポートのみに制限します。同一のオリジンへのナビゲーションでは、リファラーのフルパスを含めます。</li>
		<li><code>unsafe-url</code>: <code>Referer</code> ヘッダーにオリジンとパスを含めることを表します (ただし、フラグメント、パスワード、ユーザー名は含めません)。これはオリジンやパスの情報が TLS で保護されたリソースからセキュアでないオリジンへ漏えいしますので、安全ではありません。</li>
	</ul>
	</dd>
	<dt>{{htmlattrdef("sizes")}}</dt>
	<dd>ソースのサイズのセットを示す、カンマ区切りの文字列を1個以上並べたリストです。それぞれのソースサイズの構成は以下のとおりです。
	<ol>
		<li><a href="/ja/docs/Web/CSS/Media_Queries/Using_media_queries#構文">メディア条件</a>。リスト内の最後のアイテムでは省略しなければなりません。</li>
		<li>ソースサイズ値。</li>
	</ol>

	<p>メディアの状態は<em>ビューポート</em>のプロパティで記述するものであり、<em>画像</em>のプロパティではありません。例えば、 <code>(max-height: 500px) 1000px</code> は、<em>ビューポート</em>の高さが 500px 以下であれば 1000px 幅のソースを使用することを提案します。</p>

	<p>ソースサイズ値は、画像の表示サイズを指定するものです。{{glossary("User agent", "ユーザーエージェント")}}は <code>srcset</code> 属性で与えられたソースからひとつを選択するために、現在のソースサイズを使用します。そのとき、ソースは幅記述子 ('<code>w</code>') を使用して説明します。選択したソースサイズは画像の{{glossary("intrinsic size", "固有の寸法")}} ({{glossary("CSS")}} スタイルが適用されていない場合の、画像の表示サイズ) に影響します。<code>srcset</code> 属性がない場合、あるいは幅記述子 (<code>w</code>) を持つ値がない場合は、<code>sizes</code> 属性の効果はありません。</p>
	</dd>
	<dt>{{htmlattrdef("src")}}</dt>
	<dd>画像の {{glossary("URL")}} です。この属性は、 <code>&lt;img&gt;</code> 要素に必須です。 <code>srcset</code> に対応する{{glossary("Browser", "ブラウザー")}}では <code>src</code> を、画素密度記述子 <code>1x</code> の候補画像であるように扱います。ただし、この画素密度記述子が <code>srcset</code> で定義済みである、または <code>srcset</code> に '<code>w</code>' 記述子が含まれている場合を除きます。</dd>
	<dt>{{htmlattrdef("srcset")}}</dt>
	<dd>{{glossary("User agent", "ユーザーエージェント")}}が使用可能なソース画像のセットを示す、カンマ区切りで文字列を 1 個以上並べたリストです。各々の文字列の構成は以下のとおりです:
	<ol>
		<li>画像の {{glossary("URL")}}</li>
		<li>任意で、ホワイトスペースの後に以下のいずれかを記述:
		<ul>
			<li>幅記述子。これは直後に '<code>w</code>' を付加した正の整数です。幅記述子は実際の画素密度を計算するために、<code>sizes</code> 属性で与えられたソースサイズで割られます。</li>
			<li>画素密度記述子。これは直後に '<code>x</code>' を付加した正の浮動小数点数です。</li>
		</ul>
		</li>
	</ol>

	<p>記述子を指定しない場合は、ソースを既定の記述子 <code>1x</code> に割り当てます。</p>

	<p>幅記述子と画素密度記述子を同一の <code>srcset</code> 属性に混在させると無効になります。重複した記述子 (例えばひとつの <code>srcset</code> に2つのソースがあり、どちらも '<code>2x</code>' とする) も無効になります。</p>

	<p>ユーザーエージェントには、利用可能なソースからひとつを選択する裁量があります。これは、ユーザー設定や{{glossary("bandwidth", "帯域幅")}}の条件などに基づいて選択を適合させるような、かなりの裁量が与えられています。例としては<a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">レスポンシブ画像</a>のチュートリアルをご覧ください。</p>
	</dd>
	<dt>{{htmlattrdef("width")}}</dt>
	<dd>画像固有の幅をピクセル値で指定します。</dd>
	<dt>{{htmlattrdef("usemap")}}</dt>
	<dd>要素に関連づけられた <a href="/ja/docs/Web/HTML/Element/map">イメージマップ</a>の部分的な {{glossary("URL")}} ('<code>#</code>' で始まる) です。
	<div class="notecard note">
		<h4>注</h4>
		<p><code>&lt;img&gt;</code> 要素が {{htmlelement("a")}} または {{HTMLElement("button")}} 要素の子孫である場合は、この属性を使用することはできません。</p>
	</div>
	</dd>
</dl>

<h3 id="Deprecated_attributes">非推奨の属性</h3>

<dl>
	<dt>{{htmlattrdef("align")}} {{deprecated_inline}}</dt>
	<dd>周囲のコンテキストに対する画像の配置を指定します。代わりに {{glossary("CSS")}} の {{cssxref('float')}} プロパティや {{cssxref('vertical-align')}} プロパティを使用してください。使用できる値は次の通りです。</dd>
	<dd>
	<dl>
		<dt><code>top</code></dt>
		<dd><code style="white-space: nowrap;">vertical-align: top;</code> または <code style="white-space: nowrap;">vertical-align: text-top;</code> と等価です。</dd>
		<dt><code>middle</code></dt>
		<dd><code style="white-space: nowrap;">vertical-align: -moz-middle-with-baseline;</code> と等価です。</dd>
		<dt><code>bottom</code></dt>
		<dd>値の既定値はなく <code style="white-space: nowrap;">vertical-align: unset;</code> または <code style="white-space: nowrap;">vertical-align: initial;</code> と等価です。</dd>
		<dt><code>left</code></dt>
		<dd><code style="white-space: nowrap;">float: left;</code> と等価です。</dd>
		<dt><code>right</code></dt>
		<dd><code style="white-space: nowrap;">float: right;</code> と等価です。</dd>
	</dl>
	</dd>
	<dt>{{htmlattrdef("border")}} {{deprecated_inline}}</dt>
	<dd>画像の周りの境界線の幅を指定します。代わりに {{glossary("CSS")}} の {{cssxref('border')}} プロパティを使用してください。</dd>
	<dt>{{htmlattrdef("hspace")}} {{deprecated_inline}}</dt>
	<dd>画像の左右に挿入する空間の幅をピクセル単位で指定します。代わりに CSS の {{cssxref('margin')}} プロパティを使用してください。</dd>
	<dt>{{htmlattrdef("longdesc")}} {{deprecated_inline}}</dt>
	<dd>画像の詳細な説明へのリンクです。有効な値は、 {{glossary("URL")}} または要素の {{htmlattrxref("id")}} です。
	<div class="notecard note">
		<h4>注</h4>
		<p>この属性は、最新の {{glossary("W3C")}} のバージョンである <a href="https://www.w3.org/TR/html52/obsolete.html#element-attrdef-img-longdesc">HTML 5.2</a> でも言及されていますが、 {{glossary("WHATWG")}} の <a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">HTML Living Standard</a> では完全に削除されています。将来が不確実なので、代わりに、 <a href="https://www.w3.org/TR/wai-aria-1.1/#aria-describedby"><code>aria-describedby</code></a> または <a href="https://www.w3.org/TR/wai-aria-1.1/#aria-details"><code>aria-details</code></a> のような {{glossary("WAI")}}-{{glossary("ARIA")}} の代替手段を使用してください。</p>
	</div>
	</dd>
	<dt>{{htmlattrdef("name")}} {{deprecated_inline}}</dt>
	<dd>要素の名前です。代わりに {{htmlattrxref("id")}} 属性を使用してください。</dd>
	<dt>{{htmlattrdef("vspace")}} {{deprecated_inline}}</dt>
	<dd>画像の上下に挿入する空間の幅をピクセル単位で指定します。HTML5 では、代わりに CSS の {{cssxref('margin')}} プロパティを使用してください。</dd>
</dl>

<h2 id="Styling_with_CSS">CSS でのスタイル付け</h2>

<p><code>&lt;img&gt;</code> は<a href="/ja/docs/Web/CSS/Replaced_element">置換要素</a>です。 {{cssxref("display")}} の値が既定で <code>inline</code> ですが、既定の寸法は埋め込まれた画像の内部的な値で定義されます。画像には {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, などのプロパティを設定することができます。</p>

<p><code>&lt;img&gt;</code> にはベースラインがありません。つまり {{cssxref("vertical-align")}}<code>: baseline</code> を伴うインライン整形文脈内で使用したときに、画像の下端はコンテナーのベースラインに揃えられます。</p>

<p>{{cssxref("object-position")}} プロパティを使用して、要素ボックス内の画像の位置を指定したり、 {{cssxref("object-fit")}} プロパティを使用して、ボックス内の画像の寸法を調整したり（例えば、クリッピングが必要な時に画像をボックスに合わせるか埋めるか）することができます。</p>

<p>画像の種類に応じて、固有の寸法を持つことができます。ただし、固有の寸法が必須ではない画像形式があります。例えば {{glossary("SVG")}} 画像は、固有の寸法を持ちません。つまり、 SVG 画像には {{SVGElement("svg")}} 要素に <code>width</code> または <code>height</code> が設定されていない限り、固有の寸法はありません。</p>

<h2 id="Examples">例</h2>

<h3 id="Alternative_text">代替テキスト</h3>

<p>以下の簡単な例では、ページに画像を埋め込み、アクセシビリティを向上させるために代替テキストを含めています。</p>

<pre class="brush: html">&lt;img src="favicon144.png"
     alt="MDN ロゴ"&gt;
</pre>

<p>{{ EmbedLiveSample('Alternative_text', '100%', '160') }}</p>

<h3 id="Image_link">画像リンク</h3>

<p>この例は前回のを土台に、画像をリンクにする方法を示しています。これを行うのはとても単純です。 — <code>&lt;img&gt;</code> タグを {{HTMLElement("a")}} の中に組み込むだけです。一つの考慮事項として、リンクが指すリソースを説明する代替テキストを作成するようにしてください。</p>

<pre class="brush: html">&lt;a href="https://developer.mozilla.org"&gt;
  &lt;img src="favicon144.png"
       alt="MDN サイトにおいでください"&gt;
&lt;/a&gt;</pre>

<p>{{ EmbedLiveSample('Image_link', '100%', '160') }}</p>

<h3 id="Using_the_srcset_attribute">srcset 属性の使用</h3>

<p>この例では、 <code>srcset</code> 属性によって高解像度版のロゴの参照を指定しています。これで、高解像度の端末では <code>src</code> 画像の代わりにこちらが読み込まれます。 <code>src</code> で参照される画像は、 <code>srcset</code> に対応している{{glossary("User agent", "ユーザーエージェント")}}では、 <code>1x</code> の候補としてカウントされます。</p>

<pre class="brush: html"> &lt;img src="favicon72.png"
      alt="MDN logo"
      srcset="favicon144.png 2x"&gt;</pre>

<p>{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}</p>

<h3 id="Using_the_srcset_and_sizes_attributes">srcset および sizes 属性の使用</h3>

<p><code>src</code> 属性は、 <code>srcset</code> に対応している{{glossary("User agent", "ユーザーエージェント")}}で '<code>w</code>' 記述子を使用している場合は無視されます。 <code>(max-width: 600px)</code> のメディア条件に一致すると、 200px の幅の画像 (200px にもっと近いもの) が読み込まれ、そうでなければ他の画像が読み込まれます。</p>

<pre class="brush: html"> &lt;img src="clock-demo-200px.png"
      alt="時計"
      srcset="clock-demo-200px.png 200w,
          clock-demo-400px.png 400w"
      sizes="(max-width: 600px) 200px, 50vw"&gt;</pre>

<p>{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}</p>

<div class="notecard note">
	<h4>注</h4>
	<p>その場で大きさを変更してみるには、{{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'この例を別なページで表示')}}させる必要があり、そうすればコンテンツエリアの大きさを実際に使用することができます。</p>
</div>

<h2 id="Security_and_privacy_concerns">セキュリティとプライバシーの考慮事項</h2>

<p><code>&lt;img&gt;</code> 要素の多くは無害な使用ですが、ユーザーのセキュリティとプライバシーに望ましくない結果をもたらす可能性もあります。詳細情報と緩和策については <a href="/ja/docs/Web/Security/Referer_header:_privacy_and_security_concerns">Referer ヘッダー: プライバシーとセキュリティの考慮事項</a>を参照してください。</p>

<h2 id="Accessibility_concerns">アクセシビリティの考慮</h2>

<h3 id="Authoring_meaningful_alternate_descriptions">意味のある代替説明を書く</h3>

<p><code>alt</code> 属性の値は明確で簡潔に画像の内容を説明するものにしてください。画像そのもの存在を説明するものであったり、画像のファイル名であったりするべきではありません。画像が言葉で説明できるものではなく、 <code>alt</code> 属性を意図的に省略する場合は、画像が伝えようとしていることの内容を他の方法で表すように考慮してください。</p>

<h4 id="Dont">悪い例</h4>

<pre class="brush: html example-bad">&lt;img alt="image" src="penguin.jpg"&gt;
</pre>

<h4 id="Do">良い例</h4>

<pre class="brush: html example-good">&lt;img alt="海岸に立っているイワトビペンギン" src="penguin.jpg"&gt;
</pre>

<p><code>alt</code> 属性が画像にない場合、読み上げソフトによっては代わりに画像のファイル名を読み上げることがあります。ファイル名が画像の内容を表していない場合、これが操作を混乱させる可能性があります。</p>

<ul>
	<li><a href="https://www.w3.org/WAI/tutorials/images/decision-tree/">An alt Decision Tree • Images • WAI Web Accessibility Tutorials</a></li>
	<li><a href="https://axesslab.com/alt-texts/">Alt-texts: The Ultimate Guide — Axess Lab</a></li>
	<li><a href="https://www.deque.com/blog/great-alt-text-introduction/">How to Design Great Alt Text: An Introduction | Deque</a></li>
	<li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content">MDN "WCAG を理解する ― ガイドライン 1.1 の解説"</a></li>
	<li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html">Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h3 id="The_title_attribute">title 属性</h3>

<p>The {{htmlattrxref("title")}} 属性を <code>alt</code> 属性の代わりに利用することはできません。加えて、 <code>alt</code> 属性の値を同じ画像の <code>title</code> 属性に複製して宣言することは避けてください。このようにすると、読み上げソフトが説明を二回読み上げ、操作を混乱させる可能性があります。</p>

<p><code>title</code> 属性は、画像の <code>alt</code> の説明と組み合わせた補助的な説明として使用するべきでもありません。画像にキャプションが必要であれば、 <code><a href="/ja/docs/Web/HTML/Element/figure">figure</a></code> および <code><a href="/ja/docs/Web/HTML/Element/figcaption">figcaption</a></code> 要素と組み合わせて使用してください。</p>

<p><code>title</code> 属性の値は、よくツールチップとして、画像の上でカーソルを停止させた後で間もなく表示されます。これはユーザーに追加の情報を提供する<em>ことができます</em>が、ユーザーが必ず見ると仮定してはいけません。ユーザーが見ることが特に重要または有益である情報があるのであれば、上記の <code>title</code> を使用するのではなく、何らかの方法で行内に表示するべきです。</p>

<ul>
	<li><a href="https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/">Using the HTML title attribute – updated | The Paciello Group</a></li>
</ul>

<h2 id="Technical_summary">技術的概要</h2>

<table class="properties">
	<tbody>
		<tr>
			<th scope="row"><a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a></th>
			<td><a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>、<a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>、<a href="/ja/docs/Web/Guide/HTML/Content_categories#embedded_content">埋め込みコンテンツ</a>、<a href="/ja/docs/Web/Guide/HTML/Content_categories#palpable_content">知覚可能コンテンツ</a>。要素が <code>usemap</code> 属性を持つ場合は、対話型コンテンツのカテゴリーの一角にもなります。</td>
		</tr>
		<tr>
			<th scope="row">許可されている内容</th>
			<td>なし。これは{{Glossary("empty element", "空要素")}}です。</td>
		</tr>
		<tr>
			<th scope="row">タグの省略</th>
			<td>開始タグは必須。終了タグを記述してはならない。</td>
		</tr>
		<tr>
			<th scope="row">許可されている親要素</th>
			<td>埋め込みコンテンツを受け入れるすべての要素。</td>
		</tr>
		<tr>
			<th scope="row">暗黙の ARIA ロール</th>
			<td>
			<ul>
				<li><code>alt</code> 属性が空ではない場合や <code>alt</code> 属性がない場合: <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Role_Img">img</a></code>　</li>
				<li><code>alt</code> 属性が空の場合: <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></li>
			</ul>
			</td>
		</tr>
		<tr>
			<th scope="row">許可されている ARIA ロール</th>
			<td>
				<ul>
				<li><code>alt</code> 属性が空ではない場合:

					<ul>
					<li><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code></li>
					<li><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role">checkbox</a></code></li>
					<li>{{ARIARole("link")}}</li>
					<li>{{ARIARole("menuitem")}}</li>
					<li>{{ARIARole("menuitemcheckbox")}}</li>
					<li>{{ARIARole("menuitemradio")}}</li>
					<li>{{ARIARole("option")}}</li>
					<li>{{ARIARole("progressbar")}}</li>
					<li>{{ARIARole("scrollbar")}}</li>
					<li>{{ARIARole("separator")}}</li>
					<li>{{ARIARole("slider")}}</li>
					<li><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Switch_role">switch</a></code></li>
					<li><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Tab_Role">tab</a></code></li>
					<li>{{ARIARole("treeitem")}}</li>
				</ul>
				</li>
				<li><code>alt</code> 属性が空の場合、 {{ARIARole("none")}} または {{ARIARole("presentation")}}</li>
				<li><code>alt</code> 属性がない場合、許可されている <code>role</code> なし</li>
			</ul>
			</td>
		</tr>
		<tr>
			<th scope="row">DOM インターフェイス</th>
			<td>{{domxref("HTMLImageElement")}}</td>
		</tr>
	</tbody>
</table>

<h2 id="Specifications">仕様書</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
	<li><a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">HTML の画像</a></li>
	<li><a href="/ja/docs/Web/Media/Formats/Image_types">画像のファイル形式のガイド</a></li>
	<li><a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">レスポンシブ画像</a></li>
	<li>{{HTMLElement("picture")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} 要素</li>
	<li>その他の画像に関する CSS プロパティ: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, and {{cssxref("image-resolution")}}.</li>
</ul>
