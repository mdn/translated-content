---
title: "Escrevendo um servidor WebSocket em C #"
slug: Web/API/WebSockets_API/Writing_WebSocket_server
---

## Introdução

Se você quiser usar uma API WebSocket, você precisara ter um servidor. Neste artigo vou mostrar como escrever um WebSocket em C#. Você pode fazer isso em qualquer linguagem server-side, mas para manter as coisas simples e mais compreensíveis eu escolhi uma linguagem Microsoft.

Este servidor está em conformidade com a [RFC 6455](http://tools.ietf.org/html/rfc6455), por isso irá tratar apenas as conexões com os navegadores Chrome versão 16, Firefox 11, IE 10 ou superior.

## Primeiros passos

Os WebSocket´s se comunicam através de uma conexão TCP (Transmission Control Protocol), felizmente o C# possui a classe [TcpListener](https://msdn.microsoft.com/pt-br/library/system.net.sockets.tcplistener.aspx) que, como o nome sugere, tem a função de escutar (Listener) as comunicações via TCP. A classe TcpListener está no namespace System.Net.Sockets.

> **Nota:** É uma boa idéia usar a palavra chave using para escrever menos. Isso significa que não é preciso você reescrever o namespace toda vez que usar uma classe dele.

### TcpListener

Construtor:

```cpp
TcpListener(System.Net.IPAddress localaddr, int port)
```

Aqui você define onde o servidor será acessível.

> **Nota:** Para setar facilmente o tipo esperado no primeiro parâmetro, use o método estático Parse da classe IPAddress.

Métodos:

- Start()
- System.Net.Sockets.[TcpClient](http://msdn.microsoft.com/en-us/library/system.net.sockets.tcpclient.aspx) AcceptTcpClient()
  Espera por uma conexão TCP, aceita a conexão e retorna um objeto TcpClient.

Veja como usar o que aprendemos:

```cs
using System.Net.Sockets;
using System.Net;
using System;

class Server {
    public static void Main() {
        TcpListener server = new TcpListener(IPAddress.Parse("127.0.0.1"), 80);

        server.Start();
        Console.WriteLine("Server has started on 127.0.0.1:80.{0}Waiting for a connection...", Environment.NewLine);

        TcpClient client = server.AcceptTcpClient();

        Console.WriteLine("A client connected.");
    }
}
```

### TcpClient

Métodos:

- `System.Net.Sockets.NetworkStream GetStream()`
  Obtém o fluxo (stream) do canal de comunicação. Ambos os lados do canal de comunicação possuem a capacidade de ler e escrever.

Propriedades:

- `int Available`
  Este é o numero de bytes de dados que foram enviados. o valor é zero enquanto _NetworkStream.DataAvailable_ for _falso_.

### NetworkStream

Métodos:

```cpp
Write(Byte[] buffer, int offset, int size)
```

Grava bytes do buffer, _offset_ e _size_ determinam o tamanho da mensagem.

```
Read(Byte[] buffer, int offset, int size)
```

Lê bytes para o _buffer_, _offset_ e _size_ determinam o tamanho da mensagem.

Vamos estender nosso exemplo.

```cpp
TcpClient client = server.AcceptTcpClient();

Console.WriteLine("A client connected.");

NetworkStream stream = client.GetStream();

//enter to an infinite cycle to be able to handle every change in stream
while (true) {
    while (!stream.DataAvailable);

    Byte[] bytes = new Byte[client.Available];

    stream.Read(bytes, 0, bytes.Length);
}
```

## Handshaking

Quando um cliente se conecta a um servidor, ele envia uma solicitação GET para atualizar a conexão com o WebSocket a partir de uma simples requisição HTTP. Isto é conhecido como handshaking (aperto de mão).

> **Aviso:** Este código tem um defeito. Digamos que a propriedade client.`Available` retorna o valor 2 porque somente a requisição GET está disponível até agora. a expressão regular iria falhar mesmo que os dados recebidos sejam perfeitamente válidos.

```cpp
using System.Text;
using System.Text.RegularExpressions;

Byte[] bytes = new Byte[client.Available];

stream.Read(bytes, 0, bytes.Length);

//translate bytes of request to string
String data = Encoding.UTF8.GetString(bytes);

if (new Regex("^GET").IsMatch(data)) {

} else {

}
```

Criar a resposta é mais fácil do que entender porque você deve fazê-lo desta forma.

Você deve,

1. Obter o valor do cabeçalho da requisição _Sec-WebSocket-Key_ sem qualquer espaço à direita e à esquerda;
2. Concatenar com "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
3. Calcular o código SHA-1 e Base64 dele;
4. Reescreva no cabeçalho de resposta o valor de _Sec-WebSocket-Accept_ como parte de uma resposta HTTP.

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

## Decodificação de mensagens

Após um _handshake_ de sucesso o cliente ponde enviar mensagens ao servidor, mas agora estas mensagens são codificadas.

Se nós enviarmos "MDN", nós obtemos estes bytes:

| 129 | 131 | 61  | 84  | 35  | 6   | 112 | 16  | 109 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

\- 129:

| FIN (Esta é toda a mensagem?) | RSV1 | RSV2 | RSV3 | Opcode   |
| ----------------------------- | ---- | ---- | ---- | -------- |
| 1                             | 0    | 0    | 0    | 0x1=0001 |

FIN: Você pode enviar sua mensagem em quadros (frames), mas agora as coisas ficaram mais simples.
Opcode _0x1_ significa que este é um texto. Veja aqui a [lista completa de Opcodes](http://tools.ietf.org/html/rfc6455#section-5.2).

\- 131:

Se o segundo byte menos 128 estiver entre 0 e 125, este é o tamanho da mensagem. Se for 126, os 2 bytes seguintes (16-bit inteiro sem sinal) e se 127, os 8 bytes seguintes (64-bit inteiro sem sinal) são o comprimento.

> **Nota:** Eu posso escolher 128, porque o primeiro bit sempre será 1.

\- 61, 84, 35 e 6 são os bytes de chave para decodificar. Sempre mudam.

\- O restante dos bytes codificados são a mensagem.

### Algoritmo de decodificação

byte decodificado = \[byte codificado XOR (posição do byte codificado MOD 4º byte da chave)]

Exemplo em C#:

```cpp
Byte[] decoded = new Byte[3];
Byte[] encoded = new Byte[3] {112, 16, 109};
Byte[] key = Byte[4] {61, 84, 35, 6};

for (int i = 0; i < encoded.Length; i++) {
    decoded[i] = (Byte)(encoded[i] ^ key[i % 4]);
}
```

## Link Relacionado

- [Writing WebSocket servers](/pt-BR/docs/WebSockets/Writing_WebSocket_servers)
