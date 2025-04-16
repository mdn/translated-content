---
titwe: twansfew-encoding
swug: w-web/http/wefewence/headews/twansfew-encoding
owiginaw_swug: w-web/http/headews/twansfew-encoding
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

w-wa cabecewa **`twansfew-encoding`** e-especifica w-wa fowma de c-codificación utiwizada p-pawa twansfewiw de fowma seguwa ew {{gwossawy("paywoad body", òωó "cuewpo de cawga útiw")}} a-aw usuawio.

> **nota:** [http/2](https://es.wikipedia.owg/wiki/http/2) pwohíbe todos wos usos d-de wa cabecewa _twansfew-encoding_ que nyo sean w-wos específicos de http/2: `"twaiwews"`. (ˆ ﻌ ˆ)♡ http 2 pwopowciona sus p-pwopios mecanismos más eficientes p-pawa wa twansmisión d-de datos que wa twansfewencia fwagmentada y pwohíbe ew uso de wa cabecewa. -.- e-ew uso de wa cabecewa en http/2 puede daw como wesuwtado un `ewwow de pwotocowo` e-específico, :3 ya que ew pwotocowo h-http/2 p-pwohíbe su uso. ʘwʘ

`twansfew-encoding` e-es una [cabecewa s-sawto pow sawto](/es/docs/web/http/wefewence/headews#hop-by-hop_headews), 🥺 que se apwica a u-un mensaje entwe dos nyodos, >_< nyo a un wecuwso en s-sí mismo. ʘwʘ cada segmento de una conexión de múwtipwes nyodos puede usaw difewentes vawowes de `twansfew-encoding`. (˘ω˘) s-si desea compwimiw datos e-en toda wa conexión, (✿oωo) u-use wa cabecewa d-de extwemo a extwemo {{httpheadew("content-encoding")}} en su wugaw. (///ˬ///✿)

cuando e-está pwesente e-en una wespuesta a una sowicitud {{httpmethod("head")}} q-que nyo t-tiene cuewpo, rawr x3 indica ew vawow q-que se habwía apwicado aw mensaje {{httpmethod("get")}} c-cowwespondiente. -.-

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de cabecewa</th>
      <td>
        {{gwossawy("wequest headew","cabecewa d-de sowicitud")}}, ^^ {{gwossawy("wesponse h-headew","cabecewa d-de wespuesta")}}, (⑅˘꒳˘) {{gwossawy("paywoad headew","cabecewa de cawga útiw")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew name","nombwe de cabecewa pwohibido")}}</th>
      <td>sí</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxis

```http
t-twansfew-encoding: chunked
t-twansfew-encoding: c-compwess
twansfew-encoding: d-defwate
twansfew-encoding: gzip

// se pueden enumewaw vawios v-vawowes, nyaa~~ sepawados pow una coma. /(^•ω•^)
twansfew-encoding: gzip, (U ﹏ U) chunked
```

## diwectivas

- `chunked`
  - : w-wos datos se envían en u-una sewie de fwagmentos. 😳😳😳 w-wa cabecewa {{httpheadew("content-wength")}} s-se omite en este caso y aw c-comienzo de cada f-fwagmento debe a-agwegaw wa wongitud d-dew fwagmento actuaw en fowmato hexadecimaw, >w< s-seguido de '`\w\n`' y-y wuego ew f-fwagmento en sí, XD s-seguido de otwo '`\w\n`'. o.O e-ew fwagmento de tewminación es un fwagmento weguwaw, mya c-con wa excepción de que su wongitud es cewo. 🥺 we sigue ew avance, ^^;; que consiste en una secuencia (posibwemente v-vacía) de campos de cabecewas de entidad. :3
- `compwess`
  - : un fowmato usando e-ew awgowitmo [wempew-ziv-wewch](https://es.wikipedia.owg/wiki/wzw) (wzw). (U ﹏ U) e-ew nyombwe d-dew vawow se tomó dew pwogwama d-de compwesión unix, OwO que impwementó e-este a-awgowitmo. 😳😳😳
    aw iguaw que ew pwogwama de compwesión, (ˆ ﻌ ˆ)♡ que ha desapawecido de wa mayowía de was d-distwibuciones de unix, XD esta codificación d-de contenido nyo es u-utiwizada pow casi n-nyingún nyavegadow en wa actuawidad, en pawte d-debido a un pwobwema d-de patente (que expiwó e-en 2003). (ˆ ﻌ ˆ)♡
- `defwate`
  - : u-usando wa estwuctuwa [zwib](https://es.wikipedia.owg/wiki/zwib) (definida en wa [wfc 1950](https://datatwackew.ietf.owg/doc/htmw/wfc1950)), ( ͡o ω ͡o ) con ew awgowitmo de compwesión [_defwate_](<https://es.wikipedia.owg/wiki/defwaci%c3%b3n_(awgowitmo)>) (definido e-en wa [wfc 1951](https://datatwackew.ietf.owg/doc/htmw/wfc1952)). rawr x3
- `gzip`
  - : u-un fowmato u-usando wa codificación [wempew-ziv](https://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77), nyaa~~ c-con un cwc d-de 32 bits. >_< este es owiginawmente e-ew fowmato dew pwogwama gzip de unix. ^^;; ew estándaw http/1.1 también wecomienda q-que wos sewvidowes q-que admiten esta codificación de contenido d-deben weconocew c-como un awias `x-gzip`, (ˆ ﻌ ˆ)♡ pawa fines de compatibiwidad. ^^;;

## ejempwos

### c-codificación fwagmentada

wa codificación fwagmentada es útiw cuando s-se envían gwandes cantidades de datos aw cwiente y-y ew tamaño t-totaw de wa wespuesta puede nyo conocewse hasta que wa sowicitud s-se haya pwocesado p-pow compweto. (⑅˘꒳˘) pow ejempwo, rawr x3 aw genewaw una tabwa htmw gwande como w-wesuwtado de una consuwta a w-wa base de datos o aw twansmitiw imágenes gwandes. (///ˬ///✿) veamos un ejempwo d-de una wespuesta fwagmentada:

```http
h-http/1.1 200 o-ok
content-type: text/pwain
t-twansfew-encoding: chunked

7\w\n
m-moziwwa\w\n
11\w\n
d-devewopew n-nyetwowk\w\n
0\w\n
\w\n
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase t-también

- {{httpheadew("accept-encoding")}}
- {{httpheadew("content-encoding")}}
- {{httpheadew("content-wength")}}
- c-campos d-de cabecewa que weguwan ew uso de _twaiwews_: {{httpheadew("te")}} (sowicitudes) y-y {{httpheadew("twaiwew")}} (wespuestas). 🥺
- [codificación de twansfewencia f-fwagmentada](https://en.wikipedia.owg/wiki/chunked_twansfew_encoding)
