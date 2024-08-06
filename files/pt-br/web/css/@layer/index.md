---
title: "@layer"
slug: Web/CSS/@layer
---

{{CSSRef}}

A [regra at (at-rule)](/pt-BR/docs/Web/CSS/At-rule) **`@layer`** é utilizada para definir uma _camada de cascata_, também definindo a ordem de prioridade quando temos mais de uma camada.

{{EmbedInteractiveExample("pages/tabbed/at-rule-layer.html", "tabbed-standard")}}

## Sintaxe

```css
@layer nome-da-camada {regras}
@layer nome-da-camada;
@layer nome-da-camada, nome-da-camada, nome-da-camada;
@layer {regras}
```

Sendo que:

- _nome-da-camada_
  - : Define o nome da sua camada de cascata.
- _regras_
  - : São as regras CSS utilizadas dentro da camada.

## Descrição

Adicionar regras CSS numa _camada de cascata_ possibilita aos desenvolvedores web um controle maior sobre a cascata. Qualquer estilo fora de uma camada são agrupados numa camada anônima posicionada após todas as camadas declaradas, nomeadas ou anônimas. Isso significa que quaisquer estilos declarados fora de uma camada vão sobrescrever os estilos declarados em camadas, seja qual for seu grau de especificidade.

Podemos criar uma camada de cascata com a regra at `@layer` de três maneiras.

A primeira é criando uma camada de cascata nomeada, inserindo as regras CSS dentro deste bloco.

```css
@layer utilitarios {
  .padding-sm {
    padding: 0.5rem;
  }

  .padding-lg {
    padding: 0.8rem;
  }
}
```

A segunda maneira é criando uma camada de cascata nomeada sem inserir nenhuma regra CSS, como no exemplo abaixo:

```css
@layer utilitarios;
```

Múltiplas camadas podem ser definidas de uma só vez; como, por exemplo:

```css
@layer temas, layout, utilitarios;
```

Isto pode ser útil pois a ordem inicial na qual as camadas são declaradas definem qual camada tem preferência. Assim como declarações, a última camada a ser definida terá preferência se declarações concorrentes forem encontradas em múltiplas camadas. Aplicando ao exemplo anterior, se uma regra conflitante estiver nas camadas `temas` e `utilitarios`, a regra encontrada no `utilitarios` é a vencedora e será aplicada.

A regra definida no `utilitarios` será aplicada _mesmo se tiver especificidade mais baixa_ que a regra em `tema`. Isso ocorre, pois uma vez que a ordem das camadas é estabelecida, especificidade e ordem de aparição das regras são ignoradas. Isso nos permite criar seletores CSS mais simples, já que você não precisa se preocupar tanto se um seletor CSS terá especificidade alta o suficiente para sobrescrever regras concorrentes, você só precisa verificar se a sua regra está localizada em uma camada definida posteriormente.

> [!NOTE]
> Ao declarar o nome de suas camadas e sua ordem, você pode adicionar regras CSS para a camada re-declarando seu nome. Os estilos serão incluídos na camada e a ordenação das camadas não será modificada.

A terceira opção de criação de camada são as camadas anônimas, como no exemplo abaixo:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Esta camada funciona da mesma maneira que as camadas nomeadas; porém, não poderão ser atribuídas novas regras a esta camada depois. O seu grau de preferência segue a ordem de declaração das camadas, anônimas ou não, sendo menor do que as regras definidas fora de camada.

Outra maneira de criar uma camada de cascata é utilizando o @import. Neste caso, as regras serão as da folha de estilo importada. Lembre-se que a regra at @import deve vir antes dos outros tipos de regras, com exceção das regras @charset e @layer.

```css
@import "tema.css" layer(utilitarios);
```

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

## Sintaxe formal

{{CSSSyntax}}

## Exemplos

### Exemplo simples

No exemplo seguinte, duas regras CSS são criadas. Uma para o elemento {{htmlelement("p")}} fora de qualquer layer, e outra em uma camada chamada `tipo` com o seletor `.caixa p`.

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

No exemplo seguinte, duas camadas são criadas sem regras definidas, e depois são aplicadas regras CSS para as duas camadas. A camada `base` define as propriedades `color`, `border`, `font-size` e `padding`. A camada `especial` define um valor de `color` diferente. Como o `especial` vem depois na definição das camadas, a cor que ele carrega é utilizada e o texto será mostrado com a cor `rebeccapurple`. Todas as outras regras da camada `base` ainda são aplicadas.

#### HTML

```html
<div class="item">
  Eu estou sendo mostrado com <code>color: rebeccapurple</code> pois a camada
  <code>especial</code> vem depois da camada <code>base</code>. Minha borda
  verde, font-size, e padding vem da camada <code>base</code>.
</div>
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
    padding: 0.5em;
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

- [`@import`](/pt-BR/docs/Web/CSS/@import)
- [Cascata, especificidade e herança](/pt-BR/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [`CSSLayerBlockRule`](/pt-BR/docs/Web/API/CSSLayerBlockRule)
- [`CSSLayerStatementRule`](/pt-BR/docs/Web/API/CSSLayerStatementRule)
- [`!important`](/pt-BR/docs/Web/CSS/important)
- [`revert-layer`](/pt-BR/docs/Web/CSS/revert-layer)
- [Introducing the CSS cascade](/pt-BR/docs/Web/CSS/Cascade)
- [Cascade layers](/pt-BR/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [The future of CSS: Cascade layers](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) em bram.us (2021)
