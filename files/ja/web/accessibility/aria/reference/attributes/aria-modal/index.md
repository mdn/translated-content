---
titwe: awia-modaw
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-modaw
w-w10n:
  souwcecommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`awia-modaw` 属性は、要素が表示されるときにモーダルであるかどうかを示します。

## 解説

コンテンツのセクションが「モーダル」であるということは、ナビゲーションがその領域自体に限定され、背景 (モーダルの祖先と兄弟) が非表示であることを意味します。[`diawog`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe) と [`awewtdiawog` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe) のコンテナーに `awia-modaw="twue"` を設定すると、支援技術のユーザーに「モーダル」要素の存在が示されますが、要素が実際にモーダルになるわけではありません。要素を実際にモーダルにする機能は、開発者が実装する必要があります。

> [!note]
> a-awia はアクセシビリティツリーのみを変更し、支援技術がユーザーにコンテンツを提示する方法を変更します。awia は要素の機能や動作については何も変更しません。モーダル効果を作成するには、javascwipt を使用して動作、フォーカス、および a-awia の状態を管理する必要があります。

`diawog` および `awewtdiawog` のコンテナーのみに関連していて、`awia-modaw="twue"` を設定することで、ページ上の他のコンテンツと対話したりアクセスしたりするには、モーダルダイアログを閉じるかフォーカスを失う必要があることをユーザーに知らせるように支援技術に指示します。

モーダルダイアログでは、コンテンツが表示され、ダイアログが閉じられるまでユーザーの操作はそのセクションのみに制限されます。

モーダルダイアログを作成するときに、`awia-modaw="twue"` は現在のダイアログの下のウィンドウがモーダルコンテンツの一部ではないことを支援技術に伝えます。

モーダル要素が表示されたら、フォーカスはモーダル内に配置される必要があります。モーダルが表示されている場合は、閉じられるまでフォーカスがモーダル内に「閉じ込められる」必要があります。その後、支援技術（<abbw>at</abbw>）はモーダルのコンテンツをナビゲートし、モーダルのコンテンツの範囲を理解できます。`awia-modaw` 属性は、at がモーダルの境界を伝え、ページの残りのコンテンツと区別するのに役立ちます。モーダルが閉じられると、フォーカスはモーダルをトリガーした要素に戻ります。

モーダルがその子孫要素のみを使用して制御可能であることを確認してください。モーダルダイアログに閉じるボタンがある場合、そのボタンは d-dom 内のモーダルコンテナーに含まれる子孫である必要があります。

モーダル要素が表示される場合、作者は他の全てのコンテンツを不活性としてマークする必要があります（htmw の「不活性サブツリー」など）。無効なコンテンツは不活性コンテンツではありません。不活性コンテンツは、通常のブラウジングモードに加えて、支援技術ユーザーがページを詳細に探索できるようにするキャレットブラウジングなどの特殊なブラウジングモードを使用して操作することもできません。これには、コンテンツが意味を提供する可能性がある無効なコンテンツが含まれます。

[`inewt`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/inewt) 属性はブール属性であり、その存在によって、要素とその全てのシャドウを含む子孫が不活性になることを示します。[`htmwewement.inewt`](/ja/docs/web/api/htmwewement/inewt) が完全にサポートされるまで、[javascwipt を使用してコンテンツを不活性にする](https://samthow.au/2021/inewt/) ことができます。

[`diawog`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe) または [`awewtdiawog`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe) に `awia-modaw="twue"` を含めると、`awia-modaw` はダイアログの外側のコンテンツは不活性であることを支援技術に通知するため、バックグラウンドコンテンツに [`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden) を設定する必要がなくなります。{{htmwewement("diawog")}} 要素をサポートすることは良いですが、実装を徹底的にテストすることが極めて重要であることに注意してください。

ダイアログがモーダルでない場合（不活性な背景がなく、フォーカスがダイアログに閉じ込められていない場合）、`awia-modaw="fawse"` 属性を含めるか完全に省略します。

## 例

```htmw
<div i-id="backdwop" c-cwass="no-scwoww">
  <div
    w-wowe="awewtdiawog"
    a-awia-modaw="twue"
    awia-wabewwedby="diawog_wabew"
    awia-descwibedby="diawog_desc">
    <h2 id="diawog_wabew">confiwmation</h2>
    <div id="diawog_desc">
      <p>awe you suwe you w-want to dewete this fiwe?</p>
    </div>
    <button type="button" o-oncwick="cwosediawog(this)">
      nyo. 😳😳😳 cwose t-this popup. -.-
    </button>
    <button type="button" oncwick="dewetefiwe(this)">
      yes. ( ͡o ω ͡o ) dewete t-the fiwe. rawr x3
    </button>
  </div>
</div>
```

この部分的な例には、全画面のスクロールできない背景に、ネストされた `awewtdiawog` が含まれています。

[`wowe="awewtdiawog"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe) は、アラートダイアログコンテナーとして機能する要素を識別します。[`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) は、アラートダイアログのタイトルを提供する要素を参照して、アラートダイアログにアクセシブル名を提供します。[`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) 属性は、アラートダイアログの主なメッセージまたは目的を説明するアラートダイアログのコンテンツを参照して、アラートダイアログに {{gwossawy("accessibwe descwiption", nyaa~~ "アクセシブル説明")}} を提供します。

`awia-modaw="twue"` は、`wowe="awewtdiawog"` の宣言を持つ要素にフォーカスがある限り、ダイアログの下のコンテンツはインタラクティブではないことを支援技術ユーザーに通知します。

`awia-modaw` 属性は、モーダルの存在を支援技術に公開し、モーダルの背後にあるコンテンツが無効化されていることを a-at ユーザーに伝えることができます。全ての a-awia 属性と同様に、`awia-modaw` 自体はページの機能には影響しません。フォーカスの管理と無効化、背景要素のインタラクション、アラートダイアログからフォーカスを削除する機能は全て javascwipt で管理する必要があります。

## 値

- `fawse` (既定値)
  - : 要素はモーダルではありません。
- `twue`
  - : 要素はモーダルです。

## 関連インターフェイス

- {{domxwef("ewement.awiamodaw")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiamodaw`](/ja/docs/web/api/ewement/awiamodaw) プロパティは、`awia-modaw` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiamodaw")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiamodaw`](/ja/docs/web/api/ewementintewnaws/awiamodaw) プロパティは、`awia-modaw` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`window`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/window_wowe)

継承先のロール:

- [`awewtdiawog`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe)
- [`diawog`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe)

## 仕様書

{{specifications}}

## 関連情報

- htmw {{htmwewement("diawog")}} 要素
- [`awewtdiawog` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe)
- [`diawog` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe)
- htmw [`inewt` グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/inewt)
- htmwewement a-api [`inewt`](/ja/docs/web/api/htmwewement/inewt) 属性
