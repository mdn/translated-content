---
title: Event
slug: Web/API/Event
---

{{APIRef("DOM")}}

L'interface **`Event`** interface représente un évènement qui se produit dans le DOM.

Un évènement peut être déclenché par une action humaine (clic avec la souris, appui sur une touche du clavier) ou généré par des API pour représenter la progression d'une tâche asynchrone. Il est également possible de déclencher un évènement à partir d'un programme, en appelant par exemple la méthode [`HTMLElement.click()`](/fr/docs/Web/API/HTMLElement/click) sur un élément ou en définissant l'évènement avant de l'envoyer sur une cible avec la méthode [`EventTarget.dispatchEvent()`](/fr/docs/Web/API/EventTarget/dispatchEvent).

Il existe de nombreux types d'évènements dont certains utilisent d'autres interfaces basées sur `Event`. L'interface `Event` contient les propriétés et méthodes qui sont communes à l'ensemble des évènements.

De nombreux éléments DOM peuvent être paramétrés afin d'accepter (« d'écouter ») ces évènements et d'exécuter du code en réaction afin de les traiter (« gérer »). Les gestionnaires d'évènements sont généralement connectés (« attachés ») aux [éléments HTML](/fr/docs/Web/HTML/Element) (tels que `<button>`, `<div>`, `<span>`, etc.) grâce à la méthode [`EventTarget.addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) qui remplace les anciens [attributs de gestion d'évènement](/fr/docs/Web/HTML/Global_attributes) qui étaient auparavant utilisés en HTML. Avec cette méthode d'ajout plus récente, les gestionnaires peuvent également être déconnectés/détachés si besoin via la méthode [`EventTarget.removeEventListener()`](/fr/docs/Web/API/EventTarget/removeEventListener).

> **Note :** Il est tout à fait possible d'attacher plusieurs gestionnaires d'évènement à un seul élément, y compris pour la gestion d'un évènement particulier. Ainsi, des modules de code indépendant peuvent attacher leurs gestionnaires de façon indépendante (par exemple, sur une page web, un module de publicité et un autre module d'analyse pourront tout à fait attacher des gestionnaires pour étudier la consultation d'une vidéo).

Lorsqu'il y a de nombreux éléments imbriqués, chacun ayant ses propres gestionnaires d'évènement, le traitement des évènements peut se révéler compliqué, notamment lorsqu'un élément parent reçoit le même évènement que ses éléments enfants (par exemple pour des évènements qui se déclenchent sur la surface visuelle de l'élément enfant). Dans ce cas, l'ordre du traitement de ces évènements dépend des paramètres [de bouillonnement (_bubbling_) et de capture](/fr/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) définis sur chaque gestionnaire ainsi déclenché.

## Interfaces basées sur Event

Voici une liste des interfaces basées sur `Event` avec un lien vers leur documentation dans la référence MDN.

On notera que l'ensemble des interfaces d'évènements ont un nom qui termine par _Event_ (« évènement » en anglais).

- [`AnimationEvent`](/fr/docs/Web/API/AnimationEvent)
- [`AudioProcessingEvent`](/fr/docs/Web/API/AudioProcessingEvent)
- [`BeforeInputEvent`](/fr/docs/Web/API/BeforeInputEvent)
- [`BeforeUnloadEvent`](/fr/docs/Web/API/BeforeUnloadEvent)
- [`BlobEvent`](/fr/docs/Web/API/BlobEvent)
- [`ClipboardEvent`](/fr/docs/Web/API/ClipboardEvent)
- [`CloseEvent`](/fr/docs/Web/API/CloseEvent)
- [`CompositionEvent`](/fr/docs/Web/API/CompositionEvent)
- [`CSSFontFaceLoadEvent`](/fr/docs/Web/API/CSSFontFaceLoadEvent)
- [`CustomEvent`](/fr/docs/Web/API/CustomEvent)
- [`DeviceMotionEvent`](/fr/docs/Web/API/DeviceMotionEvent)
- [`DeviceOrientationEvent`](/fr/docs/Web/API/DeviceOrientationEvent)
- [`DeviceProximityEvent`](/fr/docs/Web/API/DeviceProximityEvent)
- [`DOMTransactionEvent`](/fr/docs/Web/API/DOMTransactionEvent)
- [`DragEvent`](/fr/docs/Web/API/DragEvent)
- [`EditingBeforeInputEvent`](/fr/docs/Web/API/EditingBeforeInputEvent)
- [`ErrorEvent`](/fr/docs/Web/API/ErrorEvent)
- [`FetchEvent`](/fr/docs/Web/API/FetchEvent)
- [`FocusEvent`](/fr/docs/Web/API/FocusEvent)
- [`GamepadEvent`](/fr/docs/Web/API/GamepadEvent)
- [`HashChangeEvent`](/fr/docs/Web/API/HashChangeEvent)
- [`IDBVersionChangeEvent`](/fr/docs/Web/API/IDBVersionChangeEvent)
- [`InputEvent`](/fr/docs/Web/API/InputEvent)
- [`KeyboardEvent`](/fr/docs/Web/API/KeyboardEvent)
- [`MediaStreamEvent`](/fr/docs/Web/API/MediaStreamEvent)
- [`MessageEvent`](/fr/docs/Web/API/MessageEvent)
- [`MouseEvent`](/fr/docs/Web/API/MouseEvent)
- [`MutationEvent`](/fr/docs/Web/API/MutationEvent)
- [`OfflineAudioCompletionEvent`](/fr/docs/Web/API/OfflineAudioCompletionEvent)
- [`OverconstrainedError`](/fr/docs/Web/API/OverconstrainedError)
- [`PageTransitionEvent`](/fr/docs/Web/API/PageTransitionEvent)
- [`PaymentRequestUpdateEvent`](/fr/docs/Web/API/PaymentRequestUpdateEvent)
- [`PointerEvent`](/fr/docs/Web/API/PointerEvent)
- [`PopStateEvent`](/fr/docs/Web/API/PopStateEvent)
- [`ProgressEvent`](/fr/docs/Web/API/ProgressEvent)
- [`RelatedEvent`](/fr/docs/Web/API/RelatedEvent)
- [`RTCDataChannelEvent`](/fr/docs/Web/API/RTCDataChannelEvent)
- [`RTCPeerConnectionIceEvent`](/fr/docs/Web/API/RTCPeerConnectionIceEvent)
- [`SensorEvent`](/fr/docs/Web/API/SensorEvent)
- [`StorageEvent`](/fr/docs/Web/API/StorageEvent)
- [`SVGEvent`](/fr/docs/Web/API/SVGEvent)
- [`SVGZoomEvent`](/fr/docs/Web/API/SVGZoomEvent)
- [`TimeEvent`](/fr/docs/Web/API/TimeEvent)
- [`TouchEvent`](/fr/docs/Web/API/TouchEvent)
- [`TrackEvent`](/fr/docs/Web/API/TrackEvent)
- [`TransitionEvent`](/fr/docs/Web/API/TransitionEvent)
- [`UIEvent`](/fr/docs/Web/API/UIEvent)
- [`UserProximityEvent`](/fr/docs/Web/API/UserProximityEvent)
- [`WebGLContextEvent`](/fr/docs/Web/API/WebGLContextEvent)
- [`WheelEvent`](/fr/docs/Web/API/WheelEvent)

## Constructeur

- [`Event()`](/fr/docs/Web/API/Event/Event)
  - : Crée un objet `Event` et le renvoie à l'appelant.

## Propriétés

- [`Event.bubbles`](/fr/docs/Web/API/Event/bubbles) {{readonlyinline}}
  - : Un booléen qui indique si l'évènement bouillonne/remonte vers le haut dans l'arbre du DOM.
- [`Event.cancelBubble`](/fr/docs/Web/API/Event/cancelBubble)
  - : Un alias historique de [`Event.stopPropagation()`](/fr/docs/Web/API/Event/stopPropagation). Définir sa valeur à `true` avant le retour d'un gestionnaire d'évènement empêchera la propagation de l'évènement.
- [`Event.cancelable`](/fr/docs/Web/API/Event/cancelable) {{readonlyinline}}
  - : Un booléen qui indique si l'évènement peut être annulé.
- [`Event.composed`](/fr/docs/Web/API/Event/composed) {{ReadOnlyInline}}
  - : Un booléen qui indique si l'évènement peut bouillonner entre l'arbre du shadow DOM et le DOM standard.
- [`Event.currentTarget`](/fr/docs/Web/API/Event/currentTarget) {{readonlyinline}}
  - : Une référence vers la cible actuellement enregistrée pour l'évènement. Il s'agit de l'objet vers lequel l'évènement est présentement destiné à être envoyé. Cette cible peut avoir été modifiée pendant la vie de l'évènement via un reciblage.
- [`Event.deepPath`](/fr/docs/Web/API/Event/deepPath) {{non-standard_inline}}
  - : Un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) de nœuds ([`Node`](/fr/docs/Web/API/Node)) du DOM qui ont été parcourus lors du bouillonnement/de la remontée de l'évènement.
- [`Event.defaultPrevented`](/fr/docs/Web/API/Event/defaultPrevented) {{readonlyinline}}
  - : Indique si un appel à [`Event.preventDefault()`](/fr/docs/Web/API/Event/preventDefault) a annulé l'évènement.
- [`Event.eventPhase`](/fr/docs/Web/API/Event/eventPhase) {{readonlyinline}}
  - : Indique la phase du flux de l'évènement qui est en cours de traitement.
- [`Event.explicitOriginalTarget`](/fr/docs/Web/API/Event/explicitOriginalTarget) {{non-standard_inline}} {{readonlyinline}}
  - : La cible explicite et originnelle de l'évènement (spécifique à Mozilla).
- [`Event.originalTarget`](/fr/docs/Web/API/Event/originalTarget) {{non-standard_inline}} {{readonlyinline}}
  - : La cible originale de l'évènement avant tout reciblage (spécifique à Mozilla).
- [`Event.returnValue`](/fr/docs/Web/API/Event/returnValue) {{Deprecated_Inline}}
  - : Une propriété historique, introduite par Internet Explorer puis adoptée au sein de la spécification du DOM pour la compatibilité des sites existants. À la place, on privilégiera l'usage de [`Event.preventDefault()`](/fr/docs/Web/API/Event/preventDefault) et [`Event.defaultPrevented`](/fr/docs/Web/API/Event/defaultPrevented).
- [`Event.srcElement`](/fr/docs/Web/API/Event/srcElement) {{non-standard_inline}}
  - : Un alias non-standard (provenant d'anciennes versions d'Internet Explorer) pour [`Event.target`](/fr/docs/Web/API/Event/target). Certains navigateurs le prennent en charge à des fins de compatibilité web.
- [`Event.target`](/fr/docs/Web/API/Event/target) {{readonlyinline}}
  - : Une référence à la cible à laquelle l'évènement était initialement destiné.
- [`Event.timeStamp`](/fr/docs/Web/API/Event/timeStamp) {{readonlyinline}}
  - : Le temps auquel l'évènement a été créé (exprimé en millisecondes). La spécification indique que cette valeur est relative à l'epoch mais l'implémentation des navigateurs peut varier. Des travaux sont en cours afin que cette valeur devienne une valeur de type [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp).
- [`Event.type`](/fr/docs/Web/API/Event/type) {{readonlyinline}}
  - : Le nom de l'évènement, exprimé de façon insensible à la casse.
- [`Event.isTrusted`](/fr/docs/Web/API/Event/isTrusted) {{readonlyinline}}
  - : Indique si l'évènement a été initié par le navigateur (suite à une action humaine comme un clic) ou par un script (en utilisant une méthode de création comme [`Event.initEvent`](/fr/docs/Web/API/Event/initEvent)).

### Propriétés dépréciées

- [`Event.scoped`](/fr/docs/Web/API/Event/composed) {{readonlyinline}} {{deprecated_inline}}
  - : Un booléen qui indique si l'évènement courant remontera de l'arbre du shadow DOM vers l'arbre du DOM classique. [`Event.composed`](/fr/docs/Web/API/Event/composed) doit être utilisé à la place.

## Méthodes

- [`Event.composedPath()`](/fr/docs/Web/API/Event/composedPath)
  - : Renvoie le chemin de l'évènement (c'est-à-dire les objets pour lesquels des gestionnaires d'évènements seront appelés). Ce chemin n'inclut pas les nœuds des arbres shadow si la racine shadow a été créée avec un [`ShadowRoot.mode`](/fr/docs/Web/API/ShadowRoot/mode).
- [`Event.preventDefault()`](/fr/docs/Web/API/Event/preventDefault)
  - : Annule l'évènement (si celui-ci peut être annulé).
- [`Event.stopImmediatePropagation`](/fr/docs/Web/API/Event/stopImmediatePropagation)
  - : Pour l'évènement courant, empêche les autres gestionnaires d'évènements d'être appelés. Cela inclut les gestionnaires attachés au même élément ainsi que ceux attachés aux éléments qui seront parcourus ensuite (pendant la phase de capture par exemple).
- [`Event.stopPropagation`](/fr/docs/Web/API/Event/stopPropagation)
  - : Arrête la propagation des évènements plus loin dans le DOM.

### Méthodes dépréciées

- [`Event.initEvent()`](/fr/docs/Web/API/Event/initEvent) {{deprecated_inline}}
  - : Initialise la valeur d'un évènement créé. Si l'évènement a déjà diffusé, cette méthode n'a aucun effet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les types d'évènement disponibles : [Référence des évènements](/fr/docs/Web/Events)
- [Comparaison des cibles d'évènements](/fr/docs/Web/API/Event/Comparison_of_Event_Targets) (`target` vs `currentTarget` vs `relatedTarget` vs `originalTarget`)
- [Créer et déclencher des évènements personnalisés](/fr/docs/Web/Events/Creating_and_triggering_events)
