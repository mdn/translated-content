---
title: IDBCursor
slug: Web/API/IDBCursor
translation_of: Web/API/IDBCursor
---
<p>{{APIRef("IndexedDB")}}</p>

<p>O <code><strong>IDBCursor </strong></code>é uma interface da <a href="/en-US/docs/IndexedDB">API IndexedDB</a> que representa o <a href="/en-US/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#gloss_cursor">cursor</a> para atravessar ou interagir sobre vários registros em um banco de dados.</p>

<p>O cursor tem uma fonte que indica qual índice ou armazenamento o objeto está sobre a iteração. Ele tem uma posição dentro do intervalo, e move-se numa direcção que é aumentar ou diminuir na ordem de chaves ficha. O cursor permite que um aplicativo para processar de forma assíncrona todos os registros na faixa do cursor.</p>

<p>Pode ter um número ilimitado de cursores ao mesmo tempo. Você sempre consegue o mesmo objeto IDBCursor representando um determinado cursor. As operações são realizadas na loja de índice ou objeto subjacente.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("IDBCursor.advance()")}}</dt>
 <dd>Define o número de vezes um cursor deve mover a sua posição para a frente.</dd>
 <dt>{{domxref("IDBCursor.continue()")}}</dt>
 <dd>Avança o cursor para a próxima posição ao longo de sua direção, para o item cuja chave corresponde ao parâmetro <code>chave</code><code> </code>opcional.</dd>
 <dt>{{domxref("IDBCursor.delete()")}}</dt>
 <dd>Retorna um {{domxref("IDBRequest")}} objeto, e, em um segmento separado, exclui o registro na posição do cursor, sem alterar a posição do cursor. Isso pode ser usado para excluir registros específicos.</dd>
 <dt>{{domxref("IDBCursor.update()")}}</dt>
 <dd>Retorna um {{domxref("IDBRequest")}} objeto, e, em um segmento separado, atualiza o valor na posição atual do cursor em armazenar o objeto. Isso pode ser usado para atualizar registros específicos.</dd>
</dl>

<h2 id="Propriedades">Propriedades</h2>

<dl>
 <dt>{{domxref("IDBCursor.source")}} {{readonlyInline}}</dt>
 <dd>Retorna um {{domxref("IDBObjectStore")}} ou {{domxref("IDBIndex")}} que o cursor é a iteração. Esta função nunca retorna nulo ou gera uma exceção, mesmo se o cursor está actualmente a ser iterativo, tem iterated além de seu fim, ou a sua operação não está ativa.</dd>
 <dt>{{domxref("IDBCursor.direction")}} {{readonlyInline}}</dt>
 <dd>Retorna a direcção do percurso do cursor. Veja <a href="#">constantes </a>para os possíveis valores.</dd>
 <dt>{{domxref("IDBCursor.key")}} {{readonlyInline}}</dt>
 <dd>Returns the key for the record at the cursor's position. If the cursor is outside its range, this is set to <code>undefined</code>. The cursor's key can be any data type.</dd>
 <dt>{{domxref("IDBCursor.primaryKey")}} {{readonlyInline}}</dt>
 <dd>Retorna a chave para o registro na posição do cursor. Se o cursor estiver fora do seu alcance, isso é definido como indefinido. A chave do cursor pode ser qualquer tipo de dados.</dd>
</dl>

<h2 id="Constants" name="Constants">Constantes</h2>

<div>{{ obsolete_header(25) }}</div>

<div class="warning">
<p>These constants are no longer available. You should use the string constants directly instead. ({{ bug(891944) }})</p>
</div>

<ul>
 <li><code>NEXT </code>: <code>"next"</code> : The cursor shows all records, including duplicates. It starts at the lower bound of the key range and moves upwards (monotonically increasing in the order of keys).</li>
 <li><code>NEXTUNIQUE</code> : <code>"nextunique"</code> : The cursor shows all records, excluding duplicates. If multiple records exist with the same key, only the first one iterated is retrieved. It starts at the lower bound of the key range and moves upwards.</li>
 <li><code>PREV </code>: <code>"prev"</code> : The cursor shows all records, including duplicates. It starts at the upper bound of the key range and moves downwards (monotonically decreasing in the order of keys).</li>
 <li><code>PREVUNIQUE </code>: <code>"prevunique"</code> : The cursor shows all records, excluding duplicates. If multiple records exist with the same key, only the first one iterated is retrieved. It starts at the upper bound of the key range and moves downwards.</li>
</ul>

<h2 id="Example">Example</h2>

<p>In this simple fragment we create a transaction, retrieve an object store, then use a cursor to iterate through all the records in the object store. The cursor does not require us to select the data based on a key; we can just grab all of it. Also note that in each iteration of the loop, you can grab data from the current record under the cursor object using <code style="font-style: normal; line-height: 1.5;">cursor.value.foo</code>. For a complete working example, see our <a href="https://github.com/mdn/IDBcursor-example/">IDBCursor example</a> (<a href="http://mdn.github.io/IDBcursor-example/" style="line-height: 1.5;">view example live</a>.)</p>

<pre>function displayData() {
  var transaction = db.transaction(['rushAlbumList'], "readonly");
  var objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var listItem = document.createElement('li');
      listItem.innerHTML = cursor.value.albumTitle + ', ' + cursor.value.year;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
  };
};</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#idl-def-IDBCursor', 'cursor')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Browser compatibility</h2>

{{Compat("api.IDBCursor")}}

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li>Starting transactions: {{domxref("IDBDatabase")}}</li>
 <li>Using transactions: {{domxref("IDBTransaction")}}</li>
 <li>Setting a range of keys: {{domxref("IDBKeyRange")}}</li>
 <li>Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}</li>
 <li>Using cursors: {{domxref("IDBCursor")}}</li>
 <li>Reference example: <a class="external" href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a class="external" href="http://mdn.github.io/to-do-notifications/">view example live</a>.)</li>
</ul>
