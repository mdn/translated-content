---
title: <textarea>
slug: Web/HTML/Element/textarea
---

{{HTMLSidebar}}

O **elemento** HTML `<textarea>` representa um controle de edição para uma caixa de texto, útil quando você quer permitir ao usuário informar um texto extenso em formato livre, como um comentário ou formulário de retorno.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

Os exemplos acima demonstram vários recursos do `<textarea>`. O primeiro exemplo mostra o uso mais simples, com apenas um `id` atributo para permitir que o`<textarea>` estar associado a um {{htmlelement("label")}} elemento para fins de acessibilidade e um `name` atributo para definir o nome do ponto de dados associado enviado ao servidor quando o formulário é enviado.

O segundo exemplo mostra alguns recursos mais complexos:

- O `rows` e `cols` atributos permitem especificar um tamanho exato para o `<textarea>` pegar. Definir isso é uma boa idéia para manter a consistência, pois os padrões do navegador podem ser diferentes.
- `maxlength` especifica um número máximo de caracteres que o `<textarea>` tem permissão para conter. Você também pode definir um comprimento mínimo considerado válido usando o `minlength` atributo e especifique que o `<textarea>` não enviará (e é inválido) se estiver vazio, usando o`required` atributo. Isso fornece o `<textarea>` com validação simples, que é mais básica que os outros elementos do formulário (por exemplo, você não pode fornecer regexs específicas para validar o valor usando o método `pattern` atributo, como você pode com o {{htmlelement("input")}} elemento).
- `wrap` especifica o comportamento de quebra automática do texto quando ele atinge a borda do `<textarea>`.
- Se você deseja conteúdo padrão para o seu `<textarea>`, você o insere entre as tags de abertura e fechamento. `<textarea>` não suporta o `value` atributo.

O `<textarea>` O elemento também aceita vários atributos comuns para formar `<input>`s, tal como`autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly`, e `required`.

## Atributos

Este elemento inclui os atributos globais.

- {{htmlattrdef("autocapitalize")}} {{non-standard_inline}}

  - : Este é um atributo não padrão suportado pelo WebKit no iOS (portanto, quase todos os navegadores executados no iOS, incluindo Safari, Firefox e Chrome), que controla se e como o valor do texto deve ser automaticamente capitalizado quando é inserido / editado pelo do utilizador. Os valores não preteridos estão disponíveis no iOS 5 e posterior. Os valores possíveis são:

    - `none`: Desativa completamente a capitalização automática.
    - `sentences`: Coloque automaticamente em maiúscula a primeira letra das frases.
    - `words`: Coloque em maiúscula automaticamente a primeira letra das palavras.
    - `characters`: Colocar em maiúscula automaticamente todos os caracteres.
    - `on`: {{deprecated_inline()}} Descontinuado desde o iOS 5.
    - `off`: {{deprecated_inline()}} Descontinuado desde o iOS 5.

- {{htmlattrdef("autocomplete")}}

  - : Este atributo indica se o valor do controle pode ser preenchido automaticamente pelo navegador. Os valores possíveis são:

    - `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
    - `on`: O navegador pode concluir automaticamente o valor com base nos valores inseridos pelo usuário durante os usos anteriores.

    Se o `autocomplete` atributo não está especificado em um `<textarea>` elemento, o navegador usa o elemento `autocomplete` valor do atributo `<textarea>` proprietário do formulário do elemento. O proprietário do formulário é o {{HTMLElement("form")}} elemento que este`<textarea>` elemento é um descendente ou o elemento de formulário cuja `id` é especificado pelo `form` atributo do elemento de entrada. Para mais informações, consulte o [`autocomplete`](/pt-BR/docs/Web/HTML/Element/form#autocomplete) atribuno no {{HTMLElement("form")}}.

- {{ htmlattrdef("autofocus") }}
  - : Esse atributo booleano permite especificar que um controle de formulário tenha foco de entrada quando a página for carregada. Somente um elemento associado ao formulário em um documento pode ter esse atributo especificado.
- {{ htmlattrdef("cols") }}
  - : A largura visível do controle de texto, em larguras médias de caracteres. Se for especificado, deve ser um número inteiro positivo. Se não for especificado, o valor padrão é 20.
- {{ htmlattrdef("disabled") }}
  - : Esse atributo booleano indica que o usuário não pode interagir com o controle. Se esse atributo não for especificado, o controle herdará sua configuração do elemento que contém, por exemplo {{ HTMLElement("fieldset") }}; se não houver elemento contendo quando o `disabled` atributo estiver definido, o controle está ativado.
- {{ htmlattrdef("form") }}
  - : O elemento do formulário que o `<textarea>` elemento está associado (seu "proprietário do formulário"). O valor do atributo deve ser o `id` de um elemento de formulário no mesmo documento. Se este atributo não for especificado, o atributo `<textarea>` O elemento deve ser um descendente de um elemento do formulário. Este atributo permite que você coloque`<textarea>` elementos em qualquer lugar do documento, não apenas como descendentes de elementos do formulário.
- {{ htmlattrdef("maxlength") }}
  - : O número máximo de caracteres (pontos de código unicode) que o usuário pode inserir. Se esse valor não for especificado, o usuário poderá inserir um número ilimitado de caracteres.
- {{ htmlattrdef("minlength") }}
  - : O número mínimo de caracteres (pontos de código unicode) exigidos pelo usuário.
- {{ htmlattrdef("name") }}
  - : O nome do controle.
- {{ htmlattrdef("placeholder") }}

  - : Uma dica para o usuário sobre o que pode ser inserido no controle. Retornos de carro ou feeds de linha no texto do espaço reservado devem ser tratados como quebras de linha ao renderizar a dica.

    > **Note:** **Nota: Os espaços reservados devem ser usados apenas para mostrar um exemplo do tipo de dados que deve ser inserido em um formulário; eles não substituem uma adequada** {{HTMLElement("label")}} elemento vinculado à entrada. Veja [Labels e placeholders](/pt-BR/docs/Web/HTML/Element/input#labels_and_placeholders) para uma explicação completa.

- {{ htmlattrdef("readonly") }}
  - : Esse atributo booleano indica que o usuário não pode modificar o valor do controle. Ao contrário do `disabled` atributo, o`readonly` O atributo não impede o usuário de clicar ou selecionar no controle. O valor de um controle somente leitura ainda é enviado com o formulário.
- {{ htmlattrdef("required") }}
  - : Este atributo especifica que o usuário deve preencher um valor antes de enviar um formulário.
- {{ htmlattrdef("rows") }}
  - : O número de linhas de texto visíveis para o controle.
- {{ htmlattrdef("spellcheck") }}

  - : Especifica se o `<textarea>`está sujeito a verificação ortográfica pelo navegador / SO subjacente. o valor pode ser:

    - `true`: Indica que o elemento precisa ter sua ortografia e gramática verificadas.
    - `default` :Indica que o elemento deve agir de acordo com um comportamento padrão, possivelmente com base no próprio elemento pai `spellcheck` valor.
    - `false` : Indica que o elemento não deve ter verificação ortográfica.

- {{ htmlattrdef("wrap") }}

  - : Indica como o controle quebra o texto. Os valores possíveis são:

    - `hard`: O navegador insere automaticamente quebras de linha (CR + LF) para que cada linha não tenha mais que a largura do controle; a `cols` O atributo também deve ser especificado para que isso entre em vigor.
    - `soft`: O navegador garante que todas as quebras de linha no valor consistam em um par CR + LF, mas não insira nenhuma quebra de linha adicional.
    - `off` {{non-standard_inline}}: Como `soft` mas muda a aparência para `white-space: pre` segmentos de linha que excedam `cols` não estão embrulhados e os `<textarea>` torna-se rolável horizontalmente.

    Se este atributo não for especificado, `soft` é o seu valor padrão.

## Estilo com CSS

`<textarea>` é um elemento substituído - possui dimensões intrínsecas, como uma imagem rasterizada. Por padrão, sua{{cssxref("display")}} o valor é bloco. Em comparação com outros elementos de formulário, é relativamente fácil de estilizar, com seu modelo de caixa, fontes, esquema de cores etc. sendo facilmente manipuláveis usando CSS comum.

[O estilo de formulários HTML fornece algumas dicas úteis sobre estilo](/pt-BR/docs/Learn/HTML/Forms/Styling_HTML_forms)`<textarea>`s.

### Inconsistência da linha de base

A especificação HTML não define onde a linha de base de um `<textarea>` ou seja, navegadores diferentes o definem em posições diferentes. Para Gecko, o `<textarea>` linha de base é definida na linha de base da primeira linha da primeira linha da área de texto, em outro navegador pode ser definida na parte inferior da `<textarea>`caixa. Não use {{cssxref("vertical-align")}}`: baseline` nele; o comportamento é imprevisível

### Controlando se uma área de texto é redimensionável

Na maioria dos navegadores, `<textarea>`s são redimensionáveis - você notará a alça de arrasto no canto direito, que pode ser usada para alterar o tamanho do elemento na página. Isso é controlado pelo {{ cssxref("resize") }} Propriedade CSS - o redimensionamento está ativado por padrão, mas você pode desativá-lo explicitamente usando um`resize` valor de`none`:

```css
textarea {
  resize: none;
}
```

### Estilo de valores válidos e inválidos

Valores válidos e inválidos de um `<textarea>` elemento (por exemplo, dentro e fora dos limites definidos por`minlength`, `maxlength`, ou`required`) pode ser destacado usando o {{cssxref(":valid")}} e{{cssxref(":invalid")}} pseudo-classes. Por exemplo, para atribuir à sua área de texto uma borda diferente, dependendo se é válida ou inválida:

```css
textarea:invalid {
  border: 2px dashed red;
}

textarea:valid {
  border: 2px solid lime;
}
```

## Exemplo

### Exemplo básico

O exemplo a seguir mostra uma área de texto muito simples, com um número definido de linhas e colunas e algum conteúdo padrão.

```html
<textarea name="textarea" rows="10" cols="50">Write something here</textarea>
```

{{ EmbedLiveSample('Basic_example','600','150') }}

### Comprimento mínimo e máximo

Este exemplo tem um número mínimo e máximo de caracteres - de 10 e 20, respectivamente. Experimente e veja.

```html
<textarea name="textarea" rows="5" cols="30" minlength="10" maxlength="20">
Write something here</textarea
>
```

{{ EmbedLiveSample('Min_and_max_length','600','80') }}

Observe que `minlength` não impede o usuário de remover caracteres para que o número digitado ultrapasse o mínimo, mas faz com que o valor digitado no `<textarea>` invalide.Observe também que, mesmo se você tiver um `minlength` conjunto de valores (3, por exemplo), um campo vazio `<textarea>` ainda é considerado válido, a menos que você também tenha o `required` conjunto de atributos.

### Placeholder

Este exemplo tem um espaço reservado definido. Observe como ele desaparece quando você começa a digitar na caixa.

```html
<textarea
  name="textarea"
  rows="5"
  cols="30"
  placeholder="Comment text."></textarea>
```

{{ EmbedLiveSample('Placeholder','600','80') }}

> **Note:** **Nota: Os espaços reservados devem ser usados apenas para mostrar um exemplo do tipo de dados que deve ser inserido em um formulário; eles não substituem uma adequada**{{HTMLElement("label")}} elemento vinculado à entrada. Veja [Labels e placeholders](/pt-BR/docs/Web/HTML/Element/input#labels_and_placeholders) para uma explicação completa.

### Desativado e somente leitura

Este exemplo mostra dois `<textarea>`s — um dos quais é `disabled`, e o outro é `readonly`.Brinque com os dois e verá a diferença de comportamento - O `disabled` elemento não é selecionável de forma alguma (e seu valor não é enviado), enquanto o elemento `readonly` é selecionável e seu conteúdo copiável (e seu valor é enviado); você simplesmente não pode editar o conteúdo.

```html
<textarea name="textarea" rows="5" cols="30" disabled>
I am a disabled textarea</textarea
>
<textarea name="textarea" rows="5" cols="30" readonly>
I am a readonly textarea</textarea
>
```

{{ EmbedLiveSample('Disabled_and_readonly','600','80') }}

## Resumo técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/HTML/Content_categories">Categorias de conteúdo</a>
      </th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >Elemento associado ao formulário de conteúdo de fluxo, conteúdo de
          frases, conteúdo interativo, listado, rotulável, redefinível e
          submetível a envio.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>Text</td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>
        <strong
          style="
            font-size: 1rem;
            font-style: inherit;
            font-weight: 700;
            letter-spacing: -0.00278rem;
          "
          >Parents permitido</strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Funções ARIA permitidas</p></th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTextAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificacões

| Specificação                                                                       | Status                   | Comentário |
| ---------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'forms.html#the-textarea-element', '&lt;textarea&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'forms.html#the-textarea-element', '&lt;textarea&gt;')}}   | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.7', '&lt;textarea&gt;')}}         | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.textarea")}}

## Veja também

Outros elementos relacionados ao formulário:

- {{ HTMLElement("form") }}
- {{ HTMLElement("button") }}
- {{ HTMLElement("datalist") }}
- {{ HTMLElement("legend") }}
- {{ HTMLElement("label") }}
- {{ HTMLElement("select") }}
- {{ HTMLElement("optgroup") }}
- {{ HTMLElement("option") }}
- {{ HTMLElement("input") }}
- {{ HTMLElement("keygen") }}
- {{ HTMLElement("fieldset") }}
- {{ HTMLElement("output") }}
- {{ HTMLElement("progress") }}
- {{ HTMLElement("meter") }}
