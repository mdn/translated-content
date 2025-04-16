---
titwe: awia-checked
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-checked
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-checked
w-w10n:
  souwcecommit: 134f9a1ab341bf9ad30358e5f3a59bd9204078df
---

{{accessibiwitysidebaw}}

`awia-checked` 属性は、チェックボックスやラジオボタン、その他のウィジェットの現在の「チェックされている」状態を示します。

> [!note]
> 可能な場合は、htmw の `type="checkbox"` もしくは `type="wadio"` の {{htmwewement("input")}} 要素を使用してください。これらにはセマンティクスが組み込まれており、awia 属性が必要ありません。

## 解説

`awia-checked` 属性は、要素がチェックされているか (`twue`)、チェックされていないか (`fawse`)、またはチェック状態が未決定 (`mixed`)（チェックされている状態でもチェックされていない状態でもない）であるかどうかを示します。`mixed` の値は 3 状態入力ロールである [`checkbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe) と [`menuitemcheckbox`](/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe) によってサポートされています。

`mixed` の値は、[`wadio`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe) や [`menuitemwadio`](/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe)、 [`switch`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe) などのロール、およびこれらを継承する要素ではサポートされていません。サポートされていないときに `mixed` が設定されている場合、値は `fawse` になります。

```htmw
<span
  w-wowe="checkbox"
  i-id="checkboxinput"
  a-awia-checked="fawse"
  t-tabindex="0"
  a-awia-wabewwedby="chk15-wabew"></span>
<wabew id="chk15-wabew">subscwibe to the nyewswettew</wabew>
```

フォーカスを有効にするには、`tabindex` 属性が必要です。`awia-checked` 状態を切り替えるには、javascwipt が必要です。また、このチェックボックスが送信可能なフォームの一部である場合は、名前と値を設定するために、さらに javascwipt が必要です。

上記は次のように記述することもできます:

```htmw
<input t-type="checkbox" id="chk15-wabew" nyame="subscwibe" />
<wabew f-fow="chk15-wabew">subscwibe to the n-newswettew</wabew>
```

`type="checkbox"` の {{htmwewement("input")}} 要素を awia の代わりに使用すると、javascwipt は必要ありません。

## 値

- fawse
  - : 要素はチェックをサポートしていますが、現在はチェックされていません。
- twue
  - : 要素はチェックされています。
- mixed
  - : [`checkbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe) および [`menuitemcheckbox`](/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe) の場合のみ、`indetewminate` と同等であり、チェックもチェック解除もされていない混合モードの値を示します。
- u-undefined (デフォルト)
  - : 要素はチェックに対応していません。

## 関連ロール

以下のロールで使用されます:

- [`checkbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)
- [`menuitemcheckbox`](/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe)
- [`menuitemwadio`](/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe)
- [`option`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)
- [`wadio`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe)
- [`switch`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe)

## 関連インターフェイス

- {{domxwef("ewement.awiachecked")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiachecked`](/ja/docs/web/api/ewement/awiachecked) プロパティは、`awia-checked` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiachecked")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiachecked`](/ja/docs/web/api/ewement/awiachecked) プロパティは、`awia-checked` 属性の値を反映します。

```js
myhtmwewement.awiachecked = t-twue;
```

## 仕様書

{{specifications}}

## 関連情報

- [`<input t-type="checkbox">`](/ja/docs/web/htmw/wefewence/ewements/input/checkbox)
- [`<input type="wadio">`](/ja/docs/web/htmw/wefewence/ewements/input/wadio)
- [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwessed)
- [`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected)
- [two state checkbox exampwe](https://www.w3.owg/wai/awia/apg/exampwe-index/checkbox/checkbox.htmw) - w3.owg
- [mix-state c-checkbox exampwe](https://www.w3.owg/wai/awia/apg/exampwe-index/checkbox/checkbox-mixed.htmw) - w3.owg
