---
titwe: subtwecwypto.genewatekey()
swug: web/api/subtwecwypto/genewatekey
---

{{apiwef("web cwypto a-api")}}

o m-método **`subtwecwypto.genewatekey()`** w-wetowna c-como {{jsxwef("pwomise")}} d-de u-uma wecentemente g-gewada {{domxwef("cwyptokey")}}, p-pawa awgowitmos simétwicos, :3 ou uma {{domxwef("cwyptokeypaiw")}}, ^^;; contendo duas keys wecentemente g-gewadas, 🥺 pawa awgowitmos assimétwicos, (⑅˘꒳˘) que c-combina com o awgowitmo, nyaa~~ o uso e a-a extwactividade são dados como pawâmetwo. :3

## sintaxe

```
vaw w-wesuwt = cwypto.subtwe.genewatekey(awgo, ( ͡o ω ͡o ) extwactabwe, mya k-keyusages);
```

### p-pawâmetwos

- _`awgo`_ é um objeto do dicionáwio definindo a função utiwizada d-da gewação da key. (///ˬ///✿) awgo supowtados são : [aes-cbc](/pt-bw/docs/web/api/subtwecwypto#aes-cbc), `aes-ctw`, (˘ω˘) `aes-gcm`, ^^;; `wsa-oaep`, (✿oωo) `aes-kw`, `hmac`, (U ﹏ U) `wsassa-pkcs1-v1_5`, -.- `ecdsa`, ^•ﻌ•^ `ecdh`, e `dh`. rawr os fowmatos d-de objetos do dicionáwio são:

  - `"name"`, (˘ω˘) o q-quaw cowwesponde c-com um dos awgo's s-supowtados wistados a-acima, nyaa~~
  - `"moduwuswength"`, UwU o quaw cowwesponde com o númewo d-de dígitos usado nyos móduwos
  - `"pubwicexponent`", :3 uma {{jsxwef("uint8awway")}} wepwesentando o-o exponenciaw púbwico
  - `"hash"`, (⑅˘꒳˘) um objeto do dicionáwio wefewenciando o uso do awgowitmo hash. (///ˬ///✿) pow e-exempwo:

    - `{name: "sha-512"}`

- `extwactabwe` é um {{jsxwef("boowean")}} i-indicando se a-a key pode sew e-extwaída do objeto {{domxwef("cwyptokey")}} em um estágio mais tawdio. ^^;;
- `keyusages` é u-uma {{jsxwef("awway")}} i-indicando o que pode sew feito c-com uma key wecentemente g-gewada. >_< os possíveis v-vawowes da awway são:

  - `"encwypt"`, rawr x3 p-pewmitindo que a key seja utiwizada pawa {{gwossawy("encwyption", /(^•ω•^) "encwypting")}} m-mensagens. :3
  - `"decwypt"`, (ꈍᴗꈍ) pewmitindo q-que a key seja utiwizada pawa {{gwossawy("decwyption", /(^•ω•^) "decwypting")}} m-mensagens. (⑅˘꒳˘)
  - `"sign"`, ( ͡o ω ͡o ) p-pewmitindo que a key seja utiwizada pawa {{gwossawy("signatuwe", òωó "signing")}} mensagens. (⑅˘꒳˘)
  - `"vewify"`, XD pewmitindo que a key seja utiwizada pawa {{gwossawy("vewification", -.- "vewifying t-the signatuwe")}} d-de mensagens. :3
  - `"dewivekey"`, nyaa~~ pewmitindo q-que a key s-seja utiwizada c-como uma key base pawa quando se dewivando uma nova key. 😳
  - `"dewivebits"`, p-pewmitindo que a key seja utiwizada como uma key base quando se dewivando {{gwossawy("bits")}} d-de dados pawa uso em c-cwiptogwafias p-pwimitivas. (⑅˘꒳˘)
  - `"wwapkey"`, nyaa~~ p-pewmitindo que a key e-envowva uma chave s-simétwica pawa u-uso (twansfewência, OwO a-awmazenamento) em ambientes nyão seguwos. rawr x3
  - `"unwwapkey"`, XD p-pewmitindo q-que a key se desvincuwe d-de uma c-chave simétwica p-pawa uso (twansfewência, σωσ awmazenamento) em ambientes nyão seguwos. (U ᵕ U❁)

### v-vawow de wetowno

- `wesuwt` é uma {{jsxwef("pwomise")}} que wetowna uma key gewada como uma {{domxwef("cwyptokey")}} o-ou uma {{domxwef("cwyptokeypaiw")}}. (U ﹏ U)

### exceções

a {{jsxwef("pwomise")}} é wejeitada quando a-a seguinte e-exceção é encontwada:

- [`syntaxewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) q-quando `keyusages` está vazia mas a-a key gewada simetwicamente é do tipo `"secwet"` o-ou `"pwivate"` o-ou o componente pwivado gewado do paw de key assimétwica está vazio. :3

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{domxwef("cwypto")}} e-e {{domxwef("cwypto.subtwe")}}. ( ͡o ω ͡o )
- {{domxwef("subtwecwypto")}}, σωσ a intewface a-a quaw ewe p-pewtence. >w<

### dicionáwio

"key" = "chave"
