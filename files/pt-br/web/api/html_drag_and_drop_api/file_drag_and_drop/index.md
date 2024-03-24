---
title: Arrastar e soltar arquivos
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

As interfaces HTML Drag and Drop permitem que os aplicativos da Web arrastem e soltem arquivos em uma página da Web. Este documento descreve como um aplicativo pode aceitar um ou mais arquivos que são arrastados do _gerenciador de arquivos da plataforma subjacente_ e soltado s em uma página da Web.

Os principais passos para o drag and drop é definir a _drop zone_ (ou seja definir um elemento para a queda dos arquivos) e definir event handlers para os eventos {{event("drop")}} e {{event("dragover")}} . Essas etapas são descritas abaixo, incluindo exemplos de trechos de código. O codigo fonte esta disponivel em [MDN's drag-and-drop repository](https://github.com/mdn/dom-examples/tree/master/drag-and-drop) (pull requests e/ou issues são bem-vindas).

> **Nota:** Nota: {{domxref("HTML_Drag_and_Drop_API","HTML drag and drop")}}Define duas APIs diferentes para suportar arrastar e soltar arquivos. Uma API é a interface {{domxref("DataTransfer")}} e a segunda API é a interface {{domxref("DataTransferItem")}} e {{domxref("DataTransferItemList")}}. Este exemplo ilustra o uso de ambas as APIs (e não usa nehuma interface específica do Gecko).

## Definindo a drop _zone_

O elemento de destino do evento {{event("drop")}} precisa de um event handler global {{domxref("GlobalEventHandlers.ondrop","ondrop")}} O seguinte trecho de código mostra como isso é feito com um elemento: {{HTMLelement("div")}}

```html
<div id="drop_zone" ondrop="dropHandler(event);">
  <p>Drag one or more files to this Drop Zone ...</p>
</div>
```

Normalmente, um aplicativo inclui um event handler {{event("dragover")}} no elemento de destino do drop e esse manipulador desativará o comportamento de arraste padrão do navegador. Para adicionar esse handler, você precisa incluir um event handler global {{domxref("GlobalEventHandlers.ondragover","ondragover")}}:

```html
<div
  id="drop_zone"
  ondrop="dropHandler(event);"
  ondragover="dragOverHandler(event);">
  <p>Drag one or more files to this Drop Zone ...</p>
</div>
```

Por fim, um aplicativo pode querer estilizar o elemento da drop zone para indicar visualmente que o elemento é uma drop zone. Neste exemplo, o elemento da drop zone usa o seguinte estilo:

```css
#drop_zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
```

> **Nota:** Nota: Observe que os eventos `dragstart` e `dragend` não são acionados ao arrastar um arquivo para o navegador do OS.

## Processo de drop

O evento {{event("drop")}} é acionado quando o usuário solta o(s) arquivo(s) no drop handler, se o navegador suportar a interface {{domxref("DataTransferItemList")}} o metodo {{domxref("DataTransferItem.getAsFile","getAsFile()")}} será usado para acessar cada arquivo; caso contrário, a interface {{domxref("DataTransfer")}} usara a propriedade {{domxref("DataTransfer.files","files")}} para acessar cada arquivo.

Este exemplo mostra como escrever o nome de cada arquivo arrastado, no console. Em um aplicativo real, um aplicativo pode querer processar um arquivo usando o {{domxref("File","File API")}}.

Observe que neste exemplo, Qualquer item de arrasto que não seja um arquivo é ignorado.

```js
function dropHandler(ev) {
  console.log("File(s) dropped");

  // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use a interface DataTransferItemList para acessar o (s) arquivo (s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // Se os itens soltos não forem arquivos, rejeite-os
      if (ev.dataTransfer.items[i].kind === "file") {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log("... file[" + i + "].name = " + file.name);
      }
    }
  } else {
    // Use a interface DataTransfer para acessar o (s) arquivo (s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log(
        "... file[" + i + "].name = " + ev.dataTransfer.files[i].name,
      );
    }
  }
}
```

## Impedir o evento de arrastar padrão do navegador

O seguinte event handler {{event("dragover")}} chama {{domxref("Event.preventDefault","preventDefault()")}} para desativar o manipulador padrão de arrastar e soltar do navegador.

```js
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
  ev.preventDefault();
}
```

## Veja também

- [HTML Drag and Drop API](/pt-BR/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/pt-BR/docs/Web/Guide/HTML/Drag_operations)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
