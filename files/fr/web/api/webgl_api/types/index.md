---
title: Types WebGL
slug: Web/API/WebGL_API/Types
tags:
  - Reference
  - Types
  - WebGL
translation_of: Web/API/WebGL_API/Types
---
{{WebGLSidebar}}

Les types suivants sont utilisés dans les interfaces [WebGL](/fr-FR/docs/Web/API/WebGL_API).

## WebGL 1

Ces types sont utilisés à l'intérieur d'un {{domxref("WebGLRenderingContext")}}.

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Type</td>
      <td class="header">Type Web IDL</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>GLenum</code></td>
      <td><code>unsigned long</code></td>
      <td>
        Utilisé pour les enums. Voir aussi la liste des <a
          href="/fr-FR/docs/Web/API/WebGL_API/Constants"
          >constantes</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>GLboolean</code></td>
      <td><code>boolean</code></td>
      <td>Un {{jsxref("Boolean")}}.</td>
    </tr>
    <tr>
      <td><code>GLbitfield</code></td>
      <td><code>unsigned long</code></td>
      <td>
        Un champ de bits stockant plusieurs bits logiques. Utilisé par exemple
        dans {{domxref("WebGLRenderingContext.clear()")}}.
      </td>
    </tr>
    <tr>
      <td><code>GLbyte</code></td>
      <td><code>byte</code></td>
      <td>Entier signé en complément à deux sur 8 bits.</td>
    </tr>
    <tr>
      <td><code>GLshort</code></td>
      <td><code>short</code></td>
      <td>Entier signé en complément à deux sur 16 bits.</td>
    </tr>
    <tr>
      <td><code>GLint</code></td>
      <td><code>long</code></td>
      <td>Entier signé en complément à deux sur 32 bits.</td>
    </tr>
    <tr>
      <td><code>GLsizei</code></td>
      <td><code>long</code></td>
      <td>
        Utilisé pour les tailles (par ex., la largeur et la hauteur du tampon de
        dessin).
      </td>
    </tr>
    <tr>
      <td><code>GLintptr</code></td>
      <td><code>long long</code></td>
      <td>Type spécial pour l'arithmétique de pointeur.</td>
    </tr>
    <tr>
      <td><code>GLsizeiptr</code></td>
      <td><code>long long</code></td>
      <td>Type spécial pour l'arithmétique de pointeur.</td>
    </tr>
    <tr>
      <td><code>GLubyte</code></td>
      <td><code>octet</code></td>
      <td>Entier non signé en complément à deux sur 8 bits.</td>
    </tr>
    <tr>
      <td><code>GLushort</code></td>
      <td><code>unsigned short</code></td>
      <td>Entier non signé en complément à deux sur 16 bits.</td>
    </tr>
    <tr>
      <td><code>GLuint</code></td>
      <td><code>unsigned long</code></td>
      <td>Entier non signé en complément à deux sur 32 bits.</td>
    </tr>
    <tr>
      <td><code>GLfloat</code></td>
      <td><code>unrestricted float</code></td>
      <td>Nombre en virgule flottante IEEE sur 32 bits.</td>
    </tr>
    <tr>
      <td><code>GLclampf</code></td>
      <td><code>unrestricted float</code></td>
      <td>Nombre en virgule flottante IEEE sur 32 bits borné.</td>
    </tr>
  </tbody>
</table>

## WebGL 2

Ces types sont utilisés à l'intérieur d'un {{domxref("WebGL2RenderingContext")}}. Tous les types WebGL 1 sont également utilisés.

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Type</td>
      <td class="header">Type Web IDL</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>GLint64</code></td>
      <td><code>long long</code></td>
      <td>Nombre entier sur 64 bits signé.</td>
    </tr>
  </tbody>
</table>

## Extensions WebGL

Ces types sont utilisés à l'intérieur des [extensions WebGL](/fr-FR/docs/Web/API/WebGL_API/Using_Extensions).

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Type</td>
      <td class="header">Type Web IDL</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>GLuint64EXT</code></td>
      <td><code>long long</code></td>
      <td>Nombre entier sur 64 bits non signé.</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                    | Statut                                           | Commentaire                        |
| -------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------- |
| {{SpecName('WebGL', "#5.1", "Types")}}                             | {{Spec2('WebGL')}}                         | Définition initiale                |
| {{SpecName('WebGL2', "#3.1", "Types")}}                             | {{Spec2('WebGL2')}}                         | Définit des types supplémentaires. |
| {{SpecName('EXT_disjoint_timer_query', "", "GLuint64EXT")}} | {{Spec2('EXT_disjoint_timer_query')}} | Ajoute `GLuint64EXT`               |

## Voir aussi

- {{domxref("WebGLRenderingContext")}}
