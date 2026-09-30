---
title: Variables d'environnement CSS
short-title: Variables d'environnement
slug: Web/CSS/Guides/Environment_variables
l10n:
  sourceCommit: de1ffe9d19ce381ed182255fcc8fe0517029cfa2
---

Le module des **variables d'environnement CSS** définit le concept de variables d'environnement et la fonction {{CSSxRef("env()")}}. Les variables d'environnement fonctionnent de manière similaire aux [propriétés personnalisées](/fr/docs/Web/CSS/Reference/Properties/--*) et à la fonction {{CSSxRef("var()")}}, sauf qu'elles sont définies globalement&nbsp;; ce sont des variables globales accessibles dans tout le document. Ce sont des valeurs fournies par l'agent utilisateur, par le navigateur ou le système d'exploitation, que vous pouvez utiliser avec la fonction {{CSSxRef("env()")}}, ce qui vous permet d'adapter vos styles à l'appareil ou au contexte de l'utilisateur·ice.

Les variables d'environnement fournissent des valeurs qui peuvent être utilisées sur la page en fonction des informations auxquelles l'agent utilisateur a accès, telles que la taille de la barre de titre, du clavier dynamique et des marges de la zone sûre. Les marges de la zone sûre définissent un rectangle qui est garanti d'être visible sur les écrans non rectangulaires, en fonction de sa distance par rapport aux bords de la zone d'affichage. Vous pouvez inclure les tailles de l'agent utilisateur dans vos styles, ce qui vous permet de modifier la disposition du contenu essentiel en fonction de l'espace disponible à l'intérieur du rectangle de la zone sûre, à côté d'un clavier dynamique visible ou à proximité d'une barre de titre visible.

## Référence

### Fonctions

- {{CSSxRef("env()")}}

### Types de donnée

- [`<environment-variable-name>`](/fr/docs/Web/CSS/Guides/Environment_variables/Using#variables_denvironnement_définies_par_le_navigateur)

## Guides

- [Utiliser les variables d'environnement](/fr/docs/Web/CSS/Guides/Environment_variables/Using)
  - : Un aperçu de ce que sont les variables d'environnement, des variables d'environnement définies par le navigateur et de la manière d'utiliser la fonction `env()`.

## Concepts associés

- Le module des [requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries)
- [Les propriétés personnalisées](/fr/docs/Web/CSS/Reference/Properties/--*)
- {{CSSxRef("var()")}}
- L'interface API {{DOMxRef("VirtualKeyboard")}}
- Le champ de manifeste [`display_override`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) de [l'API Window Controls Overlay](/fr/docs/Web/API/Window_Controls_Overlay_API) et l'interface {{DOMxRef("WindowControlsOverlay")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le guide des [fonctions de valeur CSS](/fr/docs/Web/CSS/Reference/Values/Functions)
- Le module des [API de propriétés et valeurs CSS](/fr/docs/Web/CSS/Guides/Properties_and_values_API)
- Le module des [propriétés personnalisées CSS pour les variables en cascade](/fr/docs/Web/CSS/Guides/Cascading_variables)
