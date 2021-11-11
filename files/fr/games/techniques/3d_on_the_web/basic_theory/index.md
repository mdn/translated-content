---
title: Explication des bases théoriques de la 3D
slug: Games/Techniques/3D_on_the_web/Basic_theory
tags:
  - 3D
  - Bases
  - Images
  - Lumières
  - Textures
  - fragment
  - vertex
translation_of: Games/Techniques/3D_on_the_web/Basic_theory
---
<div>{{GamesSidebar}}</div><p>  {{IncludeSubnav("/fr/docs/Jeux")}}</p>

<p>Cet article explique l'ensemble des bases théoriques utiles à connaître lorsque vous commencez à travailler avec la 3D.</p>

<h2 id="Système_de_coordonnées">Système de coordonnées</h2>

<p>La 3D est principalement basée sur la représentation de formes 3D dans l'espace, avec un système de coordonnées utilisé pour calculer leurs positions.</p>

<p><img src="mdn-games-3d-coordinate-system.png"></p>

<p>WebGL utilise le système de coordonnées de droite — l'axe x pointe vers la droite, l'axe y vers le haut et l'axe z dans la profondeur, comme shématisé ci-dessus.</p>

<h2 id="Objets">Objets</h2>

<p>Differents types d'objets sont construits en utilisant les sommets. Un Sommet (Vertex) est un point dans l'espace ayant sa propre position 3D dans le système de coordonnées et souvent quelques informations supplémentaires qui le définissent. Chaque sommet est décrit par ces attributs :</p>

<ul>
 <li><strong>Position </strong>: L'identifie dans un espace 3D (<code>x</code>, <code>y</code>, <code>z</code>).</li>
 <li><strong>Color </strong><em>(Couleur)</em><strong> </strong>: Prend une valeur RVBA (R, V et B pour le Rouge, Vert et Bleu, A (alpha) pour l'opacité — toutes les valeurs comprises entre 0.0 et 1.0)</li>
 <li><strong>Normal : </strong> Une manière de décrire la direction à laquelle fait face le sommet.</li>
 <li><strong>Texture </strong>: Une image 2D que le sommet peut utiliser pour décorer la surface dont il fait partie à la place d'une simple couleur.</li>
</ul>

<p>Vous pouvez faire de la géométrie en utilisant ces informations — voici l'exemple d'un cube :</p>

<p><img alt="Cube" src="mdn-games-3d-cube.png"></p>

<p>Une face de la forme donnée est un plan entre des sommets. Par exemple, un cube a 8 différents sommets (points dans l'espace) et 6 différentes faces, chacune construite à partir de 4 sommets. Une norme définit de quelle manière la face est orientée. De plus, en connectant les points, on crée les arêtes du cube.La géométrie est basée sur les sommets et les faces, où le matériau est une texture, utilisant une couleur ou une image. Si l'on connecte la géométrie avec le matériau, on obtient une maille (mesh)</p>

<h2 id="Rendu_des_tuyaux_(pipeline)">Rendu des tuyaux (<em>pipeline</em>)</h2>

<p>Le rendu des tuyaux est un procédé avec lequel les images sont préparées et affichées sur l'écran. Les graphismes utilisant les rendus de tuyaux prennent des objets 3D construits à partir de primitives décrites à l'aide de sommets, les transforment, calculent les fragments, et les affichent sur un écran 2D en tant que pixels.</p>

<p><img alt="Rendering pipeline" src="mdn-games-3d-rendering-pipeline.png"></p>

<p>Terminologie utilisée dans le diagramme ci-dessus :</p>

<ul>
 <li>Une <strong>Primitive </strong>: Une source pour le tuyau — construite à partir de sommets et peut être un triangle, un point ou une ligne.</li>
 <li>Un <strong>Fragment </strong>: Une projection 3D d'un pixel, qui a les mêmes attributs qu'un pixel.</li>
 <li>Un <strong>Pixel </strong>: Un point sur l'écran arrangé sur une grille 2D, qui prend une couleur RVBA.</li>
</ul>

<p>Le traitement des sommets et des fragments est programmable — vous pouvez <a href="/fr/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders">écrire vos propres shaders</a> qui manipulent le rendu.</p>

<h2 id="Traitement_de_sommet">Traitement de sommet</h2>

<p>Le traitement de sommet consiste à combiner les informations à propos de chaque sommet dans des primitives et de définir leurs coordonnées dans l'espace 3D pour le spectateur. C'est comme prendre une photo de la scène donnée que vous avez préparée — vous devez placer les objets en premier, configurer la caméra, et prendre la photo.</p>

<p><img src="mdn-games-3d-vertex-processing.png"></p>

<p>Il y a 4 étapes dans ce traitement : la première implique d'arranger les objets dans le monde, elle est appelée la <strong>transformation du modèle</strong>. Ensuite, il y a la <strong>transformation de la vue</strong>, qui prend soin de positionner et de régler l'orientation de la caméra dans l'espace 3D. La caméra a 3 paramètres — position, direction et orientation — qui doivent être définis pour la scène nouvellement créée.</p>

<p><img alt="Camera" src="mdn-games-3d-camera.png"></p>

<p>La <strong>transformation de la projection</strong> (aussi appelée transformation de la perspective) définit ensuite les réglages de la caméra. Elle définit ce qui peut être vu par la caméra — la configuration inclut le champ de vision, le ratio d'aspect, et éventuellement les plans proches et éloignés. Lisez le <a href="/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js#Camera">paragraphe sur la Caméra</a> dans l'article de Three.js pour en savoir plus.</p>

<p><img src="mdn-games-3d-camera-settings.png"></p>

<p>La dernière étape est la transformation de la fenêtre, qui implique la production de tout pour la prochaine étape dans le rendu du tuyau.</p>

<h2 id="Rastérisation">Rastérisation</h2>

<p>La rastérisation convertit les primitives (des sommets reliés) à un ensemble de fragments.</p>

<p><img src="mdn-games-3d-rasterization.png"></p>

<p>Ces fragments — qui sont des projections 3D de pixels 2D — sont alignés sur la grille de pixels, donc éventuellement ils peuvent être affichés comme des pixels sur un écran 2D durant la phase de fusion du résultat.</p>

<h2 id="Traitement_de_fragment">Traitement de fragment</h2>

<p>Le traitement de fragment se concentre sur les textures et les lumières — il calcule les couleurs finales à partir des paramètres donnés.</p>

<p><img src="mdn-games-3d-fragment-processing.png"></p>

<h3 id="Textures">Textures</h3>

<p>Les textures sont des images 2D utilisées dans l'espace 3D pour faire que les objets rendent mieux et paraissent plus réalistes. Les textures sont combinées à partir de simples éléments de texture appelés texels, de la même manière que les images sont combinées à partir de pixels. Appliquer des textures sur des objets durant le traitement des fragments, vous permet de l'ajuster en lui donnant une enveloppe ou des filtres si nécessaire.</p>

<p>L'habillage de texture permet de répéter l'image 2D autour de l'objet 3D. Le filtrage de texture est appliqué lorsque la résolution d'origine ou l'image de texture est différente du fragment affiché  —  elle sera réduite ou agrandie en conséquence.</p>

<h3 id="Lumières">Lumières</h3>

<p>Les couleurs que nous voyons sur l'écran sont le résultat d'une source de lumière intéragissant avec la couleur à la surface des matériaux des objets. La lumière peut être absorbée ou réfléchie. Le <strong>modèle de lumière Phong</strong> standard implémenté dans WebGL a 4 types de base de lumière :</p>

<ul>
 <li><strong>Diffuse </strong><em>(diffusion) </em>: Une lumière directionnelle distante, comme le Soleil.</li>
 <li><strong>Specular </strong><em>(Particulier)</em> : Un point de lumière, comme un bulle de lumière dans une pièce ou un flash.</li>
 <li><strong>Ambient </strong><em>(Ambiant)</em><strong> </strong>: Une lumière constante appliquée à tous les objets dans la scène.</li>
 <li><strong>Emissive </strong><em>(Émission)</em> : La lumière émise directement par un objet.</li>
</ul>

<h2 id="Fusion_de_sortie">Fusion de sortie</h2>

<p>Durant l'étape de manipulation du résultat, tous les fragments des primitives de l'espace 3D sont transformés sur une grille de pixels 2D qui est ensuite affichée sur l'écran.<img src="mdn-games-3d-output-merging.png"></p>

<p>Durant la fusion de sortie, quelques traitements sont aussi appliqués pour ignorer de l'information qui n'est pas utile — par exemple, les paramètres des objets qui sont à l'extérieur de l'écran ou derrière d'autres, et par conséquent non visibles, ne sont pas calculés.</p>

<ul>
</ul>

<h2 id="Conclusion">Conclusion</h2>

<p>Maintenant vous connaissez les bases de la théorie derrière la manipulation 3D, si vous voulez passer à la pratique et voir quelques démonstrations en action, continuez avec les tutoriels ci-dessous :</p>

<ul>
 <li><a href="/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js">Construction d'une démo de base avec Three.js</a></li>
 <li><a href="/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js">Construction d'une démo de base avec Babylon.js</a></li>
 <li><a href="/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas">Construction d'une démo de base avec PlayCanvas</a></li>
 <li><a href="/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame">Construction d'une démo de base avec</a><a href="/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame"> A-Frame</a></li>
</ul>

<p>Allez-y et faites quelques expémentations 3D sympas par vous-même !</p>
