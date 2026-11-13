---
title: HTMLTrackElement
slug: Web/API/HTMLTrackElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLTrackElement`** représente un élément {{Glossary("HTML")}} {{HTMLElement("track")}} dans le {{Glossary("DOM")}}. Cet élément peut être utilisé comme enfant de {{HTMLElement("audio")}} ou {{HTMLElement("video")}} pour définir une piste de texte contenant des informations telles que des sous-titres ou des légendes.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTrackElement.kind")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`kind`](/fr/docs/Web/HTML/Reference/Elements/track#kind), indiquant comment la piste de texte doit être utilisée. Les valeurs possibles sont&nbsp;: `subtitles`, `captions`, `descriptions`, `chapters` ou `metadata`.
- {{DOMxRef("HTMLTrackElement.src")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`src`](/fr/docs/Web/HTML/Reference/Elements/track#src), indiquant l'adresse des données de la piste de texte.
- {{DOMxRef("HTMLTrackElement.srclang")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`srclang`](/fr/docs/Web/HTML/Reference/Elements/track#srclang), indiquant la langue des données de la piste de texte.
- {{DOMxRef("HTMLTrackElement.label")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`label`](/fr/docs/Web/HTML/Reference/Elements/track#label), indiquant un titre lisible par l'utilisateur·ice pour la piste.
- {{DOMxRef("HTMLTrackElement.default")}}
  - : Une valeur booléenne reflétant l'attribut [`default`](/fr/docs/Web/HTML/Reference/Elements/track#default), indiquant que la piste doit être activée si les préférences de l'utilisateur·ice n'indiquent pas qu'une autre piste serait plus appropriée.
- {{DOMxRef("HTMLTrackElement.readyState")}} {{ReadOnlyInline}}
  - : Retourne un `unsigned short` qui indique l'état de préparation de la piste&nbsp;:

    | Constante | Valeur | Description                                                                                                                                                                                                                            |
    | --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NONE`    | 0      | Indique que les repères du texte de piste n'ont pas été obtenus.                                                                                                                                                                       |
    | `LOADING` | 1      | Indique que la piste de texte est en cours de chargement et qu'aucune erreur fatale n'a été rencontrée jusqu'à présent. D'autres repères peuvent encore être ajoutés à la piste par l'analyseur.                                       |
    | `LOADED`  | 2      | Indique que la piste de texte a été chargée sans erreur fatale.                                                                                                                                                                        |
    | `ERROR`   | 3      | Indique que la piste de texte a été activée, mais que lorsque l'agent utilisateur a tenté de l'obtenir, cela a échoué d'une manière ou d'une autre. Certains ou tous les repères sont probablement manquants et ne seront pas obtenus. |

- {{DOMxRef("HTMLTrackElement.track")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("TextTrack")}} qui correspond aux données de la piste de texte de l'élément de piste.

## Méthodes d'instance

_Pas de méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Évènements

_Hérite des évènements de son parent, {{DOMxRef("HTMLElement")}}._

Écoutez ces évènements en utilisant {{DOMxRef("EventTarget/addEventListener", "addEventListener()")}} ou en assignant un gestionnaire d'évènement à la propriété `oneventname` de cette interface&nbsp;:

- {{DOMxRef("HTMLTrackElement.cuechange_event", "cuechange")}}
  - : Envoyé lorsque le {{DOMxRef("TextTrack")}} sous-jacent a modifié les repères actuellement présentés. Cet évènement est toujours envoyé au `TextTrack` mais est _aussi_ envoyé à `HTMLTrackElement` si un tel élément est associé à la piste.
    Vous pouvez également utiliser le gestionnaire d'évènement `oncuechange` pour établir un gestionnaire pour cet évènement.

## Notes d'utilisation

### Chargement de la ressource texte de la piste

Les données WebVTT ou TTML décrivant les repères réels pour la piste de texte ne sont pas chargées si le {{DOMxRef("TextTrack.mode", "mode")}} de la piste est initialement à l'état `disabled`. Si vous devez effectuer un traitement sur la piste après la mise en place du `<track>`, vous devez vous assurer que le `mode` de la piste est soit `hidden` (si vous ne souhaitez pas qu'elle soit présentée à l'utilisateur·ice au départ) soit `showing` (pour afficher la piste dès le début). Vous pouvez ensuite changer le mode comme vous le souhaitez par la suite.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("track")}}.
