---
title: '<progress> : l''élément d''indicateur de progression'
slug: Web/HTML/Element/Progress
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/progress
---
{{HTMLRef}}

L'élément HTML **`<progress>`** indique l'état de complétion d'une tâche et est généralement représenté par une barre de progression.

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- {{htmlattrdef("max")}}
  - : Cet attribut indique la valeur correspondant à la complétion de la tâche. Si l'attribut `max` est présent, sa valeur doit être un nombre décimal supérieur à 0. La valeur par défaut est 1.
- {{htmlattrdef("value")}}
  - : Cet attribut indique l'état actuel de complétion de la tâche avec une valeur numérique. La valeur de l'attribut doit être un nombre décimal compris entre 0 et `max`  (ou entre 0 et 1 si l'attribut `max` est absent). Si l'attribut `value` est absent, la barre de progression traduit un état indéterminé (la tâche est en cours et on ne sait pas la durée qu'elle prendra).

> **Note :** La valeur minimale est toujours 0 et il n'existe pas d'attribut `min` pour l'élément `progress`. La propriété CSS {{cssxref("-moz-orient")}} peut être utilisée afin d'indiquer si barre de progression doit être affichée horizontalement (le comportement par défaut) ou verticalement.
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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
        >
        sans élément <code>&#x3C;progress></code> parmi ses descendants.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
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

| Spécification                                                                                                | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'forms.html#the-progress-element', '&lt;progress&gt;')}} | {{Spec2('HTML WHATWG')}} |                      |
| {{SpecName('HTML5 W3C', 'forms.html#the-progress-element', '&lt;progress&gt;')}} | {{Spec2('HTML5 W3C')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.progress")}}

## Voir aussi

- {{HTMLElement("meter")}}
- {{cssxref(":indeterminate")}}
- {{cssxref("-moz-orient")}}
- {{cssxref("::-moz-progress-bar")}}
- {{cssxref("::-ms-fill")}}
- {{cssxref("::-webkit-progress-bar")}}
- {{cssxref("::-webkit-progress-value")}}
- {{cssxref("::-webkit-progress-inner-element")}}
