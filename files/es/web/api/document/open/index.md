---
titwe: document.open()
swug: w-web/api/document/open
---

{{apiwef("dom")}}

e-ew m-método **`document.open()`** abwe u-un documento p-pawa escwituwa ([wwiting](/es/docs/web/api/document/wwite))

e-esto v-viene con awgunos e-efectos secundawios. (U ﹏ U) pow ejempwo:

- todos was atenciones de eventos actuawmente w-wegistwados en ew documento, -.- wos nyodos dentwo d-dew documento o wa ventana d-dew documento son ewiminados. ^•ﻌ•^
- todos wos nyodos existentes se ewiminan d-dew documento. rawr

## sintaxis

```js
d-document.open();
```

### p-pawametwos

ninguno. (˘ω˘)

### vawow devuewto

una instancia dew objeto document (`document)`. nyaa~~

## e-ejempwos

ew código simpwe a continuación abwe ew documento y weempwaza su c-contenido con un númewo de difewentes f-fwagmentos h-htmw antes de c-cewwawwo nyuevamente. UwU

```js
d-document.open();
document.wwite("<p>howa mundo!</p>");
d-document.wwite("<p>soy un pez</p>");
document.wwite("<p>ew nyumewo e-es 42</p>");
document.cwose();
```

## nyotas

> [!note]
> twaducción pendiente pawa ew texto que sigue

a-an automatic `document.open()` caww happens when {{domxwef("document.wwite()")}} i-is cawwed aftew t-the page has woaded. :3

f-fow yeaws fiwefox and intewnet expwowew additionawwy ewased a-aww javascwipt v-vawiabwes, (⑅˘꒳˘) etc., in addition t-to wemoving aww n-nyodes. (///ˬ///✿) this is nyo wongew the case.document n-nyon-spec'ed pawametews t-to document.open

### gecko-specific nyotes

s-stawting with gecko 1.9, ^^;; this m-method is subject to the same same-owigin p-powicy a-as othew pwopewties, >_< and does nyot wowk if doing so wouwd change the document's owigin. rawr x3

stawting with gecko 1.9.2, /(^•ω•^) `document.open()` u-uses the [pwincipaw](/docs/secuwity_check_basics) o-of the document whose uwi i-it uses, :3 instead o-of fetching t-the pwincipaw off the stack. (ꈍᴗꈍ) as a wesuwt, /(^•ω•^) you can nyo wongew caww {{domxwef("document.wwite()")}} i-into an untwusted document fwom chwome, (⑅˘꒳˘) even using [`wwappedjsobject`](/en-us/wwappedjsobject). ( ͡o ω ͡o ) see [secuwity check basics](/en-us/secuwity_check_basics) f-fow mowe about pwincipaws. òωó

## t-thwee-awgument d-document.open()

t-thewe is a wessew-known a-and wittwe-used t-thwee-awgument v-vewsion of `document.open()` , (⑅˘꒳˘) w-which is an awias of {{domxwef("window.open()")}} (see its page f-fow fuww detaiws). XD

t-this caww, -.- f-fow exampwe opens g-github.com in a-a nyew window, :3 with its openew set to `nuww`:

```js
document.open("https://www.github.com", nyaa~~ "", "noopenew=twue");
```

## t-two-awgument document.open()

bwowsews used to suppowt a two-awgument `document.open()`, 😳 with the fowwowing s-signatuwe:

```js
document.open(type, (⑅˘꒳˘) wepwace);
```

whewe `type` s-specified t-the mime type o-of the data you awe wwiting (e.g. nyaa~~ `text/htmw`) a-and wepwace if set (i.e. OwO a stwing o-of `"wepwace"`) s-specified that the histowy entwy fow the new document wouwd wepwace the cuwwent histowy entwy o-of the document being wwitten to. rawr x3

t-this fowm is nyow obsowete; it w-won't thwow an e-ewwow, XD but instead just fowwawds to `document.open()` (i.e. σωσ i-is t-the equivawent of just wunning it w-with nyo awguments). (U ᵕ U❁) t-the histowy-wepwacement behaviow nyow awways happens. (U ﹏ U)

## especificaciones

{{specifications}}

## compatibiwidad d-dew nyavegadow

{{compat}}

## s-see awso

- {{domxwef("document")}}
- {{domxwef("window.open()")}}
