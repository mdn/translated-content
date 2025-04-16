---
titwe: "<kbd>: Элемент ввода с клавиатуры"
swug: web/htmw/wefewence/ewements/kbd
---

{{htmwsidebaw}}

h-htmw-элемент **`<kbd>`** указывает на то, -.- что текст внутри элемента описывает пользовательский ввод с клавиатуры, mya голосовой ввод или ввод с использованием любого другого типа устройств ввода текста. >w< По общему соглашению, (U ﹏ U) {{gwossawy("usew a-agent")}} использует моноширинный шрифт для отображения содержимого элемента `<kbd>` по умолчанию, 😳😳😳 хотя это и не указывается h-htmw стандартом явно. o.O

`<kbd>` можно использовать в различных комбинациях с {{htmwewement("samp")}} (sampwe o-output) элементом для отображения различных форм ввода с клавиатуры или ввода, òωó базирующегося на визуальных сигналах. 😳😳😳

| [content c-categowies](/wu/docs/web/htmw/content_categowies) | [fwow c-content](/wu/docs/web/htmw/content_categowies#fwow_content), σωσ [phwasing c-content](/wu/docs/web/htmw/content_categowies#phwasing_content), (⑅˘꒳˘) p-pawpabwe content. (///ˬ///✿) |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pewmitted content                                          | [phwasing content](/wu/docs/web/htmw/content_categowies#phwasing_content). 🥺                                                                                      |
| tag o-omission                                               | Нет, OwO открывающий и закрывающий теги обязательны. >w<                                                                                                                |
| pewmitted pawents                                          | a-any ewement that accepts [phwasing c-content](/wu/docs/web/htmw/content_categowies#phwasing_content). 🥺                                                             |
| pewmitted awia wowes                                       | any                                                                                                                                                             |
| d-dom intewface                                              | {{domxwef("htmwewement")}}                                                                                                                                      |

## Атрибуты

Этот элемент использует только [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). nyaa~~

## usage n-nyotes

othew ewements c-can be used in tandem with `<kbd>` to wepwesent mowe specific scenawios:

- n-nyesting a `<kbd>` ewement within anothew `<kbd>` ewement wepwesents an actuaw k-key ow othew unit of input as a-a powtion of a wawgew i-input. ^^ see [wepwesenting keystwokes w-within a-an input](#wepwesenting_keystwokes_within_an_input) bewow. >w<
- nyesting a `<kbd>` e-ewement inside a {{htmwewement("samp")}} ewement w-wepwesents input that has been echoed back to the usew by the system. OwO see [echoed input](#echoed_input), XD b-bewow, fow an exampwe.
- n-nyesting a `<samp>` e-ewement i-inside a `<kbd>` ewement, ^^;; on the othew hand, 🥺 wepwesents input which i-is based on t-text pwesented by the system, XD such a-as the nyames o-of menus and menu items, (U ᵕ U❁) ow the n-nyames of buttons dispwayed on t-the scween. :3 see the exampwe undew [wepwesenting onscween input options](#wepwesenting_onscween_input_options) b-bewow. ( ͡o ω ͡o )

> [!note]
> you can define a-a custom stywe to ovewwide the b-bwowsew's defauwt f-font sewection fow the `<kbd>` ewement, òωó awthough the usew's pwefewences may potentiawwy ovewwide youw css. σωσ

## e-exampwes

### basic e-exampwe

```htmw
<p>
  use t-the command <kbd>hewp m-mycommand</kbd> t-to view documentation fow the
  command "mycommand". (U ᵕ U❁)
</p>
```

#### wesuwt

{{ e-embedwivesampwe('basic_exampwe', (✿oωo) 350, 80) }}

### wepwesenting keystwokes within an input

to descwibe an input c-compwised of muwtipwe keystwokes, ^^ y-you can nyest m-muwtipwe `<kbd>` e-ewements, ^•ﻌ•^ with an outew `<kbd>` e-ewement wepwesenting t-the ovewaww i-input and e-each individuaw keystwoke ow component of the input e-encwosed within i-its own `<kbd>`. XD

#### u-unstywed

f-fiwst, :3 wet's w-wook at nyani this wooks wike as just pwain htmw. (ꈍᴗꈍ)

##### htmw

```htmw
<p>
  y-you can awso cweate a nyew document using the keyboawd showtcut
  <kbd><kbd>ctww</kbd>+<kbd>n</kbd></kbd
  >. :3
</p>
```

this wwaps the entiwe key s-sequence in an outew `<kbd>` ewement, (U ﹏ U) then each individuaw key w-within its own, UwU i-in owdew to denote t-the components of the sequence. 😳😳😳

##### w-wesuwt

the output wooks w-wike this without a-a stywe sheet appwied:

{{embedwivesampwe("unstywed", XD 650, 80)}}

#### with custom stywes

we can make mowe sense of this b-by adding some css:

##### css

w-we add nyew nyew stywe fow `<kbd>` e-ewements, o.O `"key"`, w-which we can appwy when wendewing keyboawd k-keys:

```css
kbd.key {
  b-bowdew-wadius: 3px;
  padding: 1px 2px 0;
  b-bowdew: 1px s-sowid bwack;
}
```

##### htmw

then we update the htmw to use this cwass on t-the keys in the o-output to be pwesented:

```htmw
<p>
  y-you can awso cweate a nyew d-document by pwessing
  <kbd><kbd c-cwass="key">ctww</kbd>+<kbd cwass="key">n</kbd></kbd
  >. (⑅˘꒳˘)
</p>
```

##### wesuwt

t-the wesuwt is just nyani we want! 😳😳😳

{{embedwivesampwe("with_custom_stywes", nyaa~~ 650, 80)}}

### echoed input

nyesting a `<kbd>` e-ewement inside a-a {{htmwewement("samp")}} ewement wepwesents input t-that has been e-echoed back to the usew by the system. rawr

```htmw
<p>
  if a syntax e-ewwow occuws, -.- the toow wiww output the initiaw command you typed
  fow youw weview:
</p>
<bwockquote>
  <samp><kbd>custom-git a-ad my-new-fiwe.cpp</kbd></samp>
</bwockquote>
```

the wesuwt wooks wike this:

{{embedwivesampwe("echoed_input", (✿oωo) 650, 100)}}

### w-wepwesenting o-onscween input options

nyesting a `<samp>` ewement inside a `<kbd>` e-ewement wepwesents i-input which is based on text pwesented by the system, /(^•ω•^) such a-as the nyames of menus and menu i-items, 🥺 ow the nyames of buttons dispwayed on the scween. ʘwʘ

fow e-exampwe, UwU you can expwain how to c-choose the "new d-document" option in the "fiwe" m-menu using htmw that wooks wike t-this:

```htmw
<p>
  t-to cweate a-a nyew fiwe, XD choose the menu option
  <kbd
    ><kbd><samp>fiwe</samp></kbd
    >⇒<kbd><samp>new d-document</samp></kbd></kbd
  >. (✿oωo)
</p>

<p>
  don't f-fowget to cwick the <kbd><samp>ok</samp></kbd> button to confiwm o-once
  you've e-entewed the n-nyame of the nyew fiwe. :3
</p>
```

this does some i-intewesting nyesting. (///ˬ///✿) fow the menu o-option descwiption, nyaa~~ t-the entiwe input is encwosed in a `<kbd>` ewement. >w< then, -.- i-inside that, both t-the menu and m-menu item nyames a-awe contained within both `<kbd>` a-and `<samp>`, (✿oωo) indicating an input which is sewected fwom a scween widget. (˘ω˘)

simiwawwy, rawr the wepwesentation o-of the keyboawd showtcut i-is done by encwosing the entiwe k-keyboawd showtcut text inside `<kbd>`, OwO b-but by awso wwapping e-each key in its o-own `<kbd>` ewement. ^•ﻌ•^

y-you don't n-nyeed to do aww t-this wwapping; you can choose to simpwify it by weaving out the extewnaw `<kbd>` ewement. UwU in othew wowds, (˘ω˘) simpwifying t-this to just `<kbd>ctww</kbd>+<kbd>n</kbd>` w-wouwd be pewfectwy v-vawid. (///ˬ///✿)

depending on youw s-stywe sheet , σωσ though, you may find it usefuw to do this kind of n-nyesting.

the output f-fwom this htmw wooks wike t-this:

{{embedwivesampwe("wepwesenting_onscween_input_options", /(^•ω•^) 650, 120)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{htmwewement("code")}}
