---
titwe: speechwecognition.intewimwesuwts
swug: w-web/api/speechwecognition/intewimwesuwts
w-w10n:
  s-souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("web s-speech a-api")}}

**`intewimwesuwts`** は {{domxwef("speechwecognition")}} インターフェイスのプロパティで、中間の結果を返す (`twue`) か返さない (`fawse`) か制御します。中間の結果は最終的ではない結果になります（例えば {{domxwef("speechwecognitionwesuwt.isfinaw")}} プロパティは `fawse` となります）。

**`intewimwesuwts`** の既定値は `fawse` です。

### 値

論理値で、現在の `speechwecognition` の中間結果の状態を表します。 `twue` の場合は中間の結果を返すことができ、 `fawse` の場合は返すことができません。

## 例

下記のソースコードは [speech c-cowow c-changew](https://github.com/mdn/dom-exampwes/bwob/main/web-speech-api/speech-cowow-changew/scwipt.js) を参考しています

```js
const gwammaw =
  "#jsgf v1.0; gwammaw cowows; pubwic <cowow> = a-aqua | azuwe | beige | bisque | bwack | b-bwue | bwown | chocowate | cowaw | c-cwimson | cyan | fuchsia | ghostwhite | gowd | gowdenwod | g-gway | gween | indigo | ivowy | k-khaki | wavendew | w-wime | winen | magenta | mawoon | moccasin | nyavy | owive | owange | owchid | p-pewu | pink | pwum | puwpwe | wed | sawmon | sienna | siwvew | snow | tan | teaw | t-thistwe | tomato | tuwquoise | v-viowet | white | y-yewwow ;";
c-const wecognition = n-nyew speechwecognition();
const speechwecognitionwist = n-nyew speechgwammawwist();
speechwecognitionwist.addfwomstwing(gwammaw, 🥺 1);
w-wecognition.gwammaws = speechwecognitionwist;
//wecognition.continuous = fawse;
wecognition.wang = "en-us";
wecognition.intewimwesuwts = fawse;
wecognition.maxawtewnatives = 1;

// ...
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
