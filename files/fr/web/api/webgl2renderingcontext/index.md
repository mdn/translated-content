---
title: WebGL2RenderingContext
slug: Web/API/WebGL2RenderingContext
tags:
  - API
  - Experimental
  - Reference
  - WebGL
  - WebGL2
translation_of: Web/API/WebGL2RenderingContext
---
{{APIRef("WebGL")}} {{SeeCompatTable}}

L'interface **WebGL2RenderingContext** fournit le contexte de rendu OpenGL ES 3.0 pour la surface de dessin d'un élément HTML {{HTMLElement("canvas")}}.

Pour obtenir un objet de cette interface, appelez {{domxref ("HTMLCanvasElement.getContext()", "getContext()")}} sur un élément `<canvas>`, en fournissant "webgl2" comme argument :

```js
var canevas = document.getElementById('monCanevas');
var gl = canevas.getContext('webgl2');
```

> **Note :** WebGL 2 est une extension de WebGL 1. L'interface `WebGL2RenderingContext` implémente tous les membres de l'interface {{domxref("WebGLRenderingContext")}}. Certaines méthodes du contexte WebGL 1 peuvent accepter des valeurs supplémentaires lorsqu'elles sont utilisées dans un contexte WebGL 2. Vous trouverez cette information sur les pages de référence WebGL 1.

Le [didacticiel WebGL](/fr-FR/docs/Web/API/WebGL_API/Tutorial) contient plus d'informations, d'exemples et de ressources sur la façon de démarrer avec WebGL.

## Constantes

Voir la page des [constantes WebGL](/fr-FR/docs/Web/API/WebGL_API/Constants).

## Informations d'état

- {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}
  - : Retourne la valeur indexée pour la `cible` donnée.

## Tampons

- {{domxref("WebGL2RenderingContext.bufferData()")}}
  - : Initialise et crée le magasin de données de l'objet tampon.
- {{domxref("WebGL2RenderingContext.bufferSubData()")}}
  - : Met à jour un sous-ensemble d'un magasin de données d'un objet tampon.
- {{domxref("WebGL2RenderingContext.copyBufferSubData()")}}
  - : Copie une partie des données d'un tampon vers un autre tampon.
- {{domxref("WebGL2RenderingContext.getBufferSubData()")}}
  - : Lit les données d'un tampon et les écrit dans un {{jsxref ("ArrayBuffer")}} ou un {{jsxref ("SharedArrayBuffer")}}.

## Tampons d'image

- {{domxref("WebGL2RenderingContext.blitFramebuffer()")}}
  - : Transfère un bloc de pixels du tampon d'image lu vers le tampon d'image de dessin.
- {{domxref("WebGL2RenderingContext.framebufferTextureLayer()")}}
  - : Attache une seule couche de texture à un tampon d'image.
- {{domxref("WebGL2RenderingContext.invalidateFramebuffer()")}}
  - : Invalide le contenu des éléments joints dans un tampon d'image.
- {{domxref("WebGL2RenderingContext.invalidateSubFramebuffer()")}}
  - : Invalide le contenu des éléments joints dans un tampon d'image.
- {{domxref("WebGL2RenderingContext.readBuffer()")}}
  - : Sélectionne un tampon de couleur comme source pour les pixels.

## Tampons de rendu

- {{domxref("WebGL2RenderingContext.getInternalformatParameter()")}}
  - : Retourne des informations sur le support, dépendant de l'implémentation, des formats internes.
- {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}}
  - : Crée et initialise le magasin de données d'un objet tampon de rendu et permet de d'indiquer le nombre d'échantillons à utiliser.

## Textures

- {{domxref("WebGL2RenderingContext.texStorage2D()")}}
  - : Spécifie tous les niveaux d'un stockage de texture bidimensionnelle.
- {{domxref("WebGL2RenderingContext.texStorage3D()")}}
  - : Spécifie tous les niveaux d'une texture tridimensionnelle ou d'une texture de tableau bidimensionnelle.
- {{domxref("WebGL2RenderingContext.texImage3D()")}}
  - : Spécifie une image de texture tridimensionnelle.
- {{domxref("WebGL2RenderingContext.texSubImage3D()")}}
  - : Spécifie un sous-rectangle de la texture 3D en cours.
- {{domxref("WebGL2RenderingContext.copyTexSubImage3D()")}}
  - : Copie des pixels du tampon WebGLFrame en cours dans une sous-image de texture 3D existante.
- {{domxref("WebGL2RenderingContext.compressedTexImage3D()")}}
  - : Spécifie une image de texture tridimensionnelle dans un format compressé.
- {{domxref("WebGL2RenderingContext.compressedTexSubImage3D()")}}
  - : Spécifie un sous-rectangle tridimensionnel pour une image de texture dans un format compressé.

## Programmes et shaders

- {{domxref("WebGL2RenderingContext.getFragDataLocation()")}}
  - : Retourne la liaison des numéros de couleur aux variables de sortie varying définies par l'utilisateur.

## Uniforms et attributs

- {{domxref("WebGL2RenderingContext.uniform()", "WebGL2RenderingContext.uniform[1234][uif][v]()")}}
  - : Méthodes spécifiant les valeurs des variables uniform.
- {{domxref("WebGL2RenderingContext.uniformMatrix()", "WebGL2RenderingContext.uniformMatrix[234]x[234]fv()")}}
  - : Méthodes spécifiant les valeurs matricielles pour les variables uniform.
- {{domxref("WebGL2RenderingContext.vertexAttribI()", "WebGL2RenderingContext.vertexAttribI4[u]i[v]()")}}
  - : Méthodes spécifiant les valeurs entières des attributs de sommet génériques.
- {{domxref("WebGL2RenderingContext.vertexAttribIPointer()")}}
  - : Spécifie les formats et les emplacements des données entières des attributs de sommet dans un tableau d'attributs de sommet.

## Tampons de dessin

- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
  - : Modifie la vitesse à laquelle les attributs de sommet génériques progressent lors du rendu de plusieurs instances de primitives avec {{domxref ("WebGL2RenderingContext.drawArraysInstanced()", "gl.drawArraysInstanced()")}} et {{domxref("WebGL2RenderingContext.drawElementsInstanced()" , "gl.drawElementsInstanced()")}}.
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
  - : Affiche des primitives à partir des données d'un tableau. En outre, elle peut exécuter plusieurs instances de la plage d'éléments.
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
  - : Affiche des primitives à partir des données d'un tableau. En outre, elle peut exécuter plusieurs instances d'un ensemble d'éléments.
- {{domxref("WebGL2RenderingContext.drawRangeElements()")}}
  - : Affiche des primitives à partir des données d'un tableau dans la plage donnée.
- {{domxref("WebGL2RenderingContext.drawBuffers()")}}
  - : Spécifie une liste de tampons de couleur dans lesquels dessiner.
- {{domxref("WebGL2RenderingContext.clearBuffer()", "WebGL2RenderingContext.clearBuffer[fiuv]()")}}
  - : Efface les tampons du tampon d'image actuellement lié.

## Objets requêtes

Méthodes pour travailler avec les objets {{domxref("WebGLQuery")}}.

- {{domxref("WebGL2RenderingContext.createQuery()")}}
  - : Crée un nouvel objet {{domxref("WebGLQuery")}}.
- {{domxref("WebGL2RenderingContext.deleteQuery()")}}
  - : Supprime l'objet {{domxref("WebGLQuery")}} donné.
- {{domxref("WebGL2RenderingContext.isQuery()")}}
  - : Retourne `true` si l'objet donné est un objet {{domxref("WebGLQuery")}} valide.
- {{domxref("WebGL2RenderingContext.beginQuery()")}}
  - : Commence une requête asynchrone.
- {{domxref("WebGL2RenderingContext.endQuery()")}}
  - : Marque la fin d'une requête asynchrone.
- {{domxref("WebGL2RenderingContext.getQuery()")}}
  - : Retourne un objet {{domxref("WebGLQuery")}} pour la cible donnée.
- {{domxref("WebGL2RenderingContext.getQueryParameter()")}}
  - : Retourne des informations sur une requête.

## Objets échantilloneurs

- {{domxref("WebGL2RenderingContext.createSampler()")}}
  - : Crée un nouvel objet {{domxref("WebGLSampler")}}.
- {{domxref("WebGL2RenderingContext.deleteSampler()")}}
  - : Supprime l'objet {{domxref("WebGLSampler")}} donné.
- {{domxref("WebGL2RenderingContext.bindSampler()")}}
  - : Lie le {{domxref("WebGLSampler")}} donné à une unité de texture.
- {{domxref("WebGL2RenderingContext.isSampler()")}}
  - : Retourne `true` si l'objet donné est un objet {{domxref("WebGLSampler")}} valide.
- {{domxref("WebGL2RenderingContext.samplerParameter()", "WebGL2RenderingContext.samplerParameter[if]()")}}
  - : Définit les paramètres de l'échantillonneur.
- {{domxref("WebGL2RenderingContext.getSamplerParameter()")}}
  - : Retourne les informations de paramètres de l'échantillonneur.

## Objets sync

- {{domxref("WebGL2RenderingContext.fenceSync()")}}
  - : Crée un nouvel objet {{domxref("WebGLSync")}} et l'insère dans le flux de commandes GL.
- {{domxref("WebGL2RenderingContext.isSync()")}}
  - : Retourne `true` si l'objet transmis est un objet {{domxref("WebGLSync")}} valide.
- {{domxref("WebGL2RenderingContext.deleteSync()")}}
  - : Supprime l'objet {{domxref("WebGLSync")}} donné.
- {{domxref("WebGL2RenderingContext.clientWaitSync()")}}
  - : Bloque et attend qu'un objet {{domxref ("WebGLSync")}} reçoive un signal ou que l'expiration du délai donné soit reçue.
- {{domxref("WebGL2RenderingContext.waitSync()")}}
  - : Retourne immédiatement, mais attend le serveur GL jusqu'à ce que l'objet {{domxref("WebGLSync")}} donné reçoive un signal.
- {{domxref("WebGL2RenderingContext.getSyncParameter()")}}
  - : Retourne les informations de paramètres d'un objet {{domxref("WebGLSync")}}.

## Retour de transformations

- {{domxref("WebGL2RenderingContext.createTransformFeedback()")}}
  - : Crée et initialise les objets {{domxref("WebGLTransformFeedback")}}.
- {{domxref("WebGL2RenderingContext.deleteTransformFeedback()")}}
  - : Supprime l'objet {{domxref ("WebGLTransformFeedback")}} donné.
- {{domxref("WebGL2RenderingContext.isTransformFeedback()")}}
  - : Retourne `true` si l'objet transmis est un objet {{domxref("WebGLTransformFeedback")}} valide.
- {{domxref("WebGL2RenderingContext.bindTransformFeedback()")}}
  - : Lie l'objet {{domxref("WebGLTransformFeedback")}} transmis à l'état GL en cours.
- {{domxref("WebGL2RenderingContext.beginTransformFeedback()")}}
  - : Démarre une opération de retour de transformations.
- {{domxref("WebGL2RenderingContext.endTransformFeedback()")}}
  - : Termine une opération de retour de transformations.
- {{domxref("WebGL2RenderingContext.transformFeedbackVaryings()")}}
  - : Indique les valeurs à enregistrer dans les tampons {{domxref("WebGLTransformFeedback")}}.
- {{domxref("WebGL2RenderingContext.getTransformFeedbackVarying()")}}
  - : Retourne des informations sur les variables varying à partir des tampons {{domxref("WebGLTransformFeedback")}}.
- {{domxref("WebGL2RenderingContext.pauseTransformFeedback()")}}
  - : Suspend une opération de retour de transformations.
- {{domxref("WebGL2RenderingContext.resumeTransformFeedback()")}}
  - : Reprend une opération de retour de transformations.

## Objets tampons uniforms

- {{domxref("WebGL2RenderingContext.bindBufferBase()")}}
  - : Lie le {{domxref("WebGLBuffer")}} donné au point de liaison donné (`cible`) à l'`indice` donné.
- {{domxref("WebGL2RenderingContext.bindBufferRange()")}}
  - : Lie une plage du {{domxref("WebGLBuffer")}} donné au point de liaison donné (`cible`) à l'`indice` donné.
- {{domxref("WebGL2RenderingContext.getUniformIndices()")}}
  - : Récupère les indices d'un certain nombre d'uniforms dans un {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getActiveUniforms()")}}
  - : Récupère des informations sur les uniforms actifs dans un {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getUniformBlockIndex()")}}
  - : Récupère l'indice d'un bloc uniform dans un {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getActiveUniformBlockParameter()")}}
  - : Récupère des informations d'un bloc uniform actif dans un {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getActiveUniformBlockName()")}}
  - : Récupère le nom du bloc uniform actif à l'indice donné dans un {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.uniformBlockBinding()")}}
  - : Affecte des points de liaison aux blocs uniforms actifs.

## Objets de tableaux de sommets

Méthodes pour travailler avec les objets {{domxref("WebGLVertexArrayObject")}} (VAO).

- {{domxref("WebGL2RenderingContext.createVertexArray()")}}
  - : Crée un nouveau {{domxref("WebGLVertexArrayObject")}}.
- {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
  - : Supprime le {{domxref("WebGLVertexArrayObject")}} donné.
- {{domxref("WebGL2RenderingContext.isVertexArray()")}}
  - : Retourne `true` si l'objet donné est un {{domxref ("WebGLVertexArrayObject")}} valide.
- {{domxref("WebGL2RenderingContext.bindVertexArray()")}}
  - : Lie le {{domxref ("WebGLVertexArrayObject")}} donné au tampon.

## Spécifications

| Spécification                                                                | Statut                   | Commentaire          |
| ---------------------------------------------------------------------------- | ------------------------ | -------------------- |
| {{SpecName('WebGL2', "#3.7", "WebGL2RenderingContext")}} | {{Spec2('WebGL2')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.WebGL2RenderingContext")}}

## Voir aussi

- {{domxref("HTMLCanvasElement")}}
- {{domxref("WebGLRenderingContext")}}
