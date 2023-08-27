---
title: "Attribut HTML : disabled"
slug: Web/HTML/Attributes/disabled
---

{{HTMLSidebar}}

L'attribut booléen **`disabled`**, lorsqu'il est présent, rend l'élément non mutable, non focusable, ou même non soumis avec le formulaire. L'utilisateur ne peut ni modifier ni cibler le contrôle, ni les descendants du contrôle de formulaire. Si l'attribut `disabled` est spécifié sur un contrôle de formulaire, l'élément et ses descendants de contrôle de formulaire ne participent pas à la validation des contraintes. Souvent, les navigateurs grisent ces contrôles et ils ne reçoivent aucun événement de navigation, comme les clics de souris ou les événements liés au focus.

L'attribut `disabled` est utilisé par [`<button>`](/fr/docs/Web/HTML/Element/Button), [`<fieldset>`](/fr/docs/Web/HTML/Element/Fieldset), [`<keygen>`](/fr/docs/Web/HTML/Element/Keygen), [`<optgroup>`](/fr/docs/Web/HTML/Element/Optgroup), [`<option>`](/fr/docs/Web/HTML/Element/Option), [`<select>`](/fr/docs/Web/HTML/Element/select), [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) et [`<input>`](/fr/docs/Web/HTML/Element/Input).

Cet attribut booléen indique que l'utilisateur ne peut pas interagir avec le contrôle ou ses contrôles descendants. Si cet attribut n'est pas spécifié, le contrôle hérite ce paramètre de l'élément contenant, par exemple `fieldset` ; s'il n'y a pas d'élément contenant avec l'attribut `disabled` défini, et que le contrôle lui-même ne possède pas cet attribut, alors le contrôle est activé. S'il est déclaré sur un [`<optgroup>`](/fr/docs/Web/HTML/Element/Optgroup), le sélecteur est toujours interactif (sauf s'il est désactivé autrement), mais aucun des éléments du groupe d'options n'est sélectionnable.

> **Note :** Si un [`<fieldset>`](/fr/docs/Web/HTML/Element/Fieldset) est désactivé, les contrôles de formulaire descendants sont tous désactivés, à l'exception des contrôles de formulaire dans la légende ([`<legend>`](/fr/docs/Web/HTML/Element/Legend)).

Lorsqu'un élément de support a l'attribut `disabled` est appliqué, la pseudo-classe [`:disabled`](/fr/docs/Web/CSS/:disabled) s'y applique également. Inversement, les éléments qui prennent en charge l'attribut `disabled` mais qui n'ont pas l'attribut défini correspondent à la pseudo-classe [`:enabled`](/fr/docs/Web/CSS/:enabled).

Cet attribut booléen empêche l'utilisateur d'interagir avec le bouton. Si cet attribut n'est pas défini, le bouton peut toujours être désactivé à partir d'un élément contenant, par exemple [`<fieldset>`](/fr/docs/Web/HTML/Element/Fieldset) ; s'il n'y a pas d'élément contenant avec l'attribut `disabled` défini, alors le bouton est activé.

Firefox va, contrairement aux autres navigateurs, faire persister l'état désactivé dynamique d'un [`<button>`](/fr/docs/Web/HTML/Element/Button) à travers les chargements de pages. Utilisez l'attribut [`autocomplete`](/fr/docs/Web/HTML/Attributes/autocomplete) pour contrôler cette fonctionnalité.

### Interactions entre attributs

La différence entre `disabled` et [`readonly`](/fr/docs/Web/HTML/Attributes/readonly) est que les contrôles en lecture seule peuvent toujours fonctionner et sont toujours focusables, alors que les contrôles désactivés ne peuvent pas recevoir de focus et ne sont pas soumis avec le formulaire et ne fonctionnent généralement pas comme contrôles jusqu'à ce qu'ils soient activés.

Étant donné qu'un champ désactivé ne peut pas voir sa valeur modifiée, [`required`](/fr/docs/Web/HTML/Attributes/required) n'a aucun effet sur les entrées dont l'attribut `disabled` est également spécifié. De plus, puisque les éléments deviennent immuables, la plupart des autres attributs, tels que [`pattern`](/fr/docs/Web/HTML/Attributes/pattern), n'ont aucun effet, tant que le contrôle n'est pas activé.

> **Note :** L'attribut `required` n'est pas autorisé sur les entrées pour lesquelles l'attribut `disabled` est spécifié.

### Utilisation

Les navigateurs affichent les contrôles de formulaire désactivés en grisé, car les contrôles de formulaire désactivés sont immuables, ne reçoivent pas de focus ou d'événements de navigation, comme les clics de souris ou les événements liés au focus, et ne sont pas soumis avec le formulaire.

S'il est présent sur un élément de support, la pseudo-classe [`:disabled`](/fr/docs/Web/CSS/:disabled) correspondra. Si l'attribut n'est pas inclus, la pseudo-classe [`:enabled`](/fr/docs/Web/CSS/:enabled) correspondra. Si l'élément ne prend pas en charge l'attribut disabled, l'attribut n'aura aucun effet, y compris celui de ne pas être apparié par les pseudo-classes `:disabled` et `:enabled`.

### Validation des contraintes

Si l'élément est `disabled`, alors la valeur de l'élément ne peut pas recevoir de focus et ne peut pas être mis à jour par l'utilisateur, et ne participe pas à la validation des contraintes.

## Exemples

Lorsque les contrôles de formulaire sont désactivés, de nombreux navigateurs les affichent par défaut dans une couleur plus claire et grisée. Voici des exemples de case à cocher, bouton radio, [`<option>`](/fr/docs/Web/HTML/Element/Option) et [`<optgroup>`](/fr/docs/Web/HTML/Element/Optgroup), ainsi que certains contrôles de formulaire qui sont désactivés via l'attribut `disabled` défini sur l'élément ancêtre [`<fieldset>`](/fr/docs/Web/HTML/Element/Fieldset). Les [`<option>`](/fr/docs/Web/HTML/Element/Option) sont désactivés, mais le [`<select>`](/fr/docs/Web/HTML/Element/select) lui-même ne l'est pas. Nous aurions pu désactiver l'ensemble de [`<select>`](/fr/docs/Web/HTML/Element/select) en ajoutant l'attribut à cet élément plutôt qu'à ses descendants.

```html
<fieldset>
  <legend>Cases à cocher</legend>
  <p>
    <label>
      <input type="checkbox" name="chbox" value="regular" /> Régulier
    </label>
  </p>
  <p>
    <label>
      <input type="checkbox" name="chbox" value="disabled" disabled /> désactivé
    </label>
  </p>
</fieldset>

<fieldset>
  <legend>Boutons radio</legend>
  <p>
    <label>
      <input type="radio" name="radio" value="regular" /> Régulier
    </label>
  </p>
  <p>
    <label>
      <input type="radio" name="radio" value="disabled" disabled /> désactivé
    </label>
  </p>
</fieldset>

<p>
  <label
    >Sélectionnez une option :
    <select>
      <optgroup label="Groupe 1">
        <option>Option 1.1</option>
      </optgroup>
      <optgroup label="Groupe 2">
        <option>Option 2.1</option>
        <option disabled>Option 2.2</option>
        <option>Option 2.3</option>
      </optgroup>
      <optgroup label="Groupe 3" disabled>
        <option>Désactivé 3.1</option>
        <option>Désactivé 3.2</option>
        <option>Désactivé 3.3</option>
      </optgroup>
    </select>
  </label>
</p>

<fieldset disabled>
  <legend>Champ désactivé</legend>
  <p>
    <label
      >Nom : <input type="name" name="radio" value="régulier" /> Régulier</label
    >
  </p>
  <p>
    <label>Nombre : <input type="number" /></label>
  </p>
</fieldset>
```

{{EmbedLiveSample('Exemples', '', 460)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-classes [`:disabled`](/fr/docs/Web/CSS/:disabled) et [`:enabled`](/fr/docs/Web/CSS/:enabled)
