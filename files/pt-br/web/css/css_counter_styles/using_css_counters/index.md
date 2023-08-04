---
title: Using CSS counters
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
---

{{CSSRef}}

Contadores CSS são em essência, as variáveis mantidas pelo CSS cujos valores podem ser incrementado por regras do CSS para controlar quantas vezes eles são usados.Isso permite ajustar a aparência do conteúdo com base na sua colocação no documento. contadores CSS são uma implementação de [Contadores automáticos e numeração](https://www.w3.org/TR/CSS21/generate.html#counters) em CSS 2.1.

O valor de um contador é manipulado através da utilização de {{cssxref("counter-reset")}}. {{cssxref("counter-increment")}} pode ser exibido em uma página usando o `counter()` ou `counters()` função da propriedade de [`conteúdo`](/pt-BR/docs/CSS/content).

## Usando contadores

Para usar um contador, tem quer definir um valor para ele (ele é 0 default). Para adicionar o valor do contador em um elemento, use a função `counter()`. O CSS abaixo adiciona "Section \[o valor do contador]:" no início de cada elemento h3.

```css
body {
  counter-reset: section; /* Set the section counter to 0 */
}
h3::before {
  counter-increment: section; /* Increment the section counter*/
  content: "Section" counter(section) ": "; /* Display the counter */
}
```

Exemplo:

```html
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

{{ EmbedLiveSample('Using_counters', 300,200) }}

## Nesting counters

Um contador CSS pode ser especialmente útil para fazer listas descritas porque uma nova instância de um contador CSS é criado automaticamente em elementos filho . Usando a função `counters()`, uma corda pode ser inserido entre diferentes níveis de contadores aninhados. Por exemplo, esta CSS :

```css
ol {
  counter-reset: section; /* Creates a new instance of the
                                            section counter with each ol
                                            element */
  list-style-type: none;
}
li::before {
  counter-increment: section; /* Increments only this instance
                                            of the section counter */
  content: counters(section, ".") " "; /* Adds the value of all instances
                                            of the section counter separated
                                            by a ".". */
  /* if you need to support < IE8 then
                                            make sure there is no space after
                                            the ',' */
}
```

Combinado com o seguinte HTML:

```html-nolint
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item               <!-- 2     -->
    <ol>
      <li>item</li>      <!-- 2.1   -->
      <li>item</li>      <!-- 2.2   -->
      <li>item           <!-- 2.3   -->
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
          <li>item</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>item</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>item</li>          <!-- 3     -->
  <li>item</li>          <!-- 4     -->
</ol>
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item</li>          <!-- 2     -->
</ol>
```

Produz este resultado:

{{ EmbedLiveSample('Nesting_counters',400,'100%') }}

## Especificações

| Specification                                                                   | Status              | Comment |
| ------------------------------------------------------------------------------- | ------------------- | ------- |
| {{SpecName('CSS2.1', 'generate.html#generate.html#counters', 'counter-reset')}} | {{Spec2('CSS2.1')}} |         |

## Veja mais

- [counter-reset](/pt-BR/docs/CSS/counter-reset)
- [counter-increment](/pt-BR/docs/CSS/counter-increment)

_There is an additional example available at [http://www.mezzoblue.com/archives/20.../counter_intu/](http://www.mezzoblue.com/archives/2006/11/01/counter_intu/). This blog entry was posted on November 01, 2006, but appears to be accurate._
