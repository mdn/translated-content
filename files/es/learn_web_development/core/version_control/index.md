---
title: Control de versiones
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Las herramientas de control de versiones (a menudo llamadas **sistemas de control de versiones** o **VCS**, por sus siglas en inglés) son una parte esencial de los flujos de trabajo de programación modernos: sirven para hacer copias de seguridad del código, colaborar en bases de código y volver a versiones anteriores si es necesario.

[Git](https://git-scm.com/) es un ejemplo de herramienta de control de versiones. [GitHub](https://github.com/), en cambio, es un sitio web y una infraestructura que proporciona un servidor Git y una serie de herramientas útiles para trabajar con repositorios Git, tanto de forma individual como en equipo. GitHub te permite informar de problemas en el código, revisar código de forma colaborativa y ofrece funciones de gestión de proyectos como hacer triaje de issues, asignar tareas, planificar proyectos y mucho más.

Este módulo te guía por los fundamentos del control de versiones con Git y GitHub.

## Requisitos previos

- Un ordenador de sobremesa con Git instalado (consulta la [página de descargas de Git](https://git-scm.com/downloads/)).
- Una herramienta para usar Git. Según cómo prefieras trabajar, puedes usar:
  - Un [cliente GUI de Git](https://git-scm.com/downloads/guis/) (te recomendamos [GitHub Desktop](https://desktop.github.com/download/), [SourceTree](https://www.sourcetreeapp.com/) o [Git Kraken](https://www.gitkraken.com/)).
  - Una ventana de línea de comandos/terminal (echa un vistazo a nuestro [curso intensivo de línea de comandos](/es/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) para una introducción).
- Una [cuenta de GitHub](https://github.com/signup). Si aún no tienes una, regístrate ahora con el enlace proporcionado.

## Guías

- [¿Qué es GitHub? (de GitHub)](https://docs.github.com/en/get-started/start-your-journey/what-is-github)
  - : Explica qué son Git y GitHub, cómo funcionan juntos y cómo empezar.
- [Hola, mundo (de GitHub)](https://docs.github.com/en/get-started/using-github/hello-world)
  - : Esta guía práctica se lanza directamente a usar GitHub y enseña los fundamentos de Git, como crear repositorios y ramas, hacer commits y abrir y fusionar pull requests.
- [Usar Git (de GitHub)](https://docs.github.com/en/get-started/using-git)
  - : El Git Handbook profundiza un poco más y explica qué es una herramienta de control de versiones, qué es un repositorio, cómo funciona el modelo básico de GitHub, comandos de Git con ejemplos y mucho más.
- [Contribuir a un proyecto (de GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Hacer un fork de un proyecto es imprescindible cuando quieres contribuir al código de otra persona. Esta guía explica cómo hacerlo.
- [Acerca de las pull requests (de GitHub)](https://docs.github.com/en/pull-requests/reference/pull-requests)
  - : Una guía útil para gestionar pull requests. Las pull requests son la forma de proponer cambios de código en el repositorio de otra persona para que pueda revisarlos y, si procede, fusionarlos con la base de código principal.
- [Acerca de los issues (de GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
  - : Los issues son como un foro de tu proyecto de GitHub, donde la gente puede hacer preguntas e informar de problemas, y donde tú puedes gestionar las novedades (por ejemplo, asignar a personas para que resuelvan issues, aclarar un issue o avisar de que algo ya está solucionado). Este artículo te cuenta lo que necesitas saber sobre los issues.
- [Publicar tu sitio web > ¿Qué enfoque recomendamos?](/es/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website) <!-- TODO(l10n-es): añadir el ancla cuando se sincronice la página destino (#39901) -->
  - : Ofrece una guía paso a paso para publicar un sitio básico con GitHub Pages, con enlaces a la documentación correspondiente de GitHub.

> [!NOTE]
> A medida que profundices en Git, te darás cuenta de que es fácil equivocarse cuando empiezas a usar comandos más complejos. No te preocupes: incluso los desarrolladores web profesionales encuentran Git confuso a veces, y a menudo resuelven los problemas buscando soluciones en internet o consultando sitios como [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) y [Dangit, git!](https://dangitgit.com/).

> [!NOTE]
> [Intro to Git](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_Socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup>, de Scrimba, ofrece una introducción práctica al uso de Git y GitHub.

## Véase también

- Otros temas útiles que se tratan en GitHub Docs son:
  - [Entender el flujo de GitHub](https://docs.github.com/en/get-started/using-github/github-flow)
  - [Resolver conflictos de fusión](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests)
  - [Ignorar archivos con .gitignore](https://docs.github.com/en/get-started/git-basics/ignoring-files)
  - [Autenticación en GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
  - [Dominar Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (el formato de texto que usas al escribir en las PR, en los comentarios de los issues y en los archivos `.md`).
- [Lista de comandos de Git](https://git-scm.com/docs)
- [Learn Git branching](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (un compendio muy útil de formas de hacer cosas concretas en Git, incluido cómo arreglarlas cuando te has equivocado).
- [Dangit, git!](https://dangitgit.com/) (otro compendio útil, centrado específicamente en formas de arreglar las cosas cuando te has equivocado).

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
