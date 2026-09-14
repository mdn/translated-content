---
title: Comprendre les ratios d'aspect
short-title: Ratios d'aspect
slug: Web/CSS/Guides/Box_sizing/Aspect_ratios
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Chaque élément rendu sur la page possède une hauteur et une largeur, et, par conséquent, un {{Glossary("aspect ratio", "ratio d'aspect")}}, qui est le rapport entre la largeur et la hauteur. Les dimensions naturelles d'un objet multimédia, qui sont sa taille sans aucun dimensionnement, mise à l'échelle, zoom ou bordures appliqués, sont appelées sa taille naturelle ou {{Glossary("intrinsic size", "taille intrinsèque")}}. La taille intrinsèque d'un élément est déterminée par l'élément lui‑même, et non par l'application d'une mise en forme telle que le [dimensionnement des boîtes](/fr/docs/Web/CSS/Guides/Box_sizing) ou le réglage des largeurs de bordure, de marge ou d'espacement interne.

Lors du développement de sites, on souhaite souvent pouvoir fixer la largeur d'un élément en pourcentage de la zone d'affichage ou de son conteneur parent et faire en sorte que la hauteur s'ajuste proportionnellement, maintenant ainsi un ratio d'aspect spécifique en fonction de la taille de la zone d'affichage. Pour les éléments remplacés, comme les images et les vidéos, conserver un ratio d'aspect spécifique est non seulement nécessaire pour créer la {{Glossary("responsive web design", "conception web adaptative")}}, mais aussi un élément essentiel pour offrir une bonne expérience utilisateur. Définir le ratio d'aspect d'une ressource évite le [saccades de chargement](/fr/docs/Learn_web_development/Extensions/Performance/Multimedia#stratégie_de_rendu_prévenant_les_saccades_au_chargements_des_images) — le décalage de mise en page qui se produit lorsque le média se charge après le rendu initial de la page, provoquant un reflow parce que l'espace réservé à la ressource n'a pas été alloué.

Avec le CSS, on peut ajuster la taille des éléments remplacés et non remplacés en fonction de leur ratio d'aspect. Dans ce guide, on présente la propriété `aspect-ratio`, on aborde les ratios d'aspect pour les éléments remplacés et non remplacés, puis on examine quelques cas d'utilisation courants des ratios d'aspect.

## Fonctionnement de la propriété `aspect-ratio`

La valeur de la propriété CSS {{CSSxRef("aspect-ratio")}} définit le ratio largeur/hauteur préféré de la boîte d'un élément. La valeur est soit un {{CSSxRef("ratio")}}, le mot-clé `auto`, ou une combinaison des deux séparée par un espace.

Le `<ratio>` est le rapport entre la largeur et la hauteur, dans cet ordre. Il est représenté par deux valeurs positives {{CSSxRef("number")}} séparées par une barre oblique (`/`) ou un seul `<number>`. Lorsqu'un seul nombre est utilisé, cela revient à écrire le ratio comme `<number> / 1`, ce qui correspond aussi à la largeur divisée par la hauteur.

Les valeurs suivantes sont toutes équivalentes&nbsp;:

```css
aspect-ratio: 3 / 6;
aspect-ratio: 1 / 2;
aspect-ratio: 0.5 / 1;
aspect-ratio: 0.5;
```

Les valeurs suivantes sont toutes équivalentes&nbsp;:

```css
aspect-ratio: 9/6;
aspect-ratio: 3/2;
aspect-ratio: 1.5;
```

```html hidden live-sample___number
<div>0.5</div>
<div>1.5</div>
```

```css hidden live-sample___number
div {
  height: 121px;
  aspect-ratio: 0.5;
  background-color: pink;
  line-height: 100px;
  text-align: center;
  float: left;
  background-image:
    repeating-linear-gradient(to right, black 0px 1px, transparent 1px 20px),
    repeating-linear-gradient(black 0px 1px, transparent 1px 20px);
  background-size:
    181px 5px,
    5px 121px;
  background-repeat: no-repeat;
}

div + div {
  aspect-ratio: 1.5;
  background-color: lightgreen;
  margin-left: 10px;
}
```

{{EmbedLiveSample("number", 100, 130)}}

L'effet du mot-clé `auto` dépend du type d'élément auquel il est appliqué. Pour les éléments remplacés ayant un ratio d'aspect intrinsèque, `auto` signifie que le ratio d'aspect intrinsèque doit être utilisé. Dans tous les autres cas, la valeur `auto` indique que la boîte n'a pas de ratio d'aspect préféré. Dans les deux situations, il s'agit du comportement par défaut comme si aucune propriété `aspect-ratio` n'était appliquée.

Lorsque la valeur contient à la fois le mot-clé `auto` et une valeur `<ratio>`, comme `aspect-ratio: auto 2 / 3;` ou `aspect-ratio: 0.75 auto;`, la valeur `auto` s'applique aux éléments remplacés ayant un ratio d'aspect naturel et le ratio défini de la largeur/hauteur ou `<number>` est utilisé comme ratio d'aspect préféré.

Vous aurez remarqué le mot «&nbsp;préféré&nbsp;» dans les définitions ci-dessus. La valeur `aspect-ratio` n'est pas toujours appliquée lorsqu'elle est définie. La propriété `aspect-ratio` définit un ratio d'aspect «&nbsp;préféré&nbsp;», elle n'a donc d'effet que si au moins une des tailles de la boîte est automatique.

Lorsque la hauteur et la largeur, ou les tailles en ligne et en bloc, sont définies explicitement, la valeur de la propriété `aspect-ratio` est ignorée. Dans ce cas, aucune dimension ne peut être dimensionnée automatiquement — les tailles préférées sont définies explicitement — donc la propriété `aspect-ratio` n'a aucun effet. Lorsque vous déclarez à la fois les dimensions en ligne et en bloc, celles-ci prennent le dessus.

Pour les éléments remplacés, si vous ne définissez pas explicitement une valeur (autre que `auto`) pour l'une des dimensions, les deux prendront leur taille intrinsèque (toute valeur `aspect-ratio` n'est pas appliquée). La propriété `aspect-ratio` s'appliquera aux éléments non remplacés qui n'ont pas de dimension explicitement définie, car les éléments non remplacés sont dimensionnés soit {{Glossary("Intrinsic_Size", "intrinsèquement")}}, soit {{Glossary("Extrinsic_size", "extrinsèquement")}}, en obtenant leur taille à partir de leur contenu, de leur conteneur, des propriétés du [modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model), etc.

Lorsqu'un élément est rendu sur la page, si aucun CSS n'est appliqué et qu'aucun attribut de dimensionnement HTML n'est inclus, l'agent utilisateur rendra l'objet à sa taille naturelle.

## Ajuster les ratios d'aspect des éléments remplacés

Les éléments HTML remplacés comme {{HTMLElement("img")}} et {{HTMLElement("video")}} sont remplacés par des médias ayant des dimensions définies et, par conséquent, un ratio d'aspect intrinsèque. Prenons une image matricielle, comme un JPEG, PNG ou GIF. Si vous placez une image sur une page sans définir une hauteur ou une largeur, que ce soit par les attributs de {{HTMLElement("img")}} ou avec du CSS, elle sera affichée à sa taille intrinsèque.

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="carré de 220 pixels du drapeau de la fierté" />
```

{{EmbedLiveSample("original", 100, 230)}}

Il s'agit d'une image carrée de `220px` sans CSS appliqué&nbsp;; elle est affichée à sa taille intrinsèque ou par défaut.

Si le contenu remplacé est dimensionné automatiquement ou si vous définissez une taille pour une seule dimension, comme la propriété `width`, le navigateur ajustera automatiquement l'autre dimension, ici la hauteur, tout en conservant le ratio d'aspect original du média.

Dans cet exemple, seule la {{CSSxRef("width")}} est définie sur l'image, donc l'agent utilisateur conserve son ratio d'aspect. La même image est répétée trois fois, affichée à différentes largeurs&nbsp;: `55px`, `110px` et à sa taille naturelle de `220px` grâce à la valeur [`width: auto`](/fr/docs/Web/CSS/Reference/Properties/width).

```html hidden live-sample___image
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
```

```css hidden live-sample___image
img {
  width: 55px;
  margin-right: 5px;
}

img + img {
  width: 110px;
}

img + img + img {
  width: auto;
}
```

{{EmbedLiveSample("image", 100, 230)}}

Ce n'est qu'en définissant les tailles pour les deux dimensions qu'il existe un risque de déformer l'élément remplacé. Par exemple, définir `width: 100vw;` et `height: 100vh;` sur une image crée un ratio d'aspect variable&nbsp;; l'image apparaîtra soit étirée, soit écrasée lorsque le ratio d'aspect de la zone d'affichage diffère du ratio d'aspect naturel de l'image.

Dans cet exemple, la même image est répétée trois fois, dimensionnée explicitement avec la même valeur {{CSSxRef("height")}} (`110px`) mais différentes valeurs {{CSSxRef("width")}} (`55px`, `110px` et `220px`).

```html hidden live-sample___image-bad
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
```

```css hidden live-sample___image-bad
img {
  width: 55px;
  height: 110px;
}

img + img {
  width: 110px;
}

img + img + img {
  width: 220px;
}
```

{{EmbedLiveSample("image-bad", 100, 120)}}

Nous avons volontairement déformé les images en définissant à la fois une hauteur (`height`) et une largeur (`width`)&nbsp;: nous avons écrasé la première et étiré la troisième.

Nous aurions pu créer ce même effet de déformation en utilisant la propriété CSS {{CSSxRef("aspect-ratio")}}, en définissant une seule dimension (ni les deux, ni aucune) et en fournissant une valeur autre que `1` (ou `1 / 1`). Vous ne souhaitez probablement pas faire cela, mais il est bon de savoir que c'est possible.

```html hidden live-sample___stretch
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
```

```css live-sample___stretch
img {
  height: 90vh;
  aspect-ratio: 3;
}
```

{{EmbedLiveSample("stretch", 100, 270)}}

Nous avons déclaré une seule dimension&nbsp;; `100vh` correspond à la hauteur totale de la zone d'affichage de l'exemple {{HTMLElement("iframe")}}. Pour que `aspect-ratio` s'applique aux éléments remplacés, une seule dimension doit être définie. Définir les deux ou aucune ne fonctionne pas.

### Adapter les éléments remplacés à leur conteneur

Pour adapter un élément remplacé aux dimensions de son conteneur tout en conservant son ratio d'aspect intrinsèque, définissez la valeur de la propriété {{CSSxRef("object-fit")}} sur `cover` ou `contain`. Cela redimensionnera l'élément remplacé et le coupera pour «&nbsp;couvrir&nbsp;» le conteneur ou l'affichera à une taille plus petite, entièrement «&nbsp;contenu&nbsp;» dans celui-ci.

Dans cet exemple, l'image carrée est placée dans une grille de trois éléments, chacun ayant un ratio d'aspect de `5 / 2`.

Pour commencer, nous créons un conteneur avec trois éléments, chacun contenant une image&nbsp;:

```html live-sample___image-grid
<div class="grid">
  <div>
    <img
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Drapeau de la fierté" />
  </div>
  <div>
    <img
      class="cover"
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Drapeau de la fierté" />
  </div>
  <div>
    <img
      class="contain"
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Drapeau de la fierté" />
  </div>
</div>
```

Ensuite, nous définissons le conteneur comme une grille, où chaque élément possède un ratio d'aspect de `2.5` (`5/2`) avec une largeur minimale de `150px`. Par conséquent, la hauteur minimale sera de `60px`. Cependant, la largeur et la hauteur finales sont déterminées par la largeur de la zone d'affichage de l'exemple, qui dépendra de la taille de votre zone d'affichage.

```css live-sample___image-grid
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  font-size: 0; /* pour minimiser les espaces blancs */
}

div div {
  aspect-ratio: 5 / 2;
  background-color: #cccccc;
}
```

Quand nous redimensionnons ensuite les images et définissons la propriété `object-fit` sur les deux dernières images&nbsp;:

```css live-sample___image-grid
img {
  height: 100%;
  width: 100%;
}

.cover {
  object-fit: cover;
}

.contain {
  object-fit: contain;
}
```

{{EmbedLiveSample("image-grid", 100, 100)}}

Seule la première image est déformée (étirée). Nous aurions pu utiliser la valeur `fill` de `object-fit` pour créer le même effet. L'image `cover` s'étend sur toute la largeur du conteneur, centrée verticalement et rognée pour s'adapter au conteneur. La valeur `contain` garantit que l'image est contenue dans le conteneur, centrée horizontalement et réduite pour s'adapter.

## Définir les ratios d'aspect pour les éléments non remplacés

Alors que le ratio d'aspect d'un élément remplacé est conservé par défaut, ajuster la taille intrinsèque d'un élément non remplacé modifie généralement son ratio d'aspect. Par exemple, un contenu identique peut apparaître sur trois lignes dans une zone d'affichage large ou un conteneur parent large, mais sur huit lignes dans une zone d'affichage étroite ou un conteneur.

Dans cet exemple, la même citation est affichée dans des conteneurs de `200px` et `600px` de largeur, et un carré est défini avec une hauteur correspondant à sa largeur de `200px`.

```html hidden live-sample___alder
<p>Étroite&nbsp;:</p>
<blockquote>
  <q>
    Lorsque vous arrêtez de vivre votre vie en fonction de ce que les autres
    pensent de vous, la vraie vie commence. À ce moment-là, vous verrez enfin la
    porte de l'acceptation de soi s'ouvrir.
  </q>
  - Shannon L. Alder
</blockquote>
<p>Large&nbsp;:</p>
<blockquote>
  <q>
    Lorsque vous arrêtez de vivre votre vie en fonction de ce que les autres
    pensent de vous, la vraie vie commence. À ce moment-là, vous verrez enfin la
    porte de l'acceptation de soi s'ouvrir.
  </q>
  - Shannon L. Alder
</blockquote>
<p>Ratio d'aspect avec débordement&nbsp;:</p>
<blockquote>
  <q>
    Lorsque vous arrêtez de vivre votre vie en fonction de ce que les autres
    pensent de vous, la vraie vie commence. À ce moment-là, vous verrez enfin la
    porte de l'acceptation de soi s'ouvrir.
  </q>
  - Shannon L. Alder
</blockquote>
<p>
  <label
    ><input type="checkbox" checked /> Changer entre les valeurs de
    <code>overflow</code> à <code>auto</code> et <code>visible</code></label
  >
</p>
```

Pour mettre en évidence le problème lié à la définition du ratio d'aspect d'un élément non remplacé avec les dimensions de taille, basculez la propriété {{CSSxRef("overflow")}} entre `auto` et `visible`.

```css hidden live-sample___alder
blockquote {
  border: 3px dotted #cccccc;
  padding: 0 3px;
  margin: 20px 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

body:has(:checked) blockquote {
  overflow: auto;
}

:checked + code,
:not(:checked) + code + code {
  outline: 1px solid green;
}

p:nth-last-of-type(n + 2) {
  font-weight: bold;
}
```

```css live-sample___alder
blockquote {
  width: 200px;
}

blockquote:nth-of-type(2) {
  width: 600px;
}

blockquote:nth-of-type(3) {
  height: 200px;
}
```

{{EmbedLiveSample("alder", 100, 800)}}

Bien qu'il soit possible de définir un ratio d'aspect sur les éléments non remplacés en définissant les deux dimensions et en masquant le contenu débordant, la propriété CSS {{CSSxRef("aspect-ratio")}} offre une prise en charge explicite du ratio d'aspect. Cela signifie qu'un ratio d'aspect précis peut être défini même si vous ne connaissez pas le contenu ou la taille des zones d'affichage.

Dans l'exemple suivant, nous affichons des boîtes carrées, quelle que soit la largeur du texte, en appliquant `aspect-ratio: 1` sur {{HTMLElement("blockquote")}}, un élément non remplacé.

```html hidden live-sample___words
<p>Texte court&nbsp;:</p>
<blockquote>Respirez.</blockquote>
<p>Texte plus long&nbsp;:</p>
<blockquote>Vous êtes parfait·e tel·le que vous êtes.</blockquote>
```

```css live-sample___words
blockquote {
  inline-size: max-content;
  aspect-ratio: 1;
}
```

```css hidden live-sample___words
blockquote {
  border: 1px solid #cccccc;
  padding: 1px;
  margin: 20px 0;
  background-color: #ededed;
}
```

{{EmbedLiveSample("words", 100, 400)}}

Chaque boîte possède une dimension définie&nbsp;: la {{CSSxRef("inline-size")}}, qui correspond à la largeur dans les langues horizontales, est définie sur {{CSSxRef("max-content")}}, ce qui permet d'obtenir une taille aussi large que nécessaire pour contenir le contenu sans retour à la ligne. La seconde dimension, dans ce cas, la {{CSSxRef("block-size")}} ou la {{CSSxRef("height")}}, est définie pour être de la même longueur que la première. Cela est réalisé avec la propriété {{CSSxRef("aspect-ratio")}}. Nous avons défini le ratio largeur/hauteur souhaité de la boîte de l'élément à `1`, ce qui équivaut à `1 / 1`, soit un carré. Cela permet d'adapter la direction du bloc à la largeur de l'élément, sans utiliser les propriétés {{CSSxRef("height")}} ou {{CSSxRef("block-size")}}.

Dans ces exemples, une taille a été explicitement définie sur l'élément lui-même. Lorsqu'on travaille avec des éléments non remplacés, le ratio d'aspect intervient lorsque aucune dimension de taille n'est explicitement définie.

### Créer un cercle basé sur la taille du conteneur

La taille en ligne des éléments de bloc non remplacés correspond à la taille de leur [boîte de contenu](/fr/docs/Web/CSS/Reference/Values/box-edge#content-box). Comme ils possèdent une taille par défaut, il n'est pas nécessaire de définir explicitement une taille pour que la propriété `aspect-ratio` fonctionne.

Dans cet exemple, nous avons un conteneur {{HTMLElement("div")}} de `200px` de largeur, incluant `5px` de padding de chaque côté. La taille en ligne de la boîte de contenu est donc de `190px`. Sans définir une hauteur ou une largeur sur l'élément {{HTMLElement("p")}} imbriqué, nous savons que sa taille en ligne est de `190px`. Avec `aspect-ratio: 1` appliqué, le paragraphe aura une hauteur de `190px`, sauf s'il possède du contenu débordant visible qui le rendrait plus haut (ce qui n'est pas le cas).

La hauteur de l'élément `<div>` n'est pas explicitement définie, mais il contient le paragraphe de `190px` de hauteur, les `5px` de padding en haut et en bas, et la somme des hauteurs des marges par défaut en haut et en bas du `<p>`. Il est donc plus haut que large. Les deux éléments possèdent un {{CSSxRef("border-radius")}} de `50%`, le conteneur est donc un ovale tandis que l'enfant, avec un `aspect-ratio` de `1` mais sans dimension en ligne ou en bloc explicitement définie, est un cercle.

```html live-sample___circle
<div><p>Bonjour le monde</p></div>
```

```css live-sample___circle
div,
p {
  border-radius: 50%;
}

div {
  width: 200px;
  padding: 5px;
  border: 1px solid black;
  background-color: #66ccff;
}

p {
  aspect-ratio: 1;
  text-align: center;
  border: 10px solid white;
  background-color: #f4aab9;
}
```

{{EmbedLiveSample("circle", 100, 250)}}

Pour rendre le `<div>` circulaire, on peut définir la `height` et la `width` sur la même valeur, ou appliquer `aspect-ratio: 1` et définir `overflow` sur `auto` ou `hidden`. Autrement, il suffit de supprimer les marges du paragraphe avec [`margin-block: 0`](/fr/docs/Web/CSS/Reference/Properties/margin-block). Les deux options sont présentées ci-dessous.

```html live-sample___circle2
<div><p>Bonjour le monde</p></div>
<div><p>Bonjour le monde</p></div>
```

```css hidden live-sample___circle2
div {
  width: 200px;
  padding: 5px;
  margin: 1rem;
  border: 1px solid black;
  background-color: #66ccff;
}

p {
  text-align: center;
  border: 10px solid white;
  background-color: #f4aab9;
}
```

```css live-sample___circle2
div,
p {
  aspect-ratio: 1;
  border-radius: 50%;
}

div:first-of-type {
  overflow: hidden;
}

div:last-of-type p {
  margin-block: 0;
}
```

{{EmbedLiveSample("circle2", 100, 520)}}

## Cas d'utilisation courants de `aspect-ratio`

Voyons quelques situations où vous pouvez utiliser `aspect-ratio` pour résoudre des défis fréquents lors de la création de mises en page adaptatives.

### Rendre les ressources externes adaptatives

Tout contenu doit être adaptatif, même lorsqu'il s'agit d'intégrations tierces, comme des vidéos TikTok, YouTube ou Instagram. Le code que vous incluez pour intégrer ces vidéos externes crée généralement un {{HTMLElement("iframe")}}.

Alors qu'un élément HTML {{HTMLElement("video")}} adopte généralement le ratio d'aspect de son fichier média, les éléments `iframe` n'ont pas cette capacité. Cela pose le défi de garantir que le `<iframe>` soit adaptatif tout en conservant toujours le ratio d'aspect de la vidéo qu'il contient. Une des techniques consiste à définir la largeur de l'iframe à `100%` de son conteneur ou à `100vw` pour correspondre à la largeur de la zone d'affichage, quelle que soit sa taille. Cependant, définir une hauteur fixe peut étirer ou écraser la vidéo. À la place, on applique le `aspect-ratio` sur le conteneur de la vidéo, en l'alignant sur le même ratio d'aspect que la vidéo. Problème résolu&nbsp;!

Pour contexte, le ratio d'aspect standard des vidéos YouTube est de 16:9 sur un ordinateur ou un ordinateur portable, tandis que les vidéos TikTok et Instagram ont un ratio d'aspect de 9:16.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

On peut utiliser la fonctionnalité `aspect-ratio` dans la requête {{CSSxRef("@media")}} avec la propriété `aspect-ratio` pour ajuster la taille à la fois de l'iframe et de la vidéo qu'elle contient. Cela garantit que le contenu vidéo est toujours aussi grand que possible — prenant soit toute la largeur soit toute la hauteur de la zone d'affichage, quelle que soit sa taille — tout en conservant un ratio d'aspect précis.

On peut définir les vidéos YouTube au format paysage pour qu'elles soient aussi larges que la zone d'affichage, et les iframes vidéo TikTok et Instagram au format portrait pour qu'elles soient aussi hautes que la zone d'affichage. Si le ratio d'aspect de la zone d'affichage est plus large que 16:9, on définit la vidéo YouTube à la hauteur de la zone d'affichage. Si la zone d'affichage est plus étroite que 9:16, on définit les vidéos Instagram et TikTok à la largeur de la zone d'affichage.

```css
iframe.youtube {
  aspect-ratio: 16/9;
  width: 100vw;
  height: auto;
}

iframe.instagram,
iframe.tiktok {
  aspect-ratio: 9/16;
  height: 100vh;
  width: auto;
}

/* Si la zone d'affichage est très large mais pas très haute */
@media (aspect-ratio > 16 / 9) {
  iframe.youtube {
    width: auto;
    height: 100vh;
  }
}

/* Si la zone d'affichage est très haute mais pas très large */
@media (aspect-ratio < 9 / 16) {
  iframe.instagram,
  iframe.tiktok {
    height: auto;
    width: 100vw;
  }
}
```

### Créer des cellules de grille carrées

Une grille de cellules carrées peut être créée en définissant des [tailles de pistes de colonnes](/fr/docs/Web/CSS/Reference/Properties/grid-template-columns) fixes, en s'assurant que chaque ligne correspond à la taille de la piste de colonne. Cependant, lors de la création de grilles adaptatives avec `auto-fill` pour ajuster autant de pistes de colonnes que possible dans le conteneur, la largeur de chaque élément devient incertaine. Cela rend difficile de déterminer la hauteur appropriée pour créer des éléments carrés.

En définissant un ratio d'aspect sur les éléments, on s'assure que, lors de la disposition de la grille, chaque élément sera aussi haut que large, créant ainsi des éléments carrés quelle que soit la dimension du conteneur.

Dans cet exemple de cellules de grille carrées, les pistes de la grille sont dimensionnées automatiquement, prenant leur taille à partir des éléments. Chaque élément aura une largeur d'au moins `95px` mais pourra être bien plus large. Quelle que soit la largeur, chaque élément sera un carré, la hauteur étant déterminée par le `aspect-ratio` pour correspondre à sa largeur.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
}

.item {
  aspect-ratio: 1;
}
```

```css hidden
div {
  gap: 20px;
  font-size: 1.1rem;
}

div div {
  background-color: #cccccc;
  aspect-ratio: 1;
  counter-increment: items;
}

div div::after {
  content: counter(items);
}

.item::after {
  /*  masque le numéro s'il y a du contenu  */
  position: absolute;
  color: transparent;
}
```

```html hidden
<div class="grid">
  <div></div>
  <div></div>
  <div class="item">
    Ce texte dépasserait le parent, mais nous avons défini des propriétés pour
    l'en empêcher.
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div class="item">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Drapeau de la fierté" />
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

Pour que le contenu d'un élément de grille ne dépasse pas la hauteur préférée définie par le `aspect-ratio`, définissez {{CSSxRef("min-height")}} à `0` et {{CSSxRef("overflow")}} sur une valeur autre que `visible`. Cela fonctionnera pour le contenu dimensionné intrinsèquement. Si vous avez un contenu intrinsèquement plus grand que l'espace disponible, définissez ce contenu pour qu'il ne soit pas plus grand que l'élément de grille en appliquant {{CSSxRef("max-height")}} (ou {{CSSxRef("max-width")}}, selon le contenu) à `100%`.

```css
.item {
  min-height: 0;
  overflow: auto;
}

.item > * {
  max-height: 100%;
}
```

{{EmbedLiveSample("making_grid_cells_square", 100, 380)}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [de dimensionnement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
