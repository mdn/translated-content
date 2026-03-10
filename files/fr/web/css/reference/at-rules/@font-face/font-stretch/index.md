---
title: font-stretch
slug: Web/CSS/Reference/At-rules/@font-face/font-stretch
l10n:
  sourceCommit: 3c91c067a4d36b532a4bce72e5d8a2c5a9279db5
---

> [!NOTE]
> Le descripteur `font-stretch` a été renommé en {{CSSxRef("@font-face/font-width")}} dans la [spécification CSS Fonts <sup>(angl.)</sup>](https://drafts.csswg.org/css-fonts/#font-stretch-desc). Pour préserver la compatibilité, la spécification conserve `font-stretch` comme alias obsolète pour le descripteur `font-width`.

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`font-stretch`** permet aux auteur·ice·s de choisir entre la forme normale, condensée ou étendue d'une police fournie dans une règle {{CSSxRef("@font-face")}}.

Pour une famille de polices particulière, les auteur·ice·s peuvent télécharger différentes fontes correspondant aux différents styles de la même famille de polices, puis utiliser le descripteur `font-stretch` pour définir explicitement l'étirement de la fonte.

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
font-stretch: condensed ultra-condensed;
```

Le descripteur `font-stretch` peut prendre une seule valeur parmi celles de la liste ci-dessous.

### Valeurs

- `normal`
  - : Définit une police normalement condensée.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Définit une forme plus condensée que la normale (la valeur `ultra-condensed` est à la forme la plus condensée).
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Définit une forme plus étendue que la normale (la valeur `ultra-expanded` est à la forme la plus étendue).
- `<percentage>`
  - : Un pourcentage (une valeur de type {{CSSxRef("&lt;percentage&gt;")}}) dont la valeur est comprise entre 50% et 200% (inclus). Les valeurs négatives ne sont pas autorisées pour ce descripteur.

Dans les versions antérieures de la spécification pour `font-stretch`, le descripteur n'acceptait que les neuf valeurs de mots-clés. Le module CSS Fonts de niveau 4 étend la syntaxe pour accepter également une valeur `<percentage>`. Cela permet aux polices variables d'offrir une variation continue des largeurs des caractères. Pour les polices variables TrueType ou OpenType, la variation `"wdth"` est utilisée pour implémenter les largeurs variables.

Pour les polices variables TrueType et OpenType, c'est l'axe de variation `"wdth"` qui est utilisé afin d'implémenter les largeurs variables.

Si la police ne fournit pas une fonte correspondant exactement à la valeur donnée, les valeurs inférieures à `100%` correspondent à une fonte condensée, et les valeurs supérieures ou égales à `100%` correspondent à une fonte étendue.

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

La plupart des polices ont une largeur particulière qui correspond à l'une des valeurs de mot-clé. Cependant, les polices variables peuvent prendre en charge une gamme de largeurs avec une granularité fine, offrant au·à la concepteur·ice un degré de contrôle plus élevé sur la largeur choisie. Pour cela, les plages de pourcentages sont utiles.

Pour les polices variables TrueType ou OpenType, la variation `wdth` est utilisée pour implémenter des largeurs de glyphe variables.

## Accessibilité

Les personnes atteintes de dyslexie ou d'autres troubles cognitifs pourront avoir des difficultés à lire des textes dont la fonte est trop condensée, notamment [si le contraste des couleurs est trop faible](/fr/docs/Web/CSS/Reference/Properties/color#accessibilité).

- [Comprendre les WCAG sur le MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre les critères de succès 1.4.8 | Comprendre les règles WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Définition formelle

{{CSSInfo}}

### Syntaxe formelle

{{CSSSyntax("font-width")}}

## Exemples

### Définir une plage de pourcentages pour `font-stretch`

L'exemple suivant utilise la police [League Mono <sup>(angl.)</sup>](https://www.theleagueofmoveabletype.com/league-mono). Il synthétise différentes familles de polices à partir du même fichier de police en utilisant le descripteur `font-stretch` avec différents mots-clés et pourcentages.

```html
<p>League Mono</p>
<p>League Mono</p>
<p>League Mono</p>
```

```css
@font-face {
  font-family: "League Mono Ultra Condensed";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: ultra-condensed; /* identique à 50% */
}

@font-face {
  font-family: "League Mono Normal";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: 100%; /* identique à normal */
}

@font-face {
  font-family: "League Mono Ultra Expanded";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: ultra-expanded; /* identique à 200% */
}

p:nth-child(1) {
  font-family: "League Mono Ultra Condensed", sans-serif;
}

p:nth-child(2) {
  font-family: "League Mono Normal", sans-serif;
}

p:nth-child(3) {
  font-family: "League Mono Ultra Expanded", sans-serif;
}
```

{{EmbedLiveSample("Définir une plage de pourcentages pour `font-stretch`", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le descripteur {{CSSxRef("@font-face/font-display", "font-display")}}
- Le descripteur {{CSSxRef("@font-face/font-family", "font-family")}}
- Le descripteur {{CSSxRef("@font-face/font-weight", "font-weight")}}
- Le descripteur {{CSSxRef("@font-face/font-style", "font-style")}}
- Le descripteur {{CSSxRef("@font-face/font-feature-settings", "font-feature-settings")}}
- Le descripteur {{CSSxRef("@font-face/font-variation-settings", "font-variation-settings")}}
- Le descripteur {{CSSxRef("@font-face/src", "src")}}
- Le descripteur {{CSSxRef("@font-face/unicode-range", "unicode-range")}}
