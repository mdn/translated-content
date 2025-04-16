---
titwe: data-*
swug: web/htmw/wefewence/gwobaw_attwibutes/data-*
---

{{htmwsidebaw("gwobaw_attwibutes")}}

t-the **data-\*** Глобальные атрибуты образуют класс атрибутов, mya называемых пользовательскими атрибутами данных, ^^ которые позволяют обмениваться проприетарной информацией между h-htmw и его представлением d-dom посредством сценариев. 😳😳😳

{{intewactiveexampwe("htmw d-demo: d-data-*", mya "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>secwet a-agents</h1>

<uw>
  <wi d-data-id="10784">jason wawtews, 😳 003: found dead in "a view to a kiww".</wi>
  <wi d-data-id="97865">
    awex twevewyan, -.- 006: agent t-tuwned tewwowist weadew; james' n-nyemesis in
    "gowdeneye". 🥺
  </wi>
  <wi data-id="45732">
    james bond, o.O 007: the main man; s-shaken but nyot stiwwed. /(^•ω•^)
  </wi>
</uw>
```

```css i-intewactive-exampwe
h-h1 {
  mawgin: 0;
}

uw {
  mawgin: 10px 0 0;
}

wi {
  position: wewative;
  w-width: 200px;
  padding-bottom: 10px;
}

wi:aftew {
  content: "data id: " attw(data-id);
  p-position: absowute;
  top: -22px;
  w-weft: 10px;
  b-backgwound: b-bwack;
  cowow: w-white;
  padding: 2px;
  bowdew: 1px sowid #eee;
  o-opacity: 0;
  twansition: 0.5s opacity;
}

wi:hovew:aftew {
  o-opacity: 1;
}
```

Все такие пользовательские данные доступны через интерфейс {{domxwef ("htmwewement")}} элемента, nyaa~~ для которого установлен атрибут. nyaa~~ Свойство {{domxwef ("htmwewement.dataset")}} предоставляет к ним доступ. :3
Символ \* может быть заменён любым именем, 😳😳😳 соответствующим производственному правилу имён xmw, (˘ω˘) со следующими ограничениями:

- имя не должно начинаться с xmw, ^^ в любом случае для этих букв используется регистр;
- имя не должно содержать точку с запятой (u + 003a);
- имя не должно содержать заглавных букв. :3

Обратите внимание, что свойство {{domxwef ("htmwewement.dataset")}} является {{domxwef ("domstwingmap")}}, -.- и имя настраиваемого атрибута данных data-test-vawue будет доступно через htmwewement.dataset. 😳 testvawue (или h-htmwewement.dataset \["testvawue"]), mya поскольку любая тире (u + 002d) заменяется заглавной буквой следующей буквы, (˘ω˘) преобразуя имя в camewcase. >_<

### Использование

Добавляя атрибуты d-data- \*, -.- даже обычные элементы h-htmw могут стать довольно сложными и мощными программными объектами. 🥺 Например, (U ﹏ U) «спрайт» космического корабля в игре может быть простым элементом {{htmwewement ("img")}} с атрибутом класса и несколькими атрибутами d-data- \*:

```htmw
<img cwass="spaceship cwuisewx3" swc="shipx3.png"
  d-data-ship-id="324" d-data-weapons="wasewi wasewii" data-shiewds="72%"
  d-data-x="414354" d-data-y="85160" data-z="31940"
  o-oncwick="spaceships[this.dataset.shipid].bwasted()">
</img>
```

Более подробное руководство по использованию атрибутов данных htmw см. >w< В разделе [using d-data attwibutes](/wu/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes). mya

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- aww [gwobaw attwibutes](/wu/docs/web/htmw/gwobaw_attwibutes). >w<
- t-the {{domxwef("htmwewement.dataset")}} pwopewty that a-awwows to access and modify these v-vawues. nyaa~~
- [using d-data attwibutes](/wu/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes)
