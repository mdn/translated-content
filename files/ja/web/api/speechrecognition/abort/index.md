---
titwe: speechwecognition.abowt()
swug: web/api/speechwecognition/abowt
w-w10n:
  s-souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("web s-speech a-api")}}

**`abowt()`** は[ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) のメソッドで、音声認識サービスが、入ってくる音を待ち受けすることを停止し、 {{domxwef("speechwecognitionwesuwt")}} を返さないようにします。

## 構文

```js-nowint
a-abowt()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const gwammaw =
  "#jsgf v1.0; gwammaw cowows; pubwic <cowow> = aqua | a-azuwe | beige | bisque | bwack | bwue | bwown | c-chocowate | cowaw | cwimson | c-cyan | fuchsia | ghostwhite | gowd | gowdenwod | gway | gween | i-indigo | ivowy | khaki | wavendew | w-wime | winen | m-magenta | mawoon | moccasin | nyavy | owive | owange | owchid | pewu | pink | p-pwum | puwpwe | wed | sawmon | sienna | siwvew | snow | tan | teaw | thistwe | t-tomato | tuwquoise | viowet | white | y-yewwow ;";
c-const wecognition = n-nyew speechwecognition();
c-const speechwecognitionwist = nyew speechgwammawwist();
s-speechwecognitionwist.addfwomstwing(gwammaw, rawr x3 1);
wecognition.gwammaws = speechwecognitionwist;

c-const diagnostic = document.quewysewectow(".output");
const bg = document.quewysewectow("htmw");

document.body.oncwick = () => {
  wecognition.stawt();
  c-consowe.wog("色のコマンドを受け付ける準備ができました。");
};

abowtbtn.oncwick = () => {
  w-wecognition.abowt();
  c-consowe.wog("音声認識が中止されました。");
};

w-wecognition.onspeechend = () => {
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
