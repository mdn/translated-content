---
title: Les données en WebGL
slug: Web/API/WebGL_API/Data
tags:
  - 3D
  - API WebGL
  - Attributs
  - BesoinDExemple
  - BesoinDeContenu
  - Graphismes
  - Graphismes 3D
  - Guide
  - Intermédiaire
  - Uniformes
  - Variants
  - WebGL
  - dessin
translation_of: Web/API/WebGL_API/Data
original_slug: Web/API/WebGL_API/Données
---
<div>{{WebGLSidebar}}{{draft}}</div>

<p>Les programmes shaders ont accès à trois types de stockage de données, chacun d'entre eux ayant un usage particulier. Chaque type de variable est accessible par l'un des types de programmes de shader ou par les deux (en fonction du type de stockage de données), et éventuellement, par le code JavaScript du site, suivant le type de variable particulier.</p>

<h2 id="Types_de_données_GLSL">Types de données GLSL</h2>

<p>&lt;&lt;documenter les types de base, les vecteurs, etc. ; voir <a href="https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)">Data Type (GLSL)</a>  sur le wiki WebGL de Khronos &gt;&gt;</p>

<h2 id="Variables_GLSL">Variables GLSL</h2>

<p>Il existe trois types de stockage "variable" ou de stockage de données dans GLSL, chacun ayant son propre but et ses propres cas d'utilisation : <strong>{{anch("Attributes", "attributes")}}</strong>, <strong>{{anch("Varyings", "varyings")}}</strong>, et <strong>{{anch("Uniforms", "uniforms")}}</strong>.</p>

<h3 id="Attributes">Attributes</h3>

<p>Les <strong>attributes</strong> sont des variables GLSL qui ne sont disponibles que pour le shader de sommet (en tant que variables) et le code JavaScript. Les attributs sont généralement utilisés pour stocker des informations de couleur, des coordonnées de texture et toutes les autres données calculées ou récupérées qui doivent être partagées entre le code JavaScript et le shader de sommet.</p>

<p>&lt;&lt;add how to use them&gt;&gt;</p>

<h3 id="Varyings">Varyings</h3>

<p>Les <strong>varyings</strong> sont des variables déclarées par le shader de sommet et elle sont utilisées pour transmettre des données du shader de sommet au shader de fragment. Ceci est communément utilisé pour partager un sommet {{interwiki ("wikipedia", "Normal_ (géométrie)", "vecteur normal")}} après qu'il a été calculé par le shader de sommet.</p>

<p>&lt;&lt;how to use&gt;&gt;</p>

<h3 id="Uniforms">Uniforms</h3>

<p>Les <strong>uniforms</strong> sont définis par le code JavaScript et sont disponibles à la fois pour le shader de sommet et pour celui de fragment. Ils sont utilisés pour fournir des valeurs qui seront les mêmes pour tout ce qui est dessiné dans le cadre, telles que les positions et les intensités d'éclairage, la transformation globale et les détails de la perspective, et ainsi de suite.</p>

<p>&lt;&lt;add details&gt;&gt;</p>

<h2 id="Tampons">Tampons</h2>

<p>&lt;&lt;add information&gt;&gt;</p>

<h2 id="Textures">Textures</h2>

<p>&lt;&lt;add information&gt;&gt;</p>
