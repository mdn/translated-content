---
title: "Attribut HTML : disabled"
short-title: disabled
slug: Web/HTML/Reference/Attributes/disabled
original_slug: Web/HTML/Attributes/disabled
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut booléen **`disabled`**, lorsqu'il est présent, rend l'élément non modifiable, non sélectionnable, ou même non soumis avec le formulaire. L'utilisateur·rice ne peut ni modifier ni sélectionner le contrôle, ni les descendants du contrôle de formulaire. Si l'attribut `disabled` est spécifié sur un contrôle de formulaire, l'élément et ses descendants de contrôle de formulaire ne participent pas à la validation des contraintes. Souvent, les navigateurs grisent ces contrôles et ils ne reçoivent aucun événement de navigation, comme les clics de souris ou les événements liés à la sélection.

{{InteractiveExample("Démonstration HTML&nbsp;: disabled", "tabbed-standard")}}

```html interactive-example
<form>
  <label for="name">Nom&nbsp;:</label>
  <input id="name" name="name" type="text" />

  <label for="emp">Employé·e&nbsp;:</label>
  <select id="emp" name="emp" disabled>
    <option>Non</option>
    <option>Oui</option>
  </select>

  <label for="empDate">Date d'embauche&nbsp;:</label>
  <input id="empDate" name="empDate" type="date" disabled />

  <label for="resume">CV&nbsp;:</label>
  <input id="resume" name="resume" type="file" />
</form>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:disabled {
  background-color: dimgrey;
  color: linen;
  opacity: 1;
}
```

## Présentation

L'attribut `disabled` est utilisé par {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} et {{HTMLElement("input")}}.

Cet attribut booléen indique que l'utilisateur·rice ne peut pas interagir avec le contrôle ou ses contrôles descendants. Si cet attribut n'est pas spécifié, le contrôle hérite ce paramètre de l'élément contenant, par exemple {{HTMLElement("fieldset")}}&nbsp;; s'il n'y a pas d'élément contenant avec l'attribut `disabled` défini, et que le contrôle lui-même ne possède pas cet attribut, alors le contrôle est activé. S'il est déclaré sur un {{HTMLElement("optgroup")}}, le sélecteur reste interactif (sauf s'il est désactivé autrement), mais aucun des éléments du groupe d'options n'est sélectionnable.

> [!NOTE]
> Si un {{HTMLElement("fieldset")}} est désactivé, les contrôles de formulaire descendants sont tous désactivés, à l'exception des contrôles de formulaire dans la légende ({{HTMLElement("legend")}}).

Lorsqu'un élément supporte l'attribut `disabled` et que celui-ci est appliqué, la pseudo-classe {{CSSxRef(":disabled")}} s'y applique également. Inversement, les éléments qui prennent en charge l'attribut `disabled` mais qui n'ont pas l'attribut défini correspondent à la pseudo-classe {{CSSxRef(":enabled")}}.

Cet attribut booléen empêche l'utilisateur·rice d'interagir avec le bouton. Si cet attribut n'est pas défini, le bouton peut toujours être désactivé à partir d'un élément contenant, par exemple {{HTMLElement("fieldset")}}&nbsp;; s'il n'y a pas d'élément contenant avec l'attribut `disabled` défini, alors le bouton est activé.

Firefox, contrairement aux autres navigateurs, va faire persister l'état désactivé dynamique d'un {{HTMLElement("button")}} lors des rechargements de page. Utilisez l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete) pour contrôler cette fonctionnalité.

### Interactions entre attributs

La différence entre `disabled` et [`readonly`](/fr/docs/Web/HTML/Reference/Attributes/readonly) est que les contrôles en lecture seule peuvent toujours fonctionner et sont toujours sélectionnables, alors que les contrôles désactivés ne peuvent pas recevoir de sélection, ne sont pas soumis avec le formulaire et ne fonctionnent généralement pas comme contrôles tant qu'ils ne sont pas activés.

Étant donné qu'un champ désactivé ne peut pas voir sa valeur modifiée, [`required`](/fr/docs/Web/HTML/Reference/Attributes/required) n'a aucun effet sur les entrées dont l'attribut `disabled` est également spécifié. De plus, puisque les éléments deviennent immuables, la plupart des autres attributs, tels que [`pattern`](/fr/docs/Web/HTML/Reference/Attributes/pattern), n'ont aucun effet, tant que le contrôle n'est pas activé.

> [!NOTE]
> L'attribut `required` n'est pas autorisé sur les entrées pour lesquelles l'attribut `disabled` est spécifié.

### Utilisation

Les navigateurs affichent les contrôles de formulaire désactivés en grisé, car ces contrôles sont immuables, ne reçoivent pas de sélection ou d'événements de navigation, comme les clics de souris ou les événements liés à la sélection, et ne sont pas soumis avec le formulaire.

S'il est présent sur un élément supporté, la pseudo-classe {{CSSxRef(':disabled')}} correspondra. Si l'attribut n'est pas inclus, la pseudo-classe {{CSSxRef(':enabled')}} correspondra. Si l'élément ne prend pas en charge l'attribut `disabled`, celui-ci n'aura aucun effet, y compris sur les pseudo-classes `:disabled` et `:enabled`.

### Validation des contraintes

Si l'élément est `disabled`, alors la valeur de l'élément ne peut pas recevoir de sélection et ne peut pas être mise à jour par l'utilisateur·rice, et ne participe pas à la validation des contraintes.

## Exemples

Lorsque des contrôles de formulaire sont désactivés, de nombreux navigateurs les affichent par défaut dans une couleur plus claire, grisée. Voici des exemples de case à cocher, bouton radio, {{HTMLElement("option")}} et {{HTMLElement("optgroup")}} désactivés, ainsi que des contrôles de formulaire désactivés via l'attribut `disabled` appliqué à l'élément ancêtre {{HTMLElement("fieldset")}}. Les {{HTMLElement("option")}} sont désactivés, mais le {{HTMLElement("select")}} ne l'est pas. On aurait pu désactiver tout le {{HTMLElement("select")}} en ajoutant l'attribut à cet élément plutôt qu'à ses descendants.

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
    >Sélectionnez une option&nbsp;:
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
      >Nom&nbsp;:
      <input type="name" name="radio" value="régulier" /> Régulier</label
    >
  </p>
  <p>
    <label>Nombre&nbsp;: <input type="number" /></label>
  </p>
</fieldset>
```

{{EmbedLiveSample('Exemples', '', 460)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-classes {{CSSxRef(':disabled')}} et {{CSSxRef(':enabled')}}
