---
title: Contexto de aplicación
slug: Glossary/Application_context
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

El **contexto de aplicación** se refiere al {{glossary("browsing context", "contexto de navegación")}} de nivel superior de una [aplicación web](/es/docs/Web/Progressive_web_apps).
Determina cómo se presenta y se comporta el contexto de navegación de una aplicación, como una pestaña o una ventana.

Los desarrolladores web definen el contexto de aplicación en el [archivo de manifiesto de la aplicación web](/es/docs/Web/Progressive_web_apps/Manifest).
Para ello, usan el miembro [`scope`](/es/docs/Web/Progressive_web_apps/Manifest/Reference/scope) del manifiesto, que especifica el conjunto de URL que se consideran parte del contexto de aplicación y a las que se aplica el manifiesto.

El manifiesto se aplica una vez creado el contexto de aplicación, pero antes de que comience la navegación hacia una URL de inicio o un enlace profundo.
Una **URL de inicio** es la página inicial de la aplicación web.
Un **enlace profundo** es una URL que dirige a los usuarios a una página específica dentro de la aplicación web, sin pasar por la página principal.
El contexto de aplicación garantiza que el comportamiento y la presentación definidos de la aplicación se mantengan dentro de su ámbito.

Cuando se crea un contexto de aplicación, los navegadores deben navegar inmediatamente a una URL de inicio o a un enlace profundo.
Esta navegación reemplaza la entrada actual en el historial de navegación.
Si el contexto de aplicación se crea para navegar a un enlace profundo, el navegador va directamente a ese enlace; de lo contrario, navega a la URL de inicio.

Ten en cuenta que la URL de inicio no es necesariamente el valor del miembro [`start_url`](/es/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) del manifiesto. Los navegadores pueden ignorar el `start_url` especificado o permitir que los usuarios cambien su valor al añadir la aplicación web a la pantalla de inicio del dispositivo o al guardarla como marcador.

## Véase también

- [`scope`](/es/docs/Web/Progressive_web_apps/Manifest/Reference/scope)
- [Manifiestos de aplicaciones web](/es/docs/Web/Progressive_web_apps/Manifest)
- [Aplicaciones web progresivas (PWA)](/es/docs/Web/Progressive_web_apps)
