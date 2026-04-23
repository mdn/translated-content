---
title: "ARIA : attribut aria-keyshortcuts"
short-title: aria-keyshortcuts
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut global `aria-keyshortcuts` indique les raccourcis clavier qu'un·e auteur·ice a mis en place pour activer ou donner la sélection à un élément.

## Description

Un raccourci clavier est une série d'une ou plusieurs touches qui indique au logiciel d'exécuter une action prédéfinie. Les raccourcis clavier permettent aux utilisateur·ice·s du clavier d'invoquer des commandes qui nécessiteraient autrement d'accéder à un menu ou d'utiliser le tactile ou la souris. La propriété `aria-keyshortcuts` définit les touches du clavier qui ont été mises en place pour activer ou donner la sélection à l'élément sur lequel l'attribut est défini.

L'attribut `aria-keyshortcuts` expose l'existence du raccourci aux technologies d'assistance afin que sa présence soit communiquée à ses utilisateur·ice·s. Comme tous les attributs ARIA, il n'a aucun effet sur la fonctionnalité de la page&nbsp;: le comportement clavier doit être ajouté via des gestionnaires d'événements JavaScript.

Les raccourcis clavier appliqués à des éléments désactivés doivent aussi être désactivés. Par exemple, lorsque vous désactivez un élément pour les utilisateur·ice·s de la souris, pensez à le désactiver aussi pour les utilisateur·ice·s des raccourcis clavier.

Veillez à ce que tous les raccourcis clavier soient visibles pour les utilisateur·ice·s voyants et accessibles aux technologies d'assistance. Si votre application est suffisamment complexe pour nécessiter des raccourcis clavier (aussi appelés «&nbsp;touches rapides&nbsp;»), incluez un guide de l'application, une page d'accessibilité documentant les raccourcis et autres fonctionnalités d'accessibilité, une page ou une boîte de dialogue récapitulant les raccourcis, ou tout autre moyen de faire connaître la disponibilité des raccourcis clavier. De plus, affichez le raccourci dans les menus et les infobulles.

### Règles de valeur de la propriété

La valeur de l'attribut `aria-keyshortcuts` est une liste séparée par des espaces de combinaisons de touches qui peuvent être pressées pour activer une commande ou un widget de saisie. Chaque combinaison inclut zéro, une ou plusieurs touches modificatrices suivies exactement d'une touche non modificatrice à presser en même temps, reliées par un signe plus («&nbsp;+&nbsp;»). La valeur de l'attribut n'est pas sensible à la casse.

Exemples de raccourcis clavier valides&nbsp;:

```plain
aria-keyshortcuts="A"
aria-keyshortcuts="Shift+Space"
aria-keyshortcuts="Control+Alt+."
aria-keyshortcuts="Control+Shift+&#39;"
aria-keyshortcuts="alt+shift+p control+f"
aria-keyshortcuts="Meta+C Meta+Shift+C"
```

Les touches modificatrices sont des touches qui n'ont pas d'impact lorsqu'elles sont utilisées seules. Elles s'écrivent `Alt`, `Ctrl`, `Maj`, `Meta` (touche Commande sur Mac), ou `AltGraph` (touche Option sur Mac).

Les touches non modificatrices sont des touches qui ont un impact lorsqu'elles sont utilisées seules, comme imprimer un caractère, déplacer la sélection, ou générer un événement clavier. Les non-modificateurs qui impriment un caractère incluent des caractères comme `P`, `z` et `.`.

Puisque le signe plus est utilisé pour écrire les combinaisons, il s'écrit «&nbsp;plus&nbsp;» s'il est utilisé comme non-modificateur. D'autres non-modificateurs écrits sont les caractères d'espace `Space` (Espace), `Tab`, `Enter` (Entrée), et tous les caractères qui déclenchent une action, comme `ArrowUp` (Flèche vers le haut), `PageUp` (Page précédente), et `Escape` (Échap).

Si vous souhaitez utiliser un caractère qui pourrait poser problème, comme un guillemet double dans des guillemets doubles, échappez le caractère&nbsp;: `Ctrl+'`.

Modifier keys must be listed first in each key combination. Possible key combinations include `Control+P` or `Shift+Space` and `Q`. If the full shortcut requires all three of these combinations in order, it would be written as `aria-keyshortcuts="Control+P Shift+Space Q"`. When a key combination includes more than one modifier key, the order of the modifiers doesn't matter, but they all must come first, before the non-modifier.

Ces deux déclarations d'attribut sont équivalentes&nbsp;:

```plain example-good
aria-keyshortcuts="Shift+Ctrl+V"
aria-keyshortcuts="ctrl+shift+v"
```

Notez que la casse n'a pas d'importance. Mais l'ordre de la non-modificatrice oui.

Ces deux déclarations d'attribut sont invalides car la non-modificatrice doit être en dernier&nbsp;:

```plain example-bad
aria-keyshortcuts="V+Shift+Ctrl"
aria-keyshortcuts="V+Ctrl+Shift"
```

La combinaison listée doit être les touches à presser, pas le résultat des frappes. Par exemple, sur un clavier français, pour obtenir le symbole `@`, la combinaison est `Shift+2`, pas `@` ni `Shift+@`.

### Bonnes pratiques

Pour améliorer l'accessibilité de vos sites et applications, suivez quelques bonnes pratiques pour éviter que vos «&nbsp;améliorations&nbsp;» n'aient un impact négatif sur l'expérience utilisateur·ice. Rappelez-vous&nbsp;: pas d'ARIA vaut mieux qu'une mauvaise ARIA.

#### Ne pas remplacer les raccourcis du navigateur, des technologies d'assistance ou du système d'exploitation

Lorsque vous implémentez des raccourcis clavier, veillez à ne pas créer de raccourcis déjà utilisés par le navigateur, la technologie d'assistance ou le système d'exploitation, à moins qu'ils ne soient utilisés pour la même chose. Par exemple, `"Control+P"` est utilisé par la plupart des agents utilisateurs pour lancer la fonctionnalité d'impression. En règle générale, une application web ne doit pas créer de raccourci «&nbsp;Contrôle+P&nbsp;», car elle usurpe la fonctionnalité du navigateur. Il existe toutefois des exceptions. Dans les applications web où l'impression est courante, comme les applications de courrier électronique ou les éditeurs de documents, il est normal d'utiliser la fonctionnalité d'impression `"Control+P"` du navigateur pour un flux d'impression spécifique à l'application.

Sauf si vous créez une version HTML d'une application de productivité, il vaut mieux éviter d'implémenter des raccourcis clavier. Remplacer un raccourci du système ou du navigateur peut être gênant pour les utilisateur·ice·s non concerné·e·s par les technologies d'assistance, mais si vous remplacez une fonctionnalité clavier d'un lecteur d'écran, vous pouvez bloquer complètement l'accès pour l'utilisateur·ice de la technologie d'assistance. Si vous devez créer des raccourcis clavier, évitez les raccourcis à une seule lettre et les raccourcis courants des lecteurs d'écran.

#### Prendre en compte les différences de langue et de clavier

Tenez compte de la diversité des claviers et des préférences de langue. Les touches modificatrices sont souvent utilisées pour créer des symboles de ponctuation ou des chiffres spécifiques à la langue. Par exemple, les chiffres, lorsque la langue du clavier est réglée sur français (France), nécessitent la touche Maj.

#### Ne pas utiliser HTML à la place

L'attribut `aria-keyshortcuts` est très similaire à l'attribut HTML [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes/accesskey), qui génère un raccourci clavier pour l'élément courant. Lorsqu'un `accesskey` est défini, le navigateur définit les modificateurs et gère le raccourci sans script. Chaque combinaison navigateur/système d'exploitation a ses propres touches modificatrices pour la non-modificatrice définie dans l'attribut `accesskey`. Ce qui fonctionne pour une combinaison peut ne pas fonctionner pour une autre. Avec `aria-keyshortcuts`, les touches modificatrices sont incluses dans la valeur de l'attribut et la fonctionnalité doit être scriptée.

```html
<p>
  Appuyez sur le
  <strong><u>S</u></strong
  >oulagement du stress pour vous détendre&nbsp;!
</p>
<button accesskey="s">Soulagement du stress</button>
```

Dans cet exemple, nous avons veillé à ce que la présence du raccourci soit connue des utilisateur·ice·s voyants en mettant en évidence le caractère non-modificateur.

Bien que l'objectif de l'attribut `accesskey` corresponde à celui de `aria-keyshortcuts` et le fasse nativement, `accesskey` pose de nombreux problèmes. Il est donc généralement déconseillé d'utiliser des touches d'accès pour la plupart des sites et applications web.

En plus du faible support des navigateurs, les mêmes préoccupations existent pour `accesskey` que pour `aria-keyshortcuts`&nbsp;:

- Une valeur d'accesskey peut entrer en conflit avec un raccourci système, navigateur ou technologie d'assistance.
- Certaines valeurs de touches peuvent ne pas être présentes sur certains claviers, surtout avec l'internationalisation. Adapter à des langues spécifiques peut poser problème.
- Les valeurs qui reposent sur des chiffres peuvent être déroutantes pour les personnes ayant des difficultés cognitives, si le chiffre n'a pas de lien logique avec la fonctionnalité déclenchée.
- Informer l'utilisateur·ice que des raccourcis sont présents, pour qu'il·elle soit conscient·e de la fonctionnalité. Si le système n'a pas de moyen de notifier l'utilisateur·ice, il·elle pourrait activer un raccourci par accident.

## Valeurs

- `<string>`
  - : Liste séparée par des espaces des combinaisons de touches qui, lorsqu'elles sont pressées, exécutent l'action.

## Exemple

Dans cet exemple, l'attribut `aria-keyshortcuts` sur l'élément est défini sur «&nbsp;Alt+Shift+A&nbsp;» (pour «&nbsp;Alt+Maj+A&nbsp;»).

```html
<a href="#content" aria-keyshortcuts="Alt+Shift+A">Aller au contenu</a>
```

## Interfaces associées

- {{domxref("Element.ariaKeyShortcuts")}}
  - : La propriété {{domxref("Element.ariaKeyShortcuts","ariaKeyShortcuts")}}, qui fait partie de l'interface {{domxref("Element")}}, reflète la valeur de l'attribut `aria-keyshortcuts`.
- {{domxref("ElementInternals.ariaKeyShortcuts")}}
  - : La propriété {{domxref("ElementInternals.ariaKeyShortcuts","ariaKeyShortcuts")}}, qui fait partie de l'interface {{domxref("ElementInternals")}}, reflète la valeur de l'attribut `aria-keyshortcuts`.

## Rôles associés

Utilisé dans **TOUS** les rôles.

## Spécifications

{{Specifications}}

## Voir aussi

- [Raccourcis clavier <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardshortcuts) dans les pratiques d'auteur·ice ARIA
- L'attribut HTML [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes/accesskey)
- [Problèmes avec `accesskey` <sup>(angl.)</sup>](https://webaim.org/techniques/keyboard/accesskey#spec)
