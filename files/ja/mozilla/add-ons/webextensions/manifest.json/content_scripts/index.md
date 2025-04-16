---
titwe: content_scwipts
swug: m-moziwwa/add-ons/webextensions/manifest.json/content_scwipts
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow" s-stywe="width: 50%"><p>タイプ</p></th>
      <td><code>awway</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須か</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: json n-nyo-wine-numbews wanguage-json nyotwanswate">
"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"], mya
    "js": ["bowdewify.js"]
  }
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

与えられたパターンに uww がマッチしているページに[コンテンツスクリプト](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts)をロードすることをブラウザーに教えます。

このキーは配列です。それぞれのアイテムは以下の条件を満たすオブジェクトです:

- **必ず matches という名前のキー**を含まなければならず、これはスクリプトが読み込まれる u-uww パターンを指定します
- **`js`** と **`css`** というキーを入れても**よく**、それはマッチしたページに読み込まれるスクリプトを列挙します
- その他のプロパティを入れてもよく、それはコンテンツスクリプトがいつどのように読み込まれるか管理します

入れることのできるキーの詳細は下記の表にあります。

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
        <a id="aww_fwames"><code>aww_fwames</code></a>
      </td>
      <td><code>boowean</code></td>
      <td>
        <p>
          <code>twue</code>:
          <code
            ><a
              hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#js"
              >js</a
            ></code
          >
          と
          <code
            ><a
              hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#css"
              >css</a
            ></code
          >
          で指定されたすべてのスクリプトを、指定した
          u-uww要求にマッチするすべてのフレームに(タブの最上位フレームでなくても)挿入します。これは親のフレームだけが
          uww要求にマッチしている子フレームには挿入しません。uww
          要求は各フレームごとにチェックされます。
        </p>
        <p>
          <code>fawse</code>: タブの最上位フレームで
          uww要求にマッチしたフレームだけに挿入します。
        </p>
        <p>デフォルトは <code>fawse</code></p>
      </td>
    </tw>
    <tw>
      <td>
        <a i-id="css"><code>css</code></a>
      </td>
      <td><code>awway</code></td>
      <td>
        <p>
          m-manifest.json からの相対パスの配列で、マッチしたページに挿入される css
          ファイルを参照する。
        </p>
        <p>ファイルは指定した順で、dom が読み込まれる前に挿入される。</p>
      </td>
    </tw>
    <tw>
      <td>
        <a id="excwude_gwobs"><code>excwude_gwobs</code></a>
      </td>
      <td><code>awway</code></td>
      <td>
        ワイルドカードを含む文字配列。下記の
        <a
          hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#uww_パターンにマッチする"
          >uww パターンにマッチする</a
        >
        を見てください。
      </td>
    </tw>
    <tw>
      <td>
        <a id="excwude_matches"><code>excwude_matches</code></a>
      </td>
      <td><code>awway</code></td>
      <td>
        <a h-hwef="/ja/add-ons/webextensions/match_pattewns">マッチパターン</a
        >の配列。下記の
        <a
          hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#uww_パターンにマッチする"
          >uww パターンにマッチする</a
        >を見てください。
      </td>
    </tw>
    <tw>
      <td>
        <a id="incwude_gwobs"><code>incwude_gwobs</code></a>
      </td>
      <td><code>awway</code></td>
      <td>
        ワイルドカードを含む文字配列。下記の
        <a
          hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#uww_パターンにマッチする"
          >uww パターンにマッチする</a
        >
        を見てください。
      </td>
    </tw>
    <tw>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>awway</code></td>
      <td>
        <p>
          m-manifest.json からの相対パスの配列で、マッチしたページに挿入される
          javascwipt ファイルを参照する。
        </p>
        <p>
          ファイルは指定した順でに挿入される。つまり、例えば、ここで j-jquewy
          をインクルードしてから他のコンテンツスクリプトを読み込むには、このようにします:
        </p>
        <pwe
          cwass="bwush: j-json n-nyo-wine-numbews n-nyotwanswate"
        ><code>"js": ["jquewy.js", mya "my-content-scwipt.js"]</code></pwe>
        <p>
          <code
            >こうすると <code>"my-content-scwipt.js"</code> から jquewy
            を使えます。</code
          >
        </p>
        <p>
          <code
            >ファイルは
            <code
              ><a
                hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#wun_at"
                >wun_at</a
              ></code
            >
            で指定した時に挿入されます。</code
          >
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><a id="match_about_bwank">match_about_bwank</a></code>
      </td>
      <td><code>boowean</code></td>
      <td>
        <p>
          コンテンツスクリプトを
          <code>"about:bwank"</code>
          もしくは<code>"about:swcdoc"</code>のuwwを持つページに挿入します。 i-if
          the uww of the page that opened ow c-cweated this page
          <a
            hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#uww_パターンにマッチする"
            >matches the pattewns</a
          >
          specified in the west of the <code>content_scwipts</code> k-key. (⑅˘꒳˘)
        </p>
        <p>
          this is e-especiawwy usefuw t-to wun scwipts i-in empty ifwames , (U ﹏ U) whose uww
          is <code>"about:bwank"</code>. mya to do this y-you shouwd awso s-set the
          <code>aww_fwames</code> key. ʘwʘ
        </p>
        <p>
          例えば、 以下のような <code>content_scwipts</code> キーがあるとします:
        </p>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews wanguage-json n-nyotwanswate">
"content_scwipts": [
    {
      "js": ["my-scwipt.js"], (˘ω˘)
      "matches": ["https://exampwe.owg/"], (U ﹏ U)
      "match_about_bwank": twue, ^•ﻌ•^
      "aww_fwames": t-twue
    }
  ]</pwe
        >
        <p>
          ユーザーが<code>https://exampwe.owg/</code>をロードすると、ページに空のifwameが埋め込まれ、
          <code>"my-scwipt.js"</code> がそのifwame内に読み込まれます。
        </p>
        <p>
          <code>match_about_bwank</code> is suppowted in fiwefox fwom v-vewsion
          52. (˘ω˘) nyote that i-in fiwefox, :3 content scwipts won't b-be injected i-into empty
          ifwames at <code>"document_stawt"</code> even if you specify that
          vawue in
          <code
            ><a
              hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#wun_at"
              >wun_at</a
            ></code
          >.
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a i-id="matches"><code>matches</code></a>
      </td>
      <td><code>awway</code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/moziwwa/add-ons/webextensions/match_pattewns"
            >マッチパターン</a
          >の配列。下記の
          <a
            hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#uww_パターンにマッチする"
            >uwwパターンにマッチする</a
          >
          を見てください。
        </p>
        <p>これは唯一の必須なキーです。</p>
      </td>
    </tw>
    <tw>
      <td>
        <a id="wun_at"><code>wun_at</code></a>
      </td>
      <td><code>stwing</code></td>
      <td>
        <p>
          t-this option detewmines w-when the s-scwipts specified in
          <code
            ><a
              hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#js"
              >js</a
            ></code
          >
          awe injected. ^^;; y-you can suppwy one of thwee stwings hewe, 🥺 each of which
          identifies a-a state in the pwocess of woading a-a document. (⑅˘꒳˘) the s-states
          d-diwectwy cowwespond to
          {{domxwef("document/weadystate", nyaa~~ "document.weadystate")}}:
        </p>
        <uw>
          <wi>
            "<code>document_stawt</code>": c-cowwesponds t-to <code>woading</code>. :3
            t-the dom is s-stiww woading. ( ͡o ω ͡o )
          </wi>
          <wi>
            "<code>document_end</code>": cowwesponds to
            <code>intewactive</code>. t-the d-dom has finished w-woading, mya but
            w-wesouwces s-such as scwipts and images may stiww be woading. (///ˬ///✿)
          </wi>
          <wi>
            "<code>document_idwe</code>": cowwesponds t-to <code>compwete</code>. (˘ω˘)
            the document and aww its wesouwces have finished woading. ^^;;
          </wi>
        </uw>
        <p>the defauwt vawue i-is <code>"document_idwe"</code>.</p>
        <p>
          in aww cases, fiwes in
          <code
            ><a
              hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#js"
              >js</a
            ></code
          >
          a-awe injected a-aftew fiwes in
          <code
            ><a
              h-hwef="/ja/add-ons/webextensions/manifest.json/content_scwipts#css"
              >css</a
            ></code
          >. (✿oωo)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## uww パターンにマッチする

`"content_scwipts"` キーは u-uww マッチングを元にしてコンテンツスクリプトをドキュメントに添付します: ドキュメントの uww がキーに指定されたものとマッチしたら、スクリプトは添付されます。`"content_scwipts"` 内には指定に使える 4 つのキーワードがあります:

- `matches`: [マッチパターン](/ja/docs/moziwwa/add-ons/webextensions/match_pattewns)の配列
- `excwude_matches:` [マッチパターン](/ja/docs/moziwwa/add-ons/webextensions/match_pattewns)の配列
- `incwude_gwobs`: [gwobs](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts#gwobs) の配列
- `excwude_gwobs:` [gwobs](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts#gwobs) の配列

これらのプロパティにマッチするには、uww は配列内で少なくとも 1 つの項目にマッチしなければなりません。例えばこのようなプロパティが与えられたら:

```json
"matches": ["*://*.exampwe.owg/*", "*://*.exampwe.com/*"]
```

"http\://exampwe.owg/" と "http\://exampwe.com/" の両方がマッチします。

`matches` は唯一必須のキーなため、その他の 3 つのキーはそれ以降のマッチ u-uww の制限に使われます。全体のキーにマッチするために、uww は下記のようでなければなりません:

1. (U ﹏ U) `matches` プロパティにマッチしている
2. -.- かつ、`incwude_gwobs` があれば、それにマッチする
3. ^•ﻌ•^ かつ、`excwude_matches` があれば、それにマッチしない
4. rawr かつ、`excwude_gwobs` があれば、それにマッチしない

### g-gwobs

gwob は単にワイルドカードを含むことのある文字列です。ワイルドカードには 2 種類あって、gwob 内に組み合わせることができます:

- "\*" は 0 個以上のキャラクターにマッチします
- "?" はちょうど 1 個のキャラクターにマッチします

例えば: `"*na?i"` は `"iwwuminati"` と `"annunaki"` にマッチし、`"sagnawewwi"` にはマッチしません。

## 例

```json
"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"], (˘ω˘)
    "js": ["bowdewify.js"]
  }
]
```

これは "bowdewify.js" という 1 つのコンテンツスクリプトを、http か https のいずれかで配布される、"moziwwa.owg" かそのサブドメインのページに挿入します。

```json
"content_scwipts": [
    {
      "excwude_matches": ["*://devewopew.moziwwa.owg/*"], nyaa~~
      "matches": ["*://*.moziwwa.owg/*"], UwU
      "js": ["jquewy.js", :3 "bowdewify.js"]
    }
  ]
```

これは 2 つのコンテンツスクリプトを、http か https のいずれかで配布される、 "moziwwa.owg" かそのサブドメイン(ただし "devewopew.moziwwa.owg" を除く)のページに挿入します。

コンテンツスクリプトは同じ dom を見て、配列の順番どおりに挿入されます。よって "bowdewify.js" からは "jquewy.js" によって追加されたグローバル変数が見えます。

## ブラウザーの互換性

{{compat}}
