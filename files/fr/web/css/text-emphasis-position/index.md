---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/text-emphasis-position
---
{{CSSRef}}

La propriété **`text-emphasis-position`** permet de décrire l'emplacement des marques d'emphase quand elles sont utilisées. L'ajout des marques a le même effet que [les annotations ruby](/fr/docs/Web/HTML/Element/ruby) quant à la hauteur de ligne : s'il n'y a pas suffisamment de place, la hauteur de la ligne est augmentée.

```css
/* Valeur initiale */
text-emphasis-position: over right;

/* Valeurs avec mot-clé */
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;


text-emphasis-position: left over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* Valeurs globales */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-position: unset;
```

## Position privilégiée

La position des marques d'emphase varie en fonction du langage. Par exemple, en japonais, on préfère les placer au dessus à droite. En revanche, pour le chinois, on préfèrera en bas à droite. Le tableau qui suit illustre les différences, notamment entre le chinois, le mongolien et le japonais  :

<table>
  <caption>
    Position privilégiée pour les marques d'emphase en ruby
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Langue</th>
      <th colspan="2" scope="col">Position</th>
      <th colspan="2" rowspan="2" scope="col">Illustration</th>
    </tr>
    <tr>
      <th>Horizontale</th>
      <th>Verticale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Japanese</td>
      <td rowspan="2">au dessus</td>
      <td rowspan="2">à droite</td>
      <td rowspan="2">
        <img
          alt="Emphasis marks appear over each emphasized character in horizontal Japanese text."
          src="text-emphasis-ja.png"
          title="Emphasis (shown in blue for clarity) applied above a fragment of Japanese text"
        />
      </td>
      <td rowspan="3">
        <img
          alt="Emphasis marks appear on the right of each emphasized character in vertical Japanese text."
          src="text-emphasis-v.gif"
          title="Emphasis applied on the right of a fragment of Japanese text"
        />
      </td>
    </tr>
    <tr>
      <td>Mongolian</td>
    </tr>
    <tr>
      <td>Chinese</td>
      <td>en dessous</td>
      <td>à droite</td>
      <td>
        <img
          alt="Emphasis marks appear below each emphasized character in horizontal Simplified Chinese text."
          src="text-emphasis-zh.gif"
          title="Emphasis (shown in blue for clarity) applied below a fragment of Chinese text"
        />
      </td>
    </tr>
  </tbody>
</table>

> **Note :** La propriété `text-emphasis-position` ne peut pas être définie (et donc ne peut pas être redéfinie) avec la propriété raccourcie {{cssxref("text-emphasis")}}.

## Syntaxe

### Valeurs

- `over`
  - : Les marques sont dessinées au-dessus du texte lorsqu'il est écrit en mode horizontal.
- `under`
  - : Les marques sont dessinées en-dessous du texte lorsqu'il est écrit en mode horizontal.
- `right`
  - : Les marques sont dessinées à droite du texte lorsqu'il est écrit en mode vertical.
- `left`
  - : Les marques sont dessinées à gauche du texte lorsqu'il est écrit en mode vertical.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Masquer les marques

Certains éditeurs préfèrent masquer les marques d'emphase lorsque celles-ci entre en conflit avec les annotations ruby. On peut utiliser la règle suivante :

```css
ruby {
  text-emphasis: none;
}
```

D'autres préfèrent masquer le contenu ruby et privilégier les marques d'emphase. On peut obtenir cet effet avec les déclarations suivantes :

```css
em {
 /* On utilise text-emphasis pour les <em> */
  text-emphasis: dot;
}

em rt {
 /* On masque le ruby dans les éléments <em> */
  display: none;
}
```

### Exemple _live_

#### HTML

```html
<p><em>Coucou</em>, je suis <em>là</em></p>
```

#### CSS

```css
em {
  text-emphasis-style: sesame;
  text-emphasis-position: under right;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_live","100%","100%")}}

## Spécifications

| Spécification                                                                                                            | Statut                                       | Commentaires        |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------- |
| {{SpecName('CSS3 Text Decoration', '#text-emphasis-position-property', 'text-emphasis')}} | {{Spec2('CSS3 Text Decoration')}} | Définition initiale |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.text-emphasis-position")}}

## Voir aussi

- {{cssxref("text-emphasis-style")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis")}}
