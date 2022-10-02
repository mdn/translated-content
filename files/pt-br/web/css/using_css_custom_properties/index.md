---
title: Utilizando variáveis CSS
slug: Web/CSS/Using_CSS_custom_properties
translation_of: Web/CSS/Using_CSS_custom_properties
---
{{cssref}}

**Variáveis CSS** são entidades definidas por desenvolvedores, contendo valores específicos para serem reutilizados ao longo do documento. São configuradas usando esta notação (ex: **`--cor-principal: black;`** ) e são acessadas usando a funcão {{cssxref("var", "var()")}} (ex: `color: var(--cor-principal);` )

Websites complexos tem uma quantidade muito grande de CSS, com uma quantidade de repetição de valores muito frequente. Por exemplo, a mesma cor pode ser usada em centenas de lugares diferentes, requerindo uma pesquisa global e substituição caso esta cor necessite ser trocada. Variáveis CSS permite um valor ser guardado em um lugar, então ser referenciado em muitos outros lugares. Um benefício adicional é a semântica dos identificadores. Por exemplo `--cor-principal-texto` é mais facil de ser entendido do que `#00ff00`, especialmente se esta cor também é usada em outro contexto.

Variáveis CSS estão sujeitas ao efeito cascata do css e herdam seus valores de seus pais.

## Uso básico

Declaração de variável:

```css
elemento {
  --cor-bg-principal: brown;
}
```

Utilizando a variável:

```css
elemento {
  background-color: var(--cor-bg-principal);
}
```

## Primeiros Passos com Variáveis CSS

Vamos começar com este simples CSS que colore elementos de diferentes classes com a mesma cor:

```css
.um {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.dois {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.tres {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 75px;
}
.quatro {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 100px;
}

.cinco {
  background-color: brown;
}
```

Nos aplicaremos isto ao HTML:

```html
<div>
  <div class="one">1:</div>
  <div class="two">2: Text <span class="five">5 - more text</span></div>
  <input class="three">
  <textarea class="four">4: Lorem Ipsum</textarea>
</div>
```

Que nos leva a isto:

{{EmbedLiveSample("sample1",600,180)}}

Note a repetição no CSS. O _bacgkround-color_ (cor de fundo) foi definida como `brown` em diversos lugares. Para algumas declarações CSS, é possível declarar isso no topo e deixar a herança CSS resolver esse problema naturalmente. Para projetos não triviais, isto nem sempre é possível. Ao declarar uma variável na pseudo-classe :root, um desenvolvedor pode interromper algumas das repetições usando variavel.

```css
:root {
  --main-bg-color: brown;
}

.um {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.dois {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.tres {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 75px;
}
.quatro {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 100px;
}

.cinco {
  background-color: var(--main-bg-color);
}
```

Isso leva ao mesmo resultado do exemplo anterior e permite uma declaração canônica da propriedade desejada.

## Herançamento de Variáveis CSS

Propriedades personalizadas herdam. O que significa que, se algum valor for definido para uma propriedade customizada, o valor de seu pai será usado:

```html
<div class="one">
  <div class="two">
    <div class="three"></div>
    <div class="four"></div>
  </div>
</div>
```

```css
.two {
  --test: 10px;
}

.three {
  --test: 2em;
}
```

Neste caso, o resultado de `var(--test)` são:

- Para `class="two"` `10px`
- Para `class="three"` `2em`
- Para `class="four"` `10px` (herdado de seu pai)
- Para `class="one"` _invalid value_ (valor invalido), que é o valor padrão de qualquer propriedade customizada.

Tenha em mente que estas são propriedades customizadas, não são variáveis CSS reais. O valor é computado onde é necessário, não guardado para usar em outras regras. Por exemplo, você não pode definir uma propriedade á um elemento e esperar recuperar na regra de um _irmão descendente_. A propriedade é definida somente para o seletor correspondente e seus descendentes, como qualquer CSS normal.

## Valores de Fallback da propriedade customizada

Usando {{cssxref("var", "var()")}} você pode definir multiplos valores de fallback (quando um falha) quando a variável dada não foi definida ainda, isto pode ser útil quando trabalhar com elementos customizados e Shadow DOM.

O primeiro argumento para a função é o nome da propriedade customizada para ser subistituida.

## Problemas a serem resolvidos

Ao construir sites de grande porte, geralmente os autores têm problemas relacionados à manutenção do CSS. Nestes sites o tamanho do CSS costuma ser consideravel e muitas informações podem ser repetidas em vários lugares. Por exemplo, manter um esquema de cor coerente em um documento requer a reutilização de algumas cores em inúmeras posições nos arquivos CSS. Destas forma modificar o esquema de cores se torna uma tarefa complexa pois nem sempre um simples "Buscar e substituir" é o suficiente.

A situação se agrava com [Frameworks CSS](http://pt.wikipedia.org/wiki/Frameworks_CSS), onde uma pequena mudança de cores requer a edição do framework em si. Pré-processadores como LESS e SASS são muito úteis nestas situações, mas podem aumentar a complexidade do projeto, pois adiciona um passo extra de processamento. Variáveis CSS ajudam ao agregar alguns benefícios de um pré-processador, sem a necessidade de compilação.

Uma segunda vantagem destas variáveis é a informação semântica que elas carregam em seu nome. Os arquivos CSS se tornam mais fáceis de serem lidos e compreendidos: `cor-principal-texto` é de mais fácil entendimento e re-uso que #00ff00, especialmente se a mesma cor for usada em outro contexto.

## Como Variáveis CSS podem ajudar

Em linguagens de programação imperativas, como Java, C++ ou mesmo JavaScript, o estado pode ser \[do programa] rastreado através da noção de variáveis. Variáveis são nomes simbólicos que guardam um valor atribuído que pode variar com o tempo.

Em linguagens declarativas como CSS, valores que mudam com o tempo não são comuns e o conceito de variáveis também.

Porém, o CSS introduz a noção de "variáveis em cascata" para ajudar a solucionar o desafio da manutenção do código. Isto permite a referência simbólica a um valor em toda a árvore do CSS.

## O que são Variáveis CSS

Variáveis CSS atualmente têm duas formas:

- variáveis, que são uma associação entre um indentificador e um valor que pode ser usado em substituição a valores comuns, usando a notação funcional `var(): var(--variavel-exemplo)` retorna o valor de `--variavel-exemplo`.
- propriedades customizadas, que são propriedades especiais na forma de `--*` onde \* representa o nome da variável. Estas variáveis são usadas para definir os valores de uma certa variável: `--variavel-exemplo: 20px;` é uma declaração CSS, usando a propriedade customizada `--*` para definir o valor da variável CSS `--variavel-exemplo` para `20px`.

> **Note:** **Nota:** O prefixo de propriedade customizada era `var-` na especificação anterior, porém mudou posteriormente para `--`. O Firefox 31 e superior seguem a nova especificação. ({{ bug(985838) }})

Propriedades customizadas são similares a propriedades comuns: elas estão sujeitas ao "efeito cascata" e herdam seu valor da propriedade pai se não forem redefinidas.

## Primeiros passos com Variáveis CSS

Vamos começar com este simples CSS que colore elementos de diferentes classes com a mesma cor:

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

Aplicaremos neste HTML:

```html
<div>
    <div class="one"></div>
    <div class="two">Texto <span class="five">- mais texto</span></div>
    <input class="three">
    <textarea class="four">Lorem Ipsum</textarea>
</div>
```

que resultará em:

{{EmbedLiveSample("sample1",600,180)}}

Perceba a repetição no CSS. A cor do background foi definida como marrom em diversos lugares. Para algumas declarações CSS é possível declarar isto em um elemento superior na cascata e deixar a propriedade ser herdada para resolver o problema. Porém em alguns projetos, isto nem sempre é possível. Ao declarar uma variável na pseudo-classe :root, o autor do CSS pode eliminar algumas repetições utilizando uma variável.

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
  background-color:  var(--main-bg-color);
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color:  var(--main-bg-color);
  margin: 10px;
  width: 100px;
}

.five {
  background-color:  var(--main-bg-color);
}
```

```html hidden
<div>
    <div class="one"></div>
    <div class="two">Text <span class="five">- more text</span></div>
    <input class="three">
    <textarea class="four">Lorem Ipsum</textarea>
</div>
```

Isto leva ao mesmo resultado dos exemplos anteriores e ainda permite a declaração da propriedade em um só lugar.

## Hierarquia das Variáveis CSS

Propriedades customizadas herdam os valores. Isto significa que, se nenhum valor for declarado para uma propriedade customizada em um dado elemento, o valor do elemento pai é usado:

```html
<div class="one">
  <div class="two">
    <div class="three">
    </div>
    <div class="four">
    </div>
  <div>
</div>
```

com o seguinte CSS:

```css
.two { --test: 10px; }
.three { --test: 2em; }
```

Neste caso o valor de `var(--test)` são:

- para o elemento `class="two"`: `10px`
- para o elemento `class="three"`: `2em`
- para o elemento `class="four"`: `10px` (herdado do elemento pai)
- para o elemento `class="one"`: _valor inválido_, que é o valor padrão de qualquer propriedade customizada.

## Validade e valores

O conceito clássico de validade, ligado a cada propriedade, não é muito útil em relação a propriedades customizadas. Quando os valores das propriedades customizadas são analizados, o _browser_ não sabe onde a mesma será usada, logo, deve considerar quase todos os valores como _válidos_.

Infelizmente estes valores podem ser usados, via a notação funcional `var()`, em um contexto em que não façam sentido. Propriedades e variáveis customizadas podem levar a declações CSS inválidas, criando um novo conceito de _válido no momento da computação_.

## Compatibilidade com navegadores

{{Compat("css.properties.custom-property")}}

> **Note:** The custom property prefix was `var-` in the earlier spec, but later changed to `--`. Firefox 31 and above follow the new spec. ({{bug(985838)}})

## See also

- {{cssxref("--*", "Custom properties")}}
