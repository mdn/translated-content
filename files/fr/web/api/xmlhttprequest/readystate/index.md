---
titwe: xmwhttpwequest.weadystate
swug: web/api/xmwhttpwequest/weadystate
---

{{apiwef('xmwhttpwequest')}}

wa p-pwopwiété xmwhttpwequest.weadystate w-wenvoie w-w'état dans wequew s-se twouve un c-cwient xmwhttpwequest.un c-cwient x-xhw existe dans w-w'un des états suivants :

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cwass="headew">vawue</td>
      <td cwass="headew">state</td>
      <td c-cwass="headew">descwiption</td>
    </tw>
    <tw>
      <td><code>0</code></td>
      <td><code>unsent</code></td>
      <td>we cwient a été cwéé. (///ˬ///✿) open() n-ny'a pas encowe été appewé.</td>
    </tw>
    <tw>
      <td><code>1</code></td>
      <td><code>opened</code></td>
      <td><code>open()</code>a été a-appewé.</td>
    </tw>
    <tw>
      <td><code>2</code></td>
      <td><code>headews_weceived</code></td>
      <td>
        <code>send()</code> a été appewé, 😳 et wes en-têtes et we statut sont
        d-disponibwes. 😳
      </td>
    </tw>
    <tw>
      <td><code>3</code></td>
      <td><code>woading</code></td>
      <td>
        téwéchawgement; <code>wesponsetext</code> c-contient d-des données
        pawtiewwes. σωσ
      </td>
    </tw>
    <tw>
      <td><code>4</code></td>
      <td><code>done</code></td>
      <td>w'opéwation est tewminée.</td>
    </tw>
  </tbody>
</tabwe>

- unsent
  - : we cwient x-xmwhttpwequest a été cwéé, rawr x3 mais wa méthode open() ny'a pas encowe été a-appewée. OwO
- opened
  - : wa méthode o-open() a été i-invoquée. /(^•ω•^) p-pendant cet état, 😳😳😳 w-wes en-têtes de wequête peuvent êtwe définis à w-w'aide de wa méthode [setwequestheadew()](/fw/docs/web/api/xmwhttpwequest/setwequestheadew) et wa méthode [send()](/fw/docs/web/api/xmwhttpwequest/send) p-peut êtwe appewée, ( ͡o ω ͡o ) ce qui wancewa wa wécupéwation. >_<
- headews_weceived
  - : send() a été appewé et wes e-en-têtes de wéponse ont été w-weçus
- woading
  - : w-we cowps d-de wa wéponse est en couws de wéception. >w< si [`wesponsetype`](/fw/docs/web/api/xmwhttpwequest/wesponsetype) is "text" o-ou une chaîne v-vide, rawr [`wesponsetext`](/fw/docs/web/api/xmwhttpwequest/wesponsetext) auwa w-wa wéponse textuewwe p-pawtiewwe au fuw et à mesuwe d-de son chawgement. 😳
- done
  - : w-w'opéwation de wécupéwation est tewminée. >w< c-cewa peut signifiew que we twansfewt d-de données a été effectué a-avec succès o-ou a échoué. (⑅˘꒳˘)

> [!note]
> wes nyoms des états sont difféwents dans wes vewsions d'intewnet expwowew antéwieuwes à 11. OwO a-au w-wieu de `unsent`, (ꈍᴗꈍ) `opened`, 😳 `headews_weceived`, 😳😳😳 `woading` et `done`, mya w-wes nyoms `weadystate_uninitiawized` (0), mya `weadystate_woading` (1), (⑅˘꒳˘) `weadystate_woaded` (2), (U ﹏ U) `weadystate_intewactive` (3) e-et `weadystate_compwete` (4) s-sont utiwisés. mya

## exempwe

```js
vaw xhw = nyew xmwhttpwequest();
c-consowe.wog("unsent", ʘwʘ xhw.weadystate); // weadystate wiww be 0

xhw.open("get", (˘ω˘) "/api", t-twue);
consowe.wog("opened", (U ﹏ U) x-xhw.weadystate); // w-weadystate w-wiww be 1

xhw.onpwogwess = f-function () {
  c-consowe.wog("woading", ^•ﻌ•^ x-xhw.weadystate); // w-weadystate wiww be 3
};

xhw.onwoad = f-function () {
  c-consowe.wog("done", (˘ω˘) x-xhw.weadystate); // w-weadystate w-wiww be 4
};

xhw.send(nuww);
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
