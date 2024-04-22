---
title: Arrastar e soltar
slug: Web/API/HTML_Drag_and_Drop_API
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

As interfaces de Drag and Drop (arrastar e soltar) habilitam aplicações a usar funcionalidades de arrastar e soltar através do navegador. Por exemplo, com essas funcionalidades, o usuário pode selecionar elementos arrastáveis (_draggable_) com o mouse, arrastar elementos até um elemento soltável (_droppable_), e soltar o elemento ao soltar o botão do mouse. Uma representação translúcida de elementos arrastáveis (_draggable)_ seguem o ponteiro do mouse durante a operação de arrastar (drag).

Para web sites, extensões e aplicações XUL, você pode customizar os tipos de elementos que podem se tornar arrastáveis (draggable) e o tipo de retorno que o elemento arrastável produz, assim como os elementos soltáveis (droppable).

**NT:** Para manter a tradução mais precisa e coesa, a partir daqui iremos manter os termos _drag_ e _drop_ e seus variantes conforme texto original. Sendo portanto mantidos também os termos _draggable_ e _droppable_.

Este documento é uma visão geral do drag and drop no HTML. Ele inclui uma descrição de suas interfaces, funcionalidades básicas de como permitir a adesão de funcionalidades arrastar e soltar em uma aplicação e um sumário da interoperabilidade entre interfaces.

## Eventos Drag

O drag and drop em HTML usa o {{domxref("Event","modelo de eventos DOM")}} e os _{{domxref("DragEvent","eventos drag")}}_ são hereditários dos {{domxref("MouseEvent","eventos do mouse")}}. Uma operação típica de drag começa quando o usuário seleciona um elemento arrastável com o mouse, move o mouse até um elemento soltável (droppable) e solta o mouse. Durante as operações, diversos tipos de evento são acionados e alguns podem até ser acionados multiplas vezes (como por exemplo os tipos de evento {{event("drag")}} e {{event("dragover")}}.

Todos os [tipos de evento drag](/pt-BR/docs/Web/API/DragEvent#Event_types) são associados a um [manipulador global de eventos](/pt-BR/docs/Web/API/DragEvent#GlobalEventHandlers). Cada tipo de evento drag e cada atributo drag global tem um documento de referência que o descreve. A tabela a seguir descreve brevemente os tipos de evento e um link de referência para seu documento.

| Event                  | On Event Handler                                             | Description                                                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{event('drag')}}      | {{domxref('GlobalEventHandlers.ondrag','ondrag')}}           | Acionado quando um elemento ou seleção de texto está sendo arrastado.                                                                                                                                           |
| {{event('dragend')}}   | {{domxref('GlobalEventHandlers.ondragend','ondragend')}}     | Acionado quando uma operação de arrastar está terminando (por eexmplo, ao soltar o botão do mouse ou pressionar a tecla esc). (Veja [Terminando um evento Drag](/pt-BR/docs/DragDrop/Drag_Operations#dragend).) |
| {{event('dragenter')}} | {{domxref('GlobalEventHandlers.ondragenter','ondragenter')}} | Acionado quando um elemento arrastável ou seleção de texto entra em um ponto de soltura (drop target). (Veja [Determinando Drop Targets](/pt-BR/docs/DragDrop/Drag_Operations#droptargets).)                    |
| {{event('dragexit')}}  | {{domxref('GlobalEventHandlers.ondragexit','ondragexit')}}   | Acionado quando um elemento não é mais o ponto de seleção imediata da operação drag.                                                                                                                            |
| {{event('dragleave')}} | {{domxref('GlobalEventHandlers.ondragleave','ondragleave')}} | Acionado quando um elemento arrastável ou seleção de texto abandona um ponto de soltura (drop target) válido.                                                                                                   |
| {{event('dragover')}}  | {{domxref('GlobalEventHandlers.ondragover','ondragover')}}   | Acionado quando um elemento ou seleção de texto está sendo arrastado sobre um ponto de soltura válido (a cada aproximadamente 100 milisegundos).                                                                |
| {{event('dragstart')}} | {{domxref('GlobalEventHandlers.ondragstart','ondragstart')}} | Acionado quando o usuário começa a arrastar um elemento válido ou seleção de texto. (Veja [Começando uma Operação Drag](/pt-BR/docs/DragDrop/Drag_Operations#dragstart).)                                       |
| {{event('drop')}}      | {{domxref('GlobalEventHandlers.ondrop','ondrop')}}           | Acionado quando um elemento ou seleção de texto é solta em um ponto d soltura (drop target) válido. (Veja [Realizando um Drop](/pt-BR/docs/DragDrop/Drag_Operations#drop).)                                     |

Note que eventos `dragstart` e `dragend` não são acionados ao arrastar um arquivo vindo do sistema operacional para o navegador.

## Interfaces

A interface HTML drag and drop é composta pelos eventos {{domxref("DragEvent")}}, {{domxref("DataTransfer")}}, {{domxref("DataTransferItem")}} e {{domxref("DataTransferItemList")}}.

A interface {{domxref("DragEvent")}} consiste de um construtor e uma propriedade, a propriedade {{domxref("DragEvent.dataTransfer","dataTransfer")}} que é um objeto {{domxref("DataTransfer")}}. Os objetos {{domxref("DataTransfer")}} incluem estados do evento drag como o tipo de drag sendo feito (por exemplo `copy` ou `move`), os dados do do evento drag (um ou mais itens) e o tipo de cada _item drag_ (um MIME type). Objetos {{domxref("DataTransfer")}} também contém métodos para adicionar itens aos dados do drag e remover um item. As interfaces {{domxref("DragEvent")}} e {{domxref("DataTransfer")}} devem as únicas necessárias para adicionar capacidades de drag and drop para uma aplicação. Entretanto, note que o Firefox provê suporte para apenas algumas [Gecko-specific extensions](#gecko_specific_interfaces) ao objeto {{domxref("DataTransfer")}}, apesar de entretanto essas extensões funcionarem apenas no Firefox.

Cada objeto {{domxref("DataTransfer")}} contém uma propriedade {{domxref("DataTransfer.items","items")}} que é uma {{domxref("DataTransferItemList","lista")}} dos objetos {{domxref("DataTransferItem")}}. Cada objeto {{domxref("DataTransferItem")}} representa um único _drag item_ e cada item tem uma propriedade {{domxref("DataTransferItem.kind","kind (tipo)")}} que é o _tipo(kind)_ de data (seja ela `string` ou `file`) e uma propriedade {{domxref("DataTransferItem.type","type (tipo)")}} que é o tipo de dado do item (ou seja, MIME type). O objeto {{domxref("DataTransferItem")}} também contém métodos para conseguir dados do item arrastável.

O objeto {{domxref("DataTransferItemList")}} é uma lista de objetos {{domxref("DataTransferItem")}}. A lista de objetos contém métodos para: adicionar um item para uma lista, remover um item de uma lista e limpar a lista com todos os itens.

A diferença chave entre das interfaces {{domxref("DataTransfer")}} e {{domxref("DataTransferItem")}} é que a primeira usa o método síncrono {{domxref("DataTransfer.getData","getData()")}} para acessar os dados de um item arrastável, e a segunda usa o método assíncrono {{domxref("DataTransferItem.getAsString","getAsString()")}} para acessá-lo.

Note: as interfaces {{domxref("DragEvent")}} e a {{domxref("DataTransfer")}} são vastamente interoperáveis com navegadores desktop. Entretanto, as interfaces {{domxref("DataTransferItem")}} e {{domxref("DataTransferItemList")}} tem suporte limitado entre navegadores. Veja [Interoperabildade](#interoperabildade) para mais informações.

### Interfaces específicas para o Gecko

A Mozilla e o Firefox suportam algumas funcionalidades fora dos padrões do modelo drag and drop. Elas são _cfunções convenientes_ para facilitar o arraste múltiplo de elementos e a manipulação de dados que não são strings (como arquivos). Para mais informações, veja [Dragging and Dropping Multiple Items](/pt-BR/docs/DragDrop/Dragging_and_Dropping_Multiple_Items). Para mais informações, veja a página de referência {{domxref("DataTransfer")}} para todas as [propriedades específicas para o Gecko](/pt-BR/docs/Web/API/DataTransfer#Gecko_properties) e [Métodos específicos para o Gecko](/pt-BR/docs/Web/API/DataTransfer#Gecko_methods).

## O básico

Esta seção dispõe de um resumo das etapas básicas para adicionar a funcionalidade drag and drop à uma aplicação. Cada seção inclui uma descrição da etapa, um breve exemplo em código, e links para informações adicionais.

### Identificando o que é arrastável _(draggable)_

Para fazer um elemento se tornar arrastável, é necessária a adição de um atributo [`draggable`](/pt-BR/docs/Web/HTML/Global_attributes#draggable) além da adição do manipulador de eventos global {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}}, conforme descrito no exemplo a seguir

```js
function dragstart_handler(ev) {
  console.log("dragStart");
  // Adiciona o id do elemento em questão ao objeto de transferência de dados (dataTransfer)
  ev.dataTransfer.setData("text/plain", ev.target.id);
}
```

```html
<body>
  <p id="p1" draggable="true" ondragstart="dragstart_handler(event);">
    Este elemento é arrastável.
  </p>
</body>
```

Veja a [referência do atributo draggable](/pt-BR/docs/Web/HTML/Global_attributes/draggable) e o [Guia de operações drag](/pt-BR/docs/Web/Guide/HTML/Drag_operations#draggableattribute) para mais informações.

### Defina os dados do drag

A aplicação é livre para incluir qualquer quantidade de dados do item em uma operação drag. Cada dado de um item é uma {{domxref("DOMString","string")}} de um tipo particular, tipicamente um MIME type como por exemplo `text/html`.

Cada {{domxref("DragEvent","evento drag")}} tem uma propriedade {{domxref("DragEvent.dataTransfer","dataTransfer")}} que _segura_ os dados do evento. Essa propridade (que é um objeto {{domxref("DataTransfer")}}) também tem um método para _gerenciar_ os dados do arraste (drag). O método {{domxref("DataTransfer.setData","setData()")}} é usado para adicionar um item aos dados do arraste, como demonstrado no exemplo a seguir.

```js
function dragstart_handler(ev) {
  // Adiciona os dados do arraste (drag)
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.setData("text/html", "<p>Parágrafo de exemplo</p>");
  ev.dataTransfer.setData("text/uri-list", "http://developer.mozilla.org");
}
```

Para uma lista de tipos de dados mais comuns utilizados pelo drag and drop (como texto, HTML, links, e files), veja [Tipos recomendados de Drag Types](/pt-BR/docs/DragDrop/Recommended_Drag_Types) e para mais informações sobre os dados do arraste (drag data), veja [Drag Data](/pt-BR/docs/Web/Guide/HTML/Drag_operations#dragdata).

### Defina uma imagem de arraste (drag image)

Por padrão, o navegador provê uma imagem que aparece por trás do ponteiro do mouse durante uma operação de arraste. Entretanto, uma aplicação pode definir uma imagem customizada utilizando o método {{domxref("DataTransfer.setDragImage","setDragImage()")}} como demonstrado no exemplo a seguir.

```js
function dragstart_handler(ev) {
  // Cria uma imagem e então a utiliza como a "drag image".
  // NOTA: mude "example.gif" como uma imagem existente, caso contrário
  // ela não será criada e a imagem padrão será utilizada como padrão.
  var img = new Image();
  img.src = "example.gif";
  ev.dataTransfer.setDragImage(img, 10, 10);
}
```

Para aprender mais sobre arrastar imagens de retorno, veja [Definindo a imagem de retorno do arraste (Drag)](/pt-BR/docs/DragDrop/Drag_Operations#dragfeedback).

### Defina o _efeito_ do arraste (_Drag effect_)

A propriedade {{domxref("DataTransfer.dropEffect","dropEffect")}} é usada para controlar o retorno (geralmente visual) que é dado ao usuário durante uma operação drag and drop. Ela afeta qual cursor o navegador irá mostrar enquanto o arraste é realizado. Por exemplo, quando o usuário passa sobre (famoso _hover_) o ponto de soltura (drop target), o cursor do navegador pode indicar o tipo de operação que irá acontecer.

Três efeitos podem ser definidos:

`copy` indica que os dados sendo arrastados podem ser copiados da localização atual para a localização de destino (localização do _drop_).

`move` indica que os dados sendo arrastados irá ser movido.

`link` indica que alguma forma de relação ou conexão será criada entre a localização de origem (source) e de destino (drop).

Durante a operação de arraste, os efeitos do arraste (drag) podem ser modificados para determinar que certos efeitos são permitidos em determinadas localizações. Se permitido, uma soltura (drop) pode ocorrer naquela localização.

O exemplo a seguir mostra como utilizar essa propriedade.

```js
function dragstart_handler(ev) {
  // Determina o efeito de arraste para copy
  ev.dataTransfer.dropEffect = "copy";
}
```

Veja [Efeitos do Arraste (Drag Effects)](/pt-BR/docs/Web/Guide/HTML/Drag_operations#drageffects) para mais detalhes.

### Defina uma zona de soltura _(drop zone)_

Por padrão, o navegador previne tudo que possa acontecer ao soltar alguma coisa em um elemento HTML. Para mudar esse comportamento de forma que um elemento se torne uma zona de soltura (d*rop zone)* ou que seja soltável _(droppable)_, o elemento precisa ter ambos os atributos {{domxref("GlobalEventHandlers.ondragover","ondragover")}} e {{domxref("GlobalEventHandlers.ondrop","ondrop")}}. O exemplo a seguir mostra como utilizar esses atributos e inclui manipuladores básicos de evento para cada um.

```js
function dragover_handler(ev) {
  ev.preventDefault();
  // Define o dropEffect para ser do tipo move
  ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
  ev.preventDefault();
  // Pega o id do alvo e adiciona o elemento que foi movido para o DOM do alvo
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
<body>
  <div
    id="target"
    ondrop="drop_handler(event);"
    ondragover="dragover_handler(event);">
    Zona de Soltura (Drop Zone)
  </div>
</body>;
```

Note que cada manipulador chama {{domxref("Event.preventDefault","preventDefault()")}} para previnir o processamento adicional de eventos (como eventos touch ou eventos pointer).

Para mais informações, veja [Especificando pontos de soltura (Drop Targets)](/pt-BR/docs/Web/Guide/HTML/Drag_operations#droptargets).

### Manipulando o _efeito_ de soltura (drop)

O manipulador do evento {{event("drop")}} é livre para processar os dados do arraste (drag) de maneira específica em uma aplicação. Tipicamente, uma aplicação usaria o método {{domxref("DataTransfer.getData","getData()")}} para reter os itens arrastados e processá-los de acordo. A semântica da aplicação pode ser diferente dependendo do valor do {{domxref("DataTransfer.dropEffect","dropEffect")}} e/ou o estado da chave que o modifica.

O exemplo a seguir mostra o manipulador de soltura (drop handler) pegando o id do elemento de origem atráves dos dados de drag (drag data) e então usando o id para mover o elemento de sua origem para o elemento de soltura (drop element).

```js
function dragstart_handler(ev) {
  // Adiciona o id do elemento alvo para o objeto de transferência de dados
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dropEffect = "move";
}
function dragover_handler(ev) {
  ev.preventDefault();
  // Define o dropEffect para ser do tipo move
  ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
  ev.preventDefault();
  // Pega o id do alvo e adiciona o elemento que foi movido para o DOM do alvo
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
<body>
  <p id="p1" draggable="true" ondragstart="dragstart_handler(event);">
    Este elemento é arrastável.
  </p>
  <div
    id="target"
    ondrop="drop_handler(event);"
    ondragover="dragover_handler(event);">
    Zona de Soltura (Drop Zone)
  </div>
</body>;
```

Para mais informações, veja [Realizando uma soltura (Drop)](/pt-BR/docs/Web/Guide/HTML/Drag_operations#drop).

### Fim da soltura (Drag end)

No início da operação de arraste (drag), o evento {{event("dragend")}} é acionado no elemento de origem (_source)_ - o elemento que foi o alvo do início do arraste (drag start). Este evento é acionado sempre quando o arraste é completado ou cancelado. O manipulador de eventos {{event("dragend")}} pode verificar o valor da propriedade {{domxref("DataTransfer.dropEffect","dropEffect")}} para determinar se a operação de arraste foi bem sucedida ou não.

Para mais informações sobre manipular o final de uma operação de arraste, veja [Finalizando um arraste (Drag)](/pt-BR/docs/DragDrop/Drag_Operations#dragend).

## Interoperabilidade

Como podem ser visto no [DataTransferItem interface's Browser Compatibility table](/pt-BR/docs/Web/API/DataTransferItem#Browser_compatibility), drag-and-drop a interoperabilidade é relativamente ampla emtre ps brpwsers desktop (exceto as interfaces {{domxref("DataTransferItem")}} e {{domxref("DataTransferItemList")}} que tem o menor suport). Estes dados tambem indica que o suporte ao drag and drop entre browser mobile é muito menor.

## Exemplos e demonstrações

- [Copiando e movendo elementos com a interface `DataTransfer`](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Copiando e movendo elementos com a interface `DataTransferListItem`](http://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Arrastando e soltando arquivos; Apenas para o Firefox: <http://jsfiddle.net/9C2EF/>
- Arrastando e soltando arquivos; Todos os navegadores: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## Veja também

- [Operações de Arraste](/pt-BR/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arrastando e Soltando múltiplos elementos](/pt-BR/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [Tipos re arraste (Drag Types) recomendados](/pt-BR/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Dados de unteroperabilidade Drag and Drop de acordo com o CanIUse](http://caniuse.com/#search=draganddrop)
