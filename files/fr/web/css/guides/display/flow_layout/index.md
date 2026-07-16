---
title: Disposition du flux CSS
short-title: Disposition du flux
slug: Web/CSS/Guides/Display/Flow_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le _flux normal_ ou la disposition du flux (<i lang="en">flow layout</i> en anglais), est la façon dont les éléments de bloc et les éléments en ligne sont affichés sur une page avant que des modifications ne soient apportées à leur disposition. Le flux est essentiellement un ensemble d'éléments qui fonctionnent tous ensemble et se connaissent dans votre mise en page. Une fois qu'un élément est retiré du _flux_, il fonctionne de manière indépendante.

Dans le flux normal, les éléments **{{Glossary("Inline-level_content", "en ligne")}}** s'affichent dans la direction en ligne, c'est-à-dire dans la direction dans laquelle les mots sont affichés dans une phrase selon le [mode d'écriture](/fr/docs/Web/CSS/Guides/Writing_modes) du document. Les éléments **{{Glossary("Block/CSS", "de bloc")}}** s'affichent les uns après les autres, comme le font les paragraphes dans le mode d'écriture de ce document. En anglais, par conséquent, les éléments en ligne s'affichent les uns après les autres, en commençant par la gauche, et les éléments de bloc commencent en haut et descendent sur la page.

## Exemple simple

Dans l'exemple suivant, on peut voir des boîtes de bloc et des boîtes en ligne. Les deux éléments correspondants aux paragraphes avec des bordures vertes sont des éléments de bloc. Ces deux éléments s'affichent l'un en dessous de l'autre.

La première phrase contient également un élément {{HTMLElement("span")}} avec un arrière-plan bleu. C'est un élément en ligne qui s'affiche donc en incise de la phrase.

```html hidden live-sample___normal-flow
<div class="boite">
  <p>
    Une nuit de <span>novembre</span> de l'année 1782, selon l'histoire, deux
    frères étaient assis près de leur feu d'hiver dans la petite ville française
    d'Annonay, regardant les volutes de fumée grise s'élever de l'âtre et se
    courber dans la large cheminée. Leurs noms étaient Stephen et Joseph
    Montgolfier, ils étaient papetiers de métier, et étaient connus pour
    posséder des esprits réfléchis et un profond intérêt pour toutes les
    connaissances scientifiques et les nouvelles découvertes.
  </p>
  <p>
    Avant cette nuit—une nuit mémorable, comme elle allait le prouver—des
    centaines de millions de personnes avaient regardé les volutes de fumée
    s'élever de leurs feux sans en tirer une inspiration particulière.
  </p>
</div>
```

```css hidden live-sample___normal-flow
body {
  font: 1.2em sans-serif;
}

p {
  border: 2px solid green;
}
span {
  background-color: lightblue;
}
```

{{EmbedLiveSample("normal-flow", "", 250)}}

## Voir aussi

- [Disposition de bloc et en ligne dans le flux normal](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Être ou non dans le flux](/fr/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)
- [Explications sur les contextes de formatage](/fr/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Disposition du flux et modes d'écriture](/fr/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Disposition du flux et dépassements](/fr/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
