---
title: "HTMLElement : propriété autocapitalize"
short-title: autocapitalize
slug: Web/API/HTMLElement/autocapitalize
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`autocapitalize`** de l'interface {{DOMxRef("HTMLElement")}} représente le comportement de capitalisation de l'élément pour la saisie utilisateur. Elle est disponible sur tous les éléments HTML, mais n'affecte pas tous les éléments, notamment&nbsp;:

- les éléments HTML {{HTMLElement("input")}} et {{HTMLElement("textarea")}}.
- tout élément avec l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) activé.

`autocapitalize` n'affecte pas le comportement lors de la saisie au clavier physique. Elle affecte le comportement d'autres mécanismes de saisie comme les claviers virtuels sur appareils mobiles et la saisie vocale. Cela peut aider les utilisateur·ice·s en rendant la saisie plus rapide et plus facile, par exemple en mettant automatiquement la première lettre de chaque phrase en majuscule.

Elle reflète la valeur de l'attribut HTML global [`autocapitalize`](/fr/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

## Valeur

Une chaîne de caractères qui représente le comportement de capitalisation de l'élément pour la saisie utilisateur. Les valeurs valides sont&nbsp;:

- `none` ou `off`
  - : Aucune capitalisation automatique ne doit être appliquée, toutes les lettres sont en minuscules par défaut.
- `sentences` ou `on`
  - : La première lettre de chaque phrase doit être en majuscule par défaut&nbsp;; toutes les autres lettres sont en minuscules.
- `words`
  - : La première lettre de chaque mot doit être en majuscule par défaut&nbsp;; toutes les autres lettres sont en minuscules.
- `characters`
  - : Toutes les lettres sont en majuscules par défaut.

## Exemples

L'exemple suivant montre comment contrôler le comportement de capitalisation pour la saisie utilisateur via un script&nbsp;:

```html
<div>
  Comportement actuel de la capitalisation&nbsp;: <span id="ac-label"></span>
</div>
<div id="ac-element" contenteditable="true" autocapitalize="default">
  saisissez ici
</div>
<select id="ac-controller" type="checkbox" checked>
  <option value="default">défaut</option>
  <option value="none">aucun</option>
  <option value="sentences">phrases</option>
  <option value="words">mots</option>
  <option value="characters">caractères</option></select
>Sélectionnez le comportement de capitalisation
```

```js
const label = document.getElementById("ac-label");
const element = document.getElementById("ac-element");
const controller = document.getElementById("ac-controller");

controller.addEventListener("input", (e) => {
  const behavior = e.target.value;
  label.textContent = behavior;
  element.autocapitalize = behavior;
});
```

{{EmbedLiveSample('Exemples', 600, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`autocapitalize`](/fr/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
