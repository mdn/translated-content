---
title: Event
slug: Web/API/Event
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

L'interface **`Event`** représente un évènement qui se produit sur un [`EventTarget`](/fr/docs/Web/API/EventTarget).

Un évènement peut être déclenché par une action humaine (par exemple, un clic de souris ou une pression sur une touche du clavier) ou généré par des API pour représenter la progression d'une tâche asynchrone. Il peut aussi être déclenché par un programme, par exemple en appelant la méthode [`HTMLElement.click()`](/fr/docs/Web/API/HTMLElement/click) sur un élément, ou en définissant l'évènement puis en l'envoyant à une cible à l'aide de [`EventTarget.dispatchEvent()`](/fr/docs/Web/API/EventTarget/dispatchEvent).

Il existe de nombreux types d'évènements, dont certains utilisent d'autres interfaces dérivées de l'interface principale `Event`. L'interface `Event` contient les propriétés et méthodes communes à tous les évènements.

De nombreux éléments du DOM peuvent être configurés pour accepter (ou «&nbsp;écouter&nbsp;») ces évènements et exécuter du code en réponse afin de les traiter («&nbsp;gérer&nbsp;»). Les gestionnaires d'évènements sont généralement attachés à divers [éléments HTML](/fr/docs/Web/HTML/Reference/Elements) (tels que `<button>`, `<div>`, `<span>`, etc.) à l'aide de [`EventTarget.addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener), ce qui remplace généralement l'utilisation des anciens [attributs de gestion d'évènement](/fr/docs/Web/HTML/Reference/Global_attributes) en HTML. De plus, lorsqu'ils sont ajoutés correctement, ces gestionnaires peuvent aussi être détachés si besoin grâce à [`removeEventListener()`](/fr/docs/Web/API/EventTarget/removeEventListener).

> [!NOTE]
> Il est tout à fait possible d'attacher plusieurs gestionnaires d'évènement à un seul élément, y compris pour la gestion d'un évènement particulier. Ainsi, des modules de code indépendant peuvent attacher leurs gestionnaires de façon indépendante (par exemple, sur une page web, un module de publicité et un autre module d'analyse pourront tout à fait attacher des gestionnaires pour étudier la consultation d'une vidéo).

Lorsqu'il y a de nombreux éléments imbriqués, chacun ayant ses propres gestionnaires d'évènement, le traitement des évènements peut se révéler compliqué, notamment lorsqu'un élément parent reçoit le même évènement que ses éléments enfants (par exemple pour des évènements qui se déclenchent sur la surface visuelle de l'élément enfant). Dans ce cas, l'ordre du traitement de ces évènements dépend des paramètres [de bouillonnement (_bubbling_) et de capture](/fr/docs/Learn_web_development/Core/Scripting/Events#le_bouillonnement_et_la_capture) définis sur chaque gestionnaire ainsi déclenché.

## Interfaces basées sur Event

Voici une liste des interfaces basées sur `Event` avec un lien vers leur documentation dans la référence MDN.

On notera que l'ensemble des interfaces d'évènements ont un nom qui termine par _Event_ («&nbsp;évènement&nbsp;» en anglais).

- {{domxref("AnimationEvent")}}
- {{domxref("AudioProcessingEvent")}} {{Deprecated_Inline}}
- {{domxref("BeforeUnloadEvent")}}
- {{domxref("BlobEvent")}}
- {{domxref("ClipboardEvent")}}
- {{domxref("CloseEvent")}}
- {{domxref("CompositionEvent")}}
- {{domxref("CustomEvent")}}
- {{domxref("DeviceMotionEvent")}}
- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DragEvent")}}
- {{domxref("ErrorEvent")}}
- {{domxref("FetchEvent")}}
- {{domxref("FocusEvent")}}
- {{domxref("FontFaceSetLoadEvent")}}
- {{domxref("FormDataEvent")}}
- {{domxref("GamepadEvent")}}
- {{domxref("HashChangeEvent")}}
- {{domxref("HIDInputReportEvent")}}
- {{domxref("IDBVersionChangeEvent")}}
- {{domxref("InputEvent")}}
- {{domxref("KeyboardEvent")}}
- {{domxref("MediaStreamEvent")}} {{Deprecated_Inline}}
- {{domxref("MessageEvent")}}
- {{domxref("MouseEvent")}}
- {{domxref("MutationEvent")}} {{Deprecated_Inline}}
- {{domxref("OfflineAudioCompletionEvent")}}
- {{domxref("PageTransitionEvent")}}
- {{domxref("PaymentRequestUpdateEvent")}}
- {{domxref("PointerEvent")}}
- {{domxref("PopStateEvent")}}
- {{domxref("ProgressEvent")}}
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCPeerConnectionIceEvent")}}
- {{domxref("StorageEvent")}}
- {{domxref("SubmitEvent")}}
- {{domxref("TimeEvent")}}
- {{domxref("TouchEvent")}}
- {{domxref("TrackEvent")}}
- {{domxref("TransitionEvent")}}
- {{domxref("UIEvent")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WheelEvent")}}

## Constructeur

- {{domxref("Event.Event", "Event()")}}
  - : Crée un objet `Event` et le retourne à l'appelant.

## Propriétés d'instance

- {{domxref("Event.bubbles")}} {{ReadOnlyInline}}
  - : Un booléen indiquant si l'évènement se propage dans le DOM.
- {{domxref("Event.cancelable")}} {{ReadOnlyInline}}
  - : Un booléen indiquant si l'évènement est annulable.
- {{domxref("Event.composed")}} {{ReadOnlyInline}}
  - : Un booléen indiquant si l'évènement peut se propager à travers la frontière entre le DOM d'ombre (<i lang="en">shadow DOM</i>) et le DOM classique.
- {{domxref("Event.currentTarget")}} {{ReadOnlyInline}}
  - : Une référence vers la cible actuellement enregistrée pour l'évènement. Il s'agit de l'objet auquel l'évènement est actuellement destiné. Cette valeur peut être modifiée lors d'un _retargeting_.
- {{domxref("Event.defaultPrevented")}} {{ReadOnlyInline}}
  - : Indique si l'appel à {{domxref("event.preventDefault()")}} a annulé l'évènement.
- {{domxref("Event.eventPhase")}} {{ReadOnlyInline}}
  - : Indique quelle phase du flux d'évènement est en cours de traitement. Il s'agit de l'un des nombres suivants&nbsp;: `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE`.
- {{domxref("Event.isTrusted")}} {{ReadOnlyInline}}
  - : Indique si l'évènement a été initié par le navigateur (après un clic utilisateur, par exemple) ou par un script (via une méthode de création d'évènement, par exemple).
- {{domxref("Event.srcElement")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Un alias pour la propriété {{domxref("Event.target")}}. Utilisez plutôt {{domxref("Event.target")}}.
- {{domxref("Event.target")}} {{ReadOnlyInline}}
  - : Une référence vers l'objet auquel l'évènement a été initialement envoyé.
- {{domxref("Event.timeStamp")}} {{ReadOnlyInline}}
  - : L'instant auquel l'évènement a été créé (en millisecondes). Selon la spécification, cette valeur correspond au temps écoulé depuis l'époque Unix, mais en pratique, la définition varie selon les navigateurs. De plus, il est prévu de remplacer ce type par {{domxref("DOMHighResTimeStamp")}}.
- {{domxref("Event.type")}} {{ReadOnlyInline}}
  - : Le nom identifiant le type de l'évènement.

### Propriétés héritées et non standard

- {{domxref("Event.cancelBubble")}} {{deprecated_inline}}
  - : Un alias historique de {{domxref("Event.stopPropagation()")}} qu'il convient d'utiliser à la place. Passer sa valeur à `true` avant de quitter un gestionnaire d'évènement empêche la propagation de l'évènement.
- {{domxref("Event.explicitOriginalTarget")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : La cible originale explicite de l'évènement.
- {{domxref("Event.originalTarget")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : La cible originale de l'évènement, avant tout retargeting.
- {{domxref("Event.returnValue")}} {{deprecated_inline}}
  - : Propriété historique encore supportée pour garantir la compatibilité des sites existants. Utilisez plutôt {{domxref("Event.preventDefault()")}} et {{domxref("Event.defaultPrevented")}}.
- {{domxref("Event.composed", "Event.scoped")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Un booléen indiquant si l'évènement va se propager à travers la racine d'ombre (<i lang="en">shadow root</i>) vers le DOM standard. Utilisez plutôt {{domxref("Event.composed", "composed")}}.

## Méthodes d'instance

- {{domxref("Event.composedPath()")}}
  - : Retourne le chemin de l'évènement (un tableau d'objets sur lesquels les écouteurs seront invoqués). Cela n'inclut pas les nœuds dans les arbres d'ombre (<i lang="en">shadow trees</i>) si la racine d'ombre (<i lang="en">shadow root</i>) a été créée avec son {{domxref("ShadowRoot.mode")}} fermé.
- {{domxref("Event.preventDefault()")}}
  - : Annule l'évènement (s'il est annulable).
- {{domxref("Event.stopImmediatePropagation()")}}
  - : Pour cet évènement particulier, empêche tous les autres écouteurs d'être appelés. Cela inclut les écouteurs attachés au même élément ainsi que ceux attachés à des éléments qui seront parcourus plus tard (par exemple lors de la phase de capture).
- {{domxref("Event.stopPropagation()")}}
  - : Stoppe la propagation de l'évènement plus loin dans le DOM.

### Méthodes dépréciées

- {{domxref("Event.initEvent()")}} {{deprecated_inline}}
  - : Initialise la valeur d'un objet `Event` créé. Si l'évènement a déjà été déclenché, cette méthode ne fait rien. Utilisez plutôt le constructeur ({{domxref("Event.Event", "Event()")}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Référence des évènements](/fr/docs/Web/API/Document_Object_Model/Events#event_index)
- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- [Apprendre&nbsp;: Propagation des évènements](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Créer et déclencher des évènements personnalisés](/fr/docs/Web/API/Document_Object_Model/Events#créer_et_déclencher_des_événements)
