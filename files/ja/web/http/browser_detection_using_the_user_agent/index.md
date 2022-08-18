---
title: ユーザーエージェント文字列を用いたブラウザーの判定
slug: Web/HTTP/Browser_detection_using_the_user_agent
tags:
  - Compatibility
  - HTTP
  - Web Development
translation_of: Web/HTTP/Browser_detection_using_the_user_agent
---
<div>{{HTTPSidebar}}</div>

<p>ブラウザーによって異なるウェブページまたはサービスを提供するのは、ふつうは良いことではありません。ウェブは使用しているブラウザーや機器に関係なく、誰からでもアクセスできるものです。ウェブサイトを開発する方法として、特定のブラウザーを対象にするのではなく、機能が利用できるかどうかに基づいたプログレッシブエンハンスメントにする方法があります。</p>

<p>しかし、ブラウザーや標準は完全ではなく、ブラウザーの判定を必要とする場合も稀にあります。ユーザーエージェント文字列を使用してブラウザーを判定することは簡単に見えますが、うまく行くようにするのは、実はとても難しい問題です。この文書では、これをできるだけ正しく行う方法を案内します。</p>

<div class="note">
<p>繰り返します。ユーザーエージェントを調べるのが良いことはめったにありません。問題を解決するには、もっと良い、もっと広く互換性のある方法が見つかるはずです。</p>
</div>

<h2 id="Considerations_before_using_browser_detection">ブラウザーの判定を用いる前に考えること</h2>

<p>ユーザーエージェント文字列を使用して、使用されているブラウザーを判定することを検討している場合は、できればまずは回避するようにしてください。<strong>なぜ</strong>それをやりたいのかを見分けることから始めましょう。</p>

<dl>
	<dt>ブラウザーのあるバージョンの特有のバグを回避しようとしているのですか？</dt>
	<dd>専門のフォーラムで見たり尋ねたりしてみましょう。この問題に最初に遭遇したのがあなたであることはほとんどありません。また専門家、あるいは別の視点を持つ人々が、バグを回避するためのアイディアをくれるかもしれません。珍しい問題である場合は、このバグがバグ追跡システム (<a class="link-https" href="https://bugzilla.mozilla.org">Mozilla</a>; <a href="https://bugs.webkit.org">WebKit</a>; <a href="https://www.chromium.org/issue-tracking">Blink</a>; <a class="link-https" href="https://bugs.opera.com/">Opera</a>) を介してブラウザーのベンダーに報告されているかどうかを確認することが重要です。ブラウザーメーカーはバグレポートに注意を払い、そのバグの他の回避策を分析するかもしれません。</dd>
	<dt>特定の機能が存在するかどうか確認しようとしているのですか？</dt>
	<dd>一部のブラウザーがまだ対応していない特定のウェブ機能をサイトで使用する必要がある場合、未対応のブラウザーのユーザーには、より機能が少ないものの動作することが分かっている古いウェブサイトを送信したい場合があります。これはユーザーエージェントの検出を使用する最悪の理由です。なぜなら、この差は最終的に他のすべてのブラウザーが追いつくからです。さらに、これらのウェブ機能について、それほど一般的でないブラウザーを１つ１つテストするのは現実的ではありません。ユーザーエージェントによる判定は<strong>決して</strong>行うべきではありません。その代わりに<strong>常に</strong>機能の検出を行う代替手段があります。</dd>
	<dt>使用されているブラウザーによって異なる HTML を提供する予定ですか？</dt>
	<dd>通常では悪い慣例ですが、これが必要な場合もあります。このような場合は、まず自分の状況を分析してそれが本当に必要であることを確認してください。形式的な {{ HTMLElement("div") }} または {{ HTMLElement("span") }} 要素を追加することで、それを防ぐことができませんか？ユーザーエージェントの検出を正しく行うことは、 HTML の純度をいくらか損なっても構わないくらい難しいものです。また、デザインを考え直してください。プログレッシブエンハンスメントや流体レイアウトを使用することで、回避することはできませんか？</dd>
</dl>

<h2 id="Avoiding_user_agent_detection">ユーザーエージェントの判定の回避</h2>

<p>ユーザーエージェントの検出を使用しないようにするのであれば、いくつかの選択肢があります。</p>

<dl>
	<dt>機能の検出</dt>
	<dd>機能の検出とは、ページを表示しているブラウザーを特定するのではなく、必要な機能が利用可能であるかどうかを確認することです。利用できない場合は代替手段を使用します。ブラウザーによって異なる動作をする場合は稀ですが、ユーザーエージェント文字列をチェックする代わりに、ブラウザーがその API をどう実装しているか検査する処理を実装し、そこから使い方を判断しましょう。機能の検出の今のところ良い例は次の通りです。最近、 Chrome は<a href="https://www.chromestatus.com/feature/5668726032564224">正規表現に実験的な後方参照の対応を追加しました</a>が、他のブラウザーは今のところ対応していません。ですから、間違って以下のようにするべきと思うかもしれません。</dd>
	<dd>
	<pre class="brush: js">// this code snippet splits a string in a special notation

if (navigator.userAgent.indexOf("Chrome") !== -1){
    // YES! The user is suspected to support look-behind regexps
    // DO NOT USE /(?&lt;=[A-Z])/. It will cause a syntax error in
    //  browsers that do not support look-behind expressions
    //  because all browsers parse the entire script, including
    //  sections of the code that are never executed.
    var camelCaseExpression = new RegExp("(?&lt;=[A-Z])");
    var splitUpString = function(str) {
        return (""+str).split(camelCaseExpression);
    };
} else {
    /*This fallback code is much less performant, but works*/
    var splitUpString = function(str){
        return str.replace(/[A-Z]/g,"z$1").split(/z(?=[A-Z])/g);
    };
}
console.log(splitUpString("fooBare")); // ["fooB", "are"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]</pre>

	<p>上記のコードでは、いくつかの間違った仮定をするでしょう。</p>

	<ul>
		<li>部分文字列 "Chrome" を含むすべてのユーザーエージェント文字列が Chrome であると仮定するでしょう。 UA 文字列は誤解を招くことで有名です。</li>
		<li>ブラウザーが Chrome であれば、ルックバインド機能は常に利用可能であると仮定しています。エージェントは対応が追加される前の古いバージョンの Chrome かもしれないし、 (当時は実験的な機能だったので) それが削除された後のバージョンの Chrome かもしれません。</li>
		<li>最も重要なのは、他のブラウザーがこの機能に対応していないことを前提としていることです。他のブラウザーではいつの間にか対応が追加されていたかもしれませんが、このコードでは劣った道を選択し続けることになります。</li>
	</ul>

	<p>このような問題は、機能自体の対応をテストすることで回避することができます。</p>

	<pre class="brush: js">var isLookBehindSupported = false;

try {
    new RegExp("(?&lt;=)");
    isLookBehindSupported = true;
} catch (err) {
    // If the agent doesn't support lookbehinds, the attempted
    // creation of a RegExp object using that syntax throws and
    // isLookBehindSupported remains false.
}

var splitUpString = isLookBehindSupported ? function(str) {
    return (""+str).split(new RegExp("(?&lt;=[A-Z])"));
} : function(str) {
    return str.replace(/[A-Z]/g,"z$1").split(/z(?=[A-Z])/g);
};
</pre>

	<p>上記のコードが示すように、ブラウザーの互換性をユーザーエージェントの判定なしに行う方法は<strong>常に</strong>あります。このためにユーザーの文字列をチェックする理由は<strong>決してありません</strong>。</p>

	<p>最後に、上記のコードスニペットは、常に考慮しなければならないクロスブラウザーのコーディングで重大な問題を引き起こします。サポート対象外のブラウザーでテストしている API を意図せず使用しないでください。これは明らかでシンプルに聞こえるかもしれませんが、そうでない時もあります。たとえば、上記のコードスニペットでは、短い regexp 表記 (たとえば /reg/igm) で lookbehind を使用すると、サポートされていないブラウザーで parser エラーが発生します。したがって、あなたのコードの lookbehind がサポートされているセクションであっても、上記の例では <em>new RegExp("(?&lt;=look_behind_stuff)");</em> を <em>/(?&lt;=look_behind_stuff)/</em> の代わりに使用します。</p>
	</dd>
	<dt>プログレッシブエンハンスメント</dt>
	<dd>この設計手法は、ウェブサイトを「階層」で開発し、ボトムアップのアプローチを使用して、より簡単な階層から始め、階層が上がるに従ってより多くの機能を使用して、サイトの機能を向上させる方法です。</dd>
	<dt>グレイスフルデグラデーション</dt>
	<dd>これはトップダウンのアプローチで、必要なすべての機能を使用して最適なサイトを構築し、それを古いブラウザーでも使用できるように調整する方法です。これは、プログレッシブエンハンスメントよりも難しく、有効性が低くなりますが、場合によっては有用であることがあります。</dd>
	<dt id="Mobile_Device_Detection">モバイル端末の検出</dt>
	<dd>おそらく、ユーザーエージェントの判定で最も一般的かつ誤った使用法は、その端末がモバイル端末であるかどうかを検出することです。しかし、それが後で本当にどうなるかは見過ごされがちです。開発者はユーザーエージェントの判定を使用して、ユーザーの端末がタッチ操作であることや小さい画面であることを判別し、それに応じてウェブサイトを最適化することがあります。ユーザーエージェントの判定でこれらを検出できることもありますが、すべての端末が同じではありません。モバイル端末が大きなサイズの画面を持っている場合もあるし、デスクトップが小さなタッチ画面を持っている場合もあるし、まったく異なる球技であるスマートテレビで見ている場合もあるし、タブレットの向きを回転させて画面の幅や高さを動的に変化させている人もいます。よって、ユーザーエージェントの検出は決定的な方法ではありません。幸い、はるかに良い代替方法があります。ユーザーの端末にタッチ画面があるかどうかを検出するには、 <a href="/ja/docs/Web/API/Navigator/maxTouchPoints">Navigator.maxTouchPoints</a> を使用しましょう。そして、 <em>if (!("maxTouchPoints" in navigator)) { /*Code here*/}</em> の場合のみ、ユーザーエージェントの画面をチェックする既定に戻します。この情報を使用して端末にタッチ画面があるかどうかを確認することができますが、タッチ端末であるだけのためにウェブサイトのレイアウト全体を変更しないようにしてください。これは自分の作業とメンテナンスの量を増やすだけです。それよりも、タッチに適したより大きい、よりクリックしやすいボタンを追加しましょう (CSS を使用してフォントを拡大することができます)。モバイル端末で #exampleButton のパディングを 1em に拡張するコードの例を示します。</dd>
	<dd>
	<pre class="brush: js">var hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints &gt; 0;
} else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints &gt; 0;
} else {
    var mQ = window.matchMedia &amp;&amp; matchMedia("(pointer:coarse)");
    if (mQ &amp;&amp; mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
        hasTouchScreen = true; // deprecated, but good fallback
    } else {
        // Only as a last resort, fall back to user agent sniffing
        var UA = navigator.userAgent;
        hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
    }
}
if (hasTouchScreen)
    document.getElementById("exampleButton").style.padding="1em";</pre>
	</dd>
	<dd>画面のサイズについては、 <em>window.innerWidth</em> と window.addEventListener("resize", function(){ /*refresh screen size dependent things*/ }) を使用してください。画面サイズの対策としてやりたいことは、小さな画面の時に情報を削らないことです。デスクトップバージョンを使用するようになるので、人々を悩ますだけです。むしろ、小さい画面で長いページでは情報の列数を少なくし、画面サイズが大きいほど短いページで多くの列を持つようにしてください。この効果は、 CSS <a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a>を使用し、時には部分的な代替手段として<a href="/ja/docs/Learn/CSS/CSS_layout/Floats">浮動レイアウト</a>を用いることで簡単に達成できます。</dd>
	<dd>また、関連性や重要性の低い情報を下に移動させ、ページのコンテンツを有意義にまとめてみてください。トピック外ではありますが、以下の詳細な例を見れば、ユーザーエージェントのスニッフィングを避けるための洞察力やアイデアが得られるかもしれません。複数の情報のボックスで構成されたページを想像してみましょう。それぞれのボックスは様々な猫や犬の品種についてのものであるとします。各ボックスには、画像、概要、経緯があるとします。画像は、大画面でも適切な最大の大きさが維持されるとします。意味のあるグループ分けをするために、すべての猫のボックスとすべての犬のボックスを分離し、猫と犬の箱が混在しないようにしています。大きな画面では、段組みをして画像の左右の無駄な空間を縮小することで、空間を節約します。このボックスは2つの等価な方法により、段組みに分割することができます。ここで、犬のボックスはすべてソースコードの上の方にあり、猫のボックスはすべてソースコードの下の方にあり、これらの箱の親要素はすべて共通であると仮定します。もちろん、猫ボックスのすぐ上に犬ボックスの単一のインスタンスがあります。最初の方法では、水平方向の<a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a>を使用してコンテンツをグループ化し、ページがエンドユーザーに表示されたときに、すべての犬のボックスをページの上部に配置し、すべての猫のボックスをページの下部に配置するようにします。2つ目の方法は<a href="/ja/docs/Web/CSS/Layout_cookbook/Column_layouts">段組み</a>レイアウトを使用し、すべての犬を左に、すべての猫を右に配置します。この特定のシナリオでのみ、フレックスボックス/段組みのフォールバックを提供しないことが適切であり、その結果、古いブラウザー上では非常に幅の広いボックスの単一の列になります。また、以下のことも考慮してください。より多くの人がウェブページに猫を見に来るのであれば、ソースコード上で犬よりも猫をすべて先に書くと、コンテンツが一段になるような小さな画面でも、より多くの人が探しているものをより早く見つけることができるようになるので、良い考えかもしれません。</dd>
	<dd>次に、コードを常に動的にしましょう。ユーザーは携帯端末の向きを回転させて、ページの幅と高さを変更することがあります。または、将来は広げると画面が拡張できるような、折り畳み式電話のような奇妙な端末が現れるかもしれません。折り畳み式電話のような端末をどのように扱うかということに頭を悩ませないでください。開発者ツールのサイドパネルを開いて画面のサイズを変更してみて、ウェブページが滑らかに、流動的に、動的にサイズ変更されるようになるまで満足しないようにしてください。これを行う最も単純な方法は、画面の大きさに基づいてコンテンツを移動させるすべてのコードを、ページが読み込まれたときと、その後の <a href="/ja/docs/Web/API/Window/resize_event">resize</a> イベントのたびに呼び出される単一の関数に分離することです。もし、このレイアウト関数がページの新しいレイアウトを決定する前に多くの計算がある場合は、イベントリスナーが呼び出されないようにイベントリスナーをデバウンスすることを検討してください。また、メディアクエリの <code>(max-width: 25em)</code>, <code>not all and (min-width: 25em)</code>, <code>(max-width: 24.99em)</code> の間には大きな違いがあることにも注意してください。 <code>(max-width: 25em)</code> は <code>(max-width: 25em)</code> を除外し、 <code>not all and (min-width: 25em)</code> は <code>(max-width: 25em)</code> を含みます。 <code>(max-width: 24.99em)</code> は、 <code>not all and (min-width: 25em)</code> の哀れな人のバージョンです。 <code>(max-width: 24.99em)</code> を使用しないでください。適切なメディアクエリを選択し、対応する JavaScript の中で適切な &gt;=, &lt;=, &gt;, &lt; を選択すると、これらが混ざってしまいやすく、結果として、レイアウトが変更された画面サイズでウェブサイトを見てしまうことになるからです。そのため、レイアウト変更が適切に行われているかどうかを確認するために、レイアウト変更が行われている正確な幅/高さでウェブサイトを徹底的にテストしてください。</dd>
</dl>

<h2 id="Making_the_best_of_user_agent_sniffing">最適なユーザーエージェントの判定</h2>

<p>ユーザーエージェントの判定のよりよい代替案をすべて検討したうえで、ユーザーエージェントの判定が適切で正当化される可能性のある場合がまだいくつかあります。</p>

<p>そのような場合のひとつに、端末にタッチパネルがあるかどうかを検出する際に、ユーザーエージェントの判定をフォールバックとして使用するというものがあります。詳細は <a href="#mobile_device_detection">モバイル端末の検出</a>の節を参照してください。</p>

<p>もう一つの例として、自動更新されないブラウザーのバグを修正する場合があります。 Internet Explorer (Windows) と Webkit (iOS) がその好例です。バージョン 9 以前のInternet Explorer は、レンダリングのバグ、 CSS のバグ、 API のバグなど、信じられないほどの問題を抱えていました。しかし、バージョン 9 以前の Internet Explorer は特別な小さな <s>wasp</s> 例外だったため、利用可能なブラウザー固有の機能に基づいてブラウザーを検出するのは非常に簡単でした。 Webkit は、 Apple が iOS 上のすべてのブラウザーに内部的に Webkit を使用するように強制しているため、ユーザーは古い端末上でより良い、より更新されたブラウザーを取得する方法がありません。ほとんどのバグは検出できますが、バグによっては他よりも検出に手間がかかる場合があります。そのような場合は、ユーザーエージェント検出を使用してパフォーマンスを節約するのが有効です。たとえば、 Webkit 6 にはデバイスの向きが変わると、ブラウザーが {{domxref("MediaQueryList")}} リスナーを実行しない場合があるというバグがあります。このバグを回避するには、以下のコードを参照してください。</p>

<pre class="brush: js">var UA=navigator.userAgent, isWebkit=/\b(iPad|iPhone|iPod)\b/.test(UA) &amp;&amp;
               /WebKit/.test(UA) &amp;&amp; !/Edge/.test(UA) &amp;&amp; !window.MSStream;

var mediaQueryUpdated = true, mqL = [];
function whenMediaChanges(){mediaQueryUpdated = true}

var listenToMediaQuery = isWebkit ? function(mQ, f) {
    if(/height|width/.test(mQ.media)) mqL.push([mQ, f]);
    mQ.addListener(f), mQ.addListener(whenMediaChanges);
} : function(){};
var destroyMediaQuery = isWebkit ? function(mQ) {
    for (var i=0,len=mqL.length|0; i&lt;len; i=i+1|0)
        if (mqL[i][0] === mQ) mqL.splice(i, 1);
    mQ.removeListener(whenMediaChanges);
} : listenToMediaQuery;

var orientationChanged = false;
addEventListener("orientationchange", function(){
    orientationChanged = true;
}, PASSIVE_LISTENER_OPTION);

addEventListener("resize", setTimeout.bind(0,function(){
    if (orientationChanged &amp;&amp; !mediaQueryUpdated)
        for (var i=0,len=mqL.length|0; i&lt;len; i=i+1|0)
            mqL[i][1]( mqL[i][0] );
    mediaQueryUpdated = orientationChanged = false;
},0));</pre>

<h2 id="Which_part_of_the_user_agent_contains_the_information_you_are_looking_for" name="Which_part_of_the_user_agent_contains_the_information_you_are_looking_for">探している情報がユーザーエージェント文字列のどの部分に含まれているか</h2>

<p>ユーザーエージェント文字列のそれぞれの部分には統一性がないので、これは難しい部分です。</p>

<h3 id="Browser_Name">ブラウザー名</h3>

<p>開発者が「ブラウザーを判定したい」という場合、実際は「レンダリングエンジンを判定したい」場合であることがしばしばあります。実際に SeaMonkey と Firefox を、または Chromium と Chrome を区別したいのでしょうか。それとも、実際にはブラウザーがレンダリングエンジンに Gecko を使用しているか、 WebKit を使用しているかを確認したいのしょうか。これが必要なのであれば、ページのもっと下を見てください。</p>

<p>ほとんどのブラウザーは、 Internet Explorer の例外を除いて、名前とバージョンを <em>BrowserName/VersionNumber</em> の形式で設定します。しかし、ユーザーエージェント文字列はこのような形式の名前だけから成っている訳ではないので、ブラウザーの名前が分かるわけではなく、探している名前があるかどうかを確認することしかできません。しかし、ブラウザーによってはうそをつくこともあります。例えば Chrome は、 Chrome と Safari の両方の文字列を含みます。ですから Safari を判定するには、 Safari の文字列があって Chrome の文字列がないことを確認する必要がありますし、 Chromium は自分自身を Chrome と報告することがよくあり、 Seamonkey は自分自身を Firefox として報告することが時々あります。</p>

<p>また、 BrowserName に単純な正規表現を使用しないように注意してください。ユーザーエージェント文字列には、 Keyword/Value 構文以外の文字列も含まれています。例えば、 Safari や Chrome では、 'like Gecko' のような文字列が含まれています。</p>

<table class="standard-table">
	<thead>
		<tr>
			<th scope="col"></th>
			<th scope="col">必ず含む</th>
			<th scope="col">決して含まない</th>
			<th scope="col"></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Firefox</td>
			<td>Firefox/xyz</td>
			<td>Seamonkey/xyz</td>
			<td></td>
		</tr>
		<tr>
			<td>Seamonkey</td>
			<td>Seamonkey/xyz</td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Chrome</td>
			<td>Chrome/xyz</td>
			<td>Chromium/xyz</td>
			<td></td>
		</tr>
		<tr>
			<td>Chromium</td>
			<td>Chromium/xyz</td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Safari</td>
			<td>Safari/xyz</td>
			<td>Chrome/xyz または Chromium/xyz</td>
			<td>Safari はバージョン番号を2つ提供しており、一方は技術的な Safari/xyz のトークン、もう一方はユーザーに分かりやすい Version/xyz のトークンです</td>
		</tr>
		<tr>
			<td>Opera</td>
			<td>
			<p>OPR/xyz <sup>[1]</sup></p>

			<p>Opera/xyz</p>
			</td>
			<td></td>
			<td>
			<p><sup>[1]</sup> Opera 15+ (Blink ベースのエンジン)</p>

			<p><sup>[2]</sup> Opera 12- (Presto ベースのエンジン)</p>
			</td>
		</tr>
		<tr>
			<td>Internet Explorer</td>
			<td>
			<p>; MSIE xyz; <sup>[1]</sup></p>

			<p>Trident/7.0; .*rv:xyz <sup>[2]</sup></p>
			</td>
			<td></td>
			<td>
			<p><sup>[1]</sup> Internet Explorer 10-</p>

			<p><sup>[2]</sup> Internet Explorer 11</p>
			</td>
		</tr>
	</tbody>
</table>

<p>もちろん、他のブラウザーがこれらの一部をハイジャックしないという絶対的な保証はありません (過去に Chrome が Safari の文字列をハイジャックしたように)。そのため、ユーザーエージェント文字列を使用したブラウザーの判定は信頼性が低いので、バージョン番号をチェックするのみにしてください (過去のバージョンをハイジャックすることはあまりありません)。</p>

<h3 id="Browser_version">ブラウザーのバージョン</h3>

<p>ブラウザーのバージョンは、例外はあるものの、多くがユーザーエージェント文字列の <em>BrowserName/VersionNumber</em> トークンの値の部分に入れられます。もちろんこれは Internet Explorer の場合は当てはまらず (MSIE トークンの直後にバージョン番号を入れる)、 Opera のバージョン10以降では、 Version/<em>VersionNumber</em> トークンが追加されています。</p>

<p>ここで再度、探しているブラウザーの正しいトークンを取得していることを確認してください。他には妥当な番号が含まれているという保証はありません。</p>

<h3 id="Rendering_engine">レンダリングエンジン</h3>

<p>前述のように、多くの場合はレンダリングエンジンを探した方が良い方法になります。これは、あまり知られていないブラウザーを除外しないためにも役立つでしょう。共通のレンダリングエンジンを持つブラウザーはページを同じ方法で表示します。一方で動作するものはもう一方でも動作するということを想定することができます。</p>

<p>主なレンダリングエンジンには、 Trident, Gecko, Presto, Blink, WebKit の5つがあります。レンダリングエンジンの名前を探すのが一般的であるため、たくさんのレンダリングエンジンが他のレンダリングエンジンの名前も追加して検出されるようにしています。したがって、レンダリングエンジンを判定する際には誤判定をしないように注意を払うことが重要です。</p>

<table class="standard-table">
	<thead>
		<tr>
			<th scope="col"></th>
			<th scope="col">必ず含む</th>
			<th scope="col"></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Gecko</td>
			<td>Gecko/xyz</td>
			<td></td>
		</tr>
		<tr>
			<td>WebKit</td>
			<td>AppleWebKit/xyz</td>
			<td>注意: WebKit ブラウザーは 'like Gecko' の文字列を追加するので、判定時に注意しないと Gecko と誤認することがあります。</td>
		</tr>
		<tr>
			<td>Presto</td>
			<td>Opera/xyz</td>
			<td><strong>注:</strong> Presto は Opera ブラウザーのバージョン 15 以降では使用されない ('Blink' を参照)</td>
		</tr>
		<tr>
			<td>Trident</td>
			<td>Trident/xyz</td>
			<td>Internet Explorer はこのトークンをユーザーエージェント文字列の<em>コメント</em>部分に入れる</td>
		</tr>
		<tr>
			<td>EdgeHTML</td>
			<td>Edge/xyz</td>
			<td>Chromium ではない Edge は、 <em>Edge/</em> のトークンの後にアプリケーションのバージョンではなく、エンジンのバージョンを入れる。<br>
			<strong>注:</strong> EdgeHTML は Edge ブラウザーのバージョン 79 以降では使用されない ('Blink' を参照)。</td>
		</tr>
		<tr>
			<td>Blink</td>
			<td>Chrome/xyz</td>
			<td></td>
		</tr>
	</tbody>
</table>

<h2 id="Rendering_engine_version">レンダリングエンジンのバージョン</h2>

<p>ほとんどのレンダリングエンジンは、 Gecko を除いて <em>RenderingEngine/VersionNumber</em> のトークンにバージョン番号を入れています。 Gecko はユーザーエージェント文字列のコメント部分の中で、 <code>rv:</code> 文字列の後にバージョン番号を入れます。モバイル版の Gecko 14 とデスクトップ版の Gecko 17 から、この値を <code>Gecko/version</code> のトークン (以前のバージョンではビルド日付、その後は GeckoTrail と呼ばれる固定日付) に置きます。</p>

<h2 id="OS">OS</h2>

<p>オペレーティングシステムは、多くのユーザーエージェント文字列で提供されますが (ただし Firefox OS のようなウェブ用のプラットフォームでは提供されません)、書式は大幅に異なります。これはユーザーエージェント文字列のコメント部分にある2つのセミコロン間の固定文字列です。これらの文字列はブラウザーに依存します。これは OS を示しますが、しばしばバージョンや依存するハードウェア (32/64ビットや、 Mac の場合の Intel / PPC) も示します。</p>

<p>すべての場合と同様に、これらの文字列は将来変更される可能性があり、既にリリースされているブラウザーの判定と組み合わせて使用する必要があります。新しいバージョンのブラウザーが出現したときは、スクリプトを適合させるための技術調査が必要です。</p>

<h3 id="Mobile_Tablet_or_Desktop">モバイルか、タブレットか、デスクトップか</h3>

<p>ユーザーエージェントの判別を行う最も一般的な理由は、ブラウザーが実行されている端末の種類を判別することです。目的は、それぞれの種類の端末に別々な HTML を提供することです。</p>

<ul>
	<li>ブラウザーやレンダリングエンジンは、1種類の端末でしか動作しないと想定しないでください。ブラウザーやレンダリングエンジンごとに、異なる既定値を設定しないでください。</li>
	<li>ブラウザーがモバイル、タブレット、デスクトップのいずれであるかを定義するために、 OS トークンを使用しないでください。 OS は複数の種類の端末 (Android はタブレットや携帯電話など) で動作します。</li>
</ul>

<p>次の表は主要なブラウザーのベンダーが、ブラウザーがモバイル端末上で動作していることを示す方法をまとめたものです。</p>

<table>
	<caption>各ブラウザーのユーザーエージェント文字列</caption>
	<thead>
		<tr>
			<th scope="col">ブラウザー</th>
			<th scope="col">ルール</th>
			<th scope="col">例</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Mozilla (Gecko, Firefox)</td>
			<td><a href="/ja/docs/Gecko_user_agent_string_reference"><strong>Mobile</strong> または <strong>Tablet</strong> のトークン</a>がコメントの中にある。</td>
			<td>Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0</td>
		</tr>
		<tr>
			<td>WebKit ベースのもの (Android, Safari)</td>
			<td><a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/OptimizingforSafarioniPhone/OptimizingforSafarioniPhone.html#//apple_ref/doc/uid/TP40006517-SW3"><strong>Mobile Safari</strong> のトークン</a>がコメントの外にある。</td>
			<td>Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30</td>
		</tr>
		<tr>
			<td>Blink ベースのもの (Chromium, Google Chrome, Opera 15 以降)</td>
			<td><a href="https://developers.google.com/chrome/mobile/docs/user-agent"><strong>Mobile Safari</strong> のトークン</a>がコメントの外にある。</td>
			<td>Mozilla/5.0 (Linux; Android 4.4.2); Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047</td>
		</tr>
		<tr>
			<td>Presto ベースのもの (Opera 12 まで)</td>
			<td>
			<p><a href="http://my.opera.com/community/openweb/idopera/"><strong>Opera Mobi/xyz</strong> のトークン</a>がコメントの中にある。 (Opera 12 まで)</p>
			</td>
			<td>
			<p>Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50</p>
			</td>
		</tr>
		<tr>
			<td>Internet Explorer</td>
			<td><strong>IEMobile/xyz</strong> のトークンがコメントの中にある。</td>
			<td>Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)</td>
		</tr>
		<tr>
			<td>Edge on Windows 10 Mobile</td>
			<td><strong>Mobile/xyz</strong> &amp; <strong>Edge/</strong> tokens outside the comment.</td>
			<td>Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299</td>
		</tr>
	</tbody>
</table>

<p>要するに、モバイル端末を検出するには、ユーザーエージェント文字列のどこかに文字列 “Mobi” があるかどうかを探すことをお勧めします。</p>

<div class="note">
<p>端末が大きくて “Mobi” と表示されていない場合は、デスクトップサイトを提供してください (ベストプラクティスとして、デスクトップ機にタッチ画面が採用されつつあるので、どちらにしてもタッチ入力に対応するようにしてください)。</p>
</div>
