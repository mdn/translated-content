---
title: Ajouter une carte cliquable sur une image
slug: Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Vous pouvez créer une carte imagée cliquable en HTML à l'aide des éléments {{HTMLElement('area')}} et {{HTMLElement('map')}}.
Cet article explique comment mettre en place une carte imagée, ainsi que certains inconvénients à prendre en compte avant d'en créer une.

<table>
<caption>Voici quelques points à connaître</caption>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vous devez déjà savoir <a href="/fr/docs/Learn_web_development/Getting_started/Your_first_website">créer un document HTML simple</a> et <a href="/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images#comment_intégrer_une_image_à_une_page_web">ajouter des images accessibles à une page web.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif d'apprentissage&nbsp;:</th>
      <td>
        Apprendre à faire en sorte que différentes zones d'une même image pointent vers différentes pages.
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Cet article traite uniquement des cartes sur une image côté client. N'utilisez pas de cartes sur une image côté serveur, qui nécessitent que l'utilisateur·ice ait une souris.

## Les cartes imagées cliquables et leurs inconvénients

Lorsque vous imbriquez une image dans un élément {{HTMLElement("a")}}, l'image entière pointe vers une page web. En revanche, les cartes imagées contiennent plusieurs régions (aussi appelées «&nbsp;<i lang="en">hotspots</i>&nbsp;» en anglais) qui pointent chacunes vers une ressource distincte.

Auparavant, les cartes imagées était assez populaires mais, malgré cette popularité, elles posent quelques problèmes en termes de performances et d'accessibilité.

> [!WARNING]
> Plusieurs images faisant référence à la même carte sur une image peuvent entraîner un comportement inattendu du navigateur, dégradant fortement l'utilisabilité et l'accessibilité. Par exemple, lorsque l'utilisateur·ice navigue au clavier sur une image dont la carte est réutilisée dans Safari et les navigateurs basés sur Chromium, les occurrences ultérieures de l'image utilisant cette même carte sont complètement ignorées. Dans Firefox, toutes les cartes de zones obtiennent la sélection clavier simultanément et, lorsque l'utilisateur·ice navigue au clavier au-delà de l'image, l'élément sélectionné suivant est celui situé après la dernière occurrence de l'image, ce qui a pour effet d'ignorer tout ce qui se trouve entre les deux images.

[Les liens textuels](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links) (éventuellement mis en formes avec CSS) sont préférables aux cartes de zones cliquables sur une image pour plusieurs raisons&nbsp;: les liens textuels sont légers, faciles à maintenir, souvent plus adaptés au référencement et répondent aux besoins d'accessibilité (par exemple, lecteurs d'écran, navigateurs en mode texte, services de traduction).

## Comment insérer une carte imagée

### Étape 1 : l'image

N'importe quelle image ne fera pas l'affaire pour construire une telle carte.

- L'image doit indiquer de façon claire ce qui doit se passer quand les visiteurs suivent les liens des différentes zones (le texte contenu dans l'attribut `alt` est bien entendu obligatoire mais de nombreux visiteurs ne le verront pas).
- L'image doit indiquer de façon claire où commencent et où se terminent les différentes régions.
- Les zones actives doivent être suffisamment grandes pour pouvoir être touchées confortablement, quelle que soit la taille de la fenêtre d'affichage. Quelle taille est suffisante&nbsp;? [72 × 72 pixels CSS est un bon minimum <sup>(angl.)</sup>](https://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/), avec des espaces généreux entre les cibles tactiles. La carte du monde sur [50languages.com <sup>(angl.)</sup>](https://www.goethe-verlag.com/book2/) illustre parfaitement le problème. Il est beaucoup plus facile d'appuyer sur la Russie ou l'Amérique du Nord que sur l'Albanie ou l'Estonie.

On insère une image [de la même façon que d'habitude](/fr/docs/Learn/HTML/Howto/Add_images_to_a_webpage#comment_intégrer_une_image_à_une_page_web) (avec un élément {{HTMLElement("img")}} et un texte dans l'attribut [`alt`](/fr/docs/Web/HTML/Reference/Elements/img#alt)). Si l'image n'est présente qu'à des fins de navigations, `alt` peut être laissé vide : `alt=""`, si les valeurs pour les différents [`alt`](/fr/docs/Web/HTML/Reference/Elements/area#alt) sont bien renseignés dans les éléments {{HTMLElement('area')}} que nous allons présenter.

Cette image contiendra une attribut spécial [`usemap`](/fr/docs/Web/HTML/Reference/Elements/img#usemap). Celui-ci doit désigner avec un nom unique et sans espace la carte imagée. C'est ce nom qu'on placera dans cet attribut `usemap`&nbsp;:

```html
<img src="image-map.png" alt="" usemap="#exemple-map-1" />
```

### Étape 2 : Activer les régions actives

Dans cette étape, nous allons remplir le code de l'élément {{HTMLElement('map')}}. Celui-ci n'a besoin que d'un seul attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/map#name) dont la valeur doit correspondre à celle utilisée pour l'attribut `usemap` vue juste avant&nbsp;:

```html
<map name="example-map-1"> </map>
```

Dans cet élément `<map>`, on aura besoin d'utiliser les éléments {{HTMLElement('area')}}. Chacun de ces éléments correspondra à une région donnée. Afin que la navigation au clavier reste intuitive, il faudra veiller à ce que l'ordre de ces éléments HTML corresponde bien à l'ordre visuel des régions.

Les éléments `<area>` sont des éléments vides mais qui utilisent quatres attributs&nbsp;:

- [`shape`](/fr/docs/Web/HTML/Reference/Elements/area#shape)
  - : L'attribut `shape` prend l'une des quatre valeurs&nbsp;: `circle`, `rect`, `poly` et `default`. Un élément `<area>` dont la valeur de `shape` vaut `default` occupe l'image entière, à l'exception des autres zones actives que vous avez définies.
    S'il existe un chevauchement entre les zones définies, l'ordre source détermine celle qui est prioritaire.
    La forme choisie détermine les informations de coordonnées que vous devrez fournir dans `coords`.

- [`coords`](/fr/docs/Web/HTML/Reference/Elements/area#coords)
  - : Les coordonnées sont exprimées en pixels CSS, et leur valeur dépend de la `shape` (forme) sélectionnée.
    - Pour un cercle, fournissez les coordonnées x et y du centre, suivies de la longueur du rayon.
    - Pour un rectangle, fournissez les coordonnées x et y des coins supérieur-gauche et inférieur-droit.
    - Pour un polygone, fournissez les coordonnées x et y de chaque sommet (donc au moins six valeurs).

- [`href`](/fr/docs/Web/HTML/Reference/Elements/area#href)
  - : L'URL de la ressource vers laquelle vous créez un lien. Vous pouvez laisser cet attribut vide si vous ne souhaitez pas que la zone courante crée un lien (par exemple si vous créez un cercle creux).

- [`alt`](/fr/docs/Web/HTML/Reference/Elements/area#alt)
  - : Un attribut obligatoire qui indique aux personnes la direction ou le rôle du lien. Ce texte `alt` ne sera affiché que lorsque l'image ne sera pas disponible. Pour plus d'informations, voir [nos conseils pour écrire des hyperliens accessibles.](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links#utilisez_une_formulation_claire_des_liens)

    Vous pouvez écrire `alt=""` si l'attribut `href` est vide _et_ que l'image entière possède déjà un attribut `alt` renseigné.

```html
<map name="exemple-map-1">
  <area
    shape="circle"
    coords="200,250,25"
    href="page-2.html"
    alt="exemple de cercle" />

  <area
    shape="rect"
    coords="10, 5, 20, 15"
    href="page-3.html"
    alt="exemple de rectangle" />
</map>
```

### Étape 3 : S'assurer que la carte fonctionne pour chacun

Vous n'avez pas fini tant que vous n'avez pas testé les cartes imagées de façon rigoureuse sur de nombreux navigateurs et appareils. Essayez de suivre les liens uniquement au clavier. Essayez de désactiver les images.

Si votre carte imagée fait plus d'environ 240px de large, vous devrez apporter des ajustements supplémentaires pour rendre votre site adaptatif. Il ne suffit pas de redimensionner l'image pour les petits écrans, car les coordonnées restent les mêmes et ne correspondent plus à l'image.

## Voir aussi

- L'élément {{HTMLElement("img")}}
- L'élément {{HTMLElement("map")}}
- L'élément {{HTMLElement("area")}}
- [Un éditeur de carte de zones en ligne <sup>(angl.)</sup>](https://www.maschek.hu/imagemap/)
