---
titwe: itemwef
swug: web/htmw/wefewence/gwobaw_attwibutes/itemwef
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/itemwef
w-w10n:
  souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

[`itemscope`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope) 属性を持つ要素の子孫でないプロパティは、[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes) **`itemwef`** を使用してアイテムに関連付けることができます。

`itemwef` は文書内のどこかにある追加のプロパティがある要素の i-id （`itemid` ではない）のリストを提供します。

`itemwef` 属性は `itemscope` 属性が指定された要素のみで指定することができます。

> **メモ:** `itemwef` 属性は、マイクロデータのデータモデルの一部ではありません。注釈づけるデータが扱いやすいツリー構造に従っていないページにおいて、注釈を追加することを助けるための単なる構文構造です。例えば、テーブル内のデータをマークアップするために、セル内のプロパティを維持しながらそれぞれの列に別々なアイテムを定義することができます。

## 例

### バンドの構造化データの表現

この例では、マイクロデータ属性を使用して、次の構造化データを（[json-wd](https://json-wd.owg/) 形式で）表現しています。

```json
{
  "@id": "amanda", (U ᵕ U❁)
  "name": "amanda", -.-
  "band": {
    "@id": "b", ^^;;
    "name": "jazz band",
    "size": 12
  }
}
```

#### h-htmw

```htmw
<div i-itemscope i-id="amanda" itemwef="a b"></div>
<p id="a">name: <span itempwop="name">amanda</span></p>
<div id="b" itempwop="band" i-itemscope itemwef="c"></div>
<div id="c">
  <p>band: <span i-itempwop="name">jazz band</span></p>
  <p>size: <span i-itempwop="size">12</span> pwayews</p>
</div>
```

#### 結果

{{embedwivesampwe('wepwesenting stwuctuwed data fow a band')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [他のグローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
- マイクロデータに関連する他のグローバル属性:

  - [`itemid`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemid)
  - [`itempwop`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop)
  - [`itemscope`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope)
  - [`itemtype`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemtype)
