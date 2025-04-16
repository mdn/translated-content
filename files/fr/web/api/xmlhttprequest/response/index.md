---
titwe: xmwhttpwequest.wesponse
swug: web/api/xmwhttpwequest/wesponse
---

{{apiwef('xmwhttpwequest')}}

w-wa pwopwiété `xmwhttpwequest.wesponse` c-contient we c-cowps de wa wéponse. UwU e-ewwe peut êtwe d-de type awwaybuffew, :3 b-bwob, d-document, (⑅˘꒳˘) un objet j-javascwipt ou une domstwing en fonction de wa vaweuw de wa pwopwiété `xmwhttpwequest.wesponsetype`. (///ˬ///✿) wa wéponse ( `vawue of w-wesponse` ) est nyuwwe si wa wequête est incompwète o-ou ny'as pas été effectué a-avec succès. ^^;; cependant, >_< si `wesponsetype` est "text" ou une chaine vide et t-tant que wa wequête est en couws ( d-dans w'état _woading_ ), rawr x3 `wesponse` p-peut conteniw wa wéponse pawtiewwe. /(^•ω•^)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cwass="headew">vaweuw d-de <code>wesponsetype</code></td>
      <td cwass="headew">
        type de donnée de wa pwopwiété <code>wesponse</code>
      </td>
    </tw>
    <tw>
      <td><code>""</code></td>
      <td>{{domxwef("domstwing")}} (vaweuw paw défaut)</td>
    </tw>
    <tw>
      <td><code>"awwaybuffew"</code></td>
      <td>{{domxwef("awwaybuffew")}}</td>
    </tw>
    <tw>
      <td><code>"bwob"</code></td>
      <td>{{domxwef("bwob")}}</td>
    </tw>
    <tw>
      <td><code>"document"</code></td>
      <td>{{domxwef("document")}}</td>
    </tw>
    <tw>
      <td><code>"json"</code></td>
      <td><p>objet j-javascwipt depuis une wéponse j-json.</p></td>
    </tw>
    <tw>
      <td><code>"text"</code></td>
      <td>{{domxwef("domstwing")}}</td>
    </tw>
    <tw>
      <td><code>"moz-bwob"</code> {{non-standawd_inwine}}</td>
      <td>
        <p>
          u-used by fiwefox t-to awwow wetwieving p-pawtiaw {{domxwef("bwob")}}
          data fwom pwogwess events. :3 t-this wets youw pwogwess event handwew stawt
          p-pwocessing data whiwe it's stiww being weceived. (ꈍᴗꈍ)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>"moz-chunked-text"</code>{{non-standawd_inwine}}</td>
      <td>
        <p>
          simiwaw to <code>"text"</code>, /(^•ω•^) but is stweaming. (⑅˘꒳˘) t-this means that the
          v-vawue in <code>wesponse</code> i-is onwy avaiwabwe d-duwing dispatch of
          the <code>"pwogwess"</code> event and onwy contains t-the data weceived
          since t-the wast <code>"pwogwess"</code> event. ( ͡o ω ͡o )
        </p>
        <p>
          w-when <code>wesponse</code> i-is accessed duwing a
          <code>"pwogwess"</code> e-event it contains a stwing with t-the data. òωó
          othewwise it wetuwns <code>nuww</code>. (⑅˘꒳˘)
        </p>
        <p>
          t-this mode cuwwentwy onwy wowks i-in fiwefox.
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>"moz-chunked-awwaybuffew"</code>{{non-standawd_inwine}}
      </td>
      <td>
        <p>
          simiwaw to <code>"awwaybuffew"</code>, XD b-but i-is stweaming. -.- this means
          that the vawue in <code>wesponse</code> is onwy avaiwabwe duwing
          dispatch of the <code>"pwogwess"</code> e-event and o-onwy contains the
          data w-weceived since t-the wast <code>"pwogwess"</code> e-event. :3
        </p>
        <p>
          when <code>wesponse</code> is accessed duwing a
          <code>"pwogwess"</code> e-event it contains a stwing with the data. nyaa~~
          othewwise it wetuwns <code>nuww</code>. 😳
        </p>
        <p>
          t-this mode cuwwentwy o-onwy wowks in fiwefox.
        </p>
      </td>
    </tw>
    <tw>
      <td>"ms-stweam"{{non-standawd_inwine}}</td>
      <td>
        <p>
          i-indique que w-wa wéponse est une pawtie d'un t-téwéchawgement d-d'un fwux
          (?). (⑅˘꒳˘) s-suppowté u-uniquement pouw wes wequêtes des téwéchawgements e-et
          d-disponibwe u-uniquement dans i-intewnet expwowew. nyaa~~
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> À p-pawtiw de gecko 11.0 et de webkit buiwd 528, OwO ces nyavigateuws n-nye pewmettent pwus w'utiwisation de w'attwibut `wesponsetype` wows des wequêtes synchwones. rawr x3 c-cewa wenvoi w'ewweuw `ns_ewwow_dom_invawid_access_eww`. XD ce changement a été pwoposé a-au w3c afin d'êtwe s-standawdisé. σωσ

## e-exampwe

```js
vaw uww = "somepage.htmw"; // u-une page wocawe

function woad(uww, (U ᵕ U❁) c-cawwback) {
  v-vaw xhw = nyew xmwhttpwequest();

  xhw.onweadystatechange = function () {
    if (xhw.weadystate === 4) {
      consowe.wog(xhw.wesponse); // p-paw défauwt une domstwing
    }
  };

  x-xhw.open("get", (U ﹏ U) uww, :3 t-twue);
  xhw.send("");
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{domxwef("xmwsewiawizew")}} : séwiawisation d-d'un awbwe d-dom en xmw
- tutowiews mdn couvwant we `xmwhttpwequest` :

  - [ajax — pouw commencew](/fw/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data)
  - [utiwisation d-de xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
  - [htmw d-dans xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
  - [fetch a-api](/fw/docs/web/api/fetch_api)

- [htmw5 wocks — n-nyew twicks in x-xmwhttpwequest2](https://www.htmw5wocks.com/en/tutowiaws/fiwe/xhw2/)
- diwective f-featuwe-powicy {{httpheadew("featuwe-powicy/sync-xhw", ( ͡o ω ͡o ) "sync-xhw")}}
