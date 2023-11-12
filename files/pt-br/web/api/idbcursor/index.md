---
title: IDBCursor
slug: Web/API/IDBCursor
---

{{APIRef("IndexedDB")}}

O **`IDBCursor`** é uma interface da [API IndexedDB](/pt-BR/docs/IndexedDB) que representa o [cursor](/pt-BR/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#gloss_cursor) para atravessar ou interagir sobre vários registros em um banco de dados.

O cursor tem uma fonte que indica qual índice ou armazenamento o objeto está sobre a iteração. Ele tem uma posição dentro do intervalo, e move-se numa direcção que é aumentar ou diminuir na ordem de chaves ficha. O cursor permite que um aplicativo para processar de forma assíncrona todos os registros na faixa do cursor.

Pode ter um número ilimitado de cursores ao mesmo tempo. Você sempre consegue o mesmo objeto IDBCursor representando um determinado cursor. As operações são realizadas na loja de índice ou objeto subjacente.

{{AvailableInWorkers}}

## Methods

- {{domxref("IDBCursor.advance()")}}
  - : Define o número de vezes um cursor deve mover a sua posição para a frente.
- {{domxref("IDBCursor.continue()")}}
  - : Avança o cursor para a próxima posição ao longo de sua direção, para o item cuja chave corresponde ao parâmetro `chave` opcional.
- {{domxref("IDBCursor.delete()")}}
  - : Retorna um {{domxref("IDBRequest")}} objeto, e, em um segmento separado, exclui o registro na posição do cursor, sem alterar a posição do cursor. Isso pode ser usado para excluir registros específicos.
- {{domxref("IDBCursor.update()")}}
  - : Retorna um {{domxref("IDBRequest")}} objeto, e, em um segmento separado, atualiza o valor na posição atual do cursor em armazenar o objeto. Isso pode ser usado para atualizar registros específicos.

## Propriedades

- {{domxref("IDBCursor.source")}} {{readonlyInline}}
  - : Retorna um {{domxref("IDBObjectStore")}} ou {{domxref("IDBIndex")}} que o cursor é a iteração. Esta função nunca retorna nulo ou gera uma exceção, mesmo se o cursor está actualmente a ser iterativo, tem iterated além de seu fim, ou a sua operação não está ativa.
- {{domxref("IDBCursor.direction")}} {{readonlyInline}}

  - : Retorna a direcção do percurso do cursor. Veja

    constantes

    para os possíveis valores.

- {{domxref("IDBCursor.key")}} {{readonlyInline}}
  - : Returns the key for the record at the cursor's position. If the cursor is outside its range, this is set to `undefined`. The cursor's key can be any data type.
- {{domxref("IDBCursor.primaryKey")}} {{readonlyInline}}
  - : Retorna a chave para o registro na posição do cursor. Se o cursor estiver fora do seu alcance, isso é definido como indefinido. A chave do cursor pode ser qualquer tipo de dados.

## Constantes

> **Aviso:** These constants are no longer available. You should use the string constants directly instead. ({{ bug(891944) }})

- `NEXT`: `"next"` : The cursor shows all records, including duplicates. It starts at the lower bound of the key range and moves upwards (monotonically increasing in the order of keys).
- `NEXTUNIQUE` : `"nextunique"` : The cursor shows all records, excluding duplicates. If multiple records exist with the same key, only the first one iterated is retrieved. It starts at the lower bound of the key range and moves upwards.
- `PREV`: `"prev"` : The cursor shows all records, including duplicates. It starts at the upper bound of the key range and moves downwards (monotonically decreasing in the order of keys).
- `PREVUNIQUE`: `"prevunique"` : The cursor shows all records, excluding duplicates. If multiple records exist with the same key, only the first one iterated is retrieved. It starts at the upper bound of the key range and moves downwards.

## Example

In this simple fragment we create a transaction, retrieve an object store, then use a cursor to iterate through all the records in the object store. The cursor does not require us to select the data based on a key; we can just grab all of it. Also note that in each iteration of the loop, you can grab data from the current record under the cursor object using `cursor.value.foo`. For a complete working example, see our [IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([view example live](http://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```
function displayData() {
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
};
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [Using IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
