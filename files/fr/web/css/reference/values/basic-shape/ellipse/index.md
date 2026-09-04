---
title: Fonction CSS `ellipse()`
short-title: ellipse()
slug: Web/CSS/Reference/Values/basic-shape/ellipse
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`ellipse()`** fait partie du [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("&lt;basic-shape&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: ellipse()")}}

```css interactive-example-choice
clip-path: ellipse(20px 50px);
```

```css interactive-example-choice
clip-path: ellipse(4rem 50% at right center);
```

```css interactive-example-choice
clip-path: ellipse(closest-side closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: ellipse(closest-side farthest-side);
```

```css interactive-example-choice
clip-path: ellipse(closest-corner closest-corner at 25% 25%);
```

```css interactive-example-choice
clip-path: ellipse(closest-side closest-corner at 25% 25%);
```

```css interactive-example-choice
clip-path: ellipse(closest-side farthest-corner at 25% 25%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntaxe

```css
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
border-shape: ellipse(50% 40%);
```

Une ellipse est essentiellement un cercle aplati&nbsp;; la fonction `ellipse()` agit de manière très similaire à {{CSSxRef("basic-shape/circle","circle()")}}, sauf qu'il faut préciser deux rayons&nbsp;: x puis y.

### Valeurs

- `<shape-radius>`
  - : Deux rayons, x puis y, dans cet ordre. Ils peuvent être une longueur ({{CSSxRef("&lt;length&gt;")}}), un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), ou l'une des valeurs de mot-clé suivantes&nbsp;:
    - `closest-side`
      - : Le rayon est la distance entre le centre de l'ellipse et le côté le plus proche de la boîte de référence dans la direction du rayon donné, de sorte que le bord de l'ellipse touche juste ce côté.
    - `farthest-side`
      - : Le rayon est la distance entre le centre de l'ellipse et le côté le plus éloigné de la boîte de référence dans la direction du rayon donné, de sorte que le bord de l'ellipse touche juste ce côté.
    - `closest-corner`
      - : Le rayon est la distance entre le centre de l'ellipse et le coin le plus proche de la boîte de référence dans la direction du rayon donné.
    - `farthest-corner`
      - : Le rayon est la distance entre le centre de l'ellipse et le coin le plus éloigné de la boîte de référence dans la direction du rayon donné.

- `<position>`
  - : Déplace le centre de l'ellipse. Il peut s'agir d'une longueur ({{CSSxRef("&lt;length&gt;")}}), d'un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) ou de valeurs comme `left`. La valeur par défaut de `<position>` est center si elle est omise.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple de `ellipse()`

Cet exemple montre une ellipse positionnée à gauche, avec un rayon horizontal de 40 % et un rayon vertical de 50 %.
Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code pour modifier les valeurs et observer le rendu&nbsp;:

```html live-sample___ellipse
<div class="boite">
  <div class="forme"></div>
  <p>
    Une nuit de novembre en 1782, paraît‑il, deux frères étaient assis près de
    leur feu d'hiver dans la petite ville française d'Annonay, observant les
    volutes de fumée grises s'élever de la large cheminée. Ils s'appelaient
    Stephen et Joseph Montgolfier, ils exerçaient le métier de papetier, et
    étaient connus pour leur esprit réfléchi et leur vif intérêt pour toute
    connaissance scientifique et toute nouvelle découverte. Avant cette nuit —
    une nuit mémorable, comme elle devait le devenir — des centaines de millions
    de personnes avaient vu s'élever la fumée de leurs feux sans en tirer une
    inspiration particulière.
  </p>
</div>
```

```css live-sample___ellipse
body {
  font: 1.2em / 1.5 sans-serif;
}
.forme {
  float: left;
  shape-outside: ellipse(40% 50% at left);
  margin: 20px;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample("ellipse", "", 300)}}

### Utilisation de `closest-side` / `farthest-side`

Les mots‑clés `closest-side` et `farthest-side` sont utiles pour créer rapidement une ellipse basée sur la taille de la boîte de référence de l'élément flottant.

```html live-sample___ellipse-keywords
<div class="box">
  <div class="forme"></div>
  <p>
    Une nuit de novembre en 1782, paraît‑il, deux frères étaient assis près de
    leur feu d'hiver dans la petite ville française d'Annonay, observant les
    volutes de fumée grises s'élever de la large cheminée. Ils s'appelaient
    Stephen et Joseph Montgolfier, ils exerçaient le métier de papetier, et
    étaient connus pour leur esprit réfléchi et leur vif intérêt pour toute
    connaissance scientifique et toute nouvelle découverte. Avant cette nuit —
    une nuit mémorable, comme elle devait le devenir — des centaines de millions
    de personnes avaient vu s'élever la fumée de leurs feux sans en tirer une
    inspiration particulière.
  </p>
</div>
```

```css live-sample___ellipse-keywords
body {
  font: 1.2em / 1.5 sans-serif;
}
.forme {
  float: left;
  shape-outside: ellipse(closest-side farthest-side at 30%);
  margin: 20px;
  width: 100px;
  height: 140px;
}
```

{{EmbedLiveSample("ellipse-keywords", "", 300)}}

### Exemple interactif avec les mots-clés de rayon

Cet exemple permet de tester l'effet du déplacement du point central de l'ellipse lors de l'utilisation de chacun des quatre mots-clés `<shape-radius>` — choisis indépendamment pour le rayon x et le rayon y.

Comme `closest-corner` et `farthest-corner` sont des ajouts plus récents à `ellipse()`, le script teste chaque mot-clé avec {{DOMxRef("CSS.supports_static", "CSS.supports()")}} avant de l'activer.
Tout mot-clé que votre navigateur ne prend pas encore en charge est désactivé dans les deux menus déroulants (et étiqueté «&nbsp;n'est pas pris en charge&nbsp;»).

#### HTML

Le HTML définit d'abord les contrôles pour sélectionner les mots-clés du rayon x et du rayon y et pour définir la position où l'ellipse doit être affichée, suivi d'un élément HTML {{HTMLElement("pre")}} pour afficher le {{CSSxRef("clip-path")}} que les valeurs des contrôles sélectionnent.
Après cela, un élément `#note-support` est fourni pour indiquer quand certains mots-clés de rayon ne sont pas pris en charge.

```html live-sample___ellipse-keywords-interactive
<div class="controles">
  <div class="lignes-controles">
    <label>
      Rayon en X&nbsp;:
      <select id="mot-cle-rayon-x">
        <option value="closest-side">closest-side</option>
        <option value="closest-corner">closest-corner</option>
        <option value="farthest-side">farthest-side</option>
        <option value="farthest-corner" selected>farthest-corner</option>
      </select>
    </label>
    <label>
      Rayon en Y&nbsp;:
      <select id="mot-cle-rayon-y">
        <option value="closest-side">closest-side</option>
        <option value="closest-corner">closest-corner</option>
        <option value="farthest-side" selected>farthest-side</option>
        <option value="farthest-corner">farthest-corner</option>
      </select>
    </label>
  </div>
  <div class="lignes-controles">
    <label>
      Position X&nbsp;:
      <input type="range" id="pos-x" min="0" max="200" value="120" />
    </label>
    <label>
      Position Y&nbsp;:
      <input type="range" id="pos-y" min="0" max="120" value="40" />
    </label>
  </div>
</div>

<pre id="declaration"></pre>

<p id="note-support"></p>
```

Le HTML définit ensuite un certain nombre d'éléments HTML {{HTMLElement("div")}} qui sont utilisés pour rendre l'ellipse, la boîte de référence et le marqueur central.
Les éléments les plus importants sont la boîte de référence (`#refbox`) et l'élément `.fill` qu'elle contient, qui définissent le dégradé qui est dessiné (comme expliqué dans la section CSS suivante).
Un `clipPath` est défini sur la boîte de référence en JavaScript pour découper ce dégradé en une forme elliptique.

```html live-sample___ellipse-keywords-interactive
<div class="canvas">
  <div class="refbox" id="refbox">
    <div class="fill"></div>
  </div>
  <div class="outline"></div>
  <div class="center-marker" id="center-marker"></div>
</div>
```

Notez que les éléments `.outline` et `.center-marker` sont fournis pour faciliter la visualisation de la boîte de référence et du centre de l'ellipse de découpe, qui sont autrement invisibles.
L'élément `.outline` doit être placé après `#refbox` dans le balisage&nbsp;: comme il n'est pas lui-même découpé, le peindre après la boîte de référence signifie que sa bordure en pointillés est toujours rendue au-dessus du dégradé `.fill`, même lorsque l'ellipse de découpe dépasse la boîte de référence.

#### CSS

Le CSS pour le canevas, la boîte de référence et les éléments de remplissage est montré ci-dessous.
Notez que l'élément `.fill` définit un dégradé qui déborde de la boîte de référence, remplissant la majeure partie du canevas.
C'est ce dégradé que nous découpons en utilisant la fonction `ellipse()` (nous le faisons en définissant dynamiquement le chemin de découpe CSS dans notre code JavaScript).

```css live-sample___ellipse-keywords-interactive
.canvas {
  position: relative;
  width: 640px;
  height: 480px;
  overflow: hidden;
  border: 1px solid #888888;
}

.refbox {
  position: absolute;
  top: 180px;
  left: 220px;
  width: 200px;
  height: 120px;
  box-sizing: border-box;
}

.fill {
  position: absolute;
  inset: -240px;
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
}
```

Le CSS pour les contrôles et les autres éléments n'est pas montré, car il n'est pas nécessaire pour comprendre la fonction `ellipse()`.
Les lecteur·ice·s intéressé·e·s peuvent le consulter dans l'exemple du terrain de jeu.

```css live-sample___ellipse-keywords-interactive hidden
body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.controles {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.lignes-controles {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
```

```css live-sample___ellipse-keywords-interactive hidden
.outline {
  position: absolute;
  top: 180px;
  left: 220px;
  width: 200px;
  height: 120px;
  box-sizing: border-box;
}

.outline {
  border: 3px dashed #e6007a;
  pointer-events: none;
}

.center-marker {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  border: 2px solid black;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

#declaration {
  margin: 0;
}

#note-support {
  margin: 0;
  color: #b3001b;
}
```

#### JavaScript

D'abord, nous obtenons des références à chacun des éléments utilisés par l'exemple.

```js live-sample___ellipse-keywords-interactive
const selectX = document.getElementById("mot-cle-rayon-x");
const selectY = document.getElementById("mot-cle-rayon-y");
const posX = document.getElementById("pos-x");
const posY = document.getElementById("pos-y");
const refbox = document.getElementById("refbox");
const declaration = document.getElementById("declaration");
const marker = document.getElementById("center-marker");
const noteSupport = document.getElementById("note-support");
```

Alors nous définissons une fonction `verifierSupport()` pour tester si chaque mot-clé de rayon est pris en charge et activer/désactiver les options associées dans les deux menus déroulants.
Cela utilise la méthode {{DOMxRef("CSS.supports_static", "CSS.supports()")}} pour vérifier la prise en charge des mots-clés.

```js live-sample___ellipse-keywords-interactive
function verifierSupport() {
  const nonSupporte = new Set();
  for (const option of selectX.options) {
    const test = `ellipse(${option.value} ${option.value} at 0px 0px)`;
    if (!CSS.supports("clip-path", test)) {
      nonSupporte.add(option.value);
    }
  }
  for (const select of [selectX, selectY]) {
    for (const option of select.options) {
      if (nonSupporte.has(option.value)) {
        option.disabled = true;
        option.textContent += " (n'est pas pris en charge)";
      }
    }
    if (select.selectedOptions[0]?.disabled) {
      const premierSupporte = [...select.options].find(
        (option) => !option.disabled,
      );
      if (premierSupporte) {
        select.value = premierSupporte.value;
      }
    }
  }
  if (nonSupporte.size > 0) {
    noteSupport.textContent = `Votre navigateur ne prend pas en charge : ${[...nonSupporte].join(", ")}.`;
  }
}
```

Ensuite, nous définissons une fonction `actualiser()` qui est appelée chaque fois que les contrôles d'entrée sont modifiés.
Cela définit le chemin de découpe sur la boîte de référence en fonction des mots-clés de rayon x et y sélectionnés et de la position, et déplace le marqueur central pour correspondre.

```js live-sample___ellipse-keywords-interactive
function actualiser() {
  const motcleX = selectX.value;
  const motcleY = selectY.value;
  const x = Number(posX.value);
  const y = Number(posY.value);

  // Construire la valeur de clip-path et l'appliquer à la boîte de référence
  const valeur = `ellipse(${motcleX} ${motcleY} at ${x}px ${y}px)`;
  refbox.style.clipPath = valeur;

  // Mettre à jour le texte de déclaration affiché et la position du marqueur
  declaration.textContent = `clip-path: ${valeur};`;
  marker.style.left = `${refbox.offsetLeft + x}px`;
  marker.style.top = `${refbox.offsetTop + y}px`;
}

selectX.addEventListener("change", actualiser);
selectY.addEventListener("change", actualiser);
posX.addEventListener("input", actualiser);
posY.addEventListener("input", actualiser);
verifierSupport();
actualiser();
```

#### Résultat

Changez la position du centre et le mot-clé pour chaque rayon afin de voir leurs effets relatifs.
Notez que la boîte de référence, ainsi que les mots-clés de rayon x et y sélectionnés et la position, sont utilisés pour calculer l'ellipse de découpe.
Cette ellipse peut s'étendre au-delà de la boîte de référence (par exemple, avec `closest-corner` ou `farthest-corner`)&nbsp;; le dégradé `.fill` est délibérément dimensionné plus grand que la boîte de référence afin qu'il couvre toujours entièrement l'ellipse découpée, aussi loin qu'elle s'étende.

{{EmbedLiveSample("ellipse-keywords-interactive", "", 680)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés qui utilisent ce type de données&nbsp;: {{CSSxRef("border-shape")}}, {{CSSxRef("clip-path")}}, {{CSSxRef("shape-outside")}}
- [Guide des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
