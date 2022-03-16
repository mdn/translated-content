---
title: WebGLRenderingContext.vertexAttribPointer()
slug: Web/API/WebGLRenderingContext/vertexAttribPointer
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/vertexAttribPointer
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.vertexAttribPointer()`** de l'[API WebGL](/fr/docs/Web/API/WebGL_API) spécifie la disposition en mémoire de l'objet de tampon vertex. Elle doit être appelée une fois pour chaque attribut de sommet.

## Syntaxe

    void gl.vertexAttribPointer(indice, taille, type, normalise, pas, decalage);

### Paramètres

- `indice`
  - : Un {{domxref("GLuint")}} indiquant l'indice de l'attribut de sommet à modifier.
- `taille`
  - : Un {{domxref("GLint")}} indiquant le nombre de composantes par attribut de sommet. Doit être 1, 2, 3 ou 4.
- `type`

  - : Un {{domxref ("GLenum")}} spécifiant le type de données de chaque composante dans le tableau. Valeurs possibles :

    - `gl.BYTE` : entier signé sur 8 bits, à valeurs dans \[-128, 127]
    - `gl.SHORT` : entier signé sur 16 bits, à valeurs dans \[-32768, 32767]
    - `gl.UNSIGNED_BYTE` : entier non signé sur 8 bits, à valeurs dans \[0, 255]
    - `gl.UNSIGNED_SHORT` : entier non signé sur 16 bits, à valeurs dans \[0, 65535]
    - `gl.FLOAT` : nombre flottant IEEE 32 bits
    - lors de l'utilisation d'un {{domxref("WebGL2RenderingContext", "WebGL context 2", "", 1)}}, la valeur suivante est en outre disponible :

      - `gl.HALF_FLOAT` : nombre flottant IEEE 16 bits

- `normalise`

  - : Un {{domxref("GLboolean")}} indiquant si les valeurs des données entières doivent être normalisées dans une certaine plage lorsqu'elles sont converties en flottant.

    - Pour les types `gl.BYTE` et `gl.SHORT`, normalise les valeurs à \[-1, 1] si `true`.
    - Pour les types `gl.UNSIGNED_BYTE` et `gl.UNSIGNED_SHORT`, normalise les valeurs à \[0, 1] si `true`.
    - Pour les types `gl.FLOAT` et `gl.HALF_FLOAT`, ce paramètre est sans effet.

- `pas`
  - : Un {{domxref ("GLsizei")}} spécifiant le décalage en octets entre le début des attributs de sommets consécutifs. Ne peut être supérieur à 255. Si la valeur de `pas` est 0, l'attribut est supposé être étroitement compacté, c'est-à-dire que les attributs ne sont pas entrelacés mais que chaque attribut se trouve dans un bloc distinct et que l'attribut du sommet suivant suit immédiatement le sommet en cours.
- `decalage`
  - : Un {{domxref ("GLintptr")}} spécifiant le décalage en octets de la première composante dans le tableau d'attributs de sommets. Doit être un multiple de `type`.

### Valeur retournée

Aucune.

### Exceptions

- Une erreur `gl.INVALID_VALUE` est déclenchée si `decalage` est négatif.
- Une erreur `gl.INVALID_OPERATION` est déclenchée si  `pas` et `decalage` ne sont pas des multiples de la taille du type de données.
- Une erreur  `gl.INVALID_OPERATION` est déclenchée si aucun WebGLBuffer n'est lié à la cible ARRAY_BUFFER.
- Lors de l'utilisation d'un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, une erreur  `gl.INVALID_OPERATION` est déclenchée si l'attribut du sommet est défini comme entier dans le shader de sommet (par ex., `uvec4` or `ivec4`, iau lieu de `vec4`).

## Description

Supposons que nous voulions afficher une géométrie 3D, et que pour cela, nous ayons besoin de fournir nos sommets au Shader de Sommet. Chaque sommet a un certain nombre d'attributs, tels que la position, le vecteur normal ou les coordonnées de texture, qui sont définis dans un {{jsxref("ArrayBuffer")}} et qui seront fournis à l'Objet de Tampon de Sommets (OTS). Grâce à cette méthode `gl.vertexAttribPointer()`, nous spécifions dans quel ordre les attributs sont stockés, et quel est leur type de données. De plus, nous devons inclure le pas, qui est la longueur totale en octets de tous les attributs pour un sommet. Également, nous devons appeler {{domxref("WebGLRenderingContext/enableVertexAttribArray", "gl.enableVertexAttribArray()")}} pour indiquer à WebGL que cet attribut doit être rempli avec les données de notre tampon de tableaux.

Habituellement, votre géométrie 3D se trouve déjà dans un certain format binaire, de sorte que vous devez lire la spécification de ce format particulier pour comprendre la disposition en mémoire. Cependant, si vous concevez le format vous-même, ou si votre géométrie se trouve dans des fichiers texte (comme les fichiers Wavefront .obj) et doit être convertie en `ArrayBuffer` à l'exécution, vous êtes libre de choisir comment structurer la mémoire. Pour des performances optimales, entrelacez les attributs et utilisez le plus petit type de données représentant néanmoins fidèlement votre géométrie.

Le nombre maximum d'attributs de vertex dépend de la carte graphique, et vous pouvez appeler `gl.getParameter(gl.MAX_VERTEX_ATTRIBS)` pour obtenir cette valeur. Sur les cartes graphiques haut de gamme, le maximum est de 16, sur les cartes graphiques de bas de gamme, la valeur sera inférieure.

### Indice d'attribut

Pour chaque attribut, vous devez spécifier son indice. Cela est indépendant de l'emplacement à l'intérieur de la mémoire tampon de tableaux, de sorte que vos attributs peuvent être envoyés dans un ordre différent de celui dans lequel ils sont stockés dans le tampon de tableaux. Vous avez deux options :

- Soit vous spécifiez l'index vous-même. Dans ce cas, vous appelerez {{domxref("WebGLRenderingContext.bindAttribLocation()", "gl.bindAttribLocation()")}} pour connecter un attribut nommé du shader de sommet à l'index que vous voulez utiliser. Cela doit être fait avant d'appeler {{domxref("WebGLRenderingContext.linkProgram()", "gl.linkProgram()")}}. Vous pouvez alors fournir ce même index à `gl.vertexAttribPointer()`.
- En variante, vous pouvez utiliser l'index affecté par la carte graphique lors de la compilation du shader de sommet. Suivant la carte graphique, l'index varie, aussi devrez-vous appeler {{domxref("WebGLRenderingContext.getAttribLocation()", "gl.getAttribLocation()")}} pour trouver l'index, puis le fournir à `gl.vertexAttribPointer()`.
  Si vous utilisez WebGL 2, vous pouvez spécifier l'index vous-même dans le code du shader de sommet et remplacer la valeur par défaut utilisée par la carte graphique, par ex. `layout(location = 3) in vec4 position;` définirait l'attribut `"position"` à l'indice 3.

### Attributs entiers

Bien que le `ArrayBuffer` puisse être rempli à la fois d'entiers et de flottants, les attributs seront toujours convertis en flottant lorsqu'ils seront envoyés au shader de sommet. Si vous avez besoin d'utiliser des entiers dans votre code de shader de sommet, vous pouvez, soit reconvertir les flottants en entiers dans le shader de sommet (par exemple, `(int) floatNumber`), soit utiliser {{domxref("WebGL2RenderingContext.vertexAttribIPointer()", "gl.vertexAttribIPointer()")}} à partir de WebGL2.

### Valeurs d'attribut par défaut

Le code de vertex shader peut inclure un certain nombre d'attributs, mais nous n'avons pas besoin de spécifier les valeurs pour chaque attribut. A la place, nous pouvons fournir une valeur par défaut qui sera identique pour tous les sommets. Nous pouvons appeler `{{domxref("WebGLRenderingContext.disableVertexAttribArray()", "gl.disableVertexAttribArray()")}}` pour indiquer à WebGL d'utiliser la valeur par défaut, tandis que l'appel à {{domxref("WebGLRenderingContext.enableVertexAttribArray ()", "gl.enableVertexAttribArray () ")}} lira les valeurs du buffer du tableau comme spécifié avec `gl.vertexAttribPointer()`.

De façon similaire, si notre shader de sommet attend par ex. un attribut à 4 composantes avec `vec4`, mais que dans notre appel à `gl.vertexAttribPointer()`, nous définissons la taille à 2, alors WebGL définira les deux premières composantes en se basant sur le tampon des tableaux, tandis que les troisième et quatrième composantes prendront la valeur par défaut.

La valeur par défaut est `vec4(0.0, 0.0, 0.0, 1.0)` par défaut, mais nous pouvons spécifier une valeur par défaut différente avec `{{domxref ("WebGLRenderingContext.vertexAttrib()", "gl.vertexAttrib[1234]f[v]()")}}`.

Par exemple, votre shader de sommet peut utiliser une position et un attribut de couleur. La plupart des maillages ont leur couleur spécifiée au niveau des sommets, mais certains maillages ont une teinte uniforme. Pour ces maillages, il n'est pas nécessaire de définir la même couleur pour chaque sommet dans le tampon des tableaux, aussi vous utiliserez `gl.vertexAttrib4fv()` pour définir une couleur constante.

### Interrogation des paramètres en cours

Vous pouvez appeler {{domxref ("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} et {{domxref ("WebGLRenderingContext.getVertexAttribOffset()", "gl.getVertexAttribOffset()")}} pour obtenir les paramètres en cours d'un attribut, par ex., le type de données ou si l'attribut doit être normalisé. Gardez présent à l'esprit que ces fonctions WebGL ont des performances faibles et qu'il est préférable de stocker l'état dans votre application JavaScript. Cependant, ces fonctions sont idéales pour déboguer un contexte WebGL sans toucher au code de l'application.

## Exemples

Cet exemple montre comment envoyer vos attributs de sommet au programme shader. Nous utilisons une structure de données imaginaire, dans laquelle les attributs de chaque sommet sont stockés entrelacés avec une longueur de 20 octets par sommet :

1.  **position :** nous devons stocker les coordonnées X, Y et Z. Pour une précision maximale, nous utilisons des flottants 32 bits ; au total, cela utilise 12 octets ;
2.  **vecteur normal :** nous avons besoin de stocker les composantes X, Y et Z du vecteur normal, mais comme la précision n'est pas si importante que cela, nous utilisons des entiers signés sur 8 bits. Pour de meilleures performances, nous alignons les données sur 32 bits en stockant également une quatrième composante de valeur zéro, ce qui porte la taille totale à 4 octets. Également, nous indiquons à WebGL de normaliser les valeurs, car nos normales sont toujours dans la plage \[-1, 1] ;
3.  **coordonnées de texture :** nous avons besoin de stocker les coordonnées U et V ; pour que ces nombres entiers non signés sur 16 bits offrent suffisamment de précision, la taille totale est de 4 octets. Nous indiquons également à WebGL de normaliser les valeurs à \[0, 1].

Par exemple, le sommet suivant :

```json
{
  "position": [1.0, 2.0, 1.5],
  "normale": [1.0, 0.0, 0.0],
  "coordTex": [0.5, 0.25]
}
```

sera stocké dans le tampon des tableaux comme suit :

<table>
  <tbody>
    <tr>
      <td>00 00 80 3F</td>
      <td>00 00 00 40</td>
      <td>00 00 0C 3F</td>
      <td>7F</td>
      <td>00</td>
      <td>00</td>
      <td>00</td>
      <td>7F FF</td>
      <td>3F FF</td>
    </tr>
  </tbody>
</table>

### Création du tampon des tableaux

Tout d'abord, nous créons dynamiquement le tampon des tableaux à partir de données JSON en utilisant un {{domxref("DataView")}}. Notez l'utilisation de `true`, car WebGL s'attend à ce que nos données soient en little-endian.

```js
// Charger la géometrie avec fetch() et Response.json()
const response = await fetch('assets/geometry.json');
const sommets = await response.json();

// Créer le tampon des tableaux
const tampon = new ArrayBuffer(20 * sommets.length);
// Remplir le tampon des tableaux
const dv = new DataView(tampon);
for (let i = 0; i < sommets.length; i++) {
  dv.setFloat32(20 * i, sommets[i].position[0], true);
  dv.setFloat32(20 * i + 4, sommets[i].position[1], true);
  dv.setFloat32(20 * i + 8, sommets[i].position[2], true);
  dv.setInt8(20 * i + 12, sommets[i].normale[0] * 0x7F);
  dv.setInt8(20 * i + 13, sommets[i].normale[1] * 0x7F);
  dv.setInt8(20 * i + 14, sommets[i].normale[2] * 0x7F);
  dv.setInt8(20 * i + 15, 0);
  dv.setUint16(20 * i + 16, sommets[i].coordTex[0] * 0xFFFF, true);
  dv.setUint16(20 * i + 18, sommets[i].coordTex[1] * 0xFFFF, true);
}
```

Pour de meilleures performances, nous pourrions également effectuer la conversion JSON vers ArrayBuffer précédente du côté serveur, par ex. avec Node.js. Nous pourrions alors charger le fichier binaire et l'interpréter comme un tampon de tableaux :

```js
const response = await fetch('assets/geometry.bin');
const tampon = await response.arrayBuffer();
```

### Utiliser le tampon de tableaux avec WebGL

Tout d'abord, nous créons un nouvel Objet Tampon de Sommets (OTS) et nous l'alimentons avec notre tampon de tableaux :

```js
// Lier le tampon de tableaux à l'Objet Tampon de Sommets
const ots = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, ots);
gl.bufferData(gl.ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
```

Ensuite, nous spécifions la disposition en mémoire du tampon de tableaux, soit en définissant nous-mêmes l'indice :

```js
// Décrire la disposition du tampon :
//1. position, non normalisé
gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(0);
//2. vecteur normal, normalisé à [-1, 1]
gl.vertexAttribPointer(1, 4, gl.BYTE, true, 20, 12);
gl.enableVertexAttribArray(1);
//3. coordonnées de texture, normalisées à [0, 1]
gl.vertexAttribPointer(2, 2, gl.UNSIGNED_SHORT, true, 20, 16);
gl.enableVertexAttribArray(2);

// Définir les attributs dans le shader de sommet aux mêmes indices
gl.bindAttribLocation(shaderProgram, 0, 'position');
gl.bindAttribLocation(shaderProgram, 1, 'normal');
gl.bindAttribLocation(shaderProgram, 2, 'texUV');
// Du fait que indices des attributs ont changé, nous devons refaire l'édition de liens du shader
// Noter que cela réinitialisera tous les uniforms qui avaient été précédemment définis.
gl.linkProgram(shaderProgram);
```

soit en utilisant l'indice fourni par la carte graphique, au lieu de le définir nous-mêmes ; cela évite la réédition des liens du programme shader.

```js
const positionLoc = gl.getAttribLocation(shaderProgram, 'position');
gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(positionLoc);

const normalLoc = gl.getAttribLocation(shaderProgram, 'normal');
gl.vertexAttribPointer(normalLoc, 4, gl.BYTE, true, 20, 12);
gl.enableVertexAttribArray(normalLoc);

const texUVLoc = gl.getAttribLocation(shaderProgram, 'texUV');
gl.vertexAttribPointer(texUVLoc, 2, gl.UNSIGNED_SHORT, true, 20, 16);
gl.enableVertexAttribArray(texUVLoc);
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
      <td>
        {{SpecName('WebGL', "#5.14.10", "vertexAttribPointer")}}
      </td>
      <td>{{Spec2('WebGL')}}</td>
      <td><p>Définition initiale.</p></td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 2.0', "glVertexAttribPointer.xml", "glVertexAttribPointer")}}
      </td>
      <td>{{Spec2('OpenGL ES 2.0')}}</td>
      <td><p>Page man de l’API OpenGL.</p></td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.vertexAttribPointer")}}

## Voir aussi

- [Vertex Specification](https://www.khronos.org/opengl/wiki/Vertex_Specification) sur le wiki OpenGL
