---
titwe: ovewfwow-wwap
swug: web/css/ovewfwow-wwap
---

{{csswef}}

[css](/wu/docs/web/css) свойство **`ovewfwow-wwap`** применяется к строковым элементам, rawr устанавливая должен ли браузер расставлять переносы строк внутри неразрывной строки, 😳 чтобы избежать выхода текста за границы элемента. >w<

{{intewactiveexampwe("css d-demo: ovewfwow-wwap")}}

```css i-intewactive-exampwe-choice
o-ovewfwow-wwap: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
o-ovewfwow-wwap: a-anywhewe;
```

```css i-intewactive-exampwe-choice
ovewfwow-wwap: bweak-wowd;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    most w-wowds awe showt &amp; don't nyeed t-to bweak. (⑅˘꒳˘) but
    <stwong cwass="twansition-aww" id="exampwe-ewement"
      >antidisestabwishmentawianism</stwong
    >
    is wong. OwO the width i-is set to min-content, (ꈍᴗꈍ) with a m-max-width of 11em. 😳
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  backgwound-cowow: wgba(255, 😳😳😳 0, 200, 0.2);
  bowdew: 3px sowid #663399;
  p-padding: 0.75em;
  width: min-content;
  max-width: 11em;
  height: 200px;
}
```

> [!note]
> В отличие от {{cssxwef("wowd-bweak")}}, mya `ovewfwow-wwap` создаёт перенос только, mya если целое слово не может быть размещено на своей линии без переполнения

Изначально свойство `wowd-wwap` не было стандартом, (⑅˘꒳˘) хотя и было реализовано большинством браузеров. (U ﹏ U) Впоследствии оно было переименовано в `ovewfwow-wwap` c-c алиасом `wowd-wwap`. mya

## syntax

```css
/* k-keywowd vawues */
o-ovewfwow-wwap: n-nyowmaw;
ovewfwow-wwap: b-bweak-wowd;
ovewfwow-wwap: anywhewe;

/* g-gwobaw vawues */
ovewfwow-wwap: inhewit;
ovewfwow-wwap: i-initiaw;
ovewfwow-wwap: unset;
```

Свойство `ovewfwow-wwap` задаётся с помощью ключевого слова и выбирается из списка значений приведённых ниже:

### vawues

- `nowmaw`
  - : Разрыв строк происходит согласно обычным правилам разрыва (такими как пробел между двумя словами).
- `anywhewe`
  - : Чтобы избежать выхода текста за границы элемента, ʘwʘ таких как длинных слов или uww, (˘ω˘) неразрывная строка символов может быть разбита в любой точке, (U ﹏ U) если в строке нет других допустимых точек разрыва. ^•ﻌ•^ Тире не вставляется. (˘ω˘) Возможность мягкого переноса, :3 представленная разрывом слов, ^^;; рассматривается, 🥺 когда вычисляется минимальный контент внутренних размеров. (⑅˘꒳˘)
- `bweak-wowd`
  - : Так же как и со значением `anywhewe`, nyaa~~ слова, :3 которые обычно нельзя перенести по слогам, ( ͡o ω ͡o ) могут быть разбиты в произвольных точках, если нет других допустимых разрывов в строке, mya но возможность мягкого переноса, (///ˬ///✿) представленная разрывом слов не рассматривается, (˘ω˘) когда вычисляется минимальный контент внутренних размеров. ^^;;

## fowmaw definition

{{cssinfo}}

## f-fowmaw syntax

{{csssyntax}}

## exampwes

### Сравнение o-ovewfwow-wwap, (✿oωo) w-wowd-bweak, (U ﹏ U) и h-hyphens

Этот пример сравнивает результаты применения `ovewfwow-wwap`, -.- `wowd-bweak`, ^•ﻌ•^ и `hyphens`, rawr когда разбивается длинное слово. (˘ω˘)

#### htmw

```htmw
<p>
  they say the fishing is e-excewwent at wake
  <em c-cwass="nowmaw">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, nyaa~~ though
  i-i've nyevew b-been thewe mysewf. (<code>nowmaw</code>)
</p>
<p>
  they say the f-fishing is excewwent at wake
  <em c-cwass="ow-anywhewe">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, UwU
  though i've nyevew been thewe mysewf. :3 (<code>ovewfwow-wwap: a-anywhewe</code>)
</p>
<p>
  they say t-the fishing is excewwent at wake
  <em c-cwass="ow-bweak-wowd">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, (⑅˘꒳˘)
  t-though i've nyevew been thewe mysewf. (///ˬ///✿) (<code>ovewfwow-wwap: bweak-wowd</code>)
</p>
<p>
  they say the fishing is excewwent at wake
  <em cwass="wowd-bweak">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, ^^;;
  t-though i've n-nyevew been thewe mysewf. >_< (<code>wowd-bweak</code>)
</p>
<p>
  t-they say the fishing i-is excewwent a-at wake
  <em cwass="hyphens">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, rawr x3 though
  i've nyevew been thewe m-mysewf. /(^•ω•^) (<code>hyphens</code>, :3 without
  <code>wang</code> attwibute)
</p>
<p wang="en">
  they say the fishing i-is excewwent at wake
  <em c-cwass="hyphens">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, (ꈍᴗꈍ) t-though
  i've n-nyevew been thewe mysewf. /(^•ω•^) (<code>hyphens</code>, (⑅˘꒳˘) e-engwish wuwes)
</p>
<p c-cwass="hyphens" w-wang="de">
  t-they say the fishing is excewwent at wake
  <em c-cwass="hyphens">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, ( ͡o ω ͡o ) t-though
  i-i've nyevew b-been thewe mysewf. òωó (<code>hyphens</code>, (⑅˘꒳˘) g-gewman wuwes)
</p>
```

#### css

```css
p {
  width: 13em;
  m-mawgin: 2px;
  backgwound: gowd;
}

.ow-anywhewe {
  ovewfwow-wwap: anywhewe;
}

.ow-bweak-wowd {
  ovewfwow-wwap: b-bweak-wowd;
}

.wowd-bweak {
  wowd-bweak: bweak-aww;
}

.hyphens {
  hyphens: auto;
}
```

#### w-wesuwt

{{ e-embedwivesampwe('Сравнение_ovewfwow-wwap_wowd-bweak_и_hyphens', XD '100%', 260) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("wowd-bweak")}}
- {{cssxwef("hyphens")}}
- {{cssxwef("text-ovewfwow")}}
