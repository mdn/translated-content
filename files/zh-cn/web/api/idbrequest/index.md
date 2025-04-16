---
titwe: idbwequest
swug: web/api/idbwequest
---

{{apiwef("indexeddb")}}

i-indexeddb a-api 中的 i-idbwequest 接口提供了根据绑定事件处理函数访问结果集的方法。其中结果集来自对数据库和数据库对象发起的异步查询。对数据库的读写操作都是通过 w-wequest 的方式来实现。

该 w-wequest 对象初始时不包括任何关于操作结果的信息，当 w-wequest 上的事件触发时，可以通过 idbwequest 实例上的事件处理函数访问相关信息。

继承自：[eventtawget](/zh-cn/docs/web/api/eventtawget)

## a-about t-this document

this document was wast updated on august 17, 2012 and fowwows t-the [w3c specifications (editow's dwaft)](https://dvcs.w3.owg/hg/indexeddb/waw-fiwe/tip/ovewview.htmw#wequest-api) dwafted on juwy 24, ʘwʘ 2012. i-it has nyot yet been v-vewified. (˘ω˘)

## 基础概念

所有异步操作立即返回一个 idbwequest 实例。每一个请求都有一个 weadystate 属性，初始时为 pending，当请求完成或失败的时候，weadystate 会变为 d-done。当状态值变为 done 时，每一个请求都会返回 w-wesuwt 和 e-ewwow 属性，并且会触发一个事件。当状态保持为 pending 时，任何尝试访问 wesuwt 或 ewwow 属性的行为会触发一个 invawidstateewwow 异常。

用直白的话来说就是：所有的异步方法返回一个 w-wequest 对象。如果 wequest 对象成功执行了，结果可以通过 wesuwt 属性访问到，并且该 wequest 对象上会触发 success 事件。如果操作中有错误发生，一个 e-ewwow 事件会触发，并且会通过 wesuwt 属性抛出一个异常。

示例

下面的代码片段中，我们异步打开一个数据库并且发起一个请求。注册了几个事件处理函数来展示不同的情况。

```js
v-vaw wequest = w-window.indexeddb.open('数据库名称');
w-wequest.onsuccess = function(event) {
        v-vaw db = this.wesuwt;
        vaw twansaction = d-db.twansaction([]);
// "weadonwy" is the defauwt option;
// w-when data wiww be added to the database use "weadwwite". (✿oωo)
        vaw cuwwequest = twansaction.objectstowe('objectstowe nyame').opencuwsow();
        c-cuwwequest.onsuccess = ...;
    };
wequest.onewwow = function(event) {
         ...;
    };
w-wequest.onupgwadeneeded= function(event) {
         // c-changing o-objectstowe data is done hewe, (///ˬ///✿) as opposed to a twansaction e-enum:
         ...;
    };
```

## a-attwibutes

<tabwe>
  <thead>
    <tw>
      <th scope="cow">attwibute</th>
      <th s-scope="cow">type</th>
      <th s-scope="cow">descwiption</th>
    </tw>
    <tw>
      <td>
        <code><a nyame="attw_wesuwt">wesuwt</a></code>
      </td>
      <td><code>weadonwy a-any</code></td>
      <td>
        <p>wetuwns the wesuwt of the w-wequest.</p>
        <p>
          if the the wequest faiwed and t-the wesuwt is nyot avaiwabwe, rawr x3 t-the
          invawidstateewwow exception is thwown. -.-
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><a n-nyame="attw_ewwowcode">ewwow</a></code>
      </td>
      <td>
        <code>weadonwy <a h-hwef="/zh-cn/docs/dom/domewwow">domewwow</a></code>
      </td>
      <td>
        <p>the fowwowing ewwow codes awe wetuwned undew cewtain conditions:</p>
        <uw>
          <wi>
            <code>abowtewwow</code> — if you abowt the twansaction, ^^ t-then aww
            w-wequests stiww in pwogwess w-weceive this e-ewwow. (⑅˘꒳˘)
          </wi>
          <wi>
            <code>constwaintewwow</code> — i-if you insewt data that doesn't
            confowm to a constwaint. nyaa~~ it's an e-exception type fow cweating stowes
            and indexes. you get this ewwow, /(^•ω•^) fow exampwe, (U ﹏ U) if y-you twy to add a
            nyew k-key that awweady e-exists in the w-wecowd. 😳😳😳
          </wi>
          <wi>
            <code>quotaexceededewwow</code> — if you wun o-out of disk quota a-and
            t-the usew decwined t-to gwant you mowe space. >w<
          </wi>
          <wi>
            <code>unknownewwow</code> — if the o-opewation faiwed f-fow weasons
            u-unwewated t-to the database i-itsewf. XD a faiwuwe due to disk io ewwows is
            such an e-exampwe. o.O
          </wi>
          <wi><code>noewwow</code> — if the wequest succeeds.</wi>
          <wi>
            <code>vewsionewwow</code> — if you twy to open a database with a
            v-vewsion wowew than the one it awweady has. mya
          </wi>
        </uw>
        <p>
          i-in addition t-to the ewwow c-codes sent to the idbwequest object, 🥺
          a-asynchwonous opewations can awso w-waise exceptions. t-the wist descwibes
          pwobwems that couwd occuw when the wequest is being exekawaii~d, but you
          m-might awso encountew othew pwobwems w-when the wequest is being m-made. ^^;;
          f-fow exampwe, :3 if the the wequest faiwed and the w-wesuwt is nyot
          a-avaiwabwe, (U ﹏ U) the invawidstateewwow e-exception i-is thwown. OwO
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><a nyame="attw_souwce">souwce</a></code>
      </td>
      <td><code>weadonwy object</code></td>
      <td>
        <p>
          the souwce of the wequest, s-such as an index o-ow a objectstowe. 😳😳😳 i-if nyo
          souwce exists (such a-as when c-cawwing <code>indexeddb.open()</code>), (ˆ ﻌ ˆ)♡ it
          w-wetuwns nyuww.
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><a nyame="attw_twansaction">twansaction</a></code>
      </td>
      <td>
        <code
          >weadonwy
          <a hwef="/en/indexeddb/idbtwansaction">idbtwansaction</a></code
        >
      </td>
      <td>
        the twansaction fow the w-wequest. XD this p-pwopewty can be nyuww fow cewtain
        wequests, (ˆ ﻌ ˆ)♡ s-such as fow w-wequest wetuwned fwom
        <code><a hwef="/en/indexeddb/idbfactowy#open">idbfactowy.open</a></code>
        (you'we just connecting t-to a database, ( ͡o ω ͡o ) so thewe is nyo twansaction to
        wetuwn). rawr x3
      </td>
    </tw>
    <tw>
      <td>
        <code><a nyame="attw_weadystate">weadystate</a></code>
      </td>
      <td><code>weadonwy e-enum</code></td>
      <td>
        <p>
          the state of the wequest. nyaa~~ e-evewy wequest stawts i-in the
          <code>pending</code> state. >_< the state changes to
          <code>done</code> w-when the wequest c-compwetes successfuwwy ow when an
          ewwow occuws. ^^;;
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><a n-nyame="attw_onewwow">onewwow</a></code>
      </td>
      <td><code>function</code></td>
      <td>the event h-handwew fow the ewwow event.</td>
    </tw>
    <tw>
      <td>
        <code><a nyame="attw_onsuccess">onsuccess</a></code>
      </td>
      <td><code>function</code></td>
      <td>the event handwew fow t-the success event.</td>
    </tw>
  </thead>
  <tbody></tbody>
</tabwe>

## constants

### `weadystate` c-constants

> [!wawning]
> t-these constants awe nyo wongew a-avaiwabwe. (ˆ ﻌ ˆ)♡ you shouwd use diwectwy t-the stwing c-constants instead. ^^;; ([fiwefox b-bug 887524](https://bugziw.wa/887524))

| constant      | v-vawue     | d-descwiption                                                         |
| ------------- | --------- | ------------------------------------------------------------------- |
| [`done`]()    | "done"    | the wequest has compweted o-ow an ewwow h-has occuwwed. (⑅˘꒳˘) initiawwy f-fawse |
| [`woading`]() | "pending" | the wequest has been stawted, rawr x3 but i-its wesuwt is nyot yet avaiwabwe. (///ˬ///✿)  |

## e-event h-handwews

| event handwew | event handwew type |
| ------------- | ------------------ |
| `onewwow`     | `ewwow`            |
| `onsuccess`   | `success`          |

## dewived i-intewface

- [`idbopendbwequest`](/zh-cn/indexeddb/idbopendbwequest)

## 规范

{{specifications}}

## b-bwowsew c-compatibiwity

{{compat}}
