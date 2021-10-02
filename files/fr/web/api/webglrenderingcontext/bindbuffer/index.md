---
title: WebGLRenderingContext.bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/bindBuffer
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.bindBuffer()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) lie un {{domxref("WebGLBuffer")}} donné à une cible.

## Syntaxe

    void gl.bindBuffer(cible, tampon);

### Paramètres

- cible
  - : Un {{domxref ("GLenum")}} spécifiant le point de liaison (cible). Valeurs possibles :

<!---->

- `gl.ARRAY_BUFFER` : tampon contenant des attributs de sommet, tels que des coordonnées de vertex, des données de coordonnées de texture ou des données de couleurs de sommet ;
- `gl.ELEMENT_ARRAY_BUFFER` : tampon utilisé pour les indices d'éléments ;
- Lors de l'utilisation d'un {{domxref("WebGL2RenderingContext", "WebGL context 2", "", 1)}}, les valeurs suivantes sont disponibles en plus :

  - `gl.COPY_READ_BUFFER` : tampon pour la copie d'un objet tampon à un autre ;
  - `gl.COPY_WRITE_BUFFER` : tampon pour la copie d'un objet tampon à un autre ;
  - `gl.TRANSFORM_FEEDBACK_BUFFER` : tampon pour les opérations de retour de la transformation ;
  - `gl.UNIFORM_BUFFER` : tampon utilisé pour stocker des blocs uniformes ;
  - `gl.PIXEL_PACK_BUFFER` : tampon utilisé pour les opérations de transfert de pixels ;
  - `gl.PIXEL_UNPACK_BUFFER` : tampon utilisé pour les opérations de transfert de pixels.

<!---->

- tampon
  - : Un {{domxref ("WebGLBuffer")}} à lier.

### Valeur retournée

Aucune.

### Exceptions

Une seule cible peut être liée à un {{domxref ("WebGLBuffer")}} donné. Une tentative de lier le tampon à une autre cible déclenchera une erreur `INVALID_OPERATION` et la liaison du tampon en cours restera la même.

## Exemples

### Liaison d'un tampon à une cible

```js
var canevas = document.getElementById('canevas');
var gl = canevas.getContext('webgl');
var tampon = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, tampon);
```

### Récupération des liaisons en cours

Pour vérifier les liaisons de tampon en cours, interrogez les constantes ARRAY_BUFFER_BINDING et ELEMENT_ARRAY_BUFFER_BINDING.

```js
gl.getParameter(gl.ARRAY_BUFFER_BINDING);
gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
```

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
    <tr>
      <td>{{SpecName('WebGL', "#5.14.5", "bindBuffer")}}</td>
      <td>{{Spec2('WebGL')}}</td>
      <td><p>Définition initiale pour WebGL.</p></td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 2.0', "glBindBuffer.xml", "glBindBuffer")}}
      </td>
      <td>{{Spec2('OpenGL ES 2.0')}}</td>
      <td>Page man de l’API OpenGL ES 2 (similaire).</td>
    </tr>
    <tr>
      <td>{{SpecName('WebGL2', "#3.7.1", "bindBuffer")}}</td>
      <td>{{Spec2('WebGL2')}}</td>
      <td>
        <p>Définition mise à jour pour WebGL 2.</p>
        <p>
          Ajoute de nouveaux tampons <code>cible</code> :<br /><code
            >gl.COPY_READ_BUFFER</code
          >,<br /><code>gl.COPY_WRITE_BUFFER</code>,<br /><code
            >gl.TRANSFORM_FEEDBACK_BUFFER</code
          >,<br /><code>gl.UNIFORM_BUFFER</code>,<br /><code
            >gl.PIXEL_PACK_BUFFER</code
          >,<br /><code>gl.PIXEL_UNPACK_BUFFER</code>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 3.0', "glBindBuffer.xhtml", "glBindBuffer")}}
      </td>
      <td>{{Spec2('OpenGL ES 3.0')}}</td>
      <td>Page man de l’API OpenGL ES 3 (similaire).</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.bindBuffer")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Autres tampons : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
