---
title: WebGLRenderingContext.bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/bufferData
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.bufferData()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) initialise et crée le magasin de données de l'objet tampon.

## Syntaxe

    // WebGL1:
    void gl.bufferData(cible, taille, utilisation);
    void gl.bufferData(cible, ArrayBuffer? donneesSrc, utilisation);
    void gl.bufferData(cible, ArrayBufferView donneesSrc, utilisation);

    // WebGL2:
    void gl.bufferData(cible, ArrayBufferView donneesSrc, utilisation, decalageSrc, longueur);

### Paramètres

- cible

  - : Un {{domxref ("GLenum")}} spécifiant le point de liaison (cible). Valeurs possibles :

    - `gl.ARRAY_BUFFER` : tampon contenant des attributs de sommet, tels que des coordonnées de sommet, des données de coordonnées de texture ou des données de couleurs de sommet ;
    - `gl.ELEMENT_ARRAY_BUFFER` : tampon utilisé pour les indices d'éléments ;
    - lors de l'utilisation d'un {{domxref ("WebGL2RenderingContext", "WebGL context 2", "", 1)}}, les valeurs suivantes sont en outre disponibles :

      - `gl.COPY_READ_BUFFER` : tampon pour la copie d'un objet tampon à un autre ;
      - `gl.COPY_WRITE_BUFFER` : tampon pour la copie d'un objet tampon à un autre ;
      - `gl.TRANSFORM_FEEDBACK_BUFFER` : tampon pour les opérations de retour de transformation ;
      - `gl.UNIFORM_BUFFER` : tampon utilisé pour stocker des blocs uniform ;
      - `gl.PIXEL_PACK_BUFFER` : tampon utilisé pour les opérations de transfert de pixels ;
      - `gl.PIXEL_UNPACK_BUFFER` : tampon utilisé pour les opérations de transfert de pixels.

- taille
  - : Un {{domxref("GLsizeiptr")}} définissant la taille du magasin de données de l'objet tampon.
- donneesSrc {{optional_inline}}
  - : Un {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}} ou l'un des types de tableau typés {{domxref("ArrayBufferView")}} à copier dans le magasin de données. Si `null`, un magasin de données est quand même créé, mais son contenu n'est ni initialisé, ni défini.
- utilisation

  - : Un {{domxref("GLenum")}} indiquant le modèle d'utilisation du magasin de données. Valeurs possibles :

    - `gl.STATIC_DRAW` : le contenu du tampon est susceptible d'être utilisé souvent mais de ne pas changer souvent ; du contenu est écrit dans le tampon, mais non lu ;
    - `gl.DYNAMIC_DRAW` : le contenu du tampon est susceptible d'être souvent utilisé et de changer souvent ; du contenu est écrit dans le tampon, mais non lu ;
    - `gl.STREAM_DRAW` : le contenu du tampon est susceptible de ne pas être utilisé souvent ; du contenu est écrit dans le tampon, mais non lu ;
    - lors de l'utilisation d'un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, les valeurs suivantes the following values sont en outre disponibles :

      - `gl.STATIC_READ` : le contenu du tampon est susceptible d'être utilisé souvent et de ne pas changer souvent ; du contenu est lu depuis le tampon, mais non écrit ;
      - `gl.DYNAMIC_READ` : le contenu du tampon est susceptible d'être utilisé souvent et de changer souvent ; du contenu est lu depuis le tampon, mais non écrit ;
      - `gl.STREAM_READ` : le contenu du tampon est susceptible de ne pas être utilisé souvent ; du contenu est lu depuis le tampon, mais non écrit ;
      - `gl.STATIC_COPY` : le contenu du tampon est susceptible d'être utilisé souvent et de ne pas changer souvent ; aucun contenu n'est écrit ou lu par l'utilisateur ;
      - `gl.DYNAMIC_COPY` : le contenu du tampon est susceptible d'être utilisé souvent et de changer souvent ; aucun contenu n'est écrit ou lu par l'utilisateur ;
      - `gl.STREAM_COPY` : le contenu du tampon est susceptible d'être utilisé souvent et de ne pas changer souvent ; aucun contenu n'est écrit ou lu par l'utilisateur.

- decalageSrc
  - : Un {{domxref("GLuint")}} indiquant le décalage d'indice d'élément où commencer à lire dans le tampon.
- `longueur` {{optional_inline}}
  - : Un {{domxref("GLuint")}} valant 0 par défaut.

### Valeur retournée

Aucune.

### Exceptions

- Une erreur `gl.OUT_OF_MEMORY` est déclenchée si le contexte ne peut pas créer un magasin de données de la `taille` indiquée.
- Une erreur`gl.INVALID_VALUE` est déclenchée si `taille` est négative.
- Une erreur `gl.INVALID_ENUM` est déclenchée si `cible` ou`utilisation` ne sont pas l'un des enums autorisés.

## Exemples

### Utilisation de `bufferData`

```js
var canevas = document.getElementById('canevas');
var gl = canevas.getContext('webgl');
var tampon = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, tampon);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
```

### Récupération de l'information de tampon

Pour vérifier l'utilisation du tampon en cours et la taille du tampon, utiliser la méthode {{domxref("WebGLRenderingContext.getBufferParameter()")}}.

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
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
      <td>{{SpecName('WebGL', "#5.14.5", "bufferData")}}</td>
      <td>{{Spec2('WebGL')}}</td>
      <td>Définition initiale.</td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 2.0', "glBufferData.xml", "glBufferData")}}
      </td>
      <td>{{Spec2('OpenGL ES 2.0')}}</td>
      <td><p>Page man de l’API OpenGL.</p></td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 3.0', "glBufferData.xhtml", "glBufferData")}}
      </td>
      <td>{{Spec2('OpenGL ES 3.0')}}</td>
      <td>
        <p>Page man de l’API OpenGL ES 3 (similaire).</p>
        Ajoute les noouveaux tampons <code>cible</code> :<br /><code
          >gl.COPY_READ_BUFFER</code
        >,<br /><code>gl.COPY_WRITE_BUFFER</code>,<br /><code
          >gl.TRANSFORM_FEEDBACK_BUFFER</code
        >,<br /><code>gl.UNIFORM_BUFFER</code>,<br /><code
          >gl.PIXEL_PACK_BUFFER</code
        >,<br /><code>gl.PIXEL_UNPACK_BUFFER</code><br /><br />Ajoute les
        nouvelles indications d'<code>utilisation</code> :<br /><code
          >gl.STATIC_READ</code
        >,<br /><code>gl.DYNAMIC_READ</code>,<br /><code>gl.STREAM_READ</code
        >,<br /><code>gl.STATIC_COPY</code>,<br /><code>gl.DYNAMIC_COPY</code
        >,<br /><code>gl.STREAM_COPY</code>.
      </td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.bufferData")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- Autres tampons : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
