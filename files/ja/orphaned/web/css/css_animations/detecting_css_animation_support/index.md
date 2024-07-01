---
title: CSS アニメーション対応の検出
slug: orphaned/Web/CSS/CSS_Animations/Detecting_CSS_animation_support
---

{{CSSRef}}

CSS アニメーションでは CSS だけを使用してコンテンツの創造的なアニメーションを行うことができます。しかし、この機能が利用できないことがよくあり、この場合には同様の効果を JavaScript コードで実現したいと思うかもしれません。この記事では、[このブログ投稿](https://hacks.mozilla.org/2011/09/detecting-and-generating-css-animations-in-javascript/) (Chris Heilmann 著) に基づいて、これを行うためのテクニックを紹介します。

## CSS アニメーションへの対応の検査

このコードは、 CSS アニメーション対応があるかどうかをチェックします。

```js
var animation = false,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx  = '',
    elem = document.createElement('div');

if( elem.style.animationName !== undefined ) { animation = true; }

if( animation === false ) {
  for( var i = 0; i < domPrefixes.length; i++ ) {
    if( elem.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
      pfx = domPrefixes[ i ];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}
```

最初にいくつかの変数を定義します。アニメーションに対応していないと仮定して、 `animation` に `false` を設定します。 `animationstring` を後で設定するプロパティである `animation` に設定します。ループ用にブラウザーの接頭辞の配列を生成して、 `pfx` を空文字列に設定します。

それから、 CSS の {{cssxref("animation-name")}} プロパティが変数 `elem` で指定された要素のスタイルコレクションに設定されていることを確認します。これは、ブラウザーが CSS アニメーションを接頭辞なしで対応していることを意味するので、その際は何もしません。

ブラウザーが接頭辞なしのアニメーションに対応していなければ、 `animation` はまだ `false` ですが、主要なブラウザー全てがこのプロパティに接頭辞を付けているので、可能性のある接頭辞をすべて試して、名前が `AnimationName` に変化するかを調べます。

このコードの実行が終了したとき、値が `false` であれば CSS アニメーション対応が有効ではなく、そうでなければ `true` となります。 `true` であった場合、 animation プロパティの名前とキーフレームの接頭辞は正しいものになります。よって、新しい Firefox を使用している場合は、プロパティは `MozAnimation` となってキーフレームの接頭辞は `-moz-` となり、 Chrome ではそれぞれ `WebkitAnimation` および `-webkit-` になります。なお、ブラウザーではキャメルケースとハイフンを簡単に切り替えることはできません。

## 様々なブラウザーで正しい構文を使用したアニメーション

CSS アニメーションに対応しているかどうか分かったところで、アニメーションを行うことができます。

```js
if( animation === false ) {

  // JavaScript によるアニメーションの代替

} else {
  elem.style[ animationstring ] = 'rotate 1s linear infinite';

  var keyframes = '@' + keyframeprefix + 'keyframes rotate { '+
                    'from {' + keyframeprefix + 'transform:rotate( 0deg ) }'+
                    'to {' + keyframeprefix + 'transform:rotate( 360deg ) }'+
                  '}';

  if( document.styleSheets && document.styleSheets.length ) {

      document.styleSheets[0].insertRule( keyframes, 0 );

  } else {

    var s = document.createElement( 'style' );
    s.innerHTML = keyframes;
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( s );

  }

}
```

このコードは `animation` の値を見ます。もし `false` ならば、アニメーションを実行するために JavaScript の代替コードを使う必要があることが分かります。そうでなければ、求められる CSS アニメーション効果を生成するために JavaScript を使用することができます。

animation プロパティの設定は簡単です。単にスタイルコレクションの値を更新するだけです。しかし、キーフレームの追加は、従来の CSS の構文を使用して定義されていないため、より困難です (より柔軟性がありますが、スクリプトの定義がより難しくなります)。

JavaScript を用いてキーフレームを定義するには、それを CSS 文字列に書き出す必要があります。行うことは、 `keyframes` 変数を設定し、構築されるそれぞれの属性に接頭辞を付けることです。この変数は、いったん構築されれば、一連のアニメーションシーケンスで必要なすべてのキーフレームの完全な記述を含んでいます。

次の仕事は、ページの CSS に実際にキーフレームを追加することです。最初に行うことは、文書に既にスタイルシートがあるかどうかを確認することです。もしあれば、単にそのスタイルシートにキーフレームの記述を挿入するだけです。これは 13-15 行目で行っています。

スタイルシートがないのであれば、新しい {{HTMLElement("style")}} 要素を生成し、その内容をキーフレームの値のセットとします。それから新しい {{HTMLElement("style")}} 要素を文書の {{HTMLElement("head")}} に追加し、それによって新しいスタイルシートが文書に追加されます。

[JSFiddle で見る](https://jsfiddle.net/codepo8/ATS2S/8/embedded/result)

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
