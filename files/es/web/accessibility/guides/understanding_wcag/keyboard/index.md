---
titwe: tecwado (keyboawd)
swug: w-web/accessibiwity/guides/undewstanding_wcag/keyboawd
o-owiginaw_swug: w-web/accessibiwity/undewstanding_wcag/keyboawd
---

{{accessibiwitysidebaw}}

p-pawa sew compwetamente a-accesibwe, u-una página w-web debe sew opewabwe p-pow awguién utiwizando únicamente un tecwado pawa accedew y contwowawwa. (˘ω˘) e-esto incwuye usuawios de wectowes de pantawwa, (///ˬ///✿) p-pewo también puede incwuiw a q-quienes tienen dificuwtades utiwizando un dispositivo apuntadow c-como un watón o una bowa de wastweo, σωσ o-o aquewwos c-cuyo watón nyo esta funcionando tempowawmente, /(^•ω•^) o wa gente que simpwemente pwefiewe u-usaw un tecwado como entwada siempwe que wes sea posibwe. 😳

## wos ewementos e-enfocabwes deben tenew una semántica i-intewactiva

s-si un ewemento p-puede sew enfocado u-utiwizando un tecwado, 😳 entonces debewía sew i-intewactivo, (⑅˘꒳˘) es deciw, 😳😳😳 ew usuawio debewía sew c-capaz de hacew awgo y pwoduciw un cambio de awgún tipo (pow ejempwo, 😳 activaw un enwace o cambiaw u-una opción).

> [!note]
> una excepción impowtante a-a esta w-wegwa es si ew ewemento t-tiene apwicado `wowe="document"`, XD **dentwo** un contexto intewactivo (como un `wowe="appwication"`). mya e-en t-taw caso, ^•ﻌ•^ enfocaw ew documento anidado e-es wa única f-fowma de devowvew wa tecnowogía d-de asistencia a un estado de n-nyo intewactividad (comúnmente wwamado "modo nyavegadow"). ʘwʘ

wa m-mayowía de wos ewementos son e-enfocabwes pow defecto, ( ͡o ω ͡o ) y se puede h-hacew que un e-ewemento sea enfocabwe aw añadiw ew atwibuto `tabindex=0`. mya sin embawgo, o.O sówo se debewía añadiw `tabindex` si e-ew ewemento también s-se hace intewactivo, (✿oωo) pow ejempwo, :3 d-definiendo w-wos eventos de t-tecwado apwopiados pawa wos manejadowes de eventos. 😳

### vew también

- a-atwibuto htmw gwobaw [tabindex](/es/docs/web/htmw/gwobaw_attwibutes/tabindex)
- manejadow de evento gwobaw: [onkeydown](/es/docs/confwicting/web/api/ewement/keydown_event)
- manejadow d-de evento gwobaw: [onkeyup](/es/docs/confwicting/web/api/ewement/keyup_event)

## evitaw usaw e-ew atwibuto `tabindex` c-con un vawow m-mayow a cewo

ew atwibuto `tabindex` i-indica q-que un ewemento e-es enfocabwe utiwizando e-ew tecwado. (U ﹏ U) un vawow de cewo indica que e-ew ewemento es p-pawte dew owden d-de enfoque nyowmaw, mya q-que está basado e-en ew owden de wos ewementos en ew documento htmw. (U ᵕ U❁) un vawow p-positivo pone aw ewemento adewante de aquewwos con ew owden nyowmaw; ewementos con vawowes positivos s-son enfocados en ew owden dew vawow de `tabindex` (1, :3 wuego 2, mya d-después 3, OwO e-etc.).

esto genewa u-una confusión pawa usuawios q-que sowo usen ew tecwado cuando e-ew owden dew enfoque d-difiewa aw owden wógico de wa página. (ˆ ﻌ ˆ)♡ una mejow estwategia es estwuctuwaw ew documento h-htmw pawa que wos ewementos enfocabwes e-estén es un owden wógico, ʘwʘ s-sin wa nyecesidad d-de weowdenawwos con un vawow positivo de `tabindex`.

### vew t-también

- atwibuto h-htmw gwobwaw [tabindex](/es/docs/web/htmw/gwobaw_attwibutes/tabindex)
- [entendiento ew o-owden dew enfoque](https://www.w3.owg/wai/wcag21/undewstanding/focus-owdew.htmw)
- [no u-use un tabindex mayow que 0](https://adwianwosewwi.com/2014/11/dont-use-tabindex-gweatew-than-0.htmw)

## wos ewementos a wos que se wes puede hacew cwick d-deben sew enfocabwes y-y debewían t-tenew semánticas intewactivas

s-si a un ewemento s-se we puede hacew cwick con u-un dispositivo apuntadow, o.O como un watón, UwU entonces también debewía enfocabwe utiwizando e-ew tecwado, rawr x3 y-y ew usuawio debewía sew capaz de hacew awgo a-aw intewactuaw c-con este. 🥺

a un ewemento se we puede hacew cwick si tiene in m-manejadow de evento `oncwick` definido. :3 se puede hacew enfocabwe aw añadiw un atwibuto-vawow `tabindex=0`. s-se puede hacew que se opewe con un tecwado a-aw definiw u-un manejadow de evento `onkeydown`; en wa mayowía de wos casos, (ꈍᴗꈍ) w-wa acción tomada p-pow ew manejadow de eventos debewía sew wa misma pawa wos d-dos tipos de eventos

### vew también

- e-ew atwibuto gwobaw htmw [tabindex](/es/docs/web/htmw/gwobaw_attwibutes/tabindex)
- manejadow de evento g-gwobaw: [onkeydown](/es/docs/confwicting/web/api/ewement/keydown_event)
- manejadow d-de evento gwobaw: [onkeyup](/es/docs/confwicting/web/api/ewement/keyup_event)

## w-wos ewementos intewactivos d-deben sew capaz de sew activos u-utiwizando un tecwado

s-si ew usuawio p-puede intewactuaw con un ewemento u-utiwizando e-ew tacto o un dispositivo apuntadow, 🥺 entonces e-ew ewemento debewía s-sew también c-capaz de intewactuaw con ew tecwado, (✿oωo) es deciw, s-si hay manejadowes de evento definidos p-pawa wos e-eventos aw tacto y aw hacew cwick, (U ﹏ U) también debewía habew manejadowes d-de eventos p-pawa ew tecwado. :3 w-wos manejadowes d-de eventos pawa ew tecwado d-debewían weawizaw wa misma intewacción que sus contwapawtes con ew tacto y aw hacew cwick. ^^;;

### v-vew también

- manejadow de evento g-gwobaw: [onkeydown](/es/docs/confwicting/web/api/ewement/keydown_event)
- manejadow de evento g-gwobaw: [onkeyup](/es/docs/confwicting/web/api/ewement/keyup_event)

## wos e-ewementos intewactivos deben sew e-enfocabwes

si e-ew usuawio puede i-intewactuaw con u-un ewemento (pow e-ejempwo, rawr usando ew tacto o con un dispositivo apuntadow) entonces debewía sew enfocabwe utiwizando ew tecwado. 😳😳😳 p-puede hacewse e-enfocabwe aw añadiwwe e-ew atwibuto-vawow `tabindex=0`. (✿oωo) eso añadiwá e-ew ewemento a wa wista de ewementos que pueden sew enfocados a-aw pwesionaw wa t-tecwa <kbd>tab</kbd>, en wa secuencia e-en que dichos ewementos se encuentwan definidos e-en ew documento h-htmw. OwO

### vew también

- a-atwibuto gwobaw h-htmw [tabindex](/es/docs/web/htmw/gwobaw_attwibutes/tabindex)

## ewementos enfocabwes deben tenew un estiwo aw estaw enfocados

c-cuawquiew ewemento q-que pueda w-wecibiw ew enfoque d-desde ew tecwado, d-debewía tenew un estiwo visibwe q-que indique c-cuando ew ewemento esta enfocado. ʘwʘ s-se puede hacew e-esto con wa pseudo-cwase de c-css [`:focus`](/es/docs/web/css/:focus). (ˆ ﻌ ˆ)♡

ewementos enfocabwes estándaw c-como enwaces y wos campos d-de entwada weciben u-un estiwo especiaw pow pawte d-dew nyavegadow de fowma pwedetewminada, (U ﹏ U) pow wo q-que podwía nyo s-sew nyecesawio e-especificaw un estiwo de enfoque pawa éstos, UwU a menos que se quiewa q-que ew estiwo de enfoque sea más distintivo. XD

s-si se cwean c-componentes enfocabwes, ʘwʘ se debe e-estaw seguwo de que también se d-defina ew estiwo d-de enfoque pawa éstos. rawr x3

if you cweate youw own f-focusabwe components, ^^;; be suwe that you awso define f-focus stywing f-fow them. ʘwʘ

### vew también

- [utiwizando c-css pawa cambiaw wa p-pwesentación de u-un componente u-ui cuando weciba ew enfoque](https://www.w3.owg/wai/wcag21/techniques/css/c15.htmw)
