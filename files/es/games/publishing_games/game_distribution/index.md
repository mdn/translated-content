---
title: Distrbución de juegos
slug: Games/Publishing_games/Game_distribution
---

{{GamesSidebar}}

Has seguido un tutorial o dos y creado un juego de HTLM5 — eso es genial. Este artículo cubre todo lo que necesitas saber sobre las formas en que puedes distribuir tu juego recién creado al mundo. Esto incluye alojarlo tu mismo en línea, enviarlo a mercados abiertos, y enviándolo a aplicaciones cerradas como Google Play o iOS App Store.

## Beneficios de HTML5 sobre nativo

Construir juegos con HTML5 te da ventajas, como:

### Felicidad multiplataforma

La tecnología en si es multiplataforma, por lo que puedes escribir el código una vez y apuntarle a múltiples dispositivos. Esto puede ir desde teléfonos inteligentes o tabletas de gama baja, portátiles y ordenadores de escritorio, a smart TVs, relojes o incluso una nevera si puede manejar un navegador lo suficientemente moderno.

No necesitas tener equipos separados para trabajar en el mismo título que le apunta a diferentes plataformas, con solo una base de código para preocuparse. Puedes invertir más tiempo y dinero en [Promociones](/es/docs/Games/Publishing_games/Game_promotion) y [Monetizar](/es/docs/Games/Publishing_games/Game_monetization).

### Actualizaciones instantáneas

No tienes que esperar varios días para tener el código de tus juegos actualizado. Si tus usuarios encuentran fallas, puedes solucionarlas rápidamente, actualizando el sistema y el juego en tu servidor para proporcionar a los jugadores el código actualizado casi al instante.

### Distribución directa de enlaces y reproducción instantánea

No tienes que decirle a la gente que busque tu juego en una tienda de aplicaciones con juegos HTML5. Puedes simplemente enviarles un enlace directo con acceso al juego, en el que pueden hacer click para jugar de inmediato sin necesidad de utilizar complementos de terceros o descargar e instalar un paquete grande. Tienes que tener en cuenta que descargar el juego seguramente lleva un poco de tiempo dependiendo del tamaño del juego y de la velocidad de la red. En cualquier caso, es mucho más fácil promocionar el juego si puedes conducir el tráfico directamente a donde tu quieras y no tener que estar saltando muchas trabas.

## Escritorio vs móvil

La gran mayoría del tráfico en el que estamos interesados — gente jugando en HTML5 — viene de los dispositivos móviles entonces eso es algo en lo que te tienes que enfocar si quieres tener éxito. En los dispositivos móviles la tecnología HTML5 realmente puede brillar y mostrar sus ventajas. No hay Flash, y HTML5 es completamente una multiplataforma.

Intentar competir directamente con los juegos de escritorio es muy difícil. Puedes poner tus juegos de HTML5 en la misma área (ver [Native desktop](#native_desktop), later on) y deberías, porque es bueno diversificar las plataformas que soporta, pero tienes que recordar que los desarrolladores de juegos de escritorio tienen años de experiencia, grandes herramientas y canales sólidos de distribución. Muchos juegos de HTML5 le apuntarán a diferentes segmentos del mercado que los juegos de escritorio nativos, por ejemplo, juegos simples para pasar el tiempo mientras estás en movimiento en lugar de grandes experiencias de inmersión. Tales juegos, están normalmente diseñados para ser jugados con dos, o incluso un dedo, así puedes sujetar el dispositivo, jugar al juego y ser capaz de usar la segunda mano para lo que necesites.

Dicho esto, las plataformas de escritorio pueden utilizarse para la distribución con bastante facilidad con la disponibilidad de wrappers que te pueden ayudar a preparar las compilaciones nativas de tu juego, mira [Packaging games](#packaging_games). También es recomendable probar los controles de escritorio para tus juegos incluso si tu enfoque está en los dispositivos móviles. Los jugadores disfrutaran de tus juegos en cualquier plataforma disponible, y el escritorio es una de ellas. Además, es generalmente más fácil construir y probar el juego primero en escritorio, y luego pasar a probarlo en los dispositivos móviles.

## Publicando el juego

Hay tres opciones principales cuando quieres publicar un juego:

- Self-hosting
- Editores
- Tiendas

Recuerda que el nombre de tu juego debería ser lo suficientemente exclusivo para ser promovido rápidamente más adelante, pero también lo suficientemente adictivo, para que la gente no se olvide de él.

### Self-hosting

Si eres un desarrollador de interfaces, es posible que sepas que hacer. Un juego de HTML5 es solo otra página web. Puedes actualizarla desde un servidor remoto, obtener un nombre de dominio atractivo y hostearlo tu mismo.

Si quieres ganar dinero del desarrollo de juegos, deberás asegurar el código fuente de una manera u otra contra personas que podrían fácilmente cogerlo y venderlo como propio. Puedes concatenar y minimizar el código para hacerlo más pequeño y afearlo, así es mucho más difícil hacer ingeniería inversa en tu juego. Otra buena medida para tomar es proporcionar una demo online si estas planeando empaquetarlo y venderlo en una tienda cerrada como iTunes o Steam.

Si estás trabajando en un proyecto paralelo solo por diversión, entonces dejar el código fuente abierto beneficiará a quienes deseen aprender de lo que has creado. Ni siquiera tienes que preocuparte por buscar un proveedor de alojamiento, ya que es posible [hostear juego en las páginas de GitHub](http://dev.end3r.com/2014/02/host-your-html5-games-on-github-pages/). Obtendrás alojamiento gratuito, control de versiones y posibles colaboraciones si tu proyecto es lo suficientemente interesante.

### Editores y portales

Como el nombre lo indica, los editores pueden manejar la publicación de tu juego por ti. Si debe ir de esa manera o no, depende de cuál sea tu plan para distribuir el juego: ¿Quieres venderlo donde sea posible, o quieres restringir su presencia a aquellos que han comprado una [licencia exclusiva](/es/docs/Games/Publishing_games/Game_monetization)? Tu decides. Considera varias opciones, experimenta y saca conclusiones. Los editores se explicarán con más detalle en el artículo de [monetización](/es/docs/Games/Techniques/Publishing_games/Game_monetization/).

También hay portales independientes que recogen juegos interesantes como [HTML5Games.com](http://html5games.com/), [MarketJS.com](http://www.marketjs.com/) o [Clay.io](http://clay.io/) donde puedes mandar tus juegos y obtendrás algo de promoción natural debido al gran tráfico que esos sitios atraen. Algunos de estos toman tus archivos y los hostean en sus servidores, mientras que otros solo enlazan a su sitio web o insertan tu juego en su sitio. Tal exposición solo puede proporcionar [promoción](/es/docs/Games/Techniques/Publishing_games/Game_promotion/) para tu juego, o si tienes anuncios en el juego (u otra opción de conseguir dinero) también puede ofrecer monetización.

### Tiendas web y nativas

También puedes subir y publicar tu juego directamente en diferentes tipos de tiendas, o mercados. Para hacerlo, tendrás que prepararlo y empaquetarlo en un formato de compilación específico para cada ecosistema de aplicaciones al que deseas orientarlo. Consulta [Marketplaces — distribution platforms](#marketplaces_—_distribution_platforms) para más detalles de qué tipos de mercados están disponibles.

## Mercados— Plataformas de distribución

Veamos cuáles son las opciones disponibles con respecto a los mercados/tiendas disponibles para diferentes plataformas y sistemas operativos.

> [!NOTE]
> Estas son las plataformas de distribución más populares, pero esto no quiere decir que sean la única opción. En lugar de intentar sumar tu juego a los miles de otros en la tienda de iOS, también puedes intentar encontrar un nicho y promocionar directamente al público que esté interesado en tus juegos. Tu creatividad es crítica aquí.

### Tiendas web

Las mejores plataformas para juegos HTML5 son las tiendas basadas en la web. Es fácil [preparar un juego para estas tiendas](http://code.tutsplus.com/tutorials/preparing-for-firefox-os--mobile-18515), puesto que tal acción implica poca o ninguna modificación del juego en sí — normalmente, es suficiente añadir un archivo de manifiesto que contenga la información necesaria en un paquete comprimido que incluya todos los recursos.

- [La tienda web de Chrome](https://chrome.google.com/webstore/) también es una opción atractiva — nuevamente, tener un archivo de manifiesto listo, comprimir tu juego y completar el formulario de envío en línea es todo lo que se requiere.
- [Tizen](http://www.tizenstore.com/) también está dando un gran valor a las aplicaciones de soporte escritas en JavaScript. Su tienda es otra opción válida.

### Tiendas de aplicaciones móviles nativas

Cuando se trata del mercado de aplicaciones móviles, están la Apple App Store para iOS, Google Play para Android y el resto de la competencia. Las tiendas nativas ya están llenas de desarrolladores establecidos que venden grandes juegos, por lo que debes ser talentoso y tener suerte para que te vean.

- La iOS App Store es bastante difícil de acceder, ya que hay requisitos muy estrictos que los juegos deben cumplir, y tendrás que esperar una semana o dos para ser aceptado. Además, es la tienda móvil más prometedora, con cientos de miles de aplicaciones, así que es extremadamente difícil destacar entre la multitud.
- Google Play tiene unos requisitos menos estrictos, así que la tienda está contaminada con juegos de baja calidad. Aún así es bastante difícil que uno se haga notar, ya que la cantidad de aplicaciones enviadas diariamente es enorme. Aquí también es más difícil ganar dinero — la mayoría de los juegos de pago de iOS se publican como juegos gratuitos en Android, con monetización proveniente de compras en la aplicación(IAPS) y anuncios.
- Otras tiendas para plataformas móviles nativas como Windows Phone or Blackberry están trabajando duro para obtener un pedazo del pastel, y están muy por detrás de la competencia. Puede ser bueno enviar tu juego allí, ya que será mucho más fácil que la gente se de cuenta de él.

Si estas buscando más información sobre los diferentes tipos de tiendas de aplicaciones, puedes consultar la [lista de plataformas de distribución de software móvil](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) en este artículo de Wikipedia.

### Escritorio nativo

Para ampliar tu audiencia, también puedes revisar el ecosistema de escritorio con sus juegos HTML5 — solamente recuerda que todos los juegos populares AAA toman la mayor parte de la cuota del mercado, y piensa cuidadosamente si esto se adapta a tu estrategia. Para que funcione correctamente en escritorios debe funcionar en los tres sistemas operativos: Windows, Mac OS y Linux. La mayor tienda de escritorio para juegos es definitivamente [Steam](http://steamcommunity.com/) — desarrolladores indie pueden acceder a Steam a través del programa [Greenlight](https://steamcommunity.com/greenlight/). Recuerda que tu mismo tienes que lidiar con los problemas multiplataforma cargando versiones separadas para diferentes plataformas.

Después de que hayas cubierto Steam, hay un montón de rumores alrededor de iniciativas como [Humble Bundle](http://www.humblebundle.com/) donde los juegos indie más populares se presentan a un público más amplio. Es más como una excelente oportunidad de promoción que una forma de ganar mucho dinero, sin embargo, los precios pagados por los juegos en un paquete generalmente son bastante bajos.

## Juegos de empaquetado

La web es la primera y la mejor opción para juegos de HTML5, pero si quieres buscar una audiencia más amplia y distribuir tu juego en un ecosistema cerrado, todavía puedes hacerlo empaquetándolo.

Lo bueno es que no necesitas muchos equipos separados trabajando en el mismo juego para diferentes plataformas — puedes construirlo una vez y usar herramientas como [Phonegap](/es/docs/Web) o [CocoonIO](/es/docs/Web) para empaquetar el juego en tiendas nativas. Los paquetes resultantes suelen ser bastante fiables, pero todavía deberias probarlos y estar atento a pequeños problemas o errores que solucionar.

### Herramientas disponibles

Hay varias herramientas para elegir dependiendo de tus habilidades, marcos preferidos o plataformas de destino. Se trata de elegir la mejor herramienta para tu tarea particular.

- [Phonegap](http://phonegap.com/) — basado en Cordova, esta es la herramienta más popular para construir/empaquetar apps de JavaScript para plataformas nativas.
- [CocoonIO](http://cocoon.io/) — La herramienta más popular específicamente para la construcción de juegos HTML5 para múltiples tiendas nativas. Tiene sus propias optimizaciones de rendimiento para juegos representados en Canvas y es compatible con muchos marcos de juego.
- [Ejecta](http://impactjs.com/ejecta) — una herramienta específicamente para empaquetar juegos creados con el marco [ImpactJS](http://impactjs.com/) para iOS, construido por el autor ImpactJS. Proporciona una integración perfecta con ImpactJS, pero solo es compatible con un solo framework y tienda de aplicaciones.
- [NW.js](http://nwjs.io/) — formalmente conocido como Node-Webkit, esta es la primera opción cuando se trata de construir un juego de escritorio que funcione en Windows, Mac y Linux. Las distribuciones se empaquetan con el motor WebKit para proporcionar representación en cualquier plataforma.

Otras herramientas alternativas son:

- [Intel XDK](https://software.intel.com/en-us/intel-xdk) — una alternativa emocionante, similar a CocoonIO.
- [Electron](http://electron.atom.io/) — conocido como Atom Shell — es una herramienta de código abierto y multiplataforma de GitHub.
- [Manifold.js](http://manifoldjs.com/) — esta herramienta es del equipo de Microsotf que puede crear distribuciones nativas de juegos HTML5 desde iOS, Android, y Windows.

## Resumen

La distribución es el camino para dar acceso al mundo a tu juego. Hay muchas opciones disponibles y no hay una única respuesta en cuanto a cuál es la mejor. Cuando publiques el juego es momento de enfocarse en la [promoción](/es/docs/Games/Techniques/Publishing_games/Game_promotion/) — dejar que la gente sepa que tu juego existe. Sin promoción, ni siquiera serían capaces de aprender y jugar con él.
