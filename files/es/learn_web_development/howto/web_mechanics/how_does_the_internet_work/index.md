---
title: ¿Cómo funciona Internet?
slug: Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
original_slug: Learn/Common_questions/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

En este artículo se describe qué es Internet y cómo funciona.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        Ninguno, pero te animamos a leer el
        <a href="/es/docs/Learn_web_development/Howto/Design_and_accessibility/Thinking_before_coding"
          >Artículo sobre el establecimiento de metas</a
        >
        primero.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprenderás lo básico a cerca de la infraestructura técnica de la web y
        la diferencia entre Internet y la Web.
      </td>
    </tr>
  </tbody>
</table>

## Resumen

**Internet** es la columna vertebral de la Web, la infraestructura técnica que la hace posible. En su esencia, Internet es una gran red de computadoras que se comunican simultáneamente.

[La historia de internet es algo oscura](http://en.wikipedia.org/wiki/Internet#History). Comenzó en la década de 1960 como un proyecto de investigación financiado por el ejercito de los EE.UU, y luego se convirtió en una infraestructura pública en la década de 1980 con el apoyo de muchas universidades públicas y empresas privadas. Las distintas tecnologías que soporta internet han evolucionado con el tiempo, pero la forma en que funciona no ha cambiado mucho: Internet es una forma de conectar las computadoras entre sí y asegurar que, pase lo que pase, encuentren una manera de mantenerse conectadas.

## Videos acerca del Internet

- [Cómo funciona internet explicado en 5 minutos](https://www.youtube.com/watch?v=7_LPdttKXPc): Un vídeo de 5 minutos para entender los fundamentos de internet por Aaron Titus.
- [¿Cómo funciona Internet?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Video detallado de 8 minutos de visualización.

## Profundizar

### Una red simple

Cuando dos ordenadores necesitan comunicarse, tienes que vincularlos, ya sea físicamente (por lo general con un [cable de Ethernet](http://en.wikipedia.org/wiki/Ethernet_crossover_cable)) o de forma inalámbrica (por ejemplo por [WiFi](http://en.wikipedia.org/wiki/WiFi) o sistema de [Bluetooth](http://en.wikipedia.org/wiki/Bluetooth)). Todos los ordenadores modernos pueden soportar cualquiera de este tipo de conexiones.

> [!NOTE]
> En el resto de este artículo, sólo nos referiremos al uso de cables físicos, pero es igualmente aplicable a las redes inalámbricas.

![Dos ordenadores conectados entre sí](internet-schema-1.png)

Una red no se limita a dos ordenadores, se pueden conectar tantos como se desee; sin embargo, rápidamente se volverá más compleja. Por ejemplo, para conectar diez ordenadores, se necesitarían ¡45 cables y unos nueve conectores por ordenador!

![Diez ordenadores interconectados](internet-schema-2.png)

Para resolver este problema, cada ordenador en una red está conectado a un pequeño ordenador especial llamado _conmutador_ o switch (en Inglés). Este conmutador cumple una única función: tal como hace un señalizador en una estación de tren, el conmutador se asegura que el mensaje enviado desde un ordenador emisor llegue al destino correcto. Para enviar un mensaje al ordenador B, el ordenador A debe enviar el mensaje al conmutador, el cual a su vez reeniva el mensaje al ordenador B - el ordenador B no recibe mensajes destinados a otros ordenadores, y ninguno de los mensajes para el ordenador B llegan a otros ordenadores de la red de area local.

Una vez que agregamos un conmutador al sistema, nuestra red de 10 ordenadores solo requiere 10 cables: un enchufe para cada ordenador y un conmutador con 10 enchufes.

![Diez ordenadores con un conmutador](internet-schema-3.png)

### Una red de redes

Hasta aquí todo bien. Pero ¿qué sucede al conectar cientos, miles, millones de ordenadores entre sí?. Por supuesto un solo _conmutador_ no puede escalar tanto, pero, si lees cuidadosamente, dijimos que un conmutador es un ordenador como cualquier otro, entonces ¿qué nos impide conectar dos _conmutadores_ a la vez?. Nada: hagámoslo.

![Dos conmutadores conectados entre sí](internet-schema-4.png)

Puedes imaginar que podemos conectar conmutadores entre sí infinitamente, para formar una red como esta:

![Conmutadores interconectados](internet-schema-5.png)

En la realidad, esto lleva a muchos problemas de ingeniería. Entre más conmutadores un paquete tenga que pasar, le toma mas tiempo llegar a su destino. Y no puedes tener un solo árbol de conmutadores, porque entonces cuando uno solo falla podría desconectar una gran porción de dispositivos. Para resolver este problema, mantenemos cada red local tan pequeña como es posible y conectamos estas redes locales usando un dispositivo separado, llamado _enrutador_ o router (en Inglés). Un enrutador es un ordenador que sabe como reenviar mensajes entre redes. El enrutador is como una oficina postal: cuando un paquete llega, lee la dirección del recipiente y reenvia el paquete al recipiente correcto directamente sin pasar por capas de relevos.

Una red así se acerca mucho a lo que llamamos Internet. Solo necesitamos un medio físico (cables) para conectar todos estos enrutadores. Afortunadamente, dicha infrestructura ya existía previa al Internet, y es la red telefónica. Para conectar nuestra red a la infrestructura telefónica necesitamos una pieza especial de equipo, llamada _módem_. Este _módem_ convierte la información de nuestra red a información manejable por la infrestructura telefónica y viceversa.

![Un enrutador conectado a un modem](internet-schema-6.png)

Note que el enrutador comercial en su hogar es probablemente una combinación de un conmutador, un enrutador y un módem, todos en un solo dispositivo.

Entonces estamos conectados a la infraestructura telefónica. El siguiente paso es enviar el mensaje desde nuestra red a la red que queremos llegar. Para lograr eso, conectaremos nuestra red a un proveedor de servicios de internet (ISP de sus siglas en inglés Internet Service Provider). Un ISP es una empresa que gestiona algunos enrutadores especiales interconectados, que también pueden acceder a enrutadores de otros ISP. Así, el mensaje de nuestra red es llevada a través de la red de redes de ISP, hasta la red de destino. Internet consiste en toda esta infraestructura de redes.

![stack de Internet al completo](internet-schema-7.png)

### Encontrando ordenadores

Si deseas enviar un mensaje a un ordenador, debes especificar a cuál. Es por ello que todo ordenador conectado a una red cuenta con una dirección única que lo identifica, llamada "dirección IP" (siendo "IP" las siglas en inglés de _Internet Protocol_, o _Protocolo de Internet_). Esta dirección está compuesta por una serie de cuatro números separados por puntos, por ejemplo: `192.168.2.10`.

Para los ordenadores es un identificador simple, pero los humanos tenemos mayor dificultad para recordar este tipo de direcciones. Con el propósito de convertir esta serie numérica en algo que podamos asociar con mayor facilidad a la dirección IP se utiliza lo que conocemos como _nombre de dominio_. Por ejemplo, `google.com` es el nombre de dominio utilizado para la dirección IP `142.250.190.78`. Así, usar un nombre de dominio es la manera más fácil para nosotros de identificar un ordenador a través de Internet.

![Mostrar cómo un nombre de dominio sirve como alias a una dirección IP](dns-ip.png)

### Internet y la web

Como puedes notar, cuando navegamos por la web con un navegador, normalmente utilizamos el nombre de dominio para llegar a un sitio web. ¿Significa eso que Internet y la Web son la misma cosa? No es tan simple. Como vimos, Internet es una infraestructura técnica que permite que miles de millones de ordenadores estén conectadas entre sí. Algunos de estos ordenadores, llamados _servidores web_ son capaces de enviar mensajes inteligibles a los navegadores. Por tanto _Internet_ es una infraestructura, mientras que la _Web_ es un servicio construido sobre dicha infraestructura. Cabe señalar que existen otros servicios soportados por Internet, como es el correo electrónico e {{Glossary("IRC")}}.

### Intranets and Extranets

Intranets son redes _privadas_ que estan restringidas a miembros de una organización en particular.
Son comunmente usadas para proveer un portal para que los miembros accedan a recursos compartidos, colabores y se comuniquen de manera segura.
Por ejemplo, la intranet de una orfanizacion puede alojar paginas web para compartir información de un equipo o depratamento, unidades de almacenamiento compartidas para administrar documentos clave o archivos, portales para llevar acabo tareas administrativas, y herramientas de colaboracion como wikis, tableros de discución y sistemas de mensajería.

Extranets son muy similares a las Intranets, excepto que éstas abren toda o parte de la red privada para permitir compartir o colaborar con otras organizaciones.
Tipicamente son usadas para compartir información de manera segura con clientes y otras partes interesadas con quiernes trabajan de cerca.
Muchas veces sus funciones son similares a las que provee una intranet: compartir información y archivos, herramientas de colaboración, tableros de discución, etc.

Ambas, intranets y extranets trabajan en el mismo tipo de infrestructura que el Internet y utilizan los mismos protocolos.
Por lo tanto puden ser accesadas por miembros autorizados desde diferentes locaciones físicas.

![Graphical Representation of how Extranet and Intranet work](internet-schema-8.png)

## Próximos pasos

- [Cómo funciona la Web.](/es/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [Comprender la diferencia entre una página web, un sitio web, un servidor web y un motor de búsqueda.](/es/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)
- [Comprender los nombres de dominio.](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
