---
title: Privacidad en la web
slug: Web/Privacy
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

Las personas usan los sitios web para varias tareas importantes, como hacer operaciones bancarias, comprar, entretenerse y pagar sus impuestos. Para hacerlo, tienen que compartir información personal con esos sitios. Los usuarios depositan cierto nivel de confianza en los sitios con los que comparten sus datos. Si esa información cayera en malas manos, podría usarse para aprovecharse de ellos, por ejemplo, para elaborar perfiles, mostrarles anuncios no deseados o incluso robarles la identidad o el dinero.

Los navegadores modernos ya tienen muchas funciones para proteger la privacidad de los usuarios en la web, pero no es suficiente. Para crear una experiencia confiable y respetuosa con la privacidad, los desarrolladores deben enseñar buenas prácticas a los usuarios de sus sitios (y hacer que se cumplan). También deben crear sitios que recopilen la menor cantidad posible de datos de los usuarios, que usen esos datos de forma responsable y que los transmitan y almacenen de forma segura.

En este artículo:

- Definimos la privacidad y otros términos importantes relacionados.
- Examinamos las funciones de los navegadores que protegen automáticamente la privacidad de los usuarios.
- Vemos qué pueden hacer los desarrolladores para crear contenido web respetuoso con la privacidad, que minimice el riesgo de que terceros obtengan de forma inesperada la información o los datos personales de los usuarios.

## Definición de términos y conceptos de privacidad

Antes de ver las distintas funciones de privacidad y seguridad disponibles en la web, definamos algunos términos importantes.

### La privacidad y su relación con la seguridad

Es difícil hablar de privacidad sin hablar también de seguridad: están estrechamente relacionadas, y no se pueden crear sitios web respetuosos con la privacidad sin una buena seguridad. Por eso definiremos ambas.

- La **privacidad** consiste en dar a los usuarios el derecho a controlar cómo se recopilan, almacenan y usan sus datos, y en no usarlos de forma irresponsable. Por ejemplo, debes comunicar claramente a tus usuarios qué datos recopilas, con quién los compartirás y cómo los usarás. Los usuarios deben tener la oportunidad de aceptar tus condiciones de uso de datos, acceder a todos los datos suyos que almacenas y eliminarlos si ya no quieren que los tengas. También debes cumplir tus propias condiciones: nada erosiona tanto la confianza de los usuarios como ver sus datos usados y compartidos de formas que nunca aceptaron. Y esto no solo es éticamente incorrecto, también podría ser ilegal. Muchas partes del mundo tienen ahora leyes que protegen los derechos de privacidad de los consumidores (por ejemplo, el [RGPD](https://gdpr.eu/) de la UE).

- La **seguridad** consiste en mantener los datos privados y los sistemas protegidos frente al acceso no autorizado. Esto incluye tanto los datos de la empresa (internos) como los de los usuarios y socios (externos). De nada sirve tener una política de privacidad sólida que haga que tus usuarios confíen en ti si tu seguridad es débil y los atacantes pueden robar sus datos de todos modos.

### Información personal e información privada

La **información personal** es cualquier información que describe a un usuario. Por ejemplo:

- Dirección postal, dirección de correo electrónico, número de teléfono u otros datos de contacto
- Número de pasaporte, cuenta bancaria, tarjeta de crédito, número de seguridad social u otros identificadores oficiales
- Atributos físicos como la altura, la expresión de género, el peso, el color del pelo o la edad
- Información de salud, como el historial médico, las alergias o las enfermedades en curso
- Nombres de usuario, cuando pueden vincularse a una persona
- Aficiones, intereses u otras preferencias personales
- Datos biométricos, como las huellas dactilares o los datos de reconocimiento facial

La **información privada** es cualquier información que los usuarios no quieren que se comparta públicamente y que debe mantenerse privada (es decir, información a la que solo puede acceder un grupo determinado de usuarios autorizados). Algunos datos son privados por ley (por ejemplo, los datos médicos) y otros lo son más bien por preferencia personal.

### Información de identificación personal

A partir de la sección anterior, la **información de identificación personal** (PII, por sus siglas en inglés) es información que puede usarse, total o parcialmente, para localizar o identificar a una persona concreta. Por ejemplo, si un sitio filtra en línea una lista con los nombres y los códigos postales de sus usuarios, alguien malintencionado podría usar casi con toda seguridad esa información para encontrar sus direcciones completas. Aunque no se produzca una filtración a gran escala, sigue siendo posible identificar a los usuarios por medios menos evidentes, como los navegadores que usan, los dispositivos que usan, las fuentes concretas que tienen instaladas, etc.

### Rastreo

El **rastreo** es el proceso de registrar la actividad de un usuario a través de muchos sitios web distintos. Puede hacerse de varias formas, por ejemplo:

- Consultar varias [cookies de terceros](/es/docs/Web/Privacy/Guides/Third-party_cookies) establecidas en distintos sitios donde hay contenido de terceros incrustado, para obtener diversos datos sobre el usuario.
- Consultar el encabezado {{httpheader("Referer")}} para ver desde dónde ha navegado un usuario.
- Incluir parámetros en las URL de los enlaces entrantes (por ejemplo, en anuncios incrustados que enlazan a páginas de productos o en correos de marketing) que pueden revelar al sitio enlazado de dónde procede el enlace, de qué campaña de marketing forma parte, la dirección de correo electrónico u otro identificador del usuario que hizo clic, etc. Este proceso se llama **decoración de enlaces** y da lugar a URL de enlaces como esta: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- El rastreo mediante redirecciones, en el que los rastreadores redirigen momentáneamente (y de forma imperceptible) a un usuario a su sitio web para usar el almacenamiento de primera parte y rastrearlo entre sitios. Esto permite a los rastreadores esquivar el bloqueo de las cookies de terceros. Por ejemplo, si has leído la reseña de un producto y quieres hacer clic para comprarlo, podrías navegar sin saberlo primero al rastreador de redirección y _después_ a la tienda. Esto significa que el rastreador se carga como primera parte y puede asociar los datos de rastreo con los identificadores que tiene almacenados en sus cookies de primera parte antes de reenviarte a la tienda.

Los datos de rastreo pueden usarse para elaborar un perfil de un usuario, de sus intereses y de sus preferencias, lo que suele ser perjudicial y puede resultar molesto en distintos grados. Por ejemplo:

- **Anuncios dirigidos**: todos hemos tenido la inquietante experiencia de buscar algunos artículos para comprar en un dispositivo y, de repente, vernos bombardeados por anuncios de esos mismos productos en todos nuestros otros dispositivos.
- **Venta o intercambio de datos**: se sabe que algunos terceros recopilan datos de rastreo y después los venden o comparten con otros para usarlos con distintos fines, como los anuncios dirigidos. Esto es claramente muy poco ético y también puede ser ilegal, según el lugar del mundo donde ocurra.
- **Perjuicios a partir de los datos**: en los peores casos, compartir datos podría hacer que el usuario salga injustamente perjudicado. Por ejemplo, imagina que una compañía de seguros descubre datos sobre un posible cliente que este no aceptó compartir y los usa como justificación para subirle la prima del seguro.

### Huella digital

Un proceso muy relacionado con el rastreo es la **huella digital** (_fingerprinting_): se refiere específicamente a _identificar_ a los usuarios reuniendo un conjunto de datos sobre ellos que los diferencian de otros usuarios. Puede ser cualquier cosa, desde el contenido de las cookies hasta el navegador que usan y las fuentes que tienen instaladas localmente.

Los navegadores modernos toman medidas para ayudar a prevenir los ataques basados en la huella digital, ya sea no permitiendo el acceso a la información o, cuando la información tiene que estar disponible, introduciendo variaciones o "ruido" que impiden usarla para identificar a alguien.

Por ejemplo, si un sitio web consulta al navegador de un usuario el tiempo transcurrido, comparar ese tiempo con el que indica el servidor podría ser útil como factor para la huella digital. Por eso, los navegadores suelen introducir una pequeña variabilidad en los temporizadores para que sean menos útiles a la hora de identificar el sistema del usuario.

> [!NOTE]
> Consulta [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) en web.dev para obtener más información útil.

## Funciones de privacidad que ofrecen los navegadores

Los fabricantes de navegadores son conscientes de la necesidad de proteger la privacidad de los usuarios y de los efectos negativos del rastreo, la huella digital, etc., en la experiencia de usuario. Por eso, han implementado varias funciones que mejoran la protección de la privacidad o mitigan las amenazas. En esta sección veremos distintas categorías de protección de la privacidad que los navegadores aplican automáticamente.

### HTTPS de forma predeterminada

La [seguridad de la capa de transporte (TLS)](/es/docs/Web/Security/Defenses/Transport_Layer_Security) ofrece seguridad y privacidad cifrando los datos mientras viajan por la red, y es la tecnología en la que se basa el protocolo [HTTPS](/es/docs/Glossary/HTTPS). TLS es bueno para la privacidad porque impide que terceros intercepten los datos transmitidos y los usen de forma malintencionada, por ejemplo, para rastrear.

Todos los navegadores avanzan hacia exigir HTTPS de forma predeterminada; en la práctica ya es así, porque sin este protocolo no se puede hacer mucho en la web.

Estos son algunos temas relacionados:

- [Transparencia de certificados](/es/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Un estándar abierto para supervisar y auditar certificados, que crea una base de datos de registros públicos que puede ayudar a identificar certificados incorrectos o malintencionados.
- [HTTP Strict Transport Security (HSTS)](/es/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : Los servidores usan HSTS para protegerse de los ataques de degradación del protocolo y de secuestro de cookies, ya que permite a los sitios indicar a los clientes que solo pueden usar HTTPS para comunicarse con el servidor.
- [HTTP/2](/es/docs/Glossary/HTTP_2)
  - : Aunque técnicamente HTTP/2 no <em>tiene</em> que usar cifrado, la mayoría de los desarrolladores de navegadores solo lo admiten cuando se usa con HTTPS; en ese sentido, puede considerarse una función que mejora la seguridad y la privacidad.

### Consentimiento para las "funciones potentes"

Las llamadas funciones "potentes" de las API web, que dan acceso a datos y operaciones potencialmente sensibles, solo están disponibles en [contextos seguros](/es/docs/Web/Security/Defenses/Secure_Contexts), lo que básicamente significa solo con HTTPS. Y no solo eso: estas funciones web están protegidas por un sistema de permisos del usuario. Los usuarios tienen que aceptar explícitamente funciones como permitir notificaciones, acceder a los datos de geolocalización, poner el navegador en modo de pantalla completa, acceder a los flujos multimedia de las cámaras web, usar pagos web, etc.

### Tecnología contra el rastreo

Los navegadores han implementado varias funciones contra el rastreo que mejoran automáticamente la protección de la privacidad de sus usuarios. Muchas de ellas bloquean o limitan la capacidad de los sitios de terceros incrustados en elementos {{htmlelement("iframe")}} para acceder a las cookies establecidas en el dominio de nivel superior, ejecutar scripts de rastreo, etc.

- El valor predeterminado del atributo [`SameSite`](/es/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) del encabezado {{httpheader("Set-Cookie")}} se ha cambiado a `Lax`, para ofrecer una mejor protección contra el rastreo y los ataques {{glossary("CSRF")}}. Consulta [Controlar las cookies de terceros con `SameSite`](/es/docs/Web/HTTP/Guides/Cookies#cookies_samesite) para obtener más información.
- Todos los navegadores han empezado a bloquear las cookies de terceros de forma predeterminada. Consulta [¿Cómo gestionan los navegadores las cookies de terceros?](/es/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies) para obtener más detalles.
- Los navegadores están implementando tecnologías que permiten las cookies de terceros solo en determinadas circunstancias que no perjudican la privacidad, o que resuelven de otras formas los casos de uso habituales que hoy requieren cookies de terceros. Consulta [La transición desde las cookies de terceros](/es/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies).
- Varios navegadores eliminan de las URL los parámetros de rastreo conocidos, entre ellos Firefox, Safari y Brave. Las extensiones de navegador también ayudan a hacerlo, por ejemplo, [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Los navegadores han implementado la [protección contra el rastreo mediante redirecciones](/es/docs/Web/Privacy/Guides/Redirect_tracking_protection).

## Consideraciones de privacidad para los desarrolladores del lado del cliente

Hay varias acciones que los desarrolladores web pueden y deben llevar a cabo para mejorar la privacidad de sus usuarios. En las secciones siguientes se tratan las más importantes. Algunas de estas categorías no son tareas puramente técnicas y requerirán la colaboración de otros miembros del equipo.

## Recopilar datos de forma ética

Las empresas recopilan muchos datos distintos de sus usuarios por motivos muy diversos:

- Nombres de usuario, contraseñas, correos electrónicos, etc., para la autenticación.
- Correos electrónicos, direcciones postales y números de teléfono para la comunicación.
- Edad, género, ubicación geográfica, pasatiempos favoritos y muchos otros datos de identificación personal, para todo tipo de fines, desde la personalización del sitio hasta las encuestas de satisfacción de los clientes.
- Hábitos de navegación en sus sitios y en otros sitios, para medir el éxito de las páginas y las funciones.
- Y muchísimo más.

Al recopilar datos de tus clientes, tienes la oportunidad de actuar con integridad, demostrarles que eres digno de confianza y construir una gran relación con ellos, lo que a su vez mejora tu marca y tus posibilidades de éxito.

La ética de la recopilación de datos puede resumirse en tres principios sencillos:

- No recopiles más datos de los que necesitas
- Comunica claramente cómo vas a usar los datos que recopilas
- Elimina los datos cuando termines de usarlos

> [!NOTE]
> Los consejos que se ofrecen a continuación sirven para lograr una experiencia de usuario mejor y más respetuosa con la privacidad, pero muchos de ellos son obligatorios por ley para cumplir normativas como el [RGPD](https://gdpr.eu/) de la UE. Asegúrate de averiguar qué normativas se aplican en tu región y qué tienes que hacer para cumplirlas.

### No recopiles más datos de los que necesitas

Es tentador pedir muchos datos a los usuarios porque crees que podrían ser útiles en el futuro. Sin embargo, cada dato adicional que recopilas aumenta el riesgo para la privacidad de tus usuarios y la probabilidad de que abandonen el paso que están realizando (ya sea rellenar una encuesta o registrarse en un servicio).

Es bueno anonimizar los datos. También deberías pensar si puedes obtener lo que necesitas haciendo que tu solicitud de datos sea menos detallada. Por ejemplo, en lugar de preguntar a un usuario por sus productos favoritos, podrías pedirle que elija entre categorías más generales.

Sin embargo, la mejor forma de proteger la privacidad de los usuarios es minimizar los datos que recopilas. Volviendo al ejemplo anterior, podrías deducir los mismos datos a partir del historial de compras del usuario. Otro ejemplo: los usuarios agradecen poder comprar productos de forma anónima. No deberías obligarlos a crear una cuenta; si no es necesaria para que el servicio funcione, debería ser decisión suya.

### Comunica claramente cómo vas a usar los datos que recopilas

Una vez que hayas decidido qué datos vas a recopilar, deberías publicar en tu sitio una política de privacidad que indique claramente:

- Los datos que recopilas
- Las formas en que usas los datos
- Las partes con las que sueles compartir los datos, si es que lo haces, y una declaración de que pedirás el consentimiento del usuario antes de compartirlos
- Durante cuánto tiempo conservas los datos antes de eliminarlos
- Las formas en que los usuarios pueden ver los datos que has recopilado sobre ellos y eliminarlos si lo desean

Cuando te proporcionan datos, tus usuarios deben tener la oportunidad de leer tu política de privacidad y aceptarla. Deben poder decidir si están conformes con ella y aceptar tus condiciones. Y, como se indicó antes, también deben poder ver qué datos suyos has recopilado y eliminarlos si lo desean.

Una vez publicada tu política de privacidad, tienes que asegurarte de cumplirla: hacer lo que dices que vas a hacer es muy importante para ganarte la confianza de los usuarios. Solo debes recopilar los datos que dices que vas a recopilar y usarlos solo para el fin que indicas. Si alguien de tu empresa se inventa una nueva forma ingeniosa de usar los datos existentes, sigue sin estar permitida según las condiciones de tu política si esta no especifica que los usarás para ese fin. Si los usuarios aceptaron el uso de sus datos para un fin concreto y ese fin se amplía, puede que tengas que plantearte obtener un nuevo consentimiento.

### Elimina los datos cuando termines de usarlos

Antes mencionamos que hay que dar a los usuarios una forma de ver qué datos suyos has recopilado y eliminarlos si lo desean. Podrías hacerlo dentro de la misma experiencia que usan para eliminar su cuenta (sus datos se eliminan con ella), o convertirlo en dos opciones separadas. En cualquier caso, las opciones deben ser fáciles de encontrar.

Permitir que el usuario elija cuándo se eliminan partes importantes de sus datos le da mucho control y genera confianza, pero puede que haya algunos datos cuya eliminación quieras gestionar tú. Por ejemplo, algunos datos pueden usarse solo durante unas horas o minutos y después eliminarse, como los que se usan para gestionar la sesión de un usuario mientras está conectado.

> [!NOTE]
> El encabezado de respuesta HTTP {{httpheader("Clear-Site-Data")}} es muy útil para eliminar datos de usuario de corta duración: indica al navegador que borre su caché, sus cookies o su almacenamiento (por ejemplo, los datos de [Web Storage](/es/docs/Web/API/Web_Storage_API) o de [IndexedDB](/es/docs/Web/API/IndexedDB_API)). Por ejemplo, podrías hacer que tu servidor lo envíe junto con una página de "confirmación de cierre de sesión", para que, una vez que el usuario cierre la sesión, sus datos se eliminen de forma segura.

## Reducir el rastreo

Antes hablamos del rastreo y de algunos de los fines poco éticos para los que se usa. No debería hacer falta explicar cómo esos usos pueden erosionar la confianza de los usuarios; siempre que sea posible, solo deberías usar posibles mecanismos de rastreo, como las [cookies de terceros](/es/docs/Web/Privacy/Guides/Third-party_cookies), para fines éticos, como transferir entre sitios el estado de inicio de sesión u otros datos de personalización.

Recuerda también que todos los navegadores están empezando a bloquear las cookies de terceros de forma predeterminada, mientras implementan tecnologías alternativas para resolver los casos de uso habituales. Es buena idea prepararse para esto, limitando la cantidad de actividades de rastreo de las que dependes o implementando de otras formas la persistencia de la información que necesitas. Consulta [La transición desde las cookies de terceros](/es/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) para obtener más información.

## Gestionar con cuidado los recursos de terceros

Por supuesto, sería fácil gestionar la privacidad si solo tuvieras que preocuparte por los recursos que has creado tú (código, cookies, sitios, etc.). El verdadero reto es que lo más probable es que tu sitio use recursos de terceros. Estos pueden incluir contenido de terceros incrustado en elementos `<iframe>`, bibliotecas, frameworks, API, recursos alojados externamente como imágenes y videos, etc.

Los recursos de terceros son una parte esencial del desarrollo web moderno y ofrecen muchas posibilidades. Sin embargo, cualquier recurso de terceros que permitas en tu sitio puede tener los mismos permisos que tus propios recursos; todo depende de cómo lo incluyas en tu sitio:

- El JavaScript que se ejecuta dentro de contenido de terceros incrustado en tu sitio mediante un `<iframe>` está aislado por la [política del mismo origen](/es/docs/Web/Security/Defenses/Same-origin_policy), lo que significa que no tendría acceso a otros scripts y datos incluidos en el contexto de navegación de nivel superior.
- Sin embargo, un script de terceros incluido directamente en tu página mediante un elemento {{htmlelement("script")}} _sí_ tendría acceso a tus otros scripts y datos, tanto si está alojado en tu sitio como en otro. En la práctica, sería código de primera parte. Un script malintencionado incluido de esta forma podría robar en secreto los datos de tus usuarios, por ejemplo, enviándolos a un servidor de terceros.

Es importante auditar todos los recursos de terceros que usas en tu sitio. Asegúrate de saber qué datos recopilan, qué solicitudes hacen y a quién, y cuáles son sus políticas de privacidad. Tu política de privacidad, por cuidadosamente diseñada que esté, no sirve de nada si usas un script de terceros que la incumple.

> [!NOTE]
> Hay varias herramientas que pueden ayudarte a hacerte una idea de las solicitudes que hace un sitio, por ejemplo, el [Request Map Generator](https://requestmap.webperf.tools/).

Una vez que hayas auditado tus recursos de terceros y entiendas lo que hacen, deberías sopesar sus aspectos negativos frente al valor que aportan. Si un script de terceros es gratuito y muy útil, pero recopila bastantes datos de los usuarios, podrías:

1. Aceptar ese compromiso, actualizar tu política de privacidad para incluir los detalles y esperar que no afecte demasiado a la confianza de tus usuarios.
2. Buscar una herramienta de terceros alternativa que recopile menos datos.
3. Crear tu propia herramienta.

La siguiente lista ofrece algunos consejos para mitigar los riesgos para la privacidad inherentes al uso de recursos de terceros:

- Al incrustar recursos de terceros, piensa si hay alguna forma de lograr el mismo efecto, o uno parecido, con menos impacto en la privacidad. Por ejemplo, puede ser divertido tener en tu sitio un visor incrustado de publicaciones de redes sociales, pero ¿es realmente necesario? ¿No bastaría con un enlace a tu página en esa red social? Además, algunos servicios de terceros tienen opciones que mejoran la privacidad. Consulta, por ejemplo, [Embed videos & playlists > Turn on privacy-enhanced mode](https://support.google.com/youtube/answer/171780) de YouTube.
- Siempre que sea posible, deberías impedir que terceros reciban el encabezado {{httpheader("Referer")}} cuando les haces solicitudes. Puede hacerse de forma bastante detallada, por ejemplo, incluyendo [rel="noreferrer"](/es/docs/Web/HTML/Reference/Attributes/rel/noreferrer) en los enlaces externos. También puedes establecerlo de forma más global para la página o el sitio, por ejemplo, con el encabezado {{httpheader("Referrer-Policy")}}.

  > [!NOTE]
  > Consulta también [El encabezado Referer: problemas de privacidad y seguridad](/es/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns).

- Usa el encabezado HTTP {{httpheader("Permissions-Policy")}} para controlar el acceso a las "funciones potentes" de las API (como las notificaciones, los datos de geolocalización, el acceso a los flujos multimedia de las cámaras web, etc.). Esto puede ser útil para la privacidad porque impide que los sitios de terceros hagan cosas inesperadas con estas funciones, y los usuarios no quieren verse bombardeados sin necesidad por solicitudes de permisos que quizás no entiendan. También puedes controlar el uso de las "funciones potentes" dentro de los sitios de terceros incrustados en elementos {{htmlelement("iframe")}}, especificando políticas de permisos en un atributo `allow` del propio `<iframe>`.

  > [!NOTE]
  > Consulta también nuestra [guía de Permissions-Policy](/es/docs/Web/HTTP/Guides/Permissions_Policy) para obtener más información y ejemplos, y [permissionspolicy.com](https://www.permissionspolicy.com/) para encontrar herramientas útiles, como un generador de políticas.

- Usa el atributo `sandbox` de {{htmlelement("iframe")}} para permitir o impedir el uso de ciertas funciones dentro del contenido incrustado en el `<iframe>`, como las descargas, el envío de formularios, las ventanas modales y los scripts.

> [!NOTE]
> Consulta [Third parties](https://web.dev/learn/privacy/third-parties/) en web.dev para obtener más información útil sobre auditorías y otros temas.

## Proteger los datos de los usuarios

Tienes que asegurarte de que los datos de los usuarios se transmitan y almacenen de forma segura una vez recopilados. Este es más bien un tema de [seguridad](/es/docs/Web/Security), pero vale la pena mencionarlo aquí: una buena política de privacidad no sirve de nada si tu seguridad es deficiente y los atacantes pueden robarte los datos.

Los siguientes consejos ofrecen algunas pautas para proteger los datos de tus usuarios:

- Es difícil hacer bien la seguridad. Al implementar una solución segura que implique recopilar datos, sobre todo si son datos sensibles como las credenciales de inicio de sesión, tiene sentido usar una solución reconocida de un proveedor de prestigio. Por ejemplo, cualquier framework del lado del servidor de confianza tendrá funciones integradas para protegerse de las vulnerabilidades habituales. También podrías plantearte usar un producto especializado para tu fin, por ejemplo, una solución de proveedor de identidad o un proveedor de encuestas en línea seguro.
- Si quieres desarrollar tu propia solución para recopilar datos de los usuarios, asegúrate de entender lo que haces. Contrata a un desarrollador del lado del servidor con experiencia o a un ingeniero de seguridad para implementar el sistema, y asegúrate de que se pruebe a fondo. Usa la {{glossary("multi-factor authentication", "autenticación multifactor")}} (MFA) para ofrecer una mejor protección. Considera usar una API específica, como [Web Authentication](/es/docs/Web/API/Web_Authentication_API) o [Federated Credential Management](/es/docs/Web/API/FedCM_API), para simplificar el lado del cliente de la aplicación.
- Al recopilar la información de registro de los usuarios, exige contraseñas seguras para que los datos de sus cuentas no se puedan adivinar fácilmente. Las contraseñas débiles son una de las principales causas de las brechas de seguridad. Anima a tus usuarios a usar un gestor de contraseñas para generar y guardar contraseñas complejas; así no tendrán que preocuparse por recordarlas ni crearán un riesgo de seguridad al anotarlas.
- No incluyas datos sensibles en las URL: si un tercero intercepta la URL (por ejemplo, mediante el encabezado {{httpheader("Referer")}}), podría robar esa información. Para evitarlo, usa solicitudes `POST` en lugar de `GET`.
- Considera usar herramientas como la [política de seguridad de contenido](/es/docs/Web/HTTP/Guides/CSP) y la [política de permisos](/es/docs/Web/HTTP/Guides/Permissions_Policy) para imponer en tu sitio un conjunto de usos de funciones que dificulte introducir vulnerabilidades. Ten cuidado al hacerlo: si bloqueas el uso de una función de la que depende un script de terceros para funcionar, podrías acabar rompiendo la funcionalidad de tu sitio. Esto es algo que puedes revisar al auditar tus recursos de terceros (consulta [Gestionar con cuidado los recursos de terceros](#gestionar_con_cuidado_los_recursos_de_terceros)).

## Véase también

- [Seguridad web](/es/docs/Web/Security)
- [Learn Privacy](https://web.dev/learn/privacy/) en web.dev
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) en mozilla.org
