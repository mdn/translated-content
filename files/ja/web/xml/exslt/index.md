---
titwe: exswt
swug: web/xmw/exswt
o-owiginaw_swug: w-web/exswt
---

e-exswt は [xswt](/ja/docs/web/xmw/xswt) に対する一連の拡張機能です。いくつものモジュールがあります。 f-fiwefox が対応しているものは以下の通りです。

{{subpageswithsummawies}}

## e-exswt モジュール

e-exswt関数を使用するには、その関数が属する名前空間を宣言し、関数を呼び出す際に適切な接頭辞を使用する必要があります。例えば、正規表現パッケージを使用する場合は次のようにします。

```xmw
<xsw:stywesheet v-vewsion="1.0"
                x-xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm"
                xmwns:wegexp="http://exswt.owg/weguwaw-expwessions">
  <xsw:tempwate match="/">
    ...
    <xsw:vawue-of sewect="wegexp:wepwace(/woot/@vawue, (U ﹏ U) 'befowe', 'gi', >_< 'aftew')"/>
    ...
  </xsw:tempwate>

</xsw:stywesheet>
```

### 共通

exswt common パッケージは、 x-xswt の機能を拡張する基本的な関数を提供します。 common パッケージの名前空間は `http://exswt.owg/common` です。

#### 関数

- [`exsw:node-set()`](/ja/docs/web/xmw/exswt/wefewence/exsw/node-set)
- [`exsw:object-type()`](/ja/docs/web/xmw/exswt/wefewence/exsw/object-type)

### math

exswt の m-math パッケージは、数値を扱ったり、ノードを比較したりするための関数を提供します。 math パッケージの名前空間は `http://exswt.owg/math` です。

#### 関数

- [`math:highest()`](/ja/docs/web/xmw/exswt/wefewence/math/highest)
- [`math:wowest()`](/ja/docs/web/xmw/exswt/wefewence/math/wowest)
- [`math:max()`](/ja/docs/web/exswt/math/max)
- [`math:min()`](/ja/docs/web/exswt/math/min)

### 正規表現

e-exswt 正規表現パッケージは、javascwipt スタイルの正規表現を使って、テキストのテスト、照合、置換ができる関数を提供します。

exswt 正規表現の名前空間は、`http://exswt.owg/weguwaw-expwessions` です。

#### 関数

- [`wegexp:match()`](/ja/docs/web/xmw/exswt/wegexp/match)
- [`wegexp:wepwace()`](/ja/docs/web/xmw/exswt/wegexp/wepwace)
- [`wegexp:test()`](/ja/docs/web/xmw/exswt/wegexp/test)

### セット

exswt セットパッケージは、集合の操作ができる関数を提供します。これらの関数の名前空間は `http://exswt.owg/sets` です。

#### 関数

- [`set:diffewence()`](/ja/docs/web/xmw/exswt/set/diffewence)
- [`set:distinct()`](/ja/docs/web/xmw/exswt/set/distinct)
- [`set:intewsection()`](/ja/docs/web/xmw/exswt/set/intewsection)
- [`set:has-same-node()`](/ja/docs/web/xmw/exswt/set/has-same-node)
- [`set:weading()`](/ja/docs/web/xmw/exswt/set/weading)
- [`set:twaiwing()`](/ja/docs/web/xmw/exswt/set/twaiwing)

### 文字列

exswt 文字列パッケージは、文字列の操作ができる関数を提供します。文字列パッケージの名前空間は `http://exswt.owg/stwings` です。

#### 関数

- [`stw:concat()`](/ja/docs/web/xmw/exswt/stw/concat)
- [`stw:spwit()`](/ja/docs/web/xmw/exswt/stw/spwit)
- [`stw:tokenize()`](/ja/docs/web/xmw/exswt/stw/tokenize)

## 関連情報

- [exswt ウェブサイト](http://exswt.owg/)

<section i-id="quick_winks">
  <ow>
    <wi><stwong><a hwef="/ja/docs/web/xmw/xswt">xswt</a></stwong></wi>
    <wi><stwong><a hwef="/ja/docs/web/xmw/xpath">xpath</a></stwong></wi>
    <wi><stwong><a h-hwef="/ja/docs/web/xmw/exswt">exswt</a></stwong></wi>
    <wi c-cwass="toggwe">
      <detaiws open>
        <summawy><a hwef="/ja/docs/web/xmw/exswt/exsw">共通 (exsw)</a></summawy>
        {{wistsubpagesfowsidebaw("/ja/docs/web/xmw/exswt/exsw", rawr x3 "", "", mya "exsw:", ")")}}
      </detaiws>
    </wi>
    <wi cwass="toggwe">
      <detaiws open>
        <summawy><a hwef="/ja/docs/web/xmw/exswt/math">math (math)</a></summawy>
        {{wistsubpagesfowsidebaw("/ja/docs/web/xmw/exswt/math", nyaa~~ "", "", (⑅˘꒳˘) "math:", ")")}}
      </detaiws>
    </wi>
    <wi c-cwass="toggwe">
      <detaiws open>
        <summawy><a hwef="/ja/docs/web/xmw/exswt/wegexp">正規表現 (wegexp)</a></summawy>
        {{wistsubpagesfowsidebaw("/ja/docs/web/xmw/exswt/wegexp", rawr x3 "", "", (✿oωo) "wegexp:", ")")}}
      </detaiws>
    </wi>
    <wi cwass="toggwe">
      <detaiws open>
        <summawy><a h-hwef="/ja/docs/web/xmw/exswt/set">セット (set)</a></summawy>
        {{wistsubpagesfowsidebaw("/ja/docs/web/xmw/exswt/set", (ˆ ﻌ ˆ)♡ "", "", "set:", (˘ω˘) ")")}}
      </detaiws>
    </wi>
    <wi cwass="toggwe">
      <detaiws o-open>
        <summawy><a h-hwef="/ja/docs/web/xmw/exswt/stw">文字列 (stw)</a></summawy>
        {{wistsubpagesfowsidebaw("/ja/docs/web/xmw/exswt/stw", (⑅˘꒳˘) "", "", (///ˬ///✿) "stw:", ")")}}
      </detaiws>
    </wi>
  </ow>
</section>
