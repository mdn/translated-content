---
title: bfcache
slug: Glossary/bfcache
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La **back/forward** caché, o **bfcache**, es una funcionalidad de los navegadores modernos que mejora el rendimiento y permite una navegación instantánea hacia atrás o hacia adelante entre páginas visitadas anteriormente. Para lograrlo, almacena una instantánea completa de la página cuando el usuario sale de ella; así, el navegador puede restaurarla rápidamente si el usuario decide volver, sin tener que repetir las solicitudes de red necesarias para cargarla.

La instantánea contiene la página completa en memoria, incluido el heap de JavaScript; el código en ejecución se pausa cuando el usuario navega a otra página y se reanuda cuando vuelve a ella. En cambio, una entrada normal de la caché HTTP contiene únicamente las respuestas a solicitudes anteriores. Por eso, la bfcache ofrece resultados más rápidos que la caché HTTP.

El inconveniente es que las entradas de la bfcache requieren más recursos y añaden complejidad a la hora de representar el código en ejecución. Algunas características del código (por ejemplo, el manejador [`unload`](/es/docs/Web/API/Window/unload_event)) no son compatibles, por lo que su presencia en una página impide que esta use la bfcache.

La bfcache es excelente para el rendimiento, así que te conviene asegurarte de que nada impida que tus páginas la usen. Puedes usar la [API `notRestoredReasons`](/es/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) para supervisar si se bloquea el uso de la bfcache en las páginas y por qué motivos.

## Véase también

- [Memoria caché atrás/adelante](https://web.dev/articles/bfcache?hl=es-419) en web.dev (2023)
