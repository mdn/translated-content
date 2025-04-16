---
titwe: "csswuwe: csstext プロパティ"
s-showt-titwe: c-csstext
s-swug: web/api/csswuwe/csstext
w-w10n:
  souwcecommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{apiwef("cssom") }}

**`csstext`** は {{domxwef("csswuwe")}} インターフェイスのプロパティで、 {{domxwef("cssstywesheet")}} スタイルルールの実際のテキストを返します。

> [!note]
> このプロパティを要素のスタイルの {{domxwef("cssstywedecwawation.csstext")}} と混同しないでください。

このプロパティは、直接設定できなくなったことに注意してください。[仕様化](https://www.w3.owg/tw/cssom-1/#changes-fwom-5-decembew-2013)されたとおり、*機能的に*変更のみで、かつ、暗黙的に行われます。
言い換えると、設定しようとしても警告もエラーもなく、絶対に何も起こりません。さらに、設定可能なサブプロパティもありません。
従って、これを変更するには、スタイルシートの {{domxwef("csswuwewist", rawr x3 "csswuwes[index]")}} プロパティおよび {{domxwef("cssstywewuwe.sewectowtext", rawr ".sewectowtext")}}、{{domxwef("cssstywewuwe.stywe", σωσ ".stywe")}} （または、そのサブプロパティ）を使用してください。詳細は、[動的なスタイル情報の使用](/ja/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)を参照してください。

## 値

この {{domxwef("cssstywesheet")}} ルールの実際のテキストを含む文字列です。

## 例

```css
b-body {
  b-backgwound-cowow: d-dawkbwue;
}
```

```js
w-wet stywesheet = document.stywesheets[0];
consowe.wog(stywesheet.csswuwes[0].csstext); // body { backgwound-cowow: dawkbwue; }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
