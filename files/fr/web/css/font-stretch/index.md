---
title: font-stretch
slug: Web/CSS/font-stretch
translation_of: Web/CSS/font-stretch
browser-compat: css.properties.font-stretch
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`font-stretch`** permet de choisir entre la forme normale, condensée ou étendue d'une police.

{{EmbedInteractiveExample("pages/css/font-stretch.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* Valeurs en pourcentage */
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* Valeurs globales */
font-stretch: inherit;
font-stretch: initial;
font-stretch: revert;
font-stretch: unset;
```

Cette propriété peut être définie avec un mot-clé ou avec une valeur exprimée en pourcentages (cf. [`<percentage>`](/fr/docs/Web/CSS/percentage)).

### Valeurs

- `normal`
  - : Permet de choisir une fonte normale.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Permet de choisir une fonte plus resserrée que la normale, `ultra-condensed` correspond à la forme la plus condensée.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Permet de choisir une fonte plus étendue que la normale, `ultra-expanded` correspond à la forme la plus étirée.
- `<percentage>`
  - : Une valeur de type [`<percentage>`](/fr/docs/Web/CSS/percentage) entre 50% et 200% qui permet de définir la largeur de la police. Les valeurs négatives ne sont pas autorisées pour cette propriété.

Dans les anciennes versions de la spécification de `font-stretch`, seuls les mots-clés étaient acceptés comme valeurs. Avec la spécification [_CSS Fonts_ de niveau 4](https://drafts.csswg.org/css-fonts-4/#propdef-font-stretch), cette propriété peut également être définie avec un pourcentage. Cela permet d'obtenir un contrôle plus fin sur la largeur. Pour les polices variables TrueType ou OpenType, c'est l'axe de variation `wdth` qui implémente ces largeurs variables. Attention toutefois à la compatibilité, car certains navigateurs ne prennent pas encore en charge cette fonctionnalité (cf. [la section en fin d'article sur la compatibilité des navigateurs](#compatibilité_des_navigateurs)).

### Correspondance entre les mots-clés et les valeurs numériques

Le tableau suivant indique les correspondances entre les valeurs sous la forme de mots-clés et celles exprimées en pourcentages&nbsp;:

| Mot-clé           | Pourcentage |
| ----------------- | ----------- |
| `ultra-condensed` | 50%         |
| `extra-condensed` | 62.5%       |
| `condensed`       | 75%         |
| `semi-condensed`  | 87.5%       |
| `normal`          | 100%        |
| `semi-expanded`   | 112.5%      |
| `expanded`        | 125%        |
| `extra-expanded`  | 150%        |
| `ultra-expanded`  | 200%        |

## Description

Certaines polices possèdent différentes fontes pour lesquelles les caractères sont plus étroits (fontes _condensées_) et d'autres pour lesquelles les caractères sont plus amples (fontes _étendues_).

`font-stretch` permet de choisir entre les versions condensées ou étendues d'une police. Si la police utilisée ne possède pas de fonte utilisant cet axe de variation, elle n'aura aucun effet.

### Sélection de la fonte

La fonte sélectionnée pour une valeur `font-stretch` dépend des fontes prises en charge par la police. Si la police ne fournit pas de fonte qui corresponde à la valeur exacte, le navigateur utilisera une fonte condensée si la valeur est inférieure à 100% et une fonte étendue si la valeur est supérieure à 100%.

Le tableau qui suit illustre l'effet des différents pourcentages avec deux polices possédant différentes fontes&nbsp;:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">50%</th>
      <th scope="col">62.5%</th>
      <th scope="col">75%</th>
      <th scope="col">87.5%</th>
      <th scope="col">100%</th>
      <th scope="col">112.5%</th>
      <th scope="col">125%</th>
      <th scope="col">150%</th>
      <th scope="col">200%</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Helvetica Neue</th>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
    </tr>
    <tr>
      <th scope="row">League Mono Variable</th>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page2.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page3.png" /></td>
      <td><img alt="" src="l-100.png" /></td>
      <td><img alt="" src="l-112.5.png" /></td>
      <td><img alt="" src="l-125.png" /></td>
      <td><img alt="" src="l-150.png" /></td>
      <td><img alt="" src="l-200.png" /></td>
    </tr>
  </tbody>
</table>

- Helvetica Neue est installée par défaut sur macOS et possède une seule fonte condensée en plus de la fonte normale. On voit dans ce tableau que les valeurs de `font-stretch` inférieures à 100% utilisent une fonte condensée alors que les autres valeurs utilisent la fonte normale.
- [League Mono Variable](https://tylerfinck.com/leaguemonovariable/) est une police variable qui offre plusieurs variantes de fontes sur cet axe et on peut alors observer les variations de `font-stretch` selon les pourcentages choisis.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Avec un pourcentage

{{EmbedGHLiveSample("css-examples/variable-fonts/font-stretch.html", '100%', 950)}}

## Spécifications

{{Specifications}}

> **Note :** La propriété CSS `font-stretch` fut d'abord définie par CSS 2, mais elle a été abandonnée avec CSS 2.1 par manque d'implémentation. Elle fut redéfinie avec CSS 3.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`font-style`](/fr/docs/Web/CSS/font-style)
- [`font-weight`](/fr/docs/Web/CSS/font-weight)
- [Apprendre — Notions fondamentales sur le texte et la mise en forme avec les polices](/fr/docs/Learn/CSS/Styling_text/Fundamentals)
