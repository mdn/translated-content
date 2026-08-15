---
title: Évènements de pointeur
slug: Web/API/Pointer_events
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{DefaultAPISidebar("Pointer Events")}}

Une grande partie du contenu web actuel suppose que le dispositif de pointage de l'utilisateur·ice est une souris. Cependant, comme de nombreux appareils prennent en charge d'autres types de dispositifs de saisie par pointage, tels qu'un stylo/stylet et des surfaces tactiles, il faut étendre les modèles d'évènements de pointage existants. Les _[évènements de pointeur](#évènement_de_pointeur)_ répondent à ce besoin.

Les évènements de pointeur sont des évènements DOM déclenchés pour un dispositif de pointage. Ils sont conçus pour créer un modèle unique d'évènements DOM afin de gérer les dispositifs de saisie par pointage comme une souris, un stylo/stylet ou une surface tactile (par exemple un ou plusieurs doigts).

Le _[pointeur](#pointer)_ est un dispositif indépendant du matériel qui peut cibler un ensemble précis de coordonnées à l'écran. Un modèle unique d'évènements pour les pointeurs peut simplifier la création de sites web et d'applications et offrir une bonne expérience utilisateur·ice quel que soit le matériel de l'utilisateur·ice. Cependant, lorsque la gestion spécifique à un appareil est souhaitée, les évènements de pointeur définissent une propriété {{DOMxRef("PointerEvent.pointerType","pointerType")}} qui permet d'examiner le type d'appareil ayant produit l'évènement.

Les évènements nécessaires à la gestion d'une saisie générique par pointeur sont analogues aux {{DOMxRef("MouseEvent","évènements de souris", "", 1)}} (`mousedown`/`pointerdown`, `mousemove`/`pointermove`, etc.). Par conséquent, les types d'évènements de pointeur sont volontairement similaires aux types d'évènements souris.

De plus, un évènement de pointeur contient les propriétés habituelles présentes dans les évènements souris (coordonnées côté client, élément cible, états des boutons, etc.), ainsi que de nouvelles propriétés pour les autres formes de saisie&nbsp;: pression, géométrie du contact, inclinaison, etc. En fait, l'interface {{DOMxRef("PointerEvent")}} hérite de toutes les propriétés de {{DOMxRef("MouseEvent")}}, ce qui facilite la migration du contenu des évènements souris vers les évènements de pointeur.

## Terminologie

### État des boutons actifs

La condition dans laquelle un _[pointeur](#pointer)_ a une valeur non nulle pour la propriété `buttons`. Par exemple, dans le cas d'un stylo, lorsque le stylo est en contact physique avec le numériseur, ou lorsqu'au moins un bouton est enfoncé pendant le survol.

### Pointeur actif

Tout dispositif de saisie _[pointeur](#pointer)_ qui peut produire des évènements. Un pointeur est considéré comme actif s'il peut encore produire d'autres évènements. Par exemple, un stylo dans un état abaissé est considéré comme actif, car il peut produire d'autres évènements lorsqu'il est soulevé ou déplacé.

### Numériseur

Un dispositif de détection doté d'une surface qui peut détecter un contact. Le plus souvent, il s'agit d'un écran tactile qui peut détecter la saisie provenant d'un dispositif comme un stylo, un stylet ou un doigt. Certains dispositifs de détection peuvent détecter la proximité immédiate du dispositif de saisie, et cet état s'exprime sous la forme d'un survol, comme avec une souris.

### Teste de cible

Le processus utilisé par le navigateur pour déterminer un élément cible pour un évènement de pointeur. En général, cette détermination s'effectue en tenant compte de l'emplacement du pointeur ainsi que de la disposition visuelle des éléments d'un document sur un support d'affichage.

### Pointeur

Une représentation indépendante du matériel des dispositifs de saisie qui peuvent cibler une coordonnée précise (ou un ensemble de coordonnées) sur un écran. Les dispositifs de saisie _pointeur_ comprennent notamment la souris, le stylo/stylet et les contacts tactiles.

### Capture du pointeur

La capture du pointeur permet de rediriger les évènements d'un pointeur vers un élément particulier plutôt que vers le résultat normal du test de cible à l'emplacement du pointeur. Consultez [capturer le pointeur](#capturer_le_pointeur) pour voir un exemple.

> [!NOTE]
> La _capture du pointeur_ est différente du [_verrouillage du pointeur_](/fr/docs/Web/API/Pointer_Lock_API), qui empêche physiquement le pointeur de quitter une zone.

### Évènement de pointeur

Un {{DOMxRef("PointerEvent", "évènement", "", 1)}} DOM déclenché pour un _[pointeur](#pointer)_.

## Interfaces

L'interface principale est l'interface {{DOMxRef("PointerEvent")}}, qui comprend un {{DOMxRef("PointerEvent.PointerEvent", "constructor")}}, ainsi que plusieurs types d'évènements et les gestionnaires d'évènements globaux associés.

La norme comprend également des extensions aux interfaces {{DOMxRef("Element")}} et {{DOMxRef("Navigator")}}.

Les sous-sections suivantes contiennent de brèves descriptions de chaque interface et propriété.

### Interface PointerEvent

L'interface {{DOMxRef("PointerEvent")}} étend l'interface {{DOMxRef("MouseEvent")}} et possède les propriétés suivantes.

- {{DOMxRef("PointerEvent.altitudeAngle", "altitudeAngle")}} {{ReadOnlyInline}}
  - : Représente l'angle entre l'axe d'un transducteur (un pointeur ou un stylet) et le plan X-Y de l'écran d'un appareil.
- {{DOMxRef("PointerEvent.azimuthAngle", "azimuthAngle")}} {{ReadOnlyInline}}
  - : Représente l'angle entre le plan Y-Z et le plan contenant à la fois l'axe du transducteur (un pointeur ou un stylet) et l'axe Y.
- {{DOMxRef("PointerEvent.persistentDeviceId")}} {{ReadOnlyInline}}
  - : Un identifiant unique du dispositif de pointage qui génère le `PointerEvent`.
- {{DOMxRef("PointerEvent.pointerId", "pointerId")}} {{ReadOnlyInline}}
  - : Un identifiant unique du pointeur à l'origine de l'évènement.
- {{DOMxRef("PointerEvent.width", "width")}} {{ReadOnlyInline}}
  - : La largeur (mesure sur l'axe X), en pixels CSS, de la géométrie du contact du pointeur.
- {{DOMxRef("PointerEvent.height", "height")}} {{ReadOnlyInline}}
  - : La hauteur (mesure sur l'axe Y), en pixels CSS, de la géométrie du contact du pointeur.
- {{DOMxRef("PointerEvent.pressure", "pressure")}} {{ReadOnlyInline}}
  - : La pression normalisée de la saisie du pointeur, comprise entre `0` et `1`, où `0` et `1` représentent respectivement les pressions minimale et maximale que le matériel peut détecter.
- {{DOMxRef("PointerEvent.tangentialPressure", "tangentialPressure")}} {{ReadOnlyInline}}
  - : La pression tangentielle normalisée de la saisie du pointeur (également appelée pression du barillet ou contrainte du cylindre), comprise entre `-1` et `1`, où `0` correspond à la position neutre de la commande.
- {{DOMxRef("PointerEvent.tiltX", "tiltX")}} {{ReadOnlyInline}}
  - : L'angle du plan (en degrés, compris entre `-90` et `90`) entre le plan Y-Z et le plan contenant à la fois l'axe du pointeur (par exemple, celui d'un stylo ou d'un stylet) et l'axe Y.
- {{DOMxRef("PointerEvent.tiltY", "tiltY")}} {{ReadOnlyInline}}
  - : L'angle du plan (en degrés, compris entre `-90` et `90`) entre le plan X-Z et le plan contenant à la fois l'axe du pointeur (par exemple, celui d'un stylo ou d'un stylet) et l'axe X.
- {{DOMxRef("PointerEvent.twist", "twist")}} {{ReadOnlyInline}}
  - : La rotation horaire du pointeur (par exemple, celui d'un stylo ou d'un stylet) autour de son axe principal, en degrés, avec une valeur comprise entre `0` et `359`.
- {{DOMxRef("PointerEvent.pointerType", "pointerType")}} {{ReadOnlyInline}}
  - : Indique le type de dispositif à l'origine de l'évènement (souris, stylo, toucher, etc.).
- {{DOMxRef("PointerEvent.isPrimary", "isPrimary")}} {{ReadOnlyInline}}
  - : Indique si le pointeur représente le pointeur principal de ce type de pointeur.

### Types d'évènements et gestionnaires d'évènements globaux

Les évènements de pointeur possèdent dix types d'évènements, dont sept ont une sémantique similaire à celle de leurs équivalents pour la souris (`down`, `up`, `move`, `over`, `out`, `enter` et `leave`).

Voici une brève description de chaque type d'évènement.

| Évènement                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{DOMxRef("Element/pointerover_event", "pointerover")}}                                   | Déclenché lorsqu'un pointeur est déplacé dans les limites du [teste de cible](#teste_de_cible) d'un élément.                                                                                                                                                                                                                                                                                                                                       |
| {{DOMxRef("Element/pointerenter_event", "pointerenter")}}                                 | Déclenché lorsqu'un pointeur est déplacé dans les limites du [teste de cible](#teste_de_cible) d'un élément ou de l'un de ses descendants, notamment à la suite d'un évènement `pointerdown` provenant d'un appareil qui ne prend pas en charge le survol (voir `pointerdown`).                                                                                                                                                                    |
| {{DOMxRef("Element/pointerdown_event", "pointerdown")}}                                   | Déclenché lorsqu'un pointeur passe à _l'état des boutons actifs_.                                                                                                                                                                                                                                                                                                                                                                                  |
| {{DOMxRef("Element/pointermove_event", "pointermove")}}                                   | Déclenché lorsqu'un pointeur change de coordonnées. Cet évènement est également utilisé si le changement d'état du pointeur ne peut pas être signalé par d'autres évènements.                                                                                                                                                                                                                                                                      |
| {{DOMxRef("Element/pointerup_event", "pointerup")}}                                       | Déclenché lorsqu'un pointeur n'est plus dans _l'état des boutons actifs_.                                                                                                                                                                                                                                                                                                                                                                          |
| {{DOMxRef("Element/pointercancel_event", "pointercancel")}}                               | Un navigateur déclenche cet évènement s'il conclut que le pointeur ne peut plus produire d'évènements (par exemple, si l'appareil associé est désactivé ou si le navigateur décide d'interpréter l'interaction comme un panoramique/zoom). Pour savoir comment contrôler ce comportement, consultez [la section sur la propriété CSS `touch-action`](#propriété_css_touch-action) ci-dessous.                                                      |
| {{DOMxRef("Element/pointerout_event", "pointerout")}}                                     | Déclenché pour plusieurs raisons notamment&nbsp;: le pointeur est déplacé hors des limites du [teste de cible](#teste_de_cible) d'un élément&nbsp;; l'évènement `pointerup` est déclenché pour un appareil qui ne prend pas en charge le survol (voir `pointerup`)&nbsp;; après le déclenchement de l'évènement `pointercancel` (voir `pointercancel`)&nbsp;; lorsqu'un stylo ou un stylet quitte la plage de survol détectable par le numériseur. |
| {{DOMxRef("Element/pointerleave_event", "pointerleave")}}                                 | Déclenché lorsqu'un pointeur est déplacé hors des limites du [teste de cible](#teste_de_cible) d'un élément. Pour les appareils utilisant un stylo, cet évènement est déclenché lorsque le stylet quitte la plage de survol détectable par le numériseur.                                                                                                                                                                                          |
| {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}} {{Experimental_Inline}} | Déclenché lorsqu'un pointeur modifie des propriétés qui ne déclenchent pas les évènements `pointerdown` ou `pointerup`.                                                                                                                                                                                                                                                                                                                            |
| {{DOMxRef("Element/gotpointercapture_event", "gotpointercapture")}}                       | Déclenché lorsqu'un élément reçoit la capture du pointeur.                                                                                                                                                                                                                                                                                                                                                                                         |
| {{DOMxRef("Element/lostpointercapture_event", "lostpointercapture")}}                     | Déclenché après la libération de la capture du pointeur pour un pointeur.                                                                                                                                                                                                                                                                                                                                                                          |

### Extensions de `Element`

Il existe trois extensions de l'interface {{DOMxRef("Element")}}&nbsp;:

- {{DOMxRef("Element.hasPointerCapture()","hasPointerCapture()")}}
  - : Indique si l'élément sur lequel la méthode est appelée capture le pointeur identifié par l'identifiant de pointeur donné.
- {{DOMxRef("Element.releasePointerCapture()","releasePointerCapture()")}}
  - : Libère (arrête) la _capture du pointeur_ qui a été définie précédemment pour un évènement de pointeur précis.
- {{DOMxRef("Element.setPointerCapture()","setPointerCapture()")}}
  - : Désigne un élément précis comme _cible de capture_ des évènements de pointeur suivants.

### Extension de `Navigator`

La propriété {{DOMxRef("Navigator.maxTouchPoints")}} sert à déterminer le nombre maximal de points de contact simultanés pris en charge à un instant donné.

## Exemples

Cette section contient des exemples d'utilisation basique des interfaces d'évènements de pointeur.

### Enregistrer des gestionnaires d'évènements

Cet exemple enregistre un gestionnaire pour chaque type d'évènement de l'élément donné.

```html
<div id="cible">Touchez-moi…</div>
```

```js
function overHandler(event) {}
function enterHandler(event) {}
function downHandler(event) {}
function moveHandler(event) {}
function upHandler(event) {}
function cancelHandler(event) {}
function outHandler(event) {}
function leaveHandler(event) {}
function rawUpdateHandler(event) {}
function gotCaptureHandler(event) {}
function lostCaptureHandler(event) {}

const el = document.getElementById("cible");
// Enregistre les gestionnaires d'évènements de pointeur
el.onpointerover = overHandler;
el.onpointerenter = enterHandler;
el.onpointerdown = downHandler;
el.onpointermove = moveHandler;
el.onpointerup = upHandler;
el.onpointercancel = cancelHandler;
el.onpointerout = outHandler;
el.onpointerleave = leaveHandler;
el.onpointerrawupdate = rawUpdateHandler;
el.ongotpointercapture = gotCaptureHandler;
el.onlostpointercapture = lostCaptureHandler;
```

### Propriétés des évènements

Cet exemple illustre l'accès à toutes les propriétés d'un évènement de pointeur.

```html
<div id="cible">Touchez-moi…</div>
```

```js
const id = -1;

function processId(event) {
  // Traite cet évènement selon son identifiant
}
function processMouse(event) {
  // Traite l'évènement de pointeur de souris
}
function processPen(event) {
  // Traite l'évènement de pointeur de stylo
}
function processTouch(event) {
  // Traite l'évènement de pointeur tactile
}
function processTilt(tiltX, tiltY) {
  // Gestionnaire des données d'inclinaison
}
function processPressure(pressure) {
  // Gestionnaire de la pression
}
function processNonPrimary(event) {
  // Gestionnaire des pointeurs non principaux
}

function downHandler(ev) {
  // Calcule la surface de contact du point tactile
  const area = ev.width * ev.height;

  // Compare l'identifiant mis en cache à celui de cet évènement et le traite en conséquence
  if (id === ev.identifier) processId(ev);

  // Appelle le gestionnaire approprié selon le type de pointeur
  switch (ev.pointerType) {
    case "mouse":
      processMouse(ev);
      break;
    case "pen":
      processPen(ev);
      break;
    case "touch":
      processTouch(ev);
      break;
    default:
      console.log(
        `Le type de pointeur ${ev.pointerType} n'est pas pris en charge`,
      );
  }

  // Appelle le gestionnaire de l'inclinaison
  if (ev.tiltX !== 0 && ev.tiltY !== 0) processTilt(ev.tiltX, ev.tiltY);

  // Appelle le gestionnaire de la pression
  processPressure(ev.pressure);

  // Si cet évènement n'est pas principal, appelle le gestionnaire des pointeurs non principaux
  if (!ev.isPrimary) processNonPrimary(ev);
}

const el = document.getElementById("cible");
// Enregistre le gestionnaire de pointerdown
el.onpointerdown = downHandler;
```

## Déterminer le pointeur principal

Dans certains scénarios, plusieurs pointeurs peuvent être présents (par exemple, un appareil doté à la fois d'un écran tactile et d'une souris), ou un pointeur peut prendre en charge plusieurs points de contact (par exemple, un écran tactile qui prend en charge les contacts de plusieurs doigts). L'application peut utiliser la propriété {{DOMxRef("PointerEvent.isPrimary", "isPrimary")}} pour identifier un pointeur principal parmi l'ensemble des _pointeurs actifs_ de chaque type de pointeur. Si une application souhaite uniquement prendre en charge un pointeur principal, elle peut ignorer tous les évènements de pointeur qui ne sont pas principaux.

Pour une souris, il n'existe qu'un seul pointeur, qui est donc toujours le pointeur principal. Pour une saisie tactile, un pointeur est considéré comme principal si l'utilisateur·ice touche l'écran alors qu'aucun autre contact tactile n'est actif. Pour une saisie au stylo ou au stylet, un pointeur est considéré comme principal si le stylo de l'utilisateur·ice entre initialement en contact avec l'écran alors qu'aucun autre stylo actif n'est en contact avec l'écran.

## Déterminer l'état des boutons

Certains dispositifs de pointage (comme une souris ou un stylo) prennent en charge plusieurs boutons, et les pressions sur les boutons peuvent être _combinées_ (c'est-à-dire lorsqu'un bouton supplémentaire est enfoncé alors qu'un autre bouton du dispositif de pointage est déjà enfoncé).

Pour déterminer l'état des pressions sur les boutons, les évènements de pointeur utilisent les propriétés {{DOMxRef("MouseEvent.button","button")}} et {{DOMxRef("MouseEvent.buttons","buttons")}} de l'interface {{DOMxRef("MouseEvent")}}, dont {{DOMxRef("PointerEvent")}} hérite.

Le tableau suivant fournit les valeurs de `button` et `buttons` pour les différents états des boutons du dispositif.

| État des boutons du dispositif                                                                   | button | buttons |
| ------------------------------------------------------------------------------------------------ | ------ | ------- |
| Ni les boutons ni le contact tactile ou du stylo n'ont changé depuis le dernier évènement        | `-1`   | —       |
| Déplacement de la souris sans bouton enfoncé, déplacement du stylo en survol sans bouton enfoncé | —      | `0`     |
| Souris gauche, contact tactile, contact du stylo                                                 | `0`    | `1`     |
| Bouton central de la souris                                                                      | `1`    | `4`     |
| Bouton droit de la souris, bouton du barillet du stylo                                           | `2`    | `2`     |
| Souris X1 (retour)                                                                               | `3`    | `8`     |
| Souris X2 (avance)                                                                               | `4`    | `16`    |
| Bouton de gomme du stylo                                                                         | `5`    | `32`    |

> [!NOTE]
> La propriété `button` indique une modification de l'état du bouton. Cependant, comme dans le cas du toucher, lorsque plusieurs évènements se produisent avec un évènement, ils ont tous la même valeur.

## Capturer le pointeur

La capture du pointeur permet de rediriger les évènements d'un {{DOMxRef("PointerEvent","évènement de pointeur", "", 1)}} particulier vers un élément particulier au lieu du [teste de cible](#teste_de_cible) normal à l'emplacement du pointeur. Cela permet de s'assurer qu'un élément continue à recevoir les évènements de pointeur même si le contact du dispositif de pointage quitte l'élément cible (par exemple lors du défilement ou du panoramique).

La capture du pointeur fait que la cible capture tous les évènements de pointeur suivants comme s'ils se produisent au-dessus de la cible de capture. Par conséquent, `pointerover`, `pointerenter`, `pointerleave` et `pointerout` **ne se déclenchent pas** tant que cette capture est définie.
Pour les navigateurs tactiles qui autorisent la [manipulation directe <sup>(angl.)</sup>](https://w3c.github.io/pointerevents/#dfn-direct-manipulation), une [capture implicite du pointeur <sup>(angl.)</sup>](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) est appelée sur l'élément lorsqu'un évènement `pointerdown` se déclenche. La capture peut être libérée manuellement en appelant {{DOMxRef('element.releasePointerCapture')}} sur l'élément cible, ou elle est implicitement libérée après un évènement `pointerup` ou `pointercancel`.

> [!NOTE]
> Si vous devez déplacer un élément dans le DOM, veillez à appeler `setPointerCapture()` **après les déplacements dans le DOM** afin que `setPointerCapture()` ne perde pas sa référence. Par exemple, si vous devez utiliser `Element.append()` pour déplacer un élément ailleurs, veillez à appeler `setPointerCapture()` sur cet élément uniquement après l'appel à `Element.append()`.

L'exemple suivant montre comment définir la capture du pointeur sur un élément.

```html
<div id="cible">Touchez-moi…</div>
```

```js
function downHandler(ev) {
  const el = document.getElementById("cible");
  // L'élément « cible » reçoit/capture les évènements suivants
  el.setPointerCapture(ev.pointerId);
}

const el = document.getElementById("cible");
el.onpointerdown = downHandler;
```

L'exemple suivant montre comment libérer la capture du pointeur lorsqu'un évènement {{DOMxRef("Element/pointercancel_event", "pointercancel")}} se produit. Le navigateur le fait automatiquement lorsqu'un évènement {{DOMxRef("Element/pointerup_event", "pointerup")}} ou {{DOMxRef("Element/pointercancel_event", "pointercancel")}} se produit.

```html
<div id="cible">Touchez-moi…</div>
```

```js
function downHandler(ev) {
  const el = document.getElementById("cible");
  // L'élément « cible » reçoit/capture les évènements suivants
  el.setPointerCapture(ev.pointerId);
}

function cancelHandler(ev) {
  const el = document.getElementById("cible");
  // Libère la capture du pointeur
  el.releasePointerCapture(ev.pointerId);
}

const el = document.getElementById("cible");
// Enregistre les gestionnaires de pointerdown et pointercancel
el.onpointerdown = downHandler;
el.onpointercancel = cancelHandler;
```

## La propriété CSS `touch-action`

La propriété CSS {{CSSxRef("touch-action")}} sert à définir si le navigateur applique ou non son comportement tactile par défaut (_natif_) (comme le zoom ou le panoramique) à une zone. Cette propriété peut s'appliquer à tous les éléments sauf&nbsp;: les éléments en ligne non remplacés, les lignes de tableau, les groupes de lignes, les colonnes de tableau et les groupes de colonnes.

La valeur `auto` signifie que le navigateur peut appliquer son comportement tactile par défaut à la zone définie, tandis que la valeur `none` désactive le comportement tactile par défaut du navigateur pour cette zone. Les valeurs `pan-x` et `pan-y` signifient que les contacts qui commencent dans la zone définie servent uniquement au défilement horizontal et vertical, respectivement. La valeur `manipulation` signifie que le navigateur peut considérer que les contacts qui commencent sur l'élément servent uniquement au défilement et au zoom.

Dans l'exemple suivant, le comportement tactile par défaut est désactivé pour certains éléments `button`.

```css
button#tiny {
  touch-action: none;
}
```

Dans l'exemple suivant, lorsque l'élément `cible` est touché, il effectue uniquement un panoramique horizontal.

```css
#cible {
  touch-action: pan-x;
}
```

## Compatibilité avec les évènements souris

Bien que les interfaces d'évènements de pointeur permettent aux applications de créer des expériences utilisateur·ice enrichies sur les appareils compatibles avec les pointeurs, la grande majorité du contenu web actuel est conçue pour fonctionner uniquement avec une saisie à la souris. Par conséquent, même si un navigateur prend en charge les évènements de pointeur, il doit continuer à traiter les évènements souris afin que le contenu qui suppose une saisie uniquement à la souris fonctionne sans modification directe. Idéalement, une application compatible avec les pointeurs n'a pas besoin de gérer explicitement la saisie à la souris. Cependant, comme le navigateur doit traiter les évènements souris, certains problèmes de compatibilité peuvent nécessiter une gestion. Cette section contient des informations sur l'interaction entre les évènements de pointeur et les évènements souris, ainsi que sur ses conséquences pour les développeur·euse·s d'applications.

Le navigateur _peut associer une saisie générique par pointeur à des évènements souris pour assurer la compatibilité avec le contenu basé sur la souris_. Cette association d'évènements est appelée _évènements souris de compatibilité_. Les auteur·ice·s peuvent empêcher la production de certains évènements souris de compatibilité en annulant l'évènement `pointerdown`, mais notez que&nbsp;:

- Les évènements souris peuvent uniquement être empêchés lorsque le pointeur est abaissé.
- Les pointeurs en survol (par exemple, une souris sans bouton enfoncé) ne peuvent pas voir leurs évènements souris empêchés.
- Les évènements `mouseover`, `mouseout`, `mouseenter` et `mouseleave` ne sont jamais empêchés, même lorsque le pointeur est abaissé.

## Bonnes pratiques

Voici quelques _bonnes pratiques_ à prendre en compte lors de l'utilisation des évènements de pointeur&nbsp;:

- Réduisez la quantité de travail effectuée dans les gestionnaires d'évènements.
- Ajoutez les gestionnaires d'évènements à un élément cible précis, plutôt qu'à l'ensemble du document ou à des nœuds plus élevés dans l'arbre du document.
- L'élément cible (le nœud) doit être suffisamment grand pour accueillir la plus grande surface de contact, généralement le contact d'un doigt. Si la zone cible est trop petite, la toucher peut déclencher d'autres évènements pour les éléments adjacents.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

Certaines valeurs supplémentaires ont été définies pour la propriété CSS {{CSSxRef("touch-action")}} dans le cadre de la spécification [des évènements de pointeur <sup>(angl.)</sup>](https://w3c.github.io/pointerevents/), mais ces valeurs bénéficient actuellement d'une prise en charge limitée dans les implémentations.

## Voir aussi

- [Les évènements tactiles](/fr/docs/Web/API/Touch_events)
- [Groupe de travail sur les évènements de pointeur <sup>(angl.)</sup>](https://github.com/w3c/pointerevents)
- [Liste de diffusion <sup>(angl.)</sup>](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [Canal IRC W3C #pointerevents <sup>(angl.)</sup>](irc://irc.w3.org:6667/)
- [Tests et démonstrations tactiles et de pointeur <sup>(angl.)</sup>](https://patrickhlauke.github.io/touch/) de Patrick H. Lauke
