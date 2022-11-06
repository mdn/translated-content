---
title: Detectando suporte a animação CSS
slug: orphaned/Web/CSS/CSS_Animations/Detecting_CSS_animation_support
tags:
  - Animações CSS
  - Avançado
  - CSS
  - Guía
  - JavaScript
  - Lixo
  - Referencia
translation_of: Web/CSS/CSS_Animations/Detecting_CSS_animation_support
original_slug: Web/CSS/CSS_Animations/Detecting_CSS_animation_support
---
<div>{{CSSRef}}</div>

<p>Animações CSS torna possível a criação de conteúdo animado e criativo utilizando nada além de CSS. No entando, haverá momentos em que este recurso não estará disponível, e você pode querer lidar com isso utilizando um código JavaScript que simule um efeito semelhante. Este artigo, baseado <a href="http://hacks.mozilla.org/2011/09/detecting-and-generating-css-animations-in-javascript/">neste post do blog</a> de Chris Heilmann, demonstra uma técnica para fazer isso.</p>

<h2 id="Testando_por_suporte_de_animação_CSS">Testando por suporte de animação CSS</h2>

<p>Este código irá verificar se o suporte a animação CSS está disponível:</p>

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

<p>Para iniciantes definimos algumas variáveis. Assumimos que a animação não é suportada iniciando <code>animation</code> com <code>false</code>. Setamos <code>animationstring</code> com <code>animation</code> que é a propriedade que desejamos setar posteriormente para com <code>true</code>. Criamos um <em>array</em> de prefixos de navegadores para percorrê-lo e setamos <code>pfx</code> com uma <em>string</em> vazia.</p>

<p>Então verificamos se a propriedade CSS {{ cssxref("animation-name") }} na coleção de estilo do elemento especificado pelo nome <code>elem</code> está definido. Isto significa que o navegador suporta animação CSS sem nenhum prefixo.</p>

<p>Se o navegador não suporta animação não prefixada e <code>animation</code> permanece <code>falso</code>, iteramos através de todas as possibilidade de prefixos dos principais navegadores que prefixam esta propriedade e acrescentamos este prefixo ao atributo <code>AnimationName</code>.</p>

<p>Quando a execução deste código termina, o valor de <code>animation</code> será <code>false</code> se não houver suporte a animação CSS, ou <code>true</code> no caso contrário. Se seja <code>true</code> tanto a propriedade de nome de animação quanto o prefixo de <em>keyframe</em> estarão corretos. Se utiliza o novo Firefox, a propriedade será <code>MozAnimation</code> e o prefixo de <em>keyframe</em> <code>-moz-</code>, para o Chrome será <code>WebkitAnimation</code> e <code>-webkit-</code>. Observe que os navegadores não deixam fácil a adoção de <em>camelCase</em> ou hifenização.</p>

<h2 id="Animando_utilizando_a_sintaxe_correta_para_navegadores_diferentes">Animando utilizando a sintaxe correta para navegadores diferentes</h2>

<p>Agora que sabe se a animação CSS é suportada ou não, nós iremos animar.</p>

<pre class="brush: js">if( animation === false ) {

  // chamada para a animação em JavaScript

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

<p>Este código analisa o valor de <code>animation</code>; se é <code>false</code>, saberemos que precisaremos utilizar nosso código JavaScript para executar a animação. Por outro lado, podemos usar o JavaScript para criar um efeito de animação CSS desejado.</p>

<p>Modificar a propriedade de animação é fácil; basta atualizar seu valor na coleção de estilos. No entanto, adicionar <em>keyframes</em> é mais difícil, pois não é definito utilizando a sintaxe tradicional do CSS (que torna-o mais flexível, mas difícil em definir de um script).</p>

<p>Para definir nosso <em>keyframes</em> usando JavaScript, precisamos escrevê-lo como uma <em>string</em> CSS. Tudo que precisamos é setar a variável <code>keyframes</code>, prefixando cada atributo que será construído. Esta variável, uma vez construída, contém a descrição completa de todos os <em>keyframes</em> necessários pela nossa sequência de animação.</p>

<p>A tarefa seguinte é adicionar os <em>keyframes</em> ao CSS da página. A primeira coisa a se fazer é procurar se existe uma folha de estilos no documento; caso exista, inserimos a descrição do <em>keyframe</em> nesta folha de estilo; isto é feito nas linhas 13-15.</p>

<p>Se não existe uma folha de estilos, um novo elemento {{ HTMLElement("style") }} é criado, e seu conteúdo é setado com o valor dos <em>keyframes</em>. Então o novo elemento {{ HTMLElement("style") }} é inserido no {{ HTMLElement("head") }} do documento, adicionando assim uma nova folha de estilos ao documento.</p>

<p><a href="https://jsfiddle.net/codepo8/ATS2S/8/embedded/result">View on JSFiddle</a></p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en/CSS/CSS_animations">Animações CSS</a></li>
</ul>
