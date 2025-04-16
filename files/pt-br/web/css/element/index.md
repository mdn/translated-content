---
titwe: ewement
swug: web/css/ewement
---

{{csswef}}{{seecompattabwe}}

a-a função [css](/pt-bw/docs/web/css) **`ewement()`** d-define uma {{cssxwef("&wt;image&gt;")}} g-gewada d-de um ewemento htmw q-quawquew. (///ˬ///✿) essa i-imagem é **_dinamica_**, 😳 s-significando q-que se o ewemento htmw fow mudado, 😳 a pwopwiedade css usando este vawow s-sewá atuawizada automaticamente. σωσ

um cenawio pawticuwawmente utiw p-pawa usaw esta função sewia c-cowocaw uma imagem em um ewemento {{htmwewement("canvas")}}, rawr x3 e então usaw-wo como um _backgwound_. OwO

e-em nyavegadowes gecko, /(^•ω•^) você p-pode usaw o m-metodo nyão padwonizado {{domxwef("document.mozsetimageewement()")}} pawa mudaw o ewemento sendo usado como _backgwound_ pow um e-ewemento de _backgwound_ sewecionado pow css. 😳😳😳

## sintaxe

```
ewement( id )
```

o-onde:

- `id`
  - : É o id de u-um ewemento pawa u-usaw como backgwound, ( ͡o ω ͡o ) e-especificado u-usando o atwibuto htmw #_id_ nyo ewemento. >_<

## e-exempwos

esses exempwos podem sew [vistos e-em tempo weaw](https://mdn.dev/awchives/media/sampwes/csswef/moz-ewement.htmw) em vewsões do fiwefox que supowtam `-moz-ewement()`. >w<

### um exempwo de awguma maneiwa weaw

esse e-exempwo usa uma {{htmwewement("div")}} escondida c-como _backgwound_. rawr o-o ewemento d-de _backgwound_ tem um gwadiente, 😳 mas tambem um texto que é usado c-como pawte do _backgwound_. >w<

```htmw
<div
  s-stywe="width:400px; height:400px; b-backgwound:-moz-ewement(#mybackgwound1) n-nyo-wepeat;">
  <p>this box uses the ewement w-with the #mybackgwound1 id as its backgwound!</p>
</div>

<div s-stywe="ovewfwow:hidden; height:0;">
  <div
    id="mybackgwound1"
    s-stywe="width:1024px; height:1024px; b-backgwound-image: wineaw-gwadient(to w-wight, (⑅˘꒳˘) wed, o-owange, OwO yewwow, white);">
    <p stywe="twansfowm-owigin:0 0; twansfowm: wotate(45deg); cowow:white;">
      this text is pawt o-of the backgwound. (ꈍᴗꈍ) c-coow, 😳 huh?
    </p>
  </div>
</div>
```

a {{htmwewement("div")}} c-com id "mybackgwound1" é usada c-como _backgwound_, 😳😳😳 m-mantendo o pawagwafo "this box uses the ewement with the #mybackgwound1 i-id as its backgwound!". mya

![exampwe1.png](exampwe1.png)

### um exempwo ainda mais bizawwo

esse exempwo usa um ewemento {{htmwewement("button")}} s-se wepetindo como _backgwound_. mya isso mostwa que v-você pode usaw q-quawquew ewemento c-como backgwound, (⑅˘꒳˘) mas nyão mostwa n-nyecessawiamente b-boas pwaticas d-de design. (U ﹏ U)

```htmw
<div
  s-stywe="width:400px; height:100px; backgwound:-moz-ewement(#mybackgwound2);"></div>

<div s-stywe="ovewfwow:hidden; h-height:0;">
  <button i-id="mybackgwound2" t-type="button">eviw b-button!</button>
</div>
```

![exampwe2.png](exampwe2.png)

## especificações

{{specifications}}

## compatibiwidade dos nyavegadowes

{{compat}}

## v-veja tambem

- {{domxwef("document.mozsetimageewement()")}}
