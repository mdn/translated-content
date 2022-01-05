---
title: Ajouter une carte de zones cliquables sur une image
slug: Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image
tags:
  - Guide
  - HTML
  - Intermediate
  - Navigation
translation_of: Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image
original_slug: Apprendre/HTML/Comment/Ajouter_carte_zones_cliquables_sur_image
---
Dans cet article, nous verrons comment construire une carte imagée cliquable en commençant par les inconvénients de cette méthode.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Vous devez au préalable savoir comment
        <a href="/fr/Apprendre/HTML/Écrire_une_simple_page_HTML"
          >créer un document HTML simple</a
        >
        et connaître comment
        <a href="/fr/Apprendre/HTML/Comment/Ajouter_des_images_à_une_page_web"
          >ajouter des images accessibles à une page web.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>
        Apprendre comment faire pour que différentes zones d'une même image
        pointent vers différentes pages.
      </td>
    </tr>
  </tbody>
</table>

> **Attention :** Cet article n'aborde que les cartes générées côté client. Les cartes de zones générées côté serveur ne doivent pas être utilisée car elles ne sont accessibles qu'aux utilisateurs ayant des souris.

## Les cartes imagées cliquables et leurs inconvénients

Lorsque vous imbriquez une image dans un élément {{htmlelement("a")}}, l'image entière pointe vers une page web. En revanche, les cartes imagées contiennent plusieurs régions (aussi appelées « _hotspots_ » en anglais) qui pointent chacunes vers une ressource distincte.

Auparavant, les cartes imagées était assez populaires mais, malgré cette popularité, elles posent quelques problèmes en termes de performances et d'accessibilité.

[Les liens textuels](/fr/Apprendre/HTML/Comment/Créer_un_hyperlien) (éventuellement mis en formes avec CSS) sont préférables à ces cartes car ils sont plus légers, plus faciles à maintenir, plus utiles pour le référencement et qu'ils sont supportés par les outils d'accessibilité.

## Comment insérer une carte imagée

### Étape 1 : l'image

N'importe quelle image ne fera pas l'affaire pour construire une telle carte.

- L'image doit indiquer de façon claire ce qui doit se passer quand les visiteurs suivent les liens des différentes zones (le texte contenu dans l'attribut `alt` est bien entendu obligatoire mais de nombreux visiteurs ne le verront pas).
- L'image doit indiquer de façon claire où commencent et où se terminent les différentes régions.
- Les différentes zones de la cartes doivent être suffisamment grandes pour qu'on puisse cliquer ou appuyer dessus, quelle que soit la taille de l'écran utilisé. [Une image de 72 pixels CSS de long et de large](http://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/) est un minimum acceptable (pour voir le problème posé par de trop petites régions : [50languages.com](http://www.goethe-verlag.com/book2/), où les grandes régions sont suffisamment grande mais où, pour l'Albanie et l'Estonie, c'est beaucoup plus compliqué

On insère une image [de la même façon que d'habitude](http://developer.mozilla.org/en-US/Learn/HTML/Howto/Add_images_to_a_webpage) (avec un élément {{htmlelement("img")}} et un texte dans l'attribut {{htmlattrxref("alt",'img')}}). Si l'image n'est présente qu'à des fins de navigations, `alt` peut être laissé vide : `alt=""`, si les valeurs pour les différents {{htmlattrxref("alt",'area')}} sont bien renseignés dans les éléments {{htmlelement('area')}} que nous allons présenter.

Cette image contiendra une attribut spécial {{htmlattrxref("usemap","img")}}. Celui-ci doit désigner avec un nom unique et sans espace la carte imagée. C'est ce nom qu'on placera dans cet attribut `usemap` :

```html
<img
  src="image-map.png"
  alt=""
  usemap="#exemple-map-1" />
```

### Étape 2 : Activer les régions actives

Dans cette étape, nous allons remplir le code de l'élément {{htmlelement('map')}}. Celui-ci n'a besoin que d'un seul attribut : {{htmlattrxref("name","map")}} dont la valeur doit correspondre à celle utilisée pour l'attribut `usemap` vue juste avant :

```html
<map name="exemple-map-1">

</map>
```

Dans cet élément `<map>`, on aura besoin d'utiliser les éléments {{htmlelement('area')}}. Chacun de ces éléments correspondra à une région donnée. Afin que la navigation au clavier reste intuitive, il faudra veiller à ce que l'ordre de ces éléments HTML corresponde bien à l'ordre visuel des régions.

Les éléments `<area>` sont des éléments vides mais qui utilisent quatres attributs :

- {{htmlattrxref('shape','area')}}

  {{htmlattrxref('coords','area')}}

  - : `shape` (« forme » en anglais) prend l'une de ces quatre valeurs : `circle` (pour un cercle), `rect` (pour un rectangle), `poly` (pour un polygone) ou `default` (une zone `default` occupera l'image entière à laquelle on aura retiré les autres zones déjà définies). La forme choisie détermine les informations de coordonnées qui seront utiles dans `coords`.

    - Pour un cercle (`circle`) : on fournira les coordonnées X/Y du centre, suivies par la longueur du rayon.
    - Pour un rectange (`rect`) : on fournira les coordonnées X/Y des coins haut/gauche et bas/droite.
    - Pour un polygone (`poly`) : on fournira les coordonnées X/Y de chacun des sommets (et donc au moins six valeurs).

    Les coordonnées exprimées sont données en pixels CSS.

    Dans le cas où les définitions de certaines régions se chevauchent, ce sera l'ordre des zones qui donnera la priorité.

- {{htmlattrxref('href','area')}}
  - : Cet attribut est l'URL de la ressource vers laquelle on crée un lien. Elle peut être laissée vide si on ne souhaite pas créer de lien pour cette région.
- {{htmlattrxref('alt','area')}}

  - : Un attribut obligatoire qui indique aux personnes la direction ou le rôle du lien. Ce texte `alt` ne sera affiché que lorsque l'image ne sera pas disponible. Pour plus d'informations, voir [nos conseils pour écrire des hyperliens accessibles.](/fr/Apprendre/HTML/Comment/Créer_un_hyperlien#Écrire_des_liens_accessibles)

    Vous pouvez écrire `alt=""` si l'attribut `href` est vide _et_ que l'image entière possède déjà un attribut `alt` renseigné.

```html
<map name="exemple-map-1">
  <area shape="circle" coords="200,250,25"
    href="page-2.html" alt="exemple de cercle" />

  <area shape="rect" coords="10, 5, 20, 15"
    href="page-3.html" alt="exemple de rectangle" />

</map>
```

### Étape 3 : S'assurer que la carte fonctionne pour chacun

Ce n'est pas encore fini. Il est nécessaire de s'assurer que la carte fonctionne bien sur différents navigateurs et appareils. Vous pouvez essayer de naviguer en utilisant uniquement de clavier. Vous pouvez également désactiver les images.

Si votre carte imagée mesure plus de 240px environ, vous devrez réfléchir à comment l'ajuster pour que celle-ci soit adaptative. Il ne suffira pas de redimensionner l'image pour les écrans plus petits car les coordonnées qui resteraient les mêmes ne correspondraient plus aux différents points de l'image.

Si vous devez nécessairement utiliser de telles cartes, vous pouvez regarder [ce plugin jQuery réalisé par Matt Stow.](https://github.com/stowball/jQuery-rwdImageMaps) Dudley Storey illustre une méthode qui consiste à [utiliser SVG pour réaliser un effet de carte imagée](http://thenewcode.com/696/Using-SVG-as-an-Alternative-To-Imagemaps) ainsi qu'une bidouille pour les images matricielles avec [une combinaison de SVG](http://thenewcode.com/760/Create-A-Responsive-Imagemap-With-SVG).

## En savoir plus

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [Un éditeur de carte de zones en ligne (en anglais)](http://www.maschek.hu/imagemap/imgmap)
- [Des conseils sur comment gérer les cartes pour des clients mail (en anglais)](http://blog.goolara.com/2014/06/05/image-maps-revisited/)
