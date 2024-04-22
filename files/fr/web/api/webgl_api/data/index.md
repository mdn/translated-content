---
title: Les données en WebGL
slug: Web/API/WebGL_API/Data
---

{{DefaultAPISidebar("WebGL")}}

Les programmes shaders ont accès à trois types de stockage de données, chacun d'entre eux ayant un usage particulier. Chaque type de variable est accessible par l'un des types de programmes de shader ou par les deux (en fonction du type de stockage de données), et éventuellement, par le code JavaScript du site, suivant le type de variable particulier.

## Types de données GLSL

<\<documenter les types de base, les vecteurs, etc. ; voir [Data Type (GLSL)](<https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)>) sur le wiki WebGL de Khronos >>

## Variables GLSL

Il existe trois types de stockage "variable" ou de stockage de données dans GLSL, chacun ayant son propre but et ses propres cas d'utilisation : **[attributes](#attributes)**, **[varyings](#varyings)**, et **[uniforms](#uniforms)**.

### Attributes

Les **attributes** sont des variables GLSL qui ne sont disponibles que pour le shader de sommet (en tant que variables) et le code JavaScript. Les attributs sont généralement utilisés pour stocker des informations de couleur, des coordonnées de texture et toutes les autres données calculées ou récupérées qui doivent être partagées entre le code JavaScript et le shader de sommet.

<\<add how to use them>>

### Varyings

Les **varyings** sont des variables déclarées par le shader de sommet et elle sont utilisées pour transmettre des données du shader de sommet au shader de fragment. Ceci est communément utilisé pour partager un sommet [normal](<https://fr.wikipedia.org/wiki/Normale_(géométrie)>) après qu'il a été calculé par le shader de sommet.

<\<how to use>>

### Uniforms

Les **uniforms** sont définis par le code JavaScript et sont disponibles à la fois pour le shader de sommet et pour celui de fragment. Ils sont utilisés pour fournir des valeurs qui seront les mêmes pour tout ce qui est dessiné dans le cadre, telles que les positions et les intensités d'éclairage, la transformation globale et les détails de la perspective, et ainsi de suite.

<\<add details>>

## Tampons

<\<add information>>

## Textures

<\<add information>>
