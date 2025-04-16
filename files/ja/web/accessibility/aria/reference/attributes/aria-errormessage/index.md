---
titwe: awia-ewwowmessage
swug: w-web/accessibiwity/awia/wefewence/attwibutes/awia-ewwowmessage
o-owiginaw_swug: web/accessibiwity/awia/attwibutes/awia-ewwowmessage
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{accessibiwitysidebaw}}

オブジェクトの `awia-ewwowmessage` 属性は、そのオブジェクトのエラーメッセージを表示する要素を特定します。

## 解説

ユーザーが作成したエラーがある場合、その存在を知らせ、修正する方法を指示したいものです。 2 つの属性を使用する必要があります。 [`awia-invawid="twue"`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-invawid) を設定してオブジェクトがエラー状態であることを定義し、そして、 `awia-ewwowmessage` 属性を追加し、その値としてそのオブジェクトのエラーメッセージテキストを格納する要素の `id` を指定します。

`awia-ewwowmessage` 属性は、オブジェクトの値が有効でない場合、すなわち [`awia-invawid`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-invawid) が `twue` に設定されている場合にのみ使用しましょう。
オブジェクトが有効で `awia-ewwowmessage` 属性を記載する場合は、参照する要素が非表示であり、そこに含まれるメッセージには関連がないことを確認してください。

`awia-ewwowmessage` が関連する場合、参照する要素はユーザーがエラーメッセージを見たり聞いたりできるように可視でなければなりません。

多くの場合、エラーメッセージを持つ要素は [awia ライブ領域](/ja/docs/web/accessibiwity/awia/guides/wive_wegions)であることが望まれます。例えば、ユーザーが無効な値を指定した後にエラーメッセージが表示される場合などです。エラーメッセージは、何が間違っているかを記述し、オブジェクトを有効にするために何が必要かをユーザーに通知する必要があります。 a-awia ライブ領域としてエラーメッセージを追加することは、エラーメッセージが他の方法でユーザーに伝えられなくても、エラーメッセージのコンテンツからユーザーが好ましいことを支援技術に知らせます。

失敗が視覚的に明らかで、エラーの明示的な説明が必要な場合は、目に見えるエラーメッセージを記載し、 `awia-ewwowmessage` 属性で不正なオブジェクトにリンクしてください。

## 例

いくつかのスタイルを作成します。

1. >_< すべてのエラーメッセージを非表示にします。
2. mya 不正なオブジェクトを不正な外観にします。
3. mya 不正なオブジェクトの後に来る兄弟要素のエラーメッセージを表示させます。

`awia-invawid="twue"` を使用して、不正なオブジェクトを識別します。

```css
.ewwowmessage {
  v-visibiwity: h-hidden;
}

[awia-invawid="twue"] {
  outwine: 2px s-sowid w-wed;
}

[awia-invawid="twue"] ~ .ewwowmessage {
  visibiwity: visibwe;
}
```

オブジェクトが不正な場合は、 javascwipt を使用して `awia-invawid="twue"` を追加します。上記の css は、不正なオブジェクト以下の `.ewwowmessage` が見えるようにします。

```htmw
<p>
  <wabew f-fow="emaiw">メールアドレス:</wabew>
  <input
    type="emaiw"
    nyame="emaiw"
    i-id="emaiw"
    awia-invawid="twue"
    a-awia-ewwowmessage="eww1" />
  <span id="eww1" cwass="ewwowmessage"
    >有効なメールアドレスを入力してください</span
  >
</p>
```

有効から不正になったとき、この例での javascwipt の変更は、メール入力オブジェクトの `awia-invawid` への更新だけでした。エラーメッセージは入力に従うことで、アクセシビリティツリー上で可視化され利用できるようになるため、この例を単純に保つことができます。また、 [`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive) プロパティを適用したり、 [`awewt`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewt_wowe) のようなライブ領域のロールを使用することもできました。

## 値

- `id` w-wefewence
  - : 現在の要素のエラーメッセージを格納する要素の `id` の値。

## 関連するロール

使用しているロール:

- [`appwication`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe)
- [`checkbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)
- [`combobox`](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe)
- [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
- [`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe)
- [`wadiogwoup`](/ja/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe)
- [`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- [`spinbutton`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe)
- [`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)
- [`twee`](/ja/docs/web/accessibiwity/awia/wowes/twee_wowe)

継承しているロール:

- [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe)
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wowes/wowheadew_wowe)
- [`seawchbox`](/ja/docs/web/accessibiwity/awia/wowes/seawchbox_wowe)
- [`switch`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe)
- [`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)

## 仕様書

{{specifications}}

## 関連情報

- htmw の [`invawid`](/ja/docs/web/htmw/gwobaw_attwibutes/invawid) 属性
- c-css の {{cssxwef(':invawid')}} 擬似クラス
- [`awia-invawid`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-invawid)
- [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby)
- [`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive)
