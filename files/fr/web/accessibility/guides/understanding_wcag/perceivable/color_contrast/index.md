---
title: Contraste de la couleur
slug: Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast
original_slug: Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le [contraste de la couleur <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#dfn-contrast-ratio) entre l'arrière-plan et le contenu de premier plan (généralement du texte) doit être suffisamment prononcé pour garantir la lisibilité.

Lors de la conception d'interfaces lisibles pour différentes capacités de vision, les directives WCAG recommandent les rapports de contraste suivants&nbsp;:

| Type de contenu                                                                                      | Ratio minimum (Note AA) | Ratio amélioré (Note AAA) |
| ---------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------- |
| Corps                                                                                                | 4,5:1                   | 7:1                       |
| Texte grande échelle (120-150% plus large que le corps)                                              | 3:1                     | 4,5:1                     |
| Composants d'interface utilisateur actifs et objets graphiques tels que des icônes et des graphiques | 3:1                     | Non défini                |

Ces ratios ne s'appliquent pas au texte «&nbsp;accessoire&nbsp;», comme les contrôles inactifs, les logotypes ou le texte purement décoratif.

Voir la section [Solution](#solution) ci-dessous pour plus d'informations.

Un bon contraste des couleurs sur votre site profite à tou·te·s vos utilisateur·ice·s, mais cela est particulièrement important pour les utilisateur·ice·s souffrant de certains types de daltonisme ou d'autres particularités similaires, qui rencontrent un faible contraste et ont du mal à distinguer des couleurs proches. Ces utilisateur·ice·s ne perçoivent pas les zones claires et sombres aussi facilement que celles et ceux sans ces particularités et ont donc du mal à voir les bords, les bordures et d'autres détails.

Un design attrayant ne sert à rien si vos utilisateur·ice·s ne peuvent pas lire votre contenu.

## Exemples

Jetons un coup d'œil à un code HTML et CSS simple&nbsp;:

```html
<div class="bon">Bon contraste</div>
<div class="mauvais">Mauvais contraste</div>
```

```css
div {
  /* Styles généraux de div ici */
}

.good {
  background-color: #5a80a9;
}

.bad {
  background-color: #400064;
}
```

Les deux textes ont leur couleur noire par défaut. La «&nbsp;bonne&nbsp;» `<div>` a un fond violet clair, ce qui rend le texte facile à lire&nbsp;:

### Bon constraste

```html
<div class="bon">Bon contraste</div>
```

```css
div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px black;
}

.bon {
  background-color: #5a80a9;
}
```

{{EmbedLiveSample('Bon constraste', '100%', '100')}}

### Mauvais constraste

La «&nbsp;mauvaise&nbsp;» `<div>`, en revanche, a un fond violet très foncé, ce qui rend le texte beaucoup plus difficile à lire&nbsp;:

```html
<div class="mauvais">Mauvais contraste</div>
```

```css
div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px black;
}

.mauvais {
  background-color: #400064;
}
```

{{EmbedLiveSample('Mauvais constraste', '100%', '100')}}

## Solution

Lorsque vous choisissez un jeu de couleurs pour votre site Web, choisissez des couleurs de premier plan et d'arrière-plan qui offrent un bon contraste. Faites en sorte que le contraste des couleurs soit aussi élevé que possible dans vos contraintes de conception&nbsp;: visez idéalement la note AAA (voir paragraphe 1.4.6 ci-dessous), mais respectez au moins la note AA (voir paragraphe 1.4.3 ci-dessous).

Si vous incluez du contenu non textuel tel qu'une vidéo ou une animation, vous devrez suivre le paragraphe 1.4.11 (voir ci-dessous).

Pour vérifier le contraste lors du choix de vos couleurs, vous pouvez utiliser le [Vérificateur de Contraste des Couleurs <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/) de WebAIM.

Vous pouvez également vérifier le contraste des couleurs directement via les outils de développement de Firefox&nbsp;: consultez notre guide de l'[Inspecteur de l'accessibilité <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html), et en particulier la section [Vérifier les problèmes d'accessibilité <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#sélecteur_daccessibilité). Essayez de les utiliser sur les exemples dans la section de description.

## Critères de réussite associés aux WCAG

- [1.4.3 Contraste minimum (AA) <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum)
  - : Le contraste des couleurs entre le contenu d'arrière-plan et de premier plan doit être au minimum pour garantir la lisibilité&nbsp;:
    - Le texte et son arrière-plan doivent avoir un ratio de contraste d'au moins 4,5:1.
    - Le texte d'en-tête (ou simplement «&nbsp;plus grand&nbsp;») doit avoir un ratio d'au moins 3:1. Le texte «&nbsp;plus grand&nbsp;» est défini comme au moins 18pt, ou 14pt en gras.

- [1.4.6 Contraste amélioré (AAA) <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#contrast-enhanced)
  - : Cela suit et s'appuie sur le critère 1.4.3.
    - Le texte et son arrière-plan doivent avoir un ratio de contraste d'au moins 7:1.
    - Le texte d'en-tête (ou simplement «&nbsp;plus grand&nbsp;») doit avoir un ratio d'au moins 4,5:1.

- [1.4.11 Contraste non textuel (AA) <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#non-text-contrast)
  - : Il doit y avoir un ratio de contraste de couleur minimum de 3:1 pour les composants de l'interface utilisateur et les objets graphiques.

## Voir aussi

- [Couleur et contraste de couleur](/fr/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#couleur_et_contraste_de_couleur)
- [Étiquettes multiples](/fr/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#étiquettes_multiples)
- [Comprendre le contraste non textuel <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
