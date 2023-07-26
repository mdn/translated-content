---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
---

{{AddonSidebar}}

> **Nota:** Este artículo describe manifest.json para extensiones web. Si estás buscando información acerca de manifest.json en PWAs, revisa el artículo sobre [Web App Manifest](/es/docs/Web/Manifest).

El archivo `manifest.json` es el único archivo que toda extensión usando la API WebExtension debe contener necesariamente.

Usando `manifest.json`, puedes especificar los metadatos básicos de tu extensión como nombre y versión, así como aspectos funcionales de tu extensión (tales como scripts en segundo plano, scripts de contenido y acciones del navegador).

Es un archivo con formato [JSON](/es/docs/Glossary/JSON), con una excepción: permite comentarios con "`//`".

## Lista de claves de `manifest.json`

Las claves de manifest.json son:

{{ListSubpages("/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json")}}

### Notas acerca de las claves de manifest.json

- `"manifest_version"`, `"version"`, and `"name"` son las únicas llaves obligatorias.
- `"default_locale"` Debe estar presente **solo** si la carpeta "`_locales`" existe.
- `"browser_specific_settings"` no tiene soporte en Google Chrome.

### Acceder a las claves de manifest.json en tiempo de ejecución

Puedes acceder a el manifest desde el código JavaScript de tu extensión utilizando la función {{WebExtAPIRef("runtime.getManifest()")}}:

```js
browser.runtime.getManifest().version;
```

## Compatibilidad con navegadores

Para un resumen extendido de las llaves y sub-llaves ver la [tabla completa de compatibilidad de `manifest.json` en navegadores](/es/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json).

{{Compat}}

## Ver También

API JavaScript de {{WebExtAPIRef("permissions")}}
