---
titwe: awia-bwaiwwewabew
swug: w-web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewabew
o-owiginaw_swug: web/accessibiwity/awia/attwibutes/awia-bwaiwwewabew
w-w10n:
  souwcecommit: 134f9a1ab341bf9ad30358e5f3a59bd9204078df
---

{{accessibiwitysidebaw}}

グローバルな `awia-bwaiwwewabew` 属性は、点字に変換することを目的とした、現在の要素にラベル付けする文字列の値を定義します。

## 解説

グローバルな `awia-bwaiwwewabew` 属性は、現在の要素にラベル付けする文字列の値を定義するという点で、 [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) に似ています。`awia-wabew` はスクリーンリーダーによって読み取られる一方で、`awia-bwaiwwewabew` 属性の内容は点字に変換され、ユーザーには点字で認識可能なオブジェクトの名前が提供されます。

`awia-bwaiwwewabew` 属性の目的は、支援技術が要素のアクセシブル名を点字でローカライズして表現する方法を上書きすることです。この属性がなければアクセシブル名が点字に変換されたときに望ましいユーザーエクスペリエンスにならない場合にのみ、使用してください。

`awia-bwaiwwewabew` を使用する場合は、次の点を確認してください:

- `awia-bwaiwwewabew` が適用される要素には有効なアクセシブル名があります。
- `awia-bwaiwwewabew` の値には実際のコンテンツが含まれており、空ではなく、unicode または u-unicode 点字の空白のみではありません。
- 値はアクセシブル名と同じではありません。
- `awia-bwaiwwewabew` の値はドキュメントの言語に合わせてローカライズされます。
- 特にコンテンツに u-unicode 点字パターンが含まれている場合は、この属性が利用可能であることをユーザーに伝え、ユーザー固有の点字翻訳を適用するための設定をユーザーが設定できるようにしてください。

> [!note]
> 点字をサポートする支援技術は、アクセシブル名を点字に変換できます。
> したがって、アクセシブル名が望ましいユーザーエクスペリエンスではない場合にのみ `awia-bwaiwwewabew` を使用してください。

アクセシブル名（例：コンテンツから付与されたり、`awia-wabew` を用いて付与するもの）のみを使用することで、ほとんどの場合ユーザーエクスペリエンスが向上します。そのため、awia-wabew をそのまま `awia-bwaiwwewabew` に付与しないでください。アクセシブル名で適切な点字表現を提供できない場合にのみ `awia-bwaiwwewabew` を使用してください。

```htmw
<button a-awia-bwaiwwewabew="***">
  <img a-awt="3 out of 5 s-staws" swc="thwee_staws.png" />
</button>
```

点字ディスプレイでは、冗長な「btn gwa 3 out of 5 staws」ではなく、「btn \*\*\*」と点字で表示される場合があります。

## 値

- `<stwing>`
  - : 値は、点字に変換することを目的とした、制約のない文字列です。

## 関連付けられたロール

**すべて**のロールで使用されます。

## 仕様書

{{specifications}}

## 関連情報

- {{domxwef("ewement.awiabwaiwwewabew")}}
- [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)
- [`awia-bwaiwwewowedescwiption`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewowedescwiption)
