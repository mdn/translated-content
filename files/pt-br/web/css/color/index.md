---
title: Propriedade color do CSS
slug: Web/CSS/color
---

{{CSSRef}}

A propriedade **`color`** do CSS definine o valor da cor de um elemento com seu conteúdo em texto e seus decorações (estilos). Também define o valorer da {{cssxref("currentcolor")}}, no qual pode ser usado um valor indireto de outra propriedade, e tem como padrão as cores de outras propriedades (enquanto não definida), tal como a propriedade {{cssxref("border-color")}}.

{{EmbedInteractiveExample("pages/css/color.html")}}

Para uma visão geral de como usar a propriedade color e semelhantes no HTML, veja [Cor - CSS, como começar](/pt-BR/docs/Web/CSS/Como_começar/Cor).

## Syntaxe

```css
/* Valores com Palavras-chave */
color: white; /* Aqui será definida a cor atual*/

/* Valores com Palavras-chave */
/* color define a cor do texto no elemento*/
color: red; /* Define como 'vermelho'*/
color: blue; /* Define como 'laranja'*/
color: cyan; /* Define como 'verde-água'*/

/* Obs: Utilizando "light" antes da cor, ela ficará clara.
   ex: lightblue;
   E utilizando "dark", ela ficará mais escura.
   ex: darkblue;
*/

/* Cores com valores Hexa-decimais,
ou seja de 1 à 15, sendo de 0 à 9 normais,mas de 10 à 15
são as letras do alfabeto , logo de "a" à "f". */

color: #090;
color: #0099fg;
color: #090a;
color: #0099bcaa;

/* Valores "rgb" ou "rgba",
ou seja, o primeiro é vermelho, o segundo é verde e
o terceiro é azul, o "a" é o nível de transparência da cor,
e vai de 0 à 1;
Ex: preto meio transparênte = rgba(255,255,255,0.5); */

color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* Valores "hsl()", sendo
hsl(num da cor"1-369", saturação"0-100", luminosidade"0-100")*/
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* Valores globais, pega algun valor já definido,
para todo o <body>, por exemplo. */
color: inherit;
color: initial;
color: unset;
```

A propriedade `color` é especificada somente com o valor {{cssxref("&lt;color&gt;")}} .

Note que o valor sempre será uniforme para {{cssxref("color")}}. Não podendo ter {{cssxref("&lt;gradient&gt;")}}(gradiente), que é atualmente um tipo para {{cssxref("&lt;image&gt;")}}.

### Valores

- {{cssxref("&lt;color&gt;")}}
  - : Define a cor dos caracteres presentes no elemento a ser estilizado.

### Syntaxe formal

```
p { color: gray; }
```

## Exemplos

A seguir, você verá várias maneira de tornar a cor de um texto num parágrafo vermelha:

```css
p {
  color: red;
}
p {
  color: #f00;
}
p {
  color: #ff0000;
}
p {
  color: rgb(255, 0, 0);
}
p {
  color: rgb(100%, 0%, 0%);
}
p {
  color: hsl(0, 100%, 50%);
}

/* 50% translúcido(transparênte) */
p {
  color: rgba(255, 0, 0, 0.5);
}
p {
  color: hsla(0, 100%, 50%, 0.5);
}
```

## Preocupações com acessibilidade

É extremamente crucial que todo site, contenha um contraste de cores adequado, para que pessoas com níveis baixos de visão tenha um aboa experiência ao utilizar o site.

## Specifications

| Specification                                                | Status                        | Comment                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Colors', '#the-color-property', 'color')}}  | {{Spec2('CSS4 Colors')}}      | Adiciona syntaxes sem emendas para as funções `rgb()`, `rgba()`, `hsl()` e `hsla()` . Permite valores alpha em `rgb()` e `hsl()`, dirando `rgba()` e `hsla()` em (descontinuada). Adiciona a palavra-chave `rebeccapurple`. Adiciona valores de cores hexa-decimais de 4 à 8 dígitos, where the last digit(s) represents the alpha value. Adiona as funcões `hwb()`, `device-cmyk()` e `color()` . |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'color')}} | {{Spec2('CSS3 Transitions')}} | Define `color` como animável.                                                                                                                                                                                                                                                                                                                                                                      |
| {{SpecName('CSS3 Colors', '#color', 'color')}}               | {{Spec2('CSS3 Colors')}}      | Deprecia as cores do Sistema. Adiciona cores [SVG](/pt-BR/docs/Web/SVG). Adicionando as funções `rgba()`, `hsl()`, and `hsla()`.                                                                                                                                                                                                                                                                   |
| {{SpecName('CSS2.1', 'colors.html#colors', 'color')}}        | {{Spec2('CSS2.1')}}           | Adiciona a cor laranja `orange` color e o Sistema de Cores.                                                                                                                                                                                                                                                                                                                                        |
| {{SpecName('CSS1', '#color', 'color')}}                      | {{Spec2('CSS1')}}             | Definição Inicial                                                                                                                                                                                                                                                                                                                                                                                  |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.color")}}

## Veja também

- [Tipo de dado \<color> no CSS.](/pt-BR/docs/Web/CSS/color_value)
