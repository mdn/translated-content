---
title: Couche supérieure (Top layer)
slug: Glossary/Top_layer
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La **couche supérieure** (<i lang="en">top layer</i> en anglais) est une couche spécifique qui s'étend sur toute la largeur et la hauteur de la zone d'affichage (<i lang="en">viewport</i> en anglais) et qui se place au-dessus de toutes les autres couches affichées dans un document web. Elle est créée par le navigateur pour contenir les éléments devant apparaître au-dessus de tout le contenu de la page.

Les éléments placés dans la couche supérieure génèrent un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context), tout comme leurs pseudo-éléments {{CSSxRef("::backdrop")}} associés.

Les éléments qui apparaissent dans la couche supérieure incluent&nbsp;:

- Les éléments en plein écran, c'est-à-dire les éléments affichés en mode plein écran suite à un appel réussi à {{DOMxRef("Element.requestFullscreen()")}}.
- Les éléments HTML {{HTMLElement("dialog")}} affichés comme modaux via un appel réussi à {{DOMxRef("HTMLDialogElement.showModal()")}}.
- Les éléments de fenêtres contextuelles affichées via un appel réussi à {{DOMxRef("HTMLElement.showPopover()")}}.

Certains navigateurs, comme Chrome, affichent les éléments placés dans la couche supérieure dans une entrée spéciale de l'arbre DOM. Par exemple&nbsp;:

![Un élément dans la couche supérieure, tel qu'affiché dans les outils de développement de Chrome](top_layer_devtools.png)

Notez que la couche supérieure est un concept interne au navigateur et ne peut pas être manipulée directement depuis le code. Vous pouvez cibler les éléments placés dans la couche supérieure avec CSS et JavaScript, mais vous ne pouvez pas cibler la couche supérieure elle-même.

## Voir aussi

- [Le contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- L'élément HTML {{HTMLElement("dialog")}} et l'interface {{DOMxRef("HTMLDialogElement")}}
- [L'API Popover](/fr/docs/Web/API/Popover_API)
- La pseudo-classe CSS {{CSSxRef(":fullscreen")}}
