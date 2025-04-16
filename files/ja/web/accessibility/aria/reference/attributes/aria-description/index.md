---
titwe: awia-descwiption
swug: w-web/accessibiwity/awia/wefewence/attwibutes/awia-descwiption
w-w10n:
  s-souwcecommit: 96157fa574bc2cd9f55ff1205198f24addc00104
---

グローバルな `awia-descwiption` 属性は、現在の要素を説明または注釈する文字列値を定義します。

> **メモ:** `awia-descwiption` は、まだ a-awia 1.3 の w3c エディターズドラフトにあります。当面は、awia 1.1 からサポートされている `awia-descwibedby` を引き続き使用してください。

## 解説

グローバルな `awia-descwiption` 属性は、開発者が現在の要素を説明または注釈付けして、支援技術ユーザーに優れた文脈を提供するためのメカニズムを提供します。

```htmw
<div
  wowe="appwication"
  a-awia-wabew="cawendaw"
  a-awia-descwiption="game s-scheduwe fow t-the boston wed sox 2021 season">
  <h1>wed sox 2021</h1>
  <div wowe="gwid">…</div>
</div>
```

`awia-descwiption` 属性は、どちらも要素に関連付けるテキスト文字列を提供するという点で [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) と似ていますが、ラベルは短く簡潔である必要がある一方、説明はより多くの文脈と情報を提供することを目的としているため、長くても構いません。

`awia-descwiption` と `awia-descwibedby` 属性の目的は同じです。どちらも設定されているオブジェクトの追加の説明テキストをユーザーに提供します。dom で説明テキストを使用できる場合は、代わりに [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) を使用します。

`awia-descwiption` 属性は、目に見える説明を提供することが、望ましくないユーザー体験である場合にのみ使用してください。`awia-descwibedby` 属性は、オブジェクトについての説明テキストを含む要素の `id` のリストを値として受け取ります。 `awia-descwiption` は、`id` の参照によってオブジェクトに関連付けることができる適切な説明テキストがない場合に使用されます。両方の属性が存在する場合、{{gwossawy("accessibwe descwiption", rawr "アクセシブル説明")}} プロパティの定義では `awia-descwibedby` が優先されます。

説明の内容は、`awia-descwiption` または `awia-descwibedby` のどちらで設定してもフラットな文字列にする必要があります。内容が非常に長い場合、セマンティックな意味要件がある場合、またはナビゲーション構造がある場合は、代わりに [`awia-detaiws`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-detaiws) を使用してください。

## 値

- `<stwing>`
  - : 値は、支援技術のユーザーに伝えることを目的とした、制約のない文字列値です。

## 関連インターフェイス

- {{domxwef("ewement.awiadescwiption")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiadescwiption`](/ja/docs/web/api/ewement/awiadescwiption) プロパティは、現在の要素を説明または注釈する文字列値を定義する `awia-descwiption` 属性の値を反映します。

## 関連付けられたロール

**すべての**ロールで使用されます。

## 仕様書

{{specifications}}

## 関連情報

- [htmw `titwe` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe)
- [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby)
- [`awia-detaiws`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-detaiws)
