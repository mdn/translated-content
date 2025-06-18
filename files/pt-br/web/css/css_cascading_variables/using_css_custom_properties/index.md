---
title: Utilizando propriedades CSS personalizadas (variáveis)
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
original_slug: Web/CSS/Using_CSS_custom_properties
---

{{CSSRef}}

**Propriedades personalizadas** (às vezes chamadas de **variáveis CSS** ou **variáveis em cascata**) são entidades definidas por autores CSS que contêm valores específicos a serem reutilizados em um documento. Eles são definidos usando a notação de propriedade personalizada (por exemplo, **`--main-color: black;`**) e são acessados usando a função {{cssxref("var", "var()")}} (por exemplo, `cor: var(--main-color);`).

Sites complexos têm quantidades muito grandes de CSS, geralmente com muitos valores repetidos. Por exemplo, a mesma cor pode ser usada em centenas de lugares diferentes, exigindo pesquisa global e substituição se essa cor precisar ser alterada. As propriedades personalizadas permitem que um valor seja armazenado em um local e, em seguida, referenciado em vários outros locais. Um benefício adicional são os identificadores semânticos. Por exemplo, `--main-text-color` é mais fácil de entender do que `#00ff00`, especialmente se esta mesma cor também for usada em outros contextos.

As propriedades personalizadas estão sujeitas à cascata e herdam seu valor de seu pai.

## Uso básico

A declaração de uma propriedade personalizada é feita usando um nome de propriedade personalizada que começa com um hífen duplo (`--`) e um valor de propriedade que pode ser qualquer valor CSS válido. Como qualquer outra propriedade, isso é escrito dentro de um conjunto de regras, assim:

```css
element {
  --main-bg-color: brown;
}
```

Observe que o seletor fornecido ao conjunto de regras define o escopo no qual a propriedade personalizada pode ser usada. Uma prática recomendada comum é definir propriedades personalizadas na pseudoclasse {{cssxref(":root")}}, para que ela possa ser aplicado globalmente em seu documento HTML:

```css
:root {
  --main-bg-color: brown;
}
```

No entanto, isso nem sempre precisa ser o caso: talvez você tenha um bom motivo para limitar o escopo de suas propriedades personalizadas.

> [!NOTE]
> Os nomes das propriedades personalizadas diferenciam maiúsculas de minúsculas — `--my-color` será tratado como uma propriedade personalizada separada de `--My-color`.

Conforme mencionado anteriormente, você usa o valor da propriedade personalizada especificando o nome da propriedade personalizada dentro da função {{cssxref("var", "var()")}}, no lugar de um valor de propriedade regular:

```css
element {
  background-color: var(--main-bg-color);
}
```

## Primeiros passos com propriedades personalizadas

Vamos começar com este CSS que aplica a mesma cor a elementos de classes diferentes:

```css
.one {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 100px;
}

.five {
  background-color: brown;
}
```

Vamos aplicá-lo a este HTML:

```html
<div>
  <div class="one">1:</div>
  <div class="two">2: Texto <span class="five">5 - mais texto</span></div>
  <input class="three" />
  <textarea class="four">4: Lorem Ipsum</textarea>
</div>
```

Isso produz o seguinte resultado:

{{EmbedLiveSample("First_steps_with_custom_properties",600,180)}}

## Usando a pseudo-classe :root

Observe o CSS repetitivo no exemplo acima. A cor de fundo é definida como 'marrom' em vários lugares. Para algumas declarações CSS, é possível declarar isso mais alto na cascata e deixar que a herança CSS resolva esse problema naturalmente. Para projetos não triviais, isso nem sempre é possível. Ao declarar uma propriedade personalizada na pseudoclasse {{cssxref(":root")}} e usá-la quando necessário em todo o documento, um autor de CSS pode reduzir a necessidade de repetição:

```css
:root {
  --main-bg-color: brown;
}

.one {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 100px;
}

.five {
  background-color: var(--main-bg-color);
}
```

```html hidden
<div>
  <div class="one"></div>
  <div class="two">Texto <span class="five">- mais texto</span></div>
  <input class="three" />
  <textarea class="four">Lorem Ipsum</textarea>
</div>
```

Isso leva ao mesmo resultado do exemplo anterior, mas permite uma declaração canônica do valor da propriedade desejada; muito útil se você quiser alterar o valor em toda a página posteriormente.

## Herança de propriedades personalizadas

As propriedades personalizadas são herdadas. Isso significa que, se nenhum valor for definido para uma propriedade personalizada em um determinado elemento, o valor de seu pai será usado. Pegue este HTML:

```html
<div class="one">
  <div class="two">
    <div class="three"></div>
    <div class="four"></div>
  </div>
</div>
```

… com o seguinte CSS:

```css
.two {
  --test: 10px;
}

.three {
  --test: 2em;
}
```

Neste caso, os resultados de `var(--test)` são:

- Para o elemento `class="two"`: `10px`
- Para o elemento `class="three"`: `2em`
- Para o elemento `class="four"`: `10px` (herdado de seu pai)
- Para o elemento `class="one"`: _invalid value_, que é o valor padrão de qualquer propriedade personalizada

Lembre-se de que essas são propriedades personalizadas, não variáveis reais, como você pode encontrar em outras linguagens de programação. O valor é calculado onde é necessário, não armazenado para uso em outras regras. Por exemplo, você não pode definir uma propriedade para um elemento e esperar recuperá-la na regra do descendente de um irmão. A propriedade é definida apenas para o seletor correspondente e seus descendentes, como qualquer CSS normal.

## Valores alternativos de propriedade personalizada

Usando a função [`var()`](/pt-BR/docs/Web/CSS/var), você pode definir vários **valores alternativos** quando a variável dada ainda não está definida; isso pode ser útil ao trabalhar com [Elementos personalizados](/pt-BR/docs/Web/API/Web_components/Using_custom_elements) e [Shadow DOM](/pt-BR/docs/Web/API/Web_components/Using_shadow_DOM).

> [!NOTE]
> os valores alternativos não são usados para corrigir a compatibilidade do navegador. Se o navegador não oferecer suporte a propriedades personalizadas de CSS, o valor de fallback não ajudará. É apenas um backup para o navegador que suporta propriedades personalizadas CSS para escolher um valor diferente se a variável fornecida não estiver definida ou tiver um valor inválido.

O primeiro argumento para a função é o nome da [propriedade personalizada](https://www.w3.org/TR/css-variables/#custom-property) a ser substituída. O segundo argumento para a função, se fornecido, é um valor de fallback, que é usado como valor de substituição quando a [propriedade personalizada](https://www.w3.org/TR/css-variables/#custom-property) referenciada é inválido. A função aceita apenas dois parâmetros, atribuindo tudo o que segue a primeira vírgula como segundo parâmetro. Se esse segundo parâmetro for inválido, o fallback falhará. Por exemplo:

```css
.two {
  /* Vermelho se --my-var não estiver definido */
  color: var(--my-var, red);
}

.three {
  /* rosa se --my-var e --my-background não estiverem definidos */
  background-color: var(--my-var, var(--my-background, pink));
}

.three {
  /* Inválido: "--meu-fundo, rosa" */
  background-color: var(--my-var, --my-background, pink);
}
```

Incluir uma propriedade personalizada como fallback, conforme visto no segundo exemplo acima, é a maneira correta de fornecer mais de um fallback. A técnica pode causar problemas de desempenho, pois leva mais tempo para analisar as variáveis.

> [!NOTE]
> A sintaxe do fallback, como a de [propriedades personalizadas](https://www.w3.org/TR/css-variables/#custom-property), permite vírgulas. Por exemplo, `var(--foo, red, blue)` define um fallback de `red, blue` — qualquer coisa entre a primeira vírgula e o final da função é considerado um valor fallback.

## Tratamento de propriedades personalizadas inválidas

Cada propriedade CSS pode receber um conjunto definido de valores. Se você tentar atribuir um valor a uma propriedade que está fora de seu conjunto de valores válidos, ela será considerada _inválida_.

Quando o navegador encontra um valor inválido para uma propriedade normal, ele descarta o valor e os elementos recebem os valores que teriam se a declaração simplesmente não existisse.

No entanto, quando os valores das propriedades personalizadas são analisados, o navegador ainda não sabe onde eles serão usados, portanto, deve considerar quase todos os valores como _válidos_.

Infelizmente, esses valores válidos podem ser usados, através da notação funcional `var()`, em um contexto onde eles podem não fazer sentido. Propriedades e variáveis personalizadas podem levar a declarações CSS inválidas, levando ao novo conceito de _válido no tempo computado._

Quando o navegador encontra uma substituição `var()` inválida, então o [inicial](/pt-BR/docs/Web/CSS/CSS_cascade/initial_value) ou [herdado](/pt-BR/docs/Web/CSS/CSS_cascade/Inheritance) valor da propriedade é usado.

Os próximos dois exemplos ilustram isso.

### Propriedades normais inválidas

Neste exemplo, tentamos aplicar um valor de `16px` à propriedade {{cssxref("color")}}. Como isso é inválido, o CSS é descartado e o resultado é como se a regra não existisse, então a regra `color: blue` anterior é aplicada em seu lugar e o parágrafo é azul.

#### HTML

```html
<p>Este parágrafo é inicialmente preto.</p>
```

#### CSS

```css
p {
  color: blue;
}

p {
  color: 16px;
}
```

#### Resultado

{{EmbedLiveSample('Propriedades normais inválidas', 100, 100)}}

### Propriedades personalizadas inválidas

Este exemplo é exatamente como o último, exceto que usamos uma propriedade personalizada.

Como esperado, o navegador substitui o valor de `--text-color` no lugar de `var(--text-color)`, mas `16px` não é um valor de propriedade válido para {{cssxref("color")}}. Após a substituição, a propriedade não faz mais sentido. O navegador lida com essa situação em duas etapas:

1. Verifique se a propriedade {{cssxref("color")}} é herdável. É, mas este `<p>` não tem nenhum pai com a propriedade `color` definida. Então passamos para a próxima etapa.
2. Defina o valor para seu **valor inicial padrão**, que é preto.

#### HTML

```html
<p>Este parágrafo é inicialmente preto.</p>
```

#### CSS

```css
:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

#### Resultado

{{EmbedLiveSample('Propriedades personalizadas inválidas', 100, 100)}}

## Valores em JavaScript

Para usar os valores das propriedades personalizadas em JavaScript, é como as propriedades padrão.

```js
// obtém a variável do estilo inline
element.style.getPropertyValue("--my-var");

// obtém variável de qualquer lugar
getComputedStyle(element).getPropertyValue("--my-var");

// define a variável no estilo inline
element.style.setProperty("--my-var", jsVar + 4);
```

## Veja também

- [Sintaxe de propriedade personalizada](/pt-BR/docs/Web/CSS/--*)
- [`var()`](/pt-BR/docs/Web/CSS/var)
