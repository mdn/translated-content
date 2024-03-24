---
title: IDBFactory
slug: Web/API/IDBFactory
---

{{APIRef("IndexedDB")}}

A interface IDBFactory, pertencente a [IndexedDB API](/pt-BR/docs/IndexedDB) , permite que aplicativos acessem de forma assíncrona os bancos de dados indexados. O objeto que implementa a interface é o window\.indexedDB, com este objeto é possível criar, acessar, modificar e excluir informações de um banco de dados.

{{AvailableInWorkers}}

## Métodos

- {{domxref("IDBFactory.open")}}
  - : Realizar a abertura de uma [conexão com uma base de dados](/pt-BR/docs/IndexedDB#gloss_database_connection).
- {{domxref("IDBFactory.deleteDatabase")}}
  - : Remove uma base de dados.
- {{domxref("IDBFactory.cmp")}}
  - : Compara dois valores chaves e determina se elas são iguais e se não, quem é a maior.

### Métodos Obsoletos

- [`IDBFactory.open`](/pt-BR/docs/Web/API/IDBFactory.open-obsolete), a versão original
  - : Este método realizava [conexão com uma base de dados](/pt-BR/docs/IndexedDB#gloss_database_connection), ele ainda é usado em alguns navegadores.

## Exemplo

No código abaixo, realizamos uma conexão com um banco de dados e incluímos manipuladores para os casos de sucesso e erro. Você pode obter o [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app como exemplo ([Visualizar exemplo](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
var note = document.querySelector("ul");

// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction =
  window.IDBTransaction ||
  window.webkitIDBTransaction ||
  window.msIDBTransaction;
window.IDBKeyRange =
  window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

// Let us open version 4 of our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = function (event) {
  note.innerHTML += "<li>Error loading database.</li>";
};

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Database initialised.</li>";

  // store the result of opening the database in the db variable. This is used a lot later on, for opening transactions and suchlike.
  db = DBOpenRequest.result;
};
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [Usando IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Inicializando uma Transaction: {{domxref("IDBDatabase")}}
- Usando uma Transaction: {{domxref("IDBTransaction")}}
- Configurando um Intervalo de chaves: {{domxref("IDBKeyRange")}}
- Recuperando e modificando dados: {{domxref("IDBObjectStore")}}
- Usando cursors: {{domxref("IDBCursor")}}
- Exemplo de referência: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Visualizar exemplo](https://mdn.github.io/dom-examples/to-do-notifications/).)
