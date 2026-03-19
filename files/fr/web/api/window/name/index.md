---
title: "Window : propriété name"
short-title: name
slug: Web/API/Window/name
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef}}

La propriété `name` de l'interface {{DOMxRef("Window")}} permet de récupérer ou de définir le nom du contexte de navigation de la fenêtre.

## Valeur

Une chaîne de caractères.

## Description

Le nom de la fenêtre est principalement utilisé pour définir les cibles des liens hypertextes et des formulaires. Les contextes de navigation n'ont pas besoin d'avoir des noms.

Les navigateurs modernes réinitialisent `Window.name` à une chaîne de caractères vide si un onglet charge une page provenant d'un domaine différent, et restaurent le nom si la page originale est rechargée (par exemple, en sélectionnant le bouton «&nbsp;retour&nbsp;»). Cela empêche une page non fiable d'accéder à des informations que la page précédente pourrait avoir stockées dans la propriété (la nouvelle page pourrait également modifier ces données, qui pourraient ensuite être lues par la page originale si elle était rechargée).

`Window.name` a également été utilisé dans certains frameworks pour fournir des échanges de messages inter-domaines comme une alternative plus sécurisée à JSONP. Cependant, les applications web modernes hébergeant des données sensibles ne devraient pas se fier à `window.name` pour les échanges de messages inter-domaines — ce n'est pas son objectif prévu et il existe des moyens plus sûrs et meilleurs de partager des informations entre les fenêtres. {{DOMxRef("Window.postMessage()")}} est le mécanisme recommandé.

> [!NOTE]
> `window.name` convertit toutes les valeurs stockées en leurs représentations sous forme de chaîne de caractères en utilisant la méthode `toString`.

## Exemples

```html
<a href="url2" target="other-tab">Ce lien s'ouvrira dans l'autre onglet.</a>
```

```js
// Ouvrir un onglet avec un nom de contexte de navigation spécifique
const otherTab = window.open("url1", "_blank");
if (otherTab) otherTab.name = "other-tab";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
