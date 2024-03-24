---
title: Alignment subject
slug: Glossary/Alignment_Subject
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Dans le [CSS Box Alignment (alignement des boîtes en CSS)](/fr/docs/Web/CSS/CSS_box_alignment) l'**alignment subject** (le sujet de l'alignement) est la ou les choses alignées par la propriété.

Pour [justify-self](/fr/docs/Web/CSS/justify-self) et [align-self](/fr/docs/Web/CSS/align-self), l'**alignment subject** est la marge de la boite sur laquelle la propriété est définie, en utilisant le mode d'écriture de cette zone. Pour [justify-content](/fr/docs/Web/CSS/justify-content) et [align-content](/fr/docs/Web/CSS/align-content), le mode d'écriture de la boîte est également utilisé.

La définition du sujet de l'alignement dépend du mode de mise en page utilisé.

- Conteneurs de bloc (comprenant les cellules de tableau)
  - : L'ensemble du contenu du bloc en une seule unité.
- Conteneurs multi-colonne
  - : Les boites de colonne, avec tout espacement inséré entre les boites de colonne ajoutées aux espaces de colonne appropriés.
- Conteneurs flex
  - : Pour [justify-content](/fr/docs/Web/CSS/justify-content), les éléments flexibles dans chaque ligne de flexible.
    Pour [align-content](/fr/docs/Web/CSS/align-content), les lignes flexibles. Notez que cela n'a d'effet que sur les conteneurs flexibles multilignes.
- Conteneurs grid
  - : La grille suit l'axe approprié, avec tout espacement inséré entre les pistes ajoutées aux gouttières correspondantes. Les gouttières fusionnées sont traitées comme une seule opportunité d'insertion d'espace.

## Voir aussi

- Le module [CSS Box Alignment](/fr/docs/Web/CSS/CSS_box_alignment)
