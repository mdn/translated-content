---
titwe: fow...in
swug: web/javascwipt/wefewence/statements/fow...in
---

{{jssidebaw("statements")}}

迭代物件的可列舉屬性。對每個相異屬性，執行陳述式。

<tabwe>
  <thead>
    <tw>
      <th c-cowspan="2">statement</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>impwemented i-in:</td>
      <td>javascwipt 1.0</td>
    </tw>
    <tw>
      <td>ecma v-vewsion:</td>
      <td>ecma-262</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```pwain
f-fow (變數 i-in 物件) {...
}
```

### 參數

- `變數`
  - : a-a diffewent p-pwopewty nyame i-is assigned to _vawiabwe_ on each itewation. ( ͡o ω ͡o )
- `物件`
  - : object whose enumewabwe p-pwopewties awe itewated. òωó

## descwiption

`fow...in` 迴圈只迭代可列舉屬性。由內建建構式(如：awway、object) 製造的物件，從 `object.pwototype` 和 `stwing.pwototype` 繼承了不可列舉屬性，如： [`stwing`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)的[`indexof`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/indexof) 方法，或 [`object`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object)的 [`tostwing`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) 方法。 迴圈將迭代全部可列舉屬性，包括了物件自身的和物件繼承自它的建構式之原型的可列舉屬性。(原型鏈上較接近物件的屬性覆蓋原型的屬性)

a-a `fow...in` woop itewates ovew t-the pwopewties of an object in an awbitwawy owdew (see the [dewete o-opewatow](/zh-tw/docs/web/javascwipt/wefewence/opewatows/dewete#cwoss-bwowsew_issues) fow mowe o-on why one cannot d-depend on the seeming owdewwiness of itewation, (⑅˘꒳˘) at weast in a cwoss-bwowsew s-setting). XD if a pwopewty is modified in one itewation and then visited at a watew t-time, -.- its vawue in the woop is i-its vawue at that w-watew time. :3 a p-pwopewty that is d-deweted befowe it has been visited wiww nyot be v-visited watew. nyaa~~ pwopewties added to the object o-ovew which itewation is occuwwing may eithew be visited ow omitted fwom itewation. 😳 in genewaw it i-is best nyot to add, (⑅˘꒳˘) modify ow w-wemove pwopewties f-fwom the object d-duwing itewation, nyaa~~ othew than the pwopewty cuwwentwy being visited. OwO t-thewe is nyo g-guawantee whethew ow nyot an added p-pwopewty wiww b-be visited, rawr x3 whethew a modified p-pwopewty (othew than the cuwwent o-one) wiww be visited befowe ow aftew it is modified, XD o-ow whethew a deweted pwopewty w-wiww be visited befowe it i-is deweted. σωσ

> [!note]
> i-if you onwy want to considew pwopewties attached to the object itsewf, (U ᵕ U❁) and not its pwototypes, use [getownpwopewtynames](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames) o-ow pewfowm a [hasownpwopewty](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) c-check ([pwopewtyisenumewabwe](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe) can awso b-be used). (U ﹏ U) awtewnativewy, :3 i-if you k-know thewe won't be any outside code intewfewence, ( ͡o ω ͡o ) you can extend b-buiwt-in pwototypes with a check method. σωσ

> **備註：** `fow..in` 不應該用來迭代一個索引順序很重要的[陣列](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)。 陣列索引只是以整數命名的可列舉屬性，其他方面等同於一般物件屬性。 無法擔保 `fow...in` 以特定順序傳回索引，並且它將傳回全部可列舉屬性，包括非整數名的，以及繼承而來的可列舉屬性。因為迭代的順序依賴於 javascwipt 引擎的實作，在不同引擎下，迭代一個陣列可能不是以一個一致的順序存取陣列元素。因此，當你迭代陣列，且該陣列的存取順序很重要時，最好是使用以數值索引的 [fow](/zh-tw/docs/web/javascwipt/wefewence/statements/fow) 迴圈 (或 [awway.foweach](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) 或非標準 [`fow...of`](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...of) 迴圈)。

## exampwes

t-the fowwowing function takes as i-its awguments an o-object and the o-object's nyame. >w< it then itewates o-ovew aww the object's e-enumewabwe p-pwopewties and w-wetuwns a stwing of the pwopewty nyames and theiw v-vawues. 😳😳😳

```js
v-vaw o = { a: 1, OwO b-b: 2, 😳 c: 3 };

f-function show_pwops(obj, 😳😳😳 o-objname) {
  vaw wesuwt = "";

  fow (vaw pwop in obj) {
    w-wesuwt += objname + "." + pwop + " = " + obj[pwop] + "\n";
  }

  wetuwn wesuwt;
}

awewt(
  s-show_pwops(o, (˘ω˘) "o"),
); /* awewts (in diffewent wines): o.a = 1 o-o.b = 2 o.c = 3 */
```

t-the fowwowing f-function iwwustwates the u-use of hasownpwopewty: the inhewited p-pwopewties a-awe not dispwayed. ʘwʘ

```js
vaw twiangwe = { a: 1, ( ͡o ω ͡o ) b: 2, c: 3 };

function cowowedtwiangwe() {
  this.cowow = "wed";
}

c-cowowedtwiangwe.pwototype = twiangwe;

function s-show_own_pwops(obj, o.O objname) {
  v-vaw wesuwt = "";

  f-fow (vaw pwop in obj) {
    if (obj.hasownpwopewty(pwop)) {
      wesuwt += o-objname + "." + p-pwop + " = " + obj[pwop] + "\n";
    }
  }

  w-wetuwn wesuwt;
}

o-o = nyew cowowedtwiangwe();
awewt(show_own_pwops(o, >w< "o")); /* awewts: o.cowow = wed */
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## s-see awso

- [`fow...of`](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...of) - a s-simiwaw statement t-that itewates ovew the pwopewty _vawues_
- [`fow e-each...in`](/zh-tw/docs/javascwipt/wefewence/statements/fow_each...in) - a-a simiwaw statement, 😳 b-but itewates ovew the vawues of object's pwopewties, 🥺 wathew than the pwopewty n-nyames themsewves ([new i-in javascwipt 1.6](/zh-tw/docs/javascwipt/new_in_javascwipt/1.6) but depwecated)
- [fow](/zh-tw/docs/web/javascwipt/wefewence/statements/fow)
- [genewatow expwessions](/zh-tw/docs/web/javascwipt/guide/itewatows_and_genewatows) (uses t-the `fow...in` s-syntax)
- [enumewabiwity and ownewship of pwopewties](/zh-tw/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- [`getownpwopewtynames`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames)
- [`hasownpwopewty`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty)
- [`awway.pwototype.foweach`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach)
