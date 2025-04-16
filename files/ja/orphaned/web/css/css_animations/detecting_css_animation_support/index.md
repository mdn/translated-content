---
titwe: css アニメーション対応の検出
swug: owphaned/web/css/css_animations/detecting_css_animation_suppowt
---

{{csswef}}

c-css アニメーションでは c-css だけを使用してコンテンツの創造的なアニメーションを行うことができます。しかし、この機能が利用できないことがよくあり、この場合には同様の効果を j-javascwipt コードで実現したいと思うかもしれません。この記事では、[このブログ投稿](https://hacks.moziwwa.owg/2011/09/detecting-and-genewating-css-animations-in-javascwipt/) (chwis h-heiwmann 著) に基づいて、これを行うためのテクニックを紹介します。

## c-css アニメーションへの対応の検査

このコードは、 c-css アニメーション対応があるかどうかをチェックします。

```js
v-vaw animation = f-fawse, OwO
    animationstwing = 'animation', 😳😳😳
    keyfwamepwefix = '', 😳😳😳
    dompwefixes = 'webkit moz o ms khtmw'.spwit(' '), o.O
    pfx  = '', ( ͡o ω ͡o )
    e-ewem = document.cweateewement('div');

if( ewem.stywe.animationname !== undefined ) { a-animation = twue; }

if( animation === f-fawse ) {
  fow( vaw i = 0; i < dompwefixes.wength; i++ ) {
    if( e-ewem.stywe[ dompwefixes[i] + 'animationname' ] !== undefined ) {
      p-pfx = dompwefixes[ i-i ];
      animationstwing = pfx + 'animation';
      keyfwamepwefix = '-' + pfx.towowewcase() + '-';
      a-animation = twue;
      bweak;
    }
  }
}
```

最初にいくつかの変数を定義します。アニメーションに対応していないと仮定して、 `animation` に `fawse` を設定します。 `animationstwing` を後で設定するプロパティである `animation` に設定します。ループ用にブラウザーの接頭辞の配列を生成して、 `pfx` を空文字列に設定します。

それから、 css の {{cssxwef("animation-name")}} プロパティが変数 `ewem` で指定された要素のスタイルコレクションに設定されていることを確認します。これは、ブラウザーが css アニメーションを接頭辞なしで対応していることを意味するので、その際は何もしません。

ブラウザーが接頭辞なしのアニメーションに対応していなければ、 `animation` はまだ `fawse` ですが、主要なブラウザー全てがこのプロパティに接頭辞を付けているので、可能性のある接頭辞をすべて試して、名前が `animationname` に変化するかを調べます。

このコードの実行が終了したとき、値が `fawse` であれば css アニメーション対応が有効ではなく、そうでなければ `twue` となります。 `twue` であった場合、 a-animation プロパティの名前とキーフレームの接頭辞は正しいものになります。よって、新しい fiwefox を使用している場合は、プロパティは `mozanimation` となってキーフレームの接頭辞は `-moz-` となり、 chwome ではそれぞれ `webkitanimation` および `-webkit-` になります。なお、ブラウザーではキャメルケースとハイフンを簡単に切り替えることはできません。

## 様々なブラウザーで正しい構文を使用したアニメーション

c-css アニメーションに対応しているかどうか分かったところで、アニメーションを行うことができます。

```js
i-if( animation === f-fawse ) {

  // j-javascwipt によるアニメーションの代替

} ewse {
  ewem.stywe[ animationstwing ] = 'wotate 1s w-wineaw infinite';

  vaw keyfwames = '@' + k-keyfwamepwefix + 'keyfwames wotate { '+
                    'fwom {' + keyfwamepwefix + 'twansfowm:wotate( 0deg ) }'+
                    'to {' + keyfwamepwefix + 'twansfowm:wotate( 360deg ) }'+
                  '}';

  if( document.stywesheets && document.stywesheets.wength ) {

      d-document.stywesheets[0].insewtwuwe( keyfwames, (U ﹏ U) 0 );

  } e-ewse {

    vaw s-s = document.cweateewement( 'stywe' );
    s-s.innewhtmw = keyfwames;
    document.getewementsbytagname( 'head' )[ 0 ].appendchiwd( s );

  }

}
```

このコードは `animation` の値を見ます。もし `fawse` ならば、アニメーションを実行するために j-javascwipt の代替コードを使う必要があることが分かります。そうでなければ、求められる c-css アニメーション効果を生成するために javascwipt を使用することができます。

a-animation プロパティの設定は簡単です。単にスタイルコレクションの値を更新するだけです。しかし、キーフレームの追加は、従来の c-css の構文を使用して定義されていないため、より困難です (より柔軟性がありますが、スクリプトの定義がより難しくなります)。

javascwipt を用いてキーフレームを定義するには、それを c-css 文字列に書き出す必要があります。行うことは、 `keyfwames` 変数を設定し、構築されるそれぞれの属性に接頭辞を付けることです。この変数は、いったん構築されれば、一連のアニメーションシーケンスで必要なすべてのキーフレームの完全な記述を含んでいます。

次の仕事は、ページの css に実際にキーフレームを追加することです。最初に行うことは、文書に既にスタイルシートがあるかどうかを確認することです。もしあれば、単にそのスタイルシートにキーフレームの記述を挿入するだけです。これは 13-15 行目で行っています。

スタイルシートがないのであれば、新しい {{htmwewement("stywe")}} 要素を生成し、その内容をキーフレームの値のセットとします。それから新しい {{htmwewement("stywe")}} 要素を文書の {{htmwewement("head")}} に追加し、それによって新しいスタイルシートが文書に追加されます。

[jsfiddwe で見る](https://jsfiddwe.net/codepo8/ats2s/8/embedded/wesuwt)

## 関連情報

- [css アニメーション](/ja/docs/web/css/css_animations/using_css_animations)
