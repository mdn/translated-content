---
title: Les grilles CSS et l'accessibilité
slug: Web/CSS/Guides/Grid_layout/Accessibility
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le HTML est la couche de contenu d'un site web où nous créons des documents sémantiques et bien structurés. CSS est la couche de présentation&nbsp;; nous appliquons CSS pour créer, entre autres, la disposition souhaitée pour notre contenu. Les structures de grille bidimensionnelles sont définies à l'aide d'une [disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout).

Même si le HTML et le CSS modernes sont conçus pour permettre la création de contenus et de designs sémantiques et accessibles, il existe des moyens de _créer_ des problèmes d'accessibilité avec les grilles. Cet article examine les problèmes potentiels qui peuvent survenir et comment les éviter.

## Réordonner le contenu dans une grille CSS

Nous avons déjà vu dans ces guides que la disposition en grille CSS nous donne le pouvoir de réordonner le contenu de notre page en positionnant les éléments à l'aide du [placement basé sur les lignes des zones de modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement). Ce placement peut être effectué sans tenir compte de l'emplacement de l'élément dans le code source. Il existe également la propriété {{CSSxRef("order")}}, qui peut modifier la façon dont les éléments sont placés automatiquement. La propriété {{CSSxRef("grid-auto-flow")}} a une valeur `dense`, qui peut faire sortir visuellement les éléments de l'ordre du DOM.

La spécification de la disposition en grille CSS inclut une section [Réorganisation et accessibilité <sup>(angl.)</sup>](https://drafts.csswg.org/css-grid/#order-accessibility). L'introduction de cette section détaille ce que les navigateurs doivent faire lorsque le contenu est réordonné visuellement à l'aide de la disposition en grille&nbsp;:

> La disposition en grille offre aux auteur·ice·s un grand pouvoir de réorganisation du document. Cependant, cela ne remplace pas un ordre correct du code source du document. La propriété `order` et le placement sur la grille n'affectent pas l'ordre dans les médias non-visuels (comme la parole). De même, la réorganisation visuelle des éléments de la grille n'affecte pas l'ordre de parcours par défaut des modes de navigation séquentielle (comme le parcours des liens au clavier, voir par exemple [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex)).

Si vous réordonnez visuellement les éléments à l'aide d'une disposition en grille, cela ne change pas l'ordre des éléments si le contenu est lu par un lecteur d'écran ou un autre agent utilisateur de synthèse vocale. De plus, la réorganisation ne change pas l'ordre de tabulation. Cela signifie qu'une personne naviguant au clavier peut passer d'un lien en haut de la page à un lien en bas de la page si un élément réordonné se trouve ensuite dans l'ordre de tabulation.

La spécification avertit les auteur·ice·s (le terme CSSWG pour les développeur·euse·s web) de ne pas effectuer cette réorganisation.

> Les auteur·ice·s doivent utiliser `order` et les propriétés de placement sur la grille uniquement pour la réorganisation visuelle, et non logique, du contenu. Les feuilles de style qui utilisent ces fonctionnalités pour effectuer une réorganisation logique ne sont pas conformes.

Qu'est-ce que cela signifie pour la conception avec la disposition en grille dans la pratique&nbsp;?

### Une réorganisation visuelle et non logique

Chaque fois que vous réorganisez des éléments avec la disposition en grille — ou avec les boîtes flexibles — vous effectuez uniquement une _réorganisation visuelle_. Le code source sous-jacent contrôle des aspects tels que la synthèse vocale et l'ordre de tabulation du document. Voyons comment cela fonctionne avec un exemple.

Dans cet exemple, nous avons une grille contenant cinq éléments, chacun contenant un lien. Les éléments sont placés à l'aide des propriétés de placement basées sur les lignes. Nous avons positionné la boîte 1 sur la deuxième ligne de la grille, de sorte qu'elle apparaisse visuellement comme le quatrième élément de la liste. Si nous naviguons parmi les liens avec la touche tabulation, l'ordre de tabulation commence toujours par la boîte 1, car elle vient en premier dans le code source.

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.boite1 {
  grid-column: 1;
  grid-row: 2;
}
```

```html
<div class="enveloppe">
  <div class="boite boite1"><a href="">Un</a></div>
  <div class="boite boite2"><a href="">Deux</a></div>
  <div class="boite boite3"><a href="">Trois</a></div>
  <div class="boite boite4"><a href="">Quatre</a></div>
  <div class="boite boite5"><a href="">Cinq</a></div>
</div>
```

{{EmbedLiveSample("Une réorganisation visuelle et non logique", 500, 230)}}

Pour ce scénario, la spécification indique que, si la boîte 1 doit logiquement être placée ici, il faut alors modifier le document source plutôt que de réordonner les éléments grâce à la grille.

## Comment prendre en compte l'accessibilité avec une disposition en grille ?

À partir de la spécification, nous savons qu'il est nécessaire de garantir que notre document conserve l'ordre logique de son contenu. Comment devrions-nous aborder notre développement pour nous assurer que nous maintenons l'accessibilité pour les différent·e·s utilisateur·ice·s et les différentes manières dont ils interagissent avec nos pages&nbsp;?

- Commencer par un document structuré et accessible
  - : Une disposition en grille signifie que nous ne devons pas avoir besoin de modifier notre document source pour obtenir la disposition souhaitée. Par conséquent, le point de départ de votre page doit être un document source bien structuré et accessible. Cela donne souvent une bonne structure pour _vos appareils à plus petit écran également_. Si un·e utilisateur·ice fait défiler un long document sur mobile, les priorités de ce·tte utilisateur·ice correspondent souvent à ce qui doit être une priorité dans le document source.
- Créer une grille adaptative et responsable
  - : Avec une structure de document solide définie dans votre HTML, vous pouvez utiliser CSS pour ajouter votre mise en page par-dessus. Vous utilisez probablement des [requêtes de média](/fr/docs/Web/CSS/Guides/Media_queries) pour apporter des modifications en fonction des différentes tailles d'écran et des différents appareils, y compris la création de colonnes supplémentaires pour les écrans plus grands. La grille peut être très utile ici. Par exemple, les éléments dé-priorisés dans l'ordre source mobile peuvent être déplacés dans une barre latérale dans une disposition de bureau. L'essentiel ici est de continuer à tester. Un bon test consiste à _tabuler autour du document_. L'ordre a-t-il encore du sens&nbsp;? Vérifiez que vous ne vous retrouvez pas à sauter du haut vers le bas de la disposition de manière étrange. C'est un signe que vous devez résoudre quelque chose concernant la disposition.
- Retourner à la source
  - : Si, à un moment quelconque du processus de conception, vous vous retrouvez à utiliser la grille pour déplacer la position d'un élément, réfléchissez à la question de savoir si vous devez également revenir à votre document et apporter une modification à l'ordre logique. L'avantage d'utiliser la disposition en grille CSS est que vous devez pouvoir déplacer un élément dans la source pour correspondre à l'ordre logique, sans avoir besoin d'apporter de grandes modifications à votre mise en page. Il nous incombe, en tant que développeur·euse, de nous rappeler de revenir à notre source et de la mettre à jour pour maintenir l'ordre logique.

## Les grilles et le risque d'aplatir le document à outrance

Un autre problème à prendre en compte avec la disposition en grille CSS (et, dans une moindre mesure, avec les boîtes flexibles CSS), est la tentation _d'aplatir_ le balisage. Comme nous l'avons découvert, pour qu'un élément devienne un élément de la grille, il doit être un enfant direct du conteneur de la grille. Par conséquent, lorsqu'on a un élément HTML {{HTMLElement("ul")}} à l'intérieur d'un conteneur de grille, _ce_ `ul` devient un élément de la grille — les éléments enfants {{HTMLElement("li")}} ne le deviennent pas.

La valeur [`subgrid`](/fr/docs/Web/CSS/Guides/Grid_layout/Subgrid) de `grid-template-columns` et `grid-template-rows` résout ce problème. Elle permet à la grille d'être héritée par les éléments de la grille et transmise dans l'arborescence. Alternativement, définir `display: contents` sur un élément de la grille fait en sorte que les enfants de cet élément deviennent des éléments de la grille. Si vous définissez un élément sur `display: contents`, la boîte qu'il crée normalement disparaît et les boîtes des éléments enfants apparaissent comme si elles ont été élevées d'un niveau.

Commencer par un document bien structuré est un très bon moyen d'éviter les problèmes d'accessibilité.

## Voir aussi

- [Les boîtes flexibles et la rupture de la navigation au clavier <sup>(angl.)</sup>](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) et [(<i lang="en">Human After All</i>)&nbsp;: vidéo remixée sur le thème de l'accessibilité <sup>(angl.)</sup>](https://www.youtube.com/watch?v=spxT2CmHoPk) par Léonie Watson (2016)
- [Réorganisation du contenu et accessibilité avec la grille <sup>(angl.)</sup>](https://css-tricks.com/grid-content-re-ordering-and-accessibility/) par CSS-tricks (2019)
- [`display: contents` n'est pas une réinitialisation CSS <sup>(angl.)</sup>](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html) par Adrian Roselli (2024)
