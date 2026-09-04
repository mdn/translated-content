---
title: "HTMLSelectElement : méthode showPicker()"
short-title: showPicker()
slug: Web/API/HTMLSelectElement/showPicker
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

La méthode **`showPicker()`** de l'interface {{DOMxRef("HTMLSelectElement")}} affiche le sélecteur du navigateur pour un élément `select`.

Il s'agit du même sélecteur qui serait normalement affiché lorsque l'élément est sélectionné, mais il peut être déclenché par un bouton ou une autre interaction utilisateur.

## Syntaxe

```js-nolint
showPicker()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si l'élément n'est pas modifiable, c'est-à-dire que l'utilisateur·ice ne peut pas le modifier et/ou qu'il ne peut pas être prérempli automatiquement.
- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si elle n'est pas explicitement déclenchée par une action utilisateur·ice telle qu'un geste tactile ou un clic de souris (le sélecteur requiert une {{Glossary("Transient activation", "activation transitoire")}}).
- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Levée si l'élément associé au sélecteur n'est pas affiché.
- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si appelée dans un cadre intégré d'origine croisée.

## Considérations de sécurité

Une [activation utilisateur transitoire](/fr/docs/Web/Security/Defenses/User_activation) est requise.
L'utilisateur·ice doit interagir avec la page ou un élément d'interface pour que cette fonctionnalité fonctionne.

La méthode ne peut être appelée que dans des cadres intégrés de même origine&nbsp;; une exception est levée si elle est appelée dans un cadre intégré d'origine croisée.

## Exemples

### Détection de fonctionnalité

Le code ci-dessous montre comment vérifier si `showPicker()` est pris en charge&nbsp;:

```js
if ("showPicker" in HTMLSelectElement.prototype) {
  // showPicker() est pris en charge.
}
```

### Lancer le sélecteur

Cet exemple montre comment utiliser un bouton pour lancer le sélecteur pour un élément `<select>` avec deux options.

#### HTML

```html
<p>
  <select>
    <option value="1">Un</option>
    <option value="2">Deux</option>
  </select>
  <button type="button">Afficher le sélecteur</button>
</p>
```

#### JavaScript

Le code récupère le `<button>` et ajoute un écouteur pour son évènement `click`.
Le gestionnaire d'évènement récupère l'élément `<select>` et appelle `showPicker()` dessus.

```js
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  const select = event.srcElement.previousElementSibling;
  try {
    select.showPicker();
  } catch (error) {
    window.alert(error);
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}
- L'interface {{DOMxRef("HTMLSelectElement")}}
- La méthode {{DOMxRef("HTMLInputElement.showPicker()")}}
