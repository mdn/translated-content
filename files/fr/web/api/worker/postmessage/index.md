---
title: Worker.postMessage()
slug: Web/API/Worker/postMessage
---

{{ apiref("Worker") }}

La méthode **`Worker.postMessage()`** envoie un message à la portée locale du worker. Cette fonction accepte un seul paramètre, qui est la donnée à envoyer au worker. Cette donnée peut-être de n'importe quelle valeur ou un objet JavaScript pris en charge par l'algorithme de clone structuré, qui inclut les références cycliques.

Le Worker peut renvoyer une information au thread qui l'a créé en utilisant la méthode {{domxref("DedicatedWorkerGlobalScope.postMessage")}}.

## Syntaxe

```js
worker.postMessage(aMessage, [transferList]);
```

### Paramètres

- _aMessage_
  - : L'objet à envoyer au worker; il va être dans le champ de donnée `data` dans l'évènement délivré au gestonnaire d'évènement {{domxref("Worker.onmessage")}}. Cette donnée peut être de n'importe quelle valeur ou un objet JavaScript pris en charge par l'algorithme de [clone structuré](/fr/docs/Web/API/Web_Workers_API/algorithme_clonage_structure), qui inclut les références cycliques.
- _transferList_ {{optional_inline}}

  - : Un tableau optionnel d'objets {{domxref("Transferable")}} desquels on doit transférer la propriété. Si la propriété d'un objet est transférée, il devient inutilisable (_neutralisé_) pour le contexte émétteur et devient disponible uniquement pour le worker auquel cela a été envoyé.

    Seulement des objets de types {{domxref("MessagePort")}}, {{domxref("ArrayBuffer")}} ou {{domxref("ImageBitmap")}} peuvent être transférés. `null` n'est pas une valeur accéptée pour `transfer`.

### Retour

Vide.

## Exemple

L'extrait de code suivant montre la création d'un objet {{domxref("Worker")}} en utilisant le constructeur {{domxref("Worker.Worker", "Worker()")}}. Quand les deux champs de formulaire (`fisrt` et `second`) ont été changés, les évènements [`change`](/fr/docs/Web/API/HTMLElement/change_event) invoquent `postMessage()` pour envoyer la valeur des deux entrées au _worker_ courant.

```js
var myWorker = new Worker("worker.js");

first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

Pour l'exemple en entier, voir [Basic dedicated worder example](https://github.com/mdn/simple-web-worker) ([démonstration](http://mdn.github.io/simple-web-worker/)).

> **Note :** `postMessage()` peut n'envoyer qu'un objet à la fois. Comme ci-dessus, si vous voulez envoyez plusieurs valeurs, vous pouvez utiliser un tableau.

### Exemple de transfert

Cette exemple montre une extension pour Firefox qui transfert un `ArrarBuffer` depuis le _thread_ principal vers le `ChromeWorker`, et le `ChromeWorker` répond au le thread principal.

#### Main thread code

```js
var myWorker = new ChromeWorker(self.path + "myWorker.js");

function handleMessageFromWorker(msg) {
  console.log("incoming message from worker, msg:", msg);
  switch (msg.data.aTopic) {
    case "do_sendMainArrBuff":
      sendMainArrBuff(msg.data.aBuf);
      break;
    default:
      throw "no aTopic on incoming message to ChromeWorker";
  }
}

myWorker.addEventListener("message", handleMessageFromWorker);

// Ok lets create the buffer and send it
var arrBuf = new ArrayBuffer(8);
console.info("arrBuf.byteLength pre transfer:", arrBuf.byteLength);

myWorker.postMessage(
  {
    aTopic: "do_sendWorkerArrBuff",
    aBuf: arrBuf, // The array buffer that we passed to the transferrable section 3 lines below
  },
  [
    arrBuf, // The array buffer we created 9 lines above
  ],
);

console.info("arrBuf.byteLength post transfer:", arrBuf.byteLength);
```

#### Worker code

```js
self.onmessage = function (msg) {
  switch (msg.data.aTopic) {
    case "do_sendWorkerArrBuff":
      sendWorkerArrBuff(msg.data.aBuf);
      break;
    default:
      throw "no aTopic on incoming message to ChromeWorker";
  }
};

function sendWorkerArrBuff(aBuf) {
  console.info("from worker, PRE send back aBuf.byteLength:", aBuf.byteLength);

  self.postMessage({ aTopic: "do_sendMainArrBuff", aBuf: aBuf }, [aBuf]);

  console.info("from worker, POST send back aBuf.byteLength:", aBuf.byteLength);
}
```

#### Output logged

```plain
arrBuf.byteLength pre transfer: 8                              bootstrap.js:40
arrBuf.byteLength post transfer: 0                             bootstrap.js:42

from worker, PRE send back aBuf.byteLength: 8                  myWorker.js:5:2

incoming message from worker, msg: message { ... }             bootstrap.js:20
got back buf in main thread, aBuf.byteLength: 8                bootstrap.js:12

from worker, POST send back aBuf.byteLength: 0                 myWorker.js:7:2
```

`byteLength` passe à 0 quand il est transferré. Pour voir l'exemple de cette extension de démonstration de Firefox, voir [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("Worker")}} auquel il appartient.
