---
title: Cómo retirar una sección de contenido
short-title: Retirar contenido
slug: MDN/Writing_guidelines/Howto/Retiring_content
l10n:
  sourceCommit: ca0b474bb2e153ce72718cb304306e540065a888
---

Este artículo describe el proceso para retirar secciones completas del contenido de MDN Web Docs, lo que se conoce como _retiro_. Retirar es diferente de [eliminar o mover páginas individuales](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting); aplica cuando una sección completa ya no se mantiene de forma activa, ya no es relevante o no está alineada con los objetivos de MDN, y debe retirarse de manera planificada y transparente. El contenido retirado no se elimina de forma permanente: siempre se archiva en el [repositorio MDN Museum](https://github.com/mdn/museum).

Retirar contenido es algo muy poco frecuente, y el proceso varía según las circunstancias. Esta guía ofrece un panorama de cuándo y cómo retirar una sección, y de los pasos que debes seguir para hacerlo de forma responsable. Para ver la lista de secciones que ya se han retirado, consulta [Contenido retirado](/es/docs/MDN/Writing_guidelines/Howto/Retiring_content/Retired_content).

En esta guía, una _sección_ es un área autocontenida de MDN Web Docs: normalmente una carpeta de primer nivel (por ejemplo, `/Web/NOMBRE_DE_LA_SECCION`) o un subárbol coherente (por ejemplo, `/Learn_web_development/RUTA/NOMBRE_DE_LA_SECCION`), como la referencia completa de una tecnología o una ruta de aprendizaje completa. Este proceso _no_ aplica a:

- Marcar como obsoleta una característica individual de la plataforma web dentro de un área que por lo demás sigue activa, lo cual sigue el [proceso estándar para marcar contenido obsoleto](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).
- Eliminar una sola página o guía, lo cual se cubre en la guía [Eliminar páginas](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#eliminar_páginas).

Si no tienes claro si una eliminación califica como retiro, plantéalo en una [discusión de GitHub](https://github.com/orgs/mdn/discussions) antes de iniciar el proceso.

## Cuándo considerar retirar contenido

Puedes proponer retirar una sección del contenido de MDN Web Docs si se cumple alguna de estas condiciones:

- La tecnología está obsoleta o ya no es relevante para la plataforma web.
- La sección duplica información que se mantiene mejor en otro lugar (como el sitio de documentación oficial de un framework).
- La sección no está alineada con la [estrategia de contenido de MDN](/es/docs/MDN/Writing_guidelines/What_we_write#temas_que_pertenecen_a_mdn_web_docs).
- El costo de mantenimiento supera el valor para las personas que lo usan, según los datos de uso y los comentarios recibidos.

Retirar contenido siempre debe ser un proceso deliberado y visible. Las eliminaciones a gran escala nunca deben ocurrir sin discusión o aviso previo. La decisión final de retirar una sección corresponde al equipo de MDN.

> [!NOTE]
> Si lo que quieres es eliminar páginas individuales en lugar de una sección completa, consulta nuestra guía [Eliminar páginas](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#eliminar_páginas). Para orientación sobre cómo etiquetar características individuales como obsoletas, consulta [Cómo etiquetar una tecnología](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

## El proceso de retiro

Retirar una sección del contenido de MDN Web Docs consta de dos fases: llegar a un acuerdo y luego eliminar el contenido.

### Fase 1: Proceso de decisión

El retiro debe acordarse con el equipo de MDN y sus socios. La discusión puede ocurrir en nuestros [canales de comunicación](/es/docs/MDN/Community/Communication_channels), mediante una [discusión de GitHub](https://github.com/orgs/mdn/discussions) o en nuestras llamadas editoriales (que se realizan cada dos semanas).

Si una sección se está considerando seriamente para retiro, debe abrirse una discusión de GitHub que registre la decisión y el proceso. La discusión debe dejar claro:

- El razonamiento detrás de la eliminación.
- El impacto de la eliminación.
- Que las partes interesadas relevantes están al tanto y han sido consultadas.
- Que se han considerado enfoques alternativos.

En algunos casos, la decisión también puede implicar **recopilar comentarios de las personas que usan MDN**. Esto puede incluir:

- Realizar una encuesta.
- Pedir comentarios mediante GitHub u otros [canales de comunicación de MDN](/es/docs/MDN/Community/Communication_channels).

El objetivo es confirmar que la sección ya no satisface las necesidades de las personas que la usan y que no hay una vía clara para su mantenimiento sostenible.

Si se llega a un acuerdo para retirar una sección, debe fijarse un plazo, normalmente **entre 3 y 6 meses**. Las razones y el plazo deben registrarse en la discusión de GitHub. En la discusión debe quedar claro que el contenido se archivará, no se eliminará de forma permanente.

Si se decide _no_ retirar la sección, esto debe comunicarse junto con las razones a través del canal de comunicación original.

### Fase 2: Eliminar el contenido

Una vez que se ha llegado a un acuerdo, sigue estos pasos para eliminar el contenido.

#### Agregar un aviso de retiro

Agrega un [banner de nota](/es/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) en la parte superior de _cada artículo_ de la sección que se va a retirar. El aviso debe indicar claramente:

- Que la sección se va a eliminar del sitio web.
- El plazo y la fecha previstos para la eliminación.
- Que el contenido se archivará.
- Un enlace a la discusión de GitHub con más detalles.

Usa la siguiente plantilla:

```md
> [!NOTE]
> Esta sección de MDN ya no recibe mantenimiento y se eliminará del sitio web en 6 meses (para MES AÑO). El contenido se archivará en el [MDN Museum](https://github.com/mdn/museum). Consulta [esta discusión](ENLACE) para más información.
```

Este aviso garantiza la transparencia y da tiempo a las personas para adaptarse.

#### Archivar y eliminar el contenido

Una vez transcurrido el periodo de retiro acordado, el contenido se puede eliminar de MDN Web Docs de la siguiente manera:

1. **Archiva el contenido.** Copia la sección al [repositorio MDN Museum](https://github.com/mdn/museum) con fines de archivo. Mantén el contenido en un directorio que coincida con la ruta de la URL original. Por ejemplo, el contenido en `https://developer.mozilla.org/es/docs/Games` iría en un directorio `/docs/games/` del repositorio del museo. Esto preserva el historial del contenido de MDN y a la vez mantiene el material obsoleto fuera del sitio activo.

2. **Elimina el contenido y agrega redirecciones.** Usa el [comando `delete`](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#eliminar_páginas) para eliminar las páginas y configurar las redirecciones. Las redirecciones deben llevar a las personas al contenido alternativo más relevante, si existe. Si no hay una alternativa adecuada, redirige a la entrada correspondiente en la página de listado [Contenido retirado](/es/docs/MDN/Writing_guidelines/Howto/Retiring_content/Retired_content) (usando el ancla específica de la sección, por ejemplo, `#nombre_de_la_seccion`), para que quien llegue pueda encontrar contexto sobre lo que se eliminó y seguir el enlace a la versión archivada. Evita redirigir a la página de inicio de MDN Web Docs, ya que eso deja a quien lee sin ninguna explicación.

3. **Limpia las referencias.** Elimina o actualiza cualquier referencia a la sección retirada en todo MDN, incluidas las definiciones de barras laterales, las páginas de aterrizaje y los enlaces desde otros artículos. Agregar redirecciones (consulta el paso 2) evitará los enlaces rotos, pero la buena práctica es actualizar directamente el contenido que hace referencia.

4. **Abre un issue para los cambios en la interfaz.** Algunas partes de la interfaz del sitio web, como los menús de navegación y las secciones de la página de inicio, no forman parte del repositorio `content`, sino que las gestiona el equipo de plataforma. Abre un issue en el repositorio [mdn/fred](https://github.com/mdn/fred/) para verificar si se necesitan cambios en la interfaz que eliminen las referencias al contenido retirado. Si es así, coordina la eliminación del contenido y la actualización de la interfaz para que se despliegue al mismo tiempo.

> [!WARNING]
> No elimines contenido de forma permanente sin archivarlo primero.

## Véase también

- [Cómo crear, editar, mover o eliminar páginas](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)
- [Qué escribimos](/es/docs/MDN/Writing_guidelines/What_we_write)
- [Experimental, obsoleto y en desuso](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)
- [Banners y avisos](/es/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
