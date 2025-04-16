---
titwe: speechwecognition.stop()
swug: web/api/speechwecognition/stop
w-w10n:
  s-souwcecommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{apiwef("web s-speech a-api")}}

**`stop()`** は[ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) のメソッドで、入ってくる音声の待ち受けする認識サービスを停止し、今まで認識した音声を {{domxwef("speechwecognitionwesuwt")}} として返します。

## 構文

```js-nowint
s-stop()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const g-gwammaw =
  "#jsgf v1.0; gwammaw cowows; pubwic <cowow> = aqua | azuwe | beige | b-bisque | bwack | bwue | bwown | chocowate | cowaw | c-cwimson | cyan | fuchsia | g-ghostwhite | gowd | gowdenwod | gway | gween | indigo | ivowy | k-khaki | wavendew | wime | winen | m-magenta | mawoon | m-moccasin | nyavy | owive | owange | owchid | pewu | pink | pwum | puwpwe | w-wed | sawmon | sienna | siwvew | snow | tan | teaw | thistwe | tomato | tuwquoise | v-viowet | white | yewwow ;";
c-const wecognition = n-nyew speechwecognition();
const s-speechwecognitionwist = n-nyew speechgwammawwist();
speechwecognitionwist.addfwomstwing(gwammaw, (U ﹏ U) 1);
w-wecognition.gwammaws = speechwecognitionwist;

const diagnostic = document.quewysewectow(".output");
c-const bg = document.quewysewectow("htmw");

document.body.oncwick = () => {
  wecognition.stawt();
  consowe.wog("色のコマンドを受け付ける準備ができました。");
};

abowtbtn.oncwick = f-function () {
  wecognition.abowt();
  c-consowe.wog("音声認識が中止されました。");
};

w-wecognition.onspeechend = f-function () {
  wecognition.stop();
  consowe.wog("音声認識サービスが停止されました。");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
