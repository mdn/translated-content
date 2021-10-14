---
title: Les grilles CSS et l'accessibilité
slug: Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility
tags:
  - Accessibilité
  - CSS
  - CSS Grids
  - Grilles CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility
original_slug: Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_et_l_accessibilité
---
{{CSSRef}}

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_les_valeurs_logiques_les_modes_d_écriture", "Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_et_l_amélioration_progressive","Web/CSS/CSS_Grid_Layout")}}

Pour celles et ceux qui étaient présents aux premières lueurs du Web, les grilles CSS peuvent rappeler l'âge sombre où les tableaux HTML étaient utilisés pour la mise en forme des pages et où les cellules étaient utilisées pour diviser le contenu. Cette approche avait quelques avantages par rapport au positionnement CSS apparu après : on pouvait tirer parti de l'alignement et des colonnes créées dans un tableau. Il y a toutefois un inconvénient majeur : la mise en forme est fortement couplée à la structure du document, entraînant certains problèmes d'accessibilité. On pouvait par exemple découper le contenu dans le tableau afin d'obtenir la mise en forme souhaitée mais la structure de la page n'avait plus aucun sens lorsqu'elle était lue par un lecteur d'écran.

Aux débuts de CSS, on évoquait souvent CSS comme un outil pour séparer distinctement la mise en forme d'une part et le contenu du document d'autre part. L'objectif ultime était alors de pouvoir créer un document sémantique et structuré correctement puis appliquer une feuille de style CSS afin de créer la disposition voulue. Des sites tels que [CSS Zen Garden](https://www.csszengarden.com/) montrent comment obtenir différents styles grâce à CSS à partir d'un même document HTML.

[Les grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout) n'ont pas les mêmes problèmes que les tableaux : la structure de la grille est bien définie dans la feuille de style et pas dans le document. Si nécessaire, on peut ajouter un élément sans rôle sémantique. En théorie, une grille CSS nous aide à obtenir cette séparation conceptuelle entre la forme (le code CSS) et le sens (le document HTML) mais est-il possible d'aller trop loin avec cette idée ? Est-ce que les grilles CSS peuvent causer des problèmes d'accessibilité ?

## Réordonner le contenu dans une grille CSS

Au fur et à mesure de ces articles, nous avons vu que les grilles CSS nous permettent de réordonner le contenu d'une page de différentes façons. On peut utiliser la propriété {{cssxref("order")}} afin de modifier la façon dont les éléments sont placés automatiquement sur la grille. On peut aussi utiliser `grid-auto-flow: dense` pour que les éléments ne suivent pas l'ordre du DOM afin de réduire les espaces laissés. On peut aussi positionner les éléments sur des lignes ou sur des zones définies, quel que soit leur emplacement dans la structure du document source.

[La spécification](https://drafts.csswg.org/css-grid/#order-accessibility) contient une section qui aborde ce ré-ordonnancement et l'accessibilité. En introduction, on peut lire ce qui est attendu de la part des navigateurs lorsque le contenu est réordonné visuellement avec une grille CSS.

> La disposition en grille fournit une grande flexibilité aux auteurs pour replacer le contenu du document. Toutefois, cette flexibilité ne doit pas être utilisée pour pallier à un ordre incorrect du document source. Les propriétés des grilles relatives à l'ordre et au placement n'ont pas d'effet quant aux médias non-visuels (tels que la parole). De la même façon, le ré-ordonnancement visuel des éléments sur la grille n'a pas d'effet sur l'ordre de parcours séquentiel par défaut du document (notamment utilisé pour la navigation au clavier ou le parcours des liens, cf. [`tabindex`](/fr/docs/Web/HTML/Attributs_universels/tabindex)).

Si vous réordonnez les éléments du document grâce à une disposition sur une grille, cela ne changera pas l'ordre du contenu lu par un lecteur d'écran ou manipulé par un autre agent utilisateur. Cela ne modifiera pas non plus l'ordre des éléments lorsque ceux-ci sont parcourus au clavier. Une personne utilisant le clavier pourrait ainsi passer d'un coup de la partie haute de la grille à la partie basse si les liens ont été réordonnés.

La spécification prévient les auteurs (c'est-à-dire les développeurs web) et leur indique de ne pas appliquer ce ré-ordonnancement.

> Les auteurs doivent utiliser les propriétés d'ordre et de placement uniquement pour des raisons visuelles et non pour réordonner logiquement le contenu. Les feuilles de style qui utilisent ces fonctionnalités afin de réordonner les éléments sur le plan logique ne sont pas considérées comme des feuilles de style conformes.

Quelles sont les implications pratiques lorsqu'on conçoit une disposition avec une grille ?

### Un ré-ordonnancement visuel et non logique

La modification d'ordre appliquée par la grille (ou les boîtes flexibles) est uniquement _visuelle_. C'est toujours le document sous-jacent qui contrôle l'ordre utilisé par les agents utilisateur non-visuels. Voyons comment cela s'applique pour un exemple simple.

Dans cet exemple, on utilise une grille pour organiser un ensemble de boîtes qui contiennent des liens. On utilise les propriétés pour placer les éléments sur des lignes : la première boîte est placée sur la deuxième ligne. Visuellement, cette boîte apparaît désormais comme le quatrième élément de la liste. Mais si on utilise la touche tabulation pour naviguer au clavier parmi les liens, c'est toujours ce lien qui est en premier.

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column: 1;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="box box1"><a href="">Un</a></div>
  <div class="box box2"><a href="">Deux</a></div>
  <div class="box box3"><a href="">Trois</a></div>
  <div class="box box4"><a href="">Quatre</a></div>
  <div class="box box5"><a href="">Cinq</a></div>
</div>
```

{{EmbedLiveSample('Un_ré-ordonnancement_visuel_et_non_logique', '500', '330')}}

Pour ce scénario, la spécification indique que, si la boîte 1 doit logiquement être placée ici, il faut alors modifier le document source plutôt que de réordonner les éléments grâce à la grille.

## Comment prendre en compte l'accessibilité avec une disposition en grille ?

On voit à partir de la spécification qu'il faut maintenir l'ordre logique du contenu. Quelle approche choisir pendant le développement afin de s'assurer de respecter l'accessibilité pour les utilisateurs et que ceux-ci puissent interagir correctement avec la page, quels que soient les outils utilisés ?

- Démarrer avec un document structuré et accessible
  - : Une disposition en grille ne doit pas nécessiter de changement dans la structure du document pour obtenir la disposition souhaitée. Aussi, pour commencer, le document qui forme la page doit être bien structuré et accessible. Comme indiqué dans la spécification, cette structure de base doit également fournir une bonne structure pour les petits écrans. Si un utilisateur fait défiler le site sur un appareil mobile, les éléments qu'il doit voir en premier sont généralement ceux qui sont au début du document dans la source.
- Créer une grille adaptative correcte
  - : Grâce à cette structure de base claire, on peut complexifier la disposition. Il est probable qu'on veuille ajouter des [requêtes de média](/fr/docs/Web/CSS/Requêtes_média) afin de créer des colonnes supplémentaires et gérer différentes tailles d'écran et différents appareils. Une grille peut s'avérer très utile pour déplacer les éléments qui étaient moins prioritaires sur mobile afin de construire la disposition d'un écran plus large. Une bonne stratégie consiste à tester chaque disposition, simplement en utilisant la navigation avec la touche tabulation : est-ce que cet ordre est pertinent ? est-ce qu'on ne passe pas d'un coup du haut en bas de la page ?
- Revenir à la source
  - : Si, pendant cette phase de conception, vous avez besoin de replacer un élément avec la grille, analysez s'il est nécessaire de replacer cet élément dans l'ordre logique du document. Les grilles CSS ont cela de pratique qu'elles permettent de déplacer un élément dans le document source sans qu'il soit nécessaire de modifier profondément les règles de style. C'est un atout considérable par rapport aux dispositions construites avec {{cssxref("float")}} où la structure et l'ordre du document jouaient un rôle fondamental. Cela demande toutefois de garder à l'esprit qu'il faut revenir à la source pour mettre à jour et maintenir l'ordre logique.

## Les grilles et le risque d'aplatir le document à outrance

On peut rencontrer un autre problème avec les grilles CSS (et, dans une moindre mesure, avec les boîtes flexibles) : vouloir aplatir la structure du document. Comme nous avons pu le voir, pour qu'un objet appartienne à la grille, il faut que ce soit un fils direct du conteneur de la grille. Ainsi, si on place un élément {{HTMLElement("ul")}} dans une grille, c'est _cet_ `ul` qui devient un objet de la grille, les éléments {{HTMLElement("li")}} qui en dépendent n'en sont pas.

Si la valeur `subgrid` est implémentée pour la propriété {{cssxref("display")}}, on pourra alors indiquer que ces fils participent à la grille en tant que _sous-grille_. Actuellement, la seule solution à notre disposition est d'utiliser `display: contents` afin que la boîte générée par l'élément `ul` disparaisse de la structure graphique. Pour plus d'informations à ce sujet, vous pouvez consulter [l'article sur les liens entre les grilles et les autres méthodes de disposition](/fr/docs/Web/CSS/CSS_Grid_Layout/Modèle_de_grille_et_autres_modèles_de_disposition) et notamment la section sur [`display: contents`](/fr/docs/Web/CSS/CSS_Grid_Layout/Modèle_de_grille_et_autres_modèles_de_disposition#Utiliser_une_grille_et_display_contents).

Étant donné que la prise en charge de `display: contents` pour les différents navigateurs est actuellement limitée et que les sous-grilles n'existent pas encore, on peut être tenté d'aplatir la structure du document lorsqu'on utilise les grilles CSS pour créer la disposition d'un document. Par exemple, pour une liste, identifiée sémantiquement comme telle avec `ul`, on pourrait plutôt utiliser des éléments {{HTMLElement("div")}} qui seraient des éléments directement situés sous le conteneur qui a `display: grid`. Mieux vaut donc être conscient de cette tentation et construire un document sans détricoter la structure. En commençant par créer un document structuré, on se rend plus facilement compte de la sémantique perdue si on retire des éléments pour une simple question visuelle.

## Approfondir la question

Il n'existe pas encore beaucoup de contenu relatif à l'accessibilité et au modèle de grille CSS. La plupart des problèmes rencontrés s'approchent de ceux qu'on rencontre avec les boîtes flexibles (qui permettent également de réordonner le contenu avec des propriétés comme {{cssxref("flex-direction")}} et {{cssxref("order")}}).

Le concept selon lequel l'ordre d'affichage des éléments doit suivre l'ordre des éléments dans le document est décrit dans _WCAG Techniques for Success Criteria – [Technique C27](https://www.w3.org/TR/WCAG20-TECHS/C27.html)_ (en anglais).

Pour construire votre réflexion sur ce sujet, je vous invite à lire _[Flexbox & the Keyboard Navigation Disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)_ écrit par Léonie Watson. [La vidéo de la présentation de Léonie à ffconf](https://www.youtube.com/watch?v=spxT2CmHoPk) est aussi utile pour mieux comprendre comment les lecteurs d'écran utilisent la représentation visuelle des objets en CSS. Adrian Roselli a également publié [un article sur l'ordre de la navigation au clavier dans les différents navigateurs](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) bien que cet article ait été rédigé avant l'implémentation des grilles CSS dans Firefox.

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_les_valeurs_logiques_les_modes_d_écriture", "Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_et_l_amélioration_progressive","Web/CSS/CSS_Grid_Layout")}}
