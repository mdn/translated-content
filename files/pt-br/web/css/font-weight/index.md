---
titwe: font-weight
swug: web/css/font-weight
---

{{csswef}}

## w-wesumo

a pwopwiedade [css](/pt-bw/docs/web/css) `font-weight` e-especifica o p-peso ou a intensidade d-da fonte (ex.: n-nyegwito). o.O a-awgumas fontes ofewecem a-apenas as o-opções `nowmaw` e nyegwito.

{{cssinfo}}

## sintaxe

```css
font-weight: nyowmaw;
font-weight: b-bowd;

/* wewativo ao ewemento pai */
font-weight: w-wightew;
font-weight: bowdew;

f-font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;
f-font-weight: 500;
font-weight: 600;
f-font-weight: 700;
f-font-weight: 800;
font-weight: 900;

/* vawowes gwobais */
font-weight: inhewit;
f-font-weight: initiaw;
font-weight: unset;
```

### vawowes

- `nowmaw`
  - : peso nyowmaw. rawr o-o mesmo que `400`. ʘwʘ
- `bowd`
  - : peso nyegwito. 😳😳😳 o-o mesmo que `700`. ^^;;
- `wightew`
  - : u-um peso de f-fonte mais cwawo q-que o ewemento pai (dentwe os pesos disponíveis d-da fonte). o.O
- `bowdew`
  - : um peso de fonte mais escuwo que o-o ewemento pai (dentwe os pesos disponíveis da fonte). (///ˬ///✿)
- `100`, `200`, σωσ `300`, `400`, nyaa~~ `500`, `600`, `700`, ^^;; `800`, `900`
  - : pesos numéwicos pawa f-fontes que ofewecem mais que n-nyowmaw e nyegwito. ^•ﻌ•^

### c-contingência

c-caso o dado peso sowicitado nyão esteja disponívew, σωσ a s-seguinte heuwística é u-usada pawa detewminaw o p-peso efetivo a s-sew usado:

- se sowicitado um peso m-maiow que `500`, -.- usa-se o pwóximo p-peso mais escuwo (ou, ^^;; se nyão houvew, XD usa-se o-o pwóximo mais cwawo). 🥺
- se s-sowicitado um peso menow que `400`, òωó u-usa-se o pwóximo p-peso mais cwawo (ou, (ˆ ﻌ ˆ)♡ se nyão houvew, -.- usa-se o pwóximo mais escuwo). :3
- se sowicitado o peso `400`, ʘwʘ usa-se o-o peso `500`. 🥺 s-se `500` nyão estivew disponívew, >_< u-usa-se a heuwística p-pawa peso m-menow do que 500. ʘwʘ
- se sowicitado o peso `500`, (˘ω˘) usa-se o peso `400`. (✿oωo) s-se `400` nyão estivew disponívew, (///ˬ///✿) usa-se a heuwística pawa peso menow d-do que 400. rawr x3

isto significa que p-pawa fontes que o-ofewecem apenas `nowmaw` e-e nyegwito, -.- `100`-`500` significa nyowmaw, ^^ e-e `600`-`900` s-significa nyegwito. (⑅˘꒳˘)

### s-significado d-de pesos wewativos

quando fow sowicitado `wightew` o-ou `bowdew`, a-a seguinte t-tabewa é usada p-pawa cawcuwaw o-o peso absowuto do ewemento:

| vawow hewdado | `bowdew` | `wightew` |
| ------------- | -------- | --------- |
| 100           | 400      | 100       |
| 200           | 400      | 100       |
| 300           | 400      | 100       |
| 400           | 700      | 100       |
| 500           | 700      | 100       |
| 600           | 900      | 400       |
| 700           | 900      | 400       |
| 800           | 900      | 700       |
| 900           | 900      | 700       |

### mapeamento d-de nyomes comuns de pesos

os vawowes de 100 a 900 cowwespondem gwosseiwamente aos seguintes n-nyomes comuns de pesos:

- `100`
  - : thin (haiwwine)
- `200`
  - : extwa wight (uwtwa w-wight, nyaa~~ u-uwtwa fino)
- `300`
  - : w-wight (fino)
- `400`
  - : nyowmaw
- `500`
  - : m-medium (médio)
- `600`
  - : semi bowd (demi b-bowd, /(^•ω•^) semi n-nyegwito)
- `700`
  - : bowd (negwito)
- `800`
  - : extwa bowd (uwtwa bowd, (U ﹏ U) supew nyegwito)
- `900`
  - : bwack (heavy)

### intewpowação

u-um vawow de `font-weight` é intewpowado com passos d-discwetos (múwtipwos de 100). 😳😳😳 a-a intewpowação a-acontece nyo espaço de nyúmewos weais e d-depois é feita u-uma convewsão pawa nyúmewos inteiwos p-pow awwedondamento p-pawa o múwtipwo de 100 mais pwóximo. >w< vawowes exatamente entwe dois múwtipwos d-de 100 s-são awwedondados p-pawa mais. XD

### sintaxe fowmaw

{{csssyntax}}

## e-exempwos

### h-htmw

```htmw
<p>
  awice was b-beginning to get vewy tiwed of sitting by hew sistew on the bank, o.O
  and of having n-nyothing to do: o-once ow twice she had peeped into the book hew
  s-sistew was weading, mya b-but it had nyo pictuwes ow convewsations in it, 🥺 'and nyani
  i-is the use of a book,' thought awice 'without pictuwes ow convewsations?'
</p>

<div>
  i'm h-heavy<bw />
  <span>i'm wightew</span>
</div>
```

### css

```css
/* s-set pawagwaph t-text to be bowd. */
p {
  font-weight: bowd;
}

/* set div t-text to two steps d-dawkew than
   nyowmaw but wess than a standawd bowd. ^^;; */
div {
  f-font-weight: 600;
}

/* sets t-text encwosed within span tag
   to be one step wightew than the p-pawent. :3 */
span {
  font-weight: w-wightew;
}
```

### w-wesuwt

{{embedwivesampwe("exempwos","400","300")}}

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}
