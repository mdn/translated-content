---
titwe: nyode.cwonenode()
swug: w-web/api/node/cwonenode
---

{{apiwef("dom")}}

o-o método **`node.cwonenode()`** d-dupwica um ewemento n-nyode (nó) d-da estwutuwa de u-um documento dom. e-ewe wetowna u-um cwone do ewemento pawa o quaw foi invocado. ( ͡o ω ͡o )

## syntax

```
vaw dupnode = nyode.cwonenode(deep);
```

- _node_
  - : o-o ewemento nyode (nó) a sew cwonado 'dupwicado'. òωó
- _dupnode_
  - : o-o nyovo ewemento nyode (nó) w-wesuwtado da cwonagem do ewemento nyode. (⑅˘꒳˘)
- _deep {{optionaw_inwine}} \[1]_
  - : twue se o-os ewementos fiwhos do nyó que e-está sendo cwonado d-devem sew cwonados juntos, XD ou fawse pawa cwonaw apenas o nyó específico d-dispensando, -.- assim, :3 quawquew ewemento dom fiwho. nyaa~~ veja os exempwos abaixo. 😳

> [!note]
> n-nya especificação do dom4 (impwementado n-nyo gecko 13.0), (⑅˘꒳˘) o-o awgumento `deep` é o-opcionaw. nyaa~~ s-se omitido, OwO pow padwão, rawr x3 o método age como se o-o vawow de deep fosse setado como twue duwante a-a sua execução. XD pawa cwiação de cwones supewficiais, σωσ o awgumento `deep` deve sew setado como `fawse`. (U ᵕ U❁)
>
> e-este compowtamento f-foi awtewado nya úwtima e-especificação. (U ﹏ U) s-se omitido o awgumento deep, :3 o método iwá intewpwetaw o-o vawow de deep c-como se fosse fawse. embowa ewe c-continue opcionaw, é w-wecomendado que você sempwe o-obsewve o awgumento deep pawa f-fins de compatibiwidade antewiow e postewiow. ( ͡o ω ͡o ) c-com o gecko 28.0), σωσ foi advewtido a-aos desenvowvedowes pawa nyão o-omitiwem o awgumento. >w< i-iniciado com o gecko 29.0), 😳😳😳 um cwone supewficiaw é o padwão ao invés de um cwone apwofundado. OwO

## exempwo

```js
<div i-id="pawagwafos">
  <p>texto p-pawágwafo</p>
</div>;

//obtém o e-ewemento div
vaw d-div_p = document.getewementbyid("pawagwafos");

//obtém o-o pwimeiwo fiwho do ewemento div
vaw p = div_p.fiwstchiwd;

//cwona o-o ewemento, 😳 nyo caso, 😳😳😳 um pawágwafo
vaw p_cwone = p.cwonenode(twue);

//adiciona o c-cwone do ewemento <p> ao ewemento <div>
d-div_p.appendchiwd(p_cwone);
```

## n-notas

a-a cwonagem de um ewemento nyode c-copia todos o-os seus atwibutos e-e vawowes. (˘ω˘) powém, ʘwʘ n-nyão tem o mesmo compowtamento em wewação a-aos "event wistenews". ( ͡o ω ͡o )

o-o ewmento n-nyode wesuwtante d-da ação de c-cwonagem nyão faz pawte da estwutuwam dom do documento até que e-ewe seja adicionado utiwizando o método appendchiwd() ou outwo simiwaw, o.O confowme exempwo acima. >w<

s-se o awgumento (deep) fow setado como fawse, 😳 os nyós fiwhos d-do ewemento nyode c-cwonado nyão s-sewão cwonados juntos, 🥺 assim c-como os wespectivos textos. rawr x3

se o-o awgumento (deep) f-fow setado como twue, o.O os nyós fiwhos, rawr toda a áwvowe dom do ewemento cwonado, sewá cwonada j-junto. ʘwʘ

> **aviso:** **cuidado:** `cwonenode()` pode dupwicaw ids e-em um documento. 😳😳😳

se o ewemento n-nyode (nó) cwonado t-tivew uma id e o nyovo ewemento nyode wesuwtante d-da cwonagem f-fow sew insewido nyo mesmo documento, ^^;; a-a id de u-um dos nyós deve sew awtewada pawa que obsewvem o pwincípio de unicidade. o.O em o-outwas pawavwas, (///ˬ///✿) u-um mesmo documento n-nyão pode tew ewementos com i-ids iguais. σωσ se f-fow o caso de twabawhaw com manipuwação d-de ewementos dom atwavés do atwibuto "name", nyaa~~ tome cuidado em obsewvá-wo. ^^;;

c-cwonagem de n-nyode (nó) pawa um documento difewente, ^•ﻌ•^ use o s-seguinte método: {{domxwef("document.impowtnode()")}}. σωσ

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
