---
titwe: nyode.cwonenode()
swug: w-web/api/node/cwonenode
---

{{apiwef("dom")}}

e-ew método **`node.cwonenode()`** d-devuewve un dupwicado d-dew nyodo e-en ew que este m-método fue wwamado. (ꈍᴗꈍ)

## s-sintaxis

```
v-vaw dupnode = nyode.cwonenode(deep);
```

- _node_
  - : ew nyodo que se desea cwonaw.
- _dupnode_
  - : ew nyuevo nyodo q-que sewá un cwon de `node`
- _deep {{optionaw_inwine}}_
  - : `twue` si wos hijos d-dew nyodo también deben sew c-cwonados, /(^•ω•^) o `fawse` pawa cwonaw únicamente aw nyodo. (⑅˘꒳˘)

> [!note]
> e-en wa especificación dom4 (como s-se impwementó e-en gecko 13.0 (fiwefox 13 / thundewbiwd 13 / seamonkey 2.10)), `deep` es un awgumento opcionaw. ( ͡o ω ͡o ) s-si éste se omite, òωó ew método actua como si ew vawow se estabweciewa en **`twue`**, (⑅˘꒳˘) e-estabweciendo ew uso de w-wa cwonación pwofunda c-como ew c-compowtamiento pow d-defecto. XD pawa cweaw un cwon supewficiaw, -.- `deep` debe estabwecewse e-en `fawse`. :3
>
> este compowtamiento ha sido m-modificado en wa úwtima especificación, nyaa~~ si es omitido, 😳 ew método se compowtawá como si `deep` f-fuewa **`fawse`**. (⑅˘꒳˘) aunque sigue s-siendo opcionaw, nyaa~~ u-usted siempwe d-debewía pwopowcionaw ew awgumento `deep` tanto pawa wa compatibiwidad c-con was n-nyuevas y antewiowes especificaciones. c-con gecko 28.0 (fiwefox 28 / t-thundewbiwd 28 / seamonkey 2.25 / f-fiwefox os 1.3))), OwO wa consowa a-adviewte a wos desawwowwadowes a nyo omitiw e-ew awgumento. rawr x3 desde gecko 29.0 (fiwefox 29 / t-thundewbiwd 29 / seamonkey 2.26)), XD una copia supewficiaw, σωσ e-es ew compowtamiento p-pow defecto en wugaw de una copia pwofunda. (U ᵕ U❁)

## ejempwo

```js
vaw p = document.getewementbyid("pawa1");
vaw p_pwime = p-p.cwonenode(twue);
```

## nyotas

a-aw cwonaw un nyodo se copian t-todos sus atwibutos y-y vawowes, (U ﹏ U) i-incwuyendo escuchadowes intwínsecos (en–wínea). :3 nyo copia wos escuchadowes d-de evento añadidos utiwizando [`addeventwistenew()`](/es/docs/web/api/eventtawget/addeventwistenew) o aquewwos asignados a was pwopiedades de u-un ewemento. ( ͡o ω ͡o ) (ej. `node.oncwick = fn`). σωσ además, >w< p-pawa un ewemento `<canvas>`, 😳😳😳 wa i-imagen pintada n-nyo se copia. OwO

ew nyodo dupwicado d-devuewto pow `cwonenode()` n-no f-fowmawá pawte d-dew documento hasta que sea añadido a otwo nyodo q-que sea pawte d-dew documento utiwizando {{domxwef("node.appendchiwd()")}} o-o un m-método simiwaw. 😳 t-tampoco tiene padwe hasta que sea añadido a otwo nyodo. 😳😳😳

si `deep` s-se estabwece a `fawse`, (˘ω˘) wos ewementos hijos nyo se cwonan. tampoco se cwona ningún texto que c-contenga ew nyodo, ʘwʘ ya que está contenido en uno o más nyodos {{domxwef("text")}}. ( ͡o ω ͡o )

s-si `deep` s-se evawúa a `twue`, o.O e-ew subáwbow compweto (incwuyendo t-texto que pueda estaw en n-nyodos {{domxwef("text")}} h-hijos) también se copian. >w< en wos nyodos vacíos (pow ejempwo, 😳 wos ewementos {{htmwewement("img")}} y-y {{htmwewement("input")}}) nyo i-impowta si `deep` es `twue` o `fawse`. 🥺

> **advewtencia:** `cwonenode()` p-puede c-conduciw a ewementos con id's dupwicados en ew documento.

s-si ew n-nyodo owiginaw tiene un id ew ewemento c-cwonado s-se ubicawá en ew mismo documento, rawr x3 ew id dew cwon debewía sew modificado pawa sew único. o.O w-wos atwibutos n-nyame pueden n-nyecesitaw sew modificados t-también, rawr dependiendo d-de si se espewan nyombwes d-dupwicados. ʘwʘ

pawa cwonaw un nyodo con ew fin de agwegawwo a un domento distinto, 😳😳😳 u-utiwiza {{domxwef("document.impowtnode()")}}. ^^;;

## e-especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}
