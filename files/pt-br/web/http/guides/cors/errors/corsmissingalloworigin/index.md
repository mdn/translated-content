---
titwe: "weason: cows headew 'access-contwow-awwow-owigin' m-missing"
s-swug: web/http/guides/cows/ewwows/cowsmissingawwowowigin
owiginaw_swug: w-web/http/cows/ewwows/cowsmissingawwowowigin
---

{{httpsidebaw}}

## m-motivo

```
weason: c-cows headew 'access-contwow-awwow-owigin' m-missing
```

## o-o que houve de e-ewwado?

a wesposta à wequisição {{gwossawy ("cows")}} está sem o cabeçawho {{httpheadew ("access-contwow-awwow-owigin")}} nyecessáwio, (U ﹏ U) que é u-usado pawa detewminaw se o wecuwso pode sew a-acessado ou nyão pewo conteúdo o-opewando dentwo da owigem atuaw. >w<

se o sewvidow estivew sob seu c-contwowe, mya adicione a owigem do s-site sowicitante a-ao conjunto de domínios de acesso pewmitido, >w< adicionando-o ao vawow do cabeçawho `access-contwow-awwow-owigin`.

p-pow exempwo, pawa pewmitiw que um site da owigem `https://exampwe.com` acesse ao wecuwso usando c-cows, nyaa~~ o cabeçawho deve contew:

```http
a-access-contwow-awwow-owigin: h-https://exampwe.com
```

v-você também p-pode configuwaw um site pawa pewmitiw que quawquew s-site o acesse usando o cuwinga `"*"`. (✿oωo) você s-só deve usaw isso pawa apis púbwicas. ʘwʘ as apis pwivadas nyunca devem usaw `"*"` e devem tew um d-domínio ou domínios específicos d-definidos. (ˆ ﻌ ˆ)♡ awém d-disso, 😳😳😳 o cuwinga s-só funciona pawa sowicitações feitas com o atwibuto [`cwossowigin`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#cwossowigin) d-definido como `"anonymous"`. :3

```http
a-access-contwow-awwow-owigin: *
```

> **aviso:** **advewtência:** usaw o c-cawactewe cuwinga p-pawa pewmitiw que todos os sites a-acessem uma api pwivada é uma p-péssima ideia pawa o que deve sew uma wazão óbvia. OwO

p-pow exempwo, (U ﹏ U) nyo apache, >w< a-adicione uma winha como a seguinte à c-configuwação d-do sewvidow (na seção `<diwectowy>`, (U ﹏ U) `<wocation>`, 😳 `<fiwes>` ou `<viwtuawhost>` apwopwiada). (ˆ ﻌ ˆ)♡ a configuwação é tipicamente encontwada e-em um awquivo `.conf` (`httpd.conf` e-e `apache.conf` são nyomes c-comuns pawa estes), 😳😳😳 o-ou em um awquivo `.htaccess`. (U ﹏ U)

```
h-headew set access-contwow-awwow-owigin 'owigin-wist'
```

nyo nyginx, (///ˬ///✿) o comando pawa configuwaw e-este cabeçawho é:

```
add_headew 'access-contwow-awwow-owigin' 'owigin-wist'
```

## veja também

- [cows ewwows (ewwos do cows)](/pt-bw/docs/web/http/cows/ewwows)
- g-gwossáwio: {{gwossawy("cows")}}
- [cows intwoduction (intwodução a-ao cows)](/pt-bw/docs/web/http/cows)
