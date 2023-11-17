---
title: background-size
slug: Web/CSS/background-size
---

{{CSSRef}}

A propriedade **`background-size`** do [CSS](/pt-BR/docs/Web/CSS) define o tamanho da imagem de fundo do elemento.
A imagem pode ser deixada no seu tamanho natural, estendida ou comprimida para caber no espaço disponível.

{{EmbedInteractiveExample("pages/css/background-size.html")}}

Espaços não cobertos por uma imagem de fundo são preenchidos com a propriedade {{cssxref("background-color")}}, e a cor do fundo ficará visível atrás das imagens de fundo que têm transparência/translucidez.

## Sintaxe

```css
/* Valores de palavras-chave */
background-size: cover;
background-size: contain;

/* Sintaxe de um valor */
/* largura da imagem (altura torna-se 'auto') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Sintaxe de dois valores */
/* Primeiro valor: largura da imagem, segundo valor: altura */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Vários planos de fundo */
background-size: auto, auto; /* Não confunda com `auto auto` */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* Valores globais */
background-size: inherit;
background-size: initial;
background-size: revert;
background-size: revert-layer;
background-size: unset;
```

A propriedade `background-size` é especificada de uma das seguintes maneiras:

- Usando a palavra-chave `contain` ou `cover`.
- Usando somente o valor da largura, caso em que o padrão de altura é `auto`.
- Usando ambos os valores da largura e altura, nesse caso o primeiro define a largura e o segundo define a altura.
  Cada valor pode ser {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} ou `auto`.

Para especificar o tamanho de várias imagens de fundo, separe o valor de cada uma com uma vírgula.

### Valores

- `contain`
  - : Dimensiona a imagem o máximo possível dentro do seu contêiner sem cortar ou estender a imagem.
    Se o contêiner for maior do que a imagem, resultará em uma imagem lado a lado, a menos que a propriedade {{cssxref("background-repeat")}} esteja definida como `no-repeat`.
- `cover`
  - : Dimensiona a imagem (enquanto preserva sua proporção) para o menor tamanho possível para caber no contêiner (ou seja: tanto a altura quanto o comprimento _cobrem_ completamente o contêiner), sem deixar espaço vazio.
    Se as proporções do plano de fundo diferirem do elemento, a imagem será cortada verticalmente ou horizontalmente.
- `auto`
  - : Dimensiona a imagem de fundo na direção correspondente de forma que as proporções intrínsecas sejam mantidas.
- {{cssxref("&lt;length&gt;")}}
  - : Estende a imagem na dimensão correspondente ao comprimento especificado. Valores negativos não são permitidos.
- {{cssxref("&lt;percentage&gt;")}}
  - : Estende a imagem na dimensão correspondente à porcentagem especificada da _área de posicionamento do plano de fundo_.
    A área de posicionamento do plano de fundo é determinada pelo valor de {{cssxref("background-origin")}} (por padrão, o padding box).
    No entanto, se o valor {{cssxref("background-attachment")}} do plano de fundo for `fixed`, a área de posicionamento será o {{glossary("viewport")}} inteiro.
    Valores negativos não são permitidos.

### Dimensões e proporções intrínsecas

O cálculo dos valores depende das dimensões intrínsecas da imagem (largura e altura) e das proporções intrínsecas (relação largura/altura).
Esses atributos são os seguintes:

- Uma imagem bitmap (como a JPG) sempre possui dimensões e proporções intrínsecas.
- Uma imagem vetorial (como a SVG) não tem necessariamente dimensões intrínsecas.
  Se tiver dimensões intrínsecas horizontais e verticais, também terá proporções intrínsecas.
  Se não tiver dimensões ou tiver apenas uma dimensão, pode ou não ter proporções.
- O {{cssxref("&lt;gradient&gt;")}} do CSS não têm dimensões intrínsecas ou proporções intrínsecas.
- Imagens de plano de fundo criados com a função {{cssxref("element", "element()")}} usam as dimensões e proporções intrínsecas do elemento gerador.

> **Nota:** No Gecko, imagens de fundo criadas usando a função [`elemen()`](/pt-BR/docs/Web/CSS/element) são atualmente tratadas como imagens com as dimensões do elemento, ou da área de posicionamento do fundo se o elemento é SVG, com a proporção intrínseca correspondente. Este é um comportamento fora do padrão.

Com base nas dimensões e proporções intrínsecas, o tamanho renderizado da imagem de fundo é calculado da seguinte forma:

- **Se ambos os componentes de `background-size` forem especificados e não forem `auto`:** A imagem de fundo será renderizada no tamanho especificado.
- **Se o `background-size` for `contain` ou `cover`:** Embora preservando suas proporções intrínsecas, a imagem é renderizada no maior tamanho contido ou cobrindo a área de posicionamento do plano de fundo.
  Se a imagem não possui proporções intrínsecas, então ela é renderizada no tamanho da área de posicionamento do plano de fundo.
- **Se o `background-size` for `auto` ou `auto auto`:**

  - Se a imagem tiver dimensões intrínsecas horizontais e verticais, ela será renderizada nesse tamanho.
  - Se a imagem não tiver dimensões intrínsecas e proporções intrínsecas, ela será renderizada no tamanho da área de posicionamento do plano de fundo.
  - Se a imagem não tiver dimensões intrínsecas, mas tiver proporções intrínsecas, ela será renderizada como se `contain` tivesse sido especificado.
  - Se a imagem tiver apenas uma dimensão intrínseca e tiver proporções intrínsecas, ela será renderizada no tamanho correspondente a essa dimensão.
    A outra dimensão é calculada usando a dimensão especificada e as proporções intrínsecas.
  - Se a imagem tiver apenas uma dimensão intrínseca, mas não tiver proporções intrínsecas, ela será renderizada usando a dimensão especificada e a outra dimensão da área de posicionamento do plano de fundo.

  > **Nota:** Imagens SVG têm um atributo [preserveAspectRatio](/pt-BR/docs/Web/SVG/Attribute/preserveAspectRatio) que é equivalente ao `contain`; um `background-size` explícito faz com que `preserveAspectRatio` seja ignorado.

- **Se o `background-size` tem um componente `auto` e um componente não `auto`:**

  - Se a imagem tiver proporções intrínsecas, ela será ampliada para a dimensão especificada.
    A dimensão não especificada é calculada usando a dimensão especificada e as proporções intrínsecas.
  - Se a imagem não tiver proporções intrínsecas, ela será ampliada para a dimensão especificada.
    A dimensão não especificada é calculada usando a dimensão intrínseca correspondente da imagem, se houver.
    Se não houver essa dimensão intrínseca, ela se tornará a dimensão correspondente da área de posicionamento do plano de fundo

> **Nota:** O dimensionamento do plano de fundo para imagens vetoriais que não possuem dimensões ou proporções intrínsecas ainda não foi totalmente implementado em todos os navegadores.
> Tenha cuidado ao confiar no comportamento descrito acima e teste em vários navegadores para garantir que os resultados sejam aceitáveis.

### Definição formal

{{cssinfo}}

## Sintaxe formal

{{csssyntax}}

## Exemplos

### Colocar lado a lado uma imagem grande

Vamos considerar uma imagem grande, uma imagem do logotipo do Firefox de 2982x2808. Queremos agrupar quatro cópias dessa imagem em um elemento de 300x300 pixels.
Para fazer isso, podemos usar um valor fixo de `background-size` de 150 pixels.

#### HTML

```html
<div class="tiledBackground"></div>
```

#### CSS

```css
.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

#### Resultado

{{EmbedLiveSample("Tiling_a_large_image", 340, 340)}}

Veja [Redimensionando as imagens de fundo](/pt-BR/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images) para mais exemplos.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Redimensionando as imagens de fundo](/pt-BR/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images)
- [Scaling of SVG backgrounds](/pt-BR/docs/Web/CSS/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
