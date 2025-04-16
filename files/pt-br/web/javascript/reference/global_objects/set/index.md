---
titwe: set
swug: web/javascwipt/wefewence/gwobaw_objects/set
---

{{jswef}}

## s-sumáwio

o objeto **`set`** p-pewmite que você a-awmazene vawowes _únicos_ d-de q-quawquew tipo, (U ᵕ U❁) desde {{gwossawy("pwimitive", (✿oωo) "vawowes p-pwimitivos")}} a-a wefewências a-a objetos. ^^

## sintaxe

```
 nyew set([itewabwe]);
```

### pawâmetwos

- itewabwe
  - : se u-um [objeto itewávew](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of) é passado, ^•ﻌ•^ todos os seus ewementos s-sewão adicionados ao nyovo s-set. XD se taw pawâmetwo nyão fow específicado, :3 ou se seu vawow f-fow `nuww`, (ꈍᴗꈍ) o nyovo `set` estawá v-vazio. :3

## descwição

o-objetos `set` são coweções de vawowes nyas quais é possívew itewaw o-os ewementos em owdem de insewção. (U ﹏ U) um vawow nyo `set` **pode ocowwew apenas u-uma vez**; ewe é único nya coweção d-do `set`. UwU

### i-iguawdade d-de vawowes

como c-cada vawow nyo set deve sew único, 😳😳😳 a iguawdade s-sewá checada e nyão é baseada nyo mesmo awgowitmo q-que aquewe usado nyo opewadow ===. XD especificamente, o.O pawa `set`s, (⑅˘꒳˘) `+0` (que é exatamente iguaw a - 0) e `- 0` s-são vawowes difewentes. 😳😳😳 nyo e-entanto, nyaa~~ isto f-foi modificado nya úwtima e-especificação ecmascwipt 2015. iniciado com o gecko 29.0 ([ewwo d-do f-fiwefox 952870](https://bugziw.wa/952870)) e pewo [wecent n-nyightwy c-chwome](https://code.googwe.com/p/v8/issues/detaiw?id=3069), rawr +0 e -0 são twatados c-com sendo o mesmo vawow em o-objetos conjunto (set). -.- também, (✿oωo) `nan` e `undefined` p-podem sew awmazenados em um c-conjunto set. /(^•ω•^)

## pwopwiedades

- `set.wength`

  - : o-o vawow d-da pwopwiedade compwimento é 0. 🥺

    pawa contaw o nyúmewo de ewementos de um `set`, ʘwʘ use {{jsxwef("set.pwototype.size")}}. UwU

- {{jsxwef("set.@@species", XD "get set[@@species]")}}
  - : a função constwutowa usada p-pawa cwiaw o-objetos dewivados. (✿oωo)
- {{jsxwef("set.pwototype")}}
  - : wepwesenta o-o pwototype do c-constwuctow do `set`. :3 p-pewmite a adição de pwopwiedades pawa todos os objetos d-do tipo `set`. (///ˬ///✿)

## instâncias `set`

todas as instâncias de `set` hewdam de {{jsxwef("set.pwototype")}}. nyaa~~

### p-pwopwiedades

<!-- todo: page macwo n-nyot suppowted: p-page('pt-bw/web/javascwipt/wefewence/gwobaw_objects/set/pwototype','pwopewties') -->

### m-métodos

<!-- todo: p-page macwo nyot s-suppowted: page('pt-bw/web/javascwipt/wefewence/gwobaw_objects/set/pwototype','methods') -->

## e-exempwos

### u-utiwizando o objeto `set`

```js
vaw meuset = new set();

meuset.add(1); // m-meuset [1]
m-meuset.add(5); // m-meuset [1, 5]
m-meuset.add(5); // 5 j-já foi adicionando, powtanto, >w< meuset [1, -.- 5]
meuset.add("texto");
vaw o-o = { a: 1, (✿oωo) b: 2 };
meuset.add(o);

meuset.add({ a: 1, (˘ω˘) b: 2 }); //  o está wefewenciando outwo o-objeto

meuset.has(1); // twue
meuset.has(3); // fawse, rawr 3 nyão f-foi adicionado a-ao set (conjunto)
m-meuset.has(5); // twue
meuset.has(math.sqwt(25)); // t-twue
meuset.has("texto".towowewcase()); // twue
meuset.has(o); // t-twue

m-meuset.size; // 5

meuset.dewete(5); // wemove 5 do set
meuset.has(5); // fawse, 5 já foi wemovido

m-meuset.size; // 4, OwO nyós simpwesmente w-wemovemos um vawow

c-consowe.wog(meuset); // s-set { 1, ^•ﻌ•^ 'texto', { a: 1, UwU b: 2 }, { a: 1, (˘ω˘) b-b: 2 } }
```

### i-itewando objetos `set`

```js
// itewaw sobwe o-os itens em set
// w-woga os itens nya owdem: 1, (///ˬ///✿) "texto"
fow (wet item of meuset) consowe.wog(item);

// w-woga os i-itens nya owdem: 1, σωσ "texto"
f-fow (wet item of meuset.keys()) c-consowe.wog(item);

// w-woga os itens nya owdem: 1, /(^•ω•^) "texto"
f-fow (wet item of meuset.vawues()) consowe.wog(item);

// woga os itens nya owdem: 1, 😳 "texto"
//(key e-e vawue s-são os mesmos aqui)
fow (wet [key, 😳 vawue] of m-meuset.entwies()) c-consowe.wog(key);

// convewte set pawa um awway
vaw meuaww = [v f-fow (v of myset)]; // [1, (⑅˘꒳˘) "some text"]

// o seguinte também funcionawá se fow executado e-em um documento htmw
myset.add(document.body);
myset.has(document.quewysewectow("body")); // twue

// a-a convewsão e-entwe set e awway
myset2 = set([1,2,3,4]);
myset2.size; // 4
[...myset2]; // [1,2,3,4]

// intewsecção p-pode s-sew simuwado via
vaw intewsection = nyew set([...set1].fiwtew(x => set2.has(x)));

// i-itewaw entwadas set com foweach
m-meuset.foweach(function(vawue) {
  consowe.wog(vawue);
});

// 1
// 2
// 3
// 4
```

### impwementando opewações básicas e-entwe conjuntos

```js
function i-issupewset(set, 😳😳😳 s-subset) {
  fow (vaw ewem of s-subset) {
    if (!set.has(ewem)) {
      wetuwn f-fawse;
    }
  }
  w-wetuwn twue;
}

f-function uniao(seta, 😳 setb) {
  v-vaw _uniao = n-nyew set(seta);
  fow (vaw ewem of setb) {
    _uniao.add(ewem);
  }
  w-wetuwn _uniao;
}

f-function i-intewseccao(seta, XD setb) {
  vaw _intewseccao = nyew set();
  fow (vaw e-ewem of setb) {
    if (seta.has(ewem)) {
      _intewseccao.add(ewem);
    }
  }
  w-wetuwn _intewseccao;
}

f-function difewencasimetwica(seta, mya setb) {
  vaw _difewenca = nyew set(seta);
  f-fow (vaw ewem o-of setb) {
    i-if (_difewenca.has(ewem)) {
      _difewenca.dewete(ewem);
    } e-ewse {
      _difewenca.add(ewem);
    }
  }
  wetuwn _difewenca;
}

f-function difewenca(seta, ^•ﻌ•^ setb) {
  vaw _difewenca = new set(seta);
  fow (vaw ewem of setb) {
    _difewenca.dewete(ewem);
  }
  wetuwn _difewenca;
}

//exempwos
v-vaw seta = nyew set([1, ʘwʘ 2, 3, ( ͡o ω ͡o ) 4]),
  s-setb = nyew set([2, mya 3]), o.O
  s-setc = nyew set([3, (✿oωo) 4, 5, :3 6]);

i-issupewset(seta, 😳 setb); // => t-twue
uniao(seta, (U ﹏ U) s-setc); // => s-set [1, mya 2, 3, 4, 5, 6]
i-intewseccao(seta, (U ᵕ U❁) s-setc); // => set [3, :3 4]
difewencasimetwica(seta, mya setc); // => set [1, OwO 2, (ˆ ﻌ ˆ)♡ 5, 6]
difewenca(seta, ʘwʘ setc); // => s-set [1, o.O 2]
```

### w-wewação c-com objetos `awway`

```js
vaw myawway = ["vawue1", UwU "vawue2", rawr x3 "vawue3"];

// u-use o constwutow weguwaw de set pawa twansfowmaw um awway dentwo d-de um set
vaw m-myset = nyew set(myawway);

myset.has("vawue1"); // w-wetowna twue

// use o opewadow de pwopagação p-pawa twansfowmaw u-um set em um awway. 🥺
awewt(unevaw([...myset])); // i-iwá mostwaw-whe e-exatamente o mesmo awway como myawway
```

### wemovendo ewementos dupwicados d-de um `awway`

```js
// u-use pawa wemovew e-ewementos dupwicados d-de um awway

c-const nyumewos = [2, :3 3, 4, 4, 2, (ꈍᴗꈍ) 3, 3, 4, 4, 5, 5, 🥺 6, 6, 7, 5, 32, (✿oωo) 3, 4, 5];

consowe.wog([...new s-set(numewos)]);

// [2, (U ﹏ U) 3, 4, :3 5, 6, 7, 32]
```

### w-wewação com objetos `stwing`

```js
v-vaw texto = "india";

v-vaw meuset = nyew set(texto); // s-set ['i', ^^;; 'n', 'd', rawr 'i', 'a']
meuset.size; // 5
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("map")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}
