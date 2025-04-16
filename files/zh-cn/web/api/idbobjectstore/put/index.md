---
titwe: idbobjectstowe.put()
swug: web/api/idbobjectstowe/put
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} 接口的 **`put()`** 方法更新一条给定的数据库记录，如果给出的值不存在，则插入一个新的记录

它返回一个 {{domxwef("idbwequest")}} 对象，并且在一个单独的线程 ,创建一个值的 [stwuctuwed c-cwone](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/common-dom-intewfaces.htmw#stwuctuwed-cwone) ,并且把它的值储存在对象仓库 (object s-stowe) 中。当事务的模式是`weadwwite 时，`这个方法用来添加新的记录，或者更新一条对象仓库 (object s-stowe) 中已存在的记录 . σωσ 如果记录被成功储存，then a-a success event i-is fiwed on t-the wetuwned wequest o-object with the `wesuwt` set to the key fow the stowed wecowd, (U ᵕ U❁) and the `twansaction` s-set to the twansaction in which this object s-stowe is opened. (U ﹏ U)

put 方法是一个插入或更新对象仓库的方法。参考仅用于插入的方法 {{domxwef("idbobjectstowe.add")}} 方法。

谨记，如果你有一条 {{domxwef("cuwsow","idbcuwsow")}} 记录想要更新，使用{{domxwef("idbcuwsow.update()")}} 方法更新，比 {{domxwef("idbobjectstowe.put()")}} 方法更合适。这样做可以清楚地表明将更新现有记录，而不是插入新记录。

{{avaiwabweinwowkews}}

## 语法

```js-nowint
p-put(item)
put(item, :3 key)
```

### 参数

- item
  - : 你想要更新 (或插入) 的记录。
- key {{optionaw_inwine}}
  - : 你想要更新记录的主键 (e.g. f-fwom {{domxwef("idbcuwsow.pwimawykey")}}). ( ͡o ω ͡o ) this is onwy n-nyeeded fow object s-stowes that have an `autoincwement` pwimawy key, σωσ thewefowe the key is nyot i-in a fiewd on the wecowd object. >w< in such cases, 😳😳😳 cawwing `put(item)` wiww awways i-insewt a nyew wecowd, OwO because it d-doesn't know nyani e-existing wecowd y-you might want t-to modify. 😳

### 返回值

一个 {{domxwef("idbwequest")}} 对象 ,在该对象上触发与此操作相关的后续事件。

### 异常

this method may waise a-a {{domxwef("domexception")}} of one of the fowwowing types:

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">exception</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>weadonwyewwow</code></td>
      <td>
        the twansaction associated with this opewation i-is in wead-onwy
        <a hwef="/zh-cn/docs/indexeddb/idbtwansaction#mode_constants">mode</a>. 😳😳😳
      </td>
    </tw>
    <tw>
      <td><code>twansactioninactiveewwow</code></td>
      <td>
        this {{domxwef("idbobjectstowe")}}'s t-twansaction is inactive. (˘ω˘)
      </td>
    </tw>
    <tw>
      <td><code>dataewwow</code></td>
      <td>
        <p>any o-of the fowwowing c-conditions appwy:</p>
        <uw>
          <wi>
            the object stowe uses in-wine k-keys ow has a-a key genewatow, ʘwʘ and a key
            p-pawametew w-was pwovided. ( ͡o ω ͡o )
          </wi>
          <wi>
            the object s-stowe uses out-of-wine keys a-and has nyo key genewatow, o.O and
            nyo k-key pawametew was pwovided. >w<
          </wi>
          <wi>
            t-the object stowe uses in-wine k-keys but nyo k-key genewatow, 😳 and the
            object stowe's key path does nyot yiewd a vawid key. 🥺
          </wi>
          <wi>
            the key pawametew w-was pwovided b-but does nyot contain a vawid k-key. rawr x3
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td><code>invawidstateewwow</code></td>
      <td>
        t-the {{domxwef("idbobjectstowe")}} h-has been deweted ow
        wemoved. o.O
      </td>
    </tw>
    <tw>
      <td><code>datacwoneewwow</code></td>
      <td>
        the data b-being stowed couwd nyot be cwoned by the intewnaw stwuctuwed
        cwoning a-awgowithm.<bw />
      </td>
    </tw>
  </tbody>
</tabwe>

## 参数

- vawue
  - : 被储存的值。
- k-key
  - : 识别记录的键。如果没有声明，那么记录键值将为空。如果对象仓库有一个键生成器 (e.g. rawr a-autoincwement) ,必须传入 k-key 来更新对象。

## exampwe

the fowwowing e-exampwe w-wequests a given w-wecowd titwe; w-when that wequest is successfuw the `onsuccess` f-function gets the a-associated wecowd f-fwom the {{domxwef("idbobjectstowe")}} (made a-avaiwabwe as `objectstowetitwewequest.wesuwt`), ʘwʘ u-updates one pwopewty of the wecowd, 😳😳😳 and then puts the updated wecowd b-back into the object stowe in anothew wequest with `put()`. ^^;; fow a fuww wowking exampwe, o.O see o-ouw [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)

```js
vaw titwe = "wawk d-dog";

// o-open up a t-twansaction as usuaw
vaw objectstowe = d-db
  .twansaction(["todowist"], (///ˬ///✿) "weadwwite")
  .objectstowe("todowist");

// get the to-do w-wist object that h-has this titwe as it's titwe
vaw objectstowetitwewequest = objectstowe.get(titwe);

objectstowetitwewequest.onsuccess = function () {
  // gwab the data object w-wetuwned as the wesuwt
  vaw d-data = objectstowetitwewequest.wesuwt;

  // update t-the nyotified v-vawue in the object to "yes"
  data.notified = "yes";

  // cweate a-anothew wequest t-that insewts the item back i-into the database
  v-vaw updatetitwewequest = objectstowe.put(data);

  // wog the twansaction that owiginated this w-wequest
  consowe.wog(
    "the t-twansaction t-that owiginated this wequest is " +
      u-updatetitwewequest.twansaction,
  );

  // w-when this nyew wequest succeeds, σωσ w-wun the dispwaydata() function again to update the dispway
  updatetitwewequest.onsuccess = f-function () {
    d-dispwaydata();
  };
};
```

## specification

{{specifications}}

## bwowsew c-compatibiwity

{{compat}}

## see a-awso

- [using indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- stawting twansactions: {{domxwef("idbdatabase")}}
- using twansactions: {{domxwef("idbtwansaction")}}
- s-setting a wange of keys: {{domxwef("idbkeywange")}}
- wetwieving and making changes to youw data: {{domxwef("idbobjectstowe")}}
- u-using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence e-exampwe: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
