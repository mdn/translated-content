---
title: Utiliser la position par ancres CSS
short-title: Utiliser la position par ancres
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Le module **position par ancres CSS** définit des fonctionnalités permettant d'attacher des éléments les uns aux autres. On peut définir des éléments comme **éléments d'ancre** et **éléments positionnés par ancre**. Les éléments positionnés par ancre peuvent être liés à des éléments d'ancre. Les éléments positionnés par ancre peuvent alors voir leur taille et leur position définies par rapport à la taille et à l'emplacement des éléments d'ancre auxquels ils sont liés.

Le positionnement par ancres CSS fournit également des mécanismes uniquement en CSS pour définir plusieurs positions alternatives pour un élément positionné par ancre. Par exemple, si une info-bulle est ancrée à un champ de formulaire mais risquerait d'être affichée hors écran avec ses paramètres de position par défaut, le navigateur peut tenter de la rendre dans une autre position suggérée pour qu'elle soit visible à l'écran, ou, si vous le souhaitez, la masquer complètement.

Cet article explique les concepts fondamentaux du positionnement par ancres et montre comment vous servir, à un niveau basique, des fonctionnalités d'association, de positionnement et de dimensionnement du module. Nous avons inclus des liens vers des pages de référence contenant des exemples supplémentaires et des détails de syntaxe pour chaque concept abordé ci-dessous. Pour des informations sur la définition de positions alternatives et le masquage des éléments positionnés par ancre, voir le guide [Options de repli et masquage conditionnel pour le débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Concepts fondamentaux

Il est très courant de vouloir attacher ou lier un élément à un autre. Par exemple&nbsp;:

- Les messages d'erreur qui s'affichent à côté des contrôles de formulaire.
- Les info-bulles ou boîtes d'information qui apparaissent à côté d'un élément d'interface pour fournir plus d'informations.
- Les boîtes de dialogue de paramètres ou d'options qui permettent de configurer rapidement des éléments d'interface.
- Les menus déroulants ou fenêtres contextuelles qui apparaissent à côté d'une barre de navigation ou d'un bouton associé.

Les interfaces modernes demandent souvent à placer du contenu — souvent réutilisable et généré dynamiquement — par rapport à un élément d'ancre. Créer ce type de cas d'usage serait assez simple si l'élément auquel attacher (appelé **élément d'ancre**) était toujours au même endroit dans l'interface et si l'élément attaché (appelé **élément positionné par une ancre** ou simplement **élément positionné**) pouvait toujours être placé juste avant ou après dans l'ordre du code source. Cependant, ce n'est que rarement le cas.

La position des éléments positionnés par rapport à leur élément d'ancre doit être maintenue et ajustée lorsque l'élément d'ancre se déplace ou change de configuration (par exemple lors d'un défilement, d'un changement de taille de la fenêtre, d'un glisser-déposer, etc.). Par exemple, si un élément comme un champ de formulaire s'approche du bord de la fenêtre, son info-bulle peut se retrouver hors écran. En général, il faut lier l'info-bulle à son contrôle de formulaire et veiller à ce qu'elle reste entièrement visible tant que le champ de formulaire est affiché, en la déplaçant automatiquement si besoin. Vous avez peut-être remarqué ce comportement par défaut dans votre système d'exploitation lorsque vous ouvrez un menu contextuel (<kbd>Ctrl</kbd> + clic) sur votre ordinateur.

Historiquement, associer un élément à un autre et modifier dynamiquement la position et la taille d'un élément positionné selon la position de l'ancre nécessitait du JavaScript, ce qui ajoutait de la complexité et des problèmes de performance. Ce n'était pas garanti de fonctionner dans toutes les situations. Les fonctionnalités définies dans le module [Position par ancres CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) permettent de réaliser ces cas d'usage de façon performante et déclarative avec CSS (et HTML) au lieu de JavaScript.

## Associer des éléments d'ancre et positionnés

Pour associer un élément à une ancre, il faut d'abord déclarer quel élément est l'ancre, puis définir quel(s) élément(s) positionné(s) associer à cette ancre. Cela crée une référence d'ancre entre les deux. Cette association peut être créée explicitement via CSS ou implicitement.

### Associer explicitement une ancre en CSS

Pour déclarer un élément comme ancre en CSS, il faut définir un nom d'ancre avec la propriété {{CSSxRef("anchor-name")}}. Le nom d'ancre doit être un {{CSSxRef("dashed-ident")}}. Dans cet exemple, nous définissons aussi la largeur ({{CSSxRef("width")}}) de l'ancre à `fit-content` pour obtenir une petite ancre carrée, ce qui montre mieux l'effet d'ancrage.

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  width: fit-content;
}
```

La conversion d'un élément en élément positionné par ancre nécessite deux étapes&nbsp;: il doit être absolument ou fixement [positionné](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning) à l'aide de la propriété {{CSSxRef("position")}}. L'élément positionné a ensuite sa propriété {{CSSxRef("position-anchor")}} définie sur la valeur de la propriété `anchor-name` de l'élément d'ancre pour associer les deux&nbsp;:

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
}
```

Nous allons appliquer le CSS ci-dessus au code HTML suivant&nbsp;:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>
```

Cela s'affichera ainsi&nbsp;:

{{EmbedLiveSample("Associer explicitement une ancre en CSS", "100%", 120)}}

L'ancre et la boîte d'information sont maintenant associées, mais pour le moment vous devrez nous croire sur parole. Elles ne sont pas encore attachées l'une à l'autre — si vous déplaciez l'ancre et la mettiez ailleurs sur la page, elle bougerait seule, laissant la boîte d'information au même endroit. Vous verrez l'attachement réel en action lorsque nous verrons [le positionnement des éléments basé sur la position de l'ancre](#positionner_des_éléments_par_rapport_à_leur_ancre).

### Associer implicitement une ancre

Dans certains cas, une référence d'ancre implicite sera créée entre deux éléments, en raison de la nature sémantique de leur relation&nbsp;:

- Lors de l'utilisation de [l'API Popover](/fr/docs/Web/API/Popover_API) pour associer une fenêtre contextuelle à un contrôle, une référence d'ancre implicite est créée entre les deux. Cela peut se produire lorsque&nbsp;:
  - Vous associez déclarativement une fenêtre contextuelle à un contrôle à l'aide des attributs [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget) et [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) ou des attributs [`commandfor`](/fr/docs/Web/HTML/Reference/Elements/button#commandfor) et `id`.
  - Vous associez de façon programmatique une action de fenêtre contextuelle comme {{DOMxRef("HTMLElement.showPopover", "showPopover()")}} à un contrôle en utilisant l'option `source`.
- Un élément {{HTMLElement("select")}} et son sélecteur déroulant utilisent la fonctionnalité de [sélecteur personnalisable](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select) via la propriété {{CSSxRef("appearance")}} avec la valeur `base-select`. Dans ce cas, une relation implicite d'invocateur de fenêtre contextuelle est créée entre les deux, ce qui signifie aussi qu'ils auront une référence d'ancre implicite.

> [!NOTE]
> Les méthodes ci-dessus associent une ancre à un élément, mais ils ne sont pas encore attachés. Pour les attacher ensemble, l'élément positionné doit être positionné par rapport à son ancre, ce qui se fait avec CSS.

### Supprimer l'association à une ancre

Si vous souhaitez supprimer une association à une ancre explicite précédemment créée entre un élément d'ancre et un élément positionné, vous pouvez faire l'une des choses suivantes&nbsp;:

1. Définir la valeur de la propriété `anchor-name` de l'ancre sur `none`, ou sur un autre veleur `<dashed-ident>`, si vous souhaitez qu'un autre élément soit ancré à elle.
2. Définir la propriété `position-anchor` de l'élément positionné sur `none`, ou sur un nom d'ancre qui n'existe pas dans le document courant, comme `--not-an-anchor-name`.

Dans le cas des associations d'ancre implicites, vous devrez utiliser la seconde méthode — la première ne fonctionne pas. Cela s'explique par le fait que l'association est contrôlée en interne et que vous ne pouvez pas supprimer le `anchor-name` via CSS.

Par exemple, pour empêcher le sélecteur d'un élément `<select>` personnalisable d'être ancré à l'élément `<select>` lui-même, vous pouvez utiliser la règle suivante&nbsp;:

```css
::picker(select) {
  position-anchor: none;
}
```

## Déterminer la portée des ancres

Lorsque plusieurs éléments d'ancre reçoivent la même valeur {{CSSxRef("anchor-name")}} et qu'un élément positionné a cette valeur comme propriété {{CSSxRef("position-anchor")}}, l'élément positionné sera associé au dernier élément d'ancre dans l'ordre du code source avec cette valeur de `anchor-name`.

Par exemple, si un document contient plusieurs composants répétés, chacun avec un élément positionné attaché à une ancre, tous les éléments positionnés seront ancrés à la dernière ancre de la page, sauf si chaque composant utilise un nom d'ancre différent. Ce n'est probablement pas le comportement souhaité.

La propriété {{CSSxRef("anchor-scope")}} permet de corriger ce problème en limitant la visibilité, ou «&nbsp;portée&nbsp;», d'une valeur `anchor-name` à un sous-arbre spécifique. Le résultat est que chaque élément positionné ne peut être ancré qu'à un élément du même sous-arbre que l'élément ayant la portée définie.

- `anchor-scope: all` définit la portée de sorte que _toute_ valeur de `anchor-name` définie dans le sous-arbre ne puisse être liée que par des éléments positionnés dans ce même sous-arbre.
- `anchor-scope: --my-anchor, --my-anchor2` définit la portée de sorte que les valeurs de `anchor-name` indiquées, lorsqu'elles sont définies dans le sous-arbre, ne puissent être liées que par des éléments positionnés dans ce même sous-arbre.
- `anchor-scope: none` est la valeur par défaut&nbsp;; cela signifie qu'aucune portée d'ancre n'est définie.

Par exemple, supposons que vous ayez plusieurs ancres et des éléments HTML {{HTMLElement("div")}} positionnés par ancre à l'intérieur de conteneurs {{HTMLElement("section")}}&nbsp;:

```html live-sample___anchor-scope
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positionné 1</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positionné 2</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positionné 3</div>
</section>
```

Nous transformons chaque `<div>` `anchor` en élément d'ancre en lui donnant un `anchor-name` `--my-anchor`. Nous positionnons ensuite chaque `<div>` `positioned` par rapport à un élément ayant le nom d'ancre `--my-anchor` en leur appliquant un positionnement absolu, une valeur de `position-anchor` à `--my-anchor` et une valeur {{CSSxRef("position-area")}} à `right`. Enfin, nous définissons la portée d'ancre de chaque conteneur `<section>` avec `anchor-scope: --my-anchor`&nbsp;:

```css hidden live-sample___anchor-scope
html {
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.scoped {
  padding: 20px;
  background: #eeeeee;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positioned {
  background: orange;
  width: fit-content;
  padding: 3px;
}
```

```css live-sample___anchor-scope
.anchor {
  anchor-name: --my-anchor;
}

.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: right;
}

.scoped {
  anchor-scope: --my-anchor;
}
```

Cela donne le comportement de positionnement suivant&nbsp;:

{{EmbedLiveSample("anchor-scope", "100%", 150)}}

Chaque élément positionné est positionné par rapport à l'ancre à l'intérieur du même élément `<section>`. Cela s'explique par le fait que chaque élément `<section>` a une propriété `anchor-scope` définie à `--my-anchor`&nbsp;; les éléments positionnés à l'intérieur de chaque conteneur à portée ne peuvent donc être positionnés que par rapport aux ancres `my-anchor` à l'intérieur du même conteneur.

Si nous ne définissions pas `anchor-scope: --my-anchor` sur les conteneurs, tous les éléments positionnés seraient positionnés par rapport à la dernière ancre de la page.

## Positionner des éléments par rapport à leur ancre

Comme nous l'avons vu précédemment, associer un élément positionné à une ancre n'est pas très utile en soi. L'objectif est de placer l'élément positionné par rapport à son élément d'ancre associé. Cela se fait soit en appliquant une valeur de [fonction CSS `anchor()`](#utiliser_les_propriétés_dencart_avec_des_valeurs_de_fonction_anchor) sur une [propriété d'inset](/fr/docs/Glossary/Inset_properties), en [définissant une `position-area`](#définir_une_position-area), ou en centrant l'élément positionné avec la valeur de placement [`anchor-center`](#centrer_sur_lancre_avec_anchor-center).

> [!NOTE]
> Le positionnement par ancres CSS fournit également des mécanismes pour définir des positions de repli si la position par défaut de l'élément positionné le fait déborder de la fenêtre d'affichage. Voir le guide [Options de repli et masquage conditionnel pour le débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) pour plus de détails.

> [!NOTE]
> L'élément d'ancre doit être un nœud DOM visible pour que l'association et le positionnement fonctionnent. S'il est masqué (par exemple via [`display: none`](/fr/docs/Web/CSS/Reference/Properties/display#none)), l'élément positionné sera positionné par rapport à son ancêtre positionné le plus proche. Nous expliquons comment masquer un élément positionné par ancre lorsque son ancre disparaît dans [Masquage conditionnel avec `position-visibility`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#masquer_conditionnellement_des_éléments_positionnés_avec_une_ancre).

### Utiliser les propriétés d'encart avec des valeurs de fonction `anchor()`

Les éléments positionnés de façon absolue ou fixe sont positionnés explicitement en définissant des valeurs de {{CSSxRef("length")}} ou de {{CSSxRef("percentage")}} sur les {{Glossary("inset properties", "propriétés d'inset")}}. Avec `position: absolute`, cette valeur d'encart correspond à une distance absolue par rapport aux bords de l'ancêtre positionné le plus proche. Avec `position: fixed`, la valeur d'encart correspond à une distance absolue par rapport à la fenêtre d'affichage.

Le positionnement par ancres CSS change ce paradigme, permettant de placer les éléments positionnés par ancre par rapport aux bords de leur(s) ancre(s) associée(s). Le module définit la fonction [`anchor()`](/fr/docs/Web/CSS/Reference/Values/anchor), qui est une valeur valide pour chacune des propriétés d'encart. Lorsqu'elle est utilisée, la fonction définit la valeur d'encart comme une distance absolue par rapport à l'élément d'ancre, en définissant l'élément d'ancre, le côté de l'ancre auquel l'élément positionné est positionné, et la distance à partir de ce côté.

Les composants de la fonction sont les suivants&nbsp;:

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : La valeur de la propriété {{CSSxRef("anchor-name")}} de l'élément d'ancre par rapport auquel vous souhaitez positionner le côté de l'élément. Il s'agit d'une valeur `<dashed-ident>`. Si elle est omise, l'**ancre par défaut** de l'élément est utilisée. Il s'agit de l'ancre référencée dans sa propriété {{CSSxRef("position-anchor")}}, ou associée à l'élément via l'attribut HTML non standard [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor).
    > [!NOTE]
    > Définir un `<anchor-name>` positionne l'élément par rapport à cette ancre, mais n'associe pas l'élément à l'ancre. Vous pouvez positionner les côtés d'un élément par rapport à plusieurs ancres en définissant [différentes valeurs `<anchor-name>`](/fr/docs/Web/CSS/Reference/Values/anchor#positionner_un_élément_par_rapport_à_plusieurs_ancres) dans différentes fonctions `anchor()` sur le même élément, mais l'élément positionné n'est associé qu'à une seule ancre.

- [`<anchor-side>`](/fr/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : Définit la position par rapport à un côté, ou à plusieurs côtés, de l'ancre. Les valeurs valides incluent le centre (`center`) de l'ancre, les côtés physiques (`top`, `left`, etc.) ou logiques (`start`, `self-end`, etc.) de l'ancre, ou un pourcentage (`<percentage>`) entre le début (`0%`) et la fin (`100%`) de l'axe de la propriété d'encart sur laquelle la fonction `anchor()` est appliquée. Si une valeur utilisée n'est pas [compatible](/fr/docs/Web/CSS/Reference/Values/anchor#compatibilité_des_propriétés_dencart_et_des_valeurs_anchor-side) avec la propriété d'encart sur laquelle la fonction `anchor()` est appliquée, la valeur de repli est utilisée.

- `<fallback>`
  - : Une valeur {{CSSxRef("length-percentage")}} qui définit la distance à utiliser comme valeur de repli si l'élément n'est pas positionné de façon absolue ou fixe, si la valeur `<anchor-side>` utilisée n'est pas compatible avec la propriété d'encart sur laquelle la fonction `anchor()` est appliquée, ou si l'élément d'ancre n'existe pas.

La valeur retournée par la fonction `anchor()` est une longueur calculée en fonction de la position de l'ancre. Si vous définissez une longueur ou un pourcentage directement sur la propriété d'encart d'un élément positionné par ancre, il sera positionné comme s'il n'était pas lié à l'élément d'ancre. Ce comportement est identique si la valeur `<anchor-side>` n'est pas compatible avec la propriété d'encart sur laquelle elle est appliquée et que la valeur de repli est utilisée. Ces deux déclarations sont équivalentes&nbsp;:

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

Les deux placeront l'élément positionné à `50px` au-dessus du bas de l'ancêtre positionné le plus proche de l'élément (si présent) ou du bloc englobant initial.

Les paramètres `anchor()` les plus courants que vous utiliserez concerneront un côté de l'ancre par défaut. Vous ajouterez aussi souvent une marge ({{CSSxRef("margin")}}) pour créer un espacement entre le bord de l'ancre et l'élément positionné, ou utiliserez `anchor()` dans une fonction `calc()` pour ajouter cet espacement.

Par exemple, cette règle positionne le bord gauche de l'élément positionné au ras du bord droit de l'élément d'ancre, puis ajoute un `margin-left` pour créer un espace entre les bords&nbsp;:

```css
.positionedElement {
  left: anchor(right);
  margin-left: 10px;
}
```

La valeur retournée par une fonction `anchor()` est une longueur. Cela signifie que vous pouvez l'utiliser dans une fonction {{CSSxRef("calc()")}}. Cette règle positionne le bord logique de fin de bloc de l'élément positionné à `10px` du bord logique de début de bloc de l'élément d'ancre, en ajoutant l'espacement avec la fonction `calc()` pour éviter d'ajouter une marge&nbsp;:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### Exemple d'utilisation de `anchor()`

Voyons un exemple de `anchor()` en action. Nous avons utilisé le même HTML que dans les exemples précédents, mais avec du texte de remplissage ajouté au-dessus et en dessous pour forcer le contenu à déborder de son conteneur et à défiler. Nous donnons également à l'élément d'ancre le même `anchor-name` que dans les exemples précédents&nbsp;:

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

body {
  width: 50%;
  margin: 0 auto;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
}
```

La boîte d'information est associée à l'ancre via le nom d'ancre et reçoit un positionnement fixe. En incluant les propriétés {{CSSxRef("inset-block-start")}} et {{CSSxRef("inset-inline-start")}} (qui sont équivalentes à {{CSSxRef("top")}} et {{CSSxRef("left")}} dans les modes d'écriture horizontaux de gauche à droite), nous l'attachons à l'ancre. Nous ajoutons une `margin` à la boîte d'information pour créer un espace entre l'élément positionné et son ancre&nbsp;:

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --my-anchor;
  position: fixed;
  inset-block-start: anchor(end);
  inset-inline-start: anchor(self-end);
  margin: 5px 0 0 5px;
}
```

Examinons plus en détail les déclarations de positionnement des propriétés d'encart&nbsp;:

- `inset-block-start: anchor(end)`&nbsp;: place le bord de début de bloc de l'élément positionné sur le bord de fin de bloc de l'ancre, calculé avec la fonction `anchor(end)`.
- `inset-inline-start: anchor(self-end)`&nbsp;: place le bord de début de ligne de l'élément positionné sur le bord de fin de ligne de l'ancre, calculé avec la fonction `anchor(self-end)`.

Cela donne le résultat suivant&nbsp;:

{{EmbedLiveSample("Exemple d'utilisation de `anchor()`", "100%", 250)}}

L'element positionne se trouve a `5px` en dessous et a `5px` a droite de l'element d'ancre. Si vous faites defiler le document vers le haut ou vers le bas, l'element positionne conserve sa position par rapport a l'element d'ancre — il est fixe a l'element d'ancre, et non a la fenetre d'affichage.

### Définir une `position-area`

La propriété {{CSSxRef("position-area")}} offre une alternative à la fonction `anchor()` pour positionner des éléments par rapport à des ancres. La propriété `position-area` fonctionne selon le concept d'une grille de 3×3 cases, où l'élément d'ancre occupe la case centrale. Vous pouvez utiliser la propriété `position-area` pour placer l'élément positionné dans l'une des neuf cases, ou le faire s'étendre sur deux ou trois cases.

![La grille position-area, comme décrite ci-dessous](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Les cases de la grille sont réparties en lignes et en colonnes&nbsp;:

- Les trois lignes sont représentées par les valeurs physiques `top`, `center` et `bottom`. Elles ont aussi des équivalents logiques comme `start`, `center` et `end`, et des équivalents de coordonnées comme `y-start`, `center` et `y-end`.
- Les trois colonnes sont représentées par les valeurs physiques `left`, `center` et `right`. Elles ont aussi des équivalents logiques comme `start`, `center` et `end`, et des équivalents de coordonnées comme `x-start`, `center` et `x-end`.

Les dimensions de la case centrale sont définies par le [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) de l'élément d'ancre, tandis que la distance entre la case centrale et le bord extérieur de la grille est définie par le bloc englobant de l'élément positionné.

Les valeurs de la propriété `position-area` sont composées d'une ou deux valeurs selon les lignes et colonnes décrites ci-dessus, avec des options d'étendue pour définir la région de la grille où l'élément doit être positionné.

Par exemple&nbsp;:

Vous pouvez définir deux valeurs pour placer l'élément positionné dans une case précise de la grille&nbsp;:

- `top left` (équivalent logique `start start`) place l'élément positionné dans la case en haut à gauche.
- `bottom center` (équivalent logique `end center`) place l'élément positionné dans la case du bas au centre.

Vous pouvez définir une valeur de ligne ou de colonne suivie d'une valeur `span-*`. La première valeur indique la ligne ou la colonne où placer l'élément positionné, en le plaçant initialement au centre, et l'autre valeur indique l'étendue de cette colonne. Par exemple&nbsp;:

- `top span-left` place l'élément positionné dans la ligne du haut et l'étend sur les cases centrale et gauche de cette ligne.
- `y-end span-x-end` place l'élément positionné à l'extrémité de la colonne y et l'étend sur les cases centrale et x-end de cette colonne.
- `block-end span-all` place l'élément positionné dans la dernière ligne du bloc et l'étend sur les cases début de ligne, centrale et fin de ligne de cette ligne.

Si vous ne définissez qu'une seule valeur, l'effet diffère selon la valeur choisie&nbsp;:

- Une valeur de côté physique (`top`, `bottom`, `left` ou `right`) ou de coordonnées (`y-start`, `y-end`, `x-start`, `x-end`) agit comme si l'autre valeur était `span-all`. Par exemple, `top` donne le même effet que `top span-all`.
- Une valeur de côté logique (`start` ou `end`) agit comme si l'autre valeur était identique&nbsp;; par exemple, `start` donne le même effet que `start start`.
- Une valeur `center` agit comme si les deux valeurs étaient `center` (donc, `center center`).

> [!NOTE]
> Voir la page de référence de la valeur {{CSSxRef("position-area_value", "&lt;position-area&gt;")}} pour une description détaillée de toutes les valeurs disponibles. Mélanger une valeur logique avec une valeur physique invalide la déclaration.

Voyons quelques exemples de ces valeurs&nbsp;; cet exemple utilise le même HTML et les mêmes styles CSS de base que l'exemple précédent, sauf que nous avons ajouté un élément {{HTMLElement("select")}} pour permettre de changer la valeur `position-area` de l'élément positionné.

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<form>
  <label for="position-area-select">Choisir une position-area&nbsp;:</label>
  <select id="position-area-select" name="position-area-select">
    <option>top</option>
    <option>bottom</option>
    <option>left</option>
    <option>right</option>
    <option>start</option>
    <option>end</option>
    <option>top left</option>
    <option>top right</option>
    <option>bottom left</option>
    <option>bottom right</option>
    <option>top span-left</option>
    <option>bottom span-right</option>
    <option>start span-start</option>
    <option>end span-end</option>
    <option>center</option>
    <option>center span-all</option>
    <option>bottom center</option>
    <option>end span-all</option>
  </select>
</form>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --my-anchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
}

select {
  display: block;
  margin-top: 5px;
}

form {
  position: fixed;
  top: 0;
  right: 2px;
}
```

La boîte d'information reçoit un positionnement fixe et est associée à l'ancre via le CSS. Lors du chargement, elle est attachée à l'ancre avec `position-area: top;`, ce qui la positionne en haut de la grille position-area. Cette valeur sera remplacée lorsque vous sélectionnerez une autre valeur dans le menu `<select>`.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
}
```

Nous incluons aussi un court script pour appliquer les nouvelles valeurs `position-area` choisies dans le menu `<select>` à la boîte d'information&nbsp;:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // Appliquer la valeur position-area choisie dans le menu select
  infobox.style.positionArea = area;
});
```

Essayez de sélectionner de nouvelles valeurs `position-area` dans le menu `<select>` pour voir l'effet sur la position de la boîte d'information&nbsp;:

{{EmbedLiveSample("Définir une `position-area`", "100%", 250)}}

### Largeur de l'élément positionné

Dans l'exemple ci-dessus, nous n'avons pas défini explicitement la taille de l'élément positionné dans aucune dimension. Nous avons volontairement omis la définition de taille pour vous permettre d'observer le comportement que cela engendre.

Lorsqu'un élément positionné est placé dans les cellules de la grille `position-area` sans taille explicite, il s'aligne sur la zone de grille définie et se comporte comme si {{CSSxRef("width")}} était défini sur {{CSSxRef("max-content")}}. Il est dimensionné selon la taille de son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block), c'est-à-dire la largeur de son contenu. Cette taille est imposée par la propriété `position: fixed`. Les éléments positionnés de façon absolue ou fixe sans taille explicite sont automatiquement dimensionnés, s'étirant autant que nécessaire pour contenir le texte, tout en étant contraints par le bord de la fenêtre d'affichage. Dans ce cas, lorsqu'il est placé sur le côté gauche de la grille avec une valeur `left` ou `inline-start`, le texte revient à la ligne. Si la taille `max-content` de l'élément ancré est plus étroite ou plus courte que celle de son ancre, ils ne s'étendent pas pour correspondre à la taille de l'ancre.

Si l'élément positionné est centré verticalement, par exemple avec `position-area: bottom center`, il s'aligne sur la cellule de grille définie et la largeur sera identique à celle de l'élément d'ancre. Dans ce cas, sa hauteur minimale correspond à la taille du bloc englobant de l'ancre. Il ne débordera pas, car la propriété `min-width` est {{CSSxRef("min-content")}}, ce qui signifie qu'il sera au moins aussi large que son mot le plus long.

## Centrer sur l'ancre avec `anchor-center`

Vous pouvez centrer l'élément positionné sur l'ancre en utilisant les valeurs `center` de `position-area`, mais les propriétés d'encart combinées à la fonction `anchor()` offrent un contrôle plus précis sur la position exacte. Le positionnement par ancre CSS permet de centrer un élément positionné par ancre par rapport à son ancre lorsque les propriétés d'encart, plutôt que `position-area`, sont utilisées pour l'attacher.

Les propriétés {{CSSxRef("justify-self")}}, {{CSSxRef("align-self")}}, {{CSSxRef("justify-items")}}, et {{CSSxRef("align-items")}} (ainsi que leurs raccourcis {{CSSxRef("place-items")}} et {{CSSxRef("place-self")}}) existent pour permettre aux développeur·euse·s d'aligner facilement les éléments dans la direction en ligne ou en bloc à l'intérieur de divers systèmes de mise en page, par exemple le long de l'axe principal ou secondaire dans le cas des enfants flex. Le positionnement par ancre CSS fournit une valeur supplémentaire pour ces propriétés, `anchor-center`, qui aligne un élément positionné sur le centre de son ancre par défaut.

Cet exemple utilise le même HTML et le même CSS de base que l'exemple précédent. La boîte d'information reçoit un positionnement fixe et est attachée au bord inférieur de l'ancre. `justify-self: anchor-center` est ensuite utilisé pour s'assurer qu'elle est centrée horizontalement sur le centre de l'ancre&nbsp;:

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
  anchor-name: --my-anchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  top: calc(anchor(bottom) + 5px);
  justify-self: anchor-center;
}
```

Cela centre l'élément positionné par ancre au bas de son ancre&nbsp;:

{{EmbedLiveSample("Centrer sur l'ancre avec `anchor-center`", "100%", 250)}}

## Dimensionner les éléments selon la taille de l'ancre

En plus de positionner un élément par rapport à la position de son ancre, vous pouvez aussi dimensionner un élément par rapport à la taille de son ancre en utilisant la fonction {{CSSxRef("anchor-size()")}} dans la valeur d'une propriété de dimensionnement.

Les propriétés de dimensionnement qui peuvent accepter une valeur `anchor-size()` incluent&nbsp;:

- {{CSSxRef("width")}}
- {{CSSxRef("height")}}
- {{CSSxRef("min-width")}}
- {{CSSxRef("min-height")}}
- {{CSSxRef("max-width")}}
- {{CSSxRef("max-height")}}
- {{CSSxRef("block-size")}}
- {{CSSxRef("inline-size")}}
- {{CSSxRef("min-block-size")}}
- {{CSSxRef("min-inline-size")}}
- {{CSSxRef("max-block-size")}}
- {{CSSxRef("max-inline-size")}}

Les fonctions `anchor-size()` produisent des valeurs de type {{CSSxRef("length")}}. Leur syntaxe est la suivante&nbsp;:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : Le nom `<dashed-ident>` défini comme valeur de la propriété {{CSSxRef("anchor-name")}} de l'élément d'ancre par rapport auquel vous souhaitez dimensionner l'élément. Si omis, **l'ancre par défaut** de l'élément, c'est-à-dire l'ancre référencée dans la propriété {{CSSxRef("position-anchor")}}, est utilisée.
- [`<anchor-size>`](/fr/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : Définit la dimension de l'élément d'ancre à laquelle l'élément positionné sera dimensionné. Cela peut être exprimé avec des valeurs physiques (`width` ou `height`) ou logiques (`inline`, `block`, `self-inline` ou `self-block`).
- {{CSSxRef("length-percentage")}}
  - : Définit la taille à utiliser comme valeur de repli si l'élément n'est pas positionné de façon absolue ou fixe, ou si l'élément d'ancre n'existe pas.

Les fonctions `anchor-size()` les plus courantes que vous utiliserez feront simplement référence à une dimension de l'ancre par défaut. Vous pouvez aussi les utiliser dans des fonctions {{CSSxRef("calc")}} pour modifier la taille appliquée à l'élément positionné.

Par exemple, cette règle dimensionne la largeur de l'élément positionné pour qu'elle soit égale à celle de l'ancre par défaut&nbsp;:

```css
.elem {
  width: anchor-size(width);
}
```

Cette règle dimensionne la taille en ligne de l'élément positionné à 4 fois celle de l'ancre, la multiplication étant effectuée dans une fonction `calc()`&nbsp;:

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

Voyons un exemple. Le HTML et le CSS de base sont identiques à ceux des exemples précédents, sauf que l'élément d'ancre reçoit un attribut [`tabindex="0"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour le rendre sélectionnable. La boîte d'information reçoit un positionnement fixe et est associée à l'ancre comme précédemment. Cette fois, nous l'attachons à droite de l'ancre avec une `position-area` et lui donnons une largeur cinq fois supérieure à celle de l'ancre.

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor" tabindex="0">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --my-anchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: right;
  margin-left: 5px;
  width: calc(anchor-size(width) * 5);
}
```

De plus, nous augmentons la largeur ({{CSSxRef("width")}}) de l'élément d'ancre lors des états {{CSSxRef(":hover")}} et {{CSSxRef(":focus")}}, et nous lui appliquons une {{CSSxRef("transition")}} pour qu'il s'anime lors des changements d'état.

```css
.anchor {
  text-align: center;
  width: 30px;
  transition: 1s width;
}

.anchor:hover,
.anchor:focus {
  width: 50px;
}
```

Survolez ou sélectionnez l'élément d'ancre — l'élément positionné grandit en même temps que l'ancre, ce qui démontre que la taille de l'élément positionné par ancre est relative à celle de son ancre&nbsp;:

{{EmbedLiveSample("Dimensionner les éléments selon la taille de l'ancre", "100%", 250)}}

## Autres utilisations de `anchor-size()`

Vous pouvez aussi utiliser `anchor-size()` dans les propriétés d'encart et de marge physiques et logiques. Les sections ci-dessous détaillent ces usages avant de proposer un exemple d'utilisation.

### Définir la position d'un élément selon la taille de l'ancre

Vous pouvez utiliser la fonction {{CSSxRef("anchor-size()")}} dans la valeur d'une [propriété d'encart](/fr/docs/Glossary/Inset_properties) pour positionner des éléments selon la taille de leur ancre, par exemple&nbsp;:

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

Cela ne positionne pas un élément par rapport à la position de son ancre comme le font la fonction {{CSSxRef("anchor()")}} ou la propriété {{CSSxRef("position-area")}} (voir [Positionner des éléments par rapport à leur ancre](#positionner_des_éléments_par_rapport_à_leur_ancre) ci-dessus)&nbsp;; l'élément ne changera pas de position lorsque son ancre changera. À la place, l'élément sera positionné selon les règles normales du positionnement [`absolute`](/fr/docs/Web/CSS/Reference/Properties/position#absolute) ou [`fixed`](/fr/docs/Web/CSS/Reference/Properties/position#fixed).

Cela peut être utile dans certaines situations. Par exemple, si votre élément d'ancre ne peut se déplacer que verticalement et reste toujours à côté du bord de son ancêtre positionné le plus proche horizontalement, vous pouvez utiliser `left: anchor-size(width)` pour que l'élément positionné par ancre soit toujours placé à droite de son ancre, même si la largeur de l'ancre change.

### Définir la marge d'un élément selon la taille de l'ancre

Vous pouvez utiliser la fonction {{CSSxRef("anchor-size()")}} dans la valeur d'une propriété `margin-*` pour définir les marges d'un élément positionné par ancre selon la taille de son ancre, par exemple&nbsp;:

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

Cela peut être utile si vous souhaitez que la marge d'un élément positionné par ancre soit toujours égale au même pourcentage de la largeur de l'ancre, même lorsque cette largeur change.

### Exemple de position et de marge avec `anchor-size()`

Voyons un exemple où nous définissons la marge et la position d'un élément positionné par ancre en fonction de la largeur de l'ancre.

Dans le HTML, nous définissons deux éléments HTML {{HTMLElement("div")}}, un élément `anchor` et un élément `infobox` que nous positionnerons par rapport à l'ancre. L'élément d'ancre reçoit un attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour pouvoir être sélectionné au clavier. Nous ajoutons aussi du texte de remplissage pour que le {{HTMLElement("body")}} soit assez haut pour nécessiter un défilement, mais ce texte a été masqué pour plus de clarté.

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar.
</p>
```

```html
<div class="anchor" tabindex="0">⚓︎</div>

<div class="infobox">
  <p>Boîte d'information.</p>
</div>
```

```html hidden
<p>Vulputate ut pharetra sit amet aliquam.</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

Dans le CSS, nous déclarons d'abord le `<div>` `anchor` comme élément d'ancre en lui donnant un {{CSSxRef("anchor-name")}}. L'élément positionné a sa propriété {{CSSxRef("position")}} définie sur `absolute` et est associé à l'ancre via la propriété {{CSSxRef("position-anchor")}}. Nous définissons aussi des dimensions absolues {{CSSxRef("height")}} et {{CSSxRef("width")}} sur l'ancre et la boîte d'information, et ajoutons une {{CSSxRef("transition")}} sur l'ancre pour que les changements de largeur soient animés en douceur lors d'un changement d'état&nbsp;:

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  text-align: center;
  align-content: center;
  outline: 1px solid black;
}

body {
  width: 80%;
  margin: 0 auto;
  position: relative;
}

.infobox {
  align-content: center;
  color: darkblue;
  background-color: azure;
  outline: 1px solid #dddddd;
  font-size: 1rem;
  text-align: center;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  width: 100px;
  height: 100px;
  transition: 1s all;
}

.infobox {
  position-anchor: --my-anchor;
  position: absolute;
  height: 100px;
  width: 100px;
}
```

Passons maintenant à la partie la plus intéressante. Ici, nous définissons la `width` de l'ancre à `300px` lorsqu'elle est survolée ou sélectionnée. Nous définissons ensuite pour la boîte d'information&nbsp;:

- La valeur de `top` vaut `anchor(top)`. Cela fait en sorte que le haut de la boîte d'information reste toujours aligné avec le haut de l'ancre.
- La valeur de `left` vaut `anchor-size(width)`. Cela fait en sorte que la gauche de la boîte d'information soit positionnée à la distance spécifiée du bord gauche de son ancêtre positionné le plus proche. Dans ce cas, la distance spécifiée est égale à la largeur de l'élément d'ancre et l'ancêtre positionné le plus proche est l'élément HTML `<body>`, donc la boîte d'information apparaît à droite de l'ancre.
- La valeur de `margin-left` vaut `calc(anchor-size(width)/4)`. Cela fait en sorte que la boîte d'information ait toujours une marge gauche la séparant de l'ancre, égale à un quart de la largeur de l'ancre.

```css
.anchor:hover,
.anchor:focus {
  width: 300px;
}

.infobox {
  top: anchor(top);
  left: anchor-size(width);
  margin-left: calc(anchor-size(width) / 4);
}
```

Le résultat rendu est le suivant&nbsp;:

{{EmbedLiveSample("Exemple de position et de marge avec `anchor-size()`", "100%", 240)}}

Essayez de naviguer jusqu'à l'ancre avec la touche Tabulation ou de la survoler avec le pointeur de la souris, et notez comment la position et la marge gauche de la boîte d'information augmentent en proportion de la largeur de l'élément d'ancre.

## Voir aussi

- Le module [de positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
- Le guide [des options de repli et masquage conditionnel pour le dépassement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [Apprendre&nbsp;: Le positionnement](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning)
- Le module [des propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Apprendre&nbsp;: Dimensionner les éléments en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Sizing)
