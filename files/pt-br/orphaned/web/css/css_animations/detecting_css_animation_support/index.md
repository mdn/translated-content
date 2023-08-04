---
title: Detectando suporte a animação CSS
slug: orphaned/Web/CSS/CSS_Animations/Detecting_CSS_animation_support
---

{{CSSRef}}

Animações CSS torna possível a criação de conteúdo animado e criativo utilizando nada além de CSS. No entando, haverá momentos em que este recurso não estará disponível, e você pode querer lidar com isso utilizando um código JavaScript que simule um efeito semelhante. Este artigo, baseado [neste post do blog](http://hacks.mozilla.org/2011/09/detecting-and-generating-css-animations-in-javascript/) de Chris Heilmann, demonstra uma técnica para fazer isso.

## Testando por suporte de animação CSS

Este código irá verificar se o suporte a animação CSS está disponível:

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

Para iniciantes definimos algumas variáveis. Assumimos que a animação não é suportada iniciando `animation` com `false`. Setamos `animationstring` com `animation` que é a propriedade que desejamos setar posteriormente para com `true`. Criamos um _array_ de prefixos de navegadores para percorrê-lo e setamos `pfx` com uma _string_ vazia.

Então verificamos se a propriedade CSS {{ cssxref("animation-name") }} na coleção de estilo do elemento especificado pelo nome `elem` está definido. Isto significa que o navegador suporta animação CSS sem nenhum prefixo.

Se o navegador não suporta animação não prefixada e `animation` permanece `falso`, iteramos através de todas as possibilidade de prefixos dos principais navegadores que prefixam esta propriedade e acrescentamos este prefixo ao atributo `AnimationName`.

Quando a execução deste código termina, o valor de `animation` será `false` se não houver suporte a animação CSS, ou `true` no caso contrário. Se seja `true` tanto a propriedade de nome de animação quanto o prefixo de _keyframe_ estarão corretos. Se utiliza o novo Firefox, a propriedade será `MozAnimation` e o prefixo de _keyframe_ `-moz-`, para o Chrome será `WebkitAnimation` e `-webkit-`. Observe que os navegadores não deixam fácil a adoção de _camelCase_ ou hifenização.

## Animando utilizando a sintaxe correta para navegadores diferentes

Agora que sabe se a animação CSS é suportada ou não, nós iremos animar.

```js
if( animation === false ) {

  // chamada para a animação em JavaScript

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

Este código analisa o valor de `animation`; se é `false`, saberemos que precisaremos utilizar nosso código JavaScript para executar a animação. Por outro lado, podemos usar o JavaScript para criar um efeito de animação CSS desejado.

Modificar a propriedade de animação é fácil; basta atualizar seu valor na coleção de estilos. No entanto, adicionar _keyframes_ é mais difícil, pois não é definito utilizando a sintaxe tradicional do CSS (que torna-o mais flexível, mas difícil em definir de um script).

Para definir nosso _keyframes_ usando JavaScript, precisamos escrevê-lo como uma _string_ CSS. Tudo que precisamos é setar a variável `keyframes`, prefixando cada atributo que será construído. Esta variável, uma vez construída, contém a descrição completa de todos os _keyframes_ necessários pela nossa sequência de animação.

A tarefa seguinte é adicionar os _keyframes_ ao CSS da página. A primeira coisa a se fazer é procurar se existe uma folha de estilos no documento; caso exista, inserimos a descrição do _keyframe_ nesta folha de estilo; isto é feito nas linhas 13-15.

Se não existe uma folha de estilos, um novo elemento {{ HTMLElement("style") }} é criado, e seu conteúdo é setado com o valor dos _keyframes_. Então o novo elemento {{ HTMLElement("style") }} é inserido no {{ HTMLElement("head") }} do documento, adicionando assim uma nova folha de estilos ao documento.

[View on JSFiddle](https://jsfiddle.net/codepo8/ATS2S/8/embedded/result)

## Veja também

- [Animações CSS](/en/CSS/CSS_animations)
