---
title: "Attribut HTML : max"
short-title: max
slug: Web/HTML/Reference/Attributes/max
original_slug: Web/HTML/Attributes/max
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

L'attribut **`max`** définit la valeur maximale acceptable et valide pour le champ de saisie contenant l'attribut. Si la [`valeur`](/fr/docs/Web/HTML/Reference/Elements/input#attr-value) de l'élément est supérieure à cette valeur, l'élément échoue à [la validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Cette valeur doit être supérieure ou égale à la valeur de l'attribut [`min`](min). Si l'attribut `max` est présent mais n'est pas spécifié ou est invalide, aucune valeur `max` n'est appliquée. Si l'attribut `max` est valide et qu'une valeur non vide est supérieure au maximum autorisé par l'attribut `max`, la validation des contraintes empêchera la soumission du formulaire.

Valable pour les types de saisie numérique, y compris les types {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} et {{HTMLElement("input/range", "range")}}, ainsi que les deux éléments HTML {{HTMLElement('progress')}} et {{HTMLElement('meter')}}, l'attribut `max` est un nombre qui spécifie la valeur la plus positive qu'un contrôle de formulaire doit considérer comme valide.

Si la valeur dépasse la valeur maximale autorisée, l'attribut JavaScript {{DOMxRef('validityState.rangeOverflow')}} sera vrai, et le contrôle sera assorti des pseudo-classes {{CSSxRef(':out-of-range')}} et {{CSSxRef(':invalid')}}.

### Syntaxe

<table class="no-markdown">
  <caption>
    Syntaxe pour les valeurs
    <code>max</code> par <code>type</code>
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
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>yyyy-mm-dd</code></td>
      <td><code>&lt;input type="date" max="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&lt;input type="month" max="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&lt;input type="week" max="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>hh:mm</code></td>
      <td><code>&lt;input type="time" max="17:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddThh:mm</code></td>
      <td><code>&lt;input type="datetime-local" max="2019-12-25T23:59"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>{{CSSxRef("&lt;number&gt;")}}</td>
      <td><code>&lt;input type="number" min="0" step="5" max="100"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>{{CSSxRef("&lt;number&gt;")}}</td>
      <td><code>&lt;input type="range" min="60" step="5" max="100"></code></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Lorsque les données saisies par l'utilisateur ne respectent pas la valeur maximale fixée, la valeur est considérée comme invalide dans la validation des contraintes et correspondra aux pseudo-classes {{CSSxRef(':invalid')}} et {{CSSxRef(':out-of-range')}}.

Voir la [validation côté client](/fr/docs/Web/HTML/Guides/Constraint_validation) et {{DOMxRef("ValidityState.rangeOverflow", "rangeOverflow")}} pour plus d'informations.

Pour l'élément {{HTMLElement('progress')}}, l'attribut `max` décrit la quantité de travail que nécessite la tâche indiquée par l'élément `progress`. S'il est présent, il doit avoir une valeur supérieure à zéro et être un nombre à virgule flottante valide. Pour l'élément {{HTMLElement('meter')}}, l'attribut `max` définit la limite numérique supérieure de la plage mesurée. Celle-ci doit être supérieure à la valeur minimale ([`min`](/fr/docs/Web/HTML/Reference/Attributes/min) attribut), si elle est spécifiée. Dans les deux cas, si elle est omise, la valeur est égale à 1 par défaut.

<table class="no-markdown">
  <caption>
    Syntaxe pour les valeurs
    <code>max</code>
    pour d'autres éléments
  </caption>
  <thead>
    <tr>
      <th>Élément</th>
      <th>Syntaxe</th>
      <th>Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("progress")}}</td>
      <td>{{CSSxRef("&lt;number&gt;")}}</td>
      <td>
        <code>&lt;progress id="file" max="100" value="70"> 70% &lt;/progres></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("meter")}}</td>
      <td>{{CSSxRef("&lt;number&gt;")}}</td>
      <td>
        <code>&lt;meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="40"> à 40/100 &lt;/meter></code>
      </td>
    </tr>
  </tbody>
</table>

## Accessibilité

Fournissez des instructions pour aider les utilisateurs à comprendre comment remplir le formulaire et utiliser les contrôles individuels du formulaire. Indiquez toute entrée obligatoire et facultative, les formats de données et toute autre information pertinente. Lorsque vous utilisez l'attribut `max`, assurez-vous que cette exigence maximale est comprise par l'utilisateur. Fournir des instructions dans le {{HTMLElement('label')}} peut être suffisant. Si vous fournissez des instructions en dehors des étiquettes, ce qui permet un positionnement et une conception plus flexibles, envisagez d'utiliser [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut [`step`](/fr/docs/Web/HTML/Reference/Attributes/step)
- L'attribut [`min`](/fr/docs/Web/HTML/Reference/Attributes/min)
- Les autres attributs de mesure&nbsp;: [`low`](/fr/docs/Web/HTML/Reference/Elements/meter#low), [`high`](/fr/docs/Web/HTML/Reference/Elements/meter#high), [`optimum`](/fr/docs/Web/HTML/Reference/Elements/meter#optimum)
- [Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- [Validation de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- L'attribut JavaScript {{DOMxRef('validityState.rangeOverflow')}}
- La pseudo-classe CSS {{CSSxRef(':out-of-range')}}
- L'élément HTML {{HTMLElement('input')}}
- Les valeurs de l'attribut type {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} et {{HTMLElement("input/range", "range")}}
- L'élément HTML {{HTMLElement('meter')}}
