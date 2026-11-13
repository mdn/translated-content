---
title: Composants JavaScript navigables au clavier
slug: Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Les applications Web utilisent souvent JavaScript pour imiter des composants de bureau tels que des menus, des vues arborescentes, des champs de texte enrichi et des panneaux à onglets. Ces composants sont généralement composés d'éléments {{HTMLElement("div")}} et {{HTMLElement("span")}} qui, par nature, n'offrent pas la même navigation au clavier que leurs équivalents sur le bureau. Ce document décrit des techniques pour rendre les composants JavaScript accessibles au clavier.

## Utilisation de `tabindex`

Par défaut, lorsque vous utilisez la touche <kbd>Tab</kbd> pour parcourir une page web, seuls les éléments interactifs (liens, contrôles de formulaire, etc.) reçoivent la sélection. Grâce à l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes), vous pouvez rendre d'autres éléments sélectionnables. Avec la valeur `0`, l'élément devient sélectionnable au clavier et par script. Avec la valeur `-1`, l'élément est sélectionnable par script, mais n'entre pas dans l'ordre de tabulation du clavier.

L'ordre dans lequel les éléments reçoivent la sélection au clavier correspond par défaut à l'ordre du code source. Dans des cas exceptionnels, vous pouvez redéfinir cet ordre en attribuant à `tabindex` une valeur positive.

> [!WARNING]
> Évitez d'utiliser des valeurs positives pour `tabindex`. Les éléments avec un `tabindex` positif sont placés avant les éléments interactifs par défaut de la page, ce qui oblige à définir et à maintenir des valeurs de `tabindex` pour tous les éléments sélectionnables dès que vous en utilisez une ou plusieurs positives.

Le tableau suivant décrit le comportement de `tabindex` dans les navigateurs modernes&nbsp;:

<table>
  <thead>
    <tr>
      <th>Attribut <code>tabindex</code></th>
      <th>sélectionnable à la souris ou en JavaScript avec <code>element.focus()</code></th>
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
      <td>Non&nbsp;: l'auteur·ice doit donner la sélection à l'élément avec <a href="/fr/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> en réponse à une flèche ou une autre touche.</td>
    </tr>
    <tr>
      <td>Zero (ex. <code>tabindex="0"</code>)</td>
      <td>Oui</td>
      <td>Dans l'ordre de tabulation selon la position de l'élément dans le document (notez que les éléments interactifs comme {{HTMLElement('a')}} ont ce comportement par défaut, ils n'ont pas besoin de l'attribut).</td>
    </tr>
    <tr>
      <td>Positif (ex. <code>tabindex="33"</code>)</td>
      <td>Oui</td>
      <td>La valeur de <code>tabindex</code> détermine la position de l'élément dans l'ordre de tabulation&nbsp;: les valeurs plus petites placent l'élément plus tôt dans l'ordre que les valeurs plus grandes (par exemple, <code>tabindex="7"</code> est avant <code>tabindex="11"</code>).</td>
    </tr>
  </tbody>
</table>

### Contrôles non natifs

Les éléments HTML natifs interactifs, comme {{HTMLElement("a")}}, {{HTMLElement("input")}} et {{HTMLElement("select")}}, sont déjà accessibles au clavier. Utiliser l'un de ces éléments est donc le moyen le plus rapide de rendre un composant accessible au clavier.

Vous pouvez aussi rendre un {{HTMLElement("div")}} ou un {{HTMLElement("span")}} accessible au clavier en ajoutant un `tabindex` de `0`. Cela est particulièrement utile pour les composants qui utilisent des éléments interactifs qui n'existent pas en HTML.

### Groupement de contrôles

Pour grouper des composants tels que des menus, des listes d'onglets, des grilles ou des vues arborescentes, l'élément parent doit être dans l'ordre de tabulation (`tabindex="0"`), et chaque choix/onglet/case/ligne descendant·e doit être retiré·e de l'ordre de tabulation (`tabindex="-1"`). Les utilisateur·ice·s doivent pouvoir naviguer parmi les éléments descendants à l'aide des flèches du clavier. (Pour une description complète du support clavier attendu pour les composants courants, consultez les [Bonnes pratiques d'implémentation WAI-ARIA <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/).)

L'exemple ci-dessous montre cette technique avec un menu imbriqué. Une fois que la sélection clavier est sur l'élément {{HTMLElement("ul")}} conteneur, le·la développeur·euse JavaScript doit gérer la sélection par programmation et répondre aux flèches du clavier. Pour des techniques de gestion de la sélection à l'intérieur des composants, voir la section «&nbsp;Gestion de la sélection à l'intérieur des groupes&nbsp;» ci-dessous.

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

Lorsqu'un contrôle personnalisé est désactivé, retirez-le de l'ordre de tabulation en définissant `tabindex="-1"`. Notez que les éléments désactivés à l'intérieur d'un composant groupé (comme les éléments de menu dans un menu) doivent rester accessibles à la navigation au clavier avec les flèches.

## Gestion de la sélection à l'intérieur des groupes

Lorsque l'utilisateur·ice quitte un composant avec la touche Tab puis y revient, la sélection doit revenir sur l'élément précis qui a la sélection (par exemple, l'élément d'arbre ou la cellule de grille). Deux techniques permettent d'obtenir ce comportement&nbsp;:

1. Déplacement programmatique de la sélection (`tabindex` tournant)&nbsp;: déplacement programmatique de la sélection
2. `aria-activedescendant`&nbsp;: gestion d'une sélection «&nbsp;virtuelle&nbsp;»

### Technique 1 : Déplacement programmatique de la sélection (`tabindex` tournant)

Mettre le `tabindex` de l'élément sélectionné à «&nbsp;0&nbsp;» garantit que si l'utilisateur·ice quitte le composant puis y revient, l'élément sélectionné dans le groupe garde la sélection. Il faut aussi remettre le `tabindex` de l'ancien élément sélectionné à «&nbsp;-1&nbsp;». Cette technique consiste à déplacer la sélection par programmation lors des évènements clavier et à mettre à jour le `tabindex` pour refléter l'élément actuellement sélectionné. Pour cela&nbsp;:

Liez un gestionnaire d'évènement «&nbsp;keydown&nbsp;» à chaque élément du groupe, et lorsque l'utilisateur·ice utilise une flèche pour se déplacer&nbsp;:

1. appliquez la sélection par programmation au nouvel élément,
2. mettez à jour le `tabindex` de l'élément sélectionné à «&nbsp;0&nbsp;»,
3. mettez à jour le `tabindex` de l'ancien élément sélectionné à «&nbsp;-1&nbsp;».

### Technique 2 : `aria-activedescendant`

Cette technique consiste à lier un seul gestionnaire d'évènement au conteneur et à utiliser `aria-activedescendant` pour suivre une sélection «&nbsp;virtuelle&nbsp;». (Pour plus d'informations sur ARIA, regardez cette [vue d'ensemble des applications et composants web accessibles](/fr/docs/Web/Accessibility/Guides/Accessible_web_applications_and_widgets).)

La propriété `aria-activedescendant` indique l'ID de l'élément descendant qui a actuellement la sélection virtuelle. Le gestionnaire d'évènement sur le conteneur doit réagir aux évènements clavier et souris en mettant à jour la valeur de `aria-activedescendant` et en s'assurant que l'élément courant est mis en forme de façon appropriée (par exemple, avec une bordure ou une couleur de fond).

## Bonnes pratiques générales

### Utilisation des évènements de la sélection

- Ne déclenchez pas l'évènement [`focus`](/fr/docs/Web/API/Element/focus_event) pour envoyer la sélection à un élément. Les évènements de la sélection du DOM sont uniquement informatifs&nbsp;: ils sont générés par le système après qu'un élément a reçu la sélection, mais ne servent pas à définir la sélection. Utilisez plutôt `element.focus()`.
- Écoutez les évènements [`focus`](/fr/docs/Web/API/Element/focus_event) et [`blur`](/fr/docs/Web/API/Element/blur_event) pour suivre les changements de la sélection. N'imaginez pas que tous les changements de la sélection proviennent d'évènements clavier ou souris&nbsp;: les technologies d'assistance comme les lecteurs d'écran peuvent placer la sélection sur n'importe quel élément sélectionnable. Pour suivre la sélection sur tout le document, utilisez [`document.activeElement`](/fr/docs/Web/API/Document/activeElement) pour obtenir l'élément actif, ou [`document.hasFocus`](/fr/docs/Web/API/Document/hasFocus) pour vérifier si le document courant a la sélection.

### Assurez-vous que clavier et souris produisent la même expérience

Pour garantir une expérience utilisateur cohérente quel que soit le périphérique d'entrée, les gestionnaires d'évènements clavier et souris doivent partager le même code lorsque c'est pertinent. Par exemple, le code qui met à jour le `tabindex` ou le style lors de la navigation avec les flèches doit aussi être utilisé par les gestionnaires de clic souris pour produire les mêmes changements.

### Assurez-vous que le clavier permet d'activer l'élément

Pour garantir que le clavier permet d'activer les éléments, tout gestionnaire lié à un évènement souris doit aussi être lié à un évènement clavier. Par exemple, pour que la touche <kbd>Entrée</kbd> active un élément, si vous avez un `onclick="doSomething()"`, liez aussi `doSomething()` à l'évènement clavier&nbsp;: `onkeydown="event.code === 'Enter' && doSomething();"`.

### Affichez toujours la sélection pour les éléments `tabindex="-1"` et ceux recevant la sélection par programmation

Assurez-vous que les éléments sélectionnés affichent un anneau de la sélection. Cela peut se faire avec la propriété CSS {{CSSxRef("outline")}}, qui ne doit jamais être fixée inconditionnellement à `none`. Pour éviter d'afficher des anneaux de la sélection inutiles, utilisez le pseudo-élément {{CSSxRef(":focus-visible")}}.

### Empêchez les évènements clavier utilisés d'activer les fonctions du navigateur

Si votre composant gère un évènement clavier, empêchez le navigateur de le gérer aussi (par exemple, le défilement avec les flèches) en utilisant la valeur de retour de votre gestionnaire. Si votre gestionnaire retourne `false`, l'évènement n'est pas propagé au-delà de votre code.

Par exemple&nbsp;:

```html
<span tabindex="-1">…</span>
```

```js
span.onkeydown = handleKeyDown;
```

Si `handleKeyDown()` retourne `false`, l'évènement est consommé et le navigateur n'effectue aucune action liée à la touche.

### Ne comptez pas sur un comportement cohérent de la répétition des touches pour le moment

Malheureusement, `onkeydown` peut ou non se répéter selon le navigateur et le système d'exploitation utilisés.
