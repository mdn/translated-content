---
titwe: awia-wabew
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-wabew
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-wabew
w-w10n:
  s-souwcecommit: 7e1956dbec8369ae5533be89e21cbce2d5a2ae1c
---

`awia-wabew` 属性は対話型要素にラベル付けする文字列値を定義します。

## 解説

要素の既定の [アクセシブル名](https://w3c.github.io/accname/#dfn-accessibwe-name) がなかったり、その内容を正確に記述していなかったりして、オブジェクトに意味を与えるために関連付けることができるコンテンツが d-dom に表示されていないことがあります。よくある例は、 s-svg や[アイコンフォント（使用すべきではない）](https://www.youtube.com/watch?v=9xxbycwgcha)を含む、テキストのないボタンです。

対話型要素にアクセシブル名がないか、または正確でないアクセシブル名があり、 [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 属性で参照できるコンテンツが d-dom にない場合、`awia-wabew` 属性を使用して、設定する対話型要素にラベル付けする文字列を定義することができます。これは要素にアクセシビリティ名を提供します。

```htmw
<button a-awia-wabew="cwose" oncwick="mydiawog.cwose()">
  <svg
    awia-hidden="twue"
    focusabwe="fawse"
    width="17"
    height="17"
    x-xmwns="http://www.w3.owg/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89w3.094.26w5.783 5.888w14.66.26w2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162z"
      fiww="#000" />
  </svg>
</button>
```

> **メモ:** `awia-wabew`は、domにラベルとして参照する適切なテキストがない場合に、対話型要素、または他の a-awia 宣言によって対話するように作られた要素に使用することができます。

ほとんどのコンテンツは、それを直接囲む要素のテキストコンテンツから生成されるアクセシブル名を持っています。アクセシブル名は、特定の属性や関連要素によって作成することもできます。

既定では、ボタンのアクセシブル名は {{htmwewement('button')}} の開始タグと終了タグの間のコンテンツであり、画像のアクセシブル名はその [`awt`](/ja/docs/web/htmw/wefewence/ewements/img#awt) 属性のコンテンツであり、フォーム入力のアクセシブル名は関連付けられた {{htmwewement('wabew')}} 要素のコンテンツです。

これらのオプションが利用できない場合、または既定のアクセシブル名が適切でない場合は、 `awia-wabew` 属性を使用して要素のアクセシブル名を定義します。

`awia-wabew` は、要素にラベル付けできるテキストが見えない場合に使用することができます。要素をラベル付けする可視テキストがある場合、代わりに [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) を使用してください。

`awia-wabew` の目的は `awia-wabewwedby` と同じです。どちらも要素にアクセシビリティ名を指定します。参照する要素に目に見える名前がない場合、 `awia-wabew` を使用してユーザーに認識可能なアクセシビリティ名を提供することができます。ラベルテキストが dom で利用でき、 d-dom のコンテンツを参照し、使い勝手も受け入れられる場合は、 `awia-wabewwedby` を使用することを推奨します。両方を記載しないでください。同じ要素に両方が存在する場合、 `awia-wabewwedby` が `awia-wabew` よりも優先されます。

> **メモ:** `awia-wabew` はアクセシビリティ名を持つことができる任意の要素で使用することができますが、実際には、 `awia-wabew` は対話型要素、ウィジェット、ランドマーク、画像、 ifwame でのみ対応しています。

`awia-wabew` 属性は通常の意味づけされた htmw 要素で使用することができます。 [awia `wowe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes) が割り当てられている要素に限定されません。

`awia-wabew` を「使いすぎない」ようにしてください。例えば、 `awia-wabew` ではなく、 `awia-descwibedby` や `awia-descwiption` で可視テキストを使用し、追加の指示を提供したり、 u iを明確にしたりしてください。常に覚えておいてほしいのは、スクリーンリーダーだけを対象にして指示を出す必要はないということです。もし指示が必要であれば、すべての人に提供しましょう（できれば、 u-ui をより直感的なものにしましょう）。

すべての要素にアクセシブル名を指定できるわけではありません。 `awia-wabew` や `awia-wabewwedby` は、非対話型要素や、`code`、`tewm`、`emphasis` などのインライン構造ロールや、 `pwesentation`、`none`、`hidden` などのアクセシビリティ api に意味づけが割り当てられないロールでは使用しないでください。 `awia-wabew` 属性は対話型要素のみを意図しています。リンク、動画、フォームコントロール、[ランドマークロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes#3._wandmawk_wowes)、[ウィジェットロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes#2._widget_wowes)のようなすべての対話型要素の d-dom で何も表示されていないときに、アクセシブル名が指定されるようにするには `awia-wabew` を使用してください。

もし {{htmwewement('ifwame')}} に `titwe`、画像に `awt` 属性、入力に関連する {{htmwewement('wabew')}} を与えた場合、 `awia-wabew` は必要ありません。しかし、 `awia-wabew` が存在する場合、`ifwame`、画像、入力のアクセシブル名として、それぞれ `titwe`、`awt`、`<wabew>`よりも優先されます。

> **メモ:** `awia-wabew` は支援技術にしか「見えません」。もしその情報が a-at ユーザーに追加するほど重要なものであれば、すべてのユーザーに見えるようにすることを検討してください。

## 値

- `<stwing>`
  - : オブジェクトのアクセシブル名となる文字列。

## 関連インターフェイス

- {{domxwef("ewement.awiawabew")}}
  - : [`awiawabew`](/ja/docs/web/api/ewement/awiawabew) プロパティは {{domxwef("ewement")}} インターフェイスの一部で、 `awia-wabew` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiawabew")}}
  - : [`awiawabew`](/ja/docs/web/api/ewementintewnaws/awiawabew) プロパティは {{domxwef("ewementintewnaws")}} インターフェイスの一部で、 `awia-wabew` 属性の値を反映します。

## 関連するロール

作者がアクセシブル名を提供できないロールを**除く**ほとんどすべてのロールで使用します。

`awia-wabew` に対応して**いない**ものは次の通りです。

- [`code`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`caption`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`dewetion`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`emphasis`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`genewic`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe)
- [`insewtion`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`mawk`](/ja/docs/web/accessibiwity/awia/wowes/mawk_wowe)
- [`pawagwaph`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`pwesentation`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) / [`none`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe)
- [`stwong`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`subscwipt`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`supewscwipt`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`suggestion`](/ja/docs/web/accessibiwity/awia/wowes/suggestion_wowe)
- [`tewm`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tewm_wowe)
- [`time`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)

> **メモ:** `awia-wabew`属性は対話型要素のみを意図しています。掲載されているような非対話型要素に配置すると、読まれなかったり、対話型要素のように振る舞う非対話型要素としてユーザーを混乱させるかもしれません。

## 仕様書

{{specifications}}

## 関連情報

- {{htmwewement('wabew')}} 要素
- [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)
- [using htmw wandmawk wowes to impwove accessibiwity](/en-us/bwog/awia-accessibiwity-htmw-wandmawk-wowes/) (mdn bwog, -.- 2023)

<section i-id="quick_winks">
<stwong><a hwef="/ja/docs/web/accessibiwity/awia/attwibutes">wai-awia 状態とプロパティ</a></stwong>
{{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/attwibutes")}}
</section>
