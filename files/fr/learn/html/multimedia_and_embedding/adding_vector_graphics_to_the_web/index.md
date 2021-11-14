---
title: Ajouter des images vectorielles à une page web
slug: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
tags:
  - Graphics
  - Guide
  - HTML
  - Intermediate
  - Learn
  - SVG
translation_of: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
original_slug: Apprendre/HTML/Comment/Ajouter_des_images_vectorielles_à_une_page_web
---
{{LearnSidebar}}
{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

Les graphiques vectoriels sont les images adaptatives par excellence : légères et redimensionnables à volonté. Dans cet article, nous verrons comment intégrer des images vectorielles dans une page web.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Vous devriez au préalable savoir comment
        <a href="/fr/Apprendre/HTML/Write_a_simple_page_in_HTML"
          >créer un document HTML simple</a
        >
        et comment
        <a href="/fr/Apprendre/HTML/Comment/Ajouter_des_images_à_une_page_web"
          >insérer une image dans un document HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>Apprendre comment intégrer une image SVG dans une page web.</td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que SVG ? Qu'apporte-t-il ?

[SVG](/fr/docs/Web/SVG) est un langage basé sur {{glossary("XML")}} qui permet de décrire des images vectorielles. Commençons par définir ce qu'est une image vectorielle.

Certaines images (appelées images « _matricielles_ ») sont en fait des tableaux de carrés colorés (appelés pixels). Si on agrandit une image de ce type, à un moment, on arrive à distinguer ces carrés et une ligne diagonale deviendra un « escalier » crénelé.

Au contraire, **les images vectorielles** décrivent des lignes et des formes. On obtient donc une image qui est toujours nette, quelle que soit la résolution de l'écran ou l'agrandissement effectué sur l'image. Une ligne diagonale sera donc toujours lisse. Une seule image source suffit car il est possible de redimensionner l'image avec CSS plutôt qu'en utilisant `srcset` et `sizes`.

De plus, les fichiers dans lesquels on stocke les images vectorielles sont beaucoup plus légers que leurs homologues matriciels. Le texte utilisé dans une image vectorielle reste accessible (ce qui peut également être utilisé lors du référencement). Les images SVG se prêtent particulièrement bien aux animations scriptées car chaque composant des images sera représenté dans le {{glossary("DOM")}}.

Il est possible de coder le SVG à la main grâce à un éditeur de texte. En revanche, pour réaliser des images moyennement complexes, il est préférable d'utiliser un éditeur graphique dédié, comme [Inkscape](https://inkscape.org). Malheureusement, les téléphones ne permettent pas de prendre des photos qui soient des images vectorielles mais Inkscape possède une fonctionnalité appelée Trace Bitmap qui permet de passer d'une image matricielle à une image vectorielle. Attention à l'utilisation de fichiers SVG complexes, le traitement de ces fichiers par le navigateur pourra entraîner une baisse des performances.

> **Note :** Sous Inkscape, préférez le format « SVG simple » pour sauvegarder vos fichiers, cela permet d'économiser de l'espace. Pour plus d'informations sur la préparation, lire [cet article qui décrit comment préparer des fichiers SVG pour les utiliser sur le Web](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## La méthode rapide : {{htmlelement("img")}}

Vous pouvez simplement faire référence à un fichier SVG au sein de l'élément {{htmlelement("img")}}, comme vous l'auriez fait avec une image matricielle. Il faudra utiliser l'attribut `height` ou `width` (voire les deux si le fichier SVG ne possède pas de ratio inhérent). Si ce n'est pas déjà fait, vous pouvez [lire ce tutoriel sur `<img>`](/fr/Apprendre/HTML/Comment/Ajouter_des_images_à_une_page_web).

```html
<img
    src="equilateral.svg"
    alt="un triangle aux trois côtés égaux"
    height="87px"
    width="100px" />
```

### Avantages

- Rapide à mettre en œuvre, syntaxe très proche avec les images matricielles, texte alternatif disponible.
- Il est également possible de créer des hyperliens en plaçant l'élément `<img>` dans un élément {{htmlelement("a")}}.

### Inconvénients

- Pour les navigateurs historiques qui existaient avant la démocratisation de SVG (Internet Explorer 8, Android 2.3 et autres), on pourra utiliser une image PNG ou JPG dans l'attribut `src` en combinaison avec l'attribut {{htmlattrxref("srcset","img")}} :

  ```html
  <img src="equilateral.png" alt="un triangle dont tous les côtés sont égaux" srcset="equilateral.svg"/>
  ```

- Il est impossible de manipuler l'image avec JavaScript.
- Si vous souhaitez contrôler le contenu du SVG avec du code CSS, vous devez inclure les styles CSS dans le code SVG (les feuilles de style externes appelées depuis le SVG n'auront aucun effet).
- Il n'est pas possible de remettre l'image en forme avec les pseudo-classes CSS (par exemple `:focus`).

> **Note :**
>
> - Les images SVG peuvent tout à fait être utilisées comme images d'arrière-plan dans du CSS. Cette méthode possèdera les mêmes limites que celles qui viennent d'être décrites ici (pour la méthode où on intègre une image SVG via `<img>`).
>
>   ```css
>   background: url("image-de-secours.png");
>   background-image: url(image.svg);
>   background-size: contain;
>   ```
>
> - Si vos fichiers SVG ne s'affichent pas, cela peut vouloir dire que votre serveur n'est pas correctement paramétré. Dans ce cas, [cet article pourra vous aider à résoudre le problème](/fr/docs/Web/SVG/Tutoriel/Premiers_pas#Un_mot_sur_les_serveurs_Web).

## Comment inclure une image SVG directement dans le code du document

Il suffit d'ouvrir le fichier SVG avec un éditeur de texte, de copier le tout puis de le coller dans le document. Assurez-vous que votre fragment de code commence et finit avec la balise [`<svg>`](/fr/docs/Web/SVG/Element/svg). Voici un exemple très simple que vous pouvez directement copier-coller dans votre document :

```html
<svg width="300" height="200">
    <rect width="100%" height="100%" fill="green" />
</svg>
```

La balise `<svg>` n'a pas besoin des attributs `version`, `baseProfile` ou `xmlns`. Assurez-vous de bien retirer les déclarations d'espaces de noms (_namespace_) éventuellement introduites par Inkscape (en effet, HTML ne tolère que les espaces de noms XHTML, XLink, MathML et SVG). Si vous souhaitez optimiser votre fichier de façon plus approfondie, vous pouvez utiliser [SVG Optimiser](http://petercollingridge.appspot.com/svg_optimiser) ou [Scour](http://www.codedread.com/scour/).

### Avantages

- Placer le SVG à même le document permet d'économiser une requête HTTP, ce qui peut permettre de réduire le temps de chargement de la page.
- Vous pouvez ajouter des attributs `class` et `id` aux éléments SVG pour les mettre en forme grâce à CSS (directement au sein du SVG ou dans les règles liées au document HTML). En fait, [chaque attribut de présentation SVG](/fr/docs/Web/SVG/Attribute#Attributs_de_pr.C3.A9sentation) peut être utilisé comme propriété CSS.
- Cette approche est la seule qui permet d'utiliser des interactions CSS (telles que `:focus`) et des animations CSS. Il faut toutefois noter que les [animation SMIL](http://css-tricks.com/guide-svg-animations-smil/) fonctionneront avec toutes les méthodes décrites dans cet article.
- Avec cette méthode, les images SVG peuvent être utilisées comme hyperlien.

### Inconvénients

- Cette méthode n'est utilisable que si le SVG n'est utilisé qu'à un seul endroit. S'il faut le dupliquer, cela compliquera la maintenance et gaspillera de la mémoire.
- Chaque image SVG augmente la taille du fichier HTML.
- Le navigateur ne peut pas placer ces images SVG en cache comme il pourrait le faire avec d'autres ressources.
- Vous pouvez inclure un contenu à utiliser au cas où le navigateur ne supporte pas le SVG, grâce à {{svgelement("foreignObject")}}. Toutefois, les navigateurs qui supportent SVG téléchargeront quand même les ressources supplémentaires. Il faut donc décider si cette charge supplémentaire est nécessaire pour gérer les anciens navigateurs.

<!---->

## Comment intégrer un SVG dans un élément {{htmlelement("object")}}

Cette syntaxe est assez simple et permet également de définir un contenu à utiliser quand SVG n'est pas supporté :

```html
<object data="parallelogramme.svg"
    width="300"
    height="250"
    type="image/svg+xml">

<img src="parallelogramme.png"
    alt="un quadrilatère dont les côtés sont parallèles deux à deux" />

</object>
```

### Inconvénients

- Là aussi, les navigateurs qui supportent SVG téléchargeront également les ressources alternatives comme les images.
- Les éléments `<object>` ne peuvent pas être transformés en liens. Le SVG sera affiché mais ne sera pas déclenchable.
- Les éléments SVG peuvent être mis en forme avec CSS mais

  - le code SVG doit contenir les règles CSS (par exemple dans un élément `<style>`) ou
  - le fichier SVG doit contenir un lien vers la feuille de style externe. Pour créer ce lien, vous pouvez utiliser ce code, à placer dans le code SVG avant les autres balises :

    ```xml
    <?xml-stylesheet type="text/css" href="svg.css" ?>
    ```

    (Attention à ne pas utiliser ce code avec du SVG intégré directement dans le HTML car cela pourrait rendre la page non-fonctionnelle)

## Comment intégrer un SVG avec un élément {{htmlelement("iframe")}}

Vous pouvez ouvrir des images SVG dans votre navigateur de la même façon qu'on peut ouvrir des pages web. Intégrer des images SVG dans un élément `<iframe>` n'est donc qu'une variation de [l'intégration d'une page web dans une autre page web](/fr/Apprendre/HTML/Howto/Embed_a_webpage_within_another_webpage).

Voici un rapide exemple :

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
    <img src="triangle.png" alt="Un triangle avec trois côtés inégaux" />
</iframe>
```

`iframe` permet d'afficher un contenu de secours qui ne sera affiché que si le navigateur ne supporte pas les `iframe`.

De plus, sauf si le SVG et la page web actuelle ont la même {{glossary('origine')}}, il n'est pas possible d'utiliser JavaScript pour manipuler le SVG depuis la page web.

## En savoir plus

- {{htmlelement("iframe")}}
- {{htmlelement("object")}}
- {{htmlelement("img")}}
- [Le tutoriel SVG](/fr/docs/Web/SVG/Tutoriel/Premiers_pas) sur MDN
- [Conseils rapides pour des SVG adaptatifs (en anglais)](http://thenewcode.com/744/Making-SVG-Responsive)
- [Le tutoriel de Sara Soueidan sur les images SVG adaptatives (en anglais)](http://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Les bénéfices du format SVG pour l'accessibilité (en anglais)](http://www.w3.org/TR/SVG-access/)
- [Comment redimensionner des fichiers SVG (en anglais)](https://css-tricks.com/scale-svg/) (ce n'est pas aussi simple qu'avec les images matricielles)
- [La spécification SVG](http://www.w3.org/TR/SVG/)
