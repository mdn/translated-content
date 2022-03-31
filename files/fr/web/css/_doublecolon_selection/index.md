---
title: '::selection'
slug: Web/CSS/::selection
tags:
  - CSS
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::selection
---
{{CSSRef}}

Le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) **`::selection`** permet d'appliquer des règles CSS à une portion du document qui a été sélectionnée par l'utilisateur (via la souris ou un autre dispositif de pointage).

```css
::selection {
  background-color: cyan;
}
```

## Propriétés autorisées

Seul un sous-ensemble des propriétés CSS peut être utilisé pour une règle dont le sélecteur contient `::selection` :

- {{cssxref("color")}},
- {{cssxref("background-color")}},
- {{cssxref("cursor")}},
- {{cssxref("caret-color")}},
- {{cssxref("outline")}} ainsi que les propriétés détaillées associées,
- {{cssxref("text-decoration")}} ainsi que les propriétés détaillées associées,
- {{cssxref("text-emphasis-color")}},
- {{cssxref("text-shadow")}}.

On notera que {{cssxref("background-image")}} est ignorée, comme les autres propriétés.

## Syntaxe

    /*Syntaxe propre à Firefox (61 et antérieur) */
    ::-moz-selection
    {{csssyntax}}

## Exemples

### CSS

```css
/* du texte sélectionné sera jaune sur fond rouge */
::-moz-selection {
  color: gold;
  background-color: red;
}

::selection {
  color: gold;
  background-color: red;
}

/* le texte sélectionné dans un paragraphe */
/* sera blanc sur noir                     */
p::-moz-selection {
  color: white;
  background-color: black;
}

p::selection {
  color: white;
  background-color: black;
}
```

### HTML

```html
<div>Un peu de texte pour tester ::selection.</div>
<p>Essayez également de sélectionner du texte dans ce &lt;p&gt;</p>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Accessibilité

Il est recommandé de **ne pas surcharger la police par défaut fournie par le système d'exploitation à des fins esthétiques** et notamment si l'utilisateur a personnalisé ces polices pour ses besoins. Pour les personnes qui connaissent moins les technologies, cette modification peut modifier leur compréhension des fonctionnalités du site.

Si la police est surchargée, il faut s'assurer que le contraste entre la couleur du texte sélectionné et celle de l'arrière-plan est suffisamment élevé afin que les personnes disposant de faibles conditions de vision puissent lire le texte lorsqu'il est sélectionné.

La valeur du contraste est déterminée en comparant la luminosité de la couleur du texte de substitution et celle de l'arrière-plan. Afin de respecter les recommandations d'accessibilité : [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag), un ratio de 4.5:1 est nécessaire pour le contenu textuel normal et un ratio de 3:1 est nécessaire pour les textes plus grands ou en gras. Le seuil entre ces deux tailles est défini de la façon suivante :

- Si le texte est en gras : 18.66px ou plus grand
- Sinon 24px ou plus grand

Quelques ressources :

- [WebAIM : vérificateur de contraste](https://webaim.org/resources/contrastchecker/)
- [Explications des recommendation WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Spécifications

| Spécification                                                                                            | État                                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#selectordef-selection', '::selection')}} | {{Spec2('CSS4 Pseudo-Elements')}} | Définition initiale. |

> **Note :** Bien que ce pseudo-élément était inscrit dans les brouillons pour la spécification des sélecteurs CSS de niveau 3, il a été retiré dans la phase de recommandation car le comportement n'était pas suffisamment défini, notamment avec les éléments imbriqués, de plus, l'interopérabilité n'était pas encore aboutie [(selon une discussion de la liste de diffusion W3C Style)](https://lists.w3.org/Archives/Public/www-style/2008Oct/0268.html).
>
> Le pseudo-élément `::selection` a de nouveau été ajouté dans la spécification pour [les pseudo-éléments de niveau 4](https://dev.w3.org/csswg/css-pseudo-4/).

## Compatibilité des navigateurs

{{Compat("css.selectors.selection")}}

## Voir aussi

- {{cssxref("pointer-events")}} qui contrôle les évènements actifs sur l'élément
