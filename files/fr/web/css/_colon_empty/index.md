---
title: ':empty'
slug: Web/CSS/:empty
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:empty
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:empty`** correspond à un élément qui n'a aucun enfant. Seules les feuilles de l'arbre et le texte (espaces inclus) sont pris en compte. Les commentaires, les attributs ou le contenu généré en CSS avec {{cssxref("content")}} n'ont pas d'influence sur le contenu de l'élément (autrement dit, si un élément ne contient que des commentaires, il sera considéré comme vide).

```css
/* Cible tous les éléments <div> qui */
/* n'ont pas de contenu */
div:empty {
  background: lime;
}
```

> **Note :** Avec {{SpecName("CSS4 Selectors", "#the-empty-pseudo")}}, le sélecteur `:empty` a été modifié afin de se comporter comme {{CSSxRef(":-moz-only-whitespace")}} mais, à l'heure actuelle, aucun navigateur ne prend en charge cette fonctionnalité.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
body {
  display: flex;
  justify-content: space-around;
}

.box {
  background: red;
  height: 100px;
  width: 100px;
}

.box:empty {
  background: blue;
}
```

### HTML

```html
<div class="box"><!-- Je serai bleu. --></div>
<div class="box">Je serai rouge.</div>
<div class="box">
    <!-- Je serai rouge à cause des espaces autour du commentaire -->
</div>
```

### Résultat

{{EmbedLiveSample('Exemples','100%','105')}}

## Accessibilité

Les technologies d'assistance telles que les lecteurs d'écran ne peuvent pas analyser un contenu interactif vide. Tout contenu interactif doit avoir un nom accessible, fourni sous la forme d'une valeur textuelle via l'élément parent du contrôle ({{HTMLElement("a")}}, {{HTMLElement("button")}}, etc.). Les noms accessibles pemettent d'exposer le contrôle interactif au sein de [l'arbre d'accessibilité](/fr/docs/Learn/Accessibility/What_is_accessibility), une API communiquant des informations qui peuvent être utilisées par les technologies d'assistance.

Le texte fournissant le nom accessible peut être masqué grâce [à des propriétés](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) afin de le retirer visuellement mais de le conserver pour les technologies d'assistance. Cette méthode est généralement utilisée pour les boutons utilisant une simple icône comme indication.

- [Qu'est-ce qu'un nom accessible ? The Paciello Group (en anglais)](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
- <i lang="en">Hidden content for better a11y</i>

  [<i lang="en">Hidden content for better a11y</i> (en anglais)](https://gomakethings.com/hidden-content-for-better-a11y/)

- [Comprendre la règle WCAG 2.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_%E2%80%94_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- <i lang="en">Understanding Success Criterion 2.4.4</i>

  [<i lang="en">Understanding Success Criterion 2.4.4</i> (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

## Spécifications

| Spécification                                                                    | État                                 | Commentaires                                                                                 |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------- |
| {{SpecName("CSS4 Selectors", "#the-empty-pseudo", ":empty")}} | {{Spec2('CSS4 Selectors')}} | Modifier afin d'obtenir le comportement de {{CSSxRef(":-moz-only-whitespace")}}. |
| {{SpecName("CSS3 Selectors", "#empty-pseudo", ":empty")}}     | {{Spec2('CSS3 Selectors')}} | Définition initiale.                                                                         |

## Compatibilité des navigateurs

{{Compat("css.selectors.empty")}}

## Voir aussi

- {{cssxref(":blank")}}{{Experimental_inline}}
