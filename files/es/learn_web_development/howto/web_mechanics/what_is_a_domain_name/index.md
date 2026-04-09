---
title: ¿Qué es un nombre de dominio?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
original_slug: Learn/Common_questions/Web_mechanics/What_is_a_domain_name
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Primero necesitas saber
        <a href="/es/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >cómo funciona Internet</a
        >
        y entender
        <a href="/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL">qué son las URLs</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprende qué son los nombres de dominio, cómo funcionan, y por qué son
        importantes.
      </td>
    </tr>
  </tbody>
</table>

## Resumen

Los nombres de dominio son una parte clave de la infraestructura de Internet. Proporcionan una dirección legible para cualquier servidor web disponible en Internet.

Cualquier computadora conectada a Internet puede ser alcanzada a partir de una dirección {{Glossary("IP_Address","IP")}} pública, ya sea IPv4 (p. ej. `192.0.2.172`) o una IPv6 (p. ej. `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Las computadoras pueden manejar estas direcciones fácilmente, pero las personas pasan trabajo para saber de quien es el servidor o que servicio ofrece. Las direcciones IP son difíciles de recordar y pueden cambiar con el tiempo.

Para resolver todos estos problemas, usamos direcciones que las personas pueden leer, se denominan nombres de dominio.

## Profundizar

### Estructura de los nombres de dominio

Un nombre de dominio tiene una estructura simple formada por varias partes (puede tener solamente una parte, dos, tres,...), separadas por puntos y **se leen de derecha a izquierda**:

![Anatomía del nombre de dominio MDN](structure.png)

Cada una de estas partes provee información específica sobre el nombre de dominio completo.

- {{Glossary("TLD")}} (Top-Level Domain) Dominio de primer nivel.
  - : Los TLDs les dicen a usuarios el propósito general del servicio que se esconde tras el nombre de dominio. Los TLDs más genéricos (`.com`, `.org`, `.net`) no requieren que los servicios web cumplan ningún criterio particular, pero algunos TLDs hacen cumplir políticas más estrictas por lo que es más claro su propósito. Por ejemplo:
    - TLDs locales como `.us`, `.fr`, o `.se` pueden requerir el servicio en un determinado idioma o que esté alojado en un país específico - estan hechos para indicar que un recurso está en un idioma o país en particular.
    - Los TLDs que contienen `.gov` son solamente permitidos para ser usados por los departamentos de gobierno.
    - Los TLDs como `.edu` y `.ac` `.uk` se supone que se usen solamente en instituciones educacionales o académicas.

    TLDs pueden contener tanto caracteres especiales como caracteres latinos. La longitud máxima de un TLD es de 63 caracteres, sin embargo la mayoría se tiene alrededor de 2-3.

    La lista completa de TLD es [administrada por ICANN](https://www.icann.org/en/contracted-parties/registry-operators/resources/list-of-top-level-domains).

- Etiqueta (o componente)
  - : Las etiquetas son lo que siguen al TLD. Una etiqueta es una secuencia de caracteres sin distinguir minúsculas o mayúsculas con una longiutd entre uno y sesenta y tres caracteres, que contiene solo letras `A` a la `Z`, digitos `0` a `9` y el caracter '-' (que no puede encontrarse al inicio o al final de la etiqueta). `a`, `97` y `hola-persona-desconocida-16-como-estas` son ejemplos de etiquetas válidas.

    La etiqueta localizada a la derecha antes del TLD puede ser llamada también Dominio de Nivel Secundario, en inglés _Secondary Level Domain_ (SLD).
  
    Un nombre de dominio puede tener muchas etiquetas (o componentes), no es obligatorio ni necesario tener tres etiquetas para formar un nombre de dominio. Por ejemplo, [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) es un nombre de dominio válido. Para cualquier dominio sobre el que se tenga control (p. ej. [mozilla.org](https://mozilla.org/es-ES/)), uno puede crear otros nombres de dominio (a veces llamados "subdominios", por ejemplo [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/), o [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Comprar un nombre de dominio

#### ¿Quién es propietario de un nombre de dominio?

No se puede "comprar un nombre de dominio". Esto es para que dominios que no se usan, eventualmente se vuelven disponibles para usarse nuevamente por alguien mas. Si cada nombre de dominio fuera comprado, la web se llenaría de nombres de dominio sin usar, que estarían bloqueados y no se podrían usar por nadie mas.

Por el contrario, pagas por el derecho a usar un nombre de dominio, por uno o más años. Puedes renovar tu derecho, y la renovación tiene prioridad sobre las aplicaciones de otras personas. Pero nuncá eres dueño del nombre de dominio.

Las compañías llamadas registradores utilizan los registros de nombres de dominio para realizar un seguimiento de la información técnica y administrativa que lo conecta con su nombre de dominio.

> [!NOTE]
> Para algunos nombres de dominio pudiera no ser un registrador quien esté a cargo de mantener el seguimiento. Por ejemplo, cada nombre de dominio bajo `.fire` es manejado por Amazon.

#### Encontrar un nombre de dominio disponible

Para encontrar si un nombre de dominio dado está disponible,

- Ir a un sitio web de registro de nombres de dominio. La mayoría de ellos, tienen un servicio "whois" que te dice si un nombre de dominio está disponible.
- Alternativamente, si usted usa un sistema con un shell incorporado, escriba el comando `whois`, como se muestra aquí para `mozilla.org`:

```
$ whois mozilla.org
Domain Name:MOZILLA.ORG
Domain ID: D1409563-LROR
Creation Date: 1998-01-24T05:00:00Z
Updated Date: 2013-12-08T01:16:57Z
Registry Expiry Date: 2015-01-23T05:00:00Z
Sponsoring Registrar:MarkMonitor Inc. (R37-LROR)
Sponsoring Registrar IANA ID: 292
WHOIS Server:
Referral URL:
Domain Status: clientDeleteProhibited
Domain Status: clientTransferProhibited
Domain Status: clientUpdateProhibited
Registrant ID:mmr-33684
Registrant Name:DNS Admin
Registrant Organization:Mozilla Foundation
Registrant Street: 650 Castro St Ste 300
Registrant City:Mountain View
Registrant State/Province:CA
Registrant Postal Code:94041
Registrant Country:US
Registrant Phone:+1.6509030800
```

Como se observa, no se puede registrar `mozilla.org` porque la fundación de Mozilla ya ha sido registrada.

Por otra parte, veamos si se puede registrar `afunkydomainname.org`:

```
$ whois afunkydomainname.org
NOT FOUND
```

Como se observa, el dominio no existe en la base de datos de `whois` (en el momento que se escribió), por lo que pudiéramos pedir registrarlo. ¡Es bueno saber!

#### Obtener un nombre de dominio

El proceso es bastante sencillo:

1. Ir a un sitio de registro.
2. Generalmente hay un letrero que llama la atención que dice "Get a domain name". Hacer click en él.
3. Rellenar el formulario con todos los detalles requeridos. Asegúrese de no haber escrito incorrectamente el nombre de dominio deseado. ¡Una vez que esté pagado, es muy tarde!.
4. El registrador te permitirá conocer cuando un nombre de dominio esté correctamente registrado. Dentro de unas pocas horas, todos los servidores DNS habrán recibido su información de DNS.

> [!NOTE]
> En este proceso se le pide su dirección real. Asegúrese de escribirla correctamente, ya que en algunos países los registradores pueden verse obligados a cerrar el dominio si no pueden proporcionar una dirección válida.

#### Actualización de DNS

Las bases de datos DNS son almacenadas en cada servidor DNS del mundo, y todos ellos hacen referencia a unos pocos denominados "servidores de nombre autoritario" o "servidores DNS de primer nivel". Cuando su registrador crea o actualiza alguna información para un dominio dado, la información tiene que ser actualizada en cada base de datos DNS. Cada servidor DNS que conoce sobre un dominio dado almacena la información por algún tiempo antes de que sea automáticamente invalidada y luego actualizada ( el servidor DNS consulta un servidor autoritario nuevamente). De esta manera, a los servidores DNS que conocen este nombre de dominio les toma algún tiempo poner la información al día.

### ¿Cómo funciona una petición DNS?

Como ya hemos visto, cuando usted quiere visualizar una página web en su navegador es más simple escribir un nombre de dominio que una dirección IP. Echemos un vistazo al proceso:

1. Escriba `mozilla.org` en la barra de direcciones de su navegador.
2. Su navegador le pregunta a su computadora si reconoce la dirección IP identificada por este nombre de dominio (usando una caché DNS local) Si lo hace, el nombre es traducido a la IP y el navegador gestiona el contenido con el servidor web. Fin de la historia.
3. Si la computadora no sabe qué IP está detrás del nombre `mozilla.org`, hay que pedírselo a un servidor DNS, cuyo trabajo es precisamente decirle a la computadora cuál es la dirección IP de cada nombre de dominio registrado.
4. Ahora que la computadora conoce la dirección IP requerida, su navegador puede gestionar contenidos con el servidor web.

![Explicación de los pasos necesarios para obtener el resultado de una solicitud DNS](2014-10-dns-request2.png)

## Próximos pasos

Bien, hemos hablado mucho sobre procesos y arquitectura. Es hora de seguir adelante.

- Si quieres ponerte manos a la obra, es buen momento para comenzar a profundizar en el diseño y explorar [la estructura de una página web](/es/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts).
- Vale la pena señalar que algunos aspectos de construcción de un sitio web cuestan dinero. Por favor, remítase a [cuánto cuesta construir un sitio web](/es/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- O lea más sobre [Nombre de Dominio](https://es.wikipedia.org/wiki/Dominio) en la Wikipedia.
- Puede encontrar además [aquí](https://howdns.works/) una explicación colorida y divertida de cómo los DNS trabajan.
