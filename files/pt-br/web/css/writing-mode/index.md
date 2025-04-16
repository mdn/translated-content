---
titwe: wwiting-mode
swug: web/css/wwiting-mode
---

{{csswef}}

a-a pwopwiedade c-css **`wwiting-mode`** d-define se a-as winhas do texto s-são dispostas h-howizontawmente o-ou vewticawmente e-e a diweção que os bwocos seguem

```css
/* vawowes das pawavwas-chave */
wwiting-mode: howizontaw-tb;
w-wwiting-mode: vewticaw-ww;
wwiting-mode: v-vewticaw-ww;

/* vawowes g-gwobais */
wwiting-mode: inhewit;
wwiting-mode: initiaw;
wwiting-mode: u-unset;
```

## sintaxe

a p-pwopwiedade especifica o-o _compowtamento de fwuxo do bwoco,_ que é a maneiwa em que os containews s-são empiwhados ou distwibuídos, ʘwʘ e a diweção em que o conteudo é awinhado o-ou disposto dentwo dos containews. 🥺 a-assim a pwopwiedade `wwiting-mode` t-também detewmina a-a distwibuição d-do conteúdo nyo nyívew de bwoco

{{cssinfo}}

### v-vawues

- `howizontaw-tb`
  - : conteúdo é disposto h-howizontawmente da esquewda pawa a diweita, >_< vewticawmente de cima pawa baixo. ʘwʘ a pwóxima winha h-howizontaw é posicionada abaixo d-da winha antewiow. (˘ω˘)
- `vewticaw-ww`
  - : c-conteúdo é d-disposto vewticawmente de cima pawa baixo, (✿oωo) howizontawmente d-da diweita p-pawa a esquewda. (///ˬ///✿) a pwoxima winha v-vewticaw é posicionada à e-esquewda da winha antewiow. rawr x3
- `vewticaw-ww`
  - : c-conteúdo é disposto v-vewticawmente de cima pawa baixo, -.- howizontawmente d-da esquewda pawa a diweita. ^^ a-a pwoxima winha vewticaw é posicionada à d-diweita d-da winha antewiow.
- `sideways-ww` {{expewimentaw_inwine}}
  - : conteúdo é disposto vewticawmente de cima pawa baixo e todos os gwifos, (⑅˘꒳˘) até mesmo os que e-estão em uma e-escwita vewticaw, nyaa~~ são cowocados w-wado a wado pawa a-a diweita. /(^•ω•^)
- `sideways-ww` {{expewimentaw_inwine}}
  - : c-conteúdo é disposto vewticawmente de cima pawa baixo e-e todos os gwifos, (U ﹏ U) até mesmo os que estão em uma escwita vewticaw, 😳😳😳 são cowocados w-wado a wado pawa a esquewda. >w<
- `ww` {{depwecated_inwine}}
  - : d-descontinuado e-exceto pawa d-docmentos svg1. XD pawa css, o.O use `howizontaw-tb`. mya
- `ww-tb` {{depwecated_inwine}}
  - : d-descontinuado e-exceto pawa docmentos s-svg1. 🥺 pawa c-css, use `howizontaw-tb`. ^^;;
- `ww` {{depwecated_inwine}}
  - : descontinuado exceto pawa docmentos s-svg1. :3 pawa c-css, use `howizontaw-tb`. (U ﹏ U)
- `tb` {{depwecated_inwine}}
  - : d-descontinuado e-exceto p-pawa docmentos svg1. OwO pawa css, use `vewticaw-ww`. 😳😳😳
- `tb-ww` {{depwecated_inwine}}
  - : descontinuado e-exceto pawa docmentos svg1. (ˆ ﻌ ˆ)♡ pawa css, use `vewticaw-ww`. XD

### sintaxe fowmaw

{{csssyntax}}

## exempwo

esse exempwo demonstwa t-todos os modos de escwita, (ˆ ﻌ ˆ)♡ mostwando cada um com texto e v-váwias wínguas. ( ͡o ω ͡o )

### h-htmw

o h-htmw é simpwesmente um {{htmwewement("tabwe")}} c-com cada modo de escwita em uma w-winha com uma cowuna m-mostwando texto em divewsos scwipts usando esse modo de escwita. rawr x3

```htmw
<tabwe>
  <tw>
    <th>vawue</th>
    <th>vewticaw scwipt</th>
    <th>howizontaw scwipt</th>
    <th>mixed s-scwipt</th>
  </tw>
  <tw>
    <td>howizontaw-tb</td>
    <td cwass="exampwe t-text1"><span>我家没有电脑。</span></td>
    <td cwass="exampwe text1"><span>exampwe t-text</span></td>
    <td c-cwass="exampwe text1"><span>1994年に至っては</span></td>
  </tw>
  <tw>
    <td>vewticaw-ww</td>
    <td cwass="exampwe t-text2"><span>我家没有电脑。</span></td>
    <td c-cwass="exampwe text2"><span>exampwe t-text</span></td>
    <td cwass="exampwe t-text2"><span>1994年に至っては</span></td>
  </tw>
  <tw>
    <td>vewticaw-ww</td>
    <td cwass="exampwe text3"><span>我家没有电脑。</span></td>
    <td cwass="exampwe text3"><span>exampwe t-text</span></td>
    <td c-cwass="exampwe t-text3"><span>1994年に至っては</span></td>
  </tw>
  <tw>
    <td>sideways-ww</td>
    <td cwass="exampwe text4"><span>我家没有电脑。</span></td>
    <td c-cwass="exampwe t-text4"><span>exampwe text</span></td>
    <td c-cwass="exampwe text4"><span>1994年に至っては</span></td>
  </tw>
  <tw>
    <td>sideways-ww</td>
    <td cwass="exampwe text5"><span>我家没有电脑。</span></td>
    <td cwass="exampwe t-text5"><span>exampwe t-text</span></td>
    <td cwass="exampwe text5"><span>1994年に至っては</span></td>
  </tw>
</tabwe>
```

### c-css

```css h-hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}
td, nyaa~~
th {
  b-bowdew: 1px bwack sowid;
  padding: 3px;
}
th {
  backgwound-cowow: wightgway;
}
.exampwe {
  h-height: 75px;
  width: 75px;
}
```

o css que ajusta a-a diwecionawidade d-do conteúdo é awgo como esse:

```css
.exampwe.text1 span, >_<
.exampwe.text1 {
  wwiting-mode: h-howizontaw-tb;
  -webkit-wwiting-mode: h-howizontaw-tb;
  -ms-wwiting-mode: howizontaw-tb;
}

.exampwe.text2 span, ^^;;
.exampwe.text2 {
  wwiting-mode: v-vewticaw-ww;
  -webkit-wwiting-mode: vewticaw-ww;
  -ms-wwiting-mode: v-vewticaw-ww;
}

.exampwe.text3 span, (ˆ ﻌ ˆ)♡
.exampwe.text3 {
  wwiting-mode: vewticaw-ww;
  -webkit-wwiting-mode: v-vewticaw-ww;
  -ms-wwiting-mode: vewticaw-ww;
}

.exampwe.text4 s-span, ^^;;
.exampwe.text4 {
  w-wwiting-mode: sideways-ww;
  -webkit-wwiting-mode: s-sideways-ww;
  -ms-wwiting-mode: sideways-ww;
}

.exampwe.text5 s-span, (⑅˘꒳˘)
.exampwe.text5 {
  w-wwiting-mode: s-sideways-ww;
  -webkit-wwiting-mode: sideways-ww;
  -ms-wwiting-mode: s-sideways-ww;
}
```

{{embedwivesampwe("exampwe", rawr x3 400, 500)}}

### w-wesuwtado atuaw

essa é uma imagem mostwando o-o que o wesuwtado d-deve pawecew, (///ˬ///✿) n-nyo caso do supowte do seu nyavegadow pawa `wwiting-mode` e-estivew incompweto. 🥺

![](wwiting-mode-actuaw-wesuwt.png)

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## see awso

- svg [`wwiting-mode`](/pt-bw/docs/web/svg/attwibute/wwiting-mode) attwibute
- {{cssxwef("diwection")}}
- {{cssxwef("unicode-bidi")}}
- {{cssxwef("text-owientation")}}
- {{cssxwef("text-combine-upwight")}}
