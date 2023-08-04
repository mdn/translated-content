---
title: Escribiendo un servidor WebSocket en C#
slug: Web/API/WebSockets_API/Writing_WebSocket_server
---

## Introducción

Si deseas utilizar la API WebSocket, es conveniente si tienes un servidor. En este artículo te mostraré como puedes escribir uno en C#. Tú puedes hacer esto en cualquier lenguaje del lado del servidor, pero para mantener las cosas simples y más comprensibles, elegí el lenguaje de Microsoft.

Este servidor se ajusta a [RFC 6455](http://tools.ietf.org/html/rfc6455) por lo que solo manejará las conexiones de Chrome version 16, Firefox 11, IE 10 and superiores.

## Primeros pasos

WebSocket se comunica a través de conexiones [TCP (Transmission Control Protocol)](https://es.wikipedia.org/wiki/Transmission_Control_Protocol), afortunadamente C# tiene una clase [TcpListener](http://msdn.microsoft.com/es-es/library/system.net.sockets.tcplistener.aspx) la cual hace lo que su nombre sugiere. Esta se encuentra en el namespace _System.Net.Sockets_.

> **Nota:** Es una buena idea usar la instrucción `using` para escribir menos. Eso significa que no tendrás que re escribir el namespace de nuevo en cada ocasión.

### TcpListener

Constructor:

```cpp
TcpListener(System.Net.IPAddress localaddr, int port)
```

`localaddr` especifica la IP a escuchar y `port` especifica el puerto.

> **Nota:** Para crear un objeto `IPAddress` desde un `string`, usa el método estático `Parse` de `IPAddres.`

Métodos:

- `Start()`
- `System.Net.Sockets.TcpClient AcceptTcpClient()`
  Espera por una conexión TCP, la acepta y la devuelve como un objeto TcpClient.

Aquí está como utilizar lo que hemos aprendido:

```cs
using System.Net.Sockets;
using System.Net;
using System;

class Server {
    public static void Main() {
        TcpListener server = new TcpListener(IPAddress.Parse("127.0.0.1"), 80);

        server.Start();
        Console.WriteLine("El server se ha iniciado en 127.0.0.1:80.{0}Esperando una conexión...", Environment.NewLine);

        TcpClient client = server.AcceptTcpClient();

        Console.WriteLine("Un cliente conectado.");
    }
}
```

### TcpClient

Métodos:

- `System.Net.Sockets.NetworkStream GetStream()`
  Obtiene el stream del canal de comunicación. Ambos lados del canal tienen capacidad de lectura y escritura.

Propiedades:

- `int Available`
  Este es el número de bytes de datos que han sido enviados. El valor es cero hasta que `NetworkStream.DataAvailable` es `true`.

### NetworkStream

Métodos:

```cpp
Write(Byte[] buffer, int offset, int size)
```

Escribe bytes desde el _buffer;_ el _offset_ y el _size_ determinan la longitud del mensaje.

```
Read(Byte[] buffer, int offset, int size)
```

Lee bytes al _buffer;_ el _offset_ y el _size_ determinan la longitud del mensaje.

Ampliemos nuestro ejemplo anterior.

```cpp
TcpClient client = server.AcceptTcpClient();

Console.WriteLine("Un cliente conectado.");

NetworkStream stream = client.GetStream();

//enter to an infinite cycle to be able to handle every change in stream
while (true) {
    while (!stream.DataAvailable);

    Byte[] bytes = new Byte[client.Available];

    stream.Read(bytes, 0, bytes.Length);
}
```

## Handshaking

Cuando un cliente se conecta al servidor, envía una solicitud GET para actualizar la conexión al WebSocket desde una simple petición HTTP. Esto es conocido como _handshaking_.

Este código de ejemplo detecta el GET desde el cliente. Nota que esto bloqueará hasta los 3 primeros bytes del mensaje disponible. Soluciones alternativas deben ser investigadas para ambientes de producción.

```
using System.Text;
using System.Text.RegularExpressions;

while(client.Available < 3)
{
   // wait for enough bytes to be available
}

Byte[] bytes = new Byte[client.Available];

stream.Read(bytes, 0, bytes.Length);

//translate bytes of request to string
String data = Encoding.UTF8.GetString(bytes);

if (Regex.IsMatch(data, "^GET")) {

} else {

}
```

Esta respuesta es fácil de construir, pero puede ser un poco díficil de entender. La explicación completa del _handshake_ al servidor puede encontrarse en [RFC 6455, section 4.2.2](/es/docs/WebSockets-840092-dup/RFC%206455,%20section%204.2.2). Para nuestros propósitos, solo construiremos una respuesta simple.

Debes:

1. Obtener el valor de "_Sec-WebSocket-Key"_ sin espacios iniciales ni finales de el encabezado de la solicitud
2. Concatenarlo con "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
3. Calcular el código SHA-1 y Base64
4. Escribe el valor _Sec-WebSocket-Accept_ en el encabezado como parte de la respuesta HTTP.

```cpp
if (new Regex("^GET").IsMatch(data)) {
    Byte[] response = Encoding.UTF8.GetBytes("HTTP/1.1 101 Switching Protocols" + Environment.NewLine
        + "Connection: Upgrade" + Environment.NewLine
        + "Upgrade: websocket" + Environment.NewLine
        + "Sec-WebSocket-Accept: " + Convert.ToBase64String (
            SHA1.Create().ComputeHash (
                Encoding.UTF8.GetBytes (
                    new Regex("Sec-WebSocket-Key: (.*)").Match(data).Groups[1].Value.Trim() + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
                )
            )
        ) + Environment.NewLine
        + Environment.NewLine);

    stream.Write(response, 0, response.Length);
}
```

## Decoding messages

Luego de un _handshake_ exitoso el cliente puede enviar mensajes al servidor, pero estos serán codificados.

Si nosotros enviamos "MDN", obtendremos estos bytes:

| 129 | 131 | 61  | 84  | 35  | 6   | 112 | 16  | 109 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

\- 129:

| FIN (¿Es el mensaje completo?) | RSV1 | RSV2 | RSV3 | Opcode   |
| ------------------------------ | ---- | ---- | ---- | -------- |
| 1                              | 0    | 0    | 0    | 0x1=0001 |

FIN: Puedes enviar tu mensaje en marcos, pero ahora debe mantener las cosas simples.
Opcode _0x1_ significa que es un texto. [Lista completa de Opcodes](http://tools.ietf.org/html/rfc6455#section-5.2)

\- 131:

Si el segundo byte menos 128 se encuentra entre 0 y 125, esta es la longitud del mensaje. Si es 126, los siguientes 2 bytes (entero sin signo de 16 bits), si es 127, los siguientes 8 bytes (entero sin signo de 64 bits) son la longitud.

> **Nota:** Puedo tomar 128, porque el primer bit siempre es 1.

\- 61, 84, 35 y 6 son los bytes de la clave a decodificar. Cambian en cada oportunidad.

\- Los bytes codificados restantes son el mensaje.

### Algoritmo de decodificación

byte decodificado = byte codificado XOR (posición del byte codificado Mod 4) byte de la clave

Ejemplo en C#:

```cpp
Byte[] decoded = new Byte[3];
Byte[] encoded = new Byte[3] {112, 16, 109};
Byte[] key = Byte[4] {61, 84, 35, 6};

for (int i = 0; i < encoded.Length; i++) {
    decoded[i] = (Byte)(encoded[i] ^ key[i % 4]);
}
```

## Relacionado

- [Escribiendo servidores WebSocket](/es/docs/WebSockets/Writing_WebSocket_servers)
