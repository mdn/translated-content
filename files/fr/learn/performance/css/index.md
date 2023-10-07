---
title: Optimisation des performances en CSS
slug: Learn/Performance/CSS
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/fonts", "Learn/Performance")}}

Peindre une page non stylisée, puis la repeindre une fois les styles analysés constituerait une mauvaise expérience pour l'utilisateur. C'est pourquoi les feuilles de style CSS bloquent le rendu, sauf si le navigateur sait que les feuilles de style CSS ne sont pas nécessaires. Le navigateur peut peindre la page une fois qu'il a téléchargé le CSS et construit le modèle objet CSS. Les navigateurs suivent un chemin de rendu spécifique : la peinture n'intervient qu'après la mise en page, qui intervient après la création de l'arbre de rendu, qui nécessite à son tour les arbres DOM et CSSOM. Pour optimiser la construction du CSSOM, il faut supprimer les styles inutiles, les minifier, les compresser et les mettre en cache, et répartir les CSS qui ne sont pas nécessaires au chargement de la page dans des fichiers supplémentaires afin de réduire le blocage du rendu CSS.

### Optimiser le temps de bloquage du rendu

Les CSS peuvent adapter les styles à des conditions particulières grâce aux requêtes média. Les requêtes média sont importantes pour une conception Web adaptative et nous aident à optimiser un chemin de rendu critique. Le navigateur bloque le rendu jusqu'à ce qu'il analyse tous ces styles, mais il ne bloque pas le rendu des styles qu'il sait qu'il n'utilisera pas, comme les feuilles de style d'impression. En divisant le CSS en plusieurs fichiers basés sur des requêtes média, vous pouvez empêcher le blocage du rendu pendant le téléchargement du CSS inutilisé. Pour créer un lien CSS non bloquant, déplacez les styles qui ne sont pas immédiatement utilisés, tels que les styles d'impression, dans un fichier distinct, ajoutez une balise HTML [`<link>`](/fr/docs/Web/HTML/Element/link), et ajoutez une requête média, indiquant dans ce cas qu'il s'agit d'une feuille de style d'impression.

```html
<link rel="stylesheet" href="styles.css" />
<!-- bloquant -->
<link rel="stylesheet" href="print.css" media="print" />
<!-- non bloquant -->
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (max-width: 480px)" />
<!-- non bloquant sur grand écran -->
```

Par défaut, le navigateur suppose que chaque feuille de style spécifiée bloque le rendu. Indiquez au navigateur quand la feuille de style doit être appliquée en ajoutant un attribut `media` avec la [requête média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries). Lorsque le navigateur voit une feuille de style, il sait qu'il n'a besoin de l'appliquer que pour un scénario spécifique, il télécharge quand même la feuille de style, mais ne rend pas le bloc. En séparant la feuille de style en plusieurs fichiers, le fichier principal bloquant le rendu, dans ce cas `styles.css`, est beaucoup plus petit, ce qui réduit le temps de blocage du rendu.

### Les animations sur le GPU

Les navigateurs sont déjà optimisés pour manipuler les animations CSS, ainsi que les propriétés d'animation qui ne provoquent pas de réorganisation soudaine du document (ces autres propriétés nécessiteront alors un nouveau rendu). Cette optimisation s'effectue en plaçant les éléments animés sur un autre fil d'exécution que l'on peut alors envoyer sur le GPU, bien plus rapide pour ce genre de tâche. Pour profiter de cette optimisation, il faut alors animer de préférence avec les propriétés de transformation 3D ([`transform: translateZ()`](/fr/docs/Web/CSS/transform), [`rotate3d()`](</fr/docs/Web/CSS/transform-function/rotate3d()>), etc.), de transformation 2D ainsi que les propriétés [`opacity`](/fr/docs/Web/CSS/opacity), [`position: fixed`](/fr/docs/Web/CSS/position), [`will-change`](/fr/docs/Web/CSS/will-change) et [`filter`](/fr/docs/Web/CSS/filter). D'autres éléments, parmi lesquels [`<video>`](/fr/docs/Web/HTML/Element/video), [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) ou encore [`<iframe>`](/fr/docs/Web/HTML/Element/iframe), fonctionnent aussi sur leur propre fil d'exécution. Cette technique permet donc de tirer profit de la vitesse d'exécution du GPU pour chaque élément géré sur un nouveau fil d'exécution, et permet d'obtenir de bien meilleures performances, en particulier sur mobile.

### La propriété `will-change`

La propriété CSS [`will-change`](/fr/docs/Web/CSS/will-change) indique au navigateur les propriétés CSS d'un élément qui sont susceptibles d'être modifiées par la suite (lors d'animations par exemple), afin que le navigateur puisse s'y préparer et optimiser ces changements. Cela permet principalement d'améliorer les performances en réalisant en amont des calculs parfois gourmands.

```css
will-change: opacity, transform;
```

### La propriété `font-display`

Insérée dans une règle [`@font-face`](/fr/docs/Web/CSS/@font-face), la propriété CSS [`font-display`](/fr/docs/Web/CSS/@font-face/font-display) permet de définir la logique de chargement et d'affichage des polices par le navigateur. Elle permet par exemple d'afficher le texte avec une police par défaut le temps que l'autre charge ou lorsque le chargement échoue. Cela permet de rendre le texte visible sans l'attente du chargement des polices, mais a pour défaut un flash brusque de changement de police une fois la ressource chargée.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

Dans cet exemple, la dernière règle `font-display: fallback;` permet justement d'afficher le texte avec une police par défaut en attendant le chargement de la police `someFont.woff`.

### La propriété `contain`

La propriété CSS [`contain`](/fr/docs/Web/CSS/contain) permet quant à elle de spécifier au navigateur qu'un élément et son contenu sont, dans la mesure du possible, indépendants du reste de l'arborescence du document. Ceci offre la possibilité au navigateur de recalculer la mise en page, le style, le rendu, la taille ou toute combinaison de ces propriétés seulement pour une portion de l'arborescence DOM, sans avoir à étendre ces calculs à la totalité de la page.

## Conclusion

Optimiser les performances en CSS revient ainsi à améliorer deux étapes cruciales et chronophages du rendu de page&nbsp;:

- d'une part le chargement des ressources CSS de la page (en compressant, en divisant le fichier, ou encore en l'enregistrant dans le cache par exemple)&nbsp;;
- d'autre part le rendu, en établissant une stratégie ingénieuse de chargement et d'interprétation des ressources, notamment en distinguant les ressources essentielles pour le rendu et les autres ressources annexes, qui peuvent attendre.

Enfin, les outils de développement du navigateur sont à votre disposition pour vous aider à cibler les étapes chronophages qui ralentissent le rendu de vos pages et gagner encore en efficacité, au prix parfois de quelques compromis.

{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/fonts", "Learn/Performance")}}

## Voir aussi

- [CSS animation performance](/fr/docs/Web/Performance/CSS_JavaScript_animation_performance)
