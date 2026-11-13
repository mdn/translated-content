---
title: "Navigation : méthode updateCurrentEntry()"
short-title: updateCurrentEntry()
slug: Web/API/Navigation/updateCurrentEntry
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La méthode **`updateCurrentEntry()`** de l'interface {{DOMxRef("Navigation")}} met à jour le `state` de la {{DOMxRef("Navigation.currentEntry", "currentEntry")}}&nbsp;; utilisée dans les cas où le changement d'état est indépendant d'une navigation ou d'un rechargement.

## Syntaxe

```js-nolint
updateCurrentEntry(options)
```

### Paramètres

- `options`
  - : Un objet options contenant les propriétés suivantes&nbsp;:
    - `state`
      - : L'information définie par le·la développeur·euse à stocker dans le {{DOMxRef("NavigationHistoryEntry")}} associé une fois la navigation terminée, récupérable avec {{DOMxRef("NavigationHistoryEntry.getState", "getState()")}}. Ça peut être de n'importe quel type de données. Vous pouvez, par exemple, souhaiter stocker le nombre de visites d'une page à des fins d'analyse, ou stocker les détails de l'état de l'interface utilisateur afin que la vue puisse être affichée exactement comme l'utilisateur·ice l'a laissée. Toutes les données stockées dans `state` doivent être [structurées et clonables](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

### Valeur de retour

Aucune (`undefined`).

### Exceptions

- `DataCloneError` {{DOMxRef("DOMException")}}
  - : Levée si le paramètre `state` contient des valeurs qui ne sont pas clonables selon l'algorithme de clonage structuré.
- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de {{DOMxRef("Navigation.currentEntry")}} est `null`, c'est-à-dire qu'il n'y a pas d'entrée d'historique actuelle. Cela peut se produire, par exemple, si la page actuelle est `about:blank`.

## Exemples

Vous pouvez utiliser quelque chose comme ce qui suit pour mettre à jour l'état ouvert/fermé d'un élément {{HTMLElement("details")}} afin que l'état puisse être restauré lors du rechargement de la page ou du retour depuis un autre endroit.

```js
detailsElem.addEventListener("toggle", () => {
  navigation.updateCurrentEntry({ state: { detailOpen: detailsElem.open } });
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
