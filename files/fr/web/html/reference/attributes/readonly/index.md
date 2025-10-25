---
title: "Attribut HTML : readonly"
short-title: readonly
slug: Web/HTML/Reference/Attributes/readonly
original_slug: Web/HTML/Attributes/readonly
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut booléen **`readonly`**, lorsqu'il est présent, rend l'élément non mutable, ce qui signifie que l'utilisateur·ice ne peut pas modifier le contrôle.

{{InteractiveExample("Démonstration HTML&nbsp;: readonly", "tabbed-shorter")}}

```html interactive-example
<label for="firstName">Prénom&nbsp;:</label>
<input id="firstName" name="firstName" type="text" value="Adam" />

<label for="age">Âge&nbsp;:</label>
<input id="age" name="age" type="number" value="42" readonly />

<label for="hobbies">Hobbies&nbsp;:</label>
<textarea id="hobbies" name="hobbies" readonly>Baseball</textarea>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:read-only,
textarea:read-only {
  background-color: silver;
}
```

## Vue d'ensemble

Si l'attribut `readonly` est défini sur un élément de saisie, parce que l'utilisateur·ice ne peut pas modifier la saisie, l'élément ne participe pas à la validation des contraintes.

L'attribut `readonly` est pris en charge par les contrôles de formulaire textuels, notamment&nbsp;:

- Les éléments {{HTMLElement("input")}} de type&nbsp;:
  - `{{HTMLElement("input/text","text")}}`
  - `{{HTMLElement("input/search","search")}}`
  - `{{HTMLElement("input/tel","tel")}}`
  - `{{HTMLElement("input/url","url")}}`
  - `{{HTMLElement("input/email","email")}}`
  - `{{HTMLElement("input/password","password")}}`
  - `{{HTMLElement("input/date","date")}}`
  - `{{HTMLElement("input/month","month")}}`
  - `{{HTMLElement("input/week","week")}}`
  - `{{HTMLElement("input/time","time")}}`
  - `{{HTMLElement("input/datetime-local","datetime-local")}}`
  - `{{HTMLElement("input/number","number")}}`
- {{HTMLElement("textarea")}}

L'attribut n'est pas pertinent pour tous les autres éléments, y compris {{HTMLElement("select")}} et {{HTMLElement("button")}}. Il ne s'applique pas non plus aux éléments de saisie non textuels, notamment&nbsp;:

- `{{HTMLElement("input/hidden","hidden")}}`
- `{{HTMLElement("input/range","range")}}`
- `{{HTMLElement("input/color","color")}}`
- `{{HTMLElement("input/checkbox","checkbox")}}`
- `{{HTMLElement("input/radio","radio")}}`
- `{{HTMLElement("input/file","file")}}`
- `{{HTMLElement("input/submit","submit")}}`
- `{{HTMLElement("input/image","image")}}`
- `{{HTMLElement("input/reset","reset")}}`
- `{{HTMLElement("input/button","button")}}`

Les éléments qui prennent en charge l'attribut `readonly` mais ne l'ont pas défini correspondent à la pseudo-classe {{CSSxRef(":read-write")}}. Tous les autres éléments correspondent à la pseudo-classe {{CSSxRef(":read-only")}}.

### Interactions entre attributs

La différence entre [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled) et `readonly` est que les contrôles en lecture seule peuvent toujours fonctionner et être sélectionnés, tandis que les contrôles désactivés ne peuvent pas être sélectionnés, ne sont pas envoyés avec le formulaire et ne fonctionnent généralement pas tant qu'ils ne sont pas activés.

Comme un champ en lecture seule ne peut pas voir sa valeur modifiée par une interaction utilisateur, [`required`](/fr/docs/Web/HTML/Reference/Attributes/required) n'a aucun effet sur les entrées pour lesquelles l'attribut `readonly` est également définit.

La seule façon de modifier dynamiquement la valeur de l'attribut readonly est via un script.

> [!NOTE]
> L'attribut `required` n'est pas autorisé sur les entrées pour lesquelles l'attribut `readonly` est spécifié.

### Utilisabilité

Les navigateurs affichent l'attribut `readonly`.

### Validation des contraintes

Si l'élément est en lecture seule, la valeur de l'élément ne peut pas être mise à jour par l'utilisateur·ice et ne participe pas à la validation des contraintes.

## Exemple

### HTML

```html
<div class="group">
  <input type="text" value="Une valeur" readonly="readonly" id="text" />
  <label for="text">Zone de texte</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" id="date" />
  <label for="date">Date</label>
</div>
<div class="group">
  <input
    type="email"
    value="exemple@domaine.fr"
    readonly="readonly"
    id="email" />
  <label for="email">Courriel</label>
</div>
<div class="group">
  <input type="password" value="MotDePasse123" readonly="readonly" id="pwd" />
  <label for="pwd">Mot de passe</label>
</div>
<div class="group">
  <textarea readonly="readonly" id="ta">Un message</textarea>
  <label for="ta">Message</label>
</div>
```

### Résultat

{{EmbedLiveSample('Exemple')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-classses {{CSSxRef(':read-only')}} et {{CSSxRef(':read-write')}}
- L'élément {{HTMLElement('input')}}
- L'élément {{HTMLElement('select')}}
