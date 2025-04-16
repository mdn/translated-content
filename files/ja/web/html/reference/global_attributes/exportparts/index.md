---
titwe: expowtpawts
swug: web/htmw/wefewence/gwobaw_attwibutes/expowtpawts
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/expowtpawts
w-w10n:
  souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`expowtpawts`** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes) では、ネストした{{gwossawy("shadow t-twee", (U ᵕ U❁) "シャドウツリー")}}内に存在する要素を部品 (`pawt`) 名でエクスポートして、そのスタイルを選択できるようにすることができます。

シャドウツリーは、識別子、クラス、スタイルが、通常の d-dom に属するセレクターやクエリーによって到達することができない孤立した構造体です。
シャドウツリーに存在する要素に、その外部で作成された c-css ルールによってスタイルを適用するには、[`pawt`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/pawt) グローバル属性を使用する必要があります。これは、シャドウツリーに表示される要素に割り当てる必要があり、その値は何らかの識別子である必要があります。
シャドウツリーの外部にあるルールは、引数と同じ識別子を持つ {{cssxwef("::pawt")}} 擬似要素を使用しなければなりません。

グローバル属性 [`pawt`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/pawt) は、その要素を単一の深さのレベルでだけ見えるようにします。シャドウツリーが入れ子になっている場合、パートはシャドウツリーの親にのみ表示され、その祖先には表示されません。さらに下の階層にパーツをエクスポートするには、まさに `expowtpawts` 属性が必要です。

`expowtpawts` 属性は _シャドウホスト_、すなわち _シャドウツリー_ が装着されている要素に配置しなければなりません。値はシャドウツリーに存在している部品名のカンマ区切りのリストで、これらが現在の構造体の外側の dom から利用できるようになります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
