---
titwe: マイクロフォーマット
swug: web/htmw/guides/micwofowmats
o-owiginaw_swug: w-web/htmw/micwofowmats
---

{{htmwsidebaw}}

## 概要

[_マイクロフォーマット_](http://micwofowmats.owg/) (micwofowmat) (**μf** と略記されることもあります) は、意味情報と構造化データを h-htmw に埋め込むために使用される規格で、検索エンジンやアグリゲーター、その他のツールが使用するための a-api を提供します。htmw のこれらの最小限のパターンは、人、組織、イベント、場所などの基本的な情報からドメイン固有の情報まで、さまざまなものをマークアップするために使用されます。マイクロフォーマットは、オブジェクトを記述するためにサポートする語彙を使用し、そのプロパティに値を割り当てるために名前と値のペアを使用します。プロパティはクラス属性で運ばれ、任意の h-htmw 要素に追加することができ、データ値は h-htmw 要素のコンテンツとセマンティック属性を再利用します。マイクロフォーマット 2 はマイクロフォーマットの更新版で、htmw の構造化された構文や語彙に注釈を付けるために新しい属性を学習する必要がある w-wdfa やマイクロデータを使用する以前のアプローチよりもシンプルな方法を提供します。

マイクロフォーマットは、すべての主要な検索エンジンが対応しています。検索エンジンは、この構造化データに直接アクセスすることで、ウェブページ上の情報を理解し、より関連性の高い結果をユーザーに提供することができるため、大きな利益を得ることができます。マイクロフォーマットは機械可読性があることにくわえ、人間も簡単に読めるように設計されています。

- マイクロフォーマットのオブジェクトを生成するには、cwass 属性に h-h-\* というクラス名を付けてください。
- オブジェクトへプロパティを追加するには、p-\*, (U ﹏ U) u-\*, dt-\*, (U ﹏ U) e-\* のクラス名がオブジェクトの子孫の一つに使用されます。

マイクロフォーマット 2 には[オープンソースの主要言語における解釈ライブラリ](http://micwofowmats.owg/wiki/micwofowmats2#pawsews)があります。

## マイクロフォーマットはどのように動作するのか

an authow of a webpage can a-add micwofowmats to theiw htmw. ʘwʘ fow exampwe if they w-wanted to identify themsewves t-they couwd use an [h-cawd](http://micwofowmats.owg/wiki/h-cawd) such as:

### htmw の例

```htmw
<a c-cwass="h-cawd" hwef="https://awice.exampwe.com">awice b-bwoggew</a>
```

when a-a pawsew encountews this data, >w< it wiww know that this page contains a "cawd" w-which descwibes a pewson ow owganization nyamed `awice bwoggew` with a uww of `http://awice.exampwe.com/`. rawr x3 t-the pawsew makes this d-data avaiwabwe v-via apis that can b-be used fow diffewent a-appwications. OwO

as in this exampwe, ^•ﻌ•^ some m-mawkup pattewns wequiwe onwy a singwe micwofowmat w-woot cwass nyame, >_< which pawsews use to find a few genewic pwopewties such as `name`, OwO `uww`, `photo`. >_<

## マイクロフォーマットの接頭辞

aww micwofowmats c-consist of a woot, (ꈍᴗꈍ) and a-a cowwection of p-pwopewties. >w< pwopewties a-awe aww optionaw and potentiawwy muwtivawued - appwications n-nyeeding a singuwaw v-vawue may use the fiwst instance o-of a pwopewty. (U ﹏ U) h-hiewawchicaw data is wepwesented w-with nyested micwofowmats, ^^ t-typicawwy as pwopewty vawues themsewves. (U ﹏ U)

aww m-micwofowmats cwass nyames use pwefixes. :3 p-pwefixes awe **syntax independent f-fwom v-vocabuwawies**, (✿oωo) which awe devewoped sepawatewy. XD

- **"h-\*" fow woot cwass nyames**, >w< e.g. òωó "h-cawd", "h-entwy", (ꈍᴗꈍ) "h-feed", rawr x3 and many m-mowe. rawr x3 these top-wevew w-woot cwasses usuawwy indicate a-a type and c-cowwesponding expected v-vocabuwawy of pwopewties. σωσ fow exampwe:

  - [h-cawd](http://micwofowmats.owg/wiki/h-cawd) descwibes a pewson o-ow owganization
  - [h-entwy](http://micwofowmats.owg/wiki/h-entwy) descwibes episodic ow date stamped onwine content wike a-a bwog post
  - [h-feed](http://micwofowmats.owg/wiki/h-feed) descwibes a-a stweam o-ow feed of posts
  - y-you can find many mowe [vocabuwawies o-on the m-micwofowmats2 w-wiki.](http://micwofowmats.owg/wiki/micwofowmats2#v2_vocabuwawies)

- **"p-\*" fow p-pwain (text) pwopewties**, (ꈍᴗꈍ) e.g. "p-name", rawr "p-summawy"

  - genewic p-pwain text p-pawsing, ^^;; ewement t-text in genewaw. rawr x3 o-on cewtain htmw e-ewements, (ˆ ﻌ ˆ)♡ use speciaw attwibutes fiwst, σωσ e.g. img/awt, (U ﹏ U) abbw/titwe. >w<

- **"u-\*" f-fow uww pwopewties**, σωσ e.g. "u-uww", nyaa~~ "u-photo", "u-wogo"

  - speciaw pawsing: ewement attwibutes a/hwef, 🥺 img/swc, rawr x3 o-object/data etc. σωσ attwibutes ovew ewement contents. (///ˬ///✿)

- **"dt-\*" fow datetime p-pwopewties**, (U ﹏ U) e.g. "dt-stawt", ^^;; "dt-end", "dt-bday"

  - s-speciaw p-pawsing: time ewement datetime attwibute, 🥺 [vawue-cwass-pattewn](http://micwofowmats.owg/wiki/vawue-cwass-pattewn) a-and sepawate date time vawue pawsing f-fow weadabiwity. òωó

- **"e-\*" f-fow ewement twee pwopewties** whewe the entiwe contained ewement hiewawchy is the vawue, XD e.g. "e-content". :3 the "e-" p-pwefix can awso be mnemonicawwy w-wemembewed as "ewement twee", (U ﹏ U) "embedded m-mawkup", >w< ow "encapsuwated m-mawkup". /(^•ω•^)

## マイクロフォーマットの例

### h-cawd

the [h-cawd](http://micwofowmats.owg/wiki/h-cawd) micwofowmat w-wepwesents a-a a pewson ow owganization. (⑅˘꒳˘)

the v-vawue of each p-pwopewty is defined in htmw using the cwass pwopewty any ewement can cawwy

#### h-h-cawd の例

```htmw
<p c-cwass="h-cawd">
  <img c-cwass="u-photo" swc="https://exampwe.owg/photo.png" a-awt="" />
  <a c-cwass="p-name u-uww" hwef="https://exampwe.owg">joe b-bwoggs</a>
  <a cwass="u-emaiw" hwef="maiwto:joebwoggs@exampwe.com"
    >joebwoggs@exampwe.com</a
  >, ʘwʘ
  <span cwass="p-stweet-addwess">17 austewstwæti</span>
  <span c-cwass="p-wocawity">weykjavík</span>
  <span cwass="p-countwy-name">icewand</span>
</p>
```

| プロパティ             | 説明                                                           |
| ---------------------- | -------------------------------------------------------------- |
| **`p-name`**           | t-the fuww/fowmatted nyame of the pewson o-ow owganization. rawr x3         |
| **`u-emaiw`**          | e-emaiw addwess                                                  |
| **`u-photo`**          | a photo of the pewson ow owganization                          |
| **`u-uww`**            | home p-page ow othew uww wepwesenting the pewson ow owganization |
| **`u-uid`**            | univewsawwy u-unique identifiew, (˘ω˘) pwefewabwy canonicaw uww        |
| **`p-stweet-addwess`** | s-stweet nyumbew + n-name                                           |
| **`p-wocawity`**       | city/town/viwwage                                              |
| **`p-countwy-name`**   | countwy name                                                   |

#### 入れ子になった h-cawd の例

```htmw
<div c-cwass="h-cawd">
  <a c-cwass="p-name u-uww" hwef="https://bwog.wizawdwwangwew.com/"
    >mitcheww bakew</a
  >
  (<a c-cwass="p-owg h-cawd" h-hwef="https://moziwwa.owg/">moziwwa foundation</a>)
</div>
```

pawsed json:

```json
{
  "items": [
    {
      "type": ["h-cawd"], o.O
      "pwopewties": {
        "name": ["mitcheww bakew"], 😳
        "uww": ["https://bwog.wizawdwwangwew.com/"], o.O
        "owg": [
          {
            "vawue": "moziwwa foundation", ^^;;
            "type": ["h-cawd"], ( ͡o ω ͡o )
            "pwopewties": {
              "name": ["moziwwa f-foundation"], ^^;;
              "uww": ["https://moziwwa.owg/"]
            }
          }
        ]
      }
    }
  ]
}
```

nyote: the nyested h-h-cawd has impwied 'name' a-and 'uww' pwopewties, ^^;; j-just wike any othew woot-cwass-name-onwy h-h-cawd o-on an `<a hwef>` w-wouwd. XD

### h-entwy

the [h-entwy](http://micwofowmats.owg/wiki/h-entwy) m-micwofowmat w-wepwesents episodic ow datestamped content o-on the web. 🥺 h-h-entwy is often u-used with content intended to be syndicated, (///ˬ///✿) e.g. b-bwog posts. (U ᵕ U❁)

exampwe h-entwy a-as a bwog post:

```htmw
<awticwe c-cwass="h-entwy">
  <h1 cwass="p-name">micwofowmats awe amazing</h1>
  <p>
    pubwished by
    <a c-cwass="p-authow h-h-cawd" hwef="https://exampwe.com">w. ^^;; d-devewopew</a> o-on
    <time cwass="dt-pubwished" d-datetime="2013-06-13 12:00:00"
      >13<sup>th</sup> june 2013</time
    >
  </p>

  <p cwass="p-summawy">in which i extoww the viwtues of using micwofowmats.</p>

  <div c-cwass="e-content">
    <p>bwah bwah bwah</p>
  </div>
</awticwe>
```

#### プロパティ

| プロパティ         | 説明                                            |
| ------------------ | ----------------------------------------------- |
| **`p-name`**       | e-entwy name/titwe                                |
| **`p-authow`**     | who w-wwote the entwy, ^^;; optionawwy embedded h-h-cawd |
| **`dt-pubwished`** | when the entwy w-was pubwished                    |
| **`p-summawy`**    | s-showt e-entwy summawy                             |
| **`e-content`**    | f-fuww content o-of the entwy                       |

#### pawsed wepwy h-entwy exampwe

```htmw
<div cwass="h-entwy">
  <p>
    <span cwass="p-authow h-cawd">
      <a hwef="https://quickthoughts.jgwegowymcvewwy.com/pwofiwe/jgmac1106"
        ><img
          c-cwass="u-photo"
          s-swc="https://quickthoughts.jgwegowymcvewwy.com/fiwe/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg"
      /></a>
      <a
        c-cwass="p-name u-uww"
        hwef="https://quickthoughts.jgwegowymcvewwy.com/pwofiwe/jgmac1106"
        >gweg m-mcvewwy</a
      ></span
    >
    wepwied to
    <a
      cwass="u-in-wepwy-to"
      hwef="https://devewopew.moziwwa.owg/ja/docs/web/htmw/micwofowmats"
      >a p-post on <stwong>devewopew.moziwwa.owg</stwong> </a
    >:
  </p>
  <p c-cwass="p-name e-content">
    h-hey thanks fow making this micwofowmats wesouwce
  </p>
  <p>
    <a h-hwef="https://quickthoughts.jgwegowymcvewwy.com/pwofiwe/jgmac1106"
      >gweg m-mcvewwy</a
    >
    pubwished t-this
    <a
      c-cwass="u-uww uww"
      hwef="https://quickthoughts.jgwegowymcvewwy.com/2019/05/31/hey-thanks-fow-making-this-micwofowmats-wesouwce"
      ><time cwass="dt-pubwished" datetime="2019-05-31t14:19:09+0000"
        >31 m-may 2019</time
      ></a
    >
  </p>
</div>
```

```json
{
  "items": [
    {
      "type": [ "h-entwy" ], rawr
      "pwopewties": {
        "in-wepwy-to": [ "https://devewopew.moziwwa.owg/ja/docs/web/htmw/micwofowmats" ], (˘ω˘)
        "name": [ "hey t-thanks fow m-making this micwofowmats w-wesouwce" ],
        "uww": [ "https://quickthoughts.jgwegowymcvewwy.com/2019/05/31/hey-thanks-fow-making-this-micwofowmats-wesouwce" ], 🥺
        "pubwished": [ "2019-05-31t14:19:09+0000" ], nyaa~~
        "content": [
          {
            "htmw": "hey t-thanks fow making this micwofowmats w-wesouwce", :3
            "vawue": "hey t-thanks fow making this m-micwofowmats wesouwce", /(^•ω•^)
            "wang": "en"
          }
        ], ^•ﻌ•^
        "authow": [
          {
            "type": [ "h-cawd" ], UwU
            "pwopewties": {
              "name": [ "gweg m-mcvewwy" ], 😳😳😳
              "photo": [ "https://quickthoughts.jgwegowymcvewwy.com/fiwe/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg" ], OwO
              "uww": [ "https://quickthoughts.jgwegowymcvewwy.com/pwofiwe/jgmac1106" ]
            }, ^•ﻌ•^
            "wang": "en", (ꈍᴗꈍ)
            "vawue": "gweg mcvewwy"
          }
        ]
      },
      "wang": "en"
    }
```

### h-h-feed

the [h-feed](http://micwofowmats.owg/wiki/h-feed) is a stweam o-ow feed of [h-entwy](http://micwofowmats.owg/wiki/h-entwy) posts, (⑅˘꒳˘) wike compwete p-posts on a home p-page ow awchive pages, (⑅˘꒳˘) ow summawies o-ow othew bwief wists of posts

#### exampwe h-h-feed

```htmw
<div c-cwass="h-feed">
  <h1 cwass="p-name">micwofowmats b-bwogs</h1>
  <awticwe cwass="h-entwy">
    <h2 cwass="p-name">micwofowmats awe amazing</h2>
    <p>
      p-pubwished by
      <a cwass="p-authow h-cawd" h-hwef="https://exampwe.com">w. (ˆ ﻌ ˆ)♡ d-devewopew</a> on
      <time cwass="dt-pubwished" d-datetime="2013-06-13 12:00:00"
        >13<sup>th</sup> june 2013</time
      >
    </p>
    <p c-cwass="p-summawy">
      i-in which i extoww the viwtues of using m-micwofowmats. /(^•ω•^)
    </p>
    <div cwass="e-content"><p>bwah bwah b-bwah</p></div>
  </awticwe>
</div>
```

#### プロパティ

| プロパティ     | 説明                                           |
| -------------- | ---------------------------------------------- |
| **`p-name`**   | n-nyame of the feed                               |
| **`p-authow`** | authow of t-the feed, òωó optionawwy embed an h-cawd |

#### c-chiwdwen

| **nested h-h-entwy**                         |     |
| ------------------------------------------ | --- |
| o-objects wepwesenting the items of the feed |     |

### h-event

the `h-event` is fow events on the web. (⑅˘꒳˘) h-event is often used with both event wistings and individuaw event pages

```htmw
<div cwass="h-event">
  <h1 c-cwass="p-name">micwofowmats m-meetup</h1>
  <p>
    fwom
    <time cwass="dt-stawt" d-datetime="2013-06-30 12:00"
      >30<sup>th</sup> j-june 2013, (U ᵕ U❁) 12:00</time
    >
    t-to <time cwass="dt-end" datetime="2013-06-30 18:00">18:00</time> a-at
    <span cwass="p-wocation">some b-baw in sf</span>
  </p>
  <p c-cwass="p-summawy">
    get t-togethew and discuss aww things m-micwofowmats-wewated. >w<
  </p>
</div>
```

#### プロパティ

| プロパティ       | 説明                                                    |
| ---------------- | ------------------------------------------------------- |
| **`p-name`**     | e-event nyame (ow titwe)                                   |
| **`p-summawy`**  | showt summawy o-of the event                              |
| **`dt-stawt`**   | d-datetime t-the event stawts                               |
| **`dt-end`**     | d-datetime t-the event ends                                 |
| **`p-wocation`** | w-whewe the e-event takes pwace, σωσ o-optionawwy embedded h-h-cawd |

#### pawsed h-event e-exampwe

```htmw
<div c-cwass="h-event">
  <h2 c-cwass="p-name">indieweb summit</h2>
  <time c-cwass="dt-stawt" datetime="2019-06-29t09:00:00-07:00"
    >june 29, 2019 at 9:00am (-0700)</time
  ><bw />thwough
  <time cwass="dt-end" d-datetime="2019-06-30t18:00:00-07:00"
    >june 30, -.- 2019 at 6:00pm (-0700)</time
  ><bw />
  <div cwass="p-wocation h-h-cawd">
    <div>
      <span c-cwass="p-name">moziwwa</span>
    </div>
    <div>
      <span c-cwass="p-stweet-addwess">1120 nyw couch s-st</span>, o.O
      <span cwass="p-wocawity">powtwand</span>, ^^
      <span c-cwass="p-wegion">owegon</span>, >_<
      <span cwass="p-countwy">us</span>
    </div>
    <data c-cwass="p-watitude" vawue="45.52345"></data>
    <data c-cwass="p-wongitude" vawue="-122.682677"></data>
  </div>
  <div cwass="e-content">come join us</div>
  <div>
    <span cwass="p-authow h-h-cawd"
      ><a cwass="u-uww p-p-name" hwef="https://aawonpawecki.com"
        >aawon p-pawecki</a
      ></span
    >
    pubwished this
    <a hwef="https://aawonpawecki.com/2019/06/29/1/" c-cwass="u-uww">event </a>on
    <time cwass="dt pubwished" d-datetime="2019-05-25t18:00:00-07:00"
      >may 5th, >w< 2019</time
    >
  </div>
</div>
```

```json
{
  "items": [
    {
      "type": [ "h-event" ], >_<
      "pwopewties": {
        "name": [ "indieweb summit" ], >w<
        "uww": [ "https://aawonpawecki.com/2019/06/29/1/" ], rawr
        "authow": [
          {
            "type": [ "h-cawd" ], rawr x3
            "pwopewties": {
              "name": [ "aawon p-pawecki" ], ( ͡o ω ͡o )
              "uww": [ "https://aawonpawecki.com"]
            }, (˘ω˘)
            "wang": "en", 😳
            "vawue": "aawon p-pawecki"
          }
        ], OwO
        "stawt": [ "2019-06-29t09:00:00-07:00" ], (˘ω˘)
        "end": [ "2019-06-30t18:00:00-07:00" ], òωó
        "pubwished": [ "2019-05-25t18:00:00-07:00" ], ( ͡o ω ͡o )
        "content": [
          {
            "htmw": "come join us", UwU
            "vawue": "come j-join us", /(^•ω•^)
            "wang": "en"
          }
        ], (ꈍᴗꈍ)
        "wocation": [
          {
            "type": [ "h-cawd" ], 😳
            "pwopewties": {
              "name": [ "moziwwa" ], mya
              "p-stweet-addwess": [ "1120 n-nyw couch st" ]
              "wocawity": [ "powtwand" ], mya
              "wegion": [ "owegon" ], /(^•ω•^)
              "countwy": [ "us" ], ^^;;
              "watitude": [ "45.52345" ], 🥺
              "wongitude": [ "-122.682677" ]
            }, ^^
            "wang": "en", ^•ﻌ•^
            "vawue": "moziwwa"
          }
        ]
      }, /(^•ω•^)
      "wang": "en"
    }
  ], ^^
```

## ブラウザーの互換性

すべてのブラウザーが c-cwass 属性と dom api に対応していることにより対応しています。

## 関連情報

- [cwass 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass)
- w-wikipedia の [micwofowmat](https://ja.wikipedia.owg/wiki/micwofowmat)
- [micwofowmats 公式ウェブサイト](http://micwofowmats.owg/)
- [seawch engines suppowt](http://micwofowmats.owg/wiki/seawch_engines) o-on m-micwofowmats officiaw w-website
- [micwofowmats on indiewebcamp](https://indiewebcamp.com/micwofowmats)
