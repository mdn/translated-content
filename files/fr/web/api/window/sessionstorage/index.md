---
title: Window.sessionStorage
slug: Web/API/Window/sessionStorage
---

{{APIRef}}

La propriété `sessionStorage` permet d'utiliser un objet {{domxref("Storage")}} valable pour la session de navigation en cours et pour les pages du même domaine que la page actuelle. L'objet global `sessionStorage` est similaire à {{domxref("Window.localStorage")}}, à la différence que les données enregistrées dans `sessionStorage` ont une durée vie limitée et expirent à la fin de la session de navigation actuelle. Une session de navigation dure aussi longtemps que le navigateur est ouvert et s'étend sur plusieurs chargements, rechargements et restaurations de pages. En revanche, une session de navigation n'est valable que pour le contexte de navigation actuel, c'est-à-dire que le fait d'**ouvrir une page dans un nouvel onglet ou dans une nouvelle fenêtre provoquera l'initialisation d'une nouvelle session de navigation**, ce qui diffère du comportement des sessions utilisant des cookies.

Il est à noter que les données stockées dans sessionStorage ou localStorage sont **spécifiques au protocole de la page.**

## Syntaxe

```js
// Enregistrer des données dans sessionStorage
sessionStorage.setItem("clé", "valeur");

// Récupérer des données depuis sessionStorage
var data = sessionStorage.getItem("clé");

// Supprimer des données de sessionStorage
sessionStorage.removeItem("clé");

// Supprimer toutes les données de sessionStorage
sessionStorage.clear();
```

### Valeur

Un objet {{domxref("Storage")}}.

## Exemple

L'exemple de code suivant accède à l'objet de stockage de session associé au domaine actuel et y ajoute une donnée à l'aide de {{domxref("Storage.setItem()")}}.

```js
sessionStorage.setItem("myCat", "Tom");
```

L'exemple suivant sauvegarde automatiquement le contenu d'un champ textuel. Si la page est accidentellement rafraîchie, le contenu du champ est restauré de sorte qu'aucune saisie n'est perdue.

```js
// Récupération du champ à enregistrer
var champ = document.getElementById("champ");

// Vérification de l'existence d'une donnée enregistrée auparavant
// (ce ne sera le cas que si la page a été rafraîchie)
if (sessionStorage.getItem("autosave")) {
  // Restauration du contenu du champ
  champ.value = sessionStorage.getItem("autosave");
}

// Écoute des changements de valeur du champ
champ.addEventListener("change", function () {
  // Enregistrement de la saisie utilisateur dans le stockage de session
  sessionStorage.setItem("autosave", champ.value);
});
```

> **Note :** Veuillez vous référer à l'article [Utilisation de l'API Web Storage](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) pour des exemples plus complets.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de l'API Web Storage](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
