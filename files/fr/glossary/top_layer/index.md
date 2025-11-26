---
title: Couche supérieure (Top layer)
slug: Glossary/Top_layer
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La **couche supérieure** (<i lang="en">top layer</i> en anglais) est une couche spécifique qui s'étend sur toute la largeur et la hauteur de la zone d'affichage (<i lang="en">viewport</i> en anglais) et qui se place au-dessus de toutes les autres couches affichées dans un document web. Elle est créée par le navigateur pour contenir les éléments devant apparaître au-dessus de tout le contenu de la page.

Les éléments placés dans la couche supérieure génèrent un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context), tout comme leurs pseudo-éléments {{cssxref("::backdrop")}} associés.

Les éléments qui apparaissent dans la couche supérieure incluent&nbsp;:

- Les éléments en plein écran, c'est-à-dire les éléments affichés en mode plein écran suite à un appel réussi à {{domxref("Element.requestFullscreen()")}}.
- Les éléments {{htmlelement("dialog")}} affichés comme modaux via un appel réussi à {{domxref("HTMLDialogElement.showModal()")}}.
- Les éléments popover affichés via un appel réussi à {{domxref("HTMLElement.showPopover()")}}.

Certains navigateurs, comme Chrome, affichent les éléments placés dans la couche supérieure dans une entrée spéciale de l'arbre DOM. Par exemple&nbsp;:

![Un élément dans la couche supérieure, tel qu'affiché dans les outils de développement de Chrome](top_layer_devtools.png)

Notez que la couche supérieure est un concept interne au navigateur et ne peut pas être manipulée directement depuis le code. Vous pouvez cibler les éléments placés dans la couche supérieure avec CSS et JavaScript, mais vous ne pouvez pas cibler la couche supérieure elle-même.

## Voir aussi

- [Le contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- L'[API Plein écran](/fr/docs/Web/API/Fullscreen_API)
- L'élément {{htmlelement("dialog")}} et l'interface {{domxref("HTMLDialogElement")}}
- L'[API Popover](/fr/docs/Web/API/Popover_API)
- a pseudo-classe {{CSSXref(":fullscreen")}}
