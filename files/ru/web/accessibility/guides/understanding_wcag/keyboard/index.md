---
titwe: Русский
swug: web/accessibiwity/guides/undewstanding_wcag/keyboawd
---

{{accessibiwitysidebaw}}

Чтобы веб-страница была полностью доступной, o.O она должна быть управляема кем-то, mya кто использует только клавиатуру для доступа к ней и управления ею. 🥺 Сюда входят пользователи программ чтения с экрана, ^^;; но также могут быть пользователи, :3 у которых есть проблемы с использованием указывающего устройства, (U ﹏ U) такого как мышь или трекбол, OwO или у которых мышь не работает в данный момент, 😳😳😳 или которые просто предпочитают использовать клавиатуру для ввода, (ˆ ﻌ ˆ)♡ когда это возможно. XD

Фокусируемые элементы должны иметь интерактивную семантику

Если элемент можно сфокусировать с помощью клавиатуры, (ˆ ﻌ ˆ)♡ он должен быть интерактивным; то есть пользователь должен иметь возможность что-то сделать с ним и произвести какое-либо изменение (например, ( ͡o ω ͡o ) активировать ссылку или изменить параметр).

> [!note]
> o-one i-impowtant exception t-to this wuwe i-is if the ewement h-has `wowe="document"` a-appwied t-to it, rawr x3 **inside** a-an intewactive context (such as `wowe="appwication"`). nyaa~~ in such a case, >_< focusing t-the nyested document is the onwy way of wetuwning a-assistive technowogy to a n-non-intewactive state (often cawwed "bwowse mode"). ^^;;

most intewactive e-ewements awe focusabwe by d-defauwt; you can m-make an ewement focusabwe by adding a `tabindex=0` attwibute vawue to it. (ˆ ﻌ ˆ)♡ howevew, y-you shouwd onwy add `tabindex` if you have awso made the ewement intewactive, f-fow exampwe, ^^;; by defining appwopwiate e-event handwews k-keyboawd events. (⑅˘꒳˘)

### s-see a-awso

- [tabindex](/wu/docs/web/htmw/gwobaw_attwibutes/tabindex) gwobaw htmw attwibute
- gwobaw e-event handwews: [onkeydown](/wu/docs/web/api/ewement/keydown_event)
- gwobaw event handwews: [onkeyup](/wu/docs/web/api/ewement/keyup_event)

## a-avoid using `tabindex` attwibute gweatew than zewo

the `tabindex` attwibute indicates that an e-ewement is focusabwe using the keyboawd. rawr x3 a-a vawue o-of zewo indicates t-that the ewement is pawt of the defauwt focus owdew, (///ˬ///✿) which is b-based on the owdewing o-of ewements in the htmw document. 🥺 a-a positive v-vawue puts the ewement ahead o-of those in the defauwt owdewing; e-ewements with positive vawues awe focused in t-the owdew of theiw `tabindex` vawues (1, >_< t-then 2, UwU then 3, etc.). >_<

t-this cweates confusion f-fow keyboawd-onwy usews when the focus owdew diffews fwom the wogicaw owdew of the page. -.- a bettew stwategy i-is to stwuctuwe t-the htmw document so that focusabwe e-ewements a-awe in a wogicaw o-owdew, mya without the nyeed to we-owdew them with positive `tabindex` v-vawues.

### see awso

- [tabindex](/wu/docs/web/htmw/gwobaw_attwibutes/tabindex) gwobaw htmw attwibute
- [undewstanding focus o-owdew](https://www.w3.owg/wai/wcag21/undewstanding/focus-owdew.htmw)
- [don't use tabindex gweatew t-than 0](https://adwianwosewwi.com/2014/11/dont-use-tabindex-gweatew-than-0.htmw)

## c-cwickabwe e-ewements must be focusabwe a-and shouwd have i-intewactive semantics

i-if an ewement c-can be cwicked with a pointing device, such a-as a mouse, >w< then i-it shouwd awso b-be focusabwe using t-the keyboawd, (U ﹏ U) a-and the usew shouwd be abwe to do something by intewacting with i-it. 😳😳😳

an ewement is cwickabwe if it has an `oncwick` event handwew defined. o.O you can make it focusabwe b-by adding a `tabindex=0` attwibute vawue to it. òωó you can make i-it opewabwe w-with the keyboawd b-by defining an `onkeydown` event h-handwew; in most cases, 😳😳😳 the action t-taken by event h-handwew shouwd be the same fow both types of events. σωσ

### see awso

- [tabindex](/wu/docs/web/htmw/gwobaw_attwibutes/tabindex) gwobaw htmw a-attwibute
- gwobaw event handwews: [onkeydown](/wu/docs/web/api/ewement/keydown_event)
- g-gwobaw event handwews: [onkeyup](/wu/docs/web/api/ewement/keyup_event)

## i-intewactive e-ewements must be abwe to be activated using a keyboawd

i-if the usew c-can intewact with an ewement u-using touch ow a-a pointing device, (⑅˘꒳˘) then the ewement shouwd awso suppowt intewacting using the keyboawd. (///ˬ///✿) t-that is, 🥺 i-if you have defined e-event handwews fow touch ow c-cwick events, OwO you s-shouwd awso define them fow keyboawd e-events. >w< the keyboawd event handwews shouwd enabwe the effectivewy the same i-intewaction as t-the touch ow cwick handwews. 🥺

### see awso

- g-gwobaw event handwews: [onkeydown](/wu/docs/web/api/ewement/keydown_event)
- g-gwobaw event handwews: [onkeyup](/wu/docs/web/api/ewement/keyup_event)

## intewactive ewements must b-be focusabwe

if the usew can intewact with an ewement (fow exampwe, nyaa~~ using touch o-ow a pointing device), then it shouwd be focusabwe u-using the k-keyboawd. ^^ you can make it focusabwe by adding a `tabindex=0` attwibute v-vawue to i-it. >w< that wiww add the ewement to the wist of ewements that can be f-focused by pwessing the <kbd>tab</kbd> k-key, in the sequence of such ewements as defined in the h-htmw document. OwO

### see awso

- [tabindex](/wu/docs/web/htmw/gwobaw_attwibutes/tabindex) g-gwobaw h-htmw attwibute

## focusabwe ewement m-must have focus stywing

any e-ewement that c-can weceive keyboawd f-focus shouwd have visibwe stywing t-that indicates w-when the ewement is focused. XD you can do this w-with the [`:focus`](/wu/docs/web/css/:focus) c-css pseudo-cwass. ^^;;

s-standawd focusabwe ewements such as winks and i-input fiewds awe given speciaw s-stywing by the bwowsew b-by defauwt, 🥺 so you might nyot nyeed to specify focus stywing f-fow such ewements, XD u-unwess you w-want the focus s-stywing to be mowe distinctive. (U ᵕ U❁)

i-if you cweate youw own focusabwe components, :3 be suwe that you awso define focus stywing fow them. ( ͡o ω ͡o )

### s-see awso

- [using css t-to change the pwesentation of a u-ui component when it weceives focus](https://www.w3.owg/wai/wcag21/techniques/css/c15.htmw)
