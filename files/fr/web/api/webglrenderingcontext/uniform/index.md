---
title: WebGLRenderingContext.uniform[1234][fi][v]()
slug: Web/API/WebGLRenderingContext/uniform
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/uniform
---
{{APIRef("WebGL")}}

Les méthodes **`WebGLRenderingContext.uniform[1234][fi][v]()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) indiquent les valeurs des variables uniform.

> **Note :** Beaucoup des fonctions décrites ici ont des interfaces WebGL 2 étendues, qui peuvent être trouvées en {{domxref("WebGL2RenderingContext.uniform","WebGL2RenderingContext.uniform[1234][uif][v]()")}}.

## Syntaxe

    void gl.uniform1f(emplacement, v0);
    void gl.uniform1fv(emplacement, valeur);
    void gl.uniform1i(emplacement, v0);
    void gl.uniform1iv(emplacement, valeur);

    void gl.uniform2f(emplacement, v0, v1);
    void gl.uniform2fv(emplacement, valeur);
    void gl.uniform2i(emplacement, v0, v1);
    void gl.uniform2iv(emplacement, valeur);

    void gl.uniform3f(emplacement, v0, v1, v2);
    void gl.uniform3fv(emplacement, valeur);
    void gl.uniform3i(emplacement, v0, v1, v2);
    void gl.uniform3iv(emplacement, valeur);

    void gl.uniform4f(emplacement, v0, v1, v2, v3);
    void gl.uniform4fv(emplacement, valeur);
    void gl.uniform4i(emplacement, v0, v1, v2, v3);
    void gl.uniform4iv(emplacement, valeur);

### Paramètres

- emplacement
  - : Un objet {{domxref("WebGLUniformLocation")}} contenant l'emplacement de l'attribut uniform à modifier.
- `valeur, v0, v1, v2, v3`

  - : La nouvelle valeur à utiliser pour la variable uniform. Types possibles :

    - Un {{jsxref("Number")}} flottant pour les valeurs flottantes (méthodes avec "f").
    - Une suite de nombres flottants (par exemple, un {{jsxref("Float32Array")}} ou un {{jsxref("Array")}} de nombres) pour les méthodes de vecteurs de flottants (méthodes avec "fv").
    - Un {{jsxref("Number")}} entier pour les valeurs entières (méthodes avec "i").
    - Un {{jsxref("int32Array")}} pour les méthodes de vecteur d'entiers (méthodes avec "iv").

### Valeur retournée

Aucune.

## Exemples

```js
gl.uniform1f(u_alpha, 0.8);
```

## Spécifications

| Spécification                                                                    | Statut                               | Commentaire               |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------------- |
| {{SpecName('WebGL', "#5.14.10", "uniform")}}                     | {{Spec2('WebGL')}}             | Définition initiale.      |
| {{SpecName('OpenGL ES 2.0', "glUniform.xml", "glUniform")}} | {{Spec2('OpenGL ES 2.0')}} | Page man de l'API OpenGL. |

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.uniform1f")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.uniformMatrix()")}}
