---
title: font-stretch
slug: Web/CSS/@font-face/font-stretch
tags:
  - '@font-face'
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@font-face/font-stretch
---
{{CSSRef}}{{draft}}

Le descripteur CSS **`font-stretch`** permet aux auteurs de choisir entre la forme normale, condensée ou étendue d'une police fournie dans une règle {{cssxref("@font-face")}}.

Pour une police donnée, les auteurs peuvent télécharger différentes fontes pour différents styles et utiliser alors `font-stretch` de façon explicite afin de choisir la fonte voulue. Les valeurs fournies au descripteur CSS sont les mêmes que celles qui peuvent être utilisées pour la propriété correspondante.

{{cssinfo}}

## Syntaxe

```css
/* Valeurs simples */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* Valeurs multiples */
font-stretch: 75% 125%;
font-stretch: condensed ultra-condensed;;
```

### Valeurs

- `normal`
  - : Indique la forme normale (en largeur) de la police.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Indique une forme plus condensée que la normale (la valeur `ultra-condensed` correspond à la forme la plus condensée).
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Indique une forme plus étendue que la normale (la valeur `ultra-expanded` étant la plus étendue).
- `<percentage>`
  - : Un pourcentage (une valeur de type {{cssxref("&lt;percentage&gt;")}}) dont la valeur est comprise entre 50% et 200% (inclus). Les valeurs négatives ne sont pas autorisées pour cette propriété.

Dans les versions antérieures de la spécification pour `font-stretch`, la propriété ne s'utilisait qu'avec des mots-clés. Avec le module CSS Fonts de niveau 4, la syntaxe est étendue afin de permettre l'utilisation des valeurs `<percentage>`. Cela permet aux polices variables de permettre un contrôle plus fin voire continu.

Pour les polices variables TrueType et OpenType, c'est l'axe de variation `"wdth"` qui est utilisé afin d'implémenter les largeurs variables.

Si la police ne dispose pas d'une fonte avec une valeur exactement correspondantes, le moteur choisira la forme la plus proche disponible.

### Correspondance entre les noms et les pourcentages

Ce tableau indique les correspondances entre les valeurs indiquées par un mot-clé et celles définies avec un pourcentage :

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Keyword</th>
      <th scope="col">Pourcentage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ultra-condensed</code></td>
      <td>50%</td>
    </tr>
    <tr>
      <td><code>extra-condensed</code></td>
      <td>62.5%</td>
    </tr>
    <tr>
      <td><code>condensed</code></td>
      <td>75%</td>
    </tr>
    <tr>
      <td><code>semi-condensed</code></td>
      <td>87.5%</td>
    </tr>
    <tr>
      <td><code>normal</code></td>
      <td>100%</td>
    </tr>
    <tr>
      <td><code>semi-expanded</code></td>
      <td>112.5%</td>
    </tr>
    <tr>
      <td><code>expanded</code></td>
      <td>125%</td>
    </tr>
    <tr>
      <td><code>extra-expanded</code></td>
      <td>150%</td>
    </tr>
    <tr>
      <td><code>ultra-expanded</code></td>
      <td>200%</td>
    </tr>
  </tbody>
</table>

### Polices variables

La plupart des polices disposent de fontes avec des formes "séparées"/"discrètes". Toutefois, les polices variables permettent désormais d'utiliser des variations beaucoup plus fines (et c'est pour cela qu'on utilise les pourcentages).

Pour les polices variables TrueType ou OpenType, c'est l'axe de variation `"wdth"` qui est utilisé afin d'implémenter les largeurs variables des glyphes.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Dans l'exemple suivant, on charge une police Open Sans locale et on l'importe en ciblant les fontes avec les formes normale, semi-condensée et semi-étendue.

```css
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-stretch: 87.5% 112.5%;
}
```

## Accessibilité

Les personnes atteintes de dyslexie ou d'autres troubles cognitifs pourront avoir des difficultés à lire des textes dont la fonte est trop condensée, notamment [si le contraste des couleurs est trop faible](/en-US/docs/Web/CSS/color#accessibility_concerns).

- [Comprendre les règles WCAG - Partie 1.4 (MDN)](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Respecter le critère 1.4.8 - Comprendre les règles WCAG 2.0 (W3C)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Spécifications

| Spécification                                                                    | État                             | Commentaires |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('CSS4 Fonts', '#font-prop-desc', 'font-stretch')}} | {{Spec2('CSS4 Fonts')}} |              |
| {{SpecName('CSS3 Fonts', '#font-prop-desc', 'font-stretch')}} | {{Spec2('CSS3 Fonts')}} |              |

## Compatibilité des navigateurs

{{Compat("css.at-rules.font-face.font-stretch")}}

## Voir aussi

- {{cssxref("@font-face/font-display", "font-display descriptor")}}
- {{cssxref("@font-face/font-family", "font-family descriptor")}}
- {{cssxref("@font-face/font-weight", "font-weight descriptor")}}
- {{cssxref("@font-face/font-style", "font-style descriptor")}}
- {{cssxref("@font-face/font-variant", "font-variant descriptor")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
