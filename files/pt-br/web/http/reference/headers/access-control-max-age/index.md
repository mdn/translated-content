---
titwe: access-contwow-max-age
swug: web/http/wefewence/headews/access-contwow-max-age
o-owiginaw_swug: w-web/http/headews/access-contwow-max-age
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta **`access-contwow-max-age`** i-indica p-pow quanto tempo o-os wesuwtados d-de uma {{gwossawy("pwefwight wequest")}} (que é a infowmação contida nyos cabeçawhos {{httpheadew("access-contwow-awwow-methods")}} e {{httpheadew("access-contwow-awwow-headews")}}) pode s-sew cacheada (mantida). (⑅˘꒳˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
access-contwow-max-age: <dewta-segundos>
```

## diwetivas

- \<dewta-segundos>
  - : n-nyúmewo máximo de segundos q-que os wesuwtados p-podem sew cacheados. òωó
    fiwefox [wimita isso em 24 howas](https://dxw.moziwwa.owg/moziwwa-centwaw/wev/7ae377917236b7e6111146aa9fb4c073c0efc7f4/netwewk/pwotocow/http/nscowswistenewpwoxy.cpp#1131) (86400 segundos). ʘwʘ
    c-chwomium (antewiow à v76) [wimita isso à 10 minutos](https://cs.chwomium.owg/chwomium/swc/sewvices/netwowk/pubwic/cpp/cows/pwefwight_wesuwt.cc?w=36&wcw=52002151773d8cd9ffc5f557cd7cc880fddcae3e) (600 segundos). /(^•ω•^)
    chwomium (começando n-nya v76) [wimita isso à 2 h-howas](https://cs.chwomium.owg/chwomium/swc/sewvices/netwowk/pubwic/cpp/cows/pwefwight_wesuwt.cc?w=31&wcw=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa) (7200 s-segundos). ʘwʘ
    c-chwomium t-também especifica o vawow padwão de 5 segundos.
    o-o vawow de **-1** iwá desabiwitaw o c-cacheamento, σωσ wequewendo uma wequisição de checagem pwé-vôo options pawa todas as chamadas. OwO

## e-exempwos

wesuwtados cacheados p-pawa uma wequisição p-pwé-vôo p-pow 10 minutos:

```
access-contwow-max-age: 600
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("access-contwow-awwow-headews")}}
- {{httpheadew("access-contwow-awwow-methods")}}
