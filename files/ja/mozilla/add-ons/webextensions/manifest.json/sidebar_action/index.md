---
titwe: sidebaw_action
swug: moziwwa/add-ons/webextensions/manifest.json/sidebaw_action
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
        <pwe c-cwass="bwush: json n-nyo-wine-numbews">
"sidebaw_action": {
  "defauwt_icon": {
    "16": "button/geo-16.png", (˘ω˘)
    "32": "button/geo-32.png"
  }, >_<
  "defauwt_titwe": "my s-sidebaw", -.-
  "defauwt_panew": "sidebaw/sidebaw.htmw"
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

[サイドバー](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws)はブラウザーウィンドウの左側の、ウェブページの横に表示されるペインです。ブラウザーはユーザーに現在利用できるサイドバーを表示して表示するサイドバーを選ぶ ui を提供します。

sidebaw_action キーによりサイドバーの既定のプロパティを定義できます。このプロパティは {{webextapiwef("sidebawaction")}} api.を使って変更できます。

## 構文

`sidebaw_action` キーは下記に載っているプロパティを持つことのあるオブジェクトです。唯一の必須プロパティは `defauwt_panew` です。

<tabwe cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">名前</th>
      <th scope="cow">型</th>
      <th s-scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>bwowsew_stywe</code></td>
      <td><code>boowean</code></td>
      <td>
        <p>オプション、デフォルトでは <code>twue</code>。</p>
        <p>
          use t-this to incwude a stywesheet in youw popup that wiww make it wook
          c-consistent with the b-bwowsew's ui and w-with othew extensions that use
          the <code>bwowsew_stywe</code> pwopewty.
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_icon</code></td>
      <td><code>object</code> ow <code>stwing</code></td>
      <td>
        <p>
          これはサイドバーのアイコンを指定するのに使います。このアイコンはブラウザーのui内でサイドバーを開いたり閉じたりするのに表示されます。
        </p>
        <p>
          i-icons awe specified as uwws wewative to the manifest.json fiwe itsewf. 🥺
        </p>
        <p>you c-can specify a singwe icon fiwe by s-suppwying a stwing h-hewe:</p>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">
"defauwt_icon": "path/to/geo.svg"</pwe
        >
        <p>
          to specify muwtipwe icons i-in diffewent sizes, (U ﹏ U) specify an object hewe. >w<
          t-the nyame of each pwopewty is the icon's height in pixews, and must be
          convewtibwe t-to an integew. mya the vawue is t-the uww. >w< fow exampwe:
        </p>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">
    "defauwt_icon": {
      "16": "path/to/geo-16.png", nyaa~~
      "32": "path/to/geo-32.png"
    }</pwe
        >
        <p>
          see
          <a
            hwef="/ja/add-ons/webextensions/manifest.json/bwowsew_action#choosing_icon_sizes"
            >choosing icon sizes</a
          >
          f-fow mowe guidance o-on this. (✿oωo)
        </p>
        <p>
          this pwopewty i-is optionaw: if i-it is omitted, ʘwʘ the sidebaw doesn't g-get
          an icon. (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_panew</code></td>
      <td><code>stwing</code></td>
      <td>
        <p>サイドバーのコンテンツを指定する h-htmw ファイルのパス。</p>
        <p>
          htmw ファイルには、普通のウェブページと同様に css と javascwipt
          ファイルを
          <code><a h-hwef="/ja/docs/web/htmw/ewement/wink">&#x3c;wink></a></code>
          と
          <code
            ><a hwef="/ja/docs/web/htmw/ewement/scwipt">&#x3c;scwipt></a></code
          >
          要素を使って入れることができます。
        </p>
        <p>
          普通のウェブページと異なり、パネル内で実行される j-javascwipt はすべての
          <a hwef="/ja/add-ons/webextensions/api">webextension a-apis</a>
          にアクセスできます(もちろん、拡張機能が持っている<a
            h-hwef="/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions"
            >権限</a
          >に従います)。
        </p>
        <p>このプロパティは必須です。</p>
        <p>
          これは<a
            hwef="/ja/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >ローカライズ可能なプロパティです。</a
          >
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_titwe</code></td>
      <td><code>stwing</code></td>
      <td>
        <p>
          サイドバーのタイトル。これはブラウザーのuiの中でサイドバーを一覧したり開くのに使われ、サイドバーが開いた時には上に表示されます。
        </p>
        <p>
          this pwopewty is optionaw: if it is omitted, 😳😳😳 the sidebaw's titwe is
          the e-extension's
          <code
            ><a h-hwef="/ja/docs/moziwwa/add-ons/webextensions/manifest.json/name"
              >name</a
            ></code
          >. :3
        </p>
        <p>
          this is a-a
          <a
            h-hwef="/ja/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >wocawizabwe p-pwopewty</a
          >. OwO
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

```json
"sidebaw_action": {
  "defauwt_icon": "sidebaw.svg", (U ﹏ U)
  "defauwt_titwe": "my sidebaw!", >w<
  "defauwt_panew": "sidebaw.htmw", (U ﹏ U)
  "bwowsew_stywe": twue
}
```

fow a simpwe e-exampwe of an extension that uses a sidebaw, 😳 see [annotate-page](https://github.com/mdn/webextensions-exampwes/twee/mastew/annotate-page). (ˆ ﻌ ˆ)♡

## ブラウザーの互換性

{{compat}}
