---
title: Arrastar e soltar arquivos
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
translation_of: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
original_slug: DragDrop/Drag_and_Drop/Arrastar_e_soltar_arquivos
---
<p>{{DefaultAPISidebar("HTML Drag and Drop API")}}</p>

<p>As interfaces HTML Drag and Drop permitem que os aplicativos da Web arrastem e soltem arquivos em uma página da Web. Este documento descreve como um aplicativo pode aceitar um ou mais arquivos que são arrastados do <em>gerenciador de arquivos da plataforma subjacente</em> e soltado s em uma página da Web.</p>

<p>Os principais passos para o drag and drop é definir a <em>drop zone</em> (ou seja  definir um elemento para a queda dos arquivos) e definir  event handlers para os eventos {{event("drop")}} e {{event("dragover")}} . Essas etapas são descritas abaixo, incluindo exemplos de trechos de código. O codigo fonte esta disponivel em <a href="https://github.com/mdn/dom-examples/tree/master/drag-and-drop">MDN's drag-and-drop repository</a> (pull requests e/ou issues são bem-vindas).</p>

<p class="note">Nota: {{domxref("HTML_Drag_and_Drop_API","HTML drag and drop")}}Define duas APIs diferentes para suportar arrastar e soltar arquivos. Uma API é a interface {{domxref("DataTransfer")}} e a segunda API é a interface {{domxref("DataTransferItem")}} e {{domxref("DataTransferItemList")}}. Este exemplo ilustra o uso de ambas as APIs (e não usa nehuma interface específica do Gecko).</p>

<h2 id="Definindo_a_drop_zone">Definindo a drop <em>zone</em></h2>

<p>O elemento de destino do evento {{event("drop")}} precisa de um event handler global  {{domxref("GlobalEventHandlers.ondrop","ondrop")}} O seguinte trecho de código mostra como isso é feito com um elemento: {{HTMLelement("div")}}</p>

<pre class="brush: html">&lt;div id="drop_zone" ondrop="dropHandler(event);"&gt;
  &lt;p&gt;Drag one or more files to this Drop Zone ...&lt;/p&gt;
&lt;/div&gt;</pre>

<p>Normalmente, um aplicativo inclui um event handler {{event("dragover")}} no elemento de destino do drop e esse manipulador desativará o comportamento de arraste padrão do navegador. Para adicionar esse handler, você precisa incluir um event handler global {{domxref("GlobalEventHandlers.ondragover","ondragover")}}:</p>

<pre class="brush: html">&lt;div id="drop_zone" ondrop="dropHandler(event);" ondragover="dragOverHandler(event);"&gt;
  &lt;p&gt;Drag one or more files to this Drop Zone ...&lt;/p&gt;
&lt;/div&gt;
</pre>

<p>Por fim, um aplicativo pode querer estilizar o elemento da drop zone para indicar visualmente que o elemento é uma drop zone. Neste exemplo, o elemento da drop zone usa o seguinte estilo:</p>

<pre class="brush: css">#drop_zone {
  border: 5px solid blue;
  width:  200px;
  height: 100px;
}
</pre>

<div class="note">
<p>Nota: Observe que os eventos <code>dragstart</code> e <code>dragend</code> não são acionados ao arrastar um arquivo para o navegador do OS.</p>
</div>

<h2 id="Processo_de_drop">Processo de drop</h2>

<p>O evento {{event("drop")}} é acionado quando o usuário solta o(s) arquivo(s)  no drop handler, se o navegador suportar a interface {{domxref("DataTransferItemList")}} o metodo {{domxref("DataTransferItem.getAsFile","getAsFile()")}} será usado para acessar cada arquivo; caso contrário, a interface {{domxref("DataTransfer")}} usara a propriedade {{domxref("DataTransfer.files","files")}} para acessar cada arquivo.</p>

<p>Este exemplo mostra como escrever o nome de cada arquivo arrastado,  no console. Em um aplicativo real, um aplicativo pode querer processar um arquivo usando o {{domxref("File","File API")}}.</p>

<p>Observe que neste exemplo, Qualquer item de arrasto que não seja um arquivo é ignorado.</p>

<pre class="brush: js">function dropHandler(ev) {
  console.log('File(s) dropped');

  // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use a interface DataTransferItemList para acessar o (s) arquivo (s)
    for (var i = 0; i &lt; ev.dataTransfer.items.length; i++) {
      // Se os itens soltos não forem arquivos, rejeite-os
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
      }
    }
  } else {
    // Use a interface DataTransfer para acessar o (s) arquivo (s)
    for (var i = 0; i &lt; ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
  }
}</pre>

<h2 id="Impedir_o_evento_de_arrastar_padrão_do_navegador">Impedir o evento de arrastar padrão do navegador</h2>

<p>O seguinte event handler {{event("dragover")}} chama {{domxref("Event.preventDefault","preventDefault()")}} para desativar o manipulador padrão de arrastar e soltar do navegador.</p>

<pre class="brush: js">function dragOverHandler(ev) {
  console.log('File(s) in drop zone');

  // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
  ev.preventDefault();
}
</pre>

<h2 id="See_also" name="See_also">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API">HTML Drag and Drop API</a></li>
 <li><a class="internal" href="/Web/Guide/HTML/Drag_operations" title="Drag Operations">Drag Operations</a></li>
 <li><a href="https://html.spec.whatwg.org/multipage/interaction.html#dnd" title="Drag and Drop Standard">HTML5 Living Standard: Drag and Drop</a></li>
</ul>
