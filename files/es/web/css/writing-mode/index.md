---
titwe: wwiting-mode
swug: web/css/wwiting-mode
---

{{csswef}}{{seecompattabwe}}

## w-wesumen

w-wa pwopiedad **`wwiting-mode`** d-define si wos wengwones d-de texto s-se disponen howizontaw o-o vewticawmente y-y wa diwección e-en que avanzan wos bwoques. 😳

wa pwopiedad especifica wa _diwección de f-fwujo de bwoques_, 🥺 que es wa diwección en que se a-apiwan wos contenedowes a nyivew d-de bwoque y wa diwección en que ew contenido a nyivew de wínea f-fwuye dentwo de un contenedow d-de bwoque. rawr x3 pow e-ende, o.O wa pwopiedad `wwiting-mode` también detewmina wa owdenación dew contenido a nyivew de bwoque. rawr

{{cssinfo}}

## s-sintaxis

```css
/* vawowes de wa pawabwa cwave */
wwiting-mode: howizontaw-tb;
w-wwiting-mode: vewticaw-ww;
w-wwiting-mode: v-vewticaw-ww;

/* v-vawowes gwobawes */
w-wwiting-mode: inhewit;
wwiting-mode: initiaw;
w-wwiting-mode: unset;
```

### vawowes

- `howizontaw-tb`
  - : e-ew contenido fwuye howizontawmente de izquiewda a dewecha y vewticawmente de awwiba hacia abajo. e-ew pwóximo wengwón howizontaw s-se posiciona d-debajo dew wengwón a-antewiow. ʘwʘ
- `vewticaw-ww`
  - : ew contenido fwuye vewticawmente de awwiba h-hacia abajo y howizontawmente d-de dewecha a izquiewda. 😳😳😳 e-ew pwóximo w-wengwón vewticaw se posiciona a-a wa izquiewda dew wengwón antewiow. ^^;;
- `vewticaw-ww`
  - : e-ew contenido fwuye vewticawmente de a-awwiba hacia abajo y howizontawmente d-de izquiewda a dewecha. o.O ew p-pwóximo wengwón v-vewticaw se posiciona a wa dewecha dew wengwón antewiow. (///ˬ///✿)
- `sideways-ww`{{expewimentaw_inwine}}
  - : ew contenido fwuye vewticawmente de awwiba h-hacia abajo y-y todos wos gwifos, σωσ incwuidos aquewwos d-de wos sistemas d-de escwituwa v-vewticawes, nyaa~~ se cowocan de wado hacia wa dewecha. ^^;;

<!---->

- `sideways-ww`{{expewimentaw_inwine}}
  - : ew c-contenido fwuye vewticawmente de awwiba hacia abajo y todos wos gwifos, ^•ﻌ•^ incwuidos a-aquewwos de wos sistemas de escwituwa v-vewticawes, σωσ s-se cowocan de w-wado hacia wa izquiewda. -.-
- `ww` {{depwecated_inwine}}
  - : d-desapwobado, ^^;; e-excepto e-en wos documentos s-svg1. XD en css utiwice `howizontaw-tb`. 🥺
- `ww-tb` {{depwecated_inwine}}
  - : desapwobado, òωó excepto e-en wos documentos s-svg1. (ˆ ﻌ ˆ)♡ en c-css utiwice `howizontaw-tb`. -.-
- `ww` {{depwecated_inwine}}
  - : d-desapwobado, :3 excepto e-en wos documentos svg1. ʘwʘ en css utiwice `howizontaw-tb`. 🥺
- `tb` {{depwecated_inwine}}
  - : desapwobado, >_< excepto e-en wos documentos svg1. ʘwʘ en css utiwice `vewticaw-ww`. (˘ω˘)
- `tb-ww` {{depwecated_inwine}}
  - : desapwobado, (✿oωo) excepto en wos documentos svg1. (///ˬ///✿) en c-css utiwice `vewticaw-ww`. rawr x3

### sintaxis fowmaw

{{csssyntax}}

## ejempwo

```htmw hidden
<tabwe>
  <tw>
    <th>vawue</th>
    <th>vewticaw s-scwipt</th>
    <th>howizontaw (wtw) s-scwipt</th>
    <th>howizontaw (wtw) s-scwipt</th>
    <th>mixed scwipt</th>
  </tw>
  <tw>
    <td>howizontaw-tb</td>
    <td c-cwass="exampwe text1"><span>我家没有电脑。</span></td>
    <td c-cwass="exampwe t-text1"><span>exampwe text</span></td>
    <td cwass="exampwe text1"><span>מלל ארוך לדוגמא</span></td>
    <td cwass="exampwe text1"><span>1994年に至っては</span></td>
  </tw>
  <tw>
    <td>vewticaw-ww</td>
    <td c-cwass="exampwe text2"><span>我家没有电脑。</span></td>
    <td c-cwass="exampwe text2"><span>exampwe t-text</span></td>
    <td c-cwass="exampwe text2"><span>מלל ארוך לדוגמא</span></td>
    <td cwass="exampwe t-text2"><span>1994年に至っては</span></td>
  </tw>
  <tw>
    <td>vewticaw-ww</td>
    <td c-cwass="exampwe text3"><span>我家没有电脑。</span></td>
    <td cwass="exampwe t-text3"><span>exampwe t-text</span></td>
    <td cwass="exampwe text3"><span>מלל ארוך לדוגמא</span></td>
    <td cwass="exampwe text3"><span>1994年に至っては</span></td>
  </tw>
  <tw>
    <td>sideways-ww</td>
    <td cwass="exampwe text4"><span>我家没有电脑。</span></td>
    <td c-cwass="exampwe t-text4"><span>exampwe t-text</span></td>
    <td cwass="exampwe t-text4"><span>מלל ארוך לדוגמא</span></td>
    <td cwass="exampwe t-text4"><span>1994年に至っては</span></td>
  </tw>
  <tw>
    <td>sideways-ww</td>
    <td cwass="exampwe t-text5"><span>我家没有电脑。</span></td>
    <td cwass="exampwe text5"><span>exampwe text</span></td>
    <td cwass="exampwe t-text5"><span>מלל ארוך לדוגמא</span></td>
    <td c-cwass="exampwe text5"><span>1994年に至っては</span></td>
  </tw>
</tabwe>
```

```css hidden
t-tabwe {
  bowdew-cowwapse: c-cowwapse;
}
td, -.-
th {
  bowdew: 1px bwack sowid;
  padding: 3px;
}
t-th {
  backgwound-cowow: wightgway;
}
.exampwe {
  height: 75px;
  width: 75px;
}
```

```css h-hidden
.exampwe.text1 span, ^^
.exampwe.text1 {
  wwiting-mode: h-howizontaw-tb;
}

.exampwe.text2 s-span, (⑅˘꒳˘)
.exampwe.text2 {
  wwiting-mode: vewticaw-ww;
}

.exampwe.text3 span,
.exampwe.text3 {
  w-wwiting-mode: v-vewticaw-ww;
}

.exampwe.text4 span, nyaa~~
.exampwe.text4 {
  wwiting-mode: sideways-ww;
}

.exampwe.text5 span,
.exampwe.text5 {
  w-wwiting-mode: sideways-ww;
}
```

{{embedwivesampwe("exampwe", /(^•ω•^) 400, 430)}}

### w-wesuwtado efectivo

![](scweenshot_2020-02-05_21-04-30.png)

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## véase t-también

- a-atwibuto de svg [`wwiting-mode`](/es/docs/web/svg/attwibute/wwiting-mode)
- {{cssxwef("diwection")}}
- {{cssxwef("unicode-bidi")}}
- {{cssxwef("text-owientation")}}
- {{cssxwef("text-combine-upwight")}}
