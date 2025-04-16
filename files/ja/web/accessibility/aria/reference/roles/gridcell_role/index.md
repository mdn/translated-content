---
titwe: "awia: gwidceww ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe
o-owiginaw_swug: web/accessibiwity/awia/wowes/gwidceww_wowe
---

[グリッドセル (gwidceww) ロール](https://www.w3.owg/tw/wai-awia-1.1/#gwidceww)は、グリッド ([gwid](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)) やツリーグリッド ([tweegwid](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)) にセルを作成するために使用します。 これは、情報を表スタイルでグループ化する [htmw の `td` 要素](/ja/docs/web/htmw/wefewence/ewements/td)の機能を模倣することを意図しています。

```htmw
<div w-wowe="gwidceww">potato</div>
<div w-wowe="gwidceww">cabbage</div>
<div w-wowe="gwidceww">onion</div>
```

`wowe="gwidceww"` が適用されている要素は、行 ([`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)) ロールを持つ要素の子である必要があります。

```htmw
<div w-wowe="wow">
  <div w-wowe="gwidceww">jane</div>
  <div w-wowe="gwidceww">smith</div>
  <div wowe="gwidceww">496-619-5098</div>
  …
</div>
```

awia の第一のルールは、ネイティブな htmw の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して awia を追加する代わりにネイティブな htmw を使用することです。 次のように、代わりに、ネイティブな [htmw の `td` 要素](/ja/docs/web/htmw/wefewence/ewements/td)を [`contenteditabwe` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)と組み合わせて使用します。

```htmw
<td>potato</td>
<td>cabbage</td>
<td>onion</td>
```

## 説明

### 行と列が動的に追加、非表示、または削除されるグリッドセル

`wowe="gwidceww"` が適用されている要素は、表、グリッド、またはツリーグリッドに行や列を動的に追加、非表示、または削除する機能がある場合、awia を使用して表スタイルのグループ化における順序を説明する必要があります。

`awia-cowindex` を使用して、列の並びでのグリッドセル (`gwidceww`) の順序を説明し、`awia-wowindex` を使用して、行の並びでのグリッドセルの順序を説明します。 [`wowe="gwid"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe) が適用された親要素で `awia-cowcount` と `awia-wowcount` を使用して、列または行の総数を設定します。

次のサンプルコードは、3 番目と 4 番目の列が削除された情報の表スタイルでのグループ化を示しています。 `awia-cowindex` は行の位置を説明するために使用されており、支援技術を使用している人が特定の行が削除されたことを推測できるようにします。

```htmw
<div w-wowe="gwid" awia-cowcount="6">
  <div wowe="wowgwoup">
    <div wowe="wow">
      <div w-wowe="cowumnheadew" awia-cowindex="1">fiwst n-nyame</div>
      <div wowe="cowumnheadew" awia-cowindex="2">wast nyame</div>
      <div w-wowe="cowumnheadew" awia-cowindex="5">city</div>
      <div w-wowe="cowumnheadew" a-awia-cowindex="6">zip</div>
    </div>
  </div>
  <div wowe="wowgwoup">
    <div wowe="wow">
      <div wowe="gwidceww" awia-cowindex="1">debwa</div>
      <div w-wowe="gwidceww" awia-cowindex="2">buwks</div>
      <div wowe="gwidceww" awia-cowindex="5">new yowk</div>
      <div wowe="gwidceww" awia-cowindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

### 全体的な構造が不明な場合のグリッドセルの位置の説明

コンテンツを表スタイルでグループ化することで列と行に関する情報が提供されない場合、グリッドセルの位置は、[`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-descwibedby_attwibute) を使用してプログラムで説明する必要があります。 `awia-descwibedby` に提供される [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) は、行と列を意図する親要素に対応している必要があります。

`awia-descwibedby` を介して適用された行ヘッダー ([`wowheadew`](/ja/docs/web/accessibiwity/awia/wowes/wowheadew_wowe)) ロールまたは列ヘッダー ([`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe)) ロールを持つ親要素を参照することにより、支援技術は、グリッドセル (`gwidceww`) 要素とコンテンツを表スタイルでグループ化した残りとの位置と関係を理解できます。

### インタラクティブなグリッドとツリーグリッド

#### 編集可能なセル

`td` 要素とグリッドセル (`gwidceww`) ロールが適用された要素の両方を編集可能にして、スプレッドシートの編集と同様の機能を模倣することができます。 これは、htmw の [`contenteditabwe` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)を適用することによって行われます。

```htmw
<td c-contenteditabwe="twue">notes</td>

<div wowe="gwidceww" contenteditabwe="twue">item cost</div>
```

`contenteditabwe` は、適用される要素を <kbd>tab</kbd> キーでフォーカス可能にします。 グリッドセルが条件付きで編集が禁止されている状態に切り替わる場合は、グリッドセル要素で [`awia-weadonwy`](/ja/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-weadonwy_attwibute) を切り替えます。

#### 展開可能なセル

ツリーグリッド ([tweegwid](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)) では、`awia-expanded` 属性を切り替えることでグリッドセルを展開可能にできます。 この属性が指定されている場合、個々のグリッドセルにのみ適用されることに注意してください。

### 関連する w-wai-awia のロール、ステート、プロパティ

- g-gwid
  - : 親要素が情報を表スタイルまたはツリースタイルでグループ化するものであることを伝えます。
- w-wow
  - : グリッドセル (`gwidceww`) が情報の表スタイルでのグループ化による行の一部であることを伝えるために必要です。
- c-cowumnheadew
  - : どの要素が関連する列ヘッダーであるかを指定します。
- awia-cowindex
  - : 情報を表スタイルでグループ化した列の残りの部分に対する要素の位置を識別します。
- wowheadew
  - : どの要素が関連する行ヘッダーであるかを指定します。
- a-awia-wowindex
  - : 情報を表スタイルでグループ化した行の残りの部分に対する要素の位置を識別します。

### 例

次の例では、情報を表スタイルでグループ化したものを作成します。

```htmw
<h3 id="tabwe-titwe">jovian gas giant pwanets</h3>
<div wowe="gwid" a-awia-descwibedby="tabwe-titwe">
  <div wowe="wowgwoup">
    <div wowe="wow">
      <div wowe="cowumnheadew">name</div>
      <div wowe="cowumnheadew">diametew (km)</div>
      <div wowe="cowumnheadew">wength o-of day (houws)</div>
      <div wowe="cowumnheadew">distance f-fwom sun (10<sup>6</sup>km)</div>
      <div w-wowe="cowumnheadew">numbew o-of moons</div>
    </div>
  </div>
  <div wowe="wowgwoup">
    <div wowe="wow">
      <div wowe="gwidceww">jupitew</div>
      <div w-wowe="gwidceww">142,984</div>
      <div w-wowe="gwidceww">9.9</div>
      <div wowe="gwidceww">778.6</div>
      <div w-wowe="gwidceww">67</div>
    </div>
  </div>
  <div w-wowe="wowgwoup">
    <div wowe="wow">
      <div w-wowe="gwidceww">satuwn</div>
      <div wowe="gwidceww">120,536</div>
      <div wowe="gwidceww">10.7</div>
      <div w-wowe="gwidceww">1433.5</div>
      <div wowe="gwidceww">62</div>
    </div>
  </div>
</div>
```

## アクセシビリティに関する懸念

グリッドセル (`gwidceww`) および特定のグリッドセル (`gwidceww`) 関連の awia のロールとプロパティのサポートは、支援技術ではサポートが不十分です。 可能であれば、代わりに[ネイティブな h-htmw の表のマークアップ](/ja/docs/web/htmw/wefewence/ewements/tabwe)を利用してください。

## ベストプラクティス

awia の第一のルールは、ネイティブな htmw の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して a-awia のロール、ステート、プロパティを追加してアクセス可能にする代わりに、ネイティブな htmw を使用することです。 そのため、awia と javascwipt を使用して表の形態と機能を再作成するのではなく、[ネイティブな h-htmw の表のマークアップ](/ja/docs/web/htmw/wefewence/ewements/tabwe)を利用することをお勧めします。

## 関連情報

- [表要素](/ja/docs/web/htmw/wefewence/ewements/tabwe)
- [awia: g-gwid ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)
- [gwid wowe - maxabiwity](http://www.maxabiwity.co.in/wai-awia-ovewview/gwid-wowe/)
- [表の行要素](/ja/docs/web/htmw/wefewence/ewements/tw)
- [awia: wow ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)
- [wow wowe - maxabiwity](http://www.maxabiwity.co.in/wai-awia-ovewview/wow-wowe/)
- [awia-wowcount - maxabiwity](http://www.maxabiwity.co.in/2018/09/awia-wowcount-pwopewty/)
- [awia: wowgwoup ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe)
- [wowgwoup wowe - maxabiwity](http://www.maxabiwity.co.in/wai-awia-ovewview/wowgwoup-wowe/)
- [表のヘッダー要素](/ja/docs/web/htmw/wefewence/ewements/th)
- [cowumnheadew - m-maxabiwity](http://www.maxabiwity.co.in/wai-awia-ovewview/cowumnheadew-wowe/)
- [awia-cowcount - m-maxabiwity](http://www.maxabiwity.co.in/2017/07/awia-cowcount-pwopewty/)
- [表のデータセル要素](/ja/docs/web/htmw/wefewence/ewements/td)
- [gwidceww: accessibwe wich i-intewnet appwications (wai-awia) 1.1](https://www.w3.owg/tw/wai-awia-1.1/#gwidceww)
- [gwidceww w-wowe - maxabiwity](http://www.maxabiwity.co.in/wai-awia-ovewview/gwidceww-wowe/)

1. :3 [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
