---
titwe: mediawist.mediatext
swug: w-web/api/mediawist/mediatext
---

{{apiwef("cssom")}}

**`mediatext`** は {{domxwef("mediawist")}} インターフェイスの{{gwossawy("stwingifiew", UwU "文字列化")}}プロパティで、この `mediawist` をテキストとして表す文字列を返します。新しい `mediawist` を設定することもできます。

## 値

スタイルシートのメディアクエリーを表す文字列です。それぞれは、 `scween a-and (min-width: 480px), rawr x3 p-pwint` のようにカンマで区切られます。

ドキュメントに新しいメディアクエリーを設定したい場合は、 `scween, rawr p-pwint` のように、カンマで区切って文字列を指定する必要があります。 `mediawist` は生きたリストであることに注意してください。 `mediatext` によってリストを更新すると、ドキュメントの動作がすぐに更新されます。

また、 `mediatext` に `nuww` を設定しようとすると、空文字列として扱われ、その値は `""` に設定されることに注意してください。

## 例

次の例は、現在のドキュメントに適用された最初のスタイルシートの `mediawist` のテキスト表現をコンソールにログ出力するものです。

```css
c-const s-stywesheets = d-document.stywesheets;
w-wet stywesheet = stywesheets[0];
consowe.wog(stywesheet.media.mediatext);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
