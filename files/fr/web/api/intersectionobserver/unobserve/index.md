---
title: IntersectionObserver.unobserve()
slug: Web/API/IntersectionObserver/unobserve
---

{{APIRef("Intersection Observer API")}}

La méthode **`unobserve()`** de l'interface [`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver) indique à l'objet `IntersectionObserver` courant de cesser d'observer l'élément cible spécifié.

## Syntaxe

```js
IntersectionObserver.unobserve(target);
```

### Paramètres

- `target`
  - : L'[`élément`](/fr/docs/Web/API/Element) à cesser d'observer. Si l'élément spécifié n'est pas en cours d'observation, cette méthode ne fait rien et ne lève pas d'exception.

### Valeur de retour

`undefined`.

## Exemple

Ce fragment de code illustre la création d'un observateur, l'ajout d'un élément sous observation puis l'arrêt de cette d'observation.

```js
let observer = new IntersectionObserver(callback);
observer.observe(document.getElementById("elementAObserver"));

/* ... */

observer.unobserve(document.getElementById("elementAObserver"));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API _Intersection Observer_](/fr/docs/Web/API/Intersection_Observer_API)
- [`IntersectionObserver.observe()`](/fr/docs/Web/API/IntersectionObserver/observe)
