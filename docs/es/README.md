# Localización de MDN en español

Guía para colaborar traduciendo y manteniendo el contenido de MDN Web Docs al español.

> Antes de empezar, lee la [guía oficial de contribución][guia-contribucion].

## Tabla de contenido

- [¿Por dónde empezar?](#por-dónde-empezar)
- [Tipos de contribución que preferimos](#tipos-de-contribución-que-preferimos)
- [Abrir un Pull Request](#abrir-un-pull-request)
  - [Opción A: Desde GitHub (sin instalar nada)](#opción-a-desde-github-sin-instalar-nada)
  - [Opción B: Desde tu computadora (recomendada para cambios grandes)](#opción-b-desde-tu-computadora-recomendada-para-cambios-grandes)
- [Traducir un documento](#traducir-un-documento)
- [Mantener el `l10n.sourceCommit` al día](#mantener-el-l10nsourcecommit-al-día)
- [Convención de traducciones](#convención-de-traducciones)
- [Arreglar "flaws" (defectos)](#arreglar-flaws-defectos)
- [Charla con nosotros](#charla-con-nosotros)
- [Enlaces relevantes](#enlaces-relevantes)

---

## ¿Por dónde empezar?

Si no sabes por dónde comenzar, revisa los [issues con la etiqueta `l10n-es`](https://github.com/mdn/translated-content/issues?q=is%3Aissue+is%3Aopen+label%3Al10n-es). Allí publicamos documentos que necesitan traducción nueva, actualización o revisión. Comenta en el issue que te interese para evitar duplicar esfuerzos.

---

## Tipos de contribución que preferimos

No todas las contribuciones aportan el mismo valor al lector. Estas son nuestras preferencias para que planifiques tu PR:

### 🥇 Preferido: actualización completa de un documento

Un PR que traduce o actualiza una página entera para que coincida con la fuente en inglés más reciente (incluido el [`l10n.sourceCommit`](#mantener-el-l10nsourcecommit-al-día)). Este tipo de cambios cierra issues como los listados en [`l10n-es`](https://github.com/mdn/translated-content/issues?q=is%3Aissue+is%3Aopen+label%3Al10n-es) y reduce la deuda de traducción.

### ✅ También bienvenido: correcciones pequeñas

Arreglar acentos, tildes, erratas o una frase mal traducida es una excelente puerta de entrada para quien está conociendo el proyecto. Estos PRs se aceptan y se revisan con el mismo cuidado.

Si es tu primera contribución, siéntete libre de empezar con un cambio pequeño: nos importa más que te integres a la comunidad que el tamaño del PR. Eso sí, procura no abrir varios PRs minúsculos sobre el mismo archivo en días consecutivos; si detectas varios problemas en una misma página, agrúpalos en un único PR.

---

## Abrir un Pull Request

Tienes dos maneras de contribuir. Elige la que te sea más cómoda.

### Opción A: Desde GitHub (sin instalar nada)

Ideal para erratas, traducciones cortas o cambios en un solo archivo. Todo el flujo vive en el navegador, no necesitas clonar el repositorio.

1. Entra al archivo que quieres modificar dentro de [`files/es/`](https://github.com/mdn/translated-content/tree/main/files/es).
2. Pulsa el ícono de lápiz (**Edit this file**) en la parte superior derecha. GitHub te ofrecerá crear un _fork_ automáticamente, acepta.
3. Edita el contenido directamente en el navegador.
4. Al terminar, en la parte inferior rellena el mensaje de commit (añade el sufijo `[es]`) y pulsa **Propose changes**.
5. GitHub abrirá la pantalla de **Compare & pull request**. Completa el título/descripción y envía el PR hacia `mdn/translated-content:main`.

### Opción B: Desde tu computadora (recomendada para cambios grandes)

Necesaria si vas a traducir páginas extensas, actualizar varios archivos o ejecutar los linters localmente.

> Tutorial en video: <https://youtu.be/pFeW0vUYbkg>

#### Requisitos

- **Node.js** >= 24 (ver [`.nvmrc`](https://github.com/mdn/translated-content/blob/main/.nvmrc) y [`.tool-versions`](https://github.com/mdn/translated-content/blob/main/.tool-versions)).
- **npm** (la versión exacta se define en el campo `packageManager` de [`package.json`](https://github.com/mdn/translated-content/blob/main/package.json); `npm install` la respeta automáticamente con `corepack` habilitado).
- Recomendamos un gestor de versiones de Node: [mise](https://mise.jdx.dev/), [fnm](https://github.com/Schniz/fnm) o [nvm](https://github.com/nvm-sh/nvm). Cualquiera de ellos leerá `.nvmrc` o `.tool-versions` automáticamente.

No necesitas levantar un servidor local para traducir: el bot genera una URL de previsualización en cada PR. `npm install` sólo hace falta si quieres correr los linters (`npm run lint:md`, `npm run fix:md`) antes de enviar el cambio.

#### Pasos

1. Haz _fork_ de <https://github.com/mdn/translated-content> a tu cuenta de GitHub.
2. Clona tu _fork_:

   ```bash
   git clone git@github.com:TU_USUARIO/translated-content.git
   cd translated-content
   ```

   > ⏳ El repositorio es grande (varios GB de historia). El primer `clone` puede tardar varios minutos dependiendo de tu conexión. Ten paciencia, sólo hay que hacerlo una vez.

3. Crea una rama descriptiva:

   ```bash
   git switch -c fix-issue-123
   ```

4. Realiza los cambios necesarios.
5. Agrega y confirma los archivos:

   ```bash
   git add files/es/ruta/al/archivo.md
   git rm  files/es/archivo-obsoleto.html   # si corresponde
   git commit -m "Corrige error 123 [es]"
   ```

   > El sufijo `[es]` en el mensaje ayuda a identificar PRs en español.

6. Publica la rama y abre el Pull Request:

   ```bash
   git push -u origin fix-issue-123
   ```

7. Abre <https://github.com/TU_USUARIO/translated-content> y crea el PR hacia `mdn/translated-content:main`.

Ejemplo en video: <https://youtu.be/pFeW0vUYbkg>

---

## Traducir un documento

1. Ubica la versión en inglés dentro de [`mdn/content/files/en-us/`](https://github.com/mdn/content/tree/main/files/en-us).
   Ejemplo: [`files/en-us/web/javascript/reference/global_objects/array/index.md`](https://github.com/mdn/content/blob/main/files/en-us/web/javascript/reference/global_objects/array/index.md).

2. Busca la versión en español en [`mdn/translated-content/files/es/`](https://github.com/mdn/translated-content/tree/main/files/es).
   - Si **no existe**, créalo en formato Markdown respetando la misma ruta del original.
   - Si el archivo existe en formato `HTML`, conviértelo a Markdown.

3. Traduce manteniendo intacto lo siguiente:
   - Identificadores del código (APIs, propiedades, métodos, variables, funciones).
   - Macros de Kumascript como `{{domxref(...)}}`, `{{jsxref(...)}}`, `{{Glossary(...)}}`.
   - Bloques de código: sólo traduce comentarios y cadenas dirigidas al usuario final.
   - Enlaces externos (GitHub, web.dev, etc.).

4. Cambia los enlaces internos de `/en-US/` a `/es/`.

5. Revisa el _front-matter_ YAML (`title`, `slug`, `l10n.sourceCommit`) como se describe en la siguiente sección.

---

## Mantener el `l10n.sourceCommit` al día

Cada archivo traducido debe incluir un _front-matter_ YAML como este:

```yaml
---
title: Título traducido
slug: Ruta/Original/En/Ingles
l10n:
  sourceCommit: <SHA del commit en mdn/content>
---
```

### Qué es `l10n.sourceCommit`

Es el SHA del commit de `mdn/content` cuyo contenido en inglés refleja exactamente lo traducido. Sirve para detectar qué cambios en la fuente aún no se han trasladado al español.

### Reglas del _front-matter_

- Sólo deben aparecer: `title`, `short-title` (si lo tiene el inglés), `slug` y `l10n.sourceCommit`.
- **No** incluir `page-type`, `browser-compat`, `tags`, `sidebar` ni `original_slug`.
- El `slug` debe ser idéntico al del archivo en inglés.

### Cómo obtener el SHA correcto

Usa el SHA del último commit que modificó el archivo en inglés:

```bash
# Dentro de tu clon actualizado de mdn/content, en la rama main
git log -n 1 --format=%H -- files/en-us/ruta/al/archivo.md
```

O con la API de GitHub:

```bash
gh api "repos/mdn/content/commits?path=files/en-us/ruta/al/archivo.md&per_page=1" --jq '.[0].sha'
```

Copia el SHA completo (40 caracteres) y pégalo en el campo `sourceCommit`.

### Cuándo actualizarlo

- Al crear una traducción nueva, apunta al SHA más reciente de la página en inglés.
- Al sincronizar con cambios posteriores del inglés, actualiza el SHA al del commit que acabas de incorporar.
- Si no trasladaste todos los cambios, **conserva el SHA anterior** hasta completar la sincronización.

---

## Convención de traducciones

La comunidad de español sugiere las siguientes convenciones.

### Términos técnicos

| Término en inglés     | Traducción al español          |
| --------------------- | ------------------------------ |
| Event listener        | Detector de eventos            |
| Event handler         | Manejador de eventos           |
| See also              | Véase también                  |
| Specifications        | Especificaciones               |
| Browser compatibility | Compatibilidad con navegadores |
| Warning               | Advertencia                    |
| Note                  | Nota                           |
| Callout               | Observación                    |
| Examples              | Ejemplos                       |
| Syntax                | Sintaxis                       |
| Parameters            | Parámetros                     |
| Return value          | Valor de retorno               |
| Exceptions            | Excepciones                    |
| Instance properties   | Propiedades de instancia       |
| Instance methods      | Métodos de instancia           |
| Static properties     | Propiedades estáticas          |
| Static methods        | Métodos estáticos              |
| Events                | Eventos                        |
| Value                 | Valor                          |
| Event type            | Tipo de evento                 |
| Description           | Descripción                    |
| Constructor           | Constructor                    |
| HTML                  | HTML (sin traducir)            |
| JavaScript            | JavaScript (sin traducir)      |
| Framework             | Framework (sin traducir)       |

### Marcadores en línea

| Inglés         | Español            |
| -------------- | ------------------ |
| `**Note:**`    | `**Nota:**`        |
| `**Warning:**` | `**Advertencia:**` |
| `**Callout:**` | `**Observación:**` |

### Formato matemático

| Expresión     | Cómo escribirlo |
| ------------- | --------------- |
| 2<sup>5</sup> | `2^5`           |

### Macros de glosario

Cuando en inglés aparece `{{Glossary("TLD")}}` y el término natural en español no coincide, agrega el segundo argumento traducido:

```text
{{Glossary("TLD", "Dominio de primer nivel")}}
```

> Excepción: si la frase en español ya explica el término justo después del macro (por ejemplo, `{{Glossary("TLD")}} (Top-Level Domain) Dominio de primer nivel`), deja el macro con un solo argumento para evitar duplicar el texto renderizado.

---

## Arreglar "flaws" (defectos)

Al ejecutar `npm start` en tu clon de `mdn/content` puedes previsualizar localmente los cambios. La misma previsualización está disponible en la URL que genera el bot al abrir un PR. En ambas vistas, la parte superior del documento muestra los _flaws_ detectados automáticamente (enlaces rotos, macros mal usadas, etc.). Muchos se pueden corregir con un clic o aplicando una sugerencia.

---

## Charla con nosotros

- **Telegram:** <https://t.me/+Dr6qKQCAepw4MjFj>
- **MDN Discord**, canal `#spanish`: <https://discord.gg/aZqEtMrbr7>

---

## Enlaces relevantes

<details>
  <summary>Despliega para ver recursos adicionales</summary>

- Documentación por prioridad: <https://developer.mozilla.org/en-US/docs/MDN/Contribute/Documentation_priorities>
- Proyecto `ES` en GitHub: <https://github.com/mdn/translated-content/projects/7>
- Grupo en Mozilla Community: <https://community.mozilla.org/en/groups/mdn-localizacion-espanol/>
- Los `tags` no se usan en las traducciones ([contexto](https://github.com/mdn/translated-content/pull/4058#discussion_r802298455)).
- Tutorial de configuración en video: <https://www.youtube.com/watch?v=pFeW0vUYbkg>
- Guía de Markdown en MDN: <https://developer.mozilla.org/en-US/docs/MDN/Contribute/Markdown_in_MDN>
- Trabajo actual del equipo: <https://github.com/mdn/translated-content/issues/8635>

</details>

Más información en [la discusión general de la comunidad de español](https://github.com/mdn/translated-content/discussions/4029).

[guia-contribucion]: https://developer.mozilla.org/es/docs/MDN/Contribute
