---
title: 'Attribut HTML : min'
slug: Web/HTML/Attributes/min
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - HTML
  - min
  - Reference
translation_of: Web/HTML/Attributes/min
---
{{HTMLSidebar}}

L'attribut **`min`** définit la valeur minimale qui est acceptable et valide pour l'entrée contenant l'attribut. Si la [valeur](/fr/docs/Web/HTML/Element/Input#attr-value) de l'élément est inférieure à cette valeur, l'élément échoue lors de la [validation des contraintes](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Cette valeur doit être inférieure ou égale à la valeur de l'attribut `max`. Si une valeur est spécifiée pour `min` qui n'est pas un nombre valide, l'entrée n'a pas de valeur minimale.

Valable pour les types de saisie numérique, y compris les types [`date`](/fr/docs/Web/HTML/Element/Input/date), [`month`](/fr/docs/Web/HTML/Element/Input/month), [`week`](/fr/docs/Web/HTML/Element/Input/week), [`time`](/fr/docs/Web/HTML/Element/Input/time), [`datetime-local`](/fr/docs/Web/HTML/Element/Input/datetime-local), [`number`](/fr/docs/Web/HTML/Element/Input/number) et [`range`](/fr/docs/Web/HTML/Element/Input/range), et l'élément [`<meter>`](/fr/docs/Web/HTML/Element/Meter), l'attribut `min` est un nombre qui spécifie la valeur la plus négative qu'un contrôle de formulaire doit considérer comme valide.

## Syntaxe

<table class="standard-table">
  <caption>
    Syntaxe pour les valeurs
    <code>min</code>
    par
    <code>type</code>
    de saisie.
  </caption>
  <thead>
    <tr>
      <th scope="col">Type de saisie</th>
      <th scope="col">Syntaxe</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input/date"><code>date</code></a>
      </td>
      <td><pre class="brush: html">yyyy-mm-dd</pre></td>
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
      <td><pre class="brush: html">yyyy-mm</pre></td>
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
      <td><pre class="brush: html">yyyy-W##</pre></td>
      <td>
        <pre class="brush: html">
&#x3C;input type="week" min="2019-W23" step=""></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input/time"><code>time</code></a>
      </td>
      <td><pre class="brush: html">hh:mm</pre></td>
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
      <td><code>yyyy-mm-ddThh:mm</code></td>
      <td>
        <pre class="brush: html">
&#x3C;input type="datetime-local" min="2019-12-25T19:30"></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input/number"><code>number</code></a>
      </td>
      <td><a href="/fr/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <pre class="brush: html">
&#x3C;input type="number" min="0" step="5" max="100"></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input/range"><code>range</code></a>
      </td>
      <td><a href="/fr/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <pre class="brush: html">
&#x3C;input type="range" min="60" step="5" max="100"></pre
        >
      </td>
    </tr>
  </tbody>
</table>

> **Note :** Lorsque les données saisies par l'utilisateur ne respectent pas la valeur minimale définie, la valeur est considérée comme non valide dans la validation des contraintes et correspondra aux pseudo-classes [`:invalid`](/fr/docs/Web/CSS/:invalid) et [`:out-of-range`](/fr/docs/Web/CSS/:out-of-range).

Voir la [validation côté client](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) et [`rangeUnderflow`](/fr/docs/Web/API/ValidityState/rangeUnderflow) pour plus d'informations.

Pour l'élément [`<meter>`](/fr/docs/Web/HTML/Element/Meter), l'attribut `min` définit la limite numérique inférieure de la plage mesurée. Celle-ci doit être inférieure à la valeur minimale (attribut [`max`](/fr/docs/Web/HTML/Attributes/max)), si elle est spécifiée. Dans les deux cas, si elle est omise, la valeur est égale à 1 par défaut.

| Élément                                      | Syntaxe                             | Exemple                                                                                            |
| -------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`<meter>`](/fr/docs/Web/HTML/Element/Meter) | [<number>](/fr/docs/Web/CSS/number) | `<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="40"> at 40/100</meter>` |

### Impact sur `step`

Les valeurs de `min` et `step` définissent ce que sont les valeurs valides, même si l'attribut `step` n'est pas inclus, car `step` a par défaut la valeur `0`.

Nous ajoutons une grande bordure rouge autour des entrées invalides :

```css
input:invalid {
  border: solid red 3px;
}
```

Nous définissons ensuite une entrée avec une valeur minimale de 7,2, en omettant l'attribut « step », qui a la valeur 1 par défaut.

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8">
```

Comme `step` a pour valeur 1 par défaut, les valeurs valides comprennent `7,2`, `8,2`, `9,2`, et ainsi de suite. La valeur 8 n'est pas valide. Comme nous avons inclus une valeur non valide, les navigateurs compatibles afficheront la valeur comme non valide.

{{EmbedLiveSample("Impact_sur_step", "", 55)}}

S'il n'est pas explicitement inclus, `step` prend par défaut la valeur 1 pour `number` et `range`, et 1 type d'unité (seconde, semaine, mois, jour) pour les types d'entrée date/heure.

## Accessibilité

Fournissez des instructions pour aider les utilisateurs à comprendre comment remplir le formulaire et utiliser les contrôles individuels du formulaire. Indiquez toute entrée obligatoire et facultative, les formats de données et toute autre information pertinente. Lorsque vous utilisez l'attribut `min`, assurez-vous que cette exigence minimale est comprise par l'utilisateur. Fournir des instructions à l'intérieur des [`<label>`](/fr/docs/Web/HTML/Element/label) peut être suffisant. Si vous fournissez des instructions en dehors des étiquettes, ce qui permet un positionnement et une conception plus souples, envisagez d'utiliser [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) ou [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).

## Spécifications

| Spécification                                                                                                    | Statut                           |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'input.html#the-min-and-max-attributes', 'min attribute')}} | {{Spec2('HTML WHATWG')}} |
| {{SpecName('HTML5 W3C', 'input.html#the-min-and-max-attributes', 'min attribute')}} | {{Spec2('HTML5 W3C')}}     |

## Compatibilité des navigateurs

{{Compat("html.elements.attributes.min")}}

## Voir aussi

- L'attribut [`step`](/fr/docs/Web/HTML/Attributes/step)
- L'attribut [`max`](/fr/docs/Web/HTML/Attributes/max)
- Les autres attributs de mesure : [`low`](/fr/docs/Web/HTML/Element/meter#attr-low), [`high`](/fr/docs/Web/HTML/Element/meter#attr-high), [`optimum`](/fr/docs/Web/HTML/Element/meter#attr-optimum)
- [Validation des contraintes](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- L'API [Constraint validation](/fr/docs/Web/API/Constraint_validation)
- L'attribut JavaScript [`validityState.rangeUnderflow`](/fr/docs/Web/API/validityState/rangeUnderflow)
- La pseudo-classe [`:out-of-range`](/fr/docs/Web/CSS/:out-of-range)
- L'élément [`<input>`](/fr/docs/Web/HTML/Element/input)
- Les valeurs de l'attribut type [`date`](/fr/docs/Web/HTML/Element/input/date), [`month`](/fr/docs/Web/HTML/Element/input/month), [`week`](/fr/docs/Web/HTML/Element/input/week), [`time`](/fr/docs/Web/HTML/Element/input/time), [`datetime-local`](/fr/docs/Web/HTML/Element/input/datetime-local), [`number`](/fr/docs/Web/HTML/Element/input/number) et [`range`](/fr/docs/Web/HTML/Element/input/range), et l'élément [`<meter>`](/fr/docs/Web/HTML/Element/meter)
