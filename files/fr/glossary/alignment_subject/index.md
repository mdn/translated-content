---
title: Alignment subject
slug: Glossary/Alignment_Subject
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Dans le [module d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment), le **sujet d'alignement** est l'élément (ou les éléments) qui sont alignés à l'intérieur du {{Glossary("alignment container", "conteneur d'alignement")}} par la propriété.

Pour {{CSSxRef("justify-self")}} et {{CSSxRef("align-self")}}, le sujet d'alignement est la boîte de marge de la boîte sur laquelle la propriété est définie, en utilisant le mode d'écriture de cette boîte. Pour {{CSSxRef("justify-content")}} et {{CSSxRef("align-content")}}, le mode d'écriture de la boîte est également utilisé.

La définition du sujet d'alignement dépend du mode de disposition utilisé.

- Conteneurs de blocs (y compris les cellules de tableau)
  - : L'ensemble du contenu du bloc comme une seule unité.
- Conteneurs multicolonnes
  - : Les boîtes de colonne, avec tout espacement inséré entre les boîtes de colonne ajouté aux intervalles de colonne concernés.
- Conteneurs flex
  - : Pour {{CSSxRef("justify-content")}}, les éléments flex de chaque ligne flex. Pour {{CSSxRef("align-content")}}, les lignes flex. À noter, cela n'a d'effet que sur les conteneurs flex multi-lignes.
- Conteneurs grille
  - : Les pistes de grille dans l'axe approprié, avec tout espacement inséré entre les pistes ajouté aux gouttières concernées. Les gouttières fusionnées sont traitées comme une seule opportunité d'insertion d'espace.

## Voir aussi

- [Module d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- Terme associé du glossaire&nbsp;:
  - {{Glossary("alignment container", "conteneur d'alignement")}}
