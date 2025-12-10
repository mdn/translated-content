---
title: "ARIA : rôle scrollbar"
short-title: scrollbar
slug: Web/Accessibility/ARIA/Reference/Roles/scrollbar_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `scrollbar` est un objet graphique qui contrôle le défilement du contenu à l'intérieur d'une zone d'affichage.

## Description

Une `scrollbar` est une plage (<i lang="en">range</i>) qui contrôle quelle partie du contenu d'une zone d'affichage est actuellement visible dans le cadre de cette zone&nbsp;; que la zone d'affichage soit la fenêtre entière du navigateur, une `iframe`, ou le [contexte de formatage en bloc (<i lang="en">block formatting context</i>)](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context).

### Qu'est‑ce qu'une barre de défilement

De nombreuses applications fournissent des barres de défilement natives lorsque la zone de contenu est plus grande que la fenêtre de l'application. Les barres de défilement apparaissent généralement à droite ou en bas de la zone d'affichage. Les barres natives prennent la forme d'une piste rectangulaire mince de la longueur de la zone d'affichage qu'elles contrôlent, avec un élément d'interface appelé pouce ou curseur que l'on peut faire glisser le long de la piste pour déplacer le contenu associé dans la zone d'affichage. Certaines barres de défilement présentent des flèches à chaque extrémité permettant de faire défiler la zone d'affichage d'une petite distance lorsqu'on les active.

Prenez ce document comme exemple&nbsp;: si la zone d'affichage est la fenêtre entière du navigateur et que le contenu est plus haut que la zone d'affichage, dans la plupart des navigateurs la barre de défilement située sur le bord droit de la fenêtre représente la longueur totale de la page et le pouce représente la portion du contenu de la page qui est actuellement visible.

Les barres de défilement peuvent également apparaître pour des zones d'affichage qui sont des sous-sections de la fenêtre entière du navigateur. Toujours avec cet exemple, si ce contenu est intégré dans un {{HTMLElement('iframe')}} ou un {{HTMLElement('object')}}, la barre de défilement verticale native aura la hauteur du cadre. Une barre de défilement est généralement de la longueur de la zone d'affichage, mais ce n'est pas une obligation.

Si vous ne voyez pas de barre de défilement actuellement, c'est peut‑être parce que votre navigateur n'affiche la barre que pendant le défilement ou seulement lorsque le contenu d'un élément est trop grand pour tenir dans son contexte de formatage en bloc. Selon le navigateur et le système d'exploitation, il est possible de rendre les barres de défilement visibles même lorsque le contenu tient dans la zone d'affichage.

### Rôle ARIA `scrollbar`

Il est toujours préférable d'utiliser les barres de défilement natives. Vous pouvez utiliser la propriété CSS {{CSSXref('overflow')}} pour garantir l'apparition des barres de défilement natives. Une [spécification CSS pour les barres de défilement <sup>(angl.)</sup>](https://drafts.csswg.org/css-scrollbars/) est en cours d'élaboration. Certains navigateurs autorisent [le style des barres via des pseudo-éléments préfixés](/fr/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar).

Comme le style des barres natives a historiquement été limité, vous pouvez rencontrer des barres de défilement implémentées en JavaScript que vous devez prendre en charge et rendre totalement accessibles. Pour cela, vous pouvez utiliser le rôle `scrollbar` afin d'indiquer aux technologies d'assistance qu'un contrôle d'interface utilisateur est une barre de défilement interactive.

Un élément avec le rôle `scrollbar` est un objet graphique qui contrôle le défilement du contenu dans une zone d'affichage&nbsp;; c'est le rôle ARIA qui indique qu'un élément est une barre de défilement. L'élément HTML le plus proche est le type `range` de {{HTMLElement('input')}}, c'est‑à‑dire [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range).

L'élément `scrollbar` a deux attributs requis&nbsp;: [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) et [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow). L'attribut `aria-controls` référence l'[`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) de la zone défilable qu'il contrôle. La propriété `aria-valuenow` définit la valeur courante de la barre de défilement.

Alors que `aria-valuenow` est toujours requis, les propriétés [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) et [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) n'ont besoin d'être définies pour le rôle `scrollbar` que lorsque la valeur minimale du `scrollbar` n'est pas 0 ou que la valeur maximale n'est pas 100. La valeur de `aria-valuenow` doit toujours être comprise entre les valeurs minimale et maximale incluses, ou entre `0` et `100` inclus si les valeurs minimale et maximale par défaut sont `0` et `100` respectivement. `aria-valuenow` indique la proximité de la zone d'affichage par rapport au bas du document. Pensez‑y comme à une barre de progression, où le début du document est la valeur minimale et la fin du document la valeur maximale.

Une `scrollbar` représente la valeur courante et l'éventail des valeurs possibles via la taille de la barre et la position du pouce par rapport à la plage visible de l'orientation (horizontale ou verticale) qu'elle contrôle. Autrement dit, la longueur de la `scrollbar` (hauteur ou largeur) représente l'ensemble du contenu d'une zone d'affichage. La valeur `aria-valuemin` représente le début du contenu et de la barre, la valeur `aria-valuemax` représente la fin du contenu et de la barre. `aria-valuenow` représente le contenu actuellement visible dans la zone d'affichage et la position courante, ou valeur, du pouce mobile. La valeur `aria-valuenow` sera généralement exposée comme un pourcentage entre `aria-valuemin` et `aria-valuemax` calculé par les technologies d'assistance.

> [!NOTE]
> Les technologies d'assistance rendent généralement la valeur de `aria-valuenow` comme un pourcentage de la plage entre `aria-valuemin` et `aria-valuemax`, sauf si [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) est défini. Il est recommandé de définir `aria-valuemin`, `aria-valuemax` et `aria-valuenow` de manière appropriée pour ce calcul.

Comme une barre de défilement native, les utilisateur·rice·s interagissent avec les éléments `scrollbar` directement ou indirectement à l'aide de la souris, du pavé tactile, du clavier et de la commande vocale. Les implémentations du rôle `scrollbar` doivent aussi tenir compte de tous ces modes d'interaction.

Avec la souris, l'utilisateur·ice doit pouvoir activer la `scrollbar` en cliquant sur les flèches de défilement éventuellement présentes aux extrémités, en cliquant sur une zone vide de la piste, ainsi qu'en cliquant et en faisant glisser le pouce.

Le défilement au clavier doit également être pris en charge. Lorsque le focus se trouve dans la zone contrôlée par une `scrollbar`, les touches <kbd>Flèche vers le haut</kbd> et <kbd>Flèche vers le bas</kbd> (ou <kbd>Flèche vers la gauche</kbd> et <kbd>Flèche vers la droite</kbd> pour une barre horizontale) doivent déplacer le pouce proportionnellement. De plus, les touches <kbd>Page précédente</kbd>, <kbd>Page suivante</kbd>, <kbd>Espace</kbd> et <kbd>Maj + Espace</kbd> doivent déplacer le contenu et le pouce de la hauteur (ou largeur) de la zone d'affichage pour chaque pression jusqu'à atteindre le bas ou le haut (ou la gauche ou la droite) du contenu.

Le JavaScript doit traduire l'action de la `scrollbar` en commandes de défilement et fournir un retour à l'utilisateur·ice&nbsp;:

1. mettant visuellement à jour l'élément `scrollbar`,
2. faisant défiler le contenu de la zone d'affichage, et
3. mettant à jour la propriété [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow).

L'orientation par défaut du rôle `scrollbar` est verticale. Inclure [`aria-orientation="vertical"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) est donc optionnel. L'orientation représente l'orientation de la barre et l'effet de défilement sur la zone contrôlée par la barre. Si le défilement est de gauche à droite ou de droite à gauche et non de haut en bas, ajoutez `aria-orientation="horizontal"` sur l'élément portant le rôle `scrollbar`.

> [!NOTE]
> Un nom accessible est **requis**. Si le rôle `scrollbar` est appliqué à un élément HTML {{HTMLElement('input')}} (ou à un élément `<meter>` ou `<progress>`), le nom accessible peut provenir du {{HTMLElement('label')}} associé. Sinon, utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) si une étiquette visible est présente ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) si aucune étiquette visible n'est disponible.

### Tous les descendants sont des présentations

Certains composants d'interface utilisateur, lorsqu'ils sont représentés dans une API d'accessibilité de plate-forme, ne peuvent contenir que du texte. Les API d'accessibilité n'ont pas de moyen de représenter des éléments sémantiques contenus dans une `scrollbar`. Pour gérer cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les éléments descendants d'une `scrollbar`, car ce rôle ne prend pas en charge des enfants sémantiques.

Par exemple, considérez l'élément `scrollbar` ci‑dessous qui contient un titre&nbsp;:

```html
<div role="scrollbar"><h3>Titre de ma barre de défilement</h3></div>
```

Étant donné que les descendants d'une `scrollbar` sont présentiels, le code suivant est équivalent&nbsp;:

```html
<div role="scrollbar">
  <h3 role="presentation">Titre de ma barre de défilement</h3>
</div>
```

Du point de vue de la personne utilisant une technologie d'assistance, le titre n'existe pas puisque les extraits précédents sont équivalents à ce qui suit dans l'[arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree)&nbsp;:

```html
<div role="scrollbar">Titre de ma barre de défilement</div>
```

### Propriétés, états et attributs WAI-ARIA associés

- [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) (Requis)
  - : Identifie la zone d'affichage, via son `id`, dont le contenu est contrôlé par la barre de défilement.
- [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (Requis)
  - : Doit être défini sur une valeur décimale comprise entre `0` (ou `aria-valuemin` si présent) et `aria-valuemax`, indiquant la valeur courante de la barre.
- [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Les technologies d'assistance présentent souvent la valeur de `aria-valuenow` sous forme de pourcentage. Si cela n'est pas approprié, utilisez cette propriété pour rendre la valeur plus compréhensible.
- [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Doit être définie sur une valeur décimale représentant la valeur minimale, et inférieure à `aria-valuemax`. Si elle est absente, la valeur par défaut est `0`.
- [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Doit être définie sur une valeur décimale représentant la valeur maximale, et supérieure à `aria-valuemin`. Si elle est absente, la valeur par défaut est `100`.
- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Lorsque vous n'utilisez pas un contrôle natif et ne pouvez donc pas associer la barre à un {{HTMLElement('label')}}, si du texte visible peut fournir le nom accessible requis, référez-vous à l'`id` d'un élément contenant ce texte. Sinon, utilisez `aria-label`.
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Si aucun {{HTMLElement('label')}} ne peut être utilisé et qu'aucun texte visible ne peut être référencé par `aria-labelledby`, fournit la chaîne qui étiquette l'élément `scrollbar` comme nom accessible.
- [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Par défaut, l'orientation est `vertical`. La propriété peut être définie sur `horizontal`, `undefined` (la valeur par défaut pour tous les rôles sauf indication contraire) ou `vertical`.

### Interactions au clavier

- <kbd>Flèche vers le haut</kbd>
  - : Le contenu de la zone d'affichage se déplace d'une ligne vers le haut, le pouce se déplace vers le haut de la barre proportionnellement, jusqu'à atteindre le haut du contenu et de la barre.
- <kbd>Flèche vers le bas</kbd>
  - : Le contenu de la zone d'affichage se déplace d'une ligne vers le bas, le pouce se déplace vers le bas de la barre proportionnellement, jusqu'à atteindre le bas du contenu et de la barre.
- <kbd>Flèche vers la gauche</kbd>
  - : Pour le défilement horizontal, le contenu se déplace d'une largeur de caractère vers la gauche, le pouce se déplace vers la gauche de la barre proportionnellement, jusqu'à ce que le bord gauche du contenu atteigne le bord gauche de la zone d'affichage et que le pouce soit aligné à gauche.
- <kbd>Flèche vers la droite</kbd>
  - : Pour le défilement horizontal, le contenu se déplace d'une largeur de caractère vers la droite, le pouce se déplace vers la droite de la barre proportionnellement, jusqu'à ce que le bord droit du contenu atteigne le bord droit de la zone d'affichage et que le pouce soit aligné à droite.
- <kbd>Page précédente</kbd> et <kbd>Maj + Espace</kbd>
  - : Le contenu se déplace vers le haut d'une hauteur de zone d'affichage, le pouce se déplace vers le haut de la barre proportionnellement, jusqu'à atteindre le haut du contenu et de la barre.
- <kbd>Page suivante</kbd> et <kbd>Espace</kbd>
  - : Le contenu se déplace vers le bas d'une hauteur de zone d'affichage, le pouce se déplace vers le bas de la barre proportionnellement, jusqu'à atteindre le bas du contenu et de la barre.

## Exemples

L'exemple suivant montre un mot (une suite de caractères) susceptible d'être plus long que le conteneur parent.

```html
<div id="pi-label">Pi</div>
<div id="pi">
  3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
</div>
<div
  role="scrollbar"
  aria-labelledby="pi-label"
  aria-controls="pi"
  aria-orientation="horizontal"
  aria-valuenow="0"
  aria-valuemin="0"
  aria-valuemax="100">
  <div id="thumb"></div>
</div>
```

Lorsque vous utilisez les rôles ARIA au lieu des fonctionnalités d'interface natives, il faut utiliser du CSS pour styliser la barre et le pouce, et du JavaScript pour gérer tous les événements clavier et pointeur.

Le CSS pourrait aussi être utilisé pour s'assurer que la valeur de PI déborde et affiche une barre native&nbsp;:

```html
<h3 id="PI">Pi</h3>
<p class="pi" tabindex="0" aria-labelledby="PI">
  3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
</p>
```

```css
.pi {
  overflow: auto;
  max-width: 100%;
}
```

Le CSS ci‑dessus force l'apparition d'une barre de défilement native lorsque l'utilisateur·ice interagit avec la zone du paragraphe si le mot le plus long du paragraphe dépasse la boîte contenant le paragraphe. L'attribut `tabindex` a été ajouté pour permettre aux personnes utilisant le clavier de naviguer vers le contenu et de le faire défiler.

## Spécifications

{{Specifications}}

## Voir aussi

- [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range)
- L'élément HTML {{HTMLElement('progress')}}
- L'élément HTML {{HTMLElement('meter')}}
- Autres widgets de type range&nbsp;:
  - [ARIA&nbsp;: rôle `meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [ARIA&nbsp;: rôle `slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [ARIA&nbsp;: rôle `separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (si sélectionnable)
  - [ARIA&nbsp;: rôle `progressbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [ARIA&nbsp;: rôle `spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [Événement `scroll` du Document](/fr/docs/Web/API/Document/scroll_event)
