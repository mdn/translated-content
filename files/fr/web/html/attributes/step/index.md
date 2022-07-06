---
title: 'Attribut HTML : step'
slug: Web/HTML/Attributes/step
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - HTML
  - Reference
  - step
translation_of: Web/HTML/Attributes/step
---
{{HTMLSidebar}}

L'attribut **`step`** est un nombre qui indique l'incrément que la valeur doit suivre ou le mot-clé `any`. Il est valable pour les types de saisie numérique, notamment les [`date`](/fr/docs/Web/HTML/Element/Input/date), [`month`](/fr/docs/Web/HTML/Element/Input/month), [`week`](/fr/docs/Web/HTML/Element/Input/week), [`time`](/fr/docs/Web/HTML/Element/Input/time), [`datetime-local`](/fr/docs/Web/HTML/Element/Input/datetime-local), [`number`](/fr/docs/Web/HTML/Element/Input/number) et [`range`](/fr/docs/Web/HTML/Element/Input/range).

`step` définit l'incrément obtenu lors du clic sur les boutons déroulants haut et bas, du déplacement d'un curseur vers la gauche et la droite sur une plage, et de la validation des différents types de date. S'il n'est pas explicitement inclus, `step` prend par défaut la valeur 1 pour `number` et `range`, et 1 type d'unité (minute, semaine, mois, jour) pour les types d'entrée date/heure. La valeur doit être un nombre positif - entier ou flottant - ou la valeur spéciale `any`, ce qui signifie qu'aucun incrément n'est impliqué et que toute valeur est autorisée (sauf autres contraintes, comme [`min`](/fr/docs/Web/HTML/Attributes/min) et [`max`](/fr/docs/Web/HTML/Attributes/max)).

La valeur des incréments par défaut pour les entrées `number` est 1, ce qui permet de ne saisir que des nombres entiers, _à moins que_ la valeur initiale ne soit pas un nombre entier. La valeur de pas par défaut pour les entrées `time` est de 1 seconde, 900 étant égal à 15 minutes.

## Syntaxe

<table class="standard-table">
  <caption>
    Valeurs d'incrémentation par défaut
  </caption>
  <thead>
    <tr>
      <th scope="col">Type d'entrée</th>
      <th scope="col">Valeur</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input/date"><code>date</code></a>
      </td>
      <td>1 (jour)</td>
      <td>
        <pre class="brush: html">
&#x3C;input type="date" min="2019-12-25" step="1"></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input/month"><code>month</code></a>
      </td>
      <td>1 (mois)</td>
      <td>
        <pre class="brush: html">
&#x3C;input type="month" min="2019-12" step="12"></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input/week"><code>week</code></a>
      </td>
      <td>1 (semaine)</td>
      <td>
        <pre class="brush: html">
&#x3C;input type="week" min="2019-W23" step="2"></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input/time"><code>time</code></a>
      </td>
      <td>60 (secondes)</td>
      <td>
        <pre class="brush: html">
&#x3C;input type="time" min="09:00" step="900"></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input/datetime-local"
          ><code>datetime-local</code></a
        >
      </td>
      <td>1 (jour)</td>
      <td>
        <pre class="brush: html">
&#x3C;input type="datetime-local" min="019-12-25T19:30" step="7"></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input/number"><code>number</code></a>
      </td>
      <td>1</td>
      <td>
        <pre class="brush: html">
&#x3C;input type="number" min="0" step="0.1" max="10"></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input/range"><code>range</code></a>
      </td>
      <td>1</td>
      <td>
        <pre class="brush: html">
&#x3C;input type="range" min="0" step="2" max="10"></pre
        >
      </td>
    </tr>
  </tbody>
</table>

Si `any` n'est pas explicitement défini, les valeurs valides pour les types de saisie `number`, date/heure, et les types d'entrée `range` sont égales à la base du pas — la valeur [`min`](/fr/docs/Web/HTML/Attributes/min) et les incréments de la valeur du pas, jusqu'à la valeur [`max`](/fr/docs/Web/HTML/Attributes/max), si spécifiée. Par exemple, si on a `<input type="number" min="10" step="2">` tout entier pair, 10 ou grand, est valide. S'il est omis, `<input type="number">`, tout entier est valide, mais les flottants, comme `4,2`, ne le sont pas, car `step` est par défaut à 1. Pour que `4,2` soit valide, `step` aurait dû être défini à `any`, `0,1`, `0,2`, et la valeur min aurait dû être un nombre se terminant par .2, comme `<input type="number" min="-5.2">`.

### L'impact de min sur step

Les valeurs de `min` et `step` définissent ce que sont les valeurs valides, même si l'attribut `step` n'est pas inclus, car `step` a par défaut la valeur `0`.

Nous ajoutons une grande bordure rouge autour des entrées invalides :

```css
input:invalid {
  border: solid red 3px;
}
```

Nous définissons ensuite un champ avec une valeur minimale de 7,2, en omettant l'attribut "step", qui a la valeur 1 par défaut.

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2">
```

Les valeurs valides comprennent `1,2`, `3,2`, `5,2`, `7,2`, `9,2`, `11,2`, et ainsi de suite. Les nombres entiers et les nombres pairs suivis de .2 ne sont pas valides. Comme nous avons inclus une valeur non valide, les navigateurs qui prennent en charge cette valeur l'afficheront comme non valide. Le compteur de nombres, s'il est présent, n'affichera que les valeurs flottantes valides de `1,2` et plus.

{{EmbedLiveSample("L'impact_de_min_sur_step","",50)}}

> **Note :** Lorsque les données saisies par l'utilisateur ne respectent pas la configuration indiquée par l'incrément, la valeur est considérée comme non valide dans la validation des contraintes et correspondra aux pseudoclasses [`:invalid`](/fr/docs/Web/CSS/:invalid) et [`:out-of-range`](/fr/docs/Web/CSS/:out-of-range).

Voir [Validation côté client](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) et [`stepMismatch`](/fr/docs/Web/API/ValidityState/stepMismatch) pour plus d'informations.

## Accessibilité

Fournissez des instructions pour aider les utilisateurs à comprendre comment remplir le formulaire et utiliser les contrôles individuels du formulaire. Indiquez toute entrée obligatoire et facultative, les formats de données et toute autre information pertinente. Lorsque vous utilisez l'attribut `min`, assurez-vous que cette exigence minimale est comprise par l'utilisateur. Fournir des instructions dans l'élément [`<label>`](/fr/docs/Web/HTML/Element/Label) peut être suffisant. Si vous fournissez des instructions en dehors des étiquettes, ce qui permet un positionnement et une conception plus souples, envisagez d'utiliser [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) ou [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).

## Spécifications

| Spécification                                                                                                | Statut                           |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| {{SpecName('HTML WHATWG', 'input.html#the-step-attribute', 'l\'attribut step')}} | {{Spec2('HTML WHATWG')}} |
| {{SpecName('HTML5 W3C', 'input.html#the-step-attribute', 'l\'attribut step')}}     | {{Spec2('HTML5 W3C')}}     |

## Voir aussi

- L'attribut [`max`](/fr/docs/Web/HTML/Attributes/max)
- L'attribut [`min`](/fr/docs/Web/HTML/Attributes/min)
- [Validation des contraintes](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- L'API [Constraint validation](/fr/docs/Web/API/Constraint_validation)
- La propriété [`validityState.stepMismatch`](/fr/docs/Web/API/validityState/stepMismatch)
- La pseudo-classe [`:out-of-range`](/fr/docs/Web/CSS/:out-of-range)
- L'élément [`<input>`](/fr/docs/Web/HTML/Element/Input)
- Les types [`date`](/fr/docs/Web/HTML/Element/Input/date), [`month`](/fr/docs/Web/HTML/Element/Input/month), [`week`](/fr/docs/Web/HTML/Element/Input/week), [`time`](/fr/docs/Web/HTML/Element/Input/time), [`datetime-local`](/fr/docs/Web/HTML/Element/Input/datetime-local), [`number`](/fr/docs/Web/HTML/Element/Input/number) et [`range`](/fr/docs/Web/HTML/Element/Input/range), ainsi que l'élément [`<meter>`](/fr/docs/Web/HTML/Element/Meter)
