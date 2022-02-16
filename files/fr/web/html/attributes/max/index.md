---
title: 'Attribut HTML : max'
slug: Web/HTML/Attributes/max
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - HTML
  - max
  - Reference
translation_of: Web/HTML/Attributes/max
---
{{HTMLSidebar}}

L'attribut **`max`** définit la valeur maximale acceptable et valide pour le champ de saisie contenant l'attribut. Si la [`valeur`](/fr/docs/Web/HTML/Element/Input#attr-value) de l'élément est supérieure à cette valeur, l'élément échoue à [la validation des contraintes](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Cette valeur doit être supérieure ou égale à la valeur de l'attribut [`min`](min). Si l'attribut `max` est présent mais n'est pas spécifié ou est invalide, aucune valeur `max` n'est appliquée. Si l'attribut `max` est valide et qu'une valeur non vide est supérieure au maximum autorisé par l'attribut `max`, la validation des contraintes empêchera la soumission du formulaire.

Valable pour les types de saisie numérique, y compris les [`date`](/fr/docs/Web/HTML/Element/Input/date), [`month`](/fr/docs/Web/HTML/Element/Input/month), [`week`](/fr/docs/Web/HTML/Element/Input/week), [`time`](/fr/docs/Web/HTML/Element/Input/time), [`datetime-local`](/fr/docs/Web/HTML/Element/Input/datetime-local), [`number`](/fr/docs/Web/HTML/Element/Input/number) et [`range`](/fr/docs/Web/HTML/Element/Input/range), ainsi que les deux éléments [`<progress>`](/fr/docs/Web/HTML/Element/Progress) et [`<meter>`](/fr/docs/Web/HTML/Element/Meter), l'attribut `max` est un nombre qui spécifie la valeur la plus positive qu'un contrôle de formulaire doit considérer comme valide.

Si la valeur dépasse la valeur maximale autorisée, l'attribut JavaScript [`validityState.rangeOverflow`](/fr/docs/Web/API/validityState/rangeOverflow) sera vrai, et le contrôle sera assorti des pseudo-classes [`:out-of-range`](/fr/docs/Web/CSS/:out-of-range) et [`:invalid`](/fr/docs/Web/CSS/:invalid).

### Syntaxe

<table class="standard-table">
  <caption>
    Syntaxe pour les valeurs
    <code>max</code>
    par
    <code>type</code>
    de saisie.
  </caption>
  <thead>
    <tr>
      <th>Type de saisie</th>
      <th>Syntaxe</th>
      <th>Exemple</th>
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
&#x3C;input type="date" max="2019-12-25" step="1"></pre
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
&#x3C;input type="month" max="2019-12" step="12"></pre
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
&#x3C;input type="week" max="2019-W23" step=""></pre
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
&#x3C;input type="time" max="17:00" step="900"></pre
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
&#x3C;input type="datetime-local" max="2019-12-25T23:59"></pre
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

> **Note :** Lorsque les données saisies par l'utilisateur ne respectent pas la valeur maximale fixée, la valeur est considérée comme invalide dans la validation des contraintes et correspondra aux pseudo-classes [`:invalid`](/fr/docs/Web/CSS/:invalid) et [`:out-of-range`](/fr/docs/Web/CSS/:out-of-range).

Voir la [validation côté client](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) et [`rangeOverflow`](/fr/docs/Web/API/ValidityState/rangeOverflow) pour plus d'informations.

Pour l'élément [`<progress>`](/fr/docs/Web/HTML/Element/Progress), l'attribut `max` décrit la quantité de travail que nécessite la tâche indiquée par l'élément `progress`. S'il est présent, il doit avoir une valeur supérieure à zéro et être un nombre à virgule flottante valide. Pour l'élément [`<meter>`](/fr/docs/Web/HTML/Element/Meter), l'attribut `max` définit la limite numérique supérieure de la plage mesurée. Celle-ci doit être supérieure à la valeur minimale ([code>min](/fr/docs/Web/HTML/Attributes/min) attribut), si elle est spécifiée. Dans les deux cas, si elle est omise, la valeur est égale à 1 par défaut.

| Type d'entrée                                      | Syntaxe                             | Exemple                                                                                           |
| -------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`<progress>`](/fr/docs/Web/HTML/Element/Progress) | [<number>](/fr/docs/Web/CSS/number) | `<progress id="file" max="100" value="70"> 70% </progress>`                                       |
| [`<meter>`](/fr/docs/Web/HTML/Element/Meter)       | [<number>](/fr/docs/Web/CSS/number) | `<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="40"> à 40/100</meter>` |

## Accessibilité

Fournissez des instructions pour aider les utilisateurs à comprendre comment remplir le formulaire et utiliser les contrôles individuels du formulaire. Indiquez toute entrée obligatoire et facultative, les formats de données et toute autre information pertinente. Lorsque vous utilisez l'attribut `max`, assurez-vous que cette exigence maximale est comprise par l'utilisateur. Fournir des instructions dans le [`<label>`](/fr/docs/Web/HTML/Element/Label) peut être suffisant. Si vous fournissez des instructions en dehors des étiquettes, ce qui permet un positionnement et une conception plus flexibles, envisagez d'utiliser [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) ou [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).

## Spécifications

| Spécification                                                                                                    | Statut                           |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'input.html#the-min-and-max-attributes', 'max attribute')}} | {{Spec2('HTML WHATWG')}} |
| {{SpecName('HTML5 W3C', 'input.html#the-min-and-max-attributes', 'max attribute')}} | {{Spec2('HTML5 W3C')}}     |
| {{SpecName('HTML WHATWG', 'forms.html#the-progress-element', 'progress element')}}     | {{Spec2('HTML WHATWG')}} |
| {{SpecName('HTML5 W3C', 'forms.html#the-progress-element', 'progress element')}}     | {{Spec2('HTML5 W3C')}}     |
| {{SpecName('HTML WHATWG', 'forms.html#the-meter-element', 'meter element')}}             | {{Spec2('HTML WHATWG')}} |
| {{SpecName('HTML5 W3C', 'forms.html#the-meter-element', 'meter element')}}             | {{Spec2('HTML5 W3C')}}     |

## Compatibilité des navigateurs

{{Compat("html.elements.attributes.max")}}

## Voir aussi

- L'attribut [`step`](/fr/docs/Web/HTML/Attributes/step)
- L'attribut [`min`](/fr/docs/Web/HTML/Attributes/min)
- Les autres attributs de mesure : [`low`](/fr/docs/Web/HTML/Element/Meter#attr-low), [`high`](/fr/docs/Web/HTML/Element/Meter#attr-high), [`optimum`](/fr/docs/Web/HTML/Element/Meter#attr-optimum)
- [Validation des contraintes](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- L'API [Constraint validation](/fr/docs/Web/API/Constraint_validation)
- L'attribut JavaScript [`validityState.rangeOverflow`](/fr/docs/Web/API/validityState/rangeOverflow)
- [`:out-of-range`](/fr/docs/Web/CSS/:out-of-range)
- L'élément [`<input>`](/fr/docs/Web/HTML/Element/Input)
- Les valeurs de l'attribut type [`date`](/fr/docs/Web/HTML/Element/Input/date), [`month`](/fr/docs/Web/HTML/Element/Input/month), [`week`](/fr/docs/Web/HTML/Element/Input/week), [`time`](/fr/docs/Web/HTML/Element/Input/time), [`datetime-local`](/fr/docs/Web/HTML/Element/Input/datetime-local), [`number`](/fr/docs/Web/HTML/Element/Input/number) et [`range`](/fr/docs/Web/HTML/Element/Input/range), et l'élement [`<meter>`](/fr/docs/Web/HTML/Element/Meter)
