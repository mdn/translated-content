---
title: Gestion du dépassement en multi-colonnes
slug: Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol
tags:
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol
original_slug: Web/CSS/CSS_Columns/Gestion_dépassement_multi-colonnes
---
{{CSSRef}}

Dans ce guide, nous verrons comment gérer le dépassement avec une disposition multi-colonnes. Le dépassement peut avoir lieu pour chaque boîte de colonne ou lorsqu'il y a plus de contenu que de place dans le conteneur.

## Le dépassement dans les boîtes des colonnes

On peut avoir un dépassement lorsqu'un objet est plus grand que la taille de la boîte de la colonne. Cela peut notamment se produire lorsqu'on a une image dans une colonne et que la largeur de cette image est supérieure à la valeur de `column-width` ou à la largeur des colonnes selon le nombre indiqué avec `column-count`.

Dans cette situation, le contenu dépasse sur la prochaine colonne et n'est pas rogné à la boîte de la colonne. Voici un exemple qui suit et une illustration du résultat attendu (les navigateurs actuels pouvant afficher un résultat différent).

{{EmbedGHLiveSample("css-examples/multicol/overflow/image.html", '100%', 800)}}

![](image-overflow-multicol.png)

Si on veut une image qui se réduise à la boîte de la colonne, on pourra utiliser les solutions pour les images adaptatives et `max-width: 100%` pour y parvenir.

{{EmbedGHLiveSample("css-examples/multicol/overflow/image-max-width.html", '100%', 800)}}

## Plus de colonnes que d'espace disponible

La façon dont les colonnes dépassent dépend du contexte dans lequel le document est affiché : est-ce un média fragmenté (pour l'impression par exemple) ou un média continu (une page web par exemple) ?

Pour un média fragmenté, une fois qu'un fragment (ex. une page) est rempli de colonnes, les colonnes suivantes seront ajoutées sur le fragment suivant (ex. une nouvelle page) et ainsi de suite. Pour les médias continus, les colonnes dépasseront selon l'axe en ligne. Pour le Web, cela signifie qu'on aura une barre de défilement horizontal.

Dans l'exemple qui suit, on peut observer un tel dépassement. Le conteneur multi-colonnes possède une hauteur fixée et il y a plus de texte que d'espace nécessaire pour créer des colonnes. On a alors des colonnes créées en dehors du conteneur.

{{EmbedGHLiveSample("css-examples/multicol/overflow/overflow-inline.html", '100%', 800)}}

> **Note :** On peut souhaiter qu'une future version de la spécification permette de préciser la direction selon laquelle les colonnes qui dépassent sont affichées et ainsi pouvoir dépasser dans la direction de bloc (et non uniquement selon l'axe en ligne).

## Utiliser les requêtes média verticales

Lorsque les colonnes sont plus hautes que la zone d'affichage (_viewport_), par défaut, le lecteur devra faire défiler le contenu verticalement pour tout voir, dégradant ainsi l'ergonomie. Pour éviter ce problème, on peut n'appliquer les colonnes que lorsque la hauteur est suffisante.

Dans l'exemple qui suit, on utilise par exemple une requête média avec `min-height` pour vérifier la hauteur avant d'appliquer les propriétés relatives aux colonnes.

{{EmbedGHLiveSample("css-examples/multicol/overflow/min-height.html", '100%', 800)}}

Dans le dernier guide de cette série, nous verrons [comment la disposition multi-colonnes interagit avec le module de spécification Fragmentation](/fr/docs/Web/CSS/CSS_Columns/Handling_content_breaks_in_multicol) et nous permet de contrôler la façon dont le contenu est coupé entre les colonnes.
