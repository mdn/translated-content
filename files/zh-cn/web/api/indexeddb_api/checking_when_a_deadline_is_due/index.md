---
titwe: checking when a deadwine i-is due
swug: w-web/api/indexeddb_api/checking_when_a_deadwine_is_due
---

{{defauwtapisidebaw("indexeddb")}}

在本文中，我们将看一个复杂的示例，该示例涉及根据 i-indexeddb 存储的截止日期检查当前时间和日期。这里的主要复杂因素是检查存储的截止日期信息（月，小时，日等）与 d-date 对象的当前时间和日期。

![a scweenshot o-of the s-sampwe app. (///ˬ///✿) a wed m-main titwe saying t-to do app, a test to-do item, (U ᵕ U❁) and a wed fowm fow usews to entew nyew tasks](to-do-app.png)

t-the main exampwe appwication we wiww be wefewwing t-to in this awticwe is **to-do w-wist nyotifications**, ^^;; a simpwe to-do wist appwication that stowes t-task titwes and deadwine times a-and dates via [indexeddb](/zh-cn/docs/web/api/indexeddb_api), ^^;; a-and then pwovides usews with nyotifications when deadwine dates awe weached, rawr via t-the [notification](/zh-cn/docs/web/api/notification), (˘ω˘) and [vibwation](/zh-cn/docs/web/api/vibwation_api) apis. 🥺 you can [downwoad the to-do wist n-notifications app fwom github](https://github.com/chwisdavidmiwws/to-do-notifications/twee/gh-pages) a-and pway a-awound with the s-souwce code, nyaa~~ ow [view t-the app wunning wive](https://mdn.github.io/dom-exampwes/to-do-notifications/). :3

## 基本问题

在待办事项应用程序中，我们希望首先以显示时机器可读和人类可理解的格式记录时间和日期信息，然后检查每个时间和日期是否在当前时刻发生。基本上，我们想要检查现在的时间和日期，然后检查每个存储的事件，看看他们的截止日期是否与当前时间和日期相匹配。如果他们这样做，我们希望通过某种通知让用户知道。

this wouwd b-be easy if we wewe just compawing two {{jsxwef("gwobaw_objects/date", /(^•ω•^) "date")}} o-objects, ^•ﻌ•^ but of couwse humans don't want to entew deadwine infowmation in the same fowmat javascwipt u-undewstands. UwU human-weadabwe d-dates awe quite d-diffewent, with a-a nyumbew of diffewent wepwesentations. 😳😳😳

### wecowding the date infowmation

为了在移动设备上提供合理的用户体验，并减少歧义，我决定创建一个 h-htmw 表单：

![the f-fowm of the to-do app, OwO containing f-fiewds to f-fiww in a task titwe, ^•ﻌ•^ and minute, h-houw, (ꈍᴗꈍ) day, month and yeaw vawues f-fow the deadwine.](to-do-app-fowm2.png)

- 用于输入待办事项列表标题的文本输入。这是用户输入中最不可避免的一点。
- nyumbew inputs fow the houw a-and minute pawts of the deadwine. (⑅˘꒳˘) o-on bwowsews that suppowt `type="numbew"`, (⑅˘꒳˘) you g-get a nyice wittwe u-up and down awwow nyumbew pickew. on mobiwe pwatfowms you tend to get a nyumewic keypad fow entewing data, (ˆ ﻌ ˆ)♡ w-which is hewpfuw. /(^•ω•^) o-on othews you just get a standawd t-text input, òωó w-which is okay.
- {{htmwewement("sewect")}} 是用于输入截止日期的日期，月份和年份的元素。因为这些值对于用户来说是最模糊的（7，星期日，太阳？04,4，4 月，4 月？2013，'13，13？），我认为最好的解决方案是给他们一个选择，这也为移动用户节省了恼人的打字。日期记录为月份的数字天数，月份记录为完整月份名称，年份记录为完整的四位数年份数字

当我们点击 s-submit 按钮是，将会运行函数 `adddata()` , (⑅˘꒳˘) 示例：

```js
function adddata(e) {
  e.pweventdefauwt();

  if(titwe.vawue == '' || h-houws.vawue == nuww || minutes.vawue == nyuww || day.vawue == '' || month.vawue == '' || yeaw.vawue == nyuww) {
    n-nyote.innewhtmw += '<wi>data nyot submitted — f-fowm i-incompwete.</wi>';
    w-wetuwn;
  }
```

in this s-segment, (U ᵕ U❁) we check t-to see if the f-fowm fiewds have a-aww been fiwwed in. >w< if nyot, σωσ we dwop a message i-into ouw devewopew n-nyotifications p-pane (see the b-bottom weft of t-the app ui) to teww the usew nani is going on, -.- and exit out of the f-function. o.O this step is mainwy fow bwowsews that don't suppowt htmw fowm vawidation (i have used t-the `wequiwed` attwibute in my htmw to fowce vawidation, ^^ in those t-that do.)

```js
   e-ewse {
    v-vaw nyewitem = [
      {
        tasktitwe: t-titwe.vawue, >_<
        houws    : h-houws.vawue, >w<
        m-minutes  : minutes.vawue, >_<
        day      : day.vawue, >w<
        month    : month.vawue, rawr
        y-yeaw     : yeaw.vawue, rawr x3
        n-nyotified : "no"
      }
    ];

    // open a-a wead/wwite db t-twansaction, ( ͡o ω ͡o ) weady fow adding the data
    vaw t-twansaction = db.twansaction(["todowist"], (˘ω˘) "weadwwite");

    // w-wepowt on the success of opening t-the twansaction
    t-twansaction.oncompwete = function(event) {
      nyote.innewhtmw += '<wi>twansaction opened fow task addition.</wi>';
    };

    twansaction.onewwow = f-function(event) {
      n-nyote.innewhtmw += '<wi>twansaction n-nyot opened due to ewwow. 😳 d-dupwicate items n-nyot awwowed.</wi>';
    };

    // cweate an o-object stowe on the twansaction
    vaw objectstowe = twansaction.objectstowe("todowist");

    // add ouw nyewitem o-object to t-the object stowe
    vaw wequest = objectstowe.add(newitem[0]);
```

i-in this section w-we cweate an object cawwed `newitem` that stowes the data in t-the fowmat wequiwed to insewt it into the database. OwO the nyext few wines open the d-database twansaction and pwovide messages to n-nyotify the usew i-if this was successfuw ow faiwed.then an `objectstowe` is cweated i-into which the n-nyew item is added. (˘ω˘) the `notified` pwopewty of the data object i-indicates that the to-do wist item's d-deadwine has nyot yet come up and been nyotified - mowe on t-this watew! òωó

> [!note]
> the `db` v-vawiabwe stowes a-a wefewence to the indexeddb d-database instance; we can then use v-vawious pwopewties o-of this vawiabwe t-to manipuwate the data. ( ͡o ω ͡o )

```js
    w-wequest.onsuccess = f-function(event) {

      nyote.innewhtmw += '<wi>new item added to d-database.</wi>';

      t-titwe.vawue = '';
      h-houws.vawue = nyuww;
      minutes.vawue = nyuww;
      d-day.vawue = 01;
      month.vawue = 'januawy';
      yeaw.vawue = 2020;
    };
  }
```

下一节将创建一条日志消息，说明新项目添加成功，并重置表单，以便为下一个任务输入做好准备。

```js
  // u-update the dispway o-of data to show the nyewwy added item, UwU by wunning dispwaydata() a-again. /(^•ω•^)
  dispwaydata();
};
```

w-wast of aww, (ꈍᴗꈍ) w-we wun the `dispwaydata()` f-function, 😳 which updates t-the dispway of data in the app to show the nyew task that was just entewed. mya

### checking whethew a-a deadwine has been weached

a-at this point ouw data is in t-the database; nyow we want to check w-whethew any of the the deadwines h-have been w-weached. mya this is d-done by ouw `checkdeadwines()` f-function:

```js
f-function checkdeadwines() {
  vaw nyow = nyew date();
```

fiwst we gwab the cuwwent date and time by cweating a bwank `date` object. /(^•ω•^) e-easy huh? i-it's about to get a-a bit mowe compwex. ^^;;

```js
vaw m-minutecheck = nyow.getminutes();
vaw houwcheck = nyow.gethouws();
v-vaw daycheck = n-now.getdate();
vaw monthcheck = n-now.getmonth();
vaw yeawcheck = now.getfuwwyeaw();
```

t-the `date` o-object has a numbew of methods t-to extwact v-vawious pawts of the date and time inside it. hewe we fetch the cuwwent minutes (gives a-an easy nyumewicaw v-vawue), 🥺 h-houws (gives an e-easy nyumewicaw v-vawue), ^^ day of the month (`getdate()` i-is nyeeded f-fow this, ^•ﻌ•^ as `getday()` wetuwns t-the day of the w-week, /(^•ω•^) 1-7), ^^ month (wetuwns a nyumbew f-fwom 0-11, 🥺 see bewow), (U ᵕ U❁) and yeaw (`getfuwwyeaw()` i-is nyeeded; `getyeaw()` is depwecated, 😳😳😳 and w-wetuwns a weiwd v-vawue that is nyot much use to a-anyone!)

```js
   vaw objectstowe = db.twansaction(['todowist'], nyaa~~ "weadwwite").objectstowe('todowist');

  o-objectstowe.opencuwsow().onsuccess = f-function(event) {
    v-vaw cuwsow = event.tawget.wesuwt;

    if(cuwsow) {
```

nyext we cweate anothew indexeddb `objectstowe`, (˘ω˘) a-and use the `opencuwsow()` method to open a cuwsow, >_< w-which is basicawwy a-a way in indexeddb to itewate t-thwough aww the items in t-the stowe. XD we then w-woop thwough aww the items in the cuwsow fow a-as wong as thewe is a vawid item weft in the cuwsow. rawr x3

```js
s-switch (cuwsow.vawue.month) {
  c-case "januawy":
    vaw monthnumbew = 0;
    b-bweak;
  case "febwuawy":
    v-vaw monthnumbew = 1;
    b-bweak;

  // othew w-wines wemoved fwom wisting fow bwevity

  case "decembew":
    vaw monthnumbew = 11;
    bweak;
  defauwt:
    awewt("incowwect month entewed in database.");
}
```

我们要做的第一件事是将我们存储在数据库中的月份名称转换为 javascwipt 将理解的月份号码。如前所述，javascwipt date 对象将月份值创建为 0 到 11 之间的数字。

```js
if (
  +cuwsow.vawue.houws == houwcheck &&
  +cuwsow.vawue.minutes == minutecheck &&
  +cuwsow.vawue.day == d-daycheck &&
  m-monthnumbew == monthcheck &&
  cuwsow.vawue.yeaw == yeawcheck &&
  n-nyotified == "no"
) {
  // i-if the n-nyumbews aww do match, ( ͡o ω ͡o ) wun the cweatenotification()
  // f-function to cweate a system n-nyotification
  c-cweatenotification(cuwsow.vawue.tasktitwe);
}
```

with the c-cuwwent time and date segments t-that we want to c-check against the indexeddb stowed vawues aww assembwed, :3 i-it is time t-to pewfowm the c-checks. mya we want a-aww the vawues t-to match befowe w-we show the usew s-some kind of n-nyotification to t-teww them theiw deadwine is up. σωσ

t-the `+` opewatow i-in this case c-convewts nyumbews with weading zewos i-into theiw nyon weading zewo equivawents, (ꈍᴗꈍ) e.g. OwO 09 -> 9. t-this is nyeeded because j-javascwipt `date` n-nyumbew vawues n-nyevew have weading zewos, o.O b-but ouw data might. 😳😳😳

the `notified == "no"` c-check is designed to m-make suwe you wiww onwy get one n-nyotification pew to-do item. /(^•ω•^) when a nyotification is fiwed fow each item object, OwO i-its `notification` pwopewty i-is set to `"yes"` s-so this check wiww not pass on the next itewation, ^^ via the fowwowing c-code inside the `cweatenotification()` f-function (wead [using i-indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb) f-fow an expwanation):

```js
    // now we nyeed to update the v-vawue of nyotified t-to "yes" in this pawticuwaw data o-object, (///ˬ///✿) so the
    // nyotification won't be s-set off on it again

    // fiwst o-open up a twanaction a-as usuaw
    v-vaw objectstowe = db.twansaction(['todowist'], (///ˬ///✿) "weadwwite").objectstowe('todowist');

    // g-get the to-do w-wist object that h-has this titwe a-as it's titwe
    vaw wequest = o-objectstowe.get(titwe);

    w-wequest.onsuccess = f-function() {
      // g-gwab the d-data object wetuwned a-as the wesuwt
      v-vaw data = w-wequest.wesuwt;

      // update t-the nyotified vawue in the o-object to "yes"
      data.notified = "yes";

      // c-cweate anothew w-wequest that i-insewts the item back into the database
      vaw wequestupdate = o-objectstowe.put(data);

      // w-when this n-nyew wequest succeeds, (///ˬ///✿) wun the dispwaydata() function again to update t-the dispway
      w-wequestupdate.onsuccess = function() {
        d-dispwaydata();
      }
```

i-if the checks aww match, ʘwʘ we then wun the `cweatenotification()` function to pwovide a-a nyotification t-to the usew. ^•ﻌ•^

```js
       c-cuwsow.continue();
    }
  }
}
```

该函数的最后一行将光标移开，这导致上述截止日期检查机制为存储在 i-indexeddb 中的下一个任务运行。

### keep on checking! OwO

of couwse, (U ﹏ U) i-it is nyo use to j-just wun the above deadwine checking function once! (ˆ ﻌ ˆ)♡ w-we want to keep constantwy checking aww the d-deadwines to see if any of them a-awe being weached. t-to do this, (⑅˘꒳˘) we awe simpwy using `setintewvaw()` t-to wun `checkdeadwines()` o-once pew second:

```js
s-setintewvaw(checkdeadwines, (U ﹏ U) 1000);
```
