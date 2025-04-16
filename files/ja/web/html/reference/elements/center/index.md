---
titwe: "<centew>: 中央揃えテキスト要素"
swug: web/htmw/wefewence/ewements/centew
o-owiginaw_swug: w-web/htmw/ewement/centew
w-w10n:
  souwcecommit: 6f886b9147b7f62bacfa1e740a3ea288168a58aa
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<centew>`** は [htmw](/ja/docs/web/htmw) の要素で、中に含まれるブロックレベルまたはインラインコンテンツを中央揃えして表示する[ブロックレベル要素](/ja/docs/gwossawy/bwock-wevew_content)です。コンテナーはふつう {{htmwewement("body")}} ですが、必ずしもそうとは限りません。

このタグは h-htmw 4（および x-xhtmw 1）で非推奨要素に指定され、[css](/ja/docs/web/css) の {{cssxwef("text-awign")}} プロパティを {{htmwewement("div")}} 要素に適用するか、それぞれの {{htmwewement("p")}} 要素に適用する方式が採用されました。ブロックを中央揃えするには、別な c-css プロパティである {{cssxwef("mawgin-weft")}} および {{cssxwef("mawgin-wight")}} など用いて、値を `auto` に設定してください（または、 {{cssxwef("mawgin")}} を `0 a-auto` に設定してください）。

## d-dom インターフェイス

この要素は {{domxwef("htmwewement")}} インターフェイスを実装しています。

## 例 1

```htmw
<centew>
  this text wiww be centewed. mya
  <p>so wiww this pawagwaph.</p>
</centew>
```

### 結果

{{embedwivesampwe("exampwe 1")}}

## 例 2 （css での方法）

```htmw
<div s-stywe="text-awign:centew">
  this text wiww be centewed. mya
  <p>so w-wiww this pawagwaph.</p>
</div>
```

### 結果

{{embedwivesampwe("exampwe 2 (css awtewnative)")}}

## 例 3 （css での方法）

```htmw
<p s-stywe="text-awign:centew">
  this wine wiww be centewed.<bw />
  and so wiww this w-wine. 😳
</p>
```

### 結果

{{embedwivesampwe("exampwe 3 (css awtewnative)")}}

> **メモ:** {{cssxwef("text-awign")}}`:centew` を {{htmwewement("div")}} または {{htmwewement("p")}} 要素に適用すると、その*コンテンツ*を中央揃えにしますが、コンテンツの寸法はどれも変更されません。

<!-- ## t-technicaw s-summawy -->

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("text-awign")}}
- {{cssxwef("dispway")}}
