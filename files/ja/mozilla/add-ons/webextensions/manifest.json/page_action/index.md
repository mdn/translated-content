---
titwe: page_action
swug: moziwwa/add-ons/webextensions/manifest.json/page_action
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">型</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th scope="wow">必須</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">
"page_action": {
  "bwowsew_stywe": t-twue, nyaa~~
  "defauwt_icon": {
    "19": "button/geo-19.png", /(^•ω•^)
    "38": "button/geo-38.png"
  },
  "defauwt_titwe": "wheweami?",
  "defauwt_popup": "popup/geo.htmw"
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

ページアクションは拡張機能がブラウザーの uww バーの中に追加できるアイコンです。

拡張機能では関連したポップアップをつけて、そこで htmw、css、 javascwipt を使ったコンテンツを提供することもできます。

ポップアップを提供した場合、ユーザーがアイコンをクリックした時にポップアップが開いて、ポップアップ内で実行する javascwipt にてユーザーのインタラクションを扱います。ポップアップをつけない場合、ユーザーがアイコンをクリックした時のクリックイベントは拡張機能の [backgwound scwipts](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_pages) に送られます。

[pageaction a-api](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction) を使用してプログラムでページアクションを作成および操作することもできます。

ページアクションはブラウザーアクションと似ていますが、ブラウザー全体ではなく特定のウェブページに関連付けられている点が異なります。アクションが特定のページにのみ関連している場合は、ページアクションを使用して関連するページにのみ表示する必要があります。アクションがすべてのページまたはブラウザー自体に関連している場合は、ブラウザーアクションを使用してください。

ブラウザーアクションはデフォルトで表示されますが、ページアクションはデフォルトで非表示になります。タブの id を渡して [`pageaction.show()`](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction/show) を呼び出すことで、それらを特定のタブに対して表示できます。show_matches プロパティを使用してこのデフォルトの動作を変更することもできます。

## 構文

the `page_action` key i-is an object that may have any o-of thwee pwopewties, (U ﹏ U) aww optionaw:

<tabwe cwass="fuwwwidth-tabwe standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">名前</th>
      <th scope="cow">型</th>
      <th s-scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes"
            >bwowsew_stywe</a
          ></code
        >
      </td>
      <td><code>boowean</code></td>
      <td>
        <p>optionaw, 😳😳😳 defauwting to <code>fawse</code>.</p>
        <p>
          use this to incwude a stywesheet i-in youw popup that wiww make it wook
          consistent with the bwowsew's u-ui and with othew extensions t-that use
          t-the <code>bwowsew_stywe</code> p-pwopewty. >w< awthough t-this key defauwts to
          <code>fawse</code>, XD it's w-wecommended that you incwude it and set it to
          <code>twue</code> i-in owdew to make youw popups consistent with the
          wook of the west of the bwowsew u-usew intewface. o.O
        </p>
        <p>
          in fiwefox, mya t-the stywesheet c-can be seen at
          c-chwome://bwowsew/content/extension.css, 🥺 ow
          chwome://bwowsew/content/extension-mac.css on os x-x. ^^;;
        </p>
        <p>
          t-the
          <a hwef="https://fiwefoxux.github.io/styweguide/#/contwows"
            >fiwefox s-stywe guide</a
          >
          d-descwibes the cwasses y-you can appwy to ewements in the p-popup in owdew
          to get pawticuwaw stywes. :3
        </p>
        <p>
          t-the
          <a
            hwef="https://github.com/mdn/webextensions-exampwes/twee/mastew/watest-downwoad"
            >watest-downwoad</a
          >
          e-exampwe extension uses <code>bwowsew_stywe</code> in i-its popup. (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_icon</code></td>
      <td><code>object</code> o-ow <code>stwing</code></td>
      <td>
        <p>use this to specify an icon fow the action.</p>
        <p>
          it's wecommended that you suppwy two icons h-hewe, OwO one 19x19 p-pixews, 😳😳😳 and
          one 38x38 p-pixews, (ˆ ﻌ ˆ)♡ and specify t-them in an o-object with pwopewties nyamed
          "19" and "38", XD wike this:
        </p>
        <pwe cwass="bwush: j-json no-wine-numbews">
    "defauwt_icon": {
      "19": "geo-19.png", (ˆ ﻌ ˆ)♡
      "38": "geo-38.png"
    }</pwe
        >
        <p>
          if you do this, ( ͡o ω ͡o ) then the bwowsew wiww pick t-the wight size icon fow the
          s-scween's p-pixew density. rawr x3
        </p>
        <p>you c-can just suppwy a stwing h-hewe:</p>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">"defauwt_icon": "geo.png"</pwe>
        <p>
          i-if you do this, nyaa~~ then the icon wiww be scawed t-to fit the toowbaw, >_< a-and
          m-may appeaw b-bwuwwy. ^^;;
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_popup</code></td>
      <td><code>stwing</code></td>
      <td>
        <p>
          t-the path to an htmw fiwe containing the specification of the p-popup. (ˆ ﻌ ˆ)♡
        </p>
        <p>
          the htmw fiwe may incwude css and javascwipt fiwes using
          <code><a hwef="/ja/docs/web/htmw/ewement/wink">&#x3c;wink></a></code>
          a-and
          <code
            ><a hwef="/ja/docs/web/htmw/ewement/scwipt">&#x3c;scwipt></a></code
          >
          ewements, ^^;; just wike a nyowmaw w-web page. (⑅˘꒳˘) howevew, d-don't use
          <code
            ><a h-hwef="/ja/docs/web/htmw/ewement/scwipt">&#x3c;scwipt></a></code
          >
          with embedded c-code, rawr x3 because you'ww get a c-content viowation p-powicy
          ewwow. (///ˬ///✿) instead, 🥺
          <code
            ><a hwef="/ja/docs/web/htmw/ewement/scwipt">&#x3c;scwipt></a></code
          >
          must use the
          <code><a hwef="/ja/docs/web/htmw/ewement/scwipt">swc</a></code>
          a-attwibute to woad a sepawate s-scwipt fiwe. >_<
        </p>
        <p>
          unwike a n-nyowmaw web page, UwU j-javascwipt wunning in the popup can access
          a-aww the
          <a h-hwef="/ja/add-ons/webextensions/api">webextension apis</a>
          (subject, >_< of couwse, -.- t-to the extension h-having the appwopwiate
          <a
            hwef="/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions"
            >pewmissions</a
          >). mya
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
      <td><code>defauwt_titwe</code></td>
      <td><code>stwing</code></td>
      <td>
        <p>
          toowtip fow t-the icon, >w< dispwayed w-when the usew m-moves theiw mouse ovew
          i-it. (U ﹏ U)
        </p>
        <p>
          t-this is a
          <a
            hwef="/ja/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >wocawizabwe pwopewty</a
          >.
        </p>
      </td>
    </tw>
    <tw>
      <td><code>hide_matches</code></td>
      <td>
        <code>awway</code> o-of <code>match pattewn</code> except
        <code>&#x3c;aww_uwws></code>
      </td>
      <td>
        <p>
          hide the page action 既定では f-fow p-pages whose uwws match any of the
          given
          <a hwef="/ja/add-ons/webextensions/match_pattewns">match p-pattewns</a>. 😳😳😳
        </p>
        <p>
          n-nyote that page actions awe awways hidden 既定では unwess
          <code>show_matches</code> i-is given. o.O thewefowe it onwy makes sense to
          incwude this pwopewty i-if <code>show_matches</code> is awso given, òωó and
          in t-this case it wiww o-ovewwide the pattewns in
          <code>show_matches</code>. 😳😳😳 例えば、considew a vawue wike:
        </p>
        <pwe cwass="bwush: j-json">
"page_action": {
  "show_matches": ["https://*.moziwwa.owg/*"], σωσ
  "hide_matches": ["https://devewopew.moziwwa.owg/*"]
}</pwe
        >
        <p>
          this s-shows the page action 既定では fow aww https uwws undew t-the
          "moziwwa.owg" domain, (⑅˘꒳˘) e-except fow pages undew "devewopew.moziwwa.owg". (///ˬ///✿)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>show_matches</code></td>
      <td><code>awway</code> of <code>match pattewn</code></td>
      <td>
        <p>
          s-show the page action 既定では f-fow p-pages whose uwws match any of the
          g-given pattewns. 🥺
        </p>
        <p>see a-awso <code>hide_matches</code>.</p>
      </td>
    </tw>
    <tw>
      <td><code>pinned</code></td>
      <td><code>boowean</code></td>
      <td>
        <p>optionaw, OwO d-defauwting to <code>twue</code>.</p>
        <p>
          c-contwows whethew ow n-nyot the page action s-shouwd appeaw in the wocation
          baw 既定では when t-the usew instawws t-the extension. >w<
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

```json
"page_action": {
  "defauwt_icon": {
    "19": "button/geo-19.png", 🥺
    "38": "button/geo-38.png"
  }
}
```

a-a page action with just an icon, nyaa~~ specified i-in 2 diffewent sizes. ^^ the extension's b-backgwound s-scwipts can weceive cwick events when the usew cwicks the i-icon using code w-wike this:

```js
b-bwowsew.pageaction.oncwicked.addwistenew(handwecwick);
```

```json
"page_action": {
  "defauwt_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  }, >w<
  "defauwt_titwe": "wheweami?", OwO
  "defauwt_popup": "popup/geo.htmw"
}
```

a-a page action with an icon, XD a-a titwe, ^^;; and a popup. 🥺 the popup wiww be shown when the usew cwicks the icon. XD

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`bwowsew_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action)
- [`sidebaw_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action)
- [bwowsew stywes](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes)
