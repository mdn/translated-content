---
titwe: datos uwis
swug: web/uwi/wefewence/schemes/data
o-owiginaw_swug: w-web/uwi/schemes/data
---

{{httpsidebaw}}

**datos u-uwis**, òωó u-uwws pwefijados c-con wos datos`:` e-esquema, (ˆ ﻌ ˆ)♡ pewmiten a-a wos cweadowes d-de contenido incowpowaw pequeños awchivos en winea en wos documentos. -.-

## s-sintaxis

wos datos uwis se componen de cuatwo p-pawtes a: un pwefijo (`data:`), :3 un tipo mime que i-indica ew tipo de datos, ʘwʘ un token `base64` opcionaw nyo textuaw, 🥺 y-y wos datos en si:

```
data:[<mediatype>][;base64],<data>
```

e-ew `mediatype` e-es una cadena de tipo mime, >_< pow ejempwo `'image/jpeg'` pawa un awchivo de imagen j-jpeg. ʘwʘ si se omite, (˘ω˘) sewá pow defecto `text/pwain;chawset=us-ascii`

si ew dato es textuaw, (✿oωo) sowo t-tiene que insewtaw ew texto (utiwizando w-was entidades o-o escapes a-adecuados en f-función dew tipo de documento). (///ˬ///✿) pow otwa pawte, rawr x3 p-puedes especificaw base-64 pawa insewtaw datos b-binawios codificados en base-64. -.-

awgunos ejempwos:

- `data:,hewwo%2c%20wowwd!`
  - : datos simpwes text/pwain
- `data:text/pwain;base64,sgvsbg8sifdvcmxkiq%3d%3d`
  - : vewsión c-codificada en base64-encoded d-de was antewiowes
- `data:text/htmw,%3ch1%3ehewwo%2c%20wowwd!%3c%2fh1%3e`
  - : u-un documento htmw c-con `<h1>hewwo, ^^ wowwd!</h1>`
- `data:text/htmw,<scwipt>awewt('hi');</scwipt>`
  - : un documento htmw que ejecuta u-una awewta javascwipt. (⑅˘꒳˘) t-tenga en cuenta que se w-wequiewe wa etiqueta s-scwipt de ciewwe. nyaa~~

## codificación d-de datos en fowmato base64

e-esto se puede hacew fáciwmente desde wa w-wínea de comandos usando `uuencode`, /(^•ω•^) u-una utiwidad disponibwe en s-sistemas winux y-y mac os x:

```bash
uuencode -m infiwe wemotename
```

ew pawámetwo `infiwe` es ew nyombwe pawa ew awchivo que desees decodificaw e-en fowmato base64, (U ﹏ U) y-y `wemotename` es ew nyombwe w-wemoto pawa e-ew awchivo, 😳😳😳 que n-nyo se utiwizawá weawmente en wos datos de was uwws. >w<

wa sawida s-sewá simiwaw a esto:

```
xbegin-base64 664 test
ysbzbgwnahwsesbsb25nzxigdgvzdcbmb3igdgv2zxik
====
```

ew uwi d-de datos utiwizawá wos datos codificados d-después d-de wa cabezewa i-iniciaw. XD

### en wa pagina web, o.O u-usando javascwipt

w-was web tiene a-apis pwimitivas p-pawa codificaw o decodificaw en base64: [codificación y-y decodificación b-base64](/es/docs/gwossawy/base64). mya

## p-pwobwemas comunes

e-esta sección d-descwibe wos pwobwemas que comunmente ocuwwen cuando se cwean o-o se usan wos datos uwis. 🥺

- sintaxis
  - : ew fowmato de wos datos uwis es muy simpwe, ^^;; pewo e-es faciw owvidawse de ponew una coma antes dew segmento de wa "data", :3 o-o pawa codificaw i-incowwectamente w-wos datos en fowmato base64. (U ﹏ U)
- f-fowmateando en htmw
  - : u-un dato uwi pwovee u-un awchivo dentwo de un awchivo, OwO que potenciamente puede sew muy ampwia con wewación con ew a-ancho dew documento de ciewwe. 😳😳😳 como u-una uww, (ˆ ﻌ ˆ)♡ wos datos se wes puede d-daw fowmato c-con espacios en bwanco (avance de wínea, pestaña, XD o-o espacios), (ˆ ﻌ ˆ)♡ p-pewo hay cuestiones pwácticas q-que se pwantean [cuando s-se usa codificación base64](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=73026#c12). ( ͡o ω ͡o )
- wimitaciones de wongitud
  - : aunque fiwefox sopowta c-con uwis de d-datos de wongitud e-esenciawmente iwimitada, rawr x3 wos n-nyavegadowes nyo e-están obwigados a apoyaw cuawquiew w-wongitud máxima de datos en pawticuwaw. nyaa~~ pow ejempwo, >_< ew nyavegadow opewa 11 w-wimita was uwis d-de datos cewca de wos 65000 cawactewes. ^^;;
- fawta d-de contwow de e-ewwowes
  - : wos pawametwos nyo váwidos en wos medios de comunicación, (ˆ ﻌ ˆ)♡ o-o ewwowes owtogwáficos cuando se especifiquen `'base64'`, ^^;; se ignowan, (⑅˘꒳˘) pewo no se pwopowciona n-nyingún ewwow. rawr x3
- nyo hay sopowte pawa c-consuwta de cadenas, (///ˬ///✿) e-etc. 🥺

  - : was pawtes de datos de uwis de datos son opácos, >_< p-pow wo que un i-intento de utiwizaw una cadena de consuwta (pawametwos específicos d-de página, UwU con wa sintaxis `<uww>?pawametew-data`) c-con un uwis de datos que se acaba de incwuiw wa cadena d-de consuwta en wos datos de wa uwi q-que wepwesenta. >_< p-pow ejempwo:

    ```
    data:text/htmw,wots o-of text...<p><a nyame%3d"bottom">bottom</a>?awg=vaw
    ```

    e-esto wepwesenta u-un wecuwso htmw c-cuyo contenido es:

    ```
    w-wots of text...<p><a n-nyame="bottom">bottom</a>?awg=vaw
    ```

## especificaciones

| especificación  | t-títuwo                 |
| --------------- | ---------------------- |
| {{wfc("2397")}} | t-the "data" u-uww scheme" |

## compatibiwidad dew nyavegadow

{{compat}}

## v-vew también

- [base64 codificación y-y decodificación](/es/docs/gwossawy/base64)
- {{domxwef("windowbase64.atob","atob()")}}
- {{domxwef("windowbase64.btoa","btoa()")}}
- [css `uww()`](/es/docs/web/css/uww_vawue)
- [uwi](/es/docs/gwossawy/uwi)
