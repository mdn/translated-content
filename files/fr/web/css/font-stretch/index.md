---
title: font-stretch
slug: Web/CSS/font-stretch
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/font-stretch
---
{{CSSRef}}

La propriété **`font-stretch`** permet de choisir entre la forme normale, condensée ou étendue d'une police.

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
font-stretch: unset;
```

Certaines polices possèdent différentes fontes pour lesquelles les caractères sont plus étroits (fontes _condensées_) et d'autres pour lesquelles les caractères sont plus amples (fontes _étendues_).

`font-stretch` permet de choisir entre les versions condensées ou étendues d'une police. Si la police utilisée ne possède pas de fonte utilisant cet axe de variation, elle n'aura aucun effet.

Voir la section ci-après qui illustre l'effet de cette propriété sur certaines polices.

## Syntaxe

Cette propriété peut être définie avec un mot-clé ou avec une valeur exprimée en pourcentages (cf. {{cssxref("&lt;percentage&gt;")}}).

### Valeurs

- `normal`
  - : Permet de choisir une fonte normale.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Permet de choisir une fonte plus resserrée que la normale, `ultra-condensed` correspond à la forme la plus condensée.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Permet de choisir une fonte plus étendue que la normale, `ultra-expanded` correspond à la forme la plus étirée.
- `<percentage>`
  - : Une valeur de type {{cssxref("&lt;percentage&gt;")}} entre 50% et 200% qui permet de définir la largeur de la police. Les valeurs négatives ne sont pas autorisées pour cette  propriété.

Dans les anciennes versions de la spécification de `font-stretch`, seuls les mots-clés étaient acceptés comme valeurs. Avec la spécification _CSS Fonts_ de niveau 4, cette propriété peut également être définie avec un pourcentage. Cela permet d'obtenir un contrôle plus fin sur la largeur. Attention toutefois à la compatibilité car certains navigateurs ne prennent pas encore en charge cette fonctionnalité (cf. la section en fin d'article).

### Correspondance entre les mots-clés et les valeurs numériques

Le tableau suivant indique les correspondances entre les valeurs sous la forme de mots-clés et celles exprimées en pourcentages :

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

### Sélection de la fonte

La fonte sélectionnée pour une valeur `font-stretch` dépend des fontes prises en charge par la police. Si la police ne fournit pas de fonte qui corresponde à la valeur exacte, le navigateur utilisera une fonte condensée si la valeur est inférieure à 100% et une fonte étendue si la valeur est supérieure à 100%.

Le tableau qui suit illustre l'effet des différents pourcentage avec deux polices possédant différentes fontes :

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

Pour les polices variables TrueType ou OpenType, c'est l'axe de variation `wdth` qui implémente ces largeurs variables.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Avec un mot-clé

#### HTML

```html
<p class="stretch">Le texte est plus étiré.</p>
<p class="condensed">Le texte est plus resserré.</div>
```

#### CSS

```css
.stretch {
  font-stretch: extra-expanded;
}

.condensed {
  font-stretch: condensed;
}
```

#### Résultat

{{EmbedLiveSample('Avec_un_mot-clé', '500')}}

### Avec un pourcentage

Note : cet exemple ne fonctionnera uniquement avec les navigateurs qui prennent en charge les valeurs `<percentage>`.

#### HTML

```html
<div class="container">
  <p class="condensed">an elephantine lizard</p>
  <p class="normal">an elephantine lizard</p>
  <p class="expanded">an elephantine lizard</p>
</div>
```

#### CSS

```css
/*
Cet exemple utilise la police League Mono Variable, développée par
Tyler Finck (https://www.tylerfinck.com/) et utilisée ici selon
la licence SIL Open Font, Version 1.1 :
http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web
*/

@font-face {
  src: url('https://mdn.mozillademos.org/files/16014/LeagueMonoVariable.ttf');
  font-family:'LeagueMonoVariable';
  font-style: normal;
  font-stretch: 1% 500%; /* Nécessaire pour Chrome */
}

.container {
  border: 10px solid #f5f9fa;
  padding: 0 1rem;
  font: 1.5rem 'LeagueMonoVariable', sans-serif;
}

.condensed {
  font-stretch: 50%;
}

.normal {
  font-stretch: 100%;
}

.expanded {
  font-stretch: 200%;
}
```

#### Résultat

{{EmbedLiveSample("Avec_un_pourcentage", 1200, 250, "", "", "example-outcome-frame")}}

## Spécifications

| Spécification                                                                            | État                             | Commentaires                                                 |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------ |
| {{SpecName('CSS4 Fonts', '#propdef-font-stretch', 'font-stretch')}} | {{Spec2('CSS4 Fonts')}} | Ajout des valeurs `<percentage>` pour les polices variables. |
| {{SpecName('CSS3 Fonts', '#propdef-font-stretch', 'font-stretch')}} | {{Spec2('CSS3 Fonts')}} | Définition initiale.                                         |

> **Note :** La propriété CSS `font-stretch` fut d'abord définie par CSS 2, mais elle a été abandonnée avec CSS 2.1 par manque d'implémentation. Elle fut redéfinie avec CSS 3.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.font-stretch")}}
