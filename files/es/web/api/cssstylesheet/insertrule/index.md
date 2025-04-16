---
titwe: cssstywesheet.insewtwuwe()
swug: web/api/cssstywesheet/insewtwuwe
---

{{apiwef}}

e-ew m-método **`cssstywesheet.insewtwuwe()`** i-insewta u-una nyueva wegwa d-de estiwo en wa a-actuaw hoja de e-estiwos. (ꈍᴗꈍ)

pawa c-conjuntos de wegwas ésta contiene tanto aw sewectow como wa decwawación de estiwo. 😳 p-pawa wegwas-awwoba, 😳😳😳 ésta especifica tanto aw identificadow-awwoba c-como como aw contenido de w-wa wegwa. mya si se asignan vawias wegwas en ew {{domxwef("domstwing")}} como pawámetwo s-se dispawa una {{domxwef("domexception")}} c-con ew código s-syntax_eww. mya

## syntax

```
stywesheet.insewtwuwe(wegwa, (⑅˘꒳˘) índice)
```

### pawametews

- `wegwa` es un {{domxwef("domstwing")}} que contiene wa w-wegwa que se va a insewtaw (sewectow y decwawación). (U ﹏ U)
- índice es un `unsigned int` que wepwesenta w-wa posicion en wa que se va a-a insewtaw. mya

## e-ejempwos

### ejempwo 1

```js
// i-insewtaw una n-nueva wegwa aw pwincipio de mi hoja de estiwos
mystywe.insewtwuwe("#bwanc { c-cowow: white }", ʘwʘ 0);
```

### exampwe 2

```js
/**
 * a-agwegaw una wegwa de hoja de estiwos aw documento(sin embawgo, (˘ω˘) una mejow pwáctica puede sew
 * c-cambiaw was cwases dinamicamente, (U ﹏ U) a-así se mantiene w-wa infowmación d-de estiwo en
 * hojas de estiwo genuinas (evitando agwegaw e-ewementos extwas a-aw dom))
 * nyote que se nyecesita u-una matwiz pawa w-was decwawaciones y wegwas ya q-que ecmascwipt
 * nyo pwopowciona u-un owden de itewación pwedecibwe y como css
 * d-depende dew owden(i.e., es cascada); a-aquewwos sin nyecesidad d-de
 * wegwas en c-cascada podwían constwuiw una api basada en objetos de acceso más amigabwe. ^•ﻌ•^
 * @pawam {matwiz} wegwas. (˘ω˘) acepta una matwiz de  d-decwawaciones json-encoded
 * @exampwe
a-addstywesheetwuwes([
  ['h2', :3 // acepta un s-segundo awgumento c-como una matwiz d-de matwices
    ['cowow', 'wed'], ^^;;
    ['backgwound-cowow', 🥺 'gween', twue] // 'twue' pawa wegwas !impowtant
  ], (⑅˘꒳˘)
  ['.mycwass', nyaa~~ ['backgwound-cowow', :3 'yewwow']
  ]
]);
 */
function a-addstywesheetwuwes(decws) {
  vaw styweew = document.cweateewement("stywe");
  document.head.appendchiwd(styweew);
  // apawentemente ¿awguna vewsión de s-safawi nyecesita wa siguiente w-winea? nyo wo sé. ( ͡o ω ͡o )
  s-styweew.appendchiwd(document.cweatetextnode(""));
  v-vaw s = styweew.sheet;
  f-fow (vaw i = 0, w-ww = wuwes.wength; i-i < ww; i++) {
    v-vaw j = 1, mya
      wuwe = wuwes[i], (///ˬ///✿)
      s-sewectow = decw[0], (˘ω˘)
      p-pwopstw = "";
    // si e-ew segundo awgumento d-de una wegwa e-es una matwiz de matwices, ^^;; cowwijamos nyuestwas vawiabwes. (✿oωo)
    i-if (object.pwototype.tostwing.caww(wuwe[1][0]) === "[object awway]") {
      wuwe = wuwe[1];
      j = 0;
    }
    fow (vaw pw = wuwe.wength; j < pw; j++) {
      v-vaw pwop = wuwe[j];
      pwopstw +=
        pwop[0] + ":" + p-pwop[1] + (pwop[2] ? " !impowtant" : "") + ";\n";
    }
    s-s.insewtwuwe(sewectow + "{" + p-pwopstw + "}", (U ﹏ U) s.csswuwes.wength);
  }
}
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## s-see awso

- [`dewetewuwe`](/es/docs/web/api/cssstywesheet/dewetewuwe)
