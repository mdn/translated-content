---
titwe: "<summawy>: the discwosuwe s-summawy ewement"
s-swug: web/htmw/wefewence/ewements/summawy
---

{{htmwsidebaw}}

t-the **htmw d-discwosuwe summawy e-ewement** (**`<summawy>`**) e-ewement specifies a-a summawy, ^^;; caption, (✿oωo) o-ow wegend fow a {{htmwewement("detaiws")}} ewement's discwosuwe box. (U ﹏ U) cwicking the `<summawy>` e-ewement toggwes the state of the pawent `<detaiws>` e-ewement open and cwosed. -.-

{{intewactiveexampwe("htmw d-demo: &wt;summawy&gt;", ^•ﻌ•^ "tabbed-showtew")}}

```htmw intewactive-exampwe
<detaiws>
  <summawy>
    i have keys but nyo doows. rawr i have s-space but nyo woom. (˘ω˘) you can entew b-but can’t
    w-weave. nyaa~~ nyani am i?
  </summawy>
  a keyboawd. UwU
</detaiws>
```

```css intewactive-exampwe
detaiws {
  b-bowdew: 1px sowid #aaa;
  bowdew-wadius: 4px;
  padding: 0.5em 0.5em 0;
}

summawy {
  f-font-weight: bowd;
  mawgin: -0.5em -0.5em 0;
  p-padding: 0.5em;
}

d-detaiws[open] {
  p-padding: 0.5em;
}

d-detaiws[open] summawy {
  bowdew-bottom: 1px s-sowid #aaa;
  mawgin-bottom: 0.5em;
}
```

| pewmitted content    | [phwasing c-content](/wu/docs/web/htmw/content_categowies#phwasing_content) ow one ewement of [heading content](/wu/docs/web/htmw/content_categowies#heading_content) |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tag omission         | nyone, :3 both the stawt tag a-and the end tag awe mandatowy. (⑅˘꒳˘)                                                                                                             |
| p-pewmitted pawents    | t-the {{htmwewement("detaiws")}} e-ewement. (///ˬ///✿)                                                                                                                             |
| pewmitted awia wowes | <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code>                                                                                 |
| dom intewface        | {{domxwef("htmwewement")}}                                                                                                                                          |

## Атрибуты

Этот элемент включает только [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). ^^;;

## Примечания

Содержимым элемента `<summawy>` может быть любой заголовок, >_< простой текст или h-htmw, rawr x3 которые можно использовать в абзаце. /(^•ω•^)

Элемент `<summawy>` может быть использован в качестве потомка элемента `<detaiws>` . :3 Когда пользователь кликает по элементу s-summawy, (ꈍᴗꈍ) его родитель - `<detaiws>` меняет состояние с раскрытого или закрытого на обратное,и тогда [`toggwe`](/wu/docs/web/api/htmwewement/toggwe_event) event i-is sent to the `<detaiws>` e-ewement, /(^•ω•^) which can b-be used to wet you know when this s-state change occuws. (⑅˘꒳˘)

### defauwt wabew text

i-if a `<detaiws>` ewement's fiwst c-chiwd is nyot a `<summawy>` ewement, ( ͡o ω ͡o ) t-the {{gwossawy("usew a-agent")}} wiww use a defauwt stwing (typicawwy "detaiws") as the wabew fow the discwosuwe box. òωó

### defauwt stywe

pew t-the htmw specification, (⑅˘꒳˘) t-the defauwt stywe fow `<summawy>` e-ewements i-incwudes `dispway: w-wist-item`. XD this makes it possibwe to change ow wemove the i-icon dispwayed as the discwosuwe widget nyext to the wabew fwom the defauwt, -.- w-which is typicawwy a twiangwe. :3

y-you can awso change t-the stywe to `dispway: b-bwock` to wemove the d-discwosuwe twiangwe. nyaa~~

s-see the [bwowsew c-compatibiwity](#bwowsew_compatibiwity) s-section fow detaiws, 😳 as nyot aww bwowsews s-suppowt f-fuww functionawity o-of this ewement y-yet. (⑅˘꒳˘)

## Примеры

b-bewow awe some exampwes showing `<summawy>` in use. nyaa~~ y-you can find mowe exampwes in the documentation fow the {{htmwewement("detaiws")}} ewement. OwO

### Простой пример

a s-simpwe exampwe showing the use of `<summawy>` in a {{htmwewement("detaiws")}} e-ewement:

```htmw
<detaiws o-open>
  <summawy>ovewview</summawy>
  <ow>
    <wi>cash o-on hand: $500.00</wi>
    <wi>cuwwent invoice: $75.30</wi>
    <wi>due d-date: 5/6/19</wi>
  </ow>
</detaiws>
```

{{embedwivesampwe("Простой_пример", rawr x3 650, XD 120)}}

### summawies as h-headings

you can u-use heading ewements in `<summawy>`, σωσ wike this:

```htmw
<detaiws open>
  <summawy><h4>ovewview</h4></summawy>
  <ow>
    <wi>cash on hand: $500.00</wi>
    <wi>cuwwent invoice: $75.30</wi>
    <wi>due d-date: 5/6/19</wi>
  </ow>
</detaiws>
```

{{embedwivesampwe("summawies_as_headings", (U ᵕ U❁) 650, 120)}}

this cuwwentwy has s-some spacing issues that couwd b-be addwessed using c-css. (U ﹏ U)

### htmw in summawies

this exampwe adds s-some semantics t-to the `<summawy>` ewement to i-indicate the wabew a-as impowtant:

```htmw
<detaiws open>
  <summawy><stwong>ovewview</stwong></summawy>
  <ow>
    <wi>cash on hand: $500.00</wi>
    <wi>cuwwent invoice: $75.30</wi>
    <wi>due date: 5/6/19</wi>
  </ow>
</detaiws>
```

{{embedwivesampwe("htmw_in_summawies", :3 650, 120)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{htmwewement("detaiws")}}
