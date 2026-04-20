---
title: Criterios para la inclusión en MDN Web Docs
short-title: Criterios de inclusión
slug: MDN/Writing_guidelines/Criteria_for_inclusion
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Este artículo describe, en detalle, los criterios para que el contenido se incluya en MDN Web Docs, el proceso de solicitud para incluir nueva documentación, y las expectativas y directrices para una parte solicitante.

Esto está dirigido a proyectos más grandes. Para sugerir una página o artículo nueva, consulte la sección [Sugerir contenido](/es/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) en la página "Qué escribimos".

## Tecnologías de estándares web

El alcance de MDN Web Docs es documentar tecnologías de estándares web que están en una especificación publicada por un organismo de estándares confiable y son compatibles con al menos un navegador estable. Estos criterios señalan suficiente interés, estabilidad e "intención de implementación" por parte de la industria web en general. Por lo tanto, creemos que esas tecnologías son una apuesta segura para nosotros para gastar nuestro tiempo y esfuerzo en documentarlas. Antes de eso, una tecnología web o una característica podría ser propensa a cancelarse debido a la falta de interés o podría ser tan inestable que podría cambiar significativamente, lo que implicaría innecesariamente mucha reescritura (lo que intentamos evitar cuando sea posible).

## Tecnologías que no son de estándares web

Las tecnologías que no son de estándares web son tecnologías que no siguen nuestros criterios resumidos anteriormente. Normalmente no las consideraríamos para la documentación en MDN Web Docs.

Nuestra declaración de misión es _"proporcionar a los desarrolladores la información que necesitan para construir fácilmente proyectos en la web abierta"_. Esto sugiere que deberíamos considerar documentar tecnologías que sean útiles para los desarrolladores web, incluso si no son estándares web abiertos, en la vía de estándares, etc.

Si desea considerar una tecnología que no sea estándar web para su inclusión en MDN Web Docs, debe asegurarse de que cumpla con los criterios a continuación.

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

Hay muchas bibliotecas y marcos de trabajo en existencia, que no son estándares web pero están construidos sobre tecnologías web y son muy populares en la industria web. No documentamos ninguno de estos porque, en general, todos tienen recursos de documentación establecidos ya. Sería absurdo competir con el recurso oficial de un marco de trabajo popular; hacerlo sería una pérdida de tiempo y probablemente terminaría confundiendo a los desarrolladores que intentan aprender la tecnología.

### Tener una comunidad dispuesta a escribir y mantener la documentación

El equipo de MDN Web Docs se concentra en documentar la plataforma web abierta. Si desea que se considere una tecnología en esta área para la documentación en MDN Web Docs, necesitará tener una comunidad reunida que esté dispuesta a escribir la documentación y mantenerla después de completarla. Nuestro equipo está feliz de proporcionar orientación en tales casos, incluyendo ediciones y comentarios, pero no tenemos los recursos para más que eso.

> [!NOTE]
> El trabajo de MDN Web Docs se lleva a cabo en GitHub y "en abierto". Su equipo debería estar versado en git y GitHub y sentirse cómodo trabajando en código abierto.

## Proceso para seleccionar la nueva tecnología

Si una tecnología parece ser un buen candidato para ser documentada en MDN Web Docs, puede iniciar una discusión en las [discusiones comunitarias de GitHub](/es/docs/MDN/Community/Communication_channels#github_discussions) para proponer y discutir la inclusión de esta tecnología. Esta sección describe qué debe incluir la propuesta.

### Presentar la propuesta

Las tecnologías serán consideradas para su inclusión en MDN Web Docs caso por caso. Para su consideración, debería enviar una propuesta titulada "Propuesta para documentar una nueva tecnología en MDN Web Docs". Necesitaríamos la siguiente información de su parte en la propuesta:

- La tecnología, su propósito central/casos de uso y audiencia de desarrolladores objetivo.
- ¿Qué tipo de interés hay en la industria o la comunidad en torno a la tecnología?
  - ¿Muchos desarrolladores web la están usando? ¿Cómo es la adopción en la industria?
  - ¿Muchos desarrolladores web quieren o necesitan esta información?
  - ¿Cuál es el tamaño de la audiencia objetivo para esta información? Las estadísticas de apoyo ayudarían si las tiene.
- ¿Cómo se relaciona la tecnología con la tecnología web central y los navegadores web? Los detalles útiles incluyen:
  - ¿Usa HTML y CSS pero generalmente no se envía a la web?
  - ¿Está soportado en navegadores web a través de un polyfill?
- ¿Qué documentación o recursos ya están disponibles que cubren la tecnología?
- ¿Cuánta documentación sería necesario agregar a MDN Web Docs?
  - Enumere el número esperado de guías, tutoriales, páginas de referencia para elementos/métodos/atributos, etc.
  - Proporcione una tabla de contenido de alto nivel.
  - Mencione el tipo de características "avanzadas" que cree que podría necesitar para este recurso, más allá de las páginas de documentación básicas. ¿Espera incluir videos incrustados, ejemplos de código interactivos, etc.?
- ¿Quién escribirá la documentación? ¿Quiénes son y por qué son adecuados para el trabajo?
- ¿Cómo se mantendrá la documentación?

No necesita proporcionarnos cientos de páginas de detalle en esta etapa (de hecho, preferiríamos que no lo hiciera). Un par de párrafos sobre cada uno de los puntos anteriores son más que adecuados.

> [!NOTE]
> MDN Web Docs es principalmente un sitio en inglés (en-US). El idioma principal para su proyecto debe ser en inglés de EE. UU.

### Esperar una respuesta

Consideraremos la tecnología y la información que envíe en la propuesta y responderemos con una de las siguientes respuestas:

- **No**: No creemos que esto cumpla con los criterios para ser documentado en MDN Web Docs.
- **Quizás**: No estamos seguros si es adecuado para documentar en MDN Web Docs y nos gustaría hacer algunas preguntas adicionales.
- **Sí**: Creemos que es apropiado incluirlo en MDN Web Docs.

Si la tecnología es un buen candidato, el equipo le ayudará a comenzar con la documentación.

## Directrices del proyecto para documentar la nueva tecnología

Si la tecnología que ha elegido es aceptada para la documentación en MDN Web Docs, el siguiente paso es comenzar.

Para asegurar que su proyecto para documentar la nueva tecnología en MDN Web Docs sea exitoso, necesitaremos que tenga lo siguiente en su lugar:

- Un equipo dedicado
- Un plan de proyecto y hoja de ruta
- Directrices y estándares de escritura
- Una estructura de documentación intuitiva
- Un plan de mantenimiento

### Equipo dedicado

Asegúrese de tener un equipo dedicado que esté presente tanto para escribir la documentación inicial como para mantenerla en el futuro con las actualizaciones necesarias.

Piense en cuánto trabajo hay y cuántas personas podría necesitar para eso.

- Si es un proyecto grande, podría beneficiarse de tener algunos escritores, un revisor técnico para verificar que el trabajo sea técnicamente preciso, un editor de texto para limpiar el lenguaje, alguien para escribir ejemplos de código, etc.
- En un proyecto más pequeño, uno o dos personas podrían asumir varios roles. Como quiera construir el equipo está bien siempre que funcione para usted.

Un miembro del equipo de MDN Web Docs será asignado a su proyecto para proporcionar orientación sobre el lado de MDN Web Docs.

Debe asignar uno (o dos) líderes de equipo que puedan comunicarse con el miembro del equipo de MDN Web Docs.

El representante de MDN Web Docs le ayudará a obtener los permisos necesarios para que todos en su equipo trabajen en la [organización de MDN en GitHub](https://github.com/mdn).

### Plan de proyecto y hoja de ruta

Cree un plan para el proyecto: tareas, fechas estimadas de finalización e hitos que le gustaría rastrear para asegurarse de que está progresando de manera constante.

Si el proyecto es grande, considere asignar a uno de los miembros de su equipo como el gerente de proyecto. También debería considerar escribir un plan de subproyecto para un lanzamiento inicial que abarque el conjunto mínimo de documentación que es útil publicar (un _producto mínimo viable_); puede seguirlo con más adiciones más tarde.

Si el proyecto de documentación es pequeño, aún necesitaría mantener un registro de qué se ha hecho y qué no, en qué etapa está cada parte de la documentación (por ejemplo, no iniciado, en progreso, borrador escrito, revisado, hecho) y quién está trabajando en qué.

### Directrices y estándares de escritura

Estas [directrices](/es/docs/MDN/Writing_guidelines) indican cómo esperamos que se escriban los documentos para MDN Web Docs.

Si tiene directrices adicionales para los documentos que está escribiendo, esperamos que esta guía se agregue y se mantenga actualizada.

En términos de estándares, se espera que mantenga un nivel razonable de calidad de escritura para que su documentación permanezca en MDN Web Docs. Su representante de MDN Web Docs trabajará con usted para dejar claro lo que se espera.

### Estructura de documentación intuitiva

Si pasó por el proceso de presentación de propuestas, entonces debería tener un esquema aproximado de lo que va a escribir para esta tecnología. En este punto, debería refinar eso en un plan de estructura del sitio: piense en cuál será la jerarquía del documento y dónde encajará y se vinculará todo.

Cada proyecto es diferente, pero recomendamos el siguiente árbol de directorios:

```plain
├── Guides
│   ├── guide_one
│   ├── guide_two
│   └── index.md
├── index.md
├── Reference
│   ├── Elements
│   ├── Methods
│   ├── Others ?
│   └── index.md
└── Tutorials
    ├── tutorial_one
    ├── tutorial_two
    └── index.md
```

Cada tipo de página que usará en su proyecto debería tener una plantilla de página para que otros copien la estructura. Debe decidir sobre esto desde el principio.

Consulte nuestra sección sobre [tipos de página](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types). Si es necesario hacer adiciones, comuníquese con su representante de MDN Web Docs.

### Plan de mantenimiento

La documentación de esta tecnología deberá mantenerse para permanecer en MDN Web Docs:

- El contenido y los archivos de MDN Web Docs se almacenan en GitHub. Cuando otros realicen cambios en la documentación para su tecnología, un miembro de su equipo debe revisar esos cambios para asegurarse de que el contenido siga siendo bueno. Puede hacer seguimiento de las solicitudes de extracción (PRs) abiertas a través de la función de notificación de GitHub.
- Cuando ocurran cambios en la tecnología que requieran que la documentación se actualice, su equipo deberá hacer las actualizaciones correspondientes, manteniendo los mismos estándares que la documentación original.

Si no se observan cambios positivos durante un período de seis meses y la documentación parece estar en alguno de los siguientes estados:

- Obsoleta o no mantenida
- Estancada sin terminar
- Baja calidad
- Volviéndose obsoleta

Entonces la documentación de esta tecnología se considerará muerta. Después de una discusión entre su equipo y el representante del equipo de MDN Web Docs, la documentación será eliminada.

Esperamos que entienda que necesitamos ser estrictos en estos asuntos: no podemos permitir que el sitio se llene de documentación de mala calidad, incompleta u obsoleta.
