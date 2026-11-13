---
title: "ARIA : rôle tree"
short-title: tree
slug: Web/Accessibility/ARIA/Reference/Roles/tree_role
l10n:
  sourceCommit: 9abb432251513c5fdcaf5aad0764126fc68413c4
---

Un `tree` («&nbsp;arbre&nbsp;») est un composant qui permet à l'utilisateur·ice de sélectionner un ou plusieurs éléments dans une collection organisée hiérarchiquement.

## Description

Un composant `tree` est une liste hiérarchique avec des nœuds parent et enfant qui peuvent être développés ou réduits. Tout élément de la hiérarchie peut avoir des enfants, définis avec [`role="treeitem"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role). Les éléments qui ont des enfants peuvent être développés ou réduits, affichant ou masquant leurs enfants.

Un exemple de `tree` est une interface de sélection de fichiers&nbsp;: une vue de l'arborescence affichant des dossiers et des fichiers. Les dossiers peuvent être développés pour révéler leur contenu — fichiers, dossiers ou les deux — et réduits pour masquer leur contenu.

Les vues de l'arborescence ARIA se naviguent principalement avec les touches fléchées du clavier, et non avec <kbd>Tab</kbd>. Cette navigation est peu courante pour le contenu web, mais normale pour les applications natives. Pour cette raison, avant de créer une vue de l'arborescence, envisagez d'autres solutions pour répondre au besoin fonctionnel.

> [!WARNING]
> Les vues de l'arborescence utilisent une navigation plus proche des applications natives que des applications web. Avant de créer une vue de l'arborescence, envisagez d'autres solutions pour répondre à votre besoin fonctionnel.

Pour plus d'informations sur la manière de baliser les nœuds individuels d'un arbre, consultez [`treeitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role).

### Arbres à sélection unique et multiple

Les arbres peuvent être «&nbsp;à sélection unique&nbsp;», permettant à l'utilisateur·ice de choisir un seul élément pour une action, ou «&nbsp;à sélection multiple&nbsp;», où il·elle peut sélectionner plusieurs éléments pour une action. Dans les arbres à sélection multiple, le `tree` porte [`aria-multiselectable`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) à true. Sinon, `aria-multiselectable` est à `false` ou la valeur par défaut `false` est implicite. Dans les deux cas, pour l'accessibilité clavier, la gestion de la sélection doit être assurée pour tous les descendants de l'arbre.

Dans certaines implémentations d'arbre à sélection unique, l'élément sélectionné est aussi celui qui a la sélection&nbsp;: c'est le modèle «&nbsp;la sélection suit la sélection clavier&nbsp;». Quand un arbre à sélection unique reçoit la sélection, si aucun élément n'est sélectionné avant, la sélection se place sur le premier nœud. Si un élément est sélectionné avant, la sélection se place sur cet élément.

Quand un arbre à sélection multiple reçoit la sélection, si aucun élément n'est sélectionné avant, la sélection se place sur le premier élément. Si un ou plusieurs éléments sont sélectionnés avant, la sélection se place sur le premier élément sélectionné.

Dans les arbres à sélection multiple, l'état sélectionné est toujours indépendant de la sélection clavier. Par exemple, dans un explorateur de fichiers, l'utilisateur·ice peut déplacer la sélection pour choisir plusieurs fichiers à copier ou déplacer. Le design visuel doit clairement indiquer quels éléments sont sélectionnés et lequel a la sélection clavier.

### Hiérarchie de l'arbre

Dans une vue de l'arborescence, l'élément `tree` est le conteneur de la hiérarchie des nœuds `treeitem`. Chaque élément servant de nœud d'arbre a le rôle `treeitem`. Les éléments de l'arborescence de premier niveau sont des nœuds racines&nbsp;; ils peuvent avoir des enfants, des petits-enfants et d'autres descendants.

### Placement et présence dans le DOM

Tous les treeitem sont contenus ou possédés par un élément avec le rôle `tree`. Si certains nœuds racines ne sont pas contenus dans le `tree` dans le DOM, incluez [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) sur le conteneur de l'arbre pour les référencer. Ces éléments possédés qui ne sont pas des descendants apparaissent dans l'ordre de lecture dans la séquence où ils sont référencés et après tous les treeitem qui sont des descendants du DOM. Les scripts qui gèrent la sélection doivent s'assurer que l'ordre visuel de sélection correspond à cet ordre de lecture pour les technologies d'assistance.

### Nom accessible

Le `tree` doit avoir un nom accessible. Référencez une étiquette visible avec [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou définissez une étiquette avec [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Orientation de l'arbre

Les éléments avec le rôle `tree` ont une valeur implicite [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) à vertical. Si l'arbre est horizontal, ajoutez `aria-orientation="horizontal"`.

### Propriétés, états et rôles WAI-ARIA associés

- [`role="treeitem"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)
  - : Un élément dans un arbre.
- [`role="group"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Une collection extensible d'éléments treeitem.
- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Identifie l'élément (ou les éléments) qui étiquettent le `tree` pour fournir le nom accessible requis si une étiquette visible est présente. Sinon, utilisez `aria-label`.
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Définit une chaîne de caractères qui étiquette le `tree` si aucune étiquette visible n'est présente.
- [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Indique si l'arbre est horizontal ou vertical&nbsp;; la valeur par défaut est `vertical` si omise.
- [`aria-multiselectable`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Si la valeur est true, indique que l'utilisateur·ice peut sélectionner plusieurs éléments parmi les descendants sélectionnables de l'arbre.

### Interactions au clavier

Pour un arbre vertical (orientation par défaut)&nbsp;:

<table>
  <tr>
    <td><kbd>Flèche vers la droite</kbd></td>
    <td>
      <ul>
        <li>Lorsque la sélection est sur un nœud fermé, ouvre le nœud&nbsp;; la sélection ne bouge pas.
        <li>Lorsque la sélection est sur un nœud ouvert, déplace la sélection sur le premier enfant.
        <li>Lorsque la sélection est sur un nœud terminal (sans enfants), ne fait rien.
    </td>
  </tr>
  <tr>
    <td><kbd>Flèche vers la gauche</kbd></td>
    <td>
      <ul>
        <li>Lorsque la sélection est sur un nœud ouvert, ferme le nœud.
        <li>Lorsque la sélection est sur un nœud racine qui est aussi soit un nœud terminal, soit un nœud fermé, ne fait rien.
        <li>Lorsque la sélection est sur un enfant qui est aussi un nœud terminal ou fermé, déplace la sélection sur le parent.
    </td>
  </tr>
  <tr>
    <td><kbd>Flèche vers le bas</kbd></td>
    <td>
      Déplace la sélection vers le nœud suivant sélectionnable sans ouvrir ni
      fermer de nœud.
    </td>
  </tr>
  <tr>
    <td><kbd>Flèche vers le haut</kbd></td>
    <td>
      Déplace la sélection vers le nœud précédent sélectionnable sans ouvrir ni
      fermer de nœud.
    </td>
  </tr>
  <tr>
    <td><kbd>Début</kbd></td>
    <td>
      Déplace la sélection vers le premier nœud de l'arbre sans ouvrir ni fermer
      de nœud.
    </td>
  </tr>
  <tr>
    <td><kbd>Fin</kbd></td>
    <td>
      Déplace la sélection vers le dernier nœud sélectionnable de l'arbre sans
      ouvrir de nœud.
    </td>
  </tr>
  <tr>
    <td><kbd>Entrée</kbd></td>
    <td>
      Effectue l'action par défaut du nœud actuellement sélectionné. Pour les nœuds parents, l'ouverture ou la fermeture du nœud est une action par défaut possible. Dans les arbres à sélection unique, où la sélection ne suit pas la sélection au clavier, l'action par défaut sélectionne généralement le nœud courant s'il n'est pas déjà sélectionné.
    </td>
  </tr>
  <tr>
    <td>Taper un caractère*</td>
    <td>
      <ul>
        <li>La sélection se déplace vers le nœud suivant dont le nom commence par le caractère tapé.
        <li>Si plusieurs caractères sont tapés rapidement, la sélection se déplace vers le nœud suivant dont le nom commence par la chaîne de caractères tapée.
    </td>
  </tr>
  <tr>
    <td><kbd>*</kbd> (optionnel)</td>
    <td>Développe tous les nœuds voisins au même niveau que le nœud courant.</td>
  </tr>
</table>

\* La recherche rapide est recommandée pour tous les arbres, surtout ceux avec plus de 7 nœuds racine

### Interactions clavier pour la sélection multiple

Il existe deux modèles d'interaction pour les arbres à sélection multiple&nbsp;: on peut exiger que l'utilisateur·ice appuie sur une touche de modification (<kbd>Maj</kbd> ou <kbd>Ctrl</kbd>) lors de la navigation pour ne pas perdre l'état de sélection, mais le modèle qui ne nécessite pas de maintenir une touche est recommandé.

#### Modèle recommandé de sélection multiple

<table>
  <tr>
    <td><kbd>Espace</kbd></td>
    <td>Bascule l'état de sélection du nœud sélectionné.</td>
  </tr>
  <tr>
    <td><kbd>Maj + Flèche vers le bas</kbd> (optionnel)</td>
    <td>
      Déplace la sélection vers le nœud suivant et bascule son état de
      sélection.
    </td>
  </tr>
  <tr>
    <td><kbd>Maj + Flèche vers le haut</kbd> (optionnel)</td>
    <td>
      Déplace la sélection vers le nœud précédent et bascule son état de
      sélection.
    </td>
  </tr>
  <tr>
    <td><kbd>Maj + Espace</kbd> (optionnel)</td>
    <td>
      Sélectionne les nœuds contigus du dernier nœud sélectionné au nœud
      courant.
    </td>
  </tr>
  <tr>
    <td><kbd>Ctrl + Maj + Début</kbd> (optionnel)</td>
    <td>
      Sélectionne le nœud courant et tous les nœuds jusqu'au premier.
      Optionnellement, déplace la sélection sur le premier nœud.
    </td>
  </tr>
  <tr>
    <td><kbd>Ctrl + Maj + Fin</kbd> (optionnel)</td>
    <td>
      Sélectionne le nœud courant et tous les nœuds jusqu'au dernier.
      Optionnellement, déplace la sélection sur le dernier nœud.
    </td>
  </tr>
  <tr>
    <td><kbd>Ctrl + A</kbd> (optionnel)</td>
    <td>
      Sélectionne tous les nœuds de l'arbre. Optionnellement, si tous les nœuds
      sont sélectionnés, peut aussi tout désélectionner.
    </td>
  </tr>
</table>

#### Modèle alternatif de sélection multiple

Le modèle alternatif est basé sur une touche de modification&nbsp;: déplacer la sélection sans maintenir une touche comme <kbd>Maj</kbd> ou <kbd>Ctrl</kbd> désélectionne tous les nœuds sauf celui sélectionné.

<table>
  <tr>
    <td><kbd>Maj + Flèche vers le bas</kbd></td>
    <td>
      Déplace la sélection vers le nœud suivant et bascule son état de
      sélection.
    </td>
  </tr>
  <tr>
    <td><kbd>Maj + Flèche vers le haut</kbd></td>
    <td>
      Déplace la sélection vers le nœud précédent et bascule son état de
      sélection.
    </td>
  </tr>
  <tr>
    <td><kbd>Ctrl + Flèche vers le bas</kbd></td>
    <td>
      Déplace la sélection vers le nœud suivant sans changer l'état de
      sélection.
    </td>
  </tr>
  <tr>
    <td><kbd>Ctrl + Flèche vers le haut</kbd></td>
    <td>
      Déplace la sélection vers le nœud précédent sans changer l'état de
      sélection.
    </td>
  </tr>
  <tr>
    <td><kbd>Ctrl + Espace</kbd></td>
    <td>Bascule l'état de sélection du nœud sélectionné.</td>
  </tr>
  <tr>
    <td><kbd>Maj + Espace</kbd> (optionnel)</td>
    <td>
      Sélectionne les nœuds contigus du dernier nœud sélectionné au nœud
      courant.
    </td>
  </tr>
  <tr>
    <td><kbd>Ctrl + Maj + Début</kbd> (optionnel)</td>
    <td>
      Sélectionne le nœud courant et tous les nœuds jusqu'au premier.
      Optionnellement, déplace la sélection sur le premier nœud.
    </td>
  </tr>
  <tr>
    <td><kbd>Ctrl + Maj + Fin</kbd> (optionnel)</td>
    <td>
      Sélectionne le nœud courant et tous les nœuds jusqu'au dernier.
      Optionnellement, déplace la sélection sur le dernier nœud.
    </td>
  </tr>
  <tr>
    <td><kbd>Ctrl + A</kbd> (optionnel)</td>
    <td>
      Sélectionne tous les nœuds de l'arbre. Optionnellement, si tous les nœuds
      sont sélectionnés, peut aussi tout désélectionner.
    </td>
  </tr>
</table>

## Spécifications

{{Specifications}}
