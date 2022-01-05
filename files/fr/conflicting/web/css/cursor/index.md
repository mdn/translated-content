---
title: Utilisation d'URL pour la propriété cursor
slug: conflicting/Web/CSS/cursor
tags:
  - CSS
  - Débutant
  - Guide
translation_of: Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property
original_slug: Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property
---
{{CSSRef}}

Gecko 1.8 ({{geckoRelease("1.8")}} prend en charge des valeurs d'URL pour manipuler la propriété {{cssxref("cursor")}}. Ceci permet de définir des images arbitraires comme curseurs de souris — n'importe quel format d'image géré par Gecko peut être utilisé.

## Syntaxe

La syntaxe de base (CSS 2.1) pour cette propriété est :

    {{CSSxRef("cursor")}}: [ {{CSSxRef("&lt;url&gt;")}} , ]* {{CSSxRef("cursor", "<var>&lt;keyword&gt;</var>", "#Valeurs")}}

Ceci signifie que zéro URL ou plus peuvent être définies en étant séparées par des virgules et doivent être suivies par un des mots-clés comme `auto` ou `pointer`.

On pourra ainsi utiliser :

```css
cursor: url(toto.cur), url(http://www.exemple.org/truc.gif), auto;
```

En utilisant cette règle, le moteur essaiera d'abord de charger `toto.cur`. Si ce fichier n'existe pas ou si, pour une autre raison, l'URL n'est pas valable, ce sera celle de `truc.gif` qui sera essayée. Si cette valeur ne peut pas être utilisée non plus, le curseur correspondant à la valeur `auto` sera utilisé.

Le support de la [syntaxe](https://www.w3.org/TR/css3-ui/#cursor) CSS3 pour les valeurs du curseur a été ajoutée à partir de Firefox 1.5.

    {{CSSxRef("cursor")}}: [ {{CSSxRef("&lt;uri&gt;")}} [ <x> <y> ]? , ]* {{CSSxRef("cursor", "<var>&lt;keyword&gt;</var>", "#Valeurs")}}

Cette syntaxe permet d'indiquer les coordonnées des points chauds du curseur qui seront maintenues aux frontières de l'image du curseur. Si aucun n'est indiqué, les coordonnées du point chaud sont lus à partir du fichier lui-même (pour les fichier CUR et XBM) ou sont réglés au coin supérieur gauche de l'image. Un exemple de la syntaxe CSS3 est:

    cursor: url(toto.png) 4 12, auto;

Le premier nombre est la coordonnée _x_, le second numéro est la coordonnée _y_. L'exemple va régler le point chaud afin d'être le pixel (4,12) par rapport au (0,0) en haut à gauche.

## Limitations

Tous les formats d'image pris en charge par Gecko peuvent être utilisés : PNG, GIF, JPG, BMP, CUR, etc. Le format ANI n'est pas pris en charge et les images animées PNG ou GIF ne créeront pas de curseurs animés.

> **Note :** À partir de Gecko 2.0 {{geckoRelease("2.0")}}, Gecko prend en charge les images SVG pour les curseurs. Mais les dimensions de l'image SVG doivent être explicites et non relative. Les instructions JavaScript ou CSS, les déclarations SMIL contenues dans l'image SVG sont ignorées. SVG ne peut donc pas être utilisé pour créer un curseur animé.

Pour Gecko, la taille limite des curseurs est 128 pixels par 128 pixels. Les images plus grandes seront ignorées. Toutefois, certains systèmes d'exploitation sont limités à des images de 32 pixels par 32 pixels.

Les curseurs translucides ne sont pas pris en charge par Windows avant Windows XP.

## Compatibilité des navigateurs

Microsoft Internet Explorer 6.0 prend également en charge les valeurs URI pour la propriété `cursor`. Toutefois :

- IE ne prend en charge que les formats CUR et ANI
- IE ne prend pas en charge la syntaxe CSS3 avec les coordonnées x et y. L'image du curseur et le reste de la propriété sont alors ignorés.

<table class="standard-table">
  <tbody>
    <tr>
      <th>Navigateur</th>
      <th>Version minimum</th>
      <th>Formats</th>
      <th>Coordonnées x-y</th>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td><strong>6.0</strong></td>
      <td><code>.cur | .ani</code></td>
      <td>---</td>
    </tr>
    <tr>
      <td>Firefox (Gecko), Windows et Linux</td>
      <td><strong>1.5</strong> (1.8)</td>
      <td><code>.cur | .png | .gif | .jpg</code></td>
      <td>1.5 (1.8)</td>
    </tr>
    <tr>
      <td>Firefox (Gecko)</td>
      <td><strong>4.0</strong> (2.0)</td>
      <td><code>.cur | .png | .gif | .jpg | .svg</code></td>
      <td>(Gecko 2.0)</td>
    </tr>
    <tr>
      <td>Opera</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td rowspan="2">Safari (Webkit)</td>
      <td><strong>3.0</strong> (522-523)</td>
      <td><code>.cur | .png | .gif | .jpg</code></td>
      <td rowspan="2">3.0 (522-523)</td>
    </tr>
    <tr>
      <td colspan="2">
        OS X 10.5 pour la prise en charge des fichiers <code>.cur</code>
      </td>
    </tr>
  </tbody>
</table>
