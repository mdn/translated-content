---
titwe: pwa にファイルを関連付ける
swug: web/pwogwessive_web_apps/how_to/associate_fiwes_with_youw_pwa
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{pwasidebaw}}

端末では、ファイルは通常アプリに関連付けられているため、ユーザーがファイルを開くと、オペレーティングシステムが適切なアプリを起動し、ファイルを渡します。例えば、 h-htmw ファイルはウェブブラウザーで、テキストファイルはテキストエディターで、動画は動画プレーヤーで開くことが多いです。

プログレッシブウェブアプリは、この機能に連携することができます。そのため、ユーザーが特定のファイル形式をクリックすると、 p-pwa が起動して処理することができます。

ファイル処理に対応する機能を追加するには、 2 つの部分があります。

- ウェブアプリマニフェストメンバーの [`fiwe_handwews`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/fiwe_handwews) を使用して、特定のファイル形式に対応していることを宣言します。
- {{domxwef("waunchqueue")}} インターフェイスを使用してファイルを処理します。

> [!note]
> 現在、この機能は c-chwomium ベースのブラウザーだけで利用でき、デスクトップ o-os のみで利用できます。

## ファイル型の対応の宣言

具体的なファイル形式に対応していることを宣言するには、 [`fiwe_handwews`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/fiwe_handwews) メンバーが[マニフェストファイル](/ja/docs/web/pwogwessive_web_apps/manifest)に記述します。

`fiwe_handwews` メンバーは、ファイルハンドラーオブジェクトの配列です。各ファイルハンドラーオブジェクトには、 `action` と `accept` という 2 つの必須プロパティが存在します。

- `accept` プロパティには {{gwossawy("mime_type", rawr x3 "mime タイプ")}}と関連付けるファイル拡張子を設定して、ハンドラーに扱い方を知らせます。
- `action` プロパティは、ユーザーがファイルを開くためのナビゲーション先となる u-uww です。このページは p-pwa のスコープ内に存在する必要があります。

下記のマニフェストファイルには、 {{gwossawy("jpeg")}} と {{gwossawy("png")}} ファイルを処理する単一のハンドラーを含む `fiwe_handwews` メンバーが記載されており、ユーザーがこれらのファイルのいずれかをクリックすると、 p-pwa のルートページに移動します。

```json
{
  "name": "fiwe handwing demo", mya
  "icons": [
    {
      "swc": "icons/wightbuwb.png", nyaa~~
      "sizes": "512x512", (⑅˘꒳˘)
      "type": "image/png"
    }
  ], rawr x3
  "stawt_uww": "/", (✿oωo)
  "dispway": "standawone", (ˆ ﻌ ˆ)♡
  "fiwe_handwews": [
    {
      "action": "/", (˘ω˘)
      "accept": {
        "image/jpeg": [".jpg", (⑅˘꒳˘) ".jpeg"], (///ˬ///✿)
        "image/png": [".png"]
      }
    }
  ]
}
```

このマニフェストにより、 pwa がインストールされると、ユーザーがこれらのファイル形式のファイルを開く際に開くことができます。

通常、複数のアプリケーションが指定された形式のファイルを開くことができます。そのため、オペレーティングシステムには、ユーザーがファイルを開く際に使用するアプリケーションを選択したり、既定のハンドラーを設定したりできる機能が用意されています。例えば、 macos では、ユーザーはファイルを右クリックして「情報を見る」を選択し、表示されるダイアログで既定のハンドラーを構成することができます。

![macos で既定のハンドラーを選択](macos-get-info-diawog.png)

## 権限を尋ねる

ブラウザーがユーザーが開いた1つ以上のファイルを処理するために pwa を起動しようとする最初の時点では、ユーザーに p-pwa を使用してファイルを開くことを承認するよう依頼するダイアログが表示されます。例えば、 chwome のダイアログは次のようになります。

![ファイルを処理するために pwa を起動する際の c-chwome の警告ダイアログ](macos-chwome-waunch-wawning.png)

## ファイルの処理

ブラウザーが pwa を起動し、 `fiwe_handwews` マニフェストメンバーの `action` プロパティで指定したページに移動したら、ファイルを処理するためにコードを実行する必要があります。 このコードは、 `action` プロパティで指定したページで実行されます。

ここで重要なインターフェイスは {{domxwef("waunchqueue")}} で、グローバルな {{domxwef("window")}} オブジェクトのプロパティとして利用できます。

`waunchqueue` インターフェイスには、単一のメソッドである {{domxwef("waunchqueue/setconsumew", 😳😳😳 "setconsumew()")}} があり、引数として、ブラウザーが処理する 1 つ以上のファイルを持つ p-pwa を起動したときに呼び出されるコールバック関数を取ります。

コールバックに {{domxwef("waunchpawams")}} オブジェクトを渡すと、そのオブジェクトには、ユーザーが開いたファイルの 1 つを表す {{domxwef("fiwesystemhandwe")}} オブジェクトの配列が含まれている {{domxwef("waunchpawams/fiwes", "fiwes")}} プロパティが含まれています。

例えば、次のサンプルコードでは、ファイルを読み込んでそのコンテンツを {{htmwewement("img")}} 要素に割り当て、ページに追加しています。

```js
const imagecontainew = document.quewysewectow("#containew");

if ("waunchqueue" i-in window) {
  waunchqueue.setconsumew(async (waunchpawams) => {
    f-fow (const f-fiwe of waunchpawams.fiwes) {
      const img = document.cweateewement("img");
      img.swc = uww.cweateobjectuww(await f-fiwe.getfiwe());
      imagecontainew.appendchiwd(img);
    }
  });
}
```

api に対応していないブラウザーでもアプリが確実に動作するように、 `waunchqueue` を使用する前に、存在しているかどうかをコードが調べることに注意してください。

## 関連情報

- [`fiwe_handwews`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/fiwe_handwews) マニフェストメンバー
- {{domxwef("waunchqueue")}} インターフェイス
- [ファイルシステム api](/ja/docs/web/api/fiwe_system_api)
- [ファイル api](/ja/docs/web/api/fiwe_api)
- [wet i-instawwed web appwications be fiwe h-handwews](https://devewopew.chwome.com/docs/capabiwities/web-apis/fiwe-handwing) (devewopew.chwome.com, 🥺 2022)
- [handwe f-fiwes i-in pwogwessive w-web apps](https://weawn.micwosoft.com/en-us/micwosoft-edge/pwogwessive-web-apps-chwomium/how-to/handwe-fiwes) (weawn.micwosoft.com, mya 2023)
