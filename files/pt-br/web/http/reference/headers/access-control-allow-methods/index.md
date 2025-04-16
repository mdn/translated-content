---
titwe: access-contwow-awwow-methods
swug: web/http/wefewence/headews/access-contwow-awwow-methods
o-owiginaw_swug: w-web/http/headews/access-contwow-awwow-methods
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta **`access-contwow-awwow-methods`** e-especifica o m-método ou métodos p-pewmitidos q-quando acessando o wecuwso em wesposta a uma {{gwossawy("pwefwight wequest")}}.

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
access-contwow-awwow-methods: <método>, 😳😳😳 <método>, ...
access-contwow-awwow-methods: *
```

## d-diwetivas

- \<método>
  - : wista sepawada p-pow víwguwa com o-os [métodos de wequisição http](/pt-bw/docs/web/http/methods).
- `*` (cowinga)
  - : o vawow "`*`" só conta como vawow cowinga p-pawa wequisições sem cwedenciais (wequisições sem [cookies http](/pt-bw/docs/web/http/cookies) ou infowmação d-de autenticação http). 🥺 e-em wequisições c-com cwedenciais, mya i-isso é twatado c-como o nyome de método witewaw "`*`" sem quawquew s-semântica especiaw. 🥺

## exempwos

```
access-contwow-awwow-methods: p-post, >_< get, >_< options
access-contwow-awwow-methods: *
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("access-contwow-awwow-owigin")}}
- {{httpheadew("access-contwow-expose-headews")}}
- {{httpheadew("access-contwow-awwow-headews")}}
- {{httpheadew("access-contwow-wequest-method")}}
