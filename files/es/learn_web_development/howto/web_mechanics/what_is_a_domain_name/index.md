---
title: ¿Qué es un nombre de dominio?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
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
        <a href="/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL"
          >qué son las URL</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender qué son los nombres de dominio, cómo funcionan y por qué son importantes.
      </td>
    </tr>
  </tbody>
</table>

## Resumen

Los nombres de dominio son una parte clave de la infraestructura de Internet. Proporcionan una dirección legible para cualquier persona, para cualquier servidor web disponible en Internet.

Cualquier computadora conectada a Internet puede ser localizada mediante una {{Glossary("IP Address", "dirección IP")}} pública, ya sea una dirección IPv4 (por ejemplo, `192.0.2.172`) o una dirección IPv6 (por ejemplo, `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Las computadoras pueden manejar este tipo de direcciones fácilmente, pero a las personas les resulta difícil averiguar quién administra el servidor o qué servicio ofrece el sitio web. Las direcciones IP son difíciles de recordar y pueden cambiar con el tiempo.

Para resolver todos estos problemas, usamos direcciones legibles para las personas llamadas nombres de dominio.

## Análisis más detallado

### Estructura de los nombres de dominio

Un nombre de dominio tiene una estructura simple compuesta por varias partes (puede ser una sola parte, dos, tres…), separadas por puntos y **leídas de derecha a izquierda**:

![Anatomía del nombre de dominio de MDN](structure.png)

Cada una de esas partes proporciona información específica sobre el nombre de dominio completo.

- {{Glossary("TLD")}} (dominio de nivel superior).
  - : Los TLD indican a los usuarios el propósito general del servicio detrás del nombre de dominio. Los TLD más genéricos (`.com`, `.org`, `.net`) no requieren que los servicios web cumplan ningún criterio en particular, pero algunos TLD imponen políticas más estrictas para dejar claro cuál es su propósito. Por ejemplo:
    - Los TLD locales como `.us`, `.fr` o `.se` pueden requerir que el servicio se ofrezca en un idioma determinado o esté alojado en un país determinado; se supone que indican un recurso en un idioma o país en particular.
    - Los TLD que contienen `.gov` solo pueden ser usados por departamentos gubernamentales.
    - El TLD `.edu` es solo para uso de instituciones educativas y académicas.

    Los TLD pueden contener caracteres especiales además de caracteres latinos. La longitud máxima de un TLD es de 63 caracteres, aunque la mayoría tiene entre 2 y 3.

    La lista completa de TLD es [mantenida por ICANN](https://www.icann.org/en/contracted-parties/registry-operators/resources/list-of-top-level-domains).

- Etiqueta (o componente)
  - : Las etiquetas son lo que sigue al TLD. Una etiqueta es una secuencia de caracteres que no distingue entre mayúsculas y minúsculas, con una longitud de entre uno y sesenta y tres caracteres, que contiene solo las letras de la `A` a la `Z`, los dígitos del `0` al `9` y el carácter '-' (que no puede ser el primer ni el último carácter de la etiqueta). `a`, `97` y `hello-strange-person-16-how-are-you` son todos ejemplos de etiquetas válidas.

    La etiqueta ubicada justo antes del TLD también se llama _dominio de segundo nivel_ (SLD, por sus siglas en inglés).

    Un nombre de dominio puede tener muchas etiquetas (o componentes). No es obligatorio ni necesario tener 3 etiquetas para formar un nombre de dominio. Por ejemplo, [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) es un nombre de dominio válido. Para cualquier dominio que controles (por ejemplo, [mozilla.org](https://www.mozilla.org/es-US/)), puedes crear "subdominios" con contenido diferente ubicado en cada uno, como [developer.mozilla.org](/es/), [support.mozilla.org](https://support.mozilla.org/), o [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Comprar un nombre de dominio

#### ¿Quién es dueño de un nombre de dominio?

No puedes "comprar un nombre de dominio". Esto es así para que los nombres de dominio no utilizados eventualmente queden disponibles para que otra persona los use nuevamente. Si todos los nombres de dominio se compraran, la web se llenaría rápidamente de nombres de dominio sin usar que estarían bloqueados y que nadie podría utilizar.

En cambio, pagas por el derecho a usar un nombre de dominio durante uno o más años. Puedes renovar tu derecho, y tu renovación tiene prioridad sobre las solicitudes de otras personas. Pero nunca eres dueño del nombre de dominio.

Las empresas llamadas registradores utilizan registros de nombres de dominio para llevar el control de la información técnica y administrativa que te conecta con tu nombre de dominio.

> [!NOTE]
> Para algunos nombres de dominio, es posible que no sea un registrador quien se encargue de este control. Por ejemplo, todos los nombres de dominio bajo `.fire` son administrados por Amazon.

#### Encontrar un nombre de dominio disponible

Para saber si un nombre de dominio determinado está disponible,

- Ve al sitio web de un registrador de nombres de dominio. La mayoría ofrece un servicio "whois" que te indica si un nombre de dominio está disponible.
- Alternativamente, si usas un sistema con una shell integrada, escribe un comando `whois` en ella, como se muestra aquí para `mozilla.org`:

  ```bash
  whois mozilla.org
  ```

  Esto generará la siguiente salida:

  ```plain
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

Como puedes ver, no puedo registrar `mozilla.org` porque la Fundación Mozilla ya lo ha registrado.

Por otro lado, veamos si podría registrar `afunkydomainname.org`:

```bash
whois afunkydomainname.org
```

Esto generará la siguiente salida (al momento de escribir esto):

```plain
NOT FOUND
```

Como puedes ver, el dominio no existe en la base de datos de `whois`, así que podríamos solicitar registrarlo. ¡Bueno saberlo!

#### Obtener un nombre de dominio

El proceso es bastante sencillo:

1. Ve al sitio web de un registrador.
2. Generalmente hay un llamado a la acción destacado como "Obtener un nombre de dominio". Haz clic en él.
3. Completa el formulario con todos los datos requeridos. Asegúrate, especialmente, de no haber escrito mal el nombre de dominio que deseas. ¡Una vez pagado, ya es demasiado tarde!
4. El registrador te avisará cuando el nombre de dominio esté correctamente registrado. En unas pocas horas, todos los servidores DNS habrán recibido tu información DNS.

> [!NOTE]
> En este proceso, el registrador te pedirá tu dirección física real. Asegúrate de completarla correctamente, ya que en algunos países los registradores pueden verse obligados a cerrar el dominio si no pueden proporcionar una dirección válida.

#### Actualización de DNS

Las bases de datos DNS se almacenan en todos los servidores DNS del mundo, y todos estos servidores hacen referencia a unos pocos servidores especiales llamados "servidores de nombres autoritativos" o "servidores DNS de nivel superior"; estos son como los servidores jefes que administran el sistema.

Cada vez que tu registrador crea o actualiza cualquier información para un dominio determinado, esa información debe actualizarse en todas las bases de datos DNS. Cada servidor DNS que conoce un dominio determinado almacena la información durante un tiempo antes de que se invalide automáticamente y luego se actualice (el servidor DNS consulta a un servidor autoritativo y obtiene de él la información actualizada). Por lo tanto, se necesita cierto tiempo para que los servidores DNS que conocen este nombre de dominio obtengan la información actualizada.

### ¿Cómo funciona una solicitud DNS?

Como ya vimos, cuando quieres mostrar una página web en tu navegador, es más fácil escribir un nombre de dominio que una dirección IP. Veamos el proceso:

1. Escribe `mozilla.org` en la barra de direcciones de tu navegador.
2. Tu navegador le pregunta a tu computadora si ya reconoce la dirección IP identificada por este nombre de dominio (usando una caché DNS local). Si es así, el nombre se traduce a la dirección IP y el navegador negocia el contenido con el servidor web. Fin de la historia.
3. Si tu computadora no sabe qué IP corresponde al nombre `mozilla.org`, procede a preguntarle a un servidor DNS, cuyo trabajo es precisamente indicarle a tu computadora qué dirección IP corresponde a cada nombre de dominio registrado.
4. Ahora que la computadora conoce la dirección IP solicitada, tu navegador puede negociar el contenido con el servidor web.

![Explicación de los pasos necesarios para obtener el resultado de una solicitud DNS](2014-10-dns-request2.png)

## Próximos pasos

Bien, hablamos mucho sobre procesos y arquitectura. Es hora de continuar.

- Si quieres poner manos a la obra, es un buen momento para empezar a explorar el diseño y descubrir [la anatomía de una página web](/es/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts).
- También vale la pena señalar que algunos aspectos de la creación de un sitio web tienen un costo. Consulta [cuánto cuesta crear un sitio web](/es/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- O lee más sobre [nombres de dominio](https://es.wikipedia.org/wiki/Domain_name) en Wikipedia.
- El tutorial [Cómo funciona el DNS](https://howdns.works/) tiene una explicación divertida y colorida.
