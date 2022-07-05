---
title: '@layer'
slug: Web/CSS/@layer
tags:
  - '@layer'
  - At-rule
  - CSS
  - Referência
  - Web
  - camada
  - cascata

browser-compat: css.at-rules.layer
---
{{CSSRef}}{{SeeCompatTable}}

A [regra at (at-rule)](/pt-BR/docs/Web/CSS/At-rule) **`@layer`** define uma _camada de cascata_. Dentro dessa camada, as regras CSS fazem parte da mesma cascata, dando mais controle sobre as cascatas para os desenvolvedores web.

```css
@layer utilitarios {
  /* cria uma nova camada CSS chamada "utilitarios". */
}
```

## Sintaxe

Você pode utilizar o `@layer` para criar uma camada de cascata de três maneiras. A primeira é como no exemplo acima, criando um bloco com o `@layer` e inserindo as regras CSS dentro deste bloco.

```css
@layer utilitarios {
  .padding-sm {
    padding: .5rem;
  }

  .padding-lg {
    padding: .8rem;
  }
}
```

A camada de cascata também pode ser criada com o {{cssxref("@import")}}, neste caso as regras estarão no arquivo CSS importado:

```css
@import(utilitarios.css) layer(utilitarios);
```

Você também pode criar uma camada de cascata nomeada sem atrelar à nenhum estilo. Você pode definir uma única camada:

```css
@layer utilitarios;
```

Ou, múltiplas camadas de uma vez só, como por exemplo:

```css
@layer temas, layout, utilitarios;
```

Isto pode ser útil pois a ordem inicial na qual as camadas são declaradas definem qual camada tem preferência. Assim como declarações, a última camada a ser definida terá preferência se declarações concorrentes forem encontradas em múltiplas camadas. Aplicando ao exemplo anterior, se uma regra conflitante estiver nas camadas `temas` e `utilitarios`, a regra encontrada no `utilitarios` é a vencedora e será aplicada.

A regra definida no `utilitarios` será aplicada _mesmo se tiver especificidade mais baixa_ que a regra em `tema`. Isso ocorre pois uma vez que a ordem das camadas é estabelecida, especificidade e ordem de aparição das regras são ignoradas. Isso nos permite criar seletores CSS mais simples, já que você não precisa se preocupar tanto se um seletor CSS terá especificidade alta o suficiente para sobrescrever regras concorrentes, você só precisa verificar se a sua regra está localizada em uma camada definida posteriormente.

> **Nota:** Ao declarar o nome de suas camadas e sua ordem, você pode adicionar regras CSS para a camada re-declarando seu nome. Os estilos serão incluídos na camadas e a ordenação das camadas não será modificada.

Qualquer estilo que não está atrelado à nenhuma camada são reunidos em uma mesma camada anônima que tem preferência à todas as outras camadas declaradas. Isso significa que qualquer estilo declarado fora de uma camada sobrescreve os estilos declarados em uma camada.

### Aninhando camadas

Camadas podem ser aninhadas (nested), como no exemplo abaixo:

```css
@layer framework {
  @layer layout {

  }
}
```

Para juntas as regras da camada `layout` dentro de `framework`, junte os dois nomes com um `.`.

```css
@layer framework.layout {
  p {
    margin-block: 1rem;
  }
}
```

### Camadas anônimas

Se uma camada não tiver seu nome declarado, como por exemplo:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```
Então uma camada anônima é criada. Ela funciona da mesma maneira das camadas nomeadas, porém novas regras não podem ser adicionadas à essa camada.

## Sintaxe formal

{{CSSSyntax}}

## Exemplos

### Exemplo simples

No exemplo seguinte, duas regras CSS são criadas. Uma para o elemento {{htmlelement("p")}} fora de qualquer layer, e outra dentro de uma camada chamada `tipo` com o seletor `.caixa p`.

Sem camadas, o seletor `.caixa p` teria a maior especificidade, então o texto 'Olá, mundo!' seria mostrado em verde. Mas como a camada `tipo` vem antes da camada anônima criada para agrupar todos as regras sem camada definida, o texto será mostrado roxo.

Perceba também a ordem. Mesmo se declararmos um estilo sem camada primeiro, ele ainda é aplicado _depois_ dos estilos com camada.

#### HTML

```html
<div class="caixa">
  <p>Olá, mundo!</p>
</div>
```

#### CSS

```css
p {
  color: rebeccapurple;
}

@layer tipo {
  .caixa p {
    font-weight: bold;
    font-size: 1.3em;
    color: green;
  }
}
```

#### Resultado

{{EmbedLiveSample("Simple_example")}}

### Declarando regras para camadas pré-existentes

No exemplo seguinte, duas camadas são criadas sem regras definidas, e depois são aplicadas regras CSS para as duas camadas. A camada `base` define as propriedades color, border, font-size e padding. A camada `especial` layer define um valor de color diferente. Como o `especial` vem depois na definição das camadas, a cor que ele carrega é utilizada e o texto será mostrado com a cor `rebeccapurple`. Todas as outras regras da camada `base` ainda são aplicadas.

#### HTML

```html
<div class="item">Eu estou sendo mostrado com <code>color: rebeccapurple</code>
pois a camada <code>especial</code> vem depois da camada <code>base</code>.
Minha borda verde, font-size, e padding vem da camada <code>base</code>.</div>
```

#### CSS

```css
@layer base, especial;

@layer especial {
  .item {
    color: rebeccapurple;
  }
}

@layer base {
  .item {
    color: green;
    border: 5px solid green;
    font-size: 1.3em;
    padding: .5em;
  }
}
```

#### Resultado

{{EmbedLiveSample("Assigning_rules_to_existing_layers")}}

## Especificações

{{Specifications}}

## Compatibilidade de Navegadores

{{Compat}}

## Veja também

- [The Future of CSS: Cascade Layers](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/)
