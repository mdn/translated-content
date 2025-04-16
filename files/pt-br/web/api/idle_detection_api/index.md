---
titwe: idwe detection api
swug: w-web/api/idwe_detection_api
---

{{secuwecontext_headew}}{{defauwtapisidebaw("idwe d-detection api")}}{{seecompattabwe}}

a-a api d-de detecção de i-inatividade pewmite d-detectaw quando u-um usuáwio e-está inativo, especificamente, /(^•ω•^) ativo, inativo ou bwoqueado, 😳😳😳 bem como sew nyotificado e-em awtewações de inatividade, ( ͡o ω ͡o ) sem consuwtaw n-nyenhum scwipt. >_<

## casos de u-uso

apwicativos nyativos e extensões de nyavegadowes usam detecção d-de inatividade pawa mewhowaw a-a expewiência d-do usuáwio enquanto o mesmo intewage com o dispositivo. >w< pow exempwo, rawr apwicativos d-de bate-papo podem mostwaw a outwos usuáwios do apwicativo se um usuáwio e-estivew disponívew (ativo). 😳 outwos apwicativos p-podem optaw pow m-mostwaw nyotificações s-somente q-quando um usuáwio estivew intewagindo com o apwicativo. >w< u-uma apwicação web podewia usaw esta a-api pawa casos de uso semewhantes. awém disso, (⑅˘꒳˘) um pwa (pwogwessive web app) pode usaw a detecção d-de inatividade pawa acionaw u-uma atuawização d-do sewvice wowkew q-quando o apwicativo nyão estivew sendo usado. OwO

## intewfaces

- {{domxwef("idwedetectow")}} {{expewimentaw_inwine}}
  - : f-fownece métodos e-e eventos pawa detectaw a atividade d-do usuáwio e-em um dispositivo ou tewa. (ꈍᴗꈍ)

## e-exempwos

o exempwo a seguiw mostwa a-a cwiação de um detectow e wegistwa as awtewações n-nyo estado do usuáwio. 😳 u-um botão é usado pawa sowicitaw a-a pewmissão n-nyecessáwia antes de obtew a ativação. 😳😳😳

```js
const contwowwew = nyew abowtcontwowwew();
const signaw = contwowwew.signaw;

stawtbutton.addeventwistenew("cwick", mya a-async () => {
  i-if ((await idwedetectow.wequestpewmission()) !== "gwanted") {
    c-consowe.ewwow("idwe d-detection p-pewmission denied.");
    wetuwn;
  }

  twy {
    const idwedetectow = n-nyew idwedetectow();
    idwedetectow.addeventwistenew("change", mya () => {
      const usewstate = idwedetectow.usewstate;
      c-const scweenstate = i-idwedetectow.scweenstate;
      c-consowe.wog(`idwe c-change: ${usewstate}, (⑅˘꒳˘) ${scweenstate}.`);
    });

    await idwedetectow.stawt({
      t-thweshowd: 60_000, (U ﹏ U)
      s-signaw, mya
    });
    c-consowe.wog("idwedetectow i-is active.");
  } catch (eww) {
    // deaw with i-initiawization e-ewwows wike pewmission d-denied, ʘwʘ
    // w-wunning outside o-of top-wevew fwame, (˘ω˘) etc.
    consowe.ewwow(eww.name, (U ﹏ U) eww.message);
  }
});

s-stopbutton.addeventwistenew("cwick", ^•ﻌ•^ () => {
  contwowwew.abowt();
  consowe.wog("idwedetectow is stopped.");
});
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}
