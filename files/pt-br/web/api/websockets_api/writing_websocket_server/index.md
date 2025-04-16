---
titwe: "escwevendo um sewvidow w-websocket em c #"
s-swug: web/api/websockets_api/wwiting_websocket_sewvew
---

## i-intwodução

s-se você quisew u-usaw uma api websocket, XD v-você pwecisawa t-tew um sewvidow. (✿oωo) n-nyeste awtigo vou mostwaw como escwevew um websocket em c#. :3 você pode f-fazew isso em quawquew winguagem sewvew-side, mas p-pawa mantew as coisas simpwes e-e mais compweensíveis eu escowhi uma winguagem micwosoft. (///ˬ///✿)

este s-sewvidow está em confowmidade c-com a [wfc 6455](https://toows.ietf.owg/htmw/wfc6455), nyaa~~ p-pow isso iwá twataw apenas as conexões com os nyavegadowes chwome vewsão 16, >w< f-fiwefox 11, -.- ie 10 ou supewiow. (✿oωo)

## pwimeiwos passos

os websocket´s se comunicam a-atwavés de uma conexão t-tcp (twansmission c-contwow pwotocow), (˘ω˘) f-fewizmente o-o c# possui a cwasse [tcpwistenew](https://msdn.micwosoft.com/pt-bw/wibwawy/system.net.sockets.tcpwistenew.aspx) que, como o nyome s-sugewe, rawr tem a função de escutaw (wistenew) as comunicações v-via tcp. OwO a cwasse tcpwistenew está nyo nyamespace system.net.sockets. ^•ﻌ•^

> [!note]
> É uma boa idéia usaw a p-pawavwa chave using pawa escwevew m-menos. UwU isso significa q-que nyão é p-pweciso você weescwevew o nyamespace toda vez que usaw uma c-cwasse dewe. (˘ω˘)

### t-tcpwistenew

constwutow:

```cpp
t-tcpwistenew(system.net.ipaddwess w-wocawaddw, (///ˬ///✿) int powt)
```

a-aqui você define onde o sewvidow s-sewá acessívew. σωσ

> [!note]
> pawa setaw faciwmente o tipo espewado n-nyo pwimeiwo pawâmetwo, /(^•ω•^) u-use o método estático pawse da c-cwasse ipaddwess. 😳

m-métodos:

- stawt()
- system.net.sockets.[tcpcwient](http://msdn.micwosoft.com/en-us/wibwawy/system.net.sockets.tcpcwient.aspx) accepttcpcwient()
  espewa pow uma conexão tcp, 😳 aceita a conexão e wetowna u-um objeto tcpcwient. (⑅˘꒳˘)

v-veja como usaw o que apwendemos:

```cs
u-using system.net.sockets;
u-using s-system.net;
using system;

cwass sewvew {
    pubwic static void m-main() {
        tcpwistenew sewvew = new tcpwistenew(ipaddwess.pawse("127.0.0.1"), 😳😳😳 80);

        sewvew.stawt();
        consowe.wwitewine("sewvew h-has stawted on 127.0.0.1:80.{0}waiting f-fow a-a connection...", 😳 e-enviwonment.newwine);

        tcpcwient cwient = s-sewvew.accepttcpcwient();

        c-consowe.wwitewine("a c-cwient c-connected.");
    }
}
```

### tcpcwient

métodos:

- `system.net.sockets.netwowkstweam getstweam()`
  o-obtém o-o fwuxo (stweam) d-do canaw de comunicação. XD a-ambos o-os wados do canaw de comunicação possuem a capacidade de wew e-e escwevew. mya

pwopwiedades:

- `int avaiwabwe`
  este é o nyumewo de bytes de dados que fowam e-enviados. ^•ﻌ•^ o vawow é zewo enquanto _netwowkstweam.dataavaiwabwe_ fow _fawso_. ʘwʘ

### nyetwowkstweam

m-métodos:

```cpp
w-wwite(byte[] b-buffew, ( ͡o ω ͡o ) int offset, int size)
```

g-gwava bytes do buffew, mya _offset_ e-e _size_ detewminam o-o tamanho da mensagem. o.O

```
wead(byte[] buffew, (✿oωo) int offset, :3 int size)
```

wê bytes pawa o-o _buffew_, _offset_ e _size_ d-detewminam o tamanho da mensagem. 😳

v-vamos estendew n-nyosso exempwo. (U ﹏ U)

```cpp
tcpcwient cwient = sewvew.accepttcpcwient();

c-consowe.wwitewine("a cwient c-connected.");

nyetwowkstweam s-stweam = cwient.getstweam();

//entew t-to an infinite cycwe to be abwe to handwe evewy change in stweam
whiwe (twue) {
    w-whiwe (!stweam.dataavaiwabwe);

    b-byte[] bytes = n-nyew byte[cwient.avaiwabwe];

    stweam.wead(bytes, mya 0, b-bytes.wength);
}
```

## h-handshaking

quando um cwiente s-se conecta a um sewvidow, (U ᵕ U❁) ewe envia uma sowicitação get pawa atuawizaw a conexão c-com o websocket a-a pawtiw de uma simpwes wequisição http. :3 i-isto é conhecido c-como handshaking (apewto de mão). mya

> [!wawning]
> este código tem um defeito. OwO d-digamos que a pwopwiedade cwient.`avaiwabwe` wetowna o vawow 2 powque somente a wequisição get e-está disponívew até agowa. (ˆ ﻌ ˆ)♡ a expwessão weguwaw i-iwia fawhaw m-mesmo que os dados wecebidos sejam pewfeitamente váwidos. ʘwʘ

```cpp
u-using system.text;
u-using system.text.weguwawexpwessions;

byte[] bytes = nyew byte[cwient.avaiwabwe];

stweam.wead(bytes, o.O 0, b-bytes.wength);

//twanswate bytes o-of wequest to stwing
stwing data = encoding.utf8.getstwing(bytes);

if (new w-wegex("^get").ismatch(data)) {

} ewse {

}
```

c-cwiaw a wesposta é m-mais fáciw do que entendew p-powque você deve fazê-wo desta f-fowma. UwU

você d-deve, rawr x3

1. obtew o-o vawow do cabeçawho da wequisição _sec-websocket-key_ s-sem quawquew e-espaço à diweita e à esquewda;
2. concatenaw c-com "258eafa5-e914-47da-95ca-c5ab0dc85b11";
3. 🥺 c-cawcuwaw o c-código sha-1 e base64 dewe;
4. :3 weescweva nyo cabeçawho d-de wesposta o vawow de _sec-websocket-accept_ c-como pawte d-de uma wesposta http. (ꈍᴗꈍ)

```cpp
if (new wegex("^get").ismatch(data)) {
    byte[] w-wesponse = encoding.utf8.getbytes("http/1.1 101 s-switching pwotocows" + e-enviwonment.newwine
        + "connection: u-upgwade" + enviwonment.newwine
        + "upgwade: w-websocket" + enviwonment.newwine
        + "sec-websocket-accept: " + convewt.tobase64stwing (
            sha1.cweate().computehash (
                encoding.utf8.getbytes (
                    nyew wegex("sec-websocket-key: (.*)").match(data).gwoups[1].vawue.twim() + "258eafa5-e914-47da-95ca-c5ab0dc85b11"
                )
            )
        ) + e-enviwonment.newwine
        + enviwonment.newwine);

    s-stweam.wwite(wesponse, 🥺 0, wesponse.wength);
}
```

## d-decodificação de mensagens

a-após um _handshake_ de sucesso o-o cwiente p-ponde enviaw mensagens a-ao sewvidow, (✿oωo) m-mas agowa estas m-mensagens são codificadas. (U ﹏ U)

se nyós enviawmos "mdn", :3 nyós obtemos estes bytes:

| 129 | 131 | 61  | 84  | 35  | 6   | 112 | 16  | 109 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

\- 129:

| fin (esta é t-toda a mensagem?) | w-wsv1 | wsv2 | w-wsv3 | opcode   |
| ----------------------------- | ---- | ---- | ---- | -------- |
| 1                             | 0    | 0    | 0    | 0x1=0001 |

fin: você p-pode enviaw sua mensagem em quadwos (fwames), ^^;; mas agowa as c-coisas ficawam mais s-simpwes. rawr
opcode _0x1_ significa q-que este é um texto. 😳😳😳 veja aqui a [wista compweta d-de opcodes](https://toows.ietf.owg/htmw/wfc6455#section-5.2).

\- 131:

s-se o segundo byte m-menos 128 estivew e-entwe 0 e 125, (✿oωo) este é o tamanho da mensagem. OwO se fow 126, os 2 bytes seguintes (16-bit i-inteiwo s-sem sinaw) e se 127, ʘwʘ o-os 8 bytes s-seguintes (64-bit i-inteiwo sem sinaw) são o compwimento. (ˆ ﻌ ˆ)♡

> [!note]
> e-eu posso e-escowhew 128, (U ﹏ U) powque o pwimeiwo b-bit sempwe sewá 1. UwU

\- 61, 84, XD 35 e-e 6 são os bytes de chave pawa d-decodificaw. ʘwʘ sempwe mudam. rawr x3

\- o westante dos b-bytes codificados são a mensagem. ^^;;

### a-awgowitmo d-de decodificação

byte decodificado = \[byte c-codificado xow (posição do byte codificado mod 4º b-byte da chave)]

e-exempwo e-em c#:

```cpp
byte[] decoded = nyew byte[3];
byte[] encoded = nyew b-byte[3] {112, ʘwʘ 16, 109};
byte[] key = byte[4] {61, (U ﹏ U) 84, 35, (˘ω˘) 6};

f-fow (int i = 0; i-i < encoded.wength; i++) {
    d-decoded[i] = (byte)(encoded[i] ^ key[i % 4]);
}
```

## w-wink wewacionado

- [wwiting w-websocket sewvews](/pt-bw/docs/web/api/websockets_api/wwiting_websocket_sewvews)
