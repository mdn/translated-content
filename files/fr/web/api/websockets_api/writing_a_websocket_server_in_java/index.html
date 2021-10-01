---
title: Écrire un serveur WebSocket en Java
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java
translation_of: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java
---
<h2 id="Introduction">Introduction</h2>

<p>Cet exemple montre comment cérer une serveur d'API WebSocket API utilisant Java d'Oracle.</p>

<p>Bien que d'autres languages exécutés côté serveur peuvent être utilisés pour créer un serveur de WebSocket, cet exemple utilise Java d'Oracle pour simplifier le code en exemple.</p>

<p>Ce seveur respecte la <a href="http://tools.ietf.org/html/rfc6455">RFC 6455</a>, dont il prend uniquement en charge les connexions depuis Chrome 16, Firefox 11, IE 10 et au delà.</p>

<h2 id="Premiers_pas">Premiers pas</h2>

<p>WebSockets communique via une connexion <a href="http://en.wikipedia.org/wiki/Transmission_Control_Protocol">TCP (Transmission Control Protocol)</a>. La classe Java <a href="http://docs.oracle.com/javase/8/docs/api/java/net/ServerSocket.html">ServerSocket</a> est située dans le paquet <em>java.net</em>.</p>

<h3 id="ServerSocket">ServerSocket</h3>

<p>Constructeur :</p>

<pre class="brush: java"><code>ServerSocket(int port)</code></pre>

<p>Lors de l'instanciation de la classe ServerSocket, celle-ci est liée au numéro de port renseigné par le paramètre <em>port</em>.</p>

<p>Voici comment implémenter ce que nous venons d'apprendre :</p>

<pre class="brush: java">import java.net.ServerSocket;
import java.net.Socket;

public class Server{
    public static void main(String[] args){
        ServerSocket server = new ServerSocket(80);

        System.out.println("Démarrage du serveur sur 127.0.0.1:80.\r\nAttente d’une connexion...");

        Socket client = server.accept();

        System.out.println("Un client s’est connecté.");
    }
}</pre>

<h3 id="Socket">Socket</h3>

<p>Méthodes :</p>

<ul>
 <li><code>java.net.</code><a href="http://docs.oracle.com/javase/8/docs/api/java/net/Socket.html">Socket</a><code> <a href="http://docs.oracle.com/javase/8/docs/api/java/net/Socket.html#getInputStream--">getInputStream</a>()</code><br>
  Renvoie un flux d’entrée pour ce socket.</li>
 <li><code>java.net.</code><a href="http://docs.oracle.com/javase/8/docs/api/java/net/Socket.html">Socket</a><code> <a href="http://docs.oracle.com/javase/8/docs/api/java/net/Socket.html#getOutputStream--">getOutputStream</a>()</code><br>
  Renvoie un flux sortant pour ce socket.</li>
</ul>

<h3 id="OutputStream">OutputStream</h3>

<p>Méthode :</p>

<pre class="brush: java">write<code>(byte[] b, int off, int len)</code></pre>

<p>En débutant à partir de la position <em>off</em>, écrit <em><code>len</code></em> octets du tableau d'octets fourni.</p>

<h3 id="InputStream">InputStream</h3>

<p>Méthodes :</p>

<pre class="brush: java">read<code>(byte[] b, int off, int len)</code></pre>

<p>Reads up to <em>len</em> bytes of data from the input stream into an array of bytes.<em> </em></p>

<p>Lit jusqu'à <em>len</em> octets de données depuis source d'entrée dans un tableau d'octets.</p>

<p>Développons notre exemple.</p>

<pre class="brush: java">Socket client = server.accept();

System.out.println("Un client s’est connecté.");

InputStream in = client.getInputStream();

OutputStream out = client.getOutputStream();

new Scanner(in, "UTF-8").useDelimiter("\\r\\n\\r\\n").next();</pre>

<h2 id="Établissement_d‘une_liaison_(handshaking)">Établissement d‘une liaison (handshaking)</h2>

<p>Quand un client se connecte à un serveur, il envoit une requête GET pour passer à une connexion WebSocket à partir d'une simple connexion HTTP. Ceci est appelé l’établissement d’une liaison.</p>

<pre class="brush: java">import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

//translate bytes of request to string
String data = new Scanner(in,"UTF-8").useDelimiter("\\r\\n\\r\\n").next();

Matcher get = Pattern.compile("^GET").matcher(data);

if (get.find()) {

} else {

}</pre>

<p>Créer une réponse est plus facile que de comprendre pourquoi vous devez le faire comme ça.</p>

<p>Vous devez,</p>

<ol>
 <li>obtenir la valeur de la requête d’entête <em>Sec-WebSocket-Key</em> sans aucun espacement;</li>
 <li>la lier avec « 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 »;</li>
 <li>en calculer les codes SHA-1 et Base64;</li>
 <li>renvoyer le résultat comme valeur de l'entête de réponse <em>Sec-WebSocket-Accept</em> qui sera une partie d’une réponse HTTP.</li>
</ol>

<pre class="brush: java">if (get.find()) {
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
</pre>

<h2 id="Décoder_les_messages">Décoder les messages</h2>

<p>Après l’établissement réussie d’une liaison, le client peut transmettre des messages au serveur, ils seront désormais encodés.</p>

<p>Si nous envoyons « abcdef », nous obtenons :</p>

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

<p>- 129:</p>

<table>
 <thead>
  <tr>
   <th scope="col">FIN (est-ce la totalité du message ?)</th>
   <th scope="col">RSV1</th>
   <th scope="col">RSV2</th>
   <th scope="col">RSV3</th>
   <th scope="col">Opcode</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>1</td>
   <td>0</td>
   <td>0</td>
   <td>0</td>
   <td>0x1=0001</td>
  </tr>
 </tbody>
</table>

<p>FIN : votre message peut être transmis en plusieurs morceaux, mais restons simple pour l’instant.<br>
 Opcode <em>0x1</em> signifie que ceci est un texte. <a href="http://tools.ietf.org/html/rfc6455#section-5.2">Liste exhaustive des Opcodes</a></p>

<p>- 134:</p>

<p>If the second byte minus 128 is between 0 and 125, this is the length of the message. If it is 126, the following 2 bytes (16-bit unsigned integer), if 127, the following 8 bytes (64-bit unsigned integer, the most significant bit MUST be 0) are the length.</p>

<p>Si le second octet moins 128 est entre 0 et 125, alors il s’agit de la longueur du message. Si c’est 126, les deux octets suivants (entier non signé de 16-bits), si c’est 127, les huit octets suivants (entier non signé de 64-bis, dont le poid ford doit être 0) sont la longueur.</p>

<div class="note">
<p><strong>Note :</strong> Je peux prendre 128 car le premier bit est toujours 1.</p>
</div>

<p>- 167, 225, 225 et 210 sont les octets de la clef à décoder. Cela change en permanence.</p>

<p>- Les octets encodés restants constituent le message.</p>

<h3 id="Algorithme_de_décodage">Algorithme de décodage</h3>

<p>octet décodé = octet encodé XOR (position de l’octet ET LOGIQUE 0x3)th octet de la clef</p>

<p>Exemple en Java :</p>

<pre class="brush: java">byte[] decoded = new byte[6];
byte[] encoded = new byte[] {198, 131, 130, 182, 194, 135};
byte[] key = byte[4] {167, 225, 225, 210};

for (int i = 0; i &lt; encoded.length; i++) {
    decoded[i] = (byte)(encoded[i] ^ key[i &amp; 0x3]);
}</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebSockets/Writing_WebSocket_servers">Écriture de serveurs WebSocket</a></li>
</ul>
