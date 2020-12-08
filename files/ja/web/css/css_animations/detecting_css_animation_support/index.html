---
title: CSS アニメーション対応の検出
slug: Web/CSS/CSS_Animations/Detecting_CSS_animation_support
tags:
  - Advanced
  - CSS
  - CSS アニメーション
  - Guide
  - JavaScript
  - Junk
  - Reference
translation_of: Web/CSS/CSS_Animations/Detecting_CSS_animation_support
---
<div>{{CSSRef}}</div>

<p>CSS アニメーションでは CSS だけを使用してコンテンツの創造的なアニメーションを行うことができます。しかし、この機能が利用できないことがよくあり、この場合には同様の効果を JavaScript コードで実現したいと思うかもしれません。この記事では、<a class="external" href="http://hacks.mozilla.org/2011/09/detecting-and-generating-css-animations-in-javascript/">このブログ投稿</a> (Chris Heilmann 著) に基づいて、これを行うためのテクニックを紹介します。</p>

<h2 id="CSS_アニメーションへの対応の検査">CSS アニメーションへの対応の検査</h2>

<p>このコードは、 CSS アニメーション対応があるかどうかをチェックします。</p>

<pre class="brush: js">var animation = false,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx  = '',
    elem = document.createElement('div');

if( elem.style.animationName !== undefined ) { animation = true; }

if( animation === false ) {
  for( var i = 0; i &lt; domPrefixes.length; i++ ) {
    if( elem.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
      pfx = domPrefixes[ i ];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}
</pre>

<p>最初にいくつかの変数を定義します。アニメーションに対応していないと仮定して、 <code>animation</code> に <code>false</code> を設定します。 <code>animationstring</code> を後で設定するプロパティである <code>animation</code> に設定します。ループ用にブラウザーの接頭辞の配列を生成して、 <code>pfx</code> を空文字列に設定します。</p>

<p>それから、 CSS の {{cssxref("animation-name")}} プロパティが変数 <code>elem</code> で指定された要素のスタイルコレクションに設定されていることを確認します。これは、ブラウザーが CSS アニメーションを接頭辞なしで対応していることを意味するので、その際は何もしません。</p>

<p>ブラウザーが接頭辞なしのアニメーションに対応していなければ、 <code>animation</code> はまだ <code>false</code> ですが、主要なブラウザー全てがこのプロパティに接頭辞を付けているので、可能性のある接頭辞をすべて試して、名前が <code>AnimationName</code> に変化するかを調べます。</p>

<p>このコードの実行が終了したとき、値が <code>false</code> であれば CSS アニメーション対応が有効ではなく、そうでなければ <code>true</code> となります。 <code>true</code> であった場合、 animation プロパティの名前とキーフレームの接頭辞は正しいものになります。よって、新しい Firefox を使用している場合は、プロパティは <code>MozAnimation</code> となってキーフレームの接頭辞は <code>-moz-</code> となり、 Chrome ではそれぞれ <code>WebkitAnimation</code> および <code>-webkit-</code> になります。なお、ブラウザーではキャメルケースとハイフンを簡単に切り替えることはできません。</p>

<h2 id="Animating_using_the_correct_syntax_for_different_browsers" name="Animating_using_the_correct_syntax_for_different_browsers">様々なブラウザーで正しい構文を使用したアニメーション</h2>

<p>CSS アニメーションに対応しているかどうか分かったところで、アニメーションを行うことができます。</p>

<pre class="brush: js">if( animation === false ) {

  // JavaScript によるアニメーションの代替

} else {
  elem.style[ animationstring ] = 'rotate 1s linear infinite';

  var keyframes = '@' + keyframeprefix + 'keyframes rotate { '+
                    'from {' + keyframeprefix + 'transform:rotate( 0deg ) }'+
                    'to {' + keyframeprefix + 'transform:rotate( 360deg ) }'+
                  '}';

  if( document.styleSheets &amp;&amp; document.styleSheets.length ) {

      document.styleSheets[0].insertRule( keyframes, 0 );

  } else {

    var s = document.createElement( 'style' );
    s.innerHTML = keyframes;
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( s );

  }

}
</pre>

<p>このコードは <code>animation</code> の値を見ます。もし <code>false</code> ならば、アニメーションを実行するために JavaScript の代替コードを使う必要があることが分かります。そうでなければ、求められる CSS アニメーション効果を生成するために JavaScript を使用することができます。</p>

<p>animation プロパティの設定は簡単です。単にスタイルコレクションの値を更新するだけです。しかし、 keyframe の追加は、従来の CSS の構文を使用して定義されていないため、より困難です (より柔軟性がありますが、スクリプトの定義がより難しくなります)。</p>

<p>JavaScript を用いて keyframe を定義するには、それを CSS 文字列に書き出す必要があります。行うことは、 <code>keyframes</code> 変数を設定し、構築されるそれぞれの属性に接頭辞を付けることです。この変数は、いったん構築されれば、一連のアニメーションシーケンスで必要なすべてのキーフレームの完全な記述を含んでいます。</p>

<p>次の仕事は、ページの CSS に実際にキーフレームを追加することです。最初に行うことは、文書に既にスタイルシートがあるかどうかを確認することです。もしあれば、単にそのスタイルシートにキーフレームの記述を挿入するだけです。これは13-15行目で行っています。</p>

<p>スタイルシートがないのであれば、新しい {{HTMLElement("style")}} 要素を生成し、その内容をキーフレームの値のセットとします。それから新しい {{HTMLElement("style")}} 要素を文書の {{HTMLElement("head")}} に追加し、それによって新しいスタイルシートが文書に追加されます。/p&gt;</p>

<p><a href="https://jsfiddle.net/codepo8/ATS2S/8/embedded/result">JSFiddle で見る</a></p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations">CSS アニメーション</a></li>
</ul>
