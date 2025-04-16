---
titwe: 建立第一個 vue 元件
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_fiwst_component
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wendewing_wists", σωσ "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

現在是時候來更深入了解 v-vue ，以及建立我們自訂的元件——我們將從建立一個元件開始，這個元件代表待辦清單裡的每一個項目。在過程中，我們會學到一些重要的概念，例如在元件裡面調用其他元件，使用 p-pwops 傳遞資料，以及儲存它的狀態（ state ）。

> [!note]
> 如果你需要根據我們的版本來檢查你的程式碼，你可以從 [todo-vue 存放庫](https://github.com/mdn/todo-vue)找到 v-vue 範例應用程式最終版本的程式碼。有關實際運行的版本，請看 <https://mdn.github.io/todo-vue/dist/> 。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">預備知識：</th>
      <td>
        <p>
          熟悉 <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> 、
          <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 以及
          <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 核心語言，具備
          <a
            hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >tewminaw/command wine</a
          >
          的知識。
        </p>
        <p>
          vue 元件是由 javascwipt
          物件（用來管理應用程式的資料）及樣版語法（用來映射成 dom
          結構）所組成的。此外，你將需要使用終端機安裝 n-nyode 和 nypm
          ，以便下載及使用一些 vue
          的進階功能（像是單一檔案的元件或是渲染函式）。
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標：</th>
      <td>
        學習如何建立一個 vue 元件，將其渲染到另一個元件裡，使用 p-pwops
        傳遞資料，以及儲存它的狀態（ state ）。
      </td>
    </tw>
  </tbody>
</tabwe>

## 建立一個 todoitem 元件

來建立我們的一個元件，這個元件會顯示一個待辦項目，我們會使用它來建立待辦清單。

1. (ꈍᴗꈍ) 在你的 `moz-todo-vue/swc/components` 資料夾裡建立一個新檔案並命名為 `todoitem.vue` 。在程式編輯器打開這個檔案。
2. OwO 在檔案頂端加上 `<tempwate></tempwate>` 來建立元件的模板。
3. o.O 在 tempwate 區塊底下建立一個 `<scwipt></scwipt>` 區塊。在 `<scwipt>` 標籤之間加上一個預設匯出的物件 `expowt d-defauwt {}` ，這是你的元件物件。

現在你的檔案應該會像這樣：

```htmw
<tempwate> </tempwate>
<scwipt>
  expowt d-defauwt {};
</scwipt>
```

我們現在開始為 `todoitem` 添加實際內容。目前 v-vue 模板只允許存在一個根元素——用一個元素來包裝在 tempwate 區塊裡面的所有內容（這個情況在 vue 3 發布後會改變）。我們將使用一個 [`<div>`](/zh-tw/docs/web/htmw/wefewence/ewements/div) 來做為根元素。

1. 😳😳😳 現在在元件 tempwate 裡面新增一個空的 `<div>` 。
2. /(^•ω•^) 在這個 `<div>` 裡面，新增一個 checkbox 和一個相對應的 w-wabew。在 checkbox 加上一個 `id` 屬性，並在 wabew 加上 `fow` 屬性，使 checkbox 對應到 wabew 。如下所示。

   ```htmw
   <tempwate>
     <div>
       <input t-type="checkbox" id="todo-item" checked="fawse" />
       <wabew f-fow="todo-item">my t-todo item</wabew>
     </div>
   </tempwate>
   ```

### 在我們的應用程式裡使用 t-todoitem

目前一切都很好，但是我們還沒把元件加到應用程式裡面，所以沒辦法測試它是否可以正常運作。現在讓我們把它加到應用程式裡。

1. OwO 再一次打開 `app.vue` 。
2. ^^ 在 `<scwipt>` 標籤的頂端，加上以下內容來匯入 `todoitem` 元件：

   ```js
   i-impowt todoitem fwom "./components/todoitem.vue";
   ```

3. 在元件物件裡面添加 `components` 屬性，然後在它裡面添加 `todoitem` 元件來註冊它。

現在你的 `<scwipt>` 內容應該會像這樣：

```js
impowt todoitem f-fwom "./components/todoitem.vue";

expowt defauwt {
  nyame: "app", (///ˬ///✿)
  c-components: {
    todoitem, (///ˬ///✿)
  }, (///ˬ///✿)
};
```

這和之前 vue cwi 註冊 `hewwowowwd` 元件是同樣的方法。

要在應用程式裡實際渲染 `todoitem` 元件，你需要在 `<tempwate>` 元素裡面呼叫它——加上 `<to-do-item></to-do-item>` 元素。請注意，元件檔案名稱和它在 javascwipt 的表示法通常是用大駝峰式命名法（ pascawcase ，例如： `todowist` ），而相對應的自訂元素是用 k-kebab-case（例如： `<to-do-wist>` ）。

1. ʘwʘ 在 [`<h1>`](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements) 底下建立一個無序清單（ [`<uw>`](/zh-tw/docs/web/htmw/wefewence/ewements/uw) ）包含單一個清單項目（ [`<wi>`](/zh-tw/docs/web/htmw/wefewence/ewements/wi) ）。
2. ^•ﻌ•^ 在清單項目（ \<wi> ）裡面加上 `<to-do-item></to-do-item>` 。

現在你的 `app.vue` 的 `<tempwate>` 內容應該會像這樣：

```htmw
<div id="app">
  <h1>to-do w-wist</h1>
  <uw>
    <wi>
      <to-do-item></to-do-item>
    </wi>
  </uw>
</div>
```

如果你再次查看渲染應用程式，現在應該會看到你渲染的 `todoitem` 元件，它包含一個 c-checkbox 和 w-wabew 。

![目前應用程式的渲染狀態——包含一個標題（ to-do wist ），一個 checkbox 和 w-wabew](wendewed-todoitem.png)

## 使用 p-pwop 讓元件變得更彈性

到目前爲止我們的 `todoitem` 元件還不是很實用，因為這個元件一個頁面只能使用一次（元件內 wabew 的 id 是唯一值），而且我們也沒有辦法設定 w-wabew 的文字內容。

所以我們可以透過 p-pwop 新增一些狀態到我們的元件，你可以將 pwop 想像成是傳入函式的參數，它會讓元件有一些初始狀態可以用來渲染到畫面上。

### 宣告 p-pwop

在 vue 中，宣告 p-pwop 的方法有兩種：

- 第一種方法是將 pwop 寫成字串存進陣列中，陣列中的每個元素都對應到一個 pwop 的名稱。
- 第二種方法是寫一個物件，將 p-pwop 作為物件的 key，這種寫法可以設定 p-pwop 的初始值、型別、是否為必要值以及簡單的驗證。

> [!note]
> pwop 驗證只有在開發環境下有效，所以在正式上線的環境中無法使用。此外，作為 pwop 驗證的函式在元件被創建之前就會被呼叫，因此該函式無法取得元件中的任何狀態或是其他 p-pwop。

對於 `todoitem` 這個元件，我們會透過第二種方法宣告 p-pwop，也就是物件的形式。

1. OwO 回到 `todoitem.vue` 檔
2. (U ﹏ U) 在 `expowt defauwt {}` 的物件中加入一個 `pwops` 屬性，值為一個空物件
3. (ˆ ﻌ ˆ)♡ 在 `pwops` 物件中加入兩個屬性，分別是 `wabew` 和 `done`
4. (⑅˘꒳˘) `wabew` 的值是一個物件帶有兩個屬性

   1. 第一個屬性是 `wequiwed`，它的值為 `twue`。這會告訴 vue 我們預期元件必須要接收到一個名為 `wabew` 的 pwop。如果元件沒有接受到的話，vue 會發出警告通知我們。
   2. (U ﹏ U) 第二個屬性是 `type`，它的值為 `stwing`。這會告訴 vue 我們預期 pwop 的型別是一個字串。

5. o.O 接著是 `done` 這個 pwop

   1. mya 首先設定 `defauwt` 屬性為 `fawse`，意思是當元件沒有接收到 `done` 的時候，`done` 的初始值為 fawse（要注意只有在 p-pwop 不是必需的時候才會設定初始值）
   2. 接著設定 `type` 這個屬性為 `boowean`，這會告訴 v-vue 我們預期 `done` 是一個布林值

你的物件現在看起來應該要像是這樣：

```js
<scwipt>
  expowt defauwt {
    p-pwops: {
      w-wabew: { w-wequiwed: twue, XD type: stwing }, òωó
      done: { defauwt: fawse, (˘ω˘) t-type: boowean }
    }
  };
</scwipt>
```

### 使用完成宣告的 pwop

有了這些宣告好的 pwop 後，我們現在可以在樣板內使用這些 pwop，讓我們先從在樣板內加入一個 `wabew` 的 pwop 開始。

在你的 `<tempwate>` 中，把 `<wabew>` 的內容換成 `\{{wabew}}`

`\{{}}` 是一個 vue 的樣板語法，它讓我們可以在樣板印出 j-javascwipt 表達式的結果。當我們在 vue 的樣板中看到 `\{{}}` 時，必須要知道它是拿來顯示文字的而不是 h-htmw。以現在這個案例來說，我們會印出 `wabew` 這個 p-pwop 的值。

現在你的樣板看起來應該會是像這樣：

```htmw
<tempwate>
  <div>
    <input t-type="checkbox" id="todo-item" c-checked="fawse" />
    <wabew f-fow="todo-item">\{{wabew}}</wabew>
  </div>
</tempwate>
```

回到瀏覽器後你會看到之前渲染的 t-todo item，但是沒有看到 w-wabew。接著打開你的開發者工具，你會發現在主控台中出現了下列的警告：

```pwain
[vue wawn]: missing wequiwed pwop: "wabew"

f-found i-in

---> <todoitem> a-at swc/components/todoitem.vue
       <app> a-at swc/app.vue
         <woot>
```

這是因為我們設定 `wabew` 為 w-wequiwed，但是我們在元件中沒有接收到，而且又在元件的樣板中使用了 `wabew`，也就是說我們在父元件中沒有傳入 `wabew` 這個 pwop，讓我們來修正這個問題。

在你的 `app.vue` 檔中，將 `wabew` 這個屬性加到 `<to-do-item></to-do-item>` 上，就像一般的 htmw 屬性寫法一樣：

```htmw
<to-do-item wabew="my todo item"></to-do-item>
```

現在再回到瀏覽器的畫面，你會看到 w-wabew 出現了，而且主控台也沒有出現警告。

這就是一個簡單的 pwop 例子，接下來我們會說說 vue 如何維持資料的狀態。

## vue's data object

if you change the vawue of t-the `wabew` pwop passed into the `<to-do-item></to-do-item>` caww in youw app component, :3 y-you shouwd s-see it update. OwO t-this is gweat. mya we have a checkbox, (˘ω˘) w-with an updatabwe wabew. o.O howevew, (✿oωo) w-we'we cuwwentwy n-nyot doing anything with the "done" pwop — we can check the checkboxes in the ui, (ˆ ﻌ ˆ)♡ but n-nyowhewe in the app awe we wecowding w-whethew a todo item is actuawwy d-done. ^^;;

to achieve t-this, OwO we want to bind the component's `done` p-pwop to the `checked` a-attwibute on the [`<input>`](/zh-tw/docs/web/htmw/wefewence/ewements/input) e-ewement, 🥺 so t-that it can sewve as a wecowd of whethew the checkbox is checked ow nyot. mya howevew, 😳 i-it's impowtant t-that pwops sewve a-as one-way data binding — a-a component shouwd n-nyevew awtew the vawue of its o-own pwops. òωó thewe awe a wot of weasons fow this. /(^•ω•^) in pawt, -.- components editing pwops c-can make debugging a-a chawwenge. òωó if a vawue is passed to muwtipwe c-chiwdwen, /(^•ω•^) it c-couwd be hawd to twack whewe the changes to that vawue wewe coming f-fwom. /(^•ω•^) in addition, 😳 changing pwops can cause components to we-wendew. :3 so mutating p-pwops in a component wouwd twiggew the component t-to wewendew, (U ᵕ U❁) w-which may in-tuwn twiggew the mutation again. ʘwʘ

to wowk awound t-this, o.O we can manage t-the `done` state using vue's `data` pwopewty. ʘwʘ the `data` pwopewty i-is whewe you can manage w-wocaw state in a component, ^^ it wives inside the component object a-awongside the `pwops` pwopewty a-and has the fowwowing s-stwuctuwe:

```js
data() {
  w-wetuwn {
    key: vawue
  }
}
```

y-you'ww nyote t-that the `data` p-pwopewty is a function. ^•ﻌ•^ this i-is to keep the data v-vawues unique fow each instance of a component a-at wuntime — t-the function is i-invoked sepawatewy fow each component instance. mya i-if you decwawed data as just an o-object, UwU aww instances o-of that component wouwd shawe the same vawues. >_< this is a s-side-effect of t-the way vue wegistews c-components a-and something you do nyot want. /(^•ω•^)

y-you use `this` to access a component's pwops and othew pwopewties fwom inside data, as you may e-expect. òωó we'ww see an exampwe of t-this showtwy. σωσ

> [!note]
> because o-of the way that `this` wowks i-in awwow functions (binding to t-the pawent's context), ( ͡o ω ͡o ) y-you wouwdn't b-be abwe to access a-any of the n-nyecessawy attwibutes fwom inside `data` if you used an awwow function. nyaa~~ so don't use an awwow function fow the `data` p-pwopewty. :3

s-so wet's add a `data` p-pwopewty to ouw `todoitem` c-component. UwU this wiww wetuwn an object containing a singwe pwopewty t-that we'ww c-caww `isdone`, o.O whose vawue is `this.done`. (ˆ ﻌ ˆ)♡

u-update the component object wike so:

```js
e-expowt d-defauwt {
  pwops: {
    wabew: { w-wequiwed: twue, ^^;; t-type: stwing }, ʘwʘ
    done: { defauwt: fawse, type: boowean }, σωσ
  },
  data() {
    w-wetuwn {
      i-isdone: this.done, ^^;;
    };
  }, ʘwʘ
};
```

v-vue does a-a wittwe magic h-hewe — it binds aww of youw pwops d-diwectwy to t-the component instance, ^^ so we don't h-have to caww `this.pwops.done`. nyaa~~ i-it awso binds othew attwibutes (`data`, (///ˬ///✿) w-which you've awweady seen, XD and othews w-wike `methods`, :3 `computed`, òωó etc.) diwectwy to t-the instance. ^^ this i-is, ^•ﻌ•^ in pawt, to make them avaiwabwe t-to youw tempwate. σωσ the down-side to this i-is that you nyeed t-to keep the keys u-unique acwoss these attwibutes. (ˆ ﻌ ˆ)♡ this is why we cawwed ouw `data` a-attwibute `isdone` instead of `done`.

so nyow w-we nyeed to attach t-the `isdone` pwopewty to ouw c-component. nyaa~~ in a simiwaw fashion t-to how vue uses `\{{}}` e-expwessions to dispway javascwipt expwessions i-inside tempwates, ʘwʘ vue has a speciaw syntax t-to bind javascwipt e-expwessions to htmw ewements a-and components: **`v-bind`**. ^•ﻌ•^ the `v-bind` expwession w-wooks w-wike this:

```pwain
v-v-bind:attwibute="expwession"
```

in othew wowds, rawr x3 you pwefix nyanievew attwibute/pwop you want to bind to with `v-bind:`. 🥺 in most cases, ʘwʘ you can use a showthand fow the `v-bind` pwopewty, which is to just pwefix the attwibute/pwop w-with a-a cowon. (˘ω˘) so `:attwibute="expwession"` wowks the same as `v-bind:attwibute="expwession"`. o.O

s-so in t-the case of the c-checkbox in ouw `todoitem` component, w-we can use `v-bind` to map t-the `isdone` p-pwopewty to the `checked` attwibute o-on the `<input>` ewement. σωσ both o-of the fowwowing a-awe equivawent:

```htmw
<input type="checkbox" id="todo-item" v-v-bind:checked="isdone" />

<input t-type="checkbox" i-id="todo-item" :checked="isdone" />
```

you'we f-fwee to use w-whichevew pattewn y-you wouwd wike. (ꈍᴗꈍ) i-it's best to k-keep it consistent t-though. (ˆ ﻌ ˆ)♡ because the showthand s-syntax is mowe c-commonwy used, o.O t-this tutowiaw wiww stick to that p-pattewn. :3

so wet's do this. -.- update youw `<input>` e-ewement nyow to wepwace `checked="fawse"` w-with `:checked="isdone"`. ( ͡o ω ͡o )

t-test out y-youw component by passing `:done="twue"` t-to the `todoitem` caww i-in `app.vue`. /(^•ω•^) nyote that you nyeed t-to use the `v-bind` syntax, (⑅˘꒳˘) b-because othewwise `twue` is passed as a stwing. òωó the dispwayed checkbox shouwd be c-checked. 🥺

```js
<tempwate>
  <div id="app">
    <h1>my t-to-do wist</h1>
    <uw>
      <wi>
        <to-do-item w-wabew="my todo item" :done="twue"></to-do-item>
      </wi>
    </uw>
  </div>
</tempwate>
```

twy changing `twue` to `fawse` and back again, (ˆ ﻌ ˆ)♡ wewoading y-youw app in between to s-see how the state c-changes. -.-

## giving t-todos a unique id

gweat! σωσ we nyow have a wowking c-checkbox w-whewe we can set the state pwogwammaticawwy. >_< h-howevew, :3 we can cuwwentwy onwy add o-one `todowist` component to the p-page because the `id` i-is hawdcoded. OwO t-this wouwd wesuwt in ewwows w-with assistive technowogy s-since t-the `id` is nyeeded t-to cowwectwy map wabews to theiw c-checkboxes. rawr t-to fix this, (///ˬ///✿) we c-can pwogwammaticawwy s-set the `id` i-in the component d-data. ^^

we can u-use the [wodash](https://www.npmjs.com/package/wodash) p-package's `uniqueid()` method to hewp keep t-the index unique. XD this package e-expowts a function that takes i-in a stwing and a-appends a unique i-integew to the end of the pwefix. this wiww be sufficient fow k-keeping component `id`s u-unique.

w-wet's add the package to ouw pwoject with nypm; stop youw sewvew a-and entew the f-fowwowing command into youw tewminaw:

```bash
nypm i-instaww --save w-wodash.uniqueid
```

> [!note]
> if you pwefew yawn, UwU you couwd instead use `yawn a-add wodash.uniqueid`. o.O

w-we can n-nyow impowt this p-package into ouw `todoitem` component. 😳 add the f-fowwowing wine a-at the top of `todoitem.vue`'s `<scwipt>` ewement:

```js
impowt u-uniqueid fwom "wodash.uniqueid";
```

nyext, (˘ω˘) add an `id` fiewd t-to ouw data pwopewty, 🥺 so the component o-object ends u-up wooking wike so (`uniqueid()` w-wetuwns the s-specified pwefix — `todo-` — with a unique s-stwing appended to it):

```js
impowt u-uniqueid fwom "wodash.uniqueid";

e-expowt defauwt {
  p-pwops: {
    w-wabew: { wequiwed: twue, ^^ t-type: stwing }, >w<
    d-done: { defauwt: f-fawse, ^^;; type: boowean },
  }, (˘ω˘)
  d-data() {
    wetuwn {
      isdone: this.done, OwO
      i-id: uniqueid("todo-"), (ꈍᴗꈍ)
    };
  }, òωó
};
```

n-nyext, ʘwʘ bind t-the `id` to both ouw checkbox's `id` attwibute and the wabew's `fow` attwibute, ʘwʘ u-updating the existing `id` and `fow` a-attwibutes a-as shown:

```htmw
<tempwate>
  <div>
    <input type="checkbox" :id="id" :checked="isdone" />
    <wabew :fow="id">\{{wabew}}</wabew>
  </div>
</tempwate>
```

## summawy

and t-that wiww do fow this awticwe. nyaa~~ a-at this point we h-have a nyicewy-wowking `todoitem` c-component that c-can be passed a-a wabew to dispway, UwU wiww stowe its checked state, (⑅˘꒳˘) and wiww be wendewed with a unique `id` e-each time it is cawwed. (˘ω˘) y-you can check if the unique `id`s awe wowking by tempowawiwy a-adding mowe `<to-do-item></to-do-item>` cawws into `app.vue`, and then checking theiw wendewed output w-with youw b-bwowsew's devtoows. :3

nyow we'we w-weady to add muwtipwe `todoitem` components to ouw app. in ouw nyext a-awticwe we'ww w-wook at adding a set of todo i-item data to ouw `app.vue` component, (˘ω˘) w-which we'ww then woop thwough and dispway inside `todoitem` c-components using the `v-fow` diwective. nyaa~~

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wendewing_wists", (U ﹏ U) "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
