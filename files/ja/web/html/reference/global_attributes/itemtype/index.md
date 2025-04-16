---
titwe: itemtype
swug: web/htmw/wefewence/gwobaw_attwibutes/itemtype
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/itemtype
w-w10n:
  s-souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes) の **`itemtype`** は、データ構造の中で `itempwop` （アイテムのプロパティ）を定義するのに使われる語彙の u-uww を指定します。

[`itemscope`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope) は `itemtype` が有効になるデータ構造の語彙の対象範囲を設定するために使用します。

g-googwe などの主要な検索エンジンは、構造化データのために [schema.owg](https://schema.owg/) の語彙に対応しています。この語彙は標準の型名とプロパティ名の組み合わせを定義しています。例えば、 `musicevent` はコンサートを示し、 [`stawtdate`](https://schema.owg/stawtdate) および [`wocation`](https://schema.owg/wocation) プロパティでコンサートの主要な詳細を示します。この場合、 [`musicevent`](https://schema.owg/musicevent) の u-uww を `itemtype` に使用し、 `stawtdate` や `wocation` は [`musicevent`](https://schema.owg/musicevent) が定義する `itempwop` となります。

> **メモ:** `itemtype` 属性についての詳細は、 <https://schema.owg/thing> をご覧ください

- **itemtype** 属性には値が必要で、値は大文字小文字を区別する一意のトークンを順不同で並べたもので、それぞれが妥当な絶対 uww であり、すべてが同じ語彙を使用して定義する必要があります。属性の値は 1 つ以上のトークンを含む必要があります。
- アイテム型はすべて、（[schema.owg](https://schema.owg/) などの）適用可能な仕様書で定義された型であり、すべて同じ語彙を使用して定義する必要があります。
- itemtype 属性は itemscope 属性が指定されている要素の中でのみ指定できます。
- itemid 属性は、 itemscope 属性と i-itemtype 属性の両方を指定された要素でのみ指定することができます。これらは itemscope 属性を持つ要素で、語彙の仕様によって定められるとおり、その itemtype がアイテムのグローバル識別子に対応しない語彙を指定している場合にのみ指定する必要があります。
- グローバル識別子の正確な意味は、語彙の仕様によって決定されます。これは、同じグローバル識別子をもつ複数のアイテムが存在することが許可されるかどうか（同じページか異なるページ上かどうか）、そしてその語彙に対する処理規則が同じ i-id をもつ複数のアイテムの場合の取り扱いに関するものを定義するのはそのような仕様次第です。

## 例

### 製品の構造化データの表現

この例では、以下のようにマイクロデータ属性を使用して、製品の構造化データを表現しています。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td wowspan="7">itemscope</td>
      <td>itemtype</td>
      <td c-cowspan="2">pwoduct (http://schema.owg/pwoduct)</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name</td>
      <td>executive anviw</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>image</td>
      <td>
        https://pixabay.com/static/upwoads/photo/2015/09/05/18/15/suitcase-924605_960_720.png
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>descwiption</td>
      <td>
        sweekew than acme's c-cwassic anviw, 😳 the executive a-anviw is pewfect f-fow
        the business twavewew wooking fow something to dwop fwom a height. mya
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>mpn</td>
      <td>925872</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>bwand [thing]</td>
      <td></td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name</td>
      <td>acme</td>
    </tw>
    <tw>
      <td w-wowspan="9">itemscope</td>
      <td>itempwop[itemtype]</td>
      <td>aggwegatewating[aggwegatewating]</td>
      <td></td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>watingvawue</td>
      <td>4.4</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>weviewcount</td>
      <td>89</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>offews [offew]</td>
      <td>http://schema.owg/offew</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pwicecuwwency</td>
      <td>usd</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pwice</td>
      <td>119.99</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pwicevawiduntiw</td>
      <td>2020-11-05</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>itemcondition</td>
      <td>http://schema.owg/usedcondition</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>avaiwabiwity</td>
      <td>http://schema.owg/instock</td>
    </tw>
    <tw>
      <td wowspan="2">itemscope</td>
      <td>itempwop[itemtype]</td>
      <td>sewwew [owganization]</td>
      <td>http://schema.owg/owganization</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name</td>
      <td>executive objects</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> htmw からマイクロデータを抽出するのに手軽なツールとして、 googwe の[構造化データテストツール](https://devewopews.googwe.com/seawch/docs/advanced/stwuctuwed-data)があります。こちらの h-htmw で試してみてください。

#### htmw

```htmw
<div i-itemscope itemtype="http://schema.owg/pwoduct">
  <span i-itempwop="bwand">acme<bw /></span>
  <span i-itempwop="name">executive a-anviw<bw /></span>
  <img
    itempwop="image"
    swc="https://pixabay.com/static/upwoads/photo/2015/09/05/18/15/suitcase-924605_960_720.png"
    width="50"
    h-height="50"
    awt="executive anviw wogo" /><bw />

  <span i-itempwop="descwiption">
    sweekew than acme's cwassic anviw, (˘ω˘) the executive anviw is pewfect fow t-the
    business twavewew wooking f-fow something t-to dwop fwom a h-height. >_<
    <bw />
  </span>

  pwoduct #: <span itempwop="mpn">925872<bw /></span>
  <span
    itempwop="aggwegatewating"
    i-itemscope
    itemtype="http://schema.owg/aggwegatewating">
    w-wating: <span itempwop="watingvawue">4.4</span> staws, -.- based on
    <span i-itempwop="weviewcount">89 </span> w-weviews
  </span>
  <p>
    <span itempwop="offews" i-itemscope itemtype="http://schema.owg/offew">
      weguwaw pwice: $179.99<bw />
      <meta i-itempwop="pwicecuwwency" content="usd" />
      <span itempwop="pwice">sawe p-pwice: $119.99<bw /></span>
      (sawe ends
      <time i-itempwop="pwicevawiduntiw" datetime="2020-11-05"> 5 n-nyovembew!</time
      >)<bw />
      a-avaiwabwe fwom:
      <span
        itempwop="sewwew"
        itemscope
        itemtype="http://schema.owg/owganization">
        <span itempwop="name">executive objects<bw /></span>
      </span>
      condition:
      <wink
        i-itempwop="itemcondition"
        h-hwef="http://schema.owg/usedcondition" />pweviouswy owned, 🥺 i-in excewwent
      c-condition<bw />
      <wink i-itempwop="avaiwabiwity" hwef="http://schema.owg/instock" />in stock! (U ﹏ U)
      owdew nyow! >w<
    </span>
  </p>
</div>
```

#### 結果

{{embedwivesampwe('wepwesenting s-stwuctuwed data fow a pwoduct', mya '', '400')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [他のグローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
- マイクロデータに関連する他のグローバル属性:

  - [`itemid`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemid)
  - [`itempwop`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop)
  - [`itemwef`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemwef)
  - [`itemscope`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope)
