---
title: "Attribut HTML : step"
short-title: step
slug: Web/HTML/Reference/Attributes/step
original_slug: Web/HTML/Attributes/step
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

L'attribut **`step`** est un nombre qui définit la granularité à laquelle la valeur doit adhérer ou le mot-clé `any`. Il est valide pour les types d'entrée numériques, y compris les types {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} et {{HTMLElement("input/range", "range")}}.

L'attribut `step` définit l'intervalle d'incrément lors du clic sur les boutons de sélection haut et bas, du déplacement d'un curseur sur une plage, et de la validation des différents types de date. S'il n'est pas explicitement inclus, `step` a pour valeur par défaut 1 pour `number` et `range`, et 1 unité (minute, semaine, mois, jour) pour les types d'entrée date/heure. La valeur doit être un nombre positif — entier ou flottant — ou la valeur spéciale `any`, ce qui signifie qu'aucun incrément n'est imposé et que toute valeur est autorisée (sous réserve d'autres contraintes, telles que [`min`](/fr/docs/Web/HTML/Reference/Attributes/min) et [`max`](/fr/docs/Web/HTML/Reference/Attributes/max)).

Seules les valeurs qui sont un nombre entier d'incréments à partir de la base de l'incrément sont valides. La base de l'incrément est [`min`](/fr/docs/Web/HTML/Reference/Attributes/min) si définie, [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) sinon, ou `0` si aucune n'est fournie (sauf pour `week`, qui a une base d'incrément par défaut de −259 200 000, représentant le début de la semaine `1970-W01`).

## Syntaxe

<table class="no-markdown">
  <caption>
    Valeurs d'incrémentation par défaut
  </caption>
  <thead>
    <tr>
      <th>Input type</th>
      <th>Value</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>1 (jour)</td>
      <td><code>&#x3C;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>1 (mois)</td>
      <td><code>&#x3C;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>1 (semaine)</td>
      <td><code>&#x3C;input type="week" min="2019-W23" step="2"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>60 (secondes)</td>
      <td><code>&#x3C;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>60 (secondes)</td>
      <td>
        <code
          >&#x3C;input type="datetime-local" min="2019-12-25T19:30"
          step="900"></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>1</td>
      <td>
        <code>&#x3C;input type="number" min="0" step="0.1" max="10"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>1</td>
      <td><code>&#x3C;input type="range" min="0" step="2" max="10"></code></td>
    </tr>
  </tbody>
</table>

Si `step` est omis, tout entier est valide mais les nombres à virgule comme 4,2 ne le sont pas car `step` a pour valeur par défaut 1. Pour que 4,2 soit valide&nbsp;:

- soit `step` doit être défini à `any`, 0,1 ou 0,2&nbsp;;
- soit la valeur de `min` doit être un nombre se terminant par .2, comme 0,2, 1,2 ou -5,2.

## Exemples

### L'impact de `min` sur l'étape

Les valeurs de `min` et `step` définissent ce que sont les valeurs valides, même si l'attribut `step` n'est pas inclus, car `step` a par défaut la valeur `0`.

Nous ajoutons une grande bordure rouge autour des entrées invalides&nbsp;:

```css
input:invalid {
  border: solid red 3px;
}
```

Nous définissons ensuite un champ avec une valeur minimale de 1,2 et une valeur d'étape de 2&nbsp;:

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

Les valeurs valides comprennent `1,2`, `3,2`, `5,2`, `7,2`, `9,2`, `11,2`, et ainsi de suite. Les nombres entiers et les nombres pairs suivis de .2 ne sont pas valides. Comme nous avons inclus une valeur non valide, les navigateurs qui prennent en charge cette valeur l'afficheront comme non valide. Le compteur de nombres, s'il est présent, n'affichera que les valeurs flottantes valides de `1,2` et plus.

{{EmbedLiveSample("L'impact de `min` sur l'étape", "100%", 55)}}

> [!NOTE]
> Lorsque les données saisies par l'utilisateur ne respectent pas la configuration indiquée par l'incrément, la valeur est considérée comme non valide dans la validation des contraintes et correspondra aux pseudoclasses {{CSSxRef(":invalid")}} et {{CSSxRef(":out-of-range")}}.

Voir [Validation côté client](/fr/docs/Web/HTML/Guides/Constraint_validation) et {{DOMxRef("ValidityState.stepMismatch", "stepMismatch")}} pour plus d'informations.

## Problèmes d'accessibilité

Fournissez des instructions pour aider les utilisateur·ice·s à comprendre comment remplir le formulaire et utiliser les contrôles individuels du formulaire. Indiquez toute entrée obligatoire et facultative, les formats de données et toute autre information pertinente. Lorsque vous utilisez l'attribut `min`, assurez-vous que cette exigence minimale est comprise par l'utilisateur·ice. Fournir des instructions dans l'élément HTML {{HTMLElement('label')}} peut être suffisant. Si vous fournissez des instructions en dehors des étiquettes, ce qui permet un positionnement et une conception plus souples, envisagez d'utiliser [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut [`max`](/fr/docs/Web/HTML/Reference/Attributes/max)
- L'attribut [`min`](/fr/docs/Web/HTML/Reference/Attributes/min)
- [Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- [Validation de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- La propriété JavaScript {{DOMxRef('validityState.stepMismatch')}}
- La pseudo-classe CSS {{CSSxRef(':out-of-range')}}
- L'élément HTML {{HTMLElement('input')}}
- Les types {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} et {{HTMLElement("input/range", "range")}}
- L'élément HTML {{HTMLElement('meter')}}
