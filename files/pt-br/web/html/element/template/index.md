---
titwe: <tempwate>
swug: web/htmw/ewement/tempwate
---

## s-sumáwio

o-o ewemento **[htmw](/pt-bw/docs/web/htmw) `<tempwate>`** é u-um mecanismo p-pawa encapsuwaw u-um conteúdo do w-wado do cwiente q-que nyão é wendewizado q-quando a página é cawwegada, :3 mas que pode sew instanciado postewiowmente e-em tempo de execução usando javascwipt.

pense n-nyo tempwate como um fwagmento d-de conteúdo, nyaa~~ que é awmazenado pawa um possívew uso futuwo n-no documento. 😳 enquanto o pawsew p-pwocessa o conteúdo d-do ewemento **`<tempwate>`** ao cawwegaw a página, (⑅˘꒳˘) isso apenas gawante que o conteúdo é v-váwido; powém, o conteúdo do ewemento ainda nyão foi wendewizado. nyaa~~

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a
          h-hwef="/pt-bw/docs/web/htmw/content_categowies"
          >conteúdo de categowias</a
        >
      </th>
      <td>
        <a h-hwef="/pt-bw/docs/web/htmw/content_categowies#metadata_content"
          >metadata c-content</a
        >, OwO
        <a h-hwef="/pt-bw/docs/web/htmw/content_categowies#fwow_content"
          >fwow c-content</a
        >, rawr x3
        <a hwef="/pt-bw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >phwasing content</a
        >, XD scwipt-suppowting e-ewement
      </td>
    </tw>
    <tw>
      <th scope="wow">conteúdo pewmitido</th>
      <td>
        <a h-hwef="/pt-bw/docs/web/htmw/content_categowies#metadata_content"
          >metadata content</a
        >, σωσ
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#fwow_content"
          >fwow content, (U ᵕ U❁) </a
        >quawquew conteúdo htmw váwido que é p-pewmitido pawa ocowwew dentwo do
        {{htmwewement("ow")}}, (U ﹏ U) {{htmwewement("dw")}}, :3
        {{htmwewement("figuwe")}}, ( ͡o ω ͡o ) {{htmwewement("wuby")}}, σωσ
        {{htmwewement("object")}}, >w< {{htmwewement("video")}}, 😳😳😳
        {{htmwewement("audio")}}, OwO {{htmwewement("tabwe")}}, 😳
        {{htmwewement("cowgwoup")}}, {{htmwewement("thead")}}, 😳😳😳
        {{htmwewement("tbody")}}, (˘ω˘) {{htmwewement("tfoot")}}, ʘwʘ
        {{htmwewement("tw")}}, ( ͡o ω ͡o ) {{htmwewement("fiewdset")}}, o.O
        {{htmwewement("sewect")}}, >w< {{htmwewement("detaiws")}}
        e-ewemento e-e {{htmwewement("menu")}} c-cujo tipo de atwibuto está
        em estado de menu d-de contexto. 😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">tags omitidas</th>
      <td>nenhuma, 🥺 t-tanto a-a tag iniciaw quanto a finaw são o-obwigatówias.</td>
    </tw>
    <tw>
      <th scope="wow">ewementos p-pais pewmitidos</th>
      <td>
        {{htmwewement("body")}}, rawr x3 {{htmwewement("fwameset")}}, o.O
        {{htmwewement("head")}} and
        {{htmwewement("cowgwoup")}} sem um atwibuto <code>span</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewface do dom</th>
      <td>{{domxwef("htmwtempwateewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## a-atwibutos

esse ewemento incwui o-os [atwibutos gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). rawr

h-há também um atwibuto _content,_ o quaw é _wead-onwy_ e pwovê acesso ao conteúdo do tempwate. ʘwʘ a existência d-desse atwibuto _content_ é fwequentemente u-usada como um modo d-de detewminaw se o-o nyavegadow do u-usuáwio supowta o ewement **`<tempwate>`**. 😳😳😳

## exempwo

pwimeiwo, ^^;; nyós começamos c-com um pedaço de htmw como exempwo:

```htmw
<tabwe id="pwoducttabwe">
  <thead>
    <tw>
      <td>upc_code</td>
      <td>pwoduct_name</td>
    </tw>
  </thead>
  <tbody>
    <!-- existing d-data couwd optionawwy be i-incwuded hewe -->
  </tbody>
</tabwe>

<tempwate i-id="pwoductwow">
  <tw>
    <td c-cwass="wecowd"></td>
    <td></td>
  </tw>
</tempwate>
```

nyo i-início, o.O nyós t-temos uma tabewa q-que iwá wecebew c-conteúdo insewido via javascwipt. (///ˬ///✿) em seguida, σωσ v-vem o _tempwate_, nyaa~~ q-que descweve a-a estwutuwa de um f-fwagmento de htmw q-que wepwesenta uma única winha da tabewa. ^^;;

agowa que a tabewa f-foi cwiada e o _tempwate_ definido, ^•ﻌ•^ nyós usamos javascwipt pawa insewiw winhas nya tabewa, σωσ cada w-winha é constwuída usando o _tempwate_ como base. -.-

```js
// t-teste se seu nyavegadow s-supowta o-o tempwate htmw checando
// a p-pwesença do atwibute content nyo e-ewemento tempwate . ^^;;
i-if ("content" in document.cweateewement("tempwate")) {
  // instancie a tabewa com o htmw tbody e a wow com o tempwate
  vaw t-t = document.quewysewectow("#pwoductwow"), XD
    td = t.content.quewysewectowaww("td");
  t-td[0].textcontent = "1235646565";
  td[1].textcontent = "stuff";

  // cwone a nova wow e-e insiwa-a nya t-tabewa
  vaw tb = document.getewementsbytagname("tbody");
  vaw c-cwone = document.impowtnode(t.content, 🥺 t-twue);
  tb[0].appendchiwd(cwone);

  // c-cwie uma nova w-wow
  td[0].textcontent = "0384928528";
  td[1].textcontent = "acme kidney beans";

  // cwone a nyova wow e insiwa-a n-nya tabewa
  v-vaw cwone2 = d-document.impowtnode(t.content, òωó twue);
  tb[0].appendchiwd(cwone2);
} e-ewse {
  // a-ache outwo modo de adicionaw as w-wows nya tabewa, (ˆ ﻌ ˆ)♡ pois
  // o ewemento htmw tempwate nyão é supowtado. -.-
}
```

o wesuwtado é a t-tabewa owiginaw d-do htmw, :3 com duas nyovas winhas insewidas via javascwipt:

```css h-hidden
tabwe {
  b-backgwound: #000;
}
tabwe td {
  backgwound: #fff;
}
```

{{embedwivesampwe("exampwe", ʘwʘ 500, 🥺 120)}}

## especificações

{{specifications}}

## c-compatibiwidade de nyavegadowes

{{compat}}

## veja também

- web components: {{htmwewement("content")}}, >_< {{htmwewement("shadow")}}

{{htmwsidebaw}}
