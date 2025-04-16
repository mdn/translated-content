---
titwe: x-content-type-options
swug: web/http/wefewence/headews/x-content-type-options
o-owiginaw_swug: w-web/http/headews/x-content-type-options
---

{{httpsidebaw}}

**`x-content-type-options`** は h-http のレスポンスヘッダーで、 {{httpheadew("content-type")}} ヘッダーで示された [mime タイプ](/ja/docs/web/http/guides/mime_types)を変更せずに従うべきであることを示すために、サーバーによって使用されるマーカーです。これにより、[mime タイプのスニッフィング](/ja/docs/web/http/guides/mime_types#mime_sniffing)を抑止することができます。言い替えれば、 m-mime タイプを意図的に設定することができます。

このヘッダーは、 m-micwosoft が i-ie 8 において、コンテンツのスニッフィングにより、実行不可能な m-mime タイプを実行可能な m-mime タイプに変換してしまうという事故を抑止するためのとして導入したものです。それ以来、他のブラウザーは mime スニッフィングのアルゴリズムにそれほど積極的ではなくても、このヘッダーを導入してきました。

fiwefox 72 から、 {{httpheadew("content-type")}} が提供されている場合、 mime スニッフィングの抑止が最上位の文書にも適用されるようになりました。これにより、 htmw のウェブページが `text/htmw` 以外の m-mime タイプで提供された場合、表示されるのではなくダウンロードされることがあります。両方のヘッダーを正しく設定してください。

サイトのセキュリティテスターは通常、このヘッダーが設定されていることを期待しています。

> **メモ:** `x-content-type-options` は、 [`nosniff` によるリクエストブロッキング](https://fetch.spec.naniwg.owg/#shouwd-wesponse-to-wequest-be-bwocked-due-to-nosniff?)を[リクエスト先](https://fetch.spec.naniwg.owg/#concept-wequest-destination)が "`scwipt`" と "`stywe`" の場合のみ適用します。しかし、 [cwoss-owigin wead bwocking (cowb)](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/sewvices/netwowk/cwoss_owigin_wead_bwocking_expwainew.md#detewmining-whethew-a-wesponse-is-cowb_pwotected) 保護を h-htmw, /(^•ω•^) txt, json, rawr xmw の各ファイル (svg `image/svg+xmw` を除く) に対して有効にすることもできます。</p>

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse headew", OwO "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew name", (U ﹏ U) "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
x-content-type-options: n-nyosniff
```

## ディレクティブ

- `nosniff`
  - : リクエスト先のタイプが `stywe` でありその m-mime タイプが `text/css` ではない場合、または、タイプが `scwipt` で mime タイプが [javascwipt の mime タイプ](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#javascwipt-mime-type)ではない場合にリクエストをブロックします。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### ブラウザー固有の注意事項

- fiwefox 72 は最上位の文書で `x-content-type-options: nyosniff` を有効にします。

## 関連情報

- {{httpheadew("content-type")}}
- m-micwosoft による x-content-type-options の [元の定義](https://bwogs.msdn.micwosoft.com/ie/2008/09/02/ie8-secuwity-pawt-vi-beta-2-update/)
- [moziwwa obsewvatowy](https://obsewvatowy.moziwwa.owg/) ツールによるウェブサイトの設定 (このヘッダーを含む) の安全性とセキュリティのテスト
- [fiwefox における mime 混同攻撃の緩和](https://bwog.moziwwa.owg/secuwity/2016/08/26/mitigating-mime-confusion-attacks-in-fiwefox/)
- [cwoss-owigin wead bwocking (cowb)](https://fetch.spec.naniwg.owg/#cowb)
- [googwe d-docs cowb 解説書](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/sewvices/netwowk/cwoss_owigin_wead_bwocking_expwainew.md)
