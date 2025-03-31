---
title: Criterios para la inclusión en MDN Web Docs
slug: MDN/Writing_guidelines/Criteria_for_inclusion
original_slug: MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{MDNSidebar}}

Este artículo describe, en detalle, los criterios para que el contenido sea incluido en MDN Web Docs, el proceso de solicitud para incluir nueva documentación y las expectativas y pautas para una parte que solicita.

Esto está dirigido a proyectos más grandes. Para sugerir una nueva página o artículo, consulta la sección [Sugerir contenido](/es/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) en la página "Qué escribimos".

## Tecnologías de estándares web

El alcance de MDN Web Docs es documentar tecnologías de estándares web que están en una especificación publicada por un organismo de estándares confiable y son compatibles con al menos un navegador estable. Estos criterios señalan suficiente interés, estabilidad e "intención de implementación" por parte de la industria web en general. Por lo tanto, creemos que esas tecnologías son una apuesta segura para nosotros para gastar nuestro tiempo y esfuerzo en documentarlas. Antes de eso, una tecnología web o una función podrían ser propensas a ser canceladas debido a la falta de interés o podrían ser tan inestables que podrían cambiar significativamente, lo que requeriría innecesariamente mucha reescritura (lo que intentamos evitar cuando sea posible).

## Tecnologías que no son de estándares web

Las tecnologías que no son de estándares web son tecnologías que no siguen nuestros criterios resumidos anteriormente. Normalmente no las consideraríamos para la documentación en MDN Web Docs.

Nuestra declaración de misión es _"proporcionar a los desarrolladores la información que necesitan para construir proyectos fácilmente en la web abierta"_. Esto sugiere que deberíamos considerar documentar tecnologías que sean útiles para los desarrolladores web, incluso si no son estándares web abiertos, en la vía de estándares, etc.

Si quieres considerar una tecnología que no sea estándar web para su inclusión en MDN Web Docs, debes asegurarte de que cumpla con los criterios a continuación.

## Criterios para la inclusión en MDN Web Docs

Las tecnologías deben cumplir con los criterios descritos aquí para ser consideradas para ser documentadas en MDN Web Docs.

### Ser abiertas y no propietarias

En MDN Web Docs, somos partidarios de las tecnologías abiertas. No apoyamos los ecosistemas tecnológicos cerrados que están controlados por una sola entidad, que no están abiertos para las contribuciones de cualquier parte interesada y que no son interoperables en múltiples plataformas y sistemas. Creemos que la tecnología funciona mejor para todos cuando se crea abiertamente.

### Estar expuestas en la web y estar relacionadas con tecnologías web

Nuestro mandato central son las tecnologías de estándares web; no tiene sentido comenzar a documentar tecnologías que no están relacionadas con la web o que no tienen ningún interés para los desarrolladores web.

### Mostrar señales de interés y adopción

No queremos gastar nuestro tiempo documentando una tecnología que no tenga señales de interés y adopción por parte de la industria. Puede ser que sea demasiado temprano para comenzar a documentar la tecnología, y podríamos considerarla para ser documentada en MDN Web Docs en el futuro.

### No mostrar señales de estar obsoletas o ser reemplazadas

Relacionado con el punto anterior, tampoco queremos gastar nuestro tiempo documentando una tecnología que esté en la etapa tardía de su ciclo de vida y ya esté mostrando signos de declive en el interés.

### No tener un recurso de documentación establecido en otro lugar

Hay muchas bibliotecas y _frameworks_ en existencia, que no son estándares web pero están construidos sobre tecnologías web y son muy populares en la industria web. No documentamos ninguno de estos porque, en general, todos tienen recursos de documentación establecidos ya. Sería absurdo competir con el recurso oficial de un _framework_ popular, ya que sería una pérdida de tiempo y probablemente terminaría confundiendo a los desarrolladores que intentan aprender la tecnología.

### Tener una comunidad dispuesta a escribir y mantener la documentación

El equipo de MDN Web Docs se concentra en documentar la plataforma web abierta. Si quieres que se considere una tecnología en esta área para la documentación en MDN Web Docs, necesitarás tener una comunidad reunida que esté dispuesta a escribir la documentación y mantenerla después de completarla. Nuestro equipo está feliz de proporcionar orientación en tales casos, incluidas ediciones y comentarios, pero no tenemos los recursos para más que eso.

> [!NOTE]
> El trabajo de MDN Web Docs se lleva a cabo en GitHub y 'en abierto'. Tu equipo debería estar familiarizado con git y GitHub y sentirse cómodo trabajando en código abierto.

## Proceso para seleccionar la nueva tecnología

Si una tecnología parece ser un buen candidato para ser documentada en MDN Web Docs, puedes iniciar una discusión en las [discusiones comunitarias de GitHub](/es/docs/MDN/Community/Communication_channels#github_discussions) para proponer y discutir la inclusión de esta tecnología. Esta sección describe qué debe incluir la propuesta.

### Presentar la propuesta

Las tecnologías serán consideradas para su inclusión en MDN Web Docs caso por caso. Para su consideración, deberías enviar una propuesta titulada "Propuesta para documentar una nueva tecnología en MDN Web Docs". Necesitaríamos la siguiente información de tu parte en la propuesta:

- La tecnología, su propósito central/casos de uso y audiencia de desarrolladores objetivo.
- ¿Qué tipo de interés hay en la industria o la comunidad en torno a la tecnología?
  - ¿Muchos desarrolladores web la están usando? ¿Cómo es la adopción en la industria?
  - ¿Muchos desarrolladores web quieren o necesitan esta información?
  - ¿Cuál es el tamaño de la audiencia objetivo para esta información? Las estadísticas de apoyo ayudarían si las tienes.
- ¿Cómo se relaciona la tecnología con la tecnología web central y los navegadores web? Los detalles útiles incluyen:
  - ¿Usa HTML y CSS pero generalmente no se envía a la web?
  - ¿Está soportado en navegadores web a través de un polyfill?
- ¿Qué documentación o recursos ya están disponibles que cubren la tecnología?
- ¿Cuánta documentación sería necesario agregar a MDN Web Docs?
  - Enumera el número esperado de guías, tutoriales, páginas de referencia para elementos/métodos/atributos, etc.
  - Proporciona una tabla de contenido de alto nivel.
  - Menciona el tipo de características "avanzadas" que crees que podrías necesitar para este recurso, más allá de las páginas de documentación básicas. ¿Esperas incluir videos incrustados, ejemplos de código interactivos, etc.?
- ¿Quién escribirá la documentación? ¿Quiénes son y por qué son adecuados para el trabajo?
- ¿Cómo se mantendrá la documentación?

No necesitas proporcionarnos cientos de páginas de detalle en esta etapa (de hecho, preferiríamos que no lo hicieras). Un par de párrafos sobre cada uno de los puntos anteriores son más que adecuados.

> [!NOTE]
> MDN Web Docs es principalmente un sitio en inglés (en-US). El idioma principal para tu proyecto debe ser en inglés de EE. UU.

### Esperar una respuesta

Consideraremos la tecnología y la información que envíes en la propuesta y responderemos con una de las siguientes respuestas:

- **No**: No creemos que esto cumpla con los criterios para ser documentado en MDN Web Docs.
- **Quizás**: No estamos seguros si es adecuado para documentar en MDN Web Docs y nos gustaría hacer algunas preguntas adicionales.
- **Sí**: Creemos que es apropiado incluirlo en MDN Web Docs.

Si la tecnología es un buen candidato, el equipo te ayudará a comenzar con la documentación.

## Pautas del proyecto para documentar la nueva tecnología

Si la tecnología que has elegido es aceptada para la documentación en MDN Web Docs, el siguiente paso es comenzar.

Para asegurar que tu proyecto para documentar la nueva tecnología en MDN Web Docs sea exitoso, necesitaremos que tengas lo siguiente en su lugar:

- Un equipo dedicado
- Un plan de proyecto y hoja de ruta
- Pautas y estándares de escritura
- Una estructura de documentación intuitiva
- Un plan de mantenimiento

### Equipo dedicado

Asegúrate de tener un equipo dedicado que esté presente tanto para escribir la documentación inicial como para mantenerla en el futuro con las actualizaciones necesarias.

Piensa en cuánto trabajo hay y cuántas personas podrías necesitar para eso.

- Si es un proyecto grande, podrías beneficiarte de tener algunos escritores, un revisor técnico para verificar que el trabajo sea técnicamente preciso, un editor de texto para limpiar el lenguaje, alguien para escribir ejemplos de código, etc.
- En un proyecto más pequeño, uno o dos personas podrían asumir varios roles. Cómo quieras construir el equipo está bien siempre y cuando funcione para ti.

Un miembro del equipo de MDN Web Docs será asignado a tu proyecto para proporcionar orientación sobre el lado de MDN Web Docs.

Deberías asignar uno (o dos) líderes de equipo que puedan comunicarse con el miembro del equipo de MDN Web Docs.

El representante de MDN Web Docs te ayudará a obtener los permisos necesarios para que todos en tu equipo trabajen en la [organización de MDN en GitHub](https://github.com/mdn).

### Plan de proyecto y hoja de ruta

Crea un plan para el proyecto: tareas, fechas estimadas de finalización y hitos que te gustaría rastrear para asegurarte de que estás progresando de manera constante.

Si el proyecto es grande, considera asignar a uno de tus miembros del equipo como el gerente de proyecto. También deberías considerar escribir un plan de subproyecto para un lanzamiento inicial que abarque el conjunto mínimo de documentación que es útil publicar (un _producto mínimo viable_); puedes seguirlo con más adiciones más adelante.

Si el proyecto de documentación es pequeño, aún necesitarías mantener un registro de qué se ha hecho y qué no, en qué etapa está cada parte de la documentación (por ejemplo, no iniciado, en progreso, borrador escrito, revisado, hecho) y quién está trabajando en qué.

### Pautas y estándares de escritura

Estas [pautas](/es/docs/MDN/Writing_guidelines) indican cómo esperamos que se escriban los documentos para MDN Web Docs.

Si tienes pautas adicionales para los documentos que estás escribiendo, esperamos que esta guía se agregue y se mantenga actualizada.

En términos de estándares, se espera que mantengas un nivel razonable de calidad de escritura para que tu documentación permanezca en MDN Web Docs. Tu representante de MDN Web Docs trabajará contigo para que quede claro lo que se espera.

### Estructura de documentación intuitiva

Si pasaste por el proceso de presentación de propuestas, entonces deberías tener un esbozo aproximado de lo que vas a escribir para esta tecnología. En este punto, deberías refinar eso en un plan de estructura del sitio: piensa en cuál será la jerarquía del documento y dónde encajará y se vinculará todo.

Cada proyecto es diferente, pero aproximadamente recomendaríamos algo así:

```plaintext
Página de inicio
|
------Referencia
      |
      --------Elementos
      |
      --------Métodos
      |
      --------¿Otro tipo de página de referencia?
|
------Guías/tutoriales
|
------Ejemplos
```

Cada tipo de página que utilizarás en tu proyecto debería tener una plantilla de página para que otros copien la estructura. Deberías decidir sobre esto desde el principio.

Consulta nuestra sección sobre [tipos de página](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types). Si es necesario hacer adiciones, por favor comunícate con tu representante de MDN Web Docs.

### Plan de mantenimiento

La documentación de esta tecnología deberá mantenerse para permanecer en MDN Web Docs:

- El contenido y los archivos de MDN Web Docs se almacenan en GitHub. Cuando otros realicen cambios en la documentación para tu tecnología, un miembro de tu equipo debe revisar esos cambios para asegurarse de que el contenido siga siendo bueno. Puedes hacer seguimiento de las solicitudes de extracción (PRs) abiertas a través de la función de notificación de GitHub.
- Cuando ocurran cambios en la tecnología que requieran que la documentación se actualice, tu equipo deberá hacer las actualizaciones correspondientes, manteniendo los mismos estándares que la documentación original.

Si no se observan cambios positivos durante un período de seis meses y la documentación parece estar en alguno de los siguientes estados:

- Obsoleta o no mantenida
- Estancada sin terminar
- Baja calidad
- Volviéndose obsoleta

Entonces la documentación de esta tecnología se considerará muerta. Después de una discusión entre tu equipo y el representante del equipo de MDN Web Docs, la documentación será eliminada.

Esperamos que entiendas que necesitamos ser estrictos en estos asuntos: no podemos permitir que el sitio se llene de documentación de mala calidad, incompleta o obsoleta.
