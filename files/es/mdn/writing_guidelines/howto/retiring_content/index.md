---
title: Cómo retirar una sección de contenido
short-title: Retiro de contenido
slug: MDN/Writing_guidelines/Howto/Retiring_content
page-type: mdn-writing-guide
sidebar: mdnsidebar
l10n:
  sourceCommit: ca0b474bb2e153ce72718cb304306e540065a888
---

Este artículo describe el proceso para retirar secciones completas del contenido de MDN Web Docs, conocido como _retiro_. El retiro es diferente de
[eliminar o mover páginas individuales](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting); se aplica cuando una sección completa ya no se mantiene activamente, ya no es relevante o ya no está alineada con los objetivos de MDN, y necesita retirarse de forma planificada y transparente. El contenido retirado no se elimina permanentemente: siempre se archiva en el [repositorio MDN Museum](https://github.com/mdn/museum).

El retiro es un evento muy poco frecuente y el proceso variará según las circunstancias. Esta guía ofrece una visión general de cuándo y cómo retirar una sección, y los pasos a seguir para hacerlo de forma responsable. Para ver una lista de las secciones que ya se han retirado, consulta [Contenido retirado](/es/docs/MDN/Writing_guidelines/Howto/Retiring_content/Retired_content).

En esta guía, una _sección_ significa un área autocontenida de MDN Web Docs, normalmente una carpeta de nivel superior (por ejemplo, `/Web/NOMBRE_DE_LA_SECCIÓN`) o un subárbol coherente (por ejemplo, `/Learn_web_development/RUTA/NOMBRE_DE_LA_SECCIÓN`), como una referencia tecnológica completa o una pista de aprendizaje completa. Este proceso _no_ se aplica a:

- Marcar una característica individual de la plataforma web como obsoleta dentro de un área que sigue activa, lo que sigue el [proceso de obsolescencia](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) estándar.
- Eliminar una página o guía individual, que está cubierto por la guía [Eliminar páginas](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#deleting_pages).

Si no estás seguro de si una eliminación califica como retiro, plantéalo en una [discusión de GitHub](https://github.com/orgs/mdn/discussions) antes de comenzar el proceso.

## Cuándo considerar retirar contenido

Puedes proponer retirar una sección del contenido de MDN Web Docs si se aplica alguna de las siguientes situaciones:

- La tecnología está obsoleta o ya no es relevante para la plataforma web.
- La sección duplica información que se mantiene mejor en otro lugar (como un sitio de documentación oficial de un framework).
- La sección no está alineada con la [estrategia de contenido de MDN](/es/docs/MDN/Writing_guidelines/What_we_write#topics_that_belong_on_mdn_web_docs).
- El costo de mantenimiento supera el valor para las personas usuarias, según indican los datos de uso y los comentarios de las personas usuarias.

El retiro debe ser siempre un proceso deliberado y visible. Las eliminaciones a gran escala nunca deben ocurrir sin discusión o aviso. La decisión final de retirar una sección recae en el equipo de MDN.

> [!NOTE]
> Si quieres eliminar páginas individuales en lugar de una sección completa, consulta nuestra guía [Eliminar páginas](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#deleting_pages). Para obtener orientación sobre cómo marcar características individuales como obsoletas, consulta [Cómo etiquetar una tecnología](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

## El proceso de retiro

Retirar una sección del contenido de MDN Web Docs implica dos fases: llegar a un acuerdo y luego eliminar el contenido.

### Fase 1: Proceso de decisión

El retiro debe ser acordado por el equipo de MDN y sus socios. La discusión puede tener lugar en nuestros [canales de comunicación](/en-US/docs/MDN/Community/Communication_channels), mediante una [discusión de GitHub](https://github.com/orgs/mdn/discussions) o en nuestras reuniones editoriales (que se celebran cada dos semanas).

Si una sección se considera seriamente para su retiro, se debe abrir una discusión de GitHub para registrar la decisión y el proceso. La discusión debe ser clara sobre:

- El motivo de la eliminación.
- El impacto de la eliminación.
- Que las partes interesadas relevantes están informadas y han sido consultadas.
- Que se han considerado enfoques alternativos.

En algunos casos, la decisión también puede implicar **recopilar comentarios de las personas usuarias de MDN**. Esto puede incluir:

- Realizar una encuesta de personas usuarias.
- Solicitar comentarios mediante GitHub u otros [canales de comunicación de MDN](/en-US/docs/MDN/Community/Communication_channels).

El objetivo es confirmar que la sección ya no satisface las necesidades de las personas usuarias y que no existe un camino claro hacia su mantenimiento sostenible.

Si se llega a un acuerdo para retirar una sección, se debe establecer un cronograma, normalmente entre **3 y 6 meses**. Los motivos y el cronograma deben registrarse en la discusión de GitHub. Debe quedar claro en la discusión que el contenido se archivará y no se eliminará permanentemente.

Si se decide _no_ retirar el contenido, esta decisión debe comunicarse junto con los motivos a través del canal de comunicación original.

### Fase 2: Eliminar el contenido

Una vez que se ha llegado a un acuerdo, sigue estos pasos para eliminar el contenido.

#### Añadir un banner de aviso de retiro

Añade un [banner de aviso](/es/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) en la parte superior de _cada artículo_ de la sección que se va a retirar. El banner debe indicar claramente:

- Que la sección se eliminará del sitio web.
- El plazo y la fecha previstos para la eliminación.
- Que el contenido se archivará.
- Un enlace a la discusión de GitHub para obtener más detalles.

Usa la siguiente plantilla:

```md
> [!NOTE]
> Esta sección de MDN ya no se mantiene y se eliminará del sitio web en 6 meses (para MES AÑO). El contenido se archivará en el [MDN Museum](https://github.com/mdn/museum). Consulta [esta discusión](ENLACE) para obtener más información.
```

Este aviso garantiza la transparencia y da tiempo a las personas usuarias para adaptarse.

#### Archivar y eliminar el contenido

Una vez transcurrido el período de retiro acordado, el contenido se puede eliminar de MDN Web Docs de la siguiente manera:

1. **Archiva el contenido.** Copia la sección al [repositorio MDN Museum](https://github.com/mdn/museum) con fines de archivo. Mantén el contenido en un directorio que coincida con la ruta URL original. Por ejemplo, el contenido de `https://developer.mozilla.org/en-US/docs/Games` iría en un directorio `/docs/games/` del repositorio del museo. Esto preserva el historial de contenido de MDN mientras mantiene el material obsoleto fuera del sitio activo.

2. **Elimina el contenido y añade redirecciones.** Usa el [comando `delete`](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#deleting_pages) para eliminar las páginas y configurar redirecciones. Las redirecciones deben apuntar a las personas usuarias al contenido alternativo más relevante si está disponible. Si no hay una alternativa adecuada, redirige a la entrada correspondiente de la página [Contenido retirado](/es/docs/MDN/Writing_guidelines/Howto/Retiring_content/Retired_content) (usando el ancla específica de la sección, por ejemplo, `#section_name`) para que las personas lectoras puedan encontrar contexto sobre lo que se eliminó y seguir el enlace a la versión archivada. Evita redirigir a la página de inicio de MDN Web Docs, ya que deja a las personas lectoras sin una explicación.

3. **Limpia las referencias.** Elimina o actualiza cualquier referencia a la sección retirada en todo MDN, incluidas las definiciones de barras laterales, las páginas de aterrizaje y los enlaces cruzados de otros artículos. Añadir redirecciones (consulta el paso 2) evitará enlaces rotos, pero la mejor práctica es actualizar directamente el contenido que hace referencia a la sección.

4. **Crea un issue para las actualizaciones de interfaz.** Algunas secciones de la interfaz del sitio web, como los menús de navegación y las secciones de la página de inicio, no forman parte del repositorio `content` y las gestiona el equipo de plataforma. Crea un issue en el repositorio [mdn/fred](https://github.com/mdn/fred/) para comprobar si se necesitan cambios de interfaz para eliminar las referencias al contenido retirado. Si es así, coordina la eliminación del contenido y la actualización de la interfaz para que se implementen al mismo tiempo.

> [!WARNING]
> No elimines contenido permanentemente sin archivarlo primero.

## Véase también

- [Cómo crear, editar, mover o eliminar páginas](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)
- [Qué escribimos](/es/docs/MDN/Writing_guidelines/What_we_write)
- [Experimental, obsoleto y en desuso](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)
- [Banners y avisos](/es/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
