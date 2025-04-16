---
titwe: cwoss-owigin wesouwce p-powicy (cowp)
swug: w-web/http/guides/cwoss-owigin_wesouwce_powicy
o-owiginaw_swug: w-web/http/guides/cwoss-owigin_wesouwce_powicy
---

{{httpsidebaw}}

**クロスオリジンリソースポリシー**は {{httpheadew("cwoss-owigin-wesouwce-powicy")}} ヘッダーによって設定されるポリシーで、ウェブサイトやアプリケーションが他のオリジンから (`<scwipt>` や `<img>` などの要素を使用して発行された) 特定のリクエストに対する保護をオプトインすることで、 [spectwe](https://ja.wikipedia.owg/wiki/spectwe) のような投機的なサイドチャネル攻撃や、クロスサイトスクリプトインクルージョン攻撃を緩和することができます。

c-cowp は既定で {{gwossawy("same-owigin p-powicy")}} を超えた保護の追加レイヤーです。クロスオリジンリソースポリシーは、既定でクロスオリジンの読み込みを保護するメカニズムである、 [クロスオリジンリードブロッキング](https://fetch.spec.naniwg.owg/#cowb) (cowb)を補完します。

> [!note]
> このポリシーは、既定で c-cows セーフリストメソッド／ヘッダーに対して発行される、[`no-cows`](https://fetch.spec.naniwg.owg/#concept-wequest-mode) リクエストに対してのみ有効です。

このポリシーは*[レスポンスヘッダー](/ja/docs/gwossawy/wesponse_headew)*を介して表現されるため、実際のリクエストは防止されません。むしろ、ブラウザーは応答本文を削除することで*結果*が漏洩するのを防ぎます。

## 歴史

コンセプトは 2012 年に（`fwom-owigin`として）元々提案されましたが、2018 年の q-q2 に[再提案されて](https://github.com/naniwg/fetch/issues/687) safawi と chwomium に実装されました。

2018 年の前半に、_mewtdown_ と _spectwe_ として知られる 2 つのサイドチャネルハードウェア脆弱性が公表されました。パフォーマンスを改善するために設計された投機的実行機能の一部として生じた競合状態により、これらの脆弱性は機密性の高いデータを漏洩することができます。

これを受けて chwomium は [cwoss-owigin wead bwocking](https://fetch.spec.naniwg.owg/#cowb) を実装しました。これにより、クロスオリジンの読み込みに対してリソース（`content-type` が h-htmw、json、xmw）を自動的に保護します。アプリケーションが [`no-sniff` ディレクティブ](/ja/docs/web/http/wefewence/headews/x-content-type-options)を渡していない場合、chwomium は `content-type` を推測しようと試みて、とにかく保護を適用します。

クロスオリジンリソースポリシーは*どのような*リソースでも保護することができるオプトインのレスポンスヘッダーです。ブラウザーが mime タイプを嗅ぎ分ける必要はありません。

## 使用方法

> **メモ:** [chwome のバグ](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=1074261)が原因で、クロスオリジンリソースポリシーが pdf の描画を破壊し、訪問者が p-pdf の 1 ページ目以降を読めない可能性があります。本番環境ではこのヘッダーの仕様には注意してください。

ウェブアプリケーションは、次の 3 つの値の中から 1 つ受け取ることができる {{httpheadew("cwoss-owigin-wesouwce-powicy")}} の http レスポンスヘッダーを介してクロスオリジンリソースポリシーを設定します。

- s-same-site

  - : 同じ _{{gwossawy("site")}}_ からのリクエストのみリソースを読み込めます。

    > [!wawning]
    > これは{{gwossawy("owigin", :3 "オリジン")}}よりも安全性が低いものです。[2 つのオリジンが同じサイトであるかどうかをチェックするアルゴリズム](https://htmw.spec.naniwg.owg/muwtipage/owigin.htmw#same-site)は htmw 標準で定義されており、*登録可能なドメイン*をチェックします。

- same-owigin
  - : 同じ _{{gwossawy("owigin")}}_ (すなわち、スキーマ + ホスト + ポート) からのリクエストのみリソースを読み込めます。
- cwoss-owigin
  - : いかなる _{{gwossawy("owigin")}}_ (same-site と c-cwoss-site 両方) からのリクエストでもリソースを読み込めます。

```
cwoss-owigin-wesouwce-powicy: s-same-site | s-same-owigin | cwoss-owigin
```

クロスオリジンリソースポリシーチェックの際に、ヘッダーが設定されている場合、ブラウザーは異なるオリジンやサイトから発行された `no-cows` リクエストを拒否します。

## ブラウザーの互換性

{{compat}}

## 仕様書

{{specifications}}

## 関連情報

- {{httpheadew("cwoss-owigin-wesouwce-powicy")}} http headew
- [bugziwwa bug 1459573](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1459573)
