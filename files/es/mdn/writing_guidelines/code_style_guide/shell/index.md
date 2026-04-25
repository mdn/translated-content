---
title: Pautas para escribir ejemplos de comandos de terminal
short-title: Ejemplos de comandos de terminal
slug: MDN/Writing_guidelines/Code_style_guide/Shell
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Las siguientes pautas cubren cómo escribir ejemplos de comandos de terminal (shell prompt) para MDN Web Docs.

## Qué es una "shell"

Una shell es un programa que espera a que escribas un comando y luego presiones la tecla Intro. Para indicar qué comandos debes escribir, el contenido de MDN Web Docs los enumera en un bloque de código, similar a los ejemplos de código.

Tal bloque se ve así:

```bash example-good
# Esto puede tardar un rato...
git clone https://github.com/mdn/content
cd content
```

## Pautas generales para ejemplos de comandos de terminal

### Elegir un formato

Las opiniones sobre la indentación, el uso de espacios en blanco y la longitud de las líneas siempre han generado controversia. Las discusiones sobre estos temas son una distracción de la creación y el mantenimiento del contenido.

En MDN Web Docs, usamos [Prettier](https://prettier.io/) como formateador de código para mantener la consistencia del estilo del código (y para evitar discusiones fuera del tema). Puede consultar nuestro [archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las reglas actuales y leer la [documentación de Prettier](https://prettier.io/docs/en/index.html).

Prettier formatea todo el código y mantiene el estilo consistente. Sin embargo, hay algunas reglas adicionales que debe seguir.

### Escribir bloques de código de shell

Al escribir un bloque de código de shell:

- No incluya un `$` o `>` al comienzo de una instrucción de shell. Confunde más de lo que ayuda y no es útil a la hora de copiar las instrucciones.
- Los comentarios comienzan con `#`.
- Elija "bash" para indicar el idioma en markdown.

## Véase también

[Los documentos de desarrollo del lado del servidor de Django](/es/docs/Learn_web_development/Extensions/Server-side/Django) muestran una presentación de buenas prácticas de los comandos de la consola de shell.
