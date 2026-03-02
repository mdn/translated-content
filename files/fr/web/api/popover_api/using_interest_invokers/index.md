---
title: Utilisation des invocateurs d'intérêt
slug: Web/API/Popover_API/Using_interest_invokers
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{DefaultAPISidebar("Popover API")}}

**Les invocateurs d'intérêt** fournissent un mécanisme pour mettre à jour une interface ou exécuter du code personnalisé lorsqu'un·e utilisateur·ice «&nbsp;montre de l'intérêt&nbsp;» ou «&nbsp;perd de l'intérêt&nbsp;» pour un élément (par exemple en le survolant ou en cessant de le survoler). Ils sont le plus souvent utilisés pour afficher et masquer des fenêtres contextuelles (<i lang="en">popovers</i> en anglais). Ce guide explique les concepts derrière les invocateurs d'intérêt, leurs cas d'utilisation et comment les employer.

## Concepts

L'API Popover permet d'afficher une fenêtre contextuelle lorsqu'un élément de contrôle lié (l'**invocateur**) est activé, par exemple lorsqu'on clique dessus. Cette fonctionnalité est utile pour afficher des éléments d'interface tels que des boîtes d'information ou des panneaux. Vous pouvez [créer des fenêtres contextuelles de manière déclarative](/fr/docs/Web/API/Popover_API/Using#créer_des_fenêtres_contextuelles_déclaratives) en utilisant l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Elements/button#popover) conjointement avec soit [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget), soit [`commandfor`](/fr/docs/Web/HTML/Reference/Elements/button#commandfor).

Outre ces fenêtres contextuelles déclenchées par activation, il est fréquent de vouloir afficher une fenêtre contextuelle lorsque l'utilisateur·ice survole ou met le focus sur un élément — des interactions qui indiquent son intérêt. Par exemple, de nombreux sites permettent de survoler un lien vers le profil d'une personne ou d'un groupe pour afficher une fenêtre contextuelle contenant davantage d'informations. Cet aperçu rapide aide à décider si l'on souhaite visiter la page complète. Ces fenêtres contextuelles peuvent aussi contenir des actions rapides, telles que «&nbsp;Suivre&nbsp;» ou «&nbsp;S'abonner au groupe&nbsp;», permettant d'agir sans perdre le contexte courant.

Les invocateurs d'intérêt permettent au navigateur de proposer un comportement de fenêtres contextuelles fondé sur l'intérêt de manière cohérente et accessible, sans nécessiter JavaScript. Le navigateur détermine quand une personne montre de l'intérêt pour un élément et, par conséquent, quand une action doit être lancée. Montrer de l'intérêt se produit généralement lorsque l'utilisateur·ice survole, met le focus ou appuie longuement sur l'élément (la nature exacte de «&nbsp;l'intérêt&nbsp;» peut varier selon les navigateurs), et perdre l'intérêt survient généralement lorsque l'interaction cesse.

Le navigateur déclenche également des événements lorsque l'intérêt est acquis ou perdu, ce qui permet d'exécuter du code en réponse. De plus, cette fonctionnalité comprend des propriétés CSS et des sélecteurs pour styliser les éléments en fonction de l'intérêt.

> [!NOTE]
> Sur les appareils disposant d'une touche <kbd>Esc</kbd>, l'appui sur celle-ci annule tout intérêt. Cela fournit un moyen d'évasion général si l'interaction devient gênante ou indésirable.

Vous pouvez aussi utiliser les invocateurs d'intérêt pour exécuter du code personnalisé dans des [scénarios sans fenêtres contextuelles](#utilisation_des_invocateurs_dinteret_sans_fenetres_contextuelles). Cependant, ce guide se concentre principalement sur les fenêtres contextuelles, qui constituent l'usage le plus courant.

## Création d'un invocateur d'intérêt

La création déclarative d'un invocateur d'intérêt requiert deux éléments&nbsp;:

- Un **élément invocateur**&nbsp;: c'est l'élément avec lequel l'utilisateur·ice interagit pour indiquer son intérêt et déclencher une action (par exemple afficher ou masquer un popover). L'élément invocateur doit posséder un attribut [`interestfor`](/fr/docs/Web/HTML/Reference/Elements/a#interestfor) dont la valeur est l'`id` de l'élément cible. L'élément invocateur peut être un élément HTML {{HTMLElement("a")}}, {{HTMLElement("button")}} ou {{HTMLElement("area")}}, ou un élément SVG [`<a>`](/fr/docs/Web/SVG/Reference/Element/a).

- Un **élément cible**&nbsp;: c'est l'élément affecté ou contrôlé lorsque l'intérêt est acquis ou perdu. L'élément cible doit posséder un `id` et peut être de presque n'importe quel type. L'ajout de l'attribut `popover` transforme cet élément en popover.

  > [!NOTE]
  > Vous pouvez aussi définir l'élément cible de façon programmatique en affectant à la propriété DOM `interestForElement` de l'élément invocateur une référence vers l'élément cible. Pour plus d'informations, voir la section [L'API JavaScript de l'invocateur d'intérêt](#lapi_javascript_de_linvocateur_dinteret) plus bas dans ce guide.

Voici un exemple simple &nbsp;: l'**invocateur** est un lien et l'**élément cible** est un paragraphe portant l'attribut `popover`.

```css hidden live-sample___basic-interest-invoker live-sample___interest-invoker-popover-interaction live-sample___interest-invoker-styling live-sample___interest-invoker-api live-sample___non-popover live-sample___link-preview-popover
.no-interest-invokers body::before {
  content: "Votre navigateur ne prend pas en charge les invocateurs d'intérêt.";
  background-color: wheat;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
```

```js hidden live-sample___basic-interest-invoker live-sample___interest-invoker-popover-interaction live-sample___interest-invoker-styling live-sample___interest-invoker-api live-sample___non-popover live-sample___link-preview-popover
const supported =
  HTMLButtonElement.prototype.hasOwnProperty("interestForElement");
if (!supported) {
  document.querySelector("html").classList.add("no-interest-invokers");
}
```

```html live-sample___basic-interest-invoker
<p>Du texte avec un <a href="#" interestfor="mypopover">lien</a>.</p>
<p id="mypopover" popover>Un bref aperçu contenant quelques informations</p>
```

L'ajout de l'attribut `popover` sur l'élément cible le masque (via {{CSSxRef("display", "display: none")}}) et le centre à l'écran. Montrer de l'intérêt pour l'élément invocateur (le lien) provoque l'affichage de la fenêtre contextuelle.

Cela s'affiche comme suit. Essayez d'interagir avec le lien&nbsp;:

{{EmbedLiveSample("basic-interest-invoker", "100%", "150")}}

Remarquez que la fenêtre contextuelle apparaît lorsque le lien est survolé, ciblé ou appuyé longuement, et disparaît lorsque l'interaction cesse. En revanche, si le lien est activé (par exemple par un clic de souris), il se comporte comme un lien normal — sauf que dans cet exemple il ne mène nulle part.

La valeur de l'attribut `popover` n'affecte pas le comportement de la fenêtre contextuelle dans cet exemple. Cependant, elle devient importante lorsque vous combinez des fenêtres contextuelles d'invocateurs d'intérêt avec des fenêtres contextuelles classiques, comme montré dans la section suivante.

## Combiner invocateurs d'intérêt et fenêtres contextuelles déclenchées par activation

Il est possible de combiner des invocateurs d'intérêt et des fenêtres contextuelles classiques sur le même élément de contrôle. Dans l'exemple suivant, un élément {{HTMLElement("button")}} est configuré comme invocateur d'intérêt via l'attribut `interestfor`&nbsp;: il affichera une info‑bulle lorsque l'utilisateur·ice montrera de l'intérêt pour celui‑ci. Si le bouton est cliqué, il affichera ou masquera un autre fenêtre contextuelle référencée par l'attribut `commandfor`. L'attribut [`command`](/fr/docs/Web/HTML/Reference/Elements/button#command) est défini sur `toggle-popover`, permettant d'appuyer plusieurs fois sur le bouton pour basculer l'état de la fenêtre contextuelle.

```css hidden live-sample___interest-invoker-popover-interaction
#mytooltip {
  position-area: right;
}

#myinfobox {
  position-area: bottom;
}
```

```html live-sample___interest-invoker-popover-interaction
<p>
  Du contenu incluant un
  <button
    interestfor="mytooltip"
    commandfor="myinfobox"
    command="toggle-popover">
    bouton
  </button>
</p>
<p id="mytooltip" popover="hint">Une info-bulle au survol</p>
<p id="myinfobox" popover>
  Une boîte d'information qui contient également quelques boutons de contrôle<br />
  <button>Bouton 1</button> <button>Bouton 2</button>
</p>
```

Cela s'affiche comme suit&nbsp;:

{{EmbedLiveSample("interest-invoker-popover-interaction", "100%", "150")}}

Vous pouvez montrer de l'intérêt sur le bouton pour afficher l'info-bulle, et cliquer sur le bouton pour révéler la boîte d'information. Notez que les valeurs de l'attribut `popover` importent ici — la fenêtre de l'info-bulle est définie avec [`popover="hint"`](/fr/docs/Web/API/Popover_API/Using#utiliser_létat_«_hint_»_des_fenêtres_contextuelles), tandis que la boîte d'information utilise simplement `popover` (équivalent à `popover="auto"`). Cela permet à l'info-bulle de rester visible même lorsque la boîte d'information est affichée. Si les deux fenêtres contextuelles étaient définis sur `auto`, vous ne pourriez pas voir à la fois l'info-bulle et la boîte d'information. Dans une interface, il est utile de pouvoir afficher plusieurs info-bulles sans masquer des parties de l'interface déjà ouvertes.

## Mettre en forme des invocateurs d'intérêt

Lorsqu'on met en forme des fenêtres contextuelles (<i lang="en">popovers</i> en anglais) utilisées avec des invocateurs d'intérêt, on peut employer les mêmes techniques que pour n'importe quelle autre fenêtre contextuelle (voir [Mettre en forme des fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#mettre_en_forme_les_fenêtres_contextuelles)), y compris l'[utilisation du positionnement d'ancrage](/fr/docs/Web/API/Popover_API/Using#positionnement_dancrage_des_fenêtres_contextuelles) pour positionner les fenêtres contextuelles par rapport aux invocateurs et [l'animation des fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#animation_des_fenêtres_contextuelles).

Ceci dit, certaines fonctionnalités CSS sont spécifiques aux invocateurs d'intérêt&nbsp;:

- La propriété raccourcie {{CSSxRef("interest-delay")}} et ses propriétés longues associées {{CSSxRef("interest-delay-start")}} et {{CSSxRef("interest-delay-end")}}&nbsp;: elles permettent d'ajouter un délai entre le moment où l'utilisateur montre ou perd l'intérêt et celui où le navigateur agit — par exemple pour afficher ou masquer une fenêtre contextuelle.
- Les pseudo-classes {{CSSxRef(":interest-source")}} et {{CSSxRef(":interest-target")}}&nbsp;: elles permettent d'appliquer des styles respectivement à l'invocateur d'intérêt et à son élément cible associé, uniquement lorsque l'intérêt est indiqué.

Voyons un exemple simple qui montre le fonctionnement de ces fonctionnalités.

Nous avons défini deux boutons et une info-bulle. L'info-bulle s'affiche ou se masque lorsque l'utilisateur·ice montre ou perd l'intérêt pour l'un ou l'autre bouton.

```html live-sample___interest-invoker-styling
<p>
  <button interestfor="mytooltip">Button 1</button>
  <button interestfor="mytooltip">Button 2</button>
</p>
<p id="mytooltip" popover="hint">A hover tooltip</p>
```

Dans le CSS, nous avons défini un `interest-delay` de `1s 2s` sur le `<button>` — cela crée un délai d'une seconde avant que l'info-bulle n'apparaisse lorsque l'utilisateur·ice montre de l'intérêt, et un délai de deux secondes avant qu'elle ne disparaisse lorsque l'intérêt est perdu. Nous utilisons également le sélecteur `button:interest-source` pour changer la {{CSSxRef("background-color")}} des boutons en `orange` lorsque l'intérêt est indiqué.

```css live-sample___interest-invoker-styling
button {
  interest-delay: 1s 2s;
}

button:interest-source {
  background-color: orange;
}
```

Ensuite, nous combinons la pseudo-classe `:interest-source` avec la pseudo-classe {{CSSxRef(":has()")}} pour appliquer `interest-delay-start: 0s` à tous les boutons à l'intérieur du paragraphe, mais seulement lorsque le paragraphe contient un bouton sur lequel l'intérêt est indiqué (c'est‑à‑dire un bouton correspondant à `button:interest-source`). C'est une technique utile — faire apparaître immédiatement la fenêtre contextuelle dès que l'intérêt est montré sur n'importe quel bouton créerait une expérience utilisateur agaçante, mais après qu'un·e utilisateur·ice a montré de l'intérêt pour un bouton, il est pratique de pouvoir se déplacer rapidement entre les différentes fenêtres contextuelles.

```css live-sample___interest-invoker-styling
p:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

Nous avons aussi défini une propriété CSS {{CSSxRef("position-area")}} `bottom` sur l'info-bulle afin qu'elle apparaisse sous le bouton. Cela est possible car l'association d'une fenêtre contextuelle à son invocateur crée une référence d'ancrage implicite entre eux (voir [Positionnement d'ancrage des fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#positionnement_dancrage_des_fenêtres_contextuelles) pour plus de détails).

```css live-sample___interest-invoker-styling
#mytooltip {
  position-area: bottom;
}
```

Enfin, nous utilisons le sélecteur `#mytooltip:interest-target` pour appliquer une bordure en pointillés sur la fenêtre contextuelle lorsque l'intérêt est indiqué.

```css live-sample___interest-invoker-styling
#mytooltip:interest-target {
  border-style: dashed;
}
```

Cela se rend comme suit&nbsp;:

{{EmbedLiveSample("interest-invoker-styling", "100%", "150")}}

Essayez de montrer de l'intérêt sur le bouton (par exemple en le survolant ou en le ciblant) pour observer le comportement décrit ci‑dessus.

## L'API JavaScript de l'invocateur d'intérêt

Les invocateurs d'intérêt disposent d'une API JavaScript associée qui permet d'interroger l'élément ciblé par un invocateur d'intérêt et d'exécuter du code personnalisé lorsque l'intérêt est montré ou perdu. Les fonctionnalités de cette API sont&nbsp;:

- La propriété {{DOMxRef("HTMLButtonElement.interestForElement", "interestForElement")}}, disponible sur les interfaces {{DOMxRef("HTMLButtonElement")}}, {{DOMxRef("HTMLAnchorElement")}}, {{DOMxRef("HTMLAreaElement")}} et {{DOMxRef("SVGAElement")}}. Elle retourne une référence vers l'élément cible de l'invocateur d'intérêt. C'est l'élément dont l'`id` est référencé dans l'attribut `interestfor` équivalent de l'invocateur HTML ou SVG.
- Les événements {{DOMxRef("HTMLElement.interest_event", "interest")}} et {{DOMxRef("HTMLElement.loseinterest_event", "loseinterest")}}, qui sont déclenchés sur l'élément cible d'un invocateur d'intérêt lorsque l'intérêt est montré et perdu, respectivement. Vous pouvez écouter ces événements pour exécuter du code en réponse.
- L'interface {{DOMxRef("InterestEvent")}}, qui représente l'objet événement pour les événements `interest` et `loseinterest`. Elle comprend une propriété `source` contenant une référence vers l'élément invocateur associé.

### Détection de la prise en charge des invocateurs d'intérêt

Un des usages de l'API est la détection de fonctionnalités. Le moyen le plus simple de vérifier si les invocateurs d'intérêt sont pris en charge consiste à utiliser la méthode {{JSxRef("Object.hasOwnProperty()")}} sur un des types d'interface, afin de vérifier si la propriété `interestForElement` est présente.

Par exemple&nbsp;:

```js
const supported =
  HTMLButtonElement.prototype.hasOwnProperty("interestForElement");
```

Tous les exemples de ce guide utilisent cette technique pour détecter la prise en charge. Si la valeur retournée est `false`, indiquant que la fonctionnalité n'est pas prise en charge, nous ajoutons une classe à l'élément {{HTMLElement("html")}}&nbsp;:

```js
if (!supported) {
  document.querySelector("html").classList.add("no-interest-invokers");
}
```

Nous utilisons ensuite cette classe dans notre CSS pour afficher une bannière indiquant l'absence de prise en charge&nbsp;:

```css
.no-interest-invokers body::before {
  content: "Votre navigateur ne prend pas en charge les invocateurs d'intérêt.";
  background-color: wheat;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
```

### API de l'invocateur d'intérêt en action

Regardons un exemple simple qui illustre les fonctionnalités de l'API en pratique. Cet exemple comporte trois liens et un paragraphe configuré comme fenêtre contextuelle&nbsp;:

```html live-sample___interest-invoker-api
<p>
  Voici quelques liens&nbsp;:
  <a href="#">Lien 1</a>
  <a href="#">Lien 2</a>
  <a href="#">Lien 3</a>
</p>
<p id="mytooltip" popover="hint">Une info‑bulle au survol</p>
```

```css hidden live-sample___interest-invoker-api
html {
  font-family: sans-serif;
}

#mytooltip {
  position-area: bottom;
}
```

Dans le JavaScript, nous obtenons des références vers la fenêtre contextuelle et les trois liens. Nous parcourons ensuite les liens et affectons à la propriété {{DOMxRef("HTMLAnchorElement.interestForElement", "interestForElement")}} de chaque lien une référence vers la fenêtre contextuelle. Cela établit programmatiquement la relation invocateur—cible entre la fenêtre contextuelle et chaque lien.

```js live-sample___interest-invoker-api
const tooltip = document.getElementById("mytooltip");
const links = document.querySelectorAll("a");
links.forEach((link) => (link.interestForElement = tooltip));
```

Ensuite, nous attachons des gestionnaires d'événements `interest` et `loseinterest` à la fenêtre contextuelle. Lorsque l'intérêt est montré sur l'un des liens, nous mettons à jour le contenu textuel de la fenêtre contextuelle pour inclure le contenu textuel du lien qui a provoqué l'apparition de la fenêtre contextuelle (récupéré via la propriété `source` de l'objet événement). Lorsque l'intérêt est perdu, nous ajoutons un astérisque au contenu textuel de l'élément `source`, afin que vous puissiez voir le nombre de fois où l'intérêt a été montré sur celui‑ci.

```js live-sample___interest-invoker-api
tooltip.addEventListener("interest", (e) => {
  tooltip.textContent = `Intérêt montré sur ${e.source.textContent}`;
});

tooltip.addEventListener("loseinterest", (e) => {
  e.source.textContent += "*";
});
```

Ceci s'affiche comme suit&nbsp;:

{{EmbedLiveSample("interest-invoker-api", "100%", "150")}}

## Utiliser les invocateurs d'intérêt pour créer des fenêtres contextuelles d'aperçu

Comme mentionné précédemment, un cas d'utilisation très courant des invocateurs d'intérêt est de renforcer progressivement les liens en ajoutant des informations d'aperçu sur la cible du lien. Cela peut inclure des détails tels que le nom d'une personne, sa biographie et sa localisation affichés sur un lien vers sa page de profil, ou des actions rapides comme s'abonner à un groupe proposées sur un lien vers sa page d'accueil. Ces fenêtres contextuelles d'aperçu sont pratiques parce qu'elles aident les utilisateur·ice·s à obtenir l'information dont ils·elles ont besoin sans naviguer ailleurs et sans perdre le contexte.

Voyons comment implémenter une fenêtre contextuelle d'aperçu en utilisant les invocateurs d'intérêt.

### HTML

Le balisage inclut un lien vers un profil GitHub dans un court paragraphe et un `<div>` contenant un profil utilisateur limité avec un faux bouton «&nbsp;Suivre&nbsp;». L'attribut `interestfor` du lien pointe vers l'`id` du profil utilisateur. De plus, le profil utilisateur possède un attribut `popover`, ce qui le transforme en fenêtre contextuelle et le masque par défaut.

```html live-sample___link-preview-popover
<p>
  Je pense que
  <a
    href="https://github.com/chrisdavidmills/"
    interestfor="user-info"
    target="_blank">
    @chrisdavidmills
  </a>
  devrait savoir cela.
</p>

<div id="user-info" popover="hint">
  <div class="wrapper">
    <img src="chris-mills.jpg" alt="Chris Mills" />
    <section>
      <p><strong>Chris Mills</strong></p>
      <p>
        Rédacteur technique indépendant et bidouilleur des technologies web,
        travaillant sur MDN pour le compte de Google et Mozilla. Défenseur de
        l'accessibilité et des standards ouverts. Batteur de heavy metal.
        <button>Suivre</button>
      </p>
      <p>🌍 Greenfield, Royaume‑Uni</p>
    </section>
  </div>
</div>
```

### CSS

On commence par définir une valeur `1s` pour {{CSSxRef("interest-delay-start")}} sur le lien (le sélecteur `a[interestfor]` permet de cibler uniquement les liens qui sont des invocateurs d'intérêt). Cela crée un léger délai avant l'apparition de la fenêtre contextuelle d'aperçu. Sur une page dense en liens, il peut être agaçant que les fenêtres contextuelles apparaissent trop rapidement&nbsp;; dans ce cas, cette technique est utile.

```css hidden live-sample___link-preview-popover
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}
```

```css live-sample___link-preview-popover
a[interestfor] {
  interest-delay-start: 1s;
}
```

Ensuite, nous définissons une valeur `position-area` de `bottom right` sur la fenêtre contextuelle afin qu'elle apparaisse en bas à droite du lien lorsque l'intérêt est indiqué. (Le reste du style de la fenêtre contextuelle est masqué ici pour plus de concision.)

```css live-sample___link-preview-popover
#user-info {
  position-area: bottom right;
}
```

```css hidden live-sample___link-preview-popover
#user-info {
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0 10px;
  margin: 5px;
  background-color: white;
  font-size: 0.8rem;
}

#user-info .wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 480px;
  font-size: 0.8rem;
}

#user-info img {
  margin: 10px 0;
  border: 1px solid lightgray;
  border-radius: 5px;
}
```

Dans le dernier bloc CSS, nous animons la propriété {{CSSxRef("opacity")}} de la fenêtre contextuelle afin qu'elle apparaisse en fondu lorsque l'intérêt est indiqué (comme le sélectionne la pseudo‑classe {{CSSxRef(":interest-target")}}). Comme la fenêtre contextuelle commence masquée (via `display: none`), quelques règles supplémentaires sont nécessaires pour l'animer correctement. Il faut définir [`transition-behavior: allow-discrete`](/fr/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) sur les propriétés {{CSSxRef("overlay")}} et {{CSSxRef("display")}} pour autoriser les animations discrètes. Il est également nécessaire d'utiliser un bloc {{CSSxRef("@starting-style")}} pour définir l'état initial de la fenêtre contextuelle dans l'état `interest-target`, car il n'a pas été rendu auparavant.

```css hidden live-sample___link-preview-popover
[popover]:interest-target {
  opacity: 1;
}

[popover] {
  opacity: 0;
  transition:
    opacity 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
}

@starting-style {
  [popover]:interest-target {
    opacity: 0;
  }
}
```

### Résultat

Cela s'affiche comme suit&nbsp;:

{{EmbedLiveSample("link-preview-popover", "100%", "260", , , , , "allow-popups")}}

Essayez de survoler ou de cibler le lien pour afficher la fenêtre contextuelle d'aperçu. Il y a aussi une amélioration progressive dans cet exemple — dans les navigateurs qui ne prennent pas en charge cette fonctionnalité, le lien fonctionne comme prévu.

## Utiliser les invocateurs d'intérêt sans fenêtres contextuelles

Voyons un exemple qui utilise des invocateurs d'intérêt sans fenêtres contextuelles. Dans cet exemple, nous créons un panneau d'aperçu de style. Vous pouvez activer différents boutons de schéma de couleurs pour appliquer divers styles au panneau. Nous avons procédé à une amélioration progressive de l'interaction en utilisant des invocateurs d'intérêt afin que vous puissiez prévisualiser le style avant de le sélectionner. Lorsque l'intérêt est montré sur un bouton, son schéma de couleurs est appliqué au panneau, et lorsque l'intérêt est perdu, le panneau revient au style précédemment-appliqué.

### HTML

Le HTML contient cinq éléments `<button>` et un élément {{HTMLElement("article")}} représentant le panneau d'aperçu de style. Chaque bouton possède la même valeur `interestfor`, référant l'`id` de l'`<article>`, et chaque bouton possède une `class` qui représente un schéma de couleurs différent. Notez que le `<article>` n'a pas d'attribut `popover` défini (les fenêtres contextuelles ne sont pas une condition requise pour utiliser des invocateurs d'intérêt).

```html live-sample___non-popover
<div>
  <button interestfor="style-panel" class="black-white">Noir/Blanc</button>
  <button interestfor="style-panel" class="bubblegum">Barbe à papa</button>
  <button interestfor="style-panel" class="purple-haze">Brume pourpre</button>
  <button interestfor="style-panel" class="blaze">Flamme</button>
  <button interestfor="style-panel" class="mint-brown">Menthe brune</button>
</div>
<article id="style-panel" class="black-white">
  <h2>Panneau d'aperçu de style</h2>
  <p>C'est amusant, non&nbsp;?</p>
</article>
```

### CSS

Tout d'abord, nous définissons les styles pour chaque `class` appliquée à un élément `<button>`&nbsp;:

```css hidden live-sample___non-popover
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  width: 640px;
  margin: 0 auto;
}

body > div {
  display: flex;
  gap: 5px;
  margin-top: 20px;
}

button {
  flex: 1;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}

#style-panel {
  padding: 20px;
  border-radius: 30px;
  margin-top: 20px;
  border-width: 10px;
  corner-shape: scoop;
}

h2 {
  margin-top: 0;
  text-align: center;
  letter-spacing: 5px;
}

p {
  margin-bottom: 0;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
}
```

```css live-sample___non-popover
.black-white {
  color: black;
  background-color: white;
  border: 2px solid black;
}

.bubblegum {
  color: #fff8f0;
  background-color: #ef476f;
  border: 2px solid #fff8f0;
  box-shadow: 0 0 2px #ef476f;
}

.purple-haze {
  color: #8a1c7c;
  background-color: #f0bcd4;
  border: 2px solid #8a1c7c;
}

.blaze {
  color: #f2e94e;
  background-color: #7e6b8f;
  border: 2px solid #f2e94e;
}

.mint-brown {
  color: #41463d;
  background-color: #1cfeba;
  border: 2px solid #41463d;
}
```

Ensuite, nous appliquons des styles à tout bouton sur lequel l'intérêt est indiqué, en utilisant la pseudo-classe {{CSSxRef(":interest-source")}}. Cela permet aux utilisateur·ice·s de voir facilement quel bouton attire actuellement l'intérêt.

```css live-sample___non-popover
button:interest-source {
  background-color: black;
  color: white;
  border: 2px solid black;
}
```

Enfin, nous appliquons une {{CSSxRef("transition")}} au panneau de style afin que les valeurs de propriété `all` qui changent sur l'élément s'animent en douceur sur une durée de `0.7s`. Cela signifie que tous les changements de schéma de couleurs appliqués au panneau s'animeront.

```css live-sample___non-popover
#style-panel {
  transition: all 0.7s;
}
```

### JavaScript

Dans cette partie du code, nous commençons par récupérer des références vers le panneau d'aperçu de style et tous les boutons. Nous créons également une variable appelée `prevStyle` et la définissons sur `black-white`. Il s'agit du schéma de couleurs initial appliqué au panneau et aussi du style auquel le panneau revient lorsque l'intérêt est perdu.

```js live-sample___non-popover
const stylePanel = document.getElementById("style-panel");
const buttons = document.querySelectorAll("button");

let prevStyle = "black-white";
```

Ensuite, nous ajoutons des gestionnaires d'événements `interest` et `loseinterest` au panneau de style. Ces événements appellent les fonctions `sampleStyle()` et `revertStyle()` pour appliquer et rétablir les styles lorsque l'intérêt est montré et perdu sur les boutons. Nous parcourons également la collection `buttons` {{DOMxRef("NodeList")}} et ajoutons un gestionnaire d'événement `click` à chacun afin que, lorsqu'un bouton est activé, la fonction `setStyle()` soit exécutée.

```js live-sample___non-popover
stylePanel.addEventListener("interest", sampleStyle);
stylePanel.addEventListener("loseinterest", revertStyle);
buttons.forEach((button) => button.addEventListener("click", setStyle));
```

Enfin, nous définissons les fonctions mentionnées précédemment&nbsp;:

- `sampleStyle()`&nbsp;: Lorsque l'intérêt est montré sur un bouton, sa `class` est obtenue depuis `e.source.className` (`InterestEvent.source` contient une référence vers l'invocateur d'intérêt sur lequel l'intérêt a été montré) et appliquée au panneau de style via `e.target.className`.
- `revertStyle()`&nbsp;: Lorsque l'intérêt est perdu, le panneau de style revient au style précédent stocké dans `prevStyle`.
- `setStyle()`&nbsp;: Lorsque un bouton est cliqué, son `className` est appliqué au panneau de style. Nous mettons également à jour `prevStyle` avec le `className` du bouton cliqué afin que, la prochaine fois qu'un style est prévisualisé, le panneau puisse revenir au _nouveau_ style précédemment défini.

```js live-sample___non-popover
function sampleStyle(e) {
  e.target.className = e.source.className;
}

function revertStyle(e) {
  e.target.className = prevStyle;
}

function setStyle(e) {
  stylePanel.className = e.target.className;
  prevStyle = e.target.className;
}
```

### Résultat

Cela s'affiche comme suit&nbsp;:

{{EmbedLiveSample("non-popover", "100%", "260")}}

Essayez de survoler ou de cibler un bouton pour prévisualiser son style dans le panneau. Cliquer sur un bouton applique le style de façon permanente. Notez que l'application des styles fonctionne toujours dans les navigateurs qui ne prennent pas en charge les invocateurs d'intérêt, même si la fonctionnalité de «&nbsp;prévisualisation&nbsp;» ne fonctionne pas.

## Voir aussi

- [Page d'exemples sur les invocateurs d'intérêt <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/interest-invokers/)
- [L'API Popover](/fr/docs/Web/API/Popover_API)
