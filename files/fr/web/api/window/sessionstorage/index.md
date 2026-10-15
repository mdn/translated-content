---
title: "Window : propriété sessionStorage"
short-title: sessionStorage
slug: Web/API/Window/sessionStorage
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Web Storage API")}}

La propriété en lecture seule **`sessionStorage`** accède à un objet {{DOMxRef("Storage")}} de session pour {{Glossary("origin", "l'origine")}} actuel. `sessionStorage` est similaire à {{DOMxRef("Window.localStorage", "localStorage")}}&nbsp;; la différence est que, tandis que `localStorage` est partitionné uniquement par origine, `sessionStorage` est partitionné à la fois par origine et par onglets du navigateur (contextes de navigation de premier niveau). Les données dans `sessionStorage` ne sont conservées que pendant la durée de la session de la page.

- Lorsque qu'un document est chargé dans un onglet particulier du navigateur, une session de page unique est créée et assignée à cet onglet particulier. Cette session de page n'est accessible que dans cet onglet particulier. Le document principal, et tous les {{Glossary("browsing context", "contextes de navigation")}} intégrés (cadres intégrés), sont regroupés par leur origine et chaque origine a accès à sa propre zone de stockage séparée.
- Si la page possède un {{DOMxRef("Window.opener", "opener")}}, le `sessionStorage` est initialement une copie de l'objet `sessionStorage` de l'ouvreur. Cependant, ils restent séparés et les modifications apportées à l'un n'affectent pas l'autre. Pour empêcher la copie du `sessionStorage`, utilisez l'une des techniques qui suppriment `opener` (voir {{DOMxRef("Window.opener")}}).
- Une session de page dure tant que l'onglet ou le navigateur est ouvert, et survit aux rechargements et restaurations de la page.
- L'ouverture d'une page dans un nouvel onglet ou une nouvelle fenêtre crée une nouvelle session avec la valeur du contexte de navigation de premier niveau, ce qui diffère du fonctionnement des cookies de session.
- La fermeture de l'onglet/de la fenêtre met fin à la session et efface les données dans `sessionStorage`.

## Valeur

Un objet {{DOMxRef("Storage")}} qui peut être utilisé pour accéder à l'espace de stockage de session de l'origine actuelle.

### Exceptions

- `SecurityError`
  - : Levée dans l'un des cas suivants&nbsp;:
    - L'origine n'est pas [un tuple schéma/hôte/port valide](/fr/docs/Web/Security/Defenses/Same-origin_policy#definition_of_an_origin). Cela peut se produire si l'origine utilise les schémas `file:` ou `data:`, par exemple.
    - La requête ne respecte pas une décision de politique. Par exemple, l'utilisateur·ice a configuré les navigateurs pour empêcher la page de conserver des données.

    Notez que si l'utilisateur·ice bloque les cookies, les navigateurs interprètent probablement cela comme une instruction pour empêcher la page de conserver des données.

## Exemples

### Utilisation simple

```js
// Sauvegarde des données dans sessionStorage
sessionStorage.setItem("key", "value");

// Récupère les données sauvegardées depuis sessionStorage
let donnees = sessionStorage.getItem("key");

// Supprime les données sauvegardées depuis sessionStorage
sessionStorage.removeItem("key");

// Supprime toutes les données sauvegardées depuis sessionStorage
sessionStorage.clear();
```

### Sauvegarder le texte entre les actualisations

L'exemple suivant sauvegarde automatiquement le contenu d'un champ de texte, et si le navigateur est actualisé, restaure le contenu du champ de texte afin qu'aucune écriture ne soit perdue.

```js
// Récupère le champ de texte que nous allons suivre
let champ = document.getElementById("champ");

// Regarde si nous avons une valeur d'enregistrement automatique
// (cela ne se produit que si la page est actualisée accidentellement)
if (sessionStorage.getItem("autosave")) {
  // Restaure les contenus du champ de texte
  champ.value = sessionStorage.getItem("autosave");
}

// Écoute les changements dans le champ de texte
champ.addEventListener("change", () => {
  // Et sauvegarde les résultats dans l'objet de stockage de session
  sessionStorage.setItem("autosave", champ.value);
});
```

> [!NOTE]
> Veuillez vous référer à l'article [Utiliser l'API Web Storage](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) pour des exemples plus complets.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API Web Storage](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- La propriété {{DOMxRef("Window.localStorage")}}
