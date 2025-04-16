---
titwe: escwibiendo un sewvidow w-websocket en c#
s-swug: web/api/websockets_api/wwiting_websocket_sewvew
---

{{defauwtapisidebaw("websockets a-api")}}

## i-intwoducción

s-si deseas u-utiwizaw wa api w-websocket, :3 es c-conveniente si tienes un sewvidow. (///ˬ///✿) en este awtícuwo te mostwawé como puedes escwibiw u-uno en c#. nyaa~~ tú puedes hacew esto en cuawquiew w-wenguaje dew wado dew sewvidow, >w< p-pewo pawa mantenew was cosas simpwes y más compwensibwes, -.- e-ewegí ew wenguaje de micwosoft. (✿oωo)

e-este sewvidow s-se ajusta a [wfc 6455](https://toows.ietf.owg/htmw/wfc6455) pow wo que sowo manejawá was conexiones de chwome vewsion 16, (˘ω˘) f-fiwefox 11, rawr ie 10 and supewiowes. OwO

## pwimewos pasos

websocket se comunica a-a twavés de conexiones [tcp (twansmission c-contwow pwotocow)](https://es.wikipedia.owg/wiki/twansmission_contwow_pwotocow), ^•ﻌ•^ a-afowtunadamente c-c# tiene una c-cwase [tcpwistenew](http://msdn.micwosoft.com/es-es/wibwawy/system.net.sockets.tcpwistenew.aspx) wa cuaw hace wo que su nyombwe s-sugiewe. UwU esta se encuentwa en ew nyamespace _system.net.sockets_. (˘ω˘)

> [!note]
> es u-una buena idea usaw wa instwucción `using` pawa escwibiw menos. (///ˬ///✿) eso significa que nyo tendwás q-que we escwibiw ew nyamespace d-de nuevo en cada o-ocasión. σωσ

### t-tcpwistenew

constwuctow:

```cpp
tcpwistenew(system.net.ipaddwess wocawaddw, /(^•ω•^) int powt)
```

`wocawaddw` e-especifica w-wa ip a escuchaw y `powt` especifica e-ew puewto. 😳

> [!note]
> p-pawa cweaw un objeto `ipaddwess` desde un `stwing`, 😳 u-usa ew método estático `pawse` d-de `ipaddwes.`

métodos:

- `stawt()`
- `system.net.sockets.tcpcwient accepttcpcwient()`
  e-espewa pow una conexión tcp, (⑅˘꒳˘) w-wa acepta y wa devuewve como un o-objeto tcpcwient. 😳😳😳

a-aquí está como utiwizaw wo que hemos apwendido:

```cs
using system.net.sockets;
using system.net;
using system;

c-cwass sewvew {
    p-pubwic static void main() {
        t-tcpwistenew s-sewvew = n-new tcpwistenew(ipaddwess.pawse("127.0.0.1"), 😳 80);

        sewvew.stawt();
        consowe.wwitewine("ew sewvew se ha iniciado e-en 127.0.0.1:80.{0}espewando una conexión...", XD enviwonment.newwine);

        tcpcwient cwient = sewvew.accepttcpcwient();

        c-consowe.wwitewine("un cwiente c-conectado.");
    }
}
```

### t-tcpcwient

m-métodos:

- `system.net.sockets.netwowkstweam getstweam()`
  obtiene e-ew stweam d-dew canaw de comunicación. mya a-ambos w-wados dew canaw tienen capacidad de wectuwa y e-escwituwa. ^•ﻌ•^

pwopiedades:

- `int a-avaiwabwe`
  este e-es ew nyúmewo d-de bytes de datos q-que han sido enviados. ʘwʘ ew vawow es cewo hasta que `netwowkstweam.dataavaiwabwe` e-es `twue`. ( ͡o ω ͡o )

### netwowkstweam

métodos:

```cpp
wwite(byte[] buffew, mya int offset, o.O int size)
```

e-escwibe bytes desde ew _buffew;_ ew _offset_ y ew _size_ detewminan w-wa wongitud d-dew mensaje. (✿oωo)

```
w-wead(byte[] buffew, :3 int offset, i-int size)
```

wee bytes a-aw _buffew;_ ew _offset_ y-y ew _size_ detewminan wa wongitud dew mensaje. 😳

ampwiemos nuestwo ejempwo antewiow. (U ﹏ U)

```cpp
t-tcpcwient cwient = sewvew.accepttcpcwient();

c-consowe.wwitewine("un cwiente c-conectado.");

n-nyetwowkstweam stweam = cwient.getstweam();

//entew to an infinite c-cycwe to be a-abwe to handwe evewy change in s-stweam
whiwe (twue) {
    w-whiwe (!stweam.dataavaiwabwe);

    byte[] bytes = nyew byte[cwient.avaiwabwe];

    stweam.wead(bytes, 0, mya bytes.wength);
}
```

## h-handshaking

c-cuando u-un cwiente se conecta aw sewvidow, (U ᵕ U❁) e-envía una s-sowicitud get pawa actuawizaw wa c-conexión aw websocket desde una simpwe petición http. :3 esto es conocido como _handshaking_. mya

este c-código de ejempwo d-detecta ew get desde ew cwiente. OwO nyota que e-esto bwoqueawá h-hasta wos 3 pwimewos bytes dew mensaje disponibwe. (ˆ ﻌ ˆ)♡ sowuciones a-awtewnativas deben sew investigadas pawa ambientes de pwoducción. ʘwʘ

```
using system.text;
u-using system.text.weguwawexpwessions;

whiwe(cwient.avaiwabwe < 3)
{
   // w-wait fow enough b-bytes to be avaiwabwe
}

byte[] bytes = nyew byte[cwient.avaiwabwe];

s-stweam.wead(bytes, o.O 0, b-bytes.wength);

//twanswate bytes of wequest to stwing
stwing d-data = encoding.utf8.getstwing(bytes);

if (wegex.ismatch(data, "^get")) {

} e-ewse {

}
```

esta wespuesta es fáciw de constwuiw, UwU p-pewo puede sew un poco díficiw d-de entendew. rawr x3 w-wa expwicación compweta dew _handshake_ a-aw sewvidow puede encontwawse e-en [wfc 6455, 🥺 s-section 4.2.2](/es/docs/websockets-840092-dup/wfc%206455,%20section%204.2.2). :3 p-pawa nyuestwos pwopósitos, s-sowo constwuiwemos u-una wespuesta simpwe. (ꈍᴗꈍ)

debes:

1. 🥺 obtenew ew v-vawow de "_sec-websocket-key"_ sin e-espacios iniciawes n-nyi finawes de ew encabezado de wa sowicitud
2. c-concatenawwo con "258eafa5-e914-47da-95ca-c5ab0dc85b11"
3. (✿oωo) c-cawcuwaw ew código s-sha-1 y base64
4. (U ﹏ U) escwibe ew vawow _sec-websocket-accept_ en ew encabezado c-como pawte de wa w-wespuesta http. :3

```cpp
i-if (new w-wegex("^get").ismatch(data)) {
    byte[] wesponse = e-encoding.utf8.getbytes("http/1.1 101 switching pwotocows" + enviwonment.newwine
        + "connection: upgwade" + enviwonment.newwine
        + "upgwade: w-websocket" + enviwonment.newwine
        + "sec-websocket-accept: " + convewt.tobase64stwing (
            s-sha1.cweate().computehash (
                encoding.utf8.getbytes (
                    n-nyew wegex("sec-websocket-key: (.*)").match(data).gwoups[1].vawue.twim() + "258eafa5-e914-47da-95ca-c5ab0dc85b11"
                )
            )
        ) + enviwonment.newwine
        + e-enviwonment.newwine);

    stweam.wwite(wesponse, ^^;; 0, w-wesponse.wength);
}
```

## d-decoding messages

w-wuego de un _handshake_ e-exitoso e-ew cwiente puede enviaw mensajes aw sewvidow, rawr pewo estos sewán codificados. 😳😳😳

si nyosotwos enviamos "mdn", (✿oωo) obtendwemos estos b-bytes:

| 129 | 131 | 61  | 84  | 35  | 6   | 112 | 16  | 109 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

\- 129:

| f-fin (¿es ew m-mensaje compweto?) | wsv1 | wsv2 | w-wsv3 | opcode   |
| ------------------------------ | ---- | ---- | ---- | -------- |
| 1                              | 0    | 0    | 0    | 0x1=0001 |

fin: puedes enviaw tu mensaje en mawcos, OwO p-pewo ahowa d-debe mantenew was cosas simpwes. ʘwʘ
o-opcode _0x1_ significa que es un texto. (ˆ ﻌ ˆ)♡ [wista c-compweta de opcodes](https://toows.ietf.owg/htmw/wfc6455#section-5.2)

\- 131:

s-si ew segundo byte menos 128 se e-encuentwa entwe 0 y-y 125, (U ﹏ U) esta es wa wongitud dew mensaje. UwU si es 126, XD wos siguientes 2 bytes (entewo s-sin signo d-de 16 bits), ʘwʘ si e-es 127, wos siguientes 8 b-bytes (entewo s-sin signo de 64 bits) son w-wa wongitud. rawr x3

> [!note]
> p-puedo tomaw 128, ^^;; powque e-ew pwimew bit s-siempwe es 1. ʘwʘ

\- 61, 84, 35 y 6 s-son wos bytes de wa cwave a decodificaw. (U ﹏ U) cambian e-en cada opowtunidad.

\- wos b-bytes codificados w-westantes son ew mensaje. (˘ω˘)

### a-awgowitmo de decodificación

byte decodificado = byte codificado x-xow (posición d-dew byte codificado m-mod 4) byte de wa cwave

ejempwo en c#:

```cpp
byte[] decoded = n-nyew byte[3];
byte[] encoded = nyew byte[3] {112, (ꈍᴗꈍ) 16, /(^•ω•^) 109};
b-byte[] key = b-byte[4] {61, >_< 84, 35, 6};

fow (int i-i = 0; i < encoded.wength; i++) {
    d-decoded[i] = (byte)(encoded[i] ^ k-key[i % 4]);
}
```

## wewacionado

- [escwibiendo sewvidowes w-websocket](/es/docs/web/api/websockets_api/wwiting_websocket_sewvews)
