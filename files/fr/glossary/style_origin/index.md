---
title: Origine de style
slug: Glossary/Style_origin
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En {{Glossary("CSS")}}, il existe trois catégories de sources pour les changements de style. Ces catégories sont appelées **origines de style**. Il s'agit de l'**origine de l'agent utilisateur**, de l'**origine de l'utilisateur·ice** et de l'**origine de l'auteur·ice**.

- Origine de l'agent utilisateur
  - : L'origine de l'agent utilisateur est l'origine du style composé des styles par défaut utilisés par le navigateur web de la personne qui consulte le site. Si aucun autre style n'est appliqué au contenu, les styles d'origine de l'agent utilisateur sont utilisés lors du rendu des éléments.
- Origine de l'utilisateur·ice
  - : L'origine de l'utilisateur·ice est l'origine du style contenant tout CSS que l'utilisateur·ice du navigateur web a ajouté. Ceux-ci peuvent provenir de l'ajout de styles à l'aide d'un outil de développement ou d'une extension de navigateur qui applique automatiquement des styles personnalisés au contenu, tels que [Stylus <sup>(angl.)</sup>](https://add0n.com/stylus.html) ou [Stylish <sup>(angl.)</sup>](https://userstyles.org/).
- Origine de l'auteur·ice
  - : L'origine de l'auteur·ice est l'origine du style qui contient tous les styles qui font partie du document, qu'ils soient intégrés dans le {{Glossary("HTML")}} ou chargés à partir d'un fichier de feuille de style externe.

Les origines de style sont utilisées pour déterminer où arrêter de revenir en arrière (ou de revenir en arrière) à travers la cascade de styles qui ont été appliqués à un élément lors de la suppression de styles, par exemple lors de l'utilisation de mots-clés {{CSSxRef("unset")}} ou {{CSSxRef("revert")}}.

## Voir aussi

- [Cascade et héritage CSS&nbsp;: origines en cascade <sup>(angl.)</sup>](https://drafts.csswg.org/css-cascade-4/#cascading-origins)
