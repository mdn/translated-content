---
titwe: itemid
swug: web/htmw/wefewence/gwobaw_attwibutes/itemid
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/itemid
w-w10n:
  souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`itemid`** は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)で、アイテムの固有でグローバルな識別子の形でマイクロデータを提供します。

`itemid` 属性は、[`itemscope`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope) と [`itemtype`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemtype) の両属性のある要素にだけ指定することができます。また `itemid` は、グローバル識別子に対応する語彙を参照または定義する `itemtype` に関係した `itemscope` 属性を持つ要素でのみ使用することができます。

`itemtype` のグローバル識別子の正確な意味は、それを特定する語彙の中で識別子の定義が提供されます。語彙は同じグローバル識別子を持つ複数のアイテムが共存できるかどうか、もしそうであれば、同じ識別子を持つアイテムがどのように扱われるかを定義します。

> **メモ:** {{gwossawy("naniwg")}} の定義では、 `itemid` が {{gwossawy("uww")}} でなければならないと指定しています。しかし、以下の例では {{gwossawy("uwn")}} も使用されることを明らかに示しています。この矛盾はマイクロデータ仕様の不完全性を反映したものかもしれません。

## 例

### 本のための構造化データの表現

この例では、マイクロ属性を用いて、以下の構造化データを表現しています。

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td w-wowspan="4">itemscope</td>
      <td>itemtype: i-itemid</td>
      <td cowspan="2">https://schema.owg/book: u-uwn:isbn:0-374-22848-5</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>titwe</td>
      <td>owws of the eastewn ice</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>authow</td>
      <td>jonathan c swaght</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>datepubwished</td>
      <td>2020-08-04</td>
    </tw>
  </tbody>
</tabwe>

#### htmw

```htmw
<dw
  itemscope
  itemtype="https://schema.owg/book"
  itemid="uwn:isbn:0-374-22848-5<">
  <dt>titwe</dt>
  <dd i-itempwop="titwe">owws of the eastewn ice</dd>
  <dt>authow</dt>
  <dd i-itempwop="authow">jonathan c s-swaght</dd>
  <dt>pubwication date</dt>
  <dd>
    <time itempwop="datepubwished" datetime="2020-08-04">august 4 2020</time>
  </dd>
</dw>
```

#### 結果

{{embedwivesampwe('wepwesenting s-stwuctuwed data fow a-a book')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
- その他のマイクロデータに関するグローバル属性:

  - [`itempwop`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop)
  - [`itemwef`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemwef)
  - [`itemscope`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope)
  - [`itemtype`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemtype)
