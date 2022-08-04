---
title: Écrire et référencer une entrée de glossaire
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
translation_of: MDN/Contribute/Howto/Write_a_new_entry_in_the_Glossary
original_slug: MDN/Contribute/Howto/Write_a_new_entry_in_the_Glossary
---
{{MDNSidebar}}

Dans cet article, nous allons voir comment ajouter des entrées au [glossaire MDN Web Docs](/fr/docs/Glossary) et comment y faire référence. Nous verrons également quelques règles quant à la structure et au contenu des entrées du glossaire. Le glossaire fournit des définitions pour tous les termes, abréviations, acronymes et tout le jargon que vous pourrez rencontrer en consultant le contenu de MDN à propos du Web et du développement web.

Le glossaire ne sera potentiellement jamais complet, car le Web est en perpétuelle évolution. En contribuant à l'édition de nouvelles entrées ou en corrigeant les erreurs, vous pouvez nous aider à mettre à jour le glossaire et à améliorer son contenu.

Contribuer au glossaire est une façon simple de rendre le Web plus compréhensible pour tout le monde. Il n'est pas nécessaire d'avoir des compétences techniques approfondies pour le faire. Les entrées du glossaire sont conçues pour être simples et concises.

> **Note :** La suite de cet article explique comment créer une entrée du glossaire. Toutefois, la structure du contenu de MDN utilise le contenu anglophone comme référence. Aussi, toute page devra d'abord être créée en anglais avant d'être localisée en français. Vous pouvez également aider à la traduction du glossaire en français, voir [Localiser MDN](/fr/docs/MDN/Contribute/Localize).

## Comment rédiger une entrée

Tout d'abord, choisissez un sujet pour lequel vous souhaiteriez écrire une entrée dans le glossaire.

Si vous avez une idée pour une nouvelle entrée, [créez une nouvelle page](https://github.com/mdn/content#adding-a-new-document) pour ce terme, sous [la page du glossaire](https://github.com/mdn/content/tree/main/files/en-us/glossary).

### Écrire un résumé

Pour toute page du glossaire, le premier paragraphe consiste en une description simple et concise du terme. Idéalement, ce paragraphe ne devrait pas dépasser deux phrases. Assurez-vous que toute personne qui lit cette description peut immédiatement comprendre le terme qui est défini.

> **Note :** Veillez à ne pas copier-coller de définitions ou de contenus provenant d'autres pages sur Internet, notamment depuis Wikipédia (les versions de sa licence sont plus restreintes et incompatibles avec celle de MDN). Le contenu de votre entrée de glossaire doit être original.

#### Rédiger une bonne entrée dans le glossaire

Ajoutez quelques paragraphes si nécessaire, mais attention au risque d'écrire un article complet. Un article complet est intéressant mais n'a pas sa place dans le glossaire. Si vous n'êtes pas certaine ou certain de l'emplacement de votre page, n'hésitez pas à [nous contacter pour en discuter](/fr/docs/MDN/Contribute/Getting_started#step_4_ask_for_help).

Voici quelques lignes directrices à garder à l'esprit pour écrire une bonne entrée de glossaire&nbsp;:

- Lorsque vous utilisez des termes ou des abréviations dans la description du terme, veillez à créer les liens correspondants. Généralement, cela consiste à créer des liens vers les autres pages du glossaire.
- Utilisez les termes associés appropriés avec des liens si cela peut être effectué sans que l'article soit difficile à suivre. Avoir un réseau de pages liées entre elles avec des liens utiles sera plus simple à utiliser.
- Pensez aux mots-clés que vous utiliseriez lors d'une recherche pour trouver cette page. Essayez alors de les utiliser sur cette page (sans non plus que l'entrée devienne incohérente, longue ou difficilement lisible).

### Ajouter des liens

Une entrée du glossaire devrait toujours finir par une section _En savoir plus_. Dans cette section, on devrait trouver des liens qui aident la lectrice ou le lecteur à aller plus loin en découvrant plus de détails, ou en apprenant à utiliser la technologie associée.

Une bonne pratique consiste à organiser ces liens en trois groupes&nbsp;:

- Connaissances générales
  - : Ces liens fournissent des informations généralistes à propos du terme ou du sujet. Il peut par exemple s'agir d'un lien vers une page [Wikipédia](https://www.wikipedia.org/) correspondante.
- Référence technique
  - : Ces liens fournissent des ressources avec des informations techniques détaillées, sur MDN ou d'autres sites.
- En apprendre plus
  - : Ce sont des liens vers des tutoriels, des exercices, des exemples ou tout autre contenu éducatif qui aide à l'apprentissage.

## Gérer les homonymies et ambiguïtés

Certains termes peuvent avoir plusieurs significations selon le contexte. Pour résoudre ces ambiguïtés, on suivra les règles suivantes&nbsp;:

- La page principale du terme doit être une page de désambiguïsation contenant la macro [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs).
- Les sous-pages de cette page principale définissent le terme dans les différents contextes.

Prenons un exemple pour illustrer ce cas. Le terme _signature_ peut avoir plusieurs sens, dans au moins deux contextes&nbsp;: la sécurité cryptographique d'une part, et les fonctions d'autre part.

1. La page [Glossary/Signature](/fr/docs/Glossary/Signature) constitue la page de désambiguïsation avec la macro [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs).
2. La page [Glossary/Signature/Security](/fr/docs/Glossary/Signature/Security) est celle qui définit le terme dans le contexte de la sécurité.
3. La page [Glossary/Signature/Function](/fr/docs/Glossary/Signature/Function) est celle qui définit la signature d'une fonction.
