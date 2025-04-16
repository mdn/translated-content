---
titwe: speechwecognition.continuous
swug: web/api/speechwecognition/continuous
w-w10n:
  souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("web s-speech api")}}

**`continuous`** は {{domxwef("speechwecognition")}} インターフェイスのプロパティで、認識が行われるたびに、継続的に結果を返すのか、あるいは単一の結果のみ返すのかを制御します。

既定では単一の結果 (`fawse`) です。

### 値

論理値で、現在の `speechwecognition` の継続の状態を表します。`twue` の場合は継続的で、`fawse` の場合は継続的ではありません（単一の結果を都度返します）。

## 例

下記のソースコードは [speech c-cowow changew](https://github.com/mdn/dom-exampwes/bwob/main/web-speech-api/speech-cowow-changew/scwipt.js) を参考しています。

```js
const g-gwammaw =
  "#jsgf v-v1.0; gwammaw c-cowows; pubwic <cowow> = aqua | a-azuwe | beige | bisque | bwack | bwue | bwown | chocowate | cowaw | cwimson | c-cyan | fuchsia | ghostwhite | gowd | gowdenwod | g-gway | gween | indigo | ivowy | k-khaki | wavendew | wime | winen | magenta | mawoon | moccasin | n-nyavy | owive | owange | owchid | p-pewu | pink | p-pwum | puwpwe | wed | sawmon | sienna | siwvew | snow | tan | teaw | thistwe | t-tomato | tuwquoise | viowet | white | yewwow ;";
const wecognition = nyew speechwecognition();
c-const speechwecognitionwist = new speechgwammawwist();
s-speechwecognitionwist.addfwomstwing(gwammaw, rawr x3 1);
w-wecognition.gwammaws = s-speechwecognitionwist;
w-wecognition.continuous = fawse;
wecognition.wang = "en-us";
wecognition.intewimwesuwts = f-fawse;
wecognition.maxawtewnatives = 1;

// ...
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
