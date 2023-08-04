---
title: Utiliser l'API Web Storage
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
---

L'API "Web Storage" fournit des mécanismes par lesquels les navigateurs web peuvent stocker des paires de clé-valeur, d'une manière plus intuitive qu'en utilisant des cookies. Cet article décrit pas à pas comment se servir de cette technologie facile d'utilisation.

## Concepts de base

Les objets de stockages sont de simples magasins clé-valeur, similaires aux objets, mais restant intacts après des chargements de page. La clé peut être une chaîne de caractères ou des entiers, mais la valeur sera toujours une chaîne. Vous pouvez accéder à ces valeurs comme pour un objet ou avec les méthodes getItem() et setItem(). Les trois lignes suivantes vont enregistrer la couleur de la même façon :

```js
localStorage.colorSetting = "#a4509b";
localStorage["colorSetting"] = "#a4509b";
localStorage.setItem("colorSetting", "#a4509b");
```

> **Note :** Il est recommandé d'utiliser l'API "Web Storage" (`setItem`, `getItem`, `removeItem`, `key`, `length`) pour prévenir les [embûches](http://www.2ality.com/2012/01/objects-as-maps.html) associées à l'utilisation d'objets capable de stocker des couples clé-valeur.

Les deux principaux mécanismes internes du Stockage Web sont :

- `sessionStorage` qui maintient un espace de stockage, séparé pour chaque origine différente, disponible le temps de la session de la page (tant que le navigateur reste lancé, incluant les rechargements de la page et les restaurations).
- `localStorage` qui tient le même rôle mais persiste même après le redémarrage du navigateur web.

Ces mécanismes sont disponibles via les propriétés {{domxref("Window.sessionStorage")}} et {{domxref("Window.localStorage")}} (plus précisément, dans les navigateurs web le supportant, l'objet `Window` implémente les objets `WindowLocalStorage` et `WindowSessionStorage`, sur lesquels les propriétés `localStorage` et `sessionStorage` se basent) — l'appel d'un des deux va créer une instance de l'objet {{domxref("Storage")}}, dans lequel des données pourront être ajoutées, récupérées et supprimées. Pour `sessionStorage` et `localStorage`, un objet de stockage différent est utilisé pour chaque origine — ils fonctionnent et sont contrôlés séparément.

Donc, par exemple, un appel initial de `localStorage` sur un document va retourner un objet {{domxref("Storage")}} ; un appel de `sessionStorage` sur un document va retourner un objet {{domxref("Storage")}} différent. Les deux peuvent se manipuler de la même façon, mais séparément.

## Détection de la fonction localStorage

Pour être capable d'utiliser localStorage, nous devons d'abord vérifier qu'il est supporté et disponible dans la session de navigation actuelle.

### Test du support et disponibilité

Les navigateurs qui supportent localStorage ont sur l'objet windows une propriété nommée localStorage. Cependant, pour différentes raisons, la vérification seule de l'existnce de cette propriété peut provoquer des erreurs. .Son absence n'est pas non plus une garantie de son indisponibilité, certains navigateurs offrent un paramètre pour désactiver localStorage. Donc un navigateur _peut_ supporter localStorage, mais peut ne pas le rendre _disponible_ aux scripts de la page. Un exemple de cela est Safari, qui en mode de navigation privée fournit un objet localStorage vide dont le quota est nul, le rendant inutilisable. Notre fonction de détection doit prendre en compte ces scénarios.

Voici une fonction qui va détecter que localStorage est supporté mais aussi disponible:

```js
function storageAvailable(type) {
  try {
    var storage = window[type],
      x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
    );
  }
}
```

Et voici comment l'utiliser :

```js
if (storageAvailable("localStorage")) {
  // Nous pouvons utiliser localStorage
} else {
  // Malheureusement, localStorage n'est pas disponible
}
```

Au lieu de cela, vous pouvez tester la disponibilité de sessionStorage en appelant `storageAvailable('sessionStorage')`.

Vous pouvez retrouver ici [une brève histoire de la détection de localStorage](https://gist.github.com/paulirish/5558557).

## Un exemple simple

Pour illustrer certains usages typiques du Stockage Web, nous avons créé un exemple simple ingénieusement appelé **Web Storage Demo**. La [page de lancement](https://mdn.github.io/dom-examples/web-storage/) fournit des contrôles afin de personnaliser la couleur, la police de caractère et l'image de décoration:

![](landing.png)

Quand vous choisissez une option différente, la page est mise à jour instantanément; de plus, vos choix sont stockés avec localStorage, donc quand vous quitterez la page et la rechargerez plus tard, vos choix auront été mémorisés.

Nous avons aussi fournit une [page pour l'événement émis](https://mdn.github.io/dom-examples/web-storage/event.html) - Si vous chargez cette page dans un autre onglet, puis faite les changements de votre choix sur la page de démarrage, vous allez voir une information liée à l'événement {{domxref("StorageEvent")}} qui a été lancé.

![](event-output.png)

> **Note :** En plus de l'affichage en temps réel des pages en utilisant les liens ci-dessus, vous pouvez aussi [regarder le code-source](https://github.com/mdn/dom-examples/tree/master/web-storage).

## Tester si le stockage a déjà été rempli

Pour démarrer avec [main.js](https://github.com/mdn/dom-examples/blob/master/web-storage/main.js), nous allons tester que l'objet de stockage a bien été rempli (c-à-d, que l'on a déjà accédé à la page):

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

La méthode {{domxref("Storage.getItem()")}} est utilisée pour obtenir les données de l'élément depuis le stockage ; dans ce cas nous testons l'existence de l'élément `bgcolor`; si il n'existe pas nous lançons `populateStorage()` pour ajouter des valeurs personnalisées dans le stockage. Si il y a déjà des valeurs ici, nous lançons `setStyles()` pour mettre à jour le style de la page avec les valeurs stockées.

**Note**: Vous pouvez aussi utiliser {{domxref("Storage.length")}} pour tester si l'objet de stockage est vide ou non.

## Obtenir les valeurs du stockage

Comme vu ci dessus, les valeurs peuvent être recupérées du stockage en utilisant {{domxref("Storage.getItem()")}}. La méthode prend en argument la clé de l'élément, et retourne la valeur. Par exemple:

```js
function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

Ici, les trois premières lignes vont chercher les valeurs dans le stockage local. Puis, nous définissons les valeurs exposées par le formulaire avec ces valeurs, afin qu'elles persistent quand on recharge la page. Enfin, nous mettons à jour le style et l'image de décoration de la page, ainsi nos options de personnalisation reviennent lors du rechargement de la page.

## Enregistrer une valeur dans le stockage

{{domxref("Storage.setItem()")}} est aussi bien utilisée pour la création d'une donnée, que pour la modification d'une donnée existante (si cette donnée existe déja). Elle prend deux arguments — la clé de l'élément à créer/modifier, et la valeur associée à stocker.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

La fonction `populateStorage()` définit trois éléments dans le stockage local — la couleur de fond, la police de caractère et le chemin de l'image. Ensuite elle lance la fonction `setStyles()` pour mettre à jour le style de la page, etc.

Nous avons aussi inclu un handler `onchange` sur chaque élément du formulaire, ainsi les données et le style sont mis à jour quelque soit la valeur du formulaire qui a changé:

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

## Répondre aux changements du stockage avec StorageEvent

L'événement [`StorageEvent`](/fr/docs/Web/API/StorageEvent) est lancé dès lors qu'un changement est fait sur l'objet {{domxref("Storage")}}. Cela ne va pas marcher sur la même page qui a provoqué le changement: c'est vraiment un moyen pour que les autres pages du domaine qui utilisent le stockage local puissent se synchroniser avec tous les changements qui ont été fait.

Les pages des autres domaines ne peuvent pas accéder aux mêmes objets de stockage.

Sur la page d'événement (voir [events.js](https://github.com/mdn/web-storage-demo/blob/gh-pages/event.js)) le seul JavaScript est :

```js
window.addEventListener("storage", function (e) {
  document.querySelector(".my-key").textContent = e.key;
  document.querySelector(".my-old").textContent = e.oldValue;
  document.querySelector(".my-new").textContent = e.newValue;
  document.querySelector(".my-url").textContent = e.url;
  document.querySelector(".my-storage").textContent = e.storageArea;
});
```

Ici nous avons ajouté un écouteur d'évènement à l'objet `window` qui se lance quand l'objet [`Storage`](/fr/docs/Web/API/Storage), associé à l'origine courante, est modifié. Comme vous pouvez le voir ci-dessus, l'objet évènement associé à cet évènement a de nombreuses propriétés contenant des informations utiles&nbsp;: la clé de la donnée qui a changé, l'ancienne valeur avant le changement, la nouvelle valeur après le changement, l'URL du document qui a changé le stockage et l'objet stockage lui-même.

## Supprimer des données

l'API de Stockage Web fournit aussi un couple de méthodes simples pour supprimer des données. Nous ne les utilisons pas dans notre démo, mais elles sont simples à ajouter dans votre projet :

- {{domxref("Storage.removeItem()")}} prend un seul argument — la clé de l'élément que vous souhaitez supprimer — et le supprime de l'objet de stockage pour le domaine.
- {{domxref("Storage.clear()")}} ne prend pas d'argument, et vide l'ensemble des données de l'objet de stockage pour le domaine.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Page API du Stockage Web](/fr/docs/Web/API/Web_Storage_API)
