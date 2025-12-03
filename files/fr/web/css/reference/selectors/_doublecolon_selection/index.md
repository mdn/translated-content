---
title: ::selection
slug: Web/CSS/Reference/Selectors/::selection
original_slug: Web/CSS/::selection
l10n:
  sourceCommit: 37482c6bb0894d047a225c24f102352f89788523
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::selection`** permet d'appliquer des règles CSS à une portion du document qui a été sélectionnée par l'utilisateur·ice (par exemple en cliquant et en faisant glisser la souris sur le texte).

Le pseudo-élément `::selection` suit un modèle d'héritage spécial commun à tous les pseudo-éléments de mise en évidence. Pour plus de détails sur le fonctionnement de cet héritage, consultez la section [Héritage des pseudo-éléments mise en évidence](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#héritage_des_pseudo-éléments_de_mise_en_évidence).

{{InteractiveExample("Démonstration CSS&nbsp;: ::selection", "tabbed-shorter")}}

```css interactive-example
p::selection {
  color: red;
  background-color: yellow;
}
```

```html interactive-example
<p>
  Sélectionnez un fragment de ce paragraphe pour voir comment son apparence est
  modifiée.
</p>
```

## Propriétés autorisées

Seul un sous-ensemble des propriétés CSS peut être utilisé pour une règle dont le sélecteur contient `::selection`&nbsp;:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} ainsi que les propriétés détaillées associées
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}} et {{CSSxRef("-webkit-text-stroke-width")}}

En particulier, {{CSSxRef("background-image")}} est ignorée.

## Syntaxe

```css
::selection {
  /* ... */
}
```

## Accessibilité

Il est recommandé de **ne pas surcharger la police par défaut fournie par le système d'exploitation à des fins esthétiques** et notamment si l'utilisateur·ice a personnalisé ces polices pour ses besoins. Pour les personnes qui connaissent moins les technologies, cette modification peut modifier leur compréhension des fonctionnalités du site.

Si la police est surchargée, il faut s'assurer que **le contraste** entre la couleur du texte sélectionné et celle de l'arrière-plan est suffisamment élevé afin que les personnes disposant de faibles conditions de vision puissent lire le texte lorsqu'il est sélectionné.

La valeur du contraste est déterminée en comparant la luminosité de la couleur du texte de substitution et celle de l'arrière-plan. Afin de respecter les recommandations d'accessibilité : [Web Content Accessibility Guidelines (WCAG) <sup>(angl.)</sup>](https://www.w3.org/WAI/intro/wcag), un ratio de 4.5:1 est nécessaire pour le contenu textuel normal et un ratio de 3:1 est nécessaire pour les textes plus grands ou en gras. Un texte de grande taille est défini comme étant de 18,66 pixels et en gras ou plus grand, ou de 24 pixels ou plus.

- [WebAIM&nbsp;: vérificateur de contraste <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/)
- [Explications des recommendation WCAG 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprendre le critère de succès 1.4.3 | W3C Comprendre les WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Exemples

### HTML

```html
<div>Un peu de texte pour tester ::selection.</div>
<p>Essayez également de sélectionner du texte dans ce &lt;p&gt;</p>
```

### CSS

```css hidden
::-moz-selection {
  color: gold;
  background-color: red;
}

p::-moz-selection {
  color: white;
  background-color: blue;
}
```

```css
/* le texte sélectionné sera or sur fond rouge */
::selection {
  color: gold;
  background-color: red;
}

/* le texte sélectionné dans un paragraphe sera blanc sur fond bleu */
p::selection {
  color: white;
  background-color: blue;
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("pointer-events")}} qui contrôle les évènements actifs sur l'élément
