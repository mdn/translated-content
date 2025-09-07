---
title: "Attribut HTML : required"
slug: Web/HTML/Reference/Attributes/required
original_slug: Web/HTML/Attributes/required
---

{{HTMLSidebar}}

L'attribut booléen **`required`**, s'il est présent, indique que l'utilisateur doit spécifier une valeur pour l'entrée avant que le formulaire propriétaire puisse être soumis. L'attribut `required` est pris en charge pour les éléments [`text`](/fr/docs/Web/HTML/Reference/Elements/input/text), [`search`](/fr/docs/Web/HTML/Reference/Elements/input/search), [`url`](/fr/docs/Web/HTML/Reference/Elements/input/url), [`tel`](/fr/docs/Web/HTML/Reference/Elements/input/tel), [`email`](/fr/docs/Web/HTML/Reference/Elements/input/email), [`password`](/fr/docs/Web/HTML/Reference/Elements/input/password), [`date`](/fr/docs/Web/HTML/Reference/Elements/input/date), [`month`](< /fr/docs/Web/HTML/Reference/Elements/input/month>), [`week`](/fr/docs/Web/HTML/Reference/Elements/input/week), [`time`](/fr/docs/Web/HTML/Reference/Elements/input/time), [`datetime-local`](/fr/docs/Web/HTML/Reference/Elements/input/datetime-local), [`number`](/fr/docs/Web/HTML/Reference/Elements/input/number), [`checkbox`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox), [`radio`](/fr/docs/Web/HTML/Reference/Elements/input/radio), les éléments [`file`](/fr/docs/Web/HTML/Reference/Elements/input/file), [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input), [`<select>`](/fr/docs/Web/HTML/Reference/Elements/select) et [`<textarea>`](/fr/docs/Web/HTML/Reference/Elements/textarea) de contrôle de formulaire. Si elle est présente sur l'un de ces types de saisie et éléments, la pseudo-classe [`:required`](/fr/docs/Web/CSS/:required) s'appliquera. Si l'attribut n'est pas inclus, la pseudo-classe [`:optional`](/fr/docs/Web/CSS/:optional) s'appliquera.

L'attribut n'est pas pris en charge ou n'est pas pertinent pour [`range`](/fr/docs/Web/HTML/Reference/Elements/input/range) et [`color`](/fr/docs/Web/HTML/Reference/Elements/input/color), car les deux ont des valeurs par défaut. Il n'est pas non plus pris en charge sur [`hidden`](/fr/docs/Web/HTML/Reference/Elements/input/hidden) car on ne peut pas s'attendre à ce qu'un utilisateur remplisse un formulaire qui est caché. Il n'est pas non plus supporté sur aucun des types de boutons, y compris `image`.

Notez que `color` et `range` ne supportent pas `required`, mais le type `color` est par défaut `#000000`, et `range` prend par défaut le point médian entre `min` et `max` — avec `min` et `max` prenant par défaut les valeurs 0 et 100 respectivement dans la plupart des navigateurs s'ils ne sont pas déclarés — donc a toujours une valeur.

Dans le cas d'un groupe de boutons [`radio`](/fr/docs/Web/HTML/Reference/Elements/input/radio) de même nom, si un seul bouton radio dans le groupe a l'attribut `required`, un bouton radio dans ce groupe doit être vérifié, bien que ce ne soit pas nécessairement celui où l'attribut est appliqué. Ainsi, pour améliorer la maintenance du code, il est recommandé d'inclure l'attribut `required` dans chaque bouton radio de même nom dans le groupe, ou bien dans aucun.

Dans le cas d'un même groupe nommé de types d'entrée [`checkbox`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox), seules les cases à cocher avec l'attribut `required` sont obligatoires.

> [!NOTE]
> Le réglage `aria-required="true"` indique à un lecteur d'écran qu'un élément (n'importe lequel) est requis, mais n'a aucune incidence sur le caractère facultatif de l'élément.

## Interactions entre attributs

Comme un champ en lecture seule ne peut pas avoir de valeur, `required` n'a aucun effet sur les entrées dont l'attribut [`readonly`](readonly) est également spécifié.

## Utilisabilité

Lorsque vous incluez l'attribut `required`, fournissez une indication visible à proximité du contrôle informant l'utilisateur que les éléments [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input), [`<select>`](/fr/docs/Web/HTML/Reference/Elements/select) ou [`<textarea>`](/fr/docs/Web/HTML/Reference/Elements/textarea) sont obligatoires. En outre, ciblez les contrôles de formulaire requis avec la pseudo-classe [`:required`](/fr/docs/Web/CSS/:required), en les stylisant de manière à indiquer qu'ils sont requis. Cela améliore la convivialité pour les utilisateurs voyants. Les technologies d'assistance doivent informer l'utilisateur que le contrôle de formulaire est obligatoire sur la base de l'attribut required, mais l'ajout de `aria-required="true"` ne fait pas de mal, au cas où la combinaison navigateur / lecteur d'écran ne prendrait pas encore en charge `required`.

## Validation des contraintes

Si l'élément est requis et que la valeur de l'élément est la chaîne vide, alors l'élément souffre de [`valueMissing`](/fr/docs/Web/API/ValidityState/valueMissing) et l'élément correspondra à la pseudo classe [`:invalid`](/fr/docs/Web/CSS/:invalid).

## Exemple

### HTML

```html
<form>
  <div class="group">
    <input type="text" />
    <label>Normal</label>
  </div>
  <div class="group">
    <input type="text" required="required" />
    <label>Requis</label>
  </div>
  <input type="submit" />
</form>
```

### Résultat

{{EmbedLiveSample('Exemple')}}

## Accessibilité

Fournissez une indication aux utilisateurs pour les informer que le contrôle de formulaire est requis. Veillez à ce que le message soit multiforme (texte, couleur, marquage, attribut, etc.) afin que tous les utilisateurs comprennent les exigences, qu'ils soient daltoniens, qu'ils présentent des différences cognitives ou qu'ils utilisent un lecteur d'écran.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété [`validityState.valueMissing`](/fr/docs/Web/API/validityState/valueMissing)
- Les pseudo-classes [`:required`](/fr/docs/Web/CSS/:required) et [`:optional`](/fr/docs/Web/CSS/:optional)
- L'élément [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input)
- L'élément [`<select>`](/fr/docs/Web/HTML/Reference/Elements/select)
