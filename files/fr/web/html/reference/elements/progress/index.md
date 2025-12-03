---
title: "<progress> : l'élément d'indicateur de progression"
slug: Web/HTML/Reference/Elements/progress
original_slug: Web/HTML/Element/progress
---

{{HTMLSidebar}}

L'élément HTML **`<progress>`** indique l'état de complétion d'une tâche et est généralement représenté par une barre de progression.

{{InteractiveExample("HTML Demo: &lt;progress&gt;", "tabbed-standard")}}

```html interactive-example
<label for="file">File progress:</label>

<progress id="file" max="100" value="70">70%</progress>
```

```css interactive-example
label {
  padding-right: 10px;
  font-size: 1rem;
}
```

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `max`
  - : Cet attribut indique la valeur correspondant à la complétion de la tâche. Si l'attribut `max` est présent, sa valeur doit être un nombre décimal supérieur à 0. La valeur par défaut est 1.
- `value`
  - : Cet attribut indique l'état actuel de complétion de la tâche avec une valeur numérique. La valeur de l'attribut doit être un nombre décimal compris entre 0 et `max` (ou entre 0 et 1 si l'attribut `max` est absent). Si l'attribut `value` est absent, la barre de progression traduit un état indéterminé (la tâche est en cours et on ne sait pas la durée qu'elle prendra).

> [!NOTE]
> La valeur minimale est toujours 0 et il n'existe pas d'attribut `min` pour l'élément `progress`. La propriété CSS {{cssxref("-moz-orient")}} peut être utilisée afin d'indiquer si barre de progression doit être affichée horizontalement (le comportement par défaut) ou verticalement.
> La pseudo-classe CSS {{cssxref(":indeterminate")}} permet quant à elle de cibler les barres de progression indéterminées. Pour qu'une barre d'avancement retrouve un état indéterminé après qu'elle ait eu une valeur, on pourra utiliser `element.removeAttribute("value")`.

## Exemples

### HTML

```html
<progress value="70" max="100">70 %</progress>
```

### Résultat

{{EmbedLiveSample("Exemples", 200, 50)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_associé_aux_formulaires"
          >contenu de formulaire (étiquetable)</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >Contenu phrasé</a
        >
        sans élément <code>&#x3C;progress></code> parmi ses descendants.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLProgressElement")}}.</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("meter")}}
- {{cssxref(":indeterminate")}}
- {{cssxref("-moz-orient")}}
- {{cssxref("::-moz-progress-bar")}}
- {{cssxref("::-ms-fill")}}
- {{cssxref("::-webkit-progress-bar")}}
- {{cssxref("::-webkit-progress-value")}}
- {{cssxref("::-webkit-progress-inner-element")}}
