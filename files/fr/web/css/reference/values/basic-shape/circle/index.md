---
title: Fonction CSS `circle()`
short-title: circle()
slug: Web/CSS/Reference/Values/basic-shape/circle
l10n:
  sourceCommit: 1e7ba7f0645705dcd46dd7392f09284129cf87bf
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`circle()`** définit un cercle grâce à son rayon et à la position du centre.
Elle fait partie du [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("&lt;basic-shape&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: circle()")}}

```css interactive-example-choice
clip-path: circle(50px);
```

```css interactive-example-choice
clip-path: circle(6rem at right center);
```

```css interactive-example-choice
clip-path: circle(10% at 2rem 90%);
```

```css interactive-example-choice
clip-path: circle(closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: circle(farthest-side);
```

```css interactive-example-choice
clip-path: circle(closest-corner at 70% 70%);
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
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
border-shape: circle(60%);
```

### Valeurs

- `<shape-radius>`
  - : Il peut s'agir d'une longueur ({{CSSxRef("&lt;length&gt;")}}), d'un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), ou de l'une des valeurs de mot-clé suivantes&nbsp;:
    - `closest-side`
      - : Le rayon est la distance du centre du cercle au côté le plus proche de la boîte de référence, de sorte que le bord du cercle touche juste ce côté.
    - `farthest-side`
      - : Le rayon est la distance du centre du cercle au côté le plus éloigné de la boîte de référence, de sorte que le bord du cercle touche juste ce côté.
    - `closest-corner`
      - : Le rayon est la distance du centre du cercle au coin le plus proche de la boîte de référence, de sorte que le bord du cercle passe par ce coin.
    - `farthest-corner`
      - : Le rayon est la distance du centre du cercle au coin le plus éloigné de la boîte de référence, de sorte que le bord du cercle passe par ce coin.

- `<position>`
  - : Déplace le centre du cercle. Il peut s'agir d'une longueur ({{CSSxRef("&lt;length&gt;")}}), d'un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) ou de mots‑clés comme `left`. Si `<position>` est omis, la valeur par défaut est `center`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Cercle simple

Dans l'exemple ci‑dessous, la propriété {{CSSxRef("shape-outside")}} a pour valeur `circle(50%)`, ce qui définit un cercle sur un élément flottant autour duquel le texte s'écoule.

```html live-sample___circle
<div class="boite">
  <img
    alt="Un ballon à air chaud"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
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

```css live-sample___circle
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

### Exemple interactif avec les mots-clés de rayon

Cet exemple permet de tester l'effet du déplacement du point central du cercle lors de l'utilisation de chacun des quatre mots-clés `<shape-radius>`.

#### HTML

Le HTML définit d'abord les contrôles pour sélectionner un mot-clé de rayon choisi et définir la position où le cercle doit être affiché, suivi d'un élément HTML {{HTMLElement("pre")}} pour afficher le {{CSSxRef("clip-path")}} que les valeurs des contrôles sélectionnent.
Après cela, un élément `#note-support` est fourni pour indiquer quand certains mots-clés de rayon ne sont pas pris en charge.

```html live-sample___circle-keywords-interactive
<div class="controles">
  <div class="lignes-controles">
    <label>
      Rayon du cercle&nbsp;:
      <select id="mot-cle-rayon">
        <option value="closest-side">closest-side</option>
        <option value="closest-corner">closest-corner</option>
        <option value="farthest-side">farthest-side</option>
        <option value="farthest-corner" selected>farthest-corner</option>
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

Le HTML définit ensuite un certain nombre d'éléments {{HTMLElement("div")}} qui sont utilisés pour rendre le cercle, la boîte de référence et le marqueur central.
Les éléments les plus importants sont la boîte de référence (`#refbox`) et l'élément `.fill` qu'elle contient, qui définissent le dégradé qui est dessiné (comme expliqué dans la section CSS suivante).
Un `clipPath` est défini sur la boîte de référence en JavaScript pour découper ce dégradé en une forme circulaire.

```html live-sample___circle-keywords-interactive
<div class="canvas">
  <div class="refbox" id="refbox">
    <div class="fill"></div>
  </div>
  <div class="outline"></div>
  <div class="center-marker" id="center-marker"></div>
</div>
```

Notez que les éléments `.outline` et `.center-marker` sont fournis pour faciliter la visualisation de la boîte de référence et du centre du cercle de découpe, qui sont autrement invisibles.
L'élément `.outline` doit être placé après `#refbox` dans le balisage&nbsp;: comme il n'est pas lui-même découpé, le peindre après la boîte de référence signifie que sa bordure en pointillés est toujours rendue au-dessus du dégradé `.fill`, même lorsque le cercle de découpe dépasse la boîte de référence.

#### CSS

Le CSS pour le canevas, la boîte de référence et les éléments `.fill` est montré ci-dessous.
Notez que le `.fill` définit un dégradé qui déborde de la boîte de référence, remplissant la majeure partie du canevas.
C'est le dégradé que nous allons découper en utilisant `circle()` (nous le faisons en définissant dynamiquement le chemin de découpe CSS dans notre code JavaScript).

```css live-sample___circle-keywords-interactive
.canvas {
  position: relative;
  width: 640px;
  height: 480px;
  overflow: hidden;
  border: 1px solid #888;
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

Le CSS pour les contrôles et les autres éléments n'est pas montré, car il n'est pas nécessaire pour comprendre la méthode `circle()`.
Les lecteurs intéressés peuvent le consulter dans l'exemple du terrain de jeu.

```css live-sample___circle-keywords-interactive hidden
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

```css live-sample___circle-keywords-interactive hidden
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

En premier lieu, nous obtenons des références à chacun des éléments utilisés par l'exemple.

```js live-sample___circle-keywords-interactive
const select = document.getElementById("mot-cle-rayon");
const posX = document.getElementById("pos-x");
const posY = document.getElementById("pos-y");
const refbox = document.getElementById("refbox");
const declaration = document.getElementById("declaration");
const marker = document.getElementById("center-marker");
const noteSupport = document.getElementById("note-support");
```

Dès lors, nous définissons la fonction `verifierSupport()` utilisée pour tester si chaque mot-clé de rayon est pris en charge et activer/désactiver les options de sélection associées.
Cela utilise la méthode {{DOMxRef("CSS.supports_static", "CSS.supports()")}} pour vérifier la prise en charge des mots-clés.

```js live-sample___circle-keywords-interactive
function verifierSupport() {
  const nonSupporte = [];
  for (const option of select.options) {
    if (!CSS.supports("clip-path", `circle(${option.value} at 0px 0px)`)) {
      option.disabled = true;
      option.textContent += " (n'est pas pris en charge)";
      nonSupporte.push(option.value);
    }
  }
  if (nonSupporte.length > 0) {
    noteSupport.textContent = `Votre navigateur ne prend pas en charge : ${nonSupporte.join(", ")}.`;
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
```

Ensuite, nous définissons une fonction `actualiser()` qui est appelée chaque fois que les contrôles d'entrée sont modifiés.
Cela définit le chemin de découpe sur la boîte de référence en fonction du mot-clé sélectionné et de la position, et déplace le marqueur central pour correspondre.

```js live-sample___circle-keywords-interactive
function actualiser() {
  const motCles = select.value;
  const x = Number(posX.value);
  const y = Number(posY.value);

  // Construire la valeur de clip-path et l'appliquer à la boîte de référence
  const valeur = `circle(${motCles} at ${x}px ${y}px)`;
  refbox.style.clipPath = valeur;

  // Mettre à jour le texte de déclaration affiché et la position du marqueur
  declaration.textContent = `clip-path: ${valeur};`;
  marker.style.left = `${refbox.offsetLeft + x}px`;
  marker.style.top = `${refbox.offsetTop + y}px`;
}

select.addEventListener("change", actualiser);
posX.addEventListener("input", actualiser);
posY.addEventListener("input", actualiser);
verifierSupport();
actualiser();
```

#### Résultat

Changez la position du centre du cercle et le mot-clé utilisé pour voir leurs effets relatifs.
Notez que la boîte de référence, ainsi que le mot-clé de rayon sélectionné et la position, sont utilisés pour calculer le cercle de découpe.
Ce cercle peut s'étendre au-delà de la boîte de référence (par exemple, avec `closest-corner` ou `farthest-corner`)&nbsp;; le dégradé `.fill` est délibérément dimensionné plus grand que la boîte de référence afin qu'il couvre toujours entièrement le cercle découpé, aussi loin qu'il s'étende.

{{EmbedLiveSample("circle-keywords-interactive", "", 640)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés qui utilisent ce type de données&nbsp;: {{CSSxRef("border-shape")}}, {{CSSxRef("clip-path")}}, {{CSSxRef("shape-outside")}}
- [Guide des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
