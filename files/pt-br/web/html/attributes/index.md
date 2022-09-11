---
title: Atributos
slug: Web/HTML/Attributes
translation_of: Web/HTML/Attributes
original_slug: HTML/Attributes
---
<p> </p>
<table class="standard-table">
 <thead>
  <tr>
   <th>Nome do Atributo</th>
   <th>Elementos</th>
   <th>Descrição</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>accept</td>
   <td>{{ HTMLElement("form") }}, {{ HTMLElement("input") }}</td>
   <td>Lista de tipos que o servidor aceita, tipicamente um tipo de arquivo.</td>
  </tr>
  <tr>
   <td>accept-charset</td>
   <td>{{ HTMLElement("form") }}</td>
   <td>Lista de conjunto de caracteres suportados.</td>
  </tr>
  <tr>
   <td>accesskey</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Define um atalho no teclado para ativar ou adicionar foco ao elemento.</td>
  </tr>
  <tr>
   <td>action</td>
   <td>{{ HTMLElement("form") }}</td>
   <td>A URI de um programa que processa a informação submetida através do formulário.</td>
  </tr>
  <tr>
   <td>align</td>
   <td>{{ HTMLElement("applet") }}, {{ HTMLElement("caption") }}, {{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }},  {{ HTMLElement("hr") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("table") }}, {{ HTMLElement("tbody") }},  {{ HTMLElement("td") }},  {{ HTMLElement("tfoot") }} , {{ HTMLElement("th") }}, {{ HTMLElement("thead") }}, {{ HTMLElement("tr") }}</td>
   <td>Especifica o alinhamento horizontal do elemento.</td>
  </tr>
  <tr>
   <td>alt</td>
   <td>
    <p>{{ HTMLElement("applet") }}, {{ HTMLElement("area") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}</p>
   </td>
   <td>Texto alternativo caso uma imagem não possa ser exibida.</td>
  </tr>
  <tr>
   <td>async</td>
   <td>{{ HTMLElement("script") }}</td>
   <td>Indica que o script deve ser executado assíncrono.</td>
  </tr>
  <tr>
   <td>autocomplete</td>
   <td>{{ HTMLElement("form") }}, {{ HTMLElement("input") }}</td>
   <td>Indica se controles  neste formulário podem por padrão ter seus valores completados automaticamente pelo navegador.</td>
  </tr>
  <tr>
   <td>autofocus</td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
   <td>O elemento deve ser focado automaticamente após a página ser carregada.</td>
  </tr>
  <tr>
   <td>autoplay</td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
   <td>O aúdio ou vídeo deve ser reproduzido assim que possível.</td>
  </tr>
  <tr>
   <td>bgcolor</td>
   <td>{{ HTMLElement("body") }}, {{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }}, {{ HTMLElement("marquee") }}, {{ HTMLElement("table") }}, {{ HTMLElement("tbody") }}, {{ HTMLElement("tfoot") }}, {{ HTMLElement("td") }}, {{ HTMLElement("th") }}, {{ HTMLElement("tr") }}</td>
   <td>
    <p>Cor do plano de fundo do elemento.</p>
    <p>Nota: Este é um atributo legado. Por favor use a propriedade CSS {{ Cssxref("background-color") }} em vez disso.</p>
   </td>
  </tr>
 </tbody>
 <tbody>
  <tr>
   <td>border</td>
   <td>{{ HTMLElement("img") }}, {{ HTMLElement("object") }}, {{ HTMLElement("table") }}</td>
   <td>
    <p>A largura da borda.</p>
    <p>Nota: este é um atributo legado. Por favor use a propriedade CSS {{ Cssxref("border") }} em vez disso.</p>
   </td>
  </tr>
  <tr>
   <td>buffered</td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
   <td>Contém o intervalo de tempo da mídia que já foi carregada.</td>
  </tr>
  <tr>
   <td>challenge</td>
   <td>{{ HTMLElement("keygen") }}</td>
   <td>A challenge string that is submitted along with the public key.</td>
  </tr>
  <tr>
   <td>charset</td>
   <td>{{ HTMLElement("meta") }}, {{ HTMLElement("script") }}</td>
   <td>Declara a codificação dos caracteres da página ou do script.</td>
  </tr>
  <tr>
   <td>checked</td>
   <td>{{ HTMLElement("command") }}, {{ HTMLElement("input") }}</td>
   <td>Indica se o elemento deve ser checado no carregamento da página.</td>
  </tr>
  <tr>
   <td>cite</td>
   <td>{{ HTMLElement("blockquote") }}, {{ HTMLElement("del") }}, {{ HTMLElement("ins") }}, {{ HTMLElement("q") }}</td>
   <td>Contêm uma URI que aponta para a fonte da citação ou alteração.</td>
  </tr>
  <tr>
   <td>class</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Frequentemente usado com CSS para estilizar os elementos com propriedades comuns.</td>
  </tr>
  <tr>
   <td>code</td>
   <td>{{ HTMLElement("applet") }}</td>
   <td>Especifica a URL do arquivo de classe do miniaplicativo que será carregado e executado.</td>
  </tr>
  <tr>
   <td>codebase</td>
   <td>{{ HTMLElement("applet") }}</td>
   <td>Este atributo fornece a URL absoluta ou relativa do diretório onde os arquivos .class do miniaplicativo são armazenados.</td>
  </tr>
  <tr>
   <td>color</td>
   <td>{{ HTMLElement("basefont") }}, {{ HTMLElement("font") }}, {{ HTMLElement("hr") }}</td>
   <td>
    <p>Este atributo define a cor do texto usando o nome de uma cor ou uma cor especificada em hexadecimal através do formato #RRGGBB.</p>
    <p>Nota: este é um atributo legado. Por favor use a propriedade CSS {{ Cssxref("color") }} em vez disso.</p>
   </td>
  </tr>
  <tr>
   <td>cols</td>
   <td>{{ HTMLElement("textarea") }}</td>
   <td>Define o número de colunas numa area de texto.</td>
  </tr>
  <tr>
   <td>colspan</td>
   <td>{{ HTMLElement("td") }}, {{ HTMLElement("th") }}</td>
   <td>O atributo colspan define o número de colunas que uma célula deve conter.</td>
  </tr>
  <tr>
   <td>content</td>
   <td>{{ HTMLElement("meta") }}</td>
   <td>Um valor associado com <code>http-equiv</code> ou <code>name</code> dependendo do contexto.</td>
  </tr>
  <tr>
   <td>contenteditable</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Indica se o conteúdo do elemento é editável.</td>
  </tr>
  <tr>
   <td>contextmenu</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Define o ID de um elemento {{ HTMLElement("menu") }} que servirá como o menu de contexto de um outro elemento.</td>
  </tr>
  <tr>
   <td>controls</td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
   <td>Indica se o navegador deve mostrar ou não os controles de reprodução ao usuário.</td>
  </tr>
  <tr>
   <td>coords</td>
   <td>{{ HTMLElement("area") }}</td>
   <td>Uma escolha de valores especificando as coordenadas da região hot-spot.</td>
  </tr>
  <tr>
   <td>data</td>
   <td>{{ HTMLElement("object") }}</td>
   <td>Especifica a URL do recurso.</td>
  </tr>
  <tr>
   <td>datetime</td>
   <td>{{ HTMLElement("del") }}, {{ HTMLElement("ins") }}, {{ HTMLElement("time") }}</td>
   <td>
    <p>Indica a data e o horário associados ao elemento.</p>
   </td>
  </tr>
  <tr>
   <td>default</td>
   <td>{{ HTMLElement("track") }}</td>
   <td>Indica que a faixa deve estar habilitada a não ser que as preferências do usuário indiquem algo diferente.</td>
  </tr>
  <tr>
   <td>defer</td>
   <td>{{ HTMLElement("script") }}</td>
   <td>Indica que o script deve ser executado após a página ter sido analisada.</td>
  </tr>
  <tr>
   <td>dir</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Defina a direção do texto. Os valores permitidos são ltr (Esquerda para direita) e rtl (Direita para esquerda)</td>
  </tr>
  <tr>
   <td>dirname</td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>disabled</td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("command") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
   <td>Indica se o usuário pode ou não interagir com o elemento.</td>
  </tr>
  <tr>
   <td>draggable</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Define se o elemento pode ser arrastado.</td>
  </tr>
  <tr>
   <td>dropzone</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Indica que o elemento aceita a soltagem de conteúdo nele.</td>
  </tr>
  <tr>
   <td>enctype</td>
   <td>{{ HTMLElement("form") }}</td>
   <td>Define o tipo de conteúdo da data do formulário quando o <code>method</code> é POST.</td>
  </tr>
  <tr>
   <td>for</td>
   <td>{{ HTMLElement("label") }}, {{ HTMLElement("output") }}</td>
   <td>Descreve elementos na qual pertencem a este.</td>
  </tr>
  <tr>
   <td>form</td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("label") }}, {{ HTMLElement("meter") }}, {{ HTMLElement("object") }}, {{ HTMLElement("output") }}, {{ HTMLElement("progress") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
   <td>Indica o formulário que é o proprietário do elemento.</td>
  </tr>
  <tr>
   <td>headers</td>
   <td>{{ HTMLElement("td") }}, {{ HTMLElement("th") }}</td>
   <td>IDs dos elementos <code>&lt;th&gt;</code> na qual se aplicam a este elemento.</td>
  </tr>
  <tr>
   <td>height</td>
   <td>{{ HTMLElement("canvas") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}, {{ HTMLElement("object") }}, {{ HTMLElement("video") }}</td>
   <td>Nota: Em algumas instâncias, tal como {{ HTMLElement("div") }}, isto é um atributo legado, em cujo caso  a propriedade CSS {{ Cssxref("height") }} deveria ser usado em vez. Em outros casos, assim como {{ HTMLElement("canvas") }}, a altura deve ser especificado com esse atributo.</td>
  </tr>
 </tbody>
 <tbody>
  <tr>
   <td>hidden</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Indica a relevância de um elemento.</td>
  </tr>
  <tr>
   <td>high</td>
   <td>{{ HTMLElement("meter") }}</td>
   <td>Indica o menor limite da faixa superior.</td>
  </tr>
  <tr>
   <td>href</td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("base") }}, {{ HTMLElement("link") }}</td>
   <td> A URL de um recurso ligado.</td>
  </tr>
  <tr>
   <td>hreflang</td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("link") }}</td>
   <td>Especifica o idioma de um recurso ligado.</td>
  </tr>
  <tr>
   <td>http-equiv</td>
   <td>{{ HTMLElement("meta") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>icon</td>
   <td>{{ HTMLElement("command") }}</td>
   <td>Especifica uma imagem na qual represente o comando.</td>
  </tr>
  <tr>
   <td>id</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Frequentemente usado com CSS para estilizar um elemento específico. O valor deste atributo deve ser único.</td>
  </tr>
  <tr>
   <td>ismap</td>
   <td>{{ HTMLElement("img") }}</td>
   <td>Indica que a imagem é parte de um mapa de imagem "sever-side".</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td> </td>
  </tr>
  <tr>
   <td>keytype</td>
   <td>{{ HTMLElement("keygen") }}</td>
   <td>Especifica o tipo de chave gerada.</td>
  </tr>
  <tr>
   <td>kind</td>
   <td>{{ HTMLElement("track") }}</td>
   <td>Especifica o tipo de caminho de texto.</td>
  </tr>
  <tr>
   <td>label</td>
   <td>{{ HTMLElement("track") }}</td>
   <td>Especifica um título "user-releadable" de um caminho de texto.</td>
  </tr>
  <tr>
   <td>lang</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Define o idioma usado no elemento.</td>
  </tr>
  <tr>
   <td>language</td>
   <td>{{ HTMLElement("script") }}</td>
   <td>Define o idioma do script usado no elemento.</td>
  </tr>
  <tr>
   <td>list</td>
   <td>{{ HTMLElement("input") }}</td>
   <td>Identifica uma lista de opções pré definidas para sugerir ao usuário.</td>
  </tr>
  <tr>
   <td>loop</td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("bgsound") }}, {{ HTMLElement("marquee") }}, {{ HTMLElement("video") }}</td>
   <td>Indica se a mídia deveria começar tocando do começo quando ela é finalizada.</td>
  </tr>
  <tr>
   <td>low</td>
   <td>{{ HTMLElement("meter") }}</td>
   <td>Indica o maior limite da menor distância.</td>
  </tr>
  <tr>
   <td>manifest</td>
   <td>{{ HTMLElement("html") }}</td>
   <td>Especifica a URL do cache manifest do documento. documento</td>
  </tr>
  <tr>
   <td>max</td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("meter") }}, {{ HTMLElement("progress") }}</td>
   <td>Indica o valor máximo permitido.</td>
  </tr>
  <tr>
   <td>maxlength</td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
   <td>Define o núemro máximo de caracteres permitido no elemento.</td>
  </tr>
  <tr>
   <td>media</td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("link") }}, {{ HTMLElement("source") }}, {{ HTMLElement("style") }}</td>
   <td>Especifica uma sugestão da mídia para qual recurso ligado foi designado.</td>
  </tr>
  <tr>
   <td>method</td>
   <td>{{ HTMLElement("form") }}</td>
   <td>Define qual método HTTP usar quando enviar um formulário. Pode ser GET(padrão) ou POST.</td>
  </tr>
  <tr>
   <td>min</td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("meter") }}</td>
   <td>Indica o valor mínimo permitido.</td>
  </tr>
  <tr>
   <td>multiple</td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("select") }}</td>
   <td>Indica se múltiplos valores podem ser inseridos em uma entrada do tipo <code>email</code> ou <code>file</code>.</td>
  </tr>
  <tr>
   <td>name</td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("form") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("object") }}, {{ HTMLElement("output") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}, {{ HTMLElement("map") }}, {{ HTMLElement("meta") }}, {{ HTMLElement("param") }}</td>
   <td>Nome do elemento. Por exemplo usado pelo servidor para identificar os campos no envio do formulário.</td>
  </tr>
  <tr>
   <td>novalidate</td>
   <td>{{ HTMLElement("form") }}</td>
   <td>Este atributo indica que o formulário não deveria ser validado quando enviado.</td>
  </tr>
  <tr>
   <td>open</td>
   <td>{{ HTMLElement("details") }}</td>
   <td>Indica se os detalhes serão mostrados no carregamento da página.</td>
  </tr>
  <tr>
   <td>optimum</td>
   <td>{{ HTMLElement("meter") }}</td>
   <td>Indica o valor numérico optimal.</td>
  </tr>
  <tr>
   <td>pattern</td>
   <td>{{ HTMLElement("input") }}</td>
   <td>Define uma espreção regular na qual o valor do elemento será validado de encontro.</td>
  </tr>
  <tr>
   <td>ping</td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>placeholder</td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
   <td>Fornece uma sugestão ao usuário de o que pode ser inserido no campo.</td>
  </tr>
  <tr>
   <td>poster</td>
   <td>{{ HTMLElement("video") }}</td>
   <td>Uma URL indicando uma poster frame para mostrar desde que o usuário toque ou busque.</td>
  </tr>
  <tr>
   <td>preload</td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
   <td>Indica se todo o recurso, partes dele ou nada deveria ser pré carregado.</td>
  </tr>
  <tr>
   <td>pubdate</td>
   <td>{{ HTMLElement("time") }}</td>
   <td>
    <p>Indica se esta data e tempo é a data no mais próximo</p>
    <p>elemento antecessor{{ HTMLElement("article") }}.</p>
   </td>
  </tr>
  <tr>
   <td>radiogroup</td>
   <td>{{ HTMLElement("command") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>readonly</td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
   <td>Indica se o elemento pode ser editado.</td>
  </tr>
  <tr>
   <td>rel</td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("link") }}</td>
   <td>Especifica o relacionamento do objeto alvo para o objeto ligado.</td>
  </tr>
  <tr>
   <td>required</td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
   <td>Indica se este elemento é requerido para preencher ou não.</td>
  </tr>
  <tr>
   <td>reversed</td>
   <td>{{ HTMLElement("ol") }}</td>
   <td>Indica se a lista deveria ser mostrada em uma ordem decrescente em vez de uma crescente.</td>
  </tr>
  <tr>
   <td>rows</td>
   <td>{{ HTMLElement("textarea") }}</td>
   <td>Define o número de linhas em uma área de texto.</td>
  </tr>
  <tr>
   <td>rowspan</td>
   <td>{{ HTMLElement("td") }}, {{ HTMLElement("th") }}</td>
   <td>Define o número de linhas que uma célula de tabela deveria abranger mais.</td>
  </tr>
  <tr>
   <td>sandbox</td>
   <td>{{ HTMLElement("iframe") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>spellcheck</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Indica se o spell de checagem está permitido para o elemento.</td>
  </tr>
  <tr>
   <td>scope</td>
   <td>{{ HTMLElement("th") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>scoped</td>
   <td>{{ HTMLElement("style") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>seamless</td>
   <td>{{ HTMLElement("iframe") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>selected</td>
   <td>{{ HTMLElement("option") }}</td>
   <td>Define o valor na qual será selecionado no carregamento da página.</td>
  </tr>
  <tr>
   <td>shape</td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>size</td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("select") }}</td>
   <td>Define a largura do elemento (em pixels). Se o elemento de atributo <code>type</code> é <code>text</code> ou <code>password</code> então este é o número de caracteres.</td>
  </tr>
  <tr>
   <td>sizes</td>
   <td>{{ HTMLElement("link") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>span</td>
   <td>{{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>src</td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}, {{ HTMLElement("script") }}, {{ HTMLElement("source") }}, {{ HTMLElement("track") }}, {{ HTMLElement("video") }}</td>
   <td> URL de um conteúdo incorporável.</td>
  </tr>
  <tr>
   <td>srcdoc</td>
   <td>{{ HTMLElement("iframe") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>srclang</td>
   <td>{{ HTMLElement("track") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>start</td>
   <td>{{ HTMLElement("ol") }}</td>
   <td>Define o primeiro número se não for 1.</td>
  </tr>
  <tr>
   <td>step</td>
   <td>{{ HTMLElement("input") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>style</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Define estilos CSS na qual ultrapassarão estilos previamente configurados.</td>
  </tr>
  <tr>
   <td>summary</td>
   <td>{{ HTMLElement("table") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>tabindex</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Ultrapassa a ordem de tabulação padrão do navegador e segue o especificado como alternativa.</td>
  </tr>
  <tr>
   <td>target</td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("base") }}, {{ HTMLElement("form") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>title</td>
   <td><a href="/en/HTML/Global_attributes" title="en/HTML/Global attributes">Global attribute</a></td>
   <td>Texto a ser mostrado em uma dica quando suspenso sobre um elemento.</td>
  </tr>
  <tr>
   <td>type</td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("input") }}, {{ HTMLElement("command") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("object") }}, {{ HTMLElement("script") }}, {{ HTMLElement("source") }}, {{ HTMLElement("style") }}, {{ HTMLElement("menu") }}</td>
   <td>Define o tipo de elemento.</td>
  </tr>
  <tr>
   <td>usemap</td>
   <td>{{ HTMLElement("img") }},  {{ HTMLElement("input") }}, {{ HTMLElement("object") }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>value</td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("option") }}, {{ HTMLElement("input") }}, {{ HTMLElement("li") }}, {{ HTMLElement("meter") }}, {{ HTMLElement("progress") }}, {{ HTMLElement("param") }}</td>
   <td>Define o valor padrão na qual será mostrado no elemento no carregar da página.</td>
  </tr>
  <tr>
   <td>width</td>
   <td>{{ HTMLElement("canvas") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}, {{ HTMLElement("object") }}, {{ HTMLElement("video") }}</td>
   <td>Nota: Em algumas instâncias, tal como {{ HTMLElement("div") }}, este é um atributo legado, no caso da propriedade CSS {{ Cssxref("width") }} deveria ser usado ao em vez. em outros casos, tal como {{ HTMLElement("canvas") }}, a largura deve ser especificada com este atributo.</td>
  </tr>
  <tr>
   <td>wrap</td>
   <td>{{ HTMLElement("textarea") }}</td>
   <td>Indica se o texto deveria ser enrolado.</td>
  </tr>
 </tbody>
</table>
<p>{{ languages( { "fr": "fr/HTML/Attributs", "en": "en/HTML/Attributes", "ja": "ja/HTML/Attributes" } ) }}</p>
