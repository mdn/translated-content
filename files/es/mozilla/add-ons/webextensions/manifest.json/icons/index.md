---
title: icons
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icons
---

{{AddonSidebar}}

| Tipo        | `Object` |
| ----------- | -------- |
| Obligatorio | No       |

La propiedad `icons` especifica los iconos de tu extensión. Esos iconos se usarán para representar la extensión en componentes como el Administrador de complementos.

Consiste en pares clave-valor del tamaño de la imagen en px y la ruta de la imagen relativa al directorio raíz de la extensión.

Si `icons` no esta definido, se utilizará un icono de extensión estándar por defecto.

Debería suministrar al menos un icono de extensión principal, idealmente de 48x48 px de tamaño. Este es el icono por defecto que se utilizará en el Administrador de complementos. Sin embargo, puedes suministrar iconos de cualquier tamaño y Firefox intentará encontrar el mejor icono para mostrar en los diferentes componentes.

Firefox tendrá en cuenta la resolución de la pantalla al elegir un icono. Para ofrecer la mejor experiencia visual a los usuarios con pantallas de alta resolución, como las pantallas Retina, proporciona versiones de doble tamaño de todos sus iconos.

## Ejemplo

Las propiedades del objeto `icons` especifican el tamaño del icono en px, los valores especifican la ruta relativa del icono. Este ejemplo contiene un icono de extensión de 48px y una versión más grande para pantallas de alta resolución.

```json
"icons": {
  "48": "icon.png",
  "96": "icon@2x.png"
}
```

## SVG

Puede usar SVG y el navegador escalará su icono adecuadamente. Sin embargo, hay dos advertencias:

1. Necesitas especificar un viewBox en la imagen. E.g.:

   ```html
   <svg viewBox="0 0 48 48" width="48" height="48" ...
   ```

2. Aunque puedes usar un archivo, todavía necesitas especificar varios tamaños del icono en tu manifiesto. E.g.:

   ```json
   "icons": {
     "48": "icon.svg",
     "96": "icon.svg"
   }
   ```

> **Nota:** Si está usando un programa como Inkscape para crear SVG, puede que quiera guardarlo como un "SVG simple". Firefox podría confundirse con varios espacios de nombres especiales y no mostrar su icono.

## Compatibilidad con navegadores

{{Compat}}
