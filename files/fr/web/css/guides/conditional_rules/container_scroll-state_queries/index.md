---
title: Utiliser les requêtes d'état de défilement des conteneurs
slug: Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

**Les requêtes d'état de défilement des conteneurs** (<i lang="en">container scroll-state queries</i> en anglais) constituent un type de [requête de conteneur](/fr/docs/Web/CSS/Reference/At-rules/@container). Plutôt que d'appliquer de manière sélective des styles aux éléments descendants en fonction de la taille du conteneur, les requêtes d'état de défilement vous permettent d'appliquer de manière sélective des styles aux éléments descendants en fonction de l'état de défilement du conteneur. Cela peut notamment concerner le fait que le conteneur soit partiellement défilé, aligné sur un ancêtre de type [conteneur d'alignement de défilement](/fr/docs/Glossary/Scroll_snap#scroll_snap_container), ou positionné à l'aide de [`position: sticky`](/fr/docs/Web/CSS/Reference/Properties/position) et collé à une limite d'un ancêtre de {{Glossary("scroll container", "conteneur de défilement")}}.

Cet article explique comment utiliser les requêtes d'état de défilement des conteneurs, en passant en revue un exemple de chaque type. Il suppose que vous connaissez les bases des requêtes de conteneur. Si vous êtes nouveau dans les requêtes de conteneur, lisez [les requêtes de conteneur CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries) avant de continuer.

## Types de requêtes d'état de défilement des conteneurs

Il existe trois descripteurs `@container` que vous pouvez utiliser dans une requête `scroll-state()`&nbsp;:

- `scrollable`&nbsp;: Interroge si un conteneur peut être défilé dans la direction donnée avec un défilement initié par l'utilisateur·ice (par exemple en faisant glisser la barre de défilement ou en utilisant un geste sur le pavé tactile). En d'autres termes, y a-t-il du contenu débordant dans la direction donnée qui peut être défilé&nbsp;? C'est utile pour appliquer des styles liés à la position de défilement d'un conteneur de défilement. Par exemple, vous pouvez afficher un indice encourageant les utilisateur·ice·s à faire défiler vers le bas pour voir plus de contenu lorsque la barre de défilement est en haut, et le masquer lorsque l'utilisateur·ice a effectivement commencé à faire défiler.
- `scrolled`&nbsp;: Interroge si un conteneur a été récemment défilé dans la direction donnée. Cela vous permet d'appliquer sélectivement des styles en fonction de la direction de défilement de l'utilisateur·ice, par exemple une barre de menu supérieure qui ne s'affiche que lorsque l'utilisateur·ice fait défiler vers le haut.
- `snapped`&nbsp;: Interroge si un conteneur va être aligné sur un ancêtre de type [accrochage au défilement](/fr/docs/Web/CSS/Guides/Scroll_snap) le long d'un axe donné. C'est utile pour appliquer des styles lorsqu'un élément est aligné sur un conteneur de type accrochage au défilement. Par exemple, vous pouvez mettre en évidence un élément aligné d'une certaine manière, ou révéler une partie de son contenu qui était précédemment cachée.
- `stuck`&nbsp;: Interroge si un conteneur avec une valeur de {{CSSxRef("position")}} de `sticky` est collé à un bord de son ancêtre de conteneur de défilement. C'est utile pour mettre en forme différemment les éléments `position: sticky` lorsqu'ils sont collés — par exemple, vous pouvez leur donner un schéma de couleurs ou une mise en page différente.

## Aperçu de la syntaxe

Pour établir un élément conteneur comme conteneur de requête d'état de défilement, définissez la propriété {{CSSxRef("container-type")}} avec une valeur de `scroll-state`. Vous pouvez également lui donner un nom avec {{CSSxRef("container-name")}}, afin de pouvoir le cibler avec une requête de conteneur spécifique&nbsp;:

```css
.container {
  container-type: scroll-state;
  container-name: mon-conteneur;
}
```

Vous pouvez ensuite créer un bloc {{CSSxRef("@container")}} qui définit la requête, les règles qui sont appliquées aux enfants du conteneur si le test réussit, et éventuellement, le `container-name` du ou des conteneurs que vous souhaitez interroger. Si vous ne définissez pas de `container-name`, la requête de conteneur est appliquée à tous les conteneurs de requête d'état de défilement de la page.

Ici, nous interrogeons uniquement les conteneurs nommés `mon-conteneur` pour déterminer si le conteneur peut être défilé vers son bord supérieur&nbsp;:

```css
@container mon-conteneur scroll-state(scrollable: top) {
  /* Les règles CSS vont ici */
}
```

> [!NOTE]
> Pour séparer les requêtes d'état de défilement des autres requêtes de conteneur, les descripteurs et valeurs d'état de défilement sont placés entre parenthèses, précédés de `scroll-state` (`scroll-state( ... )`). Ces constructions ressemblent à des fonctions, mais elles ne le sont pas.

## Utiliser les requêtes `scrollable`

Les requêtes d'état de défilement [`scrollable`](/fr/docs/Web/CSS/Reference/At-rules/@container#scrollable), écrites sous la forme `scroll-state(scrollable: <mot-clé>)`, testent si l'ancêtre défilable d'un conteneur peut être défilé dans la direction donnée avec un défilement initié par l'utilisateur·ice. Sinon, la requête retourne `false`.

La valeur du mot-clé indique la direction pour laquelle vous testez la disponibilité du défilement, par exemple&nbsp;:

- `top`&nbsp;: teste si le conteneur peut être défilé vers son bord supérieur.
- `inline-end`&nbsp;: teste si le conteneur peut être défilé vers son bord de fin en ligne.
- `y`&nbsp;: teste si le conteneur peut être défilé dans une ou les deux directions le long de son axe vertical.

Si le test réussit, les règles à l'intérieur du bloc `@container` sont appliquées aux descendants du conteneur de défilement correspondant.

Examinons un exemple dans lequel nous avons un conteneur défilant rempli de contenu, et un petit lien pratique pour revenir en haut si souhaité. Nous utilisons une requête `scrollable` pour n'afficher le lien que lorsque l'utilisateur·ice a commencé·e à faire défiler le contenu vers le bas.

### HTML

Dans le HTML, nous avons un élément {{HTMLElement("article")}} contenant suffisamment de contenu pour provoquer le défilement du document, précédé d'un [lien de retour en haut](/fr/docs/Web/HTML/Reference/Elements/a#résultat_8)&nbsp;:

```html
<a class="retour-en-haut" href="#" aria-label="Haut de page">↑</a>
<article>
  <h1>
    Lecteur avec lien de «&nbsp;retour en haut&nbsp;» contrôlé par une requête
    de conteneur
  </h1>
  <section>
    <header>
      <h2>Cette première section est intéressante</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    ...
  </section>

  ...
</article>
```

Nous avons masqué la plupart du HTML pour plus de concision.

```html hidden live-sample___scrollable
<a class="retour-en-haut" href="#" aria-label="Haut de page">↑</a>
<article>
  <h1>
    Lecteur avec lien de «&nbsp;retour en haut&nbsp;» contrôlé par une requête
    de conteneur
  </h1>
  <section>
    <header>
      <h2>Cette première section est intéressante</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <p>
      Mauris non malesuada est, sed vestibulum nibh. Duis vestibulum iaculis
      lectus, eu sagittis dolor dignissim iaculis. Nunc et orci sed sapien
      eleifend placerat. Curabitur dapibus risus eget odio sollicitudin, sit
      amet luctus justo pellentesque.
    </p>

    <p>
      <strong>Morbi non pharetra quam.</strong> Fusce vestibulum sem diam, ac
      consequat augue consectetur ut. Donec at augue viverra, tempus urna sit
      amet, porta augue.
      <em>Phasellus fringilla tincidunt sem ullamcorper varius.</em>
      Aenean gravida feugiat sem nec ultricies.
    </p>

    <img src="#" alt="Espace réservé" />

    <p>
      Sed pellentesque placerat mi sed maximus. Sed vitae dui vitae mi pulvinar
      gravida sed et libero.
      <a href="#">Duis nec venenatis dolor, sed tristique felis.</a>
      Integer dapibus facilisis leo elementum vulputate. Curabitur a urna quis
      nulla vulputate tincidunt quis ac enim.
    </p>

    <p>
      Cras non elit vel leo dignissim convallis. Duis eros urna, varius sit amet
      lorem vel, feugiat euismod est.
      <strong>Aliquam ornare eu elit ut iaculis.</strong> Suspendisse vulputate
      tempor leo, non rhoncus risus aliquam vel.
    </p>
  </section>
  <section>
    <header>
      <h2>Cette section, pas tellement</h2>

      <p>Suspendisse varius est ac turpis mollis cursus.</p>
    </header>

    <p>
      <strong
        >Curabitur faucibus condimentum eros, ut auctor felis lacinia
        sed.</strong
      >
      Praesent vitae scelerisque eros.
    </p>

    <p>
      <em>Ut vitae suscipit augue.</em> Cras et orci condimentum ante dignissim
      iaculis. Sed consectetur quis est sed dignissim. Nulla egestas orci erat,
      et commodo arcu feugiat ut.
    </p>

    <img src="#" alt="Espace réservé" />

    <p>
      Sed non tempor massa, at accumsan ante. Pellentesque habitant morbi
      <a href="#">tristique senectus</a> et netus et malesuada fames ac turpis
      egestas.
    </p>

    <p>
      Pellentesque placerat luctus tempor. Nunc congue dapibus eros, at
      vulputate nulla. Sed rutrum eleifend magna vel porta. Integer cursus orci
      faucibus turpis scelerisque, nec pharetra arcu molestie.
    </p>
  </section>
  <section>
    <header>
      <h2>Espérons que cette section apporte un peu de clarté&nbsp;?</h2>

      <p>Curabitur facilisis ornare lorem et eleifend.</p>
    </header>

    <p>
      <strong>Aenean mollis non neque sed finibus.</strong> Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Suspendisse sagittis viverra urna.
      In hac habitasse platea dictumst. Vestibulum neque orci, mollis sagittis
      augue et, pharetra vehicula diam.
    </p>

    <img src="#" alt="Espace réservé" />

    <p>
      <a href="#">Pellentesque sollicitudin</a> nunc quis nisl condimentum, ac
      iaculis libero feugiat.
      <strong>Nullam ultrices purus a nulla dignissim hendrerit.</strong>
      In molestie consectetur est quis pulvinar.
    </p>

    <p>
      Vivamus ac erat eu est lobortis commodo. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. In nulla turpis,
      <strong>mollis et est tempor</strong>, dignissim aliquam metus. Proin eu
      arcu quis erat mollis pulvinar. Vivamus at facilisis neque.
    </p>

    <p>
      Integer bibendum laoreet erat, quis vulputate mauris bibendum nec. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Nam ut est in arcu interdum hendrerit.
    </p>
  </section>
  <section>
    <header>
      <h2>Un résumé en quelque sorte</h2>

      <p>Nunc facilisis augue quis ex porta aliquam.</p>
    </header>

    <img src="#" alt="Espace réservé" />

    <p>
      <strong>
        Fusce nisi enim, venenatis a est vel, varius placerat lacus.
      </strong>
      Nunc tempus rutrum nisl bibendum aliquet. Pellentesque vitae nunc sed nisl
      tincidunt elementum a sit amet nisi. Morbi pretium at dolor in pulvinar.
      Curabitur dapibus eleifend accumsan.
    </p>

    <p>
      Donec rhoncus, leo vitae mollis maximus, tellus lorem interdum arcu, eu
      <em>tempor lectus libero in risus</em>. Ut sit amet magna vitae mauris
      tempor bibendum.
      <a href="#">Integer id mauris ut ex mattis finibus.</a>
    </p>

    <p>
      Curabitur dui felis, elementum et tellus id, blandit facilisis lorem.
      Aliquam sed posuere ligula, at auctor ipsum. Morbi dignissim accumsan
      tellus pretium iaculis.
    </p>
  </section>
</article>
```

### CSS

Le lien `.retour-en-haut` reçoit une valeur de {{CSSxRef("position")}} à `fixed`, placé dans le coin inférieur droit de la fenêtre, et déplacé hors de la fenêtre à l'aide d'une valeur {{CSSxRef("translate")}} de `80px 0`. Une valeur de {{CSSxRef("transition")}} anime le `translate` et la {{CSSxRef("background-color")}} lorsque l'une ou l'autre de ces valeurs change.

```css hidden live-sample___scrollable
/* Mise en forme générale */

* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 100%;
  max-width: 540px;
  padding: 20px;
  margin: 0 auto;
}

p {
  line-height: 1.5;
}

img {
  display: block;
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid gray;
  aspect-ratio: 3/2;
}
```

```css live-sample___scrollable
.retour-en-haut {
  width: 64px;
  height: 64px;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  translate: 80px 0;
  transition:
    0.4s translate,
    0.2s background-color;
}
```

```css hidden live-sample___scrollable
.retour-en-haut {
  text-decoration: none;
  border-radius: 50%;
  border: 1px solid #00000077;
  background-color: #00000077;
  color: white;
  font-size: 3rem;
  text-shadow: 0 0 2px black;
  padding-bottom: 10px;
}

.retour-en-haut:hover,
.retour-en-haut:focus {
  background: #00000099;
}
```

Le {{Glossary("scroll container", "conteneur de défilement")}} dans cet exemple est l'élément `<html>` lui-même, désigné comme un conteneur de requête d'état de défilement avec une valeur de {{CSSxRef("container-type")}} sur `scroll-state`. Le nom de conteneur ({{CSSxRef("container-name")}}) n'est pas strictement nécessaire mais est utile dans les cas où le code est ajouté à une base de code avec plusieurs conteneurs de requête d'état de défilement ciblés par différentes requêtes.

```css live-sample___scrollable
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Ensuite, nous définissons un bloc {{CSSxRef("@container")}} qui définit le nom du conteneur ciblé par cette requête, ainsi que la requête elle-même — `scrollable: top`. Cette requête applique les règles contenues dans le bloc uniquement si l'élément `<html>` peut être défilé vers son bord supérieur — en d'autres termes, si le conteneur a été précédemment défilé vers le bas. Dans ce cas, `translate: 0 0` est appliqué au lien `.retour-en-haut`, ce qui le fait revenir à l'écran.

```css live-sample___scrollable
@container scroller scroll-state(scrollable: top) {
  .retour-en-haut {
    translate: 0 0;
  }
}
```

N'avons caché le reste du CSS de l'exemple pour des raisons de concision.

### Résultat

{{EmbedLiveSample("scrollable", "100%", 400)}}

Essayez de faire défiler le document vers le bas et notez comment le lien «&nbsp;retour-en-haut&nbsp;» apparaît en conséquence, animant en douceur depuis le côté droit de la fenêtre grâce à la `transition`. Si vous faites défiler vers le haut en activant le lien ou en faisant défiler manuellement, le lien «&nbsp;retour-en-haut&nbsp;» disparaît de l'écran.

## Utiliser les requêtes `scrolled`

Les requêtes d'état de défilement [`scrolled`](/fr/docs/Web/CSS/Reference/At-rules/@container#scrolled), écrites sous la forme `scroll-state(scrolled: <keyword>)`, testent si l'ancêtre défilant d'un conteneur a été récemment défilé dans la direction donnée. Sinon, la requête retourne `false`.

La valeur du mot-clé indique la direction que vous testez. Par exemple&nbsp;:

- `block-start`&nbsp;: Teste si le conteneur a été récemment défilé vers son bord de début de bloc.
- `right`&nbsp;: Teste si le conteneur a été récemment défilé vers son bord droit.
- `y`&nbsp;: Teste si le conteneur a été récemment défilé vers le haut ou vers le bas le long de l'axe y.
- `none`&nbsp;: Teste si le conteneur n'est pas un {{Glossary("scroll container", "conteneur de défilement")}} ou n'a pas été défilé dans une direction depuis le rendu.

Si le test retourne `true`, les règles à l'intérieur du bloc `@container` sont appliquées aux descendants du conteneur de défilement correspondant.

Voyons un exemple de conteneur de défilement avec une requête `scrolled` qui affiche les «&nbsp;barres&nbsp;» de contenu en haut et en bas uniquement lorsque l'utilisateur·ice fait défiler vers le haut ou vers le bas, respectivement.

### HTML

Dans notre HTML, nous avons un élément {{HTMLElement("article")}} contenant suffisamment de contenu pour provoquer le défilement du document, précédé de deux éléments {{HTMLElement("div")}} qui représentent nos «&nbsp;barres&nbsp;» supérieure et inférieure&nbsp;:

```html
<div class="barre" id="barre-haute">
  Vous faites actuellement défiler vers le haut.
</div>
<div class="barre" id="barre-basse">
  Vous faites actuellement défiler vers le bas.
</div>
<article>
  <h1>Document avec une requête de conteneur défilé</h1>
  <section>
    <header>
      <h2>Cette première section est intéressante</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    ...
  </section>

  ...
</article>
```

Nous avons masqué la plupart du HTML pour des raisons de concision.

```html hidden live-sample___scrolled
<div class="barre" id="barre-haute">
  Vous faites actuellement défiler vers le haut.
</div>
<div class="barre" id="barre-basse">
  Vous faites actuellement défiler vers le bas.
</div>
<article>
  <h1>Document avec une requête de conteneur défilé</h1>
  <section>
    <header>
      <h2>Cette première section est intéressante</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <p>
      Mauris non malesuada est, sed vestibulum nibh. Duis vestibulum iaculis
      lectus, eu sagittis dolor dignissim iaculis. Nunc et orci sed sapien
      eleifend placerat. Curabitur dapibus risus eget odio sollicitudin, sit
      amet luctus justo pellentesque.
    </p>

    <p>
      <strong>Morbi non pharetra quam.</strong> Fusce vestibulum sem diam, ac
      consequat augue consectetur ut. Donec at augue viverra, tempus urna sit
      amet, porta augue.
      <em>Phasellus fringilla tincidunt sem ullamcorper varius.</em>
      Aenean gravida feugiat sem nec ultricies.
    </p>

    <img src="#" alt="Espace réservé" />

    <p>
      Sed pellentesque placerat mi sed maximus. Sed vitae dui vitae mi pulvinar
      gravida sed et libero.
      <a href="#">Duis nec venenatis dolor, sed tristique felis.</a>
      Integer dapibus facilisis leo elementum vulputate. Curabitur a urna quis
      nulla vulputate tincidunt quis ac enim.
    </p>

    <p>
      Cras non elit vel leo dignissim convallis. Duis eros urna, varius sit amet
      lorem vel, feugiat euismod est.
      <strong>Aliquam ornare eu elit ut iaculis.</strong> Suspendisse vulputate
      tempor leo, non rhoncus risus aliquam vel.
    </p>
  </section>
  <section>
    <header>
      <h2>Cette section, pas tellement</h2>

      <p>Suspendisse varius est ac turpis mollis cursus.</p>
    </header>

    <p>
      <strong
        >Curabitur faucibus condimentum eros, ut auctor felis lacinia
        sed.</strong
      >
      Praesent vitae scelerisque eros.
    </p>

    <p>
      <em>Ut vitae suscipit augue.</em> Cras et orci condimentum ante dignissim
      iaculis. Sed consectetur quis est sed dignissim. Nulla egestas orci erat,
      et commodo arcu feugiat ut.
    </p>

    <img src="#" alt="Espace réservé" />

    <p>
      Sed non tempor massa, at accumsan ante. Pellentesque habitant morbi
      <a href="#">tristique senectus</a> et netus et malesuada fames ac turpis
      egestas.
    </p>

    <p>
      Pellentesque placerat luctus tempor. Nunc congue dapibus eros, at
      vulputate nulla. Sed rutrum eleifend magna vel porta. Integer cursus orci
      faucibus turpis scelerisque, nec pharetra arcu molestie.
    </p>
  </section>
  <section>
    <header>
      <h2>Espérons que cette section apporte un peu de clarté&nbsp;?</h2>

      <p>Curabitur facilisis ornare lorem et eleifend.</p>
    </header>

    <p>
      <strong>Aenean mollis non neque sed finibus.</strong> Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Suspendisse sagittis viverra urna.
      In hac habitasse platea dictumst. Vestibulum neque orci, mollis sagittis
      augue et, pharetra vehicula diam.
    </p>

    <img src="#" alt="Espace réservé" />

    <p>
      <a href="#">Pellentesque sollicitudin</a> nunc quis nisl condimentum, ac
      iaculis libero feugiat.
      <strong>Nullam ultrices purus a nulla dignissim hendrerit.</strong>
      In molestie consectetur est quis pulvinar.
    </p>

    <p>
      Vivamus ac erat eu est lobortis commodo. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. In nulla turpis,
      <strong>mollis et est tempor</strong>, dignissim aliquam metus. Proin eu
      arcu quis erat mollis pulvinar. Vivamus at facilisis neque.
    </p>

    <p>
      Integer bibendum laoreet erat, quis vulputate mauris bibendum nec. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Nam ut est in arcu interdum hendrerit.
    </p>
  </section>
  <section>
    <header>
      <h2>Un résumé en quelque sorte</h2>

      <p>Nunc facilisis augue quis ex porta aliquam.</p>
    </header>

    <img src="#" alt="Espace réservé" />

    <p>
      <strong>
        Fusce nisi enim, venenatis a est vel, varius placerat lacus.
      </strong>
      Nunc tempus rutrum nisl bibendum aliquet. Pellentesque vitae nunc sed nisl
      tincidunt elementum a sit amet nisi. Morbi pretium at dolor in pulvinar.
      Curabitur dapibus eleifend accumsan.
    </p>

    <p>
      Donec rhoncus, leo vitae mollis maximus, tellus lorem interdum arcu, eu
      <em>tempor lectus libero in risus</em>. Ut sit amet magna vitae mauris
      tempor bibendum.
      <a href="#">Integer id mauris ut ex mattis finibus.</a>
    </p>

    <p>
      Curabitur dui felis, elementum et tellus id, blandit facilisis lorem.
      Aliquam sed posuere ligula, at auctor ipsum. Morbi dignissim accumsan
      tellus pretium iaculis.
    </p>
  </section>
</article>
```

### CSS

Les «&nbsp;barres&nbsp;» reçoivent un style rudimentaire. Plus important encore, elles reçoivent une valeur {{CSSxRef("position")}} de `fixed`, que nous décalons de chaque côté en utilisant les valeurs {{CSSxRef("left")}} et {{CSSxRef("right")}}.

```css hidden live-sample___scrolled
/* Mise en forme générale */

* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 90%;
  margin: 0 auto;
}

p {
  line-height: 1.5;
}

img {
  display: block;
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid gray;
  aspect-ratio: 3/2;
}
```

```css live-sample___scrolled
.barre {
  border-radius: 10px;
  border: 1px solid black;
  background-color: #00000099;
  padding: 10px;
  color: white;
  text-shadow: 1px 1px 1px black;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 5px;
  right: 5px;
}
```

Ensuite, nous définissons des valeurs de longueur négatives pour {{CSSxRef("top")}} et {{CSSxRef("bottom")}} sur les barres supérieure et inférieure afin qu'elles soient cachées au-dessus et en dessous de la fenêtre par défaut. Nous ajoutons une {{CSSxRef("transition")}} pour les animer en douceur lorsqu'elles apparaissent à l'écran lorsque leurs valeurs {{CSSxRef("translate")}} changent.

```css live-sample___scrolled
#barre-haute {
  top: -50px;
  transition: 0.6s translate;
}

#barre-basse {
  bottom: -50px;
  transition: 0.6s translate;
}
```

Le {{Glossary("scroll container", "conteneur de défilement")}} dans cet exemple est l'élément `<html>` lui-même, désigné comme un conteneur de requêtes d'état de défilement avec une valeur de {{CSSxRef("container-type")}} à `scroll-state`. Le nom de conteneur ({{CSSxRef("container-name")}}) n'est pas strictement nécessaire, mais il est utile lorsqu'une base de code comporte plusieurs conteneurs de requêtes d'état de défilement ciblés par différentes requêtes.

```css live-sample___scrolled
html {
  container-type: scroll-state;
  container-name: defileur;
}
```

Ensuite, nous définissons deux blocs {{CSSxRef("@container")}}, tous deux ciblant le nom de conteneur `defileur`. Le premier bloc définit une requête `scrolled: block-end` et le second définit une requête `scrolled: block-start`. Respectivement, ces requêtes appliquent les règles contenues dans leur bloc uniquement si l'élément `<html>` a été récemment défilé vers son bord de fin de bloc ou de début de bloc. En d'autres termes, lorsque le conteneur est défilé vers le bas ou vers le haut. Lorsque l'une de ces conditions devient vraie, la barre référencée à l'intérieur du bloc a une valeur `translate` définie pour la faire apparaître à l'écran. La barre référencée dans la `@condition` qui n'est plus vraie disparaît de l'écran.

```css live-sample___scrolled
@container defileur scroll-state(scrolled: block-start) {
  #barre-haute {
    translate: 0 55px;
  }
}

@container defileur scroll-state(scrolled: block-end) {
  #barre-basse {
    translate: 0 -55px;
  }
}
```

Nous avons masqué le reste du CSS de l'exemple pour plus de concision.

### Résultat

{{EmbedLiveSample("scrolled", "100%", 400)}}

Essayez de faire défiler le document vers le haut et vers le bas, et notez comment les différentes barres apparaissent en conséquence, animant en douceur à l'écran et hors de l'écran.

## Utiliser les requêtes `snapped`

Pertinent uniquement lorsque le [défilement avec accrochage](/fr/docs/Web/CSS/Guides/Scroll_snap) est implémenté, les requêtes scroll-state [`snapped`](/fr/docs/Web/CSS/Reference/At-rules/@container#snapped), écrites comme `scroll-state(snapped: <keyword>)`, testent si un conteneur va être aligné sur un ancêtre [du conteneur de défilement avec accrochage](/fr/docs/Glossary/Scroll_snap#scroll_snap_container) le long de l'axe donné. Sinon, la requête retourne `false`.

La valeur du mot-clé dans ce cas indique la direction dans laquelle vous testez la capacité de l'élément à s'accrocher, par exemple&nbsp;:

- `x`&nbsp;: Testez si le conteneur s'accroche horizontalement à son ancêtre conteneur de défilement avec accrochage.
- `inline`&nbsp;: Testez si le conteneur s'accroche à son ancêtre conteneur de défilement avec accrochage dans la direction inline.
- `y`&nbsp;: Testez si le conteneur s'accroche à son ancêtre conteneur de défilement avec accrochage dans les deux directions.

Pour évaluer un conteneur avec une requête d'état de défilement `snapped` autre que `none`, il doit s'agir d'un conteneur ayant un ancêtre conteneur de défilement avec accrochage, c'est-à-dire que l'ancêtre a une valeur {{CSSxRef("scroll-snap-type")}} autre que `none`. La requête de conteneur `scroll-state(snapped: none)` correspond aux conteneurs d'état de défilement qui n'ont pas de conteneur de défilement comme ancêtre.

L'évaluation se produit lorsque l'évènement [`scrollsnapchanging`](/fr/docs/Web/API/Element/scrollsnapchanging_event) se déclenche sur le conteneur de défilement avec accrochage.

Si le test réussit, les règles à l'intérieur du bloc `@container` sont appliquées aux descendants du conteneur cible de défilement avec accrochage correspondant.

Dans cet exemple, nous examinons un conteneur de défilement avec accrochage dont les enfants s'accrochent verticalement et utilisons une requête `snapped` pour mettre en forme les enfants uniquement lorsqu'ils sont accrochés ou sur le point de l'être.

### HTML

Le code HTML se compose d'un élément {{HTMLElement("main")}} qui agit comme conteneur d'accrochage au défilement. À l'intérieur se trouvent plusieurs éléments {{HTMLElement("section")}} qui servent de cibles d'accrochage. Chaque `<section>` contient un élément d'encapsulation {{HTMLElement("div")}} et un [titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`. Les éléments d'encapsulation sont inclus pour créer une cible de style, car les requêtes de conteneur permettent de mettre en forme les descendants d'un conteneur, et non le conteneur lui-même.

```html
<main>
  <section>
    <div class="enveloppe">
      <h2>Section 1</h2>
    </div>
  </section>

  ...
</main>
```

Nous avons masqué la majeure partie du HTML pour des raisons de concision.

```html hidden live-sample___snapped
<main>
  <section>
    <div class="enveloppe">
      <h2>Section 1</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 2</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 3</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 4</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 5</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 6</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 7</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 8</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 9</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 10</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 11</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 12</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 13</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 14</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 15</h2>
    </div>
  </section>
  <section>
    <div class="enveloppe">
      <h2>Section 16</h2>
    </div>
  </section>
</main>
```

### CSS

```css hidden live-sample___snapped
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

/* taille du body et du main */

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

main {
  gap: 50px;
}
```

Nous avons défini une valeur de débordement ({{CSSxRef("overflow")}}) sur `scroll` et une hauteur ({{CSSxRef("height")}}) fixe sur l'élément `<main>` pour en faire un conteneur de défilement vertical. Nous avons également défini une valeur {{CSSxRef("scroll-snap-type")}} à `y mandatory` pour transformer `<main>` en conteneur de défilement auquel les cibles de défilement s'alignent le long de l'axe vertical&nbsp;; `mandatory` signifie qu'une cible de défilement est _toujours_ alignée.

```css live-sample___snapped
main {
  overflow: scroll;
  scroll-snap-type: y mandatory;
  height: 450px;
  width: 250px;
  border: 3px solid black;
}
```

Les éléments `<section>` sont désignés comme cibles de défilement en définissant une valeur {{CSSxRef("scroll-snap-align")}} qui n'est pas `none`. La valeur `center` signifie qu'ils s'alignent au centre de leur conteneur.

```css live-sample___snapped
section {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 150px;
  height: 150px;
  margin: 50px auto;

  scroll-snap-align: center;
}
```

```css hidden live-sample___snapped
.enveloppe {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #eeeeee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    0.6s background,
    0.6s color;
}

h2 {
  font-size: 1rem;
  letter-spacing: 1px;
}
```

Nous voulons permettre aux éléments `<section>` d'être interrogés. Plus précisément, nous voulons tester si les éléments `<section>` sont en train de s'aligner sur leur conteneur, nous les désignons donc comme des conteneurs de requêtes d'état de défilement en définissant une valeur {{CSSxRef("container-type")}} de `scroll-state` sur eux. Nous leur donnons également un {{CSSxRef("container-name")}}, ce qui n'est pas strictement nécessaire, mais est utile si notre code devient plus complexe plus tard et que nous avons plusieurs conteneurs de requêtes d'état de défilement que nous voulons cibler avec différentes requêtes.

```css live-sample___snapped
section {
  container-type: scroll-state;
  container-name: conteneur-accroche;
}
```

Ensuite, nous définissons un bloc {{CSSxRef("@container")}} qui définit le nom du conteneur que nous ciblons avec cette requête, ainsi que la requête elle-même — `snapped: y`. Cette requête applique les règles contenues dans le bloc uniquement si un élément `<section>` est en train de s'aligner verticalement sur son conteneur. Dans ce cas, nous appliquons un nouveau {{CSSxRef("background")}} et {{CSSxRef("color")}} à l'élément enfant `.enveloppe` de `<section>` pour le mettre en évidence.

```css live-sample___snapped
@container conteneur-accroche scroll-state(snapped: y) {
  .enveloppe {
    background: purple;
    color: white;
  }
}
```

### Résultat

Le résultat rendu est montré ci-dessous. Essayez de faire défiler le conteneur vers le haut et vers le bas, et notez comment le style de `<section>` change lorsqu'il s'aligne sur son conteneur.

{{EmbedLiveSample("snapped", "100%", 500)}}

## Utiliser les requêtes `stuck`

La requête d'état de défilement [`stuck`](/fr/docs/Web/CSS/Reference/At-rules/@container#scrollable) teste si un conteneur avec une valeur {{CSSxRef("position")}} de `sticky` est collé à un bord de son conteneur de défilement ancêtre. Sinon, la requête retourne `false`.

La valeur du mot-clé dans ce cas indique le bord du conteneur de défilement que vous testez, par exemple&nbsp;:

- `top`&nbsp;: Teste si le conteneur est collé au bord supérieur de son conteneur de défilement ancêtre.
- `block-end`&nbsp;: Teste si le conteneur est collé au bord inférieur de son conteneur de défilement ancêtre.
- `none`&nbsp;: Teste si le conteneur n'est collé à aucun bord de son conteneur de défilement ancêtre. Notez que les requêtes `none` correspondent même si le conteneur n'a pas `position: sticky` défini.

Si la requête retourne `true`, les règles à l'intérieur du bloc `@container` sont appliquées aux descendants du conteneur `position: sticky` correspondant.

Voyons un exemple où nous avons un conteneur défilant avec un contenu débordant, dans lequel les en-têtes sont définis avec `position: sticky` et restent collés au bord supérieur du conteneur lorsqu'ils défilent jusqu'à cette position. Nous utilisons une requête d'état de défilement `stuck` pour mettre en forme les en-têtes différemment lorsqu'ils sont collés au bord supérieur.

### HTML

Dans le HTML, nous avons un élément {{HTMLElement("article")}} contenant suffisamment de contenu pour provoquer le défilement du document. Il est structuré en plusieurs éléments {{HTMLElement("section")}}, chacun contenant un {{HTMLElement("header")}} avec du contenu imbriqué&nbsp;:

```html
<article>
  <h1>
    Lecteur collant avec requête de conteneur en fonction de l'état de
    défilement
  </h1>
  <section>
    <header>
      <h2>Cette première section est intéressante</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    ...
  </section>

  <section>
    <header>
      <h2>Cette section, pas tellement</h2>

      <p>Confecta res esset.</p>
    </header>

    ...
  </section>

  ...
</article>
```

Nous avons caché la majeure partie du HTML pour des raisons de concision.

```html hidden live-sample___stuck
<article>
  <h1>
    Lecteur collant avec requête de conteneur en fonction de l'état de
    défilement
  </h1>
  <section>
    <header>
      <h2>Cette première section est intéressante</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <p>
      Mauris non malesuada est, sed vestibulum nibh. Duis vestibulum iaculis
      lectus, eu sagittis dolor dignissim iaculis. Nunc et orci sed sapien
      eleifend placerat. Curabitur dapibus risus eget odio sollicitudin, sit
      amet luctus justo pellentesque.
    </p>

    <p>
      <strong>Morbi non pharetra quam.</strong> Fusce vestibulum sem diam, ac
      consequat augue consectetur ut. Donec at augue viverra, tempus urna sit
      amet, porta augue.
      <em>Phasellus fringilla tincidunt sem ullamcorper varius.</em>
      Aenean gravida feugiat sem nec ultricies.
    </p>

    <img src="#" alt="Espace réservé" />

    <p>
      Sed pellentesque placerat mi sed maximus. Sed vitae dui vitae mi pulvinar
      gravida sed et libero.
      <a href="#">Duis nec venenatis dolor, sed tristique felis.</a>
      Integer dapibus facilisis leo elementum vulputate. Curabitur a urna quis
      nulla vulputate tincidunt quis ac enim.
    </p>

    <p>
      Cras non elit vel leo dignissim convallis. Duis eros urna, varius sit amet
      lorem vel, feugiat euismod est.
      <strong>Aliquam ornare eu elit ut iaculis.</strong> Suspendisse vulputate
      tempor leo, non rhoncus risus aliquam vel.
    </p>
  </section>
  <section>
    <header>
      <h2>Cette section, pas tellement</h2>

      <p>Suspendisse varius est ac turpis mollis cursus.</p>
    </header>

    <p>
      <strong
        >Curabitur faucibus condimentum eros, ut auctor felis lacinia
        sed.</strong
      >
      Praesent vitae scelerisque eros.
    </p>

    <p>
      <em>Ut vitae suscipit augue.</em> Cras et orci condimentum ante dignissim
      iaculis. Sed consectetur quis est sed dignissim. Nulla egestas orci erat,
      et commodo arcu feugiat ut.
    </p>

    <img src="#" alt="Espace réservé" />

    <p>
      Sed non tempor massa, at accumsan ante. Pellentesque habitant morbi
      <a href="#">tristique senectus</a> et netus et malesuada fames ac turpis
      egestas.
    </p>

    <p>
      Pellentesque placerat luctus tempor. Nunc congue dapibus eros, at
      vulputate nulla. Sed rutrum eleifend magna vel porta. Integer cursus orci
      faucibus turpis scelerisque, nec pharetra arcu molestie.
    </p>
  </section>
  <section>
    <header>
      <h2>Espérons que cette section apporte un peu de clarté&nbsp;?</h2>

      <p>Curabitur facilisis ornare lorem et eleifend.</p>
    </header>

    <p>
      <strong>Aenean mollis non neque sed finibus.</strong> Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Suspendisse sagittis viverra urna.
      In hac habitasse platea dictumst. Vestibulum neque orci, mollis sagittis
      augue et, pharetra vehicula diam.
    </p>

    <img src="#" alt="Espace réservé" />

    <p>
      <a href="#">Pellentesque sollicitudin</a> nunc quis nisl condimentum, ac
      iaculis libero feugiat.
      <strong>Nullam ultrices purus a nulla dignissim hendrerit.</strong>
      In molestie consectetur est quis pulvinar.
    </p>

    <p>
      Vivamus ac erat eu est lobortis commodo. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. In nulla turpis,
      <strong>mollis et est tempor</strong>, dignissim aliquam metus. Proin eu
      arcu quis erat mollis pulvinar. Vivamus at facilisis neque.
    </p>

    <p>
      Integer bibendum laoreet erat, quis vulputate mauris bibendum nec. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Nam ut est in arcu interdum hendrerit.
    </p>
  </section>
  <section>
    <header>
      <h2>Un résumé en quelque sorte</h2>

      <p>Nunc facilisis augue quis ex porta aliquam.</p>
    </header>

    <img src="#" alt="Espace réservé" />

    <p>
      <strong>
        Fusce nisi enim, venenatis a est vel, varius placerat lacus.
      </strong>
      Nunc tempus rutrum nisl bibendum aliquet. Pellentesque vitae nunc sed nisl
      tincidunt elementum a sit amet nisi. Morbi pretium at dolor in pulvinar.
      Curabitur dapibus eleifend accumsan.
    </p>

    <p>
      Donec rhoncus, leo vitae mollis maximus, tellus lorem interdum arcu, eu
      <em>tempor lectus libero in risus</em>. Ut sit amet magna vitae mauris
      tempor bibendum.
      <a href="#">Integer id mauris ut ex mattis finibus.</a>
    </p>

    <p>
      Curabitur dui felis, elementum et tellus id, blandit facilisis lorem.
      Aliquam sed posuere ligula, at auctor ipsum. Morbi dignissim accumsan
      tellus pretium iaculis.
    </p>
  </section>
</article>
```

### CSS

Chaque `<header>` a une valeur de {{CSSxRef("position")}} à `sticky` et une valeur de {{CSSxRef("top")}} à `0`, ce qui les fixe au bord supérieur du conteneur de défilement. Pour tester si les éléments `<header>` sont fixés au bord supérieur du conteneur, ils sont désignés comme des conteneurs de requêtes d'état de défilement avec une valeur {{CSSxRef("container-type")}} de `scroll-state`. Le {{CSSxRef("container-name")}} n'est pas strictement nécessaire mais est utile si ce code est ajouté à une base de code avec plusieurs conteneurs de requêtes d'état de défilement ciblés par différentes requêtes.

```css hidden live-sample___stuck
/* Mise en forme générale */

* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 100%;
  max-width: 540px;
  padding: 20px;
  margin: 0 auto;
}

p {
  line-height: 1.5;
}

img {
  display: block;
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid gray;
  aspect-ratio: 3/2;
}
```

```css live-sample___stuck
header {
  background: white;
  position: sticky;
  top: 0;
  container-type: scroll-state;
  container-name: titre-collant;
}
```

Nous donnons également aux éléments `<h2>` et `<p>` à l'intérieur des éléments `<header>` une mise en forme de base, ainsi qu'une valeur {{CSSxRef("transition")}} afin qu'ils s'animent en douceur lorsque leurs valeurs {{CSSxRef("background")}} changent.

```css live-sample___stuck
h2,
header p {
  margin: 0;
  transition: 0.4s background;
}

h2 {
  padding: 20px 5px;
  margin-bottom: 10px;
}

header p {
  font-style: italic;
  padding: 10px 5px;
}
```

Ensuite, nous définissons un bloc {{CSSxRef("@container")}} qui définit le nom du conteneur que nous ciblons avec cette requête, ainsi que la requête elle-même — `stuck: top`. Cette requête applique les règles contenues dans le bloc uniquement si un élément `<header>` est fixé au bord supérieur de son conteneur de défilement. Dans ce cas, un `background` différent et une {{CSSxRef("box-shadow")}} sont appliqués aux éléments `<h2>` et `<p>` contenus.

```css live-sample___stuck
@container titre-collant scroll-state(stuck: top) {
  h2,
  p {
    background: #cccccc;
    box-shadow: 0 5px 2px #00000077;
  }
}
```

```css hidden live-sample___scrollable live-sample___scrolled live-sample___snapped live-sample___stuck
@supports not (container-type: scroll-state) {
  body::before {
    content: "Votre navigateur ne prend pas en charge les requêtes de conteneur `scroll-state`.";
    color: black;
    background-color: wheat;
    position: fixed;
    left: 0;
    right: 0;
    top: 40%;
    text-align: center;
    padding: 1rem 0;
    z-index: 1;
  }
}
```

Nous avons masqué le reste du CSS pour plus de concision.

### Résultat

Essayez de faire défiler le document vers le bas et vers le haut, et notez comment les éléments `<h2>` et `<p>` passent à un nouveau schéma de couleurs lorsqu'ils deviennent collés au bord supérieur de leur conteneur.

{{EmbedLiveSample("stuck", "100%", 400)}}

## Voir aussi

- La propriété {{CSSxRef("container-name")}}
- La propriété {{CSSxRef("container-type")}}
- La propriété {{CSSxRef("position")}}
- La règle {{CSSxRef("@container")}}
- [Requêtes de conteneur CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries)
- [Utiliser les requêtes de taille et de style de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- Le module [des règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules)
- Le module [du positionnement CSS](/fr/docs/Web/CSS/Guides/Positioned_layout)
