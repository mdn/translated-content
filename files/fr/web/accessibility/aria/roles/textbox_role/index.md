---
title: Utiliser le rôle textbox
slug: Web/Accessibility/ARIA/Roles/textbox_role
tags:
  - ARIA
  - Accessibilité
  - Rôle
translation_of: Web/Accessibility/ARIA/Roles/textbox_role
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_role_textbox
---
### Description

Cette technique présente l’utilisation du rôle [`textbox`](http://www.w3.org/TR/wai-aria/roles#textbox) et décrit les effets produits sur les navigateurs et les technologies d’assistance.

Le rôle `textbox` est utilisé pour identifier un élément permettant la saisie d’un texte librement formaté. Lorsque ce rôle est ajouté à un élément, le navigateur émettra un événement `textbox` accessible aux produits de technologie d’assistance qui pourront alors le notifier à l’utilisateur.

L’utilisation par défaut est pour un champ de saisie monoligne où <kbd>Entrée</kbd> ou <kbd>Retour</kbd>, enverra le formulaire, par exemple, comme avec le HTML `<input type="text">`. Lorsqu’on a un champ multilignes et que les retours à la ligne sont pris en charge, par exemple avec l’utilisation d’un élément HTML `<textarea>`, il est également nécessaire de définir l’attribut `aria-multiline="true"`.

Lorsqu’un champ texte est en lecture seule, cela devrait être indiqué en utilisant l’attribut `aria-readonly="true"` sur l’élément concerné.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Lorsque le rôle `textbox` est ajouté à un élément, ou qu’un tel élément devient visible, l’agent utilisateur devrait suivre les étapes suivantes&nbsp;:

- Présenter l’élément comme ayant un rôle `textbox` à l’API d’accessibilité du système d’exploitation&nbsp;;
- Déclencher un événement `textbox` accessible à l’aide de l’API d’accessibilité du système d’exploitation si elle le prend en charge.

Les technologies d’assistance devraient être à l’écoute de tels événements et les notifier à l’utilisateur en conséquence&nbsp;:

- Les lecteurs d’écran devraient annoncer son label et son rôle lorsque le focus est sur la boite de texte. Si elle contient également du contenu, il devrait être annoncé comme avec une boite de texte régulière&nbsp;;
- Les loupes d’écran devraient agrandir la boite de texte.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;: ajout du rôle `textbox` dans le code HTML d’un champ de saisie monoligne `<input>`

L’extrait de code ci-dessous montre comment le rôle `textbox` est ajouté directement dans le code source HTML.

```html
<input type="text" role="textbox" value="Voici du texte" />
```

#### Exemple 2&nbsp;: ajout du rôle `textbox` dans le code HTML d’un champ de saisie multilignes `<textarea>`

L’extrait de code ci-dessous montre comment le rôle `textbox` est ajouté directement dans le code source HTML.

```html
<textarea role="textbox" aria-multiline="true">
  Voici du texte
  …
  sur plusieurs lignes.
</textarea>
```

#### Exemples concrets&nbsp;:

### Notes

- Les développeurs doivent connaitre la distinction qui existe entre les champs de saisie monolignes et les champs de saisie multilignes lorsqu’ils créent un champ&nbsp;;
- Les champs en lecture seule devraient être indiqués avec l’attribut `aria-readonly`.

### Attributs ARIA utilisés

- [textbox](http://www.w3.org/TR/wai-aria/roles#textbox).

### Techniques ARIA connexes

N/A

### Autres ressources
