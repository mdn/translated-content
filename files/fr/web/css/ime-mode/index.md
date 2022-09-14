---
title: ime-mode
slug: Web/CSS/ime-mode
tags:
  - CSS
  - Obsolete
  - Propriété
  - Reference
translation_of: Web/CSS/ime-mode
---
{{CSSRef}}{{deprecated_header}}

La propriété **`ime-mode`** contrôle l'état de l'éditeur de méthode d'entrée (IME) pour la saisie des champs textuels.

```css
/* Valeurs avec un mot-clé */
ime-mode: auto;
ime-mode: normal;
ime-mode: active;
ime-mode: inactive;
ime-mode: disabled;

/* Valeurs globales */
ime-mode: inherit;
ime-mode: initial;
ime-mode: unset;
```

Selon la spécification :

« `ime-mode` » est en quelques sortes une propriété implémentée par quelques navigateurs, qui pose problème et qui est officiellement rendue obsolète par cette spécification

Aussi, la spécification indique aux agents utilisateurs de ne pas prendre en charge `ime-mode` et il est déconseillé d'utiliser cette propriété dans des feuilles de styles.

La propriété `ime-mode` est partiellement implémentée et de façon hétérogène entre les différents navigateurs. Elle est apparue sous la forme d'une extension Microsoft avec Internet Explorer 5 : {{spec("http://msdn.microsoft.com/library/ms530767(VS.85).aspx","-ms-ime-mode Attribute | imeMode Property")}}.

> **Note :** Il n'est, en général, pas pertinent de modifier le mode IME d'un site. Cette propriété ne devrait être utilisée que pour des applications web privées ou pour annuler une modification de cette propriété par du code historique.

## Syntaxe

La valeur de cette propriété peut être l'un des mots-clés définis ci-après.

### Valeurs

- `auto`
  - : Aucun changement n'est apporté à l'état de l'éditeur. C'est la valeur par défaut.
- `normal`
  - : L'état de l'IME devrait être normal. Cette valeur peut être utilisée via une feuille de style utilisateur pour surcharger la valeur indiquée par le document. _Cette valeur n'est pas prise en charge par Internet Explorer._
- `active`
  - : L'éditeur de méthode d'entrée est actif au début et la saisie utilise l'éditeur sauf si l'utilisateur le ferme. _Cette valeur n'est pas prise en charge sur Linux._
- `inactive`
  - : L'éditeur de méthode d'entrée est inactif au début et l'utilisateur peut l'activer si besoin. _Cette valeur n'est pas prise en charge sur Linux._
- `disabled`
  - : L'éditeur de méthode d'entrée est désactivé et ne peut pas être activé par l'utilisateur.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```html
<input type="text" name="name" value="initial value" style="ime-mode: disabled">
```

Cet exemple désactive l'IME pour un champ donné (par exemple pour saisir des données dans une base de données qui ne supporte pas certains jeux de caractères).

## Spécifications

| Spécification                                                                            | État                                 | Commentaires                                   |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------- |
| {{SpecName('CSS3 Basic UI', '#input-method-editor', 'ime-mode')}} | {{Spec2('CSS3 Basic UI')}} | Définition initiale. Rend `ime-mode` obsolète. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.ime-mode")}}

## Voir aussi

- La propriété Microsoft avec un suffixe propriétaire IE5 {{spec("http://msdn.microsoft.com/library/ms530767(VS.85).aspx","-ms-ime-mode Attribute | imeMode Property")}}
