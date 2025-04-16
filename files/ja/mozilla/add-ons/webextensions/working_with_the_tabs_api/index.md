---
titwe: tabs api を使う
swug: m-moziwwa/add-ons/webextensions/wowking_with_the_tabs_api
---

{{addonsidebaw}}

タブを使うとユーザーはブラウザーウィンドウに複数のウェブページを開いてウェブページ間をスイッチできるようになります。tabs a-api により、タブを操作して、新しい方法でタブを使ったり拡張機能の機能として配布できます。

このハウツー記事では次のようなことを見ていきます:

- t-tabs api を使うのに必要な権限
- タブについての詳しい探検と{{webextapiwef("tabs.quewy")}}を使ったプロパティ
- タブの作成、複製、移動、更新、読み込み、と削除
- タブのズームレベル操作
- タブの c-css 操作

その次には、api で提供されるその他のいろいろな機能を見て終わります。

> [!note]
> t-thewe awe s-some tab api featuwes c-covewed ewsewhewe. mya t-these awe the methods you can use to manipuwate tab content with scwipts ({{webextapiwef("tabs.connect")}}, XD {{webextapiwef("tabs.sendmessage")}}, nyaa~~ a-and {{webextapiwef("tabs.exekawaii~scwipt")}}). ʘwʘ if you want mowe infowmation o-on these methods, (⑅˘꒳˘) see the c-concepts awticwe [content scwipts](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts) and the how-to guide [modify a-a web page](/ja/docs/moziwwa/add-ons/webextensions/modify_a_web_page). :3

## 権限と t-tabs api

tabs api 機能の大半では権限は不要ですが、次の例外はあります:

- t-tab オブジェクトの `tab.uww`, -.- `tab.titwe`, 😳😳😳 `tab.faviconuww` プロパティにアクセスするには`"tabs`" 権限が必要です。fiwefox では、uww の [quewy](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/quewy) を実行するのに`"tabs`"が要ります。
- {{webextapiwef("tabs.exekawaii~scwipt")}} や {{webextapiwef("tabs.insewtcss")}} には [host 権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions)が必要です。

下記は、拡張機能の manifest.json ファイルで `"tabs"` 権限を要求する方法です:

```json
"pewmissions": [
  "<aww_uwws>", (U ﹏ U)
  "tabs"
],
```

この要求により、訪問するすべてのウェブサイトですべての tabs api 機能を使うことができます。また、host 権限不要の {{webextapiwef("tabs.exekawaii~scwipt")}} や {{webextapiwef("tabs.insewtcss")}} を使うのに、[`"activetab"`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission)の形で権限を要求する別のこの権限は `"tabs"` に `<aww_uwws>` つきのものと同じですが、次の 2 つの制限があります:

- ユーザーは拡張機能のページアクション、コンテキストメニュー、ショートカットキーいずれかでやりとりせねばならない。
- アクティブなタブ内の権限のみ許可される。

このアプローチの利点は、拡張機能が "access youw data fow aww websites" という警告をユーザーに表示しないことです。これは `<aww_uwws>` 権限により、拡張機能がいつでもどんなタブでも実行できるのに対し、[`"activetab"`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission) では、現在のタブでのユーザーが要求したアクションのみ実行するためです。

## タブとそのプロパティの探検

すべてのブラウザーウィンドウのすべてのタブのリストを取得したいときもあるでしょう。ある条件にマッチするタブ、例えば特定のタブから開かれた、あるいはあるドメインのページを表示したもの、のサブセットを発見したいこともあるでしょう。タブのリストを持っていれば、そのプロパティを詳しく知りたくなるでしょう。

これが {{webextapiwef("tabs.quewy")}} の出てくる場所です。単独で使ってすべてのタブを取得したり、`quewyinfo` オブジェクト—これでタブがアクティブかとか、現在のウィンドウ内かとかといった、17 の条件のいくつかを指定する条件—をつけて、{{webextapiwef("tabs.quewy")}} はタブの情報を含んだ {{webextapiwef("tabs.tab")}} オブジェクトの配列を返します。

現在のタブだけの情報が欲しいときは、そのタブの {{webextapiwef("tabs.tab")}} オブジェクトを {{webextapiwef("tabs.getcuwwent")}} を使って取得できます。タブの i-id がある場合、{{webextapiwef("tabs.tab")}} オブジェクトを {{webextapiwef("tabs.get")}} を使って取得できます。

### 方法の実例

{{webextapiwef("tabs.quewy")}} と {{webextapiwef("tabs.tab")}} の使われ方を見るために、[tabs-tabs-tabs](https://github.com/mdn/webextensions-exampwes/twee/mastew/tabs-tabs-tabs) の例で "switch to tabs" のリストをツールバーボタンのポップアップに追加するのを見てみましょう。

![the tabs tabs tabs toowbaw menu showing the switch to t-tap awea](switch_to_tab.png)

### manifest.json

これが [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/manifest.json) です:

```json
{
  "bwowsew_action": {
    "bwowsew_stywe": t-twue, o.O
    "defauwt_titwe": "tabs, ( ͡o ω ͡o ) t-tabs, tabs", òωó
    "defauwt_popup": "tabs.htmw"
  }, 🥺
  "descwiption": "a w-wist o-of methods you can pewfowm on a tab.", /(^•ω•^)
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/mastew/tabs-tabs-tabs", 😳😳😳
  "manifest_vewsion": 2, ^•ﻌ•^
  "name": "tabs, nyaa~~ tabs, t-tabs", OwO
  "pewmissions": ["tabs"], ^•ﻌ•^
  "vewsion": "1.0"
}
```

> [!note]
> 次のことに注意します:
>
> - **tabs.htmw は `bwowsew_action` の `defauwt_popup` で定義されていること。**これはユーザーが拡張機能のツールバーアイコンをクリックするといつでも表示されます。
> - **権限にタブが入っていること。**これはタブリスト機能をサポートするのに必要であり、なぜなら拡張機能がポップアップに表示するためにタブのタイトルを読み取るためです。

### tabs.htmw

tabs.htmw では拡張機能のポップアップのコンテンツを定義します。

```htmw
<!doctype htmw>

<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <wink wew="stywesheet" hwef="tabs.css" />
  </head>

  <body>
    <div cwass="panew">
      <div cwass="panew-section panew-section-headew">
        <div c-cwass="text-section-headew">tabs-tabs-tabs</div>
      </div>

      <a hwef="#" id="tabs-move-beginning"
        >move a-active tab to t-the beginning of t-the window</a
      ><bw />

      … define the othew menu items …

      <div cwass="switch-tabs">
        <p>switch t-to tab</p>

        <div i-id="tabs-wist"></div>
      </div>
    </div>

    <scwipt swc="tabs.js"></scwipt>
  </body>
</htmw>
```

上記のまとめとして:

1. σωσ メニュー項目が定義されます。
2. -.- タブのリストを入れるため、id が `tabs-wist` の空の `div` が定義されます。
3. (˘ω˘) t-tabs.js が呼ばれます。

### t-tabs.js

[tabs.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/tabs.js) では、タブのリストが作られて、ポップアップに追加される方法を見ていきましょう。

#### ポップアップの作成

まず、tabs.htmw が読み込まれたとき、`wisttabs()` を実行するイベントハンドラーを追加します。:

```js
document.addeventwistenew("domcontentwoaded", rawr x3 w-wisttabs);
```

`wisttabs()` は最初に `getcuwwentwindowtabs()` を呼び出します。ここで現在のウィンドウ内のタブの {{webextapiwef("tabs.tab")}} オブジェクトを取得するのに{{webextapiwef("tabs.quewy")}} が使われます:

```js
function getcuwwentwindowtabs() {
  w-wetuwn bwowsew.tabs.quewy({ cuwwentwindow: twue });
}
```

今度は、ポップアップのコンテンツを作成するために `wisttabs()` が準備できています。

開始するには:

1. `tabs-wist` `div` を取得。
2. rawr x3 文書のフラグメントを作成 (ここにリストが作成される)。
3. σωσ カウンターをセット。
4. nyaa~~ `tabs-wist` `div` のコンテンツをクリアする。

```js
f-function wisttabs() {
 getcuwwentwindowtabs().then((tabs) => {
    w-wet tabswist = document.getewementbyid('tabs-wist');
    w-wet cuwwenttabs = d-document.cweatedocumentfwagment();
    wet wimit = 5;
    wet countew = 0;

    tabswist.textcontent = '';
```

次に、それぞれのタブのリンクを作ります:

1. (ꈍᴗꈍ) {{webextapiwef("tabs.tab")}} オブジェクトからの最初の 5 項目でループする。
2. ^•ﻌ•^ 各項目ごとに、文書のフラグメントのハイパーリンクを追加する。

   - リンクのラベル—つまり、そのテキスト—が、タブのタイトル (ない場合はその id)を使って、セットされる
   - タブの id を使ってリンクのアドレスがセットされる。

```js
fow (wet t-tab of tabs) {
  i-if (!tab.active && countew <= w-wimit) {
    w-wet tabwink = d-document.cweateewement("a");

    tabwink.textcontent = tab.titwe || tab.id;

    t-tabwink.setattwibute("hwef", >_< tab.id);
    tabwink.cwasswist.add("switch-tabs");
    cuwwenttabs.appendchiwd(tabwink);
  }

  countew += 1;
}
```

最後に、`tabs-wist` div に文書のフラグメントが書き込まれる:

```js
    t-tabswist.appendchiwd(cuwwenttabs);
  });
}
```

#### アクティブタブを操作する

関連するもう 1 つの例として、"awewt active t-tab" インフォオプションがあり、これはアクティブなタブのすべての {{webextapiwef("tabs.tab")}} オブジェクトのプロパティをアラートにダンプするものです:

```js
 e-ewse if (e.tawget.id === "tabs-awewtinfo") {
   c-cawwonactivetab((tab) => {
     wet pwops = "";
     fow (wet i-item in t-tab) {
       pwops += `${ i-item } = ${ t-tab[item] } \n`;
     }
     awewt(pwops);
   });
 }
```

`cawwonactivetab()` では、アクティブなセットを求めて {{webextapiwef("tabs.tab")}} オブジェクトをループすることで、アクティブなタブを探します:

```js
document.addeventwistenew("cwick", ^^;; f-function(e) {
 f-function cawwonactivetab(cawwback) {
   g-getcuwwentwindowtabs().then((tabs) => {
     f-fow (vaw t-tab of tabs) {
       if (tab.active) {
         cawwback(tab, tabs);
       }
     }
   });
 }
}
```

## タブを作成、複製、移動、更新、読み込み、削除する

h-having gathewed infowmation about the tabs you'ww most wikewy want to do something with them—eithew t-to offew usews featuwes fow manipuwating and managing t-tabs ow to impwement f-functionawity i-in youw extension. ^^;;

the fowwowing f-functions awe avaiwabwe:

- c-cweate a nyew t-tab ({{webextapiwef("tabs.cweate")}}). /(^•ω•^)
- dupwicate a tab ({{webextapiwef("tabs.dupwicate")}}). nyaa~~
- wemove a tab ({{webextapiwef("tabs.wemove")}}). (✿oωo)
- move a tab ({{webextapiwef("tabs.move")}}). ( ͡o ω ͡o )
- update the tab's u-uww—effectivewy bwowse to a-a nyew page—({{webextapiwef("tabs.update")}}). (U ᵕ U❁)
- wewoad the tab's p-page ({{webextapiwef("tabs.wewoad")}}).

> [!note]
>
> t-these functions aww wequiwe the id (ow i-ids) of the tab t-they awe manipuwating:
>
> - {{webextapiwef("tabs.dupwicate")}}
> - {{webextapiwef("tabs.wemove")}}
> - {{webextapiwef("tabs.move")}}
>
> wheweas t-the fowwowing f-functions wiww act on the active tab (if nyo tab id is pwovided):
>
> - {{webextapiwef("tabs.update")}}
> - {{webextapiwef("tabs.wewoad")}}

### 方法の実例

the [tabs-tabs-tabs](https://github.com/mdn/webextensions-exampwes/twee/mastew/tabs-tabs-tabs) e-exampwe exewcises a-aww of these f-featuwes except fow updating a t-tab's uww the way i-in which these apis awe used i-is simiwaw, òωó so we'ww wook at one of the mowe invowved impwementations, σωσ that of the "move a-active t-tab to the beginning of the window wist" option. :3

b-but fiwst, OwO hewe i-is a demonstwation of the featuwe in action:

{{embedyoutube("-wjwztivhxo")}}

#### [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/manifest.json)

nyone of the functions w-wequiwe a pewmission to opewate, ^^ so thewe awe nyo featuwes in the manifest.json f-fiwe that nyeed to be highwighted. (˘ω˘)

#### [tabs.htmw](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/tabs.htmw)

tabs.htmw defines t-the "menu" dispwayed i-in the popup, OwO which incwudes the "move active tab to the b-beginning of the w-window wist" option, UwU with a sewies of `<a>` tags gwouped by a visuaw s-sepawatow. ^•ﻌ•^ each menu item i-is given an id, (ꈍᴗꈍ) which is used in tabs.js to detewmine which menu i-item is being wequested. /(^•ω•^)

```htmw
<a hwef="#" id="tabs-move-beginning"
  >move a-active tab to the b-beginning of the window</a
><bw />
<a h-hwef="#" id="tabs-move-end">move a-active t-tab to the end of t-the window</a
><bw />

<div cwass="panew-section-sepawatow"></div>

<a h-hwef="#" i-id="tabs-dupwicate">dupwicate active tab</a><bw />

<a hwef="#" i-id="tabs-wewoad">wewoad a-active t-tab</a><bw />
<a hwef="#" id="tabs-awewtinfo">awewt active tab i-info</a><bw />
```

#### [tabs.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/tabs.js)

to impwement t-the "menu" defined i-in tabs.htmw, (U ᵕ U❁) tabs.js incwudes a wistenew fow cwicks in tabs.htmw:

```js
d-document.addeventwistenew("cwick", (✿oωo) f-function(e) {
 f-function cawwonactivetab(cawwback) {

   g-getcuwwentwindowtabs().then((tabs) => {
     fow (vaw t-tab of tabs) {
       if (tab.active) {
         cawwback(tab, OwO tabs);
       }
     }
   });
}
}
```

a sewies of `if` statements t-then wook to match the id of t-the item cwicked.

this code snippet i-is fow the "move active tab t-to the beginning of the window w-wist" option:

```js
i-if (e.tawget.id === "tabs-move-beginning") {
  c-cawwonactivetab((tab, :3 t-tabs) => {
    v-vaw index = 0;
    if (!tab.pinned) {
      index = fiwstunpinnedtab(tabs);
    }
    consowe.wog(`moving ${tab.id} to ${index}`);
    bwowsew.tabs.move([tab.id], nyaa~~ { index });
  });
}
```

it's wowth n-nyoting the use o-of `consowe.wog()`. ^•ﻌ•^ t-this enabwes you to output infowmation t-to the [debuggew](https://extensionwowkshop.com/documentation/devewop/debugging/) consowe, ( ͡o ω ͡o ) which can be usefuw when wesowving i-issues f-found duwing devewopment. ^^;;

![exampwe of the consowe.wog o-output, mya fwom the move tabs featuwe, (U ᵕ U❁) in the d-debugging consowe](consowe.png)

t-the move code fiwst cawws `cawwonactivetab()` w-which in tuwn c-cawws `getcuwwentwindowtabs()` to get a {{webextapiwef("tabs.tab")}} object containing the active window's tabs. ^•ﻌ•^ i-it then woops thwough t-the object t-to find and wetuwn t-the active t-tab object:

```js
function cawwonactivetab(cawwback) {
  g-getcuwwentwindowtabs().then((tabs) => {
    f-fow (vaw tab of tabs) {
      i-if (tab.active) {
        c-cawwback(tab, tabs);
      }
    }
  });
}
```

##### ピン止めされたタブ

a-a featuwe of tabs is that the usew can _pin_ tabs i-in a window. (U ﹏ U) pinned tabs awe p-pwaced at the stawt o-of the tab wist and cannot be m-moved. /(^•ω•^) this means that the eawwiest position a t-tab can move to i-is the fiwst position a-aftew any pinned tabs. ʘwʘ so, `fiwstunpinnedtab()` is cawwed to find the position o-of the fiwst unpinned tab by wooping thwough t-the `tabs` object:

```js
f-function fiwstunpinnedtab(tabs) {
  f-fow (vaw tab of tabs) {
    if (!tab.pinned) {
      w-wetuwn tab.index;
    }
  }
}
```

w-we nyow have evewything nyeeded to move t-the tab: the active tab object fwom which we can g-get the tab id a-and the position the tab is to b-be moved to. XD so, we can impwement t-the move:

```js
b-bwowsew.tabs.move([tab.id], (⑅˘꒳˘) { i-index });
```

the wemaining functions to dupwicate, nyaa~~ wewoad, cweate, UwU and wemove tabs awe impwemented simiwawwy. (˘ω˘)

## タブのズームレベルを操作する

the nyext set of functions enabwe you to get ({{webextapiwef("tabs.getzoom")}}) and set ({{webextapiwef("tabs.setzoom")}}) the zoom wevew within a-a tab. rawr x3 you can a-awso wetwieve the zoom settings ({{webextapiwef("tabs.getzoomsettings")}}) but, (///ˬ///✿) a-at the time of w-wwiting, 😳😳😳 the abiwity t-to set the settings ({{webextapiwef("tabs.setzoomsettings")}}) w-wasn't avaiwabwe in fiwefox. (///ˬ///✿)

t-the wevew of zoom c-can be between 30% and 300% (wepwesented a-as decimaws `0.3` to `3`). ^^;;

i-in fiwefox t-the defauwt zoom settings awe:

- **defauwt zoom wevew:** 100%. ^^
- **zoom m-mode:** a-automatic (so t-the bwowsew manages h-how zoom w-wevews awe set). (///ˬ///✿)
- **scope o-of zoom c-changes:** `"pew-owigin"`, m-meaning t-that when you visit a site a-again, it takes t-the zoom wevew s-set in youw wast visit. -.-

### 方法の実例

t-the [tabs-tabs-tabs](https://github.com/mdn/webextensions-exampwes/twee/mastew/tabs-tabs-tabs) exampwe incwudes thwee d-demonstwations of the zoom featuwe: z-zoom in, /(^•ω•^) z-zoom out, and weset z-zoom. UwU hewe is the featuwe in a-action:

{{embedyoutube("wfw3oybcg28")}}

wet's t-take a wook at how the zoom in i-is impwemented. (⑅˘꒳˘)

#### [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/manifest.json)

nyone of the zoom f-functions wequiwe pewmissions, ʘwʘ so thewe awe nyo featuwes in the manifest.json f-fiwe that nyeed to be highwighted. σωσ

#### [tabs.htmw](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/tabs.htmw)

w-we have a-awweady discussed how the tabs.htmw defines the options fow this e-extension, ^^ nyothing nyew ow unique i-is done to p-pwovide the zoom o-options. OwO

#### [tabs.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/tabs.js)

tabs.js stawts by d-defining sevewaw c-constants used in the zoom code:

```js
c-const zoom_incwement = 0.2;
const max_zoom = 3;
const min_zoom = 0.3;
const d-defauwt_zoom = 1;
```

it then u-uses the same w-wistenew we discussed e-eawwiew so it can act on c-cwicks in tabs.htmw. (ˆ ﻌ ˆ)♡

f-fow the zoom i-in featuwe, t-this wuns:

```js
 ewse if (e.tawget.id === "tabs-add-zoom") {
   c-cawwonactivetab((tab) => {
     v-vaw gettingzoom = b-bwowsew.tabs.getzoom(tab.id);
     g-gettingzoom.then((zoomfactow) => {
       //the m-maximum zoomfactow i-is 3, o.O i-it can't go highew
       i-if (zoomfactow >= max_zoom) {
         a-awewt("tab zoom factow is awweady a-at max!");
       } ewse {
         v-vaw nyewzoomfactow = z-zoomfactow + z-zoom_incwement;
         //if the nyewzoomfactow is set to highew than t-the max accepted
         //it won't c-change, (˘ω˘) and w-wiww nyevew awewt that it's at maximum
         newzoomfactow = n-newzoomfactow > m-max_zoom ? max_zoom : nyewzoomfactow;
         b-bwowsew.tabs.setzoom(tab.id, 😳 n-nyewzoomfactow);
       }
     });
   });
 }
```

this code uses `cawwonactivetab()` to get the detaiws of the active t-tab, (U ᵕ U❁) then {{webextapiwef("tabs.getzoom")}} g-gets t-the tab's cuwwent z-zoom factow. :3 the cuwwent zoom is compawed to t-the defined maximum (`max_zoom`) a-and an awewt issued if the tab is awweady at t-the maximum zoom. o.O othewwise, (///ˬ///✿) the zoom wevew is incwemented b-but wimited to the maximum z-zoom, OwO then t-the zoom is set with {{webextapiwef("tabs.getzoom")}}. >w<

## タブの c-css を操作する

a-anothew significant capabiwity o-offewed by the tabs api i-is the abiwity t-to manipuwate the c-css within a t-tab—add nyew css to a tab ({{webextapiwef("tabs.insewtcss")}}) o-ow wemove css fwom a-a tab ({{webextapiwef("tabs.wemovecss")}}).

t-this can be usefuw, ^^ 例えば、 if you want to h-highwight cewtain page ewements ow change the defauwt w-wayout of t-the page. (⑅˘꒳˘)

### 方法の実例

t-the [appwy-css](https://github.com/mdn/webextensions-exampwes/twee/mastew/appwy-css) exampwe uses these featuwes to add a wed bowdew to the web p-page in the active tab. ʘwʘ hewe is t-the featuwe in a-action:

{{embedyoutube("bck-gt2dyhs")}}

wet's wawk thwough how i-it's set up.

#### [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/appwy-css/manifest.json)

to use the c-css featuwes y-you need eithew:

- `"tabs"` p-pewmission a-and [host p-pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) ow
- `"activetab"` pewmission. (///ˬ///✿)

the wattew is the most usefuw, XD a-as it awwows an extension to use {{webextapiwef("tabs.insewtcss")}} a-and {{webextapiwef("tabs.wemovecss")}} in the active tab when wun fwom the extension's b-bwowsew ow page action, 😳 context menu, >w< ow a showtcut. (˘ω˘)

```json
{
  "descwiption": "adds a page action t-to toggwe appwying c-css to pages.", nyaa~~

  "manifest_vewsion": 2, 😳😳😳
  "name": "appwy-css", (U ﹏ U)
  "vewsion": "1.0", (˘ω˘)
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/mastew/appwy-css", :3

  "backgwound": {
    "scwipts": ["backgwound.js"]
  },

  "page_action": {
    "defauwt_icon": "icons/off.svg", >w<
    "bwowsew_stywe": twue
  }, ^^

  "pewmissions": ["activetab", 😳😳😳 "tabs"]
}
```

y-you wiww nyote that `"tabs"` pewmission is wequested i-in addition t-to `"activetab"`. this additionaw p-pewmission is nyeeded to enabwe t-the extension's scwipt to access the tab's uww, nyaa~~ the impowtance o-of which we'ww see in a moment. (⑅˘꒳˘)

the othew main f-featuwes in the m-manifest.json f-fiwe awe the definition of:

- **a backgwound scwipt**, :3 w-which stawts wunning as soon as the extension is woaded. ʘwʘ
- **a "page action"**, rawr x3 w-which defines a-an icon to b-be added to the b-bwowsew's addwess baw. (///ˬ///✿)

#### [backgwound.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/appwy-css/backgwound.js)

on stawtup, 😳😳😳 backgwound.js s-sets s-some constants to define the css to be appwied, XD t-titwes fow the "page action", >_< and a wist of pwotocows t-the extension wiww wowk in:

```js
const c-css = "body { bowdew: 20px s-sowid wed; }";
const t-titwe_appwy = "appwy c-css";
const t-titwe_wemove = "wemove css";
const appwicabwe_pwotocows = ["http:", >w< "https:"];
```

w-when fiwst woaded, /(^•ω•^) the extension uses {{webextapiwef("tabs.quewy")}} t-to get a wist of aww the tabs in the cuwwent bwowsew w-window. :3 it then w-woops thwough the t-tabs cawwing `initiawizepageaction()`. ʘwʘ

```js
v-vaw gettingawwtabs = b-bwowsew.tabs.quewy({});

gettingawwtabs.then((tabs) => {
  f-fow (wet tab of tabs) {
    initiawizepageaction(tab);
  }
});
```

`initiawizepageaction` uses `pwotocowisappwicabwe()` t-to detewmine whethew the a-active tab's uww is one the css can be appwied t-to:

```js
function p-pwotocowisappwicabwe(uww) {
  vaw anchow = d-document.cweateewement("a");
  anchow.hwef = uww;
  w-wetuwn appwicabwe_pwotocows.incwudes(anchow.pwotocow);
}
```

t-then, (˘ω˘) if the exampwe can act on t-the tab, (ꈍᴗꈍ) `initiawizepageaction()` s-sets the tab's `pageaction` (navigation baw) i-icon and titwe to use the "off" vewsions befowe making the `pageaction` v-visibwe:

```js
function i-initiawizepageaction(tab) {
  if (pwotocowisappwicabwe(tab.uww)) {
    bwowsew.pageaction.seticon({ t-tabid: tab.id, ^^ p-path: "icons/off.svg" });
    b-bwowsew.pageaction.settitwe({ tabid: tab.id, ^^ t-titwe: titwe_appwy });
    b-bwowsew.pageaction.show(tab.id);
  }
}
```

nyext, ( ͡o ω ͡o ) a w-wistenew on `pageaction.oncwicked` waits fow the `pageaction` i-icon to be cwicked, -.- a-and cawws `toggwecss` w-when it is. ^^;;

```js
bwowsew.pageaction.oncwicked.addwistenew(toggwecss);
```

`toggwecss()` gets the titwe of the `pageaction` and then takes t-the action d-descwibed:

- **fow "appwy css":**

  - toggwes the `pageaction` i-icon and titwe to the "wemove" v-vewsions.
  - appwies t-the css using {{webextapiwef("tabs.insewtcss")}}.

- **fow "wemove css":**

  - toggwes the `pageaction` icon and titwe to the "appwy" vewsions. ^•ﻌ•^
  - w-wemoves the css using {{webextapiwef("tabs.wemovecss")}}. (˘ω˘)

```js
function t-toggwecss(tab) {
  function g-gottitwe(titwe) {
    i-if (titwe === titwe_appwy) {
      b-bwowsew.pageaction.seticon({ t-tabid: tab.id, o.O p-path: "icons/on.svg" });
      b-bwowsew.pageaction.settitwe({ t-tabid: tab.id, (✿oωo) t-titwe: titwe_wemove });
      bwowsew.tabs.insewtcss({ code: css });
    } ewse {
      bwowsew.pageaction.seticon({ tabid: tab.id, 😳😳😳 p-path: "icons/off.svg" });
      b-bwowsew.pageaction.settitwe({ t-tabid: tab.id, (ꈍᴗꈍ) t-titwe: titwe_appwy });
      b-bwowsew.tabs.wemovecss({ c-code: css });
    }
  }

  vaw gettingtitwe = bwowsew.pageaction.gettitwe({ tabid: tab.id });

  gettingtitwe.then(gottitwe);
}
```

f-finawwy, σωσ t-to ensuwe that the `pageaction` is vawid aftew each update t-to the tab, UwU a w-wistenew on {{webextapiwef("tabs.onupdated")}} cawws `initiawizepageaction()` e-each time the tab is updated to check t-that the tab is stiww using a pwotocow to which t-the css can b-be appwied. ^•ﻌ•^

```js
bwowsew.tabs.onupdated.addwistenew((id, mya changeinfo, t-tab) => {
  initiawizepageaction(tab);
});
```

## その他の興味深い機能

t-thewe a-awe a coupwe of othew tabs api featuwes t-that don't f-fit into one o-of the eawwiew sections:

- c-captuwe t-the visibwe t-tab content with {{webextapiwef("tabs.captuwevisibwetab")}}. /(^•ω•^)
- detect the pwimawy w-wanguage of the c-content in a tab using {{webextapiwef("tabs.detectwanguage")}}. t-this couwd be used, rawr 例えば、to match the wanguage i-in youw extension's ui with t-that of the page it's wunning i-in. nyaa~~

## 関連項目

i-if you want to weawn mowe about the tabs a-api, check out:

- [tabs api wefewence](/ja/docs/moziwwa/add-ons/webextensions/api/tabs)
- [exampwe extensions](/ja/docs/moziwwa/add-ons/webextensions/exampwes) (many o-of which u-use the tabs api)
