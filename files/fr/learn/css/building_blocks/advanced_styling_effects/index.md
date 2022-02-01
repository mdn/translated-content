---
title: Effets de boîte avancés
slug: Learn/CSS/Building_blocks/Advanced_styling_effects
translation_of: Learn/CSS/Building_blocks/Advanced_styling_effects
original_slug: Apprendre/CSS/Building_blocks/Advanced_styling_effects
---
{{LearnSidebar}}

Cet article est une sorte de boîte à malices : elle introduit certaines des fonctions avancées disponibles pour styliser les boîtes, fonctions n'entrant pas dans catégories vues plus haut — comme les ombres, les mélanges de couleurs ou les filtres.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Notions de HTML (voir
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction à HTML</a
        >) et idées sur le fonctionnement des CSS (voir
        <a href="/fr/docs/Learn/CSS/Introduction_to_CSS">Introduction aux CSS</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Donner des idées sur l'utilisation d'effets avancés pour les boîtes et
        apprendre quelques outils de style natifs propres au langage des CSS.
      </td>
    </tr>
  </tbody>
</table>

## Ombres des boîtes

Revenons au module [Styling text](/fr/docs/Learn/CSS/Styling_text) — nous y avons vu la propriété {{cssxref("text-shadow")}} : elle permet d'appliquer une ou plusieurs ombres portées au texte d'un élément. Il existe une propriété équivalente pour les boîtes — {{cssxref("box-shadow")}} : elle applique une ou plusieurs ombres portées à une boîte d'élément réelle. Tout comme les ombres de texte, les ombres de boîtes sont bien prises en charge par les navigateurs, mais seulement au-delà de IE9. Les utilisateurs des anciennes versions d'IE pourraient être confrontés à l'absence d'ombres ; donc, testez simplement vos designs pour être sûr que le contenu reste lisible sans ombrage.

Vous trouverez les exemples de cet article dans le fichier [box-shadow.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/box-shadow.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/box-shadow.html) également).

### Ombre simple pour une boîte

Débutons avec un exemple simple. D'abord, un peu de HTML :

```html
<article class="simple">
  <p><strong>Attention</strong> : Le thermostat sur le transcendeur cosmique a atteint un niveau critique.</p>
</article>
```

Puis la CSS:

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  color: white;
  text-align: center;
  background-color: red;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.25));
}

.simple {
  box-shadow: 5px 5px 5px rgba(0,0,0,0.7);
}
```

donnent le résultat suivant :

{{ EmbedLiveSample('', '100%', 100) }}

Notez les quatre éléments valeur de la propriété `box-shadow` :

1.  La première valeur est la mesure du **décalage horizontal** — distance entre la droite de l'ombre (ou la gauche si négative) et la boîte.
2.  La deuxième valeur est la mesure du **décalage vertical** — distance vers le bas (vers le haut si négative) dont l'ombre est décalée de la boîte.
3.  La troisième valeur est le **rayon de flou** — il représente la « quantité » de flou appliquée à l'ombre.
4.  La valeur de la couleur : **couleur de base** de l'ombre.

Vous pouvez utiliser toutes unités de longueur et de couleur utiles pour définir ces valeurs.

### Ombres multiples pour une boîte

Vous pouvez également définir plusieurs ombres de boîtes dans une seule déclaration en les séparant par des virgules :

```html hidden
<article class="multiple">
  <p><strong>Attention</strong> : Le thermostat sur le transcendeur cosmique a atteint un niveau critique.</p>
</article>
```

```css hidden
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  color: white;
  text-align: center;
  background-color: red;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.25)); }

.multiple { box-shadow: 1px 1px 1px black,
                        2px 2px 1px black,
                        3px 3px 1px red,
                        4px 4px 1px red,
                        5px 5px 1px black,
                        6px 6px 1px black; }
```

Nous obtenons le résultat suivant :

{{ EmbedLiveSample('', '100%', 100) }}

Voici quelque chose d'amusant : nous créons une boîte avec une impression de relief avec plusieurs couches de couleur. Vous pouvez utiliser ce procédé d'autre manière, par exemple pour donner une apparence plus réaliste avec des ombres à partir de plusieurs sources de lumière.

### Autres fonctionnalités des ombres de boîtes

Contrairement à {{cssxref("text-shadow")}}, {{cssxref("box-shadow")}} dispose du mot‑clé `inset` — le faire précéder une déclaration d'ombre fera que l'ombre sera interne et non externe. Voyons ce que cela signifie.

D'abord un HTML différent pour cet exemple :

```html
<button>Appuyez ici !</button>
```

```css
button {
  width: 150px;
  font-size: 1.1rem;
  line-height: 2;
  border-radius: 10px;
  border: none;
  background-image: linear-gradient(to bottom right, #777, #ddd);
  box-shadow: 1px 1px 1px black,
              inset 2px 3px 5px rgba(0,0,0,0.3),
              inset -2px -3px 5px rgba(255,255,255,0.5);
}

button:focus, button:hover {
  background-image: linear-gradient(to bottom right, #888, #eee);
}

button:active {
  box-shadow: inset 2px 2px 1px black,
              inset 2px 3px 5px rgba(0,0,0,0.3),
              inset -2px -3px 5px rgba(255,255,255,0.5);
}
```

Et voici le résultat :

{{ EmbedLiveSample('', '100%', 70) }}

Ici, nous avons mis en place un style de bouton avec des états différents selon qu'il a le focus, qu'il est survolé par le pointeur de souris ou qu'il est actif. Le bouton est doté d'une simple ombre noire définie par défaut, plus deux ombres d'insertion, l'une claire et l'autre sombre, placées sur les coins opposés du bouton pour lui donner un bel effet d'ombrage.

Lorsque le bouton est cliqué, l'état actif entraîne le remplacement de la première ombre de la boîte par une ombre d'insertion très sombre, donnant l'apparence que le bouton est enfoncé.

> **Note :** il y a un autre élément qui peut être paramétré parmi les valeurs de `box-shadow` — une autre valeur de longueur peut être facultativement définie juste avant la définition de la couleur : le **rayon de diffusion**. S'il est défini, l'ombre devient plus grande que la boîte originelle. Ce paramètre n'est pas couramment utilisé, mais il est bon de le signaler.

## Filtres

Les filtres des CSS s'appliquent aux éléments de la même manière qu'on applique un filtre à un calque dans un logiciel graphique comme Photoshop. Diverses options différentes sont disponibles : vous pouvez en prendre connaissance plus en détail sur la page de référence {{cssxref("filter")}}. Dans cette section, nous vous expliquons la syntaxe et vous montrons à quel point les résultats peuvent être amusants.

Fondamentalement, un filtre peut être appliqué à n'importe quel élément, bloc ou en ligne — il suffit d'utiliser la propriété `filter` et lui donner une valeur de fonction de filtrage particulière. Certaines options de filtrage disponibles font des choses tout à fait similaires à d'autres fonctionnalités des CSS, par exemple `drop-shadow()` fonctionne de manière semblable à {{cssxref("box-shadow")}} ou {{cssxref("text-shadow")}} et donne des effets analogues. Mieux encore, les filtres travaillent sur les formes exactes du contenu à l'intérieur de la boîte, pas seulement la boîte elle-même comme un ensemble. Cela peut donner des choses plus jolies, même si ce n'est pas toujours ce que vous vouliez. Prenons un exemple simple pour illustrer ce qui précède :

Tout d'abord, un HTML simple :

```html
<p class="filter">Filtre</p>

<p class="box-shadow">Ombre de boîte</p>
```

Et maintenant un peu de CSS pour créer une ombre portée à chacun :

```css
p {
  margin: 1rem auto;
  padding: 20px;
  text-align: center;
  width: 100px;
  border: 5px dashed red;
}

.filter {
  -webkit-filter: drop-shadow(5px 5px 1px rgba(0,0,0,0.7));
  filter: drop-shadow(5px 5px 1px rgba(0,0,0,0.7));
}

.box-shadow {
  box-shadow: 5px 5px 1px rgba(0,0,0,0.7);
}
```

Vous obtiendrez le résultat suivant :

{{ EmbedLiveSample('', '100%', 200) }}

Comme vous pouvez le voir, l'ombre portée obtenue avec le filtre est une réplique de la forme exacte du texte et du tireté de l'encadrement. L'ombre de la boîte est celle du rectangle opaque du conteneur.

Quelques autres points à noter :

- Les filtres sont une fonctionnalité très récente — ils sont pris en charge dans la plupart des navigateurs modernes, y compris Microsoft Edge, mais ils ne sont pas du tout pris en charge dans Internet Explorer. Si vous utilisez des filtres dans vos designs, vous devrez vous assurer que le contenu reste utilisable sans filtres.
- Comme vous pouvez le voir, nous avons inclus une version de la propriété `filter` préfixée par `-webkit-`. On appelle cela un {{glossary("Vendor Prefix")}} (préfixe fournisseur) : c'est parfois utilisé par un navigateur avant de rendre définitive l'implémentation d'une nouvelle fonctionnalité. Cela permet de la prendre en charge et de l'expérimenter sans entrer en conflit avec la version non préfixée. Les préfixes fournisseur ne sont pas destinés à être utilisés par les développeurs web, mais ils sont parfois utilisés dans les pages de production si ces fonctionnalités expérimentales sont vraiment désirées. Dans notre cas, la version `-webkit-` de la propriété est actuellement requise pour une prise en charge par Chrome/Safari/Opera, alors que Edge et Firefox utilisent la version finale non préfixée.

> **Note :** Si vous décidez d'utiliser des préfixes dans votre code, assurez-vous d'inclure tous les préfixes requis ainsi que la version non préfixée, afin que le plus grand nombre possible de navigateurs puissent utiliser la fonction, et lorsque les navigateurs abandonneront plus tard les préfixes, ils pourront également utiliser la version non préfixée. Soyez également averti que ces caractéristiques expérimentales pourraient changer, de sorte que votre code pourrait casser. Il est vraiment préférable d'expérimenter avec ces fonctions jusqu'à ce que les préfixes soient supprimés.

Vous pouvez voir d'autres exemples de filtres sur [filters.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/filters.html) (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/filters.html)).

## Modes de mélange de couleurs

Les modes de mélanges de couleurs des CSS permettent d'effectuer des combinaisons de formes et de couleurs entre deux éléments superposés — la couleur finale montrée pour chaque pixel est le résultat d'une combinaison de la couleur originale du pixel et de celle du pixel dans le calque de superposition. Ces modes de mélange sont des procédés familiers aux utilisateurs d'applications graphiques comme Photoshop.

Deux propriétés utilisent les modes de mélange de couleurs dans les CSS :

- {{cssxref("background-blend-mode")}} qui mélange plusieurs images d'arrière‑plan et des couleurs sur un seul élément.
- {{cssxref("mix-blend-mode")}} qui mélange les couleurs de l'élément auquel la propriété est appliquée avec un élément de superposition — à la fois le fond et le contenu.

Vous trouverez beaucoup plus d'exemples de ce qui est disponible à la page [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/blend-modes.html)) et à la page de référence de {{cssxref("&lt;blend-mode&gt;")}}.

> **Note :** Les modes de mélange sont aussi une toute nouvelle fonctionnalité un petit peu moins bien prise en charge que les filtres. Il n'y a pas de prise en charge encore dans Edge et Safari ne l'accepte que partiellement.

### background-blend-mode

Regardons à nouveau des exemples pour mieux comprendre. D'abord, {{cssxref("background-blend-mode")}} — nous montrons une couple de simples éléments {{htmlelement("div")}} avec lesquels vous pourrez comparer l'original et la version avec mélange de couleurs :

```html
<div>
</div>
<div class="multiply">
</div>
```

Maintenant la CSS — nous ajoutons aux `<div>` une image d'arrière‑plan sur un fond vert :

```css
div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

.multiply {
  background-blend-mode: multiply;
}
```

Le résultat obtenu est le suivant — à gauche l'original et le mode mélange `multiply` à droite :

{{ EmbedLiveSample('', '100%', 200) }}

### mix-blend-mode

Voyons maintenant {{cssxref("mix-blend-mode")}}. Nous présentons les deux même `<div>`, mais chacun est posé sur un fond mauve pour montrer les effets du mélange :

```html
<article>
  Mode sans mélange
  <div>

  </div>
  <div>
  </div>
</article>

<article>
  Mélange "multiply"
  <div class="multiply-mix">

  </div>
  <div>
  </div>
</article>
```

Voici la CSS avec laquelle nous stylisons :

```css
article {
  width: 280px;
  height: 180px;
  margin: 10px;
  position: relative;
  display: inline-block;
}

div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
}

article div:first-child {
  position: absolute;
  top: 10px;
  left: 0;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

article div:last-child {
  background-color: purple;
  position: absolute;
  bottom: -10px;
  right: 0;
  z-index: -1;
}

.multiply-mix {
  mix-blend-mode: multiply;
}
```

Nous obtenons le résultat suivant :

{{ EmbedLiveSample('', '100%', 200) }}

Vous voyez ici que `mix-blend-mode: multiply;` a mélangé non seulement les deux images d'arrière plan, mais également la couleur du `<div>` situé dessous.

> **Note :** Ne vous inquiétez pas si vous ne saisissez pas certaines propriétés de mise en page telles que {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, etc. Nous en reparlerons en détail dans le module [CSS Layout](/fr/docs/Learn/CSS/CSS_layout).

## -webkit-background-clip: text

L'autre fonctionnalité naissante, que nous mentionnons brièvement avant de poursuivre (actuellement prise en charge par Chrome, Safari et Opera, en cours d'implémentation dans Firefox) est la valeur texte pour la propriété {{cssxref("background-clip")}}. Utilisée avec la fonctionnalité propriétaire `-webkit-text-fill-color: transparent;` cette fonction vous permet de découper les images d'arrière-plan à la forme du texte de l'élément, ce qui donne de jolis effets. Il ne s'agit pas d'une norme officielle, mais elle a été mise en œuvre sur plusieurs navigateurs, car elle est populaire et assez largement utilisée par les développeurs. Utilisées dans ce contexte, les deux propriétés nécessitent un préfixe fournisseur `-webkit-` même pour les navigateurs non-Webkit/Chrome :

```css
.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Alors pourquoi d'autres navigateurs ont-ils implémenté un préfixe `-webkit-` ? Principalement pour la compatibilité des navigateurs — tant de développeurs web ont commencé à implémenter des sites web en utilisant le préfixe `-webkit-` que ces autres navigateurs ont semblé dysfonctionner, alors qu'en fait ils suivaient la norme. Ils ont donc été contraints d'implémenter quelques unes de ces fonctionnalités. Cela met en évidence le danger d'utiliser des fonctionnalités CSS non standard et/ou préfixées dans votre travail — non seulement elles causent des problèmes de compatibilité avec les navigateurs, mais elles sont également sujettes à changement, de sorte que votre code peut casser à tout moment. Il vaut beaucoup mieux s'en tenir aux normes.

Si vous voulez utiliser de telles fonctionnalités dans votre travail de production, assurez-vous de tester minutieusement tous les navigateurs et vérifiez que, lorsque ces fonctionnalités ne sont pas prises en charge , le site reste toujours utilisable.

> **Note :** Pour un exemple de code complet avec `-webkit-background-clip: text`, allez à la page [background-clip-text.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/background-clip-text.html) (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/background-clip-text.html)).

## Apprentissage actif : expérimenter certains effets

À votre tour, maintenant. Pour cet apprentissage actif, nous voulons que vous expérimentiez certains effets que nous avons vus ci-dessus avec le code fourni ci-dessous.

Si vous faites une erreur, vous pouvez toujours _Réinitialiser_ l'exemple avec le bouton correspondant.

```html hidden
<div class="body-wrapper" style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>Zone de saisie HTML</h2>
  <textarea id="code" class="html-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"><div class="style-me">
</div></textarea>

  <h2>Zone de saisie de la CSS</h2>
  <textarea id="code" class="css-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">.style-me {
  width: 280px;
  height: 130px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background-color: red;
  background: url(colorful-heart.png) no-repeat center 20px,
              linear-gradient(to bottom right, #f33, #a33);
} </textarea>

  <h2>Zone de rendu</h2>
  <div class="output" style="width: 90%;height: 15em;padding: 10px;border: 1px solid #0095dd;overflow:hidden;"></div>
  <div class="controls">
    <input id="reset" type="button" value="Réinitialiser" style="margin: 10px 10px 0 0;">
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");

var styleElem = document.createElement('style');
var headElem = document.querySelector('head');
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('', 700, 820) }}

## Résumé

Nous espérons que vous avez trouvé cet article divertissant — s'amuser avec des jouets brillants l'est généralement et il est toujours intéressant de voir les types d'outils qui viennent d'être mis à disposition dans les navigateurs de pointe. Après avoir atteint la fin des articles sur les styles des boîtes, vous allez tester vos compétences en la matière avec nos évaluations.
