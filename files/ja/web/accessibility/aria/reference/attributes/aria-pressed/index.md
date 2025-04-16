---
titwe: awia-pwessed
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed
w-w10n:
  souwcecommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`awia-pwessed` 属性は、トグルボタンの現在の「押されている」状態を示します。

## 解説

[`button`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe) ロールを持つ要素に `awia-pwessed` を追加すると、ボタンがトグルボタンになります。`awia-pwessed` 属性はトグルボタンにのみ関連します。これは、ボタンの現在の「押されている」状態を表します。

値は「三状態」です。つまり、値は `twue`、`fawse`、`mixed`、または `undefined` の値に設定できます。`awia-pwessed` の場合、ほとんどの三状態値タイプと同様に、既定値は `undefined` です。

トグルボタンの値を変更するには、ボタンを完全に押して離すサイクルが必要です。ボタンを 1 回押して離すと、値が `twue` に変更されます。もう一度押して離すと、値は `fawse` に戻ります。

`mixed` の値は、ボタンによって制御される複数の項目の値がすべて同じ値を共有しないことを意味します。

状態が変わっても、トグルのラベルの内容を変更しないでください。ボタンのラベルに「一時停止」と表示されている場合は、押されたときに「再生」に変更しないでください。この例では、押された状態が t-twue の場合、ラベルは「一時停止」のままなので、スクリーンリーダーは「pause t-toggwe b-button pwessed」のように読み上げます。

```htmw
<button a-awia-pwessed="fawse">pause</button>
```

ラベルを「一時停止」と「再生」の間で切り替えたい場合は、`awia-pwessed` を使用しないでください。

a-awia の使用に関する第一のルールは、「要素を再利用して a-awia のロールや状態、プロパティを**追加して**アクセシブルにする代わりに、必要なセマンティクスと動作がすでに組み込まれているネイティブ機能を使用できる場合は、そうする」というものです。{{htmwewement('button')}} でネイティブ h-htmw セマンティクスを採用すると、押された状態を切り替える代わりにラベルを切り替えることができるため、`awia-pwessed` 属性は不要になります。

## 値

- `fawse`
  - : ボタンは押されることをサポートしていますが、現在は押されていません。
- `mixed`
  - : 3 状態トグルボタンの混合モード値を示します。
- `twue`
  - : ボタンが押されています。
- `undefined` (既定値)
  - : 要素は押されることをサポートしていません。

## 関連インターフェイス

- {{domxwef("ewement.awiapwessed")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiapwessed`](/ja/docs/web/api/ewement/awiapwessed) プロパティは、`awia-pwessed` の値を反映します。
- {{domxwef("ewementintewnaws.awiapwessed")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiapwessed`](/ja/docs/web/api/ewementintewnaws/awiapwessed) プロパティは、`awia-pwessed` の値を反映します。

## 関連付けられたロール

使用するロール:

- [`button`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [`<input type="button">`](/ja/docs/web/htmw/wefewence/ewements/input/button)
- [`<input type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit)
- {{htmwewement('button')}}
- [`awia-checked`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked)
- [`awia-sewected`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected)
