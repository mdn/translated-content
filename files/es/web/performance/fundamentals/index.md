---
title: Performance fundamentals
slug: Web/Performance/Fundamentals
---

Performance significa eficiencia. En el contexto de Open Web Apps, este documento explica en general qué es performance, cómo la plataforma del navegador ayuda a mejorarlo y qué herramientas y procesos puede usar para probarlo y mejorarlo.

## ¿Qué es performance?

En última instancia, el performance percibido por el usuario es el único performance que importa. Los usuarios proporcionan entradas al sistema a través del tacto, el movimiento y el habla. A cambio, reciben salidas a través de la vista, el tacto y la audición. El performance es la calidad de las salidas del sistema en respuesta a las entradas del usuario.

En igualdad de condiciones, el código optimizado para algún objetivo diferente al performance percibido por el usuario (en adelante, PPU) pierde cuando compite contra código optimizado para PPU. Los usuarios prefieren una aplicación fluida y receptiva que capaz de procesar 1,000 transacciones de base de datos por segundo, en lugar de una aplicación que no responde aún cuando sea capaz de procesar 100,000,000 por segundo. Esto no quiere decir, que no es importante optimizar otras métricas, pero se debe trabajar con PPU como objetivo principal.

Las siguientes secciones señalan y discuten métricas esenciales para medir performance.

### Capacidad de respuesta

La capacidad de respuesta simplemente significa la rapidez con la que el sistema proporciona salidas (posiblemente varias) en respuesta a las entradas del usuario. Por ejemplo, cuando un usuario toca la pantalla, espera que los píxeles cambien de cierta manera. Para esta interacción, la métrica de capacidad de respuesta es el tiempo transcurrido entre el toque y el cambio de píxel.

La capacidad de respuesta a veces implica múltiples etapas de retroalimentación. El lanzamiento de la aplicación es un caso particularmente importante que se analiza con más detalle a continuación.

La capacidad de respuesta es importante simplemente porque las personas se sienten frustradas y enojadas cuando son ignoradas. Una aplicación está ignorando al usuario cada segundo que no responde a la entrada del usuario.

### Frecuencia de cuadros

La frecuencia de cuadros es la velocidad a la que el sistema cambia los píxeles que se muestran al usuario. Este es un concepto familiar: todos prefieren, digamos, juegos que muestran 60 cuadros por segundo sobre los que muestran 10 cuadros por segundo, incluso si no pueden explicar por qué.

La velocidad de cuadros es importante como una métrica de "calidad de servicio". Las pantallas de computadora están diseñadas para "engañar" la vista del usuario, al entregarles fotones que imitan la realidad. Por ejemplo, el papel cubierto con texto impreso refleja fotones a los ojos del usuario formando un patrón. Al manipular los píxeles, una aplicación de lectura emite fotones en un patrón similar para "engañar" la vista del usuario.

El cerebro entonces infiere que el moviemiento se "actualiza" de manera fluida y continua. (Las luces estroboscópicas son divertidas porque dan la vuelta al revés, lo que confunde al cerebro el cual reacciona generando adrenalina y altos niveles de estrés). En una pantalla de computadora, una mayor tasa de cuadros simplemente hace una imitación más fiel de la realidad.

> **Nota:** Los seres humanos generalmente no pueden percibir diferencias en la frecuencia de cuadros por encima de 60Hz. Es por eso que las pantallas electrónicas más modernas están diseñadas para actualizarse a esa velocidad. Una televisión probablemente se ve entrecortada y poco realista para un colibrí, por ejemplo.

### Uso de la memoria

El **uso de la memoria** es otra métrica clave. A diferencia de la capacidad de respuesta y la frecuencia de cuadros, los usuarios no perciben directamente el uso de la memoria, pero el uso de la memoria se aproxima mucho al "estado del usuario". Un sistema ideal mantendría el 100% del estado del usuario en todo momento: todas las aplicaciones en el sistema se ejecutarían simultáneamente, y todas las aplicaciones conservarían el estado creado por el usuario la última vez que el usuario interactuó con la aplicación (el estado de la aplicación se almacena en la memoria de la computadora, por lo que la aproximación es cercana).

De esto viene un corolario importante pero contraintuitivo: un sistema bien diseñado no maximiza la cantidad de memoria **libre**. La memoria es un recurso, y la memoria libre es un recurso no utilizado. Más bien, un sistema bien diseñado se ha optimizado para **usar** la mayor cantidad de memoria posible para mantener el estado del usuario, al mismo tiempo que cumple otros objetivos de PPU.

Eso no significa que el sistema deba **desperdiciar** memoria. Cuando un sistema usa más memoria de la necesaria para mantener un estado particular del usuario, el sistema está desperdiciando un recurso que podría usar para retener algún otro estado del usuario. En la práctica, ningún sistema puede mantener todos los estados del usuario. La asignación inteligente de memoria al estado del usuario es una preocupación importante que veremos más detalladamente a continuación.

### Consumo de energía

La métrica final discutida aquí es el consumo de energía. Al igual que el uso de la memoria, los usuarios perciben el consumo de energía solo indirectamente, por el tiempo que sus dispositivos pueden mantener todos los demás objetivos de PPU. Para cumplir los objetivos de PPU, el sistema debe utilizar solo la potencia mínima requerida.

El resto de este documento analizará el rendimiento en términos de estas métricas.

## Optimizaciones de rendimiento según la plataforma

Esta sección proporciona una breve descripción de cómo Firefox / Gecko contribuye al rendimiento en general, desde un nivel más abajo que las aplicaciones. Desde la perspectiva de un desarrollador o un usuario, esto responde a la pregunta "¿Qué hace la plataforma por usted?"

### Tecnologías web

La plataforma web proporciona muchas herramientas, algunas más adecuadas para trabajos particulares que otras. Toda la lógica de la aplicación está escrita en JavaScript. Para mostrar gráficos, los desarrolladores pueden usar HTML o CSS (es decir, lenguajes declarativos de alto nivel), o usar interfaces imperativas de bajo nivel ofrecidas por el elemento [\<canvas>](/es/docs/Web/HTML/Elemento/canvas) (que incluye [WebGL](/es/docs/Web/API/WebGL_API)). En algún lugar "entre" HTML / CSS y Canvas está [SVG](/es/docs/Web/SVG), que ofrece algunos beneficios de ambos.

HTML y CSS aumentan en gran medida la productividad, a veces a expensas de la frecuencia de cuadros o el control a nivel de píxeles de la renderización. El texto y las imágenes se vuelven a generar automáticamente, los elementos de la IU reciben automáticamente el tema del sistema, y el sistema proporciona soporte "integrado" para algunos casos de uso que los desarrolladores pueden no pensar inicialmente, como pantallas de diferente resolución o idiomas de derecha a izquierda.

The `canvas` element offers a pixel buffer directly for developers to draw on. This gives developers pixel-level control over rendering and precise control of framerate, but now the developers need to deal with multiple resolutions and orientations, right-to-left languages, and so forth. Developers draw to canvases using either a familiar 2D drawing API, or WebGL, a "close to the metal" binding that mostly follows OpenGL ES 2.0.

> **Nota:** Firefox OS is optimized for apps built with Web technologies: [HTML](/es/docs/Web/HTML), [CSS](/es/docs/Web/CSS), [JavaScript](/es/docs/Web/JavaScript), and so on. Except for a handful of basic system services, all code that runs in Firefox OS comes from Web apps and the Gecko engine. Even the OS window manager is written in HTML, CSS, and JavaScript. Because the core operating system and applications are built with same Web technologies, it's critical how those technologies perform. There's no "escape hatch". This greatly benefits developers because now third-party apps benefit from all the OS's own optimizations. There's no "magic performance sauce" available only to preinstalled code. See [Firefox OS performance testing](/es/Apps/Developing/Performance/Firefox_OS_performance_testing) for more details relevant to Firefox OS.

### Gecko rendering

The Gecko JavaScript engine supports just-in-time (JIT) compilation. This enables application logic to perform comparably to other virtual machines — such as Java virtual machines — and in some cases even close to "native code".

The graphics pipeline in Gecko that underpins HTML, CSS, and Canvas is optimized in several ways. The HTML/CSS layout and graphics code in Gecko reduces invalidation and repainting for common cases like scrolling; developers get this support "for free". Pixel buffers painted by both Gecko "automatically" and applications to `canvas` "manually" minimize copies when being drawn to the display framebuffer. This is done by avoiding intermediate surfaces where they would create overhead (such as per-application "back buffers" in many other operating systems), and by using special memory for graphics buffers that can be directly accessed by the compositor hardware. Complex scenes are rendered using the device's GPU for maximum performance. To improve power usage, simple scenes are rendered using special dedicated composition hardware, while the GPU idles or turns off.

Fully static content is the exception rather than the rule for rich applications. Rich applications use dynamic content with {{ cssxref("animation") }} and {{ cssxref ("transition") }} effects. Transitions and animations are particularly important to applications: developers can use CSS to declare complicated behaviour with a simple, high-level syntax. In turn, Gecko's graphics pipeline is highly optimized to render common animations efficiently. Common-case animations are "offloaded" to the system compositor, which can render them in a performant, power-efficient fashion.

An app's startup performance matters just as much as its runtime performance. Gecko is optimized to load a wide variety of content efficiently: the entire Web! Many years of improvements targeting this content, like parallel HTML parsing, intelligent scheduling of reflows and image decoding, clever layout algorithms, etc., translate just as well to improving Web applications on Firefox.

> **Nota:** See [Firefox OS performance testing](/es/Apps/Developing/Performance/Firefox_OS_performance_testing) for more information about Firefox OS specifics that help to further improve startup performance.

## Application performance

This section is intended for developers asking the question: "How can I make my app fast"?

### Startup performance

Application startup is punctuated by three user-perceived events, generally speaking:

- The first is the application **first paint** — the point at which sufficient application resources have been loaded to paint an initial frame
- The second is when the application becomes **interactive** — for example, users are able to tap a button and the application responds
- The final event is **full load** — for example when all the user's albums have been listed in a music player

The key to fast startup is to keep two things in mind: UPP is all that matters, and there's a "critical path" to each user-perceived event above. The critical path is exactly and only the code that must run to produce the event.

For example, to paint an application's first frame that comprises visually some HTML and CSS to style that HTML:

1. The HTML must be parsed
2. The DOM for that HTML must be constructed
3. Resources like images in that part of the DOM have to be loaded and decoded
4. The CSS styles must be applied to that DOM
5. The styled document has to be reflowed

Nowhere in that list is "load the JS file needed for an uncommon menu"; "fetch and decode the image for the High Scores list", etc. Those work items are not on the critical path to painting the first frame.

It seems obvious, but to reach a user-perceived startup event more quickly, the main "trick" is run _only the code on the critical path._ Shorten the critical path by simplifying the scene.

The Web platform is highly dynamic. JavaScript is a dynamically-typed language, and the Web platform allows loading code, HTML, CSS, images, and other resources dynamically. These features can be used to defer work that's off the critical path by loading unnecessary content "lazily" some time after startup.

Another problem that can delay startup is idle time, caused by waiting for responses to requests (like database loads). To avoid this problem, applications should issue requests as early as possible in startup (this is called "front-loading"). Then when the data is needed later, hopefully it's already available and the application doesn't have to wait.

> **Nota:** For much more information on improving startup performance, read [Optimizing startup performance](/es/Apps/Developing/Performance/Optimizing_startup_performance).

On the same note, notice that locally-cached, static resources can be loaded much faster than dynamic data fetched over high-latency, low-bandwidth mobile networks. Network requests should never be on the critical path to early application startup. Caching resources locally is also the only way applications can be used offline, and for standard Open Web Apps, at the moment this requires use of HTML5 [AppCache](/es/docs/HTML/Using_the_application_cache).

> **Nota:** Firefox OS allows applications to cache resources by being installed as applications, either being "packaged" in a compressed ZIP file or "hosted" through HTML5 [AppCache](/es/docs/HTML/Using_the_application_cache). How to choose between these options for a particular type of application is beyond the scope of this document, but in general application packages provide optimal load performance; AppCache is slower. Installable apps will hopefully be coming to other platforms soon!

### Framerate

The first important thing for high framerate is to choose the right tool. Use HTML and CSS to implement content that's mostly static, scrolled, and infrequently animated. Use Canvas to implement highly dynamic content, like games that need tight control over rendering and don't need theming.

For content drawn using Canvas, it's up to the developer to hit framerate targets: they have direct control over what's drawn.

For HTML and CSS content, the path to high framerate is to use the right primitives. Firefox is highly optimized to scroll arbitrary content; this is usually not a concern. But often trading some generality and quality for speed, such as using a static rendering instead of a CSS radial gradient, can push scrolling framerate over a target. CSS [media queries](/es/docs/Web/Guide/CSS/Media_queries) allow these compromises to be restricted only to devices that need them.

Many applications use transitions or animations through "pages", or "panels". For example, the user taps a "Settings" button to transition into an application configuration screen, or a settings menu "pops up". Firefox is highly optimized to transition and animate scenes that:

- use pages/panels approximately the size of the device screen or smaller
- transition/animate the CSS `transform` and `opacity` properties

Transitions and animations that adhere to these guidelines can be offloaded to the system compositor and run maximally efficiently.

### Memory and power usage

Improving memory and power usage is a similar problem to speeding up startup: don't do unneeded work or lazily load uncommonly-used UI resources. Do use efficient data structures and ensure resources like images are optimized well.

Modern CPUs can enter a lower-power mode when mostly idle. Applications that constantly fire timers or keep unnecessary animations running prevent CPUs from entering low-power mode. Power-efficient applications shouldn't do that.

When applications are sent to the background, a [`visibilitychange`](/es/docs/Web/Reference/Events/visibilitychange) event is fired on their documents. This event is a developer's friend; applications should listen for it. Applications that drop as many loaded resources as possible when sent to the background use less memory and are less likely discarded, in the case of Firefox OS (see the note below). This in turn means they "start up" faster (since they are already running) and have better UPP.

> **Nota:** As mentioned above, Firefox OS tries to keep as many applications running simultaneously as it can, but does have to discard applications sometimes, usually when the device runs out of memory. To find out more about how Firefox OS manages memory usage and kills apps when out of memory issues are encountered, read [Debugging out of memory errors on Firefox OS](/es/Firefox_OS/Debugging/Debugging_OOMs).

### Specific coding tips for application performance

The following practical tips will help improve one or more of the Application performance factors discussed above.

#### Use CSS animations and transitions

Instead of using some library's `animate()` function, which probably currently uses many badly performing technologies ({{domxref("window.setTimeout()")}} or `top`/`left` positioning, for example) use [CSS animations](/es/docs/Web/Guide/CSS/Using_CSS_animations). In many cases, you can actually use [CSS Transitions](/es/docs/Web/Guide/CSS/Using_CSS_transitions) to get the job done. This works well because the browser is designed to optimize these effects and use the GPU to handle them smoothly with minimal impact on processor performance. Another benefit is that you can define these effects in CSS along with the rest of your app's look-and-feel, using a standardized syntax.

CSS animations give you very granular control over your effects using [keyframes](/es/docs/Web/CSS/@keyframes), and you can even watch events fired during the animation process in order to handle other tasks that need to be performed at set points in the animation process. You can easily trigger these animations with the {{cssxref(":hover")}}, {{cssxref(":focus")}}, or {{cssxref(":target")}}, or by dynamically adding and removing classes on parent elements.

If you want to create animations on the fly or modify them in [JavaScript](/es/docs/JavaScript), James Long has written a simple library for that called [CSS-animations.js](https://github.com/jlongster/css-animations.js/).

#### Use CSS transforms

Instead of tweaking absolute positioning and fiddling with all that math yourself, use the {{cssxref("transform")}} CSS property to adjust the position, scale, and so forth of your content. The reason is, once again, hardware acceleration. The browser can do these tasks on your GPU, letting the CPU handle other things.

In addition, transforms give you capabilities you might not otherwise have. Not only can you translate elements in 2D space, but you can transform in three dimensions, skew and rotate, and so forth. Paul Irish has an [in-depth analysis of the benefits of `translate()`](http://paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) from a performance point of view. In general, however, you have the same benefits you get from using CSS animations: you use the right tool for the job and leave the optimization to the browser. You also use an easily extensible way of positioning elements — something that needs a lot of extra code if you simulate translation with `top` and `left` positioning. Another bonus is that this is just like working in a `canvas` element.

> **Nota:** You may need to attach a `translateZ(0.1)` transform if you wish to get hardware acceleration on your CSS animations, depending on platform. As noted above, this can improve performance, but can also have memory consumption issues. What you do in this regard is up to you — do some testing and find out what's best for your particular app.

#### Use `requestAnimationFrame()` instead of `setInterval()`

Calls to {{domxref("window.setInterval()")}} run code at a presumed frame rate that may or may not be possible under current circumstances. It tells the browser to render results even while the browser isn't actually drawing; that is, while the video hardware hasn't reached the next display cycle. This wastes processor time and can even lead to reduced battery life on the user's device.

Instead, you should try to use {{domxref("window.requestAnimationFrame()")}}. This waits until the browser is actually ready to start building the next frame of your animation, and won't bother if the hardware isn't going to actually draw anything. Another benefit to this API is that animations won't run while your app isn't visible on the screen (such as if it's in the background and some other task is operating). This will save battery life and prevent users from cursing your name into the night sky.

#### Make events immediate

As old-school, accessibility-aware Web developers we love click events since they also support keyboard input. On mobile devices, these are too slow. You should use [`touchstart`](/es/docs/Web/Reference/Events/touchstart) and [`touchend`](/es/docs/Web/Reference/Events/touchend) instead. The reason is that these don't have a delay that makes the interaction with the app appear sluggish. If you test for touch support first, you don't sacrifice accessibility, either. For example, the Financial Times uses a library called [fastclick](https://github.com/ftlabs/fastclick) for that purpose, which is available for you to use.

#### Keep your interface simple

One big performance issue we found in HTML5 apps was that moving lots of [DOM](/es/docs/DOM) elements around makes everything sluggish — especially when they feature lots of gradients and drop shadows. It helps a lot to simplify your look-and-feel and move a proxy element around when you drag and drop.

When, for example, you have a long list of elements (let's say tweets), don't move them all. Instead, keep in your DOM tree only the ones that are visible and a few on either side of the currently visible set of tweets. Hide or remove the rest. Keeping the data in a JavaScript object instead of accessing the DOM can vastly improve your app's performance. Think of the display as a presentation of your data rather than the data itself. That doesn't mean you can't use straight HTML as the source; just read it once and then scroll 10 elements, changing the content of the first and last accordingly to your position in the results list, instead of moving 100 elements that aren't visible. The same trick applies in games to sprites: if they aren't currently on the screen, there is no need to poll them. Instead re-use elements that scroll off screen as new ones coming in.

## General application performance analysis

Firefox, Chrome, and other browsers include built-in tools that can help you diagnose slow page rendering. In particular, [Firefox's Network Monitor](/es/docs/Tools/Network_Monitor) will display a precise timeline of when each network request on your page happens, how large it is, and how long it takes.

![The Firefox network monitor showing get requests, multiple files, and different times taken to load each resource on a graph.](network-monitor.jpg)

If your page contains JavaScript code that is taking a long time to run, the [JavaScript profiler](/es/docs/Tools/Profiler) will pinpoint the slowest lines of code:

![The Firefox JavaScript profiler showing a completed profile 1.](javascript-profiler.png)

The [Built-in Gecko Profiler](/es/docs/Performance/Profiling_with_the_Built-in_Profiler) is a very useful tool that provides even more detailed information about which parts of the browser code are running slowly while the profiler runs. This is a bit more complex to use, but provides a lot of useful details.

![A built-in Gecko profiler windows showing a lot of network information.](gecko-profiler.png)

> **Nota:** You can use these tools with the Android browser by running Firefox and enabling [remote debugging](/es/docs/Tools/Remote_Debugging).

In particular, making dozens or hundreds of network requests takes longer in mobile browsers. Rendering large images and CSS gradients can also take longer. Simply downloading large files can take longer, even over a fast network, because mobile hardware is sometimes too slow to take advantage of all the available bandwidth. For useful general tips on mobile Web performance, have a look at Maximiliano Firtman's [Mobile Web High Performance](http://www.slideshare.net/firt/mobile-web-high-performance) talk.

### Testcases and submitting bugs

If the Firefox and Chrome developer tools don't help you find a problem, or if they seem to indicate that the Web browser has caused the problem, try to provide a reduced test case that maximally isolates the problem. That often helps in diagnosing problems.

See if you can reproduce the problem by saving and loading a static copy of an HTML page (including any images/stylesheets/scripts it embeds). If so, edit the static files to remove any private information, then send them to others for help (submit a [Bugzilla](https://bugzilla.mozilla.org/) report, for example, or host it on a server and share the URL). You should also share any profiling information you've collected using the tools listed above.
