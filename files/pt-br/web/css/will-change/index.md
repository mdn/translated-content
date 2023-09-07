---
title: will-change
slug: Web/CSS/will-change
---

{{CSSRef}}

## Sumário

A propriedade **`will-change`** do [CSS](/pt-BR/docs/Web/CSS) fornece um modo dos autores dizerem aos navegadores sobre que tipo de mudanças devem ser esperadas no elemento, então o navegador pode fazer as otimizações apropriadas com antecedência, antes do elemento ser efetivamente modificado.

Esses tipos de otimizações podem aumentar a capacidade de resposta de uma página, fazendo o trabalho potencialmente caro antes do tempo antes que eles são realmente necessários.

O uso adequado dessa propriedade pode ser um pouco complicado:

- _Não aplique will-change em muitos elementos._ O navegador já tenta ao máximo otimizar tudo. Algumas das otimizações mais fortes que podem utilizar o `will-change` acabam usando muitos recursos da máquina, e quando utilizados em demasia como neste caso, pode fazer a página para retardar o carregamento ou consumir uma grande quantidade de recursos.
- _Use com moderação._ O comportamento normal do navegador para otimizações é fazê-las e depois voltar ao normal. Mas adicionando `will-change` diretamente no estilo, implica que o elemento alvo está sempre alguns momentos antes da mudança, e o navegador irá manter as otimizações por muito mais tempo do que teria de outra forma. Então é uma boa prática colocar e retirar o `will-change` usando script antes e depois da mudança ocorrer.
- _Não aplicar will-change em elementos para realizar a otimização prematura._ Se sua página está performando bem, não adicione a propriedade `will-change` nos elementos apenas para trazer mais velocidade. `will-change` é entendido como algo para ser usado como último recurso, com o intuito de tentar solucionar problemas de performance . Ele não deve ser usado para antecipar esses possíveis problemas. O uso excessivo do `will-change` poderá resultar em excessivo uso de memória e causar uma renderização mais complexa enquanto o browser tenta se preparar para uma possível mudança. Isso levará a um pior desempenho.
- _Dê tempo suficiente para trabalhar_. Essa propriedade destina-se como um método para os autores dizerem ao agente do browser sobre como mudarão as properiedades antes disso acontecer. Então o navegador pode escolher como aplicar qualquer otimização requisitada na propriedade antes do tempo da ação acontecer. Isso é importante para dar ao navegador algum tempo para fazer as otimizações. Identifique um jeito de prever as mudanças, e use a proiedade `will-change` pra isso.

{{cssinfo}}

## Sintaxe

```css
/* Valores chave */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform; /* Exemplo de <custom-ident> */
will-change: opacity; /* Exemplo de <custom-ident> */
will-change: left, top; /* Exemplo de dois <animateable-feature> */

/* Valores globais */
will-change: inherit;
will-change: initial;
will-change: unset;
```

### Valores

- `auto`
  - : Essa palavra chave não expressa nenhuma intenção em particular; o _user agent_ deve aplicar qualquer otimização como normalmente ocorre.

O `<animateable-feature>` pode ser um dos seguintes valores:

- `scroll-position`
  - : Indica que o autor espera que haja uma animação ou mudança na posição do scroll do elemento no futuro.
- `contents`
  - : Indica que o autor espera que haja uma animação ou mudança no conteúdo do elemento no futuro.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Indica que o autor espera que haja uma animação ou mudança na propriedade com o nome dado no elemento no futuro. Isso não pode ser um dos seguintes valores: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position`, or `contents`. A especificação não define o comportamento de um valor em particular, mas é comum pro `transform` ser uma camada de composição. O [Chrome atualmente toma duas ações](https://github.com/operasoftware/devopera/pull/330), dadas as propriedades particulares do CSS: estabelece uma nova camada de composição ou um novo {{Glossary("stacking context")}}.

### Sintaxe formal

{{csssyntax}}

## Exemplos

```css
.sidebar {
  will-change: transform;
}
```

O exemplo acima adiciona a propriedade `will-change` diretamente no estilo, o que irá fazer com que o navegador mantenha a otimização em memória por muito mais tempo que o necessário e nós já vimos que isso deve ser evitado. Abaixo outro exemplo mostrando como aplicar o `will-change` através de script, o que provavelmente é o que você deve fazer na maioria dos casos.

```js
var el = document.getElementById("element");

// Set will-change quando ocorre hover no elemento
el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  // As propriedades otimizáveis que vão mudar no bloco de animações
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```

Entretanto pode ser apropriado incluir `will-change` no seu estilo css para uma aplicação que faz _page flips_ quando uma tecla é pressionada como um álbum ou uma apresentação de slides, onde a página é grande e complexa. Isso irá dizer ao navegador para preparar a transição à frente do tempo e aceitar transições entre as páginas assim que a tecla for pressionada.

```css
.slide {
  will-change: transform;
}
```

## Especificações

| Especificação                                                  | Estado                       | Comentário         |
| -------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('CSS Will Change', '#will-change', 'will-change')}} | {{Spec2('CSS Will Change')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.will-change")}}
