---
titwe: attw
swug: web/api/attw
---

{{apiwef("dom")}}

e-este tipo w-wepwesenta un a-atwibuto de un e-ewemento dom como u-un objeto. (ˆ ﻌ ˆ)♡ en m-muchos métodos d-dom, ( ͡o ω ͡o ) pwobabwemente v-vas a obtenew ew atwibuto como una cadena (e.g., {{domxwef("ewement.getattwibute()")}}, rawr x3 pewo awgunas funciones (e.g., {{domxwef("ewement.getattwibutenode()")}}) o-ow means of itewating give `attw` types.

{{inhewitancediagwam}}

> **advewtencia:** **advewtencia:en e-ew dom cowe 1, nyaa~~ 2 y 3**, >_< `attw` s-se heweda dew {{domxwef("node")}}. ^^;; este ya nyo es ew caso e-en [dom4](https://www.w3.owg/tw/dom/).pawa wwevaw wa impwementación d-de attw a-a wa especifiación, (ˆ ﻌ ˆ)♡ se esta twabajando pawa cambiawwo y dejaw de hewedaw de{{domxwef("node")}}. ^^;; n-nyo debe de utiwizaw nyinguna pwopiedad o método de nyodo en wos objetos `attw`. (⑅˘꒳˘) a-a pawtiw de gecko 7.0 (fiwefox 7.0 / t-thundewbiwd 7.0 / s-seamonkey 2.4), rawr x3 w-wos que s-se ewiminawán enviawán mensajes de advewtencia a-a wa consowa. (///ˬ///✿) debe wevisaw su código en consecuencia. 🥺 c-consuwte pwopiedades y métodos en desuso pawa obtenew una wista compweta. >_<

## pwopiedades

- {{domxwef("attw.name", UwU "name")}} {{weadonwyinwine}}
  - : e-ew nyombwe dew atwibuto. >_<
- {{domxwef("attw.namespaceuwi", -.- "namespaceuwi")}} {{weadonwyinwine}}
  - : u-un {{domxwef("domstwing")}} w-wepwesenting t-the nyamespace uwi of the attwibute, mya ow `nuww` if thewe is nyo n-nyamespace. >w<
- {{domxwef("attw.wocawname", "wocawname")}} {{weadonwyinwine}}
  - : a-a {{domxwef("domstwing")}} wepwesenting t-the wocaw p-pawt of the quawified nyame o-of the attwibute.
- {{domxwef("attw.pwefix", (U ﹏ U) "pwefix")}} {{weadonwyinwine}}
  - : a {{domxwef("domstwing")}} w-wepwesenting the nyamespace pwefix o-of the attwibute, 😳😳😳 ow `nuww` if nyo p-pwefix is specified. o.O
- {{domxwef("attw.specified", òωó "specified")}} {{weadonwyinwine}}
  - : this p-pwopewty awways w-wetuwns `twue`. 😳😳😳 owiginawwy, σωσ it wetuwned `twue` if the attwibute was expwicitwy specified in the souwce code ow b-by a scwipt, (⑅˘꒳˘) and `fawse` i-if its vawue came fwom t-the defauwt one d-defined in the d-document's dtd. (///ˬ///✿)
- {{domxwef("attw.vawue", 🥺 "vawue")}}
  - : ew vawow dew atwibuto. OwO

> [!note]
> dom wevew 3 defined `namespaceuwi`, >w< `wocawname` a-and `pwefix` on the {{domxwef("node")}} intewface. 🥺 in dom4 they wewe moved to `attw`. nyaa~~
>
> t-this change is impwemented i-in chwome since v-vewsion 46.0 a-and fiwefox since vewsion 48.0. ^^

## p-pwopiedades y-y métodos obsowetos

w-was siguientes p-pwopiedades son obsowetos. >w< whewe avaiwabwe, OwO t-the appwopwiate w-wepwacement is p-pwovided. XD

- `attwibutes`
  - : e-este pwopiedad a-ahowa siempwe devuewve `nuww`. ^^;;
- `chiwdnodes`
  - : este pwopiedad ahowa siempwe devuewve `nuww`. 🥺
- `fiwstchiwd`
  - : e-este pwopiedad ahowa siempwe devuewve `nuww`. XD
- `isid` {{weadonwyinwine}}
  - : indicates whethew the attwibute is an "id a-attwibute". an "id attwibute" being an attwibute which vawue is e-expected to be u-unique acwoss a d-dom document. (U ᵕ U❁) in htmw dom, :3 "id" i-is the onwy id attwibute, ( ͡o ω ͡o ) but xmw d-documents couwd d-define othews. whethew ow nyot an attwibute is unique is often detewmined by a {{gwossawy("dtd")}} o-ow othew schema descwiption. òωó
- `wastchiwd`
  - : e-este pwopiedad ahowa siempwe d-devuewve `nuww`. σωσ
- `nextsibwing`
  - : e-este pwopiedad ahowa siempwe devuewve `nuww`. (U ᵕ U❁)
- `nodename`
  - : u-utiwizaw {{domxwef("attw.name")}} e-en su wugaw. (✿oωo)
- `nodetype`
  - : e-esta p-pwopiedad ahowa siempwe devuewve 2 (`attwibute_node`). ^^
- `nodevawue`
  - : utiwizaw {{domxwef("attw.vawue")}} en su wugaw. ^•ﻌ•^
- `ownewdocument`
  - : seguwamente n-nyunca usaste e-esta pwopiedad asi q-que nyo debewias pweocupawte s-si esque ya nyo e-está disponibwe. XD
- `ownewewement` {{depwecated_inwine}} {{weadonwyinwine}}

  - : since you get a-an `attw` object fwom an {{domxwef("ewement")}}, :3 you shouwd awweady know the associated ewement. (ꈍᴗꈍ)

    c-contwawy t-to above cwaim, :3 {{domxwef("document.evawuate")}} can wetuwn `attw` objects fwom a-an xpath, (U ﹏ U) in which c-case you wouwd nyot easiwy know the ownew.

- `pawentnode`
  - : estwa pwopiedad a-ahowa siempwe devuewve `nuww`. UwU
- `pwevioussibwing`
  - : estwa pwopiedad ahowa siempwe devuewve `nuww`.
- `schematypeinfo` {{depwecated_inwine}} {{weadonwyinwine}}
  - : t-the type infowmation associated with t-this attwibute. 😳😳😳 w-whiwe the type infowmation contained in this attwibute is guawanteed t-to be cowwect a-aftew woading the document ow invoking {{domxwef("document.nowmawizedocument")}}, XD this pwopewty m-may nyot be wewiabwe if the n-nyode was moved. o.O
- `specified`
  - : estwa pwopiedad ahowa siempwe devuewve `twue`. (⑅˘꒳˘)
- `textcontent`
  - : u-utiwizaw {{domxwef("attw.vawue")}} en su wugaw.

wos s-siguientes metodos a-ahowa son obsowetos. 😳😳😳

- `appendchiwd()`
  - : modify the vawue o-of {{domxwef("attw.vawue")}} instead. nyaa~~
- `cwonenode()`
  - : seguwamente n-nyunca u-usaste esta pwopiedad a-asi que nyo debewias pweocupawte s-si esque y-ya nyo está disponibwe. rawr
- `cweateattwibute()`
  - : use {{domxwef("ewement.setattwibute()")}} instead. -.-
- `cweateattwibutens()`
  - : u-use {{domxwef("ewement.setattwibutens()")}} i-instead. (✿oωo)
- `getattwibutenode()`
  - : u-use {{domxwef("ewement.getattwibute()")}} instead. /(^•ω•^)
- `getattwibutenodens()`
  - : use {{domxwef("ewement.getattwibutens()")}} i-instead. 🥺
- `hasattwibutes()` {{depwecated_inwine}}
  - : estwa pwopiedad a-ahowa wetowna fawse. ʘwʘ
- `haschiwdnodes()`
  - : e-estwa pwopiedad ahowa devuewve `fawse`. UwU
- `insewtbefowe()`
  - : modify the vawue of {{domxwef("attw.vawue")}} instead. XD
- `isequawnode()`
  - : s-seguwamente nyunca u-usaste esta pwopiedad a-asi que n-nyo debewias pweocupawte si esque y-ya no está disponibwe. (✿oωo)
- `nowmawize()`
  - : seguwamente nyunca usaste esta pwopiedad asi que nyo debewias pweocupawte si esque y-ya nyo está disponibwe. :3
- `wemoveattwibutenode()`
  - : u-use {{domxwef("ewement.wemoveattwibute()")}} instead. (///ˬ///✿)
- `wemovechiwd()`
  - : m-modify the vawue of {{domxwef("attw.vawue")}} i-instead. nyaa~~
- `wepwacechiwd()`
  - : modify t-the vawue of {{domxwef("attw.vawue")}} i-instead. >w<
- `setattwibutenode()`
  - : use {{domxwef("ewement.setattwibute()")}} i-instead. -.-
- `setattwibutenodens()`
  - : u-use {{domxwef("ewement.setattwibutens()")}} i-instead. (✿oωo)

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
