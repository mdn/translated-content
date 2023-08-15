---
title: <input>
slug: Web/HTML/Element/input
---

O **elemento HTML `<input>`** é usado para criar controles interativos para formulários baseados na web para receber dados do usuário. A semântica de um `<input>` varia consideravelmente dependendo do valor de seu atributo `type`.

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Categorias_de_conteúdo)_ [Conteúdo de fluxo](/pt-BR/docs/HTML/Categorias_de_conteúdo#Conteúdo_de_fluxo), listado, enviável, resetável, elemento associado a formulário, [conteúdo fraseado](/pt-BR/docs/HTML/Categorias_de_conteúdo#Conteúdo_fraseado).
  Se o atributo [`type`](/pt-BR/docs/Web/HTML/Element/input#type) não tiver o valor `hidden`, elemento rotulável, conteúdo palpável.
- _Conteúdo permitido_ Nenhum, este é um {{Glossary("elemento vazio")}}.
- _Omissão de tags_ Deve ter uma tag de abertura e não deve ter uma tag de fechamento.
- _Elementos pais permitidos_ Qualquer elemento que aceite [conteúdo fraseado](/pt-BR/docs/HTML/Categorias_de_conteúdo#Conteúdo_fraseado).
- _Interface do DOM_ {{domxref("HTMLInputElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Atributos_globais).

- {{htmlattrdef("type")}}

  - : O tipo de controle a ser exibido. O tipo padrão é **text**, se este atributo não for especificado. Os valores possíveis são:

    - `button`: Um botão sem comportamento padrão.
    - `checkbox`: Uma caixa de marcação. Você deve usar o atributo **value** para definir o valor enviado por este item. Use o atributo **checked** para indicar se o item está selecionado por padrão. Você também pode usar o atributo **indeterminate** para indicar que a caixa de marcação está em um estado indeterminado (na maioria das plataformas, isso desenha uma linha horizontal cortando a caixa).
    - `color`: Um controle para especificar cores. A interface de um seletor de cores não tem nenhuma funcionalidade obrigatória a não ser aceitar cores simples em texto ([mais informações — em inglês](<https://www.w3.org/TR/html5/forms.html#color-state-(type=color)>)).
    - `date`: Um controle para inserir uma data (ano, mês e dia, sem horário).
    - `datetime`: Um controle para inserir data e horário (hora, minuto, segundo e fração de segundo) baseado no fuso horário UTC.
    - `datetime-local`: Um controle para inserir data e horário, sem fuso horário.
    - `email`: Um campo para editar um endereço de e-mail. O valor do campo é validado para estar vazio ou ter um único endereço de e-mail válido antes de ser enviado. As pseudoclasses CSS {{cssxref(":valid")}} e {{cssxref(":invalid")}} são aplicadas apropriadamente.
    - `file`: Um controle que permite ao usuário selecionar um arquivo. Use o atributo**accept** para definir os tipos de arquivo que o controle pode selecionar.
    - `hidden`: Um controle que não é exibido mas cujo valor é enviado ao servidor.
    - `image`: Um botão gráfico para enviar o formulário. Você deve usar o atributo **src** para definir a fonte da imagem e o atributo **alt** para definir um texto alternativo. Você pode usar os atributos **height** e **width** para definir o tamanho da imagem em pixels.
    - `month`: Um controle para inserir mês e ano, sem fuso horário.
    - `number`: Um controle para inserir um número de ponto flutuante.
    - `password`: Um campo de texto com uma só linha cujo valor é obscurecido. Use o atributo **maxlength** para especificar o comprimento máximo do valor que pode ser inserido.
    - `radio`: Um botão de escolha. Você deve usar o atributo **value** para definir o valor a ser enviado por este item. Use o atributo **checked** para indicar se este item deve estar selecionado por padrão. Botões de escolha que têm o mesmo valor para o atributo **name** estão no mesmo "grupo de botões de escolha"; apenas um botão de escolha no grupo pode estar selecionado de cada vez..
    - `range`: Um controle para inserir um número cujo valor exato não é importante. Este tipo de controle usa os seguintes valores padrão se os atributos correspondentes não forem especificados:

      - `min`: 0
      - `max`: 100
      - `value`: `min` + (`max`-`min`)/2, ou `min` se `max` for menos que `min`
      - `step`: 1

    - `reset`: Um botão que faz o conteúdo do formulário voltar a ter seus valores padrão.
    - `search`: Um campo de texto com uma só linha para digitar termos de busca; quebras de linha são automaticamente removidas do valor entrado.
    - `submit`: Um botão que envia o formulário.
    - `tel`: Um controle para inserir um número de telefone; quebras de linha são automaticamente removidas do valor entrado, mas nenhuma outra sintaxe é imposta. Você pode usar atributos como **pattern** e **maxlength** para restringir os valores inseridos no controle. As pseudoclasses CSS {{cssxref(":valid")}} e {{cssxref(":invalid")}} são aplicadas apropriadamente.
    - `text`: Um campo de texto com uma só linha; quebras de linha são automaticamente removidas do valor entrado.
    - `time`: Um controle para inserir um horário sem fuso horário.
    - `url`: Um campo para editar uma URL. O valor inserido é validado para ser vazio ou uma URL absoluta válida antes de ser enviado. Quebras de linha e espaços em branco antes e após o valor inserido são automaticamente removidos. Você pode usar atributos como **pattern** e **maxlength** para restringir os valores inseridos no controle. As pseudoclasses CSS {{cssxref(":valid")}} e {{cssxref(":invalid")}} são aplicadas apropriadamente.
    - `week`: Um controle para inserir uma data consistindo de ano da semana e número da semana sem fuso horário.

- {{htmlattrdef("accept")}}

  - : Se o valor do atributo **type** for `file`, este atributo indica quais tipos de arquivo o servidor aceita; caso contrário, este atributo é ignorado. O valor deve ser uma lista de especificadores de tipo únicos separados por vírgula:

    - Uma extensão de arquivo começando com o caractere STOP (U+002E). (Exemplo: ".jpg,.png,.doc")
    - Um tipo MIME válido sem extensões
    - `audio/*` representando arquivos de som
    - `video/*` representando arquivos de vídeo
    - `image/*` representando arquivos de imagem

- {{htmlattrdef("mozactionhint")}} {{non-standard_inline}}
  - : Especifica uma "dica de ação" usada para determinar como rotular a tecla Enter em dispositivos móveis com teclados virtuais. Os valores suportados são `go`, `done`, `next`, `search` e `send`; estes valores são automaticamente mapeados para o texto apropriado (maiúsculas e minúsculas não são diferenciadas).
- {{htmlattrdef("autocapitalize")}} {{non-standard_inline}}

  - : Este é um atributo não padronizado usado pelo iOS Safari Mobile que controla se e como o texto deveria ser automaticamente capitalizado conforme o usuário insere/edita. Os valores não obsoletos estão disponíveis no iOS 5 e posteriores. Os valores possíveis são:

    - `none`: Desabilitar completamente a capitalização automática.
    - `sentences`: Capitalizar automaticamente a primeira letra das frases.
    - `words`: Capitalizar automaticamente a primeira letra das palavras.
    - `characters`: Capitalizar automaticamente todas as letras.
    - `on`: {{deprecated_inline()}} Obsoleto desde o iOS 5.
    - `off`: {{deprecated_inline()}} Obsoleto desde o iOS 5.

- {{htmlattrdef("autocomplete")}}

  - : Este atributo indica se o valor do controle pode ser completado automaticamente pelo navegador. Este atributo é ignorado se o valor do atributo **type** é `hidden`, `password`, `checkbox`, `radio`, `file` ou um tipo de botão (`button`, `submit`, `reset`, `image`). Os valores possíveis são:

    - `off`: O usuário deve inserir explicitamente um valor neste campo a cada uso, ou o documento implementa seu próprio método de autocompletar; o navegador não completa a entrada automaticamente.
    - `on`: O navegador pode completar automaticamente o valor baseado em valores que o usuário inseriu no passado.

    Se o atributo **autocomplete** não está especificado num elemento `<input>`, o navegador usa o valor do atributo **autocomplete** do formulário dono do `<input>`. O formulário dono deste `<input>` é o elemento `<form>` que contém este `<input>` ou o elemento `<form>` cujo **id** é referenciado pelo atributo **form** do elemento `<input>`. Para mais informações, veja o atributo [`autocomplete`](/pt-BR/docs/Web/HTML/Element/form#autocomplete) no elemento {{HTMLElement("form")}}.

    O atributo **autocomplete** também controla se o Firefox vai, ao contrário de outros navegadores, [persistir o estado dinâmico de desabilitado e marcado (se aplicável)](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de um {{HTMLElement("input")}} entre carregamentos de página. A funcionalidade de persistir é habilitada por padrão. Definir o valor do atributo **autocomplete** para `off` desabilita esta funcionalidade; isto funciona mesmo quando o atributo **autocomplete** não se aplica ao {{HTMLElement("input")}} por causa de seu **type**. Veja [Erro do Firefox 654072](https://bugzil.la/654072).

- {{htmlattrdef("autocorrect")}} {{non-standard_inline}}

  - : Este é um atributo não padronizado suportado pelo Safari que é usado para controle se a correção automática deveria ser habilitada quando o usuário entra/edita o texto do {{HTMLElement("input")}}. Os valores possíveis são:

    - `on`: Habilita correção automática
    - `off`: Desabilita correção automática

- {{htmlattrdef("autofocus")}}
  - : Este atributo booleano permite que você especifique que um controle de formulário deve ter o foco de entrada de dados assim que a página carrega, a não ser que o usuário sobrescreva este comportamento digitando em um controle diferente, por exemplo. Apenas um elemento de formulário em um documento pode ter o atributo **autofocus**, que é booleano. Este atributo não pode ser aplicado se o atributo **type** estiver definido como `hidden` (isto é, você não pode colocar automaticamente o foco em um controle escondido).
- {{htmlattrdef("autosave")}}
  - : Este atributo deve ser definido com um valor único. Se o valor do atributo **type** for `search`, termos de busca anteriores serão persistidos no menu entre carregamentos de página.
- {{htmlattrdef("checked")}}

  - : Quando o valor do atributo **type** é `radio` ou `checkbox`, a presença deste atributo booleano indica que o controle é selecionado por padrão; caso contrário, este atributo é ignorado.

    O Firefox vai, por padrão, ao contrário de outros navegadores, [persistir o estado dinâmico de marcado](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de um {{HTMLElement("input")}} entre carregamentos de página. Use o atributo [`autocomplete`](/pt-BR/docs/Web/HTML/Element/input#autocomplete) para controlar esta funcionalidade.

- {{htmlattrdef("disabled")}}

  - : Este atributo booleano indica que o controle de formulário não está disponível para interação. Em particular o evento `click` [não será disparado](https://html.spec.whatwg.org/multipage/forms.html#enabling-and-disabling-form-controls:-the-disabled-attribute) em controles desabilitados. Além disso, o valor de um controle desabilitado não é enviado com o formulário.

    O Firefox vai, por padrão, ao contrário de outros navegadores, [persistir o estado dinâmico de desabilitado](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de um {{HTMLElement("input")}} entre carregamentos de página. Use o atributo [`autocomplete`](/pt-BR/docs/Web/HTML/Element/input#autocomplete) para controlar esta funcionalidade.

- {{htmlattrdef("form")}}
  - : O elemento `<form>` ao qual o elemento `<input>` está associado (seu _formulário dono_). O valor do atributo deve ser um **id** de um elemento {{HTMLElement("form")}}. Este atributo permite que você coloque elementos `<input>` em qualquer lugar num documento, não apenas como descendentes de seus elementos `<form>`. Um `<input>` só pode estar associado a um único formulário.
- {{htmlattrdef("formaction")}}
  - : A URI de um programa que processa a informação enviada pelo elemento, se ele for um botão ou uma imagem de envio de formulário. Se especificado, ele sobrescreve o atributo [`action`](/pt-BR/docs/Web/HTML/Element/form#action) do formulário dono do elemento.
- {{htmlattrdef("formenctype")}}

  - : Se o elemento for um botão ou uma imagem de envio de formulário, este atributo especifica o tipo de conteúdo que deve ser usado para enviar o formulário para o servidor. Os valores possíveis são:

    - `application/x-www-form-urlencoded`: O valor padrão se o atributo não for especificado.
    - `multipart/form-data`: Use este valor se você estiver usando um elemento {{HTMLElement("input")}} com o atributo [`type`](/pt-BR/docs/Web/HTML/Element/input#type) definido como `file`.
    - `text/plain`

    Se este atributo for especificado, ele sobrescreve o atributo [`enctype`](/pt-BR/docs/Web/HTML/Element/form#enctype) do formulário dono do elemento.

- {{htmlattrdef("formmethod")}}

  - : Se o elemento for um botão ou uma imagem de envio de formulário, este atributo especifica o método HTTP que o navegador deve usar para enviar o formulário. Os valores possíveis são:

    - `post`: Os dados do formulário são incluídos no corpo do formulário e enviados para o servidor.
    - `get`: Os dados do formulário são acrescentados ao URI do atributo **form**, com um '?' como separador, e o URI resultante é enviado ao servidor. Use este método quando o formulário não tem efeitos colaterais e contém somente caracteres ASCII.

    Se especificado, este atributo sobrescreve o atributo [`method`](/pt-BR/docs/Web/HTML/Element/form#method) do formulário dono do elemento.

- {{htmlattrdef("formnovalidate")}}
  - : Se o elemento for um botão ou uma imagem de envio de formulário, este atributo booleano especifica que o formulário não deve ser validado quando enviado. Se especificado, este atributo sobrescreve o atributo [`novalidate`](/pt-BR/docs/Web/HTML/Element/form#novalidate) do formulário dono do elemento.
- {{htmlattrdef("formtarget")}}

  - : Se o elemento for um botão ou uma imagem de envio de formulário, este atributo é um nome ou palavra-chave indicando onde mostrar a resposta recebida após a submissão do formulário. Este é o nome de, ou palavra-chave para, um _contexto de navegação_ (por exemplo aba, janela ou frame inline). Se especificado, este atributo sobrescreve o atributo [`target`](/pt-BR/docs/Web/HTML/Element/form#target) do formulário dono do elemento. As seguintes palavras-chave têm significado especial:

    - `_self`: Carrega a resposta nom mesmo contexto de navegação que o atual. Este é o valor padrão se o atributo não for especificado.
    - `_blank`: Carrega a resposta num novo contexto de navegação anônimo.
    - `_parent`: Carrega a resposta no contexto de navegação pai do atual. Se não houver pai, esta opção tem o mesmo comportamento de `_self`.
    - `_top`: Carrega a resposta no contexto de navegação raiz (isto é, o contexto de navegação que é ancestral do atual e não tem pai). Se não houver pai, esta opção tem o mesmo comportamento de `_self`.

- {{htmlattrdef("height")}}
  - : Se o valor do atributo **type** for `image`, este atributo define a altura da imagem mostrada para o botão.
- {{htmlattrdef("incremental")}} {{non-standard_inline}}
  - : Este é um atributo não padronizado suportado pelo Safari que é aplicado somente quando o **type** é `search`. Se o atributo estiver presente, independentemente do valor que ele tiver, o {{HTMLElement("input")}} dispara eventos [`search`](/pt-BR/docs/Web/Events/search) conforme o usuário edita o texto do campo. Este evento somente é disparado um tempo após a última tecla ter sido pressionada; este tempo é definido pela implementação e novas digitações zeram o contador de tempo. Em outras palavras, o disparo do evento é filtrado (_debounced_). Se o atributo não estiver presente, o evento [`search`](/pt-BR/docs/Web/Events/search) só é disparado quando o usuário iniciar explicitamente uma busca (por exemplo, pressionando a tecla Enter enquanto estiver no campo).
- {{htmlattrdef("inputmode")}}

  - : Uma dica para o navegador de qual teclado deve ser mostrado. Este atributo se aplica quando o valor do atributo **type** é `text`, `password`, `email` ou `url`. Os valores possíveis são:

    - `verbatim`: Conteúdo alfanumérico que não seja prosa, como nomes de usuário e senhas.
    - `latin`: Conteúdo no alfabeto latino na língua preferida do usuário, com auxílios de entrada como predição de texto habilitados. Para interações humano-computador como caixas de busca.
    - `latin-name`: Como _latin_, mas para nomes humanos.
    - `latin-prose`: Como _latin_, mas com auxílios de entrada mais agressivos. Para comunicações entre humanos como mensagens instantâneas ou email.
    - `full-width-latin`: Como _latin-prose_, mas para as línguas secundárias do usuário.
    - `kana`: Entrada em kana ou romaji, tipicamente hiragana, usando caracteres de largura total, com suporte à conversão para kanji. Para entrada de texto em língua japonesa.
    - `katakana`: Entrada em katakana, usando caracteres de largura total, com suporte à conversão para kanji. Para entrada de texto em língua japonesa.
    - `numeric`: Entrada numérica, incluindo teclas para os dígitos de 0 a 9, o caractere separador de milhar preferido pelo usuário e o caractere para indicar números negativos. Para códigos numéricos como números de cartão de crédito. Para números de verdade, prefira usar `<input type="number">`
    - `tel`: Entrada de números de telefone, incluindo as teclas asterisco e cerquilha. Use `<input type="tel">` se possível em vez disso.
    - `email`: Entrada de email. Use `<input type="email">` se possível em vez disso.
    - `url`: Entrada de URLs. Use `<input type="url">` se possível em vez disso.

- {{htmlattrdef("list")}}
  - : Identifica uma lista de opções pré-definidas de sugestões para o usuário. O valor deve ser o **id** de um elemento {{HTMLElement("datalist")}} no mesmo documento. O navegador mostrará apenas opções que são valores válidos para este elemento. Este atributo é ignorado quando o valor do atributo **type** é `hidden`, `checkbox`, `radio`, `file` ou um tipo de botão.
- {{htmlattrdef("max")}}
  - : O valor máximo (numérico ou data) para este item, que não deve ser menor que seu valor mínimo (atributo **min**).
- {{htmlattrdef("maxlength")}}
  - : Se o valor do atributo **type** for `text`, `email`, `search`, `password`, `tel` ou `url`, este atributo especifica o número máximo de caracteres (em pontos de código Unicode) que o usuário pode inserir; para outros tipos de controle, este atributo é ignorado. Seu valor pode exceder o do atributo **size**. Se não for especificado, o usuário pode inserir uma quantidade ilimitada de caracteres. Especificar um valor negativo resulta no comportamento padrão, isto é, o usuário vai poder inserir um número ilimitado de caracteres. Esta regra só é validada quando o valor do atributo é modificado.
- {{htmlattrdef("min")}}
  - : O valor mínimo (númerico ou data) para este item, que não deve ser maior do que seu máximo (atributo **max**).
- {{htmlattrdef("minlength")}}
  - : Se o valor do atributo **type** for `text`, `email`, `search`, `password`, `tel` ou `url`, este atributo especifica o número mínimo de caracteres (em pontos de código Unicode) que o usuário pode inserir; para outros tipos de controle, este atributo é ignorado.
- {{htmlattrdef("multiple")}}
  - : Este atributo booleano indica se o usuário pode inserir mais de um valor. Ele é aplicado quando o atributo **type** está definido como `email` ou `file`; em outros casos, é ignorado.
- {{htmlattrdef("name")}}
  - : O nome do controle, que é enviado junto com os dados do formulário.
- {{htmlattrdef("pattern")}}
  - : Uma expressão regular usada para validar o valor do controle. O padrão deve casar com o valor completo da entrada, não apenas uma parte. Use o atributo **title** para descrever o padrão para ajudar o usuário. Este atributo é aplicado quando o valor do atributo **type** é `text`, `search`, `tel`, `url` ou `email`; caso contrário ele é ignorado. A linguagem da expressão regular é a mesma do JavaScript. O padrão não deve estar entre barras.
- {{htmlattrdef("placeholder")}}

  - : Uma dica para o usuário do que ele pode inserir no controle. O texto do atributo não deve conter quebras de linha. Este atributo é aplicado quando o valor do atributo **type** é `text`, `search`, `tel`, `url` ou `email`; caso contrário, ele é ignorado.

    > **Nota:** Não use o atributo `placeholder` no lugar de um elemento {{HTMLElement("label")}}. Os propósitos de cada um são diferentes: o atributo {{HTMLElement("label")}} descreve o papel o elemento do formulário, isto é, ele indica que tipo de informação é esperada. Já o atributo `placeholder` é uma dica sobre o formato que o conteúdo deveria ter. Há casos em que o atributo `placeholder` nunca é exibido para o usuário, portanto o formulário deve ser inteligível sem ele.

- {{htmlattrdef("readonly")}}

  - : Este atributo booleano indica que o usuário não pode modificar o valor do controle.

    Este atributo é ignorado se o valor do atributo **type** for `hidden`, `range`, `color`, `checkbox`, `radio`, `file` ou um tipo de botão.

- {{htmlattrdef("required")}}
  - : Este atributo especifica que o usuário deve preencher o campo com um valor antes de enviar o formulário. Ele não pode ser usado quando o atributo **type** está definido como `hidden`, `image` ou um tipo de botão (`submit`, `reset` ou `button`). As pseudoclasses CSS {{cssxref(":optional")}} e {{cssxref(":required")}} serão aplicadas ao campo como for apropriado.
- {{htmlattrdef("selectionDirection")}}
  - : A direção na qual a seleção ocorreu. Vale `forward` se a seleção foi feita no mesmo sentido da escrita do idioma usado ou `backward` se a seleção foi feita na direção oposta. Pode ainda ser `none` se a direção da seleção não for conhecida.
- {{htmlattrdef("size")}}
  - : O tamanho inicial do controle. Este valor é em pixels a não ser que o valor do atributo **type** seja `text` ou `password`. Neste caso, este valor é um número inteiro de caracteres. A partir do HTML5, este atributo é aplicado apenas quando o atributo **type** está definido como `text`, `search`, `tel`, `url`, `email` ou `password`; caso contrário, ele é ignorado. Além disso, o tamanho deve ser maior que zero. Se você não especificar um tamanho, o valor padrão 20 é usado.
- {{htmlattrdef("spellcheck")}}
  - : Definir o valor deste atributo como `true` indica que o elemento deve passar por um corretor ortográfico e gramatical. O valor `default` indica que o elemento deve agir de acordo com seu comportamento padrão, possivelmente baseado no valor do atributo `spellcheck` de seu elemento pai. O valor `false` indica que o elemento não deve ser verificado.
- {{htmlattrdef("src")}}
  - : Se o valor do atributo **type** for `image`, este atributo especifica uma URI para a localização de uma imagem a ser exibida no botão gráfico; caso contrário, este atributo é ignorado.
- {{htmlattrdef("step")}}
  - : Trabalha junto com os atributos **min** e **max** para limitar os incrementos em que valores numéricos ou datas podem ser alterados. Seu valor pode ser `any` ou um número de ponto flutuante positivo. Se o valor não for `any`, o controle aceita somente valores múltiplos valor do incremento maiores que o mínimo.
- {{htmlattrdef("tabindex")}}
  - : A posição do elemento na ordem de navegação pela tecla Tab no documento atual.
- {{htmlattrdef("value")}}
  - : O valor inicial do controle. Este atributo é opcional exceto quando o valor do atributo **type** for `radio` ou `checkbox`.
    Note que, quando a página é recarregada, Gecko and IE [ignorarão o valor especificado no código HTML](https://bugzilla.mozilla.org/show_bug.cgi?id=46845#c186) se o valor tiver sido alterado antes do recarregamento.
- {{htmlattrdef("width")}}
  - : Se o valor do atributo **type** for `image`, este atributo define a largura da imagem exibida para o botão.
- {{htmlattrdef("x-moz-errormessage")}} {{non-standard_inline}}
  - : Essa extensão da Mozilla permite que você especifique a mensagem de erro a ser exibida quando um campo não valida com sucesso.

## Notas

### Entradas de arquivo

> **Nota:** a partir do Gecko 2.0, chamar o método `click()` num elemento {{HTMLElement("input")}} do tipo `file` abre o seletor de arquivos e permite que o usuário selecione arquivos. Veja [Usando arquivos a partir de aplicações web](/pt-BR/docs/Usando_arquivos_a_partir_de_aplicações_web) para um exemplo e mais detalhes.

Você não pode definir o valor de um seletor de arquivos a partir de um script; fazer algo como o seguinte não tem efeito:

```js
var e = getElementById("algumaEntradaDeArquivo");
e.value = "foo";
```

### Mensagens de erro

Se você quiser que o Firefox mostre uma mensagem de erro personalizada quando a validação de um campo falha, você pode usar o atributo `x-moz-errormessage` para isso:

```html
<input
  type="email"
  x-moz-errormessage="Por favor, especifique um endereço de e-mail." />
```

Note, no entanto, que isso não é padronizado e não terá efeito em outros navegadores.

## Exemplos

### Uma caixa de entrada simples

```html
<!-- Um campo básico -->
<input type="text" name="input" value="Digite aqui" />
```

### Um caso de uso comum

```html
<!-- Um formulário comum que inclui tags input -->
<form action="getform.php" method="get">
  Nome: <input type="text" name="nome" /><br />
  Sobrenome: <input type="text" name="sobrenome" /><br />
  E-mail: <input type="email" name="email_usuario" /><br />
  <input type="submit" value="Enviar" />
</form>
```

### Usando o mozactionhint no Firefox mobile

Você pode usar o atributo [`mozactionhint`](/pt-BR/docs/Web/HTML/Element/input#mozactionhint) para especificar o texto para o rótulo da tecla Enter no teclado virtual quando seu formulário é exibido no Firefox mobile. Por exemplo, para ter um rótulo "Próximo", você pode fazer o seguinte:

```html
<input type="text" mozactionhint="next" name="sometext" />
```

## Especificações

| Especificação                                                                            | Estado                   | Comentários |
| ---------------------------------------------------------------------------------------- | ------------------------ | ----------- |
| {{SpecName('HTML WHATWG', 'the-input-element.html#the-input-element', '&lt;input&gt;')}} | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5 W3C', 'forms.html#the-input-element', '&lt;input&gt;')}}               | {{Spec2('HTML5 W3C')}}   |             |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.4', '&lt;form&gt;')}}                   | {{Spec2('HTML4.01')}}    |             |

## Compatibilidade com navegadores

{{Compat("html.elements.input")}}

## Veja também

- Outros elementos relacionados a formulários: {{HTMLElement("form")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} e {{HTMLElement("meter")}}.
- [Cross-browser HTML5 placeholder text](http://webdesignerwall.com/tutorials/cross-browser-html5-placeholder-text)

{{HTMLSidebar}}
