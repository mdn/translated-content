---
title: "Attribut HTML : readonly"
slug: Web/HTML/Attributes/readonly
---

{{HTMLSidebar}}

L'attribut booléen **`readonly`**, lorsqu'il est présent, rend l'élément non mutable, ce qui signifie que l'utilisateur ne peut pas modifier le contrôle. Si l'attribut `readonly` est spécifié sur un élément de saisie, comme l'utilisateur ne peut pas modifier la saisie, l'élément ne participe pas à la validation des contraintes.

L'attribut `readonly` est pris en charge par les types [`text`](/fr/docs/Web/HTML/Element/Input/text), [`search`](/fr/docs/Web/HTML/Element/Input/search), [`url`](/fr/docs/Web/HTML/Element/Input/url), [`tel`](/fr/docs/Web/HTML/Element/Input/tel), [`email`](/fr/docs/Web/HTML/Element/Input/email), [`password`](/fr/docs/Web/HTML/Element/Input/password), [`date`](/fr/docs/Web/HTML/Element/Input/date), [`mois`](/fr/docs/Web/HTML/Element/Input/month), [`week`](/fr/docs/Web/HTML/Element/Input/week), [`time`](/fr/docs/Web/HTML/Element/Input/time), [`datetime-local`](/fr/docs/Web/HTML/Element/Input/datetime-local), et [`number`](/fr/docs/Web/HTML/Element/Input/number) de [`<input>`](/fr/docs/Web/HTML/Element/Input) et les éléments de contrôle de formulaire [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea). S'il est présent sur l'un de ces types de saisie et éléments, la pseudo-classe [`:read-only`](/fr/docs/Web/CSS/:read-only) correspondra. Si l'attribut n'est pas inclus, la pseudo-classe [`:read-write`](/fr/docs/Web/CSS/:read-write) correspondra.

L'attribut n'est pas pris en charge ou pertinent pour [`<select>`](/fr/docs/Web/HTML/Element/select) ou les types d'entrée qui ne sont déjà pas mutables, comme [`checkbox`](/fr/docs/Web/HTML/Element/Input/checkbox) et [`radio`](/fr/docs/Web/HTML/Element/Input/radio) ou ne peuvent pas, par définition, commencer par une valeur, comme le type d'entrée [`file`](/fr/docs/Web/HTML/Element/Input/file). [`range`](/fr/docs/Web/HTML/Element/Input/range) et [`color`](/fr/docs/Web/HTML/Element/Input/color), car tous deux ont des valeurs par défaut. Il n'est pas non plus pris en charge sur [`hidden`](/fr/docs/Web/HTML/Element/Input/hidden), car on ne peut pas s'attendre à ce qu'un utilisateur remplisse un formulaire qui est caché. Il n'est pas non plus supporté sur des types de boutons, y compris `image`.

> **Note :** Seuls les contrôles de texte peuvent être rendus en lecture seule, car pour les autres contrôles (comme les cases à cocher et les boutons), il n'y a pas de distinction utile entre être en lecture seule et être désactivé, donc l'attribut `readonly` ne s'applique pas.

Lorsqu'une entrée possède l'attribut `readonly`, la pseudo-classe [`:read-only`](/fr/docs/Web/CSS/:read-only) s'y applique également. Inversement, les entrées qui prennent en charge l'attribut `readonly` mais qui n'ont pas l'attribut défini correspondent à la pseudo-classe [`:read-write`](/fr/docs/Web/CSS/:read-write).

### Interactions entre attributs

La différence entre [`disabled`](/fr/docs/Web/HTML/Attributes/disabled) et `readonly` est que les contrôles en lecture seule peuvent toujours fonctionner et sont toujours focusables, alors que les contrôles désactivés ne peuvent pas recevoir de focus et ne sont pas soumis avec le formulaire et ne fonctionnent généralement pas comme contrôles jusqu'à ce qu'ils soient activés.

Comme un champ en lecture seule ne peut pas voir sa valeur modifiée par une interaction avec l'utilisateur, [`required`](required) n'a aucun effet sur les entrées pour lesquelles l'attribut `readonly` est également spécifié.

Le seul moyen de modifier dynamiquement la valeur de l'attribut readonly est d'utiliser un script.

> **Note :** L'attribut `required` n'est pas autorisé sur les entrées pour lesquelles l'attribut `readonly` est spécifié.

### Validation des contraintes

Si l'élément est en lecture seule, la valeur de l'élément ne peut pas être mise à jour par l'utilisateur et ne participe pas à la validation des contraintes.

## Exemples

### HTML

```html
<div class="group">
  <input type="textbox" value="Some value" readonly="readonly" />
  <label>Textbox</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" />
  <label>Date</label>
</div>
<div class="group">
  <input type="email" value="Some value" readonly="readonly" />
  <label>Email</label>
</div>
<div class="group">
  <input type="password" value="Some value" readonly="readonly" />
  <label>Password</label>
</div>
<div class="group">
  <textarea readonly="readonly">Some value</textarea>
  <label>Message</label>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-classses [`:read-only`](/fr/docs/Web/CSS/:read-only) et [`:read-write`](/fr/docs/Web/CSS/:read-write)
- L'élément [`<input>`](/fr/docs/Web/HTML/Element/Input)
- L'élément [`<select>`](/fr/docs/Web/HTML/Element/select)
