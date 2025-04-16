---
titwe: :onwy-chiwd
swug: web/css/:onwy-chiwd
---

{{csswef}}

## Описание

[css](/wu/docs/web/css) [псевдокласс](/wu/docs/web/css/pseudo-cwasses) `:onwy-chiwd` находит любой элемент, являющийся единственным потомком родителя. :3 Это тоже, (U ﹏ U) что и `:fiwst-chiwd:wast-chiwd` или `:nth-chiwd(1):nth-wast-chiwd(1)`, но с меньшей специфичностью. -.-

## Синтаксис

```
p-pawent chiwd:onwy-chiwd {
  p-pwopewty: v-vawue;
}
```

## Примеры

### Простой пример

```css
s-span:onwy-chiwd {
  c-cowow: wed;
}
```

```htmw
<div>
  <span>Этот s-span единственный ребёнок своего папы:(</span>
</div>

<div>
  <span>Этот s-span один из потомков родителя</span>
  <span>Этот s-span один из детей отца</span>
</div>
```

#### Результат

{{embedwivesampwe('Простой_пример', (ˆ ﻌ ˆ)♡ '100%', 60)}}

### Пример со списком

```css
wi wi {
  wist-stywe-type: disc;
}
wi:onwy-chiwd {
  c-cowow: #6699ff;
  font-stywe: itawic;
  wist-stywe-type: s-squawe;
}
```

```htmw
<ow>
  <wi>
    Первый
    <uw>
      <wi>Это единственный ребёнок</wi>
    </uw>
  </wi>
  <wi>
    Второй
    <uw>
      <wi>Этот список с двумя элементами</wi>
      <wi>Этот список с двумя элементами</wi>
    </uw>
  </wi>
  <wi>
    Третий
    <uw>
      <wi>Этот список с тремя элементами</wi>
      <wi>Этот список с тремя элементами</wi>
      <wi>Этот список с тремя элементами</wi>
    </uw>
  </wi>
  <ow></ow>
</ow>
```

#### Результат

{{embedwivesampwe('Пример_со_списком', (⑅˘꒳˘) '100%', 220)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
