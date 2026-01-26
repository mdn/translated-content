---
title: "ARIA : rôle textbox"
short-title: textbox
slug: Web/Accessibility/ARIA/Reference/Roles/textbox_role
original_slug: Web/Accessibility/ARIA/Roles/textbox_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `textbox` sert à identifier un élément qui permet la saisie de texte libre. Chaque fois que possible, préférez utiliser un élément {{HTMLElement("input")}} avec [type="text"](/fr/docs/Web/HTML/Reference/Elements/input/text) pour une saisie sur une seule ligne, ou un élément {{HTMLElement("textarea")}} pour une saisie sur plusieurs lignes.

## Description

Lorsqu'un élément possède le rôle `textbox`, le navigateur envoie un événement de zone de saisie accessible aux technologies d'assistance, qui peuvent alors en informer l'utilisateur·ice.

Par défaut, il s'agit d'une saisie sur une seule ligne, où <kbd>Entrée</kbd> ou <kbd>Retour</kbd> soumet le formulaire&nbsp;: dans ce cas, il est préférable d'utiliser un élément HTML {{HTMLElement("input")}} avec `type="text"`. Pour créer une zone de texte multiligne qui prend en charge les retours à la ligne, comme avec un élément HTML {{HTMLElement("textarea")}}, définissez `aria-multiline="true"`. L'ajout de l'attribut HTML `contenteditable` garantit que le nœud texte est éditable.

```html
<!-- Champ de saisie de texte -->
<div id="txtboxLabel">Saisissez votre code postal à cinq chiffres</div>
<div
  role="textbox"
  contenteditable="true"
  aria-placeholder="Code postal à cinq chiffres"
  aria-labelledby="txtboxLabel"></div>

<!-- Zone de texte multiligne -->
<div id="txtboxMultilineLabel">Saisissez les balises pour l'article</div>
<div
  role="textbox"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-required="true"></div>
```

Les éléments sémantiques sont plus concis et ne nécessitent aucun JavaScript pour prendre en charge les fonctionnalités de zone de saisie.

```html
<label for="txtbox">Saisissez votre code postal à cinq chiffres</label>
<input type="text" placeholder="Code postal à cinq chiffres" id="txtbox" />

<!-- Zone de texte multiligne -->
<label for="txtboxMultiline">Saisissez les balises pour l'article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Si un champ de texte est en lecture seule, indiquez-le en définissant `aria-readonly="true"` sur l'élément.

### Propriétés, états et rôles associés

- l'attribut [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Prend comme valeur l'id d'un descendant de l'élément ayant la sélection dans le DOM, ou d'un descendant logique indiqué par l'attribut [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns). Il indique quand cet élément a la sélection, notamment dans un widget composite comme un [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role). Par exemple, dans un combobox, la sélection peut rester sur la zone de saisie tandis que la valeur de `aria-activedescendant` sur l'élément textbox fait référence à un descendant d'une liste déroulante contrôlée par la zone de saisie. Cet attribut doit être mis à jour par programmation lors des changements de sélection.
- l'attribut [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
  - : Indique si et comment la saisie de l'utilisateur·ice dans le champ peut déclencher l'affichage d'une suggestion de valeur. Les valeurs possibles sont&nbsp;:
    - `inline`&nbsp;: le texte prédit est inséré après le curseur.
    - `list`&nbsp;: le texte prédit est présenté comme une liste de valeurs.
    - `both`&nbsp;: le texte prédit est présenté comme une liste de valeurs, avec le texte nécessaire pour compléter une valeur inséré après le curseur.
    - `none` (valeur par défaut)&nbsp;: aucune suggestion n'est proposée.

    Si la valeur est `list` ou `both`, il faut aussi inclure les attributs [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) et [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup). La valeur de `aria-controls` est l'id de l'élément qui contient la liste des valeurs suggérées. De plus, la zone de saisie ou un élément parent avec le rôle `combobox` doit avoir une valeur pour `aria-haspopup` qui correspond au rôle de l'élément contenant la liste des valeurs suggérées.

- l'attribut [`aria-multiline`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
  - : Si `aria-multiline="true"` est défini, la technologie d'assistance informe l'utilisateur·ice que la zone de saisie accepte plusieurs lignes, avec l'attente que <kbd>Entrée</kbd> ou <kbd>Retour</kbd> crée un saut de ligne au lieu de soumettre le formulaire. ARIA ne modifie pas le comportement de l'élément&nbsp;: cette fonctionnalité doit être gérée par le·la développeur·euse. Si la valeur est `false` ou si l'attribut est omis (par défaut à `false`), l'utilisateur·ice s'attend à une saisie sur une seule ligne, et <kbd>Entrée</kbd> ou <kbd>Retour</kbd> soumet le formulaire.

- l'attribut [`aria-placeholder`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
  - : Représente une indication (mot ou expression) pour l'utilisateur·ice sur ce qu'il·elle doit saisir dans le champ. L'indication doit être une valeur exemple ou une brève description du format attendu. Cette information ne doit pas remplacer une étiquette&nbsp;: une étiquette est sélectionnable, permanente, indique le type d'information attendu et augmente la zone de sélection du contrôle, tandis que le texte d'indication n'est qu'une aide temporaire sur la valeur attendue, ce qui, si mal implémenté, peut réduire l'accessibilité. L'indication doit être visible lorsque la valeur du contrôle est une chaîne vide, par exemple lors de la première sélection ou quand l'utilisateur·ice efface une valeur précédemment saisie. Préférez l'attribut `placeholder` des éléments sémantiques `<input type="text">` ou `<textarea>` à `aria-placeholder`.
- l'attribut [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Indique que l'utilisateur·ice ne peut pas modifier la valeur du champ de texte. Préférez l'attribut `readonly` des éléments sémantiques `<input type="text">` ou `<textarea>` à `aria-readonly`.
- l'attribut [`aria-required`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Indique qu'une valeur doit être fournie avant la soumission du champ. Préférez l'attribut `required` des éléments sémantiques `<input type="text">` ou `<textarea>` à `aria-required`.

### Interactions au clavier

En saisie sur une seule ligne (quand `aria-multiline` vaut `false` ou n'est pas utilisé), la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> soumet le formulaire. En saisie multiligne (quand `aria-multiline` vaut `true`), la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> insère un saut de ligne.

### Fonctionnalités JavaScript

Toutes les fonctionnalités associées aux propriétés et états doivent être maintenues, et la soumission du formulaire sur <kbd>Entrée</kbd> ou <kbd>Retour</kbd> dans une zone de saisie sur une seule ligne doit être gérée.

- Gestionnaire d'événement de sélection et attribut `aria-activedescendant`
  - : Si vous implémentez un widget composite, comme une boîte combinée composée d'une zone de saisie et d'une liste déroulante, vous devez gérer l'attribut `aria-activedescendant` via un gestionnaire. Avant d'utiliser cette technique, assurez-vous que les navigateurs ciblés la prennent en charge. Voir la [spécification aria-descendant <sup>(angl.)</sup>](https://w3c.github.io/aria/#aria-activedescendant) pour plus d'informations.

> [!NOTE]
> Il est préférable d'utiliser un élément {{HTMLElement("input")}} avec type="text", ou un élément {{HTMLElement("textarea")}} plutôt que le rôle ARIA textbox. Lorsque vous utilisez l'un de ces éléments sémantiques, le rôle ARIA textbox n'est pas nécessaire. Voir [Notes sur l'utilisation d'ARIA en HTML <sup>(angl.)</sup>](https://w3c.github.io/using-aria/).

## Effets possibles sur les agents utilisateur et les technologies d'assistance

Lorsque le rôle `textbox` est ajouté à un élément, ou que cet élément devient visible, l'agent utilisateur doit&nbsp;:

- Exposer l'élément comme ayant le rôle textbox dans l'API d'accessibilité du système d'exploitation.
- Déclencher un événement de zone de saisie accessible via l'API d'accessibilité du système d'exploitation si elle le prend en charge.

Les produits de technologies d'assistance doivent écouter cet événement et en informer l'utilisateur·ice&nbsp;:

- Les lecteurs d'écran doivent annoncer son étiquette et son rôle lors de la première sélection sur une zone de saisie. Si elle contient du contenu, celui-ci doit être annoncé comme pour une zone de saisie classique.
- Les loupes d'écran peuvent agrandir la zone de saisie.

> [!NOTE]
> Les avis peuvent diverger sur la façon dont les technologies d'assistance doivent gérer cette technique. Les informations ci-dessus sont l'une de ces opinions et peuvent être vécues différemment.

## Exemples

### Exemple&nbsp;1&nbsp;: Ajouter le rôle dans le code HTML pour une saisie sur une seule ligne

L'extrait ci-dessous montre comment le rôle textbox est ajouté directement dans le code source HTML.

```html
<div role="textbox" contenteditable="true"></div>
```

### Exemple&nbsp;2&nbsp;: Ajouter le rôle dans le code HTML pour une saisie multiligne

L'extrait ci-dessous montre comment le rôle textbox est ajouté directement dans le code source HTML.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Bonnes pratiques

Veillez à ajouter l'attribut `contenteditable="true"` à l'élément HTML auquel ce rôle est appliqué. Faites-le même si vous définissez `aria-readonly` à `true`&nbsp;: ainsi, vous indiquez que le contenu serait éditable s'il n'était pas en lecture seule.

## Voir aussi

- [ARIA&nbsp;: rôle `search`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
