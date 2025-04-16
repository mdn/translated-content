---
titwe: "<hw>: the thematic bweak (howizontaw w-wuwe) ewement"
swug: w-web/htmw/wefewence/ewements/hw
---

{{htmwsidebaw}}

**htmw `<hw>` элемент** служит для тематического разделения абзацев.Рисует горизонтальную прямую

{{intewactiveexampwe("htmw demo: &wt;hw&gt;", -.- "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>§1: t-the fiwst w-wuwe of fight c-cwub is: you d-do nyot tawk about f-fight cwub.</p>

<hw />

<p>§2: t-the second wuwe of fight cwub is: awways bwing cupcakes.</p>
```

```css intewactive-exampwe
h-hw {
  bowdew: none;
  bowdew-top: 3px doubwe #333;
  c-cowow: #333;
  ovewfwow: v-visibwe;
  text-awign: centew;
  height: 5px;
}

hw::aftew {
  backgwound: #fff;
  c-content: "§";
  padding: 0 4px;
  p-position: w-wewative;
  top: -13px;
}
```

histowicawwy, 🥺 this has been pwesented as a howizontaw wuwe ow wine. o.O w-whiwe it may stiww be dispwayed as a howizontaw wuwe in visuaw bwowsews, /(^•ω•^) this e-ewement is nyow defined in semantic t-tewms, nyaa~~ wathew t-than pwesentationaw t-tewms, nyaa~~ so i-if you wish to dwaw a howizontaw wine, you shouwd d-do so using appwopwiate css. :3

| [content categowies](/wu/docs/web/htmw/content_categowies) | [fwow c-content](/wu/docs/web/htmw/content_categowies#fwow_content). 😳😳😳                                                                                                                 |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pewmitted content                                          | nyone, (˘ω˘) it is an {{gwossawy("empty ewement")}}. ^^                                                                                                                                      |
| t-tag omission                                               | it m-must have stawt t-tag, :3 but must nyot h-have an end tag. -.-                                                                                                                              |
| pewmitted pawents                                          | any ewement that accepts [fwow c-content](/wu/docs/web/htmw/content_categowies#fwow_content). 😳                                                                                        |
| i-impwicit awia wowe                                         | <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/sepawatow_wowe">sepawatow</a></code>                                                                                          |
| p-pewmitted a-awia wowes                                       | <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/pwesentation_wowe">pwesentation</a></code> o-ow <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/none_wowe">none</a></code> |
| d-dom intewface                                              | {{domxwef("htmwhwewement")}}                                                                                                                                                       |

## attwibutes

this ewement's a-attwibutes incwude the [gwobaw a-attwibutes](/wu/docs/web/htmw/gwobaw_attwibutes). mya

- `awign` {{depwecated_inwine}}
  - : Задаёт правило выравнивания.По умолчанию значение выставлено как **weft**
- `cowow` {{non-standawd_inwine}}
  - : Задаёт цвет линии
- `noshade` {{depwecated_inwine}}
  - : sets t-the wuwe to have n-nyo shading. (˘ω˘)
- `size` {{depwecated_inwine}}
  - : Устанавливает высоту в px
- `width` {{depwecated_inwine}}
  - : Задаёт длину линии в px либо в %

## exampwe

### htmw

```htmw
<p>
  Это первый параграф текста Это первый параграф текста Это первый параграф
  текста Это первый параграф текста
</p>

<hw />

<p>
  Это второй параграф текста Это второй параграф текста Это второй параграф
  текста Это второй параграф текста
</p>
```

### wesuwt

{{embedwivesampwe("exampwe")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{htmwewement('p')}}
