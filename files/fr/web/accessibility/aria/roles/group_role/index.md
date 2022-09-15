---
title: Utiliser le rôle group
slug: Web/Accessibility/ARIA/Roles/group_role
tags:
  - ARIA
  - Accessibilité
  - Rôle
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role
---
### Description

Cette technique présente l’utilisation du rôle [group](http://www.w3.org/TR/wai-aria/roles#group) et décrit les effets produits sur les navigateurs et les technologies d’assistance.

Le rôle `group` est utilisé pour identifier un ensemble d’objets de l’interface utilisateur qui, contrairement à une [`region`](http://www.w3.org/TR/wai-aria/roles#region), ne sont pas destinés à être intégrés dans une table de contenus ou une page récapitulative (telles que des structures dynamiquement créées par des scripts ou par les technologies d’assistance)&nbsp;; un groupe ne devrait pas être considéré comme une partie perceptible majeure d’une page. Lorsque le rôle `group` est ajouté à un élément, , le navigateur émettra un événement `group` accessible aux produits de technologie d’assistance qui pourront alors le notifier à l’utilisateur.

Un groupe devrait utilisé pour former un ensemble logique d’éléments avec des fonctions connexes, tels que les enfants dans un composant d’arborescence formant un ensemble apparenté dans une hiérarchie, ou une collection d’éléments ayant le même conteneur dans un répertoire. Cependant, lorsqu’on utilise un groupe pour former une liste, les développeurs doivent limiter ses enfants aux éléments [listitem](http://www.w3.org/TR/wai-aria/roles#listitem). Les éléments de groupe devraient être imbriqués.

La gestion correcte d’un groupe par les technologies d’assistance est déterminée par le contexte dans lequel il est fourni.

Si un auteur pense qu’une section est suffisamment importante pour faire partie de la table des matières d’une page, il devrait assigner un rôle de [`region`](http://www.w3.org/TR/wai-aria/roles#region) ou un rôle standard de [point de repère](http://www.w3.org/TR/wai-aria/roles#landmark_roles) à cette section.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Lorsque le rôle `group` est ajouté à un élément, ou qu’un tel élément devient visible, l’agent utilisateur devrait suivre les étapes suivantes&nbsp;:

- Présenter l’élément ayant un rôle de groupe à l’API d’accessibilité du système d’exploitation&nbsp;;
- Déclencher un événement groupe accessible à l’aide l’API d’accessibilité du système d’exploitation si elle le prend en charge.

Les technologies d’assistance devraient être à l’écoute de tels événements et les notifier à l’utilisateur en conséquence&nbsp;:

- Les lecteurs d’écran devraient annoncer le groupe lorsque le focus atteint l’un des contrôles appartenant au groupe, et si [aria-describedby](http://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby) a été défini, la description peut être lue. Après cela seulement le contrôle focalisé devrait être annoncé.
- Les loupes d’écran devraient agrandir le groupe.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;: Utiliser le rôle `group` avec une arborescence HTML

L’extrait de code ci-dessous montre comment le rôle `group` est ajouté directement dans le code source HTML.

```html
<div id="tree1" class="tree" role="tree" tabindex="-1">
  <div id="animals" class="groupHeader" role="presentation" aria-owns="animalGroup" aria-expanded="true">
    <img class="headerImg" role="presentation" tabindex="-1" src="images/treeExpanded.gif" />
    <span role="treeitem" tabindex="0">Animaux</span>
  </div>

  <div id="animalGroup" class="group" role="group">
    <div id="birds" class="treeitem" role="presentation">
      <span role="treeitem" tabindex="-1">Oiseaux</span>
    </div>

    <div id="cats" class="groupHeader" role="presentation" aria-owns="catGroup" aria-expanded="false">
      <img class="headerImg" role="presentation" tabindex="-1" src="images/treeContracted.gif" />
      <span role="treeitem" tabindex="0">Chats</span>
    </div>

 <div id="catGroup" class="group" role="group">
      <div id="siamese" class="treeitem" role="presentation">
        <span role="treeitem" tabindex="-1">Siamois</span>
      </div>
      <div id="tabby" class="treeitem" role="presentation">
        <span role="treeitem" tabindex="-1">Tigré</span>
      </div>
    </div>
  </div>
</div>
```

#### Exemple 2&nbsp;: Utiliser le rôle `group` avec un menu déroulant HTML

L’extrait de code ci-dessous montre comment le rôle `group` est ajouté directement au code source HTML.

```html
<div role="menu">
  <ul role="group">
    <li role="menuitem">Courrier entrant</li>
    <li role="menuitem">Archive</li>
    <li role="menuitem">Corbeille</li>
  </ul>
  <ul role="group">
    <li role="menuitem">Dossier personnalisé 1</li>
    <li role="menuitem">Dossier personnalisé 2</li>
    <li role="menuitem">Dossier personnalisé 3</li>
  </ul>

  <ul role="group">
    <li role="menuitem">Nouveau dossier</li>
  </ul>
</div>
```

#### Exemples concrets&nbsp;:

- <http://test.cita.illinois.edu/aria/tree/tree2.php>

### Notes

- Les membres du groupe qui se trouve à l’extérieur du sous-arbre DOM du groupe doivent avoir leurs relations avec ce dernier explicitement assignées afin de participer au groupe.

### Attributs ARIA utilisés

- [group (en)](http://www.w3.org/TR/wai-aria/roles#group)

### Techniques ARIA connexes

- Rôle [region (en)](http://www.w3.org/TR/wai-aria/roles#region)

### Autres ressources

- Bonnes pratiques ARIA – Répertoires, groupes et zones&nbsp;: [Directories, Groups, and Regions (en)](http://www.w3.org/TR/wai-aria-practices/#kbd_layout_groupheading)
