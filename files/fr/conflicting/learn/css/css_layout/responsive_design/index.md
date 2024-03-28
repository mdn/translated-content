---
title: Développement web mobile
slug: conflicting/Learn/CSS/CSS_layout/Responsive_Design
original_slug: Web/Guide/Mobile
---

Cette page fournit un aperçu de certaines des techniques principales nécessaires pour concevoir des sites web qui fonctionneront bien sur les appareils mobiles. Si vous cherchez des informations sur le projet Firefox OS de Mozilla, consultez la page [Firefox OS](/fr/Firefox_OS). Des détails sur [Firefox pour Android](/fr/docs/Mozilla/Firefox_pour_Android) pourraient également vous intéresser.

Cette page est divisée en deux sections, [conception pour les appareils mobiles](#Conception_pour_les_appareils_mobiles) et [développement multinavigateur](#D.C3.A9veloppement_multinavigateur). Consultez également le guide de Jason Grlicky [mobile-friendliness](/fr/docs/Web_Development/Mobile/Mobile-friendliness) pour les développeurs web.

## Conception pour les appareils mobiles

Les appareils mobiles ont des caractéristiques physiques assez différentes des ordinateurs portables ou de bureau. Leurs écrans sont généralement plus petits, évidemment, mais ils changent aussi automatiquement l'orientation de l'écran entre portrait et paysage lorsque l'utilisateur les tourne. Ils disposent généralement d'écrans tactiles pour les manipuler. Des API comme la géolocalisation ou l'orientation de l'appareil ne sont pas toujours gérées sur un ordinateur ou y sont beaucoup moins utiles, alors qu'elles donnent aux utilisateurs mobiles de nouvelles manières d'interagir avec votre site.

### Gestion des petits écrans

Le [Responsive Web Design](/fr/docs/Développement_Web/Design_web_Responsive) est un terme pour un ensemble de techniques permettant à votre site web d'adapter sa disposition lorsque son environnement change ; en particulier la taille et l'orientation de l'écran. Parmi ces techniques :

- les mises en page CSS fluides, pour permettre à la page de s'adapter progressivement lorsque la taille de la fenêtre de navigation change ;
- l'utilisation de [media queries](/fr/docs/CSS/Media_queries) pour inclure des règles CSS conditionnelles appropriées pour la [largeur](/fr/docs/CSS/Media_queries#width) et la [hauteur](/fr/docs/CSS/Media_queries#height) de l'écran.

La [balise meta _viewport_](/fr/docs/Mozilla/Mobile/Balise_meta_viewport) indique au navigateur d'afficher votre site à l'échelle appropriée pour l'appareil de l'utilisateur.

### Gestion des écrans tactiles

Pour utiliser un écran tactile, vous devrez travailler avec les [évènements DOM Touch](/fr/docs/Web/Guide/DOM/Events/Touch_events). Vous n'aurez pas la possibilité d'utiliser la pseudo-classe [CSS :hover](/fr/docs/CSS/:hover) et devrez concevoir les éléments cliquables comme les boutons de manière à prendre en compte le fait que les doigts sont plus gros qu'un pointeur de souris. Consultez cet article concernant la [conception pour écrans tactiles](http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/).

Vous pouvez utiliser la media query [-moz-touch-enabled](/fr/docs/CSS/Media_queries#-moz-touch-enabled) pour charger un style CSS différent sur un appareil tactile.

### Optimisation des images

Pour aider les utilisateurs dont les appareils ont une bande passante faible ou coûteuse, vous pouvez optimiser les images en ne chargeant que celles qui sont appropriées pour la taille et la résolution de l'écran. Ceci peut se faire en CSS selon la [hauteur](/fr/docs/CSS/Media_queries#height), la [largeur](/fr/docs/CSS/Media_queries#width) et la [densité en pixels](/fr/docs/CSS/Media_queries#-moz-device-pixel-ratio).

Il est également possible d'utiliser des propriétés CSS pour concevoir des effets visuels comme des [dégradés](/fr/docs/CSS/Utilisation_de_dégradés_CSS) et des [ombres](/fr/docs/CSS/box-shadow) sans utiliser d'images.

### API mobiles

Enfin, vous pourrez tirer partir des nouvelles possibilités offertes par les appareils mobiles, comme l'[orientation](/fr/docs/WebAPI/Detecting_device_orientation) et la [géolocalisation](/fr/docs/Using_geolocation).

## Développement multinavigateur

### Écriture de code multinavigateur

Pour créer des sites web qui fonctionneront de manière acceptable sur différents navigateurs mobiles :

- Essayez d'éviter les fonctionnalités spécifiques à un navigateur, comme les propriétés CSS préfixées par le moteur de rendu.
- Si vous avez besoin de ces fonctionnalités, vérifiez si d'autres navigateurs disposent de leurs propres versions de ces fonctionnalités, et traitez-les de la même manière.
- Pour les navigateurs qui ne gèrent pas du tout ces fonctionnalités, fournissez une alternative acceptable.

Par exemple, si vous prévoyez un fond avec dégradé de couleurs sur une zone de texte avec une propriété préfixée comme `-webkit-linear-gradient`, il est préférable d'ajouter les autres versions préfixées de la propriété [linear-gradient](/fr/docs/CSS/linear-gradient). Si vous ne le faites pas, assurez-vous au moins que le fond par défaut offre un bon contraste avec le texte : de cette manière la page sera au moins utilisable dans un navigateur qui n'est pas visé par votre règle `linear-gradient`.

Consultez cette [liste des propriétés spécifiques à Gecko](/fr/docs/Web/CSS/Reference/Mozilla_Extensions), cette liste de [propriétés spécifiques à WebKit](/fr/docs/Web/CSS/Reference/Webkit_Extensions), ainsi que le tableau de Peter Beverloo des [propriétés spécifiques des moteurs de rendu des navigateurs](http://peter.sh/experiments/vendor-prefixed-css-property-overview/).

Vous pouvez vous aider d'outils comme [CSS Lint](http://csslint.net/) pour trouver des problèmes de ce genre dans votre code, et de préprocesseurs comme [SASS](http://sass-lang.com/) et [LESS](http://lesscss.org/) pour produire du code multinavigateur.

### Attention avec la détection d'agent utilisateur

Il est préférable que les sites web détectent des fonctionnalités spécifiques de l'appareil comme sa taille d'écran et ses capacités tactiles à l'aide des techniques listées ci-dessus, et s'y adaptent en conséquence. Mais parfois ce n'est pas possible et certains sites ont recours à la chaîne d'identification d'agent utilisateur (user agent) pour essayer de faire la distinction entre ordinateurs de bureau, tablettes et téléphones afin de servir un type de contenu différent à chaque type d'appareil.

Si vous faites cela, assurez-vous que votre algorithme est correct et que vous ne fournissez pas le mauvais type de contenu à un appareil parce que vous ne traitez pas la chaîne d'identification d'un navigateur particulier. Consultez ce [guide d'utilisation de la chaîne user agent pour déteminer le type d'appareil](/fr/docs/Browser_detection_using_the_user_agent#Mobile.2C_Tablet_or_Desktop).

### Test sur plusieurs navigateurs

Testez votre site web sur plusieurs navigateurs. Cela veut dire aussi tester sur plusieurs plateformes — au moins iOS et Android.

- testez Safari sur l'iPhone avec [iOS simulator](https://developer.apple.com/devcenter/ios/index.action)
- testez Opera et Firefox avec le [SDK Android](https://developer.android.com/sdk/index.html). Consultez ces instructions pour [lancer Firefox pour Android avec l'émulateur Android](https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator).
