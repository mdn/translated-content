---
title: MutationObserver
slug: Web/API/MutationObserver
---

{{APIRef("DOM")}}

MutationObserver fornece aos desenvolvedores uma maneira de reagir a mudanças em um [DOM](/pt-BR/docs/DOM). Ele é concebido como um substituto para [Mutation Events](/pt-BR/docs/DOM/Mutation_events) definido na especificação de eventos DOM nível 3.

## Constructor

### `MutationObserver()`

Construtor para instanciar novos observadores de mutação do DOM.

```
MutationObserver(
  function callback
);
```

###### Parâmetros

- `callback`
  - : A função que será chamada em cada mutação do DOM. O observador irá chamar esta função com dois argumentos. O primeiro é um array de objetos, cada um do tipo [`MutationRecord`](#MutationRecord). O segundo é a essa instância MutationObserver.

## Métodos da instância

| `void observe( {{domxref("Node")}} target, MutationObserverInit options );` |
| --------------------------------------------------------------------------- |
| `void disconnect();`                                                        |
| `Array takeRecords();`                                                      |

### `observe()`

Registra a instância MutationObserver para receber notificações das mutações do DOM no nó especificado.

```
void observe(
  {{domxref("Node")}} target,
  MutationObserverInit options
);
```

###### Parâmetros

- `target`
  - : O {{domxref("Node")}} no qual é observadas as mutações do DOM.
- `options`
  - : Um objeto [`MutationObserverInit`](#MutationObserverInit) especifica quais mutações DOM devem ser reportadas.

> **Nota:** NOTA: Adicionar um observador para um elemento é como utilizar o addEventListener, se você observar o elemento várias vezes não faz diferença. Ou seja, se você observar um elemento duas vezes, o callback do observador não disparará duas vezes, nem você deverá executar duas vezes o disconnect(). Em outras palavras, uma vez que um elemento é observado, observá-lo novamento com a mesma instância do observador não fará nada. No entanto, se o objeto callback for diferente, ele, é claro, adicionará outro observador para isso.

### `disconnect()`

Pára o rebimento de notificações das mutações do DOM na instância `MutationObserver`. O callback do observador não será invocado até que método [`observe()`](<#observe()>) seja novamente utilizado.

```
void disconnect();
```

### `takeRecords()`

Esvazia a fila de registro da instância `MutationObserver` e retorna o que estava nela.

```
Array takeRecords();
```

###### Valor de retorno

Retorna um Array de [`MutationRecord`s](#MutationRecord).

## `MutationObserverInit`

`MutationObserverInit` é um objeto que pode especificar as seguintes propriedades:

> **Nota:** NOTA: No mínimo `childList`, `attributes`, ou `characterData` devem ser definidos como `true`. Caso contrário o erro "An invalid or illegal string was specified" é lançado.

| Property                | Description                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `childList`             | Defina como `true` se adições e remoções dos elementos filho do nó alvo (incluindo nós de texto) devem ser observadas.        |
| `attributes`            | Defina como `true` se mutações dos atributos do alvo devem ser observadas.                                                    |
| `characterData`         | Defina como `true` se mutações dos dados do alvo devem ser observadas.                                                        |
| `subtree`               | Defina como `true` se mutações não apenas do alvo, mas também dos descendentes do alvo devem ser observadas.                  |
| `attributeOldValue`     | Defina como `true` se `attributes` é definido como `true` e o valor do atributo do alvo antes da mutação precisa ser gravado. |
| `characterDataOldValue` | Defina como `true` se `characterData` é definido como `true` e os dados do alvo antes da mutação precisam ser gravados.       |
| `attributeFilter`       | Defina como um array de nomes locais de atributo (sem namespace) se nem todas mutações de atributo precisam ser observadas.   |

## `MutationRecord`

`MutationRecord` é um objeto que será passado para o callback do observador. Tem as seguintes propriedades:

| Property             | Type                      | Description                                                                                                                                                                                             |
| -------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`               | `String`                  | Retorna `attributes` se a mutação foi a de um atributo, `characterData` se foi de um nó `CharacterData`, e `childList` se foi a mutação para uma árvore de nós.                                         |
| `target`             | `{{domxref("Node")}}`     | Retorna o nó que a mutação afetou, dependendo do `type`. Para `attributes`é o elemento cujo atributo mudou. Para `characterData` é o nó `CharacterData`. Para `childList` é o nó cujos filhos mudaram.  |
| `addedNodes`         | `{{domxref("NodeList")}}` | Retorna os nós adicionados. Será uma NodeList vazia se nenhum nó foi adicionado.                                                                                                                        |
| `removedNodes`       | `{{domxref("NodeList")}}` | Retorna os nós removidos. Será uma NodeList vazia se nenhum nó foi removido.                                                                                                                            |
| `previousSibling`    | `{{domxref("Node")}}`     | Retorna o irmão anterior dos nós adicionados ou removidos, ou `null`.                                                                                                                                   |
| `nextSibling`        | `{{domxref("Node")}}`     | Retorna o próximo irmão dos nós adicionados ou removidos, ou `null`.                                                                                                                                    |
| `attributeName`      | `String`                  | Retorna o nome local do atributo modificado, ou `null`.                                                                                                                                                 |
| `attributeNamespace` | `String`                  | Retorna o namespace do atributo modificado, ou `null`.                                                                                                                                                  |
| `oldValue`           | `String`                  | O valor retornado depende do `type`. Para `attributes`, é o valor do atributo modificado antes da troca. Para `characterData`, são os dados do nó modificado antes da troca. Para `childList` é `null`. |

## Exemplo de uso

O exemplo a seguir foi retirado [deste post](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/).

```js
// seleciona o nó alvo
var target = document.querySelector("#some-id");

// cria uma nova instância de observador
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log(mutation.type);
  });
});

// configuração do observador:
var config = { attributes: true, childList: true, characterData: true };

// passar o nó alvo, bem como as opções de observação
observer.observe(target, config);

// mais tarde você pode parar de observar
observer.disconnect();
```

## Leitura adicional

- [A brief overview](http://updates.html5rocks.com/2012/02/Detect-DOM-changes-with-Mutation-Observers)
- [A more in-depth discussion](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [A screencast by Chromium developer Rafael Weinstein](http://www.youtube.com/watch?v=eRZ4pO0gVWw)
- [The mutation summary library](http://code.google.com/p/mutation-summary/)
- [The DOM standard](http://dom.spec.whatwg.org/#mutation-observers) que define a interface do `MutationObserver`

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
