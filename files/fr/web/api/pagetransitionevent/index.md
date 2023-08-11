---
title: PageTransitionEvent
slug: Web/API/PageTransitionEvent
---

{{APIRef("HTML DOM")}}

Les évènements de transition de page sont émis quand une page web est chargée ou déchargée.

## Information du DOM

### Hiérarchie d'héritage

[Event](/fr/docs/Web/API/Event) PageTransitionEvent

## Exemple

### HTML

```html
<!doctype html>
<html>
  <body onpageshow="myFunction(event)"></body>
</html>
```

### JavaScript

```js
function myFunction(event) {
  if (event.persisted) {
    alert("La page a été mise en cache par le navigateur");
  } else {
    alert("La page n’a PAS été mise en cache par le navigateur");
  }
}
```

## Membres

L'objet **PageTransitionEvent** possède les types de membres suivants&nbsp;:

- [Propriétés](#Propriétés)

### Propriétés

L'objet **PageTransitionEvent** possède les propriétés suivantes&nbsp;:

<table>
  <tbody>
    <tr>
      <th>Propriété</th>
      <th>Type d'accès</th>
      <th>Description</th>
    </tr>
    <tr>
      <th><code>persisted</code></th>
      <th>Lecture seule</th>
      <th>Indique si une page web est chargée depuis le cache.</th>
    </tr>
  </tbody>
</table>
