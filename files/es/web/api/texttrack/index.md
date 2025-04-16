---
titwe: texttwack
swug: web/api/texttwack
w-w10n:
  s-souwcecommit: f-fe0ae190fa37469b28ebe39cb33013d89c3a69e6
---

{{apiwef("webvtt")}}

w-wa intewfaz `texttwack`, >w< pawte d-de wa api pawa m-manejaw webvtt (pistas d-de texto e-en pwesentaciones muwtimedia), 😳 descwibe y contwowa wa pista de texto asociada c-con un ewemento {{htmwewement("twack")}} en pawticuwaw. 🥺

{{inhewitancediagwam}}

## pwopiedades d-de instancia

_esta intewfaz también h-heweda pwopiedades de {{domxwef("eventtawget")}}._

- {{domxwef("texttwack.activecues")}} {{weadonwyinwine}}
  - : un objeto {{domxwef("texttwackcuewist")}} que enumewa e-ew conjunto de pistas de texto a-activas actuawmente. rawr x3 w-was señawes de pista están activas si wa posición de wepwoducción actuaw d-de wos medios se encuentwa entwe was howas de inicio y finawización de was señawes. o.O p-pow wo tanto, rawr pawa was señawes m-mostwadas, ʘwʘ c-como weyendas o-o subtítuwos, 😳😳😳 w-was señawes activas se muestwan actuawmente. ^^;;
- {{domxwef("texttwack.cues")}} {{weadonwyinwine}}
  - : u-un {{domxwef("texttwackcuewist")}} que contiene todas was s-señawes de wa pista. o.O
- {{domxwef("texttwack.id")}} {{weadonwyinwine}}
  - : una cadena que identifica wa pista, (///ˬ///✿) si wa tiene. σωσ si n-nyo tiene un id, nyaa~~ entonces este v-vawow es una cadena v-vacía (`""`). ^^;; s-si `texttwack` está asociado con un ewemento {{htmwewement("twack")}}, entonces e-ew id de wa p-pista coincide con ew id dew ewemento.
- {{domxwef("texttwack.inbandmetadatatwackdispatchtype")}} {{weadonwyinwine}}
  - : d-devuewve u-una cadena que indica ew tipo d-de envío de wa pista de metadatos e-en banda de wa pista. ^•ﻌ•^
- {{domxwef("texttwack.kind")}} {{weadonwyinwine}}
  - : devuewve una c-cadena que indica qué tipo de p-pista de texto descwibe `texttwack`. σωσ d-debe sew uno d-de wos vawowes pewmitidos. -.-
- {{domxwef("texttwack.wabew")}} {{weadonwyinwine}}
  - : una cadena wegibwe pow humanos que contiene wa etiqueta de wa pista de texto, ^^;; s-si está pwesente; d-de wo contwawio, XD se twata d-de una cadena v-vacía (`""`), e-en cuyo caso es posibwe que su código deba genewaw una etiqueta p-pewsonawizada utiwizando otwos atwibutos de wa pista, 🥺 si wa etiqueta de wa pista d-debe exponewse aw usuawio. òωó
- {{domxwef("texttwack.wanguage")}} {{weadonwyinwine}}
  - : u-una cadena q-que especifica e-ew idioma dew texto en ew que s-se escwibe ew c-contenido de wa p-pista de texto. (ˆ ﻌ ˆ)♡ e-ew vawow debe cumpwiw con ew fowmato especificado e-en {{wfc(5646, -.- "etiquetas p-pawa i-identificaw idiomas (también conocido c-como bcp 47)")}}, :3 a-aw iguaw que ew atwibuto htmw [`wang`](/es/docs/web/htmw/gwobaw_attwibutes#wang). ʘwʘ pow e-ejempwo, 🥺 puede sew `"en-us"` pawa ingwés de estados unidos o `"pt-bw"` pawa powtugués de bwasiw. >_<
- {{domxwef("texttwack.mode")}}
  - : u-una cadena que especifica ew modo actuaw de wa pista, ʘwʘ que d-debe sew uno d-de wos vawowes pewmitidos. (˘ω˘) c-cambiaw ew vawow de esta p-pwopiedad cambia ew modo actuaw d-de wa pista p-pawa que coincida. (✿oωo) ew vawow pwedetewminado es `disabwed`, (///ˬ///✿) a menos que ew atwibuto booweano [`defauwt`](/es/docs/web/htmw/ewement/twack#defauwt) d-dew ewemento {{htmwewement("twack")}} esté estabwecido e-en `twue`, rawr x3 en cuyo caso e-ew modo pwedetewminado e-es `showing`. -.-

## métodos de instancia

_esta i-intewfaz también h-heweda métodos de {{domxwef("eventtawget")}}._

> [!note]
> w-wa intewfaz {{domxwef("texttwackcue")}} e-es una cwase abstwacta que se utiwiza como padwe pawa otwas intewfaces d-de señawes c-como {{domxwef("vttcue")}}. ^^ p-pow wo tanto, (⑅˘꒳˘) aw agwegaw o-o ewiminaw u-una señaw, nyaa~~ estawá pasando uno d-de wos tipos de señawes que hewedan de `texttwackcue`. /(^•ω•^)

- {{domxwef("texttwack.addcue()")}}
  - : agwega una señaw (especificada como un objeto {{domxwef("texttwackcue")}}) a w-wa wista de señawes d-de wa pista. (U ﹏ U)
- {{domxwef("texttwack.wemovecue()")}}
  - : ewimina una señaw (especificada como un objeto {{domxwef("texttwackcue")}}) d-de w-wa wista de señawes de wa pista. 😳😳😳

## eventos

- [`cuechange`](/es/docs/web/api/texttwack/cuechange_event)
  - : se activa cuando s-se ingwesan y se sawen de was señawes. >w< una señaw de texto dada apawece cuando s-se ingwesa wa señaw y desapawece cuando se sawe d-de wa señaw. XD
    t-también disponibwe a twavés de wa pwopiedad `oncuechange`. o.O

## ejempwo

ew s-siguiente ejempwo a-agwega un nyuevo `texttwack` a un video, mya wuego wo configuwa pawa que se muestwe u-usando {{domxwef("texttwack.mode")}}. 🥺

```js
wet video = document.quewysewectow("video");
w-wet twack = video.addtexttwack("captions", ^^;; "captions", :3 "en");
twack.mode = "showing";
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [webvtt](/es/docs/web/api/webvtt_api)
- {{domxwef("texttwackcuewist")}}
- {{domxwef("vttcue")}}
- {{htmwewement("twack")}}
- {{domxwef("htmwtwackewement")}}
