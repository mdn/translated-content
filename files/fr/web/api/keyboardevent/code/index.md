---
title: KeyboardEvent.code
slug: Web/API/KeyboardEvent/code
---

{{APIRef("DOM Events")}}

La propriété **`KeyboardEvent.code`** représente une touche physique du clavier (contrairement au caractère généré par celle-ci). En d'autres termes, cette propriété retourne une valeur qui n'est pas modifiée par la disposition du clavier ou l'état des touches de modification.

Si le clavier n'est pas physique, la valeur retournée sera définie par le navigateur pour être le plus proche possible des valeurs retournées par un clavier physique afin de maximiser la compatibilité entre un clavier physique et virtuel.

Cette propriété est utile quand vous souhaitez manipuler les clés en fonction de leur position physique sur le clavier et non les caractères associés au clés (par exemple pour les touches de déplacement d'un jeu vidéo). Attention toutefois, on ne pourra pas utiliser la valeur fournie par `KeyboardEvent.code` afin de déterminer le caractère utilisé sur le clavier.

Par exemple, le `code` retourné est `"KeyQ"` pour le caractère "<kbd>q</kbd>" sur un clavier QWERTY, mais le même `code` représente le caractère "<kbd>'</kbd>" sur un clavier Dvorak, et le caractère "<kbd>a</kbd>" sur un clavier AZERTY. Cela rend impossible l'utilisation du `code` pour déterminer le code d'une clé destiné aux utilisateurs s'ils n'utilisent pas une disposition de clavier anticipé.

Pour déterminer quel caractère correspond à un `key event`, utilisez plutôt la propriété {{domxref("KeyboardEvent.key")}}.

## Valeurs des codes

Les valeurs de code pour Windows, Linux et macOS figurent dans la liste de la [KeyboardEvent: code values](/fr/docs/Web/API/KeyboardEvent/code/code_values).

## Exemples

### Pratiquer `KeyboardEvent`

#### HTML

```html
<p>
  Appuyez sur une touche du clavier pour voir quelle valeur clé de KeyboardEvent
  correspond à chaque événement
</p>
<div id="output"></div>
```

#### CSS

```css
#output {
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
}
```

#### JavaScript

```js
window.addEventListener(
  "keydown",
  function (event) {
    let str =
      "KeyboardEvent: key='" + event.key + "' | code='" + event.code + "'";
    let el = document.createElement("span");
    el.innerHTML = str + "<br/>";

    document.getElementById("output").appendChild(el);
  },
  true,
);
```

#### Résultat

Pour essayer ce code, cliquez sur le lien ci-dessous:

{{EmbedLiveSample('Pratiquer_KeyboardEvent', 600, 300) }}

### Gérer les événements de clavier dans un jeu

Cet exemple établit un écouteur d'événements pour l'événement [`keydown`](/fr/docs/Web/API/Element/keydown_event) qui gère la saisie au clavier pour un jeu qui utilise la disposition de clavier typique "ZQSD" pour se déplacer en avant, à gauche, en arrière et à droite. Cela utilisera les quatre mêmes touches physiquement, quels que soient les caractères correspondants, par exemple si l'utilisateur utilise un clavier QWERTY.

#### HTML

```html
<p>
  Appuyez sur les touches ZQSD (WASP sur QWERTY) pour bouger et pour vous
  diriger
</p>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="world">
  <polygon id="spaceship" points="15,0 0,30 30,30" />
</svg>
<script>
  refresh();
</script>
```

#### CSS

```css
.world {
  margin: 0px;
  padding: 0px;
  background-color: black;
  width: 400px;
  height: 400px;
}

#spaceship {
  fill: orange;
  stroke: red;
  stroke-width: 2px;
}
```

#### JavaScript

La première section du code JavaScript établit certaines variables que nous allons utiliser. `shipSize` contient la taille du vaisseau dans lequel le joueur se déplace, pour plus de commodité. `position` est utilisé pour suivre la position du vaisseau sur le terrain de jeu. `moveRate` et `turnRate` sont le nombre de pixels en avant et en arrière chaque fois que vous appuyez sur une touche pour déplacer le vaisseau et le nombre de degrés de rotation que les commandes de direction gauche et droite appliquent à chaque frappe. `angle` est la quantité actuelle de rotation appliquée au vaisseau, en degrés; il commence à 0 ° (pointant tout droit). Enfin, `spaceship` est défini pour faire référence à l'élément portant l'ID "spaceship", qui est le polygone SVG représentant le vaisseau que le joueur contrôle.

```js
let shipSize = {
  width: 30,
  height: 30,
};

let position = {
  x: 200,
  y: 200,
};

let moveRate = 9;
let turnRate = 5;

let angle = 0;

let spaceship = document.getElementById("spaceship");
```

Vient ensuite la fonction `updatePosition()`. Cette fonction prend en entrée la distance à laquelle le vaisseau doit être déplacé, où positif est un mouvement en avant et négatif est un mouvement en arrière. Cette fonction calcule la nouvelle position du vaisseau en fonction de la distance parcourue et de la direction actuelle du vaisseau. Il veille également à ce que le vaisseau franchisse les limites du terrain de jeu au lieu de disparaître.

```js
function updatePosition(offset) {
  let rad = angle * (Math.PI / 180);
  position.x += Math.sin(rad) * offset;
  position.y -= Math.cos(rad) * offset;

  if (position.x < 0) {
    position.x = 399;
  } else if (position.x > 399) {
    position.x = 0;
  }

  if (position.y < 0) {
    position.y = 399;
  } else if (position.y > 399) {
    position.y = 0;
  }
}
```

La fonction `refresh()` gère l'application de la rotation et de la position à l'aide d'un [SVG transform](/fr/docs/Web/SVG/Attribute/transform).

```js
function refresh() {
  let x = position.x - shipSize.width / 2;
  let y = position.y - shipSize.height / 2;
  let transform = "translate(" + x + " " + y + ") rotate(" + angle + " 15 15) ";

  spaceship.setAttribute("transform", transform);
}
```

Enfin, la méthode `addEventListener()` est utilisée pour commencer à écouter les événements [`keydown`](/fr/docs/Web/API/Element/keydown_event), en mettant à jour chaque touche en mettant à jour la position et l'angle de rotation du vaisseau, puis en appelant la méthode `refresh()` pour tracer le navire dans sa nouvelle position et son nouvel angle.

```js
window.addEventListener(
  "keydown",
  function (event) {
    if (event.preventDefaulted) {
      return; // Do nothing if event already handled
    }

    switch (event.code) {
      case "KeyS":
      case "ArrowDown":
        // Handle "back"
        updatePosition(-moveRate);
        break;
      case "KeyW":
      case "ArrowUp":
        // Handle "forward"
        updatePosition(moveRate);
        break;
      case "KeyA":
      case "ArrowLeft":
        // Handle "turn left"
        angle -= turnRate;
        break;
      case "KeyD":
      case "ArrowRight":
        // Handle "turn right"
        angle += turnRate;
        break;
    }

    refresh();

    // Consume the event so it doesn't get handled twice
    event.preventDefault();
  },
  true,
);
```

#### Résultat

Pour essayer le code ci-dessus, cliquez sur le bouton ci-dessous:

{{EmbedLiveSample("Gérer_les_événements_de_clavier_dans_un_jeu", 420, 460)}}

Ce code peut être amélioré de plusieurs manières. La plupart des jeux réels surveillent les événements [`keydown`](/fr/docs/Web/API/Element/keydown_event), démarrent le mouvement lorsque cela se produit et stoppent le mouvement lorsque l'événement [`keyup`](/fr/docs/Web/API/Element/keyup_event) se produit, au lieu de compter sur des répétitions de touches. Cela permettrait des mouvements plus fluides et plus rapides, mais permettrait également au joueur de bouger et de diriger en même temps. Des transitions ou des animations peuvent également être utilisées pour rendre le mouvement du navire plus fluide. Pour permettre cela, il ne faudrait pas utiliser de `switch`, ni de `else if`.ff

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
