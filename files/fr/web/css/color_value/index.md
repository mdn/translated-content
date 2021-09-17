---
title: <color>
slug: Web/CSS/color_value
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/color_value
original_slug: Web/CSS/Type_color
---
{{CSSRef}}

Le type de données CSS **`<color>`** permet de représenter des couleurs dans [l'espace de couleurs sRGB](https://fr.wikipedia.org/wiki/SRGB). Une couleur pourra être décrite de trois façons :

- grâce à un mot-clé (comme `blue` ou  `transparent` par exemple)
- en utilisant [le système de coordonnées cubiques RGB](https://fr.wikipedia.org/wiki/Couleur_du_Web#Triplet_hexad.C3.A9cimal) (grâce à la notation #-hexadecimal ou aux notations fonctionnelles `rgb()` et `rgba()`)
- en utilisant [le système de coordonnées cylindriques HSL](https://fr.wikipedia.org/wiki/Teinte_saturation_lumi%C3%A8re) (grâce aux notations fonctionnelles `hsl()` et `hsla()`)

En plus de la couleur exprimée dans l'espace RGB, une valeur `<color>` contient également un [canal alpha](https://fr.wikipedia.org/wiki/Alpha_blending) qui décrit la transparence de l'image et donc la façon dont cette image se [compose](https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) avec son arrière-plan.

> **Note :** Cet article décrit le type de donnée CSS `<color>` en détails. Si vous souhaitez en savoir plus sur l'utilisation des couleurs en HTML, n'hésitez pas à lire [Appliquer des couleurs à des éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color).

## Syntaxe

> **Note :** Bien que les valeurs des couleurs CSS soient définies précisément, elles pourront s'afficher différemment sur différents appareils. La plupart des appareils ne sont pas calibrés et certains navigateurs ne prennent pas en charge [le profil de couleurs](https://fr.wikipedia.org/wiki/Profil_ICC) de l'appareil. Sans ces éléments, le rendu des couleurs peut varier.

Il existe plusieurs méthodes pour décrire une valeur `<color>`.

### Les mots-clés

Les mots-clés sont des identifiants insensibles à la casse qui représentent une couleur donnée. Par exemple, le mot-clé red représentera la couleur rouge, `blue` le bleu, `brown` le marron, etc. La liste des valeurs autorisées a fortement évolué au cours des différentes versions de la spécification :

- La spécification CSS de niveau 1 n'acceptait que 16 couleurs basiques, construites à partir des couleurs [VGA](https://fr.wikipedia.org/wiki/Video_Graphics_Array) disponibles sur les cartes graphiques.
- La spécification CSS de niveau 2 a ajouté le mot-clé `orange`.
- Depuis le début des couleurs CSS, les navigateurs ont pris en charge d'autres couleurs, notamment les couleurs X11 car certains des premiers navigateurs étaient des applications X11. SVG 1.0 a été le premier standard qui a défini formellement ces mots-clés et la spécification CSS de niveau 3 sur les couleurs a aussi défini ces couleurs formellement. Ces différentes couleurs sont parfois intitulées couleurs étendues (_extended colors_), couleurs X11 ou couleurs SVG.
- La spécification CSS de niveau a ajouté la couleur `rebeccapurple` [en l'honneur d'Eric Meyer](https://codepen.io/trezy/post/honoring-a-great-man).

Voici quelques inconvénients liés aux mots-clés :

- En dehors des 16 couleurs de base présentes également en HTML, les autres valeurs ne peuvent pas être utilisées en HTML. HTML convertira ces valeurs inconnues avec un algorithme spécifique qui donnera d'autres couleurs à l'arrivée. Ces mots-clés ne doivent être utilisés qu'avec SVG ou CSS.
- Si un mot-clé inconnu est utilisé, la propriété sera considérée comme invalide et sera donc ignorée. Le comportement est donc différent de HTML (qui calculera une couleur).
- Aucun mot-clé ne définit de couleurs transparentes, toutes les couleurs indiquées par des mots-clés sont unies et opaques.
- Certains mots-clés désignent la même couleur :

  - `aqua` / `cyan`
  - `fuchsia` / `magenta`
  - `darkgray` / `darkgrey`
  - `darkslategray` / `darkslategrey`
  - `dimgray` / `dimgrey`
  - `lightgray` / `lightgrey`
  - `lightslategray` / `lightslategrey`
  - `gray` / `grey`
  - `slategray` / `slategrey`

- Bien que les noms des mots-clés soient calqués sur les couleurs X11, les couleurs correspondantes peuvent être différentes en CSS et avec X11 car pour ce dernier les couleurs étaient conçues pour le matériel du constructeur.

<table>
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Couleur</th>
      <th scope="col">Mot-clé</th>
      <th scope="col">Valeurs exprimées en hexadécimal RGB</th>
      <th scope="col">Exemple «<em> live</em> » dans le navigateur</th>
    </tr>
  </thead>
  <tbody>
    <tr style="position: relative">
      <td rowspan="16">{{SpecName("CSS1")}}</td>
      <td style="background: #000"></td>
      <td style="text-align: center"><code>black</code></td>
      <td><code>#000000</code></td>
      <td style="background: black"></td>
    </tr>
    <tr>
      <td style="background: #c0c0c0"></td>
      <td style="text-align: center"><code>silver</code></td>
      <td><code>#c0c0c0</code></td>
      <td style="background: silver"></td>
    </tr>
    <tr>
      <td style="background: #808080"></td>
      <td style="text-align: center"><code>gray</code></td>
      <td><code>#808080</code></td>
      <td style="background: gray"></td>
    </tr>
    <tr>
      <td style="background: #fff"></td>
      <td style="text-align: center"><code>white</code></td>
      <td><code>#ffffff</code></td>
      <td style="background: white"></td>
    </tr>
    <tr>
      <td style="background: #800000"></td>
      <td style="text-align: center"><code>maroon</code></td>
      <td><code>#800000</code></td>
      <td style="background: maroon"></td>
    </tr>
    <tr>
      <td style="background: #f00"></td>
      <td style="text-align: center"><code>red</code></td>
      <td><code>#ff0000</code></td>
      <td style="background: red"></td>
    </tr>
    <tr>
      <td style="background: #800080"></td>
      <td style="text-align: center"><code>purple</code></td>
      <td><code>#800080</code></td>
      <td style="background: purple"></td>
    </tr>
    <tr>
      <td style="background: #f0f"></td>
      <td style="text-align: center"><code>fuchsia</code></td>
      <td><code>#ff00ff</code></td>
      <td style="background: fuchsia"></td>
    </tr>
    <tr>
      <td style="background: #008000"></td>
      <td style="text-align: center"><code>green</code></td>
      <td><code>#008000</code></td>
      <td style="background: green"></td>
    </tr>
    <tr>
      <td style="background: #0f0"></td>
      <td style="text-align: center"><code>lime</code></td>
      <td><code>#00ff00</code></td>
      <td style="background: lime"></td>
    </tr>
    <tr>
      <td style="background: #808000"></td>
      <td style="text-align: center"><code>olive</code></td>
      <td><code>#808000</code></td>
      <td style="background: olive"></td>
    </tr>
    <tr>
      <td style="background: #ff0"></td>
      <td style="text-align: center"><code>yellow</code></td>
      <td><code>#ffff00</code></td>
      <td style="background: yellow"></td>
    </tr>
    <tr>
      <td style="background: #000080"></td>
      <td style="text-align: center"><code>navy</code></td>
      <td><code>#000080</code></td>
      <td style="background: navy"></td>
    </tr>
    <tr>
      <td style="background: #00f"></td>
      <td style="text-align: center"><code>blue</code></td>
      <td><code>#0000ff</code></td>
      <td style="background: blue"></td>
    </tr>
    <tr>
      <td style="background: #008080"></td>
      <td style="text-align: center"><code>teal</code></td>
      <td><code>#008080</code></td>
      <td style="background: teal"></td>
    </tr>
    <tr>
      <td style="background: #0ff"></td>
      <td style="text-align: center"><code>aqua</code></td>
      <td><code>#00ffff</code></td>
      <td style="background: aqua"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS2.1")}}</td>
      <td style="background: #ffa500"></td>
      <td style="text-align: center"><code>orange</code></td>
      <td><code>#ffa500</code></td>
      <td style="background: orange"></td>
    </tr>
    <tr>
      <td rowspan="130">{{SpecName("CSS3 Colors")}}</td>
      <td style="background: #f0f8ff"></td>
      <td style="text-align: center"><code>aliceblue</code></td>
      <td><code>#f0f8ff</code></td>
      <td style="background: aliceblue"></td>
    </tr>
    <tr>
      <td style="background: #faebd7"></td>
      <td style="text-align: center"><code>antiquewhite</code></td>
      <td><code>#faebd7</code></td>
      <td style="background: antiquewhite"></td>
    </tr>
    <tr>
      <td style="background: #7fffd4"></td>
      <td style="text-align: center"><code>aquamarine</code></td>
      <td><code>#7fffd4</code></td>
      <td style="background: aquamarine"></td>
    </tr>
    <tr>
      <td style="background: #f0ffff"></td>
      <td style="text-align: center"><code>azure</code></td>
      <td><code>#f0ffff</code></td>
      <td style="background: azure"></td>
    </tr>
    <tr>
      <td style="background: #f5f5dc"></td>
      <td style="text-align: center"><code>beige</code></td>
      <td><code>#f5f5dc</code></td>
      <td style="background: beige"></td>
    </tr>
    <tr>
      <td style="background: #ffe4c4"></td>
      <td style="text-align: center"><code>bisque</code></td>
      <td><code>#ffe4c4</code></td>
      <td style="background: bisque"></td>
    </tr>
    <tr>
      <td style="background: #ffebcd"></td>
      <td style="text-align: center"><code>blanchedalmond</code></td>
      <td><code>#ffebcd</code></td>
      <td style="background: blanchedalmond"></td>
    </tr>
    <tr>
      <td style="background: #8a2be2"></td>
      <td style="text-align: center"><code>blueviolet</code></td>
      <td><code>#8a2be2</code></td>
      <td style="background: blueviolet"></td>
    </tr>
    <tr>
      <td style="background: #a52a2a"></td>
      <td style="text-align: center"><code>brown</code></td>
      <td><code>#a52a2a</code></td>
      <td style="background: brown"></td>
    </tr>
    <tr>
      <td style="background: #deb887"></td>
      <td style="text-align: center"><code>burlywood</code></td>
      <td><code>#deb887</code></td>
      <td style="background: burlywood"></td>
    </tr>
    <tr>
      <td style="background: #5f9ea0"></td>
      <td style="text-align: center"><code>cadetblue</code></td>
      <td><code>#5f9ea0</code></td>
      <td style="background: cadetblue"></td>
    </tr>
    <tr>
      <td style="background: #7fff00"></td>
      <td style="text-align: center"><code>chartreuse</code></td>
      <td><code>#7fff00</code></td>
      <td style="background: chartreuse"></td>
    </tr>
    <tr>
      <td style="background: #d2691e"></td>
      <td style="text-align: center"><code>chocolate</code></td>
      <td><code>#d2691e</code></td>
      <td style="background: chocolate"></td>
    </tr>
    <tr>
      <td style="background: #ff7f50"></td>
      <td style="text-align: center"><code>coral</code></td>
      <td><code>#ff7f50</code></td>
      <td style="background: coral"></td>
    </tr>
    <tr>
      <td style="background: #6495ed"></td>
      <td style="text-align: center"><code>cornflowerblue</code></td>
      <td><code>#6495ed</code></td>
      <td style="background: cornflowerblue"></td>
    </tr>
    <tr>
      <td style="background: #fff8dc"></td>
      <td style="text-align: center"><code>cornsilk</code></td>
      <td><code>#fff8dc</code></td>
      <td style="background: cornsilk"></td>
    </tr>
    <tr>
      <td style="background: #dc143c"></td>
      <td style="text-align: center"><code>crimson</code></td>
      <td><code>#dc143c</code></td>
      <td style="background: crimson"></td>
    </tr>
    <tr>
      <td style="background: #0ff"></td>
      <td style="text-align: center">
        <code>cyan</code> (synonyme de <code>aqua</code>)
      </td>
      <td><code>#00ffff</code></td>
      <td style="background: cyan"></td>
    </tr>
    <tr>
      <td style="background: #00008b"></td>
      <td style="text-align: center"><code>darkblue</code></td>
      <td><code>#00008b</code></td>
      <td style="background: darkblue"></td>
    </tr>
    <tr>
      <td style="background: #008b8b"></td>
      <td style="text-align: center"><code>darkcyan</code></td>
      <td><code>#008b8b</code></td>
      <td style="background: darkcyan"></td>
    </tr>
    <tr>
      <td style="background: #b8860b"></td>
      <td style="text-align: center"><code>darkgoldenrod</code></td>
      <td><code>#b8860b</code></td>
      <td style="background: darkgoldenrod"></td>
    </tr>
    <tr>
      <td style="background: #a9a9a9"></td>
      <td style="text-align: center"><code>darkgray</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgray"></td>
    </tr>
    <tr>
      <td style="background: #006400"></td>
      <td style="text-align: center"><code>darkgreen</code></td>
      <td><code>#006400</code></td>
      <td style="background: darkgreen"></td>
    </tr>
    <tr>
      <td style="background: #a9a9a9"></td>
      <td style="text-align: center"><code>darkgrey</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgrey"></td>
    </tr>
    <tr>
      <td style="background: #bdb76b"></td>
      <td style="text-align: center"><code>darkkhaki</code></td>
      <td><code>#bdb76b</code></td>
      <td style="background: darkkhaki"></td>
    </tr>
    <tr>
      <td style="background: #8b008b"></td>
      <td style="text-align: center"><code>darkmagenta</code></td>
      <td><code>#8b008b</code></td>
      <td style="background: darkmagenta"></td>
    </tr>
    <tr>
      <td style="background: #556b2f"></td>
      <td style="text-align: center"><code>darkolivegreen</code></td>
      <td><code>#556b2f</code></td>
      <td style="background: darkolivegreen"></td>
    </tr>
    <tr>
      <td style="background: #ff8c00"></td>
      <td style="text-align: center"><code>darkorange</code></td>
      <td><code>#ff8c00</code></td>
      <td style="background: darkorange"></td>
    </tr>
    <tr>
      <td style="background: #9932cc"></td>
      <td style="text-align: center"><code>darkorchid</code></td>
      <td><code>#9932cc</code></td>
      <td style="background: darkorchid"></td>
    </tr>
    <tr>
      <td style="background: #8b0000"></td>
      <td style="text-align: center"><code>darkred</code></td>
      <td><code>#8b0000</code></td>
      <td style="background: darkred"></td>
    </tr>
    <tr>
      <td style="background: #e9967a"></td>
      <td style="text-align: center"><code>darksalmon</code></td>
      <td><code>#e9967a</code></td>
      <td style="background: darksalmon"></td>
    </tr>
    <tr>
      <td style="background: #8fbc8f"></td>
      <td style="text-align: center"><code>darkseagreen</code></td>
      <td><code>#8fbc8f</code></td>
      <td style="background: darkseagreen"></td>
    </tr>
    <tr>
      <td style="background: #483d8b"></td>
      <td style="text-align: center"><code>darkslateblue</code></td>
      <td><code>#483d8b</code></td>
      <td style="background: darkslateblue"></td>
    </tr>
    <tr>
      <td style="background: #2f4f4f"></td>
      <td style="text-align: center"><code>darkslategray</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategray"></td>
    </tr>
    <tr>
      <td style="background: #2f4f4f"></td>
      <td style="text-align: center"><code>darkslategrey</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategrey"></td>
    </tr>
    <tr>
      <td style="background: #00ced1"></td>
      <td style="text-align: center"><code>darkturquoise</code></td>
      <td><code>#00ced1</code></td>
      <td style="background: darkturquoise"></td>
    </tr>
    <tr>
      <td style="background: #9400d3"></td>
      <td style="text-align: center"><code>darkviolet</code></td>
      <td><code>#9400d3</code></td>
      <td style="background: darkviolet"></td>
    </tr>
    <tr>
      <td style="background: #ff1493"></td>
      <td style="text-align: center"><code>deeppink</code></td>
      <td><code>#ff1493</code></td>
      <td style="background: deeppink"></td>
    </tr>
    <tr>
      <td style="background: #00bfff"></td>
      <td style="text-align: center"><code>deepskyblue</code></td>
      <td><code>#00bfff</code></td>
      <td style="background: deepskyblue"></td>
    </tr>
    <tr>
      <td style="background: #696969"></td>
      <td style="text-align: center"><code>dimgray</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgray"></td>
    </tr>
    <tr>
      <td style="background: #696969"></td>
      <td style="text-align: center"><code>dimgrey</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgrey"></td>
    </tr>
    <tr>
      <td style="background: #1e90ff"></td>
      <td style="text-align: center"><code>dodgerblue</code></td>
      <td><code>#1e90ff</code></td>
      <td style="background: dodgerblue"></td>
    </tr>
    <tr>
      <td style="background: #b22222"></td>
      <td style="text-align: center"><code>firebrick</code></td>
      <td><code>#b22222</code></td>
      <td style="background: firebrick"></td>
    </tr>
    <tr>
      <td style="background: #fffaf0"></td>
      <td style="text-align: center"><code>floralwhite</code></td>
      <td><code>#fffaf0</code></td>
      <td style="background: floralwhite"></td>
    </tr>
    <tr>
      <td style="background: #228b22"></td>
      <td style="text-align: center"><code>forestgreen</code></td>
      <td><code>#228b22</code></td>
      <td style="background: forestgreen"></td>
    </tr>
    <tr>
      <td style="background: #dcdcdc"></td>
      <td style="text-align: center"><code>gainsboro</code></td>
      <td><code>#dcdcdc</code></td>
      <td style="background: gainsboro"></td>
    </tr>
    <tr>
      <td style="background: #f8f8ff"></td>
      <td style="text-align: center"><code>ghostwhite</code></td>
      <td><code>#f8f8ff</code></td>
      <td style="background: ghostwhite"></td>
    </tr>
    <tr>
      <td style="background: #ffd700"></td>
      <td style="text-align: center"><code>gold</code></td>
      <td><code>#ffd700</code></td>
      <td style="background: gold"></td>
    </tr>
    <tr>
      <td style="background: #daa520"></td>
      <td style="text-align: center"><code>goldenrod</code></td>
      <td><code>#daa520</code></td>
      <td style="background: goldenrod"></td>
    </tr>
    <tr>
      <td style="background: #adff2f"></td>
      <td style="text-align: center"><code>greenyellow</code></td>
      <td><code>#adff2f</code></td>
      <td style="background: greenyellow"></td>
    </tr>
    <tr>
      <td style="background: #808080"></td>
      <td style="text-align: center"><code>grey</code></td>
      <td><code>#808080</code></td>
      <td style="background: grey"></td>
    </tr>
    <tr>
      <td style="background: #f0fff0"></td>
      <td style="text-align: center"><code>honeydew</code></td>
      <td><code>#f0fff0</code></td>
      <td style="background: honeydew"></td>
    </tr>
    <tr>
      <td style="background: #ff69b4"></td>
      <td style="text-align: center"><code>hotpink</code></td>
      <td><code>#ff69b4</code></td>
      <td style="background: hotpink"></td>
    </tr>
    <tr>
      <td style="background: #cd5c5c"></td>
      <td style="text-align: center"><code>indianred</code></td>
      <td><code>#cd5c5c</code></td>
      <td style="background: indianred"></td>
    </tr>
    <tr>
      <td style="background: #4b0082"></td>
      <td style="text-align: center"><code>indigo</code></td>
      <td><code>#4b0082</code></td>
      <td style="background: indigo"></td>
    </tr>
    <tr>
      <td style="background: #fffff0"></td>
      <td style="text-align: center"><code>ivory</code></td>
      <td><code>#fffff0</code></td>
      <td style="background: ivory"></td>
    </tr>
    <tr>
      <td style="background: #f0e68c"></td>
      <td style="text-align: center"><code>khaki</code></td>
      <td><code>#f0e68c</code></td>
      <td style="background: khaki"></td>
    </tr>
    <tr>
      <td style="background: #e6e6fa"></td>
      <td style="text-align: center"><code>lavender</code></td>
      <td><code>#e6e6fa</code></td>
      <td style="background: lavender"></td>
    </tr>
    <tr>
      <td style="background: #fff0f5"></td>
      <td style="text-align: center"><code>lavenderblush</code></td>
      <td><code>#fff0f5</code></td>
      <td style="background: lavenderblush"></td>
    </tr>
    <tr>
      <td style="background: #7cfc00"></td>
      <td style="text-align: center"><code>lawngreen</code></td>
      <td><code>#7cfc00</code></td>
      <td style="background: lawngreen"></td>
    </tr>
    <tr>
      <td style="background: #fffacd"></td>
      <td style="text-align: center"><code>lemonchiffon</code></td>
      <td><code>#fffacd</code></td>
      <td style="background: lemonchiffon"></td>
    </tr>
    <tr>
      <td style="background: #add8e6"></td>
      <td style="text-align: center"><code>lightblue</code></td>
      <td><code>#add8e6</code></td>
      <td style="background: lightblue"></td>
    </tr>
    <tr>
      <td style="background: #f08080"></td>
      <td style="text-align: center"><code>lightcoral</code></td>
      <td><code>#f08080</code></td>
      <td style="background: lightcoral"></td>
    </tr>
    <tr>
      <td style="background: #e0ffff"></td>
      <td style="text-align: center"><code>lightcyan</code></td>
      <td><code>#e0ffff</code></td>
      <td style="background: lightcyan"></td>
    </tr>
    <tr>
      <td style="background: #fafad2"></td>
      <td style="text-align: center"><code>lightgoldenrodyellow</code></td>
      <td><code>#fafad2</code></td>
      <td style="background: lightgoldenrodyellow"></td>
    </tr>
    <tr>
      <td style="background: #d3d3d3"></td>
      <td style="text-align: center"><code>lightgray</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgray"></td>
    </tr>
    <tr>
      <td style="background: #90ee90"></td>
      <td style="text-align: center"><code>lightgreen</code></td>
      <td><code>#90ee90</code></td>
      <td style="background: lightgreen"></td>
    </tr>
    <tr>
      <td style="background: #d3d3d3"></td>
      <td style="text-align: center"><code>lightgrey</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgrey"></td>
    </tr>
    <tr>
      <td style="background: #ffb6c1"></td>
      <td style="text-align: center"><code>lightpink</code></td>
      <td><code>#ffb6c1</code></td>
      <td style="background: lightpink"></td>
    </tr>
    <tr>
      <td style="background: #ffa07a"></td>
      <td style="text-align: center"><code>lightsalmon</code></td>
      <td><code>#ffa07a</code></td>
      <td style="background: lightsalmon"></td>
    </tr>
    <tr>
      <td style="background: #20b2aa"></td>
      <td style="text-align: center"><code>lightseagreen</code></td>
      <td><code>#20b2aa</code></td>
      <td style="background: lightseagreen"></td>
    </tr>
    <tr>
      <td style="background: #87cefa"></td>
      <td style="text-align: center"><code>lightskyblue</code></td>
      <td><code>#87cefa</code></td>
      <td style="background: lightskyblue"></td>
    </tr>
    <tr>
      <td style="background: #778899"></td>
      <td style="text-align: center"><code>lightslategray</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategray"></td>
    </tr>
    <tr>
      <td style="background: #778899"></td>
      <td style="text-align: center"><code>lightslategrey</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategrey"></td>
    </tr>
    <tr>
      <td style="background: #b0c4de"></td>
      <td style="text-align: center"><code>lightsteelblue</code></td>
      <td><code>#b0c4de</code></td>
      <td style="background: lightsteelblue"></td>
    </tr>
    <tr>
      <td style="background: #ffffe0"></td>
      <td style="text-align: center"><code>lightyellow</code></td>
      <td><code>#ffffe0</code></td>
      <td style="background: lightyellow"></td>
    </tr>
    <tr>
      <td style="background: #32cd32"></td>
      <td style="text-align: center"><code>limegreen</code></td>
      <td><code>#32cd32</code></td>
      <td style="background: limegreen"></td>
    </tr>
    <tr>
      <td style="background: #faf0e6"></td>
      <td style="text-align: center"><code>linen</code></td>
      <td><code>#faf0e6</code></td>
      <td style="background: linen"></td>
    </tr>
    <tr>
      <td style="background: rgb(255, 0, 255) none repeat scroll 0% 0%"></td>
      <td style="text-align: center">
        <code>magenta</code> (synonyme de <code>fuchsia</code>)
      </td>
      <td><code>#ff00ff</code></td>
      <td style="background: magenta none repeat scroll 0% 0%"></td>
    </tr>
    <tr>
      <td style="background: #66cdaa"></td>
      <td style="text-align: center"><code>mediumaquamarine</code></td>
      <td><code>#66cdaa</code></td>
      <td style="background: mediumaquamarine"></td>
    </tr>
    <tr>
      <td style="background: #0000cd"></td>
      <td style="text-align: center"><code>mediumblue</code></td>
      <td><code>#0000cd</code></td>
      <td style="background: mediumblue"></td>
    </tr>
    <tr>
      <td style="background: #ba55d3"></td>
      <td style="text-align: center"><code>mediumorchid</code></td>
      <td><code>#ba55d3</code></td>
      <td style="background: mediumorchid"></td>
    </tr>
    <tr>
      <td style="background: #9370db"></td>
      <td style="text-align: center"><code>mediumpurple</code></td>
      <td><code>#9370db</code></td>
      <td style="background: mediumpurple"></td>
    </tr>
    <tr>
      <td style="background: #3cb371"></td>
      <td style="text-align: center"><code>mediumseagreen</code></td>
      <td><code>#3cb371</code></td>
      <td style="background: mediumseagreen"></td>
    </tr>
    <tr>
      <td style="background: #7b68ee"></td>
      <td style="text-align: center"><code>mediumslateblue</code></td>
      <td><code>#7b68ee</code></td>
      <td style="background: mediumslateblue"></td>
    </tr>
    <tr>
      <td style="background: #00fa9a"></td>
      <td style="text-align: center"><code>mediumspringgreen</code></td>
      <td><code>#00fa9a</code></td>
      <td style="background: mediumspringgreen"></td>
    </tr>
    <tr>
      <td style="background: #48d1cc"></td>
      <td style="text-align: center"><code>mediumturquoise</code></td>
      <td><code>#48d1cc</code></td>
      <td style="background: mediumturquoise"></td>
    </tr>
    <tr>
      <td style="background: #c71585"></td>
      <td style="text-align: center"><code>mediumvioletred</code></td>
      <td><code>#c71585</code></td>
      <td style="background: mediumvioletred"></td>
    </tr>
    <tr>
      <td style="background: #191970"></td>
      <td style="text-align: center"><code>midnightblue</code></td>
      <td><code>#191970</code></td>
      <td style="background: midnightblue"></td>
    </tr>
    <tr>
      <td style="background: #f5fffa"></td>
      <td style="text-align: center"><code>mintcream</code></td>
      <td><code>#f5fffa</code></td>
      <td style="background: mintcream"></td>
    </tr>
    <tr>
      <td style="background: #ffe4e1"></td>
      <td style="text-align: center"><code>mistyrose</code></td>
      <td><code>#ffe4e1</code></td>
      <td style="background: mistyrose"></td>
    </tr>
    <tr>
      <td style="background: #ffe4b5"></td>
      <td style="text-align: center"><code>moccasin</code></td>
      <td><code>#ffe4b5</code></td>
      <td style="background: moccasin"></td>
    </tr>
    <tr>
      <td style="background: #ffdead"></td>
      <td style="text-align: center"><code>navajowhite</code></td>
      <td><code>#ffdead</code></td>
      <td style="background: navajowhite"></td>
    </tr>
    <tr>
      <td style="background: #fdf5e6"></td>
      <td style="text-align: center"><code>oldlace</code></td>
      <td><code>#fdf5e6</code></td>
      <td style="background: oldlace"></td>
    </tr>
    <tr>
      <td style="background: #6b8e23"></td>
      <td style="text-align: center"><code>olivedrab</code></td>
      <td><code>#6b8e23</code></td>
      <td style="background: olivedrab"></td>
    </tr>
    <tr>
      <td style="background: #ff4500"></td>
      <td style="text-align: center"><code>orangered</code></td>
      <td><code>#ff4500</code></td>
      <td style="background: orangered"></td>
    </tr>
    <tr>
      <td style="background: #da70d6"></td>
      <td style="text-align: center"><code>orchid</code></td>
      <td><code>#da70d6</code></td>
      <td style="background: orchid"></td>
    </tr>
    <tr>
      <td style="background: #eee8aa"></td>
      <td style="text-align: center"><code>palegoldenrod</code></td>
      <td><code>#eee8aa</code></td>
      <td style="background: palegoldenrod"></td>
    </tr>
    <tr>
      <td style="background: #98fb98"></td>
      <td style="text-align: center"><code>palegreen</code></td>
      <td><code>#98fb98</code></td>
      <td style="background: palegreen"></td>
    </tr>
    <tr>
      <td style="background: #afeeee"></td>
      <td style="text-align: center"><code>paleturquoise</code></td>
      <td><code>#afeeee</code></td>
      <td style="background: paleturquoise"></td>
    </tr>
    <tr>
      <td style="background: #db7093"></td>
      <td style="text-align: center"><code>palevioletred</code></td>
      <td><code>#db7093</code></td>
      <td style="background: palevioletred"></td>
    </tr>
    <tr>
      <td style="background: #ffefd5"></td>
      <td style="text-align: center"><code>papayawhip</code></td>
      <td><code>#ffefd5</code></td>
      <td style="background: papayawhip"></td>
    </tr>
    <tr>
      <td style="background: #ffdab9"></td>
      <td style="text-align: center"><code>peachpuff</code></td>
      <td><code>#ffdab9</code></td>
      <td style="background: peachpuff"></td>
    </tr>
    <tr>
      <td style="background: #cd853f"></td>
      <td style="text-align: center"><code>peru</code></td>
      <td><code>#cd853f</code></td>
      <td style="background: peru"></td>
    </tr>
    <tr>
      <td style="background: #ffc0cb"></td>
      <td style="text-align: center"><code>pink</code></td>
      <td><code>#ffc0cb</code></td>
      <td style="background: pink"></td>
    </tr>
    <tr>
      <td style="background: #dda0dd"></td>
      <td style="text-align: center"><code>plum</code></td>
      <td><code>#dda0dd</code></td>
      <td style="background: plum"></td>
    </tr>
    <tr>
      <td style="background: #b0e0e6"></td>
      <td style="text-align: center"><code>powderblue</code></td>
      <td><code>#b0e0e6</code></td>
      <td style="background: powderblue"></td>
    </tr>
    <tr>
      <td style="background: #bc8f8f"></td>
      <td style="text-align: center"><code>rosybrown</code></td>
      <td><code>#bc8f8f</code></td>
      <td style="background: rosybrown"></td>
    </tr>
    <tr>
      <td style="background: #4169e1"></td>
      <td style="text-align: center"><code>royalblue</code></td>
      <td><code>#4169e1</code></td>
      <td style="background: royalblue"></td>
    </tr>
    <tr>
      <td style="background: #8b4513"></td>
      <td style="text-align: center"><code>saddlebrown</code></td>
      <td><code>#8b4513</code></td>
      <td style="background: saddlebrown"></td>
    </tr>
    <tr>
      <td style="background: #fa8072"></td>
      <td style="text-align: center"><code>salmon</code></td>
      <td><code>#fa8072</code></td>
      <td style="background: salmon"></td>
    </tr>
    <tr>
      <td style="background: #f4a460"></td>
      <td style="text-align: center"><code>sandybrown</code></td>
      <td><code>#f4a460</code></td>
      <td style="background: sandybrown"></td>
    </tr>
    <tr>
      <td style="background: #2e8b57"></td>
      <td style="text-align: center"><code>seagreen</code></td>
      <td><code>#2e8b57</code></td>
      <td style="background: seagreen"></td>
    </tr>
    <tr>
      <td style="background: #fff5ee"></td>
      <td style="text-align: center"><code>seashell</code></td>
      <td><code>#fff5ee</code></td>
      <td style="background: seashell"></td>
    </tr>
    <tr>
      <td style="background: #a0522d"></td>
      <td style="text-align: center"><code>sienna</code></td>
      <td><code>#a0522d</code></td>
      <td style="background: sienna"></td>
    </tr>
    <tr>
      <td style="background: #87ceeb"></td>
      <td style="text-align: center"><code>skyblue</code></td>
      <td><code>#87ceeb</code></td>
      <td style="background: skyblue"></td>
    </tr>
    <tr>
      <td style="background: #6a5acd"></td>
      <td style="text-align: center"><code>slateblue</code></td>
      <td><code>#6a5acd</code></td>
      <td style="background: slateblue"></td>
    </tr>
    <tr>
      <td style="background: #708090"></td>
      <td style="text-align: center"><code>slategray</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategray"></td>
    </tr>
    <tr>
      <td style="background: #708090"></td>
      <td style="text-align: center"><code>slategrey</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategrey"></td>
    </tr>
    <tr>
      <td style="background: #fffafa"></td>
      <td style="text-align: center"><code>snow</code></td>
      <td><code>#fffafa</code></td>
      <td style="background: snow"></td>
    </tr>
    <tr>
      <td style="background: #00ff7f"></td>
      <td style="text-align: center"><code>springgreen</code></td>
      <td><code>#00ff7f</code></td>
      <td style="background: springgreen"></td>
    </tr>
    <tr>
      <td style="background: #4682b4"></td>
      <td style="text-align: center"><code>steelblue</code></td>
      <td><code>#4682b4</code></td>
      <td style="background: steelblue"></td>
    </tr>
    <tr>
      <td style="background: #d2b48c"></td>
      <td style="text-align: center"><code>tan</code></td>
      <td><code>#d2b48c</code></td>
      <td style="background: tan"></td>
    </tr>
    <tr>
      <td style="background: #d8bfd8"></td>
      <td style="text-align: center"><code>thistle</code></td>
      <td><code>#d8bfd8</code></td>
      <td style="background: thistle"></td>
    </tr>
    <tr>
      <td style="background: #ff6347"></td>
      <td style="text-align: center"><code>tomato</code></td>
      <td><code>#ff6347</code></td>
      <td style="background: tomato"></td>
    </tr>
    <tr>
      <td style="background: #40e0d0"></td>
      <td style="text-align: center"><code>turquoise</code></td>
      <td><code>#40e0d0</code></td>
      <td style="background: turquoise"></td>
    </tr>
    <tr>
      <td style="background: #ee82ee"></td>
      <td style="text-align: center"><code>violet</code></td>
      <td><code>#ee82ee</code></td>
      <td style="background: violet"></td>
    </tr>
    <tr>
      <td style="background: #f5deb3"></td>
      <td style="text-align: center"><code>wheat</code></td>
      <td><code>#f5deb3</code></td>
      <td style="background: wheat"></td>
    </tr>
    <tr>
      <td style="background: #f5f5f5"></td>
      <td style="text-align: center"><code>whitesmoke</code></td>
      <td><code>#f5f5f5</code></td>
      <td style="background: whitesmoke"></td>
    </tr>
    <tr>
      <td style="background: #9acd32"></td>
      <td style="text-align: center"><code>yellowgreen</code></td>
      <td><code>#9acd32</code></td>
      <td style="background: yellowgreen"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS4 Colors")}}</td>
      <td style="background: #639"></td>
      <td style="text-align: center"><code>rebeccapurple</code></td>
      <td><code>#663399</code></td>
      <td style="background: rebeccapurple"></td>
    </tr>
  </tbody>
</table>

La couleur `rebeccapurple` est équivalente à la couleur `#639`. Pour mieux comprendre pourquoi elle a été ajoutée, vous pouvez lire ce billet Codepen par Trezy « [Honorer un grand homme](https://codepen.io/trezy/blog/honoring-a-great-man) » (en anglais).

### Le mot-clé `transparent`

`transparent` est un mot-clé qui représente une couleur totalement transparente (autrement dit, la couleur qui sera vue sera la couleur située en arrière-plan). D'un point de vue technique, il s'agit d'un noir pur avec un canal alpha minimal : `rgba(0,0,0,0)`.

> **Note :** Attention lorsqu'on utilise ce mot-clé pour un dégradé (cf.{{cssxref("gradient")}}, [la spécification W3C indique que `transparent` devrait être calculé dans l'espace de couleurs avec pré-multiplication des alpha](https://www.w3.org/TR/2012/CR-css3-images-20120417/#color-stop-syntax). Cependant, les anciens navigateurs peuvent traiter ce noir avec une valeur `alpha` de 0.

> **Note :** Historiquement, le mot-clé `transparent` n'était pas une valeur de type `<color>` pour la spécification CSS de niveau 2 (première révision). C'était un mot-clé qui pouvait être utilisé comme valeur pour les propriétés {{cssxref("background")}} et {{cssxref("border")}}. Il a été ajouté afin de pouvoir surcharger l'héritage de couleurs opaques. Avec l'ajout de la gestion de l'opacité via [les canaux alpha](https://fr.wikipedia.org/wiki/Alpha_blending), `transparent` a été redéfini comme une couleur avec la spécification CSS de niveau 3 sur les couleurs, ce qui permet de l'utiliser à n'importe quel endroit où une valeur `<color>` est nécessaire (la propriété {{cssxref("color")}} par exemple).

### Le mot-clé `currentColor`

Le mot-clé `currentColor` représente [la valeur calculée](/fr/docs/Web/CSS/Valeur_calcul%C3%A9e) de la propriété {{cssxref("color")}} pour l'élément. Il permet aux propriétés de couleur d'hériter de la valeur de l'élément parent même si, par défaut, celles-ci n'utilisent pas l'héritage.

Il peut également être utilisé sur des propriétés qui héritent de la valeur calculée de la propriété {{cssxref("color")}} de l'élément. Cela sera alors équivalent au mot-clé {{cssxref("inherit")}}.

Si `currentColor` est utilisée comme valeur pour la propriété `color`, sa valeur est déterminée à partir de la valeur héritée pour la propriété `color`.

#### Exemples

La couleur de la ligne prend la couleur héritée depuis son élément parent.

##### Exemple _live_ n°1

```html
<div style="color:darkred">
 La couleur de ce texte est bleu.
  <div style="background:currentColor; height:1px"></div>
 Un peu de texte.
</div>
```

{{EmbedLiveSample('Exemple_live_n°1')}}

##### Exemple _live_ n°2

```html
<div style="color:blue; border-bottom: 1px dashed currentColor;">
 La couleur de ce texte est bleu :
  <div style="background:currentColor; height:1px"></div>
 Un peu de texte.
</div>
```

{{EmbedLiveSample('Exemple_live_n°2')}}

### Les couleurs RGB

Les couleurs peuvent être définies selon le modèles rouge-vert-bleu-alpha (RGB avec une composante alpha, optionnelle, pour gérer la transparence.

#### Syntaxe

Les couleurs RGB peuvent être exprimées avec une notation hexadécimale (préfixée avec `#`) ou avec des notations fonctionnelles (`rgb()` ou `rgba()`).

> **Note :** Dans la spécification du module CSS Color de niveau 4, `rgba()` a été définie comme une fonction historique dont la grammaire et le comportement est le même que `rgb()`. C'est donc un synonyme. À partir de cette spécification, les deux peuvent accepter les mêmes paramètres.

- Notation hexadécimale : `#RRGGBB[AA]`
  - : Le signe « `#` » suivi par huit caractères hexadécimaux (0-9, A-F), les deux premiers déterminent la composante rouge, les deux suivants la composante verte puis la composante bleue et enfin les deux derniers, optionnels, déterminent la composante alpha.
- Notation hexadécimale : `#RGB[A]`
  - : le signe « `#` » suivi par quatre caractères hexadécimaux (0-9, A-F), le premier chiffre représente la composante rouge, le deuxième la composante verte, le troisième la composante bleue et le quatrième, optionnel, la composante alpha.
- Notation fonctionnelle avec des virgules : `rgb(R, G, B[, A])` ou `rgba(R, G, B, A)`
  - : Cette fonction permet d'ajouter une composante d'opacité (par rapport à la fonction `rgb()`). Le quatrième argument définira la force de l'opacité : 1 pour une opacité complète et 0 pour une transparence totale. Les arguments peuvent être des nombres ({{cssxref("&lt;number&gt;")}}) ou des pourcentages ({{cssxref("&lt;percentage&gt;")}}) (ex. `rgb(1e2, .5e1, .5e0, +.25e2%)`).
- Notation fonctionnelle : `rgb(R G B[ / A])` ou `rgba(R G B / A)`
  - : Cette forme fonctionne de façon analogue à la forme précédente depuis le module de spécification _CSS Colors Level 4_.

#### Exemples

##### Les différentes variantes pour la syntaxe RGB

```plain
/* Ces exemples définissent tous la même couleur */
#f03
#F03
#ff0033
#FF0033
rgb(255,0,51)
rgb(255, 0, 51)
rgb(255, 0, 51.0)
rgb(100%,0%,20%)
rgb(100%, 0%, 20%)
rgb(100%, 0, 20%) /* Erreur : on ne peut pas mélanger les nombres et les pourcentages */
```

##### RGBa

```css
/* Notation hexadécimale */
#f030               /*   0% opacité - rouge */
#F03F               /* 100% opacité - rouge */
#ff003300           /*   0% opacité - rouge */
#FF003388           /*  50% opacité - rouge */

/* Notation fonctionnelle */
rgba(255,0,0,0.1)   /*  10% opacité - rouge */
rgba(255,0,0,0.4)   /*  40% opacité - rouge */
rgba(255,0,0,0.7)   /*  70% opacité - rouge */
rgba(255,0,0,  1)   /* 100% opacité - rouge */

/* Notation fonctionnelle avec des nombres décimaux */
rgba(255, 0, 153.6, 1)
rgba(1e2, .5e1, .5e0, +.25e2%)

/* Notation avec un espace */
rgba(255 0 0 / 0.4) /* 40% opacité - rouge */
rgba(255 0 0 / 40%) /* 40% opacité - rouge */
```

### Les couleurs HSL

Les couleurs peuvent également être définies selon le modèle HSL (pour _Hue-Saturation-Lightness_ qui signifie teinte-saturation-clarté).

HSL est considéré comme plus intuitif que RGB car on peut ajuster les couleurs au fur et à mesure ou créer des palettes de couleurs plus simplement (par exemple en conservant la même teinte et en faisant varier la saturation et/ou la clarté).

#### Syntaxe

Pour HSL, les couleurs peuvent être exprimées via les notations fonctionnelles `hsl()` ou `hsla()`.

> **Note :** Dans la spécification du module CSS Color de niveau 4, `hsla()` a été définie comme une fonction historique dont la grammaire et le comportement est le même que `hsl()`. C'est donc un synonyme. À partir de cette spécification, les deux peuvent accepter les mêmes paramètres.

- Notation fonctionnelle : `hsl(H, S, L,[, A])` ou `hsla(H, S, L, A)`

  - : **La valeur H correspond à la teinte (_hue_)** et est représentée comme un angle {{cssxref("&lt;angle&gt;")}} sur le cercle des couleurs. Lorsque la valeur est écrite sans unité, elle est considérée comme une valeur exprimée en degré. Par définition, **le rouge correspond à 0 et 360** et les autres couleurs évoluent sur le cercle. **Vert correspond à 120 et bleu à 240**. La valeur se comporte comme un angle et « tournera en boucle » avec une même mesure de couleur qui peut avoir différentes valeurs (par exemple -120 sera équivalent à 240 et 480 sera équivalent à 120).

    **La valeur S correspond à la saturation** (_saturation_) et **la valeur L correspond à la clarté (_lightness_)**, ces deux valeurs sont représentées par des pourcentages. Pour la saturation, avec `100%` l'image sera complètement saturée et avec `0%`, l'image sera en nuances de gris. Pour la clarté, `100%` correspondra à du blanc et `0%` à du noir. `50%` agira comme une clarté « normale ».

    **La valeur A** (canal alpha) peut être un nombre (type {{cssxref("&lt;number&gt;")}} entre 0 et 1 ou un pourcentage (type {{cssxref("&lt;percentage&gt;")}} (la valeur `100%` correspond alors à la valeur numérique 1 : opacité complète).

- Notation fonctionnelle : `hsl(H S L[ / A])` ou `hsla(H S L / A)`
  - : Le module CSS Colors Level 4 ajoute la prise en charge de la notation fonctionnelle avec les espaces comme séparateur.

#### Exemples

##### HSL

```css
hsl(0,  100%,50%)   /* red */
hsl(30, 100%,50%)
hsl(60, 100%,50%)
hsl(90, 100%,50%)
hsl(120,100%,50%)   /* green */
hsl(150,100%,50%)
hsl(180,100%,50%)
hsl(210,100%,50%)
hsl(240,100%,50%)   /* blue */
hsl(270,100%,50%)
hsl(300,100%,50%)
hsl(330,100%,50%)
hsl(360,100%,50%)   /* red */

hsl(120,100%,25%)   /* dark green */
hsl(120,100%,50%)   /* green */
hsl(120,100%,75%)   /* light green */

hsl(120,100%,50%)   /* green */
hsl(120, 67%,50%)
hsl(120, 33%,50%)
hsl(120,  0%,50%)

hsl(120, 60%,70%)   /* pastel green */

/* syntaxe avec les espaces */
hsl(120 60% 70%) /* pastel green */

/* Valeur d'angle */
/* on peut également utiliser les unités */
/* rad, grad, turn */
hsl(120deg 60% 70%) /* pastel green */

/* Valeur alpha optionnelle */
hsl(240,100%,50%,0.05)   /* 5% opaque blue */
hsl(240,100%,50%,5%)     /* 5% opaque blue with percentage value for alpha */
hsl(240 100% 50% / 0.05) /* 5% opaque blue */
hsl(240 100% 50% / 5%)   /* 5% opaque blue with percentage value for alpha */
```

##### HSLa

```css
hsla(240,100%,50%,0.05)  /* 5% opaque blue */
hsla(240,100%,50%, 0.4)  /* 40% opaque blue */
hsla(240,100%,50%, 0.7)  /* 70% opaque blue */
hsla(240,100%,50%,   1)  /* full opaque blue */

/* syntaxe avec un espace */
hsla(240 100% 50% / 0.05)/* 5% opaque blue */

/* valeur en pourcentage pour l'alpha */
hsla(240 100% 50% / 5%)/* 5% opaque blue */

/* valeur d'angle pour la teinte */
/* les unités rad, grad et turn*/
/* sont également acceptées */
hsla(240deg 100% 50% / 5%)/* 5% opaque blue */
hsla(240deg,100%,50%, 0.4) /* 40% opaque blue */
```

### Couleurs système

Tous les systèmes ne prennent pas en charges toutes les couleurs système. Cet usage est déprécié pour les pages web publiques (cf. ci-après le tableau des spécifications).

- ActiveBorder
  - : La bordure de la fenêtre active.
- ActiveCaption
  - : La légende de la fenêtre active. Devrait être utilisé avec `CaptionText` comme couleur de premier-plan.
- AppWorkspace
  - : La couleur d'arrière-plan d'une interface avec plusieurs documents.
- Background
  - : L'arrière-plan du bureau.
- ButtonFace
  - : La couleur d'arrière-plan visible (qui fait face à l'utilisateur) pour les éléments qui sont en 3D avec une bordure qui les entoure. Devrait être utilisée avec `ButtonText` comme couleur de premier-plan.
- ButtonHighlight
  - : La couleur de la bordure faisant face à la source de lumière pour les éléments qui apparaissent en 3D à cause d'une bordure autour.
- ButtonShadow
  - : La couleur de la bordure éloignée de la source de lumière pour les éléments qui apparaissent en 3D à cause d'une bordure autour..
- ButtonText
  - : La couleur du texte sur les bouttons. Devrait être utilisée avec `ButtonFace` ou `ThreeDFace` comme couleur d'arrière-plan.
- CaptionText
  - : La couleur du texte dans les légendes, la couleur des boîtes redimensionnables et de la flèche de l'ascenseur. Devrait être utilisée avec `ActiveCaption` comme couleur d'arrière-plan.
- GrayText
  - : Texte (désactivé) en gris.
- Highlight
  - : La couleur des éléments sélectionnés dans un contrôle. Devrait être utilisé avec `HighlightText` comme couleur de premier-plan.
- HighlightText
  - : La couleur du texte des éléments sélectionnés dans un contrôle. Devrait être utilisée avec `Highlight` comme couleur d'arrière-plan.
- InactiveBorder
  - : La couleur de la bordure d'une fenêtre inactive.
- InactiveCaption
  - : La couleur de la légende de fenêtre inactive. Devrait être utilisée avec `InactiveCaptionText` comme couleur de premier-plan.
- InactiveCaptionText
  - : La couleur du texte pour une légende inactive. Devrait être utilisée avec `InactiveCaption` comme couleur d'arrière-plan.
- InfoBackground
  - : La couleur d'arrière-plan pour les bulles d'informations. Devrait être utilisée avec `InfoText` comme couleur de premier-plan.
- InfoText
  - : La couleur du texte pour les bulles d'informations. Devrait être utilisée avec `InfoBackground` comme couleur d'arrière-plan.
- Menu
  - : La couleur d'arrière-plan du menu. Devrait être utilisée avec `MenuText` ou `-moz-MenuBarText` comme couleur de premier-plan.
- MenuText
  - : La couleur du texte dans les menus. Devrait être utilisée avec `Menu` comme couleur d'arrière-plan.
- Scrollbar
  - : La couleur d'arrière-plan de la barre de défilement (ascenseur).
- ThreeDDarkShadow
  - : La couleur de la bordure la plus sombre (généralement la bordure extérieure) éloignée de la source de lumière lorsque deux bordures concentriques sont utilisées pour générer un effet 3D.
- ThreeDFace
  - : La couleur d'arrière-plan pour les éléments qui apparaissent en 3D grâce à des bordures concentriques. Devrait être utilisée avec `ButtonText` comme couleur de premier-plan.
- ThreeDHighlight
  - : La couleur de la bordure la plus claire (généralement la bordure extérieure) proche de la source de lumière lorsque deux bordures concentriques sont utilisées pour générer un effet 3D.
- ThreeDLightShadow
  - : La couleur de la bordure la plus sombre (généralement la bordure intérieure) proche de la source de lumière lorsque deux bordures concentriques sont utilisées pour générer un effet 3D.
- ThreeDShadow
  - : La couleur de la bordure la plus claire (généralement la bordure intérieure) lorsque deux bordures concentriques sont utilisées pour générer un effet 3D.
- Window
  - : La couleur d'arrière-plan de la fenêtre. Devrait être utilisée avec la couleur `WindowText` en premier plan.
- WindowFrame
  - : La couleur du cadre de la fenêtre.
- WindowText
  - : La couleur du texte dans les fenêtres. Devrait être utilisée avec la couleur `Window` en arrière-plan.

### Ajouts propres à Mozilla pour les couleurs système

- \-moz-ButtonDefault
  - : La couleur de la bordure autour des boutons représentant l'action par défaut d'une boîte de dialogue.
- \-moz-ButtonHoverFace
  - : La couleur d'arrière-plan d'un bouton survolé par le pointeur (qui serait `ThreeDFace` ou `ButtonFace` lorsque le pointeur n'est pas sur le bouton). Devrait être utilisée avec `-moz-ButtonHoverText` comme couleur de premier-plan.
- \-moz-ButtonHoverText
  - : La couleur du texte d'un bouton survolé par le pointeur (qui serait ButtonText lorsque le pointeur n'est pas sur le bouton). Devrait être utilisée avec`-moz-ButtonHoverFace` comme couleur d'arrière-plan.
- \-moz-CellHighlight
  - : La couleur d'arrière-plan pour un élément sélectionné dans un widget arborescent. Devrait être utilisée avec `-moz-CellHighlightText` comme couleur de premier-plan. Voir aussi `-moz-html-CellHighlight`.
- \-moz-CellHighlightText
  - : La couleur du texte pour un élément sélectionné dans un widget arborescent. Devrait être utilisée avec `-moz-CellHighlight` comme couleur d'arrière-plan. Voir aussi `-moz-html-CellHighlightText`.
- \-moz-Combobox
  - : La couleur d'arrière-plan pour les listes déroulantes. Devrait être utilisée avec `-moz-ComboboxText` comme couleurs de premier-plan. Pour les versions antérieures à 1.9.2, on utilisera `-moz-Field` à la place.
- \-moz-ComboboxText
  - : La couleur du texte pour les listes déroulantes. Devrait être utilisée avec `-moz-Combobox` comme couleur d'arrière-plan. Pour les versions antérieures à 1.9.2, on utilisera `-moz-FieldText` à la place.
- \-moz-Dialog
  - : La couleur d'arrière-plan pour les boîtes de dialogue. Devrait être utilisée avec `-moz-DialogText` comme couleur de premier-plan.
- \-moz-DialogText
  - : La couleur du texte pour les boîtes de dialogue. Devrait être utilisée avec `-moz-Dialog` comme couleur d'arrière-plan.
- \-moz-dragtargetzone

  \-moz-EvenTreeRow

  - : La couleur d'arrière-plan pour les lignes numérotées paires d'un arbre. Devrait être utilisée avec`-moz-FieldText` comme couleur de premier-plan. Pour les versions de Gecko avant 1.9, on utilisera `-moz-Field`. Voir aussi `-moz-OddTreeRow`.

- \-moz-Field
  - : La couleur d'arrière-plan pour les champs texte. Devrait être utilisée avec `-moz-FieldText` comme couleur de premier-plan.
- \-moz-FieldText
  - : La couleur du texte pour les champs texte. Devrait être utilisée avec `-moz-Field`, `-moz-EvenTreeRow`, ou `-moz-OddTreeRow` comme couleur d'arrière-plan.
- \-moz-html-CellHighlight
  - : La couleur d'arrière-plan pour les éléments sélectionnés dans un élément HTML {{HTMLElement("select")}}. Devrait être utilisée avec `-moz-html-CellHighlightText` comme couleur de premier-plan. Avant Gecko 1.9, on utilisera `-moz-CellHighlight`.
- \-moz-html-CellHighlightText
  - : La couleur du texte pour les éléments sélectionnés dans un élément HTML {{HTMLElement("select")}}. Devrait être utilisée avec `-moz-html-CellHighlight` comme couleur d'arrière-plan. Avant Gecko 1.9, on utilisera `-moz-CellHighlightText`.
- \-moz-mac-accentdarkestshadow, -moz-mac-accentdarkshadow, -moz-mac-accentface, -moz-mac-accentlightesthighlight, -moz-mac-accentlightshadow, -moz-mac-accentregularhighlight, -moz-mac-accentregularshadow
  - : Couleurs d'accentuation.
- \-moz-mac-chrome-active, -moz-mac-chrome-inactive
  - : Couleurs pour les éléments de chrome actifs/inactifs
- \-moz-mac-focusring, -moz-mac-menuselect, -moz-mac-menushadow, -moz-mac-menutextselect, -moz-MenuHover
  - : La couleur d'arrière-plan pour les éléments de menu survolés. Généralement semblable à `Highlight`. Devrait être utilisée avec `-moz-MenuHoverText` ou `-moz-MenuBarHoverText` comme couleur de premier-plan.
- \-moz-MenuHoverText
  - : La couleur du texte pour les éléments de menu survolés. Généralement similaire à `HighlightText`. Devrait être utilisée avec `-moz-MenuHover` comme couleur d'arrière-plan.
- \-moz-MenuBarText
  - : La couleur du texte dans les barres de menu. Généralement similaire à `MenuText`. Devrait être utilisée avec `Menu` comme couleur d'arrière-plan.
- \-moz-MenuBarHoverText
  - : La couleur du texte pour les éléments survolés dans les barres de menu, généralement similaire à `-moz-MenuHoverText`. Devrait être utilisée avec `-moz-MenuHover` comme couleur d'arrière-plan.
- \-moz-nativehyperlinktext
  - : La couleur par défaut de la plate-forme pour les hyperliens.
- \-moz-OddTreeRow
  - : La couleur d'arrière-plan pour les lignes numérotées impaires d'un arbre. Devrait être utilisée avec`-moz-FieldText` comme couleur de premier-plan. Pour les versions de Gecko avant 1.9, on utilisera `-moz-Field`. Voir aussi `-moz-EvenTreeRow`.
- \-moz-win-accentcolor
  - : Utilisée pour accéder à la couleur d'accentuation de Windows 10 pour les menus, la barre de tâches, les barres de titre.
- \-moz-win-accentcolortext
  - : Utilisée pour accéder à la couleur d'accentuation de Windows 10 uttilisée pour le texte des menus, de la barre de tâches et des barres de titre.
- \-moz-win-communicationstext
  - : Devrait être utilisée comme couleur pour les textes des objets pour lesquels `{{cssxref("appearance")}}: -moz-win-communications-toolbox;`.
- \-moz-win-mediatext
  - : Devrait être utilisée comme couleur pour les textes des objets pour lesquels `{{cssxref("appearance")}}: -moz-win-media-toolbox`.

### Ajout de Mozilla pour les couleurs liées aux préférences

- \-moz-activehyperlinktext
  - : La couleur choisie par l'utilisateur pour le texte des liens actifs. Devrait être utilisée avec la couleur d'arrière-plan par défaut du document.
- \-moz-default-background-color
  - : La couleur choisie par l'utilisateur pour la couleur d'arrière-plan du document.
- \-moz-default-color
  - : La couleur choisie par l'utilisateur pour la couleur du texte.
- \-moz-hyperlinktext
  - : La couleur choisie par l'utilisateur pour le texte des liens non visités. Devrait être utilisée avec la couleur d'arrière-plan par défaut du document.
- \-moz-visitedhyperlinktext
  - : La couleur choisie par l'utilisateur pour le texte des liens visités. Devrait être utilisée avec la couleur d'arrière-plan par défaut du document.

## Interpolation

Les valeurs de type `<color>` peuvent être interpolées afin de créer des animations ou des dégradés (type `<gradient>`). Dans ce cas, elles sont interpolées via chacune de leurs composantes rouge, verte, bleue et chacune de ces coordonnées est gérée comme un nombre réel flottant. L'interpolation des couleurs est appliquée dans [l'espace de couleurs alpha sRGBA prémultiplié](https://www.gimp.org/docs/plug-in/appendix-alpha.html) afin d'empêcher des tons de gris d'apparaître. Pour les animations, la vitesse de l'interpolation est définie selon [la fonction de temporisation](/fr/docs/Web/CSS/easing-function) associée à l'animation.

## Accessibilité

La recommandation du W3C : [WCAG 2.0](https://www.w3.org/TR/WCAG/#visual-audio-contrast) conseille vivement aux auteurs de ne pas utiliser la couleur comme le seul moyen de transmettre une information, une action ou un résultat. Certains utilisateurs peuvent rencontrer des difficultés à distinguer les couleurs. Bien entendu, cette recommandation ne vise pas à interdire l'utilisation des couleurs, elle indique simplement que ce ne doit pas être le seul moyen de fournir une information (voir l'article sur [Ies couleurs et le contraste](/fr/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast) pour plus d'informations).

## Spécifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">État</th>
      <th scope="col">Commentaires</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('CSS4 Colors', '#colorunits', '&lt;color&gt;')}}
      </td>
      <td>{{Spec2('CSS4 Colors')}}</td>
      <td>
        Ajout de la couleur <code>rebeccapurple</code>, de la notation
        hexadécimale sur quatre chiffres (<code>#RGBA</code>) et sur huit
        chiffres (<code>#RRGGBBAA</code>). <code>rgba()</code> et
        <code>hsla()</code> sont désormais synonymes de <code>rgb()</code> et
        <code>hsl()</code>, les paramètres des fonctions peuvent être séparés
        par des espaces plutôt que ds virgules, les valeurs de transparence
        (alpha) peuvent être exprimées en pourcentages et les valeurs de teinte
        avec un angle.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('CSS3 Colors', '#colorunits', '&lt;color&gt;')}}
      </td>
      <td>{{Spec2('CSS3 Colors')}}</td>
      <td>
        Les couleurs système sont désormais dépréciée. Les couleurs SVG sont
        ajoutées ainsi que les notations fonctionnelles <code>rgba()</code>,
        <code>hsl()</code>, <code>hsla()</code>.
      </td>
    </tr>
    <tr style="vertical-align: top">
      <td style="vertical-align: top">
        {{SpecName('CSS2.1', 'syndata.html#value-def-color', '&lt;color&gt;')}}
      </td>
      <td style="vertical-align: top">{{Spec2('CSS2.1')}}</td>
      <td style="vertical-align: top">
        Ajout de la couleur <code>orange</code> et des couleurs système.
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        {{SpecName('CSS1', '#color-units', '&lt;color&gt;')}}
      </td>
      <td style="vertical-align: top">{{Spec2('CSS1')}}</td>
      <td style="vertical-align: top">Définition initiale.</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("css.properties.color")}}

## Voir aussi

- {{cssxref("opacity")}}
- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("border-color")}}
- {{cssxref("outline-color")}}
- {{cssxref("text-shadow")}}
- {{cssxref("box-shadow")}}
