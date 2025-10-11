---
title: "ARIA : rôle treeitem"
short-title: treeitem
slug: Web/Accessibility/ARIA/Reference/Roles/treeitem_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `treeitem` est un élément dans une arborescence (`tree`).

## Description

Une [arborescence](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) (<i lang="en">`tree`</i> en anglais) est une liste hiérarchique avec des nœuds parents et enfants pouvant être développés ou réduits. Un `treeitem` est un nœud de cette arborescence. La racine de l'arborescence possède le rôle `tree`, mais tous les nœuds sont des éléments `treeitem`, même s'ils contiennent eux-mêmes des nœuds enfants `treeitem`.

Un exemple d'«&nbsp;arborescence&nbsp;» est une interface de sélection de fichiers&nbsp;: une vue arborescente affichant des dossiers et des fichiers. Chaque dossier et fichier est un `treeitem`. Les dossiers, qui sont des éléments `treeitem`, peuvent être développés pour révéler leur contenu (fichiers, dossiers ou les deux, tous étant des `treeitem`) ou réduits pour masquer leur contenu.

Dans une hiérarchie d'arborescence, le _nœud racine_ possède le rôle `tree`. Tous les autres nœuds, sauf la racine, ont le rôle `treeitem`, qu'ils aient ou non des enfants. Un `treeitem` qui est parent est un **nœud parent**. Un `treeitem` qui n'est pas parent est un _nœud final_.

Les éléments de l'arborescence ayant des enfants peuvent être développés ou réduits, affichant ou masquant leurs enfants. Un nœud parent développé, dont les enfants sont visibles, est un **nœud ouvert**. Un nœud parent réduit, dont les enfants sont masqués, est un **nœud fermé**.

Chaque nœud parent contient ou possède un élément avec le rôle [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Un nœud parent est une collection extensible d'éléments `treeitem`. Ces nœuds enfants ne sont pas des descendants directs du parent&nbsp;: ils doivent être inclus dans un élément ayant le rôle `group`.

Chaque nœud parent doit inclure l'attribut [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded). Il est défini à `false` lorsque le nœud est réduit, et à `true` lorsqu'il est ouvert. Les nœuds finaux ne doivent pas avoir l'attribut `aria-expanded`, car sa présence indique aux technologies d'assistance que le nœud est parent.

> [!NOTE]
> Les vues arborescentes ARIA utilisent une navigation plus proche des applications natives que des applications web, et sont principalement naviguées avec les flèches du clavier plutôt qu'avec <kbd>Tab</kbd>. Ce type de navigation est inhabituel pour la plupart des contenus web, mais normal et attendu pour les applications natives. Pour cette raison, envisagez d'autres solutions pour répondre à votre besoin avant de créer une vue arborescente.

Tout élément ayant le rôle `treeitem` doit être imbriqué dans, ou possédé par, un élément ayant le rôle `tree`. Les éléments de l'arborescence peuvent être enfants de `tree`, de `treeitem`, ou d'un élément ayant le rôle `group` contenu ou possédé par un élément ayant le rôle `tree` ou `treeitem`. Si un `treeitem` n'est pas imbriqué dans une arborescence, ou dans un `group` possédé par une arborescence, incluez l'identifiant [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) du `treeitem` dans la valeur de l'attribut [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) de l'élément possédant (`tree`, `treeitem` ou `group`).

Les arborescences peuvent être à «&nbsp;sélection unique&nbsp;», permettant à l'utilisateur·ice de choisir un seul `treeitem` pour une action, ou à «&nbsp;sélection multiple&nbsp;», où il·elle peut sélectionner plusieurs nœuds `treeitem` pour une action. Dans les deux cas, pour être accessibles au clavier, la gestion de la sélection doit être assurée pour tous les descendants de l'arborescence.

Dans les arborescences à sélection unique, un seul `treeitem` peut avoir [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) (ou [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)) défini à `true`. Lorsqu'une arborescence à sélection unique reçoit la sélection, si aucun `treeitem` n'est sélectionné avant, la sélection est placée sur le premier `treeitem`. Si un `treeitem` est déjà sélectionné, la sélection est placée sur ce `treeitem` ayant `aria-selected="true"`.

Tous les nœuds sélectionnables mais non sélectionnés ont soit `aria-selected`, soit `aria-checked` défini à `false`. Si l'arborescence contient des nœuds non sélectionnables, n'ajoutez pas ces attributs, car leur présence indique aux technologies d'assistance que le nœud est sélectionnable.

Un seul nœud peut être sélectionné à la fois, sauf si le nœud racine possède [`aria-multiselectable="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable).

Dans une arborescence à sélection multiple, si aucun élément n'est sélectionné avant la sélection, la sélection est placée sur le premier `treeitem`. Si un ou plusieurs éléments sont déjà sélectionnés, la sélection est placée sur le premier élément sélectionné.

Dans les arborescences à sélection multiple, tous les éléments sélectionnés ont soit `aria-selected="true"`, soit `aria-checked="true"`. Tous les nœuds sélectionnables mais non sélectionnés doivent avoir `aria-selected="false"` ou `aria-checked="false"`.

On peut utiliser soit `aria-selected`, soit `aria-checked` pour indiquer la sélection des éléments `treeitem`. Certaines interfaces utilisent `aria-selected` pour la sélection unique et `aria-checked` pour la sélection multiple.

L'utilisation simultanée de `aria-selected` et `aria-checked` dans une même arborescence est fortement déconseillée. Ne les utilisez ensemble que si leur signification et leur usage sont différents, que cela est clair pour l'utilisateur·ice, et que l'interface propose un contrôle distinct pour chaque état.

Dans les arborescences à sélection multiple, l'état sélectionné doit être indépendant de la sélection clavier. Par exemple, dans un explorateur de fichiers, l'utilisateur·ice peut déplacer la sélection pour choisir plusieurs fichiers à copier ou déplacer. La conception visuelle doit clairement distinguer les éléments sélectionnés de l'élément ayant la sélection.

Si l'ensemble des éléments `treeitem` disponibles n'est pas présent dans le DOM (chargement dynamique lors du déplacement ou du défilement), chaque `treeitem` doit avoir [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) et [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) renseignés.

Un `treeitem` doit obligatoirement avoir un nom accessible. En général, ce nom provient du contenu du `treeitem`. Il peut aussi être défini via [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

## Propriétés, états et rôles WAI-ARIA associés

- [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
  - : Nœud racine d'une liste hiérarchique de nœuds parents et enfants `treeitem` pouvant être développés ou réduits.
- [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Identifie un ensemble d'enfants `treeitem`.
- [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Défini sur le nœud racine `tree` et sur les nœuds `group` parents de `treeitem`, pour indiquer si la vue arborescente est développée (`true`) ou réduite (`false`).
- [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Défini à `true` ou `false`, indique qu'un `treeitem` est sélectionnable et s'il est actuellement sélectionné.
- [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Défini à `true` ou `false`, indique que le `treeitem` peut être coché et s'il l'est actuellement.

### Interactions au clavier

Pour une arborescence verticale (orientation par défaut)&nbsp;:

<table>
  <tr>
    <td><kbd>Flèche vers la droite</kbd></td>
    <td>
      <ul>
        <li>Si la sélection est sur un nœud fermé, ouvre le nœud&nbsp;; la sélection ne bouge pas.</li>
        <li>Si la sélection est sur un nœud ouvert, déplace la sélection sur le premier enfant.</li>
        <li>Si la sélection est sur un nœud final (sans enfant), ne fait rien.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><kbd>Flèche vers la gauche</kbd></td>
    <td>
      <ul>
        <li>Si la sélection est sur un nœud ouvert, ferme le nœud.</li>
        <li>Si la sélection est sur un nœud enfant qui est aussi un nœud final ou fermé, déplace la sélection sur le parent.</li>
        <li>Si la sélection est sur une arborescence fermée, ne fait rien.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><kbd>Flèche vers le bas</kbd></td>
    <td>Déplace la sélection sur le nœud suivant sélectionnable, sans ouvrir ni fermer de nœud.</td>
  </tr>
  <tr>
    <td><kbd>Flèche vers le haut</kbd></td>
    <td>Déplace la sélection sur le nœud précédent sélectionnable, sans ouvrir ni fermer de nœud.</td>
  </tr>
  <tr>
    <td><kbd>Début</kbd></td>
    <td>Déplace la sélection sur le premier nœud de l'arborescence, sans ouvrir ni fermer de nœud.</td>
  </tr>
  <tr>
    <td><kbd>Fin</kbd></td>
    <td>Déplace la sélection sur le dernier nœud sélectionnable, sans ouvrir le nœud.</td>
  </tr>
  <tr>
    <td><kbd>Entrée</kbd></td>
    <td>Effectue l'action par défaut sur le nœud sélectionné. Pour les nœuds parents, ouvre ou ferme le nœud. Dans les arborescences à sélection unique, si le nœud n'a pas d'enfant, sélectionne le nœud si ce n'est pas déjà le cas (action par défaut).</td>
  </tr>
  <tr>
    <td>Taper un caractère*</td>
    <td>
      <ul>
        <li>La sélection se déplace sur le nœud suivant dont le nom commence par le caractère tapé.</li>
        <li>Si plusieurs caractères sont saisis rapidement, la sélection se déplace sur le nœud dont le nom commence par la chaîne saisie.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><kbd>*</kbd> (optionnel)</td>
    <td>Développe tous les nœuds frères au même niveau que le nœud courant.</td>
  </tr>
</table>

\* La recherche rapide (saisie semi-automatique) est recommandée pour toutes les arborescences, surtout si elles comportent plus de 7 nœuds racines.

## Interactions clavier pour la sélection multiple

Il existe deux modèles d'interaction pour les arborescences à sélection multiple&nbsp;: vous pouvez exiger que l'utilisateur·ice maintienne une touche de modification (<kbd>Maj</kbd> ou <kbd>Ctrl</kbd>) lors de la navigation pour ne pas perdre l'état de sélection, mais le modèle qui ne nécessite pas de maintenir une touche est recommandé.

#### Modèle recommandé pour la sélection multiple

<table>
  <tr>
    <td><kbd>Espace</kbd></td>
    <td>Active ou désactive l'état sélectionné du nœud ayant la sélection.</td>
  </tr>
  <tr>
    <td><kbd>Maj + Flèche vers le bas</kbd> (optionnel)</td>
    <td>Déplace la sélection sur le nœud suivant et active/désactive son état sélectionné.</td>
  </tr>
  <tr>
    <td><kbd>Maj + Flèche vers le haut</kbd> (optionnel)</td>
    <td>Déplace la sélection sur le nœud précédent et active/désactive son état sélectionné.</td>
  </tr>
  <tr>
    <td><kbd>Maj + Espace</kbd> (optionnel)</td>
    <td>Sélectionne les nœuds contigus du dernier nœud sélectionné jusqu'au nœud courant.</td>
  </tr>
  <tr>
    <td><kbd>Ctrl + Maj + Début</kbd> (optionnel)</td>
    <td>Sélectionne le nœud ayant la sélection et tous les nœuds jusqu'au premier. Optionnellement, déplace la sélection sur le premier nœud.</td>
  </tr>
  <tr>
    <td><kbd>Ctrl + Maj + Fin</kbd> (optionnel)</td>
    <td>Sélectionne le nœud ayant la sélection et tous les nœuds jusqu'au dernier. Optionnellement, déplace la sélection sur le dernier nœud.</td>
  </tr>
  <tr>
    <td><kbd>Ctrl + A</kbd> (optionnel)</td>
    <td>Sélectionne tous les nœuds de l'arborescence. Optionnellement, si tous les nœuds sont sélectionnés, cette touche peut aussi tout désélectionner.</td>
  </tr>
</table>

## Exemples

Voici comment baliser une liste de répertoires de cours de développement web sous forme de vue arborescente&nbsp;:

```html
<div>
  <h3 id="treeLabel">Parcours d'apprentissage développeur·euse</h3>
  <ul role="tree" aria-labelledby="treeLabel">
    <li role="treeitem" aria-expanded="true">
      <span>Web</span>
      <ul role="group">
        <li role="treeitem" aria-expanded="false">
          <span>Langages</span>
          <ul role="group">
            <li role="treeitem" aria-expanded="false">
              <span>HTML</span>
              <ul role="group">
                <li role="treeitem">Structure du document</li>
                <li role="treeitem">Éléments d'en-tête</li>
                <li role="treeitem">Éléments sémantiques</li>
                <li role="treeitem">Attributs</li>
                <li role="treeitem">Formulaires web</li>
              </ul>
            </li>
            <li role="treeitem">CSS</li>
            <li role="treeitem">JavaScript</li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Accessibilité</span>
          <ul role="group">
            <li role="treeitem" aria-label="accessibility object model">AOM</li>
            <li role="treeitem">WCAG</li>
            <li role="treeitem">ARIA</li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Performance web</span>
          <ul role="group">
            <li role="treeitem">Temps de chargement</li>
          </ul>
        </li>
        <li role="treeitem">API</li>
      </ul>
    </li>
  </ul>
</div>
```

Ce balisage fournit la sémantique d'une vue arborescente, mais pas l'interactivité. Celle-ci doit être ajoutée en JavaScript.

Si les éléments de l'arborescence ne sont pas sélectionnables par défaut, JavaScript peut être utilisé pour ajouter [`tabIndex="-1"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) à tous les `treeitem` sauf celui qui doit recevoir la sélection lors de l'entrée dans l'arborescence, qui doit avoir `tabIndex="0"`.

Toutes les fonctionnalités clavier décrites dans la section «&nbsp;Interactions au clavier&nbsp;» ainsi que les événements de pointeur doivent être programmés, y compris la gestion de la sélection, la navigation dans l'arborescence, le développement/réduction des nœuds parents et la gestion de la sélection.

Si l'arborescence comporte plus de 7 éléments, il est recommandé d'inclure la recherche rapide (saisie semi-automatique).

## Spécifications

{{Specifications}}
