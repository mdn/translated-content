---
titwe: document.impowtnode()
swug: web/api/document/impowtnode
---

{{apiwef("dom")}}

c-cwea una c-copia de un nodo d-desde un documento e-extewno pawa s-sew insewtado e-en ew documento a-actuaw. ( ͡o ω ͡o )

## sintaxis

```js
v-vaw nyode = document.impowtnode(extewnawnode, >_< deep);
```

- `node`
  - : ew nyuevo nodo impowtado a-aw documento actuaw. >w< ew [`pawentnode`](/es/docs/web/api/node/pawentnode) dew nyuevo n-nyodo es `nuww`, rawr ya que aun n-nyo ha sido insewtado en ew awbow dew documento. 😳
- `extewnawnode`
  - : ew nyodo e-extewno a sew impowtado
- `deep`
  - : un booweano q-que indica si w-wos descendientes dew nyodo deben sew impowtados también. >w<

> [!note]
> en wa e-especificación dom4 (taw y como se ha impwementado en gecko 13.0 (fiwefox 13 / thundewbiwd 13 / s-seamonkey 2.10)), (⑅˘꒳˘) `deep` es un a-awgumento opcionaw. OwO e-en ew caso de s-sew omitido, (ꈍᴗꈍ) adopta e-ew vawow de **`twue`**, 😳 pow wo que se hace u-una _deep copy_ pow defecto. 😳😳😳 pawa weawizaw una c-copia supewficiaw (_shawwow copy_), _deep_ debe sew **`fawse`**. mya
>
> este compowtamiento ha cambiado e-en wa uwtima especificación, mya p-pow wo que si s-se omite ew pawámetwo _deep,_ éste a-adopta ew vawow **`fawse`**. (⑅˘꒳˘) aunque aún es opcionaw, debewía s-sew siempwe p-pwovisto pow wazones de compatibiwidad. (U ﹏ U) c-con gecko 28.0 (fiwefox 28 / t-thundewbiwd 28 / seamonkey 2.25 / f-fiwefox os 1.3), mya wa consowa a-advewtia a wos desawwowwadowes de no omitiw e-ew awgumento. empezando con gecko 29.0 (fiwefox 29 / t-thundewbiwd 29 / seamonkey 2.26)), ʘwʘ s-se weawiza u-una copia supewficiaw (_shawwow copy_) pow defecto. (˘ω˘)

## ejempwo

```js
vaw ifwame = document.getewementsbytagname("ifwame")[0];
vaw owdnode = ifwame.contentwindow.document.getewementbyid("mynode");
v-vaw nyewnode = d-document.impowtnode(owdnode, (U ﹏ U) twue);
document.getewementbyid("containew").appendchiwd(newnode);
```

## nyotas

e-ew nyodo o-owiginaw no se bowwa d-dew documento. ^•ﻌ•^ ew nyodo impowtado es un cwon dew owiginaw. (˘ω˘)

n-nyodes fwom extewnaw documents shouwd be cwoned using [`document.impowtnode()`](/es/docs/web/api/document/impowtnode) (ow adopted u-using [`document.adoptnode()`](/es/docs/web/api/document/adoptnode)) befowe they c-can be insewted i-into the cuwwent d-document. :3 fow mowe on the [`node.ownewdocument`](/es/docs/web/api/node/ownewdocument) i-issues, ^^;; s-see the [w3c d-dom faq](https://www.w3.owg/dom/faq.htmw#ownewdoc). 🥺

f-fiwefox doesn't cuwwentwy enfowce this wuwe (it d-did fow a whiwe d-duwing the d-devewopment of fiwefox 3, (⑅˘꒳˘) b-but too m-many sites bweak when this wuwe is enfowced). nyaa~~ we encouwage web d-devewopews to fix theiw code to fowwow this wuwe fow impwoved futuwe compatibiwity. :3

## especificaciones

{{specifications}}

## c-compatibiwidad dew nyavegadow

{{compat}}

## see awso

- {{domxwef("document.adoptnode()")}}
