---
title: Media queries
slug: Web/CSS/CSS_media_queries
---

{{CSSRef}}

Las **consultas de medios** le permiten adaptar su sitio o aplicación dependiendo de la presencia o el valor de varias características y parámetros del dispositivo.

Son un componente clave del [responsive design](/es/docs/Web/Apps/Progressive/Responsive). Por ejemplo, una consulta de medios puede reducir el tamaño de la fuente en dispositivos pequeños, aumentar el relleno entre párrafos cuando se ve una página en modo vertical, o aumentar el tamaño de los botones en las pantallas táctiles.

En [CSS](/es/docs/Web/CSS), use la {{cssxref ("@ media")}} [at-rule](/es/docs/Web/CSS/At-rule) para aplicar condicionalmente parte de una hoja de estilo en función del resultado de una consulta de medios. Use {{cssxref ("@ import")}} para aplicar condicionalmente una hoja de estilo completa.

### Consultas de medios en HTML

En [HTML](/es/docs/Web/HTML), las consultas de medios se pueden aplicar a varios elementos:

En el atributo {{HTMLElement ("link")}} [`media`](/es/docs/Web/HTML/Element/link#media) del elemento, definen los medios a los que se debe aplicar un recurso vinculado (normalmente CSS).
En el atributo {{HTMLElement ("source")}} [`media`](/es/docs/Web/HTML/Element/source#media) del elemento, definen los medios a los que se debe aplicar esa fuente. (Esto solo es válido dentro de los elementos {{HTMLElement ("picture")}}.)
En el atributo {{HTMLElement ("style")}} del elemento [`media`](/es/docs/Web/HTML/Element/style#media), definen los medios a los que se debe aplicar el estilo.

### Consultas de medios en JavaScript

En [JavaScript](/es/docs/Web/JavaScript)puede usar el método {{domxref ("Window.matchMedia ()")}} para probar la ventana contra una consulta de medios. También puede usar {{domxref ("MediaQueryList.addListener ()")}} para recibir notificaciones cada vez que cambie el estado de una consulta. Con esta funcionalidad, su sitio o aplicación puede responder a los cambios en la configuración, orientación o estado del dispositivo.

Puede obtener más información sobre el uso programático de consultas de medios en [Pruebas de consultas de medios.](/es/docs/Web/CSS/Media_Queries/Testing_media_queries)

## Referencias

### At-rules

- {{cssxref("@import")}}
- {{cssxref("@media")}}

## Guides

- [Usando consultas de medios](/es/docs/Web/CSS/Media_Queries/Using_media_queries)
  - : Presenta las consultas de los medios, su sintaxis y los operadores y las funciones de los medios que se utilizan para construir expresiones de consulta de los medios.
- [Probando las consultas de medios programáticamente](/es/docs/Web/CSS/Media_Queries/Testing_media_queries)
  - : Describe cómo usar las consultas de medios en su código de JavaScript para determinar el estado de un dispositivo, y para configurar escuchas que notifican su código cuando cambian los resultados de las consultas de medios (como cuando el usuario gira la pantalla o cambia el tamaño del navegador).
- [Usando consultas de medios en accesibilidad](/es/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility)
  - : Conozca cómo Media Queries puede ayudar a los usuarios a comprender mejor su sitio web.

## Especificaciones

{{Specifications}}

## Ver también

- Use {{cssxref ("@ apoya")}} para aplicar estilos que dependen del soporte del navegador para varias tecnologías CSS.
