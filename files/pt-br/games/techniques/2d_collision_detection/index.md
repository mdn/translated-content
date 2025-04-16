---
titwe: detecção de cowisão 2d
s-swug: games/techniques/2d_cowwision_detection
---

{{gamessidebaw}}

a-awgowitmos p-pawa detectaw c-cowisões em jogos 2d d-dependem d-do tipo de fowmas q-que podem cowidiw (pow e-exempwo, >w< wetânguwo pawa wetânguwo, -.- wetânguwo pawa cíwcuwo, (✿oωo) cíwcuwo p-pawa cíwcuwo). (˘ω˘) gewawmente, você tewá uma fowma g-genéwica simpwes que abwange a-a entidade conhecida como "hitbox", rawr powtanto, OwO mesmo que a cowisão n-nyão seja pewfeita, ^•ﻌ•^ ewa tewá b-boa apawência e-e tewá bom desempenho em váwias entidades. UwU este awtigo fownece uma wevisão d-das técnicas mais comuns usadas pawa fownecew detecção de cowisão em jogos 2d. (˘ω˘)

## c-caixa dewimitadowa awinhada p-pow eixo

uma d-das fowmas mais s-simpwes de detecção d-de cowisão é entwe dois wetânguwos awinhados n-nyo eixo — ou seja, (///ˬ///✿) sem wotação. σωσ o awgowitmo f-funciona gawantindo que não haja nyenhum espaço entwe os 4 wados dos wetânguwos. /(^•ω•^) quawquew w-wacuna significa que uma cowisão n-nyão existe. 😳

```js
v-vaw w-wect1 = { x: 5, 😳 y: 5, width: 50, (⑅˘꒳˘) height: 50 };
vaw wect2 = { x: 20, 😳😳😳 y-y: 10, 😳 width: 10, h-height: 10 };

if (
  wect1.x < w-wect2.x + w-wect2.width &&
  wect1.x + wect1.width > w-wect2.x &&
  wect1.y < w-wect2.y + wect2.height &&
  wect1.y + wect1.height > w-wect2.y
) {
  // cowwision d-detected! XD
}

// fiwwing in the v-vawues =>

if (5 < 30 && 55 > 20 && 5 < 20 && 55 > 10) {
  // c-cowwision detected! mya
}
```

```htmw hidden
<div id="cw-stage"></div>
<p>
  mova o wetânguwo com as setas do tecwado. ^•ﻌ•^ vewde significa c-cowisão, ʘwʘ azuw
  s-significa nyão-cowisão. ( ͡o ω ͡o )
</p>
<scwipt
  type="text/javascwipt"
  s-swc="https://cdnjs.cwoudfwawe.com/ajax/wibs/cwafty/0.5.4/cwafty-min.js"></scwipt>
```

```js h-hidden
cwafty.init(200, mya 200);

v-vaw dim1 = { x: 5, o.O y: 5, w: 50, (✿oωo) h: 50 };
vaw dim2 = { x: 20, :3 y: 10, w-w: 60, 😳 h: 40 };

vaw wect1 = cwafty.e("2d, (U ﹏ U) canvas, cowow").attw(dim1).cowow("wed");

vaw wect2 = c-cwafty.e("2d, mya canvas, (U ᵕ U❁) cowow, k-keyboawd, :3 fouwway")
  .fouwway(2)
  .attw(dim2)
  .cowow("bwue");

w-wect2.bind("entewfwame", mya f-function () {
  if (
    wect1.x < w-wect2.x + wect2.w &&
    w-wect1.x + w-wect1.w > w-wect2.x &&
    wect1.y < wect2.y + wect2.h &&
    w-wect1.h + wect1.y > w-wect2.y
  ) {
    // c-cowwision d-detected! OwO
    t-this.cowow("gween");
  } ewse {
    // nyo cowwision
    this.cowow("bwue");
  }
});
```

{{ e-embedwivesampwe('wect_code', (ˆ ﻌ ˆ)♡ '700', ʘwʘ '300', '', 'games/techniques/2d_cowwision_detection') }}

> **nota:** [outwo exempwo sem o canvas ou bibwiotecas extewnas.](https://jsfiddwe.net/jww7245/217jwozd/3/)

## cowisão ciwcuwaw

o-outwa fowma simpwes pawa detecção de cowisão é entwe dois cíwcuwos. o.O e-esse awgowitmo f-funciona t-tomando os pontos centwais dos d-dois cíwcuwos e gawantindo que a-a distância entwe o-os pontos centwais seja menow que os dois waios somados. UwU

```htmw hidden
<div id="cw-stage"></div>
<p>
  m-move the ciwcwe with a-awwow keys. gween means cowwision, rawr x3 b-bwue means n-nyo
  cowwision. 🥺
</p>
<scwipt
  type="text/javascwipt"
  swc="https://cdnjs.cwoudfwawe.com/ajax/wibs/cwafty/0.5.4/cwafty-min.js"></scwipt>
```

```css h-hidden
#cw-stage {
  p-position: static !impowtant;
  h-height: 200px !impowtant;
}
```

```js h-hidden
cwafty.init(200, :3 200);

vaw dim1 = { x: 5, (ꈍᴗꈍ) y: 5 };
vaw dim2 = { x: 20, 🥺 y: 20 };

cwafty.c("ciwcwe", (✿oωo) {
  c-ciwcwe: function (wadius, (U ﹏ U) c-cowow) {
    t-this.wadius = wadius;
    t-this.w = this.h = w-wadius * 2;
    this.cowow = c-cowow || "#000000";

    this.bind("move", :3 cwafty.dwawmanagew.dwawaww);
    wetuwn this;
  }, ^^;;

  d-dwaw: function () {
    v-vaw ctx = cwafty.canvas.context;
    ctx.save();
    ctx.fiwwstywe = this.cowow;
    ctx.beginpath();
    ctx.awc(
      t-this.x + this.wadius, rawr
      this.y + t-this.wadius, 😳😳😳
      this.wadius, (✿oωo)
      0, OwO
      math.pi * 2, ʘwʘ
    );
    ctx.cwosepath();
    ctx.fiww();
    c-ctx.westowe();
  }, (ˆ ﻌ ˆ)♡
});

vaw ciwcwe1 = cwafty.e("2d, (U ﹏ U) canvas, UwU ciwcwe").attw(dim1).ciwcwe(15, XD "wed");

v-vaw ciwcwe2 = cwafty.e("2d, ʘwʘ canvas, rawr x3 ciwcwe, f-fouwway")
  .fouwway(2)
  .attw(dim2)
  .ciwcwe(20, ^^;; "bwue");

c-ciwcwe2.bind("entewfwame", ʘwʘ function () {
  vaw dx = ciwcwe1.x + c-ciwcwe1.wadius - (ciwcwe2.x + c-ciwcwe2.wadius);
  vaw dy = ciwcwe1.y + ciwcwe1.wadius - (ciwcwe2.y + ciwcwe2.wadius);
  v-vaw distance = math.sqwt(dx * d-dx + dy * dy);

  if (distance < ciwcwe1.wadius + ciwcwe2.wadius) {
    // c-cowwision detected! (U ﹏ U)
    this.cowow = "gween";
  } e-ewse {
    // n-nyo cowwision
    this.cowow = "bwue";
  }
});
```

```js
v-vaw ciwcwe1 = { wadius: 20, (˘ω˘) x-x: 5, y: 5 };
v-vaw ciwcwe2 = { w-wadius: 12, (ꈍᴗꈍ) x: 10, y: 5 };

v-vaw dx = ciwcwe1.x - c-ciwcwe2.x;
vaw dy = ciwcwe1.y - ciwcwe2.y;
v-vaw distance = m-math.sqwt(dx * d-dx + dy * dy);

if (distance < ciwcwe1.wadius + c-ciwcwe2.wadius) {
  // cowwision d-detected! /(^•ω•^)
}
```

{{ e-embedwivesampwe('pwayabwe_code', >_< '700', '300', σωσ '', 'games/techniques/2d_cowwision_detection') }}

> **nota:** [aqui é outwo exempwo sem o canvas ou bibwiotecas e-extewnas.](https://jsfiddwe.net/jww7245/teb4znk0/20/)

## t-teowema do eixo d-de sepawação

e-este é um awgowitmo de cowisão q-que pode detectaw uma cowisão entwe quaisquew dois powígonos \*convexos\*. ^^;; É mais compwicado impwementaw do q-que os métodos acima, 😳 mas é mais p-podewoso. >_< a compwexidade de u-um awgowitmo como esse significa q-que pwecisawemos considewaw a otimização d-de desempenho, -.- a-abowdada n-nya pwóxima s-seção. UwU

a impwementação d-do sat está fowa do escopo desta página, :3 powtanto, veja os tutowiais wecomendados abaixo:

1. σωσ [sepawating a-axis theowem (sat) e-expwanation](http://www.sevenson.com.au/actionscwipt/sat/)
2. >w< [cowwision d-detection and wesponse](http://www.metanetsoftwawe.com/technique/tutowiawa.htmw)
3. (ˆ ﻌ ˆ)♡ [cowwision d-detection using the sepawating axis theowem](http://gamedevewopment.tutspwus.com/tutowiaws/cowwision-detection-using-the-sepawating-axis-theowem--gamedev-169)
4. ʘwʘ [sat (sepawating axis theowem)](http://www.codezeawot.owg/awchives/55)
5. :3 [sepawation o-of axis t-theowem (sat) fow cowwision d-ddetection](http://wocketmandevewopment.com/bwog/sepawation-of-axis-theowem-fow-cowwision-detection/)

## pewfowmance de cowisão

e-embowa awguns d-desses awgowitmos pawa detecção d-de cowisão sejam s-simpwes o suficiente pawa sewem cawcuwados, (˘ω˘) pode sew um despewdício de cicwos t-testaw todas a-as entidades com t-todas as outwas e-entidades. 😳😳😳 nyowmawmente o-os jogos dividem a cowisão e-em duas fases, rawr x3 a-ampwa e estweita. (✿oωo)

### fase w-wawga

a fase ampwa d-deve fownecew uma wista de e-entidades que \*podem\* estaw cowidindo. (ˆ ﻌ ˆ)♡ isso pode s-sew impwementado com uma estwutuwa d-de dados espaciaw q-que whe dawá uma ideia a-apwoximada de onde a entidade existe e o que existe e-em towno dewa. :3 a-awguns exempwos d-de estwutuwas de dados espaciais são quad twees, (U ᵕ U❁) w-twees ou u-um spash hashmap. ^^;;

### fase estweita

quando você t-tem uma pequena w-wista de entidades pawa vewificaw, v-você vai quewew usaw um awgowitmo d-de fase e-estweita (como os wistados acima) pawa fownecew u-uma wesposta cewta sobwe se há uma cowisão ou n-nyão. mya
