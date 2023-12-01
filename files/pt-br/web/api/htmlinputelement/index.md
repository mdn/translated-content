---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
---

{{APIRef("HTML DOM")}}

A interface **`HTMLInputElement`** fornece propriedades e métodos especiais para manipular as opções, layout e apresentação de elementos {{HtmlElement("input")}}.

{{InheritanceDiagram}}

## Propriedades da instância

Algumas propriedades se aplicam apenas a tipos de elemento de entrada que suportam os atributos correspondentes.

- {{domxref("HTMLInputElement.align", "align")}} {{Deprecated_Inline}}

  - : `string`: **Representa** o alinhamento do elemento. _Em vez disso, use CSS._

- {{domxref("HTMLInputElement.autocapitalize", "autocapitalize")}} {{Experimental_Inline}}

  - : `string`: **Define** o comportamento de capitalização para a entrada do usuário. Os valores válidos são `none`, `off`, `characters`, `words` ou `sentences`.

- {{domxref("HTMLInputElement.defaultValue", "defaultValue")}}

  - : `string`: **Retorna / Define** o valor padrão como originalmente especificado no HTML que criou este objeto.

- {{domxref("HTMLInputElement.dirName", "dirName")}}

  - : `string`: **Retorna / Define** a direcionalidade do elemento.

- {{domxref("HTMLInputElement.inputmode", "inputmode")}}

  - : Fornece uma dica aos navegadores quanto ao tipo de configuração do teclado virtual a ser usado ao editar este elemento ou seu conteúdo.

- {{domxref("HTMLInputElement.labels", "labels")}} {{ReadOnlyInline}}

  - : {{domxref("NodeList")}} array: **Retorna** uma lista de elementos {{ HTMLElement("label") }} que são rótulos para este elemento.

- {{domxref("HTMLInputElement.list", "list")}} {{ReadOnlyInline}}

  - : {{domxref("HTMLElement")}}: **Retorna** o elemento apontado pelo atributo [`list`](/pt-BR/docs/Web/HTML/Element/Input#list). A propriedade pode ser `null` se nenhum elemento HTML for encontrado na mesma árvore.

- {{domxref("HTMLInputElement.multiple", "multiple")}}

  - : `boolean`: **Retorna / Define** o atributo [`multiple`](/pt-BR/docs/Web/HTML/Element/Input#multiple) do elemento, indicando se mais de um valor é possível (ex. , vários arquivos).

- {{domxref("HTMLInputElement.name", "name")}}

  - : `string`: **Retorna / Define** o atributo [`name`](/pt-BR/docs/Web/HTML/Element/Input#name) do elemento, contendo um nome que identifica o elemento ao enviar o formulário.

- {{domxref("HTMLInputElement.step", "step")}}

  - : `string`: **Retorna / Define** o atributo [`step`](/pt-BR/docs/Web/HTML/Element/Input#step) do elemento, que funciona com [`min`](/pt-BR/docs/Web/HTML/Element/Input#min) e [`max`](/pt-BR/docs/Web/HTML/Element/Input#max) para limitar os incrementos nos quais um número ou data - valor de tempo pode ser definido. Pode ser a string `any` ou um número de ponto flutuante positivo. Se isso não for definido como `any`, o controle aceitará apenas valores em múltiplos do valor da etapa maior que o mínimo.

- {{domxref("HTMLInputElement.type", "type")}}

  - : `string`: **Retorna / Define** o atributo [`type`](/pt-BR/docs/Web/HTML/Element/Input#type) do elemento, indicando o tipo de controle a ser exibido. Para valores possíveis, consulte a documentação do atributo [`type`](/pt-BR/docs/Web/HTML/Element/Input#type).

- {{domxref("HTMLInputElement.useMap", "useMap")}} {{Deprecated_Inline}}

  - : `string`: **Representa** um mapa de imagem do lado do cliente.

- {{domxref("HTMLInputElement.value", "value")}}

  - : `string`: **Retorna / Define** o valor atual do controle. Se o usuário inserir um valor diferente do valor esperado, isso pode retornar uma string vazia.

- {{domxref("HTMLInputElement.valueAsDate", "valueAsDate")}}

  - : {{jsxref("Date")}}: **Retorna / Define** o valor do elemento, interpretado como uma data, ou `null` se a conversão não for possível.

- {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
  - : `double`: **Retorna** o valor do elemento, interpretado como um dos seguintes, em ordem: Um valor de tempo, um número ou `NaN` se a conversão for impossível

### Propriedades de instância relacionadas ao formulário pai

- {{domxref("HTMLInputElement.form", "form")}} {{ReadOnlyInline}}

  - : {{domxref("HTMLFormElement")}}: **Retorna** uma referência ao elemento pai {{HtmlElement("form")}}.

- {{domxref("HTMLInputElement.formAction", "formAction")}}

  - : `string`: **Retorna / Define** o atributo [`formaction`](/pt-BR/docs/Web/HTML/Element/Input#formaction) do elemento, contendo a URL de um programa que processa as informações enviadas pelo elemento. Isso substitui o atributo [`action`](/pt-BR/docs/Web/HTML/Element/form#action) do formulário pai.

- {{domxref("HTMLInputElement.formEnctype", "formEnctype")}}

  - : `string`: **Retorna / Define** o atributo [`formenctype`](/pt-BR/docs/Web/HTML/Element/Input#formenctype) do elemento, contendo o tipo de conteúdo que é usado para enviar o formulário para o servidor. Isso substitui o atributo [`enctype`](/pt-BR/docs/Web/HTML/Element/form#enctype) do formulário pai.

- {{domxref("HTMLInputElement.formMethod", "formMethod")}}

  - : `string`: **Retorna / Define** o atributo [`formmethod`](/pt-BR/docs/Web/HTML/Element/Input#formmethod) do elemento, contendo o método HTTP que o navegador usa para enviar a forma. Isso substitui o atributo [`method`](/pt-BR/docs/Web/HTML/Element/form#method) do formulário pai.

- {{domxref("HTMLInputElement.formNoValidate", "formNoValidate")}}

  - : `boolean`: **Retorna / Define** o atributo [`formnovalidate`](/pt-BR/docs/Web/HTML/Element/Input#formnovalidate) do elemento, indicando que o formulário não deve ser validado quando ele é submetido. Isso substitui o atributo [`novalidate`](/pt-BR/docs/Web/HTML/Element/form#novalidate) do formulário pai.

- {{domxref("HTMLInputElement.formTarget", "formTarget")}}
  - : `string`: **Retorna / Define** o atributo [`formtarget`](/pt-BR/docs/Web/HTML/Element/Input#formtarget) do elemento, contendo um nome ou palavra-chave indicando onde exibir o resposta recebida após o envio do formulário. Isso substitui o atributo [`target`](/pt-BR/docs/Web/HTML/Element/form#target) do formulário pai.

### Propriedades de instância que se aplicam a qualquer tipo de elemento de entrada que não esteja oculto

- {{domxref("HTMLInputElement.autofocus", "autofocus")}}

  - : `boolean`: **Retorna / Define** o atributo [`autofocus`](/pt-BR/docs/Web/HTML/Element/Input#autofocus) do elemento, que especifica que um controle de formulário deve ter foco de entrada quando a página é carregada, a menos que o usuário a substitua, por exemplo, digitando um controle diferente. Apenas um elemento de formulário em um documento pode ter o atributo [`autofocus`](/pt-BR/docs/Web/HTML/Element/Input#autofocus).

- {{domxref("HTMLInputElement.disabled", "disabled")}}

  - : `boolean`: **Retorna / Define** o atributo [`disabled`](/pt-BR/docs/Web/HTML/Element/Input#disabled) do elemento, indicando que o controle não está disponível para interação. Os valores de entrada não serão enviados com o formulário. Veja também [`readonly`](/pt-BR/docs/Web/HTML/Element/Input#readonly).

- {{domxref("HTMLInputElement.required", "required")}}

  - : `boolean`: **Retorna / Define** o atributo [`required`](/pt-BR/docs/Web/HTML/Element/Input#required) do elemento, indicando que o usuário deve preencher um valor antes de enviar um formulário.

- {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}

  - : `string`: **Retorna** uma mensagem localizada que descreve as restrições de validação que o controle não atende (se houver). Esta é a string vazia se o controle não for um candidato para validação de restrição ([`willValidate`](/pt-BR/docs/Web/API/HTMLObjectElement/willValidate) é `false`), ou se satisfizer suas restrições. Este valor pode ser definido pelo método {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}.

- {{domxref("HTMLInputElement.validity", "validity")}} {{ReadOnlyInline}}

  - : {{domxref("ValidityState")}}: **Retorna** o estado de validade atual do elemento.

- {{domxref("HTMLInputElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : `boolean`: **Retorna** se o elemento é um candidato para validação de restrição. É `false` se alguma condição o impedir de validação de restrição, incluindo: seu `type` é um dos `hidden`, `reset` ou `button`, tem um ancestral {{HTMLElement("datalist")}} ou sua propriedade `disabled` é `true`.

### Propriedades de instância que se aplicam apenas a elementos do tipo caixa de seleção ou rádio

- {{domxref("HTMLInputElement.checked", "checked")}}

  - : `boolean`: **Retorna / Define** o estado atual do elemento.

- {{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}}

  - : `boolean`: **Retorna / Define** o estado padrão de um botão de rádio ou caixa de seleção conforme originalmente especificado no HTML que criou este objeto.

- {{domxref("HTMLInputElement.indeterminate", "indeterminate")}}
  - : `boolean`: **Retorna** se a caixa de seleção ou o botão de opção está em estado indeterminado. Para caixas de seleção, o efeito é que a aparência da caixa de seleção é obscurecida/acinzentada de alguma forma para indicar que seu estado é indeterminado (não marcado, mas não desmarcado). Não afeta o valor do atributo `checked`, e clicar na caixa de seleção definirá o valor como falso.

### Propriedades de instância que se aplicam apenas a elementos do tipo imagem

- {{domxref("HTMLInputElement.alt", "alt")}}

  - : `string`: **Retorna / Define** o atributo [`alt`](/pt-BR/docs/Web/HTML/Element/Input#alt) do elemento, contendo texto alternativo a ser usado.

- {{domxref("HTMLInputElement.height", "height")}}

  - : `string`: **Retorna / Define** o atributo [`height`](/pt-BR/docs/Web/HTML/Element/Input#height) do elemento, que define a altura da imagem exibida para o botão.

- {{domxref("HTMLInputElement.src", "src")}}

  - : `string`: **Retorna / Define** o atributo [`src`](/pt-BR/docs/Web/HTML/Element/Input#src) do elemento, que especifica um URI para a localização de uma imagem para exibir no botão gráfico de envio.

- {{domxref("HTMLInputElement.width", "width")}}

  - : `string`: **Retorna / Define** o atributo [`width`](/pt-BR/docs/Web/HTML/Element/Input#width) do elemento, que define a largura da imagem exibida para o botão.

### Propriedades de instância que se aplicam apenas a elementos do tipo arquivo

- {{domxref("HTMLInputElement.accept", "accept")}}

  - : `string`: **Retorna / Define** o atributo [`accept`](/pt-BR/docs/Web/HTML/Element/Input#accept) do elemento, contendo uma lista separada por vírgulas de tipos de arquivos que podem ser selecionado.

- {{domxref("HTMLInputElement.allowdirs", "allowdirs")}} {{Non-standard_Inline}}

  - : `boolean`: Parte da API de upload de diretório não padrão. Indica se permite ou não que diretórios e arquivos sejam selecionados na lista de arquivos. Implementado apenas no Firefox e está oculto atrás de uma preferência.

- {{domxref("HTMLInputElement.files", "files")}}

  - : {{domxref("FileList")}}: **Retorna / Define** uma lista de objetos {{domxref("File")}} representando os arquivos selecionados para upload.

- {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}}

  - : `boolean`: **Retorna** o atributo [`webkitdirectory`](/pt-BR/docs/Web/HTML/Element/Input#webkitdirectory). Se for verdadeiro, a interface do seletor do sistema de arquivos aceita apenas diretórios em vez de arquivos.

- {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}}
  - : {{domxref("FileSystemEntry")}} array: **Descreve** os arquivos ou diretórios atualmente selecionados.

### Propriedades de instância que se aplicam apenas a elementos visíveis contendo texto ou números

- {{domxref("HTMLInputElement.autocomplete", "autocomplete")}}

  - : `string`: **Retorna / Define** o atributo [`autocomplete`](/pt-BR/docs/Web/HTML/Element/Input#autocomplete) do elemento, indicando se o valor do controle pode ser automaticamente preenchido pelo navegador.

- {{domxref("HTMLInputElement.max", "max")}}

  - : `string`: **Retorna / Define** o atributo [`max`](/pt-BR/docs/Web/HTML/Element/Input#max) do elemento, contendo o valor (numérico ou data-hora) máximo para este item, que não deve ser menor que seu valor mínimo (atributo [`min`](/pt-BR/docs/Web/HTML/Element/Input#min)).

- {{domxref("HTMLInputElement.maxLength", "maxLength")}}

  - : `unsigned long`: **Retorna / Define** o atributo [`maxlength`](/pt-BR/docs/Web/HTML/Element/Input#maxlength) do elemento, contendo o número máximo de caracteres (em pontos de código Unicode) que o valor pode ter.

- {{domxref("HTMLInputElement.min", "min")}}

  - : `string`: **Retorna / Define** o atributo [`min`](/pt-BR/docs/Web/HTML/Element/Input#min) do elemento, contendo o valor (numérico ou data-hora) mínimo para este item, que não deve ser maior que seu valor máximo (atributo [`max`](/pt-BR/docs/Web/HTML/Element/Input#max)).

- {{domxref("HTMLInputElement.minLength", "minLength")}}

  - : `unsigned long`: **Retorna / Define** o atributo [`minlength`](/pt-BR/docs/Web/HTML/Element/Input#minlength) do elemento, contendo o número mínimo de caracteres (em Unicode pontos de código) que o valor pode ter.

- {{domxref("HTMLInputElement.pattern", "pattern")}}

  - : `string`: **Retorna / Define** o atributo [`pattern`](/pt-BR/docs/Web/HTML/Element/Input#pattern) do elemento, contendo uma expressão regular em que o valor do controle é verificado contra. Use o atributo [`title`](/pt-BR/docs/Web/HTML/Element/Input#title) para descrever o padrão para ajudar o usuário. Este atributo só se aplica quando o valor do atributo [`type`](/pt-BR/docs/Web/HTML/Element/Input#type) é `text`, `search`, `tel`, `url` ou `e-mail`.

- {{domxref("HTMLInputElement.placeholder", "placeholder")}}

  - : `string`: **Retorna / Define** o atributo [`placeholder`](/pt-BR/docs/Web/HTML/Element/Input#placeholder) do elemento, contendo uma dica para o usuário do que pode ser inserido no controle. O texto do espaço reservado não deve conter retornos de carro ou avanços de linha. Este atributo só se aplica quando o valor do atributo [`type`](/pt-BR/docs/Web/HTML/Element/Input#type) é `text`, `search`, `tel`, `url` ou `e-mail`.

- {{domxref("HTMLInputElement.readOnly", "readOnly")}}

  - : `boolean`: **Retorna / Define** o atributo [`readonly`](/pt-BR/docs/Web/HTML/Element/Input#readonly) do elemento, indicando que o usuário não pode modificar o valor do controle. Isso é ignorado se o [`type`](/pt-BR/docs/Web/HTML/Element/Input#type) for `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, ou um tipo de botão.

- {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}}

  - : `unsigned long`: **Retorna / Define** o índice final do texto selecionado. Quando não há seleção, isso retorna o deslocamento do caractere imediatamente após a posição atual do cursor de entrada de texto.

- {{domxref("HTMLInputElement.selectionStart", "selectionStart")}}

  - : `unsigned long`: **Retorna / Define** o índice inicial do texto selecionado. Quando nada é selecionado, retorna a posição do cursor de entrada de texto (caret) dentro do elemento {{HTMLElement("input")}}.

- {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}

  - : `string`: **Retorna / Define** a direção em que a seleção ocorreu. Os valores possíveis são: `forward` (a seleção foi realizada na direção de início a fim do local atual), `backward` (a direção oposta) ou `none` (a direção é desconhecida).

- {{domxref("HTMLInputElement.size", "size")}}
  - : `unsigned long`: **Retorna / Define** o atributo [`size`](/pt-BR/docs/Web/HTML/Element/Input#size) do elemento, contendo o tamanho visual do controle. Este valor está em pixels, a menos que o valor de [`type`](/pt-BR/docs/Web/HTML/Element/Input#type) seja `text` ou `password`, caso em que é um número inteiro indicando o número de caracteres. Aplica-se somente quando [`type`](/pt-BR/docs/Web/HTML/Element/Input#type) é definido como `text`, `search`, `tel`, `url`, `email` ou `senha`.

## Métodos de instância

- {{domxref("HTMLElement/blur", "blur()")}}

  - : Remove o foco do elemento de entrada; as teclas digitadas subsequentemente não irão a lugar nenhum.

- {{domxref("HTMLElement.click()", "click()")}}

  - : Simula um clique no elemento de entrada.

- {{domxref("HTMLElement/focus", "focus()")}}

  - : Foca no elemento de entrada; os pressionamentos de tecla irão posteriormente para este elemento.

- {{domxref("HTMLInputElement.select()", "select()")}}

  - : Seleciona todo o texto no elemento de entrada e o foca para que o usuário possa substituir posteriormente todo o seu conteúdo.

- {{domxref("HTMLInputElement.setSelectionRange()", "setSelectionRange()")}}

  - : Seleciona um intervalo de texto no elemento de entrada (mas não o focaliza).

- {{domxref("HTMLInputElement.setRangeText()", "setRangeText()")}}

  - : Substitui um intervalo de texto no elemento de entrada por um novo texto.

- {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}

  - : Define uma mensagem de validação personalizada para o elemento. Se esta mensagem não for a string vazia, o elemento está sofrendo de um erro de validade personalizado e não é validado.

- {{domxref("HTMLInputElement.showPicker()", "showPicker()")}}

  - : Mostra um seletor de navegador para data, hora, cor e arquivos.

- {{domxref("HTMLInputElement.checkValidity()", "checkValidity()")}}

  - : Retorna um valor booleano que é `false` se o elemento for um candidato para validação de restrição e não satisfizer suas restrições. Nesse caso, ele também dispara um evento {{domxref("HTMLInputElement/invalid_event", "invalid")}} no elemento. Ele retorna `true` se o elemento não for um candidato para validação de restrição ou se satisfizer suas restrições.

- {{domxref("HTMLInputElement.reportValidity()", "reportValidity()")}}

  - : Executa o método `checkValidity()` e, se retornar falso (para uma entrada inválida ou nenhum atributo de padrão fornecido), ele relata ao usuário que a entrada é inválida da mesma maneira como se você enviasse um formulário.

- {{domxref("HTMLInputElement.stepDown()", "stepDown()")}}

  - : Decrementa o [`value`](/pt-BR/docs/Web/HTML/Element/Input#value) em ([`step`](/pt-BR/docs/Web/HTML/Element/Input#step) \* n), em que n é padronizado como 1 se não for especificado. Lança uma exceção `InvalidStateError`:
    - se o método não for aplicável para o valor [`type`](/pt-BR/docs/Web/HTML/Element/Input#type) atual,
    - se o elemento não tiver valor [`step`](/pt-BR/docs/Web/HTML/Element/Input#step),
    - se o [`value`](/pt-BR/docs/Web/HTML/Element/Input#value) não puder ser convertido em um número,
    - se o valor resultante estiver acima de [`max`](/pt-BR/docs/Web/HTML/Element/Input#max) ou abaixo de [`min`](/pt-BR/docs/Web/HTML/Elemento/Input#min).

- {{domxref("HTMLInputElement.stepUp()", "stepUp()")}}
  - : Incrementa o [`value`](/pt-BR/docs/Web/HTML/Element/Input#value) em ([`step`](/pt-BR/docs/Web/HTML/Element/Input#step) \* n), em que n é padronizado como 1 se não for especificado. Lança uma exceção `InvalidStateError`:
    - se o método não for aplicável para o valor atual de [`type`](/pt-BR/docs/Web/HTML/Element/Input#type),
    - se o elemento não tiver valor [`step`](/pt-BR/docs/Web/HTML/Element/Input#step),
    - se o [`value`](/pt-BR/docs/Web/HTML/Element/Input#value) não puder ser convertido em um número,
    - se o valor resultante estiver acima de [`max`](/pt-BR/docs/Web/HTML/Element/Input#max) ou abaixo de [`min`](/pt-BR/docs/Web/HTML/Elemento/Input#min).

## Eventos

Ouça esses eventos usando [`addEventListener()`](/pt-BR/docs/Web/API/EventTarget/addEventListener) ou atribuindo um ouvinte de evento à propriedade `oneventname` desta interface:

- [`input`](/pt-BR/docs/Web/API/HTMLElement/input_event)
  - : Dispara quando o `value` de um elemento {{HTMLElement("input")}}, {{HTMLElement("select")}} ou {{HTMLElement("textarea")}} foi alterado. Observe que na verdade isso é acionado na interface {{domxref("HTMLElement")}} e também se aplica a elementos [`contenteditable`](/pt-BR/docs/Web/HTML/Global_attributes/contenteditable), mas também listamos aqui porque é mais comumente usado com elementos de entrada de formulário.
- [`invalid`](/pt-BR/docs/Web/API/HTMLInputElement/invalid_event)
  - : Disparado quando um elemento não satisfaz suas restrições durante a validação da restrição.
- [`search`](/pt-BR/docs/Web/API/HTMLInputElement/search_event) {{Non-standard_Inline}}
  - : Disparado quando uma pesquisa é iniciada em um {{HTMLElement("input")}} de `type="search"`.
- {{domxref("HTMLInputElement/selectionchange_event", "selectionchange")}} evento {{Experimental_Inline}}
  - : Dispara quando a seleção de texto em um elemento {{HTMLElement("input")}} foi alterada.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Elemento HTML implementando esta interface: {{ HTMLElement("input") }}
