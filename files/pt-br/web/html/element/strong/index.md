---
title: <strong>
slug: Web/HTML/Element/strong
---

```
O elemento HTML <strong> dá ao texto uma forte importância, e é tipicamente mostrado em negrito.
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/HTML/Content_categories"
          >Categorias do conteúdo</a
        >
      </th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >Flux content</a
        >,<a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content">
          Phrasing content</a
        >, conteúdo palpável.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>Nenhuma, deve ter uma tag de início e uma tag de encerramento.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Qualquer elemento que aceite
        <a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >, ou qualquer elemento que aceite
        <a href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Qualquer um</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>
        {{domxref("HTMLElement")}} Até Gecko 1.9.2 (Firefox 4)
        inclusive, Firefox implementa a interface
        <a href="/pt-BR/docs/DOM/span"><code>HTMLSpanElement</code></a> para
        este elemento.
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui apenas os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

## Notas de uso

O elemento `<strong>` é utilizado em conteúdos que são de "grande importância", incluindo coisas de urgentes (como alertas). Podem ser sentenças que são de grande importância para toda a página, ou, você pode meramente tentar pontuar que algumas palavras são de grande importância, comparado ao conteúdo próximo.

Tipicamente, estes elementos são renderizados por padrão, usando fontes em negrito. Contudo, ele não deve ser usado para simplesmente aplicar o estilo negrito; use o CSS {{cssxref("font-weight")}} para este propósito. Use o elemento {{HTMLElement("b")}} para chamar a atenção para certos textos sem a indicação de grande nível de importância. Use o elemento {{HTMLElement("em")}} para marcar textos que tem necessitam de ênfase.

Outro uso aceitavel para `<strong>` é denotado com o rótulo (label) de parágrafos, que representa notas ou avisos, dentro do texto da página.

### Bold vs. Strong

Muitas vezes é confuso para novos desenvolvedores porque há tantas maneiras de expressar a mesma coisa em um website renderizado. Bold e Strong são talvez um dos casos mais comuns. Porque usar \<strong>\</strong> vs \<b>\</b>? Você precisa digitar muito mais ao usar strong e ela produz o mesmo resultado, certo?

Talvez não; strong é um estado lógico, e bold é um estado físico. Estados lógicos separam apresentação do conteúdo, e ao fazer isso permitem que ele seja expresso de várias maneiras diferentes. Possivelmente em vez de renderizar um texto como negrito você queira renderizá-lo vermelho, ou num tamanho diferente, ou sublinhado, ou seja lá o que for. Faz mais sentido mudar as propriedades de apresentação de strong do que bold. Isto porque bold é um estado físico; não há separação entre a apresentação e o conteúdo, e fazer com que bold faça qualquer outra coisa diferente de deixar o texto em negrito seria confuso e ilógico.

É importante notar que \<b>\</b> tem outros usos, quando se quer chamar atenção sem aumentar a importância.

### Emphasis vs. Strong

Enquanto no HTML4, Strong simplesmente indicava uma ênfase mais forte, em HTML5, o elemento é descrito como representando "uma forte importância para o seu conteúdo." Esta é uma importante distinção a se fazer. Enquanto Emphasis é usado para alterar o significado de uma sentença ("Eu _amo_ cenouras" vs. "Eu amo _cenouras_"), Strong é usado para dar mais importância a porções de uma sentença (e.g., "**Cuidado!** Isso é **muito perigoso.**"). Ambos Strong e Emphasis podem ser aninhados para aumentar o grau relativo de importância ou reforçar ênfase, respectivamente.

## Exemplo

### Exemplo básico

```html
<p>
  Ao fazer x é <strong>imperativo</strong> que se faça y antes de prosseguir.
</p>
```

### Resultado

Ao fazer x é **imperativo** que se faça y antes de prosseguir.

## Especificações

| Especificação                                                                               | Status                   | Comentário |
| ------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-strong-element', '&lt;strong&gt;')}}          | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-strong-element', '&lt;strong&gt;')}} | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'struct/text.html#edef-STRONG', '&lt;strong&gt;')}}                  | {{Spec2('HTML4.01')}}    |            |

## Navegadores Compatíveis

{{Compat("html.elements.strong")}}

## Veja também

- [HTML bold element](/pt-BR/docs/HTML/Element/b)

{{HTMLSidebar}}
