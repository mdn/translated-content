---
title: display-mode
slug: Web/CSS/@media/display-mode
---

{{cssref}}

La [característica de medios (media feature) de CSS](/es/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) **`display-mode`** puede ser utilizada para probar el modo de visualización de una aplicación. Puede ser usada para proveer de una experiencia de usuario consistente entre el lanzamiento de un sitio desde una URL y desde un ícono del escritorio.

La característica corresponde al miembro [`display`](/es/docs/Web/Manifest#display) del manifiesto de la aplicación web. Ambos aplican al contexto de navegación de nivel más alto y a cualquier hijo del contexto de navegación. La característica de consulta aplica sin importar si el manifiesto de la aplicación web esta presente

## Sintaxis

La característica `display-mode` se especifica como un valor de palabra clave elegida de la siguiente lista.

| Modo de visualización | Descripción                                                                                                                                                                                                                                                                                                                                      | `Modo de visualización de reserva` |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| `fullscreen`          | Toda la área disponible de desplegado es usada y ningún agente de usuario {{glossary("chrome")}} es mostrado.                                                                                                                                                                                                                                    | `standalone`                       |
| `standalone`          | La aplicación se vera y sentira como una aplicación independiente. Esto puede incluir que la aplicación tenga una ventana diferente, su propio ícono en el lanzador de aplicaciones, etc. En este modo, el agente de usuario excluirá elementos UI paara controlar la navegación, pero puede incluir otros elementos UI como la barra de estado. | `minimal-ui`                       |
| `minimal-ui`          | La aplicación se vera y sentira como una apicación autónoma, pero tendra un conjunto mínimo de elementos UI para controlar la navegación. Los elementos pueden variar por navegador.                                                                                                                                                             | `browser`                          |
| `browser`             | La aplicación se abre en una pestaña o nueva ventana convencional del navegador, dependiendo del navegador y la plataforma.                                                                                                                                                                                                                      | (none)                             |

## Ejemplo

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
