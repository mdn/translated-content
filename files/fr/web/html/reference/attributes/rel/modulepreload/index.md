---
title: rel="modulepreload"
slug: Web/HTML/Reference/Attributes/rel/modulepreload
original_slug: Web/HTML/Attributes/rel/modulepreload
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Le mot-clé **`modulepreload`** pour l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) de l'élément HTML {{HTMLElement("link")}} offre un moyen déclaratif de précharger un [module JavaScript](/fr/docs/Web/JavaScript/Guide/Modules), de l'analyser, de le compiler et de le stocker dans la carte des modules du document pour une exécution ultérieure.

Le préchargement permet de télécharger les modules et leurs dépendances dès le début, ce qui peut réduire significativement le temps total de téléchargement et de traitement.
Cela permet aux pages de récupérer les modules en parallèle, au lieu de les charger séquentiellement à mesure que chaque module est traité et que ses dépendances sont découvertes.
Attention cependant&nbsp;: il ne faut pas tout précharger&nbsp;!
Le choix des modules à précharger doit être équilibré avec les autres opérations, afin d'éviter de pénaliser l'expérience utilisateur·ice.

Les liens avec `rel="modulepreload"` sont similaires à ceux avec [`rel="preload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload).
La principale différence est que `preload` télécharge simplement le fichier et le place dans le cache, tandis que `modulepreload` récupère le module, l'analyse, le compile et l'ajoute à la carte des modules pour qu'il soit prêt à être exécuté.

Lorsque vous utilisez `modulepreload`, le mode de requête est toujours [`cors`](/fr/docs/Web/API/Request/mode#cors), et la propriété [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) détermine le [mode d'identification](/fr/docs/Web/API/Request/credentials).
Si `crossorigin` est défini sur [`anonymous`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin#anonymous) ou une chaîne de caractères vide ([`""`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin#sect)) (par défaut), alors le mode d'identification est [`same-origin`](/fr/docs/Web/API/Request/credentials#same-origin), et les identifiants utilisateur·ice·s comme les cookies et l'authentification ne sont envoyés que pour les requêtes du même domaine.
Si `crossorigin` est défini sur [`use-credentials`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin#use-credentials), alors le mode d'identification est [`include`](/fr/docs/Web/API/Request/credentials#include), et les identifiants sont envoyés pour les requêtes du même domaine et inter-domaines.

L'attribut [`as`](/fr/docs/Web/HTML/Reference/Elements/link#as) est optionnel pour les liens avec `rel="modulepreload"` et sa valeur par défaut est "script".
Il peut être défini sur "script" ou toute destination similaire à un script, comme "audioworklet", "paintworklet", "serviceworker", "sharedworker" ou "worker".
Un [`Event`](/fr/docs/Web/API/Event/Event) nommé "error" est déclenché sur l'élément si une autre destination est utilisée.

Un navigateur _peut_ également choisir de récupérer automatiquement les dépendances du module.
Attention&nbsp;: il s'agit d'une optimisation propre à chaque navigateur&nbsp;— la seule façon de garantir que tous les navigateurs préchargeront les dépendances d'un module est de les définir individuellement&nbsp;!
De plus, les événements nommés `load` ou `error` sont déclenchés immédiatement après le succès ou l'échec du chargement des ressources _définies_.
Si les dépendances sont récupérées automatiquement, aucun événement supplémentaire n'est déclenché dans le thread principal (mais il est possible de surveiller les requêtes dans un service worker ou sur le serveur).

## Exemples

Considérez l'exemple [basic-modules <sup>(angl.)</sup>](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) ([version en ligne <sup>(angl.)</sup>](https://mdn.github.io/js-examples/module-examples/basic-modules/)), présenté dans le guide [Modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules#structure_de_lexemple).

La structure de fichiers est la suivante, avec le module principal `main.js` qui importe statiquement deux modules dépendants `modules/canvas.js` et `modules/square.js` via l'[instruction `import`](/fr/docs/Web/JavaScript/Reference/Statements/import).

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

Le code HTML ci-dessous montre comment `main.js` est récupéré via un élément `<script>`.
Ce n'est qu'après le chargement de `main.js` que le navigateur découvre et télécharge les deux modules dépendants.

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Exemple de module JavaScript basique</title>
    <script type="module" src="main.js"></script>
  </head>
  <body></body>
</html>
```

Le code HTML suivant met à jour l'exemple pour utiliser des éléments `<link>` avec `rel="modulepreload"` pour le fichier principal et chaque module dépendant.
C'est bien plus rapide car les trois modules commencent à être téléchargés de façon asynchrone et en parallèle avant d'être nécessaires.
Au moment où `main.js` est analysé et que ses dépendances sont connues, elles ont déjà été récupérées et téléchargées.

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Exemple de module JavaScript basique</title>
    <link rel="modulepreload" href="main.js" />
    <link rel="modulepreload" href="modules/canvas.js" />
    <link rel="modulepreload" href="modules/square.js" />
    <script type="module" src="main.js"></script>
  </head>
  <body></body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading) pour une comparaison entre `<link rel="modulepreload">` et d'autres fonctionnalités d'amélioration des performances.
- [Préchargement des modules <sup>(angl.)</sup>](https://web.dev/articles/modulepreload) sur web.dev
