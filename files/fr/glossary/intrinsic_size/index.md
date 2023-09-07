---
title: Taille intrinsèque
slug: Glossary/Intrinsic_Size
---

En CSS, la _taille intrinsèque_ d'un élément est la taille qu'il aurait en fonction de son contenu, si aucun facteur externe ne lui était appliqué. Par exemple, les éléments en ligne sont dimensionnés de manière intrinsèque : la `largeur`, la `hauteur`, la marge et le remplissage vertical n'ont aucun impact, contrairement à la marge et au remplissage horizontal.

La manière dont les tailles intrinsèques sont calculées est définie dans la [Spécification de dimensionnement intrinsèque et extrinsèque du CSS](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes).

Le dimensionnement intrinsèque prend en compte la taille `min-content` et `max-content` d'un élément. Pour le texte, la taille du `min-content` serait le fait que le texte soit aussi petit que possible dans le sens linéaire sans provoquer de débordement, en faisant autant d'enveloppement souple que possible. Pour une boîte contenant une chaîne de texte, la taille du `min-content` serait définie par le mot le plus long. La valeur du mot-clé de `min-content` pour la propriété {{cssxref("width")}} dimensionnera un élément en fonction de la taille de `min-content`.

La taille de `max-content` est l'inverse — dans le cas du texte, le texte s'afficherait aussi large que possible, sans enveloppement souple, même si un débordement était provoqué. La valeur du mot clé `max-content` expose ce comportement.

Pour les images, la taille intrinsèque a la même signification — c'est la taille avec laquelle une image serait affichée si aucun CSS n'était appliqué pour modifier le rendu. Par défaut, les images sont supposées avoir une densité de "1x" pixels (1 pixel de périphérique = 1 pixel CSS) et donc la taille intrinsèque est simplement la hauteur et la largeur du pixel. La taille et la résolution intrinsèques de l'image peuvent être explicitement spécifiées dans les données {{Glossary("EXIF")}}. La densité de pixels intrinsèque peut également être définie pour les images à l'aide de l'attribut [`srcset`](/fr/docs/Web/HTML/Element/img#srcset) (notez que si les deux mécanismes sont utilisés, la valeur `srcset` est appliquée "par-dessus" la valeur EXIF).
