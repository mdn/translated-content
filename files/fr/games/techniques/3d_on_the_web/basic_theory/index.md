---
title: Explication des bases théoriques de la 3D
slug: Games/Techniques/3D_on_the_web/Basic_theory
---

{{GamesSidebar}}

Cet article explique l'ensemble des bases théoriques utiles à connaître lorsque vous commencez à travailler avec la 3D.

## Système de coordonnées

La 3D est principalement basée sur la représentation de formes 3D dans l'espace, avec un système de coordonnées utilisé pour calculer leurs positions.

![](mdn-games-3d-coordinate-system.png)

WebGL utilise le système de coordonnées de droite — l'axe x pointe vers la droite, l'axe y vers le haut et l'axe z dans la profondeur, comme shématisé ci-dessus.

## Objets

Differents types d'objets sont construits en utilisant les sommets. Un Sommet (Vertex) est un point dans l'espace ayant sa propre position 3D dans le système de coordonnées et souvent quelques informations supplémentaires qui le définissent. Chaque sommet est décrit par ces attributs :

- **Position** : L'identifie dans un espace 3D (`x`, `y`, `z`).
- **Color** (Couleur) : Prend une valeur RVBA (R, V et B pour le Rouge, Vert et Bleu, A (alpha) pour l'opacité — toutes les valeurs comprises entre 0.0 et 1.0)
- **Normal :** Une manière de décrire la direction à laquelle fait face le sommet.
- **Texture** : Une image 2D que le sommet peut utiliser pour décorer la surface dont il fait partie à la place d'une simple couleur.

Vous pouvez faire de la géométrie en utilisant ces informations — voici l'exemple d'un cube :

![Cube](mdn-games-3d-cube.png)

Une face de la forme donnée est un plan entre des sommets. Par exemple, un cube a 8 différents sommets (points dans l'espace) et 6 différentes faces, chacune construite à partir de 4 sommets. Une norme définit de quelle manière la face est orientée. De plus, en connectant les points, on crée les arêtes du cube.La géométrie est basée sur les sommets et les faces, où le matériau est une texture, utilisant une couleur ou une image. Si l'on connecte la géométrie avec le matériau, on obtient une maille (mesh)

## Rendu des tuyaux (_pipeline_)

Le rendu des tuyaux est un procédé avec lequel les images sont préparées et affichées sur l'écran. Les graphismes utilisant les rendus de tuyaux prennent des objets 3D construits à partir de primitives décrites à l'aide de sommets, les transforment, calculent les fragments, et les affichent sur un écran 2D en tant que pixels.

![Rendering pipeline](mdn-games-3d-rendering-pipeline.png)

Terminologie utilisée dans le diagramme ci-dessus :

- Une **Primitive** : Une source pour le tuyau — construite à partir de sommets et peut être un triangle, un point ou une ligne.
- Un **Fragment** : Une projection 3D d'un pixel, qui a les mêmes attributs qu'un pixel.
- Un **Pixel** : Un point sur l'écran arrangé sur une grille 2D, qui prend une couleur RVBA.

Le traitement des sommets et des fragments est programmable — vous pouvez [écrire vos propres shaders](/fr/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) qui manipulent le rendu.

## Traitement de sommet

Le traitement de sommet consiste à combiner les informations à propos de chaque sommet dans des primitives et de définir leurs coordonnées dans l'espace 3D pour le spectateur. C'est comme prendre une photo de la scène donnée que vous avez préparée — vous devez placer les objets en premier, configurer la caméra, et prendre la photo.

![](mdn-games-3d-vertex-processing.png)

Il y a 4 étapes dans ce traitement : la première implique d'arranger les objets dans le monde, elle est appelée la **transformation du modèle**. Ensuite, il y a la **transformation de la vue**, qui prend soin de positionner et de régler l'orientation de la caméra dans l'espace 3D. La caméra a 3 paramètres — position, direction et orientation — qui doivent être définis pour la scène nouvellement créée.

![Camera](mdn-games-3d-camera.png)

La **transformation de la projection** (aussi appelée transformation de la perspective) définit ensuite les réglages de la caméra. Elle définit ce qui peut être vu par la caméra — la configuration inclut le champ de vision, le ratio d'aspect, et éventuellement les plans proches et éloignés. Lisez le [paragraphe sur la Caméra](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js#Camera) dans l'article de Three.js pour en savoir plus.

![](mdn-games-3d-camera-settings.png)

La dernière étape est la transformation de la fenêtre, qui implique la production de tout pour la prochaine étape dans le rendu du tuyau.

## Rastérisation

La rastérisation convertit les primitives (des sommets reliés) à un ensemble de fragments.

![](mdn-games-3d-rasterization.png)

Ces fragments — qui sont des projections 3D de pixels 2D — sont alignés sur la grille de pixels, donc éventuellement ils peuvent être affichés comme des pixels sur un écran 2D durant la phase de fusion du résultat.

## Traitement de fragment

Le traitement de fragment se concentre sur les textures et les lumières — il calcule les couleurs finales à partir des paramètres donnés.

![](mdn-games-3d-fragment-processing.png)

### Textures

Les textures sont des images 2D utilisées dans l'espace 3D pour faire que les objets rendent mieux et paraissent plus réalistes. Les textures sont combinées à partir de simples éléments de texture appelés texels, de la même manière que les images sont combinées à partir de pixels. Appliquer des textures sur des objets durant le traitement des fragments, vous permet de l'ajuster en lui donnant une enveloppe ou des filtres si nécessaire.

L'habillage de texture permet de répéter l'image 2D autour de l'objet 3D. Le filtrage de texture est appliqué lorsque la résolution d'origine ou l'image de texture est différente du fragment affiché — elle sera réduite ou agrandie en conséquence.

### Lumières

Les couleurs que nous voyons sur l'écran sont le résultat d'une source de lumière intéragissant avec la couleur à la surface des matériaux des objets. La lumière peut être absorbée ou réfléchie. Le **modèle de lumière Phong** standard implémenté dans WebGL a 4 types de base de lumière :

- **Diffuse** _(diffusion)_ : Une lumière directionnelle distante, comme le Soleil.
- **Specular** _(Particulier)_ : Un point de lumière, comme un bulle de lumière dans une pièce ou un flash.
- **Ambient** _(Ambiant)_ : Une lumière constante appliquée à tous les objets dans la scène.
- **Emissive** _(Émission)_ : La lumière émise directement par un objet.

## Fusion de sortie

Durant l'étape de manipulation du résultat, tous les fragments des primitives de l'espace 3D sont transformés sur une grille de pixels 2D qui est ensuite affichée sur l'écran.![](mdn-games-3d-output-merging.png)

Durant la fusion de sortie, quelques traitements sont aussi appliqués pour ignorer de l'information qui n'est pas utile — par exemple, les paramètres des objets qui sont à l'extérieur de l'écran ou derrière d'autres, et par conséquent non visibles, ne sont pas calculés.

## Conclusion

Maintenant vous connaissez les bases de la théorie derrière la manipulation 3D, si vous voulez passer à la pratique et voir quelques démonstrations en action, continuez avec les tutoriels ci-dessous :

- [Construction d'une démo de base avec Three.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Construction d'une démo de base avec Babylon.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Construction d'une démo de base avec PlayCanvas](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Construction d'une démo de base avec A-Frame](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)

Allez-y et faites quelques expémentations 3D sympas par vous-même !
