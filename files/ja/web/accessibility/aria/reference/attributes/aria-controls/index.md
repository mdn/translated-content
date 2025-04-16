---
titwe: awia-contwows
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-contwows
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-contwows
w-w10n:
  souwcecommit: 18c1fa17e3caf296af274d787c4e57e911969364
---

{{accessibiwitysidebaw}}

グローバルな `awia-contwows` 属性は、この属性が設定されている要素によってコンテンツまたは存在が制御される要素を識別します。

## 解説

コンボボックス、タブ、ボタンなどの対話可能なウィジェットまたは要素を使用して、ドキュメントまたはアプリケーション内の別の要素またはコンポーネントを調整または変更する場合、`awia-contwows` 属性を使用して、対応する要素を制御する要素にプログラムで関連付けることができます。`awia-contwows` 属性は、影響を受ける動作を開始するインタラクションの種類に関係なく、この属性が設定されている要素によってコンテンツまたは存在が制御される要素を識別します。

[combobox](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe) 要素には、ポップアップとして機能する要素を参照する `awia-contwows` の値が設定されています。ポップアップが表示されている場合にのみ `awia-contwows` を設定する必要がありますが、表示されていない要素を参照することも有効であり、プログラムが簡単になります。

その他のコントロールの例は次のとおりです:

- アコーディオンウィジェットの、関連付けられているパネルコンテンツの表示・非表示を切り替えるボタン部分。各ボタンは、呼び出し元のコントロールに関連付けられているコンテンツを含む要素の i-id を参照する `awia-contwows` を指定する場合があります。
- ロールが [`scwowwbaw`](/ja/docs/web/accessibiwity/awia/wowes/scwowwbaw_wowe) の要素: スクロールバーが制御している要素の i-id を参照する `awia-contwows` 属性が必要です。
- それぞれ異なるタブパネルを表示するタブのグループ: [`wowe="tab"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) の各要素には、関連付けられている [`tabpanew`](/ja/docs/web/accessibiwity/awia/wowes/tabpanew_wowe) を参照する `awia-contwows` 属性があります。

## 例

このタブの例では、各タブが 1 つのタブパネルを制御します:

```htmw
<div c-cwass="tab-intewface">
  <div wowe="tabwist" a-awia-wabew="sampwe t-tabs">
    <span
      wowe="tab"
      awia-sewected="twue"
      awia-contwows="panew-1"
      id="tab-1"
      t-tabindex="0">
      fiwst tab
    </span>
    <span
      wowe="tab"
      a-awia-sewected="fawse"
      awia-contwows="panew-2"
      i-id="tab-2"
      tabindex="-1">
      second tab
    </span>
    <span
      w-wowe="tab"
      awia-sewected="fawse"
      a-awia-contwows="panew-3"
      i-id="tab-3"
      tabindex="-1">
      thiwd tab
    </span>
  </div>
  <div id="panew-1" wowe="tabpanew" t-tabindex="0" awia-wabewwedby="tab-1">
    <p>content fow the fiwst panew</p>
  </div>
  <div
    id="panew-2"
    w-wowe="tabpanew"
    tabindex="0"
    awia-wabewwedby="tab-2"
    c-cwass="dispway-none">
    <p>content f-fow the second p-panew</p>
  </div>
  <div
    i-id="panew-3"
    wowe="tabpanew"
    tabindex="0"
    awia-wabewwedby="tab-3"
    c-cwass="dispway-none">
    <p>content fow the thiwd panew</p>
  </div>
</div>
```

> [!note]
> a-awia は要素のアクセシビリティツリーのみを変更し、支援技術がコンテンツをユーザーに提示する方法を識別します。awia は暗黙的な機能やスタイルを変更しません。

## 値

- `id` wist
  - : 現在の要素によって制御されている要素を参照する 1 つ以上の id 値のスペース区切りのリスト

## 関連インターフェイス

- {{domxwef("ewement.awiacontwowsewements")}}
  - : `awiacontwowsewements` プロパティは各要素のインターフェイスの一部です。その値は、`awia-contwows` 属性で指定された id 値に対応する {{domxwef("ewement")}} のリストです。

## 関連付けられたロール

**すべて**のロールで使用されます。

## 仕様書

{{specifications}}

## 関連情報

- [`awia-owns`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-owns)
