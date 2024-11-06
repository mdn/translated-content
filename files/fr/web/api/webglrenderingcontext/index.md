---
title: WebGLRenderingContext
slug: Web/API/WebGLRenderingContext
---

{{APIRef("WebGL")}}

L'interface **`WebGLRenderingContext`** fournit une interface pour le contexte de rendu graphique OpenGL ES 2.0 de la surface de dessin fournie par un élément HTML [`<canvas>`](/fr/docs/Web/HTML/Element/canvas).

Pour obtenir un accès à un contexte WebGL pour le rendu graphique 2D et/ou 3D, on appellera [`getContext()`](/fr/docs/Web/API/HTMLCanvasElement/getContext) sur un élément `<canvas>` en fournissant la chaîne de caractères `webgl`&nbsp;:

```js
let canvas = document.getElementById("myCanvas");
let gl = canvas.getContext("webgl");
```

Une fois le contexte de rendu WebGL obtenu pour le canevas, on peut l'utiliser pour le rendu graphique d'objets à l'intérieur de ce canevas. [Le tutoriel WebGL](/fr/docs/Web/API/WebGL_API/Tutorial) contient de plus amples informations, exemples et ressources pour débuter avec WebGL.

Si vous avez besoin d'un contexte WebGL 2.0, voyez [`WebGL2RenderingContext`](/fr/docs/Web/API/WebGL2RenderingContext) qui permet d'utiliser une implémentation avec des graphismes OpenGL ES 3.0.

## Constantes

Voir la page sur [les constantes WebGL](/fr/docs/Web/API/WebGL_API/Constants).

## Le contexte WebGL

Les propriétés et méthodes suivantes fournissent des informations et fonctionnalités générales pour manipuler le contexte WebGL&nbsp;:

- [`WebGLRenderingContext.canvas`](/fr/docs/Web/API/WebGLRenderingContext/canvas)
  - : Une référence en lecture seule vers l'objet [`HTMLCanvasElement`](/fr/docs/Web/API/HTMLCanvasElement) correspondant. Peut valoir [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null) si le contexte n'est pas associé à un élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas).
- [`WebGLRenderingContext.commit()`](/fr/docs/Web/API/WebGLRenderingContext/commit) {{experimental_inline}}
  - : Pousse les <i lang="en">frames</i> sur l'élément [`HTMLCanvasElement`](/fr/docs/Web/API/HTMLCanvasElement), si le contexte n'est pas directement rattaché à un canevas donné.
- [`WebGLRenderingContext.drawingBufferWidth`](/fr/docs/Web/API/WebGLRenderingContext/drawingBufferWidth)
  - : La largeur, en lecture seule, du tampon de dessin courant. Celle-ci devrait correspondre à la largeur de l'élément canevas associé à ce contexte.
- [`WebGLRenderingContext.drawingBufferHeight`](/fr/docs/Web/API/WebGLRenderingContext/drawingBufferHeight)
  - : La hauteur, en lecture seule, du tampon de dessin courant. Celle-ci devrait correspondre à la hauteur de l'élément canevas associé à ce contexte.
- [`WebGLRenderingContext.getContextAttributes()`](/fr/docs/Web/API/WebGLRenderingContext/getContextAttributes)
  - : Renvoie un objet `WebGLContextAttributes` qui contient les paramètres de contextes réels. Peut renvoyer [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null) si le contexte est perdu.
- [`WebGLRenderingContext.isContextLost()`](/fr/docs/Web/API/WebGLRenderingContext/isContextLost)
  - : Renvoie `true` si le contexte est perdu et `false` sinon.
- [`WebGLRenderingContext.makeXRCompatible()`](/fr/docs/Web/API/WebGLRenderingContext/makeXRCompatible)
  - : S'assure que le contexte est compatible avec le matériel de réalité mixte, recréant si besoin le contexte avec une nouvelle configuration. Cette méthode peut être utilisée pour démarrer une application dont l'affichage commence en 2D puis passe ensuite dans un mode de réalité virtuelle ou augmentée.

## Vue et rognage

- [`WebGLRenderingContext.scissor()`](/fr/docs/Web/API/WebGLRenderingContext/scissor)
  - : Définit la boîte de découpe (<i lang="en">scissor box</i>).
- [`WebGLRenderingContext.viewport()`](/fr/docs/Web/API/WebGLRenderingContext/viewport)
  - : Définit la zone d'affichage (<i lang="en">viewport</i>).

## Informations sur l'état

- [`WebGLRenderingContext.activeTexture()`](/fr/docs/Web/API/WebGLRenderingContext/activeTexture)
  - : Sélectionne l'unité de texture active.
- [`WebGLRenderingContext.blendColor()`](/fr/docs/Web/API/WebGLRenderingContext/blendColor)
  - : Définit la source et la destination des facteurs de fusion.
- [`WebGLRenderingContext.blendEquation()`](/fr/docs/Web/API/WebGLRenderingContext/blendEquation)
  - : Définit l'équation de fusion RGB et l'équation de fusion alpha avec une seule équation.
- [`WebGLRenderingContext.blendEquationSeparate()`](/fr/docs/Web/API/WebGLRenderingContext/blendEquationSeparate)
  - : Définit l'équation de fusion RGB et l'équation de fusion alpha séparément.
- [`WebGLRenderingContext.blendFunc()`](/fr/docs/Web/API/WebGLRenderingContext/blendFunc)
  - : Definit la fonction utilisée pour l'arithmétique de la fusion des pixels.
- [`WebGLRenderingContext.blendFuncSeparate()`](/fr/docs/Web/API/WebGLRenderingContext/blendFuncSeparate)
  - : Definit séparément la fonction utilisée pour l'arithmétique de la fusion des pixels pour les composantes RGB d'une part et alpha d'autre part.
- [`WebGLRenderingContext.clearColor()`](/fr/docs/Web/API/WebGLRenderingContext/clearColor)
  - : Définit les valeurs de couleur utilisées lors du nettoyage des tampons de couleur.
- [`WebGLRenderingContext.clearDepth()`](/fr/docs/Web/API/WebGLRenderingContext/clearDepth)
  - : Définit la valeur de profondeur utilisée lors du nettoyage du tampon de profondeur.
- [`WebGLRenderingContext.clearStencil()`](/fr/docs/Web/API/WebGLRenderingContext/clearStencil)
  - : Définit la valeur du pochoir utilisée lors du nettoyage du tampon de pochoir.
- [`WebGLRenderingContext.colorMask()`](/fr/docs/Web/API/WebGLRenderingContext/colorMask)
  - : Définit les composantes de couleur à activer ou à désactiver lors du dessin ou du rendu dans un objet [`WebGLFramebuffer`](/fr/docs/Web/API/WebGLFramebuffer).
- [`WebGLRenderingContext.cullFace()`](/fr/docs/Web/API/WebGLRenderingContext/cullFace)
  - : Indique si les polygones masqués en face arrière ou en face avant sont coupés (voir [l'article Wikipédia sur <i lang="en">Back-face culling</i>](https://en.wikipedia.org/wiki/Back-face_culling)).
- [`WebGLRenderingContext.depthFunc()`](/fr/docs/Web/API/WebGLRenderingContext/depthFunc)
  - : Indique une fonction qui compare la profondeur du pixel à venir avec la valeur actuelle de profondeur sur le tampon.
- [`WebGLRenderingContext.depthMask()`](/fr/docs/Web/API/WebGLRenderingContext/depthMask)
  - : Indique si l'écriture sur le tampon de profondeur est activée ou désactivée.
- [`WebGLRenderingContext.depthRange()`](/fr/docs/Web/API/WebGLRenderingContext/depthRange)
  - : Indique la correspondance pour l'intervalle de profondeur entre les coordonnées normalisées de l'appareil et les coordonnées de la fenêtre ou de la zone d'affichage.
- [`WebGLRenderingContext.disable()`](/fr/docs/Web/API/WebGLRenderingContext/disable)
  - : Désactive les capacités spécifiques à WebGL pour ce contexte.
- [`WebGLRenderingContext.enable()`](/fr/docs/Web/API/WebGLRenderingContext/enable)
  - : Active les capacités spécifiques à WebGL pour ce contexte.
- [`WebGLRenderingContext.frontFace()`](/fr/docs/Web/API/WebGLRenderingContext/frontFace)
  - : Indique si les polygones font face vers l'avant ou vers l'arrière en indiquant une orientation d'enroulement.
- [`WebGLRenderingContext.getParameter()`](/fr/docs/Web/API/WebGLRenderingContext/getParameter)
  - : Renvoie une valeur pour le nom de paramètre passé en argument.
- [`WebGLRenderingContext.getError()`](/fr/docs/Web/API/WebGLRenderingContext/getError)
  - : Renvoie des informations sur l'erreur.
- [`WebGLRenderingContext.hint()`](/fr/docs/Web/API/WebGLRenderingContext/hint)
  - : Définit les indications pour certains comportements. L'interprétation de ces indications dépend de l'implémentation.
- [`WebGLRenderingContext.isEnabled()`](/fr/docs/Web/API/WebGLRenderingContext/isEnabled)
  - : Teste si une fonctionnalité WebGL donnée est activée ou non pour ce contexte.
- [`WebGLRenderingContext.lineWidth()`](/fr/docs/Web/API/WebGLRenderingContext/lineWidth)
  - : Définit la largeur des lignes pour les lignes matricielles.
- [`WebGLRenderingContext.pixelStorei()`](/fr/docs/Web/API/WebGLRenderingContext/pixelStorei)
  - : Définit le mode de stockage des pixels.
- [`WebGLRenderingContext.polygonOffset()`](/fr/docs/Web/API/WebGLRenderingContext/polygonOffset)
  - : Définit les facteurs d'échelle et les unités pour calculer les valeurs de profondeur.
- [`WebGLRenderingContext.sampleCoverage()`](/fr/docs/Web/API/WebGLRenderingContext/sampleCoverage)
  - : Définit les paramètres de couverture multi-échantillonnage pour les effets anti-crénelage.
- [`WebGLRenderingContext.stencilFunc()`](/fr/docs/Web/API/WebGLRenderingContext/stencilFunc)
  - : Définit la fonction et la valeur de référence pour les fonctions avant et arrière pour le test du pochoir.
- [`WebGLRenderingContext.stencilFuncSeparate()`](/fr/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate)
  - : Définit la fonction avant et/ou arrière et la valeur de référence pour le test du pochoir.
- [`WebGLRenderingContext.stencilMask()`](/fr/docs/Web/API/WebGLRenderingContext/stencilMask)
  - : Contrôle l'activation/la désactivation des modes d'écriture avant et arrière pour les bits individuels sur les plans du pochoir.
- [`WebGLRenderingContext.stencilMaskSeparate()`](/fr/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
  - : Contrôle l'activation/la désactivation des modes d'écriture avant et/ou arrière pour les bits individuels sur les plans du pochoir.
- [`WebGLRenderingContext.stencilOp()`](/fr/docs/Web/API/WebGLRenderingContext/stencilOp)
  - : Définit les actions de test du pochoir pour l'avant et pour l'arrière.
- [`WebGLRenderingContext.stencilOpSeparate()`](/fr/docs/Web/API/WebGLRenderingContext/stencilOpSeparate)
  - : Définit les actions de test du pochoir pour l'avant et/ou pour l'arrière.

## Tampons

- [`WebGLRenderingContext.bindBuffer()`](/fr/docs/Web/API/WebGLRenderingContext/bindBuffer)
  - : Lie un objet `WebGLBuffer` à une cible donnée.
- [`WebGLRenderingContext.bufferData()`](/fr/docs/Web/API/WebGLRenderingContext/bufferData)
  - : Met à jour les données du tampon.
- [`WebGLRenderingContext.bufferSubData()`](/fr/docs/Web/API/WebGLRenderingContext/bufferSubData)
  - : Met à jour les données du tampon à partir d'un décalage donné.
- [`WebGLRenderingContext.createBuffer()`](/fr/docs/Web/API/WebGLRenderingContext/createBuffer)
  - : Crée un objet `WebGLBuffer`.
- [`WebGLRenderingContext.deleteBuffer()`](/fr/docs/Web/API/WebGLRenderingContext/deleteBuffer)
  - : Supprime un objet `WebGLBuffer`.
- [`WebGLRenderingContext.getBufferParameter()`](/fr/docs/Web/API/WebGLRenderingContext/getBufferParameter)
  - : Renvoie des informations à propos du tampon.
- [`WebGLRenderingContext.isBuffer()`](/fr/docs/Web/API/WebGLRenderingContext/isBuffer)
  - : Renvoie un booléen indiquant si le tampon passé est valide.

## Tampons d'image (<i lang="en">framebuffers</i>)

- [`WebGLRenderingContext.bindFramebuffer()`](/fr/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
  - : Lie un objet `WebGLFrameBuffer` à une cible donnée.
- [`WebGLRenderingContext.checkFramebufferStatus()`](/fr/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus)
  - : Renvoie le statut du tampon d'image (<i lang="en">framebuffer</i>).
- [`WebGLRenderingContext.createFramebuffer()`](/fr/docs/Web/API/WebGLRenderingContext/createFramebuffer)
  - : Crée un objet `WebGLFrameBuffer`.
- [`WebGLRenderingContext.deleteFramebuffer()`](/fr/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
  - : Supprime un objet `WebGLFrameBuffer`.
- [`WebGLRenderingContext.framebufferRenderbuffer()`](/fr/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer)
  - : Attache un objet `WebGLRenderingBuffer` à un objet `WebGLFrameBuffer`.
- [`WebGLRenderingContext.framebufferTexture2D()`](/fr/docs/Web/API/WebGLRenderingContext/framebufferTexture2D)
  - : Attache une image de texture à un objet `WebGLFrameBuffer`.
- [`WebGLRenderingContext.getFramebufferAttachmentParameter()`](/fr/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter)
  - : Renvoie des informations à propos du tampon d'image (<i lang="en">framebuffer</i>).
- [`WebGLRenderingContext.isFramebuffer()`](/fr/docs/Web/API/WebGLRenderingContext/isFramebuffer)
  - : Renvoie un booléen indiquant si l'objet `WebGLFrameBuffer` passé est valide.
- [`WebGLRenderingContext.readPixels()`](/fr/docs/Web/API/WebGLRenderingContext/readPixels)
  - : Lit un bloc de pixels à partir du `WebGLFrameBuffer`.

## Tampons de rendu

- [`WebGLRenderingContext.bindRenderbuffer()`](/fr/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
  - : Lie un objet `WebGLRenderBuffer` à une cible donnée.
- [`WebGLRenderingContext.createRenderbuffer()`](/fr/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
  - : Crée un objet `WebGLRenderBuffer`.
- [`WebGLRenderingContext.deleteRenderbuffer()`](/fr/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
  - : Supprime un objet `WebGLRenderBuffer`.
- [`WebGLRenderingContext.getRenderbufferParameter()`](/fr/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter)
  - : Renvoie des informations à propos du tampon de rendu.
- [`WebGLRenderingContext.isRenderbuffer()`](/fr/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
  - : Renvoie un booléen indiquant si l'objet `WebGLRenderingBuffer` passé est valide.
- [`WebGLRenderingContext.renderbufferStorage()`](/fr/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
  - : Crée un magasin de données pour le tampon de rendu.

## Textures

- [`WebGLRenderingContext.bindTexture()`](/fr/docs/Web/API/WebGLRenderingContext/bindTexture)
  - : Lie un objet `WebGLTexture` à une cible donnée.
- [`WebGLRenderingContext.compressedTexImage2D()`](/fr/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
  - : Indique une image de texture 2D dans un format compressé.
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/fr/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
  - : Indique une sous-image de texture 2D dans un format compressé.
- [`WebGLRenderingContext.copyTexImage2D()`](/fr/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
  - : Copie une image de texture 2D.
- [`WebGLRenderingContext.copyTexSubImage2D()`](/fr/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D)
  - : Copie une sous-image de texture 2D.
- [`WebGLRenderingContext.createTexture()`](/fr/docs/Web/API/WebGLRenderingContext/createTexture)
  - : Crée un objet `WebGLTexture`.
- [`WebGLRenderingContext.deleteTexture()`](/fr/docs/Web/API/WebGLRenderingContext/deleteTexture)
  - : Supprime un objet `WebGLTexture`.
- [`WebGLRenderingContext.generateMipmap()`](/fr/docs/Web/API/WebGLRenderingContext/generateMipmap)
  - : Génère un ensemble de mipmaps pour un objet `WebGLTexture`.
- [`WebGLRenderingContext.getTexParameter()`](/fr/docs/Web/API/WebGLRenderingContext/getTexParameter)
  - : Renvoie des informations à propos de la texture.
- [`WebGLRenderingContext.isTexture()`](/fr/docs/Web/API/WebGLRenderingContext/isTexture)
  - : Renvoie un booléen qui indique sur l'objet `WebGLTexture` passé est valide.
- [`WebGLRenderingContext.texImage2D()`](/fr/docs/Web/API/WebGLRenderingContext/texImage2D)
  - : Indique une image de texture 2D.
- [`WebGLRenderingContext.texSubImage2D()`](/fr/docs/Web/API/WebGLRenderingContext/texSubImage2D)
  - : Met à jour le sous-rectangle de l'objet `WebGLTexture` courant.
- [`WebGLRenderingContext.texParameterf()`](/fr/docs/Web/API/WebGLRenderingContext/texParameter)
  - : Définit les paramètres de texture.
- [`WebGLRenderingContext.texParameteri()`](/fr/docs/Web/API/WebGLRenderingContext/texParameter)
  - : Définit les paramètres de texture.

## Programmes et <i lang="en">shaders</i>

- [`WebGLRenderingContext.attachShader()`](/fr/docs/Web/API/WebGLRenderingContext/attachShader)
  - : Attache un `WebGLShader` à un `WebGLProgram`.
- [`WebGLRenderingContext.bindAttribLocation()`](/fr/docs/Web/API/WebGLRenderingContext/bindAttribLocation)
  - : Lie un index de sommet générique à une variable d'attribut nommée.
- [`WebGLRenderingContext.compileShader()`](/fr/docs/Web/API/WebGLRenderingContext/compileShader)
  - : Compile un `WebGLShader`.
- [`WebGLRenderingContext.createProgram()`](/fr/docs/Web/API/WebGLRenderingContext/createProgram)
  - : Crée un `WebGLProgram`.
- [`WebGLRenderingContext.createShader()`](/fr/docs/Web/API/WebGLRenderingContext/createShader)
  - : Crée un `WebGLShader`.
- [`WebGLRenderingContext.deleteProgram()`](/fr/docs/Web/API/WebGLRenderingContext/deleteProgram)
  - : Supprime un `WebGLProgram`.
- [`WebGLRenderingContext.deleteShader()`](/fr/docs/Web/API/WebGLRenderingContext/deleteShader)
  - : Supprime un `WebGLShader`.
- [`WebGLRenderingContext.detachShader()`](/fr/docs/Web/API/WebGLRenderingContext/detachShader)
  - : Détache un `WebGLShader`.
- [`WebGLRenderingContext.getAttachedShaders()`](/fr/docs/Web/API/WebGLRenderingContext/getAttachedShaders)
  - : Renvoie une liste d'objets `WebGLShader` attachés à un `WebGLProgram`.
- [`WebGLRenderingContext.getProgramParameter()`](/fr/docs/Web/API/WebGLRenderingContext/getProgramParameter)
  - : Renvoie des informations à propos du programme.
- [`WebGLRenderingContext.getProgramInfoLog()`](/fr/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
  - : Renvoie le journal d'informations pour un objet `WebGLProgram`.
- [`WebGLRenderingContext.getShaderParameter()`](/fr/docs/Web/API/WebGLRenderingContext/getShaderParameter)
  - : Renvoie des informations à propos du <i lang="en">shader</i>.
- [`WebGLRenderingContext.getShaderPrecisionFormat()`](/fr/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat)
  - : Renvoie un objet `WebGLShaderPrecisionFormat` décrivant la précision pour le format numérique du <i lang="en">shader</i>.
- [`WebGLRenderingContext.getShaderInfoLog()`](/fr/docs/Web/API/WebGLRenderingContext/getShaderInfoLog)
  - : Renvoie le journal d'informations pour un objet `WebGLShader`.
- [`WebGLRenderingContext.getShaderSource()`](/fr/docs/Web/API/WebGLRenderingContext/getShaderSource)
  - : Renvoie le code source d'un `WebGLShader` sous la forme d'une chaîne de caractères.
- [`WebGLRenderingContext.isProgram()`](/fr/docs/Web/API/WebGLRenderingContext/isProgram)
  - : Renvoie un booléen indiquant si l'objet `WebGLProgram` passé est valide.
- [`WebGLRenderingContext.isShader()`](/fr/docs/Web/API/WebGLRenderingContext/isShader)
  - : Renvoie un booléen indiquant si l'objet `WebGLShader` passé est valide.
- [`WebGLRenderingContext.linkProgram()`](/fr/docs/Web/API/WebGLRenderingContext/linkProgram)
  - : Effectue les liaisons pour l'objet `WebGLProgram` passé.
- [`WebGLRenderingContext.shaderSource()`](/fr/docs/Web/API/WebGLRenderingContext/shaderSource)
  - : Définit le code source d'un `WebGLShader`.
- [`WebGLRenderingContext.useProgram()`](/fr/docs/Web/API/WebGLRenderingContext/useProgram)
  - : Utilise le `WebGLProgram` indiqué comme partie de l'état de rendu courant.
- [`WebGLRenderingContext.validateProgram()`](/fr/docs/Web/API/WebGLRenderingContext/validateProgram)
  - : Valide un `WebGLProgram`.

## Uniformes et attributs

- [`WebGLRenderingContext.disableVertexAttribArray()`](/fr/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray)
  - : Désactive un tableau d'attribut de sommet à une position donnée.
- [`WebGLRenderingContext.enableVertexAttribArray()`](/fr/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray)
  - : Active un tableau d'attribut de sommet à une position donnée.
- [`WebGLRenderingContext.getActiveAttrib()`](/fr/docs/Web/API/WebGLRenderingContext/getActiveAttrib)
  - : Renvoie des informations à propos d'une variable d'attribut active.
- [`WebGLRenderingContext.getActiveUniform()`](/fr/docs/Web/API/WebGLRenderingContext/getActiveUniform)
  - : Renvoie des informations à propos d'une variable d'uniforme active.
- [`WebGLRenderingContext.getAttribLocation()`](/fr/docs/Web/API/WebGLRenderingContext/getAttribLocation)
  - : Renvoie l'emplacement d'une variable d'attribut.
- [`WebGLRenderingContext.getUniform()`](/fr/docs/Web/API/WebGLRenderingContext/getUniform)
  - : Renvoie la valeur d'une variable d'uniforme à un emplacement donné.
- [`WebGLRenderingContext.getUniformLocation()`](/fr/docs/Web/API/WebGLRenderingContext/getUniformLocation)
  - : Renvoie l'emplacement d'une variable d'uniforme.
- [`WebGLRenderingContext.getVertexAttrib()`](/fr/docs/Web/API/WebGLRenderingContext/getVertexAttrib)
  - : Renvoie les informations à propos d'un attribut de sommet à une position donnée.
- [`WebGLRenderingContext.getVertexAttribOffset()`](/fr/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset)
  - : Renvoie l'adresse d'un attribut de sommet donné.
- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/fr/docs/Web/API/WebGLRenderingContext/uniform)
  - : Définit une valeur pour une variable d'uniforme.
- [`WebGLRenderingContext.uniformMatrix[234]fv()`](/fr/docs/Web/API/WebGLRenderingContext/uniformMatrix)
  - : Définit la valeur matricielle pour une variable d'uniforme.
- [`WebGLRenderingContext.vertexAttrib[1234]f[v]()`](/fr/docs/Web/API/WebGLRenderingContext/vertexAttrib)
  - : Définit une valeur pour un attribut de sommet générique.
- [`WebGLRenderingContext.vertexAttribPointer()`](/fr/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
  - : Définit les formats de données et les emplacements des attributs de sommet dans un tableau d'attributs de sommet.

## Dessiner les tampons

- [`WebGLRenderingContext.clear()`](/fr/docs/Web/API/WebGLRenderingContext/clear)
  - : Nettoie les tampons indiqués avec les valeurs prédéfinies.
- [`WebGLRenderingContext.drawArrays()`](/fr/docs/Web/API/WebGLRenderingContext/drawArrays)
  - : Effectue le rendu des primitives à partir des données de tableaux.
- [`WebGLRenderingContext.drawElements()`](/fr/docs/Web/API/WebGLRenderingContext/drawElements)
  - : Effectue le rendu des primitives à partir des données d'élément.
- [`WebGLRenderingContext.finish()`](/fr/docs/Web/API/WebGLRenderingContext/finish)
  - : Bloque l'exécution jusqu'à ce que les commandes précédemment appelées soient terminées.
- [`WebGLRenderingContext.flush()`](/fr/docs/Web/API/WebGLRenderingContext/flush)
  - : Vide les différents tampons de commandes, entraînant l'exécution la plus rapide possible pour toutes les commandes.

## Utiliser les extensions

Ces méthodes permettent de gérer les extensions WebGL&nbsp;:

- [`WebGLRenderingContext.getSupportedExtensions()`](/fr/docs/Web/API/WebGLRenderingContext/getSupportedExtensions)
  - : Renvoie un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) de chaînes de caractères ([`DOMString`](/fr/docs/Web/API/DOMString)). Les éléments sont les noms des extensions WebGL prises en charge.
- [`WebGLRenderingContext.getExtension()`](/fr/docs/Web/API/WebGLRenderingContext/getExtension)
  - : Renvoie un objet d'extension.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`HTMLCanvasElement`](/fr/docs/Web/API/HTMLCanvasElement)
