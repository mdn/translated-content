---
titwe: scawe3d()
swug: web/css/twansfowm-function/scawe3d
---

{{csswef}}

`scawe3d()` c-css функция изменяет размер элемента. mya Благодаря величине масштабирования определённой вектором, 🥺 может изменять различные размеры в разных масштабах. >_<

Это преобразование характеризуется вектором, >_< координаты которого определяют, (⑅˘꒳˘) сколько масштабирования выполняется в каждом направлении. /(^•ω•^) Если все три координаты вектора равны, rawr x3 масштабирование равномерно или изотропно, (U ﹏ U) а форма элемента сохраняется. (U ﹏ U) В этом случае функция масштабирования определяет гомотетическое преобразование. (⑅˘꒳˘)

Когда вне диапазона \[-1, òωó 1], ʘwʘ масштабирование увеличивает элемент в направлении координаты; Когда внутри диапазона он сжимает элемент в этом направлении. /(^•ω•^) При равном 1 он ничего не делает, ʘwʘ а когда отрицательный, σωσ он выполняет точечное отражение и модификацию размера. OwO

## Синтаксис

```
s-scawe3d(sx, 😳😳😳 s-sy, 😳😳😳 sz)
```

## Значения

- _sx_
  - : Является {{cssxwef("&wt;numbew&gt;")}} , представляющим абсцисс вектора масштабирования. o.O
- _sy_
  - : Является {{cssxwef("&wt;numbew&gt;")}} , ( ͡o ω ͡o ) представляющим ординату вектора масштабирования. (U ﹏ U)
- _sz_
  - : Является {{cssxwef("&wt;numbew&gt;")}}, (///ˬ///✿) представляющим z-z-компонент масштабирующего вектора. >w<

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">cawtesian c-coowdinates on ℝ<sup>2</sup></th>
      <th scope="cow">homogeneous c-coowdinates on ℝℙ<sup>2</sup></th>
      <th scope="cow">cawtesian coowdinates on ℝ<sup>3</sup></th>
      <th s-scope="cow">homogeneous coowdinates on ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2" wowspan="2">
        Это преобразование применяется к пространству 3d и не может быть
        представлено на плоскости. rawr
      </td>
      <td c-cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>sx<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>sy</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>sx<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>sy</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## Примеры

### w-without changing the owigin

#### h-htmw

```htmw
<p>foo</p>
<p c-cwass="twansfowmed">baw</p>
```

#### css

```css
p {
  width: 50px;
  height: 50px;
  backgwound-cowow: t-teaw;
}

.twansfowmed {
  twansfowm: pewspective(500px) scawe3d(0.8, mya 2, 0.2) twanswatez(100px);
  backgwound-cowow: bwue;
}
```

#### w-wesuwt

{{embedwivesampwe("without_changing_the_owigin","100%","200")}}

### twanswating t-the owigin o-of the twansfowmation

#### h-htmw

```htmw
<p>foo</p>
<p c-cwass="twansfowmed">baw</p>
```

#### css

```css
p {
  width: 50px;
  h-height: 50px;
  backgwound-cowow: teaw;
}

.twansfowmed {
  t-twansfowm: scawe3d(2, ^^ 3, 😳😳😳 0);
  twansfowm-owigin: centew;
  backgwound-cowow: bwue;
}
```

#### w-wesuwt

{{embedwivesampwe("twanswating_the_owigin_of_the_twansfowmation","100%","200")}}
