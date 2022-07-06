---
title: ':enabled'
slug: Web/CSS/:enabled
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:enabled
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:enabled`** permet de cibler un élément activé. Un élément est activé s'il peut être sélectionné, si on peut cliquer dessus ou si on peut y saisir du texte ou y passer le focus (un élément peut également être dans un état désactivé).

```css
/* Cible n'importe quel élément <input> actif */
input:enabled {
  color: #22AA22;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

Dans cet exemple, les textes des éléments activés seront verts alors que ceux des éléments désactivés seront gris. L'utilisateur peut ainsi reconnaître les éléments avec lesquels interagir.

### HTML

```html
<form action="url_of_form">
  <label for="PremierChamp">Premier champ (activé) :</label>
  <input type="text" id="PremierChamp" value="Titi"><br />

  <label for="DeuxiemeChamp">Deuxième champ (désactivé) :</label>
  <input type="text" id="DeuxiemeChamp" value="Toto" disabled="disabled"><br />

  <input type="button" value="Envoyer"/>
</form>
```

### CSS

```css
input:enabled {
  color: #22AA22;
}

input:disabled {
  color: #D9D9D9;
}

```

### Résultat

{{EmbedLiveSample("Exemples",550,95)}}

## Spécifications

| Spécification                                                                        | État                                 | Commentaires                                                             |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', '#selector-enabled', ':enabled')}}     | {{Spec2('HTML WHATWG')}}     | Aucune modification.                                                     |
| {{SpecName('HTML5 W3C', '#selector-enabled', ':enabled')}}         | {{Spec2('HTML5 W3C')}}         | Définition de la sémantique dans le contexte de HTML et des formulaires. |
| {{SpecName('CSS4 Selectors', '#enableddisabled', ':enabled')}} | {{Spec2('CSS4 Selectors')}} | Aucune modification.                                                     |
| {{SpecName('CSS3 Basic UI', '#pseudo-classes', ':enabled')}}     | {{Spec2('CSS3 Basic UI')}} | Lien vers la spécification des sélecteurs de niveau 3.                   |
| {{SpecName('CSS3 Selectors', '#enableddisabled', ':enabled')}} | {{Spec2('CSS3 Selectors')}} | Définition de la pseudo-classe mais pas de la sémantique associée.       |

## Compatibilité des navigateurs

{{Compat("css.selectors.enabled")}}

## Voir aussi

- {{cssxref(":disabled")}}
