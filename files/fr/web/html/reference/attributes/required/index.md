---
title: "Attribut HTML : required"
short-title: required
slug: Web/HTML/Reference/Attributes/required
original_slug: Web/HTML/Attributes/required
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut {{Glossary("Boolean/HTML", "booléen")}} **`required`**, s'il est présent, indique que l'utilisateur·ice doit définir une valeur avant que le formulaire propriétaire puisse être envoyé.

L'attribut `required` est pris en charge par les types `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}`, `{{HTMLElement("input/file","file")}}`, de l'élément HTML {{HTMLElement("input")}}, ainsi que les éléments HTML de contrôle de formulaire {{HTMLElement("select")}} et {{HTMLElement("textarea")}}. Si l'attribut est présent sur l'un de ces types ou éléments, la pseudo-classe CSS {{CSSxRef(':required')}} correspondra. Si l'attribut n'est pas inclus, la pseudo-classe {{CSSxRef(':optional')}} correspondra.

L'attribut n'est pas pris en charge ou pertinent pour les types {{HTMLElement("input/range","range")}} et {{HTMLElement("input/color","color")}}, car les deux ont des valeurs par défaut. Le type `color` a pour valeur par défaut `#000000`. Le type `range` a pour valeur par défaut le point médian entre `min` et `max` — avec `min` et `max` par défaut à 0 et 100 respectivement dans la plupart des navigateurs si non déclarés. `required` n'est pas non plus pris en charge sur le type {{HTMLElement("input/hidden","hidden")}} — il n'est pas attendu que l'utilisateur·ice remplisse un champ de formulaire caché. Enfin, `required` n'est pas pris en charge sur les types de bouton, y compris {{HTMLElement("input/image","image")}}.

Dans le cas d'un groupe de boutons {{HTMLElement("input/radio","radio")}} portant le même nom, si un seul bouton radio du groupe possède l'attribut `required`, un bouton radio du groupe doit être sélectionné, même si ce n'est pas forcément celui sur lequel l'attribut est appliqué. Pour faciliter la maintenance du code, il est recommandé d'inclure l'attribut `required` sur chaque bouton radio du groupe portant le même nom, ou sur aucun.

Dans le cas d'un groupe de cases à cocher {{HTMLElement("input/checkbox","checkbox")}} portant le même nom, seules les cases à cocher avec l'attribut `required` sont requises.

> [!NOTE]
> Définir [`aria-required="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) indique à un lecteur d'écran qu'un élément (n'importe lequel) est requis, mais n'a aucun impact sur le caractère optionnel de l'élément.

### Interactions entre attributs

Comme un champ en lecture seule ne peut pas être modifié, `required` n'a aucun effet sur les entrées pour lesquelles l'attribut [`readonly`](/fr/docs/Web/HTML/Reference/Attributes/readonly) est également défini.

### Utilisabilité

Lorsque vous incluez l'attribut `required`, fournissez une indication visible près du contrôle informant l'utilisateur·ice que {{HTMLElement("input")}}, {{HTMLElement("select")}} ou {{HTMLElement("textarea")}} est requis. De plus, ciblez les contrôles de formulaire requis avec la pseudo-classe {{CSSxRef(':required')}}, en les stylisant de manière à indiquer qu'ils sont requis. Cela améliore l'utilisabilité pour les utilisateur·ice·s voyants. La technologie d'assistance doit informer l'utilisateur·ice que le contrôle de formulaire est obligatoire en fonction de l'attribut required, mais ajouter `aria-required="true"` ne nuit pas, au cas où la combinaison navigateur / lecteur d'écran ne prendrait pas encore en charge `required`.

### Validation des contraintes

Si l'élément est requis et que sa valeur est une chaîne de caractères (<i lang="en">string</i> en anglais) vide, alors l'élément présente {{DOMxRef('ValidityState.valueMissing','valueMissing')}} et l'élément correspondra à la pseudo-classe {{CSSxRef(':invalid')}}.

## Problèmes d'accessibilité

Fournissez une indication à l'utilisateur·ice pour l'informer que le contrôle de formulaire est requis. Assurez-vous que le message soit multi-facette, par exemple par le texte, la couleur, des marques et l'attribut, afin que tous·tes les utilisateur·ice·s comprennent les exigences, qu'ils·elles soient daltonien·ne·s, présentent des différences cognitives ou utilisent un lecteur d'écran.

## Exemple

### HTML

```html
<form>
  <div class="group">
    <input type="text" />
    <label>Normal</label>
  </div>
  <div class="group">
    <input type="text" required />
    <label>Requis</label>
  </div>
  <input type="submit" />
</form>
```

### Résultat

{{EmbedLiveSample('Example')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété Javascript {{DOMxRef('validityState.valueMissing')}}
- Les pseudo-classes CSS {{CSSxRef(':required')}} et {{CSSxRef(':optional')}}
- L'élément HTML {{HTMLElement('input')}}
- L'élément HTML {{HTMLElement('select')}}
