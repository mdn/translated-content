---
title: "ARIA : rôle tab"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

Le rôle `tab` indique un élément interactif à l'intérieur d'un `tablist` qui, lorsqu'il est activé, affiche son `tabpanel` associé.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Étiquette de l'onglet
</button>
```

## Description

Un élément avec le rôle `tab` contrôle la visibilité d'un élément associé avec le rôle [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role). Le schéma d'expérience utilisateur·ice courant est un groupe d'onglets visuels au‑dessus ou sur le côté d'une zone de contenu, et la sélection d'un autre onglet modifie le contenu et rend l'onglet sélectionné plus visible que les autres.

Les éléments avec le rôle `tab` _doivent_ soit être enfants d'un élément avec le rôle `tablist`, soit avoir leur `id` inclus dans la propriété [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) d'un `tablist`. Cette combinaison indique aux technologies d'assistance que l'élément fait partie d'un groupe d'éléments liés. Certaines technologies d'assistance fourniront le nombre d'éléments avec le rôle `tab` dans un `tablist`, et indiqueront à l'utilisateur·ice quel onglet est actuellement ciblé. De plus, un élément avec le rôle `tab` _devrait_ contenir la propriété [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) identifiant un `tabpanel` correspondant (qui possède le rôle `tabpanel`) par l'`id` de cet élément. Lorsqu'un élément avec le rôle `tabpanel` a la sélection, ou qu'un de ses enfants l'a, cela indique que l'élément connecté avec le rôle `tab` est l'onglet actif dans un `tablist`.

Lorsque des éléments avec le rôle `tab` sont sélectionnés ou actifs, ils doivent avoir leur attribut [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) défini sur `true`. Sinon, leur attribut `aria-selected` doit être défini sur `false`. Lorsqu'un `tablist` à sélection unique est sélectionné ou actif, l'attribut `hidden` des autres tabpanels doit être défini sur true jusqu'à ce que l'utilisateur·ice sélectionne l'onglet associé à ce tabpanel. Lorsqu'un `tablist` à sélection multiple est sélectionné ou actif, son `tabpanel` contrôlé correspondant doit avoir son attribut [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) défini sur `true` et son attribut `hidden` défini sur `false`, sinon l'inverse.

### Tous les descendants sont des éléments de présentation

Certains composants d'interface utilisateur, lorsqu'ils sont représentés dans une API d'accessibilité de plate-forme, ne peuvent contenir que du texte. Les API d'accessibilité n'ont pas de moyen de représenter des éléments sémantiques contenus dans un `tab`. Pour contourner cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les éléments descendants d'un élément `tab`, car ce rôle ne prend pas en charge les enfants sémantiques.

Par exemple, considérez l'élément `tab` ci‑dessous qui contient un titre&nbsp;:

```html
<div role="tab"><h3>Titre de mon onglet</h3></div>
```

Étant donné que les descendants d'un `tab` sont présentiels, le code suivant est équivalent&nbsp;:

```html
<div role="tab"><h3 role="presentation">Titre de mon onglet</h3></div>
```

Du point de vue de l'utilisateur·ice de technologie d'assistance, le titre n'existe pas puisque les extraits précédents sont équivalents à ce qui suit dans l'[arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree)&nbsp;:

```html
<div role="tab">Titre de mon onglet</div>
```

### Propriétés, états et rôles ARIA associés

- [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : booléen
- [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : `id` de l'élément avec le rôle `tabpanel`
- [id](/fr/docs/Web/HTML/Reference/Global_attributes/id)
  - : contenu

### Interactions au clavier

| Touche                    | Action                                                                                                                                                                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>            | Lorsque la sélection est en dehors du `tablist`, déplace la sélection vers l'onglet actif. Si la sélection est sur l'onglet actif, déplace la sélection vers l'élément suivant dans l'ordre de tabulation, idéalement le `tabpanel` associé à l'onglet actif. |
| <kbd>Flèche droite</kbd>  | Sélectionne et active éventuellement l'onglet suivant dans la liste. Si l'onglet courant est le dernier, active le premier onglet.                                                                                                                            |
| <kbd>Flèche gauche</kbd>  | Sélectionne et active éventuellement l'onglet précédent dans la liste. Si l'onglet courant est le premier, active le dernier onglet.                                                                                                                          |
| <kbd>Retour arrière</kbd> | Si autorisé, supprime l'onglet actuellement sélectionné de la liste.                                                                                                                                                                                          |

### Fonctionnalités JavaScript requises

> [!NOTE]
> Il existe des moyens de créer des onglets sans JavaScript, mais aucune combinaison utilisant uniquement HTML et CSS ne permet d'obtenir toutes les fonctionnalités requises ci‑dessus pour des onglets accessibles avec contenu.

## Exemple

Cet exemple combine le rôle `tab` avec `tablist` et des éléments avec le rôle `tabpanel` pour créer un groupe interactif de contenus à onglets. Ici, le groupe de contenu est englobé dans une `div`, le `tablist` possède un attribut `aria-label` qui le décrit pour les technologies d'assistance. Chaque `tab` est un bouton avec les attributs mentionnés précédemment. Le premier onglet possède à la fois `tabindex="0"` et `aria-selected="true"`. Ces deux attributs doivent toujours être coordonnés ainsi&nbsp;: lorsqu'un autre onglet est sélectionné, il aura alors `tabindex="0"` et `aria-selected="true"`. Tous les onglets non sélectionnés doivent avoir `aria-selected="false"` et `tabindex="-1"`.

Tous les éléments `tabpanel` ont `tabindex="0"` pour être accessibles à la tabulation, et tous sauf celui actuellement actif ont l'attribut `hidden`. L'attribut `hidden` sera retiré lorsqu'un `tabpanel` devient visible via JavaScript. Un style de base est appliqué pour restyler les boutons et modifier le [`z-index`](/fr/docs/Web/CSS/Reference/Properties/z-index) des éléments `tab` afin de donner l'illusion qu'ils sont connectés au `tabpanel` pour les éléments actifs, et que les éléments inactifs sont derrière le `tabpanel` actif.

```html
<div class="tabs">
  <div role="tablist" aria-label="Exemple d'onglets">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      Premier onglet
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      Second onglet
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Troisième onglet
    </button>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Contenu du premier panneau</p>
  </div>
  <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
    <p>Contenu du deuxième panneau</p>
  </div>
  <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
    <p>Contenu du troisième panneau</p>
  </div>
</div>
```

```css hidden
.tabs {
  padding: 1em;
}

[role="tablist"] {
  margin-bottom: -1px;
}

[role="tab"] {
  position: relative;
  z-index: 1;
  background: white;
  border-radius: 5px 5px 0 0;
  border: 1px solid grey;
  border-bottom: 0;
  padding: 0.2em;
}

[role="tab"][aria-selected="true"] {
  z-index: 3;
}

[role="tabpanel"] {
  position: relative;
  padding: 0 0.5em 0.5em 0.7em;
  border: 1px solid grey;
  border-radius: 0 0 5px 5px;
  background: white;
  z-index: 2;
}

[role="tabpanel"]:focus {
  border-color: orange;
  outline: 1px solid orange;
}
```

Il y a deux choses à faire en JavaScript&nbsp;: il faut changer la sélection et l'index de tabulation des éléments `tab` avec les flèches droite et gauche, et il faut changer l'onglet et le `tabpanel` actif lorsqu'on clique sur un onglet.

Pour la première, on écoute l'événement [`keydown`](/fr/docs/Web/API/Element/keydown_event) sur le `tablist`. Si la [`key`](/fr/docs/Web/API/KeyboardEvent/key) de l'événement est `ArrowRight` ou `ArrowLeft`, on réagit à l'événement. On commence par définir le `tabindex` de l'onglet courant à -1, le rendant non accessible à la tabulation. Si la flèche droite est pressée, on incrémente le compteur de sélection d'onglet. Si le compteur dépasse le nombre d'onglets, on revient au premier onglet en mettant le compteur à 0. Si la flèche gauche est pressée, on décrémente le compteur, et s'il devient inférieur à 0, on le met au nombre d'onglets moins un (pour aller au dernier élément). Enfin, on place la sélection sur l'onglet dont l'index correspond au compteur, et on définit son `tabindex` à 0 pour le rendre accessible à la tabulation.

Pour gérer le changement d'onglet et de `tabpanel` actif, on utilise une fonction qui prend l'événement, récupère l'élément déclencheur, son parent et son grand-parent. On trouve tous les onglets avec `aria-selected="true"` dans le parent et on les passe à `false`, puis on met l'onglet déclencheur à `aria-selected="true"`. Ensuite, on trouve tous les éléments `tabpanel` dans le grand-parent, on les rend tous cachés, et enfin on sélectionne l'élément dont l'`id` correspond à l'attribut `aria-controls` de l'onglet déclencheur et on retire l'attribut `hidden` pour le rendre visible.

```js
// Ne gérer qu'un seul tablist : si vous avez plusieurs listes d'onglets
// (elles peuvent même être imbriquées), il faut appliquer ce code à chacune
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll(':scope > [role="tab"]');

// Ajouter un gestionnaire d'événement click à chaque onglet
tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabs);
});

// Activer la navigation par flèches entre les onglets de la liste
let tabFocus = 0;

tabList.addEventListener("keydown", (e) => {
  // Aller à droite
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    tabs[tabFocus].setAttribute("tabindex", -1);
    if (e.key === "ArrowRight") {
      tabFocus++;
      // Si on est à la fin, revenir au début
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
      // Aller à gauche
    } else if (e.key === "ArrowLeft") {
      tabFocus--;
      // Si on est au début, aller à la fin
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  }
});

function changeTabs(e) {
  const targetTab = e.target;
  const tabList = targetTab.parentNode;
  const tabGroup = tabList.parentNode;

  // Retirer tous les onglets actuellement sélectionnés
  tabList
    .querySelectorAll(':scope > [aria-selected="true"]')
    .forEach((t) => t.setAttribute("aria-selected", false));

  // Définir cet onglet comme sélectionné
  targetTab.setAttribute("aria-selected", true);

  // Masquer tous les panneaux d'onglet
  tabGroup
    .querySelectorAll(':scope > [role="tabpanel"]')
    .forEach((p) => p.setAttribute("hidden", true));

  // Afficher le panneau sélectionné
  tabGroup
    .querySelector(`#${targetTab.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}
```

{{EmbedLiveSample("exemple", 600, 130)}}

## Bonnes pratiques

Il est recommandé d'utiliser un élément {{HTMLElement('button')}} avec le rôle `tab` pour bénéficier de ses fonctionnalités natives et accessibles, plutôt que d'avoir à les ajouter soi‑même. Pour contrôler la fonctionnalité de la touche Tab pour les éléments avec le rôle `tab`, il est recommandé de définir tous les éléments non actifs sur `tabindex="-1"`, et de définir l'élément actif sur `tabindex="0"`.

## Ordre de priorité

Quelles sont les propriétés associées, et dans quel ordre cet attribut ou cette propriété sera lue, quelle propriété aura priorité sur celle‑ci, et quelle propriété sera écrasée.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('button')}}
- [KeyboardEvent.key](/fr/docs/Web/API/KeyboardEvent/key)
- [ARIA&nbsp;: rôle `tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
