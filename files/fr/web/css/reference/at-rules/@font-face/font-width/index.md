---
title: Descripteur de règle CSS `font-width`
short-title: font-width
slug: Web/CSS/Reference/At-rules/@font-face/font-width
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

{{SeeCompatTable}}

> [!NOTE]
> Le descripteur `font-width` est le remplacement moderne du descripteur {{CSSxRef("@font-face/font-stretch")}}, qui est un alias hérité. Bien que `font-width` soit le nom préféré de la spécification, `font-stretch` bénéficie actuellement d'un support plus large dans les navigateurs. Consultez [l'exemple de repli](#providing_a_font-stretch_fallback) et le tableau de [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

Le descripteur [CSS](/fr/docs/Web/CSS) **`font-width`** permet aux auteur·ice·s de définir une police normale, condensée ou étendue pour les polices définies dans la règle {{CSSxRef("@font-face")}}.

Pour une famille de polices particulière, les auteur·ice·s peuvent télécharger différentes variantes de la police correspondant aux différents styles de la même famille de polices, puis utiliser le descripteur `font-width` pour spécifier explicitement la largeur de la variante de la police. Les valeurs disponibles pour le descripteur `font-width` sont les mêmes que celles de la propriété correspondante {{CSSxRef("font-width")}}.

## Syntaxe

```css
/* Valeurs uniques */
font-width: ultra-condensed;
font-width: extra-condensed;
font-width: condensed;
font-width: semi-condensed;
font-width: normal;
font-width: semi-expanded;
font-width: expanded;
font-width: extra-expanded;
font-width: ultra-expanded;
font-width: 50%;
font-width: 100%;
font-width: 200%;

/* Valeurs multiples */
font-width: 75% 125%;
font-width: condensed ultra-condensed;
```

Le descripteur `font-width` peut prendre une seule valeur parmi la liste ci-dessous.

### Valeurs

- `normal`
  - : Définit une police normalement condensée.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Définit une police plus condensée que la normale, l'ultra-condensée étant la plus condensée.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Définit une police plus étendue que la normale, l'ultra-étendue étant la plus étendue.
- `<percentage>`
  - : Une valeur en pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) comprise entre 50 % et 200 % (inclus). Les valeurs négatives ne sont pas autorisées pour ce descripteur.

Dans les versions antérieures de la spécification `font-width`, le descripteur n'acceptait que les neuf valeurs clés. CSS Fonts Level 4 étend la syntaxe pour accepter également une valeur `<percentage>`. Cela permet aux polices variables d'offrir une variation continue des largeurs de caractères. Pour les polices variables TrueType ou OpenType, la variation `wdth` est utilisée pour implémenter des largeurs variables.

Si la police ne fournit pas de variante correspondant exactement à la valeur donnée, les valeurs inférieures à `100%` correspondent à une police condensée, et les valeurs supérieures ou égales à `100%` correspondent à une police étendue.

### Correspondance des mots-clés avec les valeurs numériques

Le tableau ci-dessous montre la correspondance entre les valeurs de mots-clés et les pourcentages numériques&nbsp;:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Mot-clé</th>
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

Les personnes dyslexiques et celles ayant d'autres troubles cognitifs peuvent avoir des difficultés à lire des polices trop condensées, en particulier si la police présente un [faible taux de contraste des couleurs](/fr/docs/Web/CSS/Reference/Properties/color#accessibilité).

- [Comprendre le WCA sur le MDN, explication de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre les critères de réussite 1.4.8 | Comprendre le W3C WCAG 2.0 de la W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax("font-width")}}

## Exemples

### Définir une plage de pourcentages pour `font-width`

L'exemple suivant utilise la police [League Mono <sup>(angl.)</sup>](https://www.theleagueofmoveabletype.com/league-mono). Il synthétise différentes familles de polices à partir du même fichier de police en utilisant le descripteur `font-width` avec différents mots-clés et pourcentages.

```html
<p>League Mono</p>
<p>League Mono</p>
<p>League Mono</p>
```

```css
@font-face {
  font-family: "League Mono Ultra Condensed";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: ultra-condensed; /* identique à 50% */
}

@font-face {
  font-family: "League Mono Normal";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: 100%; /* identique à normal */
}

@font-face {
  font-family: "League Mono Ultra Expanded";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: ultra-expanded; /* identique à 200% */
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

{{EmbedLiveSample("Définir une plage de pourcentages pour `font-width`", "100%", 200)}}

### Fournir un repli avec `font-stretch`

Comme `font-width` n'est pas encore largement pris en charge par les navigateurs, il peut être utile d'inclure le descripteur hérité {{CSSxRef("@font-face/font-stretch")}} comme repli. Placez `font-stretch` avant `font-width` afin que les navigateurs compatibles utilisent le descripteur moderne&nbsp;:

```css
@font-face {
  font-family: "MyFont";
  src: url("my-font.woff2") format("woff2");
  font-stretch: condensed; /* pour les navigateurs qui ne prennent pas en charge font-width */
  font-width: condensed;
}
```

> [!NOTE]
> Vous pouvez automatiser ce modèle de repli en utilisant le plugin [postcss-preset-env <sup>(angl.)</sup>](https://preset-env.cssdb.org/) pour PostCSS, qui inclut la transformation [postcss-font-width-property <sup>(angl.)</sup>](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property) pour convertir automatiquement les déclarations `font-width` en `font-stretch`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'alias du descripteur hérité {{CSSxRef("@font-face/font-stretch")}} avec un meilleur support des navigateurs
- Le descripteur {{CSSxRef("@font-face/font-display", "font-display")}}
- Le descripteur {{CSSxRef("@font-face/font-family", "font-family")}}
- Le descripteur {{CSSxRef("@font-face/font-weight", "font-weight")}}
- Le descripteur {{CSSxRef("@font-face/font-style", "font-style")}}
- La propriété {{CSSxRef("font-feature-settings", "font-feature-settings")}}
- Le descripteur {{CSSxRef("@font-face/font-variation-settings", "font-variation-settings")}}
- Le descripteur {{CSSxRef("@font-face/src", "src")}}
- Le descripteur {{CSSxRef("@font-face/unicode-range", "unicode-range")}}
