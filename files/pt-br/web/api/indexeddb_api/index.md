---
title: IndexedDB
slug: Web/API/IndexedDB_API
---

IndexedDB é uma API para armazenamento client-side de quantidades significantes de informações e buscas com alta performance por índices. Enquanto [DOM Storage](/pt-BR/docs/Web/API/Web_Storage_API) é útil para armazenamento de pequenas quantidade de dados, IndexedDB é a solução para grande porção de dados estruturados.

Esta página basicamente é o ponto de entrada para uma descrição técnica dos objetos da API. Precisando de suporte ainda mais inicial consulte os [Conceitos Básicos sobre IndexedDb](/pt-BR/docs/Web/API/IndexedDB_API/Basic_Terminology). Para mais detalhes sobre a implementação, veja [Usando IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API/Using_IndexedDB).

IndexedDB provém APIs separadas para acesso tanto síncrono quanto assíncrono. As APIs síncronas devem ser utilizadas apenas dentro de [Web Workers](/pt-BR/docs/Web/API/Worker), apesar de não ser implementada por nenhum navegador atualmente. A API assíncrona funciona tanto com ou sem Web Workers, sendo que o Firefox ainda não implementou este.

## API Assíncrona

Os métodos da API assíncrona são chamados sem bloquear a thread que os chama. Para obter acesso assíncrono à database, chame [open()](/pt-BR/docs/Web/API/IDBFactory/open) no atributo [indexedDB](/pt-BR/docs/Web/API/Window/indexedDB) do objeto [window](/pt-BR/docs/Web/API/Window), que retornará um objeto {{domxref("IDBRequest")}}. Operações assíncronas comunicam-se com a aplicação que os chamam executando eventos nos objetos {{domxref("IDBRequest")}}.

> [!NOTE]
> Nota: O objeto indexedDB é prefixado em navegadores mais antigos (propriedade mozIndexedDB em Gecko < 16, webkitIndexedDb em Chrome e msIndexedDB no IE 10).

As interfaces da API assíncrona do IndexedDB são:

- {{domxref("IDBFactory")}}
  - : Provém acesso ao banco de dados. É a interface implementado pelo objeto global indexedDB e é, portanto, o ponto de entrada para API.
- {{domxref("IDBCursor")}}
  - : Itera sobre objectStores e índices
- {{domxref("IDBCursorWithValue")}}
  - : Itera sobre objectStores e índices e retorna o atual valor do cursor
- {{domxref("IDBDatabase")}}
  - : Represents a connection to a database. It's the only way to get a transaction on the database.
- {{domxref("IDBEnvironment")}}
  - : Provides access to a client-side database. It is implemented by the {{ domxref("window") }} and {{ domxref("worker") }} objects.
- {{domxref("IDBIndex")}}
  - : Provides access to the metadata of an index.
- {{domxref("IDBKeyRange")}}
  - : Define um alcance das chaves.
- {{domxref("IDBObjectStore")}}
  - : Representa um ObjectStore
- {{domxref("IDBOpenDBRequest")}}
  - : Representa uma requisição para abrir o banco de dados.
- {{domxref("IDBRequest")}}
  - : Provém acesso a resultados de requisições assíncronas ao banco de dados e a objetos do banco de dados. É o que você obtém quando chama um método assíncrono.
- {{domxref("IDBTransaction")}}
  - : Representa uma transação. Você cria a transação no banco de dados, especifíca o escopo (tal como qual objectStore você deseja acessar), e determina que tipo de acesso (apenas leitura ou também escrita) daquilo que você deseja.

Uma versão anterior da especificação também define estas interfaces agora removidas. Elas ainda estão documentadas caso você precise atualizar códigos escritos anteriormente:

- {{domxref("IDBVersionChangeRequest")}}
  - : Representa uma requisição para alterar a versão do banco de dados. O modo de alterar a versão do banco de dados mudou então (chamando IDBFactory.open sem também chamar IDBDatabase.setVersion) e a interface IDBOpenDBRequest agora tem a funcionalidade do removido IDBVersionChangeRequest.
- {{domxref("IDBDatabaseException")}}
  - : Representa condições de erro que podem ser encontradas enquanto performando operações no banco de dados.

> [!NOTE]
> há também a [versão síncrona da API](/pt-BR/docs/Web/API/IndexedDB_API). A versão síncrona não tem implementação em qualquer navegador. É feita para ser utilizada com [WebWorkers](/pt-BR/docs/Web/API/Web_Workers_API/Using_web_workers).

## Limites de Armazenamento

Não há qualquer limite em um único elemento da database. Entretanto podem haver limites quanto ao tamanho de cada banco de dados. Este limite (e a maneira com qual o usuário chega a ele) pode variar de um navegador para outro:

- Firefox: não há limite no tamanho do banco de dados. A interface do usuário irá apenas pedir a permissão para armazenar conjuntos com tamanho maior que 50mb. Este limite de tamanho pode ser customizado através da preferência dom.indexedDB.warningQuota (que é definida em <http://mxr.mozilla.org/mozilla-central/source/modules/libpref/src/init/all.js>).
- Google Chrome: veja [https://developers.google.com/chrome...rage#temporary](https://developers.google.com/chrome/whitepapers/storage#temporary)

## Exemplos

- Um grande exemplo de para o que o indexedDb pode ser utilizado na web é o exemplo do Marco Castelluccion, vencedor do IndexedDB Mozilla DevDerby. A demonstração vencedora foi o eLibri, uma aplicação biblioteca e leitora de Ebook.
- Você deveria também checar a referência de aplicações exemplo neste documento de referências: [Notificações de A Fazer](https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages) ([veja ao vivo](http://chrisdavidmills.github.io/to-do-notifications/)). Nem todo fragmento de código aparece neste exemplo, mas todo exemplo usa a mesma estrutura de dados e sintaxe, e fará sentido no contexto da aplicação.

## Veja Também

- [Conceitos Básicos sobre IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API/Basic_Terminology)
- [Utilizando IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [Armazenando Imagens e Arquivos com IndexedDB](https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/)
- [Especificação da API de Indexed Database](https://www.w3.org/TR/IndexedDB/)
- [IndexedDB — O armazenamento em seu Navegador](http://msdn.microsoft.com/en-us/scriptjunkie/gg679063.aspx)
- [IndexedDB Exemplos](http://nparashuram.com/IndexedDB/trialtool/index.html)
- [IndexedDB Polyfill/Shim](https://github.com/axemclion/IndexedDBShim) para navegadores que apenas suportam WebSQL (e.g. mobile WebKit)
- [JQuery IndexedDB plugin](http://nparashuram.com/IndexedDBShim/)
