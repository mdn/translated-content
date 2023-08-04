---
title: Fonction de rappel (callback)
slug: Glossary/Callback_function
---

Une fonction de rappel (aussi appelée _callback_ en anglais) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.

Voici un rapide exemple :

```js
function salutation(name) {
  alert("Bonjour " + name);
}

function processUserInput(callback) {
  var name = prompt("Entrez votre nom.");
  callback(name);
}

processUserInput(salutation);
```

L' exemple ci-dessus est un rappel {{glossary("synchronous","synchrone")}} et il est exécuté immédiatement.

Notez cependant que les rappels sont souvent utilisés pour continuer l'exécution de code après l'achèvement d'une opération {{glossary("asynchronous","asynchrone")}} — ceux-ci sont appelés les rappels asynchrones. Dans l'exemple [xhr-async-callback](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/xhr-async-callback.html) ([voir aussi en direct](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/xhr-async-callback.html)), on utilise la fonction `displayImage` comme une fonction de rappel pour la fonction `loadAsset` (cette dernière récupère l'image via une requête [XHR](</fr/docs/Glossaire/XHR_(XMLHttpRequest)>)).

Exécuté de cette façon, asynchrone via l'API Web [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest), le chargement de l'image ne bloque pas le reste du contenu.

## Voir aussi

- [Fonction de rappel](https://fr.wikipedia.org/wiki/Fonction_de_rappel) sur Wikipédia
- [Comprendre les fonctions de rappel JavaScript et les utiliser](https://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/) (en anglais).
