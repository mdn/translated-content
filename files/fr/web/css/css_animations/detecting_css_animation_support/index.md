---
title: Détecter la prise en charge des animations CSS
slug: Web/CSS/CSS_Animations/Detecting_CSS_animation_support
tags:
  - Avancé
  - CSS
  - Obsolete
translation_of: Web/CSS/CSS_Animations/Detecting_CSS_animation_support
original_slug: Web/CSS/Animations_CSS/Détecter_la_prise_en_charge_des_animations_CSS
---
{{CSSRef}}{{obsolete_header}}

> **Attention :** Les techniques décrites dans cet article sont obsolètes et peuvent être remplacées par l'utilisation de {{cssxref("@supports")}}.

Avec les animations CSS, on peut ajouter des animations sur du contenu, uniquement en utilisant CSS. Toutefois, cette fonctionnalité n'est parfois pas disponible et on souhaiterait alors pouvoir gérer ce cas et appliquer un effet similaire avec JavaScript. Cet article, [basé sur ce billet de Christian Heilmann](https://hacks.mozilla.org/2011/09/detecting-and-generating-css-animations-in-javascript/), illustre une technique pour détecter la prise en charge des animations CSS.

## Détecter la prise en charge des animations CSS

Ce code JavaScript permet de vérifier que les animations CSS peuvent être utilisées dans le navigateur :

```js
var animation = false,
  animationstring = 'animation',
  keyframeprefix = '',
  domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
  pfx  = '',
  elem = document.createElement('div');

if( elem.style.animationName !== undefined ) { animation = true; }

if( animation === false ) {
  for( var i = 0; i < domPrefixes.length; i++ ) {
    if( elem.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
      pfx = domPrefixes[ i ];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}
```

Pour commencer, on définit quelques variables et on part de l'hypothèse que les animations ne sont pas prises en charge en définissant `animation` avec `false`. On utilise la chaîne de caractères `animationstring` avec la valeur "animation" car celle-ci représentera le nom de la propriété qu'on souhaite définir. On crée également un tableau contenant les préfixes des différents navigateurs afin de pouvoir parcourir ces différents cas et qu'on utilisera avec la variable `pfx` qu'on définit pour le moment avec la chaîne vide.

Ensuite, on vérifie si la propriété CSS {{cssxref("animation-name")}}  on est définie sur l'élément représenté par la variable `elem`. Cela signifie alors que le navigateur prend en charge les animations CSS sans préfixe.

Si le navigateur ne prend pas en charge la version sans préfixe et que `animation` vaut toujours `false`, on parcourt les différents préfixes des principaux navigateurs et on modifie le nom de `AnimationName` de la même façon.

Une fois que ce code a fini son exécution, la valeur de `animation` sera `false` si les animations ne sont pas prises en charge ou `true` si `animation` est le bon nom et que le préfixe est correct. Pour les préfixes, on fera attention à la variation entre le _camelCase_ (ex. `MozAnimation`) et les tirets (`-moz-x`).

## Appliquer des animations avec la bonne syntaxe selon le navigateur

Maintenant qu'on sait que les animations CSS sont prises en charge, on peut appliquer des animations :

```js
if( animation === false ) {

  // on utilise JavaScript en fallback

} else {
  elem.style[ animationstring ] = 'rotate 1s linear infinite';

  var keyframes = '@' + keyframeprefix + 'keyframes rotate { '+
                    'from {' + keyframeprefix + 'transform:rotate( 0deg ) }'+
                    'to {' + keyframeprefix + 'transform:rotate( 360deg ) }'+
                  '}';

  if( document.styleSheets && document.styleSheets.length ) {

      document.styleSheets[0].insertRule( keyframes, 0 );

  } else {

    var s = document.createElement( 'style' );
    s.innerHTML = keyframes;
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( s );

  }

}
```

Ce code utilise la valeur d'`animation` : si c'est `false`, on utilise JavaScript pour recréer l'effet de l'animation. Sinon, on utilise JavaScript pour manipuler les animations CSS.

Pour définir la propriété d'animation, il suffit de mettre à jour la valeur dans la collection de style. Cependant, c'est un peu plus compliqué de gérer les étapes/_keyframes_ car elles n'utilisent pas la syntaxe CSS traditionnelle.

Pour définir les étapes de l'animation avec JavaScript, il faut les écrire dans une chaîne de caractères CSS. On définit alors une variable `keyframes` qu'on construit avec le préfixe à utiliser. Une fois construite, cette variable contient la description complète des différentes étapes nécessaires à la description.

Ensuite, il faut ajouter les étapes au CSS de la page. Pour commencer, on regarde s'il n'y a pas déjà une feuille de style associée au document et si c'est le cas, on ajoute la description des étapes dans la feuille de style (cf. les lignes 13 et 15 du fragment de code ci-avant).

S'il n'y aucune feuille de style pré-existante, on crée un nouvel élément {{HTMLElement("style")}} et on remplit son contenu avec la valeur des étapes. Ensuite, on insère ce nouvel élément {{HTMLElement("style")}} dans l'élément {{HTMLElement("head")}} du document ce qui ajoute la nouvelle feuille de style au document.

[Voir dans JSFiddle](https://jsfiddle.net/codepo8/ATS2S/8/embedded/result)

## Voir aussi

- [Les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
