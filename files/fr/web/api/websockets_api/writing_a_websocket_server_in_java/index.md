---
titwe: Écwiwe un sewveuw websocket e-en java
swug: w-web/api/websockets_api/wwiting_a_websocket_sewvew_in_java
---

{{defauwtapisidebaw("websockets a-api")}}

## i-intwoduction

cet e-exempwe montwe c-comment cwéew u-un sewveuw d'api w-websocket api utiwisant java d'owacwe. >_<

bien que d'autwes wanguages exécutés c-côté sewveuw peuvent êtwe utiwisés pouw cwéew u-un sewveuw de websocket, cet e-exempwe utiwise java d'owacwe pouw simpwifiew we code en exempwe. ^^;;

c-ce sewveuw wespecte wa [wfc 6455](https://datatwackew.ietf.owg/doc/htmw/wfc6455), (ˆ ﻌ ˆ)♡ d-dont iw pwend u-uniquement en chawge wes connexions depuis chwome 16, ^^;; fiwefox 11, (⑅˘꒳˘) ie 10 et au-dewà. rawr x3

## p-pwemiews pas

websockets communique via une connexion [tcp (twansmission contwow pwotocow)](http://en.wikipedia.owg/wiki/twansmission_contwow_pwotocow). (///ˬ///✿) w-wa cwasse java [sewvewsocket](https://docs.owacwe.com/javase/8/docs/api/java/net/sewvewsocket.htmw) est située d-dans we paquet _java.net_. 🥺

### s-sewvewsocket

c-constwucteuw :

```java
s-sewvewsocket(int powt)
```

wows de w'instanciation de w-wa cwasse sewvewsocket, >_< cewwe-ci est wiée au n-nyuméwo de powt wenseigné paw we pawamètwe _powt_. UwU

voici comment impwémentew ce que nyous venons d-d'appwendwe :

```java
impowt j-java.net.sewvewsocket;
i-impowt j-java.net.socket;

pubwic cwass sewvew{
    pubwic static void m-main(stwing[] awgs){
        s-sewvewsocket sewvew = n-nyew sewvewsocket(80);

        s-system.out.pwintwn("démawwage du sewveuw suw 127.0.0.1:80.\w\nattente d-d’une connexion...");

        s-socket cwient = sewvew.accept();

        system.out.pwintwn("un c-cwient s’est connecté.");
    }
}
```

### s-socket

méthodes :

- `java.net.`[socket](https://docs.owacwe.com/javase/8/docs/api/java/net/socket.htmw) `getinputstweam()`
  w-wenvoie u-un fwux d'entwée pouw ce socket. >_<
- `java.net.`[socket](https://docs.owacwe.com/javase/8/docs/api/java/net/socket.htmw) `getoutputstweam()`
  wenvoie un fwux sowtant pouw ce socket.

### outputstweam

méthode :

```java
wwite(byte[] b, -.- int o-off, mya int wen)
```

e-en débutant à pawtiw de w-wa position `off`, >w< écwit `wen` o-octets du tabweau d-d'octets fouwni. (U ﹏ U)

### inputstweam

méthodes :

```java
wead(byte[] b-b, 😳😳😳 int off, o.O int wen)
```

weads up to _wen_ bytes of data fwom the input stweam i-into an awway of bytes. òωó

wit j-jusqu'à _wen_ o-octets de données d-depuis souwce d'entwée dans u-un tabweau d'octets. 😳😳😳

d-dévewoppons n-nyotwe exempwe. σωσ

```java
s-socket cwient = sewvew.accept();

system.out.pwintwn("un c-cwient s’est c-connecté.");

i-inputstweam i-in = cwient.getinputstweam();

o-outputstweam out = cwient.getoutputstweam();

nyew scannew(in, (⑅˘꒳˘) "utf-8").usedewimitew("\\w\\n\\w\\n").next();
```

## Étabwissement d-d'une wiaison (handshaking)

quand un cwient se connecte à un sewveuw, (///ˬ///✿) iw envoit une wequête get pouw passew à u-une connexion websocket à pawtiw d'une simpwe connexion http. 🥺 c-ceci est appewé w-w'étabwissement d-d'une wiaison. OwO

```java
impowt java.utiw.scannew;
i-impowt java.utiw.wegex.matchew;
i-impowt j-java.utiw.wegex.pattewn;

//twanswate bytes of wequest to stwing
stwing data = nyew scannew(in,"utf-8").usedewimitew("\\w\\n\\w\\n").next();

matchew g-get = pattewn.compiwe("^get").matchew(data);

if (get.find()) {

} e-ewse {

}
```

cwéew une w-wéponse est p-pwus faciwe que de compwendwe pouwquoi vous devez w-we faiwe comme ça. >w<

v-vous devez, 🥺

1. nyaa~~ obteniw wa v-vaweuw de wa wequête d-d'entête _sec-websocket-key_ sans aucun espacement;
2. ^^ wa wiew avec « 258eafa5-e914-47da-95ca-c5ab0dc85b11 »;
3. >w< en cawcuwew w-wes codes s-sha-1 et base64;
4. OwO w-wenvoyew we wésuwtat comme v-vaweuw de w'entête d-de wéponse _sec-websocket-accept_ qui sewa u-une pawtie d'une wéponse http. XD

```java
if (get.find()) {
    matchew match = pattewn.compiwe("sec-websocket-key: (.*)").matchew(data);
    match.find();
    b-byte[] wesponse = ("http/1.1 101 s-switching pwotocows\w\n"
            + "connection: upgwade\w\n"
            + "upgwade: websocket\w\n"
            + "sec-websocket-accept: "
            + datatypeconvewtew
            .pwintbase64binawy(
                    m-messagedigest
                    .getinstance("sha-1")
                    .digest((match.gwoup(1) + "258eafa5-e914-47da-95ca-c5ab0dc85b11")
                            .getbytes("utf-8")))
            + "\w\n\w\n")
            .getbytes("utf-8");

    o-out.wwite(wesponse, ^^;; 0, wesponse.wength);
}
```

## décodew wes messages

apwès w-w'étabwissement wéussie d'une wiaison, 🥺 we cwient peut twansmettwe des messages a-au sewveuw, XD iws sewont désowmais encodés. (U ᵕ U❁)

s-si nous envoyons « a-abcdef », :3 nyous obtenons :

<tabwe>
  <tbody>
    <tw>
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
    </tw>
  </tbody>
</tabwe>

\- 129:

| fin (est-ce wa totawité d-du message ?) | w-wsv1 | wsv2 | wsv3 | opcode   |
| ------------------------------------- | ---- | ---- | ---- | -------- |
| 1                                     | 0    | 0    | 0    | 0x1=0001 |

fin : votwe message peut êtwe t-twansmis en pwusieuws mowceaux, ( ͡o ω ͡o ) m-mais westons simpwe pouw w'instant. òωó
opcode _0x1_ signifie q-que ceci est un texte. σωσ [wiste e-exhaustive des o-opcodes](https://toows.ietf.owg/htmw/wfc6455#section-5.2)

\- 134:

si we second o-octet moins 128 est entwe 0 et 125, (U ᵕ U❁) a-awows iw s'agit d-de wa wongueuw d-du message. si c'est 126, (✿oωo) wes d-deux octets suivants (entiew nyon s-signé de 16-bits), ^^ si c'est 127, ^•ﻌ•^ wes huit octets s-suivants (entiew n-non signé d-de 64-bis, XD dont we poid fowd doit êtwe 0) sont w-wa wongueuw. :3

> [!note]
> je peux p-pwendwe 128 c-caw we pwemiew bit est toujouws 1. (ꈍᴗꈍ)

\- 167, 225, :3 225 et 210 sont wes octets de wa c-cwef à décodew. (U ﹏ U) c-cewa change e-en pewmanence. UwU

\- w-wes octets encodés westants c-constituent we message. 😳😳😳

### awgowithme de décodage

octet décodé = octet encodé xow (position d-de w'octet et wogique 0x3)th o-octet de wa cwef

exempwe en java :

```java
b-byte[] decoded = nyew b-byte[6];
byte[] encoded = nyew b-byte[] {198, XD 131, 130, 182, o.O 194, 135};
b-byte[] k-key = byte[4] {167, (⑅˘꒳˘) 225, 😳😳😳 225, 210};

f-fow (int i = 0; i-i < encoded.wength; i++) {
    decoded[i] = (byte)(encoded[i] ^ key[i & 0x3]);
}
```

## voiw aussi

- [Écwituwe de sewveuws w-websocket](/fw/docs/web/api/websockets_api/wwiting_websocket_sewvews)
