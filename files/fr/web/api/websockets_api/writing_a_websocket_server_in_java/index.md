---
title: Écrire un serveur WebSocket en Java
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java
---

## Introduction

Cet exemple montre comment créer un serveur d'API WebSocket API utilisant Java d'Oracle.

Bien que d'autres languages exécutés côté serveur peuvent être utilisés pour créer un serveur de WebSocket, cet exemple utilise Java d'Oracle pour simplifier le code en exemple.

Ce serveur respecte la [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455), dont il prend uniquement en charge les connexions depuis Chrome 16, Firefox 11, IE 10 et au-delà.

## Premiers pas

WebSockets communique via une connexion [TCP (Transmission Control Protocol)](http://en.wikipedia.org/wiki/Transmission_Control_Protocol). La classe Java [ServerSocket](http://docs.oracle.com/javase/8/docs/api/java/net/ServerSocket.html) est située dans le paquet _java.net_.

### ServerSocket

Constructeur :

```java
ServerSocket(int port)
```

Lors de l'instanciation de la classe ServerSocket, celle-ci est liée au numéro de port renseigné par le paramètre _port_.

Voici comment implémenter ce que nous venons d'apprendre :

```java
import java.net.ServerSocket;
import java.net.Socket;

public class Server{
    public static void main(String[] args){
        ServerSocket server = new ServerSocket(80);

        System.out.println("Démarrage du serveur sur 127.0.0.1:80.\r\nAttente d’une connexion...");

        Socket client = server.accept();

        System.out.println("Un client s’est connecté.");
    }
}
```

### Socket

Méthodes :

- `java.net.`[Socket](http://docs.oracle.com/javase/8/docs/api/java/net/Socket.html) `getInputStream()`
  Renvoie un flux d'entrée pour ce socket.
- `java.net.`[Socket](http://docs.oracle.com/javase/8/docs/api/java/net/Socket.html) `getOutputStream()`
  Renvoie un flux sortant pour ce socket.

### OutputStream

Méthode :

```java
write(byte[] b, int off, int len)
```

En débutant à partir de la position `off`, écrit `len` octets du tableau d'octets fourni.

### InputStream

Méthodes :

```java
read(byte[] b, int off, int len)
```

Reads up to _len_ bytes of data from the input stream into an array of bytes.

Lit jusqu'à _len_ octets de données depuis source d'entrée dans un tableau d'octets.

Développons notre exemple.

```java
Socket client = server.accept();

System.out.println("Un client s’est connecté.");

InputStream in = client.getInputStream();

OutputStream out = client.getOutputStream();

new Scanner(in, "UTF-8").useDelimiter("\\r\\n\\r\\n").next();
```

## Établissement d'une liaison (handshaking)

Quand un client se connecte à un serveur, il envoit une requête GET pour passer à une connexion WebSocket à partir d'une simple connexion HTTP. Ceci est appelé l'établissement d'une liaison.

```java
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

//translate bytes of request to string
String data = new Scanner(in,"UTF-8").useDelimiter("\\r\\n\\r\\n").next();

Matcher get = Pattern.compile("^GET").matcher(data);

if (get.find()) {

} else {

}
```

Créer une réponse est plus facile que de comprendre pourquoi vous devez le faire comme ça.

Vous devez,

1. obtenir la valeur de la requête d'entête _Sec-WebSocket-Key_ sans aucun espacement;
2. la lier avec « 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 »;
3. en calculer les codes SHA-1 et Base64;
4. renvoyer le résultat comme valeur de l'entête de réponse _Sec-WebSocket-Accept_ qui sera une partie d'une réponse HTTP.

```java
if (get.find()) {
    Matcher match = Pattern.compile("Sec-WebSocket-Key: (.*)").matcher(data);
    match.find();
    byte[] response = ("HTTP/1.1 101 Switching Protocols\r\n"
            + "Connection: Upgrade\r\n"
            + "Upgrade: websocket\r\n"
            + "Sec-WebSocket-Accept: "
            + DatatypeConverter
            .printBase64Binary(
                    MessageDigest
                    .getInstance("SHA-1")
                    .digest((match.group(1) + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11")
                            .getBytes("UTF-8")))
            + "\r\n\r\n")
            .getBytes("UTF-8");

    out.write(response, 0, response.length);
}
```

## Décoder les messages

Après l'établissement réussie d'une liaison, le client peut transmettre des messages au serveur, ils seront désormais encodés.

Si nous envoyons « abcdef », nous obtenons :

<table>
  <tbody>
    <tr>
      <td>129</td>
      <td>134</td>
      <td>167</td>
      <td>225</td>
      <td>225</td>
      <td>210</td>
      <td>198</td>
      <td>131</td>
      <td>130</td>
      <td>182</td>
      <td>194</td>
      <td>135</td>
    </tr>
  </tbody>
</table>

\- 129:

| FIN (est-ce la totalité du message ?) | RSV1 | RSV2 | RSV3 | Opcode   |
| ------------------------------------- | ---- | ---- | ---- | -------- |
| 1                                     | 0    | 0    | 0    | 0x1=0001 |

FIN : votre message peut être transmis en plusieurs morceaux, mais restons simple pour l'instant.
Opcode _0x1_ signifie que ceci est un texte. [Liste exhaustive des Opcodes](http://tools.ietf.org/html/rfc6455#section-5.2)

\- 134:

Si le second octet moins 128 est entre 0 et 125, alors il s'agit de la longueur du message. Si c'est 126, les deux octets suivants (entier non signé de 16-bits), si c'est 127, les huit octets suivants (entier non signé de 64-bis, dont le poid ford doit être 0) sont la longueur.

> **Note :** Je peux prendre 128 car le premier bit est toujours 1.

\- 167, 225, 225 et 210 sont les octets de la clef à décoder. Cela change en permanence.

\- Les octets encodés restants constituent le message.

### Algorithme de décodage

octet décodé = octet encodé XOR (position de l'octet ET LOGIQUE 0x3)th octet de la clef

Exemple en Java :

```java
byte[] decoded = new byte[6];
byte[] encoded = new byte[] {198, 131, 130, 182, 194, 135};
byte[] key = byte[4] {167, 225, 225, 210};

for (int i = 0; i < encoded.length; i++) {
    decoded[i] = (byte)(encoded[i] ^ key[i & 0x3]);
}
```

## Voir aussi

- [Écriture de serveurs WebSocket](/fr/docs/WebSockets/Writing_WebSocket_servers)
