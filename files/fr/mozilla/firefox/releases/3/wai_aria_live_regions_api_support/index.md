---
title: Prise en charge des régions ARIA dynamiques/API
slug: Mozilla/Firefox/Releases/3/WAI_ARIA_Live_Regions_API_Support
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

> [!WARNING]
> Ces notes s'adressent aux développeur·euse·s de lecteurs d'écran. Les développeur·euse·s doivent utiliser la [documentation pour développeur·euse·s sur les régions ARIA dynamiques](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions).

Firefox 3 contient des améliorations importantes dans la manière dont le moteur Mozilla expose les changements en direct dans un document.

Ces fonctionnalités aident les développeur·euse·s de lecteurs d'écran à améliorer la qualité et les performances de la prise en charge des régions ARIA dynamiques, tant pour les pages marquées avec le balisage ARIA que pour les pages où l'auteur·ice n'a ajouté aucun balisage supplémentaire.

Comme toujours, nous sommes ouverts aux questions et suggestions de modifications dans les [forums communautaires](https://support.mozilla.org/fr/kb/obtenir-assistance-communaute).

## Évènements déclenchés par les mutations de la page web

| Qu'est-ce qui a changé dans le document&nbsp;?                                                                   | Évènement ATK/AT-SPI                                                                                                                                           | Évènement IAccessible2                                                                                         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Objet sur le point d'être masqué ou supprimé                                                                     | children_changed::remove (déclenché sur le parent, avec des données d'évènement indiquant l'indice de l'enfant correspondant à l'objet accessible à supprimer) | EVENT_OBJECT_HIDE\* (déclenché sur l'objet accessible réel qui va disparaître)                                 |
| Objet affiché ou inséré                                                                                          | children_changed::add (déclenché sur le parent, avec des données d'évènement indiquant l'indice de l'enfant correspondant à l'objet accessible inséré)         | EVENT_OBJECT_SHOW\* (déclenché sur le nouvel objet accessible réel)                                            |
| Objet remplacé par un objet différent (cela se produit surtout si les interfaces ou le rôle d'un objet changent) | children_changed::remove suivi immédiatement de children_changed::add                                                                                          | EVENT_OBJECT_HIDE suivi immédiatement de EVENT_OBJECT_SHOW                                                     |
| Texte supprimé                                                                                                   | text_changed::delete                                                                                                                                           | IA2_EVENT_TEXT_REMOVED (utiliser IAccessibleText::get_oldText pour récupérer les offsets et le texte supprimé) |
| Texte inséré                                                                                                     | text_changed::insert                                                                                                                                           | IA2_EVENT_TEXT_INSERTED (utiliser IAccessibleText::get_newText pour récupérer les offsets et le texte inséré)  |
| Texte remplacé                                                                                                   | text_changed::delete suivi immédiatement de text_changed::insert                                                                                               | IA2_EVENT_TEXT_REMOVED suivi immédiatement de IA2_EVENT_TEXT_INSERTED                                          |

\* Nous n'utilisons pas les requêtes MSAA CREATE/DESTROY à la demande des éditeurs de lecteurs d'écran, qui évitent ces évènements, car ils provoquent des plantages sur certains systèmes importants — les évènements SHOW/HIDE sont l'équivalent de ces évènements.

## Récupération des propriétés ARIA fournies par l'auteur·ice à partir d'un évènement

Pour tout évènement de mutation sur une page, l'auteur·ice peut obtenir les attributs d'objet suivants à partir de l'objet évènement, s'ils sont définis sur un élément ancêtre (l'ancêtre le plus proche prime)&nbsp;:

| Nom de l'attribut d'objet | Valeurs possibles                                                                                                                 | Valeur par défaut                    | Balisage ARIA si nécessaire                     | Signification                                                                                                                                                                                                                                                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container-live`          | `"off" \| "polite" \| "assertive"`                                                                                                | `"off"`                              | `aria-live` sur l'élément ancêtre               | Interruption                                                                                                                                                                                                                                                                                                               |
| `container-relevant`      | `'additions'` `'removals'` `'text' \| "all"`                                                                                      | `"additions text"`                   | `aria-relevant` sur l'élément ancêtre           | Quels types de mutations sont pertinents&nbsp;? Voir la [section](#évènements_déclenchés_par_les_mutations_de_la_page_web) pour associer le type d'évènement à la valeur de cet attribut, afin de déterminer si l'auteur·ice estime que l'évènement doit être présenté à l'utilisateur·ice.                                |
| `container-busy`          | `"true" \| "false" \| "error"`                                                                                                    | `"false"`                            | `aria-busy` sur l'élément ancêtre               | Les modifications en cours ne sont pas terminées. Un évènement de changement d'état BUSY de l'API d'accessibilité est déclenché sur le conteneur marqué BUSY lorsque le conteneur n'est plus BUSY. Cela concerne particulièrement les régions atomiques. La région entière est présentée une fois qu'elle n'est plus BUSY. |
| `container-atomic`        | `"true" \| "false"`                                                                                                               | `"false"`                            | `aria-atomic` sur l'élément ancêtre             | La modification se situe-t-elle dans une région qui doit être présentée en une seule fois&nbsp;? Si oui, la relation `member-of` pointe vers la racine de la région (voir la section suivante).                                                                                                                            |
| `member-of`               | Si `container-atomic=true`, pointe vers un objet ancêtre accessible (c'est donc une relation accessible, pas un attribut d'objet) | Pas en région atomique si non fourni | `aria-atomic` sur l'élément ancêtre             | Pointe vers la racine du conteneur atomique auquel appartient cet objet. Cela représente un ancêtre de l'objet courant.                                                                                                                                                                                                    |
| `event-from-input`        | `"true" \| "false"` (décrit plus bas)                                                                                             | Le navigateur n'a pas pu le calculer | Ne requiert pas la coopération de l'auteur·ice. | L'origine de cet évènement est-elle une entrée utilisateur·ice explicite&nbsp;?                                                                                                                                                                                                                                            |

Le préfixe «&nbsp;container-&nbsp;» tire son nom du fait que cet attribut décrit à quoi sert la propriété calculée finale portant un nom similaire pour ce nœud. Cela signifie que l'AT n'a pas besoin de remonter la chaîne de caractères des parents pour obtenir cette information. À l'heure actuelle, pour les propriétés pour lesquelles l'attribut `container-*` n'a pas été défini, l'AT doit disposer d'un code permettant de se rabattre sur la valeur par défaut telle que définie dans la spécification du W3C.

## Déterminer si un évènement provient d'une entrée utilisatrice ou utilisateur

Tous les évènements fournissent désormais une information indiquant si l'évènement a été causé par une entrée utilisateur·ice ou par la page web. Cette information est récupérée différemment selon les plateformes, certaines utilisant des évènements asynchrones.

Dans IAccessible2, cette information est récupérée depuis l'attribut d'objet `"event-from-input"`, qui prend la valeur `"true"` ou `"false"`. Si cet attribut est absent, cela signifie que Mozilla n'a pas pu fournir cette information. Elle est disponible uniquement pour `EVENT_SHOW`, `EVENT_HIDE`, `IA2_EVENT_TEXT_INSERTED` et `IA2_EVENT_TEXT_REMOVED`.

Pour ATK/AT-SPI, ces informations sont obtenues en vérifiant le nom de l'évènement. Si le nom de l'évènement est suivi de «&nbsp;:system&nbsp;», cela signifie qu'il ne provient /pas/ d'une saisie de l'utilisateur·ice. La chaîne de caractères «&nbsp;:system&nbsp;» est générée pour les évènements «&nbsp;children-changed&nbsp;» et «&nbsp;text-changed&nbsp;».

En quoi est-ce utile&nbsp;? La plupart des pages AJAX ne fournissent pas de balisage des zones dynamiques, mais doivent néanmoins rester aussi conviviales que possible. Il est difficile pour un lecteur d'écran de déterminer à quel moment il doit signaler à l'utilisateur·ice les modifications survenues sur une page. Si le lecteur d'écran lit automatiquement trop d'informations, la page web devient trop envahissante à utiliser. Si, au contraire, il ne lit rien, l'utilisateur·ice risque de passer à côté d'informations importantes.

On estime que ces informations sont utiles pour l'heuristique. Souvent, les modifications apportées à une page qui résultent directement des frappes de l'utilisateur·ice doivent être lues. Elles sont synchronisées avec les actions de l'utilisateur·ice et peuvent donc généralement être lues sans le désorienter. De toute façon, dès que l'utilisateur·ice appuie sur la touche suivante, la lecture passe automatiquement à la lecture de cette touche. Le lecteur d'écran peut souhaiter prendre en compte d'autres facteurs, tels que le type de modification, son ampleur, l'endroit où elle s'est produite, etc. Il s'agit là d'un domaine d'innovation potentiel pour les lecteurs d'écran.

| Évènement le plus récent | Saisie utilisateur·ice&nbsp;? |
| ------------------------ | ----------------------------- |
| Appuis sur les touches   | Oui                           |
| Clics de souris          | Oui                           |
| Passage de la souris     | Non                           |
| Chargement de la page    | Non                           |

Tout le reste, y compris les changements de sélection, les rappels de minuterie, les rappels XMLHttpRequest, etc., est considéré comme neutre. Ces éléments ne sont comptabilisés comme des entrées utilisateur·ice que si leur occurrence initiale était due à une entrée utilisateur·ice.

## Que doivent présenter les lecteurs d'écran ?

Veuillez consulter la section consacrée aux régions dynamiques du [Guide de l'implémenteur de lecteurs d'écran WAI-ARIA](/fr/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors#régions_dynamiques).
es).
