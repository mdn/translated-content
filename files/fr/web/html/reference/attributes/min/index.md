---
title: "Attribut HTML : min"
short-title: min
slug: Web/HTML/Reference/Attributes/min
original_slug: Web/HTML/Attributes/min
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`min`** définit la valeur minimale acceptable et valide pour le champ de saisie qui contient cet attribut. Si la [valeur](/fr/docs/Web/HTML/Reference/Elements/input#value) de l'élément est inférieure à cette valeur, le champ échoue lors de la [validation](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation). Cette valeur doit être inférieure ou égale à la valeur de l'attribut `max`.

Certains types de saisie ont une valeur minimale par défaut. Si le champ n'a pas de minimum par défaut et qu'une valeur spécifiée pour `min` ne peut pas être convertie en nombre valide (ou si aucune valeur minimale n'est définie), le champ n'a pas de valeur minimale.

Cet attribut est valable pour les types de saisie suivants&nbsp;: {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} et {{HTMLElement("input/range", "range")}} ainsi que pour l'élément HTML {{HTMLElement('meter')}}.

## Syntaxe

<table class="standard-table">
  <caption>
    Syntaxe pour les valeurs
    <code>min</code> par <code>type</code>
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
      <td><code>&lt;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&lt;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&lt;input type="week" min="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>hh:mm</code></td>
      <td><code>&lt;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddThh:mm</code></td>
      <td><code>&lt;input type="datetime-local" min="2019-12-25T19:30"></code></td>
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
> Lorsque les données saisies par l'utilisateur ne respectent pas la valeur minimale définie, la valeur est considérée comme non valide dans la validation des contraintes et correspondra aux pseudo-classes {{CSSxRef(':invalid')}} et {{CSSxRef(':out-of-range')}}.

Voir la [validation côté client](/fr/docs/Web/HTML/Guides/Constraint_validation) et {{DOMxRef("ValidityState.rangeUnderflow", "rangeUnderflow")}} pour plus d'informations.

Pour l'élément {{HTMLElement('meter')}}, l'attribut `min` définit la limite numérique inférieure de la plage mesurée. Celle-ci doit être inférieure à la valeur minimale (attribut [`max`](/fr/docs/Web/HTML/Reference/Attributes/max)), si elle est spécifiée. Dans les deux cas, si elle est omise, la valeur est égale à 1 par défaut.

<table class="no-markdown">
  <caption>
    Syntaxe pour les valeurs
    <code>min</code>
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
      <td>{{HTMLElement("meter")}}</td>
      <td>{{CSSxRef("&lt;number&gt;")}}</td>
      <td>
        <code>&lt;meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="40"> à 40/100 &lt;/meter></code>
      </td>
    </tr>
  </tbody>
</table>

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
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Comme `step` a pour valeur 1 par défaut, les valeurs valides comprennent `7,2`, `8,2`, `9,2`, et ainsi de suite. La valeur 8 n'est pas valide. Comme nous avons inclus une valeur non valide, les navigateurs compatibles afficheront la valeur comme non valide.

{{EmbedLiveSample("Impact sur `step`", 200, 55)}}

S'il n'est pas explicitement inclus, `step` prend par défaut la valeur 1 pour `number` et `range`, et 1 type d'unité (seconde, semaine, mois, jour) pour les types d'entrée date/heure.

## Accessibilité

Fournissez des instructions pour aider les utilisateurs à comprendre comment remplir le formulaire et utiliser les contrôles individuels du formulaire. Indiquez toute entrée obligatoire et facultative, les formats de données et toute autre information pertinente. Lorsque vous utilisez l'attribut `min`, assurez-vous que cette exigence minimale est comprise par l'utilisateur. Fournir des instructions à l'intérieur des {{HTMLElement('label')}} peut être suffisant. Si vous fournissez des instructions en dehors des étiquettes, ce qui permet un positionnement et une conception plus souples, envisagez d'utiliser [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut [`step`](/fr/docs/Web/HTML/Reference/Attributes/step)
- L'attribut [`max`](/fr/docs/Web/HTML/Reference/Attributes/max)
- Les autres attributs de mesure&nbsp;: [`low`](/fr/docs/Web/HTML/Reference/Elements/meter#low), [`high`](/fr/docs/Web/HTML/Reference/Elements/meter#high), [`optimum`](/fr/docs/Web/HTML/Reference/Elements/meter#optimum)
- [Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- [Validation de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- L'attribut JavaScript {{DOMxRef('validityState.rangeUnderflow')}}
- La pseudo-classe CSS {{CSSxRef(':out-of-range')}}
- L'élément HTML {{HTMLElement('input')}}
- Les valeurs de l'attribut type {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} et {{HTMLElement("input/range", "range")}}
- L'élément HTML {{HTMLElement('meter')}}
