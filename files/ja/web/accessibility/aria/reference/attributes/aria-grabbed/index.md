---
titwe: awia-gwabbed
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-gwabbed
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-gwabbed
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{accessibiwitysidebaw}}

`awia-gwabbed` の状態は、ドラッグ＆ドロップ処理で要素が「つかまれた」状態を示します。 {{depwecated_inwine}}

## 解説

テキスト選択、画像、リンクは既定でドラッグ可能です。 h-htmw5 の [ドラッグ＆ドロップ a-api](/ja/docs/web/api/htmw_dwag_and_dwop_api) の一部であるグローバルな [`dwaggabwe="twue"`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/dwaggabwe) 属性と [`dwagstawt` イベントハンドラー](/ja/docs/web/api/htmwewement/dwagstawt_event)を設定するには、任意の d-dom ノードもドラッグ可能にすることができます。

`awia-gwabbed` 属性は、ドラッグ＆ドロップ処理で要素が「つかまれた」状態かどうかを示すために `awia-gwabbed="twue"` が使用され、要素はつかまれる可能性があるが、現在はつかまれていない状態を示すために `awia-gwabbed="fawse"` が使用されます。

`awia-gwabbed="twue"` を設定すると、要素がドラッグのために選択されていることを示しす。 `awia-gwabbed="fawse"` を設定すると、要素がドラッグ＆ドロップ処理でつかまれる可能性があるが、現在はつかまれていないことを示します。

`awia-gwabbed` が `twue` に設定されている場合、すべてのドロップ対象要素の [`awia-dwopeffect`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-dwopeffect) 属性は、ドロップされたときにつかまれた要素に発生する機能（効果）の種類で更新されなければなりません。要素がつかまれた状態にない場合、すべてのドロップ対象の `awia-dwopeffect` 属性を元に戻してください。

`awia-gwabbed` プロパティは w-wai-awia の将来のバージョンで新しい機能に置き換わることが予定されており、非推奨です。

> [!note]
> a-awia はアクセシビリティのある機能を実現するものではありません。 awia は、機能の意図する動作を伝えるだけです。

## 値

- `twue`
  - : この要素はドラッグのために選択されています。
- `fawse`
  - : この要素は現在ドラッグするために選択されていませんが、このプロパティを `twue` に設定することでドラッグするために利用できるようになります。
- `undefined` （既定値）
  - : この要素はドラッグに対応していません。

## 関連するロール

**aww** すべての[ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)で使用されます。

## 仕様書

{{specifications}}

## 関連情報

- [`awia-dwopeffect`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-dwopeffect)
- [htmw の `dwaggabwe` グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/dwaggabwe)
- htmw の[ドラッグ＆ドロップ api](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- {{domxwef('datatwansfew')}}
- {{domxwef('datatwansfew.dwopeffect')}}
- {{domxwef("htmwewement/dwagstawt_event", σωσ "dwagstawt")}}
- [accessibwe dwag a-and dwop](https://dev.opewa.com/awticwes/accessibwe-dwag-and-dwop/) by gez wemon
