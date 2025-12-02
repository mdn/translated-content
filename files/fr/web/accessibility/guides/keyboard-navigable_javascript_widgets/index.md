---
title: Widgets JavaScript navigables au clavier
slug: Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets
original_slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Les applications Web utilisent souvent JavaScript pour imiter des widgets de bureau tels que des menus, des vues arborescentes, des champs de texte enrichi et des panneaux à onglets. Ces widgets sont généralement composés d'éléments {{HTMLElement("div")}} et {{HTMLElement("span")}} qui, par nature, n'offrent pas la même navigation au clavier que leurs équivalents sur le bureau. Ce document décrit des techniques pour rendre les widgets JavaScript accessibles au clavier.

## Utilisation de `tabindex`

Par défaut, lorsque vous utilisez la touche <kbd>Tab</kbd> pour parcourir une page web, seuls les éléments interactifs (liens, contrôles de formulaire, etc.) reçoivent le focus. Grâce à l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes), vous pouvez rendre d'autres éléments focalisables. Avec la valeur `0`, l'élément devient focalisable au clavier et par script. Avec la valeur `-1`, l'élément est focalisable par script, mais n'entre pas dans l'ordre de tabulation du clavier.

L'ordre dans lequel les éléments reçoivent le focus au clavier correspond par défaut à l'ordre du code source. Dans des cas exceptionnels, vous pouvez redéfinir cet ordre en attribuant à `tabindex` une valeur positive.

> [!WARNING]
> Évitez d'utiliser des valeurs positives pour `tabindex`. Les éléments avec un `tabindex` positif sont placés avant les éléments interactifs par défaut de la page, ce qui oblige à définir et à maintenir des valeurs de `tabindex` pour tous les éléments focalisables dès que vous en utilisez une ou plusieurs positives.

Le tableau suivant décrit le comportement de `tabindex` dans les navigateurs modernes&nbsp;:

<table>
  <thead>
    <tr>
      <th>Attribut <code>tabindex</code></th>
      <th>Focalisable à la souris ou en JavaScript via <code>element.focus()</code></th>
      <th>Navigation par tabulation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Non présent</td>
      <td>Suit le comportement par défaut de l'élément (oui pour les contrôles de formulaire, liens, etc.).</td>
      <td>Suit le comportement par défaut de l'élément.</td>
    </tr>
    <tr>
      <td>Négatif (ex. <code>tabindex="-1"</code>)</td>
      <td>Oui</td>
      <td>Non&nbsp;: l'auteur·ice doit donner le focus à l'élément avec <a href="/fr/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> en réponse à une flèche ou une autre touche.</td>
    </tr>
    <tr>
      <td>Zero (ex. <code>tabindex="0"</code>)</td>
      <td>Oui</td>
      <td>Dans l'ordre de tabulation selon la position de l'élément dans le document (notez que les éléments interactifs comme {{HTMLElement('a')}} ont ce comportement par défaut, ils n'ont pas besoin de l'attribut).</td>
    </tr>
    <tr>
      <td>Positif (ex. <code>tabindex="33"</code>)</td>
      <td>Oui</td>
      <td>La valeur de <code>tabindex</code> détermine la position de l'élément dans l'ordre de tabulation&nbsp;: les valeurs plus petites placent l'élément plus tôt dans l'ordre que les valeurs plus grandes (par exemple, <code>tabindex="7"</code> sera avant <code>tabindex="11"</code>).</td>
    </tr>
  </tbody>
</table>

### Contrôles non natifs

Les éléments HTML natifs interactifs, comme {{HTMLElement("a")}}, {{HTMLElement("input")}} et {{HTMLElement("select")}}, sont déjà accessibles au clavier. Utiliser l'un de ces éléments est donc le moyen le plus rapide de rendre un composant accessible au clavier.

Vous pouvez aussi rendre un {{HTMLElement("div")}} ou un {{HTMLElement("span")}} accessible au clavier en ajoutant un `tabindex` de `0`. Cela est particulièrement utile pour les composants qui utilisent des éléments interactifs qui n'existent pas en HTML.

### Groupement de contrôles

Pour grouper des widgets tels que des menus, des listes d'onglets, des grilles ou des vues arborescentes, l'élément parent doit être dans l'ordre de tabulation (`tabindex="0"`), et chaque choix/onglet/case/ligne descendant·e doit être retiré·e de l'ordre de tabulation (`tabindex="-1"`). Les utilisateur·ice·s doivent pouvoir naviguer parmi les éléments descendants à l'aide des flèches du clavier. (Pour une description complète du support clavier attendu pour les widgets courants, consultez les [Bonnes pratiques d'implémentation WAI-ARIA <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/).)

L'exemple ci-dessous montre cette technique avec un menu imbriqué. Une fois que le focus clavier est sur l'élément {{HTMLElement("ul")}} conteneur, le·la développeur·euse JavaScript doit gérer le focus par programmation et répondre aux flèches du clavier. Pour des techniques de gestion du focus à l'intérieur des widgets, voir la section «&nbsp;Gestion du focus à l'intérieur des groupes&nbsp;» ci-dessous.

```html
<ul id="mb1" tabindex="0">
  <li id="mb1_menu1" tabindex="-1">
    Police
    <ul id="fontMenu" title="Police" tabindex="-1">
      <li id="sans-serif" tabindex="-1">Sans empattement</li>
      <li id="serif" tabindex="-1">Empattement</li>
      <li id="monospace" tabindex="-1">Chasse fixe</li>
      <li id="fantasy" tabindex="-1">Fantaisie</li>
    </ul>
  </li>
  <li id="mb1_menu2" tabindex="-1">
    Style
    <ul id="styleMenu" title="Style" tabindex="-1">
      <li id="italic" tabindex="-1">Italique</li>
      <li id="bold" tabindex="-1">Gras</li>
      <li id="underline" tabindex="-1">Souligné</li>
    </ul>
  </li>
  <li id="mb1_menu3" tabindex="-1">
    Justification
    <ul id="justificationMenu" title="Justification" tabindex="-1">
      <li id="left" tabindex="-1">Gauche</li>
      <li id="center" tabindex="-1">Centré</li>
      <li id="right" tabindex="-1">Droite</li>
      <li id="justify" tabindex="-1">Justifier</li>
    </ul>
  </li>
</ul>
```

#### Contrôles désactivés

Lorsqu'un contrôle personnalisé est désactivé, retirez-le de l'ordre de tabulation en définissant `tabindex="-1"`. Notez que les éléments désactivés à l'intérieur d'un widget groupé (comme les éléments de menu dans un menu) doivent rester accessibles à la navigation au clavier avec les flèches.

## Gestion du focus à l'intérieur des groupes

Lorsque l'utilisateur·ice quitte un widget avec la touche Tab puis y revient, le focus doit revenir sur l'élément précis qui avait le focus (par exemple, l'élément d'arbre ou la cellule de grille). Deux techniques permettent d'obtenir ce comportement&nbsp;:

1. Déplacement programmatique du focus (Roving `tabindex`)&nbsp;: déplacement programmatique du focus
2. `aria-activedescendant`&nbsp;: gestion d'un focus «&nbsp;virtuel&nbsp;»

### Technique 1 : Déplacement programmatique du focus (Roving `tabindex`)

Mettre le `tabindex` de l'élément sélectionné à «&nbsp;0&nbsp;» garantit que si l'utilisateur·ice quitte le widget puis y revient, l'élément sélectionné dans le groupe garde le focus. Il faut aussi remettre le `tabindex` de l'ancien élément sélectionné à «&nbsp;-1&nbsp;». Cette technique consiste à déplacer le focus par programmation lors des événements clavier et à mettre à jour le `tabindex` pour refléter l'élément actuellement sélectionné. Pour cela&nbsp;:

Liez un gestionnaire d'événement «&nbsp;keydown&nbsp;» à chaque élément du groupe, et lorsque l'utilisateur·ice utilise une flèche pour se déplacer&nbsp;:

1. appliquez le focus par programmation au nouvel élément,
2. mettez à jour le `tabindex` de l'élément sélectionné à «&nbsp;0&nbsp;»,
3. mettez à jour le `tabindex` de l'ancien élément sélectionné à «&nbsp;-1&nbsp;».

### Technique 2 : `aria-activedescendant`

Cette technique consiste à lier un seul gestionnaire d'événement au conteneur et à utiliser `aria-activedescendant` pour suivre un focus «&nbsp;virtuel&nbsp;». (Pour plus d'informations sur ARIA, regardez cette [vue d'ensemble des applications et widgets web accessibles](/fr/docs/Web/Accessibility/Guides/Accessible_web_applications_and_widgets).)

La propriété `aria-activedescendant` indique l'ID de l'élément descendant qui a actuellement le focus virtuel. Le gestionnaire d'événement sur le conteneur doit réagir aux événements clavier et souris en mettant à jour la valeur de `aria-activedescendant` et en s'assurant que l'élément courant est mis en forme de façon appropriée (par exemple, avec une bordure ou une couleur de fond).

## Bonnes pratiques générales

### Utilisation des événements de focus

- Ne déclenchez pas l'événement [`focus`](/fr/docs/Web/API/Element/focus_event) pour envoyer le focus à un élément. Les événements de focus du DOM sont uniquement informatifs&nbsp;: ils sont générés par le système après qu'un élément a reçu le focus, mais ne servent pas à définir le focus. Utilisez plutôt `element.focus()`.
- Écoutez les événements [`focus`](/fr/docs/Web/API/Element/focus_event) et [`blur`](/fr/docs/Web/API/Element/blur_event) pour suivre les changements de focus. N'imaginez pas que tous les changements de focus proviendront d'événements clavier ou souris&nbsp;: les technologies d'assistance comme les lecteurs d'écran peuvent placer le focus sur n'importe quel élément focalisable. Pour suivre le focus sur tout le document, utilisez [`document.activeElement`](/fr/docs/Web/API/Document/activeElement) pour obtenir l'élément actif, ou [`document.hasFocus`](/fr/docs/Web/API/Document/hasFocus) pour vérifier si le document courant a le focus.

### Assurez-vous que clavier et souris produisent la même expérience

Pour garantir une expérience utilisateur cohérente quel que soit le périphérique d'entrée, les gestionnaires d'événements clavier et souris doivent partager le même code lorsque c'est pertinent. Par exemple, le code qui met à jour le `tabindex` ou le style lors de la navigation avec les flèches doit aussi être utilisé par les gestionnaires de clic souris pour produire les mêmes changements.

### Assurez-vous que le clavier permet d'activer l'élément

Pour garantir que le clavier permet d'activer les éléments, tout gestionnaire lié à un événement souris doit aussi être lié à un événement clavier. Par exemple, pour que la touche <kbd>Entrée</kbd> active un élément, si vous avez un `onclick="doSomething()"`, liez aussi `doSomething()` à l'événement clavier&nbsp;: `onkeydown="event.code === 'Enter' && doSomething();"`.

### Affichez toujours le focus pour les éléments `tabindex="-1"` et ceux recevant le focus par programmation

Assurez-vous que les éléments sélectionnés affichent un anneau de focus. Cela peut se faire avec la propriété CSS {{cssxref("outline")}}, qui ne doit jamais être fixée inconditionnellement à `none`. Pour éviter d'afficher des anneaux de focus inutiles, utilisez le pseudo-élément {{cssxref(":focus-visible")}}.

### Empêchez les événements clavier utilisés d'activer les fonctions du navigateur

Si votre widget gère un événement clavier, empêchez le navigateur de le gérer aussi (par exemple, le défilement avec les flèches) en utilisant la valeur de retour de votre gestionnaire. Si votre gestionnaire retourne `false`, l'événement ne sera pas propagé au-delà de votre code.

Par exemple&nbsp;:

```html
<span tabindex="-1">…</span>
```

```js
span.onkeydown = handleKeyDown;
```

Si `handleKeyDown()` retourne `false`, l'événement sera consommé et le navigateur n'effectuera aucune action liée à la touche.

### Ne comptez pas sur un comportement cohérent de la répétition des touches pour le moment

Malheureusement, `onkeydown` peut ou non se répéter selon le navigateur et le système d'exploitation utilisés.
