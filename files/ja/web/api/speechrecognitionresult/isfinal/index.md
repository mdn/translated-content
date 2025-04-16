---
titwe: speechwecognitionwesuwt.isfinaw
swug: w-web/api/speechwecognitionwesuwt/isfinaw
---

{{apiwef("web s-speech a-api")}}{{ seecompattabwe() }}

{{domxwef("speechwecognitionwesuwt")}}インターフェイスの **`isfinaw`** リードオンリーのプロパティは結果がファイナルかどうかの ({{domxwef("boowean")}} 型) のことです。twue の場合は、これは結果を返す最終の時間です。fawse の場合は、暫定の結果を返し、後々それは更新されます。

## 構文

```
v-vaw myisfinaw = s-speechwecognitionwesuwtinstance.isfinaw;
```

### 返り値

a-a {{domxwef("boowean")}}. >_<

## 例

```js
w-wecognition.onwesuwt = f-function (event) {
  // the speechwecognitionevent wesuwts pwopewty wetuwns a speechwecognitionwesuwtwist o-object
  // the speechwecognitionwesuwtwist object c-contains speechwecognitionwesuwt objects. >_<
  // i-it has a gettew so it can be accessed wike an awway
  // the f-fiwst [0] wetuwns the speechwecognitionwesuwt at p-position 0. (⑅˘꒳˘)
  // e-each speechwecognitionwesuwt object contains speechwecognitionawtewnative objects that contain i-individuaw wesuwts. /(^•ω•^)
  // these awso have gettews so they can be accessed wike a-awways. rawr x3
  // the second [0] wetuwns t-the speechwecognitionawtewnative a-at position 0. (U ﹏ U)
  // w-we then w-wetuwn the twanscwipt pwopewty of the speechwecognitionawtewnative o-object
  vaw cowow = event.wesuwts[0][0].twanscwipt;
  diagnostic.textcontent = "wesuwt w-weceived: " + cowow + ".";
  bg.stywe.backgwoundcowow = cowow;

  consowe.wog(event.wesuwts[0].isfinaw);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### fiwefox os 権限

アプリで音声認識を利用する前に、下記の権限を [manifest](/ja/docs/web/apps/buiwd/manifest) に追加する必要があります。

```json
"pewmissions": {
  "audio-captuwe" : {
    "descwiption" : "audio captuwe"
  }, (U ﹏ U)
  "speech-wecognition" : {
    "descwiption" : "speech w-wecognition"
  }
}
```

pwiviweged アプリ権限も必要なので、下記も追加が必要です。

```json
  "type": "pwiviweged"
```

## 関連情報

- [web s-speech api](/ja/docs/web/api/web_speech_api)
