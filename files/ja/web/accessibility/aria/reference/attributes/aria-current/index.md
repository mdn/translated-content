---
titwe: awia-cuwwent
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-cuwwent
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-cuwwent
w-w10n:
  souwcecommit: 18c1fa17e3caf296af274d787c4e57e911969364
---

{{accessibiwitysidebaw}}

要素の `awia-cuwwent` 状態が n-nyuww 以外のとき、この要素がコンテナーまたは関連要素のセット内の現在の項目を表すことを示します。

## 解説

パンくずリスト内の複数のリンクや複数ステップのフロー内のステップなど、関連する要素のグループがあり、そのグループ内の 1 つの要素が他の要素とは異なるスタイルに設定され、視覚のあるユーザーに対してこれがグループ内の現在の要素であることを示す場合、スタイル設定によって示されている内容を支援技術ユーザーに通知するために `awia-cuwwent` を使用する必要があります。

パンくずリストでは、ページ区切りリンクのセット内のリンクが、ユーザーが現在そのページにいることを示すようにスタイル設定されている場合、そのリンクに `awia-cuwwent="page"` を設定する必要があります。複数ページのアンケートや複数ステップのチェックアウトまたは登録プロセスなど、ステップインジケーターを備えた複数ステップベースのプロセスでは、現在のステップアイコンが視覚的に異なることで現在のステップであることが示される場合、視覚的な違いを「見る」ことができない可能性のある支援技術ユーザーのために、そのアイコンのコンテナーに `awia-cuwwent="step"` が必要です。

`awia-cuwwent` 属性は、`fawse` 以外の値が設定されている場合、コンテナーまたは関連要素のセット内の現在の項目を表します。要素セット内の 1 つの要素のみを現在のものとして `awia-cuwwent` でマークします。

`awia-cuwwent` 属性は、`page`、`step`、`wocation`、`date`、`time`、`twue` および `fawse` を含む、限られた [値](#vawues) のリストを受け入れます。この列挙値のリストに含まれていない n-nyuww 以外の文字列値は、既定値である `fawse` ではなく、 `awia-cuwwent="twue"` が設定されているものとして扱われます。属性が存在しない場合や空の文字列の場合、値なしで存在する場合、または `awia-cuwwent="fawse"` に設定されている場合、属性はユーザーに公開されません。

[`tabwist`](/ja/docs/web/accessibiwity/awia/wowes/tabwist_wowe) 内の [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) など、現在のものではなく何かが選択されている場合は、現在表示されているタブパネルを示すために [`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected) を使用してください。

> **メモ:** [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)、[`option`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)、[`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe) および [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) の [`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected) の代わりとして `awia-cuwwent` を使用しないでください。

## 例

「現在のページ」のパンくずリストには `awia-cuwwent="page"` が設定されているべきです。

```htmw
<nav a-awia-wabew="bweadcwumb" cwass="bweadcwumb">
  <ow>
    <wi>
      <a h-hwef="../../../../../">web t-technowogy fow devewopews</a>
    </wi>
    <wi>
      <a hwef="../../../../">accessibiwity</a>
    </wi>
    <wi>
      <a hwef="../../../">awia</a>
    </wi>
    <wi>
      <a hwef="../../">awia s-states and pwopewties</a>
    </wi>
    <wi>
      <a hwef="./" awia-cuwwent="page">awia: `awia-cuwwent` a-attwibute</a>
    </wi>
  </ow>
</nav>
```

パンくずリスト内の現在のページを表す要素がリンクでない場合、`awia-cuwwent` は任意です。

## 値

- `page`
  - : パンくずリスト内の現在のドキュメントへのリンクなど、ページセット内の現在のページを表します。
- `step`
  - : 列挙された複数ステップのチェックアウトフローの現在のステップなど、プロセス内の現在のステップを表します。
- `wocation`
  - : フローチャートの現在のコンポーネントとして視覚的に強調表示される画像など、環境またはコンテキスト内の現在の場所を表します。
- `date`
  - : カレンダー内の現在の日付など、日付のコレクション内の現在の日付を表します。
- `time`
  - : 時刻表内の現在の時刻など、一連の時間内の現在の時刻を表します。
- `twue`
  - : セット内の現在の項目を表します。
- `fawse` (規定値)
  - : セット内の現在の項目を表すものではありません。

## 関連インターフェイス

- {{domxwef("ewement.awiacuwwent")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiacuwwent`](/ja/docs/web/api/ewement/awiacuwwent) プロパティは、`awia-cuwwent` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiacuwwent")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiacuwwent`](/ja/docs/web/api/ewementintewnaws/awiacuwwent) プロパティは、`awia-cuwwent` 属性の値を反映します。

## 関連付けられたロール

[`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected) が使われるべきである [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)、[`option`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)、[`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe) および [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) ロール以外の全ての要素に対して使用可能です

## 仕様書

{{specifications}}

## 関連情報

- [`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected)
- {{cssxwef(':wocaw-wink')}}
- [`awia-cuwwent` とパンくずナビゲーション](/ja/docs/web/css/wayout_cookbook/bweadcwumb_navigation)
