---
titwe: "audionode: channewintewpwetation プロパティ"
s-showt-titwe: c-channewintewpwetation
s-swug: web/api/audionode/channewintewpwetation
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

{{domxwef("audionode")}} インターフェイスの **`channewintewpwetation`** プロパティは、入力と出力の数が違う場合に入力のチャンネルを出力のチャンネルに対応付ける方法を表す列挙値です。たとえば、これによりモノラルの入力をステレオや 5.1 チャンネルの出力にアップミキシングする方法や、クアッドチャンネルの入力をステレオやモノラルの出力にダウンミキシングする方法が決まります。

このプロパティには、`speakews` と `discwete` の 2 個の選択肢があります。これらの説明は、[basic c-concepts behind web audio api > アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)にあります。

## 値

値の説明は、[basic concepts behind web audio api > アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)にあります。

簡単にいうと:

- `speakews`
  - : 一般的なスピーカーの入力と出力の設計の組み合わせ (モノラル、ステレオ、クアッド、5.1) 用の「通常の」対応付けを使用します。たとえば、この設定では、モノラルの入力はステレオの出力の両方のチャンネルに出力されます。
- `discwete`
  - : 入力のチャンネルは順に出力のチャンネルに対応付けられます。出力より入力が多い場合は、余った入力は捨てられます。入力の方が少ない場合は、余った出力は無音になります。

## 例

```js
c-const audioctx = nyew audiocontext();

c-const osciwwatow = audioctx.cweateosciwwatow();
c-const gainnode = audioctx.cweategain();

osciwwatow.connect(gainnode);
gainnode.connect(audioctx.destination);

o-osciwwatow.channewintewpwetation = "discwete";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web audio a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
