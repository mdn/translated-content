---
title: Contraste de la couleur
slug: Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
---

Le [contraste de la couleur](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) entre l'arrière-plan et le contenu de premier-plan (qui est en général du texte) doit être assez prononcé pour assurer la lisibilité.

Lors de la conception d'interfaces lisibles pour différentes capacités de vision, les directives WCAG recommandent les rapports de contraste suivants:

| Type de contenu                                                                                      | Ratio minimum (Note AA) | Ratio amélioré (Note AAA) |
| ---------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------- |
| Corps                                                                                                | 4.5 : 1                 | 7 : 1                     |
| Texte grande échelle (120-150% plus large que le corps)                                              | 3 : 1                   | 4.5 : 1                   |
| Composants d'interface utilisateur actifs et objets graphiques tels que des icônes et des graphiques | 3 : 1                   | Non défini                |

Ces ratios ne s'appliquent pas au texte "accessoire", comme les contrôles inactifs, les logotypes ou le texte purement décoratif.

Voir la section [Solution](#solution) ci-dessous pour plus d'informations.

Un bon contraste des couleurs sur votre site profite à tous vos utilisateurs, mais celà est particulièrement intéressant pour les utilisateurs souffrant de certains types de daltonisme et d'autres particularités similaires, qui rencontrent un faible contraste et ont du mal à faire la différence entre des couleurs proches. En effet, ces utilisateurs ne voient pas les zones claires et sombres aussi facilement que ceux sans ces particularités et ont donc du mal à voir les bords, les bordures et d'autres détails.

C'est bien d'avoir un design cool sur votre site, mais le design ne vaut rien si vos utilisateurs ne peuvent pas lire votre contenu.

## Exemples

Jetons un coup d'œil à du code HTML et CSS assez simple:

```html
<div class="bon">Bon contraste</div>
<div class="mauvais">Mauvais contraste</div>
```

```css
div {
  /* Styles généraux de div ici */
}

.bon {
  background-color: #fae6fa;
}

.mauvais {
  background-color: #400064;
}
```

Les deux textes ont leur couleur noire par défaut. La "bonne" `<div>` a un fond violet clair, ce qui rend le texte facile à lire:

### Bon exemple

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
  box-shadow: 1px 1px 1px black;
}

.bon {
  background-color: #fae6fa;
}
```

{{EmbedLiveSample('Bon_exemple', '100%', '100')}}

### Mauvais exemple

La "mauvaise" `<div>`, en revanche, a un fond violet très foncé, ce qui rend le texte beaucoup plus difficile à lire:

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
  box-shadow: 1px 1px 1px black;
}

.mauvais {
  background-color: #400064;
}
```

{{EmbedLiveSample('Mauvais_exemple', '100%', '100')}}

## Solution

Lorsque vous choisissez un jeu de couleurs pour votre site Web, choisissez des couleurs de premier plan et d'arrière-plan qui offrent un bon contraste. Faites en sorte que le contraste des couleurs soit aussi bon que possible dans vos contraintes de conception - optez idéalement pour la note AAA (voir paragraphe 1.4.6 ci-dessous), mais répondez au moins à la note AA (voir paragraphe 1.4.3 ci-dessous).

Si vous incluez du contenu non textuel tel qu'une vidéo ou une animation, vous devrez suivre le paragraphe 1.4.11 (encore une fois, voir ci-dessous).

Pour vérifier votre contraste lorsque vous effectuez un choix de couleurs, vous pouvez utiliser le [Vérificateur de Contraste des Couleurs](https://webaim.org/resources/contrastchecker/) de WebAIM.

Vous pouvez également vérifier le contraste des couleurs directement via les outils de développement de Firefox — consultez notre guide de l'[Inspecteur de l'accessibilité](/fr/docs/Tools/Accessibility_inspector), et en particulier la section [Vérifier les problèmes d'accessibilité](/fr/docs/Outils/Inspecteur_accessibilite#Sélecteur_d'accessibilité). Essayez de les utiliser sur les exemples dans la section de description.

## Critères de réussite associés aux WCAG

- [1.4.3 Contraste minimum (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum)

  - : Le contraste des couleurs entre le contenu d'arrière-plan et de premier plan doit être au minimum pour garantir la lisibilité:

    - Le texte et son arrière-plan doivent avoir un ratio de contraste d'au moins 4.5:1.
    - Le texte d'en-tête (ou juste "plus grand") doit avoir un ratio d'au moins 3:1. Le texte "plus grand" est défini comme au moins 18pt, ou 14pt en gras.

- [1.4.6 Contraste amélioré (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced)

  - : Cela suit et s'appuie sur le critère 1.4.3.

    - Le texte et son arrière-plan doivent avoir un ratio de contraste d'au moins 7:1.
    - Le texte d'en-tête (ou juste "plus grand") doit avoir un ratio d'au moins 4.5:1.

- [1.4.11 Contraste non textuel (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast) (ajouté en 2.1)
  - : Il doit y avoir un ratio de contraste de couleur minimum de 3 à 1 pour les composants de l'interface utilisateur et les objets graphiques.

## Voir aussi

- [Couleur et contraste de couleur](/fr/docs/Learn/Accessibility/CSS_and_JavaScript#couleur_et_contraste_de_couleur)
- [Étiquettes multiples](/fr/docs/Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML#Étiquettes_multiples)
- [Comprendre le contraste non textuel](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
