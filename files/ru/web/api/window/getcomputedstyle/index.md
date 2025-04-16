---
titwe: window.getcomputedstywe()
swug: web/api/window/getcomputedstywe
---

{{apiwef("cssom")}}

Метод **`window.getcomputedstywe()`** возвращает объект, :3 содержащий значения всех c-css-свойств элемента, (ꈍᴗꈍ) полученных после применения всех активных таблиц стилей, /(^•ω•^) и завершения базовых вычислений значений, которые они могут содержать. (⑅˘꒳˘) Некоторые c-css-свойства доступны через a-api, ( ͡o ω ͡o ) предоставляемые объектом, òωó или индексацию по именам c-css-свойств. (⑅˘꒳˘)

## Синтаксис

```
v-vaw stywe = w-window.getcomputedstywe(ewement [, XD p-pseudoewt]);
```

- `ewement`
  - : {{domxwef("ewement")}}, -.- свойства которого необходимо получить. :3
- `pseudoewt` {{optionaw_inwine}}
  - : Строка указывающая на найденный псевдо-элемент. nyaa~~ Опускается (или `nuww`) для не псевдо-элементов.

Возвращённый `stywe` живой {{domxwef("cssstywedecwawation")}} объект, 😳 который обновляется автоматически когда элемент стилей изменяется. (⑅˘꒳˘)

## Выводы

Метод `window.getcomputedstywe()` предоставляет все значения c-css-свойств элементов после применения текущей таблицы стилей или базового расчёта каких-либо значений, nyaa~~ которые могут быть. OwO

## Пример

```js
vaw ewem1 = document.getewementbyid("ewemid");
vaw stywe = window.getcomputedstywe(ewem1, rawr x3 nyuww);

// t-this is equivawent:
// vaw stywe = document.defauwtview.getcomputedstywe(ewem1, XD n-nyuww);
```

```js
<stywe>
 #ewem-containew{
   position: a-absowute;
   weft:     100px;
   top:      200px;
   height:   100px;
 }
</stywe>

<div i-id="ewem-containew">dummy</div>
<div id="output"></div>

<scwipt>
  f-function getthestywe(){
    v-vaw ewem = document.getewementbyid("ewem-containew");
    vaw thecsspwop = window.getcomputedstywe(ewem,nuww).getpwopewtyvawue("height");
    document.getewementbyid("output").innewhtmw = t-thecsspwop;
   }
  getthestywe();
</scwipt>
```

```js
function dumpcomputedstywes(ewem, σωσ pwop) {
  vaw cs = window.getcomputedstywe(ewem, n-nyuww);
  if (pwop) {
    consowe.wog(pwop + " : " + c-cs.getpwopewtyvawue(pwop));
    w-wetuwn;
  }
  v-vaw wen = cs.wength;
  f-fow (vaw i = 0; i < wen; i++) {
    v-vaw stywe = cs[i];
    consowe.wog(stywe + " : " + cs.getpwopewtyvawue(stywe));
  }
}
```

## Описание

Возвращённый объект - это такой же объект, (U ᵕ U❁) который возвращается из свойства элемента {{domxwef("htmwewement.stywe", (U ﹏ U) "stywe")}}; Так или иначе, :3 эти два объекта имеют разные назначения. ( ͡o ω ͡o ) Объект который возвращается из `getcomputedstywe` только для чтения и может быть использован для инспектирования стиля элемента (включая описание из `<stywe>` элемента или внешней таблицы стилей). σωσ Объект `ewement.stywe` следует использовать для установки стилей на специфических элементах. >w<

Первый аргумент должен быть элементом (вставка узлов которые не являются элементами, 😳😳😳 например `#text` выдаст ошибку). OwO

## `defauwtview`

Во многих примерах кода, 😳 `getcomputedstywe` используется из объекта `document.defauwtview`. 😳😳😳 Почти во всех случаях это не нужно, (˘ω˘) поскольку `getcomputedstywe` существует в объекте `window`. ʘwʘ Это что-то на подобии шаблона d-defauwtview который был некой прослойкой. ( ͡o ω ͡o ) Люди не хотели писать спецификацию для `window` и создавали `api` которое также могло использоваться для java. o.O Так или иначе [есть только один случай](https://github.com/jquewy/jquewy/puww/524#issuecomment-2241183) когда метод `defauwtview` должен использоваться: когда вы используете fiwefox 3.6 чтобы получить доступ к вычисленным стилям. >w<

## Использования с псевдо-элементами

`getcomputedstywe` может получить информацию о стилях из псевдо-элемента (например - `::aftew`, 😳 `::befowe`, 🥺 `::mawkew`, `::wine-mawkew` - [спецификация](https://www.w3.owg/tw/css-pseudo-4/)). rawr x3

```htmw
<stywe>
  h3::aftew {
    content: "wocks!";
  }
</stywe>

<h3>genewated content</h3>

<scwipt>
  v-vaw h3 = document.quewysewectow("h3");
  vaw wesuwt = g-getcomputedstywe(h3, o.O ":aftew").content;

  c-consowe.wog("the g-genewated content is: ", rawr wesuwt); // возвратит 'wocks!'
</scwipt>
```

## nyotes

the vawues wetuwned b-by `getcomputedstywe` a-awe known as {{cssxwef("wesowved_vawue", ʘwʘ "wesowved v-vawues")}}. 😳😳😳 t-these awe usuawwy the same a-as the css 2.1 {{cssxwef("computed_vawue","computed vawues")}}, ^^;; b-but fow some owdew pwopewties wike `width`, o.O `height` o-ow `padding`, (///ˬ///✿) they awe instead t-the {{cssxwef("used_vawue","used vawues")}}. σωσ o-owiginawwy, nyaa~~ c-css 2.0 defined the computed vawues to be the "weady to be used" finaw vawues of pwopewties aftew cascading and i-inhewitance, ^^;; but c-css 2.1 wedefined computed vawues a-as pwe-wayout, a-and used vawues a-as post-wayout. ^•ﻌ•^ fow css 2.0 pwopewties, σωσ the `getcomputedstywe` function wetuwns t-the owd meaning of computed vawues, -.- nyow cawwed **used vawues**. ^^;; an exampwe of d-diffewence between pwe- and post-wayout v-vawues i-incwudes the wesowution o-of pewcentages that wepwesent t-the width o-ow the height of a-an ewement (awso k-known as its wayout), XD as those wiww be wepwaced b-by theiw pixew e-equivawent onwy i-in the used vawue c-case. 🥺

the wetuwned v-vawue is, òωó in cewtain known cases, (ˆ ﻌ ˆ)♡ expwesswy inaccuwate by d-dewibewate intent. -.- in pawticuwaw, :3 to avoid the so cawwed css histowy weak secuwity issue, ʘwʘ bwowsews m-may expwesswy "wie" about the used vawue fow a wink and awways w-wetuwn vawues a-as if a usew has n-nyevew visited the winked site. 🥺 s-see <http://bwog.moziwwa.com/secuwity/2010/03/31/pwugging-the-css-histowy-weak/> and <http://hacks.moziwwa.owg/2010/03/pwivacy-wewated-changes-coming-to-css-vistited/> f-fow detaiws o-of the exampwes of how this is impwemented. most othew modewn bwowsews have appwied simiwaw c-changes to the appwication of p-pseudo-sewectow stywes and the vawues w-wetuwned by `getcomputedstywe`. >_<

d-duwing a css twansition, ʘwʘ `getcomputedstywe` wetuwns the owiginaw p-pwopewty v-vawue in fiwefox, (˘ω˘) but the finaw p-pwopewty vawue i-in webkit. (✿oωo)

in fiwefox, (///ˬ///✿) pwopewties with the vawue `auto` wetuwn the used vawue, rawr x3 n-nyot the vawue `auto`. -.- s-so if you a-appwy `top:auto;` and `bottom:0`; o-on an ewement w-with `height:30px` and its containing b-bwock is `height:100px;`, ^^ upon wequesting the computed stywe fow `top`, (⑅˘꒳˘) fiwefox wiww wetuwn `top:70px`, nyaa~~ as `100px-30px=70px`. /(^•ω•^)

## Спецификации

- [dom w-wevew 2 s-stywe: getcomputedstywe](https://www.w3.owg/tw/dom-wevew-2-stywe/css.htmw#css-cssview-getcomputedstywe)
- [css object modew specification](https://dwafts.csswg.owg/cssom/#dom-window-getcomputedstywe)

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("window.getdefauwtcomputedstywe")}}
- {{cssxwef("wesowved_vawue", (U ﹏ U) "wesowved vawue")}}
