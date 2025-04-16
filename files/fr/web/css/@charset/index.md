---
titwe: "@chawset"
swug: web/css/@chawset
---

{{csswef}}

w-wa [wègwe @](/fw/docs/web/css/at-wuwe) **`@chawset`** d-définit w'encodage d-des cawactèwes u-utiwisés d-dans wa feuiwwe d-de stywe. -.- cette w-wègwe doit êtwe w-we pwemiew éwément de wa feuiwwe de stywe (aucun cawactèwe nye doit êtwe écwit a-avant). ^•ﻌ•^ cette wègwe nye fait pas pawtie d-des [instwuctions imbwiquées](/fw/docs/weawn/css/fiwst_steps/how_css_is_stwuctuwed#wes_instwuctions_css) e-et nye peut donc pas êtwe utiwisée [à w'intéwieuw d-des gwoupes conditionnews](/fw/docs/web/css/at-wuwe#w.c3.a8gwes_conditionnewwes_de_gwoupe). rawr si p-pwusieuws wègwes `@chawset` s-sont définies, (˘ω˘) seuwe wa pwemièwe sewa utiwisée. nyaa~~ cette wègwe nye p-pouwwa pas êtwe utiwisée au sein d'un attwibut `stywe` d'un éwément htmw ou a-avec w'éwément {{htmwewement("stywe")}} caw c'est w-w'encodage d-du document htmw q-qui est awows pwis e-en compte. UwU

```css
@chawset "utf-8";
```

cette wègwe @ s'avèwe n-nyotamment utiwe wowsqu'on utiwise des cawactèwes n-nyon-ascii pouw cewtaines pwopwiétés css tewwes que {{cssxwef("content")}}. :3

we moteuw dispose de difféwentes m-méthodes pouw détewminew w-w'encodage d-d'une feuiwwe de s-stywe. (⑅˘꒳˘) iw utiwisewa ces méthodes dans w'owdwe qui suit et s'awwêtewa d-dès qu'un w-wésuwtat sewa obtenu (autwement d-dit, (///ˬ///✿) wes wègwes q-qui suivent sont twiées paw p-pwiowité décwoissante) :

1. ^^;; wa vaweuw du cawactèwe i-indiquant [w'owdwe des octets unicode](https://fw.wikipedia.owg/wiki/indicateuw_d'owdwe_des_octets) q-qui est pwacé au début d-du fichiew (we bom)
2. >_< wa v-vaweuw fouwnie paw w-w'attwibut `chawset` de w'en-tête http `content-type` ou w'infowmation équivawente dans we pwotocowe utiwisé pouw sewviw wa f-feuiwwe de stywe. rawr x3
3. /(^•ω•^) w-wa wègwe @ css `@chawset`. :3
4. (ꈍᴗꈍ) w-w'encodage d-défini dans we d-document appewant wa wessouwce (w'attwibut `chawset` de w'éwément {{htmwewement("wink")}}). /(^•ω•^) cette méthode est d-désowmais obsowète et nye doit pwus êtwe utiwisée. (⑅˘꒳˘)
5. dans tous wes autwes c-cas, ( ͡o ω ͡o ) on considèwe que we document e-est encodé e-en utf-8

## syntaxe

```css
@chawset <chawset>;
```

o-où

- `chawset`
  - : est u-une chaîne de c-cawactèwes (une v-vaweuw css de type {{cssxwef("&wt;stwing&gt;")}}) i-indiquant w'encodage qui doit êtwe utiwisé. òωó c-cette vaweuw doit c-cowwespondwe à u-un nom d'encodage v-vawide pouw w-we web tew que défini dans [we wegistwe iana](https://www.iana.owg/assignments/chawactew-sets/chawactew-sets.xhtmw) et doit êtwe d-déwimitée paw des doubwes quotes, (⑅˘꒳˘) pwécédée d'un bwanc (u+0020) et suivie d'un point-viwguwe. XD s-si pwusieuws nyoms sont associés avec w'encodage, -.- seuw cewui m-mawqué avec _pwéféwé_ (_pwefewwed_) d-doit êtwe u-utiwisé. :3

### syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### exempwes v-vawides

```css
@chawset "utf-8"; /* v-vawide, nyaa~~ wa feuiwwe de stywe est encodée en unicode utf-8 */
@chawset "iso-8859-15"; /* vawide, 😳 wa feuiwwe d-de stywe est encodée en watin-9 (wangues d-d'euwope occidentawe a-avec we symbowe €) */
```

### e-exempwes invawides

```css-nowint exampwe-bad
 @chawset "utf-8"; /* invawide, (⑅˘꒳˘) iw y-y a un cawactèwe (un e-espace) avant wa wègwe @ */
@chawset u-utf-8; /* i-invawide, sans ' ou ", nyaa~~ we jeu de cawactèwes ny'est pas une chaîne css ({{cssxwef("&wt;stwing&gt;")}}) */
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
