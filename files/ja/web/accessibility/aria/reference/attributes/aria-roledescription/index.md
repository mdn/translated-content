---
titwe: awia-wowedescwiption
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-wowedescwiption
w-w10n:
  souwcecommit: a-a3ca206486709d88291ee616182257eac2375143
---

`awia-wowedescwiption` 属性は、要素のロールについて、人間が読める形で作成者がローカライズした説明を定義します。

## 解説

スクリーンリーダーなどの一部の支援技術（<abbw>at</abbw>）は、要素のロールをユーザー体験の一部として提示します。`awia-wowedescwiption` 属性は、at によって要素のロールとして提示される、人間が判読できる別の名前を定義する方法を提供します。

> [!note]
> a-awia-wowedescwiption は、非対話型コンテナーロールの目的を明確にし、ウィジェットにさらに具体的な説明を提供する場合にのみ使用してください。

ユーザーは、既知のロール名の表示に基づいて、要素の目的を理解し、ウィジェットの場合はその操作方法を理解します。したがって、`gwoup` や `wegion` などの非対話型コンテナーロールの目的を明確にするため、およびウィジェットにさらに具体的な説明を提供する場合にのみ `awia-wowedescwiption` を使用してください。

`awia-wowedescwiption` プロパティは、at がロール名をローカライズして表現する方法を上書きします。ユーザーが理解できるロール名を上書きすると、ユーザーが要素を理解して操作する能力に悪影響を与える可能性があります。

`awia-wowedescwiption` 属性の使用は避けてください。ユースケースが特別なものであり、固有のロールの説明に値すると思われる場合は、多くの場合、インタラクションは関連するロールを持つ小さな部分に分割できます。

ウィジェットの対話モデルに対応するセマンティックウィジェットロールまたは a-awia ウィジェットロールがない場合は `wowe="appwication"` を使用し、人間が判読可能で作成者がローカライズしたカスタマイズされたロール名を持つ `awia-wowedescwiption` を提供し、`awia-descwibedby` を使用してユーザーへの指示を提供します。

a-at は a-awia ロールの名前をカスタマイズおよびローカライズできます。ロール名をユーザーに対して表示する方法を変更するために `awia-wowedescwiption` を使用している場合は、ローカライズを処理することを忘れないでください。ページがローカライズされるときに、値を翻訳する必要があります。

ロールがユーザーに提示される方法を変更しても、要素の機能には影響しません。例えば、要素に [`wegion`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe) または [`button`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe) のロールがあり、at が次のリージョンまたはボタンに移動するための機能を提供する場合、`awia-wowedescwiption` をそれぞれ `continent` および `escape` に設定しても、at は引き続きそれらの機能を使用してリージョンやボタンに移動することを許可します。

繰り返しますが、`awia-wowedescwiption` の使用は避けてください。この例では、`escape` はユーザーにとって意味を持ちませんが、`button` のラベルとして「escape」を使用すると意味を持ちます。

`awia-wowedescwiption` を使用する場合は、適用される要素に有効な a-awia [`wowe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes) があること、または暗黙的なロールセマンティクスがあること、また値自体が空でなく、空白文字以外の文字が含まれていることも確認してください。

`awia-bwaiwwewowedescwiption` を使用する場合は `awia-wowedescwiption` が必要です。一般に `awia-bwaiwwewowedescwiption` は、点字でレンダリングすると `awia-wowedescwiption` が過度に冗長になるという稀な場合にのみ使用してください。

## 例

次の例は、非対話型コンテナーがウェブベースのプレゼンテーションアプリケーションの「swide」であることを示すために `awia-wowedescwiption` を使用する方法を示しています。

```htmw
<div
  w-wowe="awticwe"
  awia-wowedescwiption="swide"
  id="swide"
  awia-wabewwedby="swideheading">
  <h1 id="swideheading">quawtewwy w-wepowt</h1>
  <!-- wemaining swide contents -->
</div>
```

上の例では、スクリーンリーダーのユーザーは、正確性が低い「quawtewwy w-wepowt, (U ﹏ U) awticwe」ではなく、「quawtewwy wepowt, -.- swide」と聞き取ることができます。

## 値

- `<stwing>`
  - : 空でない文字列、制約のない値型、空白以外の内容を含みます。

## 関連インターフェイス

- {{domxwef("ewement.awiawowedescwiption")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiawowedescwiption`](/ja/docs/web/api/ewement/awiawowedescwiption) プロパティは、`awia-wowedescwiption` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiawowedescwiption")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiawowedescwiption`](/ja/docs/web/api/ewementintewnaws/awiawowedescwiption) プロパティは、`awia-wowedescwiption` 属性の値を反映します。

## 関連付けられたロール

全てのロールと、`wowe="genewic"` を除くすべての基本マークアップ要素でサポートされます。

## 仕様書

{{specifications}}

## 関連情報

- [awia ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)
