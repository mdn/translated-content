---
title: <ol>
slug: Web/HTML/Element/ol
---

## Sumário

O **Elemento HTML \<ol>** (ou _Elemento HTML de lista ordenada_) representa uma lista de itens ordenados. De forma característica esses itens ordenados em uma lista são mostrados com uma contagem que os precede, que pode ser de qualquer tipo, como numerais, letras, algarismos romanos, ou simples símbolos. Esse modelo numerado não é definido na descrição html da página, mas na folha de estilos CSS associada, pela propriedade {{cssxref("list-style-type")}}.

Não há limitação para a profundidade e a imbricação das listas definidas com os elementos {{HTMLElement("ol")}} e {{HTMLElement("ul")}}.

> **Nota:** Ambos os elementos {{HTMLElement("ol")}} e {{HTMLElement("ul")}}, representam uma lista de itens. Diferem porque, com o elemento {{HTMLElement("ol")}}, a ordem é significativa. Como regra de ouro para determinar qual deles usar, tente mudar a ordem dos itens da lista; se a significação for alterada, o elemento {{HTMLElement("ol")}} deve ser utilizado, senão o elemento {{HTMLElement("ul")}} é adequado.

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_[Flutuante](/pt-BR/docs/HTML/Content_categories#Flow_content) e no caso dos elementos filhos de `<ol>` incluirem pelo menos um elemento de conteúdo {{HTMLElement("li")}} evidente.
- _Conteúdo permitido_ Zero ou mais elementos {{HTMLElement("li")}}
- _Omissão de etiqueta (Tag)_ {{no_tag_omission}}
- _Elementos pai permitidos_ Qualquer elemento que aceite [conteúdo flutuante](/pt-BR/docs/HTML/Content_categories#flow_content).
- _Interface DOM_ {{domxref("HTMLOListElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("compact")}} {{Deprecated_inline}}

  - : Este atributo boleano sugere que a lista deve ser renderizada em um estilo compacto. A interpretação deste atributo depende do perfil de navegação (_user agent_) e não funciona em todos os navegadores.

    > **Nota:** Não utilize este atributo, pois ele se tornou obsoleto. O elemento {{HTMLElement("ol")}} deve ser estilizado usando [CSS](/pt-BR/docs/CSS). Para dar um efeito semelhante ao do atributo compacto, a propriedade [CSS](/pt-BR/docs/CSS) {{cssxref("line-height")}} pode ser utilizada com o valor de 80%.

- {{htmlattrdef("reversed")}}
  - : Este atributo boleano especifica que as partes desta lista serão especificadas em ordem reversa, isto é, a menos importante será listada primeiro.
- {{htmlattrdef("start")}}

  - : Este atributo inteiro especifica o valor inicial para a numeração dos itens da lista. Embora o tipo de ordenação dos elementos possa ser com algarismos romanos, tal como XXXI, ou letras, o valor inicial sempre é representado como um inteiro. Para iniciar a contagem a partir da letra "C", utilize \<ol start="3">.

    > **Nota:** Este atributo, obsoleto na HTML4, foi reintroduzido na HTML5.

- {{htmlattrdef("type")}}

  - : Indica o tipo de numeração:

    - `'a'` indica letras minúsculas,
    - `'A'` indica letras maiúsculas,
    - `'i'` indica algarismos romanos minúsculos,
    - `'I'` indica algarismos romanos maiúsculos,
    - e `'1'` indica números (padrão).

    O tipo de marcação é usado na lista inteira, a menos que um atributo [`type`](/pt-BR/docs/Web/HTML/Element/li#type) diferente seja utilizado dentro do elemento {{HTMLElement("li")}}.

    > **Nota:** Este atributo, obsoleto na HTML4, foi reintroduzido na HTML5. A menos que o valor do número na lista seja importante, a propriedade CSS {{cssxref("list-style-type")}} deve ser usada em seu lugar.

## Exemplos

### Exemplo simples

```html
<ol>
  <li>primeiro item</li>
  <li>segundo item</li>
  <li>terceiro item</li>
</ol>
```

A saída HTML acima será:

1. primeiro item
2. segundo item
3. terceiro item

### Usando o atributo _start_

```html
<ol start="7">
  <li>primeiro item</li>
  <li>segundo item</li>
  <li>terceiro item</li>
</ol>
```

### Listas aninhadas

```html
<ol>
  <li>primeiro item</li>
  <li>
    segundo item
    <!-- Veja que a tag de fechamento </li> não é colocada aqui! -->
    <ol>
      <li>segundo item primeiro subitem</li>
      <li>segundo item segundo subitem</li>
      <li>segundo item terceiro subitem</li>
    </ol>
  </li>
  <!-- Aqui está a tag de fechamento </li> -->
  <li>terceiro item</li>
</ol>
```

A saída HTML acima será:

1. primeiro item
2. segundo item

   1. segundo item primeiro subitem
   2. segundo item segundo subitem
   3. segundo item terceiro subitem

3. terceiro item

### \<ol> e \<ul> aninhados

```html
<ol>
  <li>primeiro item</li>
  <li>
    segundo item
    <!-- Observe que a tag de fechamento </li> não é colocada aqui! -->
    <ul>
      <li>segundo item primeiro subitem</li>
      <li>segundo item segundo subitem</li>
      <li>segundo item terceiro subitem</li>
    </ul>
  </li>
  <!-- Aqui está a tag de fechamento </li> -->
  <li>terceiro item</li>
</ol>
```

A saída HTML acima será:

1. primeiro item
2. segundo item

   - segundo item primeiro subitem
   - segundo item segundo subitem
   - segundo item terceiro subitem

3. terceiro item

## Especificações

| Especificação                                                                         | Situação                 | Observação |
| ------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-ol-element', '&lt;ol&gt;')}}     | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', "grouping-content.html#the-ol-element", "HTMLOListElement")}} | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'struct/lists.html#h-10.2', '&lt;ol&gt;')}}                    | {{Spec2('HTML4.01')}}    |            |

## Compatibilidede em navegadores

{{Compat("html.elements.ol")}}

## Veja também

- Outros elementos HTML relacionados à lista: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}} e o obsoleto {{HTMLElement("dir")}};
- Propriedades CSS que podem ser especialmente úteis para determinar o modelo do elemento`<ol>`:

  - a propriedade {{cssxref("list-style")}}, conveniente para escolher a forma como os ordinais são exibidos,
  - [contadores CSS](/pt-BR/docs/CSS_Counters), útil para gerenciar listas complexas aninhadas,
  - a propriedade {{cssxref("line-height")}}, proficiente para simular o atributo obsoleto [`compact`](/pt-BR/docs/Web/HTML/Element/ol#compact),
  - a propriedade {{cssxref("margin")}}, aplicável para controlar a indentação da lista.

{{HTMLSidebar}}
