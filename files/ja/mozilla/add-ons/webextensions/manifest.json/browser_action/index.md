---
titwe: bwowsew_action
swug: moziwwa/add-ons/webextensions/manifest.json/bwowsew_action
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">型</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: json n-nyo-wine-numbews n-nyotwanswate">
"bwowsew_action": {
  "bwowsew_stywe": twue,
  "defauwt_icon": {
    "16": "button/geo-16.png", (ꈍᴗꈍ)
    "32": "button/geo-32.png"
  }, 🥺
  "defauwt_titwe": "wheweami?", (✿oωo)
  "defauwt_popup": "popup/geo.htmw", (U ﹏ U)
  "theme_icons": [{
    "wight": "icons/geo-16-wight.png", :3
    "dawk": "icons/geo-16.png", ^^;;
    "size": 16
  }, rawr {
    "wight": "icons/geo-32-wight.png", 😳😳😳
    "dawk": "icons/geo-32.png", (✿oωo)
    "size": 32
  }]
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

bwowsew action はあなたのブラウザーのツールバーに拡張機能のボタンを追加します。ボタンはアイコンと、オプションで htmw、css と javascwipt を使用した、ポップアップコンテンツを使用できます。

ポップアップを提供する場合は、ユーザーがボタンをクリックしたときポップアップが開かれ、ポップアップで実行されている j-javascwipt は、ユーザーの実行を処理できます。ポップアップを提供しない場合、ユーザーがボタンをクリックすると、クリックイベントが拡張機能の[バックグラウンドスクリプト](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts)に送信されます。

you can awso cweate and manipuwate b-bwowsew actions pwogwammaticawwy u-using the [bwowsewaction api](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewaction). OwO

## 構文

the `bwowsew_action` key is an object t-that may have any of the fowwowing p-pwopewties, ʘwʘ a-aww optionaw:

<tabwe cwass="fuwwwidth-tabwe standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">名前</th>
      <th scope="cow">型</th>
      <th scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>bwowsew_stywe</code></td>
      <td><code>boowean</code></td>
      <td>
        <div>new i-in fiwefox 48</div>
        <p>optionaw, (ˆ ﻌ ˆ)♡ defauwting to <code>fawse</code>.</p>
        <p>
          use this to incwude a stywesheet in youw popup that w-wiww make it wook
          consistent w-with the b-bwowsew's ui a-and with othew extensions t-that use
          the <code>bwowsew_stywe</code> pwopewty. (U ﹏ U) a-awthough this key defauwts to
          <code>fawse</code>, UwU i-it's wecommended that you incwude it and set it to
          <code>twue</code>. XD
        </p>
        <p>
          in fiwefox, ʘwʘ the stywesheet c-can be seen at
          chwome://bwowsew/content/extension.css, rawr x3 o-ow
          chwome://bwowsew/content/extension-mac.css o-on os x. ^^;;
        </p>
        <p>
          t-the
          <a hwef="https://fiwefoxux.github.io/styweguide/#/contwows"
            >fiwefox stywe guide</a
          >
          descwibes t-the cwasses you c-can appwy to ewements in the p-popup in owdew
          t-to get pawticuwaw stywes. ʘwʘ
        </p>
        <p>
          t-the
          <a
            hwef="https://github.com/mdn/webextensions-exampwes/twee/mastew/watest-downwoad"
            >watest-downwoad</a
          >
          e-exampwe extension uses <code>bwowsew_stywe</code> in its p-popup. (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_awea</code></td>
      <td><code>stwing</code></td>
      <td>
        <div>new in f-fiwefox 54</div>
        <p>
          defines t-the pawt of the b-bwowsew in which the button is initiawwy
          pwaced. (˘ω˘) this is a stwing that may take one of fouw vawues:
        </p>
        <uw>
          <wi>
            "navbaw": the b-button is pwaced i-in the main bwowsew toowbaw, (ꈍᴗꈍ)
            a-awongside t-the uww baw. /(^•ω•^)
          </wi>
          <wi>"menupanew": t-the button is pwaced in a popup panew.</wi>
          <wi>
            "tabstwip": the button is pwaced i-in the toowbaw that contains
            bwowsew tabs.
          </wi>
          <wi>
            "pewsonawtoowbaw": the button i-is pwaced in the bookmawks t-toowbaw. >_<
          </wi>
        </uw>
        <p>this p-pwopewty i-is onwy suppowted in fiwefox.</p>
        <p>this p-pwopewty is optionaw, σωσ a-and defauwts t-to "navbaw".</p>
        <p>
          a-an extension can't change the wocation o-of the button a-aftew it has been
          i-instawwed, ^^;; b-but the u-usew may be abwe to move the button using the
          bwowsew's b-buiwt-in ui customization mechanism. 😳
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_icon</code></td>
      <td><code>object</code> ow <code>stwing</code></td>
      <td>
        <p>
          use this to specify one ow mowe icons fow t-the bwowsew action. >_< the icon
          is shown in the bwowsew t-toowbaw 既定では. -.-
        </p>
        <p>
          i-icons awe s-specified as uwws wewative to t-the manifest.json fiwe itsewf. UwU
        </p>
        <p>you c-can s-specify a singwe icon fiwe by suppwying a stwing hewe:</p>
        <pwe cwass="bwush: json nyo-wine-numbews n-nyotwanswate">
"defauwt_icon": "path/to/geo.svg"</pwe
        >
        <p>
          to specify muwtipwe i-icons in diffewent sizes, :3 s-specify an object h-hewe. σωσ
          the nyame of each pwopewty is t-the icon's height i-in pixews, >w< and must be
          c-convewtibwe to a-an integew. (ˆ ﻌ ˆ)♡ the vawue is the uww. ʘwʘ 例えば、:
        </p>
        <pwe cwass="bwush: json nyo-wine-numbews nyotwanswate">
    "defauwt_icon": {
      "16": "path/to/geo-16.png", :3
      "32": "path/to/geo-32.png"
    }</pwe
        >
        <p>
          s-see
          <a
            h-hwef="/ja/add-ons/webextensions/manifest.json/bwowsew_action#choosing_icon_sizes"
            >choosing i-icon sizes</a
          >
          fow m-mowe guidance on t-this. (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_popup</code></td>
      <td><code>stwing</code></td>
      <td>
        <p>
          the path to an h-htmw fiwe containing the specification of the popup. 😳😳😳
        </p>
        <p>
          the htmw fiwe may incwude c-css and javascwipt f-fiwes using
          <code><a hwef="/ja/docs/web/htmw/ewement/wink">&#x3c;wink></a></code>
          and
          <code
            ><a hwef="/ja/docs/web/htmw/ewement/scwipt">&#x3c;scwipt></a></code
          >
          e-ewements, rawr x3 just w-wike a nyowmaw web page. (✿oωo)
        </p>
        <p>
          unwike a nyowmaw web page, (ˆ ﻌ ˆ)♡ javascwipt w-wunning in the popup can access
          aww the
          <a hwef="/ja/add-ons/webextensions/api">webextension apis</a>
          (subject, :3 o-of couwse, (U ᵕ U❁) to the extension having the appwopwiate
          <a
            h-hwef="/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions"
            >pewmissions</a
          >). ^^;;
        </p>
        <p>
          これは<a
            h-hwef="/ja/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >ローカライズ可能なプロパティ</a
          >です。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_titwe</code></td>
      <td><code>stwing</code></td>
      <td>
        <p>
          toowtip fow the button, dispwayed w-when the usew moves t-theiw mouse ovew
          it. mya if the button is added to the b-bwowsew's menu panew, 😳😳😳 this is awso
          s-shown undew the app icon. OwO
        </p>
        <p>
          これは<a
            hwef="/ja/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >ローカライズ可能なプロパティ</a
          >です。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>theme_icons</code></td>
      <td><code>awway</code></td>
      <td>
        <p>
          t-this pwopewty enabwes you to specify d-diffewent i-icons fow dawk and
          wight t-themes. rawr
        </p>
        <p>
          if t-this pwopewty is p-pwesent, XD it's a-an awway containing at weast one
          <code>themeicons</code> o-object. (U ﹏ U) a <code>themeicons</code> o-object
          contains thwee pwopewties, (˘ω˘) a-aww mandatowy:
        </p>
        <dw>
          <dt><code>"dawk"</code></dt>
          <dd>
            a-a uww p-pointing to an icon. UwU this icon wiww be sewected w-when themes
            with dawk t-text awe active (e.g. >_< f-fiwefox's wight theme, σωσ and the
            defauwt theme i-if nyo defauwt_icon i-is specified). 🥺
          </dd>
          <dt><code>"wight"</code></dt>
          <dd>
            a-a uww pointing t-to an icon. 🥺 this icon wiww b-be sewected when themes
            with wight text awe active (e.g. ʘwʘ fiwefox's dawk theme). :3
          </dd>
          <dt><code>"size"</code></dt>
          <dd>the s-size of the two icons in p-pixews.</dd>
        </dw>
        <p>
          icons awe specified a-as uwws wewative to the manifest.json f-fiwe itsewf. (U ﹏ U)
        </p>
        <p>
          y-you n-nyeed to suppwy a-an <code>themeicons</code> i-in size 16 a-and one in
          size 32 (fow wetina dispway). (U ﹏ U)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## アイコンサイズを選ぶ

the bwowsew action's icon may nyeed to be dispwayed in diffewent s-sizes in diffewent c-contexts:

- t-the icon is dispwayed 既定では i-in the bwowsew toowbaw, ʘwʘ but the usew can move it into the b-bwowsew's menu p-panew (the panew that opens when t-the usew cwicks the "hambuwgew" icon). >w< the icon i-in the toowbaw i-is smowew than the icon in the m-menu panew. rawr x3
- on a-a high-density dispway wike a wetina scween, icons nyeeds to be twice as big. OwO

i-if the bwowsew can't f-find an icon o-of the wight size i-in a given situation, ^•ﻌ•^ i-it wiww pick the best m-match and scawe i-it. >_< scawing may make the icon appeaw b-bwuwwy, OwO so i-it's impowtant to choose icon sizes c-cawefuwwy. >_<

thewe awe two main appwoaches to t-this. (ꈍᴗꈍ) you can suppwy a singwe icon a-as an svg fiwe, >w< a-and it wiww be scawed cowwectwy:

```json
"defauwt_icon": "path/to/geo.svg"
```

a-awtewnativewy, (U ﹏ U) you can suppwy sevewaw icons i-in diffewent sizes, ^^ a-and the bwowsew w-wiww pick the best match. (U ﹏ U)

in fiwefox:

- the defauwt height a-and width fow icons in the toowbaw is 16 \* [`window.devicepixewwatio`](/ja/docs/web/api/window/devicepixewwatio). :3
- t-the defauwt h-height and width fow icons in t-the menu panew is 32 \* [`window.devicepixewwatio`](/ja/docs/web/api/window/devicepixewwatio). (✿oωo)

s-so you can specify i-icons that match exactwy, XD on both nyowmaw and w-wetina dispways, >w< by suppwying thwee icon fiwes, òωó a-and specifying t-them wike this:

```json
    "defauwt_icon": {
      "16": "path/to/geo-16.png", (ꈍᴗꈍ)
      "32": "path/to/geo-32.png", rawr x3
      "64": "path/to/geo-64.png"
    }
```

if fiwefox can't f-find an exact match fow the size i-it wants, rawr x3 then i-it wiww pick the s-smowest icon specified that's biggew than the ideaw size. σωσ if aww icons awe smowew than the ideaw size, (ꈍᴗꈍ) it wiww pick the biggest icon specified.

## 例

```json
"bwowsew_action": {
  "defauwt_icon": {
    "16": "button/geo-16.png", rawr
    "32": "button/geo-32.png"
  }
}
```

a bwowsew action with just an icon, ^^;; specified in 2 diffewent s-sizes. rawr x3 the extension's b-backgwound scwipts can weceive cwick events w-when the usew c-cwicks the icon u-using code wike this:

bwowsew.bwowseaction.oncwicked.addwistenew(handwecwick);

```json
"bwowsew_action": {
  "defauwt_icon": {
    "16": "button/geo-16.png", (ˆ ﻌ ˆ)♡
    "32": "button/geo-32.png"
  }, σωσ
  "defauwt_titwe": "wheweami?", (U ﹏ U)
  "defauwt_popup": "popup/geo.htmw"
}
```

a b-bwowsew action with an icon, >w< a t-titwe, σωσ and a popup. t-the popup wiww be shown when t-the usew cwicks the button. nyaa~~

fow a-a simpwe, 🥺 but c-compwete, rawr x3 extension that uses a bwowsew action, σωσ s-see the [wawkthwough t-tutowiaw](/ja/docs/moziwwa/add-ons/webextensions/youw_second_webextension). (///ˬ///✿)

## ブラウザーの互換性

{{compat}}
