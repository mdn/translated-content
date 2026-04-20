---
title: Directrices para escribir ejemplos de código de línea de comandos (Shell)
short-title: Ejemplos de shell
slug: MDN/Writing_guidelines/Code_style_guide/Shell
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Las siguientes directrices cubren cómo escribir ejemplos de código de línea de comandos (Shell) para MDN Web Docs.

## Qué es un "shell"

Un shell es un programa que espera a que escriba un comando y luego presione la tecla de retorno. Para indicar qué comandos debe escribir, el contenido de MDN Web Docs los enumera en un bloque de código, similar a los ejemplos de código.

Dicho bloque se ve así:

```bash example-good
# Esto puede tardar un poco...
git clone https://github.com/mdn/content
cd content
```

## Directrices generales para ejemplos de código de línea de comandos

### Elección de un formato

Las opiniones sobre la sangría correcta, el espacio en blanco y las longitudes de línea siempre han sido controvertidas. Las discusiones sobre estos temas son una distracción para crear y mantener contenido.

En MDN Web Docs, usamos [Prettier](https://prettier.io/) como formateador de código para mantener el estilo de código consistente (y evitar discusiones fuera de tema). Puede consultar nuestro [archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las reglas actuales y leer la [documentación de Prettier](https://prettier.io/docs/index.html).

Prettier formatea todo el código y mantiene el estilo consistente. Sin embargo, hay algunas reglas adicionales que debe seguir.

### Escribir bloques de código de shell

Al escribir un bloque de código de shell:

- No incluya un `$` o `>` al comienzo de una instrucción de shell. Confunde más de lo que ayuda y no es útil al copiar las instrucciones.
- Los comentarios comienzan con `#`.
- Elija "bash" para indicar el lenguaje en markdown.

## Véase también

Los [documentos de desarrollo del lado del servidor de Django](/es/docs/Learn_web_development/Extensions/Server-side/Django) muestran una buena presentación de los comandos de línea de comandos.
