---
title: WebGL
slug: Web/API/WebGL_API
tags:
  - WebGL
  - WebGL2
translation_of: Web/API/WebGL_API
---
{{WebGLSidebar}}

WebGL (Web Graphics Library) ist eine Javascript-API zum Rendern interaktiver 3D und 2D Grafiken mittels eines kompatiblen Web-Browsers ohne Einsatz zusätzlicher Plugins. Mit [WebGL](http://www.khronos.org/webgl/) steht eine API zur Verfügung, die an [OpenGL ES 2.0](http://www.khronos.org/opengles/) angelehnt ist und deren Inhalte mittels eines {{HTMLElement("canvas")}} Elements dargestellt werden.

WebGL steht ab [Firefox](/en-US/Firefox "Firefox 4 for developers") 4+, [Google Chrome](http://www.google.com/chrome/) 9+, [Opera](http://www.opera.com/) 12+, [Safari](http://www.apple.com/safari/ "http://www.apple.com/fr/safari/")5.1+ und [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/browser-ie) 11+ zur Verfügung. Allerdings muss auch die Hardware des Zielgerätes dieses Feature unterstützen.

WebGL2 steht ab [Firefox](/en-US/Firefox "Firefox 4 for developers") 51+, [Google Chrome](http://www.google.com/chrome/) 56+ und [Opera](http://www.opera.com/) 42+ standardmäßig zur Verfügung. WebGL2 wird derzeit nicht von Internet Explorer oder Edge unterstützt.

Das {{HTMLElement("canvas")}} Element kann auch von [Canvas 2D](/de/docs/Web/API/Canvas_API) genutzt werden, um 2D Grafiken rendern zu können.

## Reference

- {{domxref("WebGLRenderingContext")}}
- {{domxref("WebGL2RenderingContext")}} {{experimental_inline}}
- {{domxref("WebGLActiveInfo")}}
- {{domxref("WebGLBuffer")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLFramebuffer")}}
- {{domxref("WebGLProgram")}}
- {{domxref("WebGLQuery")}} {{experimental_inline}}
- {{domxref("WebGLRenderbuffer")}}
- {{domxref("WebGLSampler")}} {{experimental_inline}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLShaderPrecisionFormat")}}
- {{domxref("WebGLSync")}} {{experimental_inline}}
- {{domxref("WebGLTexture")}}
- {{domxref("WebGLTransformFeedback")}} {{experimental_inline}}
- {{domxref("WebGLUniformLocation")}}
- {{domxref("WebGLVertexArrayObject")}} {{experimental_inline}}

### Extensions

- {{domxref("ANGLE_instanced_arrays")}}
- {{domxref("EXT_blend_minmax")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("EXT_color_buffer_half_float")}}
- {{domxref("EXT_disjoint_timer_query")}}
- {{domxref("EXT_frag_depth")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_shader_texture_lod")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
- {{domxref("OES_element_index_uint")}}
- {{domxref("OES_standard_derivatives")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_float_linear")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("OES_texture_half_float_linear")}}
- {{domxref("OES_vertex_array_object")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("WEBGL_compressed_texture_atc")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_etc1")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_debug_renderer_info")}}
- {{domxref("WEBGL_debug_shaders")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("WEBGL_lose_context")}}

### Events

- [webglcontextlost](/de/docs/Web/Events/webglcontextlost)
- [webglcontextrestored](/de/docs/Web/Events/webglcontextrestored)
- [webglcontextcreationerror](/de/docs/Web/Events/webglcontextcreationerror)

### Konstanten und Typen

- [WebGL Konstanten](/de/docs/Web/API/WebGL_API/Constants)
- [WebGL Typen](/de/docs/Web/API/WebGL_API/Types)

## Themen

Die folgenden acht Artikel bauen aufeinander auf.

- [Einführung in WebGL](/de/WebGL/Einführung_in_WebGL "de/WebGL/Einführung in WebGL")
  - : Wie man einen WebGL-Kontext herstellt.
- [Hinzufügen von 2D Inhalten in einen WebGL-Kontext](/de/WebGL/Hinzufügen_von_2D_Inhalten_in_einen_WebGL-Kontext "de/WebGL/Hinzufügen von 2D Inhalten in einen WebGL-Kontext")
  - : Wie eine einfache, flache Form mittels WebGL erstellt wird.
- [Farben mittels Shader in einen WebGL-Kontext hinzufügen](/de/WebGL/Farben_mittels_Shader_in_einen_WebGL-Kontext_hinzufügen "en/WebGL/Farben mittels Shader in einen WebGL-Kontext hinzufügen")
  - : Zeigt wie Farben mit Shadern auf die Form gebracht werden können.
- [Objekte mit WebGL animieren](/de/WebGL/Objekte_mit_WebGL_animieren "de/WebGL/Objekte mit WebGL animieren")
  - : Erklärt wie Objekte rotiert und verschiebt werden, um eine einfache Animation zu erstellen.
- [3D-Objekte mit WebGL erstellen](/de/WebGL/3D-Objekte_mit_WebGL_erstellen "de/WebGL/3D-Objekte_mit_WebGL_erstellen")
  - : Erläutert wie dreidimensionale Objekte erstellt und animiert werden (ein Würfel dient als Beispiel).
- [Texturen in WebGL verwenden](/de/WebGL/Texturen_in_WebGL_verwenden "de/WebGL/Texturen in WebGL verwenden")
  - : Demonstriert wie Texturen auf die Oberfläche eines Objektes gezeichnet werden können.
- [Beleuchtung in WebGL](/de/WebGL/Beleuchtung_in_WebGL "de/WebGL/Beleuchtung in WebGL")
  - : Wie Beleuchtungseffekte in unserem WebGL-Kontext simuliert werden.
- [Animierte Texturen in WebGL](/de/WebGL/Animierte_Texturen_in_WebGL "de/WebGL/Animierte Texturen in WebGL")
  - : Animierte Texturen werden mittels einem Ogg-Video auf der Oberfläche eines rotierenden Würfels realisiert.

## Ressourcen

- [WebGL Spezifikation](https://www.khronos.org/registry/webgl/specs/1.0/)
  - : Der Entwurf der WebGL Spezifikation.
- [Khronos WebGL Seite](http://www.khronos.org/webgl/)
  - : Die Hauptseite für WebGL der Khronos Group.
- [Learning WebGL](http://learningwebgl.com/blog/)
  - : Eine Reihe von Tutorials über WebGL (Englisch).
- [Das WebGL Kochbuch](http://learningwebgl.com/cookbook/index.php/)
  - : Rezepte für das Schreiben von WebGL-Code (Englisch).
- [Sylvester](http://sylvester.jcoglan.com/)
  - : Eine Open-Source Bibliothek, die das Verarbeiten von Vektoren und Matrizen erleichtert.
- [Planet WebGL](http://planet-webgl.org/)
  - : Eine Feed-Sammlung von Leuten, die in der WebGL Community aktiv sind.

## Spezifikationen

| Spezifikation                            | Status                               | Hinweis                                              |
| ---------------------------------------- | ------------------------------------ | ---------------------------------------------------- |
| {{SpecName('WebGL')}}             | {{Spec2('WebGL')}}             | Grundlegende Definition. Basierend auf OpenGL ES 2.0 |
| {{SpecName('WebGL2')}}             | {{Spec2('WebGL2')}}             | Erweiterung von WebGL1. Basierend auf OpenGL ES 3.0. |
| {{SpecName('OpenGL ES 2.0')}} | {{Spec2('OpenGL ES 2.0')}} |                                                      |
| {{SpecName('OpenGL ES 3.0')}} | {{Spec2('OpenGL ES 3.0')}} |                                                      |

## Browser-Kompatibilität

{{Compat}}

\[1] Die Implementierung dieses Features ist experimentell.

### Kompatibilitätshinweise

Neben dem Browser muss auch die GPU selbst dieses Feature unterstützen. So ist zum Beispiel S3 Texture Compression (S3TC) derzeit nur auf Desktop-Rechnern und Tegra-basierenden Tablets verfügbar. Die meisten Browser stellen den {{domxref("HTMLCanvasElement.getContext", "WebGL-Context")}} durch den `webgl` Contextnamen zur Verfügung - ältere Browser benötigen hingegen manchmal stattdessen den Contextnamen `experimental-webgl`.

Das kommende [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) ist vollständig abwärtskompatibel und wird über den Contextnamen `experimental-webgl2` aufgerufen. Ab Firefox 42.0 ist der Aufruf auch über den Contextnamen `webgl2` möglich - WebGL2 ist bis einschließlich Firefox 50 ein experimentelles Feature und kann zu Testzwecken über [Flag-Settings](#WebGL2_enabling) des [Konfigurationseditors](https://support.mozilla.org/de/kb/konfigurationseditor-fur-firefox "Der Konfigurationseditor von Firefox (about:config) listet Programmeinstellungen aus den Dateien prefs.js und user.js des Firefox-Profilordners sowie die Standardeinstellungen auf. Viele dieser erweiterten Optionen sind in den normalen Einstellungen nicht verfügbar.") aktiviert werden. WebGL2 ist ab Firefox 51+, Chrome 56+ und Opera 42+ standardmäßig aktiviert - Internet Explorer und Edge bieten derzeit noch keinen Support für WebGL2.

### Anmerkungen zu Gecko

#### WebGL Debugging und Testing

Ab Gecko 10.0 {{geckoRelease("10.0")}} werden zwei Möglichkeiten geboten, die WebGL-Fähigkeit des Browsers zu Testzwecken zu beeinflussen:

- `webgl.min_capability_mode`
  - : Ein boolescher Wert, der bei `true` einen minimalen Kompatibiätsmodus zur Verfügung stellt. Ist dieser Modus aktiviert, wird WebGL ausschließlich mit dem geringsten Features betrieben, die von der WebGL-Spezifikation definiert wurden. Damit lässt sich sicherstellen, dass dein WebGL-Code auf jedem Gerät unabhängig besonderer Fähigkeiten lauffähig ist. Der Standarardwert ist `false`.
- `webgl.disable_extensions`
  - : Ein boolescher Wert, der bei `true` alle WebGL Extensions deaktiviert. Der Standarardwert ist `false`.

#### WebGL2 Aktivierung

- `webgl.enable-prototype-webgl2` (ab Firefox 38)

  `webgl.enable-webgl2` (ab Firefox 50)

  - : Ein boolescher Wert, der bei `true` den bisher experimentellen WebGL2-Context im Browser aktiviert. Der Standarardwert ist `false` - ab Firefox 51 ist der Standardwert `true`.

## Siehe auch

- [Canvas](/de/docs/Web/API/Canvas_API)
- [Kompatibilitäts-Hinweise zu WebGL Extensions](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#Browser_compatibility)
